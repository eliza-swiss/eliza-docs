---
title: "Datenschutz-Folgenabschätzung (DSFA)"
description: ""
weight: "4"
tags:
  - "dsfa"
  - "dpia"
  - "risikobewertung"
  - "folgenabschätzung"
---


# Datenschutz-Folgenabschätzung (DSFA)

In diesem Kapitel lernst du, wann und wie du eine Datenschutz-Folgenabschätzung (DSFA) durchführst.

## Was ist eine DSFA?

Eine **Datenschutz-Folgenabschätzung** (englisch: Data Protection Impact Assessment, DPIA) ist eine systematische Analyse zur Bewertung der Risiken einer Datenverarbeitung für die Rechte und Freiheiten natürlicher Personen.

Die DSFA ist vorgeschrieben nach:
- **Art. 35 DSGVO** (EU-Datenschutzgrundverordnung)
- **Art. 22 DSG** (Schweizer Datenschutzgesetz)

## Wann ist eine DSFA erforderlich?

Eine DSFA ist **verpflichtend**, wenn eine Verarbeitung voraussichtlich ein **hohes Risiko** für die Rechte und Freiheiten natürlicher Personen zur Folge hat.

### Indikatoren für ein hohes Risiko

| Indikator | Beispiel |
|-----------|----------|
| **Systematische Bewertung** | Scoring, Profiling, automatisierte Entscheidungen |
| **Besondere Datenkategorien** | Gesundheitsdaten, biometrische Daten |
| **Überwachung** | Videoüberwachung, GPS-Tracking |
| **Grosse Datenmengen** | Big Data, Massendatenverarbeitung |
| **Schutzbedürftige Personen** | Kinder, Patienten, Arbeitnehmer |
| **Innovative Technologien** | KI, Machine Learning |
| **Datenabgleich** | Verknüpfung verschiedener Datensätze |
| **Behinderung der Rechtsausübung** | Erschwerung von Auskunftsrechten |

> **Faustregel:** Ab 2 oder mehr dieser Kriterien ist eine DSFA in der Regel erforderlich.

### Beispiele für DSFA-pflichtige Verarbeitungen

- Einführung eines Mitarbeiterüberwachungssystems
- Nutzung von Gesichtserkennung
- Profiling für Kreditentscheidungen
- Verarbeitung von Patientendaten in grossem Umfang
- Einsatz von KI-gestützten HR-Tools

## DSFA-Übersicht im DSG-Modul

### Zugriff

1. Navigiere zum **Datenschutzsystem**
2. Klicke auf **"DSFAs"** (Datenschutz-Folgenabschätzungen)

### Liste der DSFAs

Die Übersicht zeigt alle durchgeführten Folgenabschätzungen:

| Spalte | Beschreibung |
|--------|--------------|
| **Name** | Bezeichnung der DSFA |
| **Beschreibung** | Kurzbeschreibung |

## Eine DSFA erstellen

### Schritt 1: Formular öffnen

1. Navigiere zu **DSFAs**
2. Klicke auf **"+ DSFA"**

### Schritt 2: Grunddaten erfassen

**Pflichtfelder:**

- **Name**: Eindeutige Bezeichnung der DSFA
  - Beispiel: "DSFA Videoüberwachung Empfangsbereich"
  - Beispiel: "DSFA Mitarbeiter-Zeiterfassung mit GPS"

- **Beschreibung**: Detaillierte Beschreibung der zu bewertenden Verarbeitung
  - Was genau wird analysiert?
  - Warum ist eine DSFA erforderlich?

- **Risikobewertung**: Systematische Analyse der Risiken
  - Welche Risiken bestehen für betroffene Personen?
  - Wie hoch ist die Eintrittswahrscheinlichkeit?
  - Wie schwerwiegend wären die Auswirkungen?

### Schritt 3: TOMs verknüpfen

- **Technische und Organisatorische Massnahmen**: Welche Schutzmassnahmen werden ergriffen, um die identifizierten Risiken zu minimieren?

### Schritt 4: Speichern

Klicke auf **"Speichern"**, um die DSFA anzulegen.

## Aufbau einer DSFA

Eine vollständige DSFA sollte folgende Elemente enthalten:

### 1. Beschreibung der Verarbeitung

- Was wird verarbeitet?
- Wer ist verantwortlich?
- Welche Daten werden verarbeitet?
- Wer sind die Betroffenen?
- Wie lange werden die Daten gespeichert?
- An wen werden die Daten übermittelt?

### 2. Bewertung der Notwendigkeit

- Ist die Verarbeitung erforderlich?
- Ist sie verhältnismässig?
- Welche Rechtsgrundlage liegt vor?
- Welcher Zweck wird verfolgt?

### 3. Risikobewertung

Bewerte die Risiken für betroffene Personen:

| Risiko-Kategorie | Beschreibung |
|------------------|--------------|
| **Vertraulichkeit** | Unbefugter Zugriff auf Daten |
| **Integrität** | Unbefugte Änderung von Daten |
| **Verfügbarkeit** | Datenverlust |
| **Diskriminierung** | Benachteiligung aufgrund der Daten |
| **Identitätsdiebstahl** | Missbrauch der Identität |
| **Finanzielle Schäden** | Materielle Verluste |
| **Rufschädigung** | Reputationsschäden |
| **Psychische Belastung** | Stress, Angst |

### Risikomatrix

<pre>
                    Auswirkung
                    Gering  Mittel  Hoch
Wahrscheinlichkeit
Hoch                Mittel  Hoch    Kritisch
Mittel              Gering  Mittel  Hoch
Gering              Gering  Gering  Mittel
</pre>

### 4. Massnahmen zur Risikominderung

Dokumentiere für jedes identifizierte Risiko:
- Welche Massnahme wird ergriffen?
- Wie reduziert sie das Risiko?
- Wer ist verantwortlich?
- Bis wann wird sie umgesetzt?

### 5. Restrisiko-Bewertung

Nach Umsetzung der Massnahmen:
- Wie hoch ist das verbleibende Risiko?
- Ist es akzeptabel?
- Falls nein: Konsultation der Aufsichtsbehörde erforderlich?

## Verknüpfung mit Verarbeitungsaktivitäten

DSFAs sollten mit den entsprechenden **Verarbeitungsaktivitäten** verknüpft werden:

1. Öffne die relevante **Verarbeitungsaktivität**
2. Im Abschnitt **"Folgenabschätzung"** die DSFA verknüpfen
3. Speichern

So ist jederzeit ersichtlich, für welche Verarbeitung eine DSFA durchgeführt wurde.

## DSFA-Prozess

### Empfohlener Ablauf

<pre>
┌─────────────────────────────────────────────────────┐
│  1. Prüfung: DSFA erforderlich?                     │
│     ↓                                               │
│  2. Beschreibung der Verarbeitung                   │
│     ↓                                               │
│  3. Notwendigkeits- und Verhältnismässigkeitsprüfung│
│     ↓                                               │
│  4. Risikobewertung                                 │
│     ↓                                               │
│  5. Massnahmen definieren                           │
│     ↓                                               │
│  6. Restrisiko bewerten                             │
│     ↓                                               │
│  7. Dokumentation und Freigabe                      │
│     ↓                                               │
│  8. Regelmässige Überprüfung                        │
└─────────────────────────────────────────────────────┘
</pre>

### Beteiligte Personen

- **Verantwortlicher**: Leitet die DSFA
- **Datenschutzbeauftragter**: Beratung und Prüfung
- **IT-Sicherheit**: Technische Bewertung
- **Fachbereich**: Fachliche Anforderungen
- **Betroffene**: Ggf. Einbezug (z.B. Mitarbeitervertretung)

## Best Practices

### Empfehlungen

- **Frühzeitig durchführen**: DSFA vor Beginn der Verarbeitung
- **Dokumentieren**: Alle Schritte und Entscheidungen festhalten
- **Aktualisieren**: Bei Änderungen der Verarbeitung überprüfen
- **Einbeziehen**: Datenschutzbeauftragten hinzuziehen
- **TOMs verknüpfen**: Konkrete Schutzmassnahmen dokumentieren

### Häufige Fehler

- **Zu spät durchgeführt**: DSFA erst nach Start der Verarbeitung
- **Oberflächlich**: Risiken nicht systematisch analysiert
- **Nicht aktualisiert**: Änderungen nicht berücksichtigt
- **Keine Massnahmen**: Risiken identifiziert, aber keine Gegenmassnahmen

## Konsultationspflicht

Falls das **Restrisiko weiterhin hoch** bleibt, muss die **Aufsichtsbehörde konsultiert** werden:

- In der Schweiz: **EDÖB** (Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter)
- In der EU: Zuständige **Datenschutzaufsichtsbehörde**

Die Konsultation sollte dokumentiert werden.

## Beispiel: DSFA für Videoüberwachung

**Name:** DSFA Videoüberwachung Eingangsbereich

**Beschreibung:** Bewertung der Datenschutzrisiken durch den Einsatz von Videoüberwachung im Eingangsbereich des Firmengebäudes.

**Risikobewertung:**
- **Identifizierte Risiken:**
  - Überwachung von Mitarbeitern über das notwendige Mass hinaus
  - Zugriff durch unbefugte Personen
  - Speicherung über das notwendige Mass hinaus
  - Profiling durch Verknüpfung mit anderen Daten

- **Bewertung:** Hohes Risiko aufgrund systematischer Überwachung

**TOMs:**
- Beschränkung auf Eingangsbereich (keine Arbeitsplätze)
- Speicherdauer max. 72 Stunden
- Zugriffsberechtigungen auf Sicherheitspersonal beschränkt
- Protokollierung aller Zugriffe
- Beschilderung gemäss Art. 13 DSGVO

**Restrisiko:** Mittel (akzeptabel nach Umsetzung der Massnahmen)

## Nächste Schritte

Im nächsten Kapitel lernst du das **Berechtigungskonzept** des Datenschutz-Moduls kennen.
