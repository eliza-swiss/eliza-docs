---
title: "Kursordner"
description: ""
weight: "2"
tags:
  - "kursordner"
  - "folder"
  - "organisation"
  - "struktur"
  - "verwaltung"
---


# Kursordner

Kursordner sind Container, die mehrere thematisch zusammengehörende Kurse gruppieren. Sie helfen dir, deine Schulungsinhalte übersichtlich zu organisieren.

## Was sind Kursordner?

Ein Kursordner:

- **Gruppiert Kurse** thematisch (z.B. "Onboarding", "Sicherheit")
- **Definiert Berechtigungen** für alle enthaltenen Kurse
- **Ermöglicht Massenanmeldungen** für mehrere Kurse gleichzeitig
- **Bietet Übersichten** über Teilnehmer und Fortschritt

### Typische Kursordner-Struktur

```
📁 Mitarbeiter-Onboarding
   └── 📘 Tag 1: Willkommen im Unternehmen
   └── 📘 Tag 2: IT-Systeme und Zugänge
   └── 📘 Woche 1: Abteilungseinführung

📁 Qualitätsmanagement
   └── 📘 QM-Grundlagen
   └── 📘 Prozessdokumentation
   └── 📘 Auditierung

📁 Sicherheit am Arbeitsplatz
   └── 📘 Brandschutz
   └── 📘 Erste Hilfe
   └── 📘 Datenschutz-Basics
```

---

## Kursordner erstellen

### Voraussetzungen

Du benötigst die Berechtigung `add_folder` oder musst Mitglied der Gruppe "Tutorials (Admin)" sein.

### Schritt-für-Schritt

1. **Navigiere zu**: Wissen & Lernen → Kursordner
2. **Klicke auf**: "Kursordner hinzufügen" (grüner Button)
3. **Fülle die Felder aus**:
   - **Titel** (Pflicht): Aussagekräftiger Name
   - **Beschreibung**: Detaillierte Beschreibung des Ordnerinhalts
   - **Titelbild**: Visuelles Erkennungsmerkmal (optional)
4. **Klicke auf**: "Speichern"

Der neue Kursordner wird im Status "Entwurf" erstellt.

---

## Kursordner-Einstellungen

### Grundeinstellungen

| Feld | Beschreibung |
|------|--------------|
| **Titel** | Name des Kursordners (max. 255 Zeichen) |
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

> **⚠️ Wichtig:** Nur freigegebene Kursordner sind für normale Benutzer sichtbar.

### Sichtbarkeit

Du kannst zwischen zwei Sichtbarkeitsstufen wählen:

| Sichtbarkeit | Bedeutung |
|--------------|-----------|
| **Normal** | Alle Benutzer mit `view_folder`-Berechtigung können den Ordner sehen |
| **Geschützt** | Nur explizit berechtigte Benutzer (Team, Admin, Orgunit) haben Zugriff |

---

## Admin-Team und Berechtigungen

### Admin-Team

Das Admin-Team eines Kursordners hat volle Verwaltungsrechte:

- Kurse hinzufügen und bearbeiten
- Lektionen erstellen und verwalten
- Anmeldungen verwalten
- Ordner-Einstellungen ändern

**So fügst du Admins hinzu:**

1. Öffne den Kursordner zur Bearbeitung
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

## Teilnehmerverwaltung

### Übersicht der Teilnehmer

**Wissen & Lernen → Kursordner → [Ordner] → Teilnehmer verwalten**

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

1. **Navigiere zu**: Kursordner → "Anmeldungen hinzufügen"
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

## Kursordner bearbeiten

### Grunddaten ändern

1. **Navigiere zum Ordner**
2. **Klicke auf das Bearbeiten-Symbol** (Stift-Icon)
3. **Ändere die gewünschten Felder**
4. **Speichere**

### Status ändern

Um einen Kursordner freizugeben:

1. Öffne den Ordner zur Bearbeitung
2. Ändere den Status auf "Freigegeben"
3. Speichere die Änderungen

### Reihenfolge ändern

Die Reihenfolge der Kursordner in der Liste kann über das Feld "Reihenfolge" angepasst werden. Niedrigere Werte werden zuerst angezeigt.

---

## Kursordner archivieren/löschen

### Archivieren

Archivierte Kursordner:

- Sind nicht mehr in der Standardansicht sichtbar
- Behalten alle Daten und Verknüpfungen
- Können bei Bedarf wiederhergestellt werden

### Löschen

> **⚠️ Achtung:** Das Löschen eines Kursordners entfernt auch alle enthaltenen Kurse, Lektionen und Anmeldungen!

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

✅ Du weisst, was Kursordner sind und wofür sie verwendet werden
✅ Du kannst Kursordner erstellen und konfigurieren
✅ Du verstehst die Berechtigungsoptionen (Admin-Team, Team, Orgunits)
✅ Du kannst Teilnehmer in Ordner-übergreifenden Übersichten verwalten
✅ Du kennst die Massenanmeldung und Batch-Operationen
