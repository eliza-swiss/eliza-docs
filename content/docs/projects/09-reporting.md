---
title: "Projekt-Reporting"
description: ""
weight: "9"
tags:
  - "reporting"
  - "ampel"
  - "trends"
  - "fortschritt"
---


# Projekt-Reporting

Dokumentiere den Projektfortschritt systematisch mit strukturierten Status-Reports. ELIZA's Reporting-System hilft dir dabei, Kosten, Termine und Qualität transparent zu überwachen und Stakeholder regelmässig über den Projektstatus zu informieren.

## Was ist Projekt-Reporting?

**Projekt-Reports** sind strukturierte Status-Berichte die den aktuellen Stand eines Projekts dokumentieren. Sie ermöglichen:

- **Fortschrittsdokumentation**: Festhalten des Projektstatus zu einem bestimmten Zeitpunkt
- **Trend-Analyse**: Entwicklung über Zeit nachvollziehen (besser/schlechter/stabil)
- **Stakeholder-Kommunikation**: Transparente Information für alle Beteiligten
- **Frühwarnsystem**: Probleme rechtzeitig erkennen und eskalieren
- **Audit-Trail**: Nachweisbare Historie für Controlling und Compliance

## Projekt-Report erstellen

### Neuen Report anlegen

1. Öffne dein Projekt in der Detailansicht
2. Wechsle zum Tab **"Reports"** oder **"Status-Reports"**
3. Klicke auf **"+ Neuer Report"**
4. Fülle das Formular aus:

**Allgemeine Felder:**

- **Titel**: Aussagekräftiger Name (z.B. "Status Report KW 15", "Monats-Report März 2025")
- **Datum**: Berichtsdatum (Standard: heute)
- **Beschreibung**: Allgemeiner Kommentar zum Projektstatus, wichtige Ereignisse

**Bewertungs-Dimensionen:**

Für jede der drei Dimensionen (Kosten, Termine, Qualität) gibst du an:

- **Bewertung**: Ampel-Status (grün/orange/rot)
- **Trend**: Entwicklung (positiv ↗ / stabil → / negativ ↘)
- **Kommentar**: Detaillierte Erklärung der Bewertung

5. Speichere den Report

### Report bearbeiten

- Klicke auf das **Bearbeiten-Symbol** (Stift) neben dem Report
- Passe Bewertungen und Kommentare an
- Speichere die Änderungen

**Hinweis**: Reports sollten idealerweise nicht nachträglich geändert werden, um eine ehrliche Historie zu bewahren.

### Report löschen

- Klicke auf das **Löschen-Symbol** (Papierkorb)
- Bestätige den Löschvorgang

**Achtung**: Das Löschen von Reports entfernt historische Daten und beeinträchtigt die Nachvollziehbarkeit.

## Die drei Bewertungs-Dimensionen

### 1. Kosten 💰

**Was wird bewertet?**
- Ist das Projekt im Budget?
- Drohen Kostenüberschreitungen?
- Sind zusätzliche Ressourcen nötig?

**Bewertungs-Kriterien:**

🟢 **Grün**:
- Budget wird eingehalten (0-90% Auslastung)
- Keine Kostenüberschreitungen absehbar
- Alle Kostenstellen im Plan

🟡 **Orange**:
- Budget fast aufgebraucht (90-100% Auslastung)
- Risiko von Kostenüberschreitung erkennbar
- Einzelne Kostenstellen überzogen

🔴 **Rot**:
- Budget überschritten (>100%)
- Signifikante Mehrkosten erforderlich
- Nachverhandlung mit Kunde/Management nötig

**Kommentar-Beispiele:**
- Grün: "Budget zu 75% ausgeschöpft, Projekt liegt im Plan"
- Orange: "Budget zu 95% ausgeschöpft, letzte Phase könnte knapp werden"
- Rot: "Budget um CHF 15'000 überzogen, zusätzliche Funktionen vom Kunden gewünscht"

### 2. Termine 📅

