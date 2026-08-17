---
title: "Prozesse verwalten"
description: ""
weight: "2"
tags:
  - "prozesse"
  - "erstellen"
  - "bearbeiten"
  - "hierarchie"
  - "organisation"
---


# Prozesse verwalten

Dieses Kapitel zeigt dir, wie du Prozesse erstellst, bearbeitest und in einer logischen Hierarchie organisierst.

## Neuen Prozess erstellen

### Schritt-für-Schritt Anleitung

**Prozesse → Prozesse → + Neu**

1. Navigiere zu **Prozesse → Prozesse**
2. Klicke auf den Button **"+ Neu"** (grün, oben rechts)
3. Fülle das Formular aus:

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| **Nummer** | Nein | Eindeutige Prozessnummer (z.B. "1.0", "2.1") |
| **Titel** | Ja | Aussagekräftiger Name des Prozesses |
| **Beschreibung** | Nein | Detaillierte Beschreibung des Prozesszwecks |
| **Übergeordneter Prozess** | Nein | Wähle den Hauptprozess, falls es ein Unterprozess ist |

4. Klicke auf **"Speichern"**

> **💡 Tipp:** Verwende eine konsistente Nummerierung, z.B. "1.0" für Hauptprozesse und "1.1", "1.2" für Unterprozesse.

### Erweiterte Felder

Nach dem Erstellen kannst du weitere Details hinzufügen:

| Feld | Beschreibung |
|------|--------------|
| **Prozessverantwortung** | Hauptverantwortliche Person |
| **Prozessverantwortung Stv.** | Stellvertretende Person |
| **Verantwortliche Funktion** | Funktion/Rolle als Verantwortliche |
| **Prüfer-Funktion** | Funktion, die Prozesse prüft |
| **Freigeber-Funktion** | Funktion, die Prozesse freigibt |
| **Team** | Mitarbeitende, die am Prozess arbeiten |
| **Admins** | Benutzer mit Admin-Rechten für diesen Prozess |
| **Gültig ab** | Startdatum der Gültigkeit |
| **Gültig bis** | Enddatum der Gültigkeit |
| **Periodizität** | Intervall für die Überprüfung |
| **Labels** | Kategorisierung mit Labels |

---

## Prozess-Hierarchie

### Struktur verstehen

Prozesse können in einer hierarchischen Struktur organisiert werden:

<pre>
Führungsprozesse (Hauptprozess, Level 0)
├── Strategieplanung (Unterprozess, Level 1)
│   ├── Zielsetzung (Unterprozess, Level 2)
│   └── Ressourcenplanung (Unterprozess, Level 2)
├── Managementbewertung (Unterprozess, Level 1)
└── Risikomanagement (Unterprozess, Level 1)
</pre>

### Hauptprozess erstellen

1. Erstelle einen neuen Prozess
2. Lasse das Feld **"Übergeordneter Prozess"** leer
3. Der Prozess wird als Hauptprozess angelegt

### Unterprozess erstellen

1. Erstelle einen neuen Prozess
2. Wähle im Feld **"Übergeordneter Prozess"** den gewünschten Hauptprozess
3. Der Prozess wird als Unterprozess angelegt

> **⚠️ Wichtig:** Die Tiefe der Hierarchie ist technisch unbegrenzt, aber mehr als 3-4 Ebenen werden unübersichtlich.

### Prozess verschieben

Du kannst einen Prozess in der Hierarchie verschieben:

1. Öffne den Prozess zum Bearbeiten
2. Ändere das Feld **"Übergeordneter Prozess"**
3. Speichere die Änderungen

> **⚠️ Wichtig:** Beim Verschieben werden alle Unterprozesse mitbewegt.

---

## Prozessnummern

### Empfohlenes Schema

| Ebene | Format | Beispiel |
|-------|--------|----------|
| Hauptprozess | X.0 | 1.0, 2.0, 3.0 |
| Unterprozess Level 1 | X.Y | 1.1, 1.2, 2.1 |
| Unterprozess Level 2 | X.Y.Z | 1.1.1, 1.1.2 |

### Beispiel-Struktur

```
1.0 Führungsprozesse
  1.1 Strategische Planung
  1.2 Managementbewertung
  1.3 Kontinuierliche Verbesserung

2.0 Kernprozesse
  2.1 Vertrieb
    2.1.1 Kundenakquise
    2.1.2 Angebotserstellung
  2.2 Produktion
  2.3 Lieferung

3.0 Unterstützungsprozesse
  3.1 Personal
  3.2 IT
  3.3 Infrastruktur
```

