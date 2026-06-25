---
title: "Labels, Themen und Suche"
description: ""
weight: "9"
tags:
  - "labels"
  - "themen"
  - "tags"
  - "suche"
  - "elasticsearch"
  - "favoriten"
  - "filter"
---


# Labels, Themen und Suche

Damit Wissen schnell gefunden wird, kombiniert ELIZA drei Mechanismen: **Labels** zur Verschlagwortung, **Themen-Filter** zur Navigation und **modulübergreifende Suche** im Wissenshub.

## Labels (Themen)

Labels sind Schlagworte, die du an Kurse, Handbücher, Lektionen und Artikel anhängst. Sie tauchen als klickbare **Chips** in der UI auf und sind über den Themen-Filter und die Suche auffindbar.

> Intern: Labels nutzen das `ProcessLabel`-Model — dieselben Labels, die auch im Prozessmodul vergeben werden. So entsteht ein gemeinsamer Themen-Pool über die Module hinweg.

### Wo Labels vergeben werden können

| Objekt | Vergabe im Formular | Inline-Edit |
|--------|---------------------|-------------|
| **Kurs / Handbuch** | Ja | Ja (Klick auf Labels-Bereich der Detailseite) |
| **Lektion / Artikel** | Ja | Ja (Klick auf Labels-Bereich der Detailseite) |
| **Folder** | Nein | – |
| **Section** | Nein | – |

### Labels inline vergeben

Auf jeder Kurs-/Lektions-Detailseite gibt es einen **Labels-Bereich**:

1. Klick auf den Labels-Bereich öffnet das Inline-Edit-Feld (Cotton-Komponente `<c-labels>`)
2. Tippe ein Label — die Auto-Vervollständigung schlägt vorhandene Labels vor
3. Enter erstellt das Label (falls neu) und hängt es an
4. Klick aufs ✕ am Chip entfernt das Label

Alle Änderungen werden über HTMX live gespeichert — kein Reload.

### Labels in Listen

- Auf **Detailseiten** werden Labels als Chips angezeigt
- Auf **Listen-Karten** (Wissenshub-Sektionen, Favoriten) werden Labels bewusst **nicht** als Chips dargestellt, um die Karten kompakt zu halten — sie sind aber in der Suche aktiv

---

## Themen-Filter auf der Wissenshub-Startseite

Die Wissenshub-Startseite enthält eine eigene **Themen-Sektion** mit allen Labels, die im Wissen aktuell vergeben sind:

- Jedes Label erscheint als klickbarer Chip
- Klick auf ein Thema **filtert die Inhalte** der Seite auf das gewählte Label
- Sektionen ohne passende Treffer werden ausgeblendet
- Klick auf ein zweites Thema kombiniert die Filter

> 💡 So findest du z.B. mit einem Klick auf "Onboarding" alle Kurse, Handbücher und Artikel, die mit dem Thema getaggt sind — über mehrere Ordner hinweg.

---

## Suche im Wissenshub

Das prominente Suchfeld auf der Wissenshub-Startseite ist die schnellste Art, Wissen zu finden.

### Wie sie funktioniert

- **Live-Suche** (Type-as-you-search): Treffer erscheinen, während du tippst
- **HTMX-basiert**: Keine Seiten-Neuladung, sehr schnell
- **Auto-Fokus** beim Öffnen des Wissenshubs auf Desktop (auf Mobile nicht, um Tastatur nicht aufzuzwingen)
- **Elasticsearch im Hintergrund** (mit Whoosh-Fallback) — schneller und besser als reine SQL-Suche

### Was sie durchsucht

Die Wissenshub-Suche ist **modulübergreifend** — sie schliesst nicht nur Tutorials ein, sondern auch andere ELIZA-Module:

| Modul | Was wird gefunden |
|-------|-------------------|
| **Tutorials** | Kurse, Handbücher, Lektionen, Artikel, Sections |
| **DMS** | Freigegebene Dokumente (mit Datei-Typ-Icon je nach Format) |
| **Prozesse** | Freigegebene Prozesse |
| **Streams** | News-Einträge und Events |

> 💡 Die Treffer-Liste zeigt pro Treffer einen passenden Icon (Schulung, Handbuch, Dokument-Typ, Prozess, News), so dass du sofort erkennst, woher der Treffer kommt.

### Such-Optimierungen

- **Titel-Boost**: Treffer im Titel werden höher gewichtet als Treffer im Fliesstext
- **Berechtigungen**: Du siehst nur Treffer, auf die du Zugriff hast
- **Status-Filter**: Soft-deleted Inhalte werden ausgeschlossen
- **Performance**: Die Dashboard-Suche liefert Ergebnisse typischerweise in <1 Sekunde

