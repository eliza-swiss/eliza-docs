---
title: "Texteditor"
description: ""
weight: "13"
tags:
  - "texteditor"
  - "formatierung"
  - "markdown"
  - "tabellen"
  - "bilder"
---


# Texteditor

Der **Texteditor** steht dir überall zur Verfügung, wo du in ELIZA formatierte Inhalte erfasst – zum Beispiel in Beschreibungen, Kommentaren, Meldungen, News, Prozessschritten oder Lektionen.

## Werkzeugleiste im Überblick

![Schematische Übersicht der Werkzeugleiste des Texteditors mit nummerierten Symbolgruppen](/docs/core/images/texteditor_toolbar_uebersicht.png)

Die Abbildung zeigt die vollständige Werkzeugleiste schematisch. Die nummerierten Gruppen bedeuten:

1. **Text gestalten:** fett, kursiv, durchgestrichen und Textfarbe
2. **Überschriften:** drei Ebenen für eine klare Gliederung
3. **Listen:** Aufzählung, Nummerierung und Checkliste
4. **Blöcke und Code:** Zitat, Trennlinie, Code und Codeblock
5. **Links und Bilder:** Link einfügen, Link entfernen und Bild einfügen
6. **Tabellen:** eine neue Tabelle an der Cursorposition einfügen
7. **Bearbeitungsschritte:** letzte Änderung rückgängig machen oder wiederholen

Wenn du ein Bild auswählst, erscheinen drei zusätzliche Symbole für die Bildgrösse: **Klein (25 %)**, **Mittel (50 %)** und **Originalgrösse**. Befindet sich der Cursor in einer Tabelle, zeigt die Werkzeugleiste passende Funktionen zum Hinzufügen oder Entfernen von Zeilen und Spalten sowie für die Zellfarbe.

In kompakten Eingabefeldern stehen bewusst weniger Werkzeuge zur Verfügung.

## Text formatieren

Markiere den gewünschten Text und wähle danach das passende Symbol. Du kannst eine Funktion auch zuerst aktivieren und anschliessend weiterschreiben. Ein hervorgehobenes Symbol zeigt dir, welche Formatierung an der aktuellen Cursorposition verwendet wird.

## Links einfügen

1. Markiere den Text, der zum Link werden soll.
2. Klicke in der Werkzeugleiste auf **Link**.
3. Gib die vollständige Adresse ein und bestätige sie.

Webadressen ohne Protokoll ergänzt ELIZA automatisch mit `https://`. Interne und spezielle Verweise, beispielsweise auf CMI, werden vor dem Speichern geprüft.

## Tabellen bearbeiten

Mit **Tabelle einfügen** erstellst du eine neue Tabelle. Sobald sich der Cursor in einer Tabelle befindet, erscheinen zusätzliche Werkzeuge:

- Zeile oder Spalte hinzufügen
- Zeile oder Spalte entfernen
- ganze Tabelle entfernen
- Zellhintergrund festlegen

Die Spaltenbreite änderst du, indem du den Rand zwischen zwei Spalten mit der Maus ziehst. ELIZA speichert die Breiten mit und übernimmt sie auch in den Word-Bericht.

> **Tipp:** Halte Tabellen auf Smartphones möglichst kompakt. Sehr breite Tabellen lassen sich auf kleinen Bildschirmen schwerer lesen.

## Bilder einfügen

Du kannst ein Bild über die Werkzeugleiste auswählen oder direkt aus der Zwischenablage einfügen. In unterstützten Feldern funktioniert auch Drag & Drop.

Nach dem Einfügen kannst du die Bildgrösse anpassen. ELIZA speichert das Bild als Datei und verwendet im Text einen Verweis darauf. Grosse oder ungültige Bilddateien werden aus Sicherheitsgründen abgelehnt.

## Inhalte speichern

Der Texteditor synchronisiert Änderungen automatisch mit dem Formularfeld. Gespeichert wird der Inhalt erst, wenn du das Formular mit **Speichern**, **Senden** oder der entsprechenden Aktion abschliesst.

Bei unterstützten Formularen bewahrt ELIZA während der Bearbeitung zusätzlich einen lokalen Entwurf auf und warnt dich vor dem Verlassen einer Seite mit ungespeicherten Änderungen.

## Häufige Fragen

### Kann ich Markdown verwenden?

Ja. ELIZA speichert formatierte Inhalte in einem Markdown-kompatiblen Format. Du kannst viele Markdown-Elemente direkt eingeben oder über die Werkzeugleiste erstellen.

### Warum sehe ich nicht überall dieselben Werkzeuge?

Für kurze Kommentare und kompakte Inline-Eingaben verwendet ELIZA eine reduzierte Werkzeugleiste. Umfangreiche Textfelder bieten mehr Formatierungsfunktionen.

### Was geschieht, wenn der Texteditor technisch nicht geladen werden kann?

ELIZA wechselt automatisch auf einen vereinfachten Ersatzeditor. Deine Eingabe kann weiterhin gespeichert werden; du musst dafür keine Einstellung ändern.

### Warum wird ein Bild nicht angenommen?

Prüfe Dateiformat, Dateigrösse und Bildabmessungen. ELIZA kontrolliert sowohl die Datei als auch die tatsächlichen Bilddaten, um beschädigte oder ungewöhnlich grosse Bilder abzuweisen.

## Weiterführend

- [CMI-Verweise in Texten verwenden]({{< ref "12-cmi-verweise" >}})
