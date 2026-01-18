---
title: "Praxisbeispiel: ISO 45001 Arbeitssicherheit"
description: ""
weight: "6"
tags:
  - "iso45001"
  - "arbeitssicherheit"
  - "beispiel"
  - "praxis"
  - "gesundheitsschutz"
---


# Praxisbeispiel: ISO 45001 Arbeitssicherheit

Dieses Kapitel zeigt dir anhand eines vollständigen Beispiels, wie du ein Arbeitsschutzmanagementsystem nach ISO 45001 im IMS-Modul umsetzt.

## Ausgangssituation

Die **Muster Maschinenbau GmbH** ist ein Produktionsunternehmen mit:

- 120 Mitarbeitenden
- Fertigung von Maschinenkomponenten
- Montage und Inbetriebnahme beim Kunden
- Ziel: Zertifizierung nach ISO 45001:2018

## Schritt 1: Managementsystem anlegen

**Neues System erstellen:**

1. Navigiere zu **IMS** → **Systeme**
2. Klicke auf **"Hinzufügen"**
3. Fülle die Felder aus:

| Feld | Wert |
|------|------|
| **Titel** | Arbeitsschutzmanagementsystem |
| **Beschreibung** | Managementsystem für Arbeitssicherheit und Gesundheitsschutz nach ISO 45001:2018. Geltungsbereich: Fertigung, Montage und Verwaltung am Standort Musterstadt sowie Montageeinsätze bei Kunden. |

4. Speichere das System

## Schritt 2: Aspektkategorien definieren

Erstelle folgende Kategorien für die thematische Gruppierung:

| Kategorie | Beschreibung |
|-----------|--------------|
| **Mechanische Gefährdungen** | Maschinen, Werkzeuge, bewegte Teile |
| **Elektrische Gefährdungen** | Strom, Spannung, elektrostatische Entladung |
| **Gefahrstoffe** | Chemikalien, Stäube, Dämpfe |
| **Physikalische Gefährdungen** | Lärm, Vibration, Strahlung |
| **Ergonomie** | Körperhaltung, Heben, Tragen |
| **Psychische Belastungen** | Stress, Zeitdruck, Arbeitsorganisation |
| **Arbeitsumgebung** | Beleuchtung, Klima, Verkehrswege |
| **Brand und Explosion** | Brandrisiken, explosionsfähige Atmosphären |
| **Externe Einsätze** | Montagetätigkeiten bei Kunden |

## Schritt 3: Sicherheitsaspekte erfassen

Erstelle die Sicherheitsaspekte basierend auf der Gefährdungsbeurteilung:

### Hauptkategorie: Mechanische Gefährdungen

<pre>
📁 1. Mechanische Gefährdungen
├── 1.1 CNC-Bearbeitungszentren
│   ├── 1.1.1 Einzugsgefahr rotierende Teile
│   ├── 1.1.2 Späneflug
│   └── 1.1.3 Werkzeugbruch
├── 1.2 Schweissarbeitsplätze
│   ├── 1.2.1 Funkenflug
│   ├── 1.2.2 Heisse Werkstücke
│   └── 1.2.3 Schweissstrahlung
├── 1.3 Montagearbeitsplätze
│   ├── 1.3.1 Handwerkzeuge
│   ├── 1.3.2 Schwere Lasten
│   └── 1.3.3 Quetschgefahr
├── 1.4 Innerbetrieblicher Transport
│   ├── 1.4.1 Gabelstapler
│   ├── 1.4.2 Krane
│   └── 1.4.3 Hubwagen
└── 1.5 Instandhaltung
    ├── 1.5.1 Wartungsarbeiten
    └── 1.5.2 Störungsbehebung
</pre>

**Beispiel-Aspekt: 1.1 CNC-Bearbeitungszentren**

