---
title: "Vorlagen und Template-Sprache"
description: ""
weight: "5"
tags:
  - "vorlagen"
  - "templates"
  - "platzhalter"
  - "word"
  - "excel"
  - "wizard"
---


# Vorlagen und Template-Sprache

Dieses Kapitel erklärt, wie du Dokumentvorlagen erstellst und die Template-Sprache für automatische Platzhalter-Ersetzung nutzt.

## Was sind Vorlagen?

### Konzept

Vorlagen sind Basisdokumente, aus denen neue Dokumente erstellt werden können. Sie enthalten:

- **Standardisiertes Layout**: Einheitliches Erscheinungsbild
- **Platzhalter**: Variablen, die automatisch ersetzt werden
- **Formatierung**: Vorbereitete Formatvorlagen (Überschriften, Listen, etc.)

### Typische Verwendung

| Vorlage | Verwendung |
|---------|------------|
| Arbeitsanweisung | Einheitliche Struktur für alle Arbeitsanweisungen |
| Verfahrensanweisung | ISO 9001 konforme VA-Vorlage |
| Protokoll | Meeting- und Audit-Protokolle |
| Formular | Checklisten und Erfassungsformulare |
| Bericht | Standardberichte mit Logo und Footer |

---

## Vorlagen verwalten

### Vorlagen-Übersicht

**DMS → Vorlagen**

Hier siehst du alle verfügbaren Dokumentvorlagen.

### Dokument als Vorlage markieren

**Methode 1: Beim Erstellen**
1. Erstelle ein neues Dokument
2. Aktiviere die Checkbox **"Als Vorlage"**
3. Speichere

**Methode 2: Nachträglich**
1. Öffne das Dokument
2. Klicke auf **"Bearbeiten"**
3. Aktiviere **"Als Vorlage"**
4. Speichere

> **💡 Tipp:** Vorlagen sollten im Status "Freigegeben" sein, bevor sie verwendet werden.

### Vorlage entfernen

1. Öffne das Dokument
2. Bearbeite und deaktiviere **"Als Vorlage"**
3. Speichere

Das Dokument bleibt erhalten, erscheint aber nicht mehr in der Vorlagen-Übersicht.

---

## Word Template Wizard

### Überblick

Der Word Template Wizard ist ein 5-Schritte-Assistent zur Erstellung professioneller Word-Vorlagen mit:

- Firmenlogo in konfigurierbarer Grösse
- Verschiedene Kopfzeilen-Layouts
- Verschiedene Fusszeilen-Layouts (inkl. ISO 9001)
- Einheitliche Schriftarten und Farben

### Zugriff

**DMS → Vorlagen → Button "Word-Vorlage erstellen"**

### Die 5 Schritte

#### Schritt 1: Logo

- Prüfe, ob ein Firmenlogo vorhanden ist
- Lade optional ein neues Logo hoch (PNG, JPG)
- Konfiguriere die Logo-Grösse (Breite/Höhe in mm)

#### Schritt 2: Kopfzeile

Wähle ein Header-Layout:

| Layout | Beschreibung |
|--------|--------------|
| Logo links, Titel rechts | Klassisches Layout |
| Logo zentriert | Modernes, zentriertes Design |
| Logo rechts, Titel links | Gespiegeltes Layout |
| Nur Titel | Ohne Logo |
| Logo mit Tabelle | Strukturiert mit Dok-ID und Version |

#### Schritt 3: Fusszeile

Wähle ein Footer-Layout:

| Layout | Beschreibung |
|--------|--------------|
| Titel + Seitenzahl | Standard-Fusszeile |
| Volle Metadaten | Titel, Version, Datum, Seite |
| Nur Seitenzahl | Minimalistisch |
| Firmenname zentriert | Organisation in der Mitte |
| ISO 9001 Gelenktes Dokument | Vollständig für Dokumentenlenkung |

#### Schritt 4: Styling

- **Schriftart**: Calibri, Arial, Times New Roman, etc.
- **Überschriften-Farbe**: Wähle deine Firmenfarbe
- **Text-Farbe**: Standard dunkelgrau
- **Schriftgrössen**: H1, H2, H3 und Fliesstext

#### Schritt 5: Speichern

- Gib der Vorlage einen Namen
- Optional: Beschreibung und Speicherort
- Klicke auf **"Vorlage speichern"**

> **💡 Tipp:** Detaillierte Anleitung findest du unter [12. Word Template Wizard]({{< ref "12-word-template-wizard" >}})

---

## Template-Sprache

### Grundlagen

Die Template-Sprache ermöglicht das Einfügen von dynamischen Platzhaltern in Word- und Excel-Dokumenten. Beim Erstellen eines Dokuments aus der Vorlage werden diese automatisch ersetzt.

### Syntax

```
{{ variablenname }}
```

Platzhalter werden in doppelte geschweifte Klammern gesetzt.

### Verfügbare Variablen

Die Template-Sprache bietet umfangreiche Variablen für alle Dokumenteigenschaften. Alle Variablen werden automatisch beim Öffnen oder Herunterladen des Dokuments ersetzt.

#### Dokument-Grunddaten

| Variable | Beschreibung | Beispiel |
|----------|--------------|----------|
| `{{ document_id }}` | Eindeutige Dokument-ID | AA-QK-001 |
| `{{ document_title }}` | Dokumenttitel | Arbeitsanweisung Qualitätskontrolle |
| `{{ document_description }}` | Beschreibung des Dokuments | Übersicht aller QM-Prozesse |
| `{{ document_type }}` | Dokumententyp | Arbeitsanweisung |
| `{{ document_external_reference }}` | Externe Referenz (z.B. Norm) | ISO-9001-2015 |
| `{{ document_author }}` | Autor/in des Dokuments | Max Muster |
| `{{ document_url }}` | URL zum Dokument im DMS | /dms/documents/42/detail/ |
| `{{ document_size }}` | Dateigrösse in Bytes | 245760 |

#### Versionsinformationen

| Variable | Beschreibung | Beispiel |
|----------|--------------|----------|
| `{{ document_version }}` | Revisionsnummer (für Benutzer sichtbar) | 2.1 |
| `{{ document_sequence_number }}` | Interne Sequenznummer (Primärschlüssel) | 42 |
| `{{ document_version_number }}` | Gesamtzahl aller Versionen | 5 |

> **ℹ️ Hinweis:** `document_version` zeigt die benutzerfreundliche Versionsnummer (z.B. "2.1"), während `document_version_number` die technische Anzahl aller Versionen angibt.

#### Status und Workflow

| Variable | Beschreibung | Beispiel |
|----------|--------------|----------|
| `{{ document_state }}` | Aktueller Status (lokalisiert) | Freigegeben |
| `{{ document_approval_date }}` | Datum der letzten Freigabe | 15.03.2025 |
| `{{ document_modification_date }}` | Datum der letzten Änderung | 14.03.2025 |
| `{{ document_creation_date }}` | Erstellungsdatum | 01.01.2025 |

**Mögliche Status-Werte:**
- Entwurf
- In Prüfung
- Geprüft
- Freigegeben
- Veraltet
- Archiviert

#### Gültigkeitsdaten

| Variable | Beschreibung | Beispiel |
|----------|--------------|----------|
| `{{ document_valid_from }}` | Gültig ab | 01.04.2025 |
| `{{ document_valid_to }}` | Gültig bis | 31.03.2026 |
| `{{ document_next_review }}` | Nächste Prüfung fällig | 01.03.2026 |

> **⚠️ Wichtig:** Wenn kein Datum hinterlegt ist, bleibt die Variable leer.

#### Verantwortlichkeiten und Funktionen

| Variable | Beschreibung | Beispiel |
|----------|--------------|----------|
| `{{ document_function }}` | Verantwortliche Funktion | Qualitätsmanagementbeauftragter |
| `{{ document_function_code }}` | Kürzel der verantwortlichen Funktion | QMB |
| `{{ document_reviewer_function }}` | Prüfende Funktion | Technische Leitung |
| `{{ document_reviewer_function_code }}` | Kürzel der prüfenden Funktion | TL |
| `{{ document_reviewed_by }}` | Name der prüfenden Person | Anna Muster |
| `{{ document_approval_by }}` | Freigebende Funktion | QMB |
| `{{ document_approval_by_code }}` | Kürzel der freigebenden Funktion | QMB |
| `{{ document_approved_by }}` | Name der freigebenden Person | Max Mustermann |

**Unterschied zwischen den Freigabe-Variablen:**
- `document_approval_by`: Die freigebende Funktion, z.B. "QMB". Ist keine Funktion hinterlegt, steht hier der Name der Person, die freigegeben hat
- `document_approval_by_code`: Nur das Funktionskürzel, z.B. "QMB"
- `document_approved_by`: Nur der Name der Person, die das Dokument auf "Freigegeben" gesetzt hat, z.B. "Max Mustermann"
- Funktion und Person kombinierst du selbst: `{{ document_approval_by }} ({{ document_approved_by }})` ergibt "QMB (Max Mustermann)"

**Prüfende Person:**
- `document_reviewed_by` zeigt den Namen der Person, die das Dokument im Workflow auf "Geprüft" gesetzt hat, also die fachliche Prüfung. Das ist nicht unbedingt dieselbe Person wie bei `document_approved_by`
- Es zählt die Prüfung, die zur letzten Freigabe gehört. Wurde das Dokument ohne den Schritt "Geprüft" freigegeben oder nach der Prüfung zurück auf Entwurf gesetzt und ohne neue Prüfung freigegeben, bleibt die Variable leer
- Vor der ersten Freigabe zeigt die Variable die Person, die die erste Fassung geprüft hat
- Bei einer Überarbeitung (Arbeitskopie oder zurück auf Entwurf) zählt die neue Prüfung erst, wenn das Dokument wieder freigegeben ist. Bis dahin zeigt die Variable, wie Freigabedatum und Version, den Stand der letzten Freigabe
- «Erneut überprüfen» (periodische Überprüfung) ändert die Variable nicht: Sie zeigt weiterhin die Person, die den Workflow-Schritt "Geprüft" ausgeführt hat
- Eine Wiederfreigabe ändert die prüfende Person nicht
- Beispiel für die Fusszeile: `Geprüft: {{ document_reviewed_by }} | Freigegeben: {{ document_approved_by }}, {{ document_approval_date }}`

#### Organisations-Variablen

| Variable | Beschreibung | Beispiel |
|----------|--------------|----------|
| `{{ orgunits }}` | Zugeordnete Organisationseinheiten | Produktion, Qualität, Verwaltung |

> **ℹ️ Hinweis:** Mehrere Organisationseinheiten werden durch Kommas getrennt.

#### Links und mitgeltende Dokumente

| Variable | Beschreibung | Beispiel |
|----------|--------------|----------|
| `{{ applicable_documents }}` | Mitgeltende Dokumente als Text, mit Dokument-ID und Titel | HA-00412 Betriebskonzept Akutabteilung, FO-00347 Sicherheitsdispositiv |
| `{{ applicable_documents_links }}` | Dieselbe Liste, jedes Dokument als klickbarer Link (nur Word) | <u>HA-00412 Betriebskonzept Akutabteilung</u>, <u>FO-00347 Sicherheitsdispositiv</u> |
| `{{ document_link }}` | Vollständige Adresse dieses Dokuments in ELIZA (Text) | https://firma.myeliza.ch/dms/documents/42/detail/ |
| `{{ document_hyperlink }}` | Dieselbe Adresse als klickbarer Link (nur Word) | <u>https://firma.myeliza.ch/dms/documents/42/detail/</u> |