**Was wird bewertet?**
- Werden Meilensteine eingehalten?
- Sind Verzögerungen absehbar?
- Ist der Go-Live-Termin gefährdet?

**Bewertungs-Kriterien:**

🟢 **Grün**:
- Alle Meilensteine werden voraussichtlich eingehalten
- Projekt liegt im Zeitplan
- Keine Verzögerungen absehbar

🟡 **Orange**:
- Einzelne Meilensteine gefährdet
- Verzögerungen möglich
- Deadline unter Druck, aber machbar

🔴 **Rot**:
- Meilensteine werden nicht eingehalten
- Signifikante Verzögerungen
- Go-Live-Termin muss verschoben werden

**Kommentar-Beispiele:**
- Grün: "Alle Meilensteine bis KW 20 erreicht, nächster Meilenstein in 3 Wochen"
- Orange: "Testing läuft 1 Woche hinter Plan, Go-Live noch erreichbar mit Überstunden"
- Rot: "Go-Live muss von 15.03. auf 29.03. verschoben werden, kritische Bugs gefunden"

### 3. Qualität ⭐

**Was wird bewertet?**
- Entspricht das Ergebnis den Anforderungen?
- Wie ist die Code/Produkt-Qualität?
- Gibt es technische Schulden?

**Bewertungs-Kriterien:**

🟢 **Grün**:
- Alle Anforderungen erfüllt
- Hohe Qualität, wenig Bugs
- Tests erfolgreich

🟡 **Orange**:
- Einzelne Anforderungen nicht vollständig erfüllt
- Moderate Qualitätsprobleme
- Mehrere Bugs, aber nichts Kritisches

🔴 **Rot**:
- Wesentliche Anforderungen nicht erfüllt
- Schwerwiegende Qualitätsmängel
- Kritische Bugs oder Sicherheitsprobleme

**Kommentar-Beispiele:**
- Grün: "Alle Features implementiert, 95% Test-Abdeckung, nur 3 minor Bugs offen"
- Orange: "Performance-Probleme unter Last, Optimierung erforderlich, 15 Bugs offen"
- Rot: "Kritischer Security-Bug gefunden, Feature X funktioniert nicht, Refactoring nötig"

## Trend-Indikatoren

Trends zeigen die **Entwicklung seit dem letzten Report**:

### ↗ Positiv (Verbesserung)

**Bedeutung**: Situation hat sich verbessert

**Verwendung:**
- Vorher orange, jetzt grün
- Kosten unter Kontrolle gebracht
- Verzögerung aufgeholt
- Qualitätsprobleme behoben

**Beispiele:**
- "Kosten: Orange → Grün (Zusatzbudget vom Kunden freigegeben)"
- "Termine: Rot → Orange (Verzögerung durch Extra-Ressourcen reduziert)"
- "Qualität: Orange → Grün (Alle kritischen Bugs behoben)"

### → Stabil (Keine Änderung)

**Bedeutung**: Status unverändert seit letztem Report

**Verwendung:**
- Ampel-Status gleich geblieben
- Situation weder besser noch schlechter
- Konstante Performance

**Beispiele:**
- "Kosten: Grün → Grün (Weiterhin im Budget)"
- "Termine: Orange → Orange (Verzögerung hält an, aber nicht schlimmer)"
- "Qualität: Rot → Rot (Qualitätsprobleme persistieren)"

### ↘ Negativ (Verschlechterung)

**Bedeutung**: Situation hat sich verschlechtert

**Verwendung:**
- Vorher grün, jetzt orange/rot
- Neue Probleme aufgetreten
- Risiken haben sich realisiert
- Eskalation erforderlich

**Beispiele:**
- "Kosten: Grün → Orange (Unvorhergesehener Aufwand aufgetreten)"
- "Termine: Grün → Rot (Key-Entwickler krankheitsbedingt ausgefallen)"
- "Qualität: Orange → Rot (Neue kritische Sicherheitslücke entdeckt)"

## Report-Historie und Trend-Analyse

