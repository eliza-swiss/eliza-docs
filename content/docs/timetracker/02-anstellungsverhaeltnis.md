---
title: "Anstellungsverhältnis"
description: ""
weight: "2"
tags:
  - "anstellung"
  - "salary"
  - "arbeitszeit"
  - "sollstunden"
  - "ferienanspruch"
---


# Anstellungsverhältnis

Das Anstellungsverhältnis ist die Grundlage für die gesamte Zeiterfassung. Es definiert deine Sollstunden, dein Arbeitszeitmodell und deinen Ferienanspruch. In diesem Kapitel erfährst du, wie Anstellungsverhältnisse in ELIZA funktionieren.

## Was ist ein Anstellungsverhältnis?

Ein Anstellungsverhältnis (in ELIZA auch "Salary" genannt) speichert alle relevanten Informationen zu deiner Anstellung:

- **Gültigkeitszeitraum** – Von wann bis wann das Verhältnis gilt
- **Arbeitszeitmodell** – Wie deine Arbeitszeit berechnet wird
- **Sollstunden** – Wie viele Stunden du pro Woche arbeiten sollst
- **Ferienanspruch** – Wie viele Ferientage dir pro Jahr zustehen
- **Lohnart und Salär** – Optional für HR-Zwecke
- **Kostenstelle** – Für die Kostenrechnung

> **💡 Tipp:** Du findest dein Anstellungsverhältnis im Modul **Organisation** bei deinem Mitarbeiterprofil.

## Arbeitszeitmodelle

ELIZA unterstützt verschiedene Arbeitszeitmodelle, die unterschiedliche Anwendungsfälle abdecken:

### 1. Vollzeit-Standard

Das einfachste Modell für Vollzeitmitarbeitende.

**Kennzeichen:**
- Anstellungsgrad: 100%
- Wochenstunden: Werden aus den vorgegebenen Wochenstunden berechnet
- Beispiel: 42 Stunden/Woche bei 100%

**Konfiguration:**
- Kein Anstellungsgrad eingeben
- Keine Wochenstunden eingeben
- System verwendet die Standard-Wochenstunden der Organisation

### 2. Teilzeit-Standard (Anstellungsgrad)

Für Teilzeitmitarbeitende mit einem festen Prozentsatz.

**Kennzeichen:**
- Anstellungsgrad in % (z.B. 60%, 80%)
- Wochenstunden werden automatisch berechnet
- Ferienanspruch wird anteilig berechnet

**Konfiguration:**
- **Anstellungsgrad in %**: z.B. 80
- Keine Wochenstunden eingeben

**Beispielrechnung:**
- Vorgegebene Wochenstunden: 42h (für 100%)
- Anstellungsgrad: 80%
- → Sollstunden: 42h × 80% = 33.6h pro Woche

### 3. Wochenstunden-Standard

Für Mitarbeitende mit festen Wochenstunden.

**Kennzeichen:**
- Fixe Wochenstunden (z.B. 20h)
- Anstellungsgrad wird automatisch berechnet
- Flexible Verteilung auf die Wochentage

**Konfiguration:**
- **Sollstunden für Mitarbeiter:in**: z.B. 20
- Keinen Anstellungsgrad eingeben

**Beispielrechnung:**
- Vorgegebene Wochenstunden: 42h (für 100%)
- Sollstunden Mitarbeiter: 20h
- → Anstellungsgrad: 20h ÷ 42h = 47.6%

### 4. Halbtags-Flex

Für Mitarbeitende, die an bestimmten Tagen halbe oder ganze Tage arbeiten.

**Kennzeichen:**
- Arbeitstage werden als "Ganzer Tag", "Vormittag" oder "Nachmittag" definiert
- Anstellungsgrad wird automatisch berechnet
- Besonders geeignet für flexible Teilzeitmodelle

**Konfiguration:**
- **Halbtags-Flex** aktivieren
- Für jeden Wochentag festlegen:
  - **Ganzer Tag** = volle Sollstunden
  - **Vormittag** = halbe Sollstunden
  - **Nachmittag** = halbe Sollstunden
  - **-** = kein Arbeitstag

**Beispiel:**
| Tag | Einstellung | Stunden |
|-----|-------------|---------|
| Montag | Ganzer Tag | 8.4h |
| Dienstag | Ganzer Tag | 8.4h |
| Mittwoch | Vormittag | 4.2h |
| Donnerstag | Ganzer Tag | 8.4h |
| Freitag | - | 0h |
| **Total** | | **29.4h** |

→ Anstellungsgrad: 70%

### 5. Fixstunden-Teilzeit

Für Mitarbeitende mit festen Stunden an bestimmten Tagen.

**Kennzeichen:**
- Für jeden Wochentag werden fixe Stunden definiert
- Maximale Flexibilität bei der Stundenverteilung
- Ferienanspruch basiert auf Anzahl Arbeitstage