**So funktionieren die Links:**
- Die mitgeltenden Dokumente pflegst du im Dokument unter «Mitgeltende Dokumente». Es erscheinen nur aktive Dokumente, sortiert nach Dokument-ID und Titel. Dokumente ohne Dokument-ID stehen mit ihrem Titel am Schluss
- Die Links führen auf die Detailseite des Dokuments in ELIZA. Der Link bleibt gültig, wenn eine neue Fassung freigegeben wird. Ist das verknüpfte Dokument eine Arbeitskopie, führt der Link auf das Original. Auch `document_link` zeigt in einer Arbeitskopie auf das Original
- Wer einen Link anklickt, sieht das Dokument nur mit den nötigen Berechtigungen
- `…_links` und `…_hyperlink` erzeugen in Word klickbare Links in der Hyperlink-Formatierung (blau, unterstrichen), auch in Kopf- und Fusszeilen. Du schreibst sie wie alle anderen Variablen, z.B. `Mitgeltende Dokumente: {{ applicable_documents_links }}`; ELIZA ergänzt intern das `r`, das die Template-Sprache für formatierten Text braucht. Die Schreibweise `{{r applicable_documents_links }}` funktioniert ebenfalls
- Die Links übernehmen die Formatierung der Stelle, an der der Platzhalter steht (Schrift, Grösse, fett usw.), und erhalten zusätzlich Farbe und Unterstreichung. Text vor und nach dem Platzhalter behält seine Formatierung
- In Excel und in PDF-Vorlagen gibt es keine klickbaren Links: `{{ applicable_documents_links }}` setzt dort denselben Text ein wie `{{ applicable_documents }}`, `{{ document_hyperlink }}` dieselbe Adresse wie `{{ document_link }}`
- Aufgeführt werden die mitgeltenden Dokumente, die die Person lesen darf, die das Dokument zuletzt gespeichert hat (ohne gespeicherte Person: die Autorin oder der Autor). Geschützte Dokumente, die sie nicht sehen darf, erscheinen nicht. Wer das Dokument später liest, kann auf Links stossen, die er selbst nicht öffnen darf

#### Logo-Variablen (Word und Excel)

| Variable | Beschreibung | Grösse |
|----------|--------------|--------|
| `{{ system_logo }}` | Firmenlogo in Standardgrösse | Konfiguriert in Einstellungen |
| `{{ system_logo_large }}` | Firmenlogo in doppelter Grösse | 3x Standardgrösse |

> **💡 Tipp:** Die Logo-Grösse wird zentral in den ELIZA-Einstellungen unter `WHITELABEL_LOGO_WIDTH_MM` und `WHITELABEL_LOGO_HEIGHT_MM` konfiguriert.

#### QR-Code-Variablen (nur Word)

| Variable | Beschreibung | Verwendung |
|----------|--------------|------------|
| `{{ qr_code }}` | QR-Code zur aktuellen Dokumentversion | Direktlink zum Dokument |
| `{{ qr_code_url }}` | URL im QR-Code (Text) | Für manuelle Verwendung |
| `{{ qr_code_validation }}` | QR-Code zur Dokumentvalidierung | Prüft ob Version aktuell ist |
| `{{ qr_code_validation_url }}` | Validierungs-URL (Text) | Für manuelle Verwendung |

**Anwendungsfälle für QR-Codes:**

- **`{{ qr_code }}`**: Verlinkt direkt zur aktuellen Dokumentversion im DMS. Ideal für gedruckte Dokumente, damit Benutzer schnell die digitale Version finden.

- **`{{ qr_code_validation }}`**: Ermöglicht die Prüfung, ob ein gedrucktes Dokument noch aktuell ist. Beim Scannen wird angezeigt, ob die Version noch gültig ist oder ob eine neuere Version existiert.

> **✅ Best Practice:** Füge `{{ qr_code_validation }}` in die Fusszeile von ISO 9001 gelenkten Dokumenten ein. So können Mitarbeitende jederzeit prüfen, ob sie die aktuelle Version verwenden.

