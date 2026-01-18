---
title: "Erste Schritte im Kennzahlen-Modul"
description: ""
weight: "1"
tags:
  - "getting-started"
  - "basics"
  - "kpi"
  - "einfuehrung"
---


# Erste Schritte im Kennzahlen-Modul

In diesem Kapitel lernst du die Grundlagen des Kennzahlen-Moduls kennen und machst dich mit der Navigation und den wichtigsten Funktionen vertraut.

## Was ist das Kennzahlen-Modul?

Das Kennzahlen-Modul (KPI-Modul) ermöglicht dir die systematische Erfassung, Überwachung und Auswertung von Leistungskennzahlen deiner Organisation. Du kannst:

- **Kennzahlen definieren** mit Zielwerten, Einheiten und Verantwortlichkeiten
- **Messungen erfassen** und den Verlauf dokumentieren
- **Bewertungen vornehmen** mit Ampelstatus (grün, orange, rot)
- **Trends visualisieren** durch automatische Diagramme
- **Massnahmen verknüpfen** bei Abweichungen vom Ziel

## Zugriff auf das Modul

**Schritt 1: Modul öffnen**

1. Klicke im Hauptmenü auf **Kennzahlen**
2. Du landest automatisch im **Cockpit** - der Übersichtsseite

> **Tipp:** Falls du das Modul nicht im Menü siehst, fehlen dir möglicherweise die entsprechenden Berechtigungen. Wende dich an deinen Administrator.

## Übersicht der Hauptbereiche

Das Kennzahlen-Modul besteht aus mehreren Bereichen, die du über die Navigationsleiste erreichst:

### Cockpit

Das **Cockpit** ist deine zentrale Übersichtsseite. Hier siehst du alle aktiven Kennzahlen mit:

- Aktuellem Status (Ampel)
- Trend-Anzeige
- Diagramm mit Messhistorie

**Navigation:** Klicke auf das Kompass-Symbol oder wähle **Kennzahlen** → **Cockpit**

### Kennzahlen-Liste

Die **Kennzahlen-Liste** zeigt alle Kennzahlen in Tabellenform. Von hier aus kannst du:

- Kennzahlen suchen und filtern
- Archivierte Kennzahlen ein-/ausblenden
- Neue Kennzahlen erstellen

**Navigation:** Klicke auf das Listen-Symbol in der Navigationsleiste

### Kennzahlenordner

**Kennzahlenordner** helfen dir, Kennzahlen thematisch zu gruppieren. Du kannst:

- Ordner nach Bereichen, Prozessen oder Teams anlegen
- Berechtigungen pro Ordner steuern
- Ordner-spezifische Cockpits nutzen

**Navigation:** Klicke auf das Ordner-Symbol oder wähle **Kennzahlen** → **Kennzahlenordner**

### Favoriten

Deine **Favoriten** ermöglichen schnellen Zugriff auf häufig benötigte Kennzahlen.

**Navigation:** Klicke auf das Stern-Symbol

### Überfällige Messungen

Wenn Kennzahlen eine **Wiedervorlage** (Datum der nächsten Messung) haben und diese überschritten ist, erscheint ein Button für überfällige Messungen.

**Navigation:** Roter Button in der Navigationsleiste (falls vorhanden)

## Die Cockpit-Ansicht verstehen

Das Cockpit zeigt jede Kennzahl als Karte mit folgenden Elementen:

<pre>
┌─────────────────────────────────────────────────────┐
│  Kennzahl-Titel                     [Ampel] [Trend]│
│                                                     │
│  ┌───────────────────────────────────────────┐     │
│  │                                           │     │
│  │           Balkendiagramm                  │     │
│  │           (Ist vs. Soll)                  │     │
│  │                                           │     │
│  └───────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────┘
</pre>

**Elemente erklärt:**

| Element | Bedeutung |
|---------|-----------|
| **Titel** | Name der Kennzahl (klickbar für Details) |
| **Ampel** | Aktuelle Bewertung (grün/orange/rot) |
| **Trend** | Entwicklungsrichtung (steigend/stabil/fallend) |
| **Diagramm** | Verlauf der Messungen mit Zielwert-Linie |

## Deine erste Kennzahl anlegen

**Voraussetzung:** Du benötigst die Berechtigung zum Erstellen von Kennzahlen (Gruppe `kpi_admin` oder Admin-Rechte auf einem Ordner).

**Schritt 1: Zum Cockpit navigieren**

Klicke im Hauptmenü auf **Kennzahlen**

**Schritt 2: Neue Kennzahl erstellen**

Klicke auf den grünen Button **Kennzahl** (mit Plus-Symbol) oben rechts

