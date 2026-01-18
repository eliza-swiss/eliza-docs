---
title: "Managementsysteme verwalten"
description: ""
weight: "2"
tags:
  - "system"
  - "konfiguration"
  - "setup"
  - "admin"
---


# Managementsysteme verwalten

In diesem Kapitel lernst du, wie du Managementsysteme erstellst, konfigurierst und mit anderen ELIZA-Elementen verknüpfst.

## Ein neues Managementsystem erstellen

**Voraussetzung:** Du benötigst die Berechtigung zum Hinzufügen von Systemen.

**Schritt-für-Schritt Anleitung:**

1. Navigiere zu **IMS** → **Systeme**
2. Klicke auf den Button **"Hinzufügen"** (grüner Button mit Plus-Icon)
3. Fülle das Formular aus:
   - **Titel**: Name des Managementsystems (z.B. "Umweltmanagementsystem")
   - **Beschreibung**: Erläuterung zum System (Markdown wird unterstützt)
   - **Bild**: Optional ein Vorschaubild für die Übersicht
   - **Detailbild**: Optional ein Header-Bild für die Detailansicht
4. Klicke auf **"Speichern"**

> **💡 Tipp:** Nutze Markdown in der Beschreibung für eine strukturierte Darstellung. Überschriften, Listen und Links werden unterstützt.

## Systemfelder im Detail

### Basis-Informationen

| Feld | Beschreibung | Pflicht |
|------|--------------|---------|
| **Titel** | Name des Managementsystems | Ja |
| **Beschreibung** | Ausführliche Beschreibung (Markdown) | Nein |
| **Bild** | Vorschaubild für Übersicht (ca. 400x300px, 4:3) | Nein |
| **Detailbild** | Header-Bild für Detailseite (1600x200px, 8:1) | Nein |

### Berechtigungen

| Feld | Beschreibung |
|------|--------------|
| **Admins** | Benutzer mit Administratorrechten für dieses System |
| **Team** | Benutzer, die dem System-Team angehören |

> **💡 Tipp:** Füge Admins hinzu, um bestimmten Benutzern erweiterte Rechte für ein spezifisches System zu geben.

### Verknüpfungen

Das Managementsystem kann mit verschiedenen ELIZA-Elementen verknüpft werden:

| Feld | Beschreibung |
|------|--------------|
| **Dokumente** | Einzelne Dokumente aus dem DMS |
| **Dokumentenordner** | Ganze Ordner aus dem DMS |
| **Meldekreise** | Issue-Tracker für Meldungen |
| **Spaces** | Team-Spaces für Zusammenarbeit |
| **Skillskategorien** | Kompetenz-Kategorien aus der Organisation |
| **Standards** | Normen, Gesetze und Vorgaben |

## Managementsystem bearbeiten

**So bearbeitest du ein bestehendes System:**

1. Öffne das System durch Klick auf die Karte
2. Klicke auf das **Bearbeiten-Icon** (Stift) oben rechts
3. Ändere die gewünschten Felder
4. Klicke auf **"Speichern"**

## Dokumente verknüpfen

Dokumente können auf zwei Arten mit einem System verknüpft werden:

### Methode 1: Beim Bearbeiten des Systems

1. Öffne die Systembearbeitung
2. Wähle im Feld **"Dokumente"** die gewünschten Dokumente aus
3. Speichere das System

### Methode 2: Über die Dokumentenverwaltung

1. Navigiere im System zu **Dokumente**
2. Klicke auf **"Dokumente bearbeiten"**
3. Durchsuche die Ordnerstruktur
4. Klicke auf das Plus-Icon neben dem gewünschten Dokument
5. Das Dokument wird sofort verknüpft

<pre>
┌─────────────────────────────────────────────────────────────┐
│  Dokumente verknüpfen                                       │
├─────────────────────────────────────────────────────────────┤
│  Verknüpfte Dokumente:                                      │
│  ├── Umwelthandbuch.pdf              [x]                    │
│  └── Umweltpolitik.docx              [x]                    │
│                                                             │
│  Ordner durchsuchen:                                        │
│  ├── 📁 Handbücher                                          │
│  │   ├── Arbeitsschutzhandbuch.pdf   [+]                    │
│  │   └── QM-Handbuch.pdf             [+]                    │
│  └── 📁 Vorlagen                                            │
│      └── Checkliste.xlsx             [+]                    │
└─────────────────────────────────────────────────────────────┘
</pre>

> **💡 Tipp:** Nutze die Suche, um schnell das gewünschte Dokument zu finden.

## Standards verknüpfen

Standards (Normen, Gesetze, Vorgaben) werden über das Standards-Modul verwaltet und können mit dem System verknüpft werden.

**Standards verknüpfen:**

1. Öffne die Systembearbeitung
2. Wähle im Feld **"Standards"** die relevanten Standards aus
3. Speichere das System

**Beispiele für Standards:**

