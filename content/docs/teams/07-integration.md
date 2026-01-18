---
title: "Integration mit anderen Modulen"
description: ""
weight: "7"
tags:
  - "integration"
  - "prozesse"
  - "issues"
  - "projekte"
  - "crm"
  - "timetracker"
---


# Integration mit anderen Modulen

In diesem Kapitel lernst du, wie das Spaces-Modul mit anderen ELIZA-Modulen integriert ist und wie du diese Verknüpfungen effektiv nutzt.

## Übersicht der Integrationen

Das Spaces-Modul ist tief in ELIZA integriert und bietet Verknüpfungen zu:

| Modul | Verknüpfung | Nutzen |
|-------|-------------|--------|
| **Prozesse (BPMN)** | Board ↔ Prozess | Workflow-Visualisierung |
| **Issues** | Board ↔ Issue | Meldungs-Tracking |
| **Projekte** | Board ↔ Projekt | Projekt-Aufgaben |
| **CRM** | Card ↔ Participation | Kundenspezifische Aufgaben |
| **Timetracker** | Card ↔ Worktime | Zeiterfassung |
| **SWOT** | Space ↔ Einschätzung | Strategische Analyse |
| **Checklisten** | Card ↔ Checklist | Unter-Aufgaben |
| **DMS** | Alle ↔ Files | Dokumentenverwaltung |

## Prozess-Integration (BPMN)

### Board mit Prozess verknüpfen

**Voraussetzung:** Prozess-Modul aktiviert (`PROZESSE_ENABLED = True`)

**Verknüpfung erstellen:**

1. Öffne Board-Einstellungen
2. Feld **"Prozess"**
3. Wähle Prozess aus Dropdown
4. Speichere

✅ **Fertig!** Prozess-Diagramm wird im Board angezeigt.

### Prozess-Visualisierung

**Anzeige:**

1. Öffne Board
2. Klicke auf Tab **"Prozess"**
3. Siehe BPMN-Diagramm

**Funktionen:**

- 🔍 **Zoom**: Rein/Raus zoomen
- 📊 **Vollbild**: Prozess in Vollbild anzeigen
- 🔗 **Navigation**: Klick auf Prozess-Schritt öffnet Details
- 📥 **Export**: Prozess als PNG/SVG exportieren

### Cards mit Prozess-Schritten verknüpfen

**Aktuell:** Keine direkte Verknüpfung von Cards zu Prozess-Schritten.

**Workaround:**

1. Nutze Card-Titel mit Prozess-Schritt-Referenz
2. Beispiel: "Schritt 2.3: Antrag prüfen"
3. Verlinke Prozess-Dokument in Card-Beschreibung

**Zukünftige Funktion:**

Geplant ist eine direkte Verknüpfung von Cards zu BPMN-Elementen.

### Use Cases

**Use Case 1: Prozess-Umsetzung tracken**

```text
Space: "ISO 9001 Implementierung"
Board: "Prozess-Umsetzung"
Prozess: "Hauptprozess QM"

Cards:
- "Schritt 1: Anforderungen definieren" (done)
- "Schritt 2: Prozess dokumentieren" (doing)
- "Schritt 3: Schulung durchführen" (new)
```

**Use Case 2: Prozess-Verbesserung**

```text
Space: "Verbesserungen"
Board: "Prozess-Optimierung Q1"
Prozess: "Einkaufsprozess"

Cards:
- "Prozessschritt 2.1 automatisieren"
- "Freigabe-Workflow vereinfachen"
```

## Issues-Integration

### Board mit Issue verknüpfen

**Voraussetzung:** Issues-Modul aktiviert (`ISSUES_ENABLED = True`)

**Verknüpfung erstellen:**

1. Öffne Board-Einstellungen
2. Feld **"Meldung"**
3. Wähle Issue
4. Speichere

### Issue-basiertes Kanban-Board

**Workflow:**

1. Issue wird erstellt (z.B. Kundenmeldung)
2. Board wird mit Issue verknüpft
3. Cards werden für Lösungs-Schritte erstellt
4. Cards werden abgearbeitet
5. Issue wird geschlossen wenn alle Cards done

**Beispiel:**

```text
Issue: "Fehler im Login-Bereich" (ID: #1234)
   ↓
Board: "Bugfix #1234" (verknüpft mit Issue)
   ↓
Cards:
- "Bug reproduzieren" (done)
- "Root Cause Analysis" (done)
- "Fix implementieren" (doing)
- "Tests schreiben" (new)
- "Deployment" (new)
```

### Cards als Sub-Issues

**Generic Relation:**

Cards haben eine `GenericRelation` zu Issues:

```python
issues = GenericRelation("issues.Issue")
```

**Verwendung:**

1. Öffne Card
2. Klicke auf **"Issue verknüpfen"**
3. Erstelle neues Issue oder verknüpfe bestehendes
4. Issue zeigt Link zur Card

**Anwendungsfall:**

Card für "Feature implementieren" → Issue "Bug im Feature entdeckt" → Neue Card "Bug beheben"

### Use Cases

**Use Case 1: Support-Tickets**

```text
Space: "IT-Support"
Board: "Aktuelle Tickets"

Issue → Board → Cards (Lösungsschritte)
```

**Use Case 2: Kundenmeldungen**

```text
Space: "Qualitätsmeldungen"
Board: "Reklamation #5678"
Issue: Kundenreklamation

Cards:
- "Reklamation prüfen"
- "Ursache analysieren"
- "Massnahmen definieren"
- "Umsetzung"
- "Kunde informieren"
```

## Projekt-Integration

### Board mit Projekt verknüpfen

**Voraussetzung:** Projekte-Modul aktiviert (`PROJECTS_ENABLED = True`)

**Verknüpfung erstellen:**

1. Öffne Board-Einstellungen
2. Feld **"Projekt"**
3. Wähle Projekt
4. Speichere

### Projekt-Boards

**Workflow:**

1. Projekt wird in Projekte-Modul erstellt
2. Space für Projekt erstellen
3. Boards für Projekt-Phasen
4. Boards mit Projekt verknüpfen

**Struktur:**

```text
Projekt: "Website Relaunch" (Projekte-Modul)
   ↓
Space: "Projekt Website Relaunch" (Spaces)
   ↓
Boards (alle mit Projekt verknüpft):
- "Phase 1: Konzeption"
- "Phase 2: Design"
- "Phase 3: Entwicklung"
- "Phase 4: Testing"
- "Phase 5: Launch"
```

### Projekt-Fortschritt tracken

**Board-Fortschritt:**

Jedes Board zeigt Fortschritt:

```text
Board "Phase 1: Konzeption"
Fortschritt: 15/20 Cards done = 75%
```

**Gesamt-Fortschritt:**

1. Öffne Projekt in Projekte-Modul
2. Siehe Fortschritt aller verknüpften Boards
3. Gesamt-Fortschritt = Durchschnitt aller Board-Fortschritte

### Projekt-Ressourcen

**Zeiterfassung:**

- Cards in Projekt-Boards erfassen Zeit
- Projekt-Modul summiert Zeit aller Cards
- Projekt-Budget vs. tatsächliche Zeit

**Team-Ressourcen:**

- Space-Team = Projekt-Team
- Board-Teams = Phase-Teams

### Use Cases

**Use Case 1: Projekt-Management**

```text
Projekt: "ERP-Einführung"
Space: "ERP-Projekt"

Boards:
- "Backlog" (alle Anforderungen)
- "Sprint 1" (aktuelle Iteration)
- "Sprint 2" (nächste Iteration)
- "Bugs" (Fehler)
- "Done" (Abgeschlossenes)
```

**Use Case 2: Produkt-Roadmap**

```text
Projekt: "Produkt X Roadmap 2025"
Space: "Produkt X"

Boards:
- "Q1 2025" (Features für Q1)
- "Q2 2025" (Features für Q2)
- "Q3 2025" (Features für Q3)
- "Q4 2025" (Features für Q4)
- "Backlog" (zukünftige Features)
```

## CRM-Integration

### Card mit CRM-Participation verknüpfen

**Voraussetzung:** CRM-Modul aktiviert (`CRM_ENABLED = True`)

**GenericRelation:**

Cards haben:

```python
participations = GenericRelation(Participation)
```

**Verwendung:**

1. Öffne Card
2. Klicke auf **"CRM-Participation hinzufügen"**
3. Wähle Kunde/Kontakt
4. Definiere Rolle (z.B. "Auftraggeber", "Stakeholder")
5. Speichere

### Kundenspezifische Boards

**Workflow:**

1. Erstelle Space pro Kunde
2. Boards für Kundenaufträge
3. Cards mit Participations verknüpfen

**Beispiel:**

```text
Space: "Kunde ABC GmbH"
Board: "Auftrag 2025-001"

Cards:
- "Anforderungen aufnehmen"
  Participation: Hans Müller (ABC GmbH) - Ansprechpartner
- "Offerte erstellen"
  Participation: Maria Schmidt (ABC GmbH) - Entscheider
- "Auftrag umsetzen"
  Participation: Peter Test (ABC GmbH) - Technischer Kontakt
```

### Sales-Pipeline in Kanban

**Struktur:**

```text
Space: "Sales Pipeline 2025"
Board: "Opportunities"

Listen:
- Lead (neu)
- Qualifiziert (selektiert)
- Offerte erstellt (doing)
- Verhandlung (wait)
- Gewonnen (done)
- Verloren (cancelled)

Cards:
- Opportunity mit Kunde verknüpft
- Participation zeigt Kontaktperson
- Wert im Card-Titel oder Custom Field
```

### Use Cases

**Use Case 1: Account Management**

```text
Space: "Key Accounts"

Boards pro Kunde:
- "Kunde XY - Betreuung 2025"
  Cards: Alle Aufgaben für diesen Kunden
  Participations: Ansprechpartner verknüpft
```

**Use Case 2: Lead Management**

```text
Space: "Sales"
Board: "Leads Q1 2025"

Cards = Opportunities
Participations = Kontakte bei Interessenten
Status = Pipeline-Phase
```

## Timetracker-Integration

### Zeiterfassung auf Cards

**Voraussetzung:** Timetracker-Modul aktiviert (`TIMETRACKER_ENABLED = True`)

**Funktionsweise:**

Cards haben `GenericForeignKey` zu Worktimes:

```python
# In Card Model
def get_worktimes(self):
    return Worktime.objects.filter(
        content_type=ContentType.objects.get(app_label="teams", model="card"),
        object_id=self.pk
    )
```

**Zeiterfassung:**

1. Öffne Card
2. Klicke auf **"Zeit erfassen"**
3. Gib Stunden ein (z.B. "3.5")
4. Optional: Beschreibung, Datum
5. Speichere

**Anzeige:**

Card zeigt Gesamtzeit:

```text
⏱️ 12.5 Stunden erfasst
```

### Zeitauswertung

**Pro Card:**

- Summe aller Zeiterfassungen
- Liste aller Einträge mit Datum und Beschreibung

**Pro Board:**

1. Board-Einstellungen → Zeitauswertung
2. Gesamt-Zeit aller Cards
3. Zeit pro Benutzer
4. Zeit pro Card

**Pro Space:**

1. Space-Übersicht → Zeitauswertung
2. Gesamt-Zeit aller Boards
3. Zeit pro Board
4. Zeit pro Benutzer

**Export:**

```text
Excel-Export:
- Card-Titel
- Benutzer
- Datum
- Stunden
- Beschreibung
- Board
- Space
```

### Projekt-Zeiterfassung

**Integration mit Projekten:**

1. Board mit Projekt verknüpft
2. Zeit auf Cards erfasst
3. Projekt-Modul summiert Zeit
4. Vergleich: Budget vs. Ist

**Rapportierung:**

```text
Projekt: "Website Relaunch"
Budget: 200 Stunden
Erfasst: 156.5 Stunden (78%)

Pro Benutzer:
- Max Muster: 45h (Frontend)
- Anna Beispiel: 38h (Backend)
- Peter Test: 28h (Testing)
```

### Use Cases

**Use Case 1: Projektkosten**

```text
Space: "Kundenprojekt XY"
Boards: Projekt-Phasen

Zeit erfassen:
- Auf jeder Card
- Am Ende des Tages
- Mit Beschreibung der Tätigkeit

Auswertung:
- Gesamt-Zeit pro Phase
- Kosten berechnen (Stundensatz × Zeit)
- Vergleich Budget vs. Ist
```

**Use Case 2: Interne Leistungsverrechnung**

```text
Space: "IT-Abteilung"
Board: "Support-Tickets Q1"

Zeit erfassen:
- Auf jeder Support-Card
- Automatische Verrechnung an Abteilungen
```

## SWOT-Integration

### Space mit SWOT-Einschätzungen

**GenericRelation:**

Spaces haben:

```python
einschaetzungen = GenericRelation(Einschaetzungen)
```

**Verwendung:**

1. Öffne Space
2. Klicke auf **"SWOT-Analyse"**
3. Erstelle SWOT-Einschätzungen:
   - Stärken (Strengths)
   - Schwächen (Weaknesses)
   - Chancen (Opportunities)
   - Risiken (Threats)

### SWOT-basierte Planung

**Workflow:**

1. SWOT-Analyse für Space durchführen
2. Aus SWOT-Einschätzungen Cards ableiten
3. Massnahmen in Boards umsetzen

**Beispiel:**

```text
Space: "Unternehmensplanung 2025"

SWOT-Analyse:
Stärke: Qualifizierte Mitarbeiter
Schwäche: Alte IT-Infrastruktur
Chance: Neuer Markt in DACH-Region
Risiko: Konkurrenz mit neuen Produkten

Abgeleitete Cards:
- "IT-Infrastruktur modernisieren" (Schwäche adressieren)
- "Marktanalyse DACH durchführen" (Chance nutzen)
- "Wettbewerbsanalyse" (Risiko monitoren)
```

### Use Cases

**Use Case 1: Strategische Planung**

```text
Space: "Strategie 2025"
SWOT-Analyse durchführen

Board: "Strategische Initiativen"
Cards basierend auf SWOT
```

**Use Case 2: Projekt-Risikomanagement**

```text
Space: "Projekt XY"
SWOT-Einschätzungen: Risiken dokumentieren

Board: "Risiko-Massnahmen"
Cards für Risiko-Mitigation
```

## Checklisten-Integration

### Cards mit Checklisten

**GenericRelation:**

Cards haben:

```python
checklists = GenericRelation(Checklist)
```

**Verwendung:**

1. Öffne Card
2. Klicke auf **"Checkliste hinzufügen"**
3. Erstelle Checklist mit Items
4. Abhaken während Bearbeitung

**Fortschritts-Tracking:**

Checklisten-Fortschritt wird auf Card angezeigt:

```text
✅ Akzeptanzkriterien: 3/5 (60%)
```

### Checklisten für Meeting-Vorbereitung

**Aktuell:** Keine direkte Checklisten-Integration bei Meetings.

**Workaround:**

1. Erstelle Card "Meeting-Vorbereitung"
2. Füge Checkliste hinzu mit Vorbereitungs-Tasks
3. Verknüpfe Card mit Meeting

### Use Cases

**Use Case 1: Definition of Done**

```text
Card: "Feature X implementieren"

Checkliste "Definition of Done":
☐ Code geschrieben
☐ Unit Tests geschrieben
☐ Integration Tests geschrieben
☐ Code Review durchgeführt
☐ Dokumentation aktualisiert
☐ Deployed auf Staging
☐ QA getestet
☐ Deployed auf Production
```

**Use Case 2: Onboarding-Checkliste**

```text
Space: "HR"
Board: "Onboarding"
Card: "Neuer Mitarbeiter: Max Muster"

Checkliste "Onboarding":
☐ Arbeitsvertrag unterzeichnet
☐ IT-Equipment bestellt
☐ E-Mail-Adresse erstellt
☐ ELIZA-Zugang eingerichtet
☐ Einführung durchgeführt
☐ Buddy zugewiesen
```

## Suchintegration

### Volltextsuche

**ELIZA-Suche findet:**

- Space-Titel und Beschreibungen
- Board-Titel und Beschreibungen
- Card-Titel und Beschreibungen
- Meeting-Titel und Beschreibungen
- Traktanden-Titel, Text und Ergebnis
- Beschluss-Texte
- Kommentar-Texte
- Datei-Inhalte (PDF, DOCX mit Text-Extraktion)

**Verwendung:**

1. Klicke auf Suche (🔍) oben rechts
2. Gib Suchbegriff ein
3. Siehe Ergebnisse aus Spaces-Modul
4. Klicke auf Ergebnis um zu öffnen

### Elasticsearch-Integration

**Falls Elasticsearch aktiviert:**

- Schnellere Suche
- Erweiterte Filter
- Fuzzy Search
- Relevanz-Ranking

**Falls deaktiviert:**

- PostgreSQL Full-Text Search
- Grundlegende Suchfunktionen

## Best Practices für Integrationen

### ✅ Prozess-Integration

**Empfehlungen:**

