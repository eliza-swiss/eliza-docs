---
title: "Integration mit anderen Modulen"
description: ""
weight: "5"
tags:
  - "integration"
  - "timetracker"
  - "prozesse"
  - "dms"
  - "projekte"
---


# Integration mit anderen Modulen

Das Organisation-Modul ist eng mit anderen ELIZA-Modulen verknüpft. In diesem Kapitel lernst du die wichtigsten Integrationen kennen.

## Übersicht der Integrationen

Das Organisation-Modul ist mit folgenden ELIZA-Modulen verknüpft:

| Modul | Integration |
|-------|-------------|
| **Zeiterfassung (Timetracker)** | Mitarbeitende, Abwesenheiten, Arbeitszeitmodelle |
| **Prozesse** | Prozessverantwortliche und Mitwirkende |
| **DMS** | Personaldokumente, Stellenbeschreibungen |
| **Projekte** | Projektteams, Ressourcenzuordnung |
| **Issues** | Aufgabenzuordnung |
| **KPI** | Mitarbeiter-bezogene Kennzahlen |
| **Core** | Benutzerverknüpfung, Berechtigungen |

## Integration mit der Zeiterfassung

Die Integration mit dem Timetracker-Modul ist eine der wichtigsten Verknüpfungen.

### Mitarbeitende und Zeiterfassung

Damit ein Mitarbeitender die Zeiterfassung nutzen kann:

1. **Benutzer verknüpfen**: Der Mitarbeitende muss einen zugeordneten Benutzer haben
2. **Berechtigung**: Der Benutzer braucht `timetracker.add_worktime`
3. **Anstellungsverhältnis**: Sollstunden müssen definiert sein

### Anstellungsverhältnisse und Sollzeiten

Das Anstellungsverhältnis (Employment/Salary) bestimmt:

- **Sollstunden pro Tag**: Automatische Berechnung basierend auf Anstellungsgrad
- **Arbeitszeitmodell**: Wann wird wie viel gearbeitet
- **Ferienanspruch**: Urlaubstage pro Jahr

**Beispiel Arbeitszeitmodell:**

| Tag | Sollstunden (80%) |
|-----|-------------------|
| Montag | 8.4 Std. |
| Dienstag | 8.4 Std. |
| Mittwoch | 8.4 Std. |
| Donnerstag | 8.4 Std. |
| Freitag | 0 Std. |

### Abwesenheiten

Die Abwesenheitsverwaltung im Timetracker nutzt Organisation-Daten:

- **Mitarbeitender**: Aus dem Organisation-Modul
- **Vorgesetzter**: Für Genehmigungsworkflow
- **Ferienanspruch**: Aus dem Anstellungsverhältnis
- **Organisationseinheit**: Für Team-Kalender

### Arbeitszeitabrechnung (Timereports)

> **⚠️ Hinweis:** Dieses Feature muss aktiviert sein (`ORGANISATION_USE_TIMEREPORTS`).

Timereports importieren Zeitsalden aus externen Systemen:

| Feld | Beschreibung |
|------|--------------|
| **Mitarbeiter** | Verknüpfter Mitarbeitender |
| **Datum** | Stichtag des Reports |
| **Gleitzeitsaldo** | Überstunden/Minusstunden in Std. |
| **Feriensaldo** | Verbleibende Ferientage |
| **Kranktage** | Kranktage seit Jahresbeginn |

**Arbeitszeitabrechnung importieren:**

1. Navigiere zu **Organisation** → **Arbeitszeitabrechnung**
2. Klicke auf **"Hinzufügen"**
3. Wähle den Mitarbeitenden
4. Gib Datum und Salden ein
5. Speichere

### Dashboard-Übersicht

Das Organisation-Dashboard zeigt aggregierte Timetracker-Daten:

- **Gleitzeitsaldo total**: Summe aller Überstunden
- **Feriensaldo total**: Summe aller offenen Ferientage
- **Kranktage total**: Summe aller Kranktage

## Integration mit Prozessen

Das Prozesse-Modul nutzt Organisation-Daten für Verantwortlichkeiten.

### Prozessverantwortliche

Jeder Prozess kann Verantwortliche haben:

- **Prozessverantwortlicher**: Aus Mitarbeitenden-Liste
- **Prozessteam**: Über Mitwirkungen

### Mitwirkungen an Prozessen

Mitarbeitende können an Prozessen mitwirken:

1. Öffne einen Prozess im Prozesse-Modul
2. Füge Mitwirkende hinzu
3. Diese erscheinen im Mitarbeiterprofil unter **"Mitwirkungen"**

### Funktionen in Prozessen

Prozessschritte können Funktionen zugeordnet werden:

- **Wer führt aus?**: Mitgliedschaft mit Funktion
- **Wer ist verantwortlich?**: Funktionsinhaber
- **Stellvertretung**: Über Funktionsdefinition

## Integration mit dem DMS

Das Dokumentenmanagementsystem ist mit Organisation verknüpft.

### HR-Dokumente

HR-Dokumente werden im Organisation-Modul gespeichert, nutzen aber DMS-Funktionen:

- **Vorschau**: PDF- und Office-Dokumente
- **Versionierung**: Änderungshistorie
- **Berechtigungen**: Basierend auf Organisation-Rechten

### Stellenbeschreibungen

Stellenbeschreibungen können DMS-Dokumente enthalten:

1. Öffne eine Stellenbeschreibung
2. Navigiere zu **"Dokumente"**
3. Lade Dokumente hoch oder verknüpfe bestehende

### Berechtigungen

Die Berechtigung auf Personaldokumente basiert auf:

- **Eigene Dokumente**: Mitarbeitender sieht eigene HR-Files
- **Vorgesetzter**: Sieht Dokumente der direkten Mitarbeitenden
- **HR-Admin**: Sieht alle Dokumente der Organisationseinheit
- **Organisation-Admin**: Voller Zugriff

## Integration mit Projekten

Das Projekte-Modul nutzt Organisation-Daten für Teams.

### Projektteams

Projektmitglieder werden aus den Mitarbeitenden ausgewählt:

1. Öffne ein Projekt
2. Navigiere zu **"Team"**
3. Füge Mitarbeitende hinzu

### Ressourcenplanung

Die Ressourcenplanung berücksichtigt:

- **Verfügbarkeit**: Basierend auf Anstellungsgrad
- **Skills**: Für passende Zuweisung
- **Organisationseinheit**: Für Team-Planung

### Projekt-Organisationseinheiten

Projekte können als Organisationseinheiten abgebildet werden:

- **Typ**: "Projekt" als Organisationsart
- **Mitglieder**: Projektteam über Mitgliedschaften
- **Zeitlich begrenzt**: Mit Von/Bis-Datum

## Integration mit Issues

Das Issue-Tracking nutzt Organisation-Daten.

### Zuordnung von Issues

Issues können zugeordnet werden an:

- **Mitarbeitende**: Aus der Organisation
- **Teams**: Über Organisationseinheiten
- **Funktionsinhaber**: Basierend auf Funktionen

### Benachrichtigungen

Benachrichtigungen werden basierend auf Organisation-Daten gesendet:

- **Bearbeiter**: Erhält Issue-Benachrichtigungen
- **Team**: Bei Gruppen-Zuweisung
- **Vorgesetzter**: Bei Eskalation

## Integration mit Kostenstellen

Kostenstellen verbinden Organisation mit Finanzen.

### Mitarbeitende zu Kostenstellen

Jeder Mitarbeitende kann einer Kostenstelle zugeordnet werden:

1. Öffne das Mitarbeiterprofil
2. Bearbeite das Feld **"Kostenstelle"**
3. Wähle die Kostenstelle aus

### Verwendung in anderen Modulen

Die Kostenstellen-Zuordnung wird genutzt für:

- **Zeiterfassung**: Stunden auf Kostenstellen buchen
- **Projekte**: Projekt-Kostenstellen
- **Spesen**: Kostenverteilung

## Integration mit Core (Benutzer)

Die Verknüpfung mit dem Core-Modul ist fundamental.

### Benutzer-Mitarbeitenden-Verknüpfung

Ein Mitarbeitender kann mit einem ELIZA-Benutzer verknüpft werden:

1. Öffne das Mitarbeiterprofil
2. Bearbeite das Feld **"Zugeordneter Benutzer"**
3. Wähle den Benutzer aus

**Auswirkungen der Verknüpfung:**

| Aspekt | Mit Verknüpfung | Ohne Verknüpfung |
|--------|-----------------|------------------|
| **Login** | Möglich | Nicht möglich |
| **Zeiterfassung** | Eigene Zeiten erfassen | Nicht möglich |
| **Abwesenheiten** | Eigene Abwesenheiten beantragen | Nicht möglich |
| **Eigene Daten** | Eigenes Profil sehen | - |

### Automatische Gruppenbildung

Organisationseinheiten und Funktionen erstellen automatisch Systemgruppen:

- **Orgunit-Gruppe**: `orgunit_<id>` für jede Organisationseinheit
- **Funktions-Gruppe**: `function_<id>` für jede Funktion

Diese Gruppen werden verwendet für:

- **Space-Berechtigungen**: Zugriff auf DMS-Bereiche
- **Team-Berechtigungen**: Kollaborations-Features
- **Prozess-Berechtigungen**: Prozesszugriff

### Vorgesetzten-Beziehung

Die Vorgesetzten-Beziehung aus Organisation wird genutzt für:

- **Genehmigungsworkflows**: Abwesenheiten, Spesen
- **Berechtigungen**: Vorgesetzter sieht Team-Daten
- **Benachrichtigungen**: Eskalationen
- **Stellvertretung**: Bei Abwesenheit

## Integration mit Tutorials

Das Tutorials-Modul kann mit Weiterbildungen verknüpft werden.

### Kurse und Weiterbildungen

Weiterbildungen können mit Tutorial-Kursen verknüpft werden:

1. Erstelle eine Weiterbildung
2. Wähle im Feld **"Kurs"** einen Tutorial-Kurs
3. Der Fortschritt wird automatisch synchronisiert

### Skill-Erwerb durch Kurse

Nach Kursabschluss können Skills automatisch zugewiesen werden:

- **Skill-Verknüpfung**: Weiterbildung → Skill
- **Automatische Zuweisung**: Nach Kursabschluss

## Datenfluss-Übersicht

<pre>
┌─────────────────────────────────────────────────────────────┐
│                     ORGANISATION                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ Mitarbeitende│  │   Orgunits   │  │  Funktionen  │       │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘       │
└─────────┼─────────────────┼─────────────────┼───────────────┘
          │                 │                 │
    ┌─────▼─────┐     ┌─────▼─────┐     ┌─────▼─────┐
    │ Timetracker│     │    DMS    │     │  Prozesse │
    │  - Zeiten  │     │ - HR-Docs │     │ - Verantw.│
    │  - Absenz  │     │ - Stellen │     │ - Mitwirk.│
    └───────────┘     └───────────┘     └───────────┘
</pre>

## Best Practices

### ✅ Empfehlungen

1. **Benutzer früh verknüpfen**: Ermöglicht Login und Modulnutzung
2. **Anstellungsverhältnisse pflegen**: Wichtig für Zeiterfassung
3. **Vorgesetzte definieren**: Ermöglicht Workflows
4. **Funktionen konsistent nutzen**: Für Prozessverantwortlichkeiten
5. **Kostenstellen zuordnen**: Für Kostenrechnung

### ❌ Häufige Fehler

1. **Fehlende Benutzerverknüpfung**: Mitarbeitende können sich nicht anmelden
2. **Kein Anstellungsverhältnis**: Zeiterfassung berechnet falsch
3. **Veraltete Daten**: Integration zeigt falsche Informationen
4. **Inkonsistente Hierarchie**: Workflows funktionieren nicht

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- Wie Organisation mit Timetracker verknüpft ist
- Wie Prozessverantwortlichkeiten funktionieren
- Wie HR-Dokumente mit DMS zusammenhängen
- Wie Projektteams Organisation nutzen
- Wie Benutzer und Mitarbeitende verknüpft werden
- Den Datenfluss zwischen den Modulen

## Nächste Schritte

- [Kapitel 6: Berechtigungskonzept]({{< ref "06-berechtigungskonzept" >}}) – Zugriffsrechte verstehen
