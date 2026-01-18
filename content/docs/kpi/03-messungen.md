---
title: "Messungen erfassen"
description: ""
weight: "3"
tags:
  - "messungen"
  - "erfassen"
  - "bewertung"
  - "trend"
  - "import"
  - "export"
---


# Messungen erfassen

In diesem Kapitel lernst du, wie du Messungen für deine Kennzahlen erfasst, bewertest und mit Excel importierst oder exportierst.

## Was ist eine Messung?

Eine Messung ist ein konkreter Datenpunkt zu einem bestimmten Zeitpunkt. Sie enthält:

- **Datum**: Wann wurde gemessen?
- **Messwert**: Der tatsächlich gemessene Wert
- **Zielwert**: Optional abweichender Zielwert für diesen Zeitpunkt
- **Bewertung**: Ampelstatus (grün, orange, rot)
- **Trend**: Entwicklungsrichtung (steigend, stabil, fallend)
- **Beschreibungen**: Kommentare zur Messung und zum Trend

## Neue Messung erfassen

### Messung über die Detailseite

**Schritt 1: Kennzahl öffnen**

Klicke auf den Titel der Kennzahl im Cockpit oder in der Liste

**Schritt 2: Messung hinzufügen**

Klicke auf den grünen Button **Messung** oben rechts

**Schritt 3: Grunddaten eingeben**

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| **Datum** | Ja | Das Datum der Messung (Voreinstellung: heute) |
| **Messwert** | Ja | Der gemessene Wert |
| **Zielwert** | Nein | Optionaler abweichender Zielwert für diese Messung |

**Schritt 4: Bewertung vergeben**

| Feld | Beschreibung |
|------|--------------|
| **Bewertung** | Ampelstatus: grün, orange oder rot |
| **Beschreibung** | Begründung oder Kommentar zur Bewertung |

**Bewertungsrichtlinien:**

| Status | Bedeutung | Typische Verwendung |
|--------|-----------|---------------------|
| **Grün** | Ziel erreicht oder übertroffen | Messwert entspricht oder übertrifft Zielwert |
| **Orange** | Leichte Abweichung | Messwert weicht geringfügig vom Ziel ab |
| **Rot** | Deutliche Abweichung | Messwert verfehlt das Ziel deutlich |

**Schritt 5: Trend dokumentieren**

| Feld | Beschreibung |
|------|--------------|
| **Trend** | positiv, stabil oder negativ |
| **Beschreibung Trend** | Erklärung der Entwicklung |

**Trend-Bedeutung:**

| Trend | Symbol | Bedeutung |
|-------|--------|-----------|
| **Positiv** | ↗ | Die Kennzahl entwickelt sich in die gewünschte Richtung |
| **Stabil** | → | Die Kennzahl bleibt auf gleichem Niveau |
| **Negativ** | ↘ | Die Kennzahl entwickelt sich in die falsche Richtung |

**Schritt 6: Nächste Messung planen**

Wenn die Kennzahl eine Periodizität oder Wiedervorlage hat, wird ein zusätzliches Feld angezeigt:

| Feld | Beschreibung |
|------|--------------|
| **Datum der nächsten Messung** | Wann soll die nächste Messung erfolgen? |

> **Tipp:** Das System berechnet automatisch das nächste Datum basierend auf der Periodizität.

**Schritt 7: Speichern**

Klicke auf **Speichern**

> **Hinweis:** Nach dem Speichern bleibt das Formular geöffnet, sodass du direkt weitere Messungen erfassen kannst.

## Messung bearbeiten

1. Öffne die Kennzahl-Detailseite
2. Klicke in der Messungstabelle auf das **Datum** der Messung
3. Auf der Messungs-Detailseite klicke auf das **Bearbeiten-Symbol** (Stift)
4. Nimm deine Änderungen vor
5. Speichere mit dem grünen Button

## Messung löschen

> **Warnung:** Gelöschte Messungen können nicht wiederhergestellt werden!

1. Öffne die Messung (Klick auf Datum in der Tabelle)
2. Klicke auf den **Löschen**-Button
3. Bestätige die Löschung

