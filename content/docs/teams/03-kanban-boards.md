---
title: "Kanban Boards"
description: ""
weight: "3"
tags:
  - "kanban"
  - "boards"
  - "cards"
  - "workflow"
  - "tasks"
---


# Kanban Boards

In diesem Kapitel lernst du, wie du Kanban-Boards und Cards (Aufgaben) für effektive Aufgabenverwaltung nutzt.

## Board erstellen

### Voraussetzungen

- Du musst Mitglied eines Space sein
- Du benötigst die Permission `teams.add_board`

### Schritt 1: Board-Formular öffnen

1. Öffne einen Space
2. Klicke auf den Tab **"Boards"**
3. Klicke auf **"+ Neues Board"**

### Schritt 2: Formular ausfüllen

#### Pflichtfelder

**Titel** (Pflicht):

- Name des Boards
- Beispiele:
  - "Sprint 1"
  - "Backlog"
  - "Bug Tracking"
  - "Roadmap Q1 2025"

**Darstellungsart** (Pflicht):

Wähle zwischen:

- **Kanban**: Visuelle Karten-Ansicht mit Drag & Drop
- **Liste**: Tabellarische Ansicht mit allen Details

#### Optionale Felder

**Beschreibung**:

- Zweck und Ziele des Boards
- Beispiel: "Sprint-Board für die Entwicklung des Website-Relaunches"

**Status**:

- **in Bearbeitung** (Standard): Aktives Board
- **Vorlage**: Board als Template für Kopien
- **erledigt**: Abgeschlossenes Board

**Berechtigungen vererben**:

- ✅ **Aktiviert** (empfohlen): Board nutzt das Space-Team
- ❌ **Deaktiviert**: Board hat eigenes Team

**Verknüpfungen** (optional):

- **Prozess**: BPMN-Prozess anzeigen
- **Meldung**: Issue-Verknüpfung
- **Projekt**: Projekt-Verknüpfung

### Schritt 3: Speichern

Klicke auf **"Speichern"**.

✅ **Erfolg!** Das Board wird mit **Standard-Listen** erstellt:

1. **ToDo** (Zielzustand: neu)
2. **Doing** (Zielzustand: doing)
3. **Wait** (Zielzustand: wait)
4. **Done** (Zielzustand: done)

Zusätzlich werden **Standard-Labels** erstellt:

- 🔴 Rot
- 🟢 Grün
- 🟠 Orange

## Board-Ansichten

### Kanban-Ansicht

**Visuelle Darstellung** mit Spalten und Karten.

**Vorteile:**

- 👀 **Übersichtlich**: Workflow auf einen Blick
- 🖱️ **Intuitiv**: Drag & Drop für Status-Änderungen
- 🎨 **Visuell**: Farben, Labels, Deadlines
- 📊 **Fortschritt**: Anzahl pro Liste sichtbar

**Funktionen:**

- Drag & Drop zwischen Listen
- Farbcodierte Deadlines
- Labels sichtbar
- Fortschrittsbalken
- Schnellaktionen

**Ansicht wechseln:**

Klicke auf **"Ansicht: Liste"** um zur Listen-Ansicht zu wechseln.

### Karten sortieren

Über den Listen der Kanban-Ansicht steht die Sortierleiste. Sie ordnet die Karten in jeder Liste:

| Sortierung | Reihenfolge |
|------------|-------------|
| **Manuell** | Die von Hand gezogene Reihenfolge, gleich für alle |
| **Label** | Rot vor Orange vor Grün, Karten ohne farbiges Label zuunterst |
| **Letzte Änderung** | Zuletzt geänderte Karten zuoberst |
| **Frist** | Früheste Frist zuoberst, Karten ohne Frist zuunterst |
| **A–Z** | Alphabetisch nach Titel |

**So sortiert "A–Z":**

- Gross- und Kleinschreibung spielt keine Rolle
- Umlaute und Akzente zählen wie der Grundbuchstabe ("Änderung" steht bei A, "Łódź" bei L)
- Zahlen zählen nach ihrem Wert ("Karte 2" steht vor "Karte 10"); Titel, die mit einer Zahl beginnen, stehen vor den übrigen
- Anführungszeichen, Klammern sowie "¿" und "¡" am Anfang zählen nicht ("«Projekt Alpha»" steht bei P)
- Karten ohne Titel stehen zuunterst

