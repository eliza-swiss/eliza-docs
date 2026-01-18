---
title: "Aspekte erfassen"
description: ""
weight: "3"
tags:
  - "aspekte"
  - "hierarchie"
  - "kategorien"
  - "erfassung"
---


# Aspekte erfassen

Aspekte sind das Herzstück des IMS-Moduls. In diesem Kapitel lernst du, wie du Aspekte erfasst, strukturierst und mit anderen Elementen verknüpfst.

## Was sind Aspekte?

Aspekte sind die relevanten Elemente, die in einem Managementsystem erfasst und bewertet werden. Je nach Systemtyp können das sein:

| Systemtyp | Aspektbeispiele |
|-----------|-----------------|
| **Umwelt (ISO 14001)** | Energieverbrauch, Wasserverbrauch, Abfall, Emissionen |
| **Arbeitssicherheit (ISO 45001)** | Gefährdungen, Risiken, Arbeitsplatzgestaltung |
| **Qualität (ISO 9001)** | Prozessrisiken, Kundenfeedback, Lieferantenqualität |
| **Integriert** | Kombination aus allen Bereichen |

## Einen neuen Aspekt erstellen

**Voraussetzung:** Du benötigst die Berechtigung zum Hinzufügen von Aspekten.

**Schritt-für-Schritt:**

1. Navigiere im System zu **Aspekte**
2. Klicke auf **"Hinzufügen"** (grüner Button)
3. Fülle das Formular aus:
   - **Nummer**: Optionale Nummerierung (z.B. "1.1", "UA-001")
   - **Titel**: Bezeichnung des Aspekts
   - **Beschreibung**: Ausführliche Beschreibung
   - **Übergeordneter Aspekt**: Optional für Hierarchie
4. Klicke auf **"Speichern"**

> **💡 Tipp:** Die Nummer hilft bei der Sortierung. Nutze ein einheitliches Schema wie "1.1", "1.2", "2.1" für eine logische Reihenfolge.

## Aspektfelder im Detail

### Basis-Informationen

| Feld | Beschreibung | Pflicht |
|------|--------------|---------|
| **Nummer** | Eindeutige Nummerierung | Nein |
| **Titel** | Bezeichnung des Aspekts | Ja |
| **Beschreibung** | Ausführliche Beschreibung (Markdown) | Nein |
| **Übergeordneter Aspekt** | Parent für Hierarchie | Nein |

### Analyse-Felder

| Feld | Beschreibung |
|------|--------------|
| **Analyse / Ursache** | Ursachenanalyse und Hintergrundinformationen |
| **Mögliche Massnahmen** | Vorschläge für Verbesserungsmassnahmen |
| **Verantwortliche Funktion** | Zuständige Rolle/Position |

### Kategorisierung

| Feld | Beschreibung |
|------|--------------|
| **Aspektkategorien** | Thematische Zuordnung (Mehrfachauswahl) |
| **Beeinflussbarkeit** | keine / indirekt / direkt |
| **im Anwendungsbereich** | Ja/Nein - Ist der Aspekt relevant? |

### Verknüpfungen

| Feld | Beschreibung |
|------|--------------|
| **Ziele** | OKR-Objectives (wenn OKR-Modul aktiv) |
| **SWOT-Analyse** | Verknüpfte Einschätzungen |
| **Massnahmen** | Verknüpfte Verbesserungsmassnahmen |
| **Betroffene Prozesse** | Prozesse aus dem Prozessmodul |
| **Interessierte Parteien** | Stakeholder |
| **Kennzahlen** | KPIs zur Messung |

## Hierarchische Strukturierung

Aspekte können hierarchisch organisiert werden, um komplexe Strukturen abzubilden.

<pre>
Beispiel-Hierarchie:

📁 1. Energie
├── 1.1 Stromverbrauch
│   ├── 1.1.1 Beleuchtung
│   ├── 1.1.2 Klimaanlage
│   └── 1.1.3 Produktion
├── 1.2 Heizenergie
│   ├── 1.2.1 Gebäudeheizung
│   └── 1.2.2 Prozesswärme
└── 1.3 Treibstoffe
    ├── 1.3.1 Fuhrpark
    └── 1.3.2 Maschinen
</pre>

### Unteraspekt erstellen

**Methode 1: Beim Erstellen**

