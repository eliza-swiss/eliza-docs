---
title: "Projekt erstellen"
description: ""
weight: "2"
tags:
  - "erstellen"
  - "neues-projekt"
  - "projekt-anlegen"
  - "konfiguration"
---


# Projekt erstellen

Dieses Kapitel führt dich Schritt für Schritt durch das Erstellen neuer Projekte in ELIZA.

## Neues Projekt anlegen

### Zugriff

**Dashboard → Projekte → Button "+ Neues Projekt"**

Der grüne Button "+ Neues Projekt" findest du rechts oben in der Projekt-Übersicht.

### Formular-Übersicht

Das Projektformular ist in mehrere Bereiche unterteilt:

#### Stammdaten

**Titel** (Pflichtfeld)
- Aussagekräftiger Projektname
- Beispiel: "Website-Relaunch 2025"
- Erscheint in allen Listen und Übersichten

**Nummer** (Optional)
- Projektkennung für eindeutige Identifikation
- Beispiel: "P-2025-001", "PRJ-WEB-001"
- Frei wählbar, keine Auto-Nummerierung

**Beschreibung** (Optional, empfohlen)
- Ausführliche Projektbeschreibung
- Ziele, Scope und Hintergrund
- Unterstützt Markdown-Formatierung

**Projekttyp** (Optional)
- Kategorisierung des Projekts
- Typen müssen vorher unter "Projekttypen" erstellt werden
- Beispiele: "IT-Projekt", "Marketing", "Entwicklung"

#### Organisation und Verantwortlichkeiten

**Federführung** (Verantwortlicher Mitarbeitender)
- Hauptverantwortlicher für das Projekt
- Erhält automatisch volle Bearbeitungsrechte
- Nur ein Mitarbeitender möglich

**Federführende Organisationseinheit**
- Organisationseinheit die federführend ist
- Optional, für organisatorische Zuordnung

**Beteiligte Organisationseinheiten**
- Mehrere Orgunits können beteiligt sein
- Mehrfachauswahl möglich
- Keine automatischen Berechtigungen

#### Zeitplanung

**Beginn** (Start-Datum)
- Geplanter oder tatsächlicher Projektstart
- Format: TT.MM.JJJJ
- Optional, aber empfohlen für Gantt-Darstellung

**Ende** (End-Datum)
- Geplantes oder tatsächliches Projektende
- Muss nach dem Start-Datum liegen
- Optional, wichtig für Zeitplanung

**Frist** (Deadline)
- Wichtiger Stichtag
- Erscheint in Übersichten und Warnungen
- Überfällige Fristen werden markiert

#### Finanzplanung

**Investitionswert** (Kosten)
- Gesamtbudget in CHF
- Format: 10000.00
- Optional, für Controlling wichtig

**Personalaufwand in PT** (Personen-Tage)
- Geplanter Personalaufwand
- Dezimalzahl (z.B. 25.5)
- Optional, für Ressourcenplanung

#### Klassifikation und Status

**Sichtbarkeit** (Klassifikation)
- **normal**: Für alle Benutzer mit view_project Berechtigung sichtbar
- **vertraulich**: Nur für Beteiligte sichtbar

> **⚠️ Wichtig:** Diese Einstellung kann nachträglich NICHT mehr geändert werden! Wähle sorgfältig.

**Status**
- Wird automatisch auf "geplant" gesetzt
- Kann nach Erstellung über Workflow geändert werden

**Bewertung** (Ampel-Status)
- grün, orange oder rot
- Zeigt Gesamt-Status des Projekts
- Kann jederzeit geändert werden

#### Hierarchie

**Übergeordnetes Projekt** (Parent)
- Optional: Ordne das Projekt einem Parent-Projekt zu
- Erstellt hierarchische Projektstrukturen
- Ideal für Programme mit mehreren Teilprojekten

#### Zuordnungen

