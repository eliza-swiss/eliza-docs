---
title: "Import & Export"
description: ""
weight: "3"
tags:
  - "import"
  - "export"
  - "excel"
  - "xlsx"
---


# Import & Export

Dieses Kapitel erklärt, wie du Glossareinträge per Excel importierst und exportierst.

## Glossar exportieren

### Excel-Export erstellen

So exportierst du das gesamte Glossar:

1. Gehe zu **Glossar** → **Einstellungen** (über die Navigation)
2. Klicke auf **"Excel Export"**
3. Die Datei `glossar.xlsx` wird automatisch heruntergeladen

### Inhalt der Export-Datei

Die Excel-Datei enthält folgende Spalten:

| Spalte | Beschreibung | Beispiel |
|--------|--------------|----------|
| **UUID (Nicht abändern!)** | Eindeutige ID des Eintrags | a1b2c3d4-... |
| **title** | Begriffstitel | Qualitätsmanagement |
| **description** | Vollständige Beschreibung | Qualitätsmanagement umfasst... |
| **is_archived** | Archivierungsstatus | False |
| **is_trashed** | Papierkorb-Status | False |
| **created** | Erstellungsdatum | 2025-01-15 10:30:00 |
| **modified** | Änderungsdatum | 2025-01-20 14:22:00 |

⚠️ **Wichtig**: Die UUID-Spalte darf **nicht verändert** werden! Sie dient der eindeutigen Identifikation beim Import.

### Verwendungszwecke

Der Export ist nützlich für:

- **Backups**: Sichere dein Glossar regelmässig
- **Offline-Nutzung**: Arbeite ohne Internet-Zugang
- **Dokumentation**: Füge das Glossar in Handbücher ein
- **Massenbearbeitung**: Bearbeite viele Einträge in Excel und importiere sie wieder

## Glossar importieren

### Voraussetzungen

Bevor du importierst:

1. **Rechte prüfen**: Du brauchst `glossar_admin` Rechte
2. **Excel-Datei vorbereiten**: Nutze die Export-Vorlage als Basis
3. **Backup erstellen**: Exportiere das aktuelle Glossar vor dem Import

### Excel-Datei vorbereiten

#### Pflicht-Spalten

Diese Spalten **müssen** vorhanden sein:

- `title` (Pflicht, Text)
- `description` (Pflicht, Text)

#### Optionale Spalten

Diese Spalten werden ebenfalls importiert (falls vorhanden):

- `UUID (Nicht abändern!)` oder `uuid` - Für Updates bestehender Einträge
- `is_archived` - Archivierungsstatus (True/False)
- `is_trashed` - Papierkorb-Status (True/False)

**Wichtig**: Technische Spalten wie `created` und `modified` werden beim Import ignoriert.

#### Beispiel-Datenstruktur

```
| UUID (Nicht abändern!) | title                 | description                        |
|------------------------|-----------------------|------------------------------------|
|                        | Audit                 | Systematische Untersuchung...      |
|                        | ISO 9001              | Internationale Norm für QMS        |
| a1b2c3d4-...           | Prozess               | Reihe von Aktivitäten...           |
```

**Hinweise**:
- **Leere UUID**: Neuer Eintrag wird erstellt
- **Vorhandene UUID**: Bestehender Eintrag wird aktualisiert
- **Ungültige UUID**: Zeile wird übersprungen mit Fehlermeldung

### Import durchführen

**Schritt-für-Schritt:**

1. Gehe zu **Glossar** → **Einstellungen**
2. Klicke auf **"Excel Import"**
3. Klicke auf **"Datei auswählen"**
4. Wähle deine vorbereitete Excel-Datei (`.xlsx`)
5. Klicke auf **"Hochladen"**

### Import-Ergebnis

Nach dem Import siehst du eine Zusammenfassung:

```
✅ Import erfolgreich!

✓ Eintrag 'Audit' erstellt.
✓ Eintrag 'ISO 9001' erstellt.
✓ Eintrag 'Prozess' aktualisiert.
⚠️ Titel fehlt. (Zeile 5)
❌ Ungültige UUID 'xyz123'. (Zeile 8)
```

### Import-Verhalten

**Neue Einträge** (ohne UUID):
- Werden mit neuer UUID erstellt
- `title` und `description` werden aus Excel übernommen

