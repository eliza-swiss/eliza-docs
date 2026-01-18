---
title: "Kostenstellen und Zeitbudget"
description: ""
weight: "7"
tags:
  - "kostenstellen"
  - "tasks"
  - "zeitbudget"
  - "timetracker"
---


# Kostenstellen und Zeitbudget

Verwalte Zeitbudgets und Kosten deiner Projekte präzise mit Kostenstellen (Tasks). ELIZA ermöglicht dir die detaillierte Planung, Überwachung und Abrechnung von Projektarbeiten mit integrierter Zeiterfassung.

## Was sind Kostenstellen?

**Kostenstellen** (auch "Tasks" genannt) sind Budgetpositionen innerhalb eines Projekts. Sie ermöglichen:

- **Zeitbudget-Planung**: Plane Stunden pro Aktivität
- **Kostenplanung**: Kalkuliere mit Stundensätzen
- **Zeiterfassung**: Mitarbeitende buchen Zeit direkt auf Kostenstellen
- **Budget-Kontrolle**: Überwache Soll-Ist-Vergleich in Echtzeit
- **Abrechnung**: Unterscheide verrechenbare und interne Zeiten

## Kostenstelle erstellen

### Neue Kostenstelle anlegen

1. Öffne dein Projekt in der Detailansicht
2. Wechsle zum Tab **"Kostenstellen"** oder **"Tasks"**
3. Klicke auf **"+ Neue Kostenstelle"**
4. Fülle das Formular aus:

**Pflichtfelder:**

- **Titel**: Aussagekräftiger Name der Kostenstelle (z.B. "Projektleitung", "Entwicklung Frontend", "Testing")
- **Status**: Wähle den aktuellen Status (siehe Status-Workflow)

**Budget-Felder:**

- **Budgetierte Stunden**: Geplante Anzahl Arbeitsstunden (z.B. 40.0)
- **Stundensatz**: Kosten pro Stunde in CHF (z.B. 120.00)
- **Budgetierter Betrag**: Wird automatisch berechnet (Stunden × Stundensatz)

**Weitere Felder:**

- **Beschreibung**: Detaillierte Aufgabenbeschreibung und Ziele
- **Verrechenbar**: Kann diese Kostenstelle dem Kunden verrechnet werden?
- **Für alle Benutzer sichtbar**: Sollen alle Mitarbeitenden diese Kostenstelle sehen?

5. Speichere die Kostenstelle

### Kostenstelle bearbeiten

- Klicke auf das **Bearbeiten-Symbol** (Stift) neben der Kostenstelle
- Passe die Daten an (Budget, Stundensatz, Status)
- Speichere die Änderungen

**Hinweis**: Änderungen am Budget beeinflussen die Budget-Überwachung. Bei bereits gebuchten Stunden wird das Restbudget neu berechnet.

### Kostenstelle löschen

- Klicke auf das **Löschen-Symbol** (Papierkorb)
- Bestätige den Löschvorgang

**Achtung**: Kostenstellen mit Zeitbuchungen können meist nicht gelöscht werden. Setze den Status stattdessen auf "Abgeschlossen".

## Status-Workflow

Kostenstellen durchlaufen typischerweise verschiedene Status während ihres Lebenszyklus:

### Status-Übersicht

| Status | Bezeichnung | Bedeutung | Zeitbuchungen möglich? |
|--------|-------------|-----------|------------------------|
| **draft** | Entwurf | In Planung, Budget nicht final | Nein (empfohlen) |
| **active** | In Arbeit | Aktive Zeiterfassung läuft | Ja |
| **accounted** | Verrechnet | An Kunde abgerechnet | Nein (empfohlen) |
| **closed** | Abgeschlossen | Projekt beendet, archiviert | Nein |

### 1. Entwurf (draft)

**Verwendung:**
- Initiale Budgetplanung
- Abstimmung mit Stakeholdern
- Angebotserstellung

**Aktivitäten:**
- Budget kalkulieren
- Stundensätze festlegen
- Verrechenbarkeit klären

**Best Practice**: Nutze den Entwurf-Status für Planungs-Iterationen bevor du die Kostenstelle aktivierst.

### 2. In Arbeit (active)

**Verwendung:**
- Aktive Projektphase
- Mitarbeitende buchen Zeit
- Laufendes Budget-Controlling

**Aktivitäten:**
- Zeiterfassung durch Team
- Regelmässige Budget-Prüfung
- Bei Bedarf Budget anpassen

**Best Practice**: Setze Kostenstellen auf "active" sobald die Arbeit beginnt, damit Mitarbeitende Zeit buchen können.

