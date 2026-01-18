---
title: "Vertragsübersicht"
description: ""
weight: "4"
tags:
  - "overview"
  - "search"
  - "filter"
---


# Vertragsübersicht

In diesem Kapitel lernst du, wie du die Vertragsübersicht effektiv nutzt und Verträge schnell findest.

## Vertragsübersicht öffnen

### Zugriff auf die Übersicht

**Methode 1: Über Ordner**

1. Navigiere zum Vertragsmanagement
2. Öffne einen Ordner
3. Scrolle zum Bereich **"Verträge"**
4. Du siehst die Tabelle mit allen Verträgen im Ordner

**Methode 2: Globale Übersicht**

- Manche Installationen haben eine globale Vertragsübersicht
- Zeigt alle Verträge über alle Ordner hinweg
- Erfordert entsprechende Berechtigungen

## Die Vertrags-Tabelle

### Spalten der Tabelle

Die Vertragsübersicht zeigt standardmäßig folgende Spalten:

| Spalte | Beschreibung | Beispiel |
|--------|--------------|----------|
| **Titel** | Name des Vertrags | Microsoft Office 365 |
| **Partner** | Vertragspartner | Microsoft Deutschland |
| **Von** | Startdatum | 01.01.2024 |
| **Bis** | Enddatum | 31.12.2024 |
| **Status** | Aktueller Status | Aktiv, Entwurf, etc. |
| **Aktionen** | Buttons | Ansehen, Bearbeiten, Löschen |

### Spalten anpassen

**Spalten ein-/ausblenden:**

1. Klicke auf das **Spalten-Icon** (oben rechts in der Tabelle)
2. Wähle die gewünschten Spalten aus
3. Klicke auf **"Übernehmen"**

**Zusätzlich verfügbare Spalten:**

- Vertragstyp
- Verantwortlicher Mitarbeiter
- Verantwortliche Organisationseinheit
- Cashflow-Typ
- Betrag
- Zahlungsperiodizität
- Kündigungsfrist
- Frühester Kündigungstermin
- Spätester Kündigungstermin

## Suche und Filter

### Schnellsuche

**Suchfeld nutzen:**

1. Finde das Suchfeld oben rechts in der Tabelle
2. Gib einen Suchbegriff ein
3. Die Tabelle wird sofort gefiltert

**Was wird durchsucht:**

- Vertragstitel
- Vertragspartner
- Beschreibung

**Beispiel:**

- Suche nach "Microsoft" → Zeigt alle Verträge mit Microsoft
- Suche nach "Lizenz" → Zeigt alle Lizenzverträge

### Nach Status filtern

**Status-Filter:**

Die Vertragsübersicht kann nach Status gefiltert werden:

**Verfügbare Status:**

- **Entwurf**: Verträge in Vorbereitung
- **Aktiv**: Laufende Verträge
- **Gekündigt**: Verträge die gekündigt wurden
- **Abgelaufen**: Verträge deren Laufzeit abgelaufen ist
- **Archiviert**: Archivierte Verträge

**Filter anwenden:**

1. Klicke auf **"Filter"** (oben links)
2. Wähle **"Status"**
3. Wähle gewünschten Status
4. Tabelle wird gefiltert

**Mehrfachauswahl:**

- Halte `Ctrl` (Windows) oder `Cmd` (Mac) gedrückt
- Wähle mehrere Status aus
- Beispiel: Zeige "Aktiv" UND "Gekündigt"

### Nach Datum filtern

**Zeitraum-Filter:**

Filter Verträge nach Laufzeit:

**Von-Datum:**

- Zeige nur Verträge die nach einem bestimmten Datum starten
- Beispiel: Von-Datum >= 01.01.2024

**Bis-Datum:**

- Zeige nur Verträge die vor einem bestimmten Datum enden
- Beispiel: Bis-Datum <= 31.12.2024

**Kombination:**

- Zeige Verträge die in einem bestimmten Zeitraum laufen
- Beispiel: Von 01.01.2024 bis 31.12.2024

**Ablaufende Verträge finden:**

1. Filtere nach Status "Aktiv"
2. Filtere nach Bis-Datum <= heute + 3 Monate
3. Zeigt Verträge die in den nächsten 3 Monaten auslaufen

### Nach Partner filtern

**Partner-Auswahl:**

1. Klicke auf **"Filter"**
2. Wähle **"Partner"**
3. Gib Partnernamen ein
4. Wähle aus Vorschlagsliste

**Mehrere Partner:**

- Wähle mehrere Partner aus
- Zeigt Verträge mit allen ausgewählten Partnern

### Erweiterte Filter

