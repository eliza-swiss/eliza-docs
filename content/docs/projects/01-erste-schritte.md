---
title: "Erste Schritte im Projekte-Modul"
description: ""
weight: "1"
tags:
  - "getting-started"
  - "basics"
  - "projekte"
  - "einstieg"
---


# Erste Schritte im Projekte-Modul

Willkommen im ELIZA Projekte-Modul! Dieses Kapitel führt dich durch die Grundlagen und hilft dir, schnell produktiv zu werden.

## Was ist das Projekte-Modul?

Das Projekte-Modul ist deine zentrale Plattform für die Planung, Durchführung und Überwachung von Projekten in ELIZA. Es unterstützt dich bei:

- **Projektplanung**: Strukturiere Projekte mit Phasen, Meilensteinen und Budgets
- **Team-Organisation**: Weise Rollen, Verantwortlichkeiten und Ressourcen zu
- **Status-Verwaltung**: Verfolge den Fortschritt durch definierte Workflow-Status
- **Zeiterfassung**: Integrierte Kostenstellen für Zeitbudgets
- **Reporting**: Dokumentiere Fortschritt mit Ampel-Bewertungen und Trends
- **Visualisierung**: Gantt-Diagramme und Kalenderansichten für besseren Überblick

## Hauptfunktionen im Überblick

### Projekte verwalten

Erstelle und verwalte unbegrenzt viele Projekte mit folgenden Eigenschaften:

- **Stammdaten**: Nummer, Titel, Beschreibung, Typ
- **Zeitplanung**: Start-/End-Datum, Fristen, Meilensteine
- **Budget**: Investitionswert, Personalaufwand, Kostenstellen
- **Team**: Federführung, Projektteam, Admins, Mitwirkungen
- **Status**: Workflow von Planung bis Abschluss
- **Klassifikation**: Normal oder vertraulich

### Zeiterfassung

Integriere Zeiterfassung direkt ins Projekt:

- **Kostenstellen** (Tasks) für Zeitbudgets
- **Stundensätze** und verrechenbare Zeiten
- **Budget-Überwachung** mit Restbudget
- **Timetracker-Integration** für Zeitbuchungen

### Reporting und Visualisierung

Behalte den Überblick mit:

- **Projekt-Reports** mit Ampel-Bewertungen (grün/orange/rot)
- **Gantt-Diagramm** für zeitliche Planung
- **Kalenderansicht** für Meilensteine
- **Dashboard** mit Projekt-Übersicht

### Integrationen

Verknüpfe Projekte mit anderen Modulen:

- **SWOT**: Einschätzungen und Massnahmen
- **Teams**: Cards und Boards
- **CRM**: Beteiligungen von Organisationen
- **DMS**: Dokumente verknüpfen
- **Timetracker**: Zeiten erfassen

## Zugriff auf das Projekte-Modul

### Navigation

**Hauptmenü → Projekte**

Das Projekte-Modul erreichst du über das Hauptmenü von ELIZA. Nach dem Klick auf **"Projekte"** gelangst du automatisch zum Dashboard.

### Dashboard-Übersicht

Das Dashboard zeigt dir:

- **Meine Projekte**: Projekte, an denen du beteiligt bist
- **Aktive Projekte**: Laufende Projekte
- **Geplante Projekte**: Projekte in Planung oder Prüfung
- **Abgeschlossene Projekte**: Fertiggestellte Projekte
- **Schnellzugriff**: Favoriten und kürzlich bearbeitete Projekte

### Modul-Menü

Im Modul-Menü (links oder oben je nach Ansicht) findest du:

- **Dashboard**: Übersicht und Schnellzugriff
- **Workflow**: Alle Projekte nach Status sortiert
- **Projekttypen**: Verwaltung der Projekttypen
- **Einstellungen**: Modul-Konfiguration (nur für Administratoren)
- **Hilfe**: Dieses Benutzerhandbuch

## Berechtigungen und Rollen

### System-Berechtigungen

Das Berechtigungssystem basiert auf vier Ebenen:

1. **view_project**: Projekte ansehen
2. **add_project**: Neue Projekte erstellen
3. **change_project**: Projekte bearbeiten
4. **delete_project**: Projekte löschen
5. **approve_project**: Projekte genehmigen und Status ändern

> **💡 Tipp:** Die Berechtigung `approve_project` ist speziell und erlaubt dir, Projekte zu genehmigen und durch den Workflow zu führen.

### Projekt-spezifische Rollen

Innerhalb eines Projekts gibt es zusätzliche Rollen:

**Federführung (Verantwortlicher Mitarbeitender)**
- Volle Bearbeitungsrechte am Projekt
- Kann Status ändern (mit approve-Berechtigung)
- Erscheint als Hauptverantwortlicher

**Projekt-Admins**
- Volle Bearbeitungsrechte
- Können Projekt löschen
- Verwalten Team-Zuordnungen

**Contributors (Projektteam)**
- Können Projekt ansehen
- Können bei vertraulichen Projekten zugreifen
- Eingeschränkte Bearbeitungsrechte

**Mitwirkende (Projektassignments)**
- Formalisierte Rollen mit Funktionen
- Zeitraum und Pensum definiert
- Erhalten Lesezugriff auf Projekt

### Klassifikation: Normal vs. Vertraulich

**Normal**
- Sichtbar für alle Benutzer mit `view_project` Berechtigung
- Standard-Einstellung für neue Projekte

**Vertraulich**
- Nur sichtbar für Beteiligte (Admins, Contributors, Federführung, Mitwirkende)
- Auch Benutzer mit `delete_project` Berechtigung sehen vertrauliche Projekte
- Ideal für sensible Projekte

> **⚠️ Wichtig:** Vertrauliche Projekte sind in Listen und Übersichten NUR für berechtigte Personen sichtbar. Wähle diese Klassifikation sorgfältig.

## Erste Schritte: Dein erstes Projekt

### Schritt 1: Projekt erstellen

1. Navigiere zu **Dashboard → Projekte**
2. Klicke auf den Button **"+ Neues Projekt"** (grüner Button rechts oben)
3. Fülle die Pflichtfelder aus:
   - **Titel**: Aussagekräftiger Projektname
   - **Beschreibung**: Kurze Zusammenfassung
4. Optional: Ergänze weitere Informationen
   - **Nummer**: Projektnummer (z.B. P-2025-001)
   - **Projekttyp**: Kategorie auswählen
   - **Start-/End-Datum**: Zeitplanung
5. Klicke auf **"Speichern"**

> **💡 Tipp:** Starte einfach! Du kannst alle Informationen später noch ergänzen und anpassen.

### Schritt 2: Team zuweisen

1. Öffne das neu erstellte Projekt
2. Gehe zum Tab **"Team"**
3. Klicke auf **"Projektteam verwalten"**
4. Füge Contributors hinzu:
   - Wähle Benutzer aus der Liste
   - Klicke auf **"Hinzufügen"**
5. Optional: Definiere Projekt-Admins
6. Speichere die Änderungen

### Schritt 3: Status setzen

1. Im Projekt-Detail siehst du den aktuellen Status (**"geplant"** bei neuen Projekten)
2. Über das Dropdown-Menü **"Status ändern"** kannst du den Workflow starten:
   - **In Prüfung**: Projekt zur Genehmigung vorlegen
   - **Freigegeben**: Nach Genehmigung
   - **In Arbeit**: Projekt startet
3. Klicke auf **"Status aktualisieren"**

> **💡 Tipp:** Der Status-Workflow hilft dir, den Projekt-Lebenszyklus zu steuern. Mehr dazu in [Kapitel 4: Status und Workflow]({{< ref "04-status-workflow" >}}).

### Schritt 4: Erste Kostenstelle erstellen

1. Gehe zum Tab **"Kostenstellen"**
2. Klicke auf **"+ Neue Kostenstelle"**
3. Fülle die Felder aus:
   - **Titel**: z.B. "Projektleitung"
   - **Budgetierte Stunden**: z.B. 40
   - **Verrechenbar**: Ja/Nein
4. Klicke auf **"Speichern"**