**Konfiguration:**
- **Fixstunden-Teilzeit** aktivieren
- Für jeden Wochentag die Sollstunden eingeben

**Beispiel:**
| Tag | Sollstunden |
|-----|-------------|
| Montag | 8.0h |
| Dienstag | 6.0h |
| Mittwoch | 4.0h |
| Donnerstag | 6.0h |
| Freitag | 0h |
| **Total** | **24h** |

> **⚠️ Wichtig:** Bei Fixstunden-Teilzeit wird der Ferienanspruch basierend auf der Anzahl Arbeitstage berechnet (nicht basierend auf Stunden).

## Sollstunden verstehen

### Tägliche Sollstunden

Die täglichen Sollstunden ergeben sich aus:

<pre>
Tägliche Sollstunden = Wochenstunden ÷ 5 Arbeitstage
</pre>

**Beispiel:**
- Wochenstunden: 42h
- Tägliche Sollstunden: 42h ÷ 5 = 8.4h

### Monatliche Sollstunden

Die monatlichen Sollstunden variieren je nach Anzahl Arbeitstage im Monat:

<pre>
Monatliche Sollstunden = Tägliche Sollstunden × Arbeitstage im Monat
</pre>

**Dabei werden abgezogen:**
- Wochenenden (Samstag, Sonntag)
- Öffentliche Feiertage
- Genehmigte Abwesenheiten (Ferien, Krankheit, etc.)

## Ferienanspruch

### Berechnung des Ferienanspruchs

Der Ferienanspruch wird je nach Arbeitszeitmodell unterschiedlich berechnet:

**Vollzeit-Standard:**

Beim Vollzeitmodell wird der volle Ferienanspruch gewährt. Pro Ferientag werden die vollen Tages-Sollstunden abgezogen.

| | Wert |
|---|---|
| Basis-Ferientage | 25 Tage |
| Anstellungsgrad | 100% |
| **Ferienanspruch** | **25 Tage** |
| Abzug pro Ferientag | 8.4 Stunden |

**Teilzeit-Standard und Wochenstunden-Standard:**

<pre>
Ferienanspruch = Basis-Ferientage × (Anstellungsgrad ÷ 100)
</pre>

| | Wert |
|---|---|
| Basis-Ferientage | 25 Tage |
| Anstellungsgrad | 80% |
| **Ferienanspruch** | **25 × 0.8 = 20 Tage** |
| Abzug pro Ferientag | 6.72 Stunden (80% von 8.4h) |

> **💡 Wichtig:** Beim Teilzeit-Standardmodell wird pro Ferientag 1 ganzer Tag abgezogen, aber mit reduzierten Stunden. Du hast weniger Ferientage, aber jeder Tag "kostet" auch weniger Stunden.

**Halbtags-Flex:**

<pre>
Ferienanspruch = Basis-Ferientage × (Anstellungsgrad ÷ 100)
</pre>

| | Wert |
|---|---|
| Basis-Ferientage | 25 Tage |
| Arbeitstage | Mo (ganzer Tag), Di (ganzer Tag), Mi (Vormittag), Do (ganzer Tag) |
| Anstellungsgrad | 70% (automatisch berechnet) |
| **Ferienanspruch** | **25 × 0.7 = 17.5 Tage** |

**Fixstunden-Teilzeit:**

Beim Fixstunden-Modell basiert der Ferienanspruch auf der Anzahl Arbeitstage, nicht auf den Stunden.

<pre>
Ferienanspruch = Basis-Ferientage × (Arbeitstage pro Woche ÷ 5)
</pre>

| | Wert |
|---|---|
| Basis-Ferientage | 25 Tage |
| Arbeitstage pro Woche | 4 (Mo 8h, Di 6h, Mi 4h, Do 6h) |
| **Ferienanspruch** | **25 × (4 ÷ 5) = 20 Tage** |

> **⚠️ Wichtig:** Beim Fixstunden-Modell zählt die Anzahl Tage, nicht die Stundenzahl. Ob du an einem Tag 4 oder 8 Stunden arbeitest, spielt für die Ferienberechnung keine Rolle.

### Übersicht: Ferienanspruch pro Arbeitszeitmodell

| Arbeitszeitmodell | Basis | Berechnung | Beispiel (25 Tage Basis) |
|---|---|---|---|
| Vollzeit-Standard | 100% | Voller Anspruch | 25 Tage |
| Teilzeit-Standard 80% | Anstellungsgrad | 25 × 80% | 20 Tage |
| Teilzeit-Standard 60% | Anstellungsgrad | 25 × 60% | 15 Tage |
| Halbtags-Flex 70% | Anstellungsgrad | 25 × 70% | 17.5 Tage |
| Fixstunden (4 Tage) | Arbeitstage | 25 × 4/5 | 20 Tage |
| Fixstunden (3 Tage) | Arbeitstage | 25 × 3/5 | 15 Tage |

