---
title: "Praxisbeispiel: ISO 14001 Umweltmanagement"
description: ""
weight: "5"
tags:
  - "iso14001"
  - "umwelt"
  - "beispiel"
  - "praxis"
  - "umsetzung"
---


# Praxisbeispiel: ISO 14001 Umweltmanagement

Dieses Kapitel zeigt dir anhand eines vollständigen Beispiels, wie du ein Umweltmanagementsystem nach ISO 14001 im IMS-Modul umsetzt.

## Ausgangssituation

Die **Beispiel Metall AG** ist ein mittelständisches Unternehmen mit:

- 85 Mitarbeitenden
- Produktion von Metallkomponenten
- Standort mit Produktionshalle und Verwaltung
- Ziel: Zertifizierung nach ISO 14001:2015

## Schritt 1: Managementsystem anlegen

**Neues System erstellen:**

1. Navigiere zu **IMS** → **Systeme**
2. Klicke auf **"Hinzufügen"**
3. Fülle die Felder aus:

| Feld | Wert |
|------|------|
| **Titel** | Umweltmanagementsystem |
| **Beschreibung** | Umweltmanagementsystem der Beispiel Metall AG nach ISO 14001:2015. Geltungsbereich: Produktion von Metallkomponenten am Standort Musterstadt. |

4. Speichere das System

## Schritt 2: Aspektkategorien definieren

Erstelle folgende Kategorien für die thematische Gruppierung:

| Kategorie | Beschreibung |
|-----------|--------------|
| **Energie** | Strom, Heizung, Treibstoffe |
| **Wasser** | Frischwasser, Abwasser |
| **Abfall** | Produktionsabfälle, Verpackung |
| **Emissionen** | Luft, Lärm |
| **Gefahrstoffe** | Chemikalien, Öle |
| **Ressourcen** | Rohstoffe, Materialien |
| **Biodiversität** | Boden, Natur |

**So erstellst du Kategorien:**

1. Navigiere im System zu **Kategorien**
2. Klicke auf **"Hinzufügen"**
3. Gib Titel und Beschreibung ein
4. Wiederhole für alle Kategorien

## Schritt 3: Umweltaspekte erfassen

Erstelle nun die Umweltaspekte hierarchisch strukturiert:

### Hauptkategorie: Energie

<pre>
📁 1. Energie
├── 1.1 Stromverbrauch
│   ├── 1.1.1 Produktion
│   ├── 1.1.2 Beleuchtung
│   ├── 1.1.3 Klimatisierung
│   └── 1.1.4 Büro/IT
├── 1.2 Heizenergie
│   ├── 1.2.1 Gebäudeheizung
│   └── 1.2.2 Prozesswärme
└── 1.3 Treibstoffe
    ├── 1.3.1 Fuhrpark
    └── 1.3.2 Gabelstapler
</pre>

**Beispiel-Aspekt: 1.1 Stromverbrauch**

| Feld | Inhalt |
|------|--------|
| **Nummer** | 1.1 |
| **Titel** | Stromverbrauch |
| **Beschreibung** | Gesamter elektrischer Energieverbrauch des Standorts, aufgeteilt nach Verbrauchern |
| **Kategorie** | Energie |
| **Beeinflussbarkeit** | direkt |
| **im Anwendungsbereich** | ✓ |
| **Analyse** | Jahresverbrauch 2023: 850'000 kWh. Hauptverbraucher: CNC-Maschinen (45%), Druckluft (20%), Beleuchtung (15%), Klimatisierung (12%), Sonstiges (8%). |
| **Mögliche Massnahmen** | LED-Umrüstung, Druckluft-Leckagen beheben, Frequenzumrichter, Photovoltaik |

### Hauptkategorie: Wasser

