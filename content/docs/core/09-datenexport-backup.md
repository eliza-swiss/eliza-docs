---
title: "Datenexport und Backup"
description: ""
weight: "9"
tags:
  - "backup"
  - "export"
  - "datenexport"
  - "kündigung"
  - "datenübergabe"
---


# Datenexport und Backup

In diesem Kapitel erfährst du, wie ein vollständiges Backup aller ELIZA-Daten erstellt wird und wie du als Kunde die exportierten Daten verwenden kannst.

## 🎯 Lernziele

Nach diesem Kapitel verstehst du:

- Wann und warum ein vollständiger Datenexport erstellt wird
- Welche Daten im Backup enthalten sind
- Wie du als Kunde das Backup-Archiv öffnest und verwendest
- Welche Formate die exportierten Daten haben

## Überblick

Wenn ein Kunde seinen ELIZA-Vertrag kündigt, hat er Anspruch auf alle seine Daten. ELIZA stellt einen vollständigen Export aller Daten bereit, der dem Kunden sicher übermittelt wird.

**Was wird exportiert?**

- Alle Benutzer und Berechtigungen
- Alle Dokumente und Medien-Dateien
- Alle Prozesse und Workflows
- Alle Projekte, Aufgaben und Zeiterfassungen
- Alle Kontakte und CRM-Daten
- Alle Kennzahlen und Auswertungen
- Alle weiteren Modul-Daten

> **💡 Hinweis:** Der Datenexport enthält ALLE deine Daten in offenen, standardisierten Formaten. Du kannst diese Daten in andere Systeme importieren oder für Archivierungszwecke aufbewahren.

---

## Das Backup-Archiv öffnen

### Schritt 1: Datei herunterladen

1. Öffne den Swiss Transfer Link, den du von ELIZA erhalten hast
2. Lade die `.tgz` Datei herunter
3. Speichere die Datei an einem sicheren Ort

### Schritt 2: Archiv entpacken

**Unter Windows:**

