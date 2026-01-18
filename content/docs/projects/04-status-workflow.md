---
title: "Status und Workflow"
description: ""
weight: "4"
tags:
  - "status"
  - "workflow"
  - "genehmigung"
  - "fsm"
---


# Status und Workflow

Das Projekte-Modul nutzt einen definierten Workflow mit Status-Übergängen (FSM - Finite State Machine).

## Verfügbare Status

### 1. Geplant (planned)

- Initiale

r Status bei neuer Projekt-Erstellung

- Projekt ist noch in Planung
- Keine Genehmigung erforderlich

### 2. In Prüfung (verification)

- Projekt wird zur Genehmigung vorgelegt
- Wartet auf Freigabe durch Genehmiger

### 3. Freigegeben (approved)

- Projekt wurde genehmigt
- Bereit zum Start

### 4. In Arbeit (active)

- Projekt läuft aktiv
- Hauptstatus während Durchführung

### 5. Abgeschlossen (finished)

- Projekt erfolgreich beendet
- Keine weitere Bearbeitung geplant

### 6. Verschoben (postponed)

- Projekt wurde temporär pausiert
- Kann reaktiviert werden

### 7. Abgebrochen (cancelled)

- Projekt wurde abgebrochen
- Endgültiger Abbruch

## Status-Übergänge

<pre>
┌─────────┐    review     ┌──────────────┐    approve   ┌─────────────┐
│ Geplant │──────────────>│ In Prüfung   │─────────────>│ Freigegeben │
└─────────┘               └──────────────┘              └─────────────┘
     ↑                           │                              │
     │ retract/reject            │                              │ start
     └───────────────────────────┘                              ↓
                                                         ┌─────────────┐
                                                         │ In Arbeit   │
                                                         └─────────────┘
                                                                │
                                                                │ finish
                                                                ↓
                                                         ┌─────────────┐
                                                         │Abgeschlossen│
                                                         └─────────────┘
</pre>

## Status ändern

### Über Projekt-Detail

1. Öffne Projekt
2. Klicke Button **"Status ändern"**
3. Wähle gewünschte Transition
4. Klicke **"Aktualisieren"**

### Berechtigungen

**review (In Prüfung)**

- Berechtigung: `approve_project` ODER Projekt-Bearbeiter

**reject/retract (Zurück zu Geplant)**

- Berechtigung: `approve_project`

**approve (Freigeben)**

- Berechtigung: `delete_project` (höchste Stufe)

**start (Starten)**

- Berechtigung: `approve_project` ODER Projekt-Bearbeiter

**finish (Abschliessen)**

- Berechtigung: `approve_project` ODER Projekt-Bearbeiter

**postpone (Verschieben)**

- Berechtigung: `approve_project` ODER Projekt-Bearbeiter

**cancel (Abbrechen)**

- Berechtigung: `approve_project`

**reactivate (Reaktivieren)**

- Berechtigung: `approve_project`

## Best Practices

### ✅ Genehmigungsprozess nutzen

1. Erstelle Projekt im Status "geplant"
2. Fülle alle Informationen aus
3. Stelle zur Prüfung (**review**)
4. Genehmiger prüft und **genehmigt** oder **lehnt ab**
5. Bei Genehmigung: Projekt **starten**

### ✅ Klare Kriterien für Status-Übergänge

**Von Geplant zu In Prüfung:**

- Alle Pflichtfelder ausgefüllt
- Team definiert
- Budget geplant

**Von In Prüfung zu Freigegeben:**

- Management-Freigabe
- Budget bewilligt
- Ressourcen verfügbar

**Von Freigegeben zu In Arbeit:**

- Kick-off durchgeführt
- Team informiert
- Erste Aufgaben verteilt

## Häufige Fragen (FAQ)

### Kann ich einen Status überspringen?

Nein, der Workflow ist fix definiert. Du musst die definierten Übergänge nutzen.

### Was passiert wenn ein Projekt abgeschlossen ist?

Das Projekt bleibt im System sichtbar, kann aber bei Bedarf reaktiviert werden.

### Wer kann Projekte genehmigen?

Benutzer mit der Berechtigung `delete_project` können die finale Genehmigung erteilen.

## Zusammenfassung

✅ Du kennst alle 7 Projekt-Status
✅ Du verstehst die Status-Übergänge
✅ Du weisst, welche Berechtigungen erforderlich sind
✅ Du nutzt den Genehmigungsprozess korrekt
