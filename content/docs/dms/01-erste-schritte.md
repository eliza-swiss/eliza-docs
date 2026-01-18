---
title: "Erste Schritte"
description: ""
weight: "1"
tags:
  - "einführung"
  - "übersicht"
  - "navigation"
  - "dashboard"
  - "erste-schritte"
---


# Erste Schritte

Dieses Kapitel führt dich in das ELIZA Dokumentenmanagementsystem (DMS) ein und zeigt dir, wie du schnell produktiv wirst.

## Was ist das DMS?

Das ELIZA DMS ist ein umfassendes System zur Verwaltung, Versionierung und Freigabe von Dokumenten. Es unterstützt dich bei:

- **Zentraler Dokumentenablage**: Alle Dokumente an einem Ort
- **Versionskontrolle**: Automatische Nachverfolgung aller Änderungen
- **Freigabe-Workflows**: Strukturierte Prüfung und Genehmigung
- **Vorlagen-Management**: Wiederverwendbare Dokumentvorlagen
- **Berechtigungssteuerung**: Feingranulare Zugriffsrechte
- **Suche und Navigation**: Schnelles Finden von Dokumenten

### Typische Anwendungsfälle

| Anwendungsfall | Beschreibung |
|----------------|--------------|
| **Qualitätsmanagement** | Arbeitsanweisungen, Verfahrensanweisungen, QM-Handbuch |
| **ISO 9001 Dokumentenlenkung** | Gelenkte Dokumente mit Prüfung und Freigabe |
| **Vertragsmanagement** | Verträge, Vereinbarungen, Zusätze |
| **Projektdokumentation** | Konzepte, Spezifikationen, Protokolle |
| **Wissensmanagement** | Anleitungen, How-Tos, Best Practices |

---

## Zugriff auf das DMS

### Navigation

**Hauptmenü → DMS** oder **Dashboard → DMS-Kachel**

Das DMS erreichst du über das Hauptmenü auf der linken Seite oder direkt über die DMS-Kachel im Dashboard.

### Voraussetzungen

Um das DMS nutzen zu können, benötigst du:

1. **Aktives ELIZA-Konto**: Ein gültiger Benutzeraccount
2. **DMS-Berechtigung**: Mindestens die Berechtigung `view_document`
3. **Modulaktivierung**: Das DMS-Modul muss für deine Organisation aktiviert sein

> **💡 Tipp:** Wenn du keinen Zugriff auf das DMS hast, wende dich an deinen Administrator.

---

## Hauptbereiche des DMS

### 1. Ordner-Übersicht

Die Ordner-Übersicht ist deine Startseite im DMS. Hier siehst du:

- **Ordnerstruktur**: Hierarchische Ansicht aller Ordner
- **Dokumente im aktuellen Ordner**: Liste der enthaltenen Dokumente
- **Breadcrumb-Navigation**: Zeigt deinen aktuellen Standort
- **Aktionsbuttons**: Neues Dokument, Neuer Ordner, Upload

### 2. Workflow-Übersicht

**DMS → Workflow**

Die Workflow-Übersicht zeigt dir alle Dokumente, die auf deine Aktion warten:

- **Zur Prüfung**: Dokumente, die du prüfen musst
- **Zur Freigabe**: Dokumente, die du freigeben musst
- **Meine Entwürfe**: Dokumente, die du noch bearbeiten musst

### 3. Vorlagen

**DMS → Vorlagen**

Hier findest du alle Dokumentvorlagen, aus denen du neue Dokumente erstellen kannst:

- **Word-Vorlagen**: .docx Dateien mit Platzhaltern
- **Excel-Vorlagen**: .xlsx Dateien mit Template-Sprache
- **Andere Vorlagen**: PDF, PowerPoint, etc.

### 4. Favoriten

**DMS → Favoriten**

Deine persönliche Sammlung häufig genutzter Dokumente und Ordner.

### 5. Suche

**DMS → Suche** oder **Suchfeld oben rechts**

Volltextsuche über alle Dokumente mit erweiterten Filteroptionen.

---

## Die DMS-Oberfläche

### Ordner-Ansicht

```
┌─────────────────────────────────────────────────────────┐
│  DMS > Ordner > Qualitätsmanagement                     │  ← Breadcrumb
├─────────────────────────────────────────────────────────┤
│  [+ Neues Dokument] [+ Neuer Ordner] [↑ Upload]         │  ← Aktionen
├─────────────────────────────────────────────────────────┤
│  📁 Arbeitsanweisungen                                  │
│  📁 Verfahrensanweisungen                               │  ← Unterordner
│  📁 Formulare                                           │
├─────────────────────────────────────────────────────────┤
│  📄 QM-Handbuch v2.1              Freigegeben  15.03.25 │
│  📄 Qualitätspolitik              Freigegeben  10.01.25 │  ← Dokumente
│  📄 Organigramm                   Entwurf      heute    │
└─────────────────────────────────────────────────────────┘
```

### Dokument-Detailansicht

Wenn du ein Dokument öffnest, siehst du:

| Bereich | Inhalt |
|---------|--------|
| **Kopfzeile** | Titel, Dokument-ID, Status-Badge |
| **Aktionen** | Bearbeiten, Herunterladen, Workflow-Aktionen |
| **Metadaten** | Autor, Erstellt am, Geändert am, Version |
| **Vorschau** | Dokumentenvorschau (wenn verfügbar) |
| **Tabs** | Details, Versionen, Kommentare, Verknüpfungen |

---

## Wichtige Konzepte

### Dokument-Status

Jedes Dokument durchläuft einen definierten Lebenszyklus:

| Status | Symbol | Bedeutung |
|--------|--------|-----------|
| **Entwurf** | 🔵 | Dokument wird bearbeitet |
| **Zur Prüfung** | 🟡 | Wartet auf Prüfung |
| **Geprüft** | 🟠 | Geprüft, wartet auf Freigabe |
| **Freigegeben** | 🟢 | Aktiv und gültig |
| **Abgelaufen** | 🔴 | Überprüfung fällig |
| **Archiviert** | ⚫ | Nicht mehr aktiv |

> **⚠️ Wichtig:** Nur freigegebene Dokumente sind offiziell gültig und sollten verwendet werden.

### Arbeitskopien

Wenn du ein freigegebenes Dokument ändern möchtest, erstellst du eine **Arbeitskopie**:

- Das Original bleibt freigegeben und verfügbar
- Änderungen erfolgen in der Arbeitskopie
- Nach Freigabe ersetzt die Arbeitskopie das Original

### Versionierung

ELIZA führt automatisch eine Versionshistorie:

- Jede Änderung wird protokolliert
- Frühere Versionen können eingesehen werden
- Bei Bedarf kannst du zu einer früheren Version zurückkehren

---

## Schnellstart: Dein erstes Dokument

### Schritt 1: Ordner wählen

1. Navigiere zu **DMS → Ordner**
2. Wähle einen Ordner oder erstelle einen neuen

### Schritt 2: Dokument erstellen

1. Klicke auf **"+ Neues Dokument"**
2. Fülle die Pflichtfelder aus:
   - **Titel**: Aussagekräftiger Name
   - **Ordner**: Speicherort (bereits vorausgewählt)
3. Optional: Lade eine Datei hoch
4. Klicke auf **"Speichern"**

### Schritt 3: Dokument bearbeiten

1. Öffne dein neues Dokument
2. Klicke auf **"Bearbeiten"**
3. Füge Beschreibung, Metadaten und Datei hinzu
4. Speichere deine Änderungen

> **💡 Tipp:** Ein neues Dokument startet immer im Status "Entwurf". Du kannst es jederzeit weiter bearbeiten.

---

## Berechtigungen im Überblick

### Basis-Berechtigungen

| Berechtigung | Beschreibung |
|--------------|--------------|
| `view_document` | Dokumente anzeigen |
| `add_document` | Neue Dokumente erstellen |
| `change_document` | Dokumente bearbeiten |
| `delete_document` | Dokumente löschen |
| `review_document` | Dokumente prüfen |
| `approve_document` | Dokumente freigeben |

### Rollen

| Rolle | Typische Berechtigungen |
|-------|------------------------|
| **Leser** | Dokumente anzeigen und herunterladen |
| **Autor** | Dokumente erstellen und bearbeiten |
| **Prüfer** | Dokumente prüfen |
| **Freigeber** | Dokumente freigeben |
| **Administrator** | Volle Rechte inkl. Ordner-Verwaltung |

> **⚠️ Wichtig:** Die tatsächlichen Berechtigungen hängen von deiner Rolle und den Ordner-Einstellungen ab.

---

## Tastenkombinationen

| Tastenkombination | Aktion |
|-------------------|--------|
| `Strg + S` | Speichern (in Formularen) |
| `Esc` | Dialog schliessen |
| `/` | Fokus auf Suchfeld |

---

## Hilfe und Support

### Dokumentation

- **Dieses Handbuch**: Umfassende Anleitungen für alle DMS-Funktionen
- **Tooltips**: Fahre mit der Maus über Icons für Erklärungen
- **Hilfetexte**: Kontextbezogene Hilfe in Formularen

### Support

Bei Fragen oder Problemen:

1. Konsultiere dieses Handbuch
2. Nutze die Suche im Hilfe-Bereich
3. Kontaktiere deinen lokalen Administrator
4. Wende dich an den ELIZA Support

---

## Nächste Schritte

- **[Kapitel 2: Dokumente erstellen]({{< ref "02-dokumente-erstellen" >}})**: Lerne, wie du Dokumente erstellst und hochlädst
- **[Kapitel 3: Ordnerstruktur]({{< ref "03-ordnerstruktur" >}})**: Organisiere deine Dokumente effektiv
- **[Kapitel 4: Workflow]({{< ref "04-workflow-status" >}})**: Verstehe den Freigabe-Prozess

---

## Zusammenfassung

✅ Du weisst, was das DMS ist und wofür es verwendet wird
✅ Du kennst die Hauptbereiche und Navigation
✅ Du verstehst die wichtigsten Konzepte (Status, Versionen, Arbeitskopien)
✅ Du kannst dein erstes Dokument erstellen
✅ Du weisst, wo du Hilfe findest
