---
title: "Favoriten und Shortcuts"
description: ""
weight: "3"
tags:
  - "favoriten"
  - "shortcuts"
  - "schnellzugriff"
  - "drag-drop"
  - "organisation"
---


# Favoriten und Shortcuts

Favoriten und Shortcuts sind deine persönlichen Werkzeuge für schnellen Zugriff auf wichtige Inhalte in ELIZA. In diesem Kapitel lernst du, wie du sie effektiv einsetzt.

## Favoriten

Favoriten sind Verknüpfungen zu ELIZA-Objekten, die du häufig verwendest. Du kannst fast jedes Objekt in ELIZA als Favorit markieren.

### Unterstützte Objekttypen

Du kannst folgende Objekte als Favoriten speichern:

| Modul | Objekttypen |
|-------|-------------|
| **CRM** | Kontakte, Organisationen |
| **DMS** | Dokumente, Ordner |
| **Projekte** | Projekte, Aufgaben |
| **Issues** | Tickets, Vorgänge |
| **Prozesse** | Prozesse, Workflows |
| **Organisation** | Mitarbeiter, Teams |
| **Verträge** | Verträge |
| **KPI** | Kennzahlen |
| **OKR** | Objectives, Key Results |

### Favorit hinzufügen

**Methode 1: Über das Stern-Symbol**

1. Öffne ein beliebiges ELIZA-Objekt (z.B. einen Kontakt)
2. Suche das **Stern-Symbol** (☆) in der Aktionsleiste
3. Klicke auf das Stern-Symbol
4. Das Symbol wird ausgefüllt (★) und der Favorit erscheint auf dem Dashboard

**Methode 2: Über das Favoriten-Widget**

1. Gehe zum Dashboard
2. Klicke im Favoriten-Widget auf das **Plus-Symbol** (+)
3. Es öffnet sich das Favoriten-Verwaltungsfenster
4. Nutze die **Suche**, um ein Objekt zu finden
5. Klicke auf **Hinzufügen**

### Favorit entfernen

**Methode 1: Vom Objekt aus**

1. Öffne das als Favorit markierte Objekt
2. Klicke auf das **ausgefüllte Stern-Symbol** (★)
3. Der Favorit wird entfernt

**Methode 2: Vom Dashboard aus**

1. Fahre mit der Maus über den Favoriten im Widget
2. Klicke auf das **Löschen-Symbol** (Papierkorb oder X)
3. Bestätige die Löschung im Bestätigungsdialog

> **💡 Tipp:** Das Löschen eines Favoriten löscht nicht das Objekt selbst, nur die Verknüpfung!

### Favoriten sortieren

Du kannst die Reihenfolge deiner Favoriten per Drag & Drop anpassen:

**Desktop:**
1. Fahre mit der Maus über einen Favoriten
2. Halte die linke Maustaste gedrückt
3. Ziehe den Favoriten an die gewünschte Position
4. Lasse die Maustaste los

**Mobil (Touch-Geräte):**
1. Halte den Finger auf einem Favoriten gedrückt
2. Nach kurzem Halten aktiviert sich der Drag-Modus
3. Ziehe den Favoriten an die gewünschte Position
4. Hebe den Finger an

Die neue Reihenfolge wird automatisch gespeichert.

### Ansichtsmodi

Das Favoriten-Widget bietet zwei Ansichtsmodi:

**Karten-Ansicht:**
```
┌────────┐  ┌────────┐  ┌────────┐
│  📄    │  │  👤    │  │  📁    │
│ Dok A  │  │ Müller │  │ Ordner │
└────────┘  └────────┘  └────────┘
```

- Visuelle Darstellung mit Icons
- Gut für wenige Favoriten
- Übersichtlich auf grossen Bildschirmen

**Tabellen-Ansicht:**
```
┌──────────────────────────────────┐
│ Typ     │ Name      │ Datum     │
├─────────┼───────────┼───────────┤
│ Dokument│ Dok A     │ 01.06.25  │
│ Kontakt │ Müller    │ 15.05.25  │
│ Ordner  │ Ordner    │ 10.05.25  │
└──────────────────────────────────┘
```

- Kompakte Listendarstellung
- Zeigt zusätzliche Informationen
- Ideal für viele Favoriten

**Ansicht wechseln:**
1. Suche das Ansicht-Symbol im Favoriten-Widget (Kacheln oder Liste)
2. Klicke darauf, um zwischen den Modi zu wechseln

### Favoriten durchsuchen

Bei vielen Favoriten kannst du die Suchfunktion nutzen:

1. Öffne das Favoriten-Verwaltungsfenster
2. Gib einen Suchbegriff in das Suchfeld ein
3. Die Liste wird gefiltert

## Shortcuts

Shortcuts sind benutzerdefinierte Verknüpfungen zu beliebigen Seiten in ELIZA oder externen URLs.

### Unterschied zu Favoriten

| Eigenschaft | Favoriten | Shortcuts |
|-------------|-----------|-----------|
| **Ziel** | ELIZA-Objekte | Beliebige URLs |
| **Erstellung** | Stern-Symbol am Objekt | Manuell eingeben |
| **Anpassung** | Nur Reihenfolge | Titel, Icon, Farbe |
| **Dynamik** | Zeigt Objektänderungen | Statischer Link |

### Shortcut erstellen

1. Klicke im Shortcuts-Widget auf das **Plus-Symbol** (+)
2. Das Shortcut-Formular öffnet sich
3. Fülle die Felder aus:

**Pflichtfelder:**
- **Titel**: Anzeigename des Shortcuts (max. 250 Zeichen)
- **URL**: Zieladresse (z.B. `/crm/contacts/` oder `https://extern.ch`). Sie muss mit `/`, `http://`, `https://` oder `mailto:` beginnen