**Gut zu wissen:**

- Die Sortierung ändert nur die Anzeige. Die manuelle Reihenfolge bleibt erhalten; mit **"Manuell"** kommst du zu ihr zurück.
- Solange eine Sortierung aktiv ist, lassen sich Karten nicht ziehen, weder innerhalb einer Liste noch in eine andere. Wähle dafür **"Manuell"**.
- ELIZA merkt sich deine Sortierung pro Board in deinem Browser. Andere Personen sehen das Board in ihrer eigenen Sortierung, und in einem anderen Browser oder auf einem anderen Gerät beginnt das Board wieder mit **"Manuell"**.

### Listen-Ansicht

**Tabellarische Darstellung** aller Cards.

**Vorteile:**

- 📝 **Detailliert**: Alle Felder auf einen Blick
- 🔍 **Filterbar**: DataTables Suche und Filter
- 📊 **Sortierbar**: Nach Spalten sortieren
- 📤 **Exportierbar**: Als Excel exportieren

**Spalten:**

| Spalte | Beschreibung |
|--------|--------------|
| **Status** | Card-Status mit Icon |
| **Titel** | Aufgabentitel (klickbar) |
| **Zugewiesen** | Assigned User |
| **Liste** | Aktuelle Spalte |
| **Deadline** | Frist mit Farbcodierung |
| **Labels** | Farb-Tags |
| **Aktionen** | Bearbeiten, Verschieben, Archivieren |

**Ansicht wechseln:**

Klicke auf **"Ansicht: Kanban"** um zur Kanban-Ansicht zu wechseln.

## Listen verwalten

### Liste erstellen

**Schritt-für-Schritt:**

1. Öffne Board in Kanban-Ansicht
2. Klicke auf **"+ Neue Liste"**
3. Gib Titel ein (z.B. "In Prüfung")
4. Wähle **Zielzustand**:
   - `neu` - Neue Aufgaben
   - `selektiert` - Ausgewählte Aufgaben
   - `doing` - In Bearbeitung
   - `wait` - Wartend
   - `done` - Erledigt
   - `cancelled` - Abgebrochen
5. Optional: Aktiviere **"Eingehende Cards archivieren"**
6. Speichere

**Zielzustand-Bedeutung:**

Wenn eine Card in diese Liste gezogen wird, erhält sie automatisch den Zielzustand.

**Beispiel:**

```text
Card Status: "doing"
   ↓
Ziehen in Liste "Fertig" (Zielzustand: done)
   ↓
Card Status ändert sich automatisch zu "done"
```

### Liste bearbeiten

**Schritt-für-Schritt:**

1. Klicke auf Listen-Titel
2. Wähle **"Liste bearbeiten"**
3. Ändere Felder
4. Speichere

### Listen-Reihenfolge ändern

**Drag & Drop:**

1. Klicke auf Listen-Header
2. Ziehe die Liste an die gewünschte Position
3. Reihenfolge wird automatisch gespeichert

**Empfohlene Reihenfolge:**

```text
ToDo → Selektiert → Doing → Wait → Done → Archiv
```

### Liste archivieren/löschen

**Archivieren:**

- Liste und alle Cards werden archiviert
- Können reaktiviert werden
- Empfohlen für temporäre Listen

**Löschen:**

- ⚠️ **Permanent**: Kann nicht rückgängig gemacht werden
- Nur möglich wenn Liste leer ist
- Verschiebe Cards vorher

## Cards erstellen

### Schnell-Erstellung

**In Kanban-Ansicht:**

1. Klicke auf **"+ Neue Card"** in einer Liste
2. Gib Titel ein
3. Drücke `Enter`

✅ **Fertig!** Card wird mit Minimal-Infos erstellt.

### Detaillierte Erstellung

**In Kanban-Ansicht:**

1. Klicke auf **"+ Neue Card"** in einer Liste
2. Klicke auf **"Details"** im Popup
3. Fülle alle Felder aus (siehe unten)
4. Speichere

**In Listen-Ansicht:**