> **✅ Best Practice:** Halte die Nummerierung konsistent und dokumentiere das Schema für alle Beteiligten.

---

## Verantwortlichkeiten zuweisen

### Prozessverantwortung

Die Prozessverantwortung ist die hauptverantwortliche Person für einen Prozess.

**Aufgaben der Prozessverantwortung:**
- Prozess aktuell halten
- Änderungen koordinieren
- Freigaben anstochen
- Ansprechpartner für Fragen

**Zuweisen:**
1. Öffne den Prozess zum Bearbeiten
2. Wähle im Feld **"Prozessverantwortung"** eine Person aus
3. Optional: Wähle eine stellvertretende Person
4. Speichere die Änderungen

### Funktionen statt Personen

Für grössere Organisationen empfiehlt sich die Zuweisung von Funktionen:

| Feld | Beschreibung |
|------|--------------|
| **Verantwortliche Funktion** | Funktion, die für den Prozess verantwortlich ist |
| **Prüfer-Funktion** | Funktion, die Prozesse prüfen darf |
| **Freigeber-Funktion** | Funktion, die Prozesse freigeben darf |

> **💡 Tipp:** Funktionen werden im Organisations-Modul definiert und ermöglichen flexiblere Berechtigungen.

### Team und Admins

**Team**: Mitarbeitende, die am Prozess mitarbeiten dürfen

**Admins**: Benutzer mit erweiterten Rechten für diesen spezifischen Prozess

---

## Labels und Kategorisierung

### Labels verwenden

Labels helfen, Prozesse zu kategorisieren und schnell zu finden.

**Beispiele für Labels:**
- Führungsprozess
- Kernprozess
- Unterstützungsprozess
- ISO 9001
- Sicherheitskritisch

### Labels zuweisen

**Im Bearbeitungsformular:**

1. Öffne den Prozess zum Bearbeiten
2. Im Feld **"Labels"** wähle vorhandene Labels oder erstelle neue
3. Speichere die Änderungen

**Direkt auf der Prozess-Detailseite:**

1. Klicke im Labels-Bereich auf das **Etiketten-Symbol** 🏷️
2. Klicke die gewünschten Labels an (nochmals klicken entfernt die Zuweisung)
3. Bestätige mit **"Übernehmen"**

### Labels verwalten

**Prozesse → Labels**

Hier kannst du Labels erstellen und verwalten:

| Feld | Beschreibung |
|------|--------------|
| **Titel** | Name des Labels |
| **Beschreibung** | Erklärung wofür das Label verwendet wird |
| **Farbe** | Farbe aus der ELIZA-Farbpalette, gewählt über den visuellen Colorpicker |

> **💡 Mehr dazu:** Colorpicker, Scoped Labels, Inline-Bearbeitung und Berechtigungen sind ausführlich im modulübergreifenden Kapitel [Labels und Kategorisierung]({{< ref "06-labels" >}}) beschrieben — Labels gelten auch für Dokumente, Kurse und Formular-Vorlagen.

---

## Sichtbarkeit und Schutz

### Sichtbarkeitseinstellungen

| Einstellung | Bedeutung |
|-------------|-----------|
| **Normal** | Prozess ist für alle mit Leseberechtigung sichtbar |
| **Geschützt** | Nur für Team, Admins und Verantwortliche sichtbar |

### Geschützten Prozess erstellen

1. Öffne den Prozess zum Bearbeiten
2. Setze **"Sichtbarkeit"** auf **"Geschützt"**
3. Stelle sicher, dass Team und Admins korrekt zugewiesen sind
4. Speichere die Änderungen

> **⚠️ Wichtig:** Bei geschützten Prozessen können nur autorisierte Benutzer den Inhalt sehen.

---

## Prozess-Farben

### Farbcodierung

Prozesse können farblich markiert werden für bessere visuelle Unterscheidung in der Prozesslandkarte.

**Verfügbare Farben:**
- Materialfarben (red, pink, purple, blue, cyan, teal, green, lime, yellow, orange, etc.)
- Helligkeitsstufen (lighten-1 bis lighten-4, darken-1 bis darken-4)

### Farben setzen

**Einzelner Prozess:**
1. Öffne den Prozess zum Bearbeiten
2. Wähle **"Hintergrundfarbe"** und **"Textfarbe"**
3. Speichere

**Hierarchie-Farben:**

Für Hauptprozesse kannst du Farben automatisch auf alle Unterprozesse anwenden:

1. Öffne einen Hauptprozess (ohne übergeordneten Prozess)
2. Klicke auf **"Farben setzen"**
3. Wähle Basis- und Textfarbe
4. Die Unterprozesse erhalten automatisch hellere Abstufungen

