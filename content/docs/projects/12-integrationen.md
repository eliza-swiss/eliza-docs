---
title: "Integrationen"
description: ""
weight: "12"
tags:
  - "integrationen"
  - "swot"
  - "teams"
  - "crm"
  - "dms"
  - "timetracker"
---


# Integrationen

ELIZA Projekte können nahtlos mit allen anderen Modulen integriert werden. Diese Vernetzung ermöglicht ein ganzheitliches Projektmanagement, bei dem alle relevanten Informationen, Dokumente und Aktivitäten zentral zusammenlaufen.

## 🔗 Übersicht der verfügbaren Integrationen

Die Projekte-Modul integriert sich mit folgenden ELIZA-Modulen:

| Modul | Integration | Hauptnutzen |
|-------|------------|-------------|
| **SWOT** | Strategische Analysen | Risiken & Chancen identifizieren, Massnahmen verfolgen |
| **Teams/Boards** | Kanban-Cards | Agile Workflows, Sprint-Planung, Task-Tracking |
| **CRM** | Participations | Kunden/Partner verknüpfen, Kontaktpersonen zuordnen |
| **DMS** | Dokumentenlinks | Prozessdokumente, Verträge, Spezifikationen verwalten |
| **Timetracker** | Zeiterfassung | Budget-Tracking, Aufwandskontrolle, Ressourcenplanung |
| **Bexio** | Buchhaltungs-Sync | Projekt-IDs synchronisieren, Rechnungsstellung |
| **Organisation** | Mitarbeitende/Orgunits | Zuständigkeiten, Kompetenzen, Abteilungen zuordnen |
| **Issues** | Aufgaben/Tickets | Bug-Tracking, Feature-Requests, Support-Tickets |
| **Prozesse** | BPMN-Workflows | Prozessdefinitionen verlinken, Workflows dokumentieren |
| **Standards** | Normen-Compliance | ISO-Anforderungen, Qualitätsstandards erfüllen |

## 🎯 SWOT-Integration

Die SWOT-Integration ermöglicht strategisches Projektmanagement durch die Verknüpfung von Stärken, Schwächen, Chancen und Risiken mit konkreten Projekten.

### SWOT-Einschätzungen mit Projekten verknüpfen

**Im Projekt → Tab "SWOT":**

1. **Vorhandene Einschätzungen anzeigen:**
   - Alle projektbezogenen SWOT-Analysen werden aufgelistet
   - Filter nach Kategorie (Stärken/Schwächen/Chancen/Risiken)
   - Status und Bewertung auf einen Blick

2. **Neue Einschätzung erstellen:**
   - Button "Neue SWOT-Einschätzung"
   - Kategorie auswählen
   - Beschreibung und Bewertung erfassen
   - Automatische Verknüpfung mit Projekt

3. **Einschätzungen bearbeiten:**
   - Bewertung aktualisieren
   - Status ändern (aktiv/archiviert)
   - Priorität anpassen

**Anwendungsfälle:**

- **Risiko-Projekte:** Identifiziere potenzielle Risiken bereits in der Planungsphase
- **Strategische Initiativen:** Nutze Stärken und Chancen gezielt
- **Kontinuierliche Verbesserung:** Schwächen durch Projektmassnahmen adressieren

### SWOT-Massnahmen zuordnen

**Im Projekt → Tab "Massnahmen":**

1. **Massnahmen anzeigen:**
   - Liste aller SWOT-Massnahmen für dieses Projekt
   - Status-Übersicht (offen/in Bearbeitung/abgeschlossen)
   - Verantwortlichkeiten sichtbar

2. **Neue Massnahme erstellen:**
   - Button "Neue Massnahme"
   - SWOT-Einschätzung auswählen
   - Massnahmen-Details erfassen
   - Verantwortliche Person zuweisen
   - Frist setzen

3. **Massnahmen mit Projektphasen verknüpfen:**
   - Massnahme einer Phase zuordnen
   - Meilenstein-Integration
   - Fortschrittsverfolgung

**Workflow-Beispiel:**

```text
1. SWOT-Analyse erstellen → Risiko "Fehlende Expertise" identifizieren
2. Massnahme definieren → "Schulung Django-Framework buchen"
3. Projektphase zuordnen → Phase 1: Planung
4. Verantwortliche Person → Team-Lead
5. Frist setzen → Ende Phase 1
6. Fortschritt tracken → Schulung gebucht → Status "In Bearbeitung"
7. Abschliessen → Schulung absolviert → Status "Abgeschlossen"
```

### SWOT-Bewertungs-Matrix

| Kategorie | Bewertung | Bedeutung | Handlung im Projekt |
|-----------|-----------|-----------|---------------------|
| **Stärke** | Hoch | Kernkompetenz vorhanden | Aktiv nutzen, ausbauen |
| **Stärke** | Mittel | Kompetenz vorhanden | Gezielt einsetzen |
| **Schwäche** | Hoch | Kritischer Mangel | Sofort adressieren, Massnahmen priorisieren |
| **Schwäche** | Mittel | Verbesserungsbedarf | Mittelfristig beheben |
| **Chance** | Hoch | Grosse Möglichkeit | Proaktiv nutzen, Ressourcen investieren |
| **Chance** | Mittel | Potenzial vorhanden | Prüfen und bewerten |
| **Risiko** | Hoch | Kritische Gefahr | Sofort mitigieren, Notfallplan |
| **Risiko** | Mittel | Beobachtungsbedarf | Monitoring, präventive Massnahmen |

## 🎴 Teams/Boards Integration

Die Teams-Integration ermöglicht agiles Projektmanagement mit Kanban-Boards und bidirektionaler Verknüpfung zwischen Projekten und Cards.

### Projekt als Card auf Board hinzufügen

**Im Projekt → Button "Zu Board hinzufügen":**

1. **Board auswählen:**
   - Dropdown zeigt verfügbare Boards
   - Filter nach Team/Abteilung
   - Berechtigung wird geprüft

2. **Card wird erstellt:**
   - Projekt-Titel wird zu Card-Titel
   - Projekt-Beschreibung wird zu Card-Beschreibung
   - Status-Mapping (je nach Board-Konfiguration)

3. **Card auf Board:**
   - Erscheint in der Spalte gemäss Status
   - Bidirektionale Verlinkung
   - Synchronisation von Änderungen

**Verwendung in agilen Workflows:**

