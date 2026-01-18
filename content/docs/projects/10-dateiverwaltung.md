---
title: "Dateiverwaltung"
description: ""
weight: "10"
tags:
  - "dateien"
  - "dokumente"
  - "upload"
  - "vorschau"
  - "dms"
---


# Dateiverwaltung

Verwalte projektrelevante Dokumente und Dateien zentral in deinem Projekt. Die Dateiverwaltung ermöglicht dir den schnellen Upload, die Organisation und den Zugriff auf alle wichtigen Projektdokumente - von Konzepten über Designs bis zu Abnahmeprotokollen.

## Was ist die Dateiverwaltung?

Die Dateiverwaltung in ELIZA Projekten ist dein zentraler Ablageort für alle projektrelevanten Dokumente, die nicht unbedingt im [DMS (Dokumentenmanagementsystem)](../dms/) mit vollem Workflow verwaltet werden müssen.

### Unterschied DMS vs. Projekt-Dateien

**Projekt-Dateiverwaltung** eignet sich für:

- 📄 Arbeitsdokumente und Entwürfe
- 🖼️ Screenshots und Design-Mockups
- 📊 Excel-Listen und Kalkulationen
- 📋 Meeting-Protokolle und Notizen
- 🗂️ Temporäre Dateien und Zwischenversionen
- 📎 Anhänge und Referenzmaterialien

**DMS** eignet sich für:

- 📑 Offizielle Dokumente mit Freigabe-Workflow
- 🔒 Dokumente mit strikter Versionskontrolle
- ✅ Qualitätsdokumente nach ISO 9001
- 🏢 Unternehmensweite Dokumente
- 📝 Verträge und rechtlich relevante Dokumente
- 🔄 Dokumente mit Gültigkeitsdaten und Review-Zyklen

**Faustregel**: Alles was schnell und unkompliziert ins Projekt soll → Dateiverwaltung. Alles was formell, genehmigt und versioniert sein muss → DMS.

## Dateien hochladen

### Upload-Vorgang

1. Öffne dein Projekt in der Detailansicht
2. Wechsle zum Tab **"Dateien"**
3. Klicke auf **"+ Dateien hochladen"**
4. Wähle Dateien aus (Mehrfachauswahl mit `Strg/Cmd + Klick`)
5. Upload startet automatisch
6. Fortschrittsanzeige zeigt Upload-Status

### Drag & Drop Upload

Du kannst Dateien auch per Drag & Drop hochladen:

1. Öffne den "Dateien"-Tab in deinem Projekt
2. Ziehe Dateien vom Explorer/Finder ins Browser-Fenster
3. Lasse die Dateien über dem Upload-Bereich fallen
4. Upload startet automatisch

### Mehrere Dateien gleichzeitig

- **Keine Limitierung**: Du kannst beliebig viele Dateien gleichzeitig auswählen
- **Batch-Upload**: Alle ausgewählten Dateien werden parallel hochgeladen
- **Fortschritt**: Jede Datei zeigt ihren individuellen Upload-Fortschritt
- **Fehlerbehandlung**: Wenn eine Datei fehlschlägt, werden die anderen trotzdem hochgeladen

### Upload-Limits und Restriktionen

| Limit | Wert | Beschreibung |
|-------|------|--------------|
| **Max. Dateigrösse** | 100 MB | Pro einzelner Datei (konfigurierbar) |
| **Erlaubte Formate** | Alle | Keine Format-Restriktionen (ausser Sicherheit) |
| **Speicherplatz** | Unbegrenzt | Abhängig von Server-Konfiguration |
| **Dateiname** | 255 Zeichen | Maximale Länge des Dateinamens |

**Hinweis**: Bei sehr grossen Dateien (>50 MB) empfehlen wir einzelne Uploads statt Batch-Uploads, um Timeout-Probleme zu vermeiden.

## Unterstützte Formate

### Dokumente

