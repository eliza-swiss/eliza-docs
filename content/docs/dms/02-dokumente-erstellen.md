---
title: "Dokumente erstellen und hochladen"
description: ""
weight: "2"
tags:
  - "erstellen"
  - "hochladen"
  - "upload"
  - "neues-dokument"
  - "metadaten"
---


# Dokumente erstellen und hochladen

Dieses Kapitel erklärt, wie du neue Dokumente erstellst, Dateien hochlädst und die wichtigen Metadaten korrekt ausfüllst.

## Neues Dokument erstellen

### Zugriff

**DMS → Ordner → [Gewünschter Ordner] → Button "+ Neues Dokument"**

Du kannst ein neues Dokument aus jedem Ordner heraus erstellen. Der aktuelle Ordner wird automatisch als Speicherort vorausgewählt.

### Das Dokument-Formular

Das Formular zum Erstellen eines neuen Dokuments ist in mehrere Bereiche unterteilt:

---

## Stammdaten

### Titel (Pflichtfeld)

Der Titel ist das wichtigste Feld deines Dokuments.

**Empfehlungen:**
- Wähle einen aussagekräftigen, eindeutigen Titel
- Vermeide Abkürzungen, die nicht allgemein bekannt sind
- Halte den Titel kurz, aber präzise

**Beispiele:**

| ❌ Schlecht | ✅ Gut |
|------------|--------|
| AA-001 | Arbeitsanweisung Qualitätskontrolle |
| Dok neu | Verfahrensanweisung Lieferantenaudit |
| Test | Checkliste Wareneingang |

> **💡 Tipp:** Nutze das Feld "Dokument-ID" für Kennungen wie "AA-001" und halte den Titel lesbar.

### Dokument-ID (Optional)

Eine eindeutige Kennung für dein Dokument.

**Typische Formate:**
- `AA-001` (Arbeitsanweisung Nr. 1)
- `VA-QM-003` (Verfahrensanweisung QM Nr. 3)
- `F-HR-012` (Formular HR Nr. 12)

**Vorteile der Dokument-ID:**
- Eindeutige Referenzierung
- Sortierung nach Nummernkreisen
- Integration in Kopf-/Fusszeilen von Vorlagen

> **💡 Tipp:** Die Dokument-ID wird zusammen mit dem Titel angezeigt: "AA-001 - Arbeitsanweisung Qualitätskontrolle"

### Beschreibung (Optional, empfohlen)

Eine ausführliche Beschreibung des Dokumenteninhalts.

**Inhalt der Beschreibung:**
- Zweck des Dokuments
- Zielgruppe
- Wichtige Hinweise zur Verwendung
- Änderungshistorie (bei Bedarf)

> **💡 Tipp:** Die Beschreibung unterstützt Markdown-Formatierung für bessere Lesbarkeit.

---

## Datei hochladen

### Unterstützte Dateiformate

| Kategorie | Formate |
|-----------|---------|
| **Office** | .docx, .xlsx, .pptx, .doc, .xls, .ppt |
| **PDF** | .pdf |
| **Bilder** | .png, .jpg, .jpeg, .gif, .svg |
| **Text** | .txt, .md, .csv |
| **Weitere** | .zip, .xml, .json |

### Datei hochladen

**Methode 1: Klick-Upload**
1. Klicke auf das Upload-Feld
2. Wähle eine Datei aus dem Datei-Explorer
3. Bestätige die Auswahl

**Methode 2: Drag & Drop**
1. Ziehe eine Datei aus deinem Datei-Explorer
2. Lasse sie über dem Upload-Bereich fallen
3. Die Datei wird automatisch übernommen

### Dateigrössenbeschränkung

- **Maximale Dateigrösse**: Abhängig von der Systemkonfiguration (typisch 50-100 MB)
- **Empfohlen**: Dateien unter 20 MB für optimale Performance

> **⚠️ Wichtig:** Bei sehr grossen Dateien kann der Upload länger dauern. Schliesse das Fenster nicht, bis der Upload abgeschlossen ist.

### Dokument ohne Datei

Du kannst ein Dokument auch ohne Datei erstellen, z.B. für:

- Externe Referenzen (Links zu externen Systemen)
- Platzhalter für später
- Reine Metadaten-Einträge

---

## Klassifikation und Kategorisierung

### Ordner (Pflichtfeld)

Der Speicherort deines Dokuments in der Ordnerstruktur.

- Wird automatisch vorausgewählt, wenn du aus einem Ordner heraus erstellst
- Kann nachträglich geändert werden
- Bestimmt die Sichtbarkeit und Berechtigungen

### Dokumentart

Kategorisiert dein Dokument nach Typ.

**Typische Dokumentarten:**
- Arbeitsanweisung
- Verfahrensanweisung
- Formular
- Checkliste
- Richtlinie
- Protokoll
- Bericht

> **💡 Tipp:** Dokumentarten werden vom Administrator verwaltet und können angepasst werden.

