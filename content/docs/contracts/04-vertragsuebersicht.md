---
title: "Vertragsübersicht"
description: ""
weight: "4"
tags:
  - "overview"
  - "search"
  - "filter"
---


# Vertragsübersicht

In diesem Kapitel lernst du, wie du Verträge mit Filter, Suche und Sortierung schnell findest, auf der Startseite der Verträge und in jedem Vertragsordner.

## Wo du die Vertragsliste findest

- **Startseite der Verträge**: Klicke im Menü auf **Verträge**. Die Liste zeigt alle Verträge, die du sehen darfst, über alle Ordner hinweg
- **Vertragsordner**: Öffne einen Ordner unter **Vertragsordner**. Die Liste zeigt die Verträge dieses Ordners, auf Wunsch samt Unterordnern

Beide Listen funktionieren gleich. Was im Folgenden für die Startseite steht, gilt auch im Ordner.

## Die Startseite im Überblick

![Startseite der Verträge mit zugeklapptem Filter: (1) aktive Filter mit Kreuz und «Alle zurücksetzen», (2) Filterkopf zum Aufklappen, (3) Suchfeld, (4) Einträge pro Seite und Seitenwechsel, (5) Spalten, Excel und neuer Vertrag](/docs/contracts/images/vertraege_liste_filter_zu.svg)

1. **Aktive Filter**: Jeder gewählte Filter steht als Hinweis über der Liste. Mit dem Kreuz entfernst du ihn, mit **Alle zurücksetzen** alle auf einmal
2. **Filter**: Ein Klick auf den Kopf klappt den Filterbereich auf und zu. Die Zahl in Klammern zeigt, wie viele Filter gerade gelten
3. **Suchen**: Suchbegriff für Titel, Beschreibung, Vertragspartner, Vertragsart, verantwortliche Person und Organisationseinheit
4. **Seiten**: Die Tabelle zeigt 50 Verträge pro Seite. Unter **Pro Seite** wählst du 25, 50, 100 oder 250
5. **Spalten, Excel, Vertrag**: Spalten ein- und ausblenden, die gefilterte Liste exportieren, einen neuen Vertrag erfassen

### Beim ersten Besuch

- Der Filterbereich ist zugeklappt, damit die Tabelle gleich oben steht
- Vorausgewählt sind die Status **entwurf** und **aktiv**. Du siehst sie oben als Hinweise
- Klappst du den Filter auf, bleibt er beim nächsten Besuch offen. Klappst du ihn zu, bleibt er zu. Das gilt für die Startseite und alle Vertragsordner gemeinsam

## Filtern

![Aufgeklappter Filter: (1) aktive Filter, (2) Filterkopf, (3) gewählte Chips sind kräftig umrandet, (4) bei vielen Einträgen grenzt ein Suchfeld die Chips ein](/docs/contracts/images/vertraege_filter_offen.svg)

Klappe den **Filter** auf und klicke die gewünschten Chips an. Ein zweiter Klick auf einen gewählten Chip hebt die Auswahl wieder auf. Die Tabelle passt sich sofort an.

| Abschnitt | Was du wählst |
|-----------|---------------|
| **Status** | entwurf, inaktiv, aktiv, abgelaufen |
| **Freigabestatus** | entwurf, zur Prüfung, Geprüft, freigegeben. Nur sichtbar, wenn der Freigabe-Workflow eingeschaltet ist ([Kapitel 9]({{< ref "09-freigabe-workflow" >}})) |
| **Vertragsart** | die Vertragsarten, die in der Liste vorkommen |
| **Vertragsende** | abgelaufen oder Ende in den nächsten 30, 90 oder 365 Tagen. Hier gilt immer nur eine Wahl |
| **Geldfluss** | Cash-in (Einnahmen) oder Cash-out (Ausgaben) |
| **Verantwortung** | verantwortliche Personen und Organisationseinheiten |
| **Vertragspartner** | die Vertragspartner der Verträge in der Liste |

**So wirken mehrere Filter zusammen:**

- **Im selben Abschnitt** genügt einer der Werte: «entwurf» und «aktiv» zeigt beide
- **Verschiedene Abschnitte** müssen alle zutreffen: «aktiv» und «Ende 90 Tage» zeigt nur aktive Verträge, die in den nächsten 90 Tagen enden

Die Chips zeigen nur Werte aus Verträgen, die du sehen darfst. Personen, Partner oder Vertragsarten aus fremden Verträgen tauchen im Filter nicht auf.

Bei mehr als zwölf Personen und Organisationseinheiten oder mehr als zwölf Vertragspartnern erscheint über den Chips ein Suchfeld. Tippe einige Buchstaben, und es bleiben nur die passenden Chips stehen.

## Suchen

Gib im Feld **Suchen** über der Tabelle einen oder mehrere Begriffe ein. Gesucht wird in:

- Titel und Beschreibung des Vertrags
- Vertragspartner
- Vertragsart
- verantwortlicher Person und Organisationseinheit

Bei mehreren Wörtern muss jedes Wort irgendwo vorkommen: «Wartung Lift» findet «Wartungsvertrag Lift Hauptgebäude», aber nicht «Wartungsvertrag Netzwerk». Die Suche wirkt zusätzlich zu den Filtern.

## Filter weitergeben und merken

Filter und Suchbegriff stehen in der Adresse des Browsers, zum Beispiel:

```
/contracts/contracts/?status=active&end=90&q=Wartung
```

- **Weitergeben**: Kopiere die Adresse und schicke sie einer Kollegin oder einem Kollegen. Sie sehen dieselbe Auswahl, aber nur die Verträge, die sie sehen dürfen
- **Als Lesezeichen oder Favorit speichern**: So hast du eine häufig gebrauchte Auswahl mit einem Klick
- **Zurück und Vorwärts** im Browser wechseln zwischen deinen letzten Auswahlen
- **Letzte Auswahl**: Öffnest du die Liste wieder ohne Filter in der Adresse, stellt ELIZA deine letzte Auswahl wieder her. Jeder Vertragsordner merkt sich seine eigene Auswahl

Alte Links und Favoriten auf «Abgelaufene Verträge» führen automatisch zum Status **abgelaufen**.

## Die Tabelle

### Spalten

| Spalte | Inhalt |
|--------|--------|
| **Titel** | Name des Vertrags, darunter der Ordnerpfad |
| **Vertragsart** | Art des Vertrags |
| **Verantwortung** | verantwortliche Person und Organisationseinheit |
| **Vertragspartner** | Partner und beteiligte Kontakte |
| **Beginn** und **Ende** | Laufzeit |
| **Geldfluss** | Cash-in oder Cash-out |
| **Jährliche Kosten** | Betrag pro Jahr aus Betrag und Zahlungsperiodizität |
| **Status** | Vertragsstatus |
| **Freigabestatus** | nur mit eingeschaltetem Freigabe-Workflow |
| **Aktuelle Wertflüsse** | nur mit eingeschalteten Wertflüssen |

Über **Spalten** blendest du Spalten ein und aus. Der Titel bleibt immer sichtbar. Der Browser merkt sich deine Auswahl.

### Sortieren

Klicke auf einen Spaltentitel, um nach dieser Spalte zu sortieren, ein zweiter Klick kehrt die Richtung um. Ohne Wahl ist die Liste nach Titel sortiert. Nach «Jährliche Kosten» und den Wertflüssen lässt sich nicht sortieren.

### Seiten

Die Tabelle lädt jeweils nur die angezeigte Seite, auch bei tausenden Verträgen bleibt sie deshalb schnell. Unten links steht, wie viele Verträge der Filter findet und wie viele es insgesamt sind.

## Excel-Export

Ein Klick auf **Excel** lädt genau die Verträge herunter, die du gerade siehst: mit allen Filtern, dem Suchbegriff und der Sortierung, über alle Seiten. Im Vertragsordner gilt auch der Schalter «inkl. Unterordner».

Der Export enthält die Angaben der Verträge. Vertragsdokumente sind nicht dabei.

## Verträge in einem Vertragsordner

![Vertragsordner: (1) Unterordner als Liste über den Verträgen, (2) Schalter «inkl. Unterordner», (3) Total pro Jahr der gefilterten Verträge](/docs/contracts/images/vertragsordner_liste.svg)

1. **Unterordner**: Die Unterordner stehen als Liste über den Verträgen. Ein Klick öffnet den Unterordner
2. **inkl. Unterordner**: Eingeschaltet zeigt die Tabelle auch alle Verträge in den Ordnern darunter, über alle Stufen. Filter, Suche und Excel-Export beziehen sie mit ein
3. **Total pro Jahr**: Die jährlichen Einnahmen und Ausgaben der gefilterten Verträge. Verträge in verschiedenen Währungen werden pro Währung zusammengezählt

Die Suche im Ordner findet Verträge. Vertragsdokumente findest du über die Suche oben in ELIZA oder unter **Vertragsdokumente**.

## Praktische Beispiele

### Verträge, die bald enden

1. Filter aufklappen
2. **Status aktiv** und **Ende 90 Tage** wählen
3. In der Tabelle nach **Ende** sortieren

Tipp: Speichere diese Adresse als Favorit und prüfe die Liste jede Woche.

### Alle Verträge eines Partners

1. Filter aufklappen
2. Unter **Vertragspartner** den Namen ins Suchfeld tippen und den Chip wählen
3. Unter **Status** auch «inaktiv» und «abgelaufen» wählen, wenn du die ganze Geschichte sehen willst

### Was kostet die Informatik pro Jahr?

1. Den Ordner **Informatik** öffnen
2. **inkl. Unterordner** einschalten
3. Unter **Geldfluss** «Cash-out» wählen
4. Unten steht das **Total pro Jahr**

### Entwürfe aufräumen

1. Unter **Status** nur **entwurf** wählen
2. Die Entwürfe prüfen und aktivieren oder löschen

## Häufige Fragen

### Warum sehe ich nicht alle Verträge?

- **Filter aktiv**: Schau oben bei den Hinweisen nach und klicke auf **Alle zurücksetzen**. Beachte: Vorausgewählt sind nur «entwurf» und «aktiv», inaktive und abgelaufene Verträge sind deshalb zuerst ausgeblendet
- **Berechtigungen**: Verträge in geschützten Ordnern siehst du nur als Mitglied des Ordnerteams ([Kapitel 5]({{< ref "05-berechtigungskonzept" >}}))
- **Weitere Seiten**: Unten rechts wechselst du die Seite

### Warum fehlt der Filter «Freigabestatus»?

Er erscheint nur, wenn der Freigabe-Workflow für Verträge eingeschaltet ist.

### Der Filter ist bei mir immer offen. Wie bekomme ich ihn zu?

Klicke einmal auf den Filterkopf. ELIZA merkt sich, dass du ihn zugeklappt haben willst.

### Kann ich meine Filter speichern?

Ja, über die Adresse: Speichere sie als Lesezeichen oder Favorit. Ausserdem stellt ELIZA beim nächsten Besuch deine letzte Auswahl wieder her.

## Nächste Schritte

1. **[Kapitel 5: Berechtigungskonzept]({{< ref "05-berechtigungskonzept" >}})**: Wer welche Verträge sieht
2. **[Kapitel 9: Freigabe-Workflow]({{< ref "09-freigabe-workflow" >}})**: Verträge prüfen und freigeben
