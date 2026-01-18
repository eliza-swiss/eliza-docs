---
title: "Integration mit anderen Modulen"
description: ""
weight: "7"
tags:
  - "integration"
  - "prozesse"
  - "kpi"
  - "dms"
  - "module"
---


# Integration mit anderen Modulen

Das IMS-Modul ist eng mit anderen ELIZA-Modulen verzahnt. In diesem Kapitel lernst du, wie du diese Integrationen optimal nutzt.

## Übersicht der Integrationen

<pre>
┌─────────────────────────────────────────────────────────────┐
│                         IMS                                 │
│                  (Managementsystem)                         │
├──────────┬──────────┬──────────┬──────────┬────────────────┤
│          │          │          │          │                │
│  📋      │  📄      │  📊      │  🎯      │  🔔            │
│ Prozesse │   DMS    │   KPI    │   OKR    │   Issues       │
│          │          │          │          │                │
├──────────┴──────────┴──────────┴──────────┴────────────────┤
│                                                             │
│  👥 Organisation  │  📜 Standards  │  🔍 SWOT              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
</pre>

## Integration mit Prozessen

### Aspekte mit Prozessen verknüpfen

Jeder Aspekt kann mit betroffenen Geschäftsprozessen verknüpft werden:

**So verknüpfst du Prozesse:**

1. Öffne den Aspekt zur Bearbeitung
2. Wähle im Feld **"Betroffene Prozesse"** die relevanten Prozesse
3. Speichere

**Beispiele für Verknüpfungen:**

| Aspekt | Betroffene Prozesse |
|--------|---------------------|
| Stromverbrauch | Produktion, Facility Management |
| Gefahrstoffe | Einkauf, Lager, Produktion, Entsorgung |
| Arbeitsunfälle | Alle Produktionsprozesse |
| Abfall | Produktion, Logistik, Verwaltung |

### Nutzen der Prozess-Verknüpfung

- **Prozessverantwortliche** sehen relevante Aspekte in ihren Prozessen
- **Auswirkungsanalyse** bei Prozessänderungen
- **Audit-Nachweise** für Zertifizierungen
- **Ganzheitliche Sicht** auf Prozesse und deren Auswirkungen

## Integration mit dem DMS

### Dokumente verknüpfen

Das IMS-Modul integriert sich nahtlos mit dem Dokumentenmanagement:

**System-Ebene:**
- Verknüpfe Handbücher, Policies und Verfahrensbeschreibungen
- Ordne ganze Dokumentenordner dem System zu

**Aspekt-Ebene:**
- Verknüpfe spezifische Dokumente wie Betriebsanweisungen oder Prüfprotokolle
- Nutze die Prozess-Verknüpfung für indirekte Dokumentenzuordnung

### Typische Dokumententypen

| Dokumenttyp | Beispiel | Verknüpfung |
|-------------|----------|-------------|
| **Handbuch** | Umwelthandbuch, Sicherheitshandbuch | System |
| **Policy** | Umweltpolitik, Sicherheitspolitik | System |
| **Verfahren** | VA Abfallentsorgung, VA Gefahrstoffe | System/Aspekt |
| **Betriebsanweisung** | BA Kühlschmierstoffe, BA CNC-Maschine | Aspekt |
| **Formular** | Checklisten, Prüfprotokolle | Aspekt |
| **Nachweis** | Entsorgungsbelege, Schulungsnachweise | Aspekt |

### Dokumente im System navigieren

**Navigation:** System → **Dokumente**

Du siehst alle verknüpften Dokumente auf einen Blick:

<pre>
┌─────────────────────────────────────────────────────────────┐
│  Dokumente: Umweltmanagementsystem                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📄 Umwelthandbuch.pdf              Version 2.1   15.01.24  │
│  📄 Umweltpolitik.docx              Version 1.3   10.01.24  │
│  📄 VA-Abfallentsorgung.pdf         Version 3.0   05.01.24  │
│  📄 VA-Gefahrstoffmanagement.pdf    Version 2.2   02.01.24  │
│  📄 Energiebericht-2023.xlsx        -             31.12.23  │
│                                                             │
│  [Dokumente bearbeiten]                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
</pre>

## Integration mit KPIs

### KPIs mit Aspekten verknüpfen

Kennzahlen machen Aspekte messbar und ermöglichen Trendanalysen:

**So verknüpfst du KPIs:**

1. Stelle sicher, dass der KPI im KPI-Modul angelegt ist
2. Öffne den Aspekt zur Bearbeitung
3. Wähle im Feld **"Kennzahlen"** die relevanten KPIs
4. Speichere

### KPI-Anzeige im IMS

Verknüpfte KPIs werden an mehreren Stellen angezeigt:

- **System-Übersicht**: Alle KPIs aller Aspekte auf einen Blick
- **Aspekt-Detail**: KPIs des spezifischen Aspekts mit aktuellen Werten

