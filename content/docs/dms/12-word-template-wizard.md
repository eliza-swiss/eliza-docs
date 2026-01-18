---
title: "Word-Vorlage erstellen mit dem Wizard"
description: ""
weight: "12"
tags:
  - "word"
  - "vorlage"
  - "wizard"
  - "template"
  - "kopfzeile"
  - "fusszeile"
  - "iso9001"
---


# 12. Word-Vorlage erstellen mit dem Wizard

Der Word Template Wizard führt dich in 5 einfachen Schritten zur Erstellung professioneller Word-Vorlagen. Du kannst Kopf- und Fusszeilen konfigurieren, Schriftarten und Farben anpassen und das Ergebnis als DMS-Vorlage speichern.

https://app.arcade.software/share/8gt1CMn4gvgF9jPTl3b1

## Übersicht

### Was ist der Word Template Wizard?

Der Wizard ist ein Assistent zur Erstellung von Word-Dokumentvorlagen (.docx), die du anschliessend im DMS für neue Dokumente verwenden kannst. Die erstellten Vorlagen enthalten:

- **Firmenlogo** in konfigurierbarer Grösse
- **Professionelle Kopfzeilen** mit verschiedenen Layouts
- **Fusszeilen** mit automatischen Platzhaltern (Titel, Version, Seitenzahl)
- **Einheitliche Schriftarten und Farben** für Überschriften und Text

### Zugriff

**DMS → Vorlagen → Button "Word-Vorlage erstellen"**

Der grüne Button mit dem Zauberstab-Icon findest du rechts oben in der Vorlagen-Übersicht.

> **💡 Tipp:** Du benötigst die Berechtigung zum Erstellen von DMS-Vorlagen.

---

## Die 5 Wizard-Schritte

### Schritt 1: Logo prüfen

Im ersten Schritt prüfst du, ob ein Firmenlogo vorhanden ist und konfigurierst dessen Grösse.

#### Logo-Status

- **Logo vorhanden** (grüner Hinweis): Das konfigurierte Firmenlogo wird angezeigt und kann direkt verwendet werden.
- **Kein Logo konfiguriert** (oranger Hinweis): Du kannst ein Logo hochladen oder ohne Logo fortfahren.

#### Neues Logo hochladen

Falls du ein neues Logo verwenden möchtest:

1. Aktiviere die Checkbox **"Neues Logo hochladen"**
2. Klicke auf den Upload-Button und wähle eine Datei
3. Erlaubte Formate: **PNG** oder **JPG**
4. Maximale Dateigrösse: **5 MB**
5. Empfohlene Auflösung: 300x100 Pixel

#### Logo-Dimensionen

Lege fest, wie gross das Logo im Word-Dokument erscheinen soll:

- **Breite (mm)**: Standardwert 30 mm, Bereich 5-100 mm
- **Höhe (mm)**: Wird automatisch berechnet basierend auf dem Seitenverhältnis

> **💡 Tipp:** Wenn du die Breite änderst, passt sich die Höhe automatisch an, um das Seitenverhältnis beizubehalten. Das funktioniert auch umgekehrt.

> **⚠️ Wichtig:** Die Logo-Dimensionen gelten für alle Vorlagen, die das Firmenlogo verwenden.

#### Weiter zum nächsten Schritt

Klicke auf **"Weiter"**, um zu Schritt 2 zu gelangen.

---

### Schritt 2: Kopfzeilen-Design

Im zweiten Schritt wählst du das Layout für die Kopfzeile deiner Vorlage.

#### Verfügbare Header-Layouts

| Layout | Beschreibung |
|--------|--------------|
| **Logo links, Titel rechts** | Klassisches Layout mit Logo auf der linken Seite und Dokumenttitel rechts |
| **Logo zentriert** | Das Logo erscheint mittig in der Kopfzeile |
| **Logo rechts, Titel links** | Gespiegeltes Layout mit Titel links und Logo rechts |
| **Nur Titel** | Kein Logo, nur der Dokumenttitel in der Kopfzeile |
| **Logo mit Tabelle** | Strukturiertes Layout mit Logo und Tabelle für Dokument-ID und Version |

#### Layout auswählen

1. Klicke auf die Vorschau-Karte des gewünschten Layouts
2. Die ausgewählte Karte wird orange umrandet
3. Die Vorschau zeigt, wie die Kopfzeile aussehen wird

#### Zusätzliche Optionen

- **Dokument-ID im Header anzeigen**: Zeigt die Dokumenten-Kennung (z.B. "AA-001") in der Kopfzeile
- **Versionsnummer im Header anzeigen**: Zeigt die aktuelle Versionsnummer an