### 3. Verrechnet (accounted)

**Verwendung:**
- Nach Rechnungsstellung an Kunde
- Budget ist verbraucht
- Nachbuchungen vermeiden

**Aktivitäten:**
- Finaler Soll-Ist-Vergleich
- Dokumentation für Controlling
- Lessons Learned für zukünftige Projekte

**Best Practice**: Verhindere Nachbuchungen indem du den Status auf "accounted" setzt sobald die Rechnung raus ist.

### 4. Abgeschlossen (closed)

**Verwendung:**
- Projekt komplett beendet
- Archivierung
- Keine weiteren Änderungen

**Aktivitäten:**
- Finales Projekt-Review
- Archivierung der Unterlagen
- Historische Auswertungen

**Best Practice**: Schliesse Kostenstellen erst wenn das gesamte Projekt abgeschlossen ist.

## Zeiterfassung mit Timetracker

### Wie Mitarbeitende Zeit buchen

Mitarbeitende erfassen ihre Arbeitszeit direkt auf Kostenstellen im **Timetracker-Modul**:

**Schritt-für-Schritt:**

1. **Timetracker öffnen**: Navigiere zum Timetracker-Modul
2. **Neue Zeitbuchung**: Klicke auf **"+ Neue Zeitbuchung"** oder **"Zeit erfassen"**
3. **Datum wählen**: Wähle das Arbeitsdatum
4. **Projekt wählen**: Wähle das entsprechende Projekt aus
5. **Kostenstelle wählen**: Wähle die Kostenstelle für die du gearbeitet hast
6. **Stunden erfassen**: Trage die Anzahl Stunden ein (z.B. 4.5)
7. **Beschreibung**: Optional eine kurze Beschreibung der Tätigkeit
8. **Speichern**: Speichere die Zeitbuchung

### Sichtbarkeit für Mitarbeitende

**"Für alle Benutzer sichtbar" aktiviert:**
- Alle Mitarbeitenden sehen die Kostenstelle im Timetracker
- Jeder kann Zeit darauf buchen

**"Für alle Benutzer sichtbar" deaktiviert:**
- Nur Projekt-Admins und direkt zugewiesene Personen sehen die Kostenstelle
- Nützlich für interne/vertrauliche Kostenstellen

### Integration mit Timetracker

Vorteile der Integration:

- **Zentrale Zeiterfassung**: Eine einzige Stelle für alle Zeitbuchungen
- **Projekt-Kontext**: Mitarbeitende wählen Projekt und Kostenstelle direkt
- **Echtzeit-Updates**: Budget-Status wird sofort aktualisiert
- **Reporting**: Auswertungen über alle Projekte hinweg

## Budget-Überwachung

### Kostenstellen-Detail Ansicht

**Im Detail einer Kostenstelle siehst du:**

**Zeitbudget:**
- **Budgetierte Stunden**: Geplante Stunden (z.B. 40.0)
- **Erfasste Stunden**: Bereits gebuchte Stunden (z.B. 32.5)
- **Restbudget**: Verbleibende Stunden (z.B. 7.5)
- **Auslastung**: Prozentuale Nutzung (z.B. 81%)

