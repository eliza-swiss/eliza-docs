---
title: "Spaces verwalten"
description: ""
weight: "2"
tags:
  - "spaces"
  - "verwaltung"
  - "teams"
  - "permissions"
---


# Spaces verwalten

In diesem Kapitel lernst du, wie du Spaces (Kollaborationsräume) erstellst, konfigurierst und verwaltest.

## Zugriff auf Spaces

### Navigation

1. Melde dich in ELIZA an
2. Klicke in der Hauptnavigation auf **"Spaces"**
3. Du siehst nun die **Liste aller Spaces**, auf die du Zugriff hast

### Übersicht der Space-Liste

Die Space-Liste zeigt:

| Spalte | Beschreibung |
|--------|--------------|
| **Titel** | Name des Space (klickbar) |
| **Status** | 🟢 Öffentlich / 🟠 Geschützt |
| **Beschreibung** | Kurzbeschreibung des Space |
| **Erstellt** | Erstellungsdatum |
| **Aktionen** | Bearbeiten, Löschen, Archivieren |

**Status-Badges:**

- 🟢 **Öffentlich**: Für alle Benutzer sichtbar
- 🟠 **Geschützt**: Nur für Team-Mitglieder sichtbar

## Space erstellen

### Schritt 1: "Neuer Space" Button

Klicke auf den grünen Button **"+ Neuer Space"** oben rechts.

### Schritt 2: Formular ausfüllen

#### Pflichtfelder

**Titel** (Pflicht):

- Name des Kollaborationsraums
- Beispiele:
  - "Projekt Website Relaunch"
  - "QM-Abteilung"
  - "IT-Support Tickets"
  - "Geschäftsleitung"

**Status** (Pflicht):

Wähle zwischen:

- **Öffentlich**: Alle Benutzer mit `teams.view_space` Permission können den Space sehen
- **Geschützt**: Nur Team-Mitglieder haben Zugriff

**Empfehlung:**

- **Öffentlich** für: Unternehmensweite Projekte, öffentliche Informationen
- **Geschützt** für: Abteilungs-Spaces, vertrauliche Projekte, sensible Daten

#### Optionale Felder

**Beschreibung**:

- Zweck und Ziele des Space
- Beispiel:
  ```
  Dieser Space dient der Planung und Umsetzung des Website-Relaunches.
  Alle Aufgaben, Meetings und Dokumente werden hier zentral verwaltet.
  ```

### Schritt 3: Speichern

Klicke auf den grünen **"Speichern"** Button unten rechts.

✅ **Erfolg!** Du bist nun **Owner** des Space und wirst automatisch zum **Admin** und **Team-Mitglied**.

## Space-Details ansehen

### Detailansicht öffnen

1. Klicke in der Liste auf den **Titel** eines Space
2. Du siehst die **Space-Detailansicht**

### Übersicht der Detailansicht

Die Detailansicht zeigt:

**Header:**

- Titel und Status-Badge
- Beschreibung
- Owner-Informationen
- Aktions-Buttons

**Tabs:**

1. **Boards**: Liste aller Kanban-Boards in diesem Space
2. **Meetings**: Liste aller Sitzungen
3. **Dateien**: Zentrale Dateiablage
4. **Team**: Team-Mitglieder und Admins
5. **Aktivität**: Historie und Änderungen

## Space bearbeiten

### Voraussetzungen

Du musst **Admin** oder **Owner** des Space sein.

### Bearbeitungs-Formular öffnen

1. Öffne die Space-Detailansicht
2. Klicke auf den Button **"Bearbeiten"** oben rechts
3. Das Bearbeitungsformular öffnet sich

### Änderbare Felder

- **Titel**: Space umbenennen
- **Beschreibung**: Zweck aktualisieren
- **Status**: Zwischen Öffentlich und Geschützt wechseln

**Wichtig:**

- **Owner** kann nicht geändert werden (bleibt Ersteller)
- **Team** und **Admins** werden separat verwaltet (siehe unten)

### Änderungen speichern

