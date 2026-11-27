---
title: "CMI-Verweise in Texten verwenden"
description: ""
weight: "12"
tags:
  - "cmi"
  - "verweise"
  - "links"
  - "markdown"
  - "editor"
---


# CMI-Verweise in Texten verwenden

Mit einem CMI-Verweis öffnest du aus einem ELIZA-Text direkt den passenden Eintrag in CMI. Die Verweise funktionieren in allen ELIZA-Feldern, die den Texteditor verwenden.

## Voraussetzungen

Damit sich ein CMI-Verweis öffnen lässt:

- muss CMI beziehungsweise der zugehörige Protokoll-Handler auf deinem Gerät installiert und eingerichtet sein
- muss der Link eine gültige UUID enthalten
- muss dein Browser das Öffnen der externen Anwendung erlauben

Ein gültiger Link sieht beispielsweise so aus:

```text
kal://123e4567-e89b-12d3-a456-426614174000
```

> 💡 Die UUID identifiziert den Eintrag in CMI eindeutig. Verwende den vollständigen Link, den du aus CMI oder aus der angebundenen Integration erhältst.

## CMI-Verweis einfügen

1. Öffne einen Text in ELIZA zum Bearbeiten.
2. Markiere die Wörter, die als Verweis dienen sollen, zum Beispiel **In CMI öffnen**.
3. Wähle in der Formatierungsleiste **Link**.
4. Füge den vollständigen `kal://`-Link ein.
5. Bestätige den Link und speichere den Text.

Nach dem Speichern zeigt ELIZA den Verweis kompakt mit einem kleinen **CMI**-Kennzeichen und der verkürzten UUID an. Ein Klick übergibt die vollständige UUID an CMI.

Alternativ kannst du den Verweis als Markdown einfügen:

```markdown
[In CMI öffnen](kal://123e4567-e89b-12d3-a456-426614174000)
```

Auch die von CMI gelieferte Kurzschreibweise wird automatisch als Link erkannt:

```text
<kal://123e4567-e89b-12d3-a456-426614174000/>
```

## Gültige und ungültige Verweise

ELIZA aktiviert nur CMI-Links mit einer gültigen UUID. Zusätzliche Pfade, Parameter oder freie Texte sind nicht erlaubt.

| Eingabe | Ergebnis |
|---|---|
| `kal://123e4567-e89b-12d3-a456-426614174000` | Gültiger, anklickbarer CMI-Verweis |
| `kal://keine-uuid` | Text bleibt sichtbar, aber nicht anklickbar |
| `kal://123e4567-e89b-12d3-a456-426614174000?aktion=öffnen` | Nicht anklickbar, da zusätzliche Parameter enthalten sind |
| `https://example.org` | Normaler Weblink, unverändert |

Diese Prüfung schützt davor, dass fehlerhafte oder manipulierte Ziele an eine lokale Anwendung übergeben werden.

## Fehlerbehebung

### Beim Klicken geschieht nichts

Prüfe, ob CMI und der `kal`-Protokoll-Handler auf deinem Gerät installiert sind. Je nach Browser musst du das Öffnen der externen Anwendung einmal bestätigen.

### Der Verweis ist nicht anklickbar

Prüfe den Link auf Tippfehler. Nach `kal://` darf nur eine gültige UUID stehen, optional gefolgt von einem abschliessenden `/`.

### Der Link funktioniert auf einem anderen Gerät nicht

Der Protokoll-Handler wird lokal pro Gerät eingerichtet. Bitte deine IT-Verantwortlichen, die CMI-Integration auf dem betroffenen Gerät zu prüfen.