- **PDF**: `.pdf` - Portable Document Format (mit Vorschau)
- **Word**: `.doc`, `.docx` - Microsoft Word Dokumente
- **Excel**: `.xls`, `.xlsx` - Microsoft Excel Tabellen
- **PowerPoint**: `.ppt`, `.pptx` - Präsentationen
- **LibreOffice**: `.odt`, `.ods`, `.odp` - Open Document Format

### Bilder

- **JPG/JPEG**: `.jpg`, `.jpeg` - Komprimierte Bilder (mit Vorschau)
- **PNG**: `.png` - Verlustfreie Bilder (mit Vorschau)
- **GIF**: `.gif` - Animierte Grafiken (mit Vorschau)
- **SVG**: `.svg` - Vektorgrafiken
- **WebP**: `.webp` - Modernes Bildformat

### Text und Code

- **Text**: `.txt` - Einfache Textdateien
- **Markdown**: `.md` - Markdown-Dokumente
- **Code**: `.py`, `.js`, `.html`, `.css`, `.json`, `.xml` - Source Code Dateien
- **CSV**: `.csv` - Kommagetrennte Werte

### Archive und Andere

- **ZIP**: `.zip` - Komprimierte Archive
- **TAR**: `.tar`, `.tar.gz`, `.tgz` - Unix Archive
- **Log**: `.log` - Log-Dateien
- **Andere**: Grundsätzlich alle Formate erlaubt

## Datei-Details bearbeiten

### Metadaten anpassen

Jede hochgeladene Datei hat bearbeitbare Metadaten:

1. Klicke auf das **Bearbeiten-Symbol** (Stift) neben der Datei
2. Passe die Informationen an:
   - **Titel**: Beschreibender Name (bearbeitbar, unabhängig vom Dateinamen)
   - **Beschreibung**: Optionale Notizen zur Datei
   - **Tags**: Kategorisierung (wenn konfiguriert)
3. Klicke auf **"Speichern"**

### Angezeigte Informationen

Für jede Datei werden folgende Informationen angezeigt:

| Information | Beschreibung | Bearbeitbar |
|-------------|--------------|-------------|
| **Titel** | Anzeigename der Datei | ✅ Ja |
| **Dateiname** | Original-Dateiname beim Upload | ❌ Nein |
| **Dateigrösse** | In KB/MB/GB | ❌ Nein (automatisch) |
| **Format** | Dateiendung/MIME-Type | ❌ Nein (automatisch) |
| **Upload-Datum** | Zeitstempel des Uploads | ❌ Nein (automatisch) |
| **Hochgeladen von** | Benutzer der die Datei hochgeladen hat | ❌ Nein |
| **Downloads** | Anzahl Downloads (optional) | ❌ Nein (automatisch) |
| **Beschreibung** | Freitext-Notiz | ✅ Ja |

### Titel vs. Dateiname

**Wichtig**: Unterscheide zwischen Titel und Dateiname:

- **Dateiname**: Bleibt immer der Original-Dateiname vom Upload (z.B. `Konzept_v3_final_final2.docx`)
- **Titel**: Kann bearbeitet werden für bessere Lesbarkeit (z.B. "Projektkonzept Version 3")
- **Anzeige**: In der Liste wird primär der Titel angezeigt, Dateiname als Zusatzinfo

**Best Practice**: Nutze den Titel für strukturierte, lesbare Namen - lass den Dateinamen unverändert für technische Referenz.

## Datei-Vorschau

### PDF-Vorschau

PDF-Dateien haben eine integrierte Vorschau:

- **Inline-Anzeige**: Klick auf Datei öffnet PDF im Browser
- **Navigation**: Blättere durch Seiten mit Pfeiltasten
- **Zoom**: Vergrössern/Verkleinern möglich
- **Download**: Zusätzlicher Download-Button verfügbar
- **Drucken**: Direkt aus Vorschau druckbar

### Bild-Vorschau

Bilder (JPG, PNG, GIF, WebP) werden automatisch in Vorschau angezeigt:

- **Thumbnail**: Kleine Vorschau in der Dateiliste
- **Lightbox**: Klick öffnet vergrösserte Ansicht
- **Zoom**: Bild in voller Auflösung anzeigbar
- **EXIF-Daten**: Metadaten wie Kamera, Datum, GPS (bei Fotos)

### Andere Formate

Formate ohne integrierte Vorschau:

- **Download-Button**: Datei herunterladen zum Öffnen
- **Icon**: Format-spezifisches Icon zur Erkennung
- **Grösse**: Dateigrösse wird angezeigt
- **Externes Öffnen**: Mit lokalen Programmen öffnen

## Dateien verwalten

### Datei umbenennen

1. Klicke auf das **Bearbeiten-Symbol** (Stift)
2. Ändere den **Titel** (nicht Dateiname!)
3. Speichere die Änderungen
4. **Hinweis**: Original-Dateiname bleibt unverändert (für Download)

### Datei löschen

1. Klicke auf das **Löschen-Symbol** (Papierkorb) neben der Datei
2. Bestätige den Löschvorgang
3. **Achtung**: Gelöschte Dateien sind unwiderruflich entfernt

**Berechtigung**: Nur Projekt-Admins und der Uploader selbst können Dateien löschen.

### Datei herunterladen

- **Einzeln**: Klick auf Download-Button neben der Datei
- **Mehrfach**: Wähle mehrere Dateien aus (Checkboxen) und nutze Batch-Download
- **Dateiname**: Download verwendet den Original-Dateinamen

### Dateien sortieren

Die Dateiliste kann nach verschiedenen Kriterien sortiert werden:

- **Name** (alphabetisch)
- **Upload-Datum** (neueste zuerst/zuletzt)
- **Dateigrösse** (grösste/kleinste)
- **Format** (gruppiert nach Dateiendung)
- **Uploader** (gruppiert nach Benutzer)

### Dateien filtern

Nutze die Filter-Funktionen für grosse Dateisammlungen:

- **Format-Filter**: Zeige nur PDFs, nur Bilder, etc.
- **Datums-Filter**: Zeige Dateien aus bestimmtem Zeitraum
- **Benutzer-Filter**: Zeige nur Dateien eines bestimmten Uploaders
- **Volltext-Suche**: Suche nach Dateinamen oder Titeln

## Berechtigungen

### Zugriffsrechte

Datei-Zugriff folgt den Projekt-Berechtigungen:

| Rolle | Ansehen | Upload | Bearbeiten | Löschen |
|-------|---------|--------|------------|---------|
| **Federführung** | ✅ | ✅ | ✅ | ✅ |
| **Projekt-Admin** | ✅ | ✅ | ✅ | ✅ |
| **Contributor** | ✅ | ✅ | ✅ Eigene | ✅ Eigene |
| **Mitwirkende** | ✅ | ✅ | ✅ Eigene | ✅ Eigene |
| **Externe Viewer** | ✅ | ❌ | ❌ | ❌ |

**Eigene**: Benutzer kann nur seine eigenen hochgeladenen Dateien bearbeiten/löschen.

### Sichtbarkeit

- **Projekt-Mitglieder**: Sehen alle Projekt-Dateien
- **Nicht-Mitglieder**: Kein Zugriff (ausser bei öffentlichen Projekten)
- **Externe Links**: Optional können Download-Links für Externe generiert werden
- **Orgunit-Zugriff**: Orgunit-Mitglieder sehen Dateien gemäss Projekt-Sichtbarkeit

### Audit-Log

Alle Datei-Aktivitäten werden protokolliert:

- **Upload**: Wer hat welche Datei wann hochgeladen
- **Download**: Wer hat welche Datei wann heruntergeladen (optional aktivierbar)
- **Löschen**: Wer hat welche Datei wann gelöscht
- **Bearbeiten**: Wer hat Metadaten geändert

