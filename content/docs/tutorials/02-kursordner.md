---
title: "Ordner"
description: ""
weight: "2"
tags:
  - "ordner"
  - "kursordner"
  - "folder"
  - "organisation"
  - "struktur"
  - "verwaltung"
---


# Ordner

Ordner sind Container, die mehrere thematisch zusammengehörende Kurse und Handbücher gruppieren. Sie helfen dir, dein Wissen übersichtlich zu organisieren. Im Code heissen sie weiterhin "Folder" — im UI sprechen wir je nach Kontext von "Ordner" oder "Ordner".

## Was sind Ordner?

Ein Ordner:

- **Gruppiert Kurse und Handbücher** thematisch (z.B. "Onboarding", "Sicherheit", "QM-Wissen")
- **Definiert Berechtigungen** für alle enthaltenen Inhalte
- **Ermöglicht Massenanmeldungen** für mehrere Kurse gleichzeitig
- **Bietet Übersichten** über Teilnehmer und Fortschritt

Ein Ordner kann **gleichzeitig Schulungs-Kurse und Handbücher** enthalten — beide Modi nutzen die gleiche Ordnerstruktur. In der Ordner-Detailansicht werden Kurse und Handbücher getrennt dargestellt.

### Typische Ordner-Struktur

```text
📁 Mitarbeiter-Onboarding
   ├── 📘 Tag 1: Willkommen im Unternehmen   (Schulung)
   ├── 📘 Tag 2: IT-Systeme und Zugänge       (Schulung)
   └── 📖 Onboarding-Handbuch                 (Handbuch)

📁 Qualitätsmanagement
   ├── 📘 QM-Grundlagen                       (Schulung)
   ├── 📖 QM-Handbuch                         (Handbuch)
   └── 📖 Audit-Leitfaden                     (Handbuch)

📁 Sicherheit am Arbeitsplatz
   ├── 📘 Brandschutz                         (Schulung mit Quiz)
   ├── 📘 Erste Hilfe                         (Schulung)
   └── 📖 Notfall-Handbuch                    (Handbuch)
```

---

## Ordner erstellen

### Voraussetzungen

Du benötigst die Berechtigung `add_folder` oder musst Mitglied der Gruppe "Tutorials (Admin)" sein.

### Variante 1: Via Wizard (empfohlen)

Der schnellste Weg führt über den Wizard auf der Wissenshub-Startseite:

1. Im Wissenshub auf **Hinzufügen** klicken
2. In Schritt 1 einen Inhalt wählen (z.B. "Schulungskurs" oder "Handbuch")
3. In Schritt 2 auf **"Neuer Ordner"** klicken — der Ordner wird direkt aus dem Wizard heraus erstellt, ohne den Wizard zu verlassen
4. Schritt 3 ausfüllen — der neue Inhalt landet im frischen Ordner

### Variante 2: Direkt im Ordner-Bereich

1. **Navigiere zu**: Wissen & Lernen → Ordner
2. **Klicke auf**: "Ordner hinzufügen" (grüner Button)
3. **Fülle die Felder aus**:
   - **Titel** (Pflicht): Aussagekräftiger Name
   - **Beschreibung**: Detaillierte Beschreibung des Ordnerinhalts
   - **Titelbild** / **Cover-Bild**: Visuelles Erkennungsmerkmal (optional). Wenn kein Bild gesetzt ist, zeigt ELIZA ein Ordner-Icon als Platzhalter
4. **Klicke auf**: "Speichern"

Der neue Ordner wird im Status "Entwurf" erstellt.

---

## Ordner-Einstellungen

### Grundeinstellungen

| Feld | Beschreibung |
|------|--------------|
| **Titel** | Name des Ordners (max. 255 Zeichen) |
| **Beschreibung** | Ausführliche Beschreibung, unterstützt Markdown |
| **Titelbild** | Bild zur visuellen Kennzeichnung |
| **Reihenfolge** | Position in der Ordnerliste |

### Status