Klicke auf **"Speichern"**, um die Änderungen zu übernehmen.

## Team verwalten

### Team-Mitglieder hinzufügen

**Schritt-für-Schritt:**

1. Öffne die Space-Detailansicht
2. Klicke auf den Tab **"Team"**
3. Klicke auf **"Team-Mitglied hinzufügen"**
4. Wähle Benutzer aus der Liste
5. Klicke auf **"Hinzufügen"**

**Berechtigungen:**

- Team-Mitglieder können den Space **sehen**
- Team-Mitglieder können **Boards ansehen**
- Weitere Rechte abhängig von Board-Einstellungen

### Team-Mitglieder entfernen

**Schritt-für-Schritt:**

1. Öffne die Space-Detailansicht
2. Klicke auf den Tab **"Team"**
3. Finde das Mitglied in der Liste
4. Klicke auf den **"Entfernen"** Button (❌)
5. Bestätige die Entfernung

**Wichtig:**

- **Owner** kann nicht entfernt werden
- **Admins** sollten vor Entfernung aus Admin-Rolle entfernt werden

### Admins verwalten

**Admin hinzufügen:**

1. Öffne die Space-Detailansicht
2. Klicke auf den Tab **"Team"**
3. Finde das Team-Mitglied
4. Klicke auf **"Zum Admin machen"**

**Admin entfernen:**

1. Öffne die Space-Detailansicht
2. Klicke auf den Tab **"Team"**
3. Finde den Admin
4. Klicke auf **"Admin-Rechte entfernen"**

**Admin-Rechte:**

- ✅ Space bearbeiten
- ✅ Space löschen
- ✅ Team verwalten
- ✅ Boards erstellen/löschen
- ✅ Meetings erstellen/löschen
- ✅ Alle Cards bearbeiten (bei öffentlichen Spaces)

### Bulk-Aktionen

**Mehrere Benutzer gleichzeitig hinzufügen:**

1. Klicke auf **"Mehrere hinzufügen"**
2. Wähle alle gewünschten Benutzer
3. Klicke auf **"Alle hinzufügen"**

## Status ändern

### Von Geschützt zu Öffentlich

**Wann sinnvoll:**

- Projekt ist abgeschlossen und soll für alle sichtbar sein
- Space soll als Referenz für andere Teams dienen
- Transparenz erhöhen

**Vorgehen:**

1. Öffne Space-Bearbeitung
2. Ändere Status von **"Geschützt"** zu **"Öffentlich"**
3. Speichere die Änderung

**Auswirkungen:**

- ✅ Alle Benutzer mit `teams.view_space` Permission sehen den Space
- ⚠️ Boards und Cards sind für alle sichtbar
- ⚠️ **Nur Space-Admins** können fremde Cards bearbeiten

### Von Öffentlich zu Geschützt

**Wann sinnvoll:**

- Space enthält vertrauliche Informationen
- Zugriff soll eingeschränkt werden
- Nur Team-Mitglieder sollen arbeiten können

**Vorgehen:**

1. Öffne Space-Bearbeitung
2. Ändere Status von **"Öffentlich"** zu **"Geschützt"**
3. Speichere die Änderung

**Auswirkungen:**

- ❌ Nur Team-Mitglieder sehen den Space
- ✅ Bessere Zugangskontrolle
- ✅ Team-Mitglieder können Cards bearbeiten

## Space archivieren

### Wann archivieren?

**Typische Szenarien:**

- ✅ Projekt ist abgeschlossen
- ✅ Space wird nicht mehr aktiv genutzt
- ✅ Historische Daten sollen erhalten bleiben
- ✅ Liste soll übersichtlicher werden

**Nicht verwechseln mit Löschen:**

- Archivierte Spaces bleiben **erhalten**
- Daten sind **weiterhin einsehbar** (über Archiv-Ansicht)
- Können **reaktiviert** werden

### Space archivieren

**Schritt-für-Schritt:**

1. Öffne die Space-Detailansicht
2. Klicke auf **"Archivieren"** Button
3. Bestätige die Archivierung