| Feld | Inhalt |
|------|--------|
| **Nummer** | 1.1 |
| **Titel** | CNC-Bearbeitungszentren |
| **Beschreibung** | Gefährdungen durch automatisierte Bearbeitungsmaschinen mit hohen Drehzahlen und Vorschubkräften |
| **Kategorie** | Mechanische Gefährdungen |
| **Beeinflussbarkeit** | direkt |
| **im Anwendungsbereich** | ✓ |
| **Analyse** | 8 CNC-Bearbeitungszentren im Einsatz. Hauptgefährdungen: Einzug durch rotierende Spindeln, Späneflug bei offener Tür, Werkzeugbruch bei Materialfehlern. Letzte 3 Jahre: 2 meldepflichtige Unfälle (Späneverletzungen). |
| **Mögliche Massnahmen** | Schutzbrillenpflicht, Späneschutzwände, Notaus-Training, Interlocks prüfen |

### Hauptkategorie: Elektrische Gefährdungen

<pre>
📁 2. Elektrische Gefährdungen
├── 2.1 Niederspannung (< 1000V)
│   ├── 2.1.1 Maschineninstallationen
│   ├── 2.1.2 Handgeführte Elektrogeräte
│   └── 2.1.3 Verlängerungskabel
├── 2.2 Hochspannung
│   └── 2.2.1 Trafostation
└── 2.3 Elektrostatische Entladung
    └── 2.3.1 ESD-Arbeitsplätze
</pre>

### Hauptkategorie: Gefahrstoffe

<pre>
📁 3. Gefahrstoffe
├── 3.1 Kühlschmierstoffe
│   ├── 3.1.1 Hautkontakt
│   ├── 3.1.2 Aerosolbelastung
│   └── 3.1.3 Entsorgung
├── 3.2 Schweisszusätze
│   ├── 3.2.1 Schweissrauch
│   └── 3.2.2 Manganbelastung
├── 3.3 Lacke und Beschichtungen
│   ├── 3.3.1 Lösemittel
│   └── 3.3.2 Isocyanate
├── 3.4 Reinigungsmittel
│   └── 3.4.1 Entfetter
└── 3.5 Hydrauliköle
    └── 3.5.1 Hautresorption
</pre>

### Hauptkategorie: Physikalische Gefährdungen

<pre>
📁 4. Physikalische Gefährdungen
├── 4.1 Lärm
│   ├── 4.1.1 Produktionslärm
│   ├── 4.1.2 Druckluft
│   └── 4.1.3 Schleifen
├── 4.2 Vibration
│   ├── 4.2.1 Hand-Arm-Vibration
│   └── 4.2.2 Ganzkörper-Vibration
└── 4.3 Optische Strahlung
    ├── 4.3.1 Schweissstrahlung
    └── 4.3.2 Laserbeschriftung
</pre>

### Hauptkategorie: Ergonomie

<pre>
📁 5. Ergonomie
├── 5.1 Manuelle Handhabung
│   ├── 5.1.1 Heben schwerer Lasten
│   ├── 5.1.2 Tragen und Transportieren
│   └── 5.1.3 Schieben und Ziehen
├── 5.2 Körperhaltung
│   ├── 5.2.1 Steharbeitsplätze
│   ├── 5.2.2 Überkopfarbeiten
│   └── 5.2.3 Zwangshaltungen
└── 5.3 Bildschirmarbeitsplätze
    ├── 5.3.1 Büroarbeitsplätze
    └── 5.3.2 CNC-Steuerungen
</pre>

### Hauptkategorie: Externe Einsätze

<pre>
📁 6. Externe Einsätze (Montage)
├── 6.1 Arbeiten in fremden Betrieben
│   ├── 6.1.1 Unbekannte Gefährdungen
│   ├── 6.1.2 Koordination mit Kunden
│   └── 6.1.3 Zugang zu Rettungsmitteln
├── 6.2 Arbeit in Höhen
│   ├── 6.2.1 Leitern und Tritte
│   ├── 6.2.2 Gerüste
│   └── 6.2.3 Absturzsicherung
├── 6.3 Reisetätigkeit
│   ├── 6.3.1 Fahrten mit Firmenfahrzeug
│   └── 6.3.2 Auslandsreisen
└── 6.4 Alleinarbeit
    └── 6.4.1 Montage ohne Kollegen
