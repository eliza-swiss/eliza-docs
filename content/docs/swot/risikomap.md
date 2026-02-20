---
title: "Risikomap nutzen"
description: ""
weight: "6"
tags:
  - "risikomap"
  - "matrix"
  - "visualisierung"
  - "bewertung"
  - "priorisierung"
---


# Risikomap nutzen

Die Risikomap (auch Risikomatrix) ist ein zentrales Visualisierungswerkzeug im IKS-Modul. Sie stellt Einschätzungen in einer **5×5-Matrix** dar, basierend auf Eintretenswahrscheinlichkeit und Auswirkung.

## Verfügbare Maps

Das IKS-Modul bietet vier spezialisierte Map-Ansichten:

| Map | Navigation | Zeigt |
|-----|-----------|-------|
| **Risiko-Map** | IKS → Risiko-Map | Alle aktiven Risiken |
| **Chancen-Map** | IKS → Chancen-Map | Alle aktiven Chancen |
| **Stärken-Map** | IKS → Stärken-Map | Alle aktiven Stärken |
| **Schwächen-Map** | IKS → Schwächen-Map | Alle aktiven Schwächen |

> **💡 Tipp:** In den Maps werden nur Einschätzungen mit Status **"aktiv"** und **"in Arbeit"** angezeigt.

---

## Die Risikomatrix verstehen

### Aufbau

Die Matrix hat zwei Achsen:

- **Y-Achse (vertikal)**: Eintretenswahrscheinlichkeit / Schwierigkeitsgrad (klein → sehr hoch)
- **X-Achse (horizontal)**: Auswirkung / Schadensausmass (klein → sehr hoch)

### Farbcodierung

Die Zellen der Matrix sind farblich codiert, von **Grün** (geringes Risiko) bis **Rot** (hohes Risiko):

```
                        Auswirkung →
                  klein   gering  mittel   hoch   sehr hoch
              ┌────────┬────────┬────────┬────────┬────────┐
  sehr hoch   │ orange │ orange │  rot   │  rot   │  ROT   │
              ├────────┼────────┼────────┼────────┼────────┤
  hoch        │ grün   │ orange │d.orange│  rot   │  rot   │
              ├────────┼────────┼────────┼────────┼────────┤
  mittel      │ grün   │ orange │ orange │d.orange│  rot   │
              ├────────┼────────┼────────┼────────┼────────┤
  gering      │ grün   │ grün   │ orange │ orange │ orange │
              ├────────┼────────┼────────┼────────┼────────┤
  klein       │ GRÜN   │ grün   │ grün   │ grün   │ orange │
              └────────┴────────┴────────┴────────┴────────┘
```

### Invertierte Farbskala für Stärken und Chancen

Bei **Stärken** und **Chancen** wird die Farbskala **invertiert** dargestellt:
- Hohe Werte = **Grün** (grosse Stärke/Chance = positiv)
- Niedrige Werte = **Rot** (geringe Stärke/Chance = weniger positiv)

---

## Elemente der Map-Ansicht

Jede Map-Ansicht enthält folgende Elemente:

### 1. SWOT-Navigationsleiste
Schnellnavigation zwischen Dashboard, Risiken, Chancen, Stärken und Schwächen.

### 2. Hinzufügen-Button
Grüner Button zum Erstellen einer neuen Einschätzung der jeweiligen Kategorie (z.B. "Risiko hinzufügen").

> **⚠️ Voraussetzung:** Du benötigst die Berechtigung "IKS (Hinzufügen)" um neue Einschätzungen zu erstellen.

### 3. Risikomatrix
Die 5×5-Matrix mit den positionierten Einschätzungen. Klicke auf eine Einschätzung in der Matrix, um zur Detailansicht zu gelangen.

### 4. Detaillierte Tabelle

Unter der Matrix findest du eine **sortier- und filterbare Tabelle** mit allen Einschätzungen:

| Spalte | Beschreibung |
|--------|--------------|
| **Risiko/Chance/etc.** | Titel, Beschreibung und Analyse |
| **Zuordnung** | Verknüpfte Objekte (Prozesse, IMS, etc.) |
| **Risikoklasse** | Zugeordnete Klassifizierung |
| **Mögliche Massnahmen** | Freitext und Anzahl zugeordneter Massnahmen |
| **Reporting** | Anzahl IKS-Reportings |
| **Bewertung** | Farbcodierter Risikowert |

### Spalten ein- und ausblenden

Über die Links oberhalb der Tabelle kannst du einzelne Spalten **ein- und ausblenden**:
- Klicke auf den Spaltennamen, um die Spalte zu verbergen
- Klicke erneut, um sie wieder anzuzeigen

### Tabellenfunktionen

Die Tabelle bietet dank DataTables:
- **Suche**: Freitextsuche über alle sichtbaren Spalten
- **Sortierung**: Klicke auf Spaltenüberschriften zum Sortieren
- **Excel-Export**: Exportiere die Tabelle nach Excel

---

## Map-Ansicht lesen und interpretieren

### Prioritäten ableiten

Die Position in der Matrix hilft dir bei der **Priorisierung**:

| Zone | Handlungsbedarf |
|------|----------------|
| **Rot** (oben rechts) | Sofortige Massnahmen erforderlich |
| **Orange** (Mitte) | Massnahmen planen und umsetzen |
| **Grün** (unten links) | Beobachten und periodisch überprüfen |

### Typische Fragestellungen

- **Gibt es Risiken im roten Bereich?** → Sofort Massnahmen definieren
- **Haben alle Risiken zugeordnete Massnahmen?** → Prüfe die Spalte "Mögliche Massnahmen"
- **Wie hat sich die Bewertung entwickelt?** → Prüfe die Reporting-Spalte
- **Welche Bereiche sind besonders betroffen?** → Prüfe die Zuordnung zu Prozessen

---

## Häufige Fragen

### Warum sehe ich eine Einschätzung nicht in der Map?

Mögliche Gründe:
- Status ist nicht "aktiv" oder "in Arbeit" (z.B. archiviert, abgeschlossen)
- Du hast keine Berechtigung, die Einschätzung zu sehen
- Die Bewertung (Wahrscheinlichkeit oder Auswirkung) ist auf 0 ("-") gesetzt

### Kann ich die Matrix ausdrucken?

Die Map-Ansicht kann über den Browser gedruckt werden (Strg+P). Für professionelle Ausdrucke empfehlen wir den **IKS Reporting** Export als Word oder Excel. Siehe [Reports erstellen]({{< ref "reports" >}}).

### Wie aktualisiere ich die Bewertung?

Bearbeite die Einschätzung und ändere die Felder "Wahrscheinlichkeit" und "Auswirkung". Die Position in der Matrix wird automatisch aktualisiert.

---

## Nächste Schritte

- **[Reports erstellen]({{< ref "reports" >}})**: Exportiere deine Risikoanalyse als Word oder Excel
- **[Best Practices]({{< ref "best-practices" >}})**: Tipps für effektives Risikomanagement

---

**Zurück zur [Übersicht]({{< ref "_index" >}})**

*Stand: Februar 2026*
