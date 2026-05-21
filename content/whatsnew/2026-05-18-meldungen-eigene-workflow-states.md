---
title: "Meldungen: Eigene Workflow-Status pro Meldekreis mit Kanban-Board (BETA)"
date: 2026-05-18
category: "Meldungen"
metadata:
  category: "Meldungen"
slug: "meldungen-eigene-workflow-states"
---

> **🧪 BETA-Feature**: Diese Funktion befindet sich in der Beta-Phase und ist standardmässig deaktiviert. Wenn du sie ausprobieren möchtest, melde dich bei **[support@eliza.swiss](mailto:support@eliza.swiss)** -- wir schalten sie gerne für deine Installation frei.

Bisher hatten alle Meldungen die gleichen festen Status (neu, in Prüfung, akzeptiert, ...). Jetzt kannst du **pro Meldekreis** eigene Workflow-Status definieren -- mit eigener Farbe, Reihenfolge und sogar gestufter Sichtbarkeit. Sobald du Custom Status angelegt hast, zeigt die **Meldekreis-Übersicht** die Meldungen automatisch als Kanban mit Drag & Drop zwischen den Status-Spalten.

![Kanban-Ansicht der Meldekreis-Übersicht mit Custom Workflow-Status](/issues/help/images/kanban_custom_states.svg)

## Was ist neu?

- **Eigene Status pro Meldekreis**: Lege beliebig viele Workflow-Status an -- z. B. "Anfrage", "Testversion", "Präsentation", "Angebot", "Gewonnen", "Verloren" für eine Sales-Pipeline, oder "Triage", "In Analyse", "Massnahme umgesetzt", "Wirksamkeitsprüfung" für einen CIRS-Meldekreis.
- **Drag & Drop Reihenfolge**: Sortiere die Status einfach per Maus, die Reihenfolge bestimmt die Spalten auf dem Kanban-Board.
- **Farben und Icons**: Wähle für jeden Status eine MaterializeCSS-Farbe und optional ein Material-Icon -- die Status erscheinen dann überall einheitlich gefärbt in Listen und auf dem Board.
- **Startstatus** und **Abgeschlossen-Markierung**: Markiere einen Status als Startstatus (wird neuen Meldungen automatisch zugewiesen) oder als "gilt als abgeschlossen" (zählt nicht mehr als offen in Statistiken).
- **Gestufte Sichtbarkeit**: Jeder Status hat eine Sichtbarkeitsstufe:
  - **Alle Teammitglieder**: jede berechtigte Person sieht die Meldung
  - **Nur Tracker-Admins**: ideal für eine Triage-Phase, in der eingehende Meldungen erst geprüft werden, bevor das Team sie sieht
  - **Admins + zuständige Person**: nur die zugewiesene Person und Admins sehen die Meldung
- **Kanban direkt in der Meldekreis-Übersicht**: Sobald du eigene Status angelegt hast, zeigt die Detail-Ansicht des Meldekreises die Meldungen automatisch als Kanban-Spalten -- kein separates Board nötig. Verschiebe Karten per Drag & Drop, um Meldungen in einen neuen Status zu setzen; ein Modal fragt optional nach einem Kommentar zur Statusänderung.
- **Abwärtskompatibel**: Solange du keine eigenen Status anlegst, läuft alles wie bisher mit den klassischen Status weiter.

## Wie profitierst du davon?

- **Workflows passen zur Realität**: Du musst deine Prozesse nicht mehr in das fixe Schema pressen -- jeder Meldekreis bekommt genau die Status, die er braucht.
- **Übersicht auf einen Blick**: Die Kanban-Ansicht in der Meldekreis-Übersicht macht den Fortschritt aller Meldungen sofort sichtbar -- ideal für tägliche Stand-Ups oder Status-Reviews.
- **Triage ohne Lärm**: Mit der Sichtbarkeitsstufe "Nur Tracker-Admins" sehen Teammitglieder neue Meldungen erst, nachdem du sie eingeordnet hast. Keine vorzeitigen Benachrichtigungen, keine halbfertigen Meldungen im Team-Feed.
- **Schnelles Statuswechseln**: Drag & Drop ist schneller als Dropdowns -- besonders bei mehreren Meldungen am Stück.

## Wie nutzt du es?

### 1. Status anlegen

1. Öffne den Meldekreis und klicke in der Tab-Navigation auf das **Workflow**-Symbol (Zeitleiste-Icon)
2. Klicke **Status hinzufügen**
3. Vergib eine **Bezeichnung** ("Anfrage erhalten") und einen **Slug** ("anfrage") -- der Slug ist der interne Bezeichner
4. Wähle eine **Farbe** und optional ein **Material-Icon**
5. Wähle die **Sichtbarkeit** und ob es der **Startstatus** oder **abgeschlossen** sein soll
6. **Speichern**

Wiederhole das für alle Status. Die Reihenfolge passt du per Drag & Drop am Punktraster-Symbol links an.

![Workflow-Editor mit Custom Workflow-Status](/issues/help/images/workflow_editor.svg)

### 2. Kanban-Ansicht nutzen

1. Sobald mindestens ein Custom-Status existiert, zeigt die **Meldekreis-Übersicht** die Meldungen automatisch als Kanban mit den Status als Spalten
2. Jede Meldung erscheint als Karte in der Spalte ihres aktuellen Status
3. Ziehe eine Karte in eine andere Spalte; ein Modal bestätigt den Statuswechsel und erlaubt einen optionalen Kommentar (auch als interner Kommentar)
4. Die Änderung wird gespeichert und im Verlauf der Meldung als System-Kommentar dokumentiert

### 3. Meldungen über das Status-Dropdown ändern

Im klassischen Meldungs-Formular erscheinen die Custom Status automatisch als zusätzliche Option, sobald du welche definiert hast.

## Beispiel: Sales-Pipeline

| Position | Status | Farbe | Markierung |
|----------|--------|-------|------------|
| 1 | Anfrage | Grau | Startstatus |
| 2 | Qualifiziert | Hellblau | |
| 3 | Präsentation | Blau | |
| 4 | Angebot gesendet | Hellorange | |
| 5 | Verhandlung | Orange | |
| 6 | Mündliche Zusage | Hellgrün | |
| 7 | Auftrag gewonnen | Grün | abgeschlossen |
| 8 | Verloren | Rot | abgeschlossen |

## Beispiel: Support mit Triage

| Position | Status | Sichtbarkeit | Beschreibung |
|----------|--------|--------------|--------------|
| 1 | Eingegangen | Nur Admins | Triage-Phase |
| 2 | Triagiert | Admins + zuständige Person | |
| 3 | In Bearbeitung | Alle | Team sieht es ab hier |
| 4 | Warte auf Kunde | Alle | |
| 5 | Gelöst | Alle | abgeschlossen |

## Voraussetzungen

- Workflow-Status konfigurieren kann jeder Meldekreis-Administrator (Berechtigung "Meldekreis ändern")
- Das Kanban-Board sehen alle Personen mit Zugriff auf den Meldekreis
- Klassische und Custom Status sind unabhängig voneinander -- klassische Status bleiben für Filter, Listen und Berichte verfügbar

Viel Spass mit den neuen Workflows!

*Dein ELIZA-Team* 🐢