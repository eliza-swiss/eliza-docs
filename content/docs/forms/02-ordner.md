---
title: "Arbeiten mit Ordnern"
description: ""
weight: "2"
tags:
  - "ordner"
  - "berechtigungen"
  - "organisation"
---


## Was sind Formular-Ordner?

Ordner helfen dir, deine Formulare und Vorlagen zu organisieren. Du kannst Ordner nach Abteilungen, Projekten oder Themen strukturieren und für jedes Team eigene Berechtigungen setzen.

## Ordner-Übersicht

Die neue hierarchische Ordner-Übersicht zeigt alle deine Formular-Ordner auf einen Blick:

### Zugriff auf die Ordner-Übersicht
1. Klicke im Hauptmenü auf **Formulare**
2. Wähle **Ordner** aus
3. Du siehst jetzt eine Baumstruktur aller Ordner

### Funktionen der Ordner-Übersicht

**Hierarchische Darstellung**
- Alle Ordner werden in einer Baumstruktur angezeigt
- Die Einrückung zeigt die Hierarchie-Ebene
- Unterordner sind deutlich erkennbar
- Icons zeigen die Sichtbarkeit (🔒 Privat, 🔓 Geschützt, 📁 Öffentlich)

**Informationen auf einen Blick**
- **Verantwortliche Funktion**: Wer ist zuständig?
- **Freigebende Funktion**: Wer gibt frei?
- **Admin-Team**: Avatars aller Administratoren
- **Team**: Avatars aller Team-Mitglieder

**Filter nach Sichtbarkeit**
Nutze die Filter-Buttons oberhalb der Tabelle:
- **Alle**: Zeigt alle Ordner (mit Anzahl)
- **Öffentlich**: Nur öffentliche Ordner
- **Geschützt**: Nur geschützte Ordner
- **Privat**: Nur private Ordner

**Spalten anpassen**
- Unterhalb der Filter findest du "Spalten ein- und ausblenden"
- Klicke auf einen Spaltennamen zum Ein-/Ausblenden
- Deine Auswahl wird automatisch gespeichert

**Excel-Export**
- Klicke auf den **Excel** Button oberhalb der Tabelle
- Die gesamte Ordnerstruktur wird als Excel-Datei heruntergeladen
- Perfekt für Reports und Dokumentationen

## Ordner erstellen

### Neuen Top-Level Ordner erstellen

1. Klicke im Hauptmenü auf **Formulare**
2. Wähle **Ordner** aus
3. Klicke auf den Button **+ Ordner** (oben rechts)
4. Fülle folgende Felder aus:
   - **Titel**: Aussagekräftiger Name (z.B. "HR - Mitarbeiterbefragungen")
   - **Beschreibung**: Optionale Beschreibung des Ordner-Zwecks
   - **Übergeordneter Ordner**: Wähle einen Eltern-Ordner für Unterordner (optional)
5. Klicke auf **Speichern**

### Unterordner erstellen (Schnellmethode)

1. Öffne einen bestehenden Ordner in der Detail-Ansicht
2. Klicke oben auf den **Unterordner** Button
3. Der übergeordnete Ordner ist bereits vorausgewählt
4. Fülle die Details aus:
   - **Titel**: Name des Unterordners
   - **Beschreibung**: Optionale Beschreibung
   - **Berechtigungen vererben**: Standardmässig aktiviert
5. Klicke auf **Speichern**

> **💡 Tipp:** Die Schnellmethode spart Zeit, da der Parent-Ordner automatisch gesetzt wird!

## Berechtigungen festlegen

### Sichtbarkeit

Die Sicherheitsstufe gilt pro Ordner. Beim Anlegen eines Unterordners übernimmt sie die Stufe des übergeordneten Ordners als Startwert, du kannst sie ändern. Ist ein Ordner weniger streng als einer seiner übergeordneten Ordner, erscheint ein Hinweis. Auf der Ordnerseite siehst du zusätzlich die geerbten Admins, Teams und Organisationseinheiten; auf der Vorlagenseite stehen die Ordner-Admins als Empfänger von Mitteilungen.

