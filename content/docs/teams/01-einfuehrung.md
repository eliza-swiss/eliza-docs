---
title: "Einführung"
description: ""
weight: "1"
tags:
  - "getting-started"
  - "basics"
  - "spaces"
  - "konzepte"
---


# Einführung

In diesem Kapitel lernst du die Grundkonzepte und die Philosophie des Spaces-Moduls kennen.

## Was sind Spaces?

**Spaces** sind **Kollaborationsräume** in ELIZA, die Teams eine strukturierte Umgebung für Zusammenarbeit bieten. Ein Space ist vergleichbar mit:

- Einem **Projekt-Workspace** in Projektmanagement-Tools
- Einem **Team-Bereich** in Collaboration-Plattformen
- Einem **Arbeitsraum** für eine Abteilung

### Typische Space-Beispiele

- **Projekt "Website Relaunch"**: Alle Aufgaben, Meetings und Dokumente zum Projekt
- **QM-Abteilung**: Verbesserungsmassnahmen, Audits und Dokumentation
- **IT-Support**: Ticket-Verwaltung und Problem-Tracking
- **Geschäftsleitung**: Strategische Planung und Sitzungen

## Kernkomponenten

### 1. Spaces (Kollaborationsräume)

Der Space ist die **oberste Organisationsebene** im Modul.

**Eigenschaften:**

- **Titel**: Name des Space (z.B. "Projekt Alpha")
- **Beschreibung**: Zweck und Ziele
- **Status**: Öffentlich oder Geschützt
- **Owner**: Ersteller mit vollen Rechten
- **Admins**: Verwaltungsteam
- **Team**: Mitglieder mit Zugriff
- **Archivierung**: Abgeschlossene Spaces ausblenden

**Status-Arten:**

- **Öffentlich**: Alle Benutzer mit `teams.view_space` Permission sehen den Space
- **Geschützt**: Nur Team-Mitglieder haben Zugriff

### 2. Boards (Kanban-Boards)

Boards sind **Aufgabenverwaltungs-Systeme** innerhalb eines Space.

**Eigenschaften:**

- **Titel**: Name des Boards (z.B. "Sprint 1", "Backlog")
- **Beschreibung**: Zweck des Boards
- **Ansicht**: Kanban (visuell) oder Liste (tabellarisch)
- **Status**: Vorlage, in Bearbeitung, erledigt
- **Listen**: Spalten im Kanban-Board (ToDo, Doing, Done)
- **Team**: Vererbung vom Space oder eigenes Team
- **Verknüpfungen**: Prozesse, Issues, Projekte

**Standard-Listen:**

Bei der Board-Erstellung werden automatisch erstellt:

1. **ToDo** (Zielzustand: neu)
2. **Doing** (Zielzustand: doing)
3. **Wait** (Zielzustand: wait)
4. **Done** (Zielzustand: done)

### 3. Lists (Spalten)

Lists sind **Spalten im Kanban-Board**, die den Workflow-Status repräsentieren.

**Eigenschaften:**

- **Titel**: Name der Liste (z.B. "In Prüfung")
- **Beschreibung**: Erklärung des Status
- **Zielzustand**: Status, den Cards beim Verschieben in diese Liste erhalten
- **Archivierungs-Aktion**: Automatische Archivierung von eingehenden Cards
- **Reihenfolge**: Position im Board (Drag & Drop)

**Zielzustände:**

- `neu` - Neue Aufgaben
- `selektiert` - Ausgewählte Aufgaben für nächsten Sprint
- `doing` - In Bearbeitung
- `wait` - Wartend auf Feedback/Input
- `done` - Erledigt
- `cancelled` - Abgebrochen
- `template` - Vorlagen

### 4. Cards (Aufgaben/Tickets)

Cards sind **einzelne Aufgaben oder Tickets** im Board.

**Eigenschaften:**

