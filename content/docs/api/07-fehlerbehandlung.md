---
title: "Fehlerbehandlung"
description: ""
weight: "7"
tags:
  - "api"
  - "fehler"
  - "http-status"
  - "debugging"
---


# Fehlerbehandlung

Dieses Kapitel erklärt HTTP-Status-Codes und wie du Fehler korrekt behandelst.

## HTTP-Status-Codes

### Erfolgreiche Antworten (2xx)

| Code | Name | Bedeutung | Verwendung |
|------|------|-----------|------------|
| `200` | OK | Anfrage erfolgreich | GET, PUT, PATCH |
| `201` | Created | Objekt erstellt | POST |
| `204` | No Content | Gelöscht (keine Daten) | DELETE |

### Client-Fehler (4xx)

| Code | Name | Bedeutung |
|------|------|-----------|
| `400` | Bad Request | Ungültige Anfrage/Validierungsfehler |
| `401` | Unauthorized | Authentifizierung erforderlich/fehlgeschlagen |
| `403` | Forbidden | Keine Berechtigung |
| `404` | Not Found | Objekt nicht gefunden |
| `405` | Method Not Allowed | HTTP-Methode nicht erlaubt |
| `409` | Conflict | Konflikt (z.B. Duplikat) |

### Server-Fehler (5xx)

| Code | Name | Bedeutung |
|------|------|-----------|
| `500` | Internal Server Error | Server-Fehler |
| `502` | Bad Gateway | Upstream-Server-Problem |
| `503` | Service Unavailable | Service überlastet |

## Fehler-Response-Format

### Validierungsfehler (400)

```json
{
  "email": ["Gültige E-Mail-Adresse erforderlich."],
  "vorname": ["Dieses Feld darf nicht leer sein."],
  "start_date": ["Datum hat falsches Format."]
}
```

Felder mit Fehlern werden als Keys aufgelistet, Fehlermeldungen als Array.

### Authentifizierungsfehler (401)

```json
{
  "detail": "Authentication credentials were not provided."
}
```

Oder bei ungültigem Token:

```json
{
  "detail": "Invalid token."
}
```

### Berechtigungsfehler (403)

```json
{
  "detail": "You do not have permission to perform this action."
}
```

### Nicht gefunden (404)

```json
{
  "detail": "Not found."
}
```

## Fehlerbehandlung in Python

### Einfache Prüfung

```python
response = session.get(f"{BASE_URL}/organisation/mitarbeitende/999")

if response.status_code == 200:
    mitarbeiter = response.json()
elif response.status_code == 404:
    print("Mitarbeiter nicht gefunden")
elif response.status_code == 401:
    print("Authentifizierung fehlgeschlagen")
else:
    print(f"Unerwarteter Fehler: {response.status_code}")
```

### Mit Exception-Handling

```python
try:
    response = session.get(f"{BASE_URL}/organisation/mitarbeitende/999")
    response.raise_for_status()  # Wirft Exception bei 4xx/5xx
    mitarbeiter = response.json()

except requests.exceptions.HTTPError as e:
    if e.response.status_code == 404:
        print("Nicht gefunden")
    elif e.response.status_code == 401:
        print("Bitte Token prüfen")
    else:
        print(f"HTTP-Fehler: {e}")

except requests.exceptions.ConnectionError:
    print("Verbindung zum Server fehlgeschlagen")

except requests.exceptions.Timeout:
    print("Timeout - Server antwortet nicht")
```

### Validierungsfehler auswerten

```python
response = session.post(
    f"{BASE_URL}/organisation/mitarbeitende",
    json={"vorname": "", "email": "ungültig"}
)

if response.status_code == 400:
    fehler = response.json()

    for feld, meldungen in fehler.items():
        for meldung in meldungen:
            print(f"Feld '{feld}': {meldung}")
```

**Ausgabe:**

```
Feld 'vorname': Dieses Feld darf nicht leer sein.
Feld 'email': Gültige E-Mail-Adresse erforderlich.
```

## Häufige Fehler und Lösungen

### 401 Unauthorized

**Problem:** Token fehlt oder ist ungültig

**Lösungen:**

```python
# 1. Header prüfen
print(session.headers)  # Authorization vorhanden?

# 2. Token-Format prüfen (mit Leerzeichen nach "Token")
session.headers["Authorization"] = f"Token {API_TOKEN}"  # Richtig
session.headers["Authorization"] = f"Token{API_TOKEN}"   # Falsch!

# 3. Token in ELIZA prüfen - noch gültig?
```

### 403 Forbidden

**Problem:** Keine Berechtigung für diese Aktion

**Lösungen:**

- Prüfe, ob dein Benutzer die nötigen Rechte hat
- Kontaktiere den ELIZA-Administrator
- Prüfe, ob du die richtige HTTP-Methode verwendest

### 404 Not Found

**Problem:** Objekt existiert nicht

**Lösungen:**

```python
# 1. ID prüfen
response = session.get(f"{BASE_URL}/organisation/mitarbeitende/123")

# 2. Objekt suchen statt direkt zugreifen
response = session.get(f"{BASE_URL}/organisation/mitarbeitende?search=hugo")
if response.json():
    mitarbeiter = response.json()[0]
```

### 400 Bad Request

**Problem:** Ungültige Daten gesendet

**Lösungen:**

```python
# Fehlermeldungen auslesen
if response.status_code == 400:
    print("Validierungsfehler:")
    for feld, fehler in response.json().items():
        print(f"  {feld}: {', '.join(fehler)}")
```

### 500 Internal Server Error

**Problem:** Server-seitiger Fehler

**Lösungen:**

- Warte einen Moment und versuche es erneut
- Prüfe die Anfrage auf ungewöhnliche Daten
- Kontaktiere den Support mit Request-Details

## Retry-Logik

Für robuste Integrationen:

```python
import time
from requests.exceptions import RequestException

def api_request_mit_retry(methode, url, max_versuche=3, **kwargs):
    """API-Anfrage mit automatischem Retry bei Fehlern."""

    for versuch in range(max_versuche):
        try:
            response = methode(url, **kwargs)

            # Bei Server-Fehlern retry
            if response.status_code >= 500:
                if versuch < max_versuche - 1:
                    time.sleep(2 ** versuch)  # Exponential backoff
                    continue

            return response

        except RequestException as e:
            if versuch < max_versuche - 1:
                time.sleep(2 ** versuch)
                continue
            raise

    return response

# Verwendung
response = api_request_mit_retry(
    session.get,
    f"{BASE_URL}/organisation/mitarbeitende"
)
```

## Logging für Debugging

```python
import logging

logging.basicConfig(level=logging.DEBUG)

# Requests-Logging aktivieren
logging.getLogger("urllib3").setLevel(logging.DEBUG)

# Eigenes Logging
logger = logging.getLogger(__name__)

response = session.get(url)
logger.info(f"GET {url} -> {response.status_code}")

if response.status_code >= 400:
    logger.error(f"Fehler-Response: {response.text}")
```

## Nächste Schritte

→ [Praxisbeispiele]({{< ref "08-praxisbeispiele" >}}) - Vollständige Integrationen

→ [Best Practices]({{< ref "10-best-practices" >}}) - Produktionsreife Implementierung

---

## Zusammenfassung

✅ 2xx = Erfolg, 4xx = Client-Fehler, 5xx = Server-Fehler

✅ Validierungsfehler liefern feldspezifische Meldungen

✅ `raise_for_status()` für Exception bei Fehlern

✅ Retry-Logik für robuste Integrationen

✅ Logging für Debugging aktivieren
