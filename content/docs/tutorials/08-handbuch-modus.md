---
title: "Handbuch-Modus"
description: ""
weight: "8"
tags:
  - "handbuch"
  - "manual"
  - "wissensartikel"
  - "nachschlagewerk"
  - "inline-editing"
  - "kommentare"
  - "historie"
---


# Handbuch-Modus

Der **Handbuch-Modus** verwandelt einen Kurs in ein strukturiertes Online-Nachschlagewerk. Statt einer linearen Schulung mit Anmeldung und Fortschritt entsteht ein lebendiges Handbuch mit Artikel-Ansicht, Inline-Editing, Kommentaren und Historie.

## Wann Handbuch, wann Schulung?

### Wähle "Handbuch", wenn:

- Inhalte als **Nachschlagewerk** dienen sollen ("Wie mache ich X?")
- Viele Personen den Inhalt **gleichzeitig lesen** und ergänzen
- **Mehrere Autoren** den Inhalt pflegen
- **Kommentare** und Diskussion erwünscht sind
- **Kein** Fortschritt, Quiz oder Zertifikat nötig ist
- Beispiele: QM-Handbuch, Notfall-Leitfaden, Onboarding-Wiki, FAQ, How-to-Sammlung

### Wähle "Schulung", wenn:

- Teilnehmende den Inhalt **strukturiert von vorne nach hinten** durchgehen sollen
- Du den **Lernfortschritt verfolgen** willst
- **Quiz oder Tests** Pflicht sind
- Ein **Zertifikat** ausgestellt wird
- Es eine **Frist** für den Abschluss gibt
- Beispiele: Compliance-Schulung, Onboarding-Kurs, Produkttraining

> 💡 Du kannst beide Modi parallel im selben Ordner haben — z.B. ein **Onboarding-Handbuch** als Nachschlagewerk und einen **Onboarding-Kurs** mit Pflicht-Lektionen.

---

## Modus festlegen

Der Modus wird beim Erstellen gewählt (Feld `mode`):

- Im Wizard: in Schritt 1 "Handbuch" oder "Wissensartikel" wählen
- Im Ordner-Detail: Button **"Handbuch hinzufügen"**
- Im Kurs-Bearbeiten-Formular: Feld "Modus" = `Handbuch`

> ⚠️ Wechsle den Modus nach dem ersten Inhalt nicht mehr — die UI ist auf den ursprünglichen Modus optimiert.

---

## Handbuch-Startseite

Wenn ein Benutzer ein Handbuch öffnet, sieht er die **Handbuch-Startseite** (`manual_detail`) — eine eigene Ansicht, die sich von der Kurs-Detailseite unterscheidet:

```text
┌─────────────────────────────────────────────────────────┐
│  📖 Titelbild / Header                                  │
├─────────────────────────────────────────────────────────┤
│  Handbuch-Titel + Beschreibung                          │
├─────────────────────────────────────────────────────────┤
│  Action-Bar: ⭐ Favorit  |  ✏️ Bearbeiten  |  ➕ Artikel │
├─────────────────────────────────────────────────────────┤
│  📨 Einladungs-Banner (falls offen)                     │
├─────────────────────────────────────────────────────────┤
│  📋 Inhaltsverzeichnis                                  │
│   1. Erster Artikel                       [Lesen]       │
│   2. Zweiter Artikel                      [Lesen]       │
│   ├── 2.1 Unterkapitel                                  │
│   └── 2.2 Unterkapitel                                  │
│   3. Dritter Artikel                      [Lesen]       │
└─────────────────────────────────────────────────────────┘
```

### Bereiche

- **Header mit Titelbild**: Identität des Handbuchs auf einen Blick
- **Action-Bar**: Favorit, Bearbeiten, neuen Artikel hinzufügen — Kontextaktionen für Autoren und Leser
- **Einladungs-Banner**: Falls offene Einladungen zu Artikeln dieses Handbuchs bestehen, erscheint hier ein Hinweis mit Sprungaktion
- **Inhaltsverzeichnis**: Alle Artikel und Unterartikel mit "Lesen"-Button

---

## Artikel-Ansicht (`manual_article`)

