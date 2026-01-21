---
title: "REST API"
description: ""
weight: "6"
tags:
  - "api"
  - "rest"
  - "integration"
  - "automation"
  - "kategorien"
---


# REST API

Das Meldungen-Modul bietet eine vollständige REST API für die Integration mit externen Systemen und Automatisierung.

## Überblick

| Ressource | Endpunkt | Beschreibung |
|-----------|----------|--------------|
| Meldekreise | `/api/issue/tracker/` | Meldekreise verwalten |
| Kategorien | `/api/issue/category/` | Kategorien (Themen) verwalten |
| Meldungen | `/api/issue/issue/` | Meldungen verwalten |

## Authentifizierung

Alle API-Anfragen erfordern Authentifizierung:

**Token-Authentifizierung (empfohlen):**
```bash
curl -H "Authorization: Token DEIN_API_TOKEN" \
     https://deine-firma.myeliza.ch/api/issue/tracker/
```

**Session-Authentifizierung:**
Für Browser-basierte Anfragen wird die Session-Authentifizierung automatisch verwendet.

> **💡 Tipp:** API-Tokens kannst du in deinem Benutzerprofil unter "API-Zugang" erstellen.

## Meldekreise (Tracker)

### Alle Meldekreise auflisten

```http
GET /api/issue/tracker/
```

**Filter-Parameter:**
- `state` - Status (draft, approved, archived)
- `visibility` - Sichtbarkeit (normal, protected, confidential)
- `public_form` - Öffentliches Formular (true/false)
- `title` - Suche im Titel

**Beispiel:**
```bash
curl -H "Authorization: Token TOKEN" \
     "https://firma.myeliza.ch/api/issue/tracker/?state=approved"
```

### Meldekreis-Details abrufen

```http
GET /api/issue/tracker/{id}/
```

### Meldekreis erstellen

```http
POST /api/issue/tracker/
```

**Request-Body:**
```json
{
  "title": "Kundenreklamationen",
  "description": "Meldekreis für Kundenreklamationen",
  "state": "approved",
  "visibility": "normal",
  "public_form": false,
  "admin_ids": [1, 2],
  "team_ids": [3, 4, 5]
}
```

### Meldekreis aktualisieren

```http
PATCH /api/issue/tracker/{id}/
```

### Meldekreis löschen

```http
DELETE /api/issue/tracker/{id}/
```

## Kategorien (Themen)

Kategorien sind Labels, die Meldungen innerhalb eines Meldekreises gruppieren.

### Alle Kategorien auflisten

```http
GET /api/issue/category/
```

**Filter-Parameter:**
- `tracker` - Meldekreis-ID
- `title` - Suche im Titel

**Beispiel:**
```bash
# Alle Kategorien eines Meldekreises
curl -H "Authorization: Token TOKEN" \
     "https://firma.myeliza.ch/api/issue/category/?tracker=1"
```

### Kategorie-Details abrufen

```http
GET /api/issue/category/{id}/
```

### Kategorie erstellen

```http
POST /api/issue/category/
```

**Request-Body:**
```json
{
  "tracker_id": 1,
  "title": "Hardware-Fehler",
  "color": "red"
}
```

**Felder:**

| Feld | Typ | Pflicht | Beschreibung |
|------|-----|---------|--------------|
| tracker_id | integer | Ja | ID des Meldekreises |
| title | string | Ja | Titel der Kategorie |
| color | string | Nein | MaterializeCSS Farbklasse |

### Kategorie aktualisieren

```http
PATCH /api/issue/category/{id}/
```

**Request-Body:**
```json
{
  "title": "Software-Fehler",
  "color": "blue"
}
```

### Kategorie löschen

```http
DELETE /api/issue/category/{id}/
```

### Scoped Labels (Kategorien mit Scope)

Kategorien können als **Scoped Labels** angelegt werden, indem der Titel einen Doppelpunkt (`:`) enthält. Das Format ist `Scope:Wert`.

**Beispiele:**
```json
{"tracker_id": 1, "title": "Priorität:Hoch", "color": "red"}
{"tracker_id": 1, "title": "Priorität:Mittel", "color": "orange"}
{"tracker_id": 1, "title": "Priorität:Niedrig", "color": "green"}
{"tracker_id": 1, "title": "Typ:Hardware", "color": "blue"}
{"tracker_id": 1, "title": "Typ:Software", "color": "purple"}
```