- **Titel**: Kurze Beschreibung der Aufgabe
- **Beschreibung**: Detaillierte Informationen
- **Status**: Aktueller Workflow-Status (FSM)
- **Liste**: Aktuelle Spalte im Board
- **Zugewiesen an**: Verantwortlicher Benutzer
- **Beitragende**: Weitere Personen, die mitarbeiten
- **Deadline**: Frist mit Farbcodierung
- **Labels**: Farb-Tags zur Kategorisierung
- **Externe Referenz**: URL zu externen Ressourcen
- **Checklisten**: Unter-Aufgaben mit Checkboxen
- **Dateien**: Anhänge
- **Kommentare**: Diskussion und Historie
- **Archivierung**: Ausblenden abgeschlossener Cards

**Card-Status-Workflow:**

```text
[Entwurf] → [Neu] → [Selektiert] → [Doing] → [Wait] → [Done]
                                                ↓
                                          [Cancelled]

[Template] → Neue Card erstellen
```

**Deadline-Farbcodierung:**

- 🔴 **Rot**: Überfällig (Deadline überschritten)
- 🟠 **Orange**: Bald fällig (innerhalb 7 Tage)
- 🟢 **Grün**: Noch Zeit (mehr als 7 Tage)

### 5. Meetings (Sitzungen)

Meetings sind **strukturierte Sitzungen** mit Traktanden und Beschlüssen.

**Eigenschaften:**

- **Titel**: Name der Sitzung (z.B. "Jahresplanung 2025")
- **Nummer**: Eindeutige Identifikation (z.B. "GL-2025-01")
- **Beschreibung**: Zweck der Sitzung
- **Status**: geplant, vorbereitet, abgeschlossen, Vorlage
- **Beginn/Ende**: Zeitpunkt der Sitzung
- **Ort**: Physischer oder virtueller Ort
- **Teilnehmer**: Anwesende Personen
- **Admins**: Sitzungsleitung
- **Traktanden**: Agenda-Punkte (Meetingitems)
- **Dateien**: Präsentationen, Unterlagen

**Jitsi-Integration:**

Jedes Meeting hat eine eindeutige **Jitsi-URL** für Video-Konferenzen.

### 6. Meetingitems (Traktanden)

Meetingitems sind **Agenda-Punkte** einer Sitzung.

**Eigenschaften:**

- **Titel**: Kurzbeschreibung des Traktandums
- **Nummer**: Position in der Agenda (z.B. "1.1", "2.3")
- **Text**: Detaillierte Beschreibung/Diskussionsbasis
- **Ergebnis**: Zusammenfassung der Diskussion
- **Hierarchie**: Parent-Child Beziehungen für Sub-Traktanden
- **Verknüpfte Cards**: Bezug zu Aufgaben
- **Beitragende**: Personen, die das Traktandum bearbeiten
- **Beschlüsse**: Entscheidungen aus diesem Traktandum

### 7. Decisions (Beschlüsse)

Decisions sind **formelle Entscheidungen** aus Sitzungen.

**Eigenschaften:**

- **Nummer**: Beschluss-Nummer (z.B. "BE-2025-001")
- **Datum**: Beschlussdatum
- **Text**: Beschlusstext
- **Verantwortung**: Zuständige Person/Abteilung
- **Frist**: Umsetzungs-Deadline
- **Status**: offen, in Arbeit, erledigt
- **Traktandum**: Bezug zum Meeting-Traktandum

### 8. Labels (Farb-Tags)

Labels sind **farbige Tags** zur Kategorisierung von Cards.

**Standard-Farben:**

- 🔴 **Rot**: Dringend, Blocker, Fehler
- 🟢 **Grün**: Bereit, OK, Genehmigt
- 🟠 **Orange**: Warnung, Achtung, In Prüfung
- ⚪ **Transparent**: Neutral, Sonstiges

**Eigenschaften:**

- **Titel**: Beschriftung des Labels (optional)
- **Farbe**: Eine der vier Standard-Farben
- **Board-spezifisch**: Labels gehören zu einem Board

### 9. Comments (Kommentare)

Comments ermöglichen **Diskussionen und Notizen** zu allen Objekten.

**Eigenschaften:**

- **Kommentar**: Text-Inhalt
- **System-Kommentar**: Automatische Benachrichtigungen
- **Benutzer**: Autor des Kommentars
- **Dateien**: Anhänge zum Kommentar
- **Erstellungsdatum**: Zeitstempel
- **Änderungsdatum**: Letzte Bearbeitung

