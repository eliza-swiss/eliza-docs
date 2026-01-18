---
title: "Normen verwalten"
description: ""
weight: "2"
tags:
  - "normen"
  - "standards"
  - "create"
  - "edit"
  - "kategorien"
---


# Normen verwalten

In diesem Kapitel lernst du, wie du Normen und Standards in ELIZA erstellst, bearbeitest und organisierst.

## Neue Norm erstellen

### Voraussetzungen

Um eine Norm zu erstellen, benötigst du die **standards_admin** Berechtigung.

> **💡 Tipp:** Bevor du eine neue Norm erstellst, prüfe ob sie bereits im System existiert. Verwende die Suchfunktion in der Normen-Liste.

### Schritt-für-Schritt Anleitung

**Schritt 1: Zur Normen-Übersicht navigieren**

1. Klicke in der Hauptnavigation auf **"Standards"**
2. Du befindest dich in der Normen-Liste

**Schritt 2: Neue Norm anlegen**

1. Klicke auf den grünen Button **"Hinzufügen"** (+ Symbol) oben rechts
2. Das Formular "Neue Norm" öffnet sich

**Schritt 3: Formular ausfüllen**

Fülle folgende Felder aus:

| Feld | Pflicht | Beschreibung | Beispiel |
|------|---------|--------------|----------|
| **Abkürzung** | Nein | Kurztitel der Norm | "ISO 9001" |
| **Titel** | Ja | Vollständiger Name | "ISO 9001:2015 - Qualitätsmanagement" |
| **Beschreibung** | Nein | Zweck und Anwendungsbereich | "Anforderungen an ein QM-System..." |
| **Kategorien** | Nein | Zuordnung zu Kategorien | "Qualitätsmanagement" |
| **Gültig ab** | Nein | Gültigkeitsbeginn | "01.01.2024" |
| **Gültig bis** | Nein | Ablaufdatum (optional) | "31.12.2026" |

**Feld-Details:**

**Abkürzung** (optional)
- Kurze Bezeichnung für die Norm
- Wird in Übersichten angezeigt
- Beispiele: "ISO 9001", "ISO 14001", "ISO 27001"

**Titel** (Pflichtfeld)
- Eindeutiger, vollständiger Name der Norm
- Best Practice: Verwende das offizielle Norm-Format
- Beispiele:
  - "ISO 9001:2015 - Qualitätsmanagementsysteme"
  - "ISO 14001:2015 - Umweltmanagementsysteme"
  - "Interne QM-Richtlinie 2024"

**Beschreibung** (optional, aber empfohlen)
- Zweck der Norm
- Anwendungsbereich im Unternehmen
- Besonderheiten oder Hinweise
- Unterstützt Markdown-Formatierung

**Kategorien** (optional, aber empfohlen)
- Mehrfachauswahl möglich
- Hilft bei der Organisation und Filterung
- Kategorien können unter "Kategorien" im Menü verwaltet werden

**Gültig ab / Gültig bis** (optional)
- Zeitliche Eingrenzung der Gültigkeit
- Nützlich für Übergangsphasen bei Normaktualisierungen
- "Gültig bis" muss nach "Gültig ab" liegen

> **⚠️ Wichtig:** Das System prüft automatisch, dass "Gültig bis" nach "Gültig ab" liegt.

**Schritt 4: Norm speichern**

1. Klicke auf den grünen Button **"Speichern"**
2. Du wirst zur Detailansicht der neuen Norm weitergeleitet
3. Die Norm wird mit Erfüllungsgrad 0% erstellt

**Schritt 5: Kapitel hinzufügen (optional)**

Nach dem Erstellen der Norm kannst du direkt Kapitel hinzufügen:

1. Klicke auf den grünen Button **"Kapitel"** (+ Symbol)
2. Mehr dazu in [Kapitel 3: Kapitel und Erfüllung]({{< ref "03-kapitel-erfuellung" >}})

## Norm bearbeiten

### Norm-Details ändern

**Schritt 1: Norm öffnen**

1. Navigiere zur Normen-Liste
2. Klicke auf die Norm, die du bearbeiten möchtest

**Schritt 2: Bearbeiten-Modus öffnen**

1. Klicke auf das **Stift-Symbol** (✎) oben rechts
2. Das Bearbeitungsformular öffnet sich

**Schritt 3: Änderungen vornehmen**

- Ändere die gewünschten Felder
- Alle Felder können nachträglich geändert werden

**Schritt 4: Speichern**

1. Klicke auf **"Speichern"**
2. Du wirst zur Detailansicht zurückgeleitet

> **💡 Tipp:** Änderungen werden in der Änderungshistorie protokolliert (Audit-Log).

## Kategorien verwalten

Kategorien helfen dir, Normen zu organisieren und zu filtern.

### Kategorien ansehen

1. Klicke im linken Menü auf **"Kategorien"**
2. Du siehst die Liste aller Kategorien

### Neue Kategorie erstellen

**Schritt 1: Zur Kategorien-Liste**

1. Navigiere zu **"Kategorien"** im Menü
2. Klicke auf **"Hinzufügen"** (+ Symbol)

**Schritt 2: Kategorie-Daten eingeben**

| Feld | Pflicht | Beschreibung | Beispiel |
|------|---------|--------------|----------|
| **Titel** | Ja | Name der Kategorie | "Qualitätsmanagement" |
| **Beschreibung** | Nein | Zweck der Kategorie | "Normen für QM-Systeme" |

**Schritt 3: Speichern**

1. Klicke auf **"Speichern"**
2. Die Kategorie steht nun zur Verfügung

### Kategorie einer Norm zuordnen

**Beim Erstellen:**
- Wähle im Feld "Kategorien" eine oder mehrere Kategorien

**Nachträglich:**
1. Öffne die Norm im Bearbeiten-Modus
2. Wähle im Feld "Kategorien" die gewünschten Kategorien
3. Speichere die Änderungen

> **💡 Tipp:** Eine Norm kann mehreren Kategorien zugeordnet sein (z.B. "QM" und "Umwelt" für integrierte Systeme).

### Normen nach Kategorie filtern

In der Normen-Liste:

1. Klicke auf eine Kategorie in der Sidebar
2. Es werden nur Normen dieser Kategorie angezeigt

## Dateien hochladen

Du kannst Dateien (z.B. PDF-Versionen der Norm) zu einer Norm hinzufügen.

### Einzelne Datei hochladen

**Schritt 1: Norm öffnen**

1. Navigiere zur gewünschten Norm
2. Öffne die Detailansicht

**Schritt 2: Upload-Formular anzeigen**

1. Klicke auf den grünen Button **"Datei"** (+ Symbol)
2. Das Dropzone-Feld erscheint

**Schritt 3: Datei hochladen**

Du hast zwei Möglichkeiten:

**Option A: Drag & Drop**
1. Ziehe die Datei(en) in das gelbe Dropzone-Feld
2. Der Upload startet automatisch

**Option B: Datei auswählen**
1. Klicke in das Dropzone-Feld
2. Wähle eine Datei aus dem Datei-Browser
3. Der Upload startet automatisch

**Schritt 4: Upload abschliessen**

1. Warte, bis der Upload abgeschlossen ist
2. Die Seite lädt automatisch neu
3. Die hochgeladene Datei erscheint in der Norm-Detailansicht

### Unterstützte Dateiformate

Folgende Formate werden unterstützt:

- **PDF** - Norm-Dokumente, Zertifikate
- **Word** - .doc, .docx
- **Excel** - .xls, .xlsx
- **Text** - .txt
- **Bilder** - .jpg, .png, .gif
- **ZIP** - Archivdateien

> **💡 Tipp:** Verwende aussagekräftige Dateinamen, z.B. "ISO-9001-2015-DE.pdf"

### Mehrere Dateien hochladen

Du kannst mehrere Dateien gleichzeitig hochladen:

1. Wähle mehrere Dateien im Datei-Browser
2. Oder ziehe mehrere Dateien gleichzeitig ins Dropzone-Feld
3. Alle Dateien werden nacheinander hochgeladen

### Datei-Details bearbeiten

Jede hochgeladene Datei kann Metadaten haben:

**Schritt 1: Datei öffnen**

1. Klicke in der Norm-Detailansicht auf den Dateinamen
2. Die Datei-Detailseite öffnet sich

**Schritt 2: Bearbeiten**

1. Klicke auf das Bearbeiten-Symbol
2. Du kannst folgende Felder ändern:
   - **Titel** - Anzeigename der Datei
   - **Beschreibung** - Zweck oder Inhalt

**Schritt 3: Speichern**

1. Klicke auf **"Speichern"**
2. Die Änderungen werden übernommen

### Datei löschen

**Schritt 1: Datei öffnen**

1. Navigiere zur Datei-Detailseite

**Schritt 2: Löschen**

1. Klicke auf **"Löschen"**
2. Bestätige die Sicherheitsabfrage
3. Die Datei wird endgültig gelöscht

> **⚠️ Wichtig:** Gelöschte Dateien können nicht wiederhergestellt werden!

## Normen exportieren

ELIZA bietet zwei Export-Formate für Normen:

### Word Export

Erstellt ein formatiertes Word-Dokument mit der kompletten Normstruktur.

**Schritt 1: Export starten**

1. Öffne die Norm in der Detailansicht
2. Klicke auf das **Dropdown-Menü** (⋮) oben rechts
3. Wähle **"Word Export"**

**Schritt 2: Download**

1. Das Word-Dokument wird generiert
2. Der Browser startet den Download automatisch

**Inhalt des Word-Exports:**

- Norm-Titel und Beschreibung
- Alle Kapitel hierarchisch strukturiert
- Kapitelnummern und -titel
- Beschreibungen
- Geforderte Nachweise
- Erfüllungsgrad pro Kapitel

**Verwendungszwecke:**

- Audit-Dokumentation
- Präsentationen
- Offline-Bearbeitung
- Externe Weitergabe (ohne sensible Daten)

### Excel Export

Erstellt eine Excel-Tabelle mit allen Kapiteln und deren Status.

**Schritt 1: Export starten**

1. Öffne die Norm in der Detailansicht
2. Klicke auf das **Dropdown-Menü** (⋮) oben rechts
3. Wähle **"Excel Export"**

**Schritt 2: Download**

1. Die Excel-Datei wird generiert
2. Der Browser startet den Download automatisch

**Inhalt des Excel-Exports:**

| Spalte | Inhalt |
|--------|--------|
| Nummer | Kapitelnummer |
| Titel | Kapitelbezeichnung |
| Beschreibung | Anforderung |
| Erforderlich | Ja/Nein |
| Nachweise | Geforderte Nachweise |
| Erfüllt durch | Umsetzung |
| Erfüllungsgrad | Prozent (0-100) |

**Verwendungszwecke:**

- Gap-Analysen
- Auditplanung
- Fortschrittsberichte
- Datenanalyse

> **💡 Tipp:** Der Excel-Export eignet sich gut für Pivot-Tabellen und Diagramme zur Visualisierung des Umsetzungsstands.

## Norm löschen

### Vorsichtsmassnahmen

> **⚠️ Wichtig:** Das Löschen einer Norm entfernt:
> - Die Norm selbst
> - Alle zugeordneten Kapitel
> - Alle hochgeladenen Dateien
> - Alle Verknüpfungen (nicht die verlinkten Objekte selbst)
>
> Diese Aktion kann NICHT rückgängig gemacht werden!

### Lösch-Prozess

**Schritt 1: Norm öffnen**