- **Sprint-Planung:** Projekt-Cards in "To Do"-Spalte
- **Work in Progress:** Cards in "In Progress"-Spalte
- **Review:** Cards in "Review"-Spalte
- **Done:** Abgeschlossene Projekt-Cards

### Cards im Projekt verwalten

**Im Projekt → Tab "Cards" (falls vorhanden):**

1. **Verknüpfte Cards anzeigen:**
   - Alle Cards auf verschiedenen Boards
   - Status pro Board sichtbar
   - Direkt-Links zu Cards

2. **Generic Relation:**
   - Projekt kann in mehreren Boards vorkommen
   - Jede Card behält eigenen Status
   - Änderungen auf Board spiegeln sich im Projekt

**Board-Konfigurationen für Projekte:**

| Board-Typ | Spalten | Verwendung |
|-----------|---------|------------|
| **Sprint-Board** | Backlog → To Do → In Progress → Review → Done | Agile Entwicklung |
| **Portfolio-Board** | Idee → Geplant → Aktiv → Abgeschlossen | Projekt-Portfolio |
| **Release-Board** | Features → Development → Testing → Production | Release-Management |
| **Kapazitäts-Board** | Warteschlange → Ressourciert → In Arbeit → Fertig | Kapazitätsplanung |

### Agile Projekt-Workflows mit Boards

**Scrum-Sprint-Workflow:**

```text
1. Sprint-Planung:
   - Projekt-Epics auf Board
   - Stories als Sub-Cards
   - Tasks zu Stories hinzufügen

2. Sprint-Durchführung:
   - Daily Stand-up am Board
   - Cards von "To Do" → "Done" verschieben
   - Burndown-Chart verfolgen

3. Sprint-Review:
   - Done-Spalte reviewen
   - Feedback erfassen
   - Retrospektive-Notes auf Board

4. Nächster Sprint:
   - Backlog neu priorisieren
   - Cards für nächsten Sprint auswählen
```

**Kanban-Continuous-Flow:**

```text
1. Projekt-Cards in Backlog
2. WIP-Limits pro Spalte definieren
3. Pull-Prinzip: Cards ziehen wenn Kapazität
4. Cycle-Time messen
5. Bottlenecks identifizieren
6. Kontinuierliche Optimierung
```

## 🤝 CRM-Integration

Die CRM-Integration verbindet Projekte mit Kunden, Partnern und Lieferanten aus dem ELIZA CRM-Modul.

### Participations (Beteiligungen) verwalten

**Im Projekt → Tab "Beteiligungen":**

1. **Organisation hinzufügen:**
   - Button "Neue Beteiligung"
   - Organisation aus CRM auswählen
   - Rolle zuweisen (Kunde/Partner/Lieferant/Sponsor)
   - Kontaktpersonen verknüpfen

2. **Rollen-Typen:**

| Rolle | Bedeutung | Berechtigungen | Typische Nutzung |
|-------|-----------|----------------|------------------|
| **Kunde** | Auftraggeber | Projekt-Sichtbarkeit, Berichte erhalten | Kundenprojekte, Aufträge |
| **Partner** | Kooperationspartner | Teilweise Sichtbarkeit, Zusammenarbeit | Joint Ventures, Co-Development |
| **Lieferant** | Zulieferer | Eingeschränkte Sichtbarkeit | Beschaffungsprojekte, Outsourcing |
| **Sponsor** | Förderer/Geldgeber | Reporting-Zugriff | Förderprojekte, Investitionen |
| **Stakeholder** | Interessensgruppe | Nur Information | Informationspflicht, Transparency |

3. **Kontaktpersonen zuordnen:**
   - Primärer Ansprechpartner festlegen
   - Weitere Kontakte hinzufügen
   - Kommunikationskanäle dokumentieren
   - E-Mail/Telefon direkt erreichbar

### CRM-Daten im Projekt nutzen

**Verfügbare Informationen:**

- **Organisations-Details:**
  - Firmenname, Logo
  - Adresse, Kontaktdaten
  - Branche, Grösse
  - Notizen und Tags

- **Kontaktpersonen:**
  - Name, Funktion
  - E-Mail, Telefon
  - Zuständigkeiten
  - Kommunikationshistorie

- **Vertragskontext:**
  - Aktive Verträge
  - Rahmenvereinbarungen
  - SLAs und KPIs
  - Rechnungsinformationen

**Workflow: Kundenprojekt anlegen**

```text
1. Projekt erstellen → Titel "Website-Relaunch XY AG"
2. Tab "Beteiligungen" → "Neue Beteiligung"
3. Organisation "XY AG" aus CRM wählen
4. Rolle "Kunde" zuweisen
5. Primärer Kontakt "Max Muster (Marketing-Leiter)" wählen
6. Weitere Kontakte hinzufügen (Projektleiter, Fachverantwortliche)
7. Speichern → CRM-Link ist hergestellt
8. Alle Projektberichte können nun direkt an Kunden-Kontakte versendet werden
```

### Multi-Organisation Projekte

**Beispiel: ERP-Implementierung mit mehreren Beteiligten:**

| Organisation | Rolle | Kontaktperson | Zuständigkeit |
|--------------|-------|---------------|---------------|
| **Acme Corp** | Kunde | Anna Müller (CIO) | Auftraggeber, Entscheidungen |
| **TechPartner GmbH** | Partner | Beat Schmid (Senior Consultant) | Implementierung, Customizing |
| **ServerCloud AG** | Lieferant | Claudia Weber (Account Manager) | Hosting, Infrastructure |
| **DataMigration Ltd** | Lieferant | David Chen (Data Architect) | Datenmigration |
| **Training Plus** | Partner | Eva Rodriguez (Trainerin) | User-Schulungen |

**Vorteile:**
- Alle Stakeholder an einem Ort dokumentiert
- Klare Rollen und Verantwortlichkeiten
- Direkte Kommunikationskanäle
- Übersicht über alle Beteiligten

## 📄 DMS-Integration

Die DMS-Integration (Document Management System) ermöglicht die Verknüpfung von Projekten mit zentral verwalteten Dokumenten.

### Unterschied: DMS-Dokumente vs. Projekt-Dateien

| Aspekt | DMS-Dokumente | Projekt-Dateien |
|--------|---------------|-----------------|
| **Speicherort** | Zentrales DMS | Projekt-Ordner |
| **Versionierung** | Vollständige Versionskontrolle | Einfache Versionierung |
| **Workflow** | Freigabe-Workflows, Approval | Direkt verfügbar |
| **Zugriffsrechte** | DMS-Berechtigungen | Projekt-Berechtigungen |
| **Verwendung** | Offizielle Dokumente, Verträge, Specs | Arbeitsdokumente, Entwürfe |
| **Archivierung** | Langzeit-Archivierung | Projekt-Lebensdauer |
| **Suche** | Volltext-Suche über alle Dokumente | Projekt-spezifisch |