### Tipps zur Suche

- ✅ Suche zuerst — bevor du etwas Neues anlegst
- ✅ Tippe Stichworte, keine ganzen Sätze
- ✅ Nutze Synonyme, wenn du wenige Treffer hast
- ✅ Klick auf das Thema-Chip eines Treffers, um verwandte Inhalte zu finden

---

## Favoriten

Favoriten sind dein persönlicher Schnellzugriff auf Inhalte, die du oft brauchst.

### Favorit setzen

Auf jeder Detailseite (Kurs, Handbuch, Lektion, Artikel) findest du oben einen **Stern**:

- **Grau** = nicht favorisiert
- **Gelb** = favorisiert
- Klick toggelt — HTMX, kein Reload

### Favoriten sehen

- **Wissenshub-Startseite**: Sektion "Favoriten" mit allen markierten Inhalten
- **Favoriten-Seite** (`/tutorials/favorites/`): Vollständige Liste mit Filter-Optionen

> 💡 Favoriten sind persönlich — jeder Benutzer hat seine eigene Liste.

---

## "Was ist neu" und "Letzte Kommentare"

Zwei weitere Sektionen auf der Wissenshub-Startseite helfen dir, am Ball zu bleiben:

### Was ist neu

Liste der zuletzt **erstellten** und **aktualisierten** Lektionen und Artikel:

- "Neu"-Badge (orange) für Inhalte, die in den letzten 7 Tagen erstellt wurden
- "Aktualisiert"-Badge (lila) für Inhalte, die in den letzten 7 Tagen geändert wurden

### Letzte Kommentare

Die neuesten Kommentare aus dem Handbuch-Modus, modulübergreifend:

- Wer hat wann wo kommentiert
- Klick springt direkt zum Artikel an der kommentierten Stelle

---

## Wann was nutzen?

| Du willst… | Nutze… |
|------------|--------|
| Etwas Bestimmtes schnell finden | **Suche** (Stichwort tippen) |
| Alle Inhalte zu einem Thema sehen | **Themen-Filter** auf der Startseite |
| Häufig genutzte Inhalte schnell öffnen | **Favoriten** |
| Sehen, was sich verändert hat | **"Was ist neu"** |
| Mitlesen, worüber diskutiert wird | **"Letzte Kommentare"** |
| Inhalte für andere auffindbar machen | **Labels vergeben** |

---

## Best Practices für Wissensautoren

### ✅ Empfehlungen

- **Labels konsistent vergeben**: Lieber wenige, gut etablierte Themen als viele Einzelfälle
- **Vorhandene Labels nutzen**: Die Autocomplete-Vorschläge zuerst prüfen, bevor du neue erstellst
- **Titel sind suchrelevant**: Klare, treffende Titel werden bei der Suche bevorzugt
- **Markdown-Beschreibungen**: Werden mit indexiert — kurze, prägnante Zusammenfassung am Anfang hilft
- **Cross-Modul denken**: Wenn ein Prozess oder Dokument verwandt ist, verlinke es — die Suche findet beide

### ❌ Häufige Fehler

- Zu viele synonyme Labels ("Onboarding", "onboarding", "Einarbeitung") — bündeln auf eines
- Labels nur im Tutorials-Modul vergeben — auch Prozesse und DMS profitieren
- Keine Labels → Inhalt taucht nicht im Themen-Filter auf
- Sehr generische Titel ("Übersicht", "Allgemein") → schwer in der Suche zu finden

---

## Nächste Schritte

- **[Kapitel 1: Erste Schritte]({{< ref "01-erste-schritte" >}})**: Wissenshub-Startseite im Überblick
- **[Kapitel 3: Kurse]({{< ref "03-kurse" >}})**: Labels beim Erstellen vergeben
- **[Kapitel 8: Handbuch-Modus]({{< ref "08-handbuch-modus" >}})**: Inline-Editing für Labels

---

## Zusammenfassung

- ✅ Du verstehst, was Labels sind und wie du sie inline vergibst
- ✅ Du nutzt den Themen-Filter, um die Wissenshub-Startseite einzugrenzen
- ✅ Du beherrschst die modulübergreifende Suche (Tutorials, DMS, Prozesse, Streams)
- ✅ Du nutzt Favoriten für schnellen Zugriff auf häufige Inhalte
- ✅ Du behältst mit "Was ist neu" und "Letzte Kommentare" den Überblick