1. Navigiere zur Norm, die gelöscht werden soll

**Schritt 2: Löschen auswählen**

1. Klicke auf das **Dropdown-Menü** (⋮) oben rechts
2. Wähle **"Standard löschen"**

**Schritt 3: Bestätigen**

1. Eine Sicherheitsabfrage erscheint
2. Bestätige, dass du die Norm wirklich löschen möchtest
3. Klicke auf **"Ja, löschen"**

**Schritt 4: Abschluss**

1. Du wirst zur Normen-Liste zurückgeleitet
2. Die Norm ist vollständig entfernt

### Alternativen zum Löschen

Statt eine Norm zu löschen, kannst du:

**Option 1: Norm archivieren**
- Setze das "Gültig bis" Datum in die Vergangenheit
- Die Norm ist als "abgelaufen" erkennbar

**Option 2: Beschreibung anpassen**
- Füge "[VERALTET]" oder "[ARCHIV]" zum Titel hinzu
- Erkläre in der Beschreibung, warum die Norm nicht mehr aktiv ist

## Gesamtansicht nutzen

Die Gesamtansicht zeigt alle Kapitel einer Norm auf einen Blick.

### Gesamtansicht öffnen

**Schritt 1: Norm öffnen**

1. Navigiere zur gewünschten Norm

**Schritt 2: Gesamtansicht aktivieren**

1. Klicke auf das **Dashboard-Symbol** (⊞) oben rechts
2. Die Gesamtansicht lädt

### Funktionen der Gesamtansicht

**Übersicht:**
- Alle Kapitel hierarchisch dargestellt
- Erfüllungsgrad pro Kapitel sichtbar
- Geforderte Nachweise aufgelistet
- Umsetzungsbeschreibung angezeigt

**Navigation:**
- Scrolle durch alle Kapitel
- Klicke auf ein Kapitel um zur Detailansicht zu springen

**Verwendungszwecke:**
- Audit-Vorbereitung
- Vollständigkeitsprüfung
- Präsentationen
- Status-Reports

> **💡 Tipp:** Die Gesamtansicht ist ideal zum Ausdrucken für Audits. Verwende die Browser-Druckfunktion (Strg+P / Cmd+P).

## Massnahmen-Übersicht

Alle mit der Norm verknüpften Verbesserungsmassnahmen kannst du zentral einsehen.

### Massnahmen aufrufen

**Schritt 1: Zur Massnahmen-Übersicht**

1. Klicke im linken Menü auf **"Massnahmen"**
2. Du siehst alle Massnahmen aus dem Standards-Modul

**Schritt 2: Filtern**

Die Ansicht zeigt:
- Massnahmen für Normen
- Massnahmen für Kapitel
- Nur Massnahmen, für die du berechtigt bist

**Dargestellte Informationen:**

- Titel der Massnahme
- Verknüpfte Norm/Kapitel
- Verantwortliche Person
- Status
- Fälligkeitsdatum

Mehr zu Massnahmen findest du in [Kapitel 5: Integration]({{< ref "05-integration" >}}).

## Häufige Fragen

### Kann ich eine Norm duplizieren?

Aktuell gibt es keine Duplikat-Funktion. Für ähnliche Normen:

1. Erstelle eine neue Norm
2. Importiere die Kapitelstruktur (falls vorhanden)
3. Passe die Inhalte an

### Wie aktualisiere ich eine Norm bei einer neuen Version?

**Option 1: Bestehende Norm aktualisieren**
1. Ändere den Titel (z.B. von "ISO 9001:2008" zu "ISO 9001:2015")
2. Aktualisiere die Kapitel entsprechend
3. Passe Erfüllungsgrade an

**Option 2: Neue Norm erstellen**
1. Erstelle die neue Normversion als eigene Norm
2. Setze bei der alten Norm "Gültig bis"
3. Setze bei der neuen Norm "Gültig ab"

> **💡 Tipp:** Option 2 bewahrt die Historie der alten Normversion.