### DMS-Dokumente mit Projekten verknüpfen

**Methode 1: Referenz im DMS-Dokument**

1. Im DMS: Dokument öffnen
2. Feld "Verknüpftes Projekt" ausfüllen
3. Projekt aus Dropdown wählen
4. Speichern

**Methode 2: Generic Relation (falls konfiguriert)**

1. Im DMS: Dokument mit "Content Type: Project" taggen
2. Object-ID des Projekts angeben
3. Automatische Verknüpfung

**Methode 3: Verweise in Beschreibung**

1. Im Projekt: Beschreibungs-Feld
2. DMS-Dokument-Link einfügen
3. Format: `[Dokumentname](dms_link)`

### Best Practices für Dokument-Management

**✅ Im DMS speichern:**

- Projektcharter und Business Case
- Verträge mit Kunden/Lieferanten
- Anforderungs-Spezifikationen (finalisiert)
- Architektur-Dokumente (freigegeben)
- Test-Protokolle (abgeschlossen)
- Abnahme-Dokumente
- Projekt-Handbücher

**✅ Als Projekt-Dateien speichern:**

- Meeting-Notizen (laufend)
- Arbeitsdokumente (Entwürfe)
- Sketches und Mockups (Work in Progress)
- Code-Snippets
- Temporäre Berechnungen
- Team-interne Dokumente

**🔗 Verweise nutzen:**

- In Projekt-Beschreibung: Links zu wichtigen DMS-Dokumenten
- In Meilensteinen: Links zu Abnahme-Dokumenten
- In Phasen: Links zu Phase-spezifischen Dokumenten

### Workflow: Dokument-Lifecycle im Projekt

```text
1. Anforderungs-Workshop:
   → Notizen als Projekt-Datei hochladen

2. Anforderungs-Dokument erstellen:
   → Entwurf als Projekt-Datei
   → Mehrere Iterationen

3. Anforderungen finalisieren:
   → Export als PDF
   → Upload ins DMS
   → DMS-Workflow "Zur Freigabe"
   → Approval durch Stakeholder

4. Freigabe erhalten:
   → DMS-Dokument Status "Freigegeben"
   → Projekt-Beschreibung: Link zu freigegebenem Dokument
   → Projekt-Datei (Entwurf) kann archiviert werden

5. Änderungen später:
   → Neue Version im DMS erstellen
   → DMS-Versionierung nutzen
   → Projekt-Link zeigt immer auf neueste Version
```

## ⏱️ Timetracker-Integration

Die Timetracker-Integration ist eine der wichtigsten Integrationen für die Projektkontrolle und ermöglicht präzises Budget-Management.

### Zeiterfassung auf Projekte

**Setup: Kostenstellen erstellen**

1. Im Projekt → Tab "Kostenstellen"
2. Button "Neue Kostenstelle"
3. Details erfassen:
   - Name (z.B. "Entwicklung", "Testing", "Konzeption")
   - Budgetierte Stunden
   - Stundensatz (optional)
   - Gültigkeit (von/bis)
4. Speichern

**Mitarbeitende: Zeit erfassen**

1. Im Timetracker → "Zeit erfassen"
2. Projekt aus Dropdown wählen
3. Kostenstelle auswählen
4. Datum und Stunden eingeben
5. Tätigkeits-Beschreibung
6. Speichern

**Automatische Zuordnung:**

- Erfasste Stunden werden automatisch dem Projekt-Budget zugerechnet
- Restbudget wird berechnet
- Ampel-Status wird aktualisiert (🟢🟡🔴)

### Budget-Tracking und Kontrolle

**Im Projekt → Tab "Kostenstellen":**

**Übersicht:**

| Kostenstelle | Budgetiert | Erfasst | Rest | Auslastung | Status |
|--------------|------------|---------|------|------------|--------|
| Konzeption | 40h | 42h | -2h | 105% | 🔴 Überschritten |
| Entwicklung | 160h | 128h | 32h | 80% | 🟢 OK |
| Testing | 40h | 38h | 2h | 95% | 🟡 Knapp |
| Projektleitung | 30h | 22h | 8h | 73% | 🟢 OK |
| **Total** | **270h** | **230h** | **40h** | **85%** | **🟢 OK** |

**Ampel-Logik:**

- 🟢 **Grün:** < 90% Auslastung → Budget OK
- 🟡 **Orange:** 90-100% Auslastung → Budget knapp, Monitoring nötig
- 🔴 **Rot:** > 100% Auslastung → Budget überschritten, Eskalation

**Automatische Benachrichtigungen:**

- Bei 80% Auslastung → Info an Projektleitung
- Bei 90% Auslastung → Warnung an Projektleitung und Federführung
- Bei 100% Auslastung → Eskalation an Projektleitung, Federführung und Management

### Erweiterte Timetracker-Features

**1. Stundensatz-Kalkulation:**

```text
Kostenstelle: Entwicklung
Budget: 160h
Stundensatz: CHF 120.-
Total-Budget: CHF 19'200.-

Erfasst: 128h
Kosten: CHF 15'360.-
Rest-Budget: CHF 3'840.- (32h)
```

**2. Mitarbeiter-Aufschlüsselung:**

| Mitarbeiter | Erfasste Stunden | Anteil | Kosten |
|-------------|------------------|--------|--------|
| Anna Müller (Senior Dev) | 64h | 50% | CHF 9'600.- |
| Beat Schmid (Junior Dev) | 48h | 37.5% | CHF 4'320.- |
| Claudia Weber (DevOps) | 16h | 12.5% | CHF 1'440.- |
| **Total** | **128h** | **100%** | **CHF 15'360.-** |

**3. Phasen-Zuordnung:**

- Kostenstellen können Projektphasen zugeordnet werden
- Auswertung: "Wie viele Stunden pro Phase?"
- Analyse: "Welche Phase war teurer als geplant?"

**4. Tätigkeits-Kategorien:**

- Erfasste Zeit kann kategorisiert werden
- Beispiele: Meetings, Development, Testing, Dokumentation, Support
- Auswertung: "Wie viel Zeit für Meetings?"

### Workflow: Budget-Management mit Timetracker