<pre>
┌─────────────────────────────────────────────────────────────┐
│  Kennzahlen: Aspekt "Stromverbrauch"                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📊 Stromverbrauch (kWh/Jahr)                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Ist: 850'000   │  Ziel: 800'000   │  Trend: ↓ -3%    │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                             │
│  📊 Stromverbrauch/Umsatz (kWh/CHF Mio.)                    │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Ist: 12'140    │  Ziel: 11'000    │  Trend: ↓ -5%    │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
</pre>

### Typische KPI-Kategorien

| Systemtyp | KPI-Beispiele |
|-----------|---------------|
| **Umwelt** | Energieverbrauch, CO₂-Emissionen, Recycling-Quote |
| **Arbeitssicherheit** | Unfallrate, Ausfalltage, PSA-Tragequote |
| **Qualität** | Reklamationsrate, Ausschussquote, Kundenzufriedenheit |

## Integration mit OKR

### Ziele mit Aspekten verknüpfen

Wenn das OKR-Modul aktiviert ist, kannst du Objectives mit Aspekten verknüpfen:

**So verknüpfst du Ziele:**

1. Öffne den Aspekt zur Bearbeitung
2. Wähle im Feld **"Ziele"** die relevanten Objectives
3. Speichere

### Ziele-Übersicht im System

**Navigation:** System → **Ziele**

<pre>
┌─────────────────────────────────────────────────────────────┐
│  Ziele: Umweltmanagementsystem                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🎯 Energieeffizienz steigern                    Q4/2024    │
│     ├── KR1: Stromverbrauch um 10% reduzieren     [60%]     │
│     ├── KR2: LED-Umrüstung abschliessen          [80%]     │
│     └── KR3: Energiemonitoring einführen         [20%]     │
│                                                             │
│  🎯 Kreislaufwirtschaft fördern                  Q4/2024    │
│     ├── KR1: Recycling-Quote auf 85%             [75%]     │
│     └── KR2: Verpackungsabfall um 20% reduzieren [40%]     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
</pre>

### Zusammenspiel OKR und Massnahmen

- **Objectives** definieren das strategische Ziel
- **Key Results** messen den Fortschritt
- **Massnahmen** im IMS sind die konkreten Aktivitäten

<pre>
Objective: Energieeffizienz steigern
     │
     ├── Key Result: Stromverbrauch -10%
     │       │
     │       └── Massnahme: LED-Umrüstung Halle 1
     │       └── Massnahme: Druckluft-Optimierung
     │
     └── Key Result: Energiemonitoring einführen
             │
             └── Massnahme: Monitoring-System beschaffen
             └── Massnahme: Schulung Facility Manager
</pre>

## Integration mit Issues/Meldekreise

### Meldekreise verknüpfen

Meldekreise (Issue-Tracker) ermöglichen die Erfassung von Meldungen im Kontext des Managementsystems:

**So verknüpfst du Meldekreise:**

1. Öffne das System zur Bearbeitung
2. Wähle im Feld **"Meldekreise"** die relevanten Tracker
3. Speichere

### Typische Meldekreise

| Meldekreis | Systemtyp | Meldungsbeispiele |
|------------|-----------|-------------------|
| **Umweltvorfälle** | Umwelt | Leckage, Emission, Entsorgungsfehler |
| **Arbeitsunfälle** | Sicherheit | Unfälle, Verletzungen |
| **Beinaheunfälle** | Sicherheit | Near-Miss, Gefahrensituation |
| **Sicherheitsmängel** | Sicherheit | Defekte PSA, fehlende Schutzeinrichtung |
| **Verbesserungsideen** | Alle | Vorschläge zur Verbesserung |

### Meldungen im System

**Navigation:** System → **Meldungen**

Du siehst alle offenen Meldungen aus den verknüpften Meldekreisen:

<pre>
┌─────────────────────────────────────────────────────────────┐
│  Meldungen: Arbeitsschutzmanagementsystem                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🔴 Hoch   Defekte Absaugung Schweissplatz 3     Offen      │
│  🟡 Mittel Beinaheunfall Gabelstapler            In Arbeit  │
│  🟢 Niedrig Beleuchtung Lager zu dunkel          Offen      │
│                                                             │
│  Verknüpfte Meldekreise: Arbeitsunfälle, Beinaheunfälle,   │
│                          Sicherheitsmängel                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
</pre>

## Integration mit Standards

### Standards verknüpfen

Standards (Normen, Gesetze, Vorgaben) werden zentral im Standards-Modul verwaltet:

**So verknüpfst du Standards:**

1. Öffne das System zur Bearbeitung
2. Wähle im Feld **"Standards"** die relevanten Normen
3. Speichere

### Standards im System

**Navigation:** System → **Standards**

<pre>
┌─────────────────────────────────────────────────────────────┐
│  Standards: Umweltmanagementsystem                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📜 ISO 14001:2015                                          │
│     Umweltmanagementsysteme - Anforderungen                 │
│                                                             │
│  📜 Umweltschutzgesetz (USG)                                │
│     Bundesgesetz über den Umweltschutz                      │
│                                                             │
│  📜 Luftreinhalte-Verordnung (LRV)                          │
│     Verordnung über die Luftreinhaltung                     │
│                                                             │
│  📜 Gewässerschutzverordnung (GSchV)                        │
│     Verordnung zum Gewässerschutzgesetz                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
</pre>