1. Klicke auf **"+ Neue Card"** oben rechts
2. Fülle Formular aus
3. Speichere

### Card-Formular-Felder

#### Pflichtfelder

**Titel**:

- Kurze, prägnante Beschreibung
- Beispiele:
  - "Login-Bug beheben"
  - "Neue Startseite designen"
  - "Datenbank-Backup implementieren"

**Liste**:

- In welche Spalte soll die Card?
- Bestimmt initialen Status

#### Empfohlene Felder

**Beschreibung**:

- Detaillierte Informationen
- Akzeptanzkriterien
- Technische Details
- Links zu Dokumenten

**Beispiel:**

```markdown
## Beschreibung
Benutzer können sich nicht einloggen wenn das Passwort Sonderzeichen enthält.

## Reproduktion
1. Gehe zu /login
2. Gib Passwort mit # ein
3. Error: "Invalid credentials"

## Akzeptanzkriterien
- [ ] Login funktioniert mit allen Sonderzeichen
- [ ] Tests für Sonderzeichen hinzugefügt
- [ ] Dokumentation aktualisiert

## Technische Details
Problem liegt in der Passwort-Validierung (auth/validators.py)
```

**Zugewiesen an**:

- Verantwortlicher Benutzer
- Erhält Benachrichtigungen
- Kann Card bearbeiten

**Beitragende**:

- Weitere Personen, die mitarbeiten
- Können Card bearbeiten
- Erhalten Benachrichtigungen

**Deadline**:

- Frist für Fertigstellung
- Farbcodierung:
  - 🔴 Überfällig
  - 🟠 Bald fällig (<7 Tage)
  - 🟢 Noch Zeit (>7 Tage)

**Labels**:

- Kategorisierung
- Mehrere Labels möglich
- Standard-Labels:
  - 🔴 Rot: Dringend, Blocker, Fehler
  - 🟢 Grün: Bereit, OK, Genehmigt
  - 🟠 Orange: Warnung, In Prüfung

**Externe Referenz**:

- URL zu externen Ressourcen
- Beispiele:
  - GitHub Issue
  - Jira Ticket
  - Externe Dokumentation
  - Figma Design

**Titelbild**:

- Visuelles Preview
- Erscheint in Kanban-Ansicht
- Unterstützt: JPG, PNG, GIF, WEBP

## Cards bearbeiten

### Card öffnen

**In Kanban-Ansicht:**

- Klicke auf die Card

**In Listen-Ansicht:**

- Klicke auf den Titel

### Schnell-Bearbeitung

**Titel ändern:**

- Doppelklick auf Titel in Kanban-Ansicht
- Inline-Bearbeitung

**Status ändern:**

- Drag & Drop in andere Liste
- Status ändert sich automatisch

**Zuordnung ändern:**

- Klicke auf Benutzer-Avatar
- Wähle neuen Benutzer

### Detail-Bearbeitung

**Card-Detail öffnen:**

1. Klicke auf Card
2. Detail-Ansicht öffnet sich

**Änderbare Bereiche:**

- **Kopfbereich**: Titel, Status, Liste
- **Beschreibung**: Markdown-Editor
- **Metadaten**: Zuordnung, Deadline, Labels
- **Checklisten**: Unter-Aufgaben
- **Dateien**: Anhänge
- **Kommentare**: Diskussion
- **Historie**: Änderungslog

### Checklisten hinzufügen

**Checkliste erstellen:**

1. Öffne Card-Detail
2. Klicke auf **"Checkliste hinzufügen"**
3. Gib Titel ein (z.B. "Akzeptanzkriterien")
4. Füge Items hinzu

**Checklist-Items:**

```text
☐ Backend-API implementiert
☐ Frontend-Integration
☐ Tests geschrieben
☐ Code Review durchgeführt
☑ Dokumentation aktualisiert (erledigt)
```

**Fortschrittsanzeige:**

- Zeigt Prozent der erledigten Items
- Sichtbar in Kanban und Listen-Ansicht
- Beispiel: "3/5 (60%)"

### Dateien anhängen

**Datei hochladen:**

1. Öffne Card-Detail
2. Klicke auf **"Datei hinzufügen"**
3. Wähle Datei oder Drag & Drop
4. Optional: Titel und Beschreibung
5. Speichere

