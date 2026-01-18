---
title: "Kennzahlen verwalten"
description: ""
weight: "2"
tags:
  - "kennzahlen"
  - "ordner"
  - "verwaltung"
  - "erstellen"
  - "bearbeiten"
---


# Kennzahlen verwalten

In diesem Kapitel lernst du, wie du Kennzahlen und Kennzahlenordner erstellst, bearbeitest und organisierst.

## Kennzahlenordner

Kennzahlenordner helfen dir, deine Kennzahlen thematisch zu strukturieren. Jeder Ordner kann eigene Berechtigungen haben.

### Neuen Ordner erstellen

**Schritt 1: Zur Ordner-Übersicht navigieren**

Klicke im Cockpit auf das **Ordner-Symbol** oder navigiere zu **Kennzahlen** → **Kennzahlenordner**

**Schritt 2: Neuen Ordner anlegen**

Klicke auf den grünen Button **Ordner** (mit Plus-Symbol)

**Schritt 3: Ordner-Daten eingeben**

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| **Titel** | Name des Ordners | "Qualitätskennzahlen" |
| **Beschreibung** | Optionale Erläuterung | "Alle Kennzahlen im Bereich Qualitätsmanagement" |

**Schritt 4: Berechtigungen festlegen**

Im Bereich **Berechtigungen** kannst du definieren, wer Zugriff auf den Ordner hat:

| Feld | Beschreibung |
|------|--------------|
| **Sichtbarkeit** | "normal" oder "geschützt" |
| **Beteiligte Organisationseinheiten** | Welche Abteilungen haben Zugriff? |
| **Admins** | Wer darf den Ordner und alle Kennzahlen darin bearbeiten? |
| **Team** | Wer hat Lesezugriff auf den Ordner? |

> **Wichtig:** Bei **geschützter** Sichtbarkeit haben nur die explizit berechtigten Personen Zugriff.

**Schritt 5: Speichern**

Klicke auf den grünen **Speichern**-Button

### Ordner bearbeiten

1. Öffne den Ordner durch Klick auf den Titel
2. Klicke auf das **Bearbeiten-Symbol** (Stift) oben rechts
3. Nimm deine Änderungen vor
4. Speichere mit dem grünen Button

### Ordner-Cockpit

Jeder Ordner hat ein eigenes Cockpit, das nur die Kennzahlen dieses Ordners zeigt:

1. Öffne den Ordner
2. Klicke auf das **Kompass-Symbol** für das Ordner-Cockpit

## Kennzahlen

### Neue Kennzahl erstellen

**Schritt 1: Erstellung starten**

Klicke im Cockpit oder in der Ordner-Ansicht auf den grünen Button **Kennzahl**

**Schritt 2: Grunddaten eingeben**

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| **Titel** | Ja | Aussagekräftiger Name der Kennzahl |
| **Beschreibung** | Nein | Detaillierte Erklärung, was gemessen wird |
| **Kennzahlenordner** | Nein | Zuordnung zu einem Ordner |

> **Tipp:** Wähle einen präzisen Titel, der die Kennzahl eindeutig beschreibt. Vermeide Abkürzungen, die nicht allgemein bekannt sind.

**Schritt 3: Zielwert definieren**

| Feld | Beschreibung | Beispiele |
|------|--------------|-----------|
| **Einheit** | Masseinheit der Kennzahl | %, CHF, Stück, Punkte, Tage |
| **Zielwert** | Der angestrebte Wert | 95, 100000, 5 |

**Schritt 4: Bewertung festlegen**

Du kannst eine initiale Bewertung für die Kennzahl vergeben:

| Feld | Beschreibung |
|------|--------------|
| **Bewertung** | Ampelstatus: grün, orange oder rot |
| **Kommentar zu Bewertung** | Begründung für die Bewertung |

> **Hinweis:** Die Bewertung wird normalerweise über Messungen aktualisiert. Die Bewertung auf Kennzahlen-Ebene dient als Standardwert.

**Schritt 5: Aktualisierung konfigurieren**

| Feld | Beschreibung |
|------|--------------|
| **Periodizität der Messung** | Wie oft soll gemessen werden? (z.B. monatlich, quartalsweise) |
| **Datum der nächsten Messung** | Wann ist die nächste Messung fällig? |

> **Tipp:** Wenn du eine Periodizität und ein Wiedervorlagedatum angibst, wird das System dich an überfällige Messungen erinnern.

**Schritt 6: Verantwortung zuweisen**

| Feld | Beschreibung |
|------|--------------|
| **Verantwortliche Person** | Wer ist für die Kennzahl zuständig? |
| **Verantwortliche Funktion** | Alternativ: Welche Funktion ist verantwortlich? |

> **Hinweis:** Die verantwortliche Person erhält automatisch Bearbeitungsrechte für die Kennzahl.

**Schritt 7: Verknüpfungen herstellen**

| Feld | Beschreibung |
|------|--------------|
| **Verknüpfte Prozesse** | Mit welchen Prozessen ist die Kennzahl verbunden? |

**Schritt 8: Konfiguration**

| Feld | Beschreibung |
|------|--------------|
| **Grafik anzeigen** | Soll das Diagramm im Cockpit angezeigt werden? |
| **Archiviert** | Kennzahl ausblenden ohne sie zu löschen |