**Auswirkungen:**

- Space wird in der Standard-Liste ausgeblendet
- Space ist schreibgeschützt (keine Bearbeitung)
- Zugriff über "Archivierte Spaces" möglich
- Alle Boards, Cards und Meetings werden mitarchiviert

### Archivierte Spaces ansehen

**Vorgehen:**

1. Öffne die Space-Liste
2. Klicke auf **"Archiv anzeigen"** oder Filter **"Archiviert"**
3. Du siehst alle archivierten Spaces

### Space reaktivieren

**Schritt-für-Schritt:**

1. Öffne die Archiv-Ansicht
2. Wähle den Space aus
3. Klicke auf **"Reaktivieren"**
4. Bestätige die Reaktivierung

**Auswirkungen:**

- Space wird wieder in Standard-Liste angezeigt
- Space ist wieder bearbeitbar
- Alle Inhalte sind wieder voll nutzbar

## Space löschen

### ⚠️ Wichtige Warnung

**Löschen ist endgültig und kann nicht rückgängig gemacht werden!**

Gelöschte Spaces und alle Inhalte werden **permanent entfernt**:

- ❌ Alle Boards
- ❌ Alle Cards
- ❌ Alle Meetings und Traktanden
- ❌ Alle Beschlüsse
- ❌ Alle Dateien
- ❌ Alle Kommentare
- ❌ Gesamte Historie

**Empfehlung:** Nutze **Archivierung** statt Löschen!

### Voraussetzungen

- Du musst **Admin** des Space sein
- Du benötigst die Permission `teams.delete_space`

### Space löschen

**Schritt-für-Schritt:**

1. Öffne die Space-Detailansicht
2. Klicke auf **"Löschen"** Button (rot)
3. Lies die Warnung sorgfältig
4. Gib den Space-Titel zur Bestätigung ein
5. Klicke auf **"Endgültig löschen"**

**Sicherheits-Check:**

- System fordert Eingabe des Space-Titels
- Verhindert versehentliches Löschen

## Space kopieren

### Wann sinnvoll?

- ✅ Neue Projekte mit ähnlicher Struktur
- ✅ Standard-Vorlagen verwenden
- ✅ Bewährte Setups wiederverwenden

### Space als Template

**Vorgehen:**

1. Erstelle einen Space mit Standard-Struktur
2. Füge Standard-Boards hinzu
3. Erstelle Card-Templates
4. Archiviere den Template-Space
5. Kopiere bei Bedarf

**Hinweis:** Aktuell keine direkte "Kopieren"-Funktion, aber Boards können als Vorlage markiert werden.

## Best Practices

### ✅ Space-Struktur

**Empfohlene Aufteilung:**

- **Pro Projekt**: Ein Space pro Projekt (z.B. "Projekt Alpha")
- **Pro Abteilung**: Ein Space pro Abteilung (z.B. "Marketing")
- **Pro Zweck**: Ein Space pro Use Case (z.B. "Bug Tracking")

**Nicht empfohlen:**

- ❌ Ein riesiger Space für alles
- ❌ Zu viele Micro-Spaces (Unübersichtlichkeit)

### ✅ Namenskonventionen

**Gute Space-Namen:**

- ✅ "Projekt Website Relaunch 2025"
- ✅ "QM: Verbesserungsmassnahmen"
- ✅ "IT-Support"
- ✅ "Geschäftsleitung: Strategische Planung"

**Schlechte Space-Namen:**

- ❌ "Projekt"
- ❌ "Test"
- ❌ "Verschiedenes"
- ❌ "xyz"

### ✅ Team-Management

**Empfehlungen:**

1. **Klare Rollen**: Definiere, wer Admin sein soll
2. **Minimale Admins**: Nur 2-3 Personen als Admin
3. **Alle relevanten Personen**: Füge alle Stakeholder zum Team hinzu
4. **Regelmässige Reviews**: Prüfe Team-Mitglieder quartalsweise
5. **Dokumentation**: Halte fest, warum bestimmte Personen Admin sind