### Können mehrere Personen gleichzeitig eine Norm bearbeiten?

Technisch ja, aber:
- Die letzte Speicherung überschreibt vorherige Änderungen
- Empfehlung: Koordiniere dich mit Kollegen
- Nutze die Audit-Log-Funktion um Änderungen nachzuvollziehen

### Wie viele Dateien kann ich hochladen?

Es gibt keine feste Begrenzung für die Anzahl. Beachte:
- Einzeldatei-Limit: Üblicherweise 100 MB
- Empfohlen: Maximal 10-20 Dateien pro Norm
- Nutze ZIP-Archive für viele kleine Dateien

## Best Practices

### ✅ Empfohlene Vorgehensweisen

**Norm-Titel konsistent benennen**
- Verwende offizielle Norm-Bezeichnungen
- Format: "ISO XXXXX:YYYY - Deutscher Titel"
- Beispiel: "ISO 9001:2015 - Qualitätsmanagementsysteme"

**Kategorien sinnvoll nutzen**
- Erstelle Kategorien für Managementsystem-Typen
- Verwende maximal 5-7 Hauptkategorien
- Vermeide zu viele Unterkategorien

**Beschreibungen pflegen**
- Erkläre den Anwendungsbereich im Unternehmen
- Verlinke auf relevante interne Dokumente
- Halte Beschreibungen aktuell

**Gültigkeitsdaten setzen**
- Nutze "Gültig ab" für neue Normen
- Setze "Gültig bis" bei Ablösung durch neue Versionen
- Plane Übergangsphasen ein

**Dateien strukturiert benennen**
- Schema: "Normbezeichnung-Sprache-Version.pdf"
- Beispiel: "ISO-9001-2015-DE-V1.pdf"
- Vermeide Sonderzeichen im Dateinamen

**Regelmässig exportieren**
- Erstelle monatliche Backups (Excel-Export)
- Archiviere Word-Exporte vor grossen Änderungen
- Nutze Exporte für Berichte an die Geschäftsleitung

### ❌ Häufige Fehler vermeiden

**Keine inkonsistente Benennung**
- ❌ "ISO 9001", "ISO9001", "ISO-9001" gemischt
- ✅ Einheitliches Format wählen und durchziehen

**Keine Kategorien-Explosion**
- ❌ 20+ verschiedene Kategorien
- ✅ Maximal 5-7 sinnvolle Hauptkategorien

**Keine fehlenden Gültigkeitsdaten**
- ❌ Alte und neue Normversionen ohne Datumsangaben
- ✅ Klare zeitliche Abgrenzung

**Keine unleserlichen Dateien**
- ❌ "scan001.pdf", "temp.docx"
- ✅ Sprechende Dateinamen mit Kontext

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Neue Normen zu erstellen
- ✅ Normen zu bearbeiten
- ✅ Kategorien zu verwalten
- ✅ Dateien hochzuladen
- ✅ Normen zu exportieren (Word, Excel)
- ✅ Normen zu löschen (mit Vorsicht!)
- ✅ Die Gesamtansicht zu nutzen
- ✅ Massnahmen-Übersicht zu verwenden

## Nächste Schritte

Jetzt kennst du die Grundlagen der Normen-Verwaltung. Weiter geht's mit:

- [Kapitel und Erfüllung]({{< ref "03-kapitel-erfuellung" >}}) - Lerne, wie du Normkapitel strukturierst und den Erfüllungsgrad dokumentierst
- [Integration]({{< ref "05-integration" >}}) - Verknüpfe Normen mit Prozessen, Dokumenten und anderen ELIZA-Modulen
- [Best Practices]({{< ref "07-best-practices" >}}) - Profitiere von bewährten Workflows

> **💡 Tipp:** Die wahre Stärke des Moduls liegt in der Kapitel-Verwaltung und den Verknüpfungen. Diese lernst du im nächsten Kapitel kennen.
