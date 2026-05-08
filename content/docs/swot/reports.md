---
title: "Reports erstellen"
description: ""
weight: "7"
tags:
  - "reports"
  - "reporting"
  - "export"
  - "word"
  - "excel"
  - "auswertung"
---


# Reports erstellen

Das IKS-Modul bietet zwei zentrale Reporting-Funktionen: das **Massnahmen Reporting** und das **IKS Reporting**. Beide ermöglichen dir, strukturierte Auswertungen als Word- oder Excel-Dokument zu exportieren.

## Massnahmen Reporting

### Zugriff

**Navigation:** IKS → Massnahmen Reporting

> **⚠️ Voraussetzung:** Du benötigst die Berechtigung "Massnahmen (Lesen)" oder höher.

### Report konfigurieren

Das Reporting-Formular bietet folgende Filteroptionen:

| Filter | Beschreibung |
|--------|--------------|
| **Status** | Filtere nach Massnahmen-Status (geplant, laufend, in Arbeit, abgeschlossen, verschoben) |
| **Organisationseinheit** | Filtere nach beteiligter Organisationseinheit |
| **Export-Format** | Wähle das Ausgabeformat |

### Export-Formate

| Format | Beschreibung |
|--------|--------------|
| **Anzeigen** | Zeigt den Report direkt im Browser |
| **Word (.docx)** | Exportiert als Word-Dokument mit Kopf- und Fusszeile |
| **Excel (.xlsx)** | Exportiert als Excel-Tabelle für weitere Auswertungen |

### Report erstellen

1. Navigiere zu **IKS → Massnahmen Reporting**
2. Wähle die gewünschten **Status-Filter**
3. Optional: Wähle eine **Organisationseinheit**
4. Wähle das **Export-Format** (Anzeigen, Word oder Excel)
5. Klicke auf **"Erstellen"**

### Inhalt des Massnahmen-Reports

Der Excel-Report enthält folgende Informationen pro Massnahme:

| Spalte | Beschreibung |
|--------|--------------|
| Titel | Bezeichnung der Massnahme |
| Verantwortung | Verantwortliche Person |
| Frist | Umsetzungstermin |
| Periodizität | Durchführungsrhythmus |
| Beschreibung | Detaillierte Beschreibung |
| Status | Aktueller Stand |
| Gehört zu | Verknüpftes Objekt |
| Beteiligte OE | Organisationseinheiten |
| Kontrollen | Anzahl durchgeführter Kontrollen |
| Letzte Kontrolle | Datum der letzten Kontrolle |
| Kontrolliert durch | Person der letzten Kontrolle |
| Kommentar | Kommentar der letzten Kontrolle |
| Kontrollstatus | Status der letzten Kontrolle |

> **💡 Tipp:** Der Excel-Export ist ideal für **weitere Analysen** in Excel, z.B. Pivot-Tabellen, Diagramme oder Filterungen.

---

## IKS Reporting

### Zugriff

**Navigation:** IKS → IKS Reporting

> **⚠️ Voraussetzung:** Du benötigst die Berechtigung "IKS (Hinzufügen)" oder höher.

### Report konfigurieren

| Filter | Beschreibung |
|--------|--------------|
| **Arten** | Filtere nach SWOT-Kategorie (Stärke, Schwäche, Chance, Risiko) |
| **Status** | Filtere nach Einschätzungs-Status |
| **Klassifizierung** | Filtere nach Risikoklassen |
| **Sortierung** | Nach Schweregrad (Bewertung) oder alphabetisch |
| **Export-Format** | Anzeigen, Word oder Excel |

### Report erstellen

1. Navigiere zu **IKS → IKS Reporting**
2. Wähle die gewünschten **Arten** (z.B. nur Risiken und Chancen)
3. Wähle die gewünschten **Status** (z.B. nur aktive)
4. Optional: Filtere nach **Klassifizierung**
5. Wähle die **Sortierung** (Schweregrad empfohlen)
6. Wähle das **Export-Format**
7. Klicke auf **"Erstellen"**