## Alle Felder einer Messung

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| Datum | Ja | Zeitpunkt der Messung |
| Messwert | Ja | Der erfasste Wert |
| Zielwert | Nein | Abweichender Zielwert für diese Messung |
| Bewertung | Nein | Ampelstatus (grün/orange/rot) |
| Beschreibung | Nein | Kommentar zur Messung |
| Trend | Nein | Entwicklungsrichtung |
| Beschreibung Trend | Nein | Erklärung der Entwicklung |

## Excel-Export

Du kannst alle Messungen einer Kennzahl als Excel-Datei exportieren.

### Einzelne Kennzahl exportieren

1. Öffne die Kennzahl-Detailseite
2. Klicke auf das **Excel-Symbol** oben rechts
3. Die Datei wird automatisch heruntergeladen

**Enthaltene Spalten:**

| Spalte | Beschreibung |
|--------|--------------|
| ID | Eindeutige Kennung der Messung |
| Datum | Datum der Messung |
| Wert | Gemessener Wert |
| Ziel | Zielwert |
| Einheit | Masseinheit |
| Status | Ampelstatus |
| Trend | Trend-Richtung |
| Beschreibung | Kommentar |
| Trend Beschreibung | Trend-Erklärung |

### Alle Kennzahlen exportieren

1. Navigiere zur Kennzahlen-Liste (Listen-Symbol)
2. Wähle im Menü **Export aller Kennzahlen**

**Enthaltene Spalten:**

| Spalte | Beschreibung |
|--------|--------------|
| Titel | Name der Kennzahl |
| Beschreibung | Beschreibung der Kennzahl |
| Zielwert | Definierter Zielwert |
| Einheit | Masseinheit |
| Letzte Messung | Aktuellster Messwert |
| Status | Ampelstatus der letzten Messung |
| Kommentar | Beschreibung der letzten Messung |
| Trend | Trend der letzten Messung |
| Datum | Datum der letzten Messung |
| Nächste Messung | Wiedervorlagedatum |
| Massnahmen | Verknüpfte Massnahmen |

## Excel-Import

Du kannst Messungen aus einer Excel-Datei importieren. Das ist besonders nützlich für:

- Historische Daten übernehmen
- Bulk-Updates vieler Messungen
- Datenimport aus anderen Systemen

### Import durchführen

**Schritt 1: Kennzahl öffnen**

Öffne die Kennzahl, für die du Messungen importieren möchtest

**Schritt 2: Import starten**

1. Klicke auf das **Drei-Punkte-Menü** oben rechts
2. Wähle **Aus Excel importieren**

**Schritt 3: Datei vorbereiten**

Deine Excel-Datei muss folgende Spalten enthalten:

| Spalte | Pflicht | Format |
|--------|---------|--------|
| **Datum** | Ja | TT.MM.JJJJ oder JJJJ-MM-TT |
| **Wert** | Ja | Zahl (Dezimaltrennzeichen: Punkt oder Komma) |
| ID | Nein | Zahl (nur für Updates bestehender Messungen) |
| Ziel | Nein | Zahl |
| Status | Nein | green, orange oder red |
| Trend | Nein | trending_up, trending_flat oder trending_down |
| Beschreibung | Nein | Text |
| Trend Beschreibung | Nein | Text |

> **Tipp:** Exportiere zuerst die bestehenden Messungen, um das korrekte Format zu sehen.

**Schritt 4: Datei hochladen**

1. Klicke auf **Datei auswählen**
2. Wähle deine Excel-Datei (.xlsx)
3. Klicke auf **Hochladen**

**Schritt 5: Import prüfen**

Nach dem Import siehst du ein Protokoll mit dem Ergebnis:

| Status | Bedeutung |
|--------|-----------|
| **Info: Neue Messung erstellt** | Neue Messung wurde angelegt |
| **Info: Messung aktualisiert** | Bestehende Messung wurde geändert |
| **Warnung: Falsche ID** | Die angegebene ID existiert nicht |
| **Fehler: Datum fehlt** | Pflichtfeld Datum nicht vorhanden |
| **Fehler: Ungültiges Datum** | Datumsformat nicht erkannt |