</pre>

## Schritt 4: Standards verknüpfen

Verknüpfe relevante Standards mit dem System:

| Standard | Beschreibung |
|----------|--------------|
| **ISO 45001:2018** | Arbeitsschutzmanagementsysteme |
| **ArGV 3** | Verordnung 3 zum Arbeitsgesetz |
| **VUV** | Verordnung über die Unfallverhütung |
| **EKAS 6508** | Richtlinie für den Beizug von ASA |
| **SUVA** | Relevante SUVA-Merkblätter |
| **Maschinenrichtlinie** | 2006/42/EG |

## Schritt 5: SWOT-Analyse durchführen

Erfasse für jeden wesentlichen Aspekt SWOT-Einschätzungen:

### Aspekt: Mechanische Gefährdungen

| Typ | Einschätzung |
|-----|--------------|
| **Stärke** | Alle Maschinen CE-konform mit aktueller Sicherheitstechnik |
| **Stärke** | Erfahrene Maschinenbediener mit langjähriger Erfahrung |
| **Schwäche** | PSA-Tragequote bei Schutzbrille nur 85% |
| **Schwäche** | Keine regelmässigen Sicherheitsunterweisungen für Temporäre |
| **Chance** | Digitales Unterweisungssystem verfügbar |
| **Risiko** | Zeitdruck führt zu Umgehen von Schutzeinrichtungen |

### Aspekt: Gefahrstoffe

| Typ | Einschätzung |
|-----|--------------|
| **Stärke** | Vollständiges Gefahrstoffverzeichnis vorhanden |
| **Stärke** | Geschulter Gefahrstoffbeauftragter |
| **Schwäche** | Absaugung an Schweissplätzen veraltet |
| **Schwäche** | Handschuhtragequote bei KSS-Kontakt unter 70% |
| **Chance** | Förderung für neue Absauganlage möglich |
| **Risiko** | Berufskrankheit bei Mangan-Exposition (Schweissen) |

### Aspekt: Ergonomie

| Typ | Einschätzung |
|-----|--------------|
| **Stärke** | Höhenverstellbare Montagetische vorhanden |
| **Stärke** | Vakuumheber für schwere Teile verfügbar |
| **Schwäche** | Viele Komponenten über 25 kg manuell bewegt |
| **Schwäche** | Keine systematische Ergonomie-Schulung |
| **Chance** | Exoskelette für Überkopfmontage auf dem Markt |
| **Risiko** | Steigende Ausfälle durch Muskel-Skelett-Erkrankungen |

### Aspekt: Externe Einsätze

| Typ | Einschätzung |
|-----|--------------|
| **Stärke** | Monteure mit SCC-Zertifikat |
| **Stärke** | Persönliche Notfall-Sets vorhanden |
| **Schwäche** | Uneinheitliche Gefährdungsbeurteilung vor Ort |
| **Schwäche** | Keine systematische Alleinarbeiter-Kontrolle |
| **Chance** | App für Alleinarbeiter-Überwachung verfügbar |
| **Risiko** | Unfall bei Alleinarbeit ohne schnelle Hilfe |

## Schritt 6: Massnahmen definieren

### Massnahmenplan Mechanische Gefährdungen

| Nr. | Massnahme | Priorität | Termin | Verantw. | Status |
|-----|-----------|-----------|--------|----------|--------|
| M1 | PSA-Kampagne Schutzbrille | Hoch | Q1/2024 | SiFa | In Arbeit |
| M2 | Interlock-Check alle CNC | Hoch | Q1/2024 | Technik | Geplant |
| M3 | Unterweisung Temporärmitarbeiter | Hoch | Laufend | HR/SiFa | Aktiv |
| M4 | Sicherheits-Gamification einführen | Mittel | Q2/2024 | SiFa | Geplant |

