---
title: "Erste Schritte"
description: ""
weight: "1"
tags:
  - "einführung"
  - "übersicht"
  - "navigation"
  - "wissenshub"
  - "dashboard"
  - "suche"
  - "favoriten"
  - "erste-schritte"
---


# Erste Schritte

Dieses Kapitel führt dich in das ELIZA Modul "Wissen & Lernen" — auch "Wissenshub" genannt — ein und zeigt dir, wie du schnell produktiv wirst.

## Was ist "Wissen & Lernen"?

Das ELIZA Modul "Wissen & Lernen" ist dein zentraler Ort für Wissensvermittlung, Schulungen, Einarbeitungen und Nachschlagewerke. Du kannst damit:

- **Strukturierte Schulungen** mit Lektionen, Quiz und Fortschrittsverfolgung anlegen
- **Handbücher** als strukturierte Online-Nachschlagewerke veröffentlichen (Handbuch-Modus)
- **Multimediale Inhalte** einbinden: Text, Bilder, Videos, PDFs, BPMN-Diagramme, Excalidraw-Zeichnungen
- **Modulübergreifend suchen**: Dokumente (DMS), Prozesse, News und Lerninhalte in einem Treffer
- **Teilnehmende verwalten**: anmelden, einladen, erinnern, auswerten
- **Quiz und Tests** durchführen und Zertifikate erstellen
- **Inhalte verschlagworten** und mit Themen filtern

### Typische Anwendungsfälle

| Anwendungsfall | Empfohlener Modus |
|----------------|-------------------|
| **Mitarbeiter-Onboarding** | Schulung mit Anmeldung und Fortschritt |
| **Compliance-Schulungen** | Schulung mit Quiz und Zertifikat |
| **Qualitätsmanagement** | Handbuch mit verlinkten Prozessen |
| **Produktschulungen** | Schulung oder Handbuch (je nach Tiefe) |
| **Interne Wissensbasis** | Handbuch im Wissenshub |
| **FAQ / How-to-Sammlung** | Handbuch mit Kommentaren |

---

## Zugriff auf den Wissenshub

### Navigation

**Hauptmenü → Wissen & Lernen**

Die Startseite des Wissenshubs öffnet sich. Sie ist gleichzeitig die zentrale Suchseite.

### Voraussetzungen

Um das Modul zu nutzen, brauchst du:

1. **Aktives ELIZA-Konto** mit gültigem Benutzeraccount
2. **Modul-Aktivierung**: `TUTORIALS_ENABLED` muss in deiner Installation aktiv sein
3. **Berechtigung**: mindestens `tutorials.view_course` für Lese-Zugriff

> 💡 **Tipp:** Wenn du das Modul nicht siehst, wende dich an deinen Administrator. Möglicherweise fehlt die Modul-Aktivierung oder die Berechtigung.

---

## Die Wissenshub-Startseite

Die Startseite (`/tutorials/`) ist als prominente Such- und Übersichtsseite gestaltet. Du findest folgende Bereiche:

### 1. Suchfeld (oben, gross)

Direkt im Zentrum: das Suchfeld mit Auto-Fokus (Desktop). Tippe los und du erhältst sofort Treffer per Live-Suche.

Die Suche durchsucht **modulübergreifend**:

- Lektionen, Kurse, Handbuch-Artikel (Tutorials)
- Dokumente aus dem DMS (mit Datei-Typ-Icons für PDF, Word, Excel etc.)
- Prozesse aus dem Prozessmodul
- News aus Streams

Details zur Suche siehst du in [Kapitel 9: Labels, Themen und Suche]({{< ref "09-labels-themen-suche" >}}).

### 2. Ordner-Übersicht

Alle Ordner, auf die du Zugriff hast, sind als Kacheln dargestellt. Pro Ordner siehst du:

- Titelbild (oder ein Platzhalter-Icon)
- Name und Beschreibung
- Anzahl enthaltener Kurse und Handbücher

### 3. Favoriten

Deine markierten Kurse, Handbücher und Lektionen erscheinen als eigene Sektion auf der Startseite. Den Favoriten-Stern setzt du auf jeder Detailseite mit einem Klick (HTMX, kein Reload).

### 4. Für dich

Diese Sektion zeigt **offene Einladungen** — also Lektionen oder Artikel, zu denen du gezielt eingeladen wurdest und die du noch nicht erledigt hast.

### 5. Schulungen

Alle freigegebenen Schulungs-Kurse, gruppiert nach Ordner.

### 6. Handbücher

Alle freigegebenen Handbücher, gruppiert nach Ordner.