- ISO 14001:2015 - Umweltmanagementsysteme
- ISO 45001:2018 - Arbeitsschutzmanagementsysteme
- ChemRRV - Chemikalien-Risikoreduktions-Verordnung
- EKAS-Richtlinien

> **⚠️ Wichtig:** Standards müssen zuerst im Standards-Modul angelegt werden, bevor sie hier verknüpft werden können.

## Meldekreise verknüpfen

Meldekreise (Issue-Tracker) ermöglichen es, Meldungen und Vorfälle direkt im Kontext des Managementsystems zu verwalten.

**Meldekreis verknüpfen:**

1. Öffne die Systembearbeitung
2. Wähle im Feld **"Meldekreise"** die relevanten Tracker aus
3. Speichere das System

Nach der Verknüpfung siehst du unter **Meldungen** alle offenen Issues aus den verknüpften Meldekreisen.

## Spaces verknüpfen

Spaces ermöglichen die Team-Zusammenarbeit im Kontext des Managementsystems.

**Space verknüpfen:**

1. Öffne die Systembearbeitung
2. Wähle im Feld **"Spaces"** die relevanten Spaces aus
3. Speichere das System

## Aspektkategorien verwalten

Jedes System kann eigene Aspektkategorien haben, um Aspekte thematisch zu gruppieren.

**Neue Kategorie erstellen:**

1. Navigiere im System zu **Kategorien**
2. Klicke auf **"Hinzufügen"**
3. Gib Titel und Beschreibung ein
4. Klicke auf **"Speichern"**

**Typische Kategorien für verschiedene Systeme:**

| Systemtyp | Beispiel-Kategorien |
|-----------|---------------------|
| **Umwelt (ISO 14001)** | Energie, Wasser, Abfall, Emissionen, Gefahrstoffe |
| **Arbeitssicherheit (ISO 45001)** | Arbeitsmittel, Gefahrstoffe, Ergonomie, PSA, Notfall |
| **Qualität (ISO 9001)** | Kundenzufriedenheit, Prozesse, Lieferanten, Risiken |

## Systemansichten nutzen

### Übersicht

Die Startseite des Systems zeigt:
- Systembeschreibung
- Verknüpfte KPIs aller Aspekte

### Aspekte

Hierarchische Liste aller Aspekte mit:
- Nummer und Titel
- Einrückung für Hierarchie
- Archivierte Aspekte (optional einblendbar)

### SWOT

Gesammelte SWOT-Einschätzungen aller Aspekte:
- Stärken
- Schwächen
- Chancen
- Risiken

### Massnahmen

Übersicht aller Massnahmen:
- Status (offen, in Bearbeitung, abgeschlossen)
- Verantwortlichkeiten
- Termine

### Ziele (OKR)

Wenn das OKR-Modul aktiviert ist:
- Verknüpfte Objectives
- Key Results
- Fortschritt

### Meldungen

Issues aus verknüpften Meldekreisen:
- Offene Meldungen
- Status
- Priorität

### Dokumente

Verknüpfte Dokumente:
- Dokumentenliste
- Schnellzugriff

### Standards

Verknüpfte Normen und Gesetze:
- Standardliste
- Links zu Detailansichten

### Skills

Verknüpfte Skill-Kategorien:
- Kompetenzanforderungen
- Schulungsbedarf

## System löschen

> **⚠️ Warnung:** Das Löschen eines Systems entfernt auch alle zugehörigen Aspekte und Aspektkategorien!

**So löschst du ein System:**

1. Öffne das System
2. Klicke auf das **Mehr-Menü** (drei Punkte)
3. Wähle **"Löschen"**
4. Bestätige die Löschung

## Best Practices

- ✅ **Aussagekräftige Titel**: Verwende eindeutige Namen für Systeme
- ✅ **Strukturierte Beschreibung**: Nutze Markdown für klare Gliederung
- ✅ **Kategorien vorplanen**: Überlege dir die Kategorie-Struktur vor dem Erfassen von Aspekten
- ✅ **Dokumente verknüpfen**: Verbinde relevante Handbücher und Vorgaben
- ✅ **Standards zuweisen**: Verknüpfe die relevanten Normen für bessere Nachverfolgung
- ✅ **Team definieren**: Lege fest, wer für das System verantwortlich ist

## Häufige Fehler vermeiden

- ❌ **Zu viele Systeme**: Bei einem IMS solltest du alle Aspekte in einem System bündeln
- ❌ **Fehlende Beschreibung**: Eine gute Beschreibung hilft bei der Orientierung
- ❌ **Keine Kategorien**: Ohne Kategorien wird die Aspekt-Liste schnell unübersichtlich
- ❌ **Verwaiste Dokumente**: Halte die Dokumentenverknüpfungen aktuell

## Nächste Schritte

Jetzt, wo dein System eingerichtet ist, lerne im nächsten Kapitel, wie du Aspekte erfasst und strukturierst:

→ [Aspekte erfassen](aspekte)