> **💡 Platz für QR-Code und Logo einplanen:** Beim Bearbeiten siehst du nur den kurzen Platzhalter. Erst beim Speichern setzt ELIZA die Bilder ein: das Logo in der eingestellten Höhe, den QR-Code in 2 × 2 cm. Plane diesen Platz in deiner Vorlage ein, damit die Seiten beim Bearbeiten und im gespeicherten Dokument gleich umbrechen:
>
> - Stelle den unteren Seitenrand so ein, dass die ganze Fusszeile samt QR-Code darin Platz hat. Den oberen Rand richtest du ebenso nach Kopfzeile und Logo.
> - Steht der QR-Code in einer Tabelle, gib der Zeile eine feste Höhe (Tabelleneigenschaften → Zeile → Zeilenhöhe «Genau», etwa 4 mm mehr als der QR-Code, also 2,4 cm).
> - Schiebe Text nicht mit leeren Zeilen auf die nächste Seite. Verwende einen Seitenumbruch (Ctrl+Enter).
>
> Neu erstellte Vorlagen aus dem Vorlagen-Assistenten berücksichtigen den Platz für Logo und QR-Code automatisch.

### Beispiel: Word-Vorlage

```
                    {{ company_name }}

                    {{ document_title }}

Dokument-ID:        {{ document_id }}
Version:            {{ document_version }}
Freigabe:           {{ document_approval_date }}
Verantwortlich:     {{ responsible_function }}

───────────────────────────────────────────────

1. Zweck
[Beschreibe hier den Zweck des Dokuments]

2. Geltungsbereich
[Definiere, für wen diese Anweisung gilt]

3. Durchführung
[Detaillierte Arbeitsschritte]

───────────────────────────────────────────────
Erstellt: {{ document_author }} | {{ document_approval_date }}
Seite X von Y
```

---

## Excel Template-Sprache

### Überblick

Für Excel-Vorlagen gibt es eine erweiterte Template-Sprache mit zusätzlichen Funktionen:

- Schleifen für Listen
- Bedingte Abschnitte
- Formatierungsoptionen

### Grundlegende Syntax

```excel
{{variablenname}}                  - Einfacher Platzhalter
{%for item in liste%}...{%endfor%} - Schleife
{%if bedingung%}...{%endif%}       - Bedingt
```

### Beispiel: Teilnehmerliste

```excel
| Veranstaltung: | {{event_title}}              |
| Datum:         | {{event_date}}               |
|----------------|------------------------------|
| Nr. | Name           | Unterschrift            |
|-----|----------------|-------------------------|
{%for p in participants%}
| {{loop.index}} | {{p.name}} |                   |
{%endfor%}
```

> **💡 Tipp:** Ausführliche Dokumentation unter [11. Excel Template-Sprache]({{< ref "11-excel-template-sprache" >}})

---

## Dokument aus Vorlage erstellen

### Ablauf

1. **Vorlage auswählen**
   - Gehe zu **DMS → Vorlagen**
   - Wähle die gewünschte Vorlage
   - Klicke auf **"Neues Dokument aus Vorlage"**

2. **Metadaten ausfüllen**
   - Titel eingeben
   - Ordner wählen
   - Weitere Felder ausfüllen

3. **Dokument generieren**
   - Klicke auf **"Erstellen"**
   - Platzhalter werden automatisch ersetzt
   - Neues Dokument wird erstellt

### Was wird ersetzt?

- Alle `{{ }}` Platzhalter in Word-Dokumenten
- Template-Sprache in Excel-Dokumenten
- Dateiname wird nicht verändert

### Was wird nicht ersetzt?

- Text ohne Platzhalter-Syntax
- Bilder und Grafiken
- Deaktivierte Template-Sprache (Option im Dokument)

---

## Vorlagen organisieren

### Ordnerstruktur für Vorlagen

Empfohlene Struktur:

```
DMS/
├── Vorlagen/
│   ├── Arbeitsanweisungen/
│   ├── Verfahrensanweisungen/
│   ├── Formulare/
│   ├── Protokolle/
│   └── Berichte/
```

### Namenskonvention

```
[Typ]-Vorlage-[Beschreibung]
```