### Labels

Farbige Tags zur zusätzlichen Kategorisierung.

**Verwendung:**
- Mehrere Labels pro Dokument möglich
- Ermöglicht schnelle Filterung
- Visuelle Kennzeichnung in Listen

**Beispiele:**
- 🔴 Priorität Hoch
- 🟢 Aktuell
- 🔵 Intern
- 🟡 Review erforderlich

**Labels direkt auf der Dokument-Detailseite vergeben:**

Du musst das Dokument nicht bearbeiten, um seine Labels zu ändern:

1. Klicke im Labels-Bereich der Detailseite auf das **Etiketten-Symbol** 🏷️
2. Klicke die gewünschten Labels an (nochmals klicken entfernt die Zuweisung)
3. Bestätige mit **"Übernehmen"** — mit **"Abbrechen"** verwirfst du die Änderung

Ein Klick auf ein farbiges Label zeigt dir alle damit verknüpften Inhalte — auch aus anderen Modulen.

> **💡 Gemeinsame Labels:** Es sind dieselben Labels wie im Prozessmodul, und die Bedienung ist überall identisch — bei Dokumenten, Prozessen und Wissensinhalten. Farbwahl, Scoped Labels und Berechtigungen sind samt Video-Anleitung im modulübergreifenden Kapitel [Labels und Kategorisierung]({{< ref "06-labels" >}}) beschrieben.

---

## Verantwortlichkeiten

### Autor/in

Der Ersteller oder inhaltlich Verantwortliche des Dokuments.

- Wird aus der Mitarbeiterliste ausgewählt
- Erhält automatisch Bearbeitungsrechte
- Wird in der Dokumentenhistorie erfasst

### Verantwortliche Funktion

Die Organisationsfunktion, die für das Dokument verantwortlich ist.

**Beispiele:**
- Qualitätsmanager
- Leiter Produktion
- HR-Manager

**Bedeutung:**
- Alle Personen mit dieser Funktion erhalten Admin-Rechte
- Funktion erscheint in Kopf-/Fusszeilen von Vorlagen
- Dient der organisatorischen Zuordnung

### Prüfende Funktion

Die Funktion, die das Dokument prüfen soll.

- Wird beim Einreichen zur Prüfung benachrichtigt
- Kann das Dokument von "Zur Prüfung" auf "Geprüft" setzen

### Freigebende Funktion

Die Funktion, die das Dokument final freigeben kann.

- Wird beim Einreichen zur Freigabe benachrichtigt
- Kann das Dokument von "Geprüft" auf "Freigegeben" setzen

> **⚠️ Wichtig:** Werden keine Funktionen angegeben, werden die Standardfunktionen des übergeordneten Ordners verwendet.

---

## Zeitliche Angaben

### Gültig ab / Gültig bis

Definiert den Gültigkeitszeitraum des Dokuments.

- **Gültig ab**: Ab wann das Dokument gilt
- **Gültig bis**: Bis wann das Dokument gilt (danach: abgelaufen)

### Datum der nächsten Überprüfung

Wann das Dokument erneut überprüft werden soll.

- Erzeugt automatische Erinnerungen
- Dokument wird im Workflow als "Überprüfung fällig" markiert
- Wichtig für ISO 9001 Compliance

### Periodizität der Überprüfung

Wie oft das Dokument regelmässig überprüft werden soll.

**Optionen:**
- Monatlich
- Quartalsweise
- Halbjährlich
- Jährlich
- Alle 2 Jahre
- Benutzerdefiniert

> **💡 Tipp:** Nach jeder Freigabe wird das nächste Überprüfungsdatum automatisch basierend auf der Periodizität berechnet.

---

## Erweiterte Einstellungen

### Externe Referenz (URL)

Link zu einer externen Ressource.

**Verwendung:**
- Verknüpfung mit externen Systemen (SharePoint, Google Drive, etc.)
- Link zu Online-Dokumenten
- Referenz auf Webseiten

### Revisionsnummer

Manuelle Versionsnummer des Dokuments.

- Wird nicht automatisch erhöht
- Für formale Versionierung nach eigenem Schema
- Beispiele: "1.0", "Rev. A", "2025-01"

### Template Sprache deaktivieren

Schaltet die automatische Platzhalter-Ersetzung aus.

- Standardmässig werden `{{ variable }}` Platzhalter ersetzt
- Deaktiviere dies, wenn dein Dokument diese Syntax enthält, aber nicht ersetzt werden soll

### Dokument schreibgeschützt herunterladen

Bei Word-Dokumenten (.docx):

- Aktiviert: Datei wird beim Download als schreibgeschützt markiert
- Nützlich für freigegebene Dokumente, die nicht verändert werden sollen

### Aufbewahrungsfrist

Wie lange das Dokument nach Archivierung aufbewahrt werden muss.

- Angabe in Jahren
- Relevant für Compliance und gesetzliche Anforderungen
- Standard wird vom Administrator festgelegt

