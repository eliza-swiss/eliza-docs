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
| Meldekreise | `/api/issue/tracker` | Meldekreise verwalten |
| Kategorien | `/api/issue/category` | Kategorien (Themen) verwalten |
| Meldungen | `/api/issue/issue` | Meldungen verwalten |

## Authentifizierung

Alle API-Anfragen erfordern Authentifizierung:

**Token-Authentifizierung (empfohlen):**
```bash
curl -H "Authorization: Token DEIN_API_TOKEN" \
     https://deine-firma.myeliza.ch/api/issue/tracker
```

**Session-Authentifizierung:**
Für Browser-basierte Anfragen wird die Session-Authentifizierung automatisch verwendet.

> **💡 Tipp:** API-Tokens kannst du in deinem Benutzerprofil unter "API-Zugang" erstellen.

## Meldekreise (Tracker)

### Alle Meldekreise auflisten

```http
GET /api/issue/tracker
```

**Filter-Parameter:**
- `state` - Status (draft, approved, archived)
- `visibility` - Sichtbarkeit (normal, protected, confidential)
- `public_form` - Öffentliches Formular (true/false)
- `title` - Suche im Titel

**Beispiel:**
```bash
curl -H "Authorization: Token TOKEN" \
     "https://firma.myeliza.ch/api/issue/tracker?state=approved"
```

### Meldekreis-Details abrufen

```http
GET /api/issue/tracker/{id}
```

### Meldekreis erstellen

```http
POST /api/issue/tracker
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
PATCH /api/issue/tracker/{id}
```

### Meldekreis archivieren und reaktivieren

```http
POST /api/issue/tracker/{id}/archive
POST /api/issue/tracker/{id}/reactivate
```

Beides geht wie in der Oberfläche für alle, die den Meldekreis ändern dürfen, auch für Admins des Meldekreises ohne das globale Recht «Meldekreise ändern». `archive` archiviert den Meldekreis samt seinen Meldungen; `reactivate` holt ihn zurück und stellt die Meldungen wieder her, die mit ihm archiviert wurden. Beide antworten mit dem Meldekreis (200).

Sind im Meldekreis offene Meldungen, die mitarchiviert würden, bestätigst du ihre Zahl im Body:

```json
{ "open_issue_count": 3 }
```

Fehlt die Zahl oder stimmt sie nicht mit der aktuellen überein, antwortet die API mit 400 und nennt die aktuelle Zahl. Ein bereits archivierter Meldekreis lässt sich nicht nochmals archivieren, ein nicht archivierter nicht reaktivieren (400).

Das Feld `state` lässt sich über `PATCH`, `PUT` und beim Anlegen nicht auf einen anderen Wert setzen (400); beim Ändern wird der gespeicherte Wert weiter akzeptiert, beim Anlegen nur der Standardwert `approved`.

### Meldekreis löschen

```http
DELETE /api/issue/tracker/{id}
```

## Kategorien (Themen)

Kategorien sind Labels, die Meldungen innerhalb eines Meldekreises gruppieren.

### Alle Kategorien auflisten

```http
GET /api/issue/category
```

**Filter-Parameter:**
- `tracker` - Meldekreis-ID
- `title` - Suche im Titel

**Beispiel:**
```bash
# Alle Kategorien eines Meldekreises
curl -H "Authorization: Token TOKEN" \
     "https://firma.myeliza.ch/api/issue/category?tracker=1"
```

### Kategorie-Details abrufen

```http
GET /api/issue/category/{id}
```

### Kategorie erstellen

```http
POST /api/issue/category
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
PATCH /api/issue/category/{id}
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
DELETE /api/issue/category/{id}
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
     "https://firma.myeliza.ch/api/issue/category"

# Hellblaue Kategorie für Informationen
curl -X POST -H "Authorization: Token TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"tracker_id": 1, "title": "Info", "color": "light-blue lighten-2"}' \
     "https://firma.myeliza.ch/api/issue/category"
```

## Meldungen (Issues)

### Alle Meldungen auflisten

```http
GET /api/issue/issue
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
     "https://firma.myeliza.ch/api/issue/issue?tracker=1&state=active"
```

### Meldung-Details abrufen

```http
GET /api/issue/issue/{id}
```

### Meldung erstellen

```http
POST /api/issue/issue
```

**Request-Body:**
```json
{
  "tracker_id": 1,
  "title": "Druckerproblem im 2. Stock",
  "description": "Der Drucker zeigt Papierstau an, obwohl kein Papier eingeklemmt ist.",
  "category_ids": [1, 2],
  "deadline": "2025-12-31"
}
```