1. Erstelle einen neuen Aspekt
2. Wähle im Feld **"Übergeordneter Aspekt"** den Parent aus
3. Speichere

**Methode 2: Von der Aspekt-Detailseite**

1. Öffne den übergeordneten Aspekt
2. Klicke auf **"Aspekt hinzufügen"** (Button oben rechts)
3. Der Parent ist automatisch vorausgewählt
4. Fülle die restlichen Felder aus
5. Speichere

## Beeinflussbarkeit bewerten

Die Beeinflussbarkeit zeigt, wie stark du den Aspekt kontrollieren kannst:

| Stufe | Symbol | Bedeutung | Beispiel |
|-------|--------|-----------|----------|
| **keine** | ○ | Kein Einfluss möglich | Wetter, Naturereignisse |
| **indirekt** | ◐ | Einfluss über Dritte | Lieferanten, Kunden |
| **direkt** | ● | Volle Kontrolle | Eigene Prozesse, Anlagen |

> **💡 Tipp:** Fokussiere deine Massnahmen auf Aspekte mit direkter Beeinflussbarkeit – hier erzielst du die grösste Wirkung.

## Anwendungsbereich definieren

Das Flag "im Anwendungsbereich" ist wichtig für die ISO-Zertifizierung:

- ✅ **Aktiviert**: Der Aspekt ist Teil des zertifizierten Geltungsbereichs
- ❌ **Deaktiviert**: Der Aspekt ist dokumentiert, aber nicht im Scope

**Warum ist das wichtig?**

Bei externen Audits wird geprüft, ob alle Aspekte im Anwendungsbereich angemessen bewertet und gesteuert werden. Aspekte ausserhalb des Anwendungsbereichs können dokumentiert, müssen aber nicht zwingend gemanagt werden.

## Aspekte kategorisieren

Kategorien helfen bei der thematischen Organisation:

**So kategorisierst du einen Aspekt:**

1. Öffne den Aspekt zur Bearbeitung
2. Wähle im Feld **"Aspektkategorien"** eine oder mehrere Kategorien
3. Speichere

**Vorteile der Kategorisierung:**

- Schnellere Navigation
- Bessere Filterung
- Thematische Gruppierung
- Übersichtlichere Berichte

## Aspekte mit Prozessen verknüpfen

Die Verknüpfung mit Prozessen zeigt, welche Geschäftsprozesse von einem Aspekt betroffen sind.

**Prozesse verknüpfen:**

1. Öffne den Aspekt zur Bearbeitung
2. Wähle im Feld **"Betroffene Prozesse"** die relevanten Prozesse
3. Speichere

**Nutzen:**

- Prozessverantwortliche können relevante Aspekte sehen
- Auswirkungsanalyse bei Prozessänderungen
- Vollständige Dokumentation für Audits

## Stakeholder zuordnen

Interessierte Parteien (Stakeholder) können mit Aspekten verknüpft werden:

**Stakeholder verknüpfen:**

1. Öffne den Aspekt zur Bearbeitung
2. Wähle im Feld **"Interessierte Parteien"** die relevanten Stakeholder
3. Speichere

**Typische Stakeholder:**

- Behörden und Regulierungsstellen
- Kunden und Lieferanten
- Mitarbeitende
- Nachbarn und Gemeinde
- Umweltverbände

## KPIs verknüpfen

Kennzahlen (KPIs) machen Aspekte messbar:

**KPIs verknüpfen:**

1. Öffne den Aspekt zur Bearbeitung
2. Wähle im Feld **"Kennzahlen"** die relevanten KPIs
3. Speichere

**Beispiele:**

| Aspekt | KPI |
|--------|-----|
| Stromverbrauch | kWh pro Jahr |
| Wasserverbrauch | m³ pro Monat |
| Abfall | Tonnen pro Quartal |
| Arbeitsunfälle | Anzahl pro Jahr |

> **⚠️ Wichtig:** KPIs müssen zuerst im KPI-Modul angelegt werden.

## Aspekte archivieren

Nicht mehr relevante Aspekte können archiviert statt gelöscht werden:

**Aspekt archivieren:**

1. Öffne den Aspekt zur Bearbeitung
2. Aktiviere das Flag **"Archiviert"**
3. Speichere

**Vorteile der Archivierung:**