> 💡 Sektionen ohne Inhalt (z.B. keine Handbücher vorhanden) werden ausgeblendet.

### 7. Themen

Klickbare Label-Chips zu Themen, die im Wissenshub vergeben sind. Ein Klick filtert die Inhalte auf das gewählte Thema.

### 8. Was ist neu

Liste der zuletzt aktualisierten Lektionen und Artikel — ideal für den schnellen Überblick.

### 9. Letzte Kommentare

Die neuesten Kommentare aus dem Handbuch-Modus. Klick auf einen Kommentar springt direkt zum Artikel.

---

## Struktur verstehen

Der Wissenshub ist hierarchisch aufgebaut:

```text
📁 Ordner (Folder)
 └── 📘 Kurs / 📖 Handbuch (Course mit mode="training" oder mode="manual")
      └── 📄 Lektion / Artikel (Lesson)
           ├── 📝 Abschnitt — Text (Section)
           ├── 🖼  Abschnitt — Bild
           ├── 🎥 Abschnitt — Video
           ├── 📄 Abschnitt — PDF
           ├── 🧩 Abschnitt — BPMN-Diagramm
           └── ✏️  Abschnitt — Excalidraw-Zeichnung
```

### Ordner

Container, die mehrere thematisch zusammengehörende Kurse und Handbücher gruppieren. Ein Ordner kann sowohl Schulungs-Kurse als auch Handbücher enthalten.

### Kurs vs. Handbuch (Modus)

Jeder "Kurs" hat einen Modus:

- **Schulung** (`mode="training"`): klassischer Kurs mit Lektionen, Anmeldung, Fortschrittsverfolgung, Quiz, Zertifikat
- **Handbuch** (`mode="manual"`): strukturiertes Nachschlagewerk mit eigener Artikel-Ansicht, Inline-Editing, Kommentaren, Section-Anker-Navigation

Den Modus wählst du beim Erstellen — er bestimmt die ganze UI für diesen Kurs. Siehe [Kapitel 8: Handbuch-Modus]({{< ref "08-handbuch-modus" >}}).

### Lektion / Artikel

Eine Lerneinheit (Schulungs-Modus) oder ein Artikel (Handbuch-Modus). Sie kann Unterlektionen ("Kapitel") enthalten.

### Abschnitt (Section)

Die Bausteine einer Lektion. Verfügbare Typen:

- **Text** — formatierter Fliesstext (HTML)
- **Bild** — Bild mit Layout-Option (volle Breite, links, rechts)
- **Video** — eingebettet von YouTube, Vimeo, Loom, Arcade, SharePoint
- **PDF** — eingebettete PDF-Vorschau
- **BPMN-Diagramm** — interaktiv mit Zoom-Toolbar
- **Excalidraw-Zeichnung** — eingebettete Zeichnung

---

## Inhalte erstellen — Der Wizard

Klick im Wissenshub auf den **Hinzufügen-Button** (oben rechts). Es öffnet sich ein dreistufiger Wizard:

### Schritt 1 — Was möchtest du erstellen?

Wähle:

- **Schulungskurs** — klassischer Kurs mit Lektionen und Anmeldungen
- **Handbuch** — Online-Nachschlagewerk
- **Wissensartikel** — einzelner Artikel (wird als Handbuch mit einer Lektion angelegt)
- **Lektion / Kapitel** in einem bestehenden Kurs

### Schritt 2 — In welchem Ordner?

Wähle einen bestehenden Ordner aus der Liste. Du kannst direkt aus Schritt 2 auch einen neuen Ordner anlegen, ohne den Wizard zu verlassen.

### Schritt 3 — Titel, Beschreibung und Bild

Gib Titel, Beschreibung und optional ein Titelbild ein. Nach dem Speichern landest du direkt im neuen Kurs/Artikel und kannst die ersten Inhalte hinzufügen.

> ✅ **Best Practice**: Starte direkt mit dem Wizard. Du musst dir keine Gedanken über interne Reihenfolge der Felder machen — der Wizard führt dich.

---

## Für Lernende: Wissen finden und konsumieren

### Wissen suchen

1. Öffne den Wissenshub
2. Tippe ins Suchfeld
3. Klicke auf den passenden Treffer

### Einer Schulung beitreten

Wenn du zu einem Schulungs-Kurs angemeldet bist, siehst du den Kurs im "Für dich"-Bereich oder in der Schulungs-Sektion. Klick auf **"Lesen beginnen"** oder eine Lektion startet den Kurs.

### Ein Handbuch lesen