**Felder:**

| Feld | Typ | Pflicht | Beschreibung |
|------|-----|---------|--------------|
| tracker_id | integer | Ja | ID des Meldekreises |
| title | string | Ja | Titel der Meldung |
| description | string | Nein | Beschreibung |
| category_ids | array | Nein | Kategorie-IDs |
| deadline | date | Nein | Frist (YYYY-MM-DD) |
| process_ids | array | Nein | Verknüpfte Prozesse (IDs) |

Status, eigener Status, Zuständigkeit und Mitwirkende gibst du beim Erfassen nicht mit. Schickst du `state`, `custom_state_id`, `assigned_user_id` oder `contributor_ids` mit einem Wert, antwortet die API mit 400; nur `state` mit dem Grundwert `new` einer neuen Meldung nimmt sie an. Bei `state`, `custom_state_id` und `assigned_user_id` nennt sie die Aktion, die das stattdessen tut (siehe [Status, Zuständigkeit und Frist ändern](#status-zustandigkeit-und-frist-andern)); bei `contributor_ids` nennt sie keine, denn Mitwirkende ergänzt ELIZA selbst. Eine neue Meldung beginnt im Startstatus des Meldekreises, die Zuständigkeit setzt du danach mit der Aktion `assign`.

Wie beim Formular «Meldung erfassen» wirst du Mitwirkende oder Mitwirkender der neuen Meldung, ausser bei geheimen und anonymen Meldungen. Damit bekommst du die Benachrichtigungen zu Antworten auf die Meldung, auch mit dem technischen Konto einer Integration.

Schickst du dieselbe Meldung innert 60 Sekunden ein zweites Mal (gleicher Meldekreis, Titel, Beschreibung und alle weiteren Felder, die du mitschickst), legt die API keine zweite an. Sie antwortet mit 200 statt 201, gibt die vorhandene Meldung zurück und ergänzt sie um `"duplicate": true`. Das schützt vor doppeltem Senden bei schlechtem Netz oder bei einem KI-Tool, das seinen Aufruf wiederholt. Anonyme Meldungen sind davon ausgenommen.

### Auf eine Meldung antworten

```http
POST /api/issue/followup
```

**Request-Body:**
```json
{
  "issue": "SU-2439",
  "comment": "Der Drucker ist wieder in Betrieb.",
  "internal_comment": false
}
```

| Feld | Typ | Pflicht | Beschreibung |
|------|-----|---------|--------------|
| issue | integer oder string | Ja | Interne ID oder Meldungsnummer (z.B. «SU-2439»); `issue_id` geht auch |
| comment | string | Ja | Text der Antwort |
| internal_comment | boolean | Nein | Interne Notiz; nur wenn du die Meldung ändern darfst |

- Eine Antwort braucht Text. Ohne Text antwortet die API mit 400 und «Schreib eine Nachricht.». Beilagen lädst du danach zur Antwort hoch: `POST /api/issue/followup/{id}/upload` mit dem Feld `file` oder `files`; dafür brauchst du das Recht, die Meldung zu ändern.
- Schickst du dieselbe Antwort innert 60 Sekunden noch einmal auf dieselbe Meldung, speichert die API sie nicht nochmals und benachrichtigt niemanden erneut. Sie gibt die vorhandene Antwort zurück. Eine interne Notiz und eine öffentliche Antwort mit demselben Text gelten als verschiedene Antworten.

### Meldung aktualisieren

```http
PATCH /api/issue/issue/{id}
```

**Beispiel: Beschreibung ändern**
```bash
curl -X PATCH -H "Authorization: Token TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"description": "Der Drucker zeigt auch nach dem Neustart Papierstau an."}' \
     "https://firma.myeliza.ch/api/issue/issue/42"
```

Diese Felder änderst du weder mit `PATCH` noch mit `PUT`: `state`, `custom_state_id`, `tracker_id`, `assigned_user_id`, `deadline` und `contributor_ids`. Schickst du einen anderen Wert als den aktuellen, antwortet die API mit 400 und nennt, wie du es stattdessen änderst. Ein Wert, der dem aktuellen gleicht, ist kein Fehler. Den Meldekreis wechselst du in ELIZA unter «Meldung verschieben», Mitwirkende ergänzt ELIZA selbst.

### Status, Zuständigkeit und Frist ändern

Status, Zuständigkeit und Frist ändern die Aktionen. Sie laufen wie das Antwortformular in ELIZA: Die Änderung steht im Verlauf der Meldung, und ELIZA benachrichtigt die Beteiligten. Das gilt für jeden Zugang, auch für Integrationen und KI-Tools.

```http
POST /api/issue/issue/{id}/{aktion}
```

| Aktion | Zusätzliches Feld | Wirkung |
|--------|-------------------|---------|
| `review` | | Status «in Prüfung» |
| `accept` | | Status «akzeptiert» |
| `begin` | | Status «in Bearbeitung» |
| `check_effectiveness` | | Status «Wirksamkeitsprüfung» |
| `resolve` | | Status «erledigt» |
| `reopen` | | erledigte, zurückgewiesene oder in der Wirksamkeitsprüfung stehende Meldung wieder «in Prüfung» |
| `reject` | | Status «zurückgewiesen» |
| `set_state` | `state`: ID eines eigenen Status des Meldekreises | eigener Status |
| `assign` | `user`: ID der Person; leer oder `null` hebt die Zuständigkeit auf | Zuständigkeit |
| `set_deadline` | `deadline` (Pflicht): Datum (YYYY-MM-DD); ein leerer Wert oder `null` entfernt die Frist | Frist |

Jede Aktion nimmt zusätzlich diese Felder an, beide sind optional:

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| comment | string | Text der Antwort, die zur Änderung im Verlauf steht |
| internal_comment | boolean | `true`: der Text ist eine interne Notiz |

**Beispiel: Zuständigkeit und Frist setzen**
```bash
curl -X POST -H "Authorization: Token TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"user": 5, "comment": "Bitte bis Ende Monat klären."}' \
     "https://firma.myeliza.ch/api/issue/issue/42/assign"

curl -X POST -H "Authorization: Token TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"deadline": "2026-12-31"}' \
     "https://firma.myeliza.ch/api/issue/issue/42/set_deadline"
```

- Du brauchst das Recht, die Meldung zu ändern. Sonst antwortet die API mit 403, und die Meldung bleibt unverändert.
- In Meldekreisen mit eigenen Status wechselst du den Status mit `set_state`, in den anderen mit den Aktionen `review` bis `reject`.
- Ein Statuswechsel, der im aktuellen Status nicht möglich ist (zum Beispiel `resolve` bei einer erledigten Meldung), gibt 400 mit den Aktionen, die gerade gehen. Die Meldung bleibt unverändert, und ELIZA speichert keine Antwort.
- Zuständig kann nur eine aktive Person aus den Admins und dem Team des Meldekreises werden. Eine bestehende Zuständigkeit ausserhalb davon bleibt erhalten, solange du sie nicht änderst.
- Wechselt eine Aktion nichts und hat sie keinen Text, antwortet die API mit der Meldung, wie sie ist.
- `GET /api/issue/issue/{id}/allowed_actions` nennt, was du bei dieser Meldung gerade ausführen darfst: `transitions` (Aktionen für den Status), `custom_states` (eigene Status für `set_state`), `assign` und `set_deadline`.

### Meldung löschen

```http
DELETE /api/issue/issue/{id}
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
| Meldekreise löschen | `issues.delete_tracker` oder Admin des Meldekreises; vertrauliche Meldekreise nie |
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
     "https://firma.myeliza.ch/api/issue/category?tracker=1"

# 2. Meldung mit Kategorien erstellen
curl -X POST -H "Authorization: Token TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "tracker_id": 1,
       "title": "Produktionsfehler Charge 2024-001",
       "description": "Qualitätsmangel bei Charge 2024-001 festgestellt",
       "category_ids": [1, 3]
     }' \
     "https://firma.myeliza.ch/api/issue/issue"
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
     "https://firma.myeliza.ch/api/issue/category"

# Response: {"id": 5, "tracker": 1, "title": "Lieferantenproblem", "color": "orange"}

# 2. Meldung mit neuer Kategorie erstellen
curl -X POST -H "Authorization: Token TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
       "tracker_id": 1,
       "title": "Verspätete Lieferung Lieferant XY",
       "category_ids": [5]
     }' \
     "https://firma.myeliza.ch/api/issue/issue"
```

## Nächste Schritte

- [Erste Schritte]({{< ref "01-erste-schritte" >}}) - Grundlagen des Meldungen-Moduls
- [Meldekreise verwalten]({{< ref "03-meldekreise-verwalten" >}}) - Kategorien in der Web-Oberfläche
- [Berechtigungskonzept]({{< ref "04-berechtigungskonzept" >}}) - Zugriffssteuerung verstehen
