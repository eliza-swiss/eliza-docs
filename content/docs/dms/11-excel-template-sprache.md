---
title: "Excel-Template-Sprache"
description: ""
weight: "11"
tags:
  - "excel"
  - "vorlage"
  - "template"
  - "platzhalter"
  - "variablen"
  - "logo"
---


# 11. Excel-Template-Sprache

## Überblick

Die Excel-Template-Sprache ermöglicht dir, dynamische Excel-Dokumente zu erstellen, die automatisch mit aktuellen Dokumentinformationen befüllt werden. Wenn du ein Excel-Dokument im DMS öffnest oder herunterlädst, ersetzt ELIZA automatisch alle Template-Variablen durch die entsprechenden Werte.

**Anwendungsfälle:**

- Formulare mit automatischer Dokumenten-ID und Versionsnummer
- Berichte mit aktuellem Freigabe-Datum und verantwortlicher Funktion
- Checklisten mit Organisationseinheiten und Gültigkeitsdaten
- Corporate-Design-Dokumente mit automatischem Firmenlogo

## Grundkonzepte

### Was sind Template-Variablen?

Template-Variablen sind Platzhalter in deinem Excel-Dokument, die ELIZA beim Öffnen oder Herunterladen durch echte Werte ersetzt. Eine Template-Variable erkennst du an den doppelten geschweiften Klammern:

```
{{ variable_name }}
```

**Wichtig:** Du kannst die Variablen mit oder ohne Leerzeichen schreiben:

- `{{ document_id }}` (mit Leerzeichen) ✅ Empfohlen
- `{{document_id}}` (ohne Leerzeichen) ✅ Funktioniert auch

### Wie funktioniert die Verarbeitung?

Wenn du ein Excel-Template-Dokument im DMS verwendest, durchläuft ELIZA folgende Schritte:

1. **Text-Ersetzung**: Alle Template-Variablen in Zellen werden durch aktuelle Werte ersetzt
2. **Logo-Einfügung**: Spezielle Logo-Platzhalter in Zellen werden durch dein Firmenlogo ersetzt
3. **Header-Verarbeitung**: Header und Fusszeilen mit Grafiken bleiben erhalten

> **💡 Tipp:** Die Verarbeitung erfolgt automatisch beim Öffnen oder Herunterladen. Du musst nichts manuell auslösen.

## Verfügbare Template-Variablen

### Dokument-Grunddaten

Diese Variablen enthalten die wichtigsten Informationen über das Dokument:

| Variable | Beschreibung | Beispiel-Wert |
|----------|--------------|---------------|
| `{{ document_id }}` | Eindeutige Dokumenten-ID | QM-DOK-001 |
| `{{ document_title }}` | Titel des Dokuments | Qualitätsmanagement-Handbuch |
| `{{ document_description }}` | Beschreibung des Dokuments | Übersicht aller QM-Prozesse |
| `{{ document_type }}` | Dokumententyp | Handbuch |
| `{{ document_external_reference }}` | Externe Referenz | ISO-9001-2015 |
| `{{ document_author }}` | Autor des Dokuments | Max Mustermann |

### Versionsinformationen

Diese Variablen liefern Informationen über die Dokumentenversion:

| Variable | Beschreibung | Beispiel-Wert |
|----------|--------------|---------------|
| `{{ document_version }}` | Revisionsnummer | 2.1 |
| `{{ document_sequence_number }}` | Interne Sequenznummer | 42 |
| `{{ document_version_number }}` | Anzahl der Versionen | 5 |

> **ℹ️ Hinweis:** `document_version` ist die für Benutzer sichtbare Versionsnummer (z.B. "2.1"), während `document_version_number` die Gesamtzahl aller Versionen angibt.

### Status und Workflow

Diese Variablen zeigen den aktuellen Status des Dokuments:

| Variable | Beschreibung | Beispiel-Wert |
|----------|--------------|---------------|
| `{{ document_state }}` | Aktueller Status | Freigegeben |
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