Ein Klick auf "Lesen" oder einen Artikeltitel öffnet die **Artikel-Ansicht im Fullscreen** — eine reduzierte Lese-Ansicht ohne Hauptmenü, damit der Inhalt im Zentrum steht.

### Layout

```text
┌─────────────────────────────────────────────────────────┐
│  ← Schliessen  |  Artikel-Titel       |  ⭐  ⋮ Menü     │
├──────────────────────────────────┬──────────────────────┤
│                                  │                      │
│  Artikel-Inhalt                  │  📋 Inhaltsverz.     │
│                                  │   ├ Abschnitt 1      │
│  ## Abschnitt 1                  │   ├ Abschnitt 2      │
│   Text, Bild, Video, BPMN...     │   └ Abschnitt 3      │
│                                  │                      │
│  ## Abschnitt 2                  │  🏷  Labels          │
│   ...                            │   • thema-a          │
│                                  │   • thema-b          │
│  ## Abschnitt 3                  │                      │
│   ...                            │  📜 Historie         │
│                                  │  💬 Kommentare       │
│                                  │                      │
└──────────────────────────────────┴──────────────────────┘
```

### Section-Anker-Navigation (rechts)

Die rechte Sidebar enthält ein **automatisches Inhaltsverzeichnis** des aktuellen Artikels — jeder Abschnitt mit Titel wird zu einem Anker. Ein Klick scrollt direkt zum Abschnitt.

> 💡 ELIZA-Konvention: Navigation immer rechts, der Inhalt nimmt die linke Hauptspalte ein.

### Weitere Elemente in der rechten Sidebar

- **Labels** des Artikels (klickbare Chips → filtert im Wissenshub)
- **Historie** → öffnet das Historie-Modal mit Versions-Liste
- **Kommentare**-Bereich
- **Bearbeiten**-Eintrag (falls Berechtigung)

---

## Inline-Editing

Im Handbuch-Modus bearbeitest du Inhalte **direkt im Artikel** — kein Wechsel in ein separates Edit-Formular.

### Artikel-Metadaten

- Klick auf Titel/Beschreibung → Inline-Edit-Formular erscheint
- Speichern → der neue Wert ist sofort sichtbar (HTMX, kein Reload)

### Abschnitte

- **Stift-Icon** an einem Abschnitt → Inline-Edit-Formular für Inhalt
- **Zahnrad-Icon** → Section-Einstellungen (Titel, Layout)
- **Mülleimer-Icon** → Löschen mit Bestätigung
- **Drag & Drop** sortiert Abschnitte um

### Neue Abschnitte hinzufügen

Das **"Abschnitt hinzufügen"-Panel** ist immer am Inhalt verfügbar. Wähle einen Typ (Text, Bild, Video, PDF, BPMN, Excalidraw) — das passende Formular öffnet sich inline.

> ✅ **Best Practice**: Du editierst direkt am Endergebnis — keine getrennte "Vorschau". Das ist einer der Hauptvorteile des Handbuch-Modus.

---

## Kommentare

Jeder Handbuch-Artikel hat eine Kommentarfunktion über die Social-Bar (`streams.Comment`):

- Leser stellen Fragen, geben Feedback oder ergänzen
- Antworten auf bestehende Kommentare sind möglich
- Reaktionen (Likes/Emojis) und Gesehen-Tracking gehören ebenfalls dazu

### Wo siehst du Kommentare?

- Direkt unter dem Artikel-Inhalt (Social-Bar)
- Auf der **Wissenshub-Startseite** in der Sektion "Letzte Kommentare" (modulübergreifend)
- Im Benachrichtigungssystem (falls Benachrichtigungen aktiv)

> 💡 Hinweis: Die Social-Bar wird über die Konstante `TUTORIALS_SOCIAL_ENABLED` aktiviert. Sie ist eine generische ELIZA-Komponente und wird auch in anderen Modulen verwendet.

---

## Historie und Versionsvergleich

Wenn mehrere Autoren ein Handbuch pflegen, ist die **Historie** essenziell.

### Historie öffnen

- Eintrag **"Historie"** in der rechten Sidebar
- Öffnet ein Modal mit Liste aller Versionen (Datum, Autor)