### Inhalt des IKS-Reports

| Spalte | Beschreibung |
|--------|--------------|
| Art | Stärke, Schwäche, Chance oder Risiko |
| Nummer | Identifikationsnummer |
| Titel | Bezeichnung |
| Beschreibung | Detaillierte Beschreibung |
| Analyse / Ursache | Ursachenanalyse |
| Wahrscheinlichkeit | Eintretenswahrscheinlichkeit (1-5) |
| Auswirkung | Potentielle Auswirkung (1-5) |
| Status | Aktueller Stand |
| Klassifizierung | Zugeordnete Risikoklassen |

### Word-Export

Der Word-Export erstellt ein **professionelles Dokument** mit:
- Automatischer Kopf- und Fusszeile ("IKS Reporting")
- Strukturierter Darstellung aller Einschätzungen
- Farbcodierung nach Bewertung

> **💡 Tipp:** Der Word-Export eignet sich besonders für **Management Reviews**, **Audits** und die **Präsentation** im Führungsteam.

---

## Einschätzungs-Reporting (automatisch)

Neben den manuellen Reports führt ELIZA auch eine **automatische Reporting-Historie** pro Einschätzung:

### Automatische Reports

Ein Report-Eintrag wird automatisch erstellt, wenn:
- Eine **neue Einschätzung** erstellt wird
- Die **Bewertung** (Wahrscheinlichkeit oder Auswirkung) geändert wird

### Manuelle Reports

Zusätzlich kannst du manuell Report-Einträge hinzufügen:
1. Öffne die Einschätzung
2. Klicke im Abschnitt "IKS Reporting" auf **"+ Reporting"**
3. Fülle das Formular aus
4. Speichere

Mehr dazu im Kapitel [Einschätzungen verwalten]({{< ref "einschaetzungen#iks-reporting" >}}).

---

## Tipps für effektives Reporting

### Management Review vorbereiten

1. Erstelle einen **IKS-Report** mit:
   - Arten: Alle (S, W, O, T)
   - Status: aktiv, in Arbeit
   - Sortierung: Schweregrad
   - Format: Word
2. Erstelle einen **Massnahmen-Report** mit:
   - Status: geplant, laufend, in Arbeit
   - Format: Word
3. Ergänze mit der **Risikomap** (Screenshot oder Ausdruck)

### Audit vorbereiten

1. Erstelle einen **IKS-Report** als Excel mit allen Einschätzungen
2. Erstelle einen **Massnahmen-Report** als Excel mit allen Status
3. Nutze die Excel-Dateien als **Nachweisdokumente**

### Regelmässiges Monitoring

Erstelle monatlich oder quartalsweise Reports mit den gleichen Filtern, um **Trends** zu erkennen:
- Anzahl offener Massnahmen
- Überfällige Massnahmen
- Veränderung der Risikobewertung

---

## Häufige Fragen

### Kann ich Reports speichern?

Nein, Reports werden on-the-fly generiert und als Download angeboten. Speichere den exportierten Report lokal oder im DMS.

### Sehe ich nur meine eigenen Daten?

Du siehst alle Daten, auf die du **Zugriff** hast. Mit "IKS (Lesen)" siehst du alles, mit eingeschränkten Rechten nur die dir zugewiesenen Einschätzungen und Massnahmen.

### Kann ich die Spalten im Excel anpassen?

Nein, die Spalten sind fest definiert. Du kannst aber in Excel nach dem Export Spalten ein- und ausblenden, filtern und sortieren.

---

## Nächste Schritte

- **[Best Practices]({{< ref "best-practices" >}})**: Tipps für effektives IKS-Management
- **[Risikomap nutzen]({{< ref "risikomap" >}})**: Visuelle Ergänzung zu deinen Reports

---

**Zurück zur [Übersicht]({{< ref "_index" >}})**

*Stand: Februar 2026*