### Benutzerdefinierter Ferienanspruch

In besonderen Fällen kann ein **benutzerdefinierter Ferienanspruch** festgelegt werden. Dieser überschreibt die automatische Berechnung komplett.

> **⚠️ Wichtig:** Wenn ein benutzerdefinierter Ferienanspruch gesetzt ist, wird keine automatische Berechnung mehr durchgeführt. Der eingegebene Wert gilt direkt als Jahresanspruch.

**Wo findest du dieses Feld?**

Das Feld "Benutzerdefinierter Ferienanspruch" ist nur im vollständigen Anstellungsverhältnis-Formular sichtbar. Öffne dazu das Anstellungsverhältnis direkt (nicht über den Quick-Add in der Organisation).

**Anwendungsfälle:**
- Vertraglich vereinbarte Sonderregelungen
- Altersbedingte Zusatzferien (z.B. ab 50 Jahren: 30 statt 25 Tage)
- Kaderverträge mit individuellen Ferienregelungen
- Übertrag aus Vorjahren

**Beispiel:**

| | Standard | Benutzerdefiniert |
|---|---|---|
| Anstellungsgrad | 80% | 80% |
| Basis-Ferientage | 25 | 25 |
| Automatische Berechnung | 25 × 0.8 = 20 Tage | *wird ignoriert* |
| Benutzerdefiniert | - | 28 Tage |
| **Effektiver Anspruch** | **20 Tage** | **28 Tage** |

### Anteiliger Ferienanspruch bei Ein-/Austritt

Bei unterjährigem Ein- oder Austritt wird der Ferienanspruch anteilig berechnet:

<pre>
Anteiliger Anspruch = Jahresanspruch × (Beschäftigungstage ÷ 365)
</pre>

**Beispiel:**

| | Wert |
|---|---|
| Eintrittsdatum | 15. März 2026 |
| Ferienanspruch (Jahr) | 25 Tage |
| Beschäftigungstage bis 31.12. | 291 Tage |
| **Anteiliger Anspruch** | **25 × (291 ÷ 365) = 19.9 → 20 Tage** |

> **💡 Tipp:** ELIZA rundet den Ferienanspruch standardmässig auf halbe Tage. In Deutschland wird auf ganze Tage gerundet.

## Stundenlohn-Mitarbeitende

Für Mitarbeitende im Stundenlohn (z.B. Aushilfen, Temporärmitarbeitende) gibt es aktuell kein eigenes Arbeitszeitmodell. So erfasst du Stundenlohn-Mitarbeitende:

**Empfohlene Konfiguration:**

1. **Lohnart**: Stundenlohn wählen
2. **Vertrauensarbeitszeit**: Aktivieren (keine Sollstunden, kein Gleitzeitsaldo)
3. **Ferienanspruch**: Benutzerdefiniert setzen oder leer lassen
4. **Arbeitszeit**: Mitarbeitende erfassen ihre geleisteten Stunden normal

**Ferienanspruch bei Stundenlohn:**

In der Schweiz wird der Ferienanspruch bei Stundenlöhnern oft als prozentualer Zuschlag auf den Stundenlohn abgegolten:

| Ferienanspruch | Zuschlag |
|---|---|
| 4 Wochen (20 Tage) | 8.33% |
| 5 Wochen (25 Tage) | 10.64% |
| 6 Wochen (30 Tage) | 13.04% |

In diesem Fall wird kein Ferienanspruch in ELIZA hinterlegt, da die Ferien über den Lohn abgegolten werden.

> **💡 Tipp:** Falls du den Ferienbezug trotzdem in ELIZA tracken möchtest, setze einen benutzerdefinierten Ferienanspruch und erfasse Ferien als Abwesenheit.

## Vertrauensarbeitszeit

Bei aktivierter **Vertrauensarbeitszeit** werden keine Sollstunden berechnet. Das bedeutet:

- Kein Gleitzeitsaldo (immer 0)
- Keine Über-/Unterzeit-Berechnung
- Arbeitszeit wird nur zur Dokumentation erfasst

**Wann sinnvoll:**
- Führungskräfte mit flexiblen Arbeitszeiten
- Projektbasierte Arbeit ohne fixe Stunden
- Vertrauensbasierte Arbeitsmodelle

**Konfiguration:**
- **Vertrauensarbeitszeit** aktivieren

## Feiertage ignorieren

Die Option **Feiertage ignorieren** bewirkt, dass öffentliche Feiertage nicht als arbeitsfrei gelten.

**Wann sinnvoll:**
- Mitarbeitende im Schichtbetrieb
- Mitarbeitende mit anderen Feiertagsregelungen
- Internationale Mitarbeitende