<pre>
📁 2. Wasser
├── 2.1 Frischwasser
│   ├── 2.1.1 Sanitär
│   ├── 2.1.2 Prozesswasser
│   └── 2.1.3 Reinigung
└── 2.2 Abwasser
    ├── 2.2.1 Sanitärabwasser
    └── 2.2.2 Industrieabwasser
</pre>

### Hauptkategorie: Abfall

<pre>
📁 3. Abfall
├── 3.1 Metallabfälle
│   ├── 3.1.1 Späne
│   └── 3.1.2 Verschnitt
├── 3.2 Verpackungsabfälle
│   ├── 3.2.1 Karton/Papier
│   ├── 3.2.2 Kunststoff
│   └── 3.2.3 Holz
├── 3.3 Sonderabfälle
│   ├── 3.3.1 Altöl
│   ├── 3.3.2 Kühlschmierstoffe
│   └── 3.3.3 Chemikalien
└── 3.4 Allgemeine Abfälle
    ├── 3.4.1 Restmüll
    └── 3.4.2 Bioabfall
</pre>

### Hauptkategorie: Emissionen

<pre>
📁 4. Emissionen
├── 4.1 Luftemissionen
│   ├── 4.1.1 Schweissdämpfe
│   ├── 4.1.2 Lackierdämpfe
│   └── 4.1.3 Stäube
├── 4.2 CO₂-Emissionen
│   ├── 4.2.1 Direkte Emissionen (Scope 1)
│   └── 4.2.2 Indirekte Emissionen (Scope 2)
└── 4.3 Lärm
    ├── 4.3.1 Produktionslärm
    └── 4.3.2 Transportlärm
</pre>

### Hauptkategorie: Gefahrstoffe

<pre>
📁 5. Gefahrstoffe
├── 5.1 Kühlschmierstoffe
├── 5.2 Hydrauliköle
├── 5.3 Reinigungsmittel
└── 5.4 Lacke und Beschichtungen
</pre>

## Schritt 4: Standards verknüpfen

Verknüpfe relevante Standards mit dem System:

| Standard | Beschreibung |
|----------|--------------|
| **ISO 14001:2015** | Umweltmanagementsysteme – Anforderungen |
| **USG** | Umweltschutzgesetz (CH) |
| **LRV** | Luftreinhalte-Verordnung |
| **GSchV** | Gewässerschutzverordnung |
| **VeVA** | Verordnung über den Verkehr mit Abfällen |
| **ChemRRV** | Chemikalien-Risikoreduktions-Verordnung |

## Schritt 5: SWOT-Analyse durchführen

Erfasse für jeden wesentlichen Aspekt SWOT-Einschätzungen:

### Aspekt: Stromverbrauch

| Typ | Einschätzung |
|-----|--------------|
| **Stärke** | Moderne CNC-Maschinen mit hoher Energieeffizienz (Klasse A) |
| **Schwäche** | Veraltete Beleuchtungsanlage mit Leuchtstoffröhren, kein Energiemonitoring |
| **Chance** | Förderprogramm des Kantons für Photovoltaik (30% Subvention) |
| **Risiko** | Steigende Strompreise (+20% erwartet bis 2025) |

### Aspekt: Abfall

| Typ | Einschätzung |
|-----|--------------|
| **Stärke** | Etabliertes Metallrecycling mit 98% Rückführungsquote |
| **Schwäche** | Keine systematische Trennung bei Verpackungsabfällen |
| **Chance** | Neue Recycling-Technologie für Kühlschmierstoffe verfügbar |
| **Risiko** | Verschärfte Entsorgungsauflagen für Sonderabfälle ab 2025 |

### Aspekt: Gefahrstoffe

| Typ | Einschätzung |
|-----|--------------|
| **Stärke** | Qualifizierter Gefahrstoffbeauftragter, aktuelle Dokumentation |
| **Schwäche** | Teils veraltete Lagertechnik, Auffangwannen unzureichend |
| **Chance** | Umstellung auf biologisch abbaubare Kühlschmierstoffe möglich |
| **Risiko** | Produktionsstopp bei Umweltvorfall (Reputationsschaden) |