**Cashflow-Typ:**

- Filtere nach "Einnahmen" (in) oder "Ausgaben" (out)
- Beispiel: Zeige nur Verträge die Kosten verursachen

**Verantwortlicher:**

- Filtere nach verantwortlichem Mitarbeiter
- Beispiel: Zeige alle Verträge von Max Muster

**Organisationseinheit:**

- Filtere nach verantwortlicher Orgunit
- Beispiel: Zeige alle IT-Verträge

## Sortierung

### Spalten sortieren

**Klicke auf Spaltentitel:**

- **Einmal klicken**: Aufsteigend sortieren
- **Zweimal klicken**: Absteigend sortieren
- **Dreimal klicken**: Sortierung aufheben

**Häufig genutzte Sortierungen:**

**Nach Ablaufdatum sortieren:**

1. Klicke auf Spalte **"Bis"**
2. Aufsteigend = Älteste zuerst
3. Zeigt Verträge die bald auslaufen

**Nach Partner sortieren:**

1. Klicke auf Spalte **"Partner"**
2. Alphabetische Sortierung

**Nach Status sortieren:**

1. Klicke auf Spalte **"Status"**
2. Gruppiert Verträge nach Status

### Sortierung kombinieren

**Multi-Level Sortierung:**

Manche Tabellen unterstützen mehrfache Sortierung:

1. Halte `Shift` gedrückt
2. Klicke auf zweite Spalte
3. Sortiert erst nach erster, dann nach zweiter Spalte

**Beispiel:**

- Erst nach Status sortieren
- Dann nach Ablaufdatum
- Zeigt aktive Verträge chronologisch nach Ablaufdatum

## Verträge exportieren

### Excel-Export

**Voraussetzungen:**

- Berechtigung zum Export (meist Admin-Rechte)
- Zugriff auf Ordner oder Übersicht

**Schritt-für-Schritt:**

1. Öffne den Ordner
2. Klicke auf **"Exportieren"** (oben rechts)
3. Wähle **"Excel-Export"**
4. Datei wird heruntergeladen

**Export-Optionen:**

**Unterordner einbeziehen:**

- Aktiviere **"Unterordner einbeziehen"**
- Exportiert Verträge aus allen Unterordnern

**Abgelaufene Verträge einbeziehen:**

- Aktiviere **"Abgelaufene Verträge"**
- Exportiert auch Verträge mit Status "Abgelaufen"

**Archivierte Verträge einbeziehen:**

- Aktiviere **"Archivierte Verträge"**
- Exportiert auch archivierte Verträge

**Beispiel: Alle aktiven Verträge exportieren**

```
✅ Unterordner einbeziehen
❌ Abgelaufene Verträge
❌ Archivierte Verträge
```

### Export-Inhalt

**Exportierte Spalten:**

Der Excel-Export enthält alle Vertragsdaten:

- Grunddaten (Titel, Beschreibung, Partner)
- Laufzeit (Von, Bis, Dauer)
- Kündigung (Fristen, Termine)
- Finanzielle Aspekte (Cashflow, Betrag)
- Verantwortlichkeiten (Mitarbeiter, Orgunit)
- Status

**Nicht exportiert:**

- Dateien (Vertragsunterlagen)
- Wertflüsse (separate Tabelle)
- Audit-Historie

## Listen-Ansicht vs. Kalender-Ansicht

### Listen-Ansicht (Standard)

Die Listen-Ansicht zeigt Verträge als Tabelle:

**Vorteile:**

- ✅ Übersichtliche Darstellung vieler Verträge
- ✅ Sortierung und Filterung
- ✅ Alle Spalten auf einen Blick

**Nachteile:**

- ❌ Keine visuelle Zeitachse
- ❌ Schwerer zu erkennen: Was läuft wann aus?

### Kalender-Ansicht (optional)

Manche Installationen bieten eine Kalender-Ansicht:

**Vorteile:**

- ✅ Visuelle Zeitachse
- ✅ Laufzeiten auf einen Blick
- ✅ Überschneidungen erkennbar

**Nachteile:**

- ❌ Weniger Details sichtbar
- ❌ Bei vielen Verträgen unübersichtlich

**Wechsel zwischen Ansichten:**

- Klicke auf **"Listen-Ansicht"** oder **"Kalender-Ansicht"** (oben rechts)

## Paginierung

### Seitenwechsel

Bei vielen Verträgen wird die Liste auf mehrere Seiten aufgeteilt:

**Navigation:**