**Zugriff**: Projekt-Admins können Audit-Log im Tab "Aktivitäten" einsehen.

## Integration mit anderen Modulen

### DMS-Verlinkung

Verknüpfe Projekt-Dateien mit offiziellen DMS-Dokumenten:

1. Öffne DMS-Dokument
2. Im Feld **"Verknüpfte Projekt-Dateien"** wähle Dateien aus
3. Speichere das Dokument
4. **Vorteil**: Zusammenhang zwischen formellem Dokument und Arbeitsdateien hergestellt

### Aufgaben-Anhänge

Hänge Dateien an Projektaufgaben an:

1. Erstelle/Öffne Aufgabe im Projekt
2. Lade Dateien direkt bei der Aufgabe hoch
3. **Alternativ**: Verlinke bereits hochgeladene Projekt-Dateien
4. **Vorteil**: Kontextuelle Zuordnung von Dateien zu Aufgaben

### Meilenstein-Dokumentation

Dokumentiere Meilenstein-Abnahmen mit Dateien:

1. Öffne Meilenstein in Projekt
2. Verlinke relevante Abnahme-Dokumente, Screenshots, Protokolle
3. **Verwendung**: Bei Meilenstein-Review sind alle Nachweise direkt verfügbar

### Zeiterfassung

Zeitbuchungen können auf Dateien referenzieren:

- **Kommentar**: "Arbeit an Konzept_v3.docx"
- **Verlinkung**: Direkte Verlinkung zu Datei im Timetracker (optional)
- **Nachvollziehbarkeit**: Klarer Zusammenhang zwischen Zeitaufwand und Arbeitsergebnis

## Praktische Beispiele

### Beispiel 1: Website-Projekt mit Design-Iterationen

**Szenario**: Webdesign-Projekt mit mehreren Design-Runden und Feedback-Schleifen.

**Dateistruktur**:

| Datei | Titel | Beschreibung | Upload-Datum | Uploader |
|-------|-------|--------------|--------------|----------|
| `mockup_v1.png` | Erstes Design-Mockup | Initiales Konzept für Diskussion | 01.02.2025 | Designer |
| `mockup_v1_feedback.pdf` | Kundenfeedback Design v1 | Kommentare und Änderungswünsche | 05.02.2025 | Projektleiter |
| `mockup_v2.png` | Überarbeitetes Design | Nach Kundenfeedback angepasst | 08.02.2025 | Designer |
| `mockup_v2_approved.pdf` | Abnahmeprotokoll | Schriftliche Freigabe durch Kunde | 12.02.2025 | Kunde |
| `logo_variants.zip` | Logo-Varianten | 5 verschiedene Logo-Versionen | 15.02.2025 | Designer |
| `styleguide.pdf` | Corporate Design Guide | Finale Design-Richtlinien | 20.02.2025 | Designer |

**Workflow**:

1. Designer lädt initiales Mockup hoch
2. Team diskutiert intern, fügt Kommentare hinzu
3. Kundenpräsentation: Kunde lädt Feedback-PDF hoch
4. Designer überarbeitet, lädt v2 hoch
5. Kunde lädt Abnahmeprotokoll hoch → Meilenstein "Design approved" wird erreicht
6. Weitere Assets (Logo, Styleguide) werden hinzugefügt

**Vorteile**:
- ✅ Vollständige Design-Historie nachvollziehbar
- ✅ Feedback-Dokumente direkt beim Design gespeichert
- ✅ Klare Versionierung im Dateinamen
- ✅ Abnahme-Dokumente als Nachweis verfügbar

### Beispiel 2: Agiles Software-Projekt mit Sprint-Artefakten

**Szenario**: Agiles Entwicklungsprojekt mit 2-Wochen-Sprints, technische Dokumente und Sprint-Reviews.

**Dateistruktur pro Sprint**:

**Sprint 1 (KW 5-6):**