> **💡 Tipp:** Verwende konsistente Farben pro Prozesskategorie (z.B. Blau für Führungsprozesse, Grün für Kernprozesse).

---

## Prozesse suchen und filtern

### Schnellsuche

Nutze das Suchfeld in der Prozessliste:
- Suche nach Nummer
- Suche nach Titel
- Suche nach Beschreibungsinhalt

### Filter

| Filter | Beschreibung |
|--------|--------------|
| **Status** | Nach Freigabestatus filtern |
| **Label** | Nach Label filtern |
| **Verantwortung** | Nach Prozessverantwortung filtern |

### Prozesslandkarte

Die Prozesslandkarte bietet eine visuelle Übersicht:

**Prozesse → Prozesslandkarte**

- Klicke auf einen Prozess, um Details zu sehen
- Klappe Hierarchien auf/zu
- Nutze die Farbcodierung zur Orientierung

---

## Prozess löschen

### Voraussetzungen

- Du benötigst die Berechtigung `delete_prozesse`
- Oder du bist Admin des Prozesses

### Vorgehen

1. Öffne den Prozess
2. Klicke auf **"Löschen"** (roter Button)
3. Bestätige die Löschung

> **⚠️ Wichtig:** Das Löschen eines Hauptprozesses löscht auch alle Unterprozesse!

### Alternative: Archivieren

Statt Löschen kannst du Prozesse archivieren:
- Prozess bleibt erhalten, aber nicht aktiv
- Kann bei Bedarf reaktiviert werden
- Siehe [Kapitel 4: Workflow]({{< ref "04-workflow-freigabe" >}})

---

## Best Practices

### ✅ Empfehlungen

- **Konsistente Nummerierung**: Verwende ein einheitliches Schema
- **Aussagekräftige Titel**: Der Titel sollte den Prozesszweck klar kommunizieren
- **Hierarchie begrenzen**: Maximal 3-4 Ebenen für Übersichtlichkeit
- **Verantwortung zuweisen**: Jeder Prozess braucht eine klare Verantwortung
- **Labels nutzen**: Kategorisiere für bessere Filterung

### ❌ Häufige Fehler

- **Zu tiefe Hierarchien**: Werden schnell unübersichtlich
- **Inkonsistente Nummerierung**: Erschwert die Orientierung
- **Fehlende Verantwortung**: Prozesse ohne Verantwortliche werden nicht gepflegt
- **Zu viele Hauptprozesse**: Gruppiere logisch zusammengehörige Prozesse

---

## FAQ

### Wie viele Hierarchie-Ebenen sind sinnvoll?

Wir empfehlen maximal 3-4 Ebenen. Beispiel:
- Ebene 0: Prozesskategorie (Führungs-, Kern-, Unterstützungsprozesse)
- Ebene 1: Hauptprozess
- Ebene 2: Teilprozess
- Ebene 3: Detailprozess (nur wenn nötig)

### Kann ich Prozesse zwischen Hauptprozessen verschieben?

Ja, ändere einfach den übergeordneten Prozess beim Bearbeiten.

### Was passiert mit Unterprozessen beim Löschen?

Unterprozesse werden mit dem Hauptprozess gelöscht. Archiviere stattdessen, wenn du die Daten behalten möchtest.

---

## Diskussion zu einem Prozess

Falls dein Administrator die **Diskussions-Card** für Prozesse aktiviert hat, erscheint unten auf der Prozess-Detailseite eine **Diskussion** mit Reagieren, Kommentieren und Gesehen-Tracking — analog zu LinkedIn.

💡 Die Funktionsweise ist im News & Events-Handbuch beschrieben: → [**Diskussion: Reagieren, Kommentieren, Gesehen**]({{< ref "06-diskussion" >}})

Sobald die Diskussion aktiviert ist, ersetzt sie das frühere kleinere Kommentar-Feld auf der Prozess-Detailseite. Prozess-Admins werden bei neuen Kommentaren automatisch benachrichtigt.

---

## Nächste Schritte

- **[Kapitel 3: Prozessschritte]({{< ref "03-prozessschritte" >}})**: Dokumentiere die einzelnen Aktivitäten
- **[Kapitel 4: Workflow]({{< ref "04-workflow-freigabe" >}})**: Verstehe den Freigabeprozess

---

## Zusammenfassung

✅ Du kannst neue Prozesse erstellen
✅ Du verstehst die Prozess-Hierarchie
✅ Du kannst Verantwortlichkeiten zuweisen
✅ Du weisst, wie Labels und Farben verwendet werden
✅ Du kannst Prozesse suchen und filtern
