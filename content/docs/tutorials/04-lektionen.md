---
title: "Lektionen und Abschnitte"
description: ""
weight: "4"
tags:
  - "lektionen"
  - "lesson"
  - "abschnitte"
  - "section"
  - "videos"
  - "inhalte"
  - "kapitel"
---


# Lektionen und Abschnitte

Lektionen sind die einzelnen Lerneinheiten eines Kurses. Jede Lektion besteht aus mehreren Abschnitten, die verschiedene Inhaltstypen haben können.

## Lektionsstruktur

Eine Lektion in ELIZA kann folgende Elemente enthalten:

```
📄 Lektion
 ├── 📝 Abschnitt 1: Text mit Beschreibung
 ├── 📝 Abschnitt 2: Bild mit Erklärung
 ├── 📝 Abschnitt 3: Video-Tutorial
 ├── 📝 Abschnitt 4: Verknüpfte Dokumente
 └── 📄 Unterlektion (Kapitel)
      ├── 📝 Abschnitt 1
      └── 📝 Abschnitt 2
```

---

## Lektion erstellen

### Voraussetzungen

Du benötigst Bearbeitungsrechte für den Kurs (Admin-Team-Mitglied).

### Schritt-für-Schritt

1. **Öffne den Kurs**, in dem du die Lektion erstellen möchtest
2. **Klicke auf**: "Lektion" (grüner Button mit + Symbol)
3. **Fülle die Felder aus**:
   - **Titel** (Pflicht): Aussagekräftiger Name der Lektion
   - **Beschreibung**: Kurze Zusammenfassung (Markdown unterstützt)
   - **Titelbild**: Optional für visuelle Darstellung
4. **Klicke auf**: "Speichern"

Die Lektion wird im Status "Entwurf" erstellt.

---

## Lektions-Einstellungen

### Grundeinstellungen

| Feld | Beschreibung | Pflicht |
|------|--------------|---------|
| **Titel** | Name der Lektion (max. 255 Zeichen) | ✅ |
| **Beschreibung** | Zusammenfassung der Lerninhalte (Markdown) | Empfohlen |
| **Titelbild** | Bild zur visuellen Kennzeichnung | Optional |

### Status

| Status | Symbol | Bedeutung |
|--------|--------|-----------|
| **Entwurf** | 🟠 | In Bearbeitung, nur für Admins sichtbar |
| **Zur Prüfung** | 🟡 | Wartet auf Freigabe |
| **Freigegeben** | 🟢 | Aktiv, für Lernende sichtbar |
| **Abgelaufen** | 🔴 | Überprüfung fällig |
| **Archiviert** | ⚫ | Nicht mehr aktiv |

> **⚠️ Wichtig:** Nur freigegebene Lektionen sind für Lernende sichtbar, auch wenn der Kurs freigegeben ist.

### Badges für neue/aktualisierte Inhalte

ELIZA zeigt automatisch Badges an:

- **Neu** (orange): Lektion wurde in den letzten 7 Tagen erstellt
- **Aktualisiert** (lila): Lektion wurde in den letzten 7 Tagen bearbeitet

---

## Abschnitte erstellen

Abschnitte sind die Bausteine einer Lektion. Sie können verschiedene Inhaltstypen enthalten.

### Neuen Abschnitt hinzufügen

1. **Öffne die Lektion**
2. **Klicke auf**: "Abschnitt hinzufügen"
3. **Fülle die Felder aus**:
   - **Titel**: Optional, für Abschnittsüberschrift
   - **Beschreibung**: Hauptinhalt (Markdown unterstützt)
   - **Weitere Optionen** je nach Inhaltstyp
4. **Speichere**

### Inhaltstypen

#### Text mit Markdown

Die Beschreibung unterstützt Markdown-Formatierung:

```markdown
# Überschrift 1
## Überschrift 2

**Fett** und *kursiv*

- Aufzählung
- Mit Punkten

1. Nummerierte
2. Liste

> Zitat oder Hinweis

`Code inline` oder

```
Codeblock
```
```

#### Bild hinzufügen