### Chronologische Übersicht

Alle Reports werden dauerhaft gespeichert und bilden eine **Timeline**:

- Reports sortiert nach Datum (neueste zuerst)
- Schneller Überblick über Projekt-Entwicklung
- Vergleich zwischen Reports möglich

### Entwicklung nachvollziehen

**Trend-Visualisierung:**

```
Kosten:    🟢 → 🟢 → 🟡 → 🟡 → 🔴
           KW14  KW15  KW16  KW17  KW18
```

**Erkenntnisse:**
- Kostensituation verschlechtert sich kontinuierlich
- Frühwarnung in KW16 (erste Orange-Bewertung)
- Eskalation in KW18 (Rot)

### Audit-Trail

Reports bilden einen **Nachweis** für:

- **Compliance**: Nachweisbare Projektüberwachung
- **Controlling**: Kostenentwicklung dokumentiert
- **Management**: Transparente Kommunikation
- **Lessons Learned**: Analyse für zukünftige Projekte

## Praktische Beispiele

### Beispiel 1: Stabiles Projekt (Alles Grün)

**Status Report KW 20 - Website-Relaunch**

**Datum**: 15.05.2025
**Allgemeiner Kommentar**: "Projekt läuft planmässig, Team hochmotiviert"

| Dimension | Bewertung | Trend | Kommentar |
|-----------|-----------|-------|-----------|
| **Kosten** | 🟢 Grün | → Stabil | Budget zu 60% ausgeschöpft, CHF 12'000 von CHF 20'000 verbraucht |
| **Termine** | 🟢 Grün | → Stabil | Meilenstein "Design-Freeze" erreicht, nächster Meilenstein in 2 Wochen |
| **Qualität** | 🟢 Grün | ↗ Positiv | Code-Review abgeschlossen, alle Findings behoben, Test-Coverage bei 90% |

**Massnahmen**: Keine erforderlich, weiter so!

### Beispiel 2: Projekt mit Risiken (Gemischt)

**Status Report KW 25 - ERP-Einführung**

**Datum**: 20.06.2025
**Allgemeiner Kommentar**: "Projekt auf Kurs, aber einzelne Herausforderungen"

| Dimension | Bewertung | Trend | Kommentar |
|-----------|-----------|-------|-----------|
| **Kosten** | 🟢 Grün | → Stabil | Budget zu 45% verbraucht, keine Überschreitung erkennbar |
| **Termine** | 🟡 Orange | ↘ Negativ | Testing 1 Woche verzögert, Go-Live gefährdet, Extra-Ressourcen eingeplant |
| **Qualität** | 🟢 Grün | → Stabil | Integration Tests erfolgreich, 5 minor Bugs offen (nicht kritisch) |

**Massnahmen**:
- Externe Tester hinzuziehen für beschleunigte Test-Phase
- Daily Standups zur engen Abstimmung
- Puffer-Woche vor Go-Live einplanen

### Beispiel 3: Kritisches Projekt (Eskalation)

**Status Report KW 30 - Mobile App Launch**

**Datum**: 25.07.2025
**Allgemeiner Kommentar**: "KRITISCH - Sofortige Massnahmen erforderlich"

| Dimension | Bewertung | Trend | Kommentar |
|-----------|-----------|-------|-----------|
| **Kosten** | 🔴 Rot | ↘ Negativ | Budget um CHF 25'000 überschritten (125%), Nachfinanzierung nötig |
| **Termine** | 🔴 Rot | ↘ Negativ | Go-Live muss um 3 Wochen verschoben werden, Kunde bereits informiert |
| **Qualität** | 🟡 Orange | ↘ Negativ | Performance-Probleme auf älteren Geräten, 12 kritische Bugs offen |

**Massnahmen**:
- Eskalations-Meeting mit Geschäftsführung HEUTE
- Zusatzbudget von CHF 30'000 beantragen
- Go-Live auf 15.08. verschieben (statt 25.07.)
- Performance-Experte von extern hinzuziehen
- Tägliches Reporting an Stakeholder

