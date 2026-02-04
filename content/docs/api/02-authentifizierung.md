---
title: "Authentifizierung"
description: ""
weight: "2"
tags:
  - "api"
  - "authentifizierung"
  - "token"
  - "sicherheit"
---


# Authentifizierung

Die ELIZA API erfordert Authentifizierung für alle Anfragen. Dieses Kapitel erklärt, wie du API-Tokens erstellst und verwendest.

## Token-Authentifizierung

Für externe Integrationen und Skripte ist die **Token-Authentifizierung** die empfohlene Methode.

### Token erstellen

1. Melde dich in ELIZA an
2. Gehe zu **Einstellungen** → **API-Tokens**
3. Klicke auf **Neues Token erstellen**
4. Gib dem Token einen beschreibenden Namen (z.B. "HR-Integration")
5. Kopiere und speichere das Token sicher

⚠️ **Wichtig:** Das Token wird nur einmal angezeigt. Speichere es sofort an einem sicheren Ort.

### Token verwenden

Füge das Token im `Authorization`-Header jeder Anfrage hinzu:

```
Authorization: Token dein_api_token_hier
```

**Beispiel mit curl:**

```bash
curl -H "Authorization: Token 1801d1fd0c1c1f9e3388bba24a747b7311dbdc72" \
     https://example.myeliza.ch/api/organisation/mitarbeitende
```

**Beispiel mit Python:**

```python
from requests import Session

API_TOKEN = "dein_api_token_hier"
BASE_URL = "https://example.myeliza.ch/api"

# Session mit Authentifizierung einrichten
session = Session()
session.headers.update({
    "Authorization": f"Token {API_TOKEN}"
})

# API-Aufruf durchführen
response = session.get(f"{BASE_URL}/organisation/mitarbeitende")
print(response.json())
```

💡 **Tipp:** Verwende eine `Session`, um den Authorization-Header automatisch bei allen Anfragen mitzusenden.

### Token-Sicherheit

✅ **Best Practices:**

- Speichere Tokens niemals im Quellcode
- Verwende Umgebungsvariablen oder Secrets-Manager
- Erstelle separate Tokens für verschiedene Integrationen
- Lösche ungenutzte Tokens

❌ **Häufiger Fehler:**

```python
# FALSCH - Token im Code
API_TOKEN = "1801d1fd0c1c1f9e3388bba24a747b7311dbdc72"

# RICHTIG - Token aus Umgebungsvariable
import os
API_TOKEN = os.environ.get("ELIZA_API_TOKEN")
```

## Session-Authentifizierung

Für Browser-basierte Anwendungen kann auch die Session-Authentifizierung verwendet werden. Diese nutzt Cookie-basierte Sessions.

**Anwendungsfälle:**

- JavaScript-Frontends
- AJAX-Anfragen aus der ELIZA-Webanwendung

**Hinweis:** Session-Authentifizierung erfordert einen gültigen CSRF-Token für schreibende Operationen.

## Berechtigungssystem

Nach erfolgreicher Authentifizierung werden deine Berechtigungen geprüft. Die API verwendet das Django-Berechtigungssystem.

### Berechtigungsstruktur

Berechtigungen folgen dem Muster: `app.aktion_modell`

| Berechtigung | Erlaubt |
|--------------|---------|
| `organisation.view_mitarbeitende` | GET-Anfragen auf Mitarbeitende |
| `organisation.add_mitarbeitende` | POST-Anfragen (erstellen) |
| `organisation.change_mitarbeitende` | PUT/PATCH-Anfragen (ändern) |
| `organisation.delete_mitarbeitende` | DELETE-Anfragen (löschen) |

### Berechtigungsfehler

Bei fehlenden Berechtigungen erhältst du einen **403 Forbidden** Status:

```json
{
  "detail": "You do not have permission to perform this action."
}
```

### Berechtigungen prüfen

Um deine Berechtigungen zu sehen, wende dich an deinen ELIZA-Administrator. Die Berechtigungen werden über Gruppen und Rollen vergeben.

## Authentifizierungsfehler

### 401 Unauthorized

**Ursache:** Kein oder ungültiges Token

```json
{
  "detail": "Authentication credentials were not provided."
}
```

**Lösung:**

- Prüfe, ob der Authorization-Header gesetzt ist
- Prüfe das Token-Format: `Token <token>` (mit Leerzeichen)
- Stelle sicher, dass das Token noch gültig ist

### 403 Forbidden

**Ursache:** Authentifiziert, aber keine Berechtigung

```json
{
  "detail": "You do not have permission to perform this action."
}
```

**Lösung:**

- Wende dich an deinen Administrator für zusätzliche Berechtigungen
- Prüfe, ob du die richtige HTTP-Methode verwendest

## Komplettes Beispiel

```python
import os
from requests import Session

# Token aus Umgebungsvariable laden
API_TOKEN = os.environ.get("ELIZA_API_TOKEN")
if not API_TOKEN:
    raise ValueError("ELIZA_API_TOKEN Umgebungsvariable nicht gesetzt")

BASE_URL = "https://example.myeliza.ch/api"

# Session konfigurieren
session = Session()
session.headers.update({
    "Authorization": f"Token {API_TOKEN}",
    "Content-Type": "application/json"
})

# Test: Mitarbeitende abrufen
response = session.get(f"{BASE_URL}/organisation/mitarbeitende")

if response.status_code == 200:
    mitarbeitende = response.json()
    print(f"Gefunden: {len(mitarbeitende)} Mitarbeitende")
elif response.status_code == 401:
    print("Authentifizierung fehlgeschlagen - Token prüfen")
elif response.status_code == 403:
    print("Keine Berechtigung für diese Aktion")
else:
    print(f"Fehler: {response.status_code}")
```

## Nächste Schritte

Jetzt, wo du authentifiziert bist, kannst du deine ersten Anfragen machen:

→ [Erste Anfragen]({{< ref "03-erste-anfragen" >}})

---

## Zusammenfassung

✅ Token-Authentifizierung für externe Integrationen

✅ Header-Format: `Authorization: Token <token>`

✅ Tokens sicher speichern (Umgebungsvariablen)

✅ Berechtigungen werden pro Aktion geprüft

✅ 401 = nicht authentifiziert, 403 = keine Berechtigung