### Massnahmenplan Gefahrstoffe

| Nr. | Massnahme | Priorität | Termin | Verantw. | Status |
|-----|-----------|-----------|--------|----------|--------|
| G1 | Absauganlage Schweisserei erneuern | Hoch | Q2/2024 | Facility | Geplant |
| G2 | Handschuhpflicht durchsetzen | Hoch | Q1/2024 | Vorarbeiter | In Arbeit |
| G3 | Biomonitoring Schweisser | Mittel | Q2/2024 | Betriebsarzt | Geplant |
| G4 | KSS-Konzentration überwachen | Mittel | Laufend | Labor | Aktiv |

### Massnahmenplan Ergonomie

| Nr. | Massnahme | Priorität | Termin | Verantw. | Status |
|-----|-----------|-----------|--------|----------|--------|
| E1 | Ergonomie-Schulung Montage | Mittel | Q1/2024 | HR | Geplant |
| E2 | Hebehilfen evaluieren | Mittel | Q2/2024 | Technik | Geplant |
| E3 | Arbeitsplatz-Analyse Büro | Niedrig | Q3/2024 | HR | Geplant |

### Massnahmenplan Externe Einsätze

| Nr. | Massnahme | Priorität | Termin | Verantw. | Status |
|-----|-----------|-----------|--------|----------|--------|
| X1 | Standard-Gefährdungsbeurteilung Montage | Hoch | Q1/2024 | SiFa | In Arbeit |
| X2 | Alleinarbeiter-App einführen | Hoch | Q2/2024 | IT/SiFa | Geplant |
| X3 | Montage-Sicherheitskit überarbeiten | Mittel | Q2/2024 | SiFa | Geplant |

## Schritt 7: KPIs definieren

### Nachlaufende Indikatoren (Lagging)

| KPI | Einheit | Ist 2023 | Ziel 2024 | Ziel 2025 |
|-----|---------|----------|-----------|-----------|
| Arbeitsunfälle meldepflichtig | Anzahl/Jahr | 5 | 3 | 2 |
| Ausfalltage durch Unfälle | Tage/Jahr | 62 | 40 | 25 |
| Unfallrate (pro 1000 VZÄ) | Quote | 42 | 25 | 17 |
| Berufskrankheiten | Anzahl/Jahr | 0 | 0 | 0 |

### Vorlaufende Indikatoren (Leading)

| KPI | Einheit | Ist 2023 | Ziel 2024 | Ziel 2025 |
|-----|---------|----------|-----------|-----------|
| Sicherheitsbegehungen | Anzahl/Monat | 2 | 4 | 4 |
| Beinaheunfall-Meldungen | Anzahl/Jahr | 8 | 20 | 30 |
| Unterweisungsquote | % | 85% | 95% | 100% |
| PSA-Tragequote | % | 88% | 95% | 98% |
| Massnahmen termingerecht | % | 72% | 85% | 95% |

## Schritt 8: Meldekreise einrichten

Erstelle Meldekreise für verschiedene Meldungstypen:

| Meldekreis | Beschreibung | Zuständig |
|------------|--------------|-----------|
| **Arbeitsunfälle** | Meldung von Arbeitsunfällen | SiFa |
| **Beinaheunfälle** | Near-Miss-Meldungen | Vorarbeiter |
| **Sicherheitsmängel** | Technische Mängel, defekte PSA | Facility |
| **Verbesserungsideen** | Vorschläge zur Sicherheit | SiFa |

Verknüpfe diese Meldekreise mit dem Arbeitsschutzmanagementsystem.

## Schritt 9: Stakeholder zuordnen

| Stakeholder | Relevante Aspekte | Erwartungen |
|-------------|-------------------|-------------|
| **SUVA** | Alle | Unfallverhütung, Prävention |
| **Arbeitsinspektorat** | Alle | Gesetzeskonformität |
| **Mitarbeitende** | Alle | Sichere Arbeitsbedingungen |
| **Betriebsrat** | Alle | Mitbestimmung, Information |
| **Kunden** | Externe Einsätze | Qualifizierte, sichere Monteure |
| **Versicherung** | Alle | Risikominimierung |