> **💡 Tipp:** Das Layout "Logo mit Tabelle" ist ideal für gelenkte Dokumente nach ISO 9001, da es Dokument-ID und Version prominent anzeigt.

---

### Schritt 3: Fusszeilen-Design

Im dritten Schritt wählst du das Layout für die Fusszeile.

#### Verfügbare Footer-Layouts

| Layout | Beschreibung |
|--------|--------------|
| **Titel + Seitenzahl** | Dokumenttitel links, Seitenzahl rechts (Standardlayout) |
| **Volle Metadaten** | Titel, Version, Datum und Seitenzahl in einer Zeile |
| **Nur Seitenzahl** | Minimales Layout mit nur der Seitenzahl rechts |
| **Firmenname zentriert** | Organisationseinheit zentriert mit Seitenzahl |
| **ISO 9001 Gelenktes Dokument** | Vollständiges Layout für Dokumentenlenkung |

#### ISO 9001 Gelenktes Dokument

Dieses Layout ist speziell für gelenkte Dokumente nach ISO 9001 konzipiert und enthält alle erforderlichen Informationen:

**Zeile 1:**
- Dok-Nr (Dokument-ID)
- Version
- Freigabedatum

**Zeile 2:**
- Erstellt von (Autor)
- Organisationseinheit
- Seite X von Y (Gesamtseitenzahl)

> **✅ Best Practice:** Verwende das ISO 9001 Layout für alle Arbeitsanweisungen, Verfahrensanweisungen und andere QM-Dokumente.

#### Zusätzliche Optionen

- **Trennlinie über Footer anzeigen**: Fügt eine horizontale Linie zwischen Inhalt und Fusszeile ein
- **QR-Code für Dokumentvalidierung**: Platzhalter für einen QR-Code zur Dokumentprüfung

#### Verfügbare Template-Variablen

Die Fusszeilen verwenden Platzhalter, die beim Erstellen eines Dokuments automatisch ausgefüllt werden:

| Variable | Beschreibung | Beispiel |
|----------|--------------|----------|
| `{{ document_title }}` | Dokumenttitel | Arbeitsanweisung Qualitätskontrolle |
| `{{ document_id }}` | Dokument-ID | AA-QK-001 |
| `{{ document_version }}` | Versionsnummer | 1.2 |
| `{{ document_approval_date }}` | Freigabedatum | 15.03.2025 |
| `{{ document_author }}` | Autor | Max Muster |
| `{{ orgunits }}` | Organisationseinheiten | Qualitätsmanagement |

---

### Schritt 4: Seitenformat, Schriftarten und Farben

Im vierten Schritt passt du das Seitenformat und das visuelle Erscheinungsbild deiner Vorlage an.

#### Seitenausrichtung

Wähle die Ausrichtung deines Dokuments:

| Ausrichtung | Beschreibung | Verwendung |
|-------------|--------------|------------|
| **Hochformat (A4)** | 21 × 29,7 cm | Standard für die meisten Dokumente |
| **Querformat (A4)** | 29,7 × 21 cm | Ideal für breite Tabellen, Checklisten, Übersichten |

> **💡 Tipp:** Querformat eignet sich besonders für Dokumente mit vielen Spalten oder breiten Tabellen, wie Checklisten, Prüfprotokolle oder Übersichtstabellen.

#### Schriftart wählen

Wähle eine der verfügbaren Word-Schriftarten:

- **Calibri** (Standard) - Modern und gut lesbar
- **Arial** - Klassisch und universell
- **Times New Roman** - Traditionell und formal
- **Georgia** - Elegant mit Serifen
- **Verdana** - Breit und gut lesbar am Bildschirm
- **Trebuchet MS** - Modern und dynamisch
- **Cambria** - Professionell mit Serifen
- **Garamond** - Klassisch und elegant

> **💡 Tipp:** Calibri und Arial sind die am häufigsten verwendeten Schriftarten für Geschäftsdokumente.

#### Farben festlegen