| Status | Bedeutung |
|--------|-----------|
| **Entwurf** | Nur für Admins sichtbar |
| **Zur Prüfung** | Wartet auf Freigabe |
| **Freigegeben** | Für berechtigte Benutzer sichtbar |
| **Abgelaufen** | Überprüfung fällig |
| **Archiviert** | Nicht mehr aktiv |

> **⚠️ Wichtig:** Nur freigegebene Ordner sind für normale Benutzer sichtbar.

### Sichtbarkeit

Du kannst zwischen zwei Sichtbarkeitsstufen wählen:

| Sichtbarkeit | Bedeutung |
|--------------|-----------|
| **Normal** | Alle Benutzer mit `view_folder`-Berechtigung können den Ordner sehen |
| **Geschützt** | Nur explizit berechtigte Benutzer (Team, Admin, Orgunit) haben Zugriff |

---

## Admin-Team und Berechtigungen

### Admin-Team

Das Admin-Team eines Ordners hat volle Verwaltungsrechte:

- Kurse hinzufügen und bearbeiten
- Lektionen erstellen und verwalten
- Anmeldungen verwalten
- Ordner-Einstellungen ändern

**So fügst du Admins hinzu:**

1. Öffne den Ordner zur Bearbeitung
2. Wähle im Feld "Admin-Team" die gewünschten Benutzer
3. Speichere die Änderungen

### Team

Das Team hat eingeschränkte Rechte:

- Kurse und Lektionen ansehen
- Eigene Anmeldungen verwalten

### Beteiligte Organisationseinheiten

Du kannst Organisationseinheiten (Orgunits) zuweisen, um Berechtigungen nach Abteilung zu vergeben:

1. Wähle die gewünschten Organisationseinheiten
2. Alle Benutzer in diesen Einheiten erhalten automatisch Zugriff

> **💡 Tipp:** Nutze Organisationseinheiten für automatisierte Berechtigungsvergabe bei organisatorischen Änderungen.

---

## Inhalte im Ordner: Kurs oder Handbuch hinzufügen

In der Ordner-Detailansicht findest du oben rechts Buttons, um neue Inhalte anzulegen:

- **Schulungskurs hinzufügen** — legt einen Kurs mit `mode="training"` an
- **Handbuch hinzufügen** — legt einen Kurs mit `mode="manual"` an

Beide landen im selben Ordner und teilen sich die Ordner-Berechtigungen. In der Detailansicht werden sie in zwei eigenen Sektionen ("Schulungskurse" und "Handbücher") dargestellt.

> 💡 Sektionen ohne Inhalt (z.B. keine Handbücher im Ordner) werden ausgeblendet.

---

## Teilnehmerverwaltung

### Übersicht der Teilnehmer

**Wissen & Lernen → Ordner → [Ordner] → Teilnehmer verwalten**

Die Teilnehmerübersicht zeigt:

- Alle Anmeldungen für alle Kurse im Ordner
- Filtermöglichkeiten nach Kurs, Status, Datum
- Deadline-Warnungen für überfällige Anmeldungen

### Filterfunktionen

| Filter | Beschreibung |
|--------|--------------|
| **Kurse** | Nach spezifischen Kursen filtern |
| **Benutzer** | Nach Teilnehmern suchen |
| **Status** | Nach Anmeldestatus filtern |
| **Datum von/bis** | Nach Abschlussdatum filtern |

### Massenanmeldung

Du kannst mehrere Teilnehmer gleichzeitig zu mehreren Kursen anmelden:

1. **Navigiere zu**: Ordner → "Anmeldungen hinzufügen"
2. **Wähle die Kurse**: Mehrfachauswahl möglich
3. **Wähle die Teilnehmer**: Mehrfachauswahl möglich
4. **Setze gemeinsame Optionen**:
   - Startdatum
   - Frist für Kursabschluss
   - Nachricht an Teilnehmer
   - Unterschrift erforderlich
5. **Klicke auf**: "Anmeldungen erstellen"

> **💡 Tipp:** Die Massenanmeldung spart Zeit bei der Einarbeitung neuer Mitarbeiter.