### Import-Logik

Der Import funktioniert wie folgt:

1. **Mit ID**: Wenn eine ID angegeben ist und existiert, wird die Messung aktualisiert
2. **Ohne ID**: Es wird eine neue Messung erstellt
3. **Mit ID, ohne Datum und Wert**: Die Messung wird gelöscht

> **Warnung:** Der Import kann Messungen überschreiben oder löschen. Erstelle vorher einen Export als Backup!

## Massnahmen bei Abweichungen

Wenn eine Messung vom Ziel abweicht, kannst du direkt eine Massnahme verknüpfen.

### Massnahme hinzufügen

1. Öffne die Kennzahl-Detailseite
2. Klicke auf den grünen Button **Massnahme** (wenn das SWOT-Modul aktiv ist)
3. Fülle das Massnahmen-Formular aus:
   - Titel der Massnahme
   - Beschreibung
   - Frist
   - Verantwortliche Person

### Massnahmen anzeigen

Auf der Kennzahl-Detailseite siehst du alle verknüpften Massnahmen in einer Tabelle:

| Spalte | Beschreibung |
|--------|--------------|
| Massnahme | Titel und Beschreibung |
| Frist | Bis wann soll umgesetzt werden? |
| Verantwortung | Wer ist zuständig? |
| Status | Aktueller Status der Massnahme |

## Best Practices

### Regelmässig messen

- **Rhythmus einhalten**: Halte dich an die definierte Periodizität
- **Wiedervorlage nutzen**: Lass dich an fällige Messungen erinnern
- **Nicht aufschieben**: Erfasse Messungen zeitnah

### Aussagekräftig bewerten

- **Objektiv bleiben**: Bewerte nach klaren Kriterien, nicht nach Gefühl
- **Begründen**: Nutze das Beschreibungsfeld für Kontext
- **Trend beachten**: Auch bei grüner Ampel kann der Trend negativ sein

### Massnahmen ableiten

- **Bei Orange/Rot**: Prüfe, ob eine Massnahme nötig ist
- **Konkret formulieren**: Was genau soll getan werden?
- **Verantwortung klären**: Wer setzt um und bis wann?

### Excel effektiv nutzen

- **Backup erstellen**: Exportiere vor dem Import
- **Format prüfen**: Nutze das exportierte Format als Vorlage
- **Schrittweise**: Importiere grössere Datenmengen in Teilschritten

## Häufige Fragen (FAQ)

### Kann ich eine Messung nachträglich ändern?

Ja, öffne die Messung und klicke auf Bearbeiten. Alle Felder sind editierbar.

### Was passiert, wenn ich das Datum einer Messung ändere?

Die Messung wird mit dem neuen Datum in der Chronologie einsortiert. Das Diagramm aktualisiert sich entsprechend.

### Kann ich mehrere Messungen am gleichen Tag erfassen?

Ja, das ist möglich. Alle Messungen werden gespeichert und im Diagramm angezeigt.

### Wie lösche ich viele Messungen auf einmal?

Nutze den Excel-Import: Exportiere die Messungen, lösche die Zeilen mit Wert, behalte nur die ID, und importiere erneut. Zeilen mit ID aber ohne Datum und Wert werden gelöscht.

### Warum wird meine Excel-Datei nicht akzeptiert?

Prüfe folgende Punkte:
- Dateiformat muss .xlsx sein (nicht .xls)
- Spalten "Datum" und "Wert" müssen vorhanden sein
- Datumsformat muss TT.MM.JJJJ oder JJJJ-MM-TT sein

## Zusammenfassung

Du hast in diesem Kapitel gelernt:

- Wie du neue Messungen erfasst
- Was die Felder Bewertung und Trend bedeuten
- Wie du Messungen per Excel importierst und exportierst
- Wie du bei Abweichungen Massnahmen verknüpfst
- Best Practices für regelmässige Messungen

## Nächste Schritte

Im nächsten Kapitel lernst du, wie du das Cockpit und die Auswertungsfunktionen nutzt:

→ [Auswertung und Cockpit]({{< ref "04-auswertung-cockpit" >}})