**Bestehende Einträge** (mit UUID):
- Werden aktualisiert, falls UUID existiert
- `title` und `description` werden überschrieben

**Fehlerhafte Zeilen**:
- Werden übersprungen
- Fehlermeldung wird angezeigt
- Rest des Imports wird fortgesetzt

## Massenbearbeitung

### Mehrere Einträge auf einmal ändern

Für grössere Anpassungen:

1. Exportiere das Glossar
2. Bearbeite die Excel-Datei
3. Verwende Excel-Features (Suchen & Ersetzen, Formeln)
4. Importiere die bearbeitete Datei

⚠️ **Wichtig**: Behalte die UUID-Spalte bei, damit bestehende Einträge aktualisiert werden!

### Beispiel: 50 Beschreibungen korrigieren

```
1. Export: glossar.xlsx
2. In Excel öffnen
3. Beschreibungen in Spalte "description" bearbeiten
4. UUIDs NICHT ändern!
5. Speichern als: glossar_updated.xlsx
6. Import durchführen
```

## Häufige Import-Fehler

### Problem: "Titel fehlt"

**Ursache**: Leere Zelle in Spalte `title`

**Lösung**: Fülle alle Titel aus oder lösche die leere Zeile

### Problem: "Ungültige UUID"

**Ursache**: UUID-Format ist falsch oder wurde manuell geändert

**Lösung**:
- Entweder UUID-Spalte leer lassen (neuer Eintrag)
- Oder originale UUID aus Export verwenden

### Problem: "Bitte laden Sie eine Excel-Datei hoch"

**Ursache**: Falsches Dateiformat (z.B. `.xls`, `.csv`)

**Lösung**: Nutze das moderne `.xlsx` Format

### Problem: Import-Log zeigt keine Fehler, aber Einträge fehlen

**Ursache**: Zeilen ohne `title` werden stillschweigend übersprungen

**Lösung**: Prüfe, ob alle Zeilen einen Titel haben

## Best Practices

### 🔄 Regelmässige Backups

Erstelle wöchentliche Exports als Backup:

```
glossar_backup_2025-01-20.xlsx
glossar_backup_2025-01-27.xlsx
glossar_backup_2025-02-03.xlsx
```

### 📋 Versionierung

Nutze sprechende Dateinamen:

```
glossar_v1.0_initial.xlsx
glossar_v1.1_qm_begriffe_erweitert.xlsx
glossar_v2.0_nach_iso_audit.xlsx
```

### 🔍 Import-Log prüfen

Nach jedem Import:

1. Lies das Import-Log vollständig
2. Prüfe, ob alle erwarteten Einträge erstellt/aktualisiert wurden
3. Kontrolliere stichprobenartig importierte Einträge in der Glossar-Liste

### ✅ Test-Import

Für grosse Importe:

1. Teste zuerst mit 5-10 Einträgen
2. Prüfe das Ergebnis
3. Erst dann den vollständigen Import durchführen

## Häufige Fragen

**Q: Kann ich mehrere Excel-Dateien gleichzeitig importieren?**
A: Nein, aber du kannst die Dateien in Excel zusammenführen und dann einen einzigen Import machen.

**Q: Was passiert bei Duplikaten (gleiche UUID)?**
A: Der bestehende Eintrag wird mit den neuen Werten aus der Excel-Datei überschrieben.

**Q: Was passiert bei gleichen Titeln aber verschiedenen UUIDs?**
A: Beide Einträge existieren nebeneinander. ELIZA erlaubt momentan Duplikate bei Titeln.

**Q: Werden Änderungshistorien beim Import beibehalten?**
A: Nein, importierte/aktualisierte Einträge erstellen einen neuen Audit-Log-Eintrag.

**Q: Kann ich auch CSV-Dateien importieren?**
A: Nein, aktuell nur XLSX. Konvertiere CSV-Dateien zuerst in Excel.

**Q: Wie kann ich alte Einträge löschen via Import?**
A: Momentan nicht möglich. Lösche Einträge manuell oder setze `is_trashed` auf `True` (falls unterstützt).

## Nächste Schritte

Im nächsten Kapitel lernst du:
- Best Practices für ein effektives Glossar
- Tipps zur Pflege und Aktualisierung
- Beispiele aus der Praxis
