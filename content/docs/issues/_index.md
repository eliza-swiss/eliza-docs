---
title: "Meldungen"
description: "Meldungen, Reklamationen und Verbesserungsvorschläge erfassen"
weight: 35
tags:
  - "overview"
  - "manual"
  - "meldungen"
  - "meldekreise"
  - "reklamationen"
icon: "report_problem"
---


# Meldungen Benutzerhandbuch

Willkommen zum umfassenden Benutzerhandbuch für das Meldungen-Modul in ELIZA. Mit dem Meldungen-Modul kannst du strukturierte Meldungen erfassen, verwalten und bearbeiten – sei es für Verbesserungsvorschläge, Fehlerberichte, Reklamationen oder andere standardisierte Erfassungsprozesse.

## Über dieses Handbuch

Dieses Handbuch führt dich durch alle Funktionen des Meldungen-Moduls. Du lernst, wie du:

- Meldungen erstellst und verfolgst
- Meldekreise für verschiedene Zwecke einrichtest
- Status-Workflows effektiv nutzt
- Mit deinem Team zusammenarbeitest

## Kernkonzepte

Das Meldungen-Modul basiert auf zwei Hauptelementen:

### Meldekreise

Ein **Meldekreis** ist ein Container für zusammengehörige Meldungen. Er definiert:

- Wer Meldungen erstellen darf
- Wer Meldungen bearbeiten kann
- Welche Kategorien verfügbar sind
- Ob Meldungen anonym oder öffentlich erfasst werden können

**Beispiele für Meldekreise:**
- "Verbesserungsvorschläge" für interne Optimierungsideen
- "Kundenreklamationen" für externe Beschwerden
- "IT-Support" für technische Anfragen
- "Qualitätsmeldungen" für Qualitätsprobleme

### Meldungen

Eine **Meldung** ist ein einzelner Eintrag innerhalb eines Meldekreises. Sie enthält:

- Titel und Beschreibung des Anliegens
- Optionale Kategorisierung mit Labels
- Status zur Nachverfolgung (neu, in Prüfung, in Bearbeitung, erledigt)
- Kommentare und Dateien zur Dokumentation

---

## Kapitel-Übersicht

### [1. Erste Schritte]({{< ref "01-erste-schritte" >}})

**Einführung ins Meldungen-Modul**

Lerne die Grundlagen: Navigation, Dashboard-Übersicht und das Erstellen deiner ersten Meldung.

**Inhalte:**
- Zugang zum Meldungen-Modul
- Das Dashboard verstehen
- Deine erste Meldung erstellen
- Eigene Meldungen einsehen

**Zielgruppe:** Alle Benutzer
**Lesezeit:** ~10 Minuten

---

### [2. Meldungen verwalten]({{< ref "02-meldungen-verwalten" >}})

**Meldungen erstellen, bearbeiten und bearbeiten**

Detaillierte Anleitungen für alle Funktionen rund um Meldungen: von der Erstellung über die Bearbeitung bis zum Abschluss.

**Inhalte:**
- Meldung erstellen (mit/ohne Anmeldung)
- Meldungsdetails und Felder
- Status-Workflow verstehen
- Kommentare und Dateien hinzufügen
- Meldungen zuweisen und mit Fristen versehen
- Meldungen zwischen Meldekreisen verschieben

**Zielgruppe:** Alle Benutzer, Bearbeiter
**Lesezeit:** ~20 Minuten

---

### [3. Meldekreise verwalten]({{< ref "03-meldekreise-verwalten" >}})

**Meldekreise einrichten und konfigurieren**

Erfahre, wie du als Administrator Meldekreise erstellst, konfigurierst und optimal für dein Team einrichtest.

**Inhalte:**
- Meldekreis erstellen
- Sichtbarkeit und Zugriffsrechte
- Kategorien (Labels) verwalten
- Nummernkreise und Präfixe
- Öffentliche Formulare einrichten
- E-Mail-Benachrichtigungen konfigurieren
- Wissensdatenbank aktivieren

**Zielgruppe:** Administratoren, Teamleiter
**Lesezeit:** ~25 Minuten

---

### [4. Berechtigungskonzept]({{< ref "04-berechtigungskonzept" >}})

**Rollen, Rechte und Zugriffssteuerung**

Verstehe das mehrstufige Berechtigungssystem im Meldungen-Modul.

**Inhalte:**
- Systemgruppen (issue_users, issue_admin)
- Lokale Rollen (Admins, Team)
- Sichtbarkeitsstufen (normal, geschützt, vertraulich)
- Klassifizierung von Meldungen (öffentlich, vertraulich, geheim)
- Organisations-basierte Berechtigungen

**Zielgruppe:** Administratoren, Teamleiter
**Lesezeit:** ~15 Minuten

---

### [5. Tipps und Tricks]({{< ref "05-tipps-tricks" >}})

**Best Practices und häufige Fragen**

Optimiere deine Arbeit mit dem Meldungen-Modul durch bewährte Vorgehensweisen und Lösungen für häufige Fragen.

**Inhalte:**
- Effiziente Meldungsbearbeitung
- Labels clever nutzen
- Benachrichtigungen optimieren
- Häufige Probleme und Lösungen
- FAQ

**Zielgruppe:** Alle Benutzer
**Lesezeit:** ~10 Minuten

---

### [6. REST API]({{< ref "06-api" >}})

**Programmier-Schnittstelle für Automatisierung**

Integriere das Meldungen-Modul mit externen Systemen oder automatisiere Workflows über die REST API.

**Inhalte:**
- API-Endpunkte für Meldekreise, Kategorien und Meldungen
- Authentifizierung mit API-Token
- Kategorie-Farben (MaterializeCSS)
- Berechtigungen und Fehlerbehandlung
- Beispiel-Workflows

**Zielgruppe:** Entwickler, Integratoren
**Lesezeit:** ~15 Minuten

---

## Zielgruppen

Je nach deiner Rolle empfehlen wir unterschiedliche Leseschwerpunkte:

| Rolle | Empfohlene Kapitel |
|-------|-------------------|
| **Einsteiger** | Kapitel 1, 2, 5 |
| **Bearbeiter** | Kapitel 1-5 |
| **Teamleiter** | Kapitel 1-5, besonders 3 und 4 |
| **Administrator** | Alle Kapitel, besonders 3 und 4 |
| **Entwickler/Integrator** | Kapitel 6 (REST API) |

## Verwendete Konventionen

In diesem Handbuch verwenden wir folgende Konventionen:

- **Fett**: UI-Elemente und wichtige Begriffe
- `Code`: Technische Begriffe und Einstellungen
- > Blockquote: Tipps, Warnungen und wichtige Hinweise
- → : Navigation (z.B. Dashboard → Meldungen → Meldekreise)

## Feedback und Verbesserungen

Dieses Handbuch wird kontinuierlich verbessert. Wenn du Fehler findest oder Verbesserungsvorschläge hast, wende dich bitte an deinen Administrator.

---

**Viel Erfolg beim Arbeiten mit dem Meldungen-Modul!**