### Beispiel 4: Projekt-Turnaround (Erholung)

**Status Report KW 35 - Compliance-Projekt**

**Datum**: 01.09.2025
**Allgemeiner Kommentar**: "Situation stabilisiert, Massnahmen greifen"

| Dimension | Bewertung | Trend | Kommentar |
|-----------|-----------|-------|-----------|
| **Kosten** | 🟡 Orange | ↗ Positiv | Budget zu 95%, aber hält bis Projektende, keine weiteren Überschreitungen |
| **Termine** | 🟡 Orange | ↗ Positiv | Verzögerung von 2 auf 1 Woche reduziert, Audit-Termin noch erreichbar |
| **Qualität** | 🟢 Grün | ↗ Positiv | Alle kritischen Gaps geschlossen, Pre-Audit erfolgreich |

**Massnahmen**:
- Weiterhin erhöhte Aufmerksamkeit, aber entspannter als letzte Woche
- Team für gute Arbeit gelobt
- Lessons Learned Session geplant

## Report-Frequenz und Timing

### Empfohlene Frequenzen

**Wöchentlich:**
- Für kritische/risikobehaftete Projekte
- Kurze Phase vor wichtigen Meilensteinen
- Bei roter Ampel in irgendeiner Dimension

**Zweiwöchentlich:**
- Standard für die meisten Projekte
- Gute Balance zwischen Aufwand und Nutzen
- Ausreichend für normale Projekt-Überwachung

**Monatlich:**
- Für langläufige, stabile Projekte
- Wartungs-Projekte oder Retainer
- Nur bei durchgehend grüner Ampel

### Bester Zeitpunkt

**Empfehlung**: Reports immer am **gleichen Wochentag** erstellen:

- **Montag**: Frische Woche, klarer Blick aufs Projekt
- **Freitag**: Wochenabschluss, Zeit für Reflexion
- **Kalenderwochen-Rhythmus**: Immer KW-Ende für Konsistenz

**Beispiel**: "Jeden Freitag 15:00 Uhr erstelle ich den Wochen-Report"

## Best Practices

### Ehrlichkeit und Transparenz

✅ **Ehrliche Bewertungen**: Beschönige nichts, färbe Ampeln rechtzeitig orange/rot
✅ **Konkrete Kommentare**: Keine allgemeinen Floskeln, sondern spezifische Fakten
✅ **Probleme benennen**: Zeige Probleme auf, nicht nur Erfolge
✅ **Lösungen anbieten**: Nicht nur Problems beschreiben, sondern Massnahmen vorschlagen

### Qualität der Kommentare

✅ **Faktenbasiert**: Zahlen, Daten, konkrete Beispiele
✅ **Verständlich**: Keine Fachbegriffe für Management-Reports
✅ **Kurz und prägnant**: 2-3 Sätze pro Dimension reichen
✅ **Massnahmen-orientiert**: Was wird getan? Wer ist verantwortlich?

### Regelmässigkeit

✅ **Feste Rhythmen**: Immer gleicher Wochentag, gleiche Uhrzeit
✅ **Keine Ausnahmen**: Auch bei grüner Ampel regelmässig reporten
✅ **Frühzeitig**: Nicht erst 3 Tage nach Stichtag
✅ **Kontinuität**: Auch bei Abwesenheit durch Stellvertreter sicherstellen

### Stakeholder-Kommunikation

✅ **Verteiler pflegen**: Wer muss den Report erhalten?
✅ **Eskalation definieren**: Bei roter Ampel sofort informieren
✅ **Follow-up**: Auf Rückfragen zeitnah antworten
✅ **Kontext liefern**: Bei Trends Vergleich zu vorherigem Report machen

### Häufige Fehler vermeiden