| Datei | Titel | Verwendung | Uploader |
|-------|-------|------------|----------|
| `sprint1_backlog.xlsx` | Sprint 1 Backlog | Geplante User Stories und Tasks | Product Owner |
| `sprint1_burndown.png` | Sprint 1 Burndown Chart | Fortschrittsdiagramm | Scrum Master |
| `architecture_diagram.png` | System-Architektur v1 | Technische Übersicht | Tech Lead |
| `sprint1_review_notes.md` | Sprint Review Notizen | Feedback und Learnings | Scrum Master |
| `sprint1_demo_video.mp4` | Sprint Demo Recording | Aufzeichnung der Demo | Entwickler |

**Sprint 2 (KW 7-8):**

| Datei | Titel | Verwendung | Uploader |
|-------|-------|------------|----------|
| `sprint2_backlog.xlsx` | Sprint 2 Backlog | Angepasste Planung nach Sprint 1 | Product Owner |
| `api_documentation_v1.pdf` | API Dokumentation | Erste Version der REST API Docs | Entwickler |
| `bug_analysis_auth.xlsx` | Bug-Analyse: Auth-System | Aufgetretene Bugs und Fixes | QA Engineer |
| `sprint2_retrospective.md` | Sprint Retrospektive | Was lief gut/schlecht | Scrum Master |

**Best Practices angewendet**:
- 🗂️ Klare Namenskonvention: `sprint{nr}_{typ}`
- 📅 Chronologische Nachvollziehbarkeit
- 👥 Verschiedene Team-Mitglieder laden relevante Dateien hoch
- 📊 Kombination von Planungs-, Entwicklungs- und Review-Dokumenten
- 🔗 Verlinkung zu Sprint-Meilensteinen

### Beispiel 3: Compliance-Projekt mit Audit-Dokumentation

**Szenario**: ISO 9001 Zertifizierungsprojekt mit Audit-Vorbereitung und Nachweisdokumenten.

**Dateistruktur**:

| Kategorie | Dateien | Zweck |
|-----------|---------|-------|
| **Vorbereitung** | `audit_checklist.xlsx`, `gap_analysis.pdf`, `training_plan.docx` | Audit-Vorbereitung und Lückenanalyse |
| **Prozesse** | `prozess_01_vertrieb.pdf`, `prozess_02_entwicklung.pdf`, `prozess_03_qualitaet.pdf` | Exportierte Prozessdokumentationen aus BPMN |
| **Nachweise** | `schulungsnachweis_team.xlsx`, `kalibrierungszertifikat.pdf`, `messgeraete_liste.xlsx` | Compliance-Nachweise |
| **Audit-Tag** | `audit_protocol_tag1.pdf`, `audit_findings.xlsx`, `nonconformities.pdf` | Audit-Ergebnisse und Feststellungen |
| **Nachbearbeitung** | `corrective_actions.xlsx`, `followup_audit_plan.pdf` | Massnahmenplan und Follow-Up |

**Workflow**:

1. **Phase 1: Vorbereitung (4 Wochen vorher)**
   - Gap-Analyse hochladen
   - Checkliste für fehlendes Material erstellen
   - Trainingspläne dokumentieren

2. **Phase 2: Dokumentation (2 Wochen vorher)**
   - Alle Prozesse als PDF exportieren und hochladen
   - Nachweise sammeln (Schulungen, Zertifikate, Listen)
   - Review durch Qualitätsmanager

3. **Phase 3: Audit-Tag**
   - Auditor lädt Protokolle und Findings hoch
   - Nonconformities werden dokumentiert
   - Sofortige Verfügbarkeit für alle Beteiligten

4. **Phase 4: Nachbearbeitung**
   - Corrective Actions in Excel tracken
   - Verknüpfung mit SWOT-Massnahmen im System
   - Follow-Up Audit planen

**Vorteile**:
- 📁 Zentrale Ablage aller Audit-relevanten Dokumente
- 🔍 Auditor hat direkten Zugriff (kann als externer Viewer hinzugefügt werden)
- ✅ Lückenlose Dokumentation des Audit-Prozesses
- 🔗 Integration mit DMS für offizielle, freigegebene Dokumente

