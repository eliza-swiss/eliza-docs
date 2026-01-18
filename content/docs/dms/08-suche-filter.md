---
title: "Suche und Filter"
description: ""
weight: "8"
tags:
  - "suche"
  - "filter"
  - "volltextsuche"
  - "finden"
  - "sortieren"
---


# Suche und Filter

Dieses Kapitel zeigt dir, wie du Dokumente im DMS schnell und effizient findest.

## Suchfunktionen im Überblick

### Verfügbare Suchoptionen

| Suche | Beschreibung | Zugriff |
|-------|--------------|---------|
| **Schnellsuche** | Einfache Textsuche | Suchfeld im Header |
| **Erweiterte Suche** | Detaillierte Filter | DMS → Suche |
| **Ordnerfilter** | Filterung innerhalb eines Ordners | Ordneransicht |
| **Globale Suche** | Suche über alle Module | ELIZA Suche |

---

## Schnellsuche

### Zugriff

Klicke auf das **Suchfeld** im oberen Bereich oder drücke `/` auf der Tastatur.

### Funktionsweise

Die Schnellsuche durchsucht:

- Dokumenttitel
- Dokument-ID
- Beschreibung
- Dateiinhalt (Volltextsuche)

### Tipps für effektive Suche

| Suchanfrage | Findet |
|-------------|--------|
| `Qualität` | Alle Dokumente mit "Qualität" |
| `"Qualitätskontrolle"` | Exakte Phrase |
| `AA-001` | Dokument mit ID AA-001 |
| `AA-*` | Alle Dokumente mit ID beginnend mit AA- |

---

## Erweiterte Suche

### Zugriff

**DMS → Suche** oder **DMS → Ordner → Erweiterter Filter**

### Verfügbare Filter

#### Textfilter

| Filter | Beschreibung |
|--------|--------------|
| **Suchbegriff** | Freitext-Suche in Titel und Inhalt |
| **Titel enthält** | Sucht nur im Titel |
| **Beschreibung enthält** | Sucht nur in der Beschreibung |
| **Dokument-ID** | Exakte oder partielle ID-Suche |

#### Kategoriefilter

| Filter | Beschreibung |
|--------|--------------|
| **Ordner** | Beschränkt auf bestimmten Ordner (inkl. Unterordner) |
| **Dokumentart** | Filtert nach Dokumenttyp |
| **Labels** | Filtert nach zugewiesenen Labels |

#### Statusfilter

| Filter | Optionen |
|--------|----------|
| **Status** | Entwurf, Zur Prüfung, Geprüft, Freigegeben, Abgelaufen, Archiviert |
| **Nur Vorlagen** | Zeigt nur Dokumentvorlagen |
| **Nur Arbeitskopien** | Zeigt nur Arbeitskopien |

#### Datumsfilter

| Filter | Beschreibung |
|--------|--------------|
| **Erstellt am** | Von/Bis Datum der Erstellung |
| **Geändert am** | Von/Bis Datum der letzten Änderung |
| **Freigegeben am** | Von/Bis Datum der Freigabe |
| **Nächste Überprüfung** | Von/Bis Datum der Überprüfung |

#### Personenfilter

| Filter | Beschreibung |
|--------|--------------|
| **Autor** | Filtert nach Dokumentautor |
| **Verantwortliche Funktion** | Filtert nach zuständiger Funktion |
| **Erstellt von** | Filtert nach erstellendem Benutzer |

---

## Filterung in der Ordneransicht

### Schnellfilter

In der Ordneransicht stehen Schnellfilter zur Verfügung:

```
┌─────────────────────────────────────────────────────────┐
│  [Alle] [Freigegeben] [Entwürfe] [Abgelaufen]          │
│  ─────────────────────────────────────────────────────  │
│  📄 Dokument 1...                                       │
│  📄 Dokument 2...                                       │
└─────────────────────────────────────────────────────────┘
```

### Spaltenfilter

In der Tabellenansicht können Spalten gefiltert werden:

1. Klicke auf das Filter-Icon in der Spaltenüberschrift
2. Gib Filterkriterien ein
3. Die Liste wird sofort gefiltert

---

## Suchergebnisse

### Darstellung

Suchergebnisse zeigen:

- **Dokumenttitel** mit Hervorhebung des Suchbegriffs
- **Dokument-ID** (falls vorhanden)
- **Ordner** (Pfad zum Dokument)
- **Status** als farbiges Badge
- **Änderungsdatum**
- **Relevanz-Score** (bei Volltextsuche)

### Sortierung

Ergebnisse können sortiert werden nach:

| Sortierung | Beschreibung |
|------------|--------------|
| **Relevanz** | Beste Übereinstimmung zuerst |
| **Titel A-Z / Z-A** | Alphabetisch |
| **Datum (neu/alt)** | Chronologisch |
| **Status** | Nach Workflow-Status |

### Aktionen auf Ergebnissen

- **Klick**: Dokument öffnen
- **Rechtsklick**: Kontextmenü (Herunterladen, Bearbeiten, etc.)
- **Checkbox**: Mehrfachauswahl für Batch-Aktionen

---

## Volltextsuche

### Was wird durchsucht?

Die Volltextsuche extrahiert und indexiert Text aus:

| Dateiformat | Durchsuchbar |
|-------------|--------------|
| **Word (.docx)** | ✅ Volltext |
| **PDF** | ✅ Text (auch OCR bei gescannten PDFs) |
| **Excel (.xlsx)** | ✅ Zellinhalte |
| **PowerPoint (.pptx)** | ✅ Folientext |
| **Text (.txt, .md)** | ✅ Vollständig |
| **Bilder** | ❌ Nur Metadaten |

### Suchoperatoren

| Operator | Beschreibung | Beispiel |
|----------|--------------|----------|
| `AND` | Beide Begriffe müssen vorkommen | `Qualität AND Kontrolle` |
| `OR` | Einer der Begriffe muss vorkommen | `Prüfung OR Test` |
| `NOT` | Begriff darf nicht vorkommen | `Anweisung NOT Entwurf` |
| `"..."` | Exakte Phrase | `"Qualitätskontrolle Wareneingang"` |
| `*` | Wildcard (beliebige Zeichen) | `Qual*` findet Qualität, Qualitätskontrolle |

### Beispiel-Suchen

```
# Alle Arbeitsanweisungen zur Qualität
AA-* AND Qualität

# Freigegebene Dokumente ohne Entwürfe
status:freigegeben

# Dokumente von Max Muster aus 2025
autor:"Max Muster" AND erstellt:2025

# Exakte Phrase in Dokumenten
"gemäss ISO 9001"
```

---

## Gespeicherte Suchen

### Suche speichern

1. Führe eine erweiterte Suche durch
2. Klicke auf **"Suche speichern"**
3. Gib einen Namen ein
4. Die Suche wird unter deinen Favoriten gespeichert

### Gespeicherte Suche ausführen

1. Gehe zu **DMS → Suche**
2. Klicke auf **"Gespeicherte Suchen"**
3. Wähle die gewünschte Suche
4. Ergebnisse werden angezeigt

> **💡 Tipp:** Nutze gespeicherte Suchen für wiederkehrende Aufgaben wie "Alle abgelaufenen Dokumente in meinem Bereich".

---

## Filterung nach Labels

### Labels als Kategorien

Labels ermöglichen eine flexible Kategorisierung quer zur Ordnerstruktur:

- Ein Dokument kann mehrere Labels haben
- Labels sind farbcodiert
- Labels können kombiniert gefiltert werden

### Label-Filter anwenden

**DMS → Labels → [Label auswählen]**

oder

**Erweiterte Suche → Labels → [Labels auswählen]**

### Beispiel: Multi-Label-Filter

```
Label: "Priorität Hoch" UND "Produktion"
→ Zeigt alle hochpriorisierten Produktions-Dokumente
```

---

## Filterung nach Dokumentart

### Dokumentarten

Dokumentarten kategorisieren Dokumente nach Typ:

- Arbeitsanweisung
- Verfahrensanweisung
- Formular
- Checkliste
- etc.

### Nach Dokumentart filtern

**DMS → Dokumentarten → [Art auswählen]**

oder

**Erweiterte Suche → Dokumentart → [Art auswählen]**

---

## Tipps für effektives Suchen

### ✅ Spezifisch suchen

- Nutze Dokument-IDs, wenn bekannt
- Kombiniere mehrere Filter
- Verwende exakte Phrasen

### ✅ Ordner einschränken

- Beschränke Suche auf relevante Ordner
- Reduziert Ergebnismenge
- Verbessert Relevanz

### ✅ Status nutzen

- Filtere nach relevantem Status
- Beispiel: Nur "Freigegeben" für gültige Dokumente

### ✅ Datumsfilter verwenden

- Beschränke auf relevanten Zeitraum
- Findet kürzlich geänderte Dokumente

---

## Häufige Suchszenarien

### "Finde alle abgelaufenen Dokumente in meinem Bereich"

1. **Ordner**: Wähle deinen Bereichsordner
2. **Status**: "Abgelaufen"
3. **Suchen**

### "Finde alle Arbeitsanweisungen zur Produktion"

1. **Dokumentart**: "Arbeitsanweisung"
2. **Suchbegriff**: "Produktion"
3. **Status**: "Freigegeben" (nur gültige)

### "Finde Dokumente, die Max Muster kürzlich geändert hat"

1. **Erstellt von**: "Max Muster"
2. **Geändert am**: Letzte 30 Tage
3. **Suchen**

### "Finde alle Dokumente mit 'ISO 9001' im Text"

1. **Suchbegriff**: `"ISO 9001"`
2. **Suchen** (Volltextsuche aktiv)

---

## Nächste Schritte

- **[Kapitel 9: Integrationen]({{< ref "09-integrationen" >}})**: Verknüpfungen mit anderen Modulen
- **[Kapitel 10: Best Practices]({{< ref "10-best-practices" >}})**: Empfehlungen für Organisation

---

## Zusammenfassung

✅ Du kennst die verschiedenen Suchoptionen
✅ Du kannst die erweiterte Suche mit Filtern nutzen
✅ Du verstehst die Volltextsuche und Suchoperatoren
✅ Du kannst Suchen speichern und wiederverwenden
✅ Du filterst effektiv nach Labels und Dokumentarten
✅ Du findest Dokumente schnell und gezielt