### Gültigkeitsdaten

Diese Variablen definieren die Gültigkeit des Dokuments:

| Variable | Beschreibung | Beispiel-Wert |
|----------|--------------|---------------|
| `{{ document_valid_from }}` | Gültig ab | 01.04.2025 |
| `{{ document_valid_to }}` | Gültig bis | 31.03.2026 |
| `{{ document_next_review }}` | Nächste Prüfung | 01.03.2026 |

> **⚠️ Wichtig:** Wenn kein Datum hinterlegt ist, bleibt die Variable leer.

### Verantwortlichkeiten und Funktionen

Diese Variablen zeigen, wer für das Dokument verantwortlich ist:

| Variable | Beschreibung | Beispiel-Wert |
|----------|--------------|---------------|
| `{{ document_function }}` | Verantwortliche Funktion | Qualitätsmanagementbeauftragter |
| `{{ document_function_code }}` | Kürzel der Funktion | QMB |
| `{{ document_reviewer_function }}` | Prüfende Funktion | Technische Leitung |
| `{{ document_reviewer_function_code }}` | Kürzel der prüfenden Funktion | TL |
| `{{ document_approval_by }}` | Freigebende Funktion und Person | QMB (Max Mustermann) |
| `{{ document_approval_by_code }}` | Kürzel der freigebenden Funktion | QMB |
| `{{ document_approved_by }}` | Person die freigegeben hat | Max Mustermann |

**Unterschied zwischen den Freigabe-Variablen:**

- `document_approval_by`: Zeigt Funktion und Person, z.B. "QMB (Max Mustermann)"
- `document_approval_by_code`: Nur das Funktionskürzel, z.B. "QMB"
- `document_approved_by`: Nur der Name der Person, z.B. "Max Mustermann"

### Organisationseinheiten

| Variable | Beschreibung | Beispiel-Wert |
|----------|--------------|---------------|
| `{{ orgunits }}` | Zugeordnete Organisationseinheiten | Produktion, Qualität, Verwaltung |

> **ℹ️ Hinweis:** Mehrere Organisationseinheiten werden durch Kommas getrennt.

### Technische Informationen

| Variable | Beschreibung | Beispiel-Wert |
|----------|--------------|---------------|
| `{{ document_url }}` | URL zum Dokument im DMS | /dms/documents/42/detail/ |
| `{{ document_size }}` | Dateigrösse in Bytes | 245760 |

## Template-Variablen in Zellen einfügen

### Schritt-für-Schritt Anleitung

**Schritt 1: Excel-Datei erstellen**

Erstelle ein normales Excel-Dokument oder öffne eine bestehende Vorlage.

**Schritt 2: Platzhalter einfügen**

Klicke in die gewünschte Zelle und gib die Template-Variable mit doppelten geschweiften Klammern ein:

```
{{ document_id }}
```

![Platzhalter in Zelle](screenshots/excel_template_platzhalter_zelle.png)

**Schritt 3: Formatierung anwenden**

Formatiere die Zelle wie gewünscht (Schriftart, Farbe, Ausrichtung). Die Formatierung bleibt nach der Ersetzung erhalten.

![Formatierung anwenden](screenshots/excel_template_formatierung.png)

**Schritt 4: Dokument im DMS hochladen**

Lade dein Excel-Template ins DMS hoch und markiere es als Template (falls gewünscht).

**Schritt 5: Dokument öffnen und prüfen**

Öffne das Dokument im DMS. ELIZA ersetzt automatisch alle Template-Variablen durch die aktuellen Werte.

![Verarbeitetes Dokument](screenshots/excel_template_verarbeitet.png)

### Beispiel: Dokumenten-Kopfzeile

So könntest du eine Kopfzeile in deinem Excel-Dokument gestalten:

| Zelle | Inhalt | Ergebnis nach Verarbeitung |
|-------|--------|---------------------------|
| A1 | Dokument-ID: | Dokument-ID: |
| B1 | `{{ document_id }}` | QM-DOK-001 |
| A2 | Version: | Version: |
| B2 | `{{ document_version }}` | 2.1 |
| A3 | Status: | Status: |
| B3 | `{{ document_state }}` | Freigegeben |
| A4 | Freigegeben am: | Freigegeben am: |
| B4 | `{{ document_approval_date }}` | 15.03.2025 |

### Tipps für die Gestaltung

**1. Verwende aussagekräftige Labels:**

```
❌ Schlecht: {{ document_id }}
✅ Gut:     Dokument-ID: {{ document_id }}
```

**2. Kombiniere mehrere Variablen:**

```
Version {{ document_version }} vom {{ document_modification_date }}
```

**3. Verwende Formatierung für bessere Lesbarkeit:**

- **Fettdruck** für Labels
- *Kursiv* für optionale Informationen
- Farben für Status (z.B. grün für "Freigegeben")

**4. Plane Platz für längere Werte ein:**

Manche Variablen können länger sein als erwartet (z.B. `document_description`). Stelle die Spaltenbreite entsprechend ein oder aktiviere "Zeilenumbruch".

> **💡 Tipp:** Teste dein Template mit verschiedenen Dokumenten, um sicherzustellen, dass alle Werte korrekt dargestellt werden.

## Logos in Excel-Dokumente einfügen

### Logo-Platzhalter in Zellen

ELIZA bietet spezielle Platzhalter für Firmenlogos, die automatisch durch dein konfiguriertes Logo ersetzt werden.

**Verfügbare Logo-Platzhalter:**

| Platzhalter | Beschreibung | Grösse |
|-------------|--------------|--------|
| `{{ system_logo }}` | Standard-Logo | Klein (konfigurierbar) |
| `{{ system_logo_large }}` | Grosses Logo | Doppelte Grösse |

### Schritt-für-Schritt: Logo einfügen

**Schritt 1: Zelle für Logo vorbereiten**

Wähle eine Zelle aus, in der das Logo erscheinen soll. Achte darauf, dass die Zelle gross genug ist.

**Schritt 2: Logo-Platzhalter eingeben**

Gib in die Zelle ein:

```
{{ system_logo }}
```

oder für ein grösseres Logo:

```
{{ system_logo_large }}
```

![Logo-Platzhalter](screenshots/excel_template_logo_platzhalter.png)

**Schritt 3: Zellengrösse anpassen**

Passe die Zellenhöhe und -breite an, damit das Logo später gut sichtbar ist.

> **⚠️ Wichtig:** Der Platzhalter-Text wird beim Verarbeiten komplett entfernt und durch das Logo-Bild ersetzt.

**Schritt 4: Dokument verarbeiten lassen**

Wenn du das Dokument im DMS öffnest, wird der Platzhalter automatisch durch dein Firmenlogo ersetzt.

![Logo eingefügt](screenshots/excel_template_logo_eingefuegt.png)

### Logo-Grösse konfigurieren

Die Grösse der Logos wird zentral in den ELIZA-Einstellungen konfiguriert:

- **WHITELABEL_LOGO_WIDTH_MM**: Breite des Standard-Logos in Millimetern
- **WHITELABEL_LOGO_HEIGHT_MM**: Höhe des Standard-Logos in Millimetern

Das grosse Logo (`system_logo_large`) ist automatisch doppelt so gross wie das Standard-Logo.

> **ℹ️ Hinweis:** Die Logo-Konfiguration kann nur von System-Administratoren geändert werden.

### Häufige Anwendungsfälle

**1. Logo im Dokumenten-Header:**

```
[A1: {{ system_logo }}]  [B1: Firmenname]
                          [B2: Dokumententitel]
```

**2. Logo in Formularen:**

```
┌────────────────────────────┐
│  {{ system_logo }}         │  Qualitätsformular
│                            │  Version: {{ document_version }}
└────────────────────────────┘
```