**Beispiele:**
- AA-Vorlage-Standard
- VA-Vorlage-Prozessbeschreibung
- F-Vorlage-Checkliste
- P-Vorlage-Meetingprotokoll

### Versionierung von Vorlagen

Auch Vorlagen sollten versioniert werden:

- Nutze den normalen Freigabe-Workflow
- Dokumentiere Änderungen in der Beschreibung
- Erstelle Arbeitskopien für Aktualisierungen

---

## Best Practices

### ✅ Vorlagen sauber halten

- Entferne Beispielinhalte vor dem Speichern
- Behalte nur Struktur und Platzhalter
- Teste Platzhalter vor der Freigabe

### ✅ Konsistente Platzhalter

- Verwende immer die dokumentierten Variablen
- Keine Leerzeichen in Variablennamen
- Gross-/Kleinschreibung beachten

### ✅ Vorlagen testen

1. Erstelle ein Test-Dokument aus der Vorlage
2. Prüfe, ob alle Platzhalter korrekt ersetzt werden
3. Prüfe Formatierung und Layout
4. Lösche das Test-Dokument

### ✅ Dokumentation

- Beschreibe in der Vorlage, welche Platzhalter verwendet werden
- Füge Hinweise zur Verwendung hinzu
- Dokumentiere spezielle Anforderungen

---

## Häufige Fehler vermeiden

### ❌ Fehler: Falsche Platzhalter-Syntax

**Problem:** `{document_title}` statt `{{ document_title }}`

**Lösung:** Immer doppelte geschweifte Klammern mit Leerzeichen

### ❌ Fehler: Nicht vorhandene Variable

**Problem:** `{{ unbekannte_variable }}` wird nicht ersetzt

**Lösung:** Nur dokumentierte Variablen verwenden

### ❌ Fehler: Template-Sprache in normalen Dokumenten

**Problem:** `{{ }}` in Dokumenten, die keine Vorlagen sind

**Lösung:** Option "Template Sprache deaktivieren" aktivieren

### ❌ Fehler: Vorlagen ohne Freigabe

**Problem:** Vorlage wird verwendet, ist aber noch Entwurf

**Lösung:** Vorlagen immer freigeben bevor sie produktiv genutzt werden

---

## Erweiterte Funktionen

### Bedingte Abschnitte (Word)

Mit der erweiterten Syntax können bedingte Abschnitte erstellt werden:

```
{%if document_version > 1%}
Dieses Dokument wurde überarbeitet.
Vorherige Version: {{previous_version}}
{%endif%}
```

### Schleifen (Excel)

Für wiederholende Elemente:

```
{%for item in items%}
| {{item.name}} | {{item.value}} |
{%endfor%}
```

### Formatierung

Platzhalter können formatiert werden:

| Filter | Beschreibung | Beispiel |
|--------|--------------|----------|
| `upper` | Grossbuchstaben | `{{ title\|upper }}` |
| `lower` | Kleinbuchstaben | `{{ title\|lower }}` |
| `date` | Datumsformat | `{{ today\|date:"d.m.Y" }}` |

---

## Verwandte Themen

- [12. Word Template Wizard]({{< ref "12-word-template-wizard" >}}) - Detaillierte Wizard-Anleitung
- [11. Excel Template-Sprache]({{< ref "11-excel-template-sprache" >}}) - Erweiterte Excel-Funktionen

---

## Nächste Schritte

- **[Kapitel 6: Versionierung]({{< ref "06-versionierung" >}})**: Änderungen nachverfolgen
- **[Kapitel 9: Integrationen]({{< ref "09-integrationen" >}})**: Office 365 Integration

---

## Zusammenfassung

✅ Du verstehst das Konzept von Dokumentvorlagen
✅ Du kannst Dokumente als Vorlagen markieren
✅ Du kennst den Word Template Wizard
✅ Du verstehst die Template-Sprache und Platzhalter
✅ Du kannst Dokumente aus Vorlagen erstellen
✅ Du organisierst Vorlagen sinnvoll