**Unterstützte Formate:**

- **Dokumente**: PDF, DOCX, XLSX, PPTX
- **Bilder**: JPG, PNG, GIF, WEBP
- **Videos**: MP4, WEBM
- **Andere**: Alle Dateitypen

**Text-Extraktion:**

PDF und DOCX werden automatisch für Volltextsuche extrahiert.

### Kommentare hinzufügen

**Kommentar schreiben:**

1. Öffne Card-Detail
2. Scrolle zu **"Kommentare"**
3. Schreibe Kommentar
4. Optional: Datei anhängen
5. Klicke auf **"Kommentieren"**

**Kommentar-Arten:**

- **Benutzer-Kommentare**: Manuelle Kommentare
- **System-Kommentare**: Automatische Benachrichtigungen
  - Status-Änderungen
  - Zuordnungs-Änderungen
  - Deadline-Änderungen

**Benachrichtigungen:**

- Zugewiesene Benutzer werden benachrichtigt
- Beitragende erhalten Updates
- @-Mentions funktionieren

## Card-Workflow

### Status-Übergänge

Cards durchlaufen einen **FSM-Workflow**:

```text
neu → selektiert → doing → wait → done
 ↓                   ↓       ↓
template          cancelled
```

**Status-Bedeutungen:**

- **draft**: Entwurf, noch nicht bereit
- **neu**: Im Backlog, noch nicht gestartet
- **selektiert**: Für Sprint/Iteration ausgewählt
- **doing**: Aktiv in Bearbeitung
- **wait**: Wartend auf Input/Feedback/Blocker
- **done**: Abgeschlossen und getestet
- **cancelled**: Abgebrochen, nicht mehr relevant
- **template**: Vorlage für wiederkehrende Aufgaben

### Status manuell ändern

**In Card-Detail:**

1. Öffne Card
2. Klicke auf Status-Dropdown
3. Wähle neuen Status
4. Speichere

**Automatische Änderung:**

Beim Verschieben in eine Liste mit `target_state` ändert sich der Status automatisch.

### Card archivieren

**Wann archivieren:**

- ✅ Card ist erledigt und nicht mehr relevant
- ✅ Board soll übersichtlicher werden
- ✅ Historische Daten sollen erhalten bleiben

**Archivierung:**

1. Öffne Card
2. Klicke auf **"Archivieren"**
3. Bestätige

**Auswirkungen:**

- Card wird in Kanban/Listen-Ansicht ausgeblendet
- Card bleibt in Datenbank erhalten
- Kann reaktiviert werden
- Sichtbar in Archiv-Ansicht

**Archiv anzeigen:**

1. Öffne Board
2. Klicke auf **"Archiv anzeigen"**
3. Du siehst alle archivierten Cards

**Card reaktivieren:**

1. Öffne Archiv
2. Wähle Card
3. Klicke auf **"Reaktivieren"**
4. Card erscheint wieder im Board

### Card kopieren

**Von Template erstellen:**

1. Erstelle Card mit Status "template"
2. In Listen-Ansicht: Status-Icon zeigt **+** Symbol
3. Klicke auf **+**
4. Card wird kopiert mit Status "neu"

**Manuelle Kopie:**

1. Öffne Card
2. Klicke auf **"Kopieren"**
3. Wähle Ziel-Liste
4. Anpassen und Speichern

### Card verschieben

**Zwischen Listen (Kanban):**

- Drag & Drop in andere Liste
- Status ändert sich automatisch

**Zwischen Boards:**

1. Öffne Card
2. Klicke auf **"Verschieben"**
3. Wähle Ziel-Board und -Liste
4. Bestätige

**Zwischen Spaces:**

Aktuell nicht möglich. Alternative:

1. Kopiere Card
2. Erstelle in anderem Space neu
3. Archiviere Original

## Labels verwalten

### Label erstellen

**Schritt-für-Schritt:**

1. Öffne Board-Einstellungen
2. Klicke auf **"Labels"**
3. Klicke auf **"+ Neues Label"**
4. Wähle **Farbe** (Rot, Grün, Orange, Transparent)
5. Gib **Titel** ein (z.B. "Dringend", "Bug", "Feature")
6. Speichere