### Beispiel 4: Marketing-Kampagne mit Multi-Media-Assets

**Szenario**: Produktlaunch mit Website, Social Media, Print-Materialien.

**Dateistruktur nach Asset-Typen**:

**Bilder:**
- `product_photo_high_res.jpg` (5 MB) - Hochaufgelöstes Produktfoto für Print
- `product_photo_web.jpg` (200 KB) - Optimiert für Website
- `product_photo_social.jpg` (100 KB) - Quadratisch für Instagram
- `team_photo.jpg` - Team-Foto für About-Seite

**Designs:**
- `flyer_draft_v1.pdf` - Erster Flyer-Entwurf
- `flyer_final_print.pdf` - Druck-ready Flyer (CMYK)
- `banner_designs.zip` - Web-Banner in verschiedenen Grössen
- `social_media_templates.zip` - Canva/Figma Templates

**Texte:**
- `produktbeschreibung_lang.docx` - Ausführliche Beschreibung
- `produktbeschreibung_kurz.txt` - Für Social Media Posts
- `pressemitteilung.docx` - Offizielle Pressemitteilung
- `seo_keywords.xlsx` - Keyword-Recherche

**Videos:**
- `produktvideo_60s.mp4` - 60-Sekunden Produktvideo
- `produktvideo_15s.mp4` - Kurz-Version für Social Media
- `behind_the_scenes.mp4` - Making-of Video

**Organisation**:
- Verwende **Titel-Feld** für strukturierte Namen: "Produktfoto - High Res (Print)"
- Füge **Tags** hinzu: #social, #print, #web
- **Beschreibung**: Verwendungszweck und Freigabe-Status vermerken

## Best Practices

### Dateinamen-Konvention

✅ **Empfohlen:**
- `konzept_projektname_v2_20250202.pdf` - Datum und Version im Namen
- `screenshot_fehler_loginseite_20250202.png` - Beschreibend mit Kontext
- `rechnung_lieferant_jan2025.pdf` - Zeitbezug im Namen

❌ **Vermeiden:**
- `dokument.pdf` - Zu generisch
- `final_final_wirklich_final.docx` - Unklare Versionierung
- `20250202_135422_IMG.jpg` - Kryptisch ohne Kontext

**Tipps:**
- Nutze Unterstriche statt Leerzeichen: `mein_dokument.pdf` statt `mein dokument.pdf`
- Vermeide Sonderzeichen: `ä`, `ö`, `ü`, `é` → verwende `ae`, `oe`, `ue`, `e`
- Datum im ISO-Format: `YYYYMMDD` oder `YYYY-MM-DD`

### Versionierung

Drei Ansätze für Versionierung:

**1. Dateiname-Versionierung** (einfach):
```text
konzept_v1.pdf
konzept_v2.pdf
konzept_v3.pdf
konzept_v3_final.pdf
```

**2. Titel-Versionierung** (übersichtlich):
- Dateiname: `konzept.pdf`
- Titel: "Projektkonzept - Version 3 (finale Version)"
- Vorteil: Download immer gleicher Dateiname, Version in Metadaten

**3. DMS-Integration** (professionell):
- Initiale Versionen als Projekt-Dateien
- Finale Version ins DMS mit vollem Versionierungs-Workflow
- Verknüpfung zwischen DMS-Dokument und Projekt-Dateien

**Empfehlung**: Für Arbeitsdokumente nutze Ansatz 1 oder 2. Für offizielle Dokumente wechsle zu DMS (Ansatz 3).

### Aufräumen und Archivieren

**Regelmässig aufräumen** (z.B. am Projektende):