**Labels**
- Mehrere Labels zur Kategorisierung
- Farbcodiert für bessere Übersicht
- Labels müssen vorher erstellt werden

**Admins** (Projekt-Admins)
- Benutzer mit vollen Bearbeitungsrechten
- Mehrfachauswahl möglich
- Können Projekt löschen

**Projektteam** (Contributors)
- Mitarbeitende im Projekt
- Mehrfachauswahl
- Erhalten Lesezugriff (auch bei vertraulichen Projekten)

#### Externe Integrationen

**bexio ID**
- Verknüpfung mit Bexio-Projekt
- Nur bei Bexio-Integration relevant
- Optional

## Schritt-für-Schritt Anleitung

### Minimales Projekt erstellen

**Schritt 1: Formular öffnen**
1. Navigiere zu **Dashboard → Projekte**
2. Klicke **"+ Neues Projekt"**

**Schritt 2: Pflichtfelder ausfüllen**
1. **Titel** eingeben
2. **Sichtbarkeit** wählen (normal oder vertraulich)
3. Klicke **"Speichern"**

> **💡 Tipp:** Das ist alles! Ein Projekt mit nur Titel und Sichtbarkeit ist bereits gültig.

### Vollständiges Projekt erstellen

**Schritt 1: Stammdaten**
1. **Titel**: "Website-Relaunch 2025"
2. **Nummer**: "P-2025-001"
3. **Beschreibung**: "Vollständige Überarbeitung der Unternehmenswebsite mit neuem Design und CMS"
4. **Projekttyp**: "IT-Projekt" auswählen

**Schritt 2: Verantwortlichkeiten**
1. **Federführung**: Projektleiter auswählen
2. **Federführende Orgunit**: "IT-Abteilung" auswählen
3. **Beteiligte Orgunits**: "Marketing", "Kommunikation" hinzufügen

**Schritt 3: Zeitplanung**
1. **Beginn**: 01.02.2025
2. **Ende**: 31.08.2025
3. **Frist**: 15.08.2025

**Schritt 4: Finanzplanung**
1. **Investitionswert**: 50000.00 CHF
2. **Personalaufwand**: 45.5 PT

**Schritt 5: Klassifikation**
1. **Sichtbarkeit**: "normal" (Projekt ist öffentlich)
2. **Bewertung**: "grün" (alles OK)

**Schritt 6: Team**
1. **Admins**: Projektleiter hinzufügen
2. **Projektteam**: Entwickler, Designer, Marketing hinzufügen

**Schritt 7: Labels**
1. Labels auswählen: "Prio 1", "Website", "IT"

**Schritt 8: Speichern**
1. Prüfe alle Eingaben
2. Klicke **"Speichern"**

## Häufige Fehler vermeiden

### ❌ Fehler: Kryptische Titel

**Falsch:** "PRJ001"
**Richtig:** "Website-Relaunch 2025 (P-2025-001)"

> **💡 Tipp:** Nutze das Nummer-Feld für Kennungen, den Titel für lesbare Namen.

### ❌ Fehler: Keine Beschreibung

**Problem:** Spätere Nutzer wissen nicht, worum es geht

**Lösung:** Schreibe mindestens 2-3 Sätze:
- Was wird gemacht?
- Warum?
- Welche Ziele?

### ❌ Fehler: Falsche Klassifikation

**Problem:** Projekt als "normal" gespeichert, sollte aber vertraulich sein

**Lösung:**
- Kann NICHT nachträglich geändert werden!
- Bei Bedarf: Neues Projekt erstellen und Daten kopieren
- Überlege vor dem Speichern genau

### ❌ Fehler: Keine Zeitplanung

**Problem:** Projekt erscheint nicht im Gantt-Diagramm

**Lösung:** Mindestens Start-Datum angeben

### ❌ Fehler: Kein Team zugewiesen

**Problem:** Niemand ausser dir sieht das vertrauliche Projekt

**Lösung:** Füge sofort Admins oder Contributors hinzu