❌ **Schönfärberei**: Ampel zu lange grün lassen, Probleme verschleiern
❌ **Zu allgemein**: "Alles läuft gut" ohne konkrete Infos
❌ **Unregelmässig**: Mal wöchentlich, mal gar nicht
❌ **Keine Massnahmen**: Probleme beschreiben, aber keine Lösung anbieten
❌ **Zu komplex**: Seitenlange Reports die niemand liest
❌ **Keine Trends**: Jeder Report isoliert betrachtet, kein Vergleich zu vorher

## Report-Templates und Vorlagen

### Standard-Report-Template

```
PROJEKT-STATUS REPORT
=====================

Projekt: [Projektname]
Berichtszeitraum: [KW XX / Monat]
Datum: [TT.MM.JJJJ]
Ersteller: [Name]

ALLGEMEINER STATUS
------------------
[2-3 Sätze zur aktuellen Projektsituation]

BEWERTUNGEN
-----------

KOSTEN: [🟢/🟡/🔴] Trend: [↗/→/↘]
[Kommentar zur Kostensituation]

TERMINE: [🟢/🟡/🔴] Trend: [↗/→/↘]
[Kommentar zur Terminsituation]

QUALITÄT: [🟢/🟡/🔴] Trend: [↗/→/↘]
[Kommentar zur Qualitätssituation]

MASSNAHMEN
----------
- [Massnahme 1]
- [Massnahme 2]
- [Massnahme 3]

NÄCHSTE SCHRITTE
----------------
- [Schritt 1]
- [Schritt 2]

RISIKEN
-------
- [Risiko 1]
- [Risiko 2]
```

### Kurzform für Wochenreports

```
Status KW XX - [Projektname]

💰 Kosten: 🟢 (75% Budget verbraucht)
📅 Termine: 🟡 (1 Woche Verzögerung, aber aufholbar)
⭐ Qualität: 🟢 (Alle Tests bestanden)

Top 3 diese Woche:
- Feature X fertiggestellt
- Testing Phase gestartet
- Client-Meeting erfolgreich

Massnahmen nächste Woche:
- Extra-Ressourcen für Aufholen der Verzögerung
- Performance-Optimierung starten
```

## Integration mit anderen Modulen

### Kostenstellen und Budget

Reports beziehen sich auf [Kostenstellen-Daten]({{< ref "07-kostenstellen-zeitbudget" >}}):
- Aktueller Budget-Status fliesst in Kosten-Bewertung ein
- Auslastungs-Prozent bestimmt Ampel-Farbe
- Verrechenbare vs. interne Zeiten transparent machen

### Meilensteine und Termine

Reports basieren auf [Meilenstein-Status]({{< ref "08-meilensteine" >}}):
- Ampel-Bewertung der Meilensteine übernehmen
- Verzögerungen konkret benennen
- Kritische Termine hervorheben

### Aufgaben und Fortschritt

Erledigte vs. offene Aufgaben zeigen Fortschritt:
- Velocity tracken (Aufgaben/Woche)
- Blocker identifizieren
- Burn-Down Chart für Sprint-Projekte

## Zusammenfassung

Mit Projekt-Reporting steuerst du transparent und nachvollziehbar:

✅ **Strukturiert reporten**: Nutze die 3 Dimensionen (Kosten, Termine, Qualität)
✅ **Ampel-System**: Visualisiere Status mit grün/orange/rot
✅ **Trends dokumentieren**: Zeige Entwicklung mit positiv/stabil/negativ
✅ **Regelmässig berichten**: Wöchentlich, zweiwöchentlich oder monatlich
✅ **Ehrlich bewerten**: Probleme rechtzeitig ansprechen, nicht beschönigen
✅ **Historie nutzen**: Analysiere Trends über Zeit, lerne für zukünftige Projekte

**Nächste Schritte:**

- [Kostenstellen]({{< ref "07-kostenstellen-zeitbudget" >}}) für Budget-Überwachung
- [Meilensteine]({{< ref "08-meilensteine" >}}) für Termin-Controlling
- [Projektphasen]({{< ref "05-projektphasen" >}}) für Fortschritts-Tracking
