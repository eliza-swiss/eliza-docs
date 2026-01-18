---
title: "Erste Schritte in der Zeiterfassung"
description: ""
weight: "1"
tags:
  - "getting-started"
  - "basics"
  - "zeiterfassung"
  - "einführung"
---


# Erste Schritte in der Zeiterfassung

In diesem Kapitel lernst du die Grundlagen des ELIZA Zeiterfassungs-Moduls kennen. Du erfährst, wie du dich zurechtfindest und welche Funktionen dir zur Verfügung stehen.

## Was ist die Zeiterfassung?

Die ELIZA Zeiterfassung ist ein umfassendes Modul zur Erfassung und Verwaltung von:

- **Arbeitszeiten** – Tägliche Stundenerfassung mit Start-/Endzeit oder Stundenzahl
- **Abwesenheiten** – Ferien, Krankheit und andere Absenzen
- **Spesen** – Spesenabrechnung mit Belegen und Genehmigungsworkflow
- **Auswertungen** – Monatsreports, Gleitzeitsaldo und Feriensaldo

Die Zeiterfassung arbeitet eng mit dem Modul **Organisation** zusammen, wo dein Anstellungsverhältnis und deine Sollstunden definiert sind.

## Navigation in der Zeiterfassung

### Zugriff auf die Zeiterfassung

Du erreichst die Zeiterfassung über das Hauptmenü:

1. Klicke auf **Zeiterfassung** in der Hauptnavigation
2. Du landest auf deinem persönlichen Dashboard

### Das Menü im Überblick

Im Zeiterfassungs-Menü findest du folgende Bereiche:

| Menüpunkt | Beschreibung |
|-----------|--------------|
| **Dashboard** | Übersicht für Administratoren mit Auswertungen |
| **Meine Arbeitszeit** | Tägliche Stundenerfassung |
| **Mein Monatsreport** | Persönliche Monatsübersicht |
| **Monatsübersicht** | Gesamtübersicht aller Mitarbeitenden |
| **Monatsabschluss** | Administrativer Monatsabschluss |
| **Meine Absenzen** | Persönliche Abwesenheiten verwalten |
| **Monatsplan** | Abwesenheitskalender des Teams |
| **Freigaben** | Offene Genehmigungsanfragen |
| **Gesamtübersicht** | Jahresübersicht aller Abwesenheiten |
| **Spesen** | Spesenerfassung und -übersicht |
| **Einstellungen** | Konfiguration (nur für Administratoren) |

> **💡 Tipp:** Je nach deinen Berechtigungen siehst du möglicherweise nicht alle Menüpunkte. Das ist normal und hängt von deiner Rolle im System ab.

## Dein persönliches Dashboard

Wenn du die Zeiterfassung öffnest, siehst du dein persönliches Dashboard mit wichtigen Informationen:

### Aktuelle Salden

Auf einen Blick siehst du:

- **Gleitzeitsaldo** – Deine Über- oder Unterzeit
- **Feriensaldo** – Verbleibende Ferientage
- **Kranktage** – Erfasste Krankheitstage im aktuellen Jahr

### Schnellzugriff

Vom Dashboard aus gelangst du schnell zu:

- Deiner heutigen Arbeitszeiterfassung
- Deinem aktuellen Monatsreport
- Deinen offenen Abwesenheitsanträgen

## Grundlegende Konzepte

Bevor du mit der Zeiterfassung beginnst, solltest du folgende Konzepte verstehen:

### Anstellungsverhältnis

Dein Anstellungsverhältnis definiert:

- Deine **Sollstunden** pro Woche
- Dein **Arbeitszeitmodell** (Vollzeit, Teilzeit, etc.)
- Deinen **Ferienanspruch**
- Ob du **Vertrauensarbeitszeit** hast

> **⚠️ Wichtig:** Ohne gültiges Anstellungsverhältnis können keine korrekten Auswertungen erstellt werden. Wende dich bei Fragen an deine HR-Abteilung.

### Stundenarten

Arbeitszeiten werden mit einer **Stundenart** erfasst. Diese bestimmt:

- Ob die Zeit als Arbeitszeit angerechnet wird
- Den **Umrechnungsfaktor** (z.B. 1.0 für normale Arbeitszeit, 1.25 für Überzeit)
- Ob es sich um eine Pause handelt

### Abwesenheitsarten

Verschiedene Abwesenheitsarten haben unterschiedliche Auswirkungen:

- **Ferien** – Werden vom Feriensaldo abgezogen
- **Krankheit** – Werden als Kranktage gezählt, aber als Arbeitszeit angerechnet
- **Unbezahlter Urlaub** – Keine Arbeitszeit-Gutschrift

### Workflow-Status

Abwesenheiten und Spesen durchlaufen einen Genehmigungsworkflow:

<pre>
┌──────────┐    ┌─────────────┐    ┌─────────────┐
│ Geplant  │ ──▶│ In Prüfung  │ ──▶│ Freigegeben │
└──────────┘    └─────────────┘    └─────────────┘
                      │
                      ▼
               ┌─────────────┐
               │  Abgelehnt  │
               └─────────────┘
</pre>

## Deine erste Aktion: Arbeitszeit erfassen

Hier eine kurze Anleitung für deine erste Zeiterfassung:

**Schritt 1:** Klicke auf **Meine Arbeitszeit** im Menü

**Schritt 2:** Du siehst den heutigen Tag mit deinen bisherigen Einträgen

**Schritt 3:** Klicke auf **Hinzufügen** um einen neuen Eintrag zu erstellen

**Schritt 4:** Fülle das Formular aus:
- **Stundenart**: Wähle die passende Art (z.B. "Arbeitszeit")
- **Beginn**: Startzeit eingeben (z.B. 08:00)
- **Ende**: Endzeit eingeben (z.B. 12:00)
- **Beschreibung**: Optional eine Beschreibung hinzufügen

**Schritt 5:** Klicke auf **Speichern**

> **💡 Tipp:** Du kannst auch nur die Startzeit eingeben und später die Endzeit nachtragen – praktisch für einen laufenden Timer!

## Wichtige Tastenkombinationen und Tipps

- **Zeitformat**: Gib Zeiten im Format `HH:MM` oder `HHMM` ein (z.B. `0800` für 08:00)
- **Schnelle Navigation**: Nutze die Pfeile um zwischen Tagen zu wechseln
- **Kalenderansicht**: Klicke auf das Datum um den Kalender zu öffnen

## Nächste Schritte

Nachdem du die Grundlagen kennst, empfehlen wir dir:

1. **[Anstellungsverhältnis]({{< ref "02-anstellungsverhaeltnis" >}})** – Verstehe dein Arbeitszeitmodell
2. **[Arbeitszeit erfassen]({{< ref "03-arbeitszeit-erfassen" >}})** – Detaillierte Anleitung zur Zeiterfassung
3. **[Abwesenheiten]({{< ref "04-abwesenheiten" >}})** – Ferien und andere Absenzen verwalten

## Häufige Fragen

### Ich sehe die Zeiterfassung nicht im Menü?

Du benötigst die entsprechende Berechtigung. Wende dich an deine HR-Abteilung oder einen Administrator.

### Mein Gleitzeitsaldo stimmt nicht?

Prüfe zunächst:
1. Ist dein Anstellungsverhältnis korrekt erfasst?
2. Sind alle Arbeitszeiten eingetragen?
3. Sind alle Abwesenheiten korrekt erfasst?

Bei weiteren Fragen wende dich an deine HR-Abteilung.

### Kann ich Einträge nachträglich ändern?

Ja, du kannst deine eigenen Einträge bearbeiten, solange der Monat noch nicht abgeschlossen ist. Bereits abgeschlossene Monate können nur von Administratoren korrigiert werden.

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Was die Zeiterfassung ist und welche Funktionen sie bietet
- ✅ Wie du im Modul navigierst
- ✅ Welche grundlegenden Konzepte wichtig sind
- ✅ Wie du deine erste Arbeitszeit erfasst

Im nächsten Kapitel erfährst du alles über dein Anstellungsverhältnis – die Grundlage für korrekte Zeiterfassung.