**Finanzbudget:**
- **Budgetierter Betrag**: Geplante Kosten (z.B. CHF 4'800.00)
- **Verwendeter Betrag**: Bereits angefallene Kosten (z.B. CHF 3'900.00)
- **Restbetrag**: Verfügbares Budget (z.B. CHF 900.00)
- **Kosten-Auslastung**: Prozentuale Nutzung (z.B. 81%)

### Budget-Status Ampel

ELIZA zeigt den Budget-Status visuell an:

- 🟢 **Grün** (0-75%): Budget gesund, alles im Plan
- 🟡 **Gelb** (76-90%): Achtung, Budget wird knapp
- 🔴 **Rot** (91-100%): Budget fast aufgebraucht, Handlung erforderlich
- ⚫ **Schwarz** (>100%): Budget überschritten, dringender Handlungsbedarf

### Proaktive Budget-Kontrolle

**Wöchentlich prüfen:**
- Welche Kostenstellen werden knapp?
- Wo weichen Planung und Realität ab?
- Muss Budget nachverhandelt werden?

**Bei Budget-Überschreitung:**
1. **Analysieren**: Warum ist das Budget überschritten?
2. **Kommunizieren**: Informiere Stakeholder frühzeitig
3. **Anpassen**: Erhöhe Budget oder reduziere Leistungsumfang
4. **Dokumentieren**: Halte Gründe für Abweichungen fest

## Verrechenbare vs. nicht-verrechenbare Zeiten

### Verrechenbare Kostenstellen

**Verwendung:**
- Direkte Kundenleistungen
- Vertraglich vereinbarte Arbeiten
- Werden dem Kunden in Rechnung gestellt

**Beispiele:**
- "Entwicklung Feature XY"
- "Beratung und Konzeption"
- "Projektmanagement (verrechenbar)"
- "Testing und QA"

**Best Practice**: Setze realistische Budgets und kommuniziere klar mit dem Kunden wenn Budget knapp wird.

### Nicht-verrechenbare Kostenstellen

**Verwendung:**
- Interne Arbeiten
- Overhead und Administration
- Akquisition und Angebotserstellung
- Interne Meetings und Reviews

**Beispiele:**
- "Internes Projektmanagement"
- "Team-Meetings"
- "Dokumentation (intern)"
- "Akquisition und Angebotserstellung"

**Best Practice**: Trenne verrechenbare und nicht-verrechenbare Zeiten sauber für korrektes Controlling.

## Praktische Beispiele

### Beispiel 1: Kleines Website-Projekt (160h Budget)

| Kostenstelle | Budget (h) | Stundensatz | Betrag | Verrechenbar | Status |
|--------------|------------|-------------|--------|--------------|--------|
| Projektleitung | 20 | CHF 140.00 | CHF 2'800.00 | Ja | active |
| Konzeption & Design | 30 | CHF 120.00 | CHF 3'600.00 | Ja | active |
| Frontend-Entwicklung | 50 | CHF 110.00 | CHF 5'500.00 | Ja | active |
| Backend-Entwicklung | 40 | CHF 120.00 | CHF 4'800.00 | Ja | active |
| Testing & QA | 15 | CHF 100.00 | CHF 1'500.00 | Ja | active |
| Deployment | 5 | CHF 100.00 | CHF 500.00 | Ja | draft |
| **Total verrechenbar** | **160** | | **CHF 18'700.00** | | |
| Internes PM | 10 | CHF 140.00 | CHF 1'400.00 | Nein | active |
| **Total Projekt** | **170** | | **CHF 20'100.00** | | |

**Projekt-Kalkulation:**
- **Verrechenbar**: CHF 18'700.00
- **Intern**: CHF 1'400.00
- **Marge**: Bei Verkauf CHF 25'000.00 → CHF 4'900.00 Marge (24%)

### Beispiel 2: Agiles Entwicklungsprojekt (Sprint-basiert)

| Kostenstelle | Budget (h) | Stundensatz | Betrag | Verrechenbar | Status |
|--------------|------------|-------------|--------|--------------|--------|
| Sprint 1 - User Stories | 80 | CHF 115.00 | CHF 9'200.00 | Ja | closed |
| Sprint 2 - User Stories | 80 | CHF 115.00 | CHF 9'200.00 | Ja | accounted |
| Sprint 3 - User Stories | 80 | CHF 115.00 | CHF 9'200.00 | Ja | active |
| Sprint 4 - User Stories | 80 | CHF 115.00 | CHF 9'200.00 | Ja | draft |
| Scrum Master | 40 | CHF 130.00 | CHF 5'200.00 | Ja | active |
| Product Owner | 30 | CHF 140.00 | CHF 4'200.00 | Nein | active |

**Sprint-Management:**
- Jeder Sprint hat eigene Kostenstelle
- Status zeigt Sprint-Fortschritt
- Scrum Master verrechenbar, PO intern

### Beispiel 3: Wartungsvertrag (monatlich)

| Kostenstelle | Budget (h/Monat) | Stundensatz | Betrag | Status |
|--------------|------------------|-------------|--------|--------|
| Januar 2025 - Support | 20 | CHF 120.00 | CHF 2'400.00 | closed |
| Februar 2025 - Support | 20 | CHF 120.00 | CHF 2'400.00 | accounted |
| März 2025 - Support | 20 | CHF 120.00 | CHF 2'400.00 | active |
| April 2025 - Support | 20 | CHF 120.00 | CHF 2'400.00 | draft |

**Monatliche Abrechnung:**
- Jeder Monat = eigene Kostenstelle
- Am Monatsende: Status auf "accounted" setzen
- Nächsten Monat aktivieren

## Best Practices

### Struktur und Organisation

✅ **Pro Aktivität eine Kostenstelle**: Granulare Planung ermöglicht bessere Kontrolle
✅ **Sprechende Namen**: "Frontend-Entwicklung Phase 1" statt "FE1"
✅ **Konsistente Stundensätze**: Definiere Standard-Stundensätze pro Rolle
✅ **Verrechenbarkeit klar definieren**: Trenne intern/extern von Anfang an

### Budget-Management

✅ **Realistische Budgets setzen**: Berücksichtige Erfahrungswerte aus früheren Projekten
✅ **Puffer einplanen**: 10-20% Reserve für Unvorhergesehenes
✅ **Regelmässig prüfen**: Wöchentliches Budget-Review in aktiven Projekten
✅ **Frühwarnsystem**: Reagiere bei 80% Auslastung, nicht erst bei 100%

### Status-Management

✅ **Status-Workflow einhalten**: Nutze alle Status für bessere Nachvollziehbarkeit
✅ **Zeitnah abschliessen**: Setze Status auf "accounted" sobald abgerechnet
✅ **Dokumentation**: Notiere Abweichungen vom Budget mit Begründung

### Zeiterfassung

✅ **Täglich buchen**: Mitarbeitende sollen Zeit täglich erfassen, nicht wöchentlich
✅ **Beschreibungen nutzen**: Kurze Notizen helfen beim späteren Nachvollziehen
✅ **Sichtbarkeit steuern**: Vertrauliche Kostenstellen nur für berechtigte Personen

### Häufige Fehler vermeiden

❌ **Zu grobe Kostenstellen**: "Entwicklung gesamt" statt granularer Aufteilung
❌ **Unrealistische Budgets**: Zu optimistische Planung ohne Puffer
❌ **Fehlende Kontrolle**: Budget wird nie geprüft bis es zu spät ist
❌ **Falsche Stundensätze**: Nicht aktuelle oder inkonsistente Sätze
❌ **Nachträgliches Buchen**: Zeiterfassung wird vergessen oder zu spät gemacht

## Reporting und Auswertungen

### Kostenstellen-Report

**Projekt-Übersicht:**
- Alle Kostenstellen des Projekts auf einen Blick
- Gesamt-Budget vs. Gesamt-Ist
- Verrechenbare vs. nicht-verrechenbare Zeiten
- Marge-Berechnung

**Export-Funktionen:**
- Export als Excel/CSV für externe Auswertungen
- Integration mit Buchhaltungssoftware (z.B. Bexio)
- Rechnungsgrundlage für Kunden

### Timetracker-Reports

**Mitarbeiter-Auswertung:**
- Welcher Mitarbeiter hat wie viel Zeit auf welcher Kostenstelle gebucht?
- Auslastungs-Analyse pro Mitarbeiter
- Produktivität und Effizienz-Kennzahlen

**Projekt-Auswertung:**
- Zeit-Verteilung über Projektverlauf
- Abweichungen von der Planung
- Forecasting für Projekt-Ende

## Tipps für effektives Kostencontrolling

### 1. Frühe Planung

- Definiere Kostenstellen bereits in der Angebotserstellung
- Nutze Erfahrungswerte aus ähnlichen Projekten
- Involviere das Umsetzungs-Team in die Planung

### 2. Laufende Kontrolle

- Wöchentliches Budget-Review in aktiven Projekten
- Dashboard mit Ampel-System für schnellen Überblick
- Automatische Benachrichtigungen bei Budget-Überschreitung (falls verfügbar)

### 3. Transparente Kommunikation

- Informiere Kunden frühzeitig bei Budget-Abweichungen
- Erkläre Gründe für Mehraufwand sachlich
- Dokumentiere alle Budget-Anpassungen

### 4. Kontinuierliche Verbesserung

- Analysiere Abweichungen am Projektende
- Dokumentiere Lessons Learned
- Verbessere Schätzungen für zukünftige Projekte

## Zusammenfassung

Mit Kostenstellen und Zeitbudget managst du Projekte professionell:

✅ **Kostenstellen erstellen**: Plane granulare Budgets pro Aktivität
✅ **Status-Workflow**: Nutze draft → active → accounted → closed
✅ **Zeiterfassung**: Integriere Timetracker für einfache Buchung
✅ **Budget-Überwachung**: Überwache Soll-Ist in Echtzeit mit Ampel-System
✅ **Verrechenbarkeit**: Trenne verrechenbare und interne Zeiten sauber
✅ **Proaktives Controlling**: Reagiere frühzeitig bei Budget-Abweichungen

**Nächste Schritte:**

- [Timetracker](../timetracker/) für detaillierte Zeiterfassung
- [Reporting](../reporting/) für Projekt-Auswertungen
- [Verträge](../contracts/) für Rahmenverträge mit Stundenkontingenten