## Integration mit SWOT

### SWOT-Einschätzungen

Die SWOT-Analyse ist direkt im IMS integriert:

- **System-SWOT**: Einschätzungen für das gesamte System
- **Aspekt-SWOT**: Einschätzungen für einzelne Aspekte

### SWOT-Übersicht

**Navigation:** System → **SWOT**

Alle Einschätzungen werden gesammelt angezeigt:

<pre>
┌─────────────────────────────────────────────────────────────┐
│  SWOT-Analyse: Umweltmanagementsystem                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ✅ Stärken (5)                                              │
│  ├── Moderne Produktionsanlagen                             │
│  ├── Qualifiziertes Personal                                │
│  └── ...                                                    │
│                                                             │
│  ⚠️ Schwächen (4)                                            │
│  ├── Veraltete Beleuchtung                                  │
│  ├── Keine Regenwassernutzung                               │
│  └── ...                                                    │
│                                                             │
│  💡 Chancen (3)                                              │
│  ├── Förderprogramm Photovoltaik                            │
│  └── ...                                                    │
│                                                             │
│  ❌ Risiken (4)                                              │
│  ├── Steigende Energiepreise                                │
│  └── ...                                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
</pre>

## Integration mit Organisation

### Stakeholder verknüpfen

Interessierte Parteien aus dem Businesscontext-Modul können mit Aspekten verknüpft werden:

**So verknüpfst du Stakeholder:**

1. Öffne den Aspekt zur Bearbeitung
2. Wähle im Feld **"Interessierte Parteien"** die relevanten Stakeholder
3. Speichere

### Skills-Kategorien

Skill-Kategorien aus dem Organisations-Modul können mit dem System verknüpft werden:

**So verknüpfst du Skills:**

1. Öffne das System zur Bearbeitung
2. Wähle im Feld **"Skillskategorien"** die relevanten Kategorien
3. Speichere

**Beispiele:**

| Systemtyp | Skill-Kategorien |
|-----------|------------------|
| **Umwelt** | Umweltmanagement, Abfallwirtschaft, Energie |
| **Sicherheit** | Arbeitssicherheit, Erste Hilfe, Brandschutz |
| **Qualität** | Qualitätsmanagement, Auditing, Messtechnik |

## Integration mit Spaces

### Team-Spaces verknüpfen

Spaces ermöglichen die Team-Zusammenarbeit im Kontext des Managementsystems:

**So verknüpfst du Spaces:**

1. Öffne das System zur Bearbeitung
2. Wähle im Feld **"Spaces"** die relevanten Team-Spaces
3. Speichere

**Nutzen:**

- Gemeinsame Arbeit am Managementsystem
- Diskussionen und Abstimmungen
- Aufgabenverteilung im Team

## Best Practices für Integration

- ✅ **Konsistente Verknüpfungen**: Halte Verknüpfungen aktuell
- ✅ **Bidirektional denken**: Nutze Verknüpfungen in beide Richtungen
- ✅ **Nicht übertreiben**: Verknüpfe nur, was wirklich zusammengehört
- ✅ **Regelmässig prüfen**: Review der Verknüpfungen mindestens jährlich
- ✅ **Dokumentation**: Dokumentiere, warum Elemente verknüpft sind

## Häufige Fragen

### Können Aspekte in mehreren Systemen sein?

Nein, jeder Aspekt gehört zu genau einem Managementsystem. Bei einem Integrierten Managementsystem erfasst du alle Aspekte in einem System und nutzt Kategorien zur Unterscheidung.

### Wie funktioniert die KPI-Aggregation?

KPIs, die mit Aspekten verknüpft sind, werden auf der System-Übersicht gesammelt angezeigt. Die Aggregation erfolgt nicht automatisch – jeder KPI zeigt seinen eigenen Wert.

### Was passiert mit Verknüpfungen beim Löschen?

Wenn du ein verknüpftes Element löschst (z.B. ein Dokument), bleibt das IMS-Element erhalten, aber die Verknüpfung wird entfernt.

## Zusammenfassung

Das IMS-Modul ist der zentrale Hub für dein Managementsystem:

- **Prozesse** zeigen die Auswirkungen auf das Tagesgeschäft
- **DMS** liefert die notwendigen Dokumente und Nachweise
- **KPIs** machen Aspekte messbar
- **OKR** verbindet mit strategischen Zielen
- **Issues** ermöglichen Meldungen und Vorfall-Management
- **Standards** dokumentieren gesetzliche Anforderungen
- **SWOT** unterstützt die Risikoanalyse
- **Organisation** verknüpft mit Stakeholdern und Kompetenzen

Nutze diese Integrationen, um ein ganzheitliches Managementsystem aufzubauen!

---

**Du hast das Benutzerhandbuch abgeschlossen!**

Zurück zur [Übersicht](index)