1. Öffne ein Handbuch via Ordner, Suche oder Themen-Filter
2. Auf der Handbuch-Startseite findest du das Inhaltsverzeichnis
3. Klick auf einen Artikel öffnet ihn im Vollbild-Modus
4. Rechts findest du die Section-Anker für schnelle Navigation
5. Du kannst Kommentare schreiben und Artikel als Favorit markieren

### Lektion abschliessen (Schulungs-Modus)

1. Arbeite die Abschnitte durch
2. Bearbeite ggf. das Quiz
3. Markiere die Lektion als "abgeschlossen" — oder lass den Fortschritt automatisch erfassen, wenn du alles durchgearbeitet hast

### Kurs abschliessen

Wenn alle Lektionen abgeschlossen sind:

1. Der Kurs wird als "abgeschlossen" markiert
2. Falls erforderlich, unterschreibe digital
3. Lade dein Zertifikat herunter (falls verfügbar)

---

## Status verstehen

### Kurs- und Lektionsstatus

| Status | Symbol | Bedeutung |
|--------|--------|-----------|
| **Entwurf** | 🟠 | In Bearbeitung, nicht sichtbar für Lernende |
| **Zur Prüfung** | 🟡 | Wartet auf Freigabe |
| **Freigegeben** | 🟢 | Aktiv und für Lernende verfügbar |
| **Abgelaufen** | 🔴 | Überprüfung fällig |
| **Archiviert** | ⚫ | Nicht mehr aktiv |

### Anmeldestatus (Enrollment)

| Status | Bedeutung |
|--------|-----------|
| **Eingeladen** | Teilnehmer wurde eingeladen |
| **Noch nicht begonnen** | Kurs noch nicht gestartet |
| **In Arbeit** | Kurs wird bearbeitet |
| **Abgeschlossen** | Alle Lektionen erledigt |

### Lektionsfortschritt

| Status | Bedeutung |
|--------|-----------|
| **Eingeladen** | Lektion wurde zugewiesen |
| **Noch nicht begonnen** | Lektion noch nicht geöffnet |
| **In Arbeit** | Lektion wird bearbeitet |
| **Abgeschlossen** | Lektion erfolgreich beendet |
| **Keine Teilnahme** | Lektion nicht erforderlich |

---

## Tipps für den Start

- ✅ **Wizard nutzen**: Für neue Inhalte ist der Wizard schneller als alle Felder einzeln zu füllen
- ✅ **Suche zuerst**: Bevor du etwas Neues anlegst, suche im Wissenshub — vielleicht existiert schon ein passender Artikel
- ✅ **Favoriten setzen**: Häufig gebrauchte Kurse/Artikel mit dem Stern markieren — sie erscheinen auf der Startseite
- ✅ **Labels vergeben**: Inhalte mit Themen versehen, damit sie via Themen-Filter und Suche schnell gefunden werden
- ❌ **Nicht direkt im Entwurf-Status verlinken**: Lernende sehen nur freigegebene Inhalte

---

## Hilfe und Support

- **Dieses Handbuch**: Umfassende Anleitungen für alle Funktionen
- **Tooltips**: Fahre mit der Maus über Icons für Erklärungen
- **Suchfeld im Wissenshub**: Findet auch FAQ-Artikel, falls vorhanden
- **ELIZA Support**: Bei Fragen oder Problemen wende dich an deinen Administrator oder den Support

---

## Nächste Schritte

- **[Kapitel 2: Kursordner]({{< ref "02-kursordner" >}})**: Ordner erstellen und verwalten
- **[Kapitel 3: Kurse]({{< ref "03-kurse" >}})**: Ersten Kurs anlegen
- **[Kapitel 8: Handbuch-Modus]({{< ref "08-handbuch-modus" >}})**: Handbücher als Nachschlagewerk
- **[Kapitel 9: Labels, Themen und Suche]({{< ref "09-labels-themen-suche" >}})**: Inhalte auffindbar machen

---

## Zusammenfassung

- ✅ Du kennst die Wissenshub-Startseite mit Suche, Favoriten und Themen
- ✅ Du verstehst die hierarchische Struktur (Ordner → Kurs/Handbuch → Lektion → Abschnitt)
- ✅ Du kennst den Unterschied zwischen Schulungs- und Handbuch-Modus
- ✅ Du kannst neue Inhalte über den Wizard erstellen
- ✅ Du kennst die Abschnitts-Typen (Text, Bild, Video, PDF, BPMN, Excalidraw)
- ✅ Du weisst, wo du Hilfe findest