**3. Logo auf Deckblättern:**

```
        {{ system_logo_large }}

        {{ document_title }}

        Version: {{ document_version }}
```

## Header und Fusszeilen mit Grafiken

### Besonderheit bei Excel-Headern

ELIZA verwendet eine spezielle Technik, um Header und Fusszeilen mit Grafiken zu erhalten:

1. **XML-basierte Verarbeitung**: Text-Variablen werden direkt im Excel-XML ersetzt
2. **Header-Erhaltung**: Header und Fusszeilen mit Bildern bleiben intakt
3. **Kombinierte Verarbeitung**: Text und Bilder werden nacheinander verarbeitet

> **💡 Tipp:** Du kannst sowohl Header-Grafiken als auch Template-Variablen im gleichen Dokument verwenden.

### Header mit Logo und Variablen erstellen

**Schritt 1: Header in Excel öffnen**

1. Klicke auf "Einfügen" > "Kopf- und Fusszeile"
2. Wähle den Bereich für deinen Header aus (Links/Mitte/Rechts)

**Schritt 2: Grafik im Header einfügen**

1. Klicke auf "Grafik"
2. Wähle dein Firmenlogo aus
3. Positioniere das Logo wie gewünscht

![Header mit Grafik](screenshots/excel_template_header_grafik.png)

**Schritt 3: Template-Variablen im Dokument verwenden**

Verwende Template-Variablen in den normalen Zellen deines Dokuments (nicht im Header selbst).

> **⚠️ Wichtig:** Template-Variablen funktionieren NICHT direkt in Excel-Headern und -Fusszeilen. Verwende sie nur in normalen Zellen.

**Schritt 4: Dokument speichern und hochladen**

Speichere dein Excel-Dokument und lade es ins DMS hoch.

### Was wird erhalten?

Wenn du ein Excel-Template mit Header-Grafiken verwendest, bleiben folgende Elemente erhalten:

✅ **Erhalten:**

- Header-Grafiken und Logos
- Fusszeilen-Grafiken
- Header-Formatierung
- Seitennummern in Headern/Fusszeilen

❌ **Nicht unterstützt:**

- Template-Variablen direkt in Headern/Fusszeilen
- Dynamische Bilder in Headern (nur statische Grafiken)

### Technischer Hintergrund

ELIZA verwendet einen mehrstufigen Prozess, um Header-Grafiken zu erhalten:

1. **Extraktion**: Header/Footer XML wird vor der Verarbeitung extrahiert
2. **Text-Ersetzung**: Template-Variablen in Zellen werden ersetzt
3. **Logo-Einfügung**: Logo-Platzhalter in Zellen werden durch Bilder ersetzt
4. **Wiederherstellung**: Header/Footer XML wird wiederhergestellt

> **💡 Tipp:** Dieser Prozess läuft vollautomatisch ab. Du musst nichts speziell konfigurieren.

## Best Practices und Tipps

### Empfohlene Vorgehensweise

**1. Template-Struktur planen:**

Bevor du Template-Variablen einfügst, erstelle eine klare Struktur:

- Dokumenten-Kopf mit Grunddaten
- Inhaltsbereich mit dynamischen Informationen
- Fusszeile mit Status und Versionsinformationen

**2. Konsistente Formatierung verwenden:**

Verwende einheitliche Formatierung für:

- Labels (z.B. immer fett)
- Werte (z.B. immer normal)
- Status-Informationen (z.B. farbcodiert)

**3. Testdokumente erstellen:**

Teste dein Template mit verschiedenen Dokumenten:

- Kurze und lange Titel
- Verschiedene Status
- Mit und ohne Gültigkeitsdaten
- Verschiedene Funktionszuordnungen

**4. Spaltenbreiten anpassen:**

Stelle sicher, dass die Spalten breit genug sind für:

- Lange Dokumententitel
- Mehrere Organisationseinheiten
- Funktionsnamen mit Personennamen