## Mehrere Anstellungsverhältnisse

Ein Mitarbeitender kann mehrere Anstellungsverhältnisse haben:

**Anwendungsfälle:**
- Änderung des Pensums (z.B. von 100% auf 80%)
- Befristete Verträge
- Wechsel des Arbeitszeitmodells

**Wichtig:**
- Anstellungsverhältnisse haben ein **Von-** und optional ein **Bis-Datum**
- Das System verwendet automatisch das jeweils gültige Verhältnis
- Lücken zwischen Verhältnissen führen zu fehlenden Sollstunden

## Anstellungsverhältnis einsehen

### Als Mitarbeitende/r

1. Gehe zu **Organisation** → **Mitarbeitende**
2. Öffne dein eigenes Profil
3. Scrolle zum Bereich **Anstellungsverhältnisse**

Dort siehst du:
- Alle deine Anstellungsverhältnisse
- Das aktuell gültige Verhältnis
- Deine berechneten Sollstunden und Ferienanspruch

### Als Vorgesetzte/r

Du kannst die Anstellungsverhältnisse deiner Teammitglieder einsehen:

1. Gehe zu **Organisation** → **Mitarbeitende**
2. Öffne das Profil eines Teammitglieds
3. Scrolle zum Bereich **Anstellungsverhältnisse**

## Anstellungsverhältnis bearbeiten

> **⚠️ Wichtig:** Das Bearbeiten von Anstellungsverhältnissen erfordert spezielle Berechtigungen und ist meist der HR-Abteilung vorbehalten.

### Neues Anstellungsverhältnis erstellen

1. Öffne das Mitarbeiterprofil
2. Klicke auf **Anstellungsverhältnis hinzufügen**
3. Fülle die erforderlichen Felder aus:
   - **Von**: Startdatum (Pflichtfeld)
   - **Bis**: Enddatum (optional, leer = unbefristet)
   - **Arbeitszeitmodell**: Wähle das passende Modell
   - **Ferienanspruch**: Basis-Ferientage pro Jahr
4. Klicke auf **Speichern**

### Bestehendes Verhältnis beenden

Wenn sich das Pensum ändert:

1. Öffne das aktuelle Anstellungsverhältnis
2. Setze das **Bis-Datum** auf den letzten Tag
3. Erstelle ein neues Anstellungsverhältnis ab dem Folgetag

## Auswirkungen auf die Zeiterfassung

Das Anstellungsverhältnis beeinflusst:

| Bereich | Auswirkung |
|---------|------------|
| **Sollstunden** | Tägliche/monatliche Zielstunden |
| **Gleitzeitsaldo** | Differenz zwischen Ist und Soll |
| **Ferienanspruch** | Verfügbare Ferientage |
| **Monatsabschluss** | Berechnung aller Salden |

## Best Practices

### Für HR-Verantwortliche

- ✅ Lückenlose Anstellungsverhältnisse sicherstellen
- ✅ Bei Pensumänderungen neues Verhältnis erstellen (nicht altes ändern)
- ✅ Ferienanspruch regelmässig prüfen
- ✅ Vertrauensarbeitszeit nur bewusst einsetzen

### Für Mitarbeitende

- ✅ Eigenes Anstellungsverhältnis kennen
- ✅ Bei Unstimmigkeiten HR kontaktieren
- ✅ Änderungen rechtzeitig melden

## Häufige Fragen

### Mein Gleitzeitsaldo stimmt nicht. Woran kann das liegen?

Prüfe folgende Punkte:
1. Ist das Anstellungsverhältnis korrekt und lückenlos?
2. Stimmt das Arbeitszeitmodell?
3. Sind die Sollstunden korrekt berechnet?
4. Wurden alle Abwesenheiten erfasst?

### Ich habe keinen Ferienanspruch angezeigt?

Mögliche Ursachen:
- Kein gültiges Anstellungsverhältnis vorhanden
- Ferienanspruch im Anstellungsverhältnis nicht ausgefüllt
- Das Anstellungsverhältnis ist abgelaufen

### Kann ich mein Arbeitszeitmodell selbst ändern?

Nein, Änderungen am Anstellungsverhältnis können nur von berechtigten Personen (HR, Administratoren) vorgenommen werden.

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Was ein Anstellungsverhältnis ist und welche Daten es enthält
- ✅ Die verschiedenen Arbeitszeitmodelle (Vollzeit, Teilzeit, Halbtags-Flex, Fixstunden)
- ✅ Wie Sollstunden und Ferienanspruch berechnet werden
- ✅ Was Vertrauensarbeitszeit bedeutet
- ✅ Wie du dein Anstellungsverhältnis einsehen kannst

Im nächsten Kapitel lernst du, wie du deine Arbeitszeit erfasst.
