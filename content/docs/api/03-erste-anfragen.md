---
title: "Erste Anfragen"
description: ""
weight: "3"
tags:
  - "api"
  - "python"
  - "curl"
  - "beispiele"
---


# Erste Anfragen

In diesem Kapitel lernst du, wie du deine ersten API-Anfragen mit Python und curl durchführst.

## Voraussetzungen

- Ein gültiges API-Token (siehe [Authentifizierung]({{< ref "02-authentifizierung" >}}))
- Python 3.x mit `requests`-Bibliothek installiert
- Alternativ: curl für Kommandozeilen-Anfragen

## Python-Setup

Installiere die `requests`-Bibliothek:

```bash
pip install requests
```

### Basis-Setup

```python
from requests import Session
import os

# Konfiguration
API_TOKEN = os.environ.get("ELIZA_API_TOKEN")
BASE_URL = "https://example.myeliza.ch/api"

# Session mit Authentifizierung
session = Session()
session.headers.update({
    "Authorization": f"Token {API_TOKEN}"
})
```

## GET: Daten abrufen

### Liste aller Objekte

```python
# Alle Mitarbeitenden abrufen
response = session.get(f"{BASE_URL}/organisation/mitarbeitende")

if response.status_code == 200:
    mitarbeitende = response.json()
    for ma in mitarbeitende:
        print(f"{ma['vorname']} {ma['nachname']}")
else:
    print(f"Fehler: {response.status_code}")
```

**Ausgabe:**

```
Hugo Boss
Anna Müller
Max Muster
```

### Einzelnes Objekt abrufen

```python
# Mitarbeitenden mit ID 1 abrufen
response = session.get(f"{BASE_URL}/organisation/mitarbeitende/1")

if response.status_code == 200:
    ma = response.json()
    print(f"Name: {ma['vorname']} {ma['nachname']}")
    print(f"E-Mail: {ma['email']}")
elif response.status_code == 404:
    print("Mitarbeitender nicht gefunden")
```

### Mit curl

```bash
# Liste abrufen
curl -H "Authorization: Token $ELIZA_API_TOKEN" \
     https://example.myeliza.ch/api/organisation/mitarbeitende

# Einzelnes Objekt
curl -H "Authorization: Token $ELIZA_API_TOKEN" \
     https://example.myeliza.ch/api/organisation/mitarbeitende/1
```

## POST: Neues Objekt erstellen

### Mit Python

```python
# Neuen Mitarbeitenden erstellen
daten = {
    "vorname": "Neue",
    "nachname": "Person",
    "email": "neue.person@example.com"
}

response = session.post(
    f"{BASE_URL}/organisation/mitarbeitende",
    json=daten  # Automatisch als JSON serialisiert
)

if response.status_code == 201:
    neuer_ma = response.json()
    print(f"Erstellt mit ID: {neuer_ma['id']}")
elif response.status_code == 400:
    print(f"Validierungsfehler: {response.json()}")
```

### Mit curl

```bash
curl -X POST \
     -H "Authorization: Token $ELIZA_API_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"vorname": "Neue", "nachname": "Person", "email": "neue.person@example.com"}' \
     https://example.myeliza.ch/api/organisation/mitarbeitende
```

## PATCH: Objekt aktualisieren

```python
# E-Mail-Adresse aktualisieren
daten = {
    "email": "neue.email@example.com"
}

response = session.patch(
    f"{BASE_URL}/organisation/mitarbeitende/1",
    json=daten
)

if response.status_code == 200:
    print("Erfolgreich aktualisiert")
else:
    print(f"Fehler: {response.status_code}")
```

💡 **Tipp:** Verwende `PATCH` statt `PUT`, wenn du nur einzelne Felder ändern möchtest. Bei `PUT` müssen alle Pflichtfelder mitgesendet werden.

## DELETE: Objekt löschen