1. **Alte Versionen löschen**: Behalte nur finale Versionen
2. **Duplikate entfernen**: Gleiche Datei mehrfach hochgeladen?
3. **Wichtiges ins DMS**: Offizielle Dokumente ins DMS migrieren
4. **Temporäres löschen**: Screenshots, Notizen, Zwischenstände
5. **Archiv-Ordner**: Nutze Titel-Präfix wie "[ARCHIV]" für alte aber aufzubewahrende Dateien

**Zeitpunkte für Aufräumen**:
- Nach Meilenstein-Abschluss
- Am Ende einer Projektphase
- Vor wichtigen Reviews oder Audits
- Bei Projektabschluss

**Archivierungs-Strategie**:
```text
WÄHREND Projekt:
├── Aktive Arbeitsdateien (50+ Dateien)
└── Temporäre Dateien

NACH Projektphase:
├── Finale Version (5-10 wichtige Dateien)
├── [ARCHIV] Alte Versionen (10-20 Dateien)
└── Temporäre gelöscht

NACH Projekt-Abschluss:
├── Offizielle Dokumente → DMS migriert
├── Finale Projekt-Dateien (3-5 wichtige Dateien)
└── Rest gelöscht oder archiviert
```

### Organisation grosser Dateisammlungen

Für Projekte mit 50+ Dateien:

**1. Namenskonvention mit Präfixen:**
```text
01_Konzeption_ideenskizze.pdf
01_Konzeption_wireframes.pdf
02_Design_mockup_v1.png
02_Design_mockup_v2.png
03_Entwicklung_api_docs.pdf
03_Entwicklung_testprotokoll.xlsx
```

**2. Nutzung von Titel-Kategorien:**
- Titel: `[Konzeption] Ideenskizze`
- Titel: `[Design] Mockup Version 2`
- Titel: `[Entwicklung] API Dokumentation`
- Vorteil: Sortierung nach Kategorie, einfache Filterung

**3. Beschreibung sinnvoll nutzen:**
```text
Datei: screenshot_loginproblem.png
Titel: Screenshot: Login-Problem auf Mobile
Beschreibung: Bug tritt nur auf iOS Safari auf. Betrifft Ticket #245.
              Reproduktion: Nach Passwort-Reset auf iPhone 12 getestet.
```

**4. Verknüpfung mit Projektstruktur:**
- Phase "Konzeption" → Alle Konzept-Dateien
- Phase "Umsetzung" → Alle Entwicklungs-Dateien
- Phase "Testing" → Alle Test-Dokumente
- Meilenstein "Design-Freeze" → Finale Design-Dateien

### Sicherheit und Datenschutz

⚠️ **Wichtige Sicherheitshinweise:**

**Niemals hochladen:**
- ❌ Passwörter oder Zugangsdaten (auch nicht in Dokumen)
- ❌ Personenbezogene Daten ohne Berechtigung (DSGVO!)
- ❌ Vertrauliche Kundendaten ohne Verschlüsselung
- ❌ Source Code mit Secrets/API-Keys
- ❌ Unternehmenskritische Informationen in öffentlichen Projekten

**Vor Upload prüfen:**
- ✅ Sind sensible Daten im Dokument? → Schwärzen oder entfernen
- ✅ Sind Projekt-Berechtigungen korrekt konfiguriert?
- ✅ Ist Dateigrösse angemessen? (grosse Dateien langsam)
- ✅ Ist Format für alle Projektmitglieder öffenbar?

**Bei vertraulichen Dokumenten:**
- Verwende verschlüsselte PDFs (mit Passwort)
- Lade Passwort separat über sicheren Kanal (nicht im Projekt-Chat!)
- Alternativ: Nutze DMS mit eingeschränkten Berechtigungen
- Erwäge externe sichere File-Sharing-Dienste für höchste Vertraulichkeit

### Performance-Tipps

**Grosse Dateien handhaben:**

| Dateigrösse | Empfehlung |
|-------------|------------|
| < 1 MB | Kein Problem, beliebig hochladen |
| 1-10 MB | Problemlos, auch Batch-Upload möglich |
| 10-50 MB | Einzeln hochladen, Upload kann dauern |
| 50-100 MB | Nur einzeln, eventuell komprimieren |
| > 100 MB | Nicht empfohlen, nutze externe Dienste (WeTransfer, Dropbox) |