```text
Projekt-Start:
1. Kostenstellen basierend auf Projektplan erstellen
2. Budget pro Kostenstelle festlegen
3. Team über Kostenstellen informieren
4. Zeiterfassungs-Richtlinien kommunizieren

Laufendes Projekt:
5. Wöchentlich: Budget-Status prüfen
6. Bei 80%: Trend analysieren
7. Bei 90%: Mit Team besprechen
8. Bei 95%: Massnahmen definieren
   → Scope reduzieren?
   → Budget erhöhen?
   → Ressourcen optimieren?

Projekt-Abschluss:
9. Finale Zeiterfassung sicherstellen
10. Soll/Ist-Vergleich erstellen
11. Lessons Learned dokumentieren
12. Erkenntnisse für zukünftige Projekte nutzen
```

## 🔌 Bexio-Integration

Die Bexio-Integration synchronisiert Projekte mit der Schweizer Buchhaltungs-Software Bexio.

### Bexio-Projekt verknüpfen

**Voraussetzungen:**

- Bexio-Integration muss in ELIZA aktiviert sein
- API-Token konfiguriert
- Berechtigung für Bexio-Zugriff

**Verknüpfung einrichten:**

1. In Bexio: Projekt erstellen (oder existierendes wählen)
2. Bexio-Projekt-ID notieren
3. In ELIZA: Projekt öffnen
4. Feld "Bexio ID" ausfüllen
5. Speichern

**Automatische Synchronisation:**

- Projekt-Name wird synchronisiert
- Status-Updates
- Kostenstellen-Verknüpfung
- Zeiterfassung wird übertragen

### Kostenstellen-Sync mit Bexio

**Workflow:**

```text
1. ELIZA: Kostenstelle "Entwicklung" erstellen
2. Bexio: Kostenstelle wird automatisch angelegt (oder verknüpft)
3. Timetracker: Zeit auf Kostenstelle erfassen
4. Bexio: Zeiteinträge werden synchronisiert
5. Bexio: Rechnungsstellung basierend auf erfassten Stunden
```

**Vorteile:**

- Keine doppelte Erfassung
- Konsistente Daten
- Direkte Rechnungsstellung
- Buchhaltungs-Compliance

### Rechnungsstellung über Bexio

**Use Case: Kundenprojekt mit Abrechnung**

```text
1. Projekt in ELIZA mit CRM-Kunde verknüpfen
2. Bexio-Integration aktivieren
3. Kostenstellen mit Stundensätzen erfassen
4. Team erfasst Zeit auf Projekt
5. Monatliches Reporting:
   → ELIZA: Stundenübersicht exportieren
   → Bexio: Rechnung erstellen
   → Rechnungspositionen basierend auf Zeiteinträgen
   → Rechnung an Kunde senden
6. ELIZA: Rechnung als Projekt-Datei hochladen
7. Status-Update im Projekt
```

**Rechnungs-Details aus ELIZA:**

- Projekt-Titel → Rechnungs-Beschreibung
- Kostenstellen → Rechnungs-Positionen
- Erfasste Stunden → Menge
- Stundensatz → Preis pro Einheit
- Total → Rechnungs-Summe

## 🏢 Organisation-Integration

Die Organisation-Integration verknüpft Projekte mit Mitarbeitenden, Funktionen und Organisationseinheiten.

### Mitarbeitende in Projekten

**Federführung:**

- Federführung wird aus Organisation-Modul gewählt
- Dropdown zeigt alle aktiven Mitarbeitenden
- Automatische Berechtigungen:
  - Projekt-Sichtbarkeit (auch bei vertraulicher Klassifikation)
  - Änderungsrechte
  - Team-Management

**Mitwirkungen (Project Assignments):**

- ProjectAssignment verknüpft Mitarbeitende mit Projekt
- Zusätzliche Infos:
  - Funktion (z.B. "Entwickler", "Tester", "Analyst")
  - Rolle (aus Organisation-Modul)
  - Soll-Aufwand
  - Zeitraum (von/bis)

**Verfügbare Mitarbeiter-Infos im Projekt:**

- Name, Foto
- E-Mail, Telefon
- Abteilung, Standort
- Skills und Kompetenzen
- Auslastung (wenn Timetracker aktiv)
- Abwesenheiten (Ferien, Krankheit)

### Organisationseinheiten (Orgunits)

**Federführende Orgunit:**

- Dropdown zeigt Orgunit-Hierarchie
- Auswahl der zuständigen Abteilung
- Beispiele:
  - "IT-Abteilung"
  - "Marketing"
  - "Produktion"
  - "Qualitätsmanagement"

**Beteiligte Orgunits:**

- Mehrfachauswahl möglich
- Beispiele:
  - Hauptverantwortung: IT
  - Beteiligte: Marketing, Vertrieb, Support

**Berechtigungen via Orgunits:**

```text
Szenario: Projekt "ERP-Einführung"
- Federführende Orgunit: IT-Abteilung
- Beteiligte Orgunits: Finanzen, HR, Einkauf

Berechtigungen:
- IT-Mitarbeitende: Vollzugriff (weil federführend)
- Finanzen-Mitarbeitende: Lese-Zugriff (weil beteiligt)
- HR-Mitarbeitende: Lese-Zugriff (weil beteiligt)
- Einkauf-Mitarbeitende: Lese-Zugriff (weil beteiligt)
- Alle anderen: Kein Zugriff (ausser projects_admin)
```

### Skills und Kompetenzen nutzen

**Skill-basierte Team-Zusammenstellung:**

1. Projekt-Anforderungen definieren:
   - Benötigte Skills: Python, Django, PostgreSQL, Frontend (React)
   - Benötigte Rollen: Senior Developer, UX Designer, Tester

2. In Organisation-Modul suchen:
   - Filter: Skills "Python" + "Django"
   - Verfügbarkeit prüfen
   - Auslastung berücksichtigen

3. Mitarbeitende dem Projekt zuweisen:
   - Als Project Assignments hinzufügen
   - Funktion und Rolle festlegen
   - Soll-Aufwand definieren

**Beispiel: Skill-Match Matrix**

| Mitarbeiter | Python | Django | PostgreSQL | React | Verfügbarkeit | Für Projekt |
|-------------|--------|--------|------------|-------|---------------|-------------|
| Anna Müller | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐ | 80% | ✅ Senior Dev |
| Beat Schmid | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐ | 100% | ✅ Database Lead |
| Claudia Weber | ⭐ | ⭐ | ⭐ | ⭐⭐⭐ | 60% | ✅ Frontend Dev |
| David Chen | ⭐⭐⭐ | ⭐ | ⭐ | ⭐⭐ | 40% | ❌ Nicht verfügbar |