### In Papierform aufbewahren

Markiert, dass das Dokument zusätzlich physisch archiviert werden muss.

---

## Mehrere Dokumente hochladen

### Ordner-Upload

**DMS → [Ordner] → Button "Ordner hochladen"**

Lade einen kompletten Ordner mit Unterordnern und Dateien hoch:

1. Klicke auf **"Ordner hochladen"**
2. Wähle einen Ordner aus deinem Datei-Explorer
3. Die Ordnerstruktur wird automatisch im DMS erstellt
4. Alle Dateien werden als Dokumente importiert

### Batch-Upload

**DMS → [Ordner] → Mehrere Dateien per Drag & Drop**

1. Wähle mehrere Dateien aus
2. Ziehe sie in den Upload-Bereich
3. Für jede Datei wird ein Dokument erstellt
4. Der Dateiname wird als Titel verwendet

> **💡 Tipp:** Beim Batch-Upload werden minimale Metadaten gesetzt. Ergänze diese nachträglich für bessere Auffindbarkeit.

---

## Dokument aus Vorlage erstellen

### Zugriff

**DMS → Vorlagen → [Vorlage auswählen] → "Neues Dokument aus Vorlage"**

oder

**DMS → [Ordner] → "+ Neues Dokument" → Vorlage auswählen**

### Ablauf

1. Wähle eine Vorlage aus
2. Fülle das Formular mit Metadaten aus
3. Platzhalter in der Vorlage werden automatisch ersetzt
4. Das neue Dokument wird erstellt

> **💡 Tipp:** Mehr zu Vorlagen findest du in [Kapitel 5: Vorlagen]({{< ref "05-vorlagen" >}}).

---

## Häufige Fehler vermeiden

### ❌ Fehler: Unleserliche Titel

**Problem:** Titel wie "Doc_final_v2_neu.docx"

**Lösung:**
- Nutze einen beschreibenden Titel: "Arbeitsanweisung Qualitätskontrolle"
- Speichere technische Kennungen in der Dokument-ID
- Versionierung erfolgt automatisch

### ❌ Fehler: Falsche Dokumentart

**Problem:** Alle Dokumente haben die gleiche oder keine Dokumentart

**Lösung:**
- Wähle immer die passende Dokumentart
- Erleichtert Filterung und Übersicht
- Ermöglicht dokumentartspezifische Workflows

### ❌ Fehler: Fehlende Verantwortlichkeiten

**Problem:** Dokument hat keinen Autor oder Verantwortlichen

**Lösung:**
- Setze immer mindestens einen Autor
- Definiere verantwortliche Funktionen für den Workflow
- Ohne Verantwortliche kann niemand das Dokument im Workflow bearbeiten

### ❌ Fehler: Keine Beschreibung

**Problem:** Leere Beschreibung erschwert das Verständnis

**Lösung:**
- Schreibe mindestens 2-3 Sätze
- Erkläre Zweck und Verwendung
- Hilft bei der Suche und beim Verständnis

---

## Best Practices

### ✅ Checkliste für neue Dokumente

- [ ] Aussagekräftiger Titel gewählt
- [ ] Dokument-ID vergeben (wenn Nummernkreis vorhanden)
- [ ] Beschreibung ausgefüllt
- [ ] Richtiger Ordner ausgewählt
- [ ] Dokumentart zugewiesen
- [ ] Relevante Labels gesetzt
- [ ] Autor eingetragen
- [ ] Verantwortliche Funktion definiert
- [ ] Überprüfungsdatum gesetzt (für gelenkte Dokumente)

### ✅ Namenskonventionen

Etabliere einheitliche Konventionen für dein Team:

```
Dokumentart - Thema - Bereich
```

**Beispiele:**
- "AA - Qualitätskontrolle - Wareneingang"
- "VA - Audit - Lieferanten"
- "CL - Prüfung - Endkontrolle"

### ✅ Ordnerstruktur nutzen

- Erstelle Dokumente im richtigen Ordner
- Nutze die Ordnerstruktur für Kategorisierung
- Vermeide Dokumente im Wurzelverzeichnis

---

## Nächste Schritte

- **[Kapitel 3: Ordnerstruktur]({{< ref "03-ordnerstruktur" >}})**: Organisiere deine Dokumente effektiv
- **[Kapitel 4: Workflow]({{< ref "04-workflow-status" >}})**: Führe dein Dokument durch den Freigabeprozess
- **[Kapitel 5: Vorlagen]({{< ref "05-vorlagen" >}})**: Erstelle wiederverwendbare Dokumentvorlagen

---

## Zusammenfassung

✅ Du kannst neue Dokumente erstellen
✅ Du weisst, wie du Dateien hochlädst (Klick und Drag & Drop)
✅ Du kennst alle wichtigen Formularfelder
✅ Du vermeidest häufige Fehler
✅ Du nutzt Best Practices für Titel und Beschreibung