### ✅ Status-Wahl

**Wann Öffentlich:**

- ✅ Unternehmensweite Projekte
- ✅ Transparenz gewünscht
- ✅ Alle dürfen mitlesen

**Wann Geschützt:**

- ✅ Abteilungsinterne Themen
- ✅ Vertrauliche Projekte
- ✅ Eingeschränkter Zugriff gewünscht

### ✅ Archivierung

**Wann archivieren:**

- ✅ Projekt abgeschlossen (3 Monate nach Ende)
- ✅ Space nicht mehr aktiv (6 Monate keine Aktivität)
- ✅ Übergang zu neuem System

**Lifecycle:**

```text
Aktiv (0-12 Monate)
   ↓
Projektende
   ↓
3 Monate Übergangsphase
   ↓
Archiviert
```

## Häufige Fehler

### ❌ Zu viele Spaces

**Problem:** 50+ Spaces, niemand findet mehr etwas

**Lösung:**

- Konsolidiere ähnliche Spaces
- Nutze Boards innerhalb eines Space statt neue Spaces
- Archiviere alte Spaces

### ❌ Fehlende Team-Mitglieder

**Problem:** Wichtige Stakeholder nicht im Team

**Lösung:**

- Erstelle eine Liste aller relevanten Personen
- Füge alle systematisch hinzu
- Nutze Bulk-Aktionen

### ❌ Zu viele Admins

**Problem:** 10+ Admins, alle können alles löschen

**Lösung:**

- Reduziere auf 2-3 Admins
- Andere können normale Team-Mitglieder sein
- Admins nur für Space-Verwaltung, nicht für alle Beteiligten

### ❌ Falsche Status-Wahl

**Problem:** Geschützter Space, aber alle sollten mitlesen

**Lösung:**

- Ändere Status zu Öffentlich
- Erkläre Team-Mitgliedern die Änderung

### ❌ Vergessene Spaces

**Problem:** Inaktive Spaces seit 2 Jahren

**Lösung:**

- Quartalsweise Review aller Spaces
- Archiviere inaktive Spaces
- Lösche nur nach Rücksprache mit Owner

## Verwendungs-Szenarien

### Szenario 1: Projekt-Space

**Setup:**

- Titel: "Projekt Website Relaunch 2025"
- Status: Geschützt (Projektteam only)
- Team: Projektleiter, Entwickler, Designer, Tester
- Admins: Projektleiter

**Boards:**

- "Backlog" (alle Anforderungen)
- "Sprint 1" bis "Sprint N"
- "Bugs"
- "Done"

### Szenario 2: Abteilungs-Space

**Setup:**

- Titel: "QM-Abteilung"
- Status: Öffentlich (alle dürfen mitlesen)
- Team: QM-Mitarbeiter
- Admins: QM-Leitung

**Boards:**

- "Verbesserungsmassnahmen"
- "Audits"
- "Dokumentation"

**Meetings:**

- Monatliche QM-Sitzungen
- Audit-Reviews

### Szenario 3: Support-Space

**Setup:**

- Titel: "IT-Support"
- Status: Öffentlich (alle können Tickets erstellen)
- Team: IT-Abteilung
- Admins: IT-Leitung

**Boards:**

- "Neue Tickets"
- "In Bearbeitung"
- "Wartend auf Feedback"
- "Gelöst"

## Nächste Schritte

Jetzt, wo du Spaces verwalten kannst, lerne im nächsten Kapitel:

- [Kanban Boards]({{< ref "03-kanban-boards" >}}): Erstelle Boards und manage Cards
- [Sitzungen]({{< ref "04-sitzungen" >}}): Verwalte Meetings und Beschlüsse
- [Berechtigungskonzept]({{< ref "05-berechtigungskonzept" >}}): Verstehe die Zugriffskontrolle

---

**Tipp**: Erstelle zuerst einen Test-Space mit Status "Geschützt", um alle Funktionen auszuprobieren. Du kannst ihn später löschen oder archivieren.
