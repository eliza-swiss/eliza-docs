---
title: "Arbeitszeit erfassen"
description: ""
weight: "3"
tags:
  - "arbeitszeit"
  - "stundenerfassung"
  - "timer"
  - "worktime"
---


# Arbeitszeit erfassen

In diesem Kapitel lernst du, wie du deine tägliche Arbeitszeit erfasst. Du erfährst alles über die verschiedenen Erfassungsmethoden, Stundenarten und wie du Korrekturen vornimmst.

## Zugriff auf die Zeiterfassung

### Meine Arbeitszeit öffnen

1. Klicke im Menü auf **Zeiterfassung**
2. Wähle **Meine Arbeitszeit**
3. Du siehst automatisch den heutigen Tag

### Tagesansicht verstehen

Die Tagesansicht zeigt dir:

- **Datum** – Mit Navigationspfeilen zum Wechseln
- **Einträge** – Alle erfassten Arbeitszeiten des Tages
- **Summen** – Geleistete Stunden und Differenz zu Sollstunden
- **Abwesenheiten** – Falls vorhanden
- **Spesen** – Falls erfasst

## Arbeitszeit mit Start-/Endzeit erfassen

Die gebräuchlichste Methode zur Zeiterfassung:

### Neuen Eintrag erstellen

**Schritt 1:** Klicke auf **Hinzufügen** oder das **+** Symbol

**Schritt 2:** Fülle das Formular aus:

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| **Stundenart** | Art der Arbeitszeit | Arbeitszeit |
| **Beginn** | Startzeit (HH:MM) | 08:00 |
| **Ende** | Endzeit (HH:MM) | 12:00 |
| **Projekt** | Optional: Zugehöriges Projekt | Projekt A |
| **Beschreibung** | Optional: Was wurde gemacht | Meeting, Entwicklung |

**Schritt 3:** Klicke auf **Speichern**

> **💡 Tipp:** Du kannst Zeiten auch im Format `HHMM` eingeben – z.B. `0800` statt `08:00`.

### Mehrere Einträge pro Tag

Du kannst beliebig viele Einträge pro Tag erfassen:

<pre>
08:00 - 12:00  Arbeitszeit       4.00h
12:00 - 12:30  Mittagspause      0.00h (Pause)
12:30 - 17:30  Arbeitszeit       5.00h
─────────────────────────────────────────
              Total:             9.00h
</pre>

> **⚠️ Wichtig:** Einträge dürfen sich zeitlich nicht überschneiden. Das System prüft dies automatisch.

## Arbeitszeit mit Stundenzahl erfassen

Falls in deiner Organisation aktiviert, kannst du auch nur die Stundenzahl eingeben:

### Stunden statt Zeiten erfassen

**Schritt 1:** Klicke auf **Hinzufügen**

**Schritt 2:** Fülle nur das Feld **Anzahl Stunden (HH:MM)** aus:

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| **Stundenart** | Art der Arbeitszeit | Arbeitszeit |
| **Anzahl Stunden** | Dauer im Format HH:MM | 08:30 |
| **Projekt** | Optional | Projekt B |
| **Beschreibung** | Optional | Büroarbeit |

**Schritt 3:** Klicke auf **Speichern**

> **⚠️ Wichtig:** Du kannst nicht gleichzeitig Start-/Endzeit UND Stundenzahl eingeben – wähle eine Methode.

## Timer-Funktion nutzen

Für eine präzise Erfassung kannst du einen Timer starten:

### Timer starten

**Schritt 1:** Erstelle einen neuen Eintrag

**Schritt 2:** Gib nur die **Startzeit** ein (z.B. 08:00)

**Schritt 3:** Lass das Feld **Ende** leer

**Schritt 4:** Klicke auf **Speichern**

Der Timer läuft nun und zählt die Zeit automatisch.

### Timer stoppen

**Schritt 1:** Öffne den laufenden Eintrag (erkennbar am fehlenden Ende)

**Schritt 2:** Gib die **Endzeit** ein

**Schritt 3:** Klicke auf **Speichern**

> **⚠️ Wichtig:** Es kann immer nur ein Timer gleichzeitig laufen. Ein Timer kann nur am aktuellen Tag gestartet werden.

## Stundenarten verstehen