### Label zu Card hinzufügen

**In Card-Detail:**

1. Öffne Card
2. Klicke auf **"Labels"**
3. Wähle Labels aus Liste
4. Speichere

**Mehrere Labels:**

Cards können mehrere Labels gleichzeitig haben.

### Label bearbeiten/löschen

**Bearbeiten:**

1. Board-Einstellungen → Labels
2. Klicke auf Label
3. Ändere Titel oder Farbe
4. Speichere

**Löschen:**

1. Board-Einstellungen → Labels
2. Klicke auf **"Löschen"** beim Label
3. Bestätige

⚠️ **Warnung**: Löschen entfernt Label von allen Cards.

## Board-Einstellungen

### Board bearbeiten

**Zugriff:**

1. Öffne Board
2. Klicke auf **"Einstellungen"** (⚙️)

**Änderbare Einstellungen:**

- **Titel**: Board umbenennen
- **Beschreibung**: Zweck aktualisieren
- **Ansicht**: Kanban ↔ Liste wechseln
- **Status**: Aktiv, Vorlage, Erledigt
- **Team-Vererbung**: Ein-/Ausschalten
- **Verknüpfungen**: Prozess, Issue, Projekt

### Board-Team verwalten

**Eigenes Board-Team aktivieren:**

1. Board-Einstellungen öffnen
2. Deaktiviere **"Berechtigungen vererben"**
3. Speichere

**Team-Mitglieder hinzufügen:**

1. Öffne Board-Team-Verwaltung
2. Klicke auf **"Mitglied hinzufügen"**
3. Wähle Benutzer
4. Speichere

**Wichtig:**

- Board-Team ist **zusätzlich** zu Space-Admins
- Space-Admins haben immer Zugriff
- Board-Team-Mitglieder können alle Cards bearbeiten

### Board archivieren

**Archivierung:**

1. Öffne Board
2. Klicke auf **"Archivieren"**
3. Bestätige

**Auswirkungen:**

- Board wird ausgeblendet
- Alle Cards werden mitarchiviert
- Board ist schreibgeschützt
- Zugriff über Archiv

### Board löschen

⚠️ **Warnung**: Löschen ist permanent!

**Voraussetzungen:**

- Du musst Space-Admin sein
- Board sollte keine wichtigen Daten enthalten

**Löschen:**

1. Öffne Board
2. Klicke auf **"Löschen"**
3. Bestätige mit Board-Titel
4. Endgültig löschen

## Fortschritts-Tracking

### Board-Fortschritt

**Automatische Berechnung:**

```text
Fortschritt = (Anzahl Done Cards / Anzahl Total Cards) * 100%
```

**Beispiel:**

- Total Cards: 20
- Done Cards: 15
- **Fortschritt: 75%**

**Anzeige:**

- Fortschrittsbalken im Board-Header
- Prozent-Anzeige

### Card-Fortschritt

**Checklist-basiert:**

```text
Fortschritt = (Erledigte Items / Total Items) * 100%
```

**Beispiel:**

- Total Items: 5
- Erledigt: 3
- **Fortschritt: 60%**

**Anzeige:**

- Fortschrittsbalken in Card
- "3/5" Anzeige

## Zeiterfassung

### Voraussetzung

Timetracker-Modul muss aktiviert sein (`TIMETRACKER_ENABLED = True`).

### Zeit auf Card erfassen

**Schritt-für-Schritt:**

1. Öffne Card-Detail
2. Klicke auf **"Zeit erfassen"**
3. Gib Stunden ein (z.B. "2.5h")
4. Optional: Beschreibung
5. Speichere

**Summe anzeigen:**

Card zeigt Gesamtzeit aller Zeiterfassungen:

```text
⏱️ 8.5 Stunden erfasst
```

### Zeitauswertung

**Pro Board:**

1. Board-Einstellungen öffnen
2. Klicke auf **"Zeitauswertung"**
3. Siehe Gesamt-Zeit aller Cards

**Export:**

Zeiterfassungen können als Excel exportiert werden.

## Suche und Filter

### Schnellsuche

**In Listen-Ansicht:**

DataTables-Suche oben rechts:

```text
🔍 Suche...
```