## 🐛 Issues-Integration

Die Issues-Integration verknüpft Projekte mit Aufgaben, Bugs und Feature-Requests.

### Issues mit Projekten verknüpfen

**Im Issue → Feld "Projekt":**

- Projekt aus Dropdown wählen
- Issue erscheint automatisch in Projekt
- Bidirektionale Verlinkung

**Im Projekt → Tab "Issues" (falls konfiguriert):**

- Alle verknüpften Issues anzeigen
- Filter nach Typ (Bug/Feature/Task)
- Status-Übersicht
- Prioritäten sichtbar

**Use Cases:**

- **Bug-Tracking:** Fehler in Projekt-Deliverables
- **Feature-Requests:** Neue Anforderungen während Projekt
- **Tasks:** Kleinere Aufgaben ohne eigenen Meilenstein
- **Support-Tickets:** Kunden-Anfragen zu Projekt-Ergebnissen

**Workflow: Bug in Projekt**

```text
1. Tester findet Bug → Issue erstellen
2. Typ "Bug" wählen
3. Projekt zuordnen
4. Priorität setzen (Critical/High/Medium/Low)
5. Developer zuweisen
6. Status "Open"
7. Developer bearbeitet Bug
8. Status "In Progress"
9. Fix wird committed
10. Status "Testing"
11. Tester verifiziert Fix
12. Status "Closed"
13. Issue bleibt als Dokumentation im Projekt-Kontext
```

## 📋 Prozesse-Integration

Die Prozesse-Integration verknüpft Projekte mit BPMN-definierten Workflows.

### Prozess-Definition mit Projekt verlinken

**Use Case: Projekt basiert auf Standard-Prozess**

Beispiel: "Website-Projekt nach Web-Development-Prozess"

1. Im Projekt → Feld "Verknüpfter Prozess"
2. BPMN-Prozess aus Dropdown wählen
3. Prozess-Visualisierung im Projekt sichtbar
4. Projekt-Phasen können an Prozess-Schritte gemappt werden

**Vorteile:**

- Standardisierung: Alle Website-Projekte folgen gleichem Prozess
- Compliance: Prozess-Schritte werden eingehalten
- Dokumentation: Prozess-Definition als Referenz
- Improvement: Prozess-Optimierung basierend auf Projekt-Erfahrungen

**Beispiel-Mapping:**

| Prozess-Schritt (BPMN) | Projekt-Phase | Meilenstein |
|------------------------|---------------|-------------|
| Anforderungsanalyse | Phase 1: Konzeption | M1: Requirements finalisiert |
| Design-Phase | Phase 2: Design | M2: Design freigegeben |
| Implementierung | Phase 3: Entwicklung | M3: Development abgeschlossen |
| Testing | Phase 4: Testing | M4: QA bestanden |
| Go-Live | Phase 5: Deployment | M5: Projekt abgeschlossen |

### Prozess-Compliance prüfen

**Checkliste im Projekt:**

- [ ] Alle Prozess-Schritte als Phasen abgebildet?
- [ ] Prozess-definierte Dokumente erstellt?
- [ ] Freigabe-Punkte als Meilensteine gesetzt?
- [ ] Prozess-Verantwortlichkeiten im Team abgebildet?
- [ ] Prozess-Risiken in SWOT berücksichtigt?

## 📊 Standards-Integration

Die Standards-Integration verknüpft Projekte mit Normen und Qualitätsstandards (z.B. ISO 9001, ISO 27001).

### Standards-Konformität dokumentieren

**Im Projekt → Tab "Standards":**

- Anwendbare Standards auswählen (z.B. ISO 9001)
- Norm-Anforderungen anzeigen
- Compliance-Status dokumentieren
- Nachweise verlinken

**Use Case: ISO 9001 Zertifizierungs-Projekt**

| Standard-Anforderung | Projekt-Massnahme | Nachweis | Status |
|---------------------|-------------------|----------|--------|
| 4.1 Kontext der Organisation | SWOT-Analyse erstellt | SWOT-Dokument im DMS | ✅ Erfüllt |
| 4.2 Stakeholder-Analyse | CRM-Participations erfasst | Stakeholder-Liste | ✅ Erfüllt |
| 6.1 Risiko-Management | SWOT-Risiken mit Massnahmen | Risiko-Matrix | 🟡 In Arbeit |
| 9.3 Management-Review | Quartals-Reporting | Review-Protokolle | ⏳ Geplant |

## 🔗 Praktische Integrations-Beispiele

### Beispiel 1: Komplexes Kundenprojekt mit allen Integrationen

**Projekt:** "ERP-Einführung bei Mustermann AG"

**Integrationen:**

1. **CRM:**
   - Kunde: Mustermann AG
   - Primärkontakt: Hans Mustermann (CEO)
   - Weitere Kontakte: IT-Leiter, CFO, HR-Leiter

2. **Organisation:**
   - Federführende Orgunit: IT-Abteilung
   - Beteiligte Orgunits: Finanzen, HR
   - Federführung: Anna Müller (IT-Leitung)
   - Team: 8 Mitarbeitende mit verschiedenen Rollen

3. **SWOT:**
   - Stärke: Erfahrenes IT-Team
   - Schwäche: Legacy-System stark angepasst
   - Chance: Prozess-Optimierung
   - Risiko: Datenmigration komplex
   - 12 Massnahmen definiert

4. **Teams/Boards:**
   - Sprint-Board für Entwicklung
   - Portfolio-Board für Stakeholder-Reporting
   - 24 Cards über 6 Sprints

5. **Timetracker:**
   - 8 Kostenstellen (Konzeption, Analyse, Development, Testing, etc.)
   - Total-Budget: 1'200h
   - Monatliches Budget-Tracking

6. **DMS:**
   - Projektcharter (freigegeben)
   - Anforderungs-Spezifikation (freigegeben)
   - Architektur-Dokument (freigegeben)
   - 15 weitere Projekt-Dokumente

7. **Bexio:**
   - Verknüpft für Rechnungsstellung
   - Monatliche Abrechnung der erfassten Stunden
   - 6 Rechnungen über Projektlaufzeit

8. **Issues:**
   - 45 Issues (8 Bugs, 12 Features, 25 Tasks)
   - Alle zugeordnet zu Projekt
   - Integriert mit Sprint-Planning