### Versionen vergleichen

1. Klick auf eine Version öffnet das **Diff-Modal**
2. Du siehst Änderungen pro Feld (alt → neu)
3. Mit **"Zurück zur Liste"** kommst du zurück zur Versions-Liste — auch im Manual-Modus

> 💡 Die Historie basiert auf `django-reversion`. Jede Speicherung erzeugt eine neue Revision — auch Inline-Edits.

---

## Favoriten

Auf jeder Handbuch-Startseite und in jedem Artikel siehst du oben rechts einen **Favoriten-Stern**:

- **Grau** = nicht favorisiert
- **Gelb** = favorisiert
- Klick toggelt den Status (HTMX, kein Reload)

Favorisierte Handbücher und Artikel erscheinen auf der Wissenshub-Startseite in der eigenen "Favoriten"-Sektion.

---

## Einladungen im Handbuch-Modus

Auch im Handbuch-Modus kannst du gezielt Personen einladen, einen bestimmten Artikel zu lesen oder zu erledigen. Details siehe [Kapitel 5: Anmeldungen und Einladungen]({{< ref "05-kursanmeldungen" >}}).

Auf der Handbuch-Startseite und im Artikel erscheint dann ein **Einladungs-Banner** mit den Aktionen "Start" und "Erledigt markieren". Erledigte Einladungen verschwinden aus der "Für dich"-Sektion im Wissenshub.

---

## Wer darf was?

| Aktion | Wer? |
|--------|------|
| **Handbuch lesen** | Alle mit Zugriff (siehe [Kapitel 7]({{< ref "07-berechtigungen" >}})) |
| **Favorit setzen** | Alle Leser |
| **Kommentieren** | Alle Leser |
| **Artikel inline editieren** | Kurs-Admin-Team, Folder-Admin-Team, `change_lesson` |
| **Neue Artikel hinzufügen** | Kurs-Admin-Team, Folder-Admin-Team, `add_lesson` |
| **Historie ansehen** | Alle mit Lese-Zugriff |
| **Einladen** | Kurs-Admin-Team, Folder-Admin-Team |

---

## Tipps für Handbuch-Autoren

### ✅ Empfehlungen

- **Klare Artikel-Titel**: Im Inhaltsverzeichnis sind sie der einzige Wegweiser
- **Abschnitts-Titel vergeben**: Sie werden zur Sidebar-Navigation
- **Labels nutzen**: Themen-Filter und Suche funktionieren nur mit Labels gut
- **Kurze Abschnitte**: Besser viele kleine Sections als wenige riesige
- **Bilder, BPMN, PDFs einbauen**: Macht den Artikel scanbarer
- **Kommentare lesen**: Sie sind das beste Feedback zur Artikel-Qualität

### ❌ Häufige Fehler

- Handbuch-Modus für Pflichtschulungen verwenden (→ wähle Schulung)
- Riesige Artikel ohne Abschnitts-Titel (→ Sidebar bleibt leer)
- Keine Labels vergeben (→ schwer auffindbar)
- Im Entwurf belassen (→ Leser sehen nichts)

---

## Nächste Schritte

- **[Kapitel 4: Lektionen]({{< ref "04-lektionen" >}})**: Die einzelnen Abschnitts-Typen im Detail
- **[Kapitel 5: Anmeldungen und Einladungen]({{< ref "05-kursanmeldungen" >}})**: Einladungs-Workflow
- **[Kapitel 9: Labels, Themen und Suche]({{< ref "09-labels-themen-suche" >}})**: Handbuch auffindbar machen

---

## Zusammenfassung

- ✅ Du kennst den Unterschied zwischen Schulungs- und Handbuch-Modus
- ✅ Du verstehst die Handbuch-Startseite mit Inhaltsverzeichnis und Action-Bar
- ✅ Du nutzt die Artikel-Fullscreen-Ansicht mit Section-Anker
- ✅ Du bearbeitest Artikel und Abschnitte inline via HTMX
- ✅ Du nutzt Kommentare, Historie und Favoriten
- ✅ Du verstehst, wie Einladungen im Handbuch-Modus funktionieren