**Verwendung:**

- Cards: Diskussionen über Aufgaben
- Meetings: Notizen zu Sitzungen
- Meetingitems: Kommentare zu Traktanden
- Files: Feedback zu Dateien

### 10. Files (Dateien)

Files sind **Dokument-Anhänge** für alle Objekte im Space.

**Eigenschaften:**

- **Titel**: Dateiname oder Beschreibung
- **Beschreibung**: Zusätzliche Informationen
- **Datei**: Hochgeladene Datei
- **Space**: Zugehöriger Space (für Struktur)
- **Parent**: Objekt, zu dem die Datei gehört
- **Erstellungsdatum**: Upload-Zeitpunkt

**Unterstützte Formate:**

- **Dokumente**: PDF, DOCX, DOTX, XLSX, PPTX
- **Bilder**: JPG, PNG, GIF, WEBP
- **Videos**: MP4, WEBM
- **Diagramme**: Excalidraw

**Text-Extraktion:**

PDF und DOCX Dateien werden automatisch für die Volltextsuche extrahiert.

## Hierarchie und Beziehungen

### Organisations-Hierarchie

```text
Space (Workspace)
   ├─ Boards (Kanban/Listen)
   │  └─ Lists (Spalten)
   │     └─ Cards (Aufgaben)
   │        ├─ Comments
   │        ├─ Files
   │        ├─ Checklists
   │        └─ Labels
   │
   └─ Meetings (Sitzungen)
      └─ Meetingitems (Traktanden)
         ├─ Decisions (Beschlüsse)
         ├─ Comments
         └─ Files
```

### Berechtigungs-Hierarchie

```text
Space
   ├─ Owner (volle Rechte)
   ├─ Admins (Verwaltung)
   └─ Team (Mitglieder)
      ↓
Board
   ├─ inherit_team=True → Space-Team wird vererbt
   └─ inherit_team=False → Eigenes Board-Team
      ↓
Cards
   ├─ assigned_user (Zugewiesen)
   └─ contributors (Beitragende)
```

## Workflow-Konzept

### Card-Workflow

Cards durchlaufen einen **Status-Workflow (FSM - Finite State Machine)**:

```text
Status-Übergänge:

draft → new
   ↓
new → selected → doing → wait → done
   ↓              ↓       ↓
template      cancelled cancelled
```

**Status-Bedeutungen:**

- **draft**: Entwurf, noch nicht bereit
- **new**: Neue Aufgabe, im Backlog
- **selected**: Für aktuellen Sprint ausgewählt
- **doing**: In Bearbeitung
- **wait**: Wartend auf Input/Feedback
- **done**: Abgeschlossen
- **cancelled**: Abgebrochen/nicht mehr relevant
- **template**: Vorlage für wiederkehrende Aufgaben

### Drag & Drop Workflow

Cards ändern ihren Status automatisch beim Verschieben:

1. Card wird in Liste gezogen
2. Liste hat `target_state` definiert
3. Card erhält automatisch den Zielzustand der Liste
4. Optional: Automatische Archivierung bei bestimmten Listen

**Beispiel:**

```text
Card: "Feature implementieren"
Status: doing

Ziehen in Liste "Done" (target_state: done)
   ↓
Card-Status ändert sich automatisch zu "done"
```

## Ansichten

### Kanban-Ansicht

**Visuelle Darstellung** der Aufgaben als Karten in Spalten.

**Vorteile:**

- 👀 **Übersichtlich**: Workflow auf einen Blick
- 🎨 **Visuell**: Farben, Labels, Deadlines sichtbar
- 🖱️ **Intuitiv**: Drag & Drop für Status-Änderungen
- 📊 **Fortschritt**: Anzahl Cards pro Liste ersichtlich

**Ideal für:**

- Sprint-Planung
- Workflow-Visualisierung
- Team-Meetings
- Tägliche Standups

### Listen-Ansicht

**Tabellarische Darstellung** aller Cards mit allen Details.

**Vorteile:**

- 📝 **Detailliert**: Alle Informationen auf einen Blick
- 🔍 **Filterbar**: Such- und Filterfunktionen
- 📊 **Sortierbar**: Nach Spalten sortieren
- 📤 **Exportierbar**: Als Excel exportieren