Sucht in:

- Card-Titel
- Beschreibung
- Zugewiesene Benutzer

### Erweiterte Filter

**Filter-Optionen:**

- **Status**: Nur bestimmte Status
- **Zugewiesen**: Nur meine Cards
- **Labels**: Nach Label filtern
- **Deadline**: Überfällig, Heute, Diese Woche

**Filter kombinieren:**

Mehrere Filter können kombiniert werden.

## Export

### Board exportieren

**Als Excel:**

1. Öffne Board (Listen-Ansicht)
2. Klicke auf **"Exportieren"**
3. Wähle **"Excel"**
4. Datei wird heruntergeladen

**Enthält:**

- Alle Card-Felder
- Status, Zuordnung, Deadline
- Labels, Beschreibungen
- Checklisten-Status

**Als Word:**

1. Öffne Board
2. Klicke auf **"Exportieren"**
3. Wähle **"Word"**
4. Formatiertes Dokument wird erstellt

## Best Practices

### ✅ Board-Struktur

**Empfohlene Listen:**

```text
Backlog → ToDo → Doing → Review → Done → Archiv
```

**Oder für Support:**

```text
Neu → Zugewiesen → In Bearbeitung → Wartet auf Kunde → Gelöst
```

### ✅ Card-Verwaltung

**Gute Card-Titel:**

- ✅ "Login-Bug: Sonderzeichen nicht erlaubt"
- ✅ "Feature: Dark Mode implementieren"
- ✅ "Refactoring: API-Client umstrukturieren"

**Schlechte Card-Titel:**

- ❌ "Bug"
- ❌ "TODO"
- ❌ "Machen"

### ✅ Workflow-Disziplin

**Empfehlungen:**

1. **Kleine Cards**: Max. 1-2 Tage Aufwand
2. **Klare Beschreibungen**: Akzeptanzkriterien definieren
3. **Zuordnung**: Immer einen Verantwortlichen
4. **Deadlines**: Realistische Fristen setzen
5. **Archivierung**: Regelmässig alte Cards archivieren
6. **Reviews**: Wöchentliches Board-Review

### ✅ Labels nutzen

**Empfohlenes Label-System:**

- 🔴 **Rot**: Blocker, Kritisch, Dringend
- 🟠 **Orange**: Bug, Achtung, Zu klären
- 🟢 **Grün**: Feature, Enhancement, Approved

### ✅ Checklisten

**Für jede Card:**

```markdown
## Akzeptanzkriterien
- [ ] Funktionalität implementiert
- [ ] Tests geschrieben
- [ ] Code Review durchgeführt
- [ ] Dokumentation aktualisiert
```

## Häufige Fehler

### ❌ Zu grosse Cards

**Problem:** Cards mit 2 Wochen Aufwand

**Lösung:** Teile in kleinere Cards (max. 2 Tage)

### ❌ Unklare Zuständigkeiten

**Problem:** Niemand weiss, wer die Card macht

**Lösung:** Weise immer einen Benutzer zu

### ❌ Vergessene Archivierung

**Problem:** Board hat 500+ Cards, davon 400 done

**Lösung:**

- Archiviere abgeschlossene Cards regelmässig
- Nutze automatische Archivierung in "Done"-Liste

### ❌ Keine Beschreibungen

**Problem:** Card-Titel "Login-Bug", keine weiteren Infos

**Lösung:** Immer Beschreibung mit Reproduktions-Schritten

### ❌ Zu viele Boards

**Problem:** 20 Boards im Space, niemand findet etwas

**Lösung:** Konsolidiere, archiviere alte Boards

## Nächste Schritte

Jetzt, wo du Kanban-Boards meisterst, lerne im nächsten Kapitel:

- [Sitzungen]({{< ref "04-sitzungen" >}}): Meetings und Beschlüsse verwalten
- [Berechtigungskonzept]({{< ref "05-berechtigungskonzept" >}}): Verstehe die Zugriffskontrolle
- [Zusammenarbeit]({{< ref "06-zusammenarbeit" >}}): Nutze Kollaborations-Features

---

**Tipp**: Starte mit einem einfachen Board (ToDo, Doing, Done) und erweitere die Struktur nach Bedarf.