Jeder Zeiteintrag hat eine **Stundenart**, die bestimmt, wie die Zeit verrechnet wird.

### Typische Stundenarten

| Stundenart | Faktor | Beschreibung |
|------------|--------|--------------|
| **Arbeitszeit** | 1.0 | Normale Arbeitszeit |
| **Überzeit** | 1.25 | Überzeit mit Zuschlag |
| **Nachtarbeit** | 1.25 | Nachtarbeit mit Zuschlag |
| **Wochenendarbeit** | 1.5 | Arbeit am Wochenende |
| **Pause** | 0.0 | Wird nicht als Arbeitszeit gezählt |

### Umrechnungsfaktor

Der Faktor bestimmt, wie die erfasste Zeit in Arbeitszeit umgerechnet wird:

<pre>
Angerechnete Zeit = Erfasste Zeit × Faktor
</pre>

**Beispiele:**
- 4h Arbeitszeit (Faktor 1.0) = 4h angerechnet
- 4h Überzeit (Faktor 1.25) = 5h angerechnet
- 1h Pause (Faktor 0.0) = 0h angerechnet

> **💡 Tipp:** Der Faktor wird bei der Stundenart in Klammern angezeigt, z.B. "Überzeit (1.25)".

## Projekte und Kostenstellen zuweisen

Falls in deiner Organisation aktiviert, kannst du Arbeitszeiten einem Projekt zuweisen:

### Projekt auswählen

1. Öffne einen neuen oder bestehenden Eintrag
2. Wähle im Feld **Projekt** das passende Projekt aus
3. Speichere den Eintrag

### Vorteile der Projektzuweisung

- Auswertung nach Projekten möglich
- Kostenstellen-Zuordnung
- Projektcontrolling
- Abrechnung an Kunden

> **💡 Tipp:** Du siehst nur Projekte, für die du berechtigt bist. Bei Fragen wende dich an deinen Projektleiter.

## Einträge bearbeiten

### Eintrag ändern

**Schritt 1:** Klicke auf den Eintrag, den du ändern möchtest

**Schritt 2:** Bearbeite die gewünschten Felder

**Schritt 3:** Klicke auf **Speichern**

> **💡 Tipp:** Auch beim Bearbeiten kannst du Beginn und Ende im Format `HHMM` eingeben – z.B. `0815` oder `815` statt `08:15`.

### Eintrag löschen

**Schritt 1:** Klicke auf den Eintrag

**Schritt 2:** Klicke auf **Löschen** (rotes Papierkorb-Symbol)

**Schritt 3:** Bestätige die Löschung

> **⚠️ Wichtig:** Gelöschte Einträge können nicht wiederhergestellt werden.

## Zwischen Tagen navigieren

### Mit Pfeilen navigieren

- **←** Vorheriger Tag
- **→** Nächster Tag

### Datum direkt auswählen

1. Klicke auf das angezeigte Datum
2. Wähle das gewünschte Datum im Kalender
3. Die Ansicht wechselt zum ausgewählten Tag

### Schnell zum heutigen Tag

Klicke auf **Heute** oder nutze den Menüpunkt **Meine Arbeitszeit**, um direkt zum heutigen Tag zu gelangen.

## Wochenansicht

Für eine bessere Übersicht kannst du auch die Wochenansicht nutzen:

### Wochenübersicht

Die Wochenansicht zeigt:

- Alle Tage der Woche
- Summe pro Tag
- Summe der Woche
- Differenz zu Sollstunden

## Validierung und Warnungen

Das System prüft automatisch verschiedene Regeln:

### Maximale Arbeitszeit ohne Pause

Gemäss Arbeitszeitgesetz gibt es Grenzen für ununterbrochene Arbeitszeit:

> **⚠️ Warnung:** "Die maximale Arbeitszeit ohne Pause beträgt X Stunden."

**Lösung:** Füge eine Pause zwischen längeren Arbeitsblöcken ein.

### Minimale Ruhezeit zwischen Schichten

Zwischen zwei Arbeitstagen muss eine Mindest-Ruhezeit eingehalten werden:

> **⚠️ Warnung:** "Die minimale Pause zwischen zwei Schichten beträgt X Stunden."

**Lösung:** Prüfe, ob die Zeiten korrekt sind oder ob eine Ausnahme genehmigt werden muss.