**Bilder komprimieren:**
- **Vor Upload**: Nutze Tools wie TinyPNG, ImageOptim
- **Web-Bilder**: Exportiere in Web-Qualität (70-80% JPEG-Qualität)
- **Screenshots**: PNG nur wenn nötig, sonst JPEG
- **Fotos**: Skaliere auf max. 2000px Breite für Web-Verwendung

**Videos komprimieren:**
- Nutze H.264 Codec (beste Kompatibilität)
- Auflösung: 1080p für wichtige Videos, 720p für Reviews
- Bitrate reduzieren mit HandBrake oder ähnlichen Tools
- Erwäge Vimeo/YouTube Upload und nur Link im Projekt

## Häufige Fragen (FAQ)

**Q: Kann ich ganze Ordner hochladen?**
A: Nein, nur einzelne Dateien. Packe Ordner als ZIP und lade das ZIP hoch.

**Q: Werden Dateien bei Projekt-Abschluss gelöscht?**
A: Nein, Dateien bleiben erhalten. Projekt-Status beeinflusst Dateien nicht.

**Q: Kann ich Dateien zwischen Projekten verschieben?**
A: Nein, direkt nicht möglich. Du musst Datei herunterladen und im anderen Projekt neu hochladen.

**Q: Gibt es eine Versionierung wie im DMS?**
A: Nein, Projekt-Dateien haben keine automatische Versionierung. Nutze DMS für versionierte Dokumente.

**Q: Kann ich Dateien für Externe freigeben?**
A: Ja, über "Externer Link generieren" (falls aktiviert). Oder füge Externe als "Externe Viewer" zum Projekt hinzu.

**Q: Werden gelöschte Dateien irgendwo archiviert?**
A: Nein, Löschen ist endgültig. Überlege vor dem Löschen gut!

**Q: Kann ich Office-Dateien direkt im Browser bearbeiten?**
A: Nur wenn WOPI-Integration (Office 365) konfiguriert ist. Sonst: Download → Bearbeiten → Neu hochladen.

**Q: Wie finde ich eine bestimmte Datei in grossen Projekten?**
A: Nutze die Suchfunktion oder Filter nach Format, Uploader, Datum.

## Zusammenfassung

Mit der Dateiverwaltung in ELIZA Projekten hast du alle projektrelevanten Dokumente zentral verfügbar:

✅ **Upload**: Lade Dateien einzeln oder per Batch hoch, Drag & Drop möglich
✅ **Formate**: Alle gängigen Formate unterstützt (PDF, Office, Bilder, etc.)
✅ **Vorschau**: PDFs und Bilder direkt im Browser ansehbar
✅ **Organisation**: Titel, Beschreibung, Tags für strukturierte Ablage
✅ **Berechtigungen**: Zugriffsrechte folgen Projekt-Rollen
✅ **Integration**: Verknüpfung mit DMS, Aufgaben, Meilensteinen
✅ **Best Practices**: Namenskonventionen, Versionierung, Aufräumen

**Wann verwende ich was?**

- **Projekt-Dateiverwaltung**: Arbeitsdokumente, Entwürfe, temporäre Dateien, Screenshots
- **DMS**: Offizielle Dokumente mit Workflow, Versionierung, Freigabe-Prozess

**Nächste Schritte:**

- [Berechtigungskonzept]({{< ref "11-berechtigungskonzept" >}}) für Zugriffskontrolle
- [Integrationen]({{< ref "12-integrationen" >}}) für DMS und externe Systeme
- [Meilensteine]({{< ref "08-meilensteine" >}}) für Abnahme-Dokumentation
- [Team-Verwaltung]({{< ref "06-team-verwaltung" >}}) für Berechtigungskonzepte