- **Erste Seite**: Klicke auf `|<`
- **Vorherige Seite**: Klicke auf `<`
- **Nächste Seite**: Klicke auf `>`
- **Letzte Seite**: Klicke auf `>|`
- **Direkt zu Seite**: Gib Seitennummer ein

**Einträge pro Seite:**

1. Wähle Anzahl aus Dropdown (10, 25, 50, 100)
2. Mehr Einträge = weniger Seiten

💡 **Tipp:** Bei vielen Verträgen: Wähle 100 Einträge pro Seite für bessere Übersicht.

## Praktische Szenarien

### Szenario 1: Verträge die bald ablaufen

**Ziel:** Finde alle Verträge die in den nächsten 3 Monaten auslaufen.

**Vorgehen:**

1. Filtere nach Status **"Aktiv"**
2. Sortiere nach Spalte **"Bis"** (aufsteigend)
3. Scrolle durch die Liste
4. Verträge mit Bis-Datum < heute + 3 Monate sind relevant

### Szenario 2: Alle Verträge mit Microsoft

**Ziel:** Finde alle Verträge mit Microsoft Deutschland.

**Vorgehen:**

1. Nutze Suchfeld
2. Gib "Microsoft" ein
3. Tabelle zeigt nur Microsoft-Verträge

### Szenario 3: Kostenintensive Verträge

**Ziel:** Finde alle Verträge mit Kosten > 10'000 CHF.

**Vorgehen:**

1. Füge Spalte **"Betrag"** hinzu
2. Sortiere nach **"Betrag"** (absteigend)
3. Filtere nach Cashflow-Typ **"out"** (Ausgaben)
4. Erste Einträge sind kostenintensivste Verträge

### Szenario 4: Alle Entwürfe

**Ziel:** Finde alle Verträge die noch als Entwurf markiert sind.

**Vorgehen:**

1. Filtere nach Status **"Entwurf"**
2. Prüfe Verträge
3. Aktiviere oder lösche Entwürfe

## Best Practices

### ✅ Empfehlungen

**1. Regelmässig Verträge prüfen:**

- Sortiere nach Ablaufdatum
- Prüfe wöchentlich ablaufende Verträge
- Setze Erinnerungen

**2. Filter kombinieren:**

- Status + Ablaufdatum = Aktive Verträge die auslaufen
- Partner + Status = Alle aktiven Microsoft-Verträge
- Orgunit + Cashflow = IT-Kosten

**3. Excel-Export für Auswertungen:**

- Exportiere regelmässig
- Erstelle Pivot-Tabellen in Excel
- Analysiere Vertragskosten

**4. Spalten anpassen:**

- Blende unnötige Spalten aus
- Zeige nur relevante Informationen
- Speichere Ansicht (Browser-Einstellung)

### ❌ Häufige Fehler

**1. Filter nicht zurücksetzen:**

- 💡 Lösung: Klicke auf "Filter zurücksetzen"

**2. Falsche Sortierung:**

- 💡 Lösung: Korrekte Spalte wählen, Richtung prüfen

**3. Paginierung übersehen:**

- 💡 Lösung: Prüfe ob weitere Seiten existieren

**4. Export ohne Filter:**

- 💡 Lösung: Filter VOR Export anwenden

## Häufige Fragen

### Kann ich meine Filter speichern?

Aktuell nicht direkt in der Anwendung. Du kannst:

- Browser-Lesezeichen mit URL + Filterparametern erstellen
- Regelmässig gleiche Filter manuell anwenden

### Warum sehe ich nicht alle Verträge?

**Mögliche Gründe:**

1. **Filter aktiv**: Prüfe und setze Filter zurück
2. **Berechtigungen**: Du hast keinen Zugriff auf geschützte Ordner
3. **Paginierung**: Weitere Seiten existieren

### Kann ich mehrere Ordner gleichzeitig durchsuchen?

Nur wenn deine Installation eine globale Vertragsübersicht hat. Sonst musst du Ordner einzeln durchsuchen.

### Wie exportiere ich nur bestimmte Verträge?

1. Wende Filter an (z.B. Status = "Aktiv")
2. Dann exportieren
3. Export enthält nur gefilterte Verträge

## Nächste Schritte

Jetzt, wo du Verträge effektiv suchen kannst:

1. **[Kapitel 5: Berechtigungskonzept]({{< ref "05-berechtigungskonzept" >}})** - Verstehe Zugriffskontrolle
2. **[Kapitel 7: Workflow]({{< ref "07-workflow" >}})** - Nutze Workflows für Vertragsprozesse

---

💡 **Tipp:** Erstelle dir eine wöchentliche Routine: Prüfe alle Verträge mit Ablaufdatum < heute + 3 Monate!