Die Stufe schützt die Verwaltung (Ordner, Vorlagen, Auswertung), nicht das Ausfüllen: Aktive, gültige Formulare füllt jede angemeldete Person über den internen Link aus, unabhängig von der Stufe des Ordners.

Wähle eine der drei Sichtbarkeits-Stufen:

#### 🌐 Öffentlich
- Jeder authentifizierte Benutzer kann den Ordner sehen
- Ideal für allgemeine Formulare und Umfragen
- Beispiel: Mitarbeiter-Zufriedenheitsumfrage

#### 🔒 Geschützt
- Nur Administratoren und Team-Mitglieder können zugreifen
- Ideal für abteilungsspezifische Formulare
- Beispiel: HR-interne Bewertungsformulare

#### 🔐 Privat
- Nur Administratoren haben Zugriff
- Ideal für sensible oder in Entwicklung befindliche Formulare
- Beispiel: Vertrauliche Mitarbeiterbeurteilungen

### Benutzer-Rollen

#### Administratoren
- Volle Berechtigungen für den Ordner
- Können Ordner bearbeiten und löschen
- Können Berechtigungen ändern
- Können Vorlagen und Formulare erstellen

**So fügst du Administratoren hinzu:**
1. Öffne den Ordner
2. Klicke auf **Bearbeiten**
3. Im Feld **Administratoren** wähle Benutzer aus
4. Klicke auf **Speichern**

#### Team-Mitglieder
- Können Ordner sehen und darin arbeiten
- Können Vorlagen verwenden
- Können Formulare ausfüllen
- Können keine Ordner-Einstellungen ändern

**So fügst du Team-Mitglieder hinzu:**
1. Öffne den Ordner
2. Klicke auf **Bearbeiten**
3. Im Feld **Team** wähle Benutzer aus
4. Klicke auf **Speichern**

---

### Berechtigungen vererben

Wenn du eine Ordner-Hierarchie aufbaust, kannst du Berechtigungen automatisch vom übergeordneten Ordner übernehmen.

#### ✅ Berechtigungs-Vererbung aktiviert (Standard)

Wenn die Option **"Berechtigungen von übergeordnetem Ordner vererben"** aktiviert ist:

> **Ordner bearbeiten: "Recruiting"**
>
> Übergeordneter Ordner: **[Personal]**
>
> ☑ **Berechtigungen vererben**
>
> → Alle Berechtigungen werden vom Ordner "Personal" übernommen: Administratoren, Team-Mitglieder, Sichtbarkeit, Funktionen (Verantwortlich/Freigabe)
>
> **[Speichern]**

**Vorteile:**
- **Zentrale Verwaltung**: Ändere Berechtigungen nur im Haupt-Ordner
- **Konsistenz**: Alle Unterordner haben gleiche Berechtigungen
- **Zeitersparnis**: Keine manuellen Anpassungen in jedem Unterordner
- **Weniger Fehler**: Keine vergessenen Berechtigungen

**Beispiel-Hierarchie:**

```
📁 Personal (Admins: hr-team@firma.ch)
  ☑ Berechtigungen vererben
  📁 Recruiting
    → Admins: hr-team@firma.ch (geerbt)
  📁 Onboarding
    → Admins: hr-team@firma.ch (geerbt)
  📁 Mitarbeiterbeurteilungen
    → Admins: hr-team@firma.ch (geerbt)
```

**Anwendungsfall:**
Ideal für Abteilungs-Ordner, wo alle Unterordner vom gleichen Team verwaltet werden.

---

#### ❌ Berechtigungs-Vererbung deaktiviert

Wenn du die Option **"Berechtigungen vererben"** deaktivierst:

> **Ordner bearbeiten: "Vertrauliche Beurteilungen"**
>
> Übergeordneter Ordner: **[Personal]**
>
> ☐ **Berechtigungen vererben** _(deaktiviert)_
>
> | Feld | Wert | Hinweis |
> |------|------|---------|
> | Administratoren | `hr-lead@firma.ch` | Eigene Angabe |
> | Team | (leer) | Eigene Angabe |
> | Sichtbarkeit | Privat | Eigene Angabe |
>
> **[Speichern]**

**Vorteile:**
- **Feinsteuerung**: Individuelle Berechtigungen pro Unterordner
- **Sicherheit**: Restriktivere Berechtigungen für sensible Bereiche
- **Flexibilität**: Verschiedene Teams in verschiedenen Unterordnern

**Beispiel-Hierarchie:**

```
📁 Personal (Admins: hr-team@firma.ch, Sichtbarkeit: Geschützt)
  📁 Recruiting
    ☑ Berechtigungen vererben
    → Admins: hr-team@firma.ch (geerbt)
  📁 Vertrauliche Beurteilungen
    ☐ Berechtigungen vererben
    → Admins: nur hr-lead@firma.ch (eigene Angabe)
    → Sichtbarkeit: Privat (eigene Angabe)
```

**Anwendungsfall:**
Ideal für sensible Unterordner, die restriktivere Berechtigungen benötigen.

---

### Wann welche Option verwenden?

| Situation | Berechtigungen vererben | Grund |
|-----------|-------------------------|-------|
| Standard-Unterordner | ✅ Ja | Einfache Verwaltung |
| Sensible Daten | ❌ Nein | Mehr Sicherheit |
| Gleiche Team-Zuständigkeit | ✅ Ja | Konsistenz |
| Verschiedene Teams | ❌ Nein | Feinsteuerung |
| Viele Unterordner | ✅ Ja | Zeitersparnis |
| Spezielle Anforderungen | ❌ Nein | Flexibilität |

---

### Vererbung ändern

Du kannst die Vererbung jederzeit an- oder ausschalten:

**Von "Vererbt" zu "Eigene Berechtigungen":**
1. Öffne Unterordner zum Bearbeiten
2. Deaktiviere **"Berechtigungen vererben"**
3. Setze eigene Admins, Team und Sichtbarkeit
4. Speichere

> **⚠️ Wichtig:** Beim Deaktivieren werden **keine** Berechtigungen automatisch übernommen! Du musst alle Felder manuell setzen.

**Von "Eigene Berechtigungen" zu "Vererbt":**
1. Öffne Unterordner zum Bearbeiten
2. Aktiviere **"Berechtigungen vererben"**
3. Speichere

> **⚠️ Wichtig:** Deine bisherigen Einstellungen werden **überschrieben** durch die geerbten Berechtigungen!

---

## Ordner-Struktur aufbauen

### Flache Struktur
Einfach und übersichtlich für kleine Teams:
```
📁 HR Formulare
📁 Qualitätsmanagement
📁 Kundenbefragungen
📁 Schulungen
```

### Hierarchische Struktur
Für grössere Organisationen mit vielen Formularen:
```
📁 Personal
  📁 Recruiting
  📁 Onboarding
  📁 Mitarbeiterbeurteilungen
  📁 Austrittsgespräche

📁 Qualitätsmanagement
  📁 Audits
    📁 Interne Audits
    📁 Lieferantenaudits
  📁 Kundenfeedback
  📁 Prozessbewertungen
```

## Ordner verwalten

### Ordner bearbeiten
1. Öffne den Ordner
2. Klicke auf **Bearbeiten**
3. Ändere die gewünschten Felder
4. Klicke auf **Speichern**

### Ordner verschieben
1. Öffne den Ordner zum Bearbeiten
2. Ändere das Feld **Übergeordneter Ordner**
3. Speichere die Änderungen