**Schritt 9: Speichern**

Klicke auf den grünen **Speichern**-Button

### Kennzahl bearbeiten

1. Öffne die Kennzahl durch Klick auf den Titel
2. Klicke auf das **Bearbeiten-Symbol** (Stift) oben rechts
3. Nimm deine Änderungen vor
4. Speichere mit dem grünen Button

### Kennzahl löschen

> **Warnung:** Das Löschen einer Kennzahl entfernt auch alle zugehörigen Messungen unwiderruflich!

1. Öffne die Kennzahl
2. Klicke auf das **Drei-Punkte-Menü** oben rechts
3. Wähle **Löschen**
4. Bestätige die Löschung

> **Empfehlung:** Archiviere Kennzahlen statt sie zu löschen, um die Messhistorie zu erhalten.

### Kennzahl archivieren

Archivierte Kennzahlen werden im Cockpit nicht mehr angezeigt, bleiben aber mit allen Daten erhalten.

1. Bearbeite die Kennzahl
2. Aktiviere das Feld **Archiviert**
3. Speichere

**Archivierte Kennzahlen anzeigen:**

1. Gehe zur Kennzahlen-Liste (Listen-Symbol)
2. Füge `?show_archived=1` zur URL hinzu oder nutze den entsprechenden Filter

## Alle Felder einer Kennzahl

Hier eine vollständige Übersicht aller verfügbaren Felder:

### Grunddaten

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| Titel | Ja | Name der Kennzahl |
| Beschreibung | Nein | Ausführliche Erklärung |
| Kennzahlenordner | Nein | Thematische Zuordnung |

### Ziel

| Feld | Beschreibung |
|------|--------------|
| Einheit | Masseinheit (%, CHF, etc.) |
| Zielwert | Angestrebter Wert |

### Bewertung

| Feld | Beschreibung |
|------|--------------|
| Bewertung | Ampelstatus (grün/orange/rot) |
| Kommentar zu Bewertung | Begründung |

### Aktualisierung

| Feld | Beschreibung |
|------|--------------|
| Periodizität der Messung | Messfrequenz |
| Datum der nächsten Messung | Wiedervorlagedatum |

### Verantwortung

| Feld | Beschreibung |
|------|--------------|
| Verantwortliche Person | Zuständiger Benutzer |
| Verantwortliche Funktion | Zuständige Funktion |

### Verknüpfungen

| Feld | Beschreibung |
|------|--------------|
| Verknüpfte Prozesse | Zugehörige Prozesse |

### Konfiguration

| Feld | Beschreibung |
|------|--------------|
| Grafik anzeigen | Diagramm im Cockpit ein/aus |
| Archiviert | Kennzahl ausblenden |

## Best Practices

### Kennzahlen definieren

- **Eindeutige Titel**: "Kundenzufriedenheit Q4 2024" statt nur "Zufriedenheit"
- **Messbare Ziele**: Definiere klare, numerische Zielwerte
- **Verantwortung klären**: Jede Kennzahl braucht einen Verantwortlichen
- **Beschreibung nutzen**: Dokumentiere, wie die Kennzahl erhoben wird

### Ordnerstruktur

- **Nach Themen**: Qualität, Finanzen, Personal, Kunden
- **Nach Prozessen**: Ordner pro Hauptprozess
- **Nach Bereichen**: Ordner pro Abteilung oder Team
- **Flach halten**: Vermeide zu tiefe Verschachtelungen

### Periodizität wählen

| Kennzahlen-Typ | Empfohlene Periodizität |
|----------------|------------------------|
| Operative KPIs | Monatlich oder wöchentlich |
| Strategische KPIs | Quartalsweise |
| Jahres-KPIs | Jährlich |
| Projekt-KPIs | Nach Meilensteinen |

## Häufige Fragen (FAQ)

### Kann ich eine Kennzahl in einen anderen Ordner verschieben?

Ja! Bearbeite die Kennzahl und ändere das Feld **Kennzahlenordner**.

### Was passiert mit den Messungen, wenn ich eine Kennzahl lösche?

Alle Messungen werden ebenfalls gelöscht. Archiviere die Kennzahl stattdessen, um die Daten zu behalten.

### Kann eine Kennzahl mehreren Prozessen zugeordnet werden?

Ja, das Feld **Verknüpfte Prozesse** erlaubt Mehrfachauswahl.

### Wie ändere ich die Verantwortung für eine Kennzahl?

Bearbeite die Kennzahl und ändere das Feld **Verantwortliche Person** oder **Verantwortliche Funktion**.

### Kann ich Kennzahlen ohne Ordner anlegen?

Ja, das Feld **Kennzahlenordner** ist optional. Die Kennzahl erscheint dann nur im Haupt-Cockpit.

## Zusammenfassung

Du hast in diesem Kapitel gelernt:

- Wie du Kennzahlenordner erstellst und verwaltest
- Welche Felder beim Erstellen einer Kennzahl verfügbar sind
- Wie du Verantwortlichkeiten und Periodizitäten festlegst
- Wie du Kennzahlen archivierst statt löscht
- Best Practices für die Strukturierung

## Nächste Schritte

Im nächsten Kapitel lernst du, wie du Messungen erfasst und dokumentierst:

→ [Messungen erfassen]({{< ref "03-messungen" >}})