1. Wähle im Abschnitt das Feld "Datei"
2. Lade ein Bild hoch (PNG, JPG, GIF)
3. Wähle das Layout:
   - **Ganze Breite**: Bild nimmt volle Breite ein
   - **Bild links**: Text fliesst rechts um das Bild
   - **Bild rechts**: Text fliesst links um das Bild
4. Optional: Setze den Bild-Radius für abgerundete Ecken

#### Video einbetten

ELIZA unterstützt Videos von verschiedenen Plattformen:

| Plattform | Beispiel-URL |
|-----------|--------------|
| **YouTube** | `https://www.youtube.com/watch?v=xFcsWjsuWk8` |
| **Vimeo** | `https://vimeo.com/1051552391` |
| **Loom** | `https://www.loom.com/share/VIDEO_ID` |
| **Arcade** | `https://demo.arcade.software/tenmmnkulzF3TYqxipch` |
| **Excalidraw** | `https://link.excalidraw.com/...` |
| **SharePoint** | `https://...sharepoint.com/...` |

**Video hinzufügen:**

1. Kopiere die Video-URL
2. Füge sie im Feld "Video-Link" ein
3. Optional: Passe die Iframe-Höhe an (Standard: 315px)
4. Speichere

> **💡 Tipp:** Arcade-Demos eignen sich hervorragend für interaktive Software-Tutorials.

#### Mitgeltende Dokumente

Verknüpfe Dokumente aus dem DMS mit dem Abschnitt:

1. Wähle im Feld "Mitgeltende Dokumente" die relevanten DMS-Dokumente
2. Die Dokumente werden als Links im Abschnitt angezeigt
3. Lernende können die Dokumente direkt öffnen

---

## Abschnitt-Layouts

### Layout-Optionen

| Layout | Beschreibung |
|--------|--------------|
| **Ganze Breite** | Inhalt nutzt die volle Breite |
| **Bild links** | Bild links, Text rechts (Zweispaltig) |
| **Bild rechts** | Bild rechts, Text links (Zweispaltig) |

### Reihenfolge ändern

Die Abschnitte werden in der Reihenfolge angezeigt, in der sie erstellt wurden. Die Reihenfolge kann über "Abschnitte verwalten" geändert werden.

---

## Unterlektionen (Kapitel)

Du kannst Lektionen hierarchisch strukturieren, indem du Unterlektionen (Kapitel) erstellst.

### Unterlektion erstellen

1. **Öffne die übergeordnete Lektion**
2. **Klicke auf**: "Kapitel hinzufügen" oder "Unterlektion"
3. **Erstelle die Unterlektion** wie eine normale Lektion
4. Die Unterlektion erscheint eingerückt unter der Hauptlektion

### Struktur-Beispiel

```
📘 Kurs: Excel-Grundlagen
 ├── 📄 Lektion 1: Einführung
 │    └── 📝 Abschnitte...
 ├── 📄 Lektion 2: Formeln
 │    ├── 📄 Unterlektion 2.1: Grundrechenarten
 │    ├── 📄 Unterlektion 2.2: Fortgeschrittene Formeln
 │    └── 📄 Unterlektion 2.3: Fehlerbehebung
 └── 📄 Lektion 3: Diagramme
```

---

## Lektionsansicht für Lernende

### Standard-Ansicht

Die Lektionsansicht zeigt:

- Lektionstitel und Breadcrumb-Navigation
- Beschreibung
- Alle Abschnitte in Reihenfolge
- Navigation zur vorherigen/nächsten Lektion
- Unterlektionen (falls vorhanden)

### Vollbild-Modus

Für ein ungestörtes Lernerlebnis:

1. Klicke auf das Vollbild-Symbol
2. Die Lektion wird im Vollbild-Modus angezeigt
3. Navigation nur über Vorherige/Nächste-Buttons
4. Beende mit Escape oder dem Schliessen-Button

> **💡 Tipp:** Der Vollbild-Modus eignet sich besonders für Video-Lektionen.

---

## Lektionen verwalten

### Lektionsreihenfolge ändern

1. **Öffne den Kurs**
2. **Klicke auf**: Zahnrad-Symbol "Lektionen verwalten"
3. **Verwende Drag & Drop** für die neue Reihenfolge
4. **Speichere**

### Lektion kopieren/verschieben