9. **Prozesse:**
   - Verknüpft mit "ERP-Einführungs-Prozess" (BPMN)
   - 5 Projektphasen mapped zu Prozess-Schritten
   - Compliance-Dokumentation

10. **Standards:**
    - ISO 9001 Konformität
    - 8 Standard-Anforderungen dokumentiert

**Resultat:**

- Ganzheitliches Projektmanagement
- Alle Informationen zentral verfügbar
- Transparenz für alle Stakeholder
- Effizientes Budget-Management
- Compliance sichergestellt

### Beispiel 2: Agiles Software-Projekt mit Board-Integration

**Projekt:** "Mobile App Development"

**Setup:**

1. **Projekt erstellen:**
   - Titel: "Mobile App - iOS/Android"
   - Agile Methodik
   - 3 Monate, 6 Sprints

2. **Team zusammenstellen:**
   - 5 Entwickler (via Organisation)
   - 1 UX Designer
   - 1 Product Owner (Federführung)

3. **Sprint-Board erstellen:**
   - Spalten: Backlog → Sprint Planning → In Progress → Review → Done
   - 6 Sprint-Lanes (horizontal)

4. **Projekt als Epic-Card:**
   - Project-Card auf Board
   - Status: "In Progress"

5. **User Stories als Sub-Cards:**
   - 35 User Stories als Cards
   - Priorität nach Product Owner
   - Schätzung in Story Points

6. **Sprint-Planung:**
   - Sprint 1: 8 Stories aus Backlog in "Sprint Planning"
   - Team-Commitment
   - Stories nach "In Progress" verschieben

7. **Daily Stand-up am Board:**
   - Jedes Team-Mitglied updated Cards
   - Blocker werden markiert
   - WIP-Limits beachten

8. **Sprint-Review:**
   - Done-Spalte reviewen
   - Demo für Stakeholder
   - Feedback als neue Stories

9. **Timetracker-Integration:**
   - Kostenstelle pro Sprint
   - Budget: 200h pro Sprint
   - Daily Time-Tracking

10. **Sprint-Retrospektive:**
    - Lessons Learned als SWOT-Einträge
    - Verbesserungs-Massnahmen definieren
    - Nächster Sprint optimieren

**Ergebnis nach 6 Sprints:**

- 35 User Stories completed
- 1'200h Time-Tracking
- 95% Budget-Auslastung
- Mobile App launched
- Alle Artefakte dokumentiert

### Beispiel 3: Compliance-Projekt mit Standards-Integration

**Projekt:** "ISO 27001 Zertifizierung"

**Setup:**

1. **Standard verknüpfen:**
   - ISO 27001 auswählen
   - Alle Norm-Anforderungen importieren

2. **Projekt-Struktur:**
   - Phase 1: Gap-Analyse
   - Phase 2: Massnahmen-Umsetzung
   - Phase 3: Audit-Vorbereitung
   - Phase 4: Zertifizierungs-Audit

3. **SWOT-Integration:**
   - Risiken aus ISO 27001 Risikoanalyse
   - Massnahmen für jedes identifizierte Risiko
   - Status-Tracking pro Massnahme

4. **DMS-Integration:**
   - Information Security Policy (freigegeben)
   - Risiko-Register (Version-Control)
   - Audit-Berichte (archiviert)
   - Zertifikat (final)

5. **Prozesse-Integration:**
   - BPMN-Prozess "Incident Management"
   - BPMN-Prozess "Change Management"
   - BPMN-Prozess "Access Control"
   - Alle verknüpft mit Projekt

6. **Organisation-Integration:**
   - Federführung: CISO
   - Beteiligte Orgunits: IT, HR, Legal, Facility
   - Information Security Team (12 Personen)

7. **Issues für Non-Conformities:**
   - Audit-Findings als Issues
   - Zuordnung zu Verantwortlichen
   - Tracking bis Closure

8. **Meilensteine:**
   - M1: Gap-Analyse abgeschlossen
   - M2: Alle Policies dokumentiert
   - M3: Technical Controls implementiert
   - M4: Pre-Audit bestanden
   - M5: Zertifizierung erhalten

**Compliance-Matrix:**

| ISO 27001 Anforderung | Projekt-Massnahme | Nachweis | Audit-Status |
|----------------------|-------------------|----------|--------------|
| A.5 Information Security Policies | Policy erstellt, freigegeben | DMS-Dokument | ✅ Bestanden |
| A.6 Organisation der Informationssicherheit | CISO ernannt, Team definiert | Organisation-Integration | ✅ Bestanden |
| A.8 Asset Management | Asset-Inventar erstellt | Excel im DMS | 🟡 Minor Finding |
| A.9 Zugriffskontrolle | IAM-System implementiert | Technical Audit | ✅ Bestanden |
| A.12 Betriebssicherheit | Monitoring aufgebaut | Log-Reports | ✅ Bestanden |
| A.17 Business Continuity | BCP dokumentiert | DMS-Dokument | ✅ Bestanden |
| A.18 Compliance | Compliance-Register | Projekt-Dokument | ✅ Bestanden |

**Ergebnis:**

- ISO 27001 Zertifizierung erfolgreich
- Vollständige Dokumentation
- Alle Nachweise im DMS
- Audit-Trail lückenlos
- Foundation für kontinuierliche Verbesserung

### Beispiel 4: Marketing-Kampagne mit Multi-Integration

**Projekt:** "Produkt-Launch-Kampagne Q2"

**Setup:**

1. **CRM-Integration:**
   - Ziel-Kunden-Segment: "Enterprise"
   - 150 Organisationen als Participations
   - Lead-Liste aus CRM importiert

2. **Teams/Board:**
   - Marketing-Board mit Spalten:
     - Ideation → Konzept → Creation → Review → Published
   - Projekt als Campaign-Card
   - 20 Content-Pieces als Sub-Cards

3. **Timetracker:**
   - Kostenstellen:
     - Konzeption: 40h
     - Content-Creation: 120h
     - Design: 60h
     - Campaign-Management: 30h
   - Total: 250h

4. **DMS-Dokumente:**
   - Campaign-Brief (freigegeben)
   - Brand Guidelines (Referenz)
   - Content-Calendar (shared)
   - Performance-Reports (monthly)

5. **Projekt-Dateien:**
   - 50+ Design-Dateien (Photoshop, Illustrator)
   - Video-Rohmaterial
   - Social Media Grafiken
   - E-Mail-Templates (HTML)

