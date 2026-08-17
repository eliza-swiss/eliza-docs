---
title: "Labels und Kategorisierung"
description: ""
weight: "6"
tags:
  - "labels"
  - "kategorisierung"
  - "farben"
  - "colorpicker"
  - "scoped-labels"
  - "chips"
---


# Labels und Kategorisierung

Labels sind farbige Schlagworte, mit denen du zusammengehörende Inhalte quer durch ELIZA kennzeichnest. Sie gelten modulübergreifend — deshalb steht dieses Kapitel hier und nicht in einem einzelnen Modulhandbuch. Du erfährst, wie du Labels anlegst, einfärbst, an Inhalten vergibst und damit schnell alles findest, was zu einem Thema gehört.

## Was Labels sind

Labels bilden einen **gemeinsamen Themen-Pool über alle Module hinweg**. Ein Label, das du einmal anlegst, steht überall zur Verfügung — unabhängig davon, in welchem Modul du es erstellt hast.

**Labels kannst du vergeben bei:**

| Objekt | Modul | Vergabe |
|--------|-------|---------|
| **Prozess** | Prozesse | Bearbeitungsformular und Detailseite (Übersicht + Metadaten) |
| **Prozessschritt** | Prozesse | Bearbeitungsformular und Detailseite |
| **Dokument** | DMS | Bearbeitungsformular und Detailseite |
| **Kurs** | Wissen | Bearbeitungsformular und Detailseite |
| **Lektion / Artikel** | Wissen | Bearbeitungsformular und Detailseite |
| **Formular-Vorlage** | Formulare | Bearbeitungsformular und Detailseite |

Angelegt und verwaltet werden Labels zentral unter **Prozesse → Labels** — sie gelten aber für alle oben genannten Objekte.

> **💡 Einheitliche Bedienung:** Auf jeder dieser Detailseiten läuft die Bearbeitung genau gleich ab — dasselbe Etiketten-Symbol, dieselbe Auswahl, dieselbe Bestätigung. Was du hier lernst, gilt für Prozesse, Dokumente, Wissensinhalte und Formulare gleichermassen.

**Abgrenzung zu anderen Ordnungsmitteln:**

| Ordnungsmittel | Charakter |
|----------------|-----------|
| **Ordner / Prozesshierarchie** | Ein Inhalt gehört an genau eine Stelle |
| **Dokumentart / Prozessart** | Beschreibt, *was* der Inhalt ist |
| **Labels** | Ein Inhalt kann beliebig viele Labels haben — Querschnittsthemen über die Struktur hinweg |

> **💡 Tipp:** Nutze die Hierarchie für die Grundordnung und Labels für Themen, die sich nicht in die Struktur einsortieren lassen (z.B. "ISO 9001", "Sicherheitskritisch", "Onboarding").

---

## Labels verwalten

**Prozesse → Labels**

In der Label-Übersicht legst du neue Labels an und bearbeitest bestehende.

| Feld | Beschreibung |
|------|--------------|
| **Titel** | Name des Labels, wie er auf dem farbigen Chip erscheint |
| **Beschreibung** | Erklärung, wofür das Label verwendet wird (erscheint als Tooltip und im Detail-Modal) |
| **Farbe** | Farbe aus der ELIZA-Farbpalette, ausgewählt über den visuellen Colorpicker |

Ein Klick auf ein Label in der Übersicht führt dich zur **Label-Detailseite**. Dort siehst du das Label in derselben farbigen Darstellung wie an den Inhalten selbst.

---

## Farbe wählen (Colorpicker)

Die Farbe wählst du nicht mehr aus einer kurzen Liste, sondern direkt visuell aus der vollständigen ELIZA-Farbpalette — derselbe Colorpicker, den du auch von den Kategorien im Meldungsmodul kennst.

![Colorpicker für Prozesslabels](/docs/dashboard/images/processlabel_colorpicker.png)

**So wählst du eine Farbe:**

1. Klicke im Label-Formular beim Feld **Farbe** auf den Knopf **"Farbe wählen"** — der runde Punkt davor zeigt die aktuelle Farbe
2. Wähle unter **"Wähle eine Grundfarbe:"** die passende Farbfamilie (z.B. Blau, Grün, Orange)
3. Passe darunter bei **"Helligkeit anpassen:"** die Abstufung an — heller oder dunkler
4. Bestätige mit **"Auswählen"** — mit **"Abbrechen"** verwirfst du die Vorschau und die bisherige Farbe bleibt bestehen
5. Speichere das Label

