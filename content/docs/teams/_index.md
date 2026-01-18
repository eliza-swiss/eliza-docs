---
title: "Teams"
description: "Teamräume, Kanban-Boards und Sitzungsmanagement"
weight: 45
tags:
  - "übersicht"
  - "einführung"
  - "spaces"
  - "kanban"
  - "meetings"
icon: "groups"
---


# Spaces - Übersicht

Willkommen im Benutzerhandbuch für das **ELIZA Spaces-Modul**!

## Was ist das Spaces-Modul?

Das Spaces-Modul ist die **zentrale Kollaborations- und Projektmanagement-Plattform** in ELIZA. Es kombiniert mehrere Funktionen in einem integrierten System:

- **Kollaborationsräume (Spaces)**: Teambasierte Arbeitsbereiche
- **Kanban-Boards**: Visuelle Aufgabenverwaltung mit Drag & Drop
- **Cards (Aufgaben)**: Detaillierte Ticket-Verwaltung mit Workflows
- **Sitzungsmanagement**: Traktanden, Protokolle und Beschlüsse
- **Dateiverwaltung**: Zentrale Ablage aller Space-bezogenen Dokumente

## Hauptfunktionen

### 🏢 Spaces (Kollaborationsräume)

- Erstelle öffentliche oder geschützte Arbeitsbereiche
- Team-basierte Zugriffskontrolle
- Admins und Owner für Verwaltung
- Beschreibungen und Metadaten

### 📊 Kanban-Boards

- Drag & Drop Aufgabenverwaltung
- Ansichten: Kanban oder Listen-View
- Status-Workflows mit automatischer Archivierung
- Fortschrittsanzeige
- Template-Funktion für wiederkehrende Boards

### 📝 Cards (Aufgaben/Tickets)

- Detaillierte Aufgabenbeschreibungen
- Status-Workflow (neu → doing → done)
- Zugewiesene Benutzer und Beitragende
- Deadlines mit Farbcodierung
- Labels, Checklisten, Dateien
- Kommentare und Historie
- Zeiterfassung

### 🤝 Sitzungsverwaltung

- Traktanden mit hierarchischer Struktur
- Teilnehmerverwaltung
- Beschluss-Tracking
- Word-Export für Protokolle
- Jitsi-Integration für Online-Meetings
- Meeting-Vorlagen

### 📎 Dateiverwaltung

- Zentrale Ablage aller Space-Dokumente
- PDF, DOCX, Excel, PowerPoint Support
- Text-Extraktion für Suche
- Versionierung mit reversion
- Kommentare für Dateien

### 🔗 Integration

- Prozess-Visualisierung (BPMN)
- Issue-Verknüpfung
- Projekt-Verknüpfung
- CRM-Participation
- SWOT-Einschätzungen
- Zeiterfassung (Timetracker)

## Typische Anwendungsfälle

### 1. Projektmanagement

- Erstelle einen Space pro Projekt
- Nutze Kanban-Boards für Sprint-Planung
- Verfolge Aufgaben mit Cards
- Dokumentiere Meetings und Beschlüsse

### 2. Team-Kollaboration

- Geschützte Spaces für Abteilungen
- Gemeinsame Aufgabenverwaltung
- Zentrale Dateiverwaltung
- Meeting-Protokolle

### 3. Qualitätsmanagement

- QM-Space mit Board für Verbesserungen
- Verknüpfung mit Prozessen
- Audit-Meetings dokumentieren
- Beschlüsse nachverfolgen

### 4. Issue-Tracking

- Space für Bug-Tracking
- Cards mit Status-Workflow
- Verknüpfung mit Issues-Modul
- Prioritätslabels

## Navigation in diesem Handbuch

Nutze das **Inhaltsverzeichnis** rechts, um direkt zu den gewünschten Kapiteln zu springen:

- **[Einführung]({{< ref "01-einfuehrung" >}})**: Grundkonzepte und Überblick
- **[Spaces verwalten]({{< ref "02-spaces-verwalten" >}})**: Space-Erstellung und -Verwaltung
- **[Kanban Boards]({{< ref "03-kanban-boards" >}})**: Board- und Card-Verwaltung
- **[Sitzungen]({{< ref "04-sitzungen" >}})**: Meeting- und Beschluss-Verwaltung
- **[Berechtigungskonzept]({{< ref "05-berechtigungskonzept" >}})**: Zugriffskontrolle und Sicherheit
- **[Zusammenarbeit]({{< ref "06-zusammenarbeit" >}})**: Kollaborations-Features
- **[Integration]({{< ref "07-integration" >}})**: Verknüpfungen mit anderen Modulen

## Schnellstart

### Space erstellen

1. Öffne das Spaces-Modul über die Navigation
2. Klicke auf **"+ Neuer Space"**
3. Gib Titel und Beschreibung ein
4. Wähle Status: Öffentlich oder Geschützt
5. Speichere den Space

### Board erstellen

1. Öffne deinen Space
2. Klicke auf **"+ Neues Board"**
3. Gib einen Titel ein
4. Wähle Ansicht: Kanban oder Liste
5. Speichere das Board

### Card erstellen

1. Öffne ein Board
2. Klicke auf **"+ Neue Card"** in einer Liste
3. Gib Titel und Beschreibung ein
4. Weise Benutzer zu
5. Setze Deadline (optional)
6. Speichere die Card

Das war's schon! Mehr Details findest du in den folgenden Kapiteln.

## Wichtige Konzepte

### Hierarchie

```text
Space (Kollaborationsraum)
   ├─ Board 1 (Kanban)
   │  ├─ List: ToDo
   │  │  ├─ Card 1
   │  │  └─ Card 2
   │  ├─ List: Doing
   │  │  └─ Card 3
   │  └─ List: Done
   │     └─ Card 4
   ├─ Board 2 (Liste)
   └─ Meeting 1
      ├─ Traktandum 1
      │  └─ Beschluss 1
      └─ Traktandum 2
```

### Berechtigungen

- **Owner**: Ersteller des Space (volle Rechte)
- **Admins**: Können Space und Boards verwalten
- **Team**: Mitglieder mit Zugriff auf Space
- **Status**: Öffentlich (alle) oder Geschützt (nur Team)

### Workflow

Cards durchlaufen typischerweise folgenden Workflow:

```text
neu → selektiert → doing → wait → done
                              ↓
                         cancelled
```

## Best Practices

### ✅ Empfehlungen

1. **Klare Struktur**: Ein Space pro Projekt oder Team
2. **Konsistente Boards**: Standard-Listen für alle Boards
3. **Regelmässige Reviews**: Archiviere abgeschlossene Cards
4. **Meetings dokumentieren**: Nutze die Meeting-Funktion für Protokolle
5. **Labels nutzen**: Kategorisiere Cards mit Farblabels
6. **Deadlines setzen**: Visualisiere Prioritäten durch Fristen

### ❌ Häufige Fehler

1. **Zu viele Spaces**: Halte die Anzahl überschaubar
2. **Unklare Zuständigkeiten**: Weise Cards immer einem Benutzer zu
3. **Keine Beschreibungen**: Dokumentiere immer, was die Card macht
4. **Vergessene Archivierung**: Räume regelmässig auf
5. **Fehlende Team-Einbindung**: Füge alle relevanten Personen zum Team hinzu

## Nächste Schritte

Jetzt, wo du einen Überblick hast, empfehlen wir:

1. Lies die **Einführung** für detaillierte Konzepte
2. Erstelle deinen ersten **Space** (siehe Kapitel 2)
3. Lerne die **Kanban-Funktionen** kennen (siehe Kapitel 3)
4. Probiere die **Sitzungsverwaltung** aus (siehe Kapitel 4)

---

**Hinweis**: Dieses Handbuch verwendet die Du-Form und Schweizer Rechtschreibung gemäss ELIZA-Standards.