6. **Organisation:**
   - Federführung: Marketing-Leitung
   - Team: 8 Personen (Content, Design, Social Media, Ads)
   - Beteiligte Orgunits: Vertrieb, Produkt

7. **Meilensteine:**
   - M1: Kampagnen-Konzept freigegeben (Woche 1)
   - M2: Alle Content-Pieces erstellt (Woche 4)
   - M3: Kampagne launched (Woche 5)
   - M4: Mid-Campaign-Review (Woche 7)
   - M5: Kampagne abgeschlossen, Report erstellt (Woche 10)

8. **Issues für Feedback:**
   - Stakeholder-Feedback als Issues
   - Design-Änderungswünsche
   - Copy-Anpassungen
   - A/B-Test-Resultate

**KPIs als Custom Fields:**

- Leads generiert: 450 (Ziel: 400) ✅
- Marketing Qualified Leads (MQL): 180 (Ziel: 150) ✅
- Cost per Lead (CPL): CHF 42 (Budget: CHF 50) ✅
- Campaign ROI: 320% ✅

**Workflow:**

```text
Woche 1-2: Konzeption
- SWOT-Analyse für Campaign
- Zielgruppen-Definition (CRM)
- Content-Planung auf Board

Woche 3-4: Content-Creation
- 20 Content-Pieces erstellen
- Cards von "Creation" → "Review"
- Stakeholder-Feedback via Issues

Woche 5: Launch
- Alle Content-Pieces published
- Cards in "Done"
- Monitoring startet

Woche 6-9: Campaign läuft
- Daily Performance-Tracking
- Optimierungen via Issues
- Zeit-Erfassung auf Kostenstellen

Woche 10: Abschluss
- Final Report im DMS
- Lessons Learned als SWOT
- Budget-Review
- Projekt-Abschluss
```

## 💡 Best Practices für Integrationen

### ✅ Weniger ist mehr

**Nicht jede Integration ist immer nötig:**

- **Kleines Projekt (< 100h):** Timetracker + Organisation → Reicht meist aus
- **Mittleres Projekt (100-500h):** + DMS, + CRM (bei Kundenprojekten)
- **Grosses Projekt (> 500h):** Alle relevanten Integrationen nutzen

**Entscheidungs-Matrix:**

| Integration | Kleines Projekt | Mittleres Projekt | Grosses Projekt |
|-------------|----------------|-------------------|-----------------|
| Organisation | ✅ Pflicht | ✅ Pflicht | ✅ Pflicht |
| Timetracker | ✅ Empfohlen | ✅ Pflicht | ✅ Pflicht |
| SWOT | ⚪ Optional | ✅ Empfohlen | ✅ Pflicht |
| Teams/Boards | ⚪ Optional | ✅ Empfohlen | ✅ Pflicht |
| CRM | 🔵 Bei Bedarf | 🔵 Bei Bedarf | ✅ Empfohlen |
| DMS | ⚪ Optional | ✅ Empfohlen | ✅ Pflicht |
| Bexio | 🔵 Bei Bedarf | 🔵 Bei Bedarf | 🔵 Bei Bedarf |
| Issues | ⚪ Optional | ✅ Empfohlen | ✅ Pflicht |
| Prozesse | ⚪ Optional | ⚪ Optional | ✅ Empfohlen |
| Standards | 🔵 Bei Bedarf | 🔵 Bei Bedarf | 🔵 Bei Bedarf |

### ✅ Integration von Beginn an planen

**Projekt-Setup-Checkliste:**

1. **Projekt erstellen** → Basis-Infos erfassen
2. **Organisation** → Federführung und Team zuordnen
3. **Timetracker** → Kostenstellen erstellen
4. **CRM** (wenn Kundenprojekt) → Kunde verknüpfen
5. **SWOT** (bei Risiko-Projekten) → Risikoanalyse
6. **Teams** (bei agil) → Board erstellen, Projekt-Card hinzufügen
7. **DMS** (bei Dokumenten-lastigen Projekten) → Dokumenten-Struktur definieren
8. **Bexio** (bei Abrechnung) → Projekt-ID verknüpfen
9. **Standards** (bei Compliance) → Standards auswählen
10. **Prozesse** (bei Standard-Prozessen) → Prozess verlinken

**❌ Anti-Pattern: Integration nachrüsten**

```text
Problem: Projekt läuft 3 Monate → Dann erst Timetracker aktivieren

Folge:
- Keine historischen Zeit-Daten
- Budget-Tracking unvollständig
- Erkenntnisse aus erster Projektphase verloren
- Aufwändige Nacherfassung
```

**✅ Best Practice: Von Anfang an**

```text
Lösung: Beim Projekt-Start alle nötigen Integrationen einrichten

Vorteil:
- Vollständige Datenhistorie
- Korrekte Budget-Kontrolle
- Lessons Learned basierend auf Daten
- Keine nachträgliche Arbeit
```

### ✅ Bidirektionale Verlinkungen nutzen

**Beispiel: Projekt ↔ DMS-Dokument**

- Im Projekt: Link zum DMS-Dokument "Requirements Specification"
- Im DMS-Dokument: Feld "Verknüpftes Projekt" ausgefüllt
- Vorteil: Von beiden Seiten navigierbar

**Beispiel: Projekt ↔ Teams-Board**

- Projekt als Card auf Board
- Im Projekt: Tab "Cards" zeigt alle Boards
- Vorteil: Projekt-Status aus beiden Perspektiven sichtbar

### ✅ Redundanz vermeiden

**❌ Doppelte Datenhaltung:**

```text
Problem:
- Projekt-Beschreibung im Projekt
- Gleiche Beschreibung in Teams-Card
- Gleiche Beschreibung in Bexio
- Bei Änderungen: 3x aktualisieren

Risiko: Inkonsistenzen
```

**✅ Single Source of Truth:**

```text
Lösung:
- Projekt-Beschreibung nur in ELIZA Projekt
- Teams-Card: Link zu Projekt (nicht Kopie)
- Bexio: Automatische Sync
- Bei Änderungen: 1x aktualisieren, automatisch überall

Vorteil: Konsistenz garantiert
```

### ✅ Berechtigungen über Integrationen

**Organisations-Integration für Access Control:**

```text
Szenario: Vertrauliches HR-Projekt

Federführende Orgunit: HR-Abteilung
→ Nur HR-Mitarbeitende haben automatisch Zugriff

Beteiligte Orgunits: Management
→ Management hat Lese-Zugriff

Federführung: HR-Leitung
→ Vollzugriff unabhängig von Orgunit

Ergebnis: Automatisches, rollenbasiertes Access Management
```

### ✅ Integrationen für Reporting nutzen

**Cross-Modul-Berichte:**

```text
Management-Bericht aus Integrations-Daten:

1. Projekt-Status: Aus Projekt-Modul
2. Budget-Auslastung: Aus Timetracker-Integration
3. Risiken: Aus SWOT-Integration
4. Sprint-Fortschritt: Aus Teams-Board-Integration
5. Kunden-Feedback: Aus CRM-Participations
6. Offene Bugs: Aus Issues-Integration
7. Compliance-Status: Aus Standards-Integration

Resultat: 360°-View aus einer Quelle
```

### ✅ Automatisierung über Integrationen

**Workflow-Automatisierung:**

1. **Timetracker → Projekt:**
   - Erfasste Stunden > 90% Budget → Automatische Benachrichtigung

2. **Issues → Projekt:**
   - Critical Bug erfasst → Projekt-Status "Risiko", Federführung benachrichtigt

3. **Teams-Board → Projekt:**
   - Alle Cards in "Done" → Meilenstein automatisch abgeschlossen

4. **SWOT → Projekt:**
   - Neues High-Priority-Risiko → Automatisch Issue erstellen

5. **Bexio → Projekt:**
   - Rechnung versendet → Projekt-Status-Update, Dokument ins DMS

6. **DMS → Projekt:**
   - Dokument freigegeben → Nächste Projektphase freischalten

7. **Organisation → Projekt:**
   - Mitarbeitender geht → Automatisch aus Projekt-Team entfernen

## 🚀 Erweiterte Integrations-Szenarien

### Multi-Projekt-Portfolio-Management

**Szenario:** 20+ Projekte parallel verwalten

**Setup:**

1. **Portfolio-Board erstellen:**
   - Alle Projekte als Cards
   - Spalten: Pipeline → Active → On Hold → Completed
   - Swimlanes pro Abteilung

2. **Aggregierte Auswertungen:**
   - Total budgetierte Stunden aller Projekte
   - Total erfasste Stunden (Timetracker-Integration)
   - Portfolio-Auslastung
   - Risiko-Übersicht (SWOT-Integration)

3. **Kapazitäts-Management:**
   - Mitarbeitende über Projekte hinweg
   - Auslastungs-Heatmap
   - Bottleneck-Identifikation

4. **Priorisierung:**
   - Portfolio-Score basierend auf SWOT
   - Ressourcen-Allokation
   - Go/No-Go-Entscheidungen

### Continuous-Integration/Continuous-Deployment (CI/CD)

**Szenario:** Software-Projekt mit Git-Integration

**Setup:**

1. **Projekt verknüpfen mit Git-Repository**
2. **Issues als GitHub/GitLab Issues synchronisieren**
3. **Commits mit Projekt-ID taggen**
4. **Pull Requests als Project-Tasks**
5. **Deployments als Meilensteine**

**Workflow:**

```text
1. Issue erstellt in ELIZA → Sync zu GitLab
2. Developer erstellt Branch → Branch name mit Issue-ID
3. Commits → Tagged mit Projekt-ID
4. Pull Request → Automatisch in ELIZA sichtbar
5. Code-Review → Status-Update in ELIZA
6. Merge → Issue-Status "Closed"
7. Deployment → Meilenstein "Release X.Y" abgeschlossen
8. Timetracker: Development-Stunden automatisch erfasst (via Commit-Timestamps)
```

### Kunden-Self-Service-Portal

**Szenario:** Kunden können eigene Projekte einsehen

**Setup:**

1. **CRM-Participation mit Kunden-Organisation**
2. **External User für Kunde erstellen**
3. **Berechtigungen: Nur eigene Projekte sichtbar**
4. **Custom Dashboard für Kunden:**
   - Projekt-Status
   - Meilensteine-Fortschritt
   - Budget-Übersicht (optional)
   - Deliverables (DMS-Dokumente)
   - Kommunikations-Feed

**Vorteile:**

- Transparenz für Kunden
- Reduziert Status-Anfragen
- Self-Service für Dokumente
- Verbessertes Kunden-Erlebnis

## 📊 Zusammenfassung

Du hast gelernt:

✅ **SWOT-Integration:** Strategische Analysen und Massnahmen mit Projekten verknüpfen
✅ **Teams/Boards:** Agile Workflows mit Kanban-Boards und bidirektionaler Card-Verlinkung
✅ **CRM:** Kunden, Partner und Lieferanten als Participations einbinden
✅ **DMS:** Unterschied zwischen DMS-Dokumenten und Projekt-Dateien verstehen und nutzen
✅ **Timetracker:** Präzises Budget-Management mit Kostenstellen und Ampel-System
✅ **Bexio:** Projekt-Synchronisation für Rechnungsstellung und Buchhaltung
✅ **Organisation:** Mitarbeitende, Skills und Orgunits für Team-Management
✅ **Issues:** Bug-Tracking und Task-Management integriert
✅ **Prozesse:** BPMN-Workflows als Projekt-Grundlage
✅ **Standards:** Compliance-Dokumentation und Norm-Konformität
✅ **Best Practices:** Integration von Beginn an planen, bidirektional verlinken, Redundanz vermeiden
✅ **Praktische Beispiele:** Von einfach bis komplex, von agil bis Compliance

## 🎯 Nächste Schritte

1. **Evaluiere deine Projekte:**
   - Welche Integrationen werden bereits genutzt?
   - Welche Integrationen fehlen und wären sinnvoll?
   - Wo besteht Optimierungs-Potenzial?

2. **Starte mit Quick Wins:**
   - Timetracker-Integration für präzises Budget-Management
   - CRM-Integration für Kundenprojekte
   - Teams-Board für agile Projekte

3. **Erweitere schrittweise:**
   - SWOT für Risiko-Management
   - DMS für Dokumenten-Management
   - Issues für systematisches Task-Tracking

4. **Nutze Automatisierungen:**
   - Budget-Benachrichtigungen
   - Status-Updates via Workflows
   - Aggregierte Berichte

5. **Lerne aus Daten:**
   - Nutze Integrations-Daten für Lessons Learned
   - Optimiere Prozesse basierend auf Projekt-Erfahrungen
   - Verbessere Schätzungen für zukünftige Projekte

6. **Weitere Kapitel:**
   - Kapitel 13: Erweiterte Funktionen und Tipps
   - Kapitel 14: Troubleshooting und FAQ