**5. Zeilenumbruch aktivieren:**

Aktiviere "Zeilenumbruch" für Zellen mit:

- `{{ document_title }}`
- `{{ document_description }}`
- `{{ orgunits }}`

### Performance-Optimierung

**Für grosse Excel-Dateien:**

1. **Begrenze den Suchbereich**: ELIZA durchsucht standardmässig die ersten 10'000 Zeilen. Platziere Template-Variablen in den oberen Bereichen.

2. **Vermeide unnötige Platzhalter**: Verwende nur die Variablen, die du wirklich benötigst.

3. **Optimiere Formeln**: Komplexe Excel-Formeln können die Verarbeitung verlangsamen.

### Qualitätssicherung

**Checkliste für Template-Qualität:**

- [ ] Alle Template-Variablen korrekt geschrieben
- [ ] Spaltenbreiten für alle Werte ausreichend
- [ ] Formatierung einheitlich und professionell
- [ ] Logo-Platzhalter korrekt positioniert
- [ ] Template mit verschiedenen Dokumenten getestet
- [ ] Header und Fusszeilen korrekt dargestellt
- [ ] Keine unerwünschten Platzhalter übrig

### Wiederverwendbarkeit

**Template-Bibliothek aufbauen:**

1. **Standard-Kopfzeile**: Erstelle eine wiederverwendbare Kopfzeile für alle Dokumente
2. **Branchen-Templates**: Entwickle spezifische Templates für verschiedene Dokumententypen
3. **Lokalisierung**: Erstelle Templates für verschiedene Sprachen

**Template-Dokumentation:**

Dokumentiere für jedes Template:

- Verwendungszweck
- Enthaltene Variablen
- Besondere Formatierungen
- Aktualisierungsdatum

## Häufige Fehler und Lösungen

### Platzhalter wird nicht ersetzt

**Problem:** Eine Template-Variable bleibt nach der Verarbeitung unverändert.

**Mögliche Ursachen und Lösungen:**

1. **Tippfehler in der Variable**

   ```
   ❌ {{ dokument_id }}
   ✅ {{ document_id }}
   ```

   **Lösung:** Überprüfe die Schreibweise anhand der Variablen-Liste.

2. **Fehlende geschweifte Klammern**

   ```
   ❌ { document_id }
   ✅ {{ document_id }}
   ```

   **Lösung:** Verwende immer doppelte geschweifte Klammern.

3. **Sonderzeichen in der Variable**

   ```
   ❌ {{ document-id }}
   ✅ {{ document_id }}
   ```

   **Lösung:** Verwende Unterstriche statt Bindestriche.

4. **Platzhalter in Header/Fusszeile**

   Template-Variablen funktionieren nicht in Excel-Headern.

   **Lösung:** Verwende Template-Variablen nur in normalen Zellen.

### Logo wird nicht angezeigt

**Problem:** Der Logo-Platzhalter wird nicht durch ein Bild ersetzt.

**Mögliche Ursachen und Lösungen:**

1. **Falsche Platzhalter-Schreibweise**

   ```
   ❌ {{ logo }}
   ❌ {{ system-logo }}
   ✅ {{ system_logo }}
   ```

   **Lösung:** Verwende exakt `{{ system_logo }}` oder `{{ system_logo_large }}`.

2. **Platzhalter in falscher Spalte**

   Logo-Platzhalter müssen in separaten Zellen stehen.

   **Lösung:** Platziere das Logo in einer eigenen Zelle.

3. **Logo nicht konfiguriert**

   Das System-Logo muss in den ELIZA-Einstellungen konfiguriert sein.

   **Lösung:** Kontaktiere deinen System-Administrator.

### Formatierung geht verloren

**Problem:** Die Formatierung einer Zelle geht nach der Verarbeitung verloren.

**Mögliche Ursachen und Lösungen:**

