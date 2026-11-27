---
title: "Datenformate"
description: ""
weight: "5"
tags:
  - "api"
  - "json"
  - "datenformate"
  - "serialisierung"
---


# Datenformate

Dieses Kapitel erklärt die JSON-Struktur und Datentypen in der ELIZA API.

## JSON-Format

Alle API-Anfragen und -Antworten verwenden **JSON** (JavaScript Object Notation).

### Request-Header

```
Content-Type: application/json
Accept: application/json
```

### Beispiel-Response

```json
{
  "id": 123,
  "uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "vorname": "Hugo",
  "nachname": "Boss",
  "email": "hugo.boss@example.com",
  "created": "2024-01-15T10:30:00Z",
  "modified": "2024-01-20T14:22:00Z",
  "archived": false
}
```

## Identifikatoren: ID vs. UUID

ELIZA verwendet zwei Arten von Identifikatoren:

### ID (Integer)

- Interne, auto-inkrementierte Datenbank-ID
- Kurz und einfach zu verwenden
- **Empfohlen für API-Aufrufe**

```python
# Mit ID
response = session.get(f"{BASE_URL}/organisation/mitarbeitende/123")
```

### UUID (String)

- Universally Unique Identifier
- Stabil auch bei Datenbank-Migrationen
- **Empfohlen für externe Referenzen**

```python
# Mit UUID (wo unterstützt)
response = session.get(f"{BASE_URL}/dms/document?uuid=a1b2c3d4-e5f6-7890-abcd-ef1234567890")
```

💡 **Tipp:** Verwende IDs für einfache API-Aufrufe und UUIDs für langfristige externe Referenzen.

## Relationen

### Foreign Key (Einzelne Relation)

Relationen zu anderen Objekten werden als ID oder UUID dargestellt:

```json
{
  "id": 1,
  "title": "Projektdokument",
  "folder": 5,
  "folder_uuid": "f1234567-89ab-cdef-0123-456789abcdef"
}
```

### Beim Erstellen/Aktualisieren

Du kannst entweder die ID oder UUID verwenden:

```python
# Mit ID
daten = {
    "title": "Neues Dokument",
    "folder": 5
}

# Oder mit UUID (wo unterstützt)
daten = {
    "title": "Neues Dokument",
    "folder_uuid": "f1234567-89ab-cdef-0123-456789abcdef"
}
```

### Many-to-Many Relationen

Mehrfach-Relationen werden als Array von IDs dargestellt:

```json
{
  "id": 1,
  "title": "Projekt Alpha",
  "team_members": [1, 5, 12, 23]
}
```

## Datumsformate

Alle Datumsfelder verwenden **ISO 8601** Format:

### Datum mit Zeit (DateTime)

```json
{
  "created": "2024-01-15T10:30:00Z",
  "modified": "2024-01-20T14:22:30.123456Z"
}
```

- `T` trennt Datum und Zeit
- `Z` bedeutet UTC-Zeitzone
- Millisekunden sind optional

### Nur Datum (Date)

```json
{
  "start_date": "2024-01-15",
  "end_date": "2024-12-31"
}
```

### Python-Beispiele

```python
from datetime import datetime, date

# DateTime senden
daten = {
    "start_time": datetime.now().isoformat() + "Z"
}

# Date senden
daten = {
    "start_date": date.today().isoformat()
}

# DateTime parsen
response = session.get(url)
created = datetime.fromisoformat(response.json()["created"].replace("Z", "+00:00"))
```

## Boolean-Werte

```json
{
  "archived": false,
  "is_active": true,
  "public": true
}
```

⚠️ **Wichtig:** Verwende `true`/`false` (lowercase), nicht `True`/`False` oder `1`/`0`.

## Null-Werte

Optionale Felder können `null` sein:

```json
{
  "id": 1,
  "vorname": "Hugo",
  "nachname": "Boss",
  "middle_name": null,
  "phone": null
}
```

## Nested Objects (Read-Only)

Manche Endpoints liefern verschachtelte Objekte für lesende Operationen:

```json
{
  "id": 1,
  "title": "Projektdokument",
  "folder": 5,
  "folder_data": {
    "id": 5,
    "title": "Projekt Alpha",
    "parent": 2
  }
}
```

⚠️ **Wichtig:** Nested Objects sind **read-only**. Beim Erstellen/Aktualisieren verwende nur die ID:

```python
# FALSCH
daten = {
    "title": "Neues Dokument",
    "folder_data": {"id": 5, "title": "..."}  # Funktioniert nicht!
}

# RICHTIG
daten = {
    "title": "Neues Dokument",
    "folder": 5
}
```

## Listen-Response

GET-Anfragen auf Listen-Endpoints liefern Arrays:

```json
[
  {"id": 1, "vorname": "Hugo", "nachname": "Boss"},
  {"id": 2, "vorname": "Anna", "nachname": "Müller"},
  {"id": 3, "vorname": "Max", "nachname": "Muster"}
]
```

## Typische Feldtypen

| Feldname | Typ | Beispiel |
|----------|-----|----------|
| `id` | Integer | `123` |
| `uuid` | String (UUID) | `"a1b2c3d4-..."` |
| `title` / `name` | String | `"Projekt Alpha"` |
| `description` | String (kann leer sein) | `"Beschreibung..."` |
| `created` | DateTime (ISO 8601) | `"2024-01-15T10:30:00Z"` |
| `modified` | DateTime (ISO 8601) | `"2024-01-20T14:22:00Z"` |
| `archived` | Boolean | `false` |
| `state` / `status` | String (Enum) | `"draft"`, `"approved"` |
| `order` | Integer | `1`, `2`, `3` |

Bei Dokumenten und Prozessen ist `state` nur lesbar: Der Status ändert sich dort ausschliesslich über die Workflow-Endpunkte (siehe [Endpunkte-Übersicht]({{< ref "04-endpunkte-uebersicht" >}})).

## Validierungsfehler

Bei ungültigen Daten erhältst du detaillierte Fehlermeldungen:

```json
{
  "email": ["Gültige E-Mail-Adresse erforderlich."],
  "vorname": ["Dieses Feld darf nicht leer sein."],
  "start_date": ["Datum hat falsches Format. Benutze eines dieser Formate: YYYY-MM-DD."]
}
```

## Nächste Schritte

→ [Filterung und Suche]({{< ref "06-filterung-suche" >}}) - Daten gezielt abfragen

→ [Fehlerbehandlung]({{< ref "07-fehlerbehandlung" >}}) - Fehler verstehen und behandeln

---

## Zusammenfassung

✅ JSON-Format für alle Requests/Responses

✅ ISO 8601 für Datumsfelder (`2024-01-15T10:30:00Z`)

✅ ID (Integer) oder UUID (String) für Referenzen

✅ Nested Objects sind read-only

✅ Boolean als `true`/`false` (lowercase)