### Excel-Export

Exportiere die Teilnehmerliste als Excel-Datei:

1. **Navigiere zu**: Teilnehmerübersicht
2. **Klicke auf**: Excel-Export-Button
3. Die Datei enthält:
   - Ordner-Informationen
   - Kursübersicht
   - Teilnehmerliste mit Fortschritt
   - Unterschriften (falls vorhanden)

---

## Batch-Operationen

### Mehrere Anmeldungen bearbeiten

1. Wähle die gewünschten Anmeldungen über die Checkboxen
2. Nutze die Toolbar für Batch-Aktionen:
   - **Bearbeiten**: Status, Fristen ändern
   - **Benachrichtigen**: E-Mail an ausgewählte Teilnehmer
   - **Löschen**: Anmeldungen entfernen

### Benachrichtigungen senden

Du kannst Teilnehmer über ihren Kursstatus benachrichtigen:

1. Wähle die Anmeldungen aus
2. Klicke auf "Benachrichtigen"
3. Verfasse die Nachricht
4. Sende die E-Mail

---

## Best Practices

### ✅ Empfehlungen

- **Thematische Gruppierung**: Fasse zusammengehörende Kurse in einem Ordner zusammen
- **Aussagekräftige Titel**: Verwende klare, beschreibende Namen
- **Berechtigungen planen**: Überlege vorab, wer Zugriff benötigt
- **Organisationseinheiten nutzen**: Vereinfacht die Berechtigungsverwaltung
- **Titelbild hinzufügen**: Verbessert die visuelle Orientierung

### ❌ Häufige Fehler

- Zu viele kleine Ordner erstellen (besser thematisch bündeln)
- Ordner im Entwurf belassen (Benutzer sehen nichts)
- Berechtigungen vergessen (Teilnehmer können nicht zugreifen)
- Keine Beschreibung hinzufügen (Zweck unklar)

---

## Ordner bearbeiten

### Grunddaten ändern

1. **Navigiere zum Ordner**
2. **Klicke auf das Bearbeiten-Symbol** (Stift-Icon)
3. **Ändere die gewünschten Felder**
4. **Speichere**

### Status ändern

Um einen Ordner freizugeben:

1. Öffne den Ordner zur Bearbeitung
2. Ändere den Status auf "Freigegeben"
3. Speichere die Änderungen

### Reihenfolge ändern

Die Reihenfolge der Ordner in der Liste kann über das Feld "Reihenfolge" angepasst werden. Niedrigere Werte werden zuerst angezeigt.

---

## Ordner archivieren/löschen

### Archivieren

Archivierte Ordner:

- Sind nicht mehr in der Standardansicht sichtbar
- Behalten alle Daten und Verknüpfungen
- Können bei Bedarf wiederhergestellt werden

### Löschen

> **⚠️ Achtung:** Das Löschen eines Ordners entfernt auch alle enthaltenen Kurse, Lektionen und Anmeldungen!

Zum Löschen:

1. Stelle sicher, dass keine aktiven Anmeldungen existieren
2. Öffne den Ordner
3. Klicke auf das Löschen-Symbol
4. Bestätige die Aktion

---

## Nächste Schritte

- **[Kapitel 3: Kurse]({{< ref "03-kurse" >}})**: Erstelle Kurse innerhalb deiner Ordner
- **[Kapitel 5: Kursanmeldungen]({{< ref "05-kursanmeldungen" >}})**: Vertiefe die Teilnehmerverwaltung
- **[Kapitel 7: Berechtigungen]({{< ref "07-berechtigungen" >}})**: Lerne das Berechtigungskonzept im Detail

---

## Zusammenfassung

✅ Du weisst, was Ordner sind und wofür sie verwendet werden
✅ Du kannst Ordner erstellen und konfigurieren
✅ Du verstehst die Berechtigungsoptionen (Admin-Team, Team, Orgunits)
✅ Du kannst Teilnehmer in Ordner-übergreifenden Übersichten verwalten
✅ Du kennst die Massenanmeldung und Batch-Operationen