- **Überschriften-Farbe**: Farbe für alle Überschriften (H1, H2, H3). Standard: ELIZA-Blau (#00A0D2)
- **Text-Farbe**: Farbe für den Fliesstext. Standard: Dunkelgrau (#333333)

Klicke auf das Farbfeld, um den Farbwähler zu öffnen und eine individuelle Farbe auszuwählen.

#### Schriftgrössen

| Element | Standard | Bereich |
|---------|----------|---------|
| Überschrift 1 (H1) | 18 pt | 10-36 pt |
| Überschrift 2 (H2) | 14 pt | 10-30 pt |
| Überschrift 3 (H3) | 12 pt | 10-26 pt |
| Fliesstext | 11 pt | 8-16 pt |

> **✅ Best Practice:** Behalte die Standardwerte bei, wenn du unsicher bist. Sie sind für professionelle Dokumente optimiert.

#### Kapitelnummerierung

Die Kapitelnummerierung wird automatisch auf alle Überschriften angewendet, die du in deinem Dokument verwendest.

**Verfügbare Nummerierungsstile:**

| Stil | H1 | H2 | H3 |
|------|-----|-----|-----|
| **Dezimal** | 1 | 1.1 | 1.1.1 |
| **Dezimal mit Punkt** | 1. | 1.1. | 1.1.1. |
| **Römisch gross** | I | I.1 | I.1.1 |
| **Römisch klein** | i | i.1 | i.1.1 |
| **Alphabetisch gross** | A | A.1 | A.1.1 |
| **Alphabetisch klein** | a | a.1 | a.1.1 |
| **Keine Nummerierung** | - | - | - |

**Optionen:**

- **Überschrift 1 nummerieren**: Hauptüberschriften erhalten eine Nummer
- **Überschrift 2 nummerieren**: Unterüberschriften erhalten eine hierarchische Nummer
- **Überschrift 3 nummerieren**: Unter-Unterüberschriften erhalten eine hierarchische Nummer
- **Nummerierung bei H1 neu starten**: Bei jeder neuen Hauptüberschrift beginnt die Zählung der Unterüberschriften wieder bei 1

> **💡 Tipp:** Der Dezimalstil (1, 1.1, 1.1.1) ist der am häufigsten verwendete Stil für technische und QM-Dokumente.

---

### Schritt 5: Vorschau und Speichern

Im letzten Schritt gibst du der Vorlage einen Namen und speicherst sie.

#### Pflichtfelder

- **Vorlagen-Titel**: Aussagekräftiger Name für die Vorlage (z.B. "Arbeitsanweisung Standard", "Verfahrensanweisung QM")

#### Optionale Felder

- **Beschreibung**: Eine kurze Beschreibung, wofür die Vorlage verwendet wird
- **Speicherort**: Ordner im DMS, in dem die Vorlage gespeichert wird

#### Vorschau prüfen

Vor dem Speichern kannst du eine Vorschau der Vorlage anzeigen:

1. Prüfe die **Kopfzeile** mit Logo und Layout
2. Prüfe die **Fusszeile** mit den gewählten Elementen
3. Prüfe die **Schriftarten und Farben**

#### Speichern

1. Klicke auf **"Vorlage speichern"**
2. Die Vorlage wird als DMS-Dokument erstellt
3. Du wirst zur Vorlagen-Übersicht weitergeleitet

> **💡 Tipp:** Du kannst die Vorlage später im DMS weiter bearbeiten und verfeinern.

---

## Praktische Anwendungsfälle

### Arbeitsanweisung für ISO 9001

**Empfohlene Einstellungen:**

1. **Logo**: Firmenlogo mit Standardgrösse
2. **Kopfzeile**: "Logo mit Tabelle" mit Dokument-ID und Version
3. **Fusszeile**: "ISO 9001 Gelenktes Dokument"
4. **Schriftart**: Calibri
5. **Überschriften-Farbe**: Firmenfarbe oder Blau
6. **Titel**: "Arbeitsanweisung [Bereich]"

### Einfache Dokumentvorlage

**Empfohlene Einstellungen:**

1. **Logo**: Firmenlogo links
2. **Kopfzeile**: "Logo links, Titel rechts"
3. **Fusszeile**: "Titel + Seitenzahl"
4. **Schriftart**: Arial
5. **Titel**: "Standardvorlage"

### Formelle Geschäftsvorlage

**Empfohlene Einstellungen:**

1. **Logo**: Firmenlogo zentriert
2. **Kopfzeile**: "Logo zentriert"
3. **Fusszeile**: "Firmenname zentriert"
4. **Schriftart**: Times New Roman oder Garamond
5. **Titel**: "Formelle Korrespondenz"

---

## Best Practices

### ✅ Empfehlungen

- **Konsistente Farben**: Verwende die Firmenfarben für ein einheitliches Erscheinungsbild
- **Lesbare Schriftgrössen**: Halte dich an die Standardwerte für optimale Lesbarkeit
- **Aussagekräftige Titel**: Gib Vorlagen Namen, die ihren Verwendungszweck klar beschreiben
- **ISO 9001 konform**: Nutze das ISO 9001 Footer-Layout für alle QM-Dokumente
- **Trennlinie**: Aktiviere die Trennlinie über dem Footer für eine klare visuelle Trennung

### ❌ Häufige Fehler vermeiden

- **Zu kleine Schriftgrössen**: Fliesstext unter 10 pt ist schwer lesbar
- **Zu grosse Logos**: Logos über 50 mm Breite können überdimensioniert wirken
- **Fehlende Metadaten**: Dokumentenlenkung erfordert mindestens Dok-Nr, Version und Datum
- **Unpassende Schriftarten**: Dekorative Schriftarten sind für Geschäftsdokumente ungeeignet

---

## Navigation im Wizard

### Vor und Zurück

- **Weiter-Button**: Speichert die Eingaben und geht zum nächsten Schritt
- **Zurück-Button**: Geht zum vorherigen Schritt (Eingaben bleiben erhalten)
- **Abbrechen-Button**: Beendet den Wizard ohne zu speichern

### Wizard-Fortschrittsanzeige

Die Fortschrittsanzeige oben zeigt:

- **Abgeschlossene Schritte**: Grüner Kreis mit Häkchen
- **Aktueller Schritt**: Oranger Kreis mit Nummer
- **Zukünftige Schritte**: Grauer Kreis mit Nummer

> **⚠️ Wichtig:** Wenn du den Wizard abbrichst, gehen alle Eingaben verloren.

---

## Häufige Fragen (FAQ)

### Kann ich eine erstellte Vorlage später bearbeiten?

Ja, die erstellte Vorlage ist ein normales DMS-Dokument und kann wie jedes andere Word-Dokument bearbeitet werden.

### Was passiert mit dem Logo, wenn ich ein neues hochlade?

Das hochgeladene Logo wird nur für diese Vorlage verwendet. Das System-Logo in den Whitelabel-Einstellungen bleibt unverändert.

### Werden die Template-Variablen automatisch ausgefüllt?

Ja, wenn du ein neues Dokument aus dieser Vorlage erstellst, werden Variablen wie `{{ document_title }}` und `{{ document_id }}` automatisch durch die tatsächlichen Werte ersetzt.

### Kann ich die Kopf- und Fusszeile später noch ändern?

Ja, du kannst die Word-Datei in Word oder einem anderen Textverarbeitungsprogramm öffnen und die Kopf- und Fusszeilen manuell anpassen.

### Welche Formate werden für das Logo unterstützt?

PNG und JPG/JPEG. PNG ist empfohlen für Logos mit transparentem Hintergrund.

### Was bedeutet "Seite X von Y"?

Dies zeigt die aktuelle Seitenzahl und die Gesamtseitenzahl des Dokuments an. Word aktualisiert diese Werte automatisch.

### Wie aktualisiere ich das Inhaltsverzeichnis?

Das Inhaltsverzeichnis wird als Word-Feld eingefügt und muss nach dem Bearbeiten des Dokuments aktualisiert werden:

1. **Rechtsklick** auf das Inhaltsverzeichnis → **"Feld aktualisieren"**
2. Oder: **Ctrl+A** (alles auswählen), dann **F9** (Felder aktualisieren)

> **💡 Tipp:** Das Inhaltsverzeichnis basiert auf den Überschriften (H1, H2, H3) in deinem Dokument. Stelle sicher, dass du die korrekten Überschriften-Formatvorlagen verwendest.

### Werden die Document Properties automatisch gesetzt?

Ja, die Vorlage enthält Template-Variablen in den Document Properties (Datei → Eigenschaften):

- **Titel**: `{{ document_title }}`
- **Autor**: `{{ document_author }}`
- **Kategorie**: Quality Management
- **Schlüsselwörter**: ELIZA, QM, Template

Diese werden beim Erstellen eines Dokuments aus der Vorlage automatisch mit den tatsächlichen Werten ersetzt.

---

## Zusammenfassung

Mit dem Word Template Wizard kannst du in 5 Schritten professionelle Dokumentvorlagen erstellen:

1. ✅ **Logo prüfen** - Logo-Status und Dimensionen konfigurieren
2. ✅ **Kopfzeile** - Eines von 5 Layouts wählen
3. ✅ **Fusszeile** - Layout mit Template-Variablen wählen
4. ✅ **Seitenformat & Styling** - Hoch-/Querformat, Schriftart, Farben und Kapitelnummerierung
5. ✅ **Speichern** - Vorlage benennen und im DMS ablegen

Die Vorlagen sind sofort einsatzbereit und können für die Erstellung neuer DMS-Dokumente verwendet werden. Sowohl Hochformat als auch Querformat werden unterstützt.

---

## Verwandte Themen

- [Excel Template-Sprache]({{< ref "11-excel-template-sprache" >}}) - Platzhalter in Excel-Vorlagen
- [Vorlagen und Template-Sprache]({{< ref "05-vorlagen" >}}) - Allgemeine Vorlagen-Dokumentation

---

**Letzte Aktualisierung:** 2025.12.07
**Autor:** ELIZA Documentation Team