**Schritt 3: Grunddaten eingeben**

Fülle folgende Felder aus:

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| **Titel** | Aussagekräftiger Name | "Kundenzufriedenheit" |
| **Beschreibung** | Erklärung der Kennzahl | "Durchschnittliche Bewertung aus Kundenumfragen" |
| **Ordner** | Thematische Zuordnung | "Qualitätskennzahlen" |

**Schritt 4: Zielwert definieren**

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| **Einheit** | Masseinheit | "%" oder "Punkte" |
| **Zielwert** | Angestrebter Wert | "85" |

**Schritt 5: Verantwortung zuweisen**

| Feld | Beschreibung |
|------|--------------|
| **Verantwortliche Person** | Wer ist für die Kennzahl zuständig? |
| **Verantwortliche Funktion** | Alternativ: Welche Funktion ist zuständig? |

**Schritt 6: Speichern**

Klicke auf den grünen **Speichern**-Button

> **Tipp:** Beginne mit wenigen, wichtigen Kennzahlen. Du kannst später jederzeit weitere hinzufügen.

## Erste Messung erfassen

Nachdem du eine Kennzahl erstellt hast, erfasse die erste Messung:

**Schritt 1: Kennzahl öffnen**

Klicke auf den Titel der Kennzahl im Cockpit oder in der Liste

**Schritt 2: Messung hinzufügen**

Klicke auf den grünen Button **Messung** oben rechts

**Schritt 3: Messdaten eingeben**

| Feld | Beschreibung |
|------|--------------|
| **Datum** | Wann wurde gemessen? |
| **Messwert** | Der erfasste Wert |
| **Zielwert** | Optionaler abweichender Zielwert für diese Messung |
| **Bewertung** | Ampelstatus (grün/orange/rot) |
| **Beschreibung** | Optionaler Kommentar zur Messung |

**Schritt 4: Speichern**

Klicke auf **Speichern**

> **Tipp:** Nach dem Speichern kannst du direkt die nächste Messung erfassen - das Formular bleibt geöffnet.

## Best Practices für den Einstieg

### Kennzahlen sinnvoll auswählen

- **Weniger ist mehr**: Starte mit 5-10 wichtigen Kennzahlen
- **SMART-Kriterien**: Kennzahlen sollten spezifisch, messbar, erreichbar, relevant und terminiert sein
- **Prozessbezug**: Verknüpfe Kennzahlen mit den zugehörigen Prozessen

### Ordnerstruktur planen

- **Thematisch gruppieren**: z.B. "Finanzen", "Qualität", "Mitarbeiter"
- **Nach Verantwortung**: z.B. pro Abteilung oder Team
- **Flache Hierarchie**: Vermeide zu tiefe Verschachtelungen

### Messrhythmus festlegen

- **Periodizität definieren**: Wie oft wird gemessen? (monatlich, quartalsweise, jährlich)
- **Wiedervorlage nutzen**: Lass dich an fällige Messungen erinnern
- **Regelmässigkeit**: Halte den Messrhythmus konsequent ein

## Häufige Fragen (FAQ)

### Wo sehe ich alle meine Kennzahlen?

Navigiere zu **Kennzahlen** → klicke auf das Listen-Symbol in der Navigationsleiste. Dort siehst du alle Kennzahlen, für die du Leseberechtigung hast.

### Kann ich eine Kennzahl als Favorit markieren?

Ja! Öffne die Kennzahl-Detailseite und klicke auf das Stern-Symbol oben rechts. Die Kennzahl erscheint dann unter **Favoriten**.

### Wie finde ich überfällige Messungen?

Wenn Kennzahlen überfällige Messungen haben, erscheint automatisch ein roter Button in der Navigationsleiste. Klicke darauf für eine Übersicht aller fälligen Messungen.

### Kann ich Kennzahlen archivieren statt löschen?

Ja! Beim Bearbeiten einer Kennzahl kannst du das Feld **Archiviert** aktivieren. Die Kennzahl wird dann nicht mehr im Cockpit angezeigt, bleibt aber mit allen Messungen erhalten.

## Zusammenfassung

Du hast in diesem Kapitel gelernt:

- Wie du auf das Kennzahlen-Modul zugreifst
- Welche Bereiche das Modul hat (Cockpit, Liste, Ordner, Favoriten)
- Wie das Cockpit aufgebaut ist
- Wie du deine erste Kennzahl erstellst
- Wie du eine Messung erfasst

## Nächste Schritte

Fahre mit dem nächsten Kapitel fort, um mehr über die Verwaltung von Kennzahlen und Ordnern zu erfahren:

→ [Kennzahlen verwalten]({{< ref "02-kennzahlen-verwalten" >}})