**Optionale Felder:**
- **Icon**: Material Design Icon (Standard: `link`)
- **Farbe**: Hintergrundfarbe (Standard: Blau)

4. Klicke auf **Speichern**

### Verfügbare Icons

Du kannst aus einer Vielzahl von Material Design Icons wählen. Beliebte Icons:

| Icon-Name | Verwendung |
|-----------|------------|
| `link` | Allgemeine Links (Standard) |
| `folder` | Ordner, Verzeichnisse |
| `description` | Dokumente |
| `person` | Personen, Kontakte |
| `business` | Unternehmen |
| `event` | Termine, Kalender |
| `assignment` | Aufgaben, Tickets |
| `dashboard` | Übersichten |
| `settings` | Einstellungen |
| `email` | E-Mail, Kommunikation |

> **💡 Tipp:** Eine vollständige Liste findest du unter [Material Design Icons](https://fonts.google.com/icons).

### Verfügbare Farben

| Farbe | Code | Empfohlene Verwendung |
|-------|------|----------------------|
| Blau | `blue` | Allgemeine Links (Standard) |
| Grün | `green` | Positive Aktionen, Erstellen, Start |
| Rot | `red` | Wichtige Links, Löschaktionen |
| Lila | `purple` | Spezielle Bereiche, Premium |
| Orange | `orange` | Warnungen, Aufmerksamkeit |
| Türkis | `teal` | Alternative Hervorhebung |
| Grau | `grey` | Archivierte, weniger wichtige Links |

### Shortcut bearbeiten

1. Fahre mit der Maus über den Shortcut
2. Klicke auf das **Bearbeiten-Symbol** (Stift-Icon)
3. Ändere die gewünschten Felder
4. Klicke auf **Speichern**

### Shortcut löschen

1. Fahre mit der Maus über den Shortcut
2. Klicke auf das **Löschen-Symbol** (Papierkorb-Icon)
3. Bestätige die Löschung im Bestätigungsdialog

> **⚠️ Wichtig:** Gelöschte Shortcuts können nicht wiederhergestellt werden.

### Shortcuts sortieren

Genau wie Favoriten kannst du Shortcuts per Drag & Drop sortieren:

1. Halte den Shortcut gedrückt
2. Ziehe ihn an die gewünschte Position
3. Lasse los

## Praktische Beispiele

### Beispiel 1: Tägliche Arbeitsoberfläche

**Favoriten:**
- Aktuelles Projekt
- Wichtigste Kontakte
- Häufig verwendete Dokumente

**Shortcuts:**
- `/timetracker/` → "Zeiterfassung" (grün, `schedule`)
- `/dms/inbox/` → "DMS Posteingang" (blau, `inbox`)
- `https://mail.company.ch` → "E-Mail" (orange, `email`)

### Beispiel 2: Projektmanager

**Favoriten:**
- Alle aktiven Projekte
- Wichtigste Kunden

**Shortcuts:**
- `/projects/` → "Projektliste" (blau, `folder`)
- `/projects/reports/` → "Berichte" (lila, `assessment`)
- `/kpi/` → "Kennzahlen" (grün, `trending_up`)

### Beispiel 3: Support-Mitarbeiter

**Favoriten:**
- Häufige Kundenanfragen
- Standard-Dokumente

**Shortcuts:**
- `/issues/` → "Tickets" (blau, `confirmation_number`)
- `/issues/create/` → "Neues Ticket" (grün, `add_circle`)
- `/crm/contacts/` → "Kundenliste" (türkis, `people`)

## Berechtigungen

| Aktion | Berechtigung |
|--------|--------------|
| Eigene Favoriten anzeigen | Jeder Benutzer |
| Favoriten hinzufügen/entfernen | Jeder Benutzer |
| Eigene Shortcuts verwalten | Jeder Benutzer |
| Favoriten anderer Benutzer sehen | `view_favorite` |
| Favoriten anderer löschen | `delete_favorite` |

> **💡 Tipp:** Standardmässig kann jeder Benutzer nur seine eigenen Favoriten und Shortcuts sehen und verwalten.

## Häufige Fragen

### Warum verschwindet mein Favorit?

**Mögliche Ursachen:**
- Das Objekt wurde gelöscht
- Du hast keinen Zugriff mehr auf das Objekt
- Das Objekt wurde archiviert

**Lösung:** Prüfe, ob das Objekt noch existiert und du darauf zugreifen kannst.

### Wie viele Favoriten kann ich haben?

Es gibt keine technische Grenze, aber für eine gute Übersicht empfehlen wir maximal 15-20 Favoriten.

### Kann ich Shortcuts zu externen Seiten erstellen?

Ja. Gib die ganze Adresse ein, z.B. `https://google.ch`. Für eine Seite in ELIZA reicht der Teil ab `/`, z.B. `/dms/`. Für eine E-Mail-Adresse schreibst du `mailto:` davor.

### Werden meine Favoriten synchronisiert?

Ja, Favoriten und Shortcuts werden serverseitig gespeichert und sind auf allen Geräten verfügbar.

## Best Practices

- ✅ **Qualität vor Quantität**: Wenige, wichtige Favoriten sind besser als viele unwichtige
- ✅ **Aussagekräftige Shortcut-Titel**: Verwende klare, kurze Namen
- ✅ **Konsistente Farben**: Nutze Farben systematisch (z.B. Grün für Erstellen)
- ✅ **Regelmässig aufräumen**: Entferne nicht mehr benötigte Einträge
- ❌ **Nicht überladen**: Zu viele Einträge verringern die Übersicht

## Nächste Schritte

Erfahre mehr über das Benachrichtigungssystem:

→ [Benachrichtigungen und Posteingang]({{< ref "04-benachrichtigungen" >}})