## Best Practices

### ✅ Empfehlung: Strukturierter Titel

```
[Bereich] - [Kurzbeschreibung] [Jahr]
```

Beispiele:
- "IT - CRM-System Implementation 2025"
- "Marketing - Kampagne Frühjahr 2025"
- "HR - Rekrutierung Entwickler Q1/2025"

### ✅ Empfehlung: Aussagekräftige Beschreibung

**Template:**

```markdown
## Ziel
[Was soll erreicht werden?]

## Hintergrund
[Warum ist das Projekt notwendig?]

## Scope
[Was ist NICHT Teil des Projekts?]

## Erwarteter Nutzen
[Welchen Mehrwert bringt das Projekt?]
```

### ✅ Empfehlung: Realistische Zeitplanung

- **Beginn**: Tatsächlicher Start, nicht Wunschtermin
- **Ende**: Realistisches Ende mit Puffer
- **Frist**: Harte Deadline, wenn vorhanden

### ✅ Empfehlung: Klare Verantwortlichkeiten

1. **Federführung** immer setzen
2. Mindestens **ein Admin** definieren
3. **Projektteam** vollständig erfassen

### ✅ Empfehlung: Labels nutzen

Erstelle Label-Kategorien:
- **Priorität**: "Prio 1", "Prio 2", "Prio 3"
- **Thema**: "IT", "Marketing", "HR"
- **Status**: "Aktiv", "Verzögert", "On Track"

## Nach dem Erstellen

### Sofort danach

1. ✅ **Kostenstellen erstellen** (für Zeiterfassung)
2. ✅ **Erste Meilensteine setzen**
3. ✅ **Projektphasen definieren**
4. ✅ **Mitwirkungen hinzufügen**

### In den ersten Tagen

1. ✅ **Ersten Report schreiben**
2. ✅ **Relevante Dokumente hochladen**
3. ✅ **SWOT-Analyse verknüpfen** (falls vorhanden)
4. ✅ **Team informieren**

## Projekt duplizieren

Leider gibt es keine Duplizier-Funktion. Für wiederkehrende Projekte:

1. Erstelle ein "Template-Projekt"
2. Kopiere manuell die Struktur:
   - Gleiche Projektphasen
   - Gleiche Kostenstellen
   - Gleiche Labels
3. Passe Titel, Nummer und Daten an

## Häufige Fragen (FAQ)

### Kann ich die Klassifikation später ändern?

Nein, die Klassifikation (normal/vertraulich) kann nach dem Speichern nicht mehr geändert werden.

### Was passiert, wenn ich keine Federführung setze?

Das Projekt ist trotzdem gültig, aber es fehlt eine klare Verantwortlichkeit.

### Muss ich ein Projekttyp auswählen?

Nein, Projekttyp ist optional. Es hilft aber bei der Kategorisierung und Filterung.

### Kann ich ein Projekt nachträglich einem Parent zuordnen?

Ja, das Feld "Übergeordnetes Projekt" kann jederzeit geändert werden.

### Wie viele Labels kann ich zuweisen?

Unbegrenzt viele. Wähle die Labels, die für Kategorisierung und Filterung sinnvoll sind.

## Nächste Schritte

- **[Kapitel 3: Projekttypen und Kategorien]({{< ref "03-projekttypen-kategorien" >}})**: Labels und Typen optimal nutzen
- **[Kapitel 4: Status und Workflow]({{< ref "04-status-workflow" >}})**: Projekt durch den Lebenszyklus führen
- **[Kapitel 6: Team-Verwaltung]({{< ref "06-team-verwaltung" >}})**: Team organisieren

## Zusammenfassung

✅ Du kannst neue Projekte erstellen
✅ Du kennst alle Formularfelder
✅ Du weisst, welche Felder Pflicht sind
✅ Du vermeidest häufige Fehler
✅ Du nutzt Best Practices für Titel und Beschreibung