**Darstellung in der UI:**

Scoped Labels werden zweigeteilt dargestellt:
- **Linker Teil** (Scope): Farbiger Hintergrund mit dem Scope-Namen
- **Rechter Teil** (Wert): Weisser Hintergrund mit dem Wert

```
┌─────────────┬────────┐
│ Priorität   │  Hoch  │
└─────────────┴────────┘
   (farbig)    (weiss)
```

**Vorteile von Scoped Labels:**
- Gruppierung zusammengehöriger Kategorien
- Visuelle Unterscheidung von Scope und Wert
- Konsistente Benennung (z.B. alle Prioritäten beginnen mit "Priorität:")

**Normale Labels:**

Kategorien ohne `:` werden als einfache Labels dargestellt:
```json
{"tracker_id": 1, "title": "Dringend", "color": "red"}
```

### Verfügbare Farben (MaterializeCSS)

Die Farben werden als CSS-Klassen in der UI dargestellt.

**Basis-Farben:**

| Farbe | Beschreibung | Empfohlene Verwendung |
|-------|--------------|----------------------|
| `red` | Rot | Kritisch, Fehler |
| `orange` | Orange | Warnung |
| `yellow` | Gelb | Hinweis |
| `green` | Grün | Erledigt, OK |
| `blue` | Blau | Information |
| `purple` | Violett | Spezial |
| `grey` | Grau | Neutral |
| `teal` | Türkis | Prozess |
| `cyan` | Cyan | Technik |

**Mit Helligkeitsstufen:**
- `red lighten-2` - Helleres Rot
- `blue darken-1` - Dunkleres Blau
- `green accent-2` - Akzent-Grün

**Stufen:**
- `lighten-5` bis `lighten-1` (heller)
- `darken-1` bis `darken-4` (dunkler)
- `accent-1` bis `accent-4` (Akzent)

**Beispiele:**
```bash
# Rote Kategorie für kritische Meldungen
curl -X POST -H "Authorization: Token TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"tracker_id": 1, "title": "Kritisch", "color": "red"}' \
     "https://firma.myeliza.ch/api/issue/category/"

# Hellblaue Kategorie für Informationen
curl -X POST -H "Authorization: Token TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"tracker_id": 1, "title": "Info", "color": "light-blue lighten-2"}' \
     "https://firma.myeliza.ch/api/issue/category/"
```

## Meldungen (Issues)

### Alle Meldungen auflisten

```http
GET /api/issue/issue/
```

**Filter-Parameter:**
- `tracker` - Meldekreis-ID
- `state` - Status (new, pending, accepted, active, effectiveness_check, resolved, rejected)
- `archived` - Archiviert (true/false)
- `assigned_user` - Zuständiger Benutzer (ID)
- `classification` - Klassifikation (official, confidential, secret)

**Beispiel:**
```bash
# Alle offenen Meldungen eines Meldekreises
curl -H "Authorization: Token TOKEN" \
     "https://firma.myeliza.ch/api/issue/issue/?tracker=1&state=active"
```

### Meldung-Details abrufen

```http
GET /api/issue/issue/{id}/
```

### Meldung erstellen

```http
POST /api/issue/issue/
```

**Request-Body:**
```json
{
  "tracker_id": 1,
  "title": "Druckerproblem im 2. Stock",
  "description": "Der Drucker zeigt Papierstau an, obwohl kein Papier eingeklemmt ist.",
  "state": "new",
  "category_ids": [1, 2],
  "assigned_user_id": 5,
  "deadline": "2025-12-31"
}
```

**Felder:**

| Feld | Typ | Pflicht | Beschreibung |
|------|-----|---------|--------------|
| tracker_id | integer | Ja | ID des Meldekreises |
| title | string | Ja | Titel der Meldung |
| description | string | Nein | Beschreibung |
| state | string | Nein | Status (Standard: new) |
| category_ids | array | Nein | Kategorie-IDs |
| assigned_user_id | integer | Nein | Zuständiger Benutzer |
| deadline | date | Nein | Frist (YYYY-MM-DD) |
| contributor_ids | array | Nein | Mitwirkende (IDs) |
| process_ids | array | Nein | Verknüpfte Prozesse (IDs) |

### Meldung aktualisieren

```http
PATCH /api/issue/issue/{id}/
```

**Beispiel: Status ändern**
```bash
curl -X PATCH -H "Authorization: Token TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"state": "active"}' \
     "https://firma.myeliza.ch/api/issue/issue/42/"
```

### Meldung löschen

```http
DELETE /api/issue/issue/{id}/
```

## Status-Workflow

Meldungen durchlaufen einen definierten Workflow:

```
new → pending → accepted → active → effectiveness_check → resolved
  ↓      ↓         ↓          ↓              ↓
rejected rejected rejected  rejected      rejected
```

| Status | Beschreibung |
|--------|--------------|
| `new` | Neu erfasst |
| `pending` | In Prüfung |
| `accepted` | Angenommen |
| `active` | In Bearbeitung |
| `effectiveness_check` | Wirksamkeitsprüfung |
| `resolved` | Erledigt |
| `rejected` | Abgelehnt |

## Berechtigungen

Die API respektiert das ELIZA-Berechtigungssystem:

| Aktion | Erforderliche Berechtigung |
|--------|---------------------------|
| Meldekreise lesen | `issues.view_tracker` |
| Meldekreise erstellen | `issues.add_tracker` |
| Meldekreise bearbeiten | `issues.change_tracker` |
| Meldekreise löschen | `issues.delete_tracker` |
| Kategorien lesen | `issues.view_issuecategory` |
| Kategorien erstellen | `issues.add_issuecategory` |
| Kategorien bearbeiten | `issues.change_issuecategory` |
| Kategorien löschen | `issues.delete_issuecategory` |
| Meldungen lesen | `issues.view_issue` |
| Meldungen erstellen | `issues.add_issue` |
| Meldungen bearbeiten | `issues.change_issue` |
| Meldungen löschen | `issues.delete_issue` |

Zusätzlich werden objektspezifische Berechtigungen geprüft (z.B. Meldekreis-Sichtbarkeit).

## Fehlerbehandlung

Die API gibt standardmässige HTTP-Statuscodes zurück:

| Code | Bedeutung |
|------|-----------|
| 200 | Erfolg |
| 201 | Erstellt |
| 204 | Gelöscht (kein Inhalt) |
| 400 | Ungültige Anfrage |
| 401 | Nicht authentifiziert |
| 403 | Keine Berechtigung |
| 404 | Nicht gefunden |
| 500 | Serverfehler |

**Fehler-Response:**
```json
{
  "detail": "Zugriff nicht erlaubt."
}
```

**Validierungsfehler:**
```json
{
  "title": ["Dieses Feld ist erforderlich."],
  "tracker_id": ["Ungültiger pk \"999\" - Objekt existiert nicht."]
}
```

## Beispiel-Workflows

### Workflow 1: Meldung mit Kategorie erstellen

```bash
# 1. Verfügbare Kategorien abrufen
curl -H "Authorization: Token TOKEN" \
     "https://firma.myeliza.ch/api/issue/category/?tracker=1"

# 2. Meldung mit Kategorien erstellen
curl -X POST -H "Authorization: Token TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "tracker_id": 1,
       "title": "Produktionsfehler Charge 2024-001",
       "description": "Qualitätsmangel bei Charge 2024-001 festgestellt",
       "category_ids": [1, 3]
     }' \
     "https://firma.myeliza.ch/api/issue/issue/"
```

### Workflow 2: Neue Kategorie anlegen und verwenden

```bash
# 1. Neue Kategorie erstellen
curl -X POST -H "Authorization: Token TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "tracker_id": 1,
       "title": "Lieferantenproblem",
       "color": "orange"
     }' \
     "https://firma.myeliza.ch/api/issue/category/"

# Response: {"id": 5, "tracker": 1, "title": "Lieferantenproblem", "color": "orange"}

# 2. Meldung mit neuer Kategorie erstellen
curl -X POST -H "Authorization: Token TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "tracker_id": 1,
       "title": "Verspätete Lieferung Lieferant XY",
       "category_ids": [5]
     }' \
     "https://firma.myeliza.ch/api/issue/issue/"
```

## Nächste Schritte

- [Erste Schritte]({{< ref "01-erste-schritte" >}}) - Grundlagen des Meldungen-Moduls
- [Meldekreise verwalten]({{< ref "03-meldekreise-verwalten" >}}) - Kategorien in der Web-Oberfläche
- [Berechtigungskonzept]({{< ref "04-berechtigungskonzept" >}}) - Zugriffssteuerung verstehen