**Verfügbare Farben:**

- 19 Grundfarben (Rot, Pink, Violett, Indigo, Blau, Cyan, Türkis, Grün, Limette, Gelb, Bernstein, Orange, Braun, Grau, Blaugrau und weitere)
- Je fünf hellere (`lighten-1` bis `lighten-5`) und vier dunklere Abstufungen (`darken-1` bis `darken-4`)
- Zusätzlich Schwarz und Weiss

> **💡 Gute Lesbarkeit ohne Zutun:** Auf hellen Label-Farben stellt ELIZA die Schrift automatisch dunkel dar, auf dunklen Farben hell. Du musst dich also nicht um den Kontrast kümmern.

Die neue Farbe erscheint sofort überall dort, wo das Label verwendet wird. Die Zuordnungen zu Inhalten bleiben dabei unverändert.

---

## Scoped Labels

Enthält der Titel eines Labels einen **Doppelpunkt**, wird es als **Scoped Label** dargestellt — zweigeteilt in Bereich und Wert.

**Format:** `Bereich:Wert`

**Beispiele:**

| Titel | Darstellung |
|-------|-------------|
| `Norm:ISO 9001` | Bereich "Norm", Wert "ISO 9001" |
| `Risiko:hoch` | Bereich "Risiko", Wert "hoch" |
| `Standort:Bern` | Bereich "Standort", Wert "Bern" |

So entsteht auch bei vielen Labels eine übersichtliche, gruppierte Darstellung. Scoped Labels verhalten sich sonst genau wie normale Labels: gleiche Farbwahl, gleiche Zuordnung, gleiche Suche.

---

## Labels an Inhalten vergeben

Es gibt zwei Wege — beide führen zum selben Ergebnis.

Das folgende Video zeigt dir die Bearbeitung Schritt für Schritt:

[https://app.arcade.software/share/oe40oLnGvPWCaGY4GNzG](https://app.arcade.software/share/oe40oLnGvPWCaGY4GNzG)

### Weg 1: Im Bearbeitungsformular

1. Öffne den Prozess (bzw. das Dokument oder den Kurs) zum Bearbeiten
2. Wähle im Feld **"Labels"** die gewünschten Labels
3. Speichere die Änderungen

### Weg 2: Direkt auf der Detailseite (Inline-Editor)

Schneller geht es direkt auf der Detailseite, ohne den Inhalt zu bearbeiten. **Der Ablauf ist in allen Bereichen identisch** — bei Prozessen, Prozessschritten, Dokumenten, Kursen, Lektionen und Formular-Vorlagen findest du dasselbe Symbol, dieselbe Auswahl und dieselben Knöpfe:

1. Klicke im Labels-Bereich auf das **Etiketten-Symbol** 🏷️ (Tooltip: "Labels bearbeiten")
2. Es öffnet sich die Auswahl mit allen Labels als Chips
3. Nutze das Suchfeld **"Label suchen …"**, um bei vielen Labels schnell das richtige zu finden
4. **Klicke einen Chip an**, um das Label zuzuweisen — ein weiterer Klick entfernt die Zuweisung wieder
5. Bestätige mit **"Übernehmen"** — oder verwirf deine Änderungen mit **"Abbrechen"**

> **⚠️ Wichtig:** Die Änderungen werden erst mit **"Übernehmen"** gespeichert. Solange du nicht bestätigst, bleibt alles wie vorher.

Das Etiketten-Symbol erscheint nur, wenn du den Inhalt auch bearbeiten darfst. Bei einem freigegebenen Prozess sind die Labels seiner Prozessschritte deshalb schreibgeschützt — genau wie der übrige Inhalt. Ändern lassen sie sich dort über eine Arbeitskopie.

### Neues Label direkt anlegen

Musst du ein Label anlegen, das es noch nicht gibt, brauchst du dafür nicht in die Label-Verwaltung zu wechseln:

1. Öffne den Inline-Editor wie oben beschrieben
2. Tippe den Namen im Feld **"Neues Label …"** ein
3. Klicke auf **"Farbe wählen"** und bestimme die Farbe im Colorpicker
4. Klicke auf **"Hinzufügen"**

Das Label wird angelegt und dem Inhalt direkt zugewiesen. Deine bereits getroffene Auswahl bleibt dabei erhalten.

> **💡 Hinweis:** Der Bereich zum Anlegen erscheint nur, wenn du berechtigt bist, neue Labels zu erstellen.

---

## Verknüpfte Inhalte anzeigen

Labels sind nicht nur Dekoration — sie sind der schnellste Weg zu allem, was zum selben Thema gehört.

**Klicke auf einen farbigen Label-Chip**, und ein Fenster zeigt dir alle verknüpften Inhalte:

- Gruppiert nach Inhaltstyp (Prozesse, Dokumente, Kurse, Lektionen …) mit Anzahl
- Mit Beschreibung des Labels, falls hinterlegt
- Direkte Links zu den Inhalten

Es erscheinen dabei **nur Inhalte, die du auch sehen darfst**. Geschützte Prozesse oder Dokumente ohne Leseberechtigung bleiben dir verborgen — auch dann, wenn sie mit dem Label verknüpft sind.

> **📱 Auch mobil:** Das Fenster ist auf Smartphone und Tablet vollständig bedienbar und lässt sich intern scrollen.

---

## Berechtigungen

| Aktion | Voraussetzung |
|--------|---------------|
| **Labels sehen** | Leserecht auf Labels, Prozesse **oder** Dokumente — wer Inhalte lesen darf, sieht auch deren Labels |
| **Labels an einem Inhalt zuweisen** | Bearbeitungsrecht auf dem jeweiligen Inhalt (Prozess, Dokument, Kurs …) plus Leserecht auf Labels |
| **Neue Labels anlegen** | Recht "Label hinzufügen" im Prozessmodul |
| **Labels bearbeiten und löschen** | Verwaltungsrecht auf Labels (in der Regel Prozess-Administratoren) |

> **💡 Hinweis:** Labels, die für dich nicht sichtbar sind, bleiben an einem Inhalt erhalten, auch wenn du seine Labels bearbeitest und speicherst. Du kannst also nichts versehentlich entfernen, was du gar nicht siehst.

---

## Tipps für eine klare Farbwelt

- **Farbfamilien bilden**: Verwende dieselbe Grundfarbe für Labels, die fachlich zusammengehören
- **Dunkle Abstufungen für Kritisches**: Sie stechen stärker hervor und eignen sich für wichtige oder sicherheitsrelevante Themen
- **Helle Abstufungen für Ergänzendes**: Kategorien, die nur nebenbei mitlaufen sollen
- **Bedeutung nie nur über die Farbe transportieren**: Kombiniere immer eine verständliche Bezeichnung — Farbe allein ist nicht für alle Benutzer eindeutig
- **Scoped Labels bei vielen Kategorien**: `Norm:…`, `Risiko:…`, `Standort:…` halten grosse Label-Sammlungen übersichtlich
- **Sparsam bleiben**: Wenige, konsequent genutzte Labels sind wertvoller als viele, die nur einmal vorkommen

---

## Zusammenfassung

✅ Du weisst, dass Labels modulübergreifend für Prozesse, Dokumente und Wissensinhalte gelten
✅ Du kannst Labels anlegen und ihre Farbe mit dem Colorpicker bestimmen
✅ Du kennst Scoped Labels für gruppierte Kategorien
✅ Du vergibst Labels direkt auf der Detailseite über den Inline-Editor
✅ Du findest über einen Klick auf einen Label-Chip alle verknüpften Inhalte

**Weiterführend:**

- [Favoriten und Shortcuts]({{< ref "03-favoriten" >}}) — Inhalte für den schnellen Zugriff merken
- [Prozesse verwalten]({{< ref "02-prozesse-verwalten" >}}) — Labels im Kontext der Prozessverwaltung
- [Dokumente erstellen]({{< ref "02-dokumente-erstellen" >}}) — Labels an Dokumenten
- [Labels, Themen und Suche]({{< ref "09-labels-themen-suche" >}}) — Themenfilter im Wissenshub