1. Ein Board pro Prozess
2. Prozess-Diagramm regelmässig aktualisieren
3. Card-Titel mit Prozess-Schritt-Referenz
4. Prozess-Verbesserungen in separatem Board

### ✅ Issue-Integration

**Empfehlungen:**

1. Ein Board pro komplexes Issue
2. Einfache Issues als Cards in Support-Board
3. Issue-ID in Board-Titel für Traceability
4. Automatische Issue-Updates bei Card-Abschluss (geplant)

### ✅ Projekt-Integration

**Empfehlungen:**

1. Ein Space pro Projekt
2. Boards für Projekt-Phasen oder Sprints
3. Alle Boards mit Projekt verknüpfen
4. Zeit konsequent erfassen
5. Regelmässige Fortschritts-Reviews

### ✅ CRM-Integration

**Empfehlungen:**

1. Participations für alle kundenbezogenen Cards
2. Sales-Pipeline in Kanban visualisieren
3. Space pro Key Account
4. Regelmässige Account-Reviews in Meetings

### ✅ Timetracker-Integration

**Empfehlungen:**

1. Zeit täglich erfassen
2. Beschreibungen hinzufügen für Nachvollziehbarkeit
3. Wöchentliche Auswertungen
4. Vergleich Budget vs. Ist bei Projekten

## Häufige Fehler

### ❌ Vergessene Verknüpfungen

**Problem:** Boards ohne Projekt-Verknüpfung bei Projekten

**Lösung:** Bei Board-Erstellung direkt verknüpfen

### ❌ Fehlende Zeit-Erfassung

**Problem:** Keine Übersicht über Projektkosten

**Lösung:** Zeit-Erfassung zur Routine machen

### ❌ Doppelte Verwaltung

**Problem:** Infos sowohl in Issues als auch Cards

**Lösung:** Klare Trennung: Issue = Kundensicht, Card = Umsetzung

### ❌ Zu viele Integrationen

**Problem:** Alles mit allem verknüpft, Unübersichtlichkeit

**Lösung:** Nur sinnvolle Verknüpfungen, nicht jedes Feature nutzen müssen

## Zusammenfassung

### Integrations-Matrix

| Modul | Nutzen | Empfehlung |
|-------|--------|------------|
| **Prozesse** | Workflow-Visualisierung | Für Prozess-Umsetzung |
| **Issues** | Meldungs-Tracking | Für Support und Kundenthemen |
| **Projekte** | Projekt-Management | Immer bei Projekten |
| **CRM** | Kundenbezug | Für Sales und Account Mgmt |
| **Timetracker** | Zeiterfassung | Bei allen Projekten |
| **SWOT** | Strategische Planung | Für Strategie-Spaces |
| **Checklisten** | Definition of Done | Bei jeder Card |

### Wichtige Punkte

- 🔗 **Verknüpfungen**: Nutze Integrationen für Kontext
- ⏱️ **Zeiterfassung**: Immer auf Cards erfassen
- 📊 **Fortschritt**: Boards zeigen Projekt-Fortschritt
- 👥 **CRM**: Kundenbezug durch Participations
- 📝 **Checklisten**: Definition of Done für Qualität

## Nächste Schritte

Du hast jetzt alle Kapitel des Spaces User Manual durchgearbeitet!

**Zusammenfassung:**

1. [Einführung]({{< ref "01-einfuehrung" >}}): Grundkonzepte verstanden
2. [Spaces verwalten]({{< ref "02-spaces-verwalten" >}}): Kollaborationsräume erstellen
3. [Kanban Boards]({{< ref "03-kanban-boards" >}}): Aufgaben managen
4. [Sitzungen]({{< ref "04-sitzungen" >}}): Meetings dokumentieren
5. [Berechtigungskonzept]({{< ref "05-berechtigungskonzept" >}}): Zugriffe steuern
6. [Zusammenarbeit]({{< ref "06-zusammenarbeit" >}}): Kollaborieren im Team
7. [Integration]({{< ref "07-integration" >}}): Module verknüpfen

**Empfohlene Praxis:**

- Erstelle deinen ersten Space
- Probiere alle Features aus
- Integriere mit deinen Modulen
- Teile Best Practices mit dem Team

---

**Bei Fragen kontaktiere deinen ELIZA-Administrator oder konsultiere die ELIZA-Dokumentation!**