**Ideal für:**

- Detaillierte Planung
- Status-Reports
- Prioritäten-Listen
- Export für externe Tools

## Integrationen

### Prozess-Integration

Boards können mit **BPMN-Prozessen** verknüpft werden:

- Board zeigt Prozess-Diagramm an
- Cards können Prozess-Schritten zugeordnet werden
- Workflow folgt Prozess-Logik

### Issue-Integration

Boards können mit **Issues** verknüpft werden:

- Automatische Card-Erstellung aus Issues
- Synchronisation von Status
- Verlinkung zwischen Issue und Card

### Projekt-Integration

Boards können mit **Projekten** verknüpft werden:

- Projekt-Boards für Aufgaben-Tracking
- Fortschritts-Visualisierung
- Ressourcen-Planung

### CRM-Integration

Cards unterstützen **CRM-Participations**:

- Verknüpfung mit Kunden/Kontakten
- Kundenspezifische Aufgaben
- Sales-Pipeline in Kanban-Form

### Timetracker-Integration

Cards können **Arbeitszeiten erfassen**:

- Zeiterfassung direkt auf Card
- Summe der erfassten Zeit
- Zeitauswertungen pro Board/Space

### SWOT-Integration

Spaces unterstützen **SWOT-Einschätzungen**:

- Strategische Analyse im Space-Kontext
- Verknüpfung von Cards mit SWOT-Elementen

## Berechtigungs-Übersicht

### Space-Level

- **Owner**: Ersteller, volle Kontrolle
- **Admins**: Verwaltung, Bearbeitung
- **Team**: Zugriff auf Space-Inhalte

### Board-Level

- **inherit_team=True**: Verwendet Space-Team
- **inherit_team=False**: Eigenes Board-Team + Space-Admins

### Card-Level

- **assigned_user**: Kann Card bearbeiten
- **contributors**: Können Card bearbeiten
- **Space-Admins**: Können alle Cards bearbeiten (bei öffentlichen Spaces)

### Meeting-Level

- **Space-Admins**: Voller Zugriff
- **Meeting-Admins**: Können Meeting bearbeiten
- **Contributors (Traktanden)**: Können eigene Traktanden bearbeiten

**Mehr Details:** Siehe Kapitel [Berechtigungskonzept]({{< ref "05-berechtigungskonzept" >}})

## Wichtige Konzepte

### Vererbung

**Team-Vererbung:**

- Boards können Team vom Space erben (`inherit_team=True`)
- Vereinfacht Berechtigungsverwaltung
- Änderungen am Space-Team gelten automatisch für Boards

### Archivierung

**Cards archivieren:**

- Archivierte Cards werden ausgeblendet
- Können wieder aktiviert werden
- Behalten alle Daten und Historie
- Reduziert Unübersichtlichkeit

**Boards/Spaces archivieren:**

- Abgeschlossene Projekte ausblenden
- Archiv-Ansicht für Zugriff auf alte Daten
- Keine Bearbeitung mehr möglich

### Templates

**Board-Templates:**

- Boards mit Status "Vorlage"
- Können kopiert werden für neue Projekte
- Enthalten Standard-Listen und Labels

**Card-Templates:**

- Cards mit Status "template"
- Können als Vorlage für neue Cards dienen
- Enthalten Standard-Beschreibungen und Checklisten

**Meeting-Templates:**

- Meetings mit Status "Vorlage"
- Standard-Traktanden für wiederkehrende Sitzungen
- Können kopiert werden

## Nächste Schritte

Jetzt, wo du die Konzepte kennst, lerne im nächsten Kapitel:

- [Spaces verwalten]({{< ref "02-spaces-verwalten" >}}): Erstelle und verwalte Kollaborationsräume
- [Kanban Boards]({{< ref "03-kanban-boards" >}}): Nutze die Aufgabenverwaltung
- [Sitzungen]({{< ref "04-sitzungen" >}}): Dokumentiere Meetings und Beschlüsse

---

**Tipp**: Beginne mit einem einfachen Space und einem Board, um die Funktionen kennenzulernen. Du kannst später jederzeit erweitern.