## Schritt 6: Massnahmen definieren

Leite aus der SWOT-Analyse konkrete Massnahmen ab:

### Massnahmenplan Energie

| Nr. | Massnahme | Priorität | Termin | Verantw. | Status |
|-----|-----------|-----------|--------|----------|--------|
| E1 | LED-Umrüstung Produktionshalle | Hoch | Q2/2024 | Facility | Geplant |
| E2 | Druckluft-Leckortung durchführen | Mittel | Q1/2024 | Technik | In Arbeit |
| E3 | Photovoltaik-Machbarkeitsstudie | Mittel | Q2/2024 | GL | Geplant |
| E4 | Energiemonitoring einführen | Hoch | Q3/2024 | Umwelt | Geplant |
| E5 | Mitarbeiter-Schulung Energiesparen | Niedrig | Q4/2024 | HR | Geplant |

### Massnahmenplan Abfall

| Nr. | Massnahme | Priorität | Termin | Verantw. | Status |
|-----|-----------|-----------|--------|----------|--------|
| A1 | Verpackungstrennung optimieren | Mittel | Q1/2024 | Logistik | In Arbeit |
| A2 | KSS-Recycling evaluieren | Hoch | Q2/2024 | Technik | Geplant |
| A3 | Abfall-Statistik monatlich | Niedrig | Laufend | Umwelt | Aktiv |

### Massnahmenplan Gefahrstoffe

| Nr. | Massnahme | Priorität | Termin | Verantw. | Status |
|-----|-----------|-----------|--------|----------|--------|
| G1 | Auffangwannen ersetzen | Hoch | Q1/2024 | Facility | In Arbeit |
| G2 | Bio-KSS Pilotprojekt | Mittel | Q3/2024 | Technik | Geplant |
| G3 | Notfallübung Gefahrstoffaustritt | Hoch | Q2/2024 | SiBe | Geplant |

## Schritt 7: KPIs definieren

Erstelle messbare Kennzahlen für die wesentlichen Aspekte:

### Energie-KPIs

| KPI | Einheit | Ist 2023 | Ziel 2024 | Ziel 2025 |
|-----|---------|----------|-----------|-----------|
| Stromverbrauch | kWh/Jahr | 850'000 | 800'000 | 750'000 |
| Stromverbrauch/Umsatz | kWh/CHF Mio. | 12'140 | 11'000 | 10'000 |
| Heizenergie | kWh/Jahr | 320'000 | 310'000 | 300'000 |
| Treibstoffe | Liter/Jahr | 15'000 | 14'000 | 13'000 |

### Abfall-KPIs

| KPI | Einheit | Ist 2023 | Ziel 2024 | Ziel 2025 |
|-----|---------|----------|-----------|-----------|
| Metallrecycling-Quote | % | 98% | 98% | 99% |
| Verpackungsrecycling | % | 65% | 80% | 85% |
| Sonderabfall | t/Jahr | 8.5 | 8.0 | 7.5 |
| Restmüll | t/Jahr | 12 | 10 | 8 |

### Emissions-KPIs

| KPI | Einheit | Ist 2023 | Ziel 2024 | Ziel 2025 |
|-----|---------|----------|-----------|-----------|
| CO₂ Scope 1+2 | t/Jahr | 285 | 260 | 240 |
| CO₂/Umsatz | kg/CHF 1000 | 4.1 | 3.5 | 3.0 |

## Schritt 8: Prozesse verknüpfen

Verknüpfe die Umweltaspekte mit den betroffenen Geschäftsprozessen:

| Aspekt | Betroffene Prozesse |
|--------|---------------------|
| Stromverbrauch | Produktion, Facility Management |
| Abfall | Produktion, Logistik, Einkauf |
| Gefahrstoffe | Produktion, Lager, Wartung |
| Emissionen | Produktion, Logistik |
| Wasser | Produktion, Facility Management |