- Historische Daten bleiben erhalten
- Verknüpfungen bleiben bestehen
- Aspekt erscheint nicht mehr in der Standard-Ansicht
- Jederzeit wiederherstellbar

**Archivierte Aspekte anzeigen:**

1. Navigiere zur Aspekt-Liste
2. Klicke auf **"Archivierte anzeigen"**
3. Archivierte Aspekte werden separat angezeigt

## Aspekt löschen

> **⚠️ Warnung:** Das Löschen ist endgültig und entfernt auch alle Unteraspekte!

**So löschst du einen Aspekt:**

1. Öffne den Aspekt
2. Klicke auf das **Mehr-Menü** (drei Punkte)
3. Wähle **"Löschen"**
4. Bestätige die Löschung

> **💡 Tipp:** Nutze die Archivierung, wenn du historische Daten behalten möchtest.

## Aspekt-Detailansicht

Die Detailansicht zeigt alle Informationen auf einen Blick:

<pre>
┌─────────────────────────────────────────────────────────────┐
│  1.1 Stromverbrauch                           [Bearbeiten]  │
├─────────────────────────────────────────────────────────────┤
│  Beeinflussbarkeit:    direkt                               │
│  Aspektkategorien:     Energie                              │
│  Im Anwendungsbereich: ✓                                    │
│                                                             │
│  Zielsetzungen:        - Energieeffizienz steigern          │
│  Interessierte Parteien: - Behörden, Kunden                 │
│                                                             │
│  Beschreibung:                                              │
│  Der Stromverbrauch umfasst alle elektrischen Verbraucher   │
│  im Produktionsbereich und der Verwaltung.                  │
│                                                             │
│  Analyse / Ursache:                                         │
│  Hauptverbraucher sind Produktionsanlagen (60%) und         │
│  Klimatisierung (25%).                                      │
│                                                             │
│  Mögliche Massnahmen:                                       │
│  - LED-Umrüstung                                            │
│  - Frequenzumrichter für Motoren                            │
│  - Automatische Abschaltung                                 │
├─────────────────────────────────────────────────────────────┤
│  SWOT-Einschätzungen                                        │
│  ├── Stärke: Moderne Anlagen                                │
│  └── Risiko: Steigende Energiepreise                        │
├─────────────────────────────────────────────────────────────┤
│  Massnahmen                                                 │
│  ├── LED-Umrüstung Halle 1          [In Bearbeitung]        │
│  └── Energiemanagement-System       [Geplant]               │
├─────────────────────────────────────────────────────────────┤
│  Kennzahlen                                                 │
│  └── Stromverbrauch kWh/Jahr        850'000                 │
└─────────────────────────────────────────────────────────────┘
</pre>

## Best Practices

- ✅ **Einheitliche Nummerierung**: Nutze ein konsistentes Schema
- ✅ **Aussagekräftige Titel**: Der Titel sollte den Aspekt eindeutig beschreiben
- ✅ **Kategorien nutzen**: Ordne jeden Aspekt mindestens einer Kategorie zu
- ✅ **Beeinflussbarkeit bewerten**: Hilft bei der Priorisierung von Massnahmen
- ✅ **Hierarchie sinnvoll**: Maximal 3-4 Ebenen, sonst wird es unübersichtlich
- ✅ **Prozesse verknüpfen**: Zeigt die Auswirkungen auf das Tagesgeschäft
- ✅ **KPIs definieren**: Macht den Aspekt messbar und nachvollziehbar

## Häufige Fehler vermeiden

- ❌ **Zu viele Ebenen**: Flache Hierarchien sind übersichtlicher
- ❌ **Fehlende Beschreibung**: Ohne Kontext ist der Aspekt schwer verständlich
- ❌ **Keine Beeinflussbarkeit**: Die Bewertung ist wichtig für die Priorisierung
- ❌ **Aspekte ohne Kategorie**: Erschwert die Filterung und Navigation
- ❌ **Verwaiste Aspekte**: Prüfe regelmässig, ob Aspekte noch relevant sind

## Nächste Schritte

Jetzt, wo du weisst, wie man Aspekte erfasst, lerne im nächsten Kapitel, wie du SWOT-Analysen durchführst und Massnahmen ableitest:

→ [Analyse und Massnahmen](analyse-massnahmen)