> **💡 Tipp:** Kostenstellen sind wichtig für die Zeiterfassung. Erstelle für jede Aktivität im Projekt eine eigene Kostenstelle.

### Schritt 5: Ersten Meilenstein setzen

1. Gehe zum Tab **"Meilensteine"**
2. Klicke auf **"+ Neuer Meilenstein"**
3. Definiere den Meilenstein:
   - **Titel**: z.B. "Projektstart"
   - **Datum**: Termin festlegen
   - **Bewertung**: Ampelfarbe (grün/orange/rot)
4. Klicke auf **"Speichern"**

## Wichtige Konzepte

### Projektphasen

Projekte können in zeitliche Phasen unterteilt werden:

- **Konzeption**: Planungsphase
- **Umsetzung**: Durchführungsphase
- **Abschluss**: Finalisierung

Jede Phase hat ein Start- und End-Datum und kann mit Massnahmen verknüpft werden.

> **📖 Mehr Informationen:** [Kapitel 5: Projektphasen]({{< ref "05-projektphasen" >}})

### Mitwirkungen (Projekt-Assignments)

Formalisierte Team-Zuordnungen mit:

- **Mitarbeitender**: Wer arbeitet mit?
- **Funktion**: Welche Rolle? (z.B. Projektleiter, Entwickler)
- **Pensum**: Zeitaufwand in %
- **Zeitraum**: Von-Bis Datum

> **📖 Mehr Informationen:** [Kapitel 6: Team-Verwaltung]({{< ref "06-team-verwaltung" >}})

### Projekt-Reporting

Regelmässige Reports dokumentieren den Fortschritt:

- **Bewertung**: Ampel-System (grün/orange/rot)
- **Trends**: Positiv, stabil, negativ
- **Bereiche**: Kosten, Termine, Qualität
- **Kommentare**: Freitext-Beschreibungen

> **📖 Mehr Informationen:** [Kapitel 9: Reporting]({{< ref "09-reporting" >}})

## Häufige Fragen (FAQ)

### Kann ich Projekte hierarchisch strukturieren?

Ja! Über das Feld **"Übergeordnetes Projekt"** (Parent) kannst du Projekt-Hierarchien erstellen. Dies ist ideal für grosse Programme mit mehreren Unterprojekten.

### Wie viele Projekte kann ich erstellen?

Es gibt keine technische Begrenzung. Du kannst unbegrenzt viele Projekte erstellen und verwalten.

### Wer sieht mein Projekt?

Das hängt von der Klassifikation ab:

- **Normal**: Alle Benutzer mit `view_project` Berechtigung
- **Vertraulich**: Nur Admins, Contributors, Federführung, Mitwirkende

### Kann ich Projekte nachträglich bearbeiten?

Ja, solange du die entsprechenden Berechtigungen hast (Projekt-Admin, Federführung oder `change_project`).

### Was passiert mit abgeschlossenen Projekten?

Abgeschlossene Projekte bleiben im System und können jederzeit eingesehen werden. Sie können auch reaktiviert werden, falls nötig.

### Wie integriere ich Zeiterfassung?

Erstelle Kostenstellen im Projekt. Mitarbeitende können dann im Timetracker-Modul Zeiten auf diese Kostenstellen buchen.

## Nächste Schritte

Jetzt, da du die Grundlagen kennst, empfehlen wir dir:

1. **[Kapitel 2: Projekt erstellen]({{< ref "02-projekt-erstellen" >}})**: Detaillierte Anleitung zum Erstellen von Projekten
2. **[Kapitel 4: Status und Workflow]({{< ref "04-status-workflow" >}})**: Verstehe den Projekt-Lebenszyklus
3. **[Kapitel 6: Team-Verwaltung]({{< ref "06-team-verwaltung" >}})**: Organisiere dein Projektteam optimal

## Zusammenfassung

✅ Du weisst, was das Projekte-Modul leistet
✅ Du kennst die Hauptfunktionen und Navigation
✅ Du hast die Berechtigungsstufen verstanden
✅ Du kannst dein erstes Projekt erstellen
✅ Du weisst, wie du Team, Status und Kostenstellen verwaltest

**Viel Erfolg mit deinen Projekten!** 🚀