## Schritt 10: Dokumente verknüpfen

| Dokumenttyp | Beispiele |
|-------------|-----------|
| **Handbuch** | Sicherheitshandbuch, Notfallkonzept |
| **Gefährdungsbeurteilungen** | GB pro Arbeitsbereich |
| **Betriebsanweisungen** | BA Maschinen, BA Gefahrstoffe |
| **PSA-Dokumente** | PSA-Matrix, Trageanweisungen |
| **Unterweisungen** | Unterweisungsnachweise, Schulungsunterlagen |
| **Prüfprotokolle** | Maschinenprüfungen, Leiterprüfungen |

## Ergebnis: Übersicht im System

<pre>
┌─────────────────────────────────────────────────────────────┐
│  Arbeitsschutzmanagementsystem                              │
│  Muster Maschinenbau GmbH                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📊 Sicherheits-KPIs                                        │
│  ┌─────────────┬─────────────┬─────────────┐                │
│  │ Unfälle     │ Ausfalltage │ PSA-Quote   │                │
│  │ 5 → 3       │ 62 → 40     │ 88% → 95%   │                │
│  │ ↓ -40%      │ ↓ -35%      │ ↑ +7%       │                │
│  └─────────────┴─────────────┴─────────────┘                │
│                                                             │
│  📁 Aspekte: 42 (6 Hauptkategorien)                         │
│  📋 SWOT-Einschätzungen: 24                                 │
│  ✅ Massnahmen: 14 (4 abgeschlossen, 6 in Arbeit)           │
│  🎫 Offene Meldungen: 3                                     │
│  📄 Verknüpfte Dokumente: 38                                │
│  📜 Standards: 6                                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
</pre>

## Tipps für die ISO 45001-Umsetzung

- ✅ **Gefährdungsbeurteilung**: Systematisch alle Tätigkeiten erfassen
- ✅ **Mitarbeiterbeteiligung**: Beinaheunfall-Meldungen fördern
- ✅ **Vorlaufende KPIs**: Nicht nur Unfälle, auch Präventivmassnahmen messen
- ✅ **Unterweisungen**: Regelmässig und dokumentiert durchführen
- ✅ **Notfallübungen**: Mindestens jährlich durchführen
- ✅ **Management-Commitment**: Sichtbares Engagement der Führung

## Häufige Fehler bei ISO 45001

- ❌ **Nur dokumentieren**: Das System muss gelebt werden
- ❌ **Keine Beinaheunfälle**: Fehlende Meldungen = fehlende Prävention
- ❌ **PSA als einzige Massnahme**: T-O-P Prinzip beachten (Technik → Organisation → Person)
- ❌ **Externe Einsätze vergessen**: Montage ist oft riskanter als Produktion
- ❌ **Keine Wirksamkeitskontrolle**: Massnahmen müssen überprüft werden

## T-O-P Prinzip

Bei der Festlegung von Massnahmen gilt die Rangfolge:

<pre>
┌─────────────────────────────────────────────────────────────┐
│  1. TECHNISCHE Massnahmen (höchste Priorität)               │
│     └── Gefährdung beseitigen, Schutzeinrichtungen          │
│                                                             │
│  2. ORGANISATORISCHE Massnahmen                             │
│     └── Arbeitsorganisation, Unterweisungen, Zugangsbeschr. │
│                                                             │
│  3. PERSONENBEZOGENE Massnahmen (letzte Option)             │
│     └── PSA, Verhalten                                      │
└─────────────────────────────────────────────────────────────┘
</pre>

## Nächste Schritte

Erfahre, wie das IMS-Modul mit anderen ELIZA-Modulen zusammenarbeitet:

→ [Integration mit anderen Modulen](integration)