## Schritt 9: Dokumente verknüpfen

Verknüpfe relevante Dokumente mit dem System:

| Dokumenttyp | Beispiele |
|-------------|-----------|
| **Handbuch** | Umwelthandbuch, Umweltpolitik |
| **Verfahren** | VA Abfallentsorgung, VA Gefahrstoffmanagement |
| **Formulare** | Abfall-Nachweise, Prüfprotokolle |
| **Nachweise** | Entsorgungsnachweise, Analysen |
| **Schulungen** | Umweltschulungsunterlagen |

## Schritt 10: Stakeholder zuordnen

Ordne interessierte Parteien den Aspekten zu:

| Stakeholder | Relevante Aspekte | Erwartungen |
|-------------|-------------------|-------------|
| **Behörden** | Alle | Gesetzeskonformität, Reporting |
| **Anwohner** | Lärm, Emissionen | Minimierung von Belästigungen |
| **Kunden** | Alle | Umweltzertifikat, Nachhaltigkeit |
| **Mitarbeitende** | Gefahrstoffe, Lärm | Sichere Arbeitsumgebung |
| **Versicherung** | Gefahrstoffe | Risikominimierung |

## Ergebnis: Übersicht im System

Nach der vollständigen Erfassung sieht dein System so aus:

<pre>
┌─────────────────────────────────────────────────────────────┐
│  Umweltmanagementsystem                                     │
│  Beispiel Metall AG                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📊 KPIs auf einen Blick                                    │
│  ┌─────────────┬─────────────┬─────────────┐                │
│  │ Strom       │ CO₂         │ Recycling   │                │
│  │ 850'000 kWh │ 285 t       │ 98%         │                │
│  │ ↓ -6%       │ ↓ -9%       │ → stabil    │                │
│  └─────────────┴─────────────┴─────────────┘                │
│                                                             │
│  📁 Aspekte: 28 (5 Hauptkategorien)                         │
│  📋 SWOT-Einschätzungen: 18                                 │
│  ✅ Massnahmen: 11 (3 abgeschlossen, 5 in Arbeit)           │
│  📄 Verknüpfte Dokumente: 24                                │
│  📜 Standards: 6                                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
</pre>

## Tipps für die ISO 14001-Umsetzung

- ✅ **Bindende Verpflichtungen**: Erfasse alle relevanten Gesetze und Vorgaben als Standards
- ✅ **Wesentlichkeit**: Konzentriere dich auf wesentliche Umweltaspekte (Beeinflussbarkeit + Auswirkung)
- ✅ **Lebenszyklus**: Berücksichtige auch vor- und nachgelagerte Aspekte
- ✅ **Notfallvorsorge**: Dokumentiere Notfallszenarien für kritische Aspekte
- ✅ **Kommunikation**: Nutze ELIZA für interne und externe Kommunikation
- ✅ **Audit-Vorbereitung**: Halte alle Nachweise aktuell und verknüpft

## Häufige Fehler bei ISO 14001

- ❌ **Zu viele Aspekte**: Fokussiere auf die wesentlichen, nicht alle denkbaren
- ❌ **Keine Bewertung**: Aspekte ohne Bewertung sind für Audits problematisch
- ❌ **Veraltete Daten**: KPIs müssen aktuell sein
- ❌ **Fehlende Massnahmen**: Risiken ohne Massnahmen sind nicht akzeptabel
- ❌ **Keine Verknüpfung**: Isolierte Daten ohne Kontext sind schwer nachvollziehbar

## Nächste Schritte

Sieh dir auch das Beispiel für Arbeitssicherheit an:

→ [ISO 45001 Arbeitssicherheit](iso45001-beispiel)

Oder erfahre mehr über die Integration mit anderen Modulen:

→ [Integration mit anderen Modulen](integration)