### Ungültige Einträge

Einträge, die gegen Regeln verstossen, werden als **ungültig** markiert:

- Sie sind rot hervorgehoben
- Eine Erklärung zeigt den Grund
- Administratoren können ungültige Einträge akzeptieren

## Beschreibungen und Notizen

### Beschreibung hinzufügen

Das Beschreibungsfeld ist optional, aber nützlich für:

- Dokumentation der Tätigkeiten
- Nachvollziehbarkeit für Vorgesetzte
- Projektabrechnungen
- Spätere Referenz

**Beispiele für Beschreibungen:**
- "Kundentermin Firma XY"
- "Entwicklung Feature #123"
- "Teammeeting und Dokumentation"

## Tagesabschluss

Am Ende eines Arbeitstages solltest du:

1. ✅ Alle Einträge vollständig erfassen
2. ✅ Laufende Timer stoppen
3. ✅ Pausen korrekt eintragen
4. ✅ Summe mit Sollstunden vergleichen

### Tagesübersicht prüfen

Am unteren Rand der Tagesansicht siehst du:

| Kennzahl | Beschreibung |
|----------|--------------|
| **Geleistet** | Summe aller angerechneten Stunden |
| **Sollstunden** | Tägliche Sollstunden laut Anstellungsverhältnis |
| **Differenz** | Über- oder Unterzeit des Tages |

## Best Practices

### Für effiziente Zeiterfassung

- ✅ Arbeitszeit zeitnah erfassen (nicht Wochen später)
- ✅ Timer für präzise Erfassung nutzen
- ✅ Pausen nicht vergessen
- ✅ Beschreibungen bei projektbezogener Arbeit hinzufügen
- ✅ Regelmässig die Tagesübersicht prüfen

### Vermeiden

- ❌ Zeiten schätzen statt erfassen
- ❌ Pausen ignorieren
- ❌ Timer über Nacht laufen lassen
- ❌ Rückwirkende Erfassung über lange Zeiträume

## Häufige Fragen

### Kann ich Zeiten rückwirkend erfassen?

Ja, aber nur innerhalb eines konfigurierbaren Bearbeitungszeitraums. Dein Administrator legt fest, wie viele Tage in der Vergangenheit du Arbeitszeiten bearbeiten darfst (z.B. 14 Tage).

**Ausnahmen:**

- **Vorgesetzte** können Zeiten ihrer Teammitglieder auch ausserhalb des Zeitraums bearbeiten
- **Administratoren** haben uneingeschränkten Zugriff auf alle Zeiteinträge

Falls du ausserhalb des Zeitraums eine Korrektur benötigst, wende dich an deinen Vorgesetzten oder Administrator.

### Was bedeutet der Faktor bei der Stundenart?

Der Faktor bestimmt, wie die erfasste Zeit in Arbeitszeit umgerechnet wird. Ein Faktor von 1.25 bedeutet, dass 4 erfasste Stunden als 5 Arbeitsstunden gezählt werden.

### Warum kann ich kein Projekt auswählen?

Mögliche Gründe:
- Die Projektauswahl ist nicht aktiviert
- Dir wurden keine Projekte zugewiesen
- Das Projekt ist nicht mehr aktiv

### Mein Eintrag wird als ungültig markiert. Was tun?

1. Lies die angezeigte Fehlermeldung
2. Prüfe, ob die Zeiten korrekt sind
3. Füge ggf. eine Pause ein
4. Bei berechtigten Ausnahmen: Wende dich an einen Administrator

### Kann ich Einträge nach Monatsabschluss ändern?

Nein, nach dem Monatsabschluss sind Änderungen nur noch durch Administratoren möglich. Diese können manuelle Korrekturen vornehmen.

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Wie du zur Zeiterfassung navigierst
- ✅ Arbeitszeit mit Start-/Endzeit erfassen
- ✅ Arbeitszeit mit Stundenzahl erfassen
- ✅ Die Timer-Funktion nutzen
- ✅ Stundenarten und deren Bedeutung
- ✅ Projekte zuweisen
- ✅ Einträge bearbeiten und löschen
- ✅ Validierungsmeldungen verstehen

Im nächsten Kapitel lernst du, wie du Abwesenheiten wie Ferien und Krankheit erfasst.