1. **Zelle enthält nur Platzhalter**

   Die Formatierung sollte normalerweise erhalten bleiben.

   **Lösung:** Überprüfe, ob die Formatierung vor dem Hochladen korrekt war.

2. **Komplexe Formate**

   Sehr komplexe Zellenformate können in seltenen Fällen verloren gehen.

   **Lösung:** Verwende einfachere Formatierungen oder formatiere nach der Verarbeitung manuell nach.

### Wert ist leer

**Problem:** Eine Variable wird ersetzt, aber der Wert ist leer.

**Mögliche Ursachen und Lösungen:**

1. **Feld im Dokument nicht ausgefüllt**

   Manche Felder sind optional (z.B. `document_external_reference`).

   **Lösung:** Überprüfe, ob das Feld im DMS-Dokument ausgefüllt ist.

2. **Datum nicht gesetzt**

   Datums-Variablen bleiben leer, wenn kein Datum hinterlegt ist.

   **Lösung:** Setze das entsprechende Datum im DMS-Dokument.

3. **Funktion nicht zugeordnet**

   Funktions-Variablen sind leer, wenn keine Funktion zugeordnet ist.

   **Lösung:** Weise dem Dokument die entsprechende Funktion zu.

### Fehlermeldung beim Öffnen

**Problem:** Beim Öffnen des Dokuments erscheint eine Fehlermeldung.

**Mögliche Ursachen und Lösungen:**

1. **Excel-Datei beschädigt**

   Die Original-Datei könnte beschädigt sein.

   **Lösung:** Öffne die Datei direkt in Excel und prüfe auf Fehler.

2. **Ungültige Template-Syntax**

   Manche Zeichen können Probleme verursachen.

   **Lösung:** Verwende nur die dokumentierten Template-Variablen.

3. **Zu grosse Datei**

   Sehr grosse Excel-Dateien können Timeout-Probleme verursachen.

   **Lösung:** Reduziere die Dateigrösse oder entferne unnötige Formatierungen.

### Performance-Probleme

**Problem:** Die Verarbeitung dauert sehr lange.

**Mögliche Ursachen und Lösungen:**

1. **Datei zu gross**

   Excel-Dateien mit vielen Zeilen brauchen länger.

   **Lösung:** ELIZA durchsucht nur die ersten 10'000 Zeilen. Platziere Template-Variablen im oberen Bereich.

2. **Viele Formeln**

   Komplexe Excel-Formeln verlangsamen die Verarbeitung.

   **Lösung:** Vereinfache Formeln oder berechne Werte vor dem Hochladen.

3. **Viele eingebettete Objekte**

   Viele Bilder und Grafiken erhöhen die Verarbeitungszeit.

   **Lösung:** Reduziere die Anzahl eingebetteter Objekte.

## Zusammenfassung

Die Excel-Template-Sprache ist ein mächtiges Werkzeug für die Erstellung dynamischer Dokumente:

**Wichtigste Punkte:**

1. **Template-Variablen**: Verwende `{{ variable_name }}` für dynamische Inhalte
2. **Logos**: Nutze `{{ system_logo }}` für automatische Logo-Einfügung in Zellen
3. **Header-Grafiken**: Statische Grafiken in Headern bleiben erhalten
4. **Automatische Verarbeitung**: Alles geschieht automatisch beim Öffnen/Herunterladen
5. **Formatierung**: Zellenformatierung bleibt nach der Verarbeitung erhalten

**Nächste Schritte:**

- Erstelle dein erstes Excel-Template mit grundlegenden Variablen
- Teste das Template mit verschiedenen Dokumenten
- Erweitere das Template schrittweise mit weiteren Variablen
- Baue eine Bibliothek wiederverwendbarer Templates auf

> **💡 Tipp:** Beginne mit einem einfachen Template und erweitere es nach und nach. So lernst du die Möglichkeiten der Template-Sprache am besten kennen.

Bei Fragen oder Problemen wende dich an deinen ELIZA-Administrator oder konsultiere die technische Dokumentation.