```python
response = session.delete(f"{BASE_URL}/organisation/mitarbeitende/1")

if response.status_code == 204:
    print("Erfolgreich gelöscht")
elif response.status_code == 404:
    print("Objekt nicht gefunden")
```

## Response verstehen

### Erfolgreiche Antworten

| Status-Code | Bedeutung | Typische Verwendung |
|-------------|-----------|---------------------|
| `200 OK` | Erfolgreich | GET, PUT, PATCH |
| `201 Created` | Erstellt | POST |
| `204 No Content` | Gelöscht | DELETE |

### Beispiel-Response (GET Liste)

```json
[
  {
    "id": 1,
    "uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "vorname": "Hugo",
    "nachname": "Boss",
    "email": "hugo.boss@example.com"
  },
  {
    "id": 2,
    "uuid": "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    "vorname": "Anna",
    "nachname": "Müller",
    "email": "anna.mueller@example.com"
  }
]
```

### Beispiel-Response (GET Einzelobjekt)

```json
{
  "id": 1,
  "uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "vorname": "Hugo",
  "nachname": "Boss",
  "email": "hugo.boss@example.com",
  "created": "2024-01-15T10:30:00Z",
  "modified": "2024-01-20T14:22:00Z"
}
```

## Vollständiges Beispiel

```python
"""
ELIZA API Schnellstart-Beispiel
"""
from requests import Session
import os

# Konfiguration
API_TOKEN = os.environ.get("ELIZA_API_TOKEN")
BASE_URL = os.environ.get("ELIZA_BASE_URL", "https://example.myeliza.ch/api")

if not API_TOKEN:
    raise ValueError("Bitte ELIZA_API_TOKEN setzen")

# Session einrichten
session = Session()
session.headers.update({
    "Authorization": f"Token {API_TOKEN}",
    "Content-Type": "application/json"
})

def liste_mitarbeitende():
    """Alle Mitarbeitenden abrufen und ausgeben."""
    response = session.get(f"{BASE_URL}/organisation/mitarbeitende")
    response.raise_for_status()  # Wirft Exception bei Fehlern

    for ma in response.json():
        print(f"- {ma['vorname']} {ma['nachname']} ({ma.get('email', 'keine E-Mail')})")

def erstelle_mitarbeitenden(vorname, nachname, email):
    """Neuen Mitarbeitenden erstellen."""
    daten = {
        "vorname": vorname,
        "nachname": nachname,
        "email": email
    }

    response = session.post(
        f"{BASE_URL}/organisation/mitarbeitende",
        json=daten
    )

    if response.status_code == 201:
        return response.json()
    else:
        print(f"Fehler: {response.status_code}")
        print(response.json())
        return None

# Ausführen
if __name__ == "__main__":
    print("Aktuelle Mitarbeitende:")
    liste_mitarbeitende()
```

## Häufige Fehler

❌ **Fehler: Content-Type vergessen**

```python
# FALSCH - data statt json
response = session.post(url, data={"name": "Test"})

# RICHTIG - json Parameter verwenden
response = session.post(url, json={"name": "Test"})
```

❌ **Fehler: Trailing Slash**

```python
# FALSCH - mit Schrägstrich am Ende
response = session.get(f"{BASE_URL}/organisation/mitarbeitende/")

# RICHTIG - ohne Schrägstrich
response = session.get(f"{BASE_URL}/organisation/mitarbeitende")
```

## Nächste Schritte

→ [Endpunkte-Übersicht]({{< ref "04-endpunkte-uebersicht" >}}) - Alle verfügbaren Endpoints

→ [Filterung und Suche]({{< ref "06-filterung-suche" >}}) - Daten gezielt abfragen

---

## Zusammenfassung

✅ Session-Objekt für wiederverwendbare Authentifizierung

✅ GET für Lesen, POST für Erstellen, PATCH für Ändern, DELETE für Löschen

✅ `json=daten` Parameter für automatische JSON-Serialisierung

✅ Status-Codes prüfen: 200/201/204 = Erfolg, 4xx = Fehler