1. Installiere ein Entpack-Programm wie [7-Zip](https://www.7-zip.org/) (kostenlos)
2. Rechtsklicke auf die `.tgz` Datei
3. Wähle **7-Zip** → **Hier entpacken**
4. Du erhältst einen `backup` Ordner mit allen Dateien

**Unter macOS:**

1. Doppelklicke auf die `.tgz` Datei
2. macOS entpackt die Datei automatisch
3. Du erhältst einen `backup` Ordner mit allen Dateien

**Unter Linux:**

```bash
tar xzf backup_beispiel_myeliza_ch_20231215.tgz
```

### Die Backup-Struktur verstehen

Nach dem Entpacken findest du folgende Struktur:

<pre>
backup/
└── beispiel-20231215-10-30/
    ├── constance.json         → Systemeinstellungen
    ├── users.json             → Benutzerkonten
    ├── groups.json            → Berechtigungsgruppen
    ├── auth.json              → Authentifizierung
    ├── mitarbeitende.json     → Mitarbeiter-Stammdaten
    ├── organisation.json      → Organisationsstruktur
    ├── dms.json               → Dokumente
    ├── prozesse.json          → Prozesse
    ├── projects.json          → Projekte
    ├── crm.json               → Kontakte
    ├── issues.json            → Massnahmen
    ├── timetracker.json       → Zeiterfassung
    ├── kpi.json               → Kennzahlen
    ├── ... weitere JSON-Dateien
    └── beispiel_media.tgz     → Alle hochgeladenen Dateien
</pre>

### JSON-Dateien öffnen und verstehen

Die exportierten Daten liegen im **JSON-Format** (JavaScript Object Notation) vor. Dies ist ein offenes, standardisiertes Format, das von vielen Programmen gelesen werden kann.

#### Mit einem Texteditor öffnen

Für eine schnelle Ansicht:

1. Öffne die `.json` Datei mit einem Texteditor:
   - **Windows**: Notepad++ (empfohlen) oder Editor
   - **macOS**: TextEdit oder Visual Studio Code
   - **Linux**: gedit oder Visual Studio Code

2. Die Daten sind hierarchisch strukturiert:

```json
[
  {
    "model": "core.user",
    "pk": 1,
    "fields": {
      "username": "max.muster",
      "email": "max.muster@beispiel.ch",
      "first_name": "Max",
      "last_name": "Muster"
    }
  }
]
```

> **💡 Tipp:** Verwende einen Editor mit JSON-Unterstützung (z.B. Notepad++, Visual Studio Code) für bessere Lesbarkeit mit Syntax-Highlighting.

#### In Excel importieren

Um die Daten in Excel zu analysieren:

**Methode 1: Power Query (Excel 2016+)**

1. Öffne Excel
2. Gehe zu **Daten** → **Daten abrufen** → **Aus Datei** → **Aus JSON**
3. Wähle die gewünschte `.json` Datei
4. Der Power Query Editor öffnet sich
5. Klicke auf **In Tabelle konvertieren**
6. Erweitere die Spalten nach Bedarf
7. Klicke auf **Schliessen & laden**

**Methode 2: Online JSON zu CSV Konverter**

1. Öffne [ConvertCSV.com](https://www.convertcsv.com/json-to-csv.htm) oder ähnliche Tools
2. Lade die JSON-Datei hoch oder kopiere den Inhalt
3. Konvertiere zu CSV
4. Öffne die CSV-Datei in Excel

#### Mit speziellen JSON-Viewern

Für grosse Dateien empfehlen wir:

- **[JSON Viewer Online](https://jsonviewer.stack.hu/)**: Kostenloser Online-Viewer
- **[Firefox](https://www.mozilla.org/)**: Hat einen eingebauten JSON-Viewer
- **[jq](https://stedolan.github.io/jq/)**: Kommandozeilen-Tool für JSON (für technisch Versierte)

### Media-Dateien extrahieren

Die Datei `[sitename]_media.tgz` enthält alle hochgeladenen Dateien:

- Dokumente (PDF, Word, Excel, etc.)
- Bilder und Fotos
- Anhänge zu E-Mails
- Prozess-Diagramme
- Alle weiteren Uploads

**Zum Entpacken:**

1. Entpacke die `.tgz` Datei wie oben beschrieben
2. Du erhältst einen `media/` Ordner
3. Die Dateien sind nach Modulen und Unterordnern organisiert

<pre>
media/
├── dms/                    → Dokumente aus dem DMS
│   ├── documents/          → Hauptdokumente
│   └── versions/           → Dokumentversionen
├── prozesse/               → Prozess-Dateien
│   └── bpmn/               → BPMN-Diagramme
├── organisation/           → Organisations-Dateien
│   └── avatars/            → Mitarbeiterfotos
└── ...
</pre>

### Was kannst du mit den Daten machen?

#### Archivierung

Bewahre die Daten für gesetzliche Aufbewahrungsfristen auf:

- **Buchhaltungsrelevante Daten**: 10 Jahre
- **Geschäftliche Korrespondenz**: 10 Jahre
- **Verträge**: Bis Ende der Vertragslaufzeit + 10 Jahre

> **💡 Tipp:** Speichere das Backup-Archiv auf einem externen Speichermedium oder in einem Cloud-Speicher.

#### Import in andere Systeme

Die JSON-Daten können in andere Systeme importiert werden:

- **CRM-Systeme**: Kontakte und Organisationen
- **Projektmanagement-Tools**: Projekte und Aufgaben
- **DMS-Systeme**: Dokumente (mit Media-Dateien)
- **ERP-Systeme**: Stammdaten

> **⚠️ Hinweis:** Der Import in andere Systeme erfordert möglicherweise Anpassungen des Datenformats. Konsultiere die Dokumentation des Zielsystems.

#### Datenanalyse

Die strukturierten JSON-Daten eignen sich für:

- Excel-Analysen und Auswertungen
- Business Intelligence Tools
- Datenbank-Importe
- Skript-basierte Verarbeitung

### Übersicht: Wichtige Dateien und deren Inhalt

| Datei | Was ist drin? | Typische Verwendung |
|-------|---------------|---------------------|
| `users.json` | Alle Benutzerkonten mit Namen und E-Mail | Benutzerliste exportieren |
| `mitarbeitende.json` | Mitarbeiter-Stammdaten | HR-Daten archivieren |
| `dms.json` | Dokumenten-Metadaten (Titel, Status, etc.) | Dokumentenverzeichnis |
| `prozesse.json` | Prozess-Definitionen und -Status | Prozess-Dokumentation |
| `projects.json` | Projekte mit Aufgaben und Status | Projektliste exportieren |
| `crm.json` | Kontakte und Organisationen | Adressbuch exportieren |
| `issues.json` | Massnahmen und Tickets | Aufgabenliste archivieren |
| `timetracker.json` | Zeiterfassungen und Abwesenheiten | Arbeitszeitdaten |
| `kpi.json` | Kennzahlen und Messwerte | Statistiken archivieren |
| `contracts.json` | Verträge und Fristen | Vertragsverwaltung |
| `[sitename]_media.tgz` | Alle Dateien (PDFs, Bilder, etc.) | Dokumente archivieren |

## Best Practices

### ✅ Empfehlungen

1. **Backup sicher aufbewahren**
   - Speichere das Archiv an mehreren Orten
   - Verwende verschlüsselte Speichermedien
   - Beachte gesetzliche Aufbewahrungsfristen

2. **Datenformat verstehen**
   - JSON ist ein offenes, zukunftssicheres Format
   - Kann auch in 10+ Jahren noch gelesen werden
   - Keine proprietären Formate

3. **Bei Bedarf Hilfe holen**
   - ELIZA Support hilft bei Fragen zu den Daten
   - IT-Dienstleister können bei Importen unterstützen

4. **Dokumentation aufbewahren**
   - Notiere, welche Daten wo gespeichert wurden
   - Erstelle ein Inhaltsverzeichnis für das Archiv

### ❌ Häufige Fehler vermeiden

1. **Backup nicht überprüfen**
   - Öffne stichprobenartig einige Dateien
   - Stelle sicher, dass alle Daten vorhanden sind

2. **Nur ein Speicherort**
   - Erstelle mindestens eine Kopie
   - Nutze verschiedene Speichermedien

3. **Download-Link ignorieren**
   - Swiss Transfer Links haben ein Ablaufdatum
   - Lade die Daten zeitnah herunter

## Häufige Fragen (FAQ)

### Wie gross ist das Backup typischerweise?

Die Grösse hängt von der Datenmenge ab:
- **Klein** (wenige Dokumente): 50-200 MB
- **Mittel** (normaler Betrieb): 200 MB - 2 GB
- **Gross** (viele Dokumente/Bilder): 2-20 GB

### Wie lange wird der Download-Link aktiv sein?

Swiss Transfer Links sind standardmässig 30 Tage gültig. Lade die Daten zeitnah herunter und speichere sie lokal.

### Kann ich die Daten in ein neues ELIZA-System importieren?

Ja, der Import in eine neue ELIZA-Installation ist möglich. Kontaktiere den ELIZA-Support für Unterstützung beim Migrations-Prozess.

### Was mache ich, wenn eine Datei beschädigt ist?

Kontaktiere den ELIZA-Support. Wir können das Backup erneut erstellen und dir einen neuen Download-Link zusenden.

### Sind Passwörter im Backup enthalten?

Nein, Passwörter werden aus Sicherheitsgründen nicht im Klartext exportiert. Die Authentifizierungsdaten enthalten nur verschlüsselte Hashes.

### Kann ich die Daten ohne technisches Wissen nutzen?

Ja, die JSON-Dateien können mit kostenlosen Tools wie Notepad++ geöffnet werden. Für Excel-Importe findest du oben eine Anleitung. Bei komplexeren Anforderungen empfehlen wir die Unterstützung durch einen IT-Dienstleister.

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Warum und wann ein vollständiger Datenexport erstellt wird
- ✅ Welche Daten im Backup enthalten sind
- ✅ Wie das Backup-Archiv entpackt wird
- ✅ Wie JSON-Dateien geöffnet und gelesen werden
- ✅ Welche Möglichkeiten du mit den exportierten Daten hast
- ✅ Best Practices für die sichere Aufbewahrung

## Weitere Ressourcen

- **ELIZA Support**: support@eliza.swiss
- **Swiss Transfer**: [www.swisstransfer.com](https://www.swisstransfer.com/de-ch)
- **JSON Online Viewer**: [jsonviewer.stack.hu](https://jsonviewer.stack.hu/)
- **7-Zip Download**: [www.7-zip.org](https://www.7-zip.org/)

---

**← Zurück zu: [Microsoft Entra ID Synchronisation]({{< ref "08-entra-sync" >}}) | Zur Übersicht: [Index →](./)**
