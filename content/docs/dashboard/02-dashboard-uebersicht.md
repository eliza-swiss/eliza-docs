---
title: "Dashboard-Übersicht und Widgets"
description: ""
weight: "2"
tags:
  - "widgets"
  - "übersicht"
  - "wetter"
  - "geburtstage"
  - "zeiterfassung"
  - "dms"
  - "prozesse"
---


# Dashboard-Übersicht und Widgets

Das Dashboard bietet verschiedene Widgets, die dir auf einen Blick wichtige Informationen anzeigen. In diesem Kapitel lernst du alle verfügbaren Widgets kennen und erfährst, wie du sie optimal nutzt.

## Verfügbare Widgets

Je nach Konfiguration und aktivierten Modulen stehen dir verschiedene Widgets zur Verfügung:

| Widget | Beschreibung | Voraussetzung |
|--------|--------------|---------------|
| **Favoriten** | Schnellzugriff auf markierte Objekte | Immer verfügbar |
| **Shortcuts** | Benutzerdefinierte Verknüpfungen | Immer verfügbar |
| **Benachrichtigungen** | Ungelesene Nachrichten | Immer verfügbar |
| **Wetter** | Aktuelle Wetterdaten | Widget aktiviert |
| **Geburtstage** | Anstehende Geburtstage | Organisation-Modul |
| **Zeiterfassung** | Timer und Arbeitszeiten | Zeiterfassung-Modul |
| **DMS** | Zuletzt geöffnete Dokumente | DMS-Modul |
| **Prozesse** | Offene Genehmigungen | Prozesse-Modul |
| **Streams** | Aktivitäten und Nachrichten | Streams-Modul |
| **Tutorials** | Aktive Kurse | Tutorials-Modul |

## Dashboard anpassen

Du bestimmst selbst, welche Widgets du siehst und in welcher Reihenfolge. Die Einstellung gilt nur für dich und auf allen deinen Geräten.

### Anpassungsmodus öffnen

Klicke oben rechts im Dashboard auf «Dashboard anpassen». Jedes Widget zeigt nun eine kleine Werkzeugleiste:

| Symbol | Wirkung |
|--------|---------|
| Griff (sechs Punkte) | Zum Ziehen kannst du das Widget an einer beliebigen Stelle packen, der Griff zeigt es nur an. Mit der Tastatur: Griff anwählen, Pfeil hoch oder runter drücken |
| Pfeil hoch, Pfeil runter | Widget um eine Position verschieben |
| Auge | Widget ausblenden |

Hat deine Administration eine fixe Widget-Reihenfolge vorgegeben («Fix»), fehlen Griff und Pfeile: Die Reihenfolge lässt sich dann nicht verschieben. Ausblenden funktioniert weiterhin, ausser bei Pflicht-Widgets.

Jede Änderung wird sofort gespeichert; du siehst die Meldung «Layout gespeichert». Mit «Fertig» verlässt du den Modus.

### Ausgeblendete Widgets zurückholen

Ein ausgeblendetes Widget bleibt im Anpassungsmodus als abgedunkelte Karte an seinem Platz stehen, mit dem Hinweis «Ausgeblendet» und dem Knopf «Einblenden». Du kannst es auch in diesem Zustand verschieben. Im normalen Dashboard ist es unsichtbar und lädt im Browser nichts nach.

### Standard wiederherstellen

Im Anpassungsmodus findest du oben rechts «Standard wiederherstellen». Damit gilt wieder die ursprüngliche Reihenfolge, und alle Widgets sind eingeblendet. ELIZA fragt vorher nach, weil deine eigene Anordnung dabei verloren geht.

### Gut zu wissen

- Die drei Fristen-Karten (überfällig, heute, demnächst) sind ein gemeinsames Widget.
- Ein Widget ohne aktuelle Einträge, etwa Geburtstage, ist im normalen Betrieb unsichtbar und erscheint im Anpassungsmodus als Platzhalter, damit du es verschieben kannst.
- Ob ein Widget überhaupt verfügbar ist, hängt von den aktivierten Modulen und den Dashboard-Einstellungen deiner Administration ab. Ein Widget, dessen Modul später eingeschaltet wird, erscheint an der Stelle, die du ihm zuvor gegeben hast.

### Vorgaben deiner Administration

Deine Administration kann dir Favoriten, Shortcuts und Widgets fürs Dashboard bereitstellen. Du erkennst sie am Chip **«Vorgabe»**. Sie stehen oben, vor deinen eigenen Einträgen.

| Du siehst | Das bedeutet |
|-----------|--------------|
| Schloss | Fest vorgegeben. Du kannst den Eintrag nicht ausblenden. |
| Auge | Ein Vorschlag. Klick aufs Auge, und er verschwindet aus deinem Dashboard. |
| «2 ausgeblendete Vorgaben» | Klapp die Liste auf und klick beim gewünschten Eintrag auf «Einblenden». |

Legst du selbst denselben Favoriten oder Shortcut an, erscheint er nur einmal.

**Widgets:**

- Zeigt ein Widget im Anpassungsmodus ein Schloss statt eines Auges, ist es Pflicht. Du kannst es verschieben, aber nicht ausblenden.
- Hat deine Administration ein Widget ausgeschaltet, fehlt es ganz.
- Gibt deine Administration eine Reihenfolge vor, startet dein Dashboard so. Verschiebst du selbst etwas, gilt deine Reihenfolge. «Standard wiederherstellen» bringt die Vorgabe zurück.
- Steht «Die Reihenfolge der Widgets gibt deine Administration vor.», kannst du die Widgets nicht verschieben. Ausblenden geht weiterhin, ausser bei Pflicht-Widgets.

## Favoriten-Widget

Das Favoriten-Widget zeigt alle Objekte, die du als Favorit markiert hast.

### Ansichtsmodi

Du kannst zwischen zwei Ansichten wechseln:

**Karten-Ansicht (Standard):**
- Favoriten werden als Kacheln dargestellt
- Zeigt Icon, Titel und Objekttyp
- Ideal für visuelle Übersicht

**Tabellen-Ansicht:**
- Favoriten werden in einer Liste dargestellt
- Zeigt zusätzliche Details wie Datum
- Ideal für viele Favoriten

### Favoriten sortieren

Du kannst die Reihenfolge deiner Favoriten per Drag & Drop anpassen:

1. Fahre mit der Maus über einen Favoriten
2. Halte die linke Maustaste gedrückt
3. Ziehe den Favoriten an die gewünschte Position
4. Lasse die Maustaste los

> **💡 Tipp:** Die Sortierung wird automatisch gespeichert und bleibt auch nach einem Neustart erhalten.

### Favoriten verwalten

Über das **Plus-Symbol** (+) kannst du das Favoriten-Verwaltungsfenster öffnen:

- **Suche**: Finde Objekte zum Hinzufügen
- **Kategorien**: Filtere nach Objekttypen
- **Entfernen**: Lösche einzelne Favoriten

## Shortcuts-Widget

Shortcuts sind benutzerdefinierte Verknüpfungen zu beliebigen Seiten.

### Shortcut erstellen

1. Klicke auf das **Plus-Symbol** (+) im Shortcuts-Widget
2. Fülle das Formular aus:
   - **Titel**: Name der Verknüpfung
   - **URL**: Ziel-Adresse (z.B. `/crm/contacts/`)
   - **Icon**: Wähle ein passendes Symbol
   - **Farbe**: Wähle eine Farbe für die Darstellung
3. Klicke auf **Speichern**

### Verfügbare Farben

| Farbe | Verwendung |
|-------|------------|
| **Blau** | Standard, allgemeine Links |
| **Grün** | Positive Aktionen, Erstellen |
| **Rot** | Wichtige oder kritische Links |
| **Lila** | Spezielle Bereiche |
| **Orange** | Warnungen, Aufmerksamkeit |
| **Türkis** | Alternative Hervorhebung |
| **Grau** | Neutrale Links |

### Shortcuts bearbeiten

1. Fahre mit der Maus über einen Shortcut
2. Klicke auf das **Bearbeiten-Symbol** (Stift)
3. Ändere die gewünschten Felder
4. Klicke auf **Speichern**

### Shortcuts löschen

1. Fahre mit der Maus über einen Shortcut
2. Klicke auf das **Löschen-Symbol** (Papierkorb)
3. Bestätige die Löschung

> **⚠️ Wichtig:** Gelöschte Shortcuts können nicht wiederhergestellt werden.

## Wetter-Widget

Das Wetter-Widget zeigt die aktuelle Wetterlage für deinen Standort.

**Angezeigte Informationen:**
- Aktuelle Temperatur
- Wetterbedingungen (sonnig, bewölkt, Regen, etc.)
- Wetter-Symbol

> **💡 Tipp:** Das Wetter-Widget muss von einem Administrator in den Dashboard-Einstellungen aktiviert werden.

## Geburtstags-Widget

Das Geburtstags-Widget zeigt anstehende Geburtstage von Mitarbeitern.

**Funktionen:**
- Zeigt Geburtstage der nächsten Tage
- Klick auf Namen öffnet das Mitarbeiterprofil
- Automatische Aktualisierung

**Voraussetzung:** Das Organisation-Modul muss aktiviert sein und Mitarbeiter müssen Geburtsdaten hinterlegt haben.

## Zeiterfassungs-Widget

Das Zeiterfassungs-Widget ermöglicht schnellen Zugriff auf die Zeiterfassung.

### Timer starten

1. Klicke auf **Timer starten** im Widget
2. Optional: Wähle ein Projekt oder eine Aufgabe
3. Der Timer beginnt zu laufen

### Timer stoppen

1. Der laufende Timer wird im Widget angezeigt
2. Klicke auf **Stoppen**
3. Die Zeit wird automatisch erfasst

### Schnelle Zeiterfassung

Du kannst auch direkt Arbeitszeiten erfassen:

1. Klicke auf **Zeit erfassen**
2. Fülle das Schnellformular aus:
   - Projekt/Aufgabe
   - Dauer oder Start-/Endzeit
   - Beschreibung
3. Klicke auf **Speichern**

**Voraussetzung:** Das Zeiterfassungs-Modul muss aktiviert sein.

## DMS-Widget

Das DMS-Widget zeigt deine zuletzt geöffneten Dokumente.

**Funktionen:**
- Liste der letzten 5-10 Dokumente
- Direkter Klick öffnet das Dokument
- Zeigt Dokumentname und Typ

**Schnellaktionen:**
- Dokument öffnen
- Dokument herunterladen

**Voraussetzung:** Das DMS-Modul muss aktiviert sein.

## Prozesse-Widget

Das Prozesse-Widget zeigt offene Genehmigungsanfragen.

**Angezeigte Informationen:**
- Anzahl offener Genehmigungen
- Prozessname und -status
- Direkter Link zur Genehmigung

**Voraussetzung:** Das Prozesse-Modul muss aktiviert sein.

## Benachrichtigungs-Widget

Das Benachrichtigungs-Widget zeigt ungelesene Nachrichten.

**Funktionen:**
- Anzahl ungelesener Benachrichtigungen
- Vorschau der neuesten Nachrichten
- Direkter Link zum Posteingang

> **💡 Tipp:** Klicke auf eine Benachrichtigung, um sie direkt zu öffnen.

## Streams-Widgets

Es gibt zwei Streams-Widgets:

### Nachrichten-Widget
- Zeigt Team-Nachrichten und Diskussionen
- Ermöglicht schnelle Antworten

### Aktivitäten-Widget
- Zeigt neueste Aktivitäten im System
- Änderungen an Objekten
- Neue Erstellungen

**Voraussetzung:** Das Streams-Modul muss aktiviert sein.

## Tutorials-Widget

Das Tutorials-Widget zeigt deine aktiven Lernkurse.

**Funktionen:**
- Liste aktiver Kurse
- Fortschrittsanzeige
- Direkter Link zum Kurs

**Voraussetzung:** Das Tutorials-Modul muss aktiviert sein.

## Dashboard-Layout

Das Dashboard-Layout passt sich automatisch an verschiedene Bildschirmgrössen an:

| Gerät | Darstellung |
|-------|-------------|
| **Desktop** | Mehrspaltiges Layout mit allen Widgets |
| **Tablet** | Zweispaltiges Layout |
| **Smartphone** | Einspaltiges Layout, Widgets untereinander |

## Widget-Aktualisierung

Die Widgets aktualisieren sich automatisch:

- **Sofort**: Bei Aktionen (z.B. Favorit hinzufügen)
- **Periodisch**: Alle paar Minuten für dynamische Daten
- **Manuell**: Seite neu laden für vollständige Aktualisierung

> **💡 Tipp:** Du kannst einzelne Widgets manuell aktualisieren, indem du auf das Aktualisieren-Symbol klickst (falls vorhanden).

## Best Practices

- ✅ **Favoriten organisieren**: Halte die Anzahl überschaubar (max. 10-15)
- ✅ **Shortcuts nutzen**: Erstelle Shortcuts für häufig besuchte Seiten
- ✅ **Widgets priorisieren**: Konzentriere dich auf die wichtigsten Widgets
- ✅ **Regelmässig aufräumen**: Entferne nicht mehr benötigte Favoriten

## Nächste Schritte

Erfahre mehr über die Verwaltung von Favoriten und Shortcuts:

→ [Favoriten und Shortcuts]({{< ref "03-favoriten" >}})