**⚠️ Wichtig - Zirkuläre Referenzen werden verhindert:**

Das System schützt dich automatisch vor fehlerhaften Ordnerstrukturen:

- Du kannst einen Ordner **nicht als seinen eigenen Unterordner** auswählen
- Du kannst einen **Unterordner nicht als übergeordneten Ordner** wählen
- Nur Ordner, die eine gültige Hierarchie bilden, werden zur Auswahl angezeigt

**Beispiel (nicht möglich):**
```
📁 Personal
  📁 Recruiting
    📁 Onboarding

❌ "Personal" kann nicht "Onboarding" als Parent wählen
❌ "Recruiting" kann nicht "Personal" als Parent wählen
✅ "Onboarding" kann zu einem anderen Top-Level-Ordner verschoben werden
```

Diese intelligente Validierung stellt sicher, dass deine Ordnerstruktur immer funktioniert.

### Ordner löschen
**⚠️ Achtung**: Das Löschen eines Ordners löscht auch alle enthaltenen Unterordner und Vorlagen!

1. Öffne den Ordner
2. Klicke auf **Löschen**
3. Bestätige die Sicherheitsabfrage

**Tipp**: Nur der Ersteller des Ordners kann ihn löschen.

## Best Practices

### 📋 Namenskonventionen
Verwende konsistente Namen:
- `HR - [Zweck]` für Personalwesen
- `QM - [Zweck]` für Qualitätsmanagement
- `Kunde - [Zweck]` für Kundenbefragungen

### 🏷️ Strukturierung nach Zweck
Gruppiere nach:
- **Abteilung**: HR, QM, Vertrieb, etc.
- **Prozess**: Onboarding, Audit, Feedback
- **Häufigkeit**: Jährlich, Quartalsweise, Ad-hoc

### 🔒 Sicherheit beachten
- Verwende **Privat** für sensible Daten
- Setze spezifische Administratoren pro Ordner
- Überprüfe regelmässig die Berechtigungen

### 📊 Archivierung
Erstelle einen Archiv-Ordner für alte Formulare:
```
📁 Archiv
  📁 2023
  📁 2024
```

## Ordner-Detailansicht

In der Ordner-Detailansicht siehst du:

- **Unterordner**: Alle Kind-Ordner (nur wenn vorhanden)
  - Werden als Karten angezeigt
  - Mit Icon für Sichtbarkeit
  - Mit Beschreibung und Link
- **Vorlagen**: Alle Vorlagen in diesem Ordner
  - Tabellarische Übersicht
  - Mit Kategorie, Modus und Status
  - Direkt ausfüllbar über Aktions-Button
- **Schnellzugriff-Buttons**:
  - **Unterordner**: Erstellt neuen Unterordner mit automatischer Parent-Vorauswahl
  - **Assistent**: Startet Vorlagen-Erstellungs-Assistent für diesen Ordner

## Häufige Fragen

**Kann ich einen Ordner mehreren Eltern-Ordnern zuordnen?**
Nein, jeder Ordner hat maximal einen Eltern-Ordner.

**Was passiert mit den Formularen, wenn ich einen Ordner lösche?**
Die Vorlagen im Ordner werden gelöscht. Formulare, die bereits aus den Vorlagen erstellt wurden, bleiben erhalten, verlieren aber die Verbindung zur Vorlage.

**Können Team-Mitglieder neue Vorlagen erstellen?**
Team-Mitglieder können bestehende Vorlagen verwenden, aber keine neuen erstellen. Das ist nur Administratoren vorbehalten.

**Wie viele Ordner-Ebenen kann ich erstellen?**
Technisch unbegrenzt, aber wir empfehlen maximal 3-4 Ebenen für bessere Übersichtlichkeit.

## Nächste Schritte

- [Vorlagen erstellen]({{< ref "04-vorlagen" >}}) - Baue deine erste Vorlage