1. **Öffne die Lektion**
2. **Wähle**: "Kopieren/Verschieben" aus dem Menü
3. **Wähle den Zielkurs** oder die übergeordnete Lektion
4. **Bestätige** die Aktion

### Abschnitte verwalten

1. **Öffne die Lektion**
2. **Klicke auf**: "Abschnitte verwalten"
3. **Ordne die Abschnitte** per Drag & Drop neu
4. **Speichere**

---

## BPMN-Integration

Lektionen können mit BPMN-Prozesselementen verknüpft werden:

### BPMN-ID zuweisen

Das Feld `bpmn_id` ermöglicht die Verknüpfung mit Prozess-Elementen:

- Beim Klick auf ein Prozesselement im BPMN-Viewer wird die verknüpfte Lektion angezeigt
- Dies ermöglicht kontextbezogene Schulungen direkt aus Prozessen heraus

> **💡 Tipp:** Diese Funktion eignet sich hervorragend für prozessbezogene Schulungen und Arbeitsanweisungen.

---

## Lernfortschritt

### Automatische Erfassung

ELIZA erfasst automatisch den Lernfortschritt:

- **Lektion gestartet**: Beim ersten Öffnen
- **In Arbeit**: Während der Bearbeitung
- **Abgeschlossen**: Manuell markiert oder automatisch nach Kriterien

### Lektion abschliessen

Als Lernender kannst du eine Lektion als abgeschlossen markieren:

1. Öffne die Lektion
2. Klicke auf "Lektion abschliessen" oder "Als erledigt markieren"
3. Der Fortschritt wird gespeichert

---

## Best Practices

### ✅ Empfehlungen

- **Kurze Lektionen**: Maximal 10-15 Minuten Lernzeit pro Lektion
- **Klare Struktur**: Ein Thema pro Lektion
- **Multimediale Inhalte**: Kombiniere Text, Bilder und Videos
- **Fortschritt ermöglichen**: Teile lange Inhalte in Kapitel auf
- **Beschreibung nutzen**: Fasse das Lernziel zusammen
- **Dokumente verknüpfen**: Stelle zusätzliche Ressourcen bereit

### ❌ Häufige Fehler

- Zu lange Lektionen erstellen
- Nur Text ohne visuelle Elemente
- Lektion im Entwurf belassen
- Keine logische Reihenfolge
- Videos ohne Erklärungstext

---

## Lektion löschen

> **⚠️ Achtung:** Das Löschen einer Lektion entfernt alle Abschnitte und Fortschrittsdaten unwiderruflich!

1. Öffne die Lektion
2. Klicke auf das Löschen-Symbol
3. Bestätige die Aktion

---

## Diskussion zu einer Lektion

Falls dein Administrator die **Diskussions-Card** für Tutorials aktiviert hat, erscheint am Ende jeder Lektion (auch im Vollbild-Modus) eine **Diskussion** mit Reagieren, Kommentieren und Gesehen-Tracking — analog zu LinkedIn.

💡 Die Funktionsweise ist im News & Events-Handbuch beschrieben: → [**Diskussion: Reagieren, Kommentieren, Gesehen**]({{< ref "06-diskussion" >}})

Kurz: Lernende können Fragen stellen oder Feedback geben, Kurs-Admins werden automatisch benachrichtigt und können sehen, wer eine Lektion schon angeschaut hat.

---

## Nächste Schritte

- **[Kapitel 5: Kursanmeldungen]({{< ref "05-kursanmeldungen" >}})**: Melde Teilnehmer an
- **[Kapitel 6: Quiz]({{< ref "06-quiz-abschlusstests" >}})**: Füge Wissenskontrollen zu Lektionen hinzu

---

## Zusammenfassung

✅ Du kannst Lektionen erstellen und konfigurieren
✅ Du weisst, wie du Abschnitte mit verschiedenen Inhaltstypen erstellst
✅ Du kannst Videos aus verschiedenen Plattformen einbetten
✅ Du verstehst die Layout-Optionen für Abschnitte
✅ Du kannst Unterlektionen (Kapitel) erstellen
✅ Du kennst den Vollbild-Modus für Lernende
✅ Du weisst, wie du die Lektionsreihenfolge verwaltest
