---
title: "Einführung"
description: ""
weight: "1"
tags:
  - "getting-started"
  - "basics"
  - "kontext"
  - "stakeholder"
---


# Einführung

In diesem Kapitel lernst du die Grundkonzepte und die Philosophie des Kontext Moduls kennen.

## Was ist der Kontext?

Der **Kontext** (Geschäftskontext) hilft dir, die **relevanten Rahmenbedingungen** deines Unternehmens zu verstehen und zu dokumentieren. Es ist ein zentrales Werkzeug für:

- **Interessierte Parteien (Stakeholder)** identifizieren und bewerten
- **Interne und externe Themen** erfassen und verwalten
- **Zusammenhänge** zwischen Stakeholdern, Themen und Prozessen herstellen
- **Strategische Analysen** (SWOT) mit Kontext verknüpfen

### Typische Anwendungsfälle

Der Kontext ist besonders wichtig für:

- **Qualitätsmanagement (ISO 9001)**: Kontext der Organisation (Kapitel 4.1 und 4.2)
- **Umweltmanagement (ISO 14001)**: Kontext der Organisation
- **Integrierte Managementsysteme**: Ganzheitliche Betrachtung
- **Strategische Planung**: Stakeholder-Analyse und Themenmanagement
- **Prozessmanagement**: Verknüpfung von Prozessen mit Stakeholdern und Themen

## Warum ist der Kontext wichtig?

### ISO 9001:2015 Anforderungen

Die ISO 9001:2015 verlangt in Kapitel 4:

> **4.1 Verstehen der Organisation und ihres Kontextes**
> Die Organisation muss externe und interne Themen bestimmen, die für ihren Zweck und ihre strategische Ausrichtung relevant sind.

> **4.2 Verstehen der Erfordernisse und Erwartungen interessierter Parteien**
> Die Organisation muss bestimmen:
> - welche interessierten Parteien für das QM-System relevant sind
> - welche Anforderungen diese interessierten Parteien haben

### Praktischer Nutzen

**Ohne Kontext:**
- ❌ Stakeholder-Erwartungen sind unklar
- ❌ Wichtige Themen werden übersehen
- ❌ Prozesse haben keinen erkennbaren Kontext
- ❌ Audit-Fragen können nicht beantwortet werden

**Mit Kontext:**
- ✅ Stakeholder sind identifiziert und bewertet
- ✅ Alle relevanten Themen sind dokumentiert
- ✅ Prozesse sind mit Stakeholdern und Themen verknüpft
- ✅ Audit-Nachweis ist vorhanden

## Kernkomponenten

### 1. Interessierte Parteien (Stakeholder)

**Interessierte Parteien** sind Personen, Gruppen oder Organisationen, die:

- **Einfluss** auf dein Unternehmen haben
- **Interesse** an deinem Unternehmen zeigen
- Von deinem Unternehmen **beeinflusst werden**

**Eigenschaften:**

- **Name**: Bezeichnung der interessierten Partei (z.B. "Kunden", "Lieferanten", "Behörden")
- **Beschreibung**: Detaillierte Informationen über die Partei
- **Interesse am Unternehmen**: Bewertung von klein (1) bis gross (3)
- **Einfluss auf das Unternehmen**: Bewertung von klein (1) bis gross (3)
- **Bewertung (Rating)**: Automatisch berechnet (Interesse × Einfluss)
- **Farbcodierung**: Visuelles Prioritäts-System (grün, orange, rot)
- **Verantwortung**: Zugeordnete Funktionen
- **Verknüpfte Prozesse**: Welche Prozesse adressieren diese Stakeholder
- **SWOT-Analysen**: Strategische Einschätzungen im Kontext

**Beispiele:**

| Stakeholder | Interesse | Einfluss | Rating | Farbe |
|-------------|-----------|----------|--------|-------|
| Kunden | gross (3) | gross (3) | 9 | 🔴 Rot |
| Lieferanten | mittel (2) | mittel (2) | 4 | 🟢 Grün |
| Behörden | klein (1) | gross (3) | 3 | 🟢 Grün |
| Mitarbeitende | gross (3) | mittel (2) | 6 | 🟠 Orange |

**Bewertungslogik:**

<pre>
Rating = Interesse × Einfluss

Farbcodierung:
├─ Rating < 4:  🟢 Grün   (niedrige Priorität)
├─ Rating 4-7:  🟠 Orange (mittlere Priorität)
└─ Rating > 7:  🔴 Rot    (hohe Priorität)
</pre>

### 2. Themenarten (Issue Types)

**Themenarten** kategorisieren relevante Themen in logische Gruppen.

**Eigenschaften:**

- **Name**: Bezeichnung der Kategorie (z.B. "Interne Themen", "Externe Themen")
- **Beschreibung**: Erklärung der Kategorie
- **Reihenfolge**: Sortierung in der Darstellung

**Standard-Themenarten:**

- **Interne Themen**: Themen, die innerhalb des Unternehmens entstehen
- **Externe Themen**: Themen aus der Umwelt des Unternehmens

**Beispiele für interne Themen:**

- Unternehmenskultur
- Verfügbare Ressourcen
- Wissen und Kompetenzen
- Prozessreife
- Technologische Infrastruktur

**Beispiele für externe Themen:**

- Wirtschaftslage
- Regulatorische Anforderungen
- Technologische Entwicklungen
- Wettbewerbssituation
- Kundenbedürfnisse

### 3. Themen (Issues)

**Themen** sind konkrete interne oder externe Faktoren, die für dein Unternehmen relevant sind.

**Eigenschaften:**

- **Titel**: Kurze Bezeichnung des Themas
- **Beschreibung**: Detaillierte Erklärung
- **Typ**: Zuordnung zu einer oder mehreren Themenarten
- **Verantwortung**: Zugeordnete Funktionen
- **Verknüpfte Prozesse**: Welche Prozesse adressieren dieses Thema
- **SWOT-Analysen**: Strategische Einschätzungen zum Thema

**Beispiele:**

| Thema | Typ | Beschreibung |
|-------|-----|--------------|
| Fachkräftemangel | Extern | Schwierigkeiten bei Rekrutierung qualifizierter Mitarbeiter |
| Digitalisierung | Extern | Zunehmende Digitalisierung in der Branche |
| Prozessreife | Intern | Aktueller Reifegrad der Geschäftsprozesse |
| Remote Work | Intern | Zunehmende Home-Office Nutzung |

## Hierarchie und Beziehungen

### Datenmodell

<pre>
┌─────────────────────────────────────────────────────┐
│  Interessierte Parteien (InterestedParty)           │
│  ├─ Name, Beschreibung                              │
│  ├─ Interesse (1-3)                                 │
│  ├─ Einfluss (1-3)                                  │
│  ├─ Rating (berechnet)                              │
│  ├─ Farbcodierung (grün/orange/rot)                 │
│  ├─ Verantwortung (→ Funktionen)                    │
│  ├─ Verknüpfte Prozesse (← Prozesse)                │
│  └─ SWOT-Analysen (← Einschätzungen)                │
└─────────────────────────────────────────────────────┘
              │
              ├─ Many-to-Many
              ↓
┌─────────────────────────────────────────────────────┐
│  Funktionen (Organisation)                          │
│  Verantwortliche Rollen im Unternehmen              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  Themenarten (IssueType)                            │
│  ├─ Name (z.B. "Interne Themen")                    │
│  └─ Beschreibung                                    │
└─────────────────────────────────────────────────────┘
              │
              ├─ One-to-Many
              ↓
┌─────────────────────────────────────────────────────┐
│  Themen (Issue)                                     │
│  ├─ Titel, Beschreibung                             │
│  ├─ Typ (→ IssueType)                               │
│  ├─ Verantwortung (→ Funktionen)                    │
│  ├─ Verknüpfte Prozesse (← Prozesse)                │
│  └─ SWOT-Analysen (← Einschätzungen)                │
└─────────────────────────────────────────────────────┘
</pre>

### Integrationen

**Prozess-Integration:**

- Prozesse können interessierte Parteien referenzieren
- Prozesse können Themen referenzieren
- Bidirektionale Verlinkung ermöglicht Traceability

**SWOT-Integration:**

- SWOT-Einschätzungen können mit Stakeholdern verknüpft werden
- SWOT-Einschätzungen können mit Themen verknüpft werden
- Farbcodierung (grün/orange/rot) für Risikobewertung

**Organisations-Integration:**

- Funktionen können Verantwortung für Stakeholder übernehmen
- Funktionen können Verantwortung für Themen übernehmen

## Dashboard-Ansicht

Das **Kontext Dashboard** ist die zentrale Übersicht über:

### Interessierte Parteien Tabelle

Zeigt alle Stakeholder mit:

- Name und Beschreibung
- Interesse am Unternehmen (klein/mittel/gross)
- Einfluss auf das Unternehmen (klein/mittel/gross)
- Verantwortliche Funktionen
- Benötigte Prozesse
- Verknüpfte SWOT-Analysen (mit Farbcodierung)

### Themen nach Typ

Für jede Themenart (z.B. "Interne Themen", "Externe Themen"):

- Liste aller Themen dieser Kategorie
- Beschreibung
- Verantwortliche Funktionen
- Benötigte Prozesse
- Verknüpfte SWOT-Analysen

## Berechtigungen

Das Kontext Modul verwendet ein einfaches Berechtigungssystem mit View, Add, Change und Delete Rechten.

**Detaillierte Informationen:**

- Vollständige Berechtigungsdokumentation: [Kapitel 5: Berechtigungskonzept](05_berechtigungen)
- Empfohlene Benutzergruppen und Rollen
- Typische Berechtigungsszenarien
- Troubleshooting und Best Practices

**Schnellübersicht:**

- **View**: Dashboard und Objekte ansehen
- **Add**: Neue Stakeholder/Themen erstellen
- **Change**: Bestehende Einträge bearbeiten
- **Delete**: Objekte löschen + Historie-Zugriff

## Audit-Logging

Alle Änderungen werden automatisch protokolliert:

- **Wer** hat geändert (Benutzer)
- **Was** wurde geändert (Feld, alter/neuer Wert)
- **Wann** erfolgte die Änderung (Zeitstempel)

**Zugriff auf Historie:**

Die Änderungshistorie ist verfügbar über:

- Kontext → Historie (erfordert Delete-Berechtigung)
- Zeigt chronologische Änderungen an allen Objekten
- Hilfreich für Audits und Nachvollziehbarkeit

## Wichtige Konzepte

### Stakeholder-Priorisierung

Die Kombination aus **Interesse** und **Einfluss** ermöglicht eine systematische Priorisierung:

**Hohe Priorität (Rot):**

Stakeholder mit hohem Interesse UND hohem Einfluss (Rating > 7)

→ Erfordern intensive Kommunikation und Management

**Mittlere Priorität (Orange):**

Stakeholder mit mittlerem Interesse/Einfluss (Rating 4-7)

→ Regelmässige Information und Monitoring

**Niedrige Priorität (Grün):**

Stakeholder mit geringem Interesse/Einfluss (Rating < 4)

→ Gelegentliche Information ausreichend

### Themenmanagement

Strukturierte Erfassung von:

- **Chancen**: Externe Themen, die Potenziale bieten
- **Risiken**: Externe Themen, die Gefahren darstellen
- **Stärken**: Interne Themen, die Vorteile bringen
- **Schwächen**: Interne Themen, die verbessert werden müssen

### Prozess-Traceability

Verknüpfung von Stakeholdern und Themen mit Prozessen:

- Welche Prozesse adressieren welche Stakeholder?
- Welche Prozesse behandeln welche Themen?
- Wo sind Lücken in der Prozesslandschaft?

## Nächste Schritte

Jetzt, wo du die Konzepte kennst, lerne im nächsten Kapitel:

- [Hauptfunktionen]({{< ref "02-hauptfunktionen" >}}): Detaillierte Funktionsbeschreibungen
- [Arbeitsablauf]({{< ref "03-arbeitsablauf" >}}): Typische Workflows und Szenarien
- [Best Practices]({{< ref "04-best-practices" >}}): Bewährte Methoden und Tipps

---

**Tipp**: Beginne mit der Erfassung der wichtigsten Stakeholder und baue dann schrittweise die Themen auf. Die Verknüpfungen zu Prozessen und SWOT können später ergänzt werden.
