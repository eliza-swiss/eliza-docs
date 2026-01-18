---
title: "Best Practices und FAQ"
description: ""
weight: "14"
tags:
  - "best-practices"
  - "faq"
  - "tipps"
  - "tricks"
  - "troubleshooting"
---


# Best Practices und FAQ

Bewährte Methoden, Antworten auf häufige Fragen und Lösungen für typische Probleme im ELIZA Projektmanagement. Dieses Kapitel fasst die Erkenntnisse aus allen vorherigen Kapiteln zusammen und gibt dir konkrete Handlungsempfehlungen für die tägliche Praxis.

## Inhaltsverzeichnis

- **Best Practices**: Bewährte Methoden für erfolgreiches Projektmanagement
- **FAQ**: Häufig gestellte Fragen mit detaillierten Antworten
- **Troubleshooting**: Lösungen für typische Probleme
- **Checklisten**: Praktische Checkpunkte für Projekt-Start, -Durchführung und -Abschluss
- **Quick Reference**: Schnellreferenz für tägliche Aufgaben
- **Tipps für Effizienz**: Praktische Empfehlungen für produktives Arbeiten

## Best Practices

### Projektplanung

#### ✅ Strukturierte Projekt-Titel

Ein guter Projekt-Titel ist **eindeutig**, **aussagekräftig** und **konsistent**:

**Empfohlenes Template:**
```
[Bereich/Abteilung] - [Projekttyp] - [Kurzbeschreibung] [Jahr/Quartal]
```

**Beispiele:**

| Bereich | Titel | Warum gut? |
|---------|-------|------------|
| IT | IT - Migration - SAP auf S/4HANA 2025 | Klar strukturiert, Typ erkennbar, Jahr dabei |
| Marketing | MKT - Kampagne - Produktlaunch Q2/2025 | Abteilungskürzel, Typ, Zeitraum |
| HR | HR - Rekrutierung - 5 Entwickler 2025 | Scope im Titel, Jahr erkennbar |
| Produkt | PROD - Entwicklung - Mobile App v2.0 | Version im Titel, eindeutig |
| Compliance | QM - Audit - ISO 9001 Rezertifizierung 2025 | Standard genannt, Audit-Typ |

**Zu vermeiden:**

- ❌ "Projekt 2025" → Zu allgemein
- ❌ "SAP" → Unklar was genau
- ❌ "Das neue Marketing-Ding" → Unprofessionell
- ❌ "Website_v2_final_FINAL_2" → Keine Versionierung in Titel

#### ✅ Vollständige Projekt-Beschreibung

Die Projekt-Beschreibung ist das **zentrale Dokument** für alle Stakeholder. Sie sollte folgende Elemente enthalten:

**Template für Projekt-Beschreibung:**

```markdown
## Ziel
Was soll erreicht werden? (1-2 Sätze, messbar)

## Hintergrund
Warum ist das Projekt notwendig? Welches Problem wird gelöst?

## Scope (Leistungsumfang)
### Was ist enthalten:
- Feature A
- Feature B
- Feature C

### Was ist NICHT enthalten:
- Feature X (wird in Phase 2)
- Feature Y (out of scope)

## Erwarteter Nutzen
- Nutzen 1 (messbar, z.B. "20% Kostenreduktion")
- Nutzen 2 (z.B. "Verbesserte Kundenzufriedenheit")
- Nutzen 3 (z.B. "Compliance mit Regulierung XY")

## Erfolgskriterien
1. Kriterium 1 (messbar)
2. Kriterium 2 (messbar)
3. Kriterium 3 (messbar)

## Risiken
- Risiko 1 und Mitigation
- Risiko 2 und Mitigation

## Stakeholder
- Auftraggeber: [Name]
- Sponsor: [Name]
- Hauptnutzer: [Gruppe]
```

**Beispiel: Website-Relaunch**

```markdown
## Ziel
Relaunch der Unternehmens-Website mit modernem Design und verbesserter User Experience. Go-Live bis 31.03.2025.

## Hintergrund
Aktuelle Website ist 5 Jahre alt, nicht responsive, schlechte SEO-Rankings (Seite 3+), hohe Bounce-Rate (78%). Konkurrenz hat moderne Websites.

## Scope
### Enthalten:
- Responsive Design für Desktop, Tablet, Mobile
- 15 Hauptseiten neu gestaltet
- CMS-Migration von WordPress zu Django CMS
- SEO-Optimierung
- DSGVO-Compliance

### NICHT enthalten:
- E-Commerce-Funktionen (Phase 2)
- Mehrsprachigkeit (nur Deutsch)
- Blog-Redesign (bestehendes Design bleibt)

## Erwarteter Nutzen
- 40% Reduktion Bounce-Rate (Ziel: <40%)
- Top 5 Google-Rankings für Haupt-Keywords
- 25% mehr Leads über Website
- Mobile Nutzbarkeit (100% responsive)

## Erfolgskriterien
1. Alle 15 Seiten live und funktional
2. PageSpeed Score >85/100
3. Kein Ausfall >1h während Migration
4. User-Feedback-Score >4.0/5.0

## Risiken
- Content-Lieferung durch Marketing verzögert → Weekly Check-ins
- Datenbank-Migration komplex → Testmigration in Woche 8
```

#### ✅ Realistische Zeitplanung

Zeitplanung ist eine der **kritischsten** Projektmanagement-Aufgaben:

**Planungs-Prinzipien:**

- **Start-Datum**: Tatsächlicher, realistischer Projektstart (nicht Wunschdatum)
- **End-Datum**: Mit **20% Puffer** für Unvorhergesehenes
- **Meilensteine**: **5-10 Meilensteine** pro Projekt (nicht mehr!)
- **Phasen**: **3-5 Phasen** für bessere Übersicht

**Beispiel-Berechnung:**

```text
Geschätzte Dauer: 10 Wochen (reine Arbeitszeit)
+ Puffer 20%: 2 Wochen
+ Urlaube/Feiertage: 1 Woche
= Realistische Dauer: 13 Wochen

Start: 01.01.2025
Ende: 31.03.2025 (13 Wochen = ~3 Monate)
```

**Häufige Zeitplanungs-Fehler:**

| Fehler | Folge | Lösung |
|--------|-------|--------|
| Kein Puffer | Jede Verzögerung = Projektverzug | Min. 20% Puffer einplanen |
| Urlaube ignoriert | Ressourcen fehlen unerwartet | Urlaubskalender berücksichtigen |
| Zu optimistisch | Ständig "im Verzug" | Erfahrungswerte nutzen, realistisch bleiben |
| Abhängigkeiten übersehen | Blockiert andere Aufgaben | Kritischen Pfad identifizieren |

### Team-Organisation

#### ✅ Klare Verantwortlichkeiten

**RACI-Prinzip anwenden:**

Definiere für jede wichtige Projekt-Aktivität wer **R**esponsible, **A**ccountable, **C**onsulted und **I**nformed ist:

| Rolle in ELIZA | RACI-Zuordnung | Beschreibung |
|---|---|---|
| **Federführung** | A (Accountable) | Hauptverantwortlich, trifft finale Entscheidungen |
| **Mitwirkende (mit Rolle)** | R (Responsible) | Führen Aufgaben aus, liefern Ergebnisse |
| **Contributors** | C/I (Consulted/Informed) | Werden konsultiert oder informiert |
| **Projekt-Admins** | A/R | Können sowohl verantwortlich als auch ausführend sein |

**Empfohlene Team-Struktur:**

```text
Kleines Projekt (<500h):
- 1 Federführung
- 1 Admin (kann = Federführung sein)
- 3-5 Contributors
- 2-4 Mitwirkungen (formalisiert)

Mittleres Projekt (500-2000h):
- 1 Federführung
- 2-3 Admins
- 8-12 Contributors
- 5-10 Mitwirkungen

Großes Projekt (>2000h):
- 1 Federführung
- 3-5 Admins (Teilprojektleiter)
- 15-30 Contributors
- 10-20 Mitwirkungen
```

**Best Practices:**

✅ **Federführung IMMER setzen**: Auch bei kleinen Projekten
✅ **Min. 1 Admin definieren**: Für Verwaltungsaufgaben und Vertretung
✅ **Contributors für Transparenz**: Alle Stakeholder einbinden
✅ **Mitwirkungen mit Pensum**: Formalisiere Rollen mit Zeitaufwand

**Häufige Fehler:**

❌ Keine Federführung → Unklare Verantwortung
❌ Zu viele Admins (>5) → Verwässert Verantwortung
❌ Keine Contributors → Team nicht informiert
❌ Contributors als Admins → Falsche Berechtigungen

#### ✅ Regelmässige Team-Kommunikation

**Empfohlene Kommunikations-Rhythmen:**

| Frequenz | Format | Dauer | Inhalt |
|---|---|---|---|
| **Täglich** | Stand-up (agil) | 15 Min | Status, Blocker, Tagesziele |
| **Wöchentlich** | Team-Meeting | 60 Min | Fortschritt, Probleme, Planung |
| **Zweiwöchentlich** | Sprint-Review (agil) | 90 Min | Demo, Retrospektive, Planning |
| **Monatlich** | Stakeholder-Update | 30 Min | Status-Report, Risiken, Forecast |
| **Bei Meilensteinen** | Review-Meeting | 2h | Ergebnisse, Abnahme, Lessons Learned |

**Kommunikations-Kanäle:**

✅ **ELIZA Projekt-Notizen**: Offizielle Dokumentation
✅ **E-Mail**: Formelle Kommunikation, Entscheidungen
✅ **Teams/Slack**: Informelle, schnelle Abstimmung
✅ **Meetings**: Komplexe Themen, Entscheidungen
✅ **Status-Reports**: Regelmässige Updates an Stakeholder

#### ✅ Skill-Management

**Skill-Matrix für Team-Planung:**

Beispiel Software-Projekt:

| Mitarbeiter | Python | Django | Frontend | Testing | Verfügbar | Zuordnung |
|---|---|---|---|---|---|---|
| Anna Müller | ⭐⭐⭐ | ⭐⭐⭐ | ⭐ | ⭐⭐ | 80% | Senior Backend |
| Max Weber | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | 100% | Frontend Lead |
| Lisa Schmidt | ⭐ | ⭐ | ⭐ | ⭐⭐⭐ | 60% | QA/Testing |

**Skill-Level:**
- ⭐⭐⭐ = Expert (kann andere schulen)
- ⭐⭐ = Fortgeschritten (arbeitet selbständig)
- ⭐ = Grundkenntnisse (braucht Unterstützung)

### Budget-Management

#### ✅ Kostenstellen-Struktur

**Granularität richtig wählen:**

| Projektgröße | Empfohlene Anzahl Kostenstellen | Beispiel |
|---|---|---|
| Klein (<100h) | 3-5 Kostenstellen | PM, Entwicklung, Testing |
| Mittel (100-500h) | 5-10 Kostenstellen | PM, Konzept, Frontend, Backend, Testing, Deployment |
| Groß (>500h) | 10-20 Kostenstellen | Detailliert nach Aktivitäten und Phasen |

**Empfohlene Struktur:**

```text
Standardprojekt:
1. Projektleitung (10-15% des Budgets)
2. Konzeption & Analyse (15-20%)
3. Design/UX (10-15%)
4. Entwicklung Frontend (20-25%)
5. Entwicklung Backend (20-25%)
6. Testing & QA (10-15%)
7. Deployment & Go-Live (5%)
8. Dokumentation (5%)
9. Schulung (optional, 5-10%)
10. Support/Wartung (optional, Folgebudget)
```

**Pro-Tipp: Verrechenbare vs. Interne Kostenstellen trennen**

```text
Verrechenbar (dem Kunden verrechnet):
- Entwicklung
- Testing
- Dokumentation
- Schulung
→ Gesamt: CHF 45'000

Intern (nicht verrechenbar):
- Internes PM (Overhead)
- Akquisition (Angebotserstellung)
- Interne Reviews
→ Gesamt: CHF 5'000

Verkaufspreis: CHF 60'000
Margin: CHF 10'000 (20%)
```

#### ✅ Budget-Überwachung

**Überwachungs-Rhythmen:**

| Projekt-Status | Prüffrequenz | Aktion bei Überschreitung |
|---|---|---|
| **Geplant** | Monatlich | Budget-Anpassung |
| **In Arbeit** | Wöchentlich | Sofortige Eskalation bei >90% |
| **Kritisch** | Täglich | Daily Budget-Review mit Team |

**Ampel-Logik strikt anwenden:**

```text
🟢 Grün (0-75%):
- Status: Budget gesund
- Aktion: Normale Überwachung
- Reporting: Standard

🟡 Orange (76-90%):
- Status: Budget wird knapp
- Aktion: Team informieren, wöchentliches Review
- Reporting: Detailliert an Stakeholder

🔴 Rot (91-100%):
- Status: Budget kritisch
- Aktion: Sofort-Meeting, Massnahmen definieren
- Reporting: Eskalation an Management

⚫ Schwarz (>100%):
- Status: Budget überschritten
- Aktion: Projekt-Stopp erwägen, Nachverhandlung
- Reporting: Formelle Eskalation, Budget-Antrag
```

**Frühindikatoren beachten:**

✅ **Velocity tracken**: Wie viele Stunden/Story Points pro Woche?
✅ **Burn-Rate analysieren**: Wie schnell wird Budget verbraucht?
✅ **Trend erkennen**: Beschleunigt oder verlangsamt sich Verbrauch?
✅ **Forecast erstellen**: Bei aktuellem Tempo, wann ist Budget aufgebraucht?

#### ✅ Budget-Kommunikation

**Transparenz-Prinzip:**

✅ **Team informieren bei 80%**: "Wir haben noch 20% Budget, bitte fokussieren"
✅ **Stakeholder warnen bei 90%**: "Budget wird knapp, Massnahmen X,Y,Z geplant"
✅ **Management eskalieren bei 100%**: "Budget aufgebraucht, Entscheidung nötig"

**Budget-Reports verwenden:**

- **Wöchentlicher Bericht**: Budget-Status für Projektleitung
- **Monatlicher Report**: Detaillierter Soll-Ist-Vergleich für Controlling
- **Quartalsreview**: Lessons Learned für zukünftige Budgetplanung

### Status-Management

#### ✅ Workflow konsequent nutzen

**Standard-Workflow:**

```text
1. Entwurf (draft)
   ↓ (wenn komplett geplant)
2. Geplant
   ↓ (wenn Budget freigegeben)
3. In Prüfung
   ↓ (wenn genehmigt)
4. Freigegeben
   ↓ (wenn gestartet)
5. In Arbeit
   ↓ (wenn abgeschlossen)
6. Abgeschlossen
```

**Status-Übergänge dokumentieren:**

Bei jedem Status-Wechsel kurze Notiz erfassen:

```text
"Status geändert von 'Geplant' zu 'In Prüfung' am 15.01.2025
Grund: Budget-Antrag eingereicht
Nächste Schritte: Genehmigung durch Geschäftsführung abwarten"
```

#### ✅ Genehmigungskriterien definieren

**Checkliste vor Projekt-Genehmigung:**

- [ ] **Team vollständig**: Alle Rollen besetzt
- [ ] **Budget freigegeben**: Formelle Budget-Genehmigung vorhanden
- [ ] **Ressourcen verfügbar**: Team hat Kapazität
- [ ] **Abhängigkeiten geklärt**: Externe Abhängigkeiten identifiziert
- [ ] **Risiken bewertet**: SWOT-Analyse durchgeführt
- [ ] **Stakeholder informiert**: Kick-off-Meeting geplant
- [ ] **Infrastruktur ready**: Tools, Accounts, Zugänge vorhanden

**Genehmigungsberechtigungen:**

| Benutzergruppe | Kann genehmigen? | Berechtigung |
|---|---|---|
| projects_users | ❌ Nein | Nur Lesezugriff |
| projects_contributors | ❌ Nein | Nur eigene Projekte bearbeiten |
| projects_admin | ✅ Ja | `projects.approve_project` |

### Reporting

#### ✅ Regelmässige Status-Reports

**Report-Frequenzen nach Projekt-Phase:**

| Projekt-Status | Report-Frequenz | Begründung |
|---|---|---|
| Geplant | Monatlich | Niedrige Aktivität, wenig Änderungen |
| In Prüfung | Zweiwöchentlich | Entscheidungen stehen an |
| In Arbeit | **Wöchentlich** | Hohe Aktivität, schnelle Änderungen |
| Kritisch (🔴 Rot) | **Täglich** | Intensive Überwachung nötig |
| Abgeschlossen | Bei Bedarf | Nur noch Lessons Learned |

**Minimal-Report-Template:**

```text
# Status Report KW [XX] - [Projektname]

💰 Kosten: [🟢/🟡/🔴] ([X]% Budget verbraucht)
📅 Termine: [🟢/🟡/🔴] (Kommentar)
⭐ Qualität: [🟢/🟡/🔴] (Kommentar)

## Top 3 diese Woche:
1. [Erreichter Meilenstein / Feature]
2. [Fortschritt]
3. [Erfolg]

## Herausforderungen:
- [Problem 1 und Massnahme]

## Nächste Woche:
- [Ziel 1]
- [Ziel 2]
```

#### ✅ Ehrliche Bewertungen

**Mut zur orangen/roten Ampel:**

Viele Projektleiter färben Ampeln zu lange grün aus Angst vor Kritik. **Das ist kontraproduktiv!**

**Richtig:**

| Situation | Ampel | Begründung |
|---|---|---|
| Budget 85%, aber Trend steigend | 🟡 Orange | Proaktive Warnung |
| Meilenstein in 1 Woche, 3 kritische Bugs | 🔴 Rot | Realistische Einschätzung |
| Alles im Plan, keine Risiken | 🟢 Grün | Verdient grün |

**Falsch:**

| Situation | Ampel (falsch) | Problem |
|---|---|---|
| Budget 95%, aber "wird schon" | 🟢 Grün | Schönfärberei, Probleme werden vertuscht |
| Meilenstein überfällig | 🟡 Orange | Sollte rot sein, Dringlichkeit unklar |

**Eskalations-Regel:**

```text
🟢 → 🟡: Informiere Projektteam
🟡 → 🔴: Informiere Stakeholder + Management
🔴 bleibt 2+ Wochen: Eskalations-Meeting einberufen
```

### Dokumentation

#### ✅ Projektdateien strukturiert ablegen

**Empfohlene Ordner-Struktur:**

```text
/Projektdateien/
  /01_Initialisierung/
    - Projektauftrag.pdf
    - Business Case.xlsx
    - Stakeholder-Analyse.pdf

  /02_Planung/
    - Projektplan.mpp
    - Budget-Kalkulation.xlsx
    - SWOT-Analyse.pdf
    - Risiko-Register.xlsx

  /03_Konzeption/
    - Anforderungs-Spezifikation.docx
    - Design-Mockups.fig
    - Architektur-Diagramm.pdf

  /04_Umsetzung/
    - Sprint-Reviews/ (Unterordner pro Sprint)
    - Code-Review-Notizen.md
    - Change-Requests/

  /05_Testing/
    - Testplan.xlsx
    - Bug-Reports/
    - UAT-Protokolle/

  /06_Go-Live/
    - Deployment-Checkliste.pdf
    - Rollback-Plan.pdf
    - Go-Live-Protokoll.pdf

  /07_Abschluss/
    - Abschlussbericht.pdf
    - Lessons-Learned.pdf
    - Projekt-Präsentation.pptx
```

**Datei-Namens-Konvention:**

```text
[JJJJ-MM-TT]_[Dokument-Typ]_[Beschreibung]_[Version].ext

Beispiele:
2025-01-15_Spezifikation_Anforderungen_v1.2.docx
2025-02-20_Protokoll_Kick-off-Meeting.pdf
2025-03-10_Bericht_Sprint-Review-3.pdf
```

#### ✅ DMS vs. Projekt-Dateien

**Entscheidungshilfe:**

| Dokument-Typ | DMS | Projekt-Dateien |
|---|---|---|
| **Projektcharter** (final) | ✅ | ❌ |
| **Verträge** | ✅ | ❌ |
| **Spezifikationen** (freigegeben) | ✅ | ❌ |
| **Meeting-Notizen** | ❌ | ✅ |
| **Entwürfe** | ❌ | ✅ |
| **Code-Snippets** | ❌ | ✅ |
| **Abschlussberichte** | ✅ | ❌ |

**Workflow:**

```text
1. Dokument als Entwurf → Projekt-Dateien
2. Mehrere Iterationen → Immer in Projekt-Dateien
3. Finalisierung & Freigabe → DMS hochladen
4. Link zu DMS-Dokument in Projekt-Beschreibung
5. Entwurf in Projekt-Dateien kann archiviert werden
```

#### ✅ Lessons Learned dokumentieren

**Template für Lessons Learned:**

```markdown
# Lessons Learned - [Projektname]

**Datum:** [TT.MM.JJJJ]
**Teilnehmer:** [Namen]

## Was lief gut? ✅

1. [Positiver Aspekt 1]
   - Warum war es erfolgreich?
   - Wie können wir das wiederholen?

2. [Positiver Aspekt 2]

## Was lief schlecht? ❌

1. [Problem 1]
   - Was war die Ursache?
   - Wie hätten wir es vermeiden können?
   - Was machen wir nächstes Mal anders?

2. [Problem 2]

## Zahlen & Fakten 📊

- Budget: Geplant CHF X, Ist CHF Y (Δ Z%)
- Zeit: Geplant X Wochen, Ist Y Wochen (Δ Z Wochen)
- Team: X Personen, Y Personenmonate
- Scope: X% wie geplant, Y% zusätzlich, Z% entfernt

## Empfehlungen für zukünftige Projekte 💡

1. [Empfehlung 1]
2. [Empfehlung 2]
3. [Empfehlung 3]

## Danksagungen 🙏

- [Person/Team für besondere Leistung]
```

**Wann Lessons Learned durchführen:**

✅ **Bei Projekt-Abschluss**: Immer, auch bei "einfachen" Projekten
✅ **Nach kritischen Phasen**: Z.B. nach Go-Live
✅ **Bei Projekt-Abbruch**: Besonders wichtig!
✅ **Nach Eskalationen**: Was ging schief, wie vermeiden?

## Häufige Fragen (FAQ)

### 📋 Grundlagen und Projektplanung

**F: Wie viele Projekte kann ich erstellen?**

**Antwort:**
Unbegrenzt. Es gibt keine technische Limitierung für die Anzahl Projekte in ELIZA. Die praktische Grenze liegt bei der Übersichtlichkeit.

**Empfehlung:**
- Nutze Filter und Ansichten bei vielen Projekten
- Archiviere abgeschlossene Projekte
- Verwende aussagekräftige Projekt-Titel
- Setze Labels zur Gruppierung

---

**F: Kann ich Projekte duplizieren/kopieren?**

**Antwort:**
Nein, ELIZA bietet derzeit keine direkte Duplikations-Funktion. Du musst ein neues Projekt manuell erstellen.

**Workaround:**
1. Erstelle ein "Template-Projekt" mit:
   - Standard-Phasen
   - Typischen Kostenstellen
   - Bewährten Labels
   - Standard-Beschreibung
2. Nutze dieses als Vorlage beim manuellen Anlegen neuer Projekte
3. Kopiere Beschreibung via Copy-Paste

**Feature-Request:** Projekt-Templates sind auf der Roadmap für ELIZA 2026.

---

**F: Kann ich die Klassifikation nach dem Erstellen ändern?**

**Antwort:**
Nein, die Klassifikation (normal/vertraulich) ist nach dem ersten Speichern fixiert und kann nicht mehr geändert werden.

**Grund:**
Die Klassifikation beeinflusst Berechtigungen und Sichtbarkeit. Eine nachträgliche Änderung könnte Sicherheits-Implikationen haben:
- Vertrauliche Daten könnten versehentlich exponiert werden
- Zugriffsrechte würden rückwirkend geändert
- Audit-Trail wäre inkonsistent

**Lösung bei Fehler:**
1. Erstelle neues Projekt mit korrekter Klassifikation
2. Übertrage Daten manuell (Team, Kostenstellen, Meilensteine)
3. Verweise im alten Projekt auf neues Projekt
4. Archiviere altes Projekt (nicht löschen für Audit-Trail)

---

**F: Wie erstelle ich Projekt-Hierarchien (Parent/Child)?**

**Antwort:**
Über das Feld "Übergeordnetes Projekt" (Parent) beim Erstellen/Bearbeiten eines Projekts.

**Funktionsweise:**
- Ein Projekt kann **mehrere Child-Projekte** haben
- Aber nur **ein Parent-Projekt**
- Hierarchien sind in Projekt-Detailansicht sichtbar
- Ermöglicht rollup-Reporting (z.B. Gesamt-Budget)

**Beispiel-Hierarchie:**
```text
📦 ERP-Einführung 2025 (Parent)
  ├─ ERP: Finanzmodul (Child)
  ├─ ERP: HR-Modul (Child)
  └─ ERP: Logistik-Modul (Child)
```

**Use Cases:**
- Grossprojekte mit Teilprojekten
- Programme mit mehreren Projekten
- Phasen-basierte Projekte (Phase 1 → Phase 2)

---

**F: Was bedeuten die verschiedenen Projekt-Status?**

**Antwort:**
ELIZA nutzt einen definierten Status-Workflow:

| Status | Bedeutung | Nächster Schritt |
|---|---|---|
| **Entwurf** | Projekt in Planung | → Geplant |
| **Geplant** | Budget/Ressourcen definiert | → In Prüfung |
| **In Prüfung** | Wartet auf Genehmigung | → Freigegeben |
| **Freigegeben** | Genehmigt, aber noch nicht gestartet | → In Arbeit |
| **In Arbeit** | Aktive Umsetzung läuft | → Abgeschlossen |
| **Abgeschlossen** | Erfolgreich beendet | - |
| **Abgebrochen** | Vorzeitig beendet | - |
| **Verschoben** | Temporär pausiert | → In Arbeit (reaktiviert) |

**Status-Wechsel dokumentieren:**
Bei jedem Status-Wechsel kurze Notiz in Projekt-Kommentare schreiben für Nachvollziehbarkeit.

---

**F: Welche Felder sind Pflichtfelder beim Projekt-Erstellen?**

**Antwort:**
**Pflichtfelder sind:**
- **Titel** (eindeutiger Projektname)
- **Klassifikation** (normal oder vertraulich)

**Empfohlen, aber optional:**
- Start-/End-Datum (für Gantt-Darstellung)
- Federführung (für klare Verantwortung)
- Beschreibung (für Dokumentation)
- Status (Standard: "geplant")

**Best Practice:**
Fülle IMMER auch optionale Felder aus:
- ✅ Start-/End-Datum → Ermöglicht Zeitplanung
- ✅ Federführung → Klare Verantwortung
- ✅ Beschreibung → Dokumentation für Stakeholder
- ✅ Labels → Gruppierung und Filterung

---

**F: Wie finde ich Projekte schnell wieder?**

**Antwort:**
Mehrere Methoden stehen dir zur Verfügung:

**1. Favoriten:**
- Markiere wichtige Projekte mit Stern-Symbol (⭐)
- Erscheinen oben in der Projekt-Liste
- Ideal für aktuelle Projekte

**2. Filter:**
- Filtere nach Status (z.B. "In Arbeit")
- Nach Typ (z.B. "IT-Projekt")
- Nach Abteilung/Bereich
- Nach Labels/Tags

**3. Suche:**
- Volltext-Suche im Titel und Beschreibung
- Sucht auch in Kostenstellen und Meilensteinen
- Nutze Keyboard-Shortcut `Ctrl+K` für Schnellsuche

**4. Labels:**
- Vergebe Tags/Labels für thematische Gruppierung
- Beispiele: "Prio 1", "Q1-2025", "Budget-kritisch"
- Kombiniere mehrere Labels

**5. Dashboard:**
- "Meine Projekte" Widget zeigt deine Projekte
- Filtere nach verschiedenen Kriterien
- Anpassbare Darstellung

**Pro-Tipp:**
Erstelle gespeicherte Filter für häufige Ansichten:
- "Meine aktiven Projekte" (Status: In Arbeit + Ich als Federführung)
- "Kritische Projekte" (Budget >90% oder überfällige Meilensteine)
- "Q1-Projekte" (Start-Datum in Q1)

---

### 👥 Team-Management

**F: Was ist der Unterschied zwischen Federführung und Admin?**

**Antwort:**
- **Federführung (Projektleitung):**
  - Eine Person pro Projekt
  - Hauptverantwortlich für Projekterfolg
  - Trifft finale Entscheidungen
  - Berichtet an Auftraggeber
  - Hat automatisch Admin-Rechte im Projekt

- **Admin (Projekt-Administrator):**
  - Mehrere Personen möglich
  - Technische Verwaltung des Projekts
  - Kann Einstellungen ändern, User hinzufügen
  - Unterstützt Federführung
  - Keine strategische Verantwortung

**Praxis-Tipp:** Bei grossen Projekten kann die Federführung zusätzliche Admins ernennen (z.B. Teilprojektleiter), um administrative Aufgaben zu delegieren.

---

**F: Kann ich Mitwirkende nachträglich hinzufügen?**

**Antwort:**
Ja, du kannst jederzeit:
1. Projekt öffnen → "Team"
2. "+ Mitwirkende hinzufügen"
3. Person auswählen
4. Rolle zuweisen (Mitwirkende oder Admin)

**Wichtig:** Neue Mitwirkende sehen alle bisherigen Projektdaten und haben Zugriff auf alle Kostenstellen (Tasks), die nicht explizit eingeschränkt sind.

---

**F: Was passiert, wenn die Federführung das Unternehmen verlässt?**

**Antwort:**
**Sofortmassnahmen:**
1. **Admin übernimmt:** Ein Projekt-Admin kann temporär die Aufgaben übernehmen
2. **Federführung wechseln:**
   - Projekt öffnen → "Team" → "Federführung ändern"
   - Neue Federführung auswählen
   - System überträgt automatisch alle Rechte

**Best Practice:**
- Stelle sicher, dass jedes kritische Projekt mindestens 2 Admins hat
- Dokumentiere Übergabe in Projekt-Notizen
- Aktualisiere alle externen Stakeholder über Wechsel

---

### 💰 Budget und Zeiterfassung

**F: Warum kann ich in einem Projekt keine Zeit erfassen?**

**Antwort:**
Zeit kann nur auf **Kostenstellen (Tasks)** erfasst werden, nicht direkt auf dem Projekt.

**Schritt-für-Schritt:**
1. Erstelle mindestens eine Kostenstelle im Projekt
2. Gehe zu "Zeiterfassung" (Hauptmenü)
3. Wähle die Kostenstelle aus dem Projekt
4. Erfasse deine Arbeitszeit

**Häufiger Fehler:** Projekt ohne Kostenstellen erstellt → Keine Zeiterfassung möglich

---

**F: Wie erstelle ich eine sinnvolle Kostenstellen-Struktur?**

**Antwort:**
Orientiere dich an den Projektphasen oder Arbeitspaketen:

**Beispiel für IT-Projekt:**
```
📦 Projekt: CRM-System Einführung
  └─ Kostenstelle 1: Anforderungsanalyse (Budget: 40h)
  └─ Kostenstelle 2: Systemauswahl (Budget: 60h)
  └─ Kostenstelle 3: Implementierung (Budget: 200h)
  └─ Kostenstelle 4: Schulung (Budget: 40h)
  └─ Kostenstelle 5: Projektmanagement (Budget: 60h)
```

**Empfehlung:**
- ✅ 5-10 Kostenstellen pro Projekt (übersichtlich)
- ✅ Klare Abgrenzung zwischen Kostenstellen
- ❌ Nicht zu granular (nicht für jede Mini-Aufgabe eine Kostenstelle)
- ✅ Projektmanagement-Overhead als eigene Kostenstelle

---

**F: Kann ich das Budget einer Kostenstelle nachträglich anpassen?**

**Antwort:**
Ja, das ist jederzeit möglich:
1. Projekt öffnen → "Kostenstellen"
2. Kostenstelle auswählen
3. "Budget bearbeiten"
4. Neues Budget eingeben

**Wichtig:**
- Bereits erfasste Zeit bleibt bestehen
- Ampel-Status wird neu berechnet
- Änderungen werden im Aktivitäts-Stream protokolliert

**Best Practice:** Dokumentiere Budget-Anpassungen mit Begründung in den Kostenstellen-Notizen.

---

**F: Wie gehe ich mit Budget-Überschreitungen um?**

**Antwort:**
**Präventiv:**
- Überwache Ampel-Status regelmässig (wöchentlich)
- Bei 🟡 Orange: Analysiere Ursachen, korrigiere frühzeitig
- Kommuniziere mit Auftraggeber bei Budgetrisiken

**Bei Überschreitung (🔴/⚫):**

1. **Ursachenanalyse:**
   - Scope Creep (ungeplante Anforderungen)?
   - Schätzung zu optimistisch?
   - Externe Störungen/Probleme?

2. **Massnahmen:**
   - Option A: Budget erhöhen (wenn gerechtfertigt)
   - Option B: Scope reduzieren
   - Option C: Ressourcen optimieren

3. **Dokumentation:**
   - Erfasse Lessons Learned
   - Update Projekt-Risiken
   - Informiere Stakeholder

**Beispiel-Kommunikation:**
```
Kostenstelle "Implementierung" zeigt Budgetüberschreitung von 20%.
Grund: Zusätzliche Anforderungen aus Workshop (15.03.).
Vorschlag: Budget um 40h erhöhen oder Feature X in Phase 2 verschieben.
```

---

### 🔄 Status und Workflow

**F: Welchen Status soll ich wann verwenden?**

**Antwort:**
Hier die klare Status-Logik:

| Status | Wann verwenden? | Wer kann setzen? | Nächster Schritt |
|--------|----------------|------------------|------------------|
| 📝 **Entwurf** | Projekt wird noch geplant | Ersteller | → Geplant |
| 📅 **Geplant** | Projekt ist definiert, wartet auf Start | Federführung | → In Prüfung |
| 🔍 **In Prüfung** | Zur Genehmigung vorgelegt | Federführung | → Freigegeben/Entwurf |
| ✅ **Freigegeben** | Genehmigt, bereit zur Umsetzung | Genehmiger | → In Arbeit |
| ⚙️ **In Arbeit** | Aktive Bearbeitung läuft | Federführung | → Abgeschlossen |
| 🏁 **Abgeschlossen** | Projekt erfolgreich beendet | Federführung | - |

**Praxis-Tipp:** Nutze Status-Änderungen als Meilensteine und kommuniziere diese an dein Team.

---

**F: Was ist der Unterschied zwischen "Freigegeben" und "In Arbeit"?**

**Antwort:**
**Freigegeben (✅):**
- Projekt wurde genehmigt (Budget, Scope, Team)
- Formeller Startschuss
- Alle Voraussetzungen erfüllt
- Noch keine aktive Bearbeitung

**In Arbeit (⚙️):**
- Team arbeitet aktiv am Projekt
- Zeit wird erfasst
- Fortschritt wird gemessen
- Regelmässiges Reporting

**Zeitliche Abfolge:**
```
Geplant → In Prüfung → Freigegeben → [Kick-off Meeting] → In Arbeit
                                           ↑
                                    1-2 Wochen Pause möglich
```

**Warum diese Trennung?**
Es kann Verzögerungen zwischen Genehmigung und Start geben (z.B. warten auf Ressourcen, Vertragsunterzeichnung, etc.).

---

**F: Kann ich einen Status überspringen?**

**Antwort:**
**Grundsätzlich ja**, aber nicht empfohlen:

✅ **Erlaubt** (direkt möglich):
- Entwurf → In Arbeit (bei kleinen internen Projekten)
- Geplant → Freigegeben (wenn keine formelle Prüfung nötig)

❌ **Nicht möglich** (System verhindert):
- Direkt zu "Abgeschlossen" ohne "In Arbeit"

⚠️ **Vorsicht:**
- Übersprungene Status fehlen in Reports
- Audit-Trail ist unvollständig
- Best Practice: Gehe den Standard-Workflow durch

**Ausnahme:** Bei sehr kleinen, internen Projekten (<20h) kann ein vereinfachter Workflow sinnvoll sein:
```
Entwurf → In Arbeit → Abgeschlossen
```

---

**F: Was sind "Genehmigungskriterien" und wann brauche ich sie?**

**Antwort:**
**Genehmigungskriterien** sind Bedingungen, die erfüllt sein müssen, bevor ein Projekt von "In Prüfung" zu "Freigegeben" wechseln kann.

**Typische Kriterien:**
- ✅ Budget genehmigt durch Geschäftsleitung
- ✅ Ressourcen verfügbar (Personal, Budget, Tools)
- ✅ Risiken bewertet und akzeptiert
- ✅ Stakeholder informiert
- ✅ Rechtliche Prüfung abgeschlossen (bei Bedarf)

**Wann verwenden?**
- Bei Projekten >100h oder >CHF 50'000
- Bei strategisch wichtigen Projekten
- Bei Projekten mit hohem Risiko
- Wenn mehrere Abteilungen betroffen sind

**Wo definieren?**
1. Projekt öffnen → "Details bearbeiten"
2. Abschnitt "Genehmigungskriterien"
3. Liste der Kriterien eintragen
4. Speichern

**Praxis-Beispiel:**
```
Genehmigungskriterien für Projekt "Website Relaunch":
□ Budget-Freigabe durch CFO (CHF 85'000)
□ IT-Ressourcen bestätigt (2 Entwickler ab KW 25)
□ Datenschutz-Prüfung abgeschlossen
□ Marketing-Konzept verabschiedet
□ Hosting-Vertrag unterzeichnet
```

---

### 📊 Reporting und Visualisierung

**F: Wie erstelle ich einen aussagekräftigen Projekt-Report?**

**Antwort:**
Nutze die eingebauten Reporting-Funktionen:

**1. Dashboard-Report (Schnellübersicht):**
- Gehe zu Projekt → "Dashboard"
- Zeigt: Status, Budget, Team, Meilensteine
- Perfekt für: Wöchentliche Updates

**2. Zeit-Report (Detailliert):**
- Gehe zu Projekt → "Zeiterfassung"
- Filter nach Zeitraum, Person, Kostenstelle
- Export als Excel/PDF
- Perfekt für: Monatliche Abrechnungen

**3. Budget-Report:**
- Gehe zu Projekt → "Kostenstellen"
- Übersicht über alle Tasks mit Ampel-Status
- Zeigt: Soll/Ist/Abweichung
- Perfekt für: Budget-Meetings

**4. Meilenstein-Report:**
- Gehe zu Projekt → "Meilensteine"
- Listet alle Meilensteine mit Termin und Status
- Perfekt für: Steering Committee Meetings

**Pro-Tipp:** Kombiniere Reports für umfassende Übersicht:
```
Monatlicher Projekt-Report =
  Dashboard-Screenshot +
  Zeit-Report (Excel) +
  Budget-Übersicht +
  Meilenstein-Status
```

---

**F: Kann ich Projekt-Reports automatisch versenden?**

**Antwort:**
**Aktuell nicht direkt**, aber Workarounds:

**Option 1: Aktivitäts-Stream nutzen**
- Team-Mitglieder erhalten automatisch Benachrichtigungen
- Geht zu: "Einstellungen" → "Benachrichtigungen"
- Aktiviere: "Projekt-Updates"

**Option 2: Dashboard-Export**
- Erstelle regelmässig Dashboard-Screenshot
- Versende manuell per E-Mail
- Tools: Browser-Screenshot oder "Drucken als PDF"

**Option 3: API-Integration** (für IT-affine Teams)
- Nutze ELIZA REST API
- Automatisiere Report-Erstellung mit Script
- Versende via E-Mail-Tool (z.B. Postfix, SendGrid)

**Best Practice:**
Etabliere feste Report-Rhythmen:
- Wöchentlich: Kurz-Update im Team-Meeting
- Monatlich: Ausführlicher Report an Auftraggeber
- Quartalsweise: Strategischer Review mit Management

---

**F: Wie visualisiere ich den Projekt-Fortschritt für Management?**

**Antwort:**
**Management will sehen:**
- Status auf einen Blick (Ampel)
- Budget-Situation (Soll/Ist)
- Meilenstein-Einhaltung
- Risiken und Probleme

**Empfohlene Darstellung:**

**1. Executive Summary (1 Seite):**
```
Projekt: CRM-System Einführung
Status: 🟢 Im Plan
Fortschritt: 65% abgeschlossen
Budget: 🟡 85% verbraucht (bei 65% Fortschritt)
Risiken: 1 mittleres Risiko (Datenbereinigung verzögert)
Nächster Meilenstein: Go-Live am 15.06.2025
```

**2. Budget-Visualisierung:**
| Kostenstelle | Budget | Verbraucht | Status |
|--------------|--------|------------|--------|
| Analyse | 40h | 38h | 🟢 |
| Implementierung | 200h | 180h | 🟡 |
| Schulung | 40h | 5h | 🟢 |
| **Total** | **280h** | **223h** | **🟡** |

**3. Meilenstein-Timeline:**
```
✅ Anforderungen definiert (15.01.2025)
✅ System ausgewählt (28.02.2025)
⚙️ Implementierung läuft (bis 31.05.2025)
📅 Go-Live geplant (15.06.2025)
```

**Tool-Tipp:** Exportiere Daten aus ELIZA und erstelle PowerPoint/Excel-Dashboard für Management-Meetings.

---

### 🔗 Integrationen

**F: Wie verknüpfe ich ein Projekt mit DMS-Dokumenten?**

**Antwort:**
Es gibt zwei Wege, Dokumente mit Projekten zu verbinden:

**Weg 1: Direkt im DMS**
1. Öffne Dokument im DMS
2. Bearbeite Dokument-Metadaten
3. Feld "Zugehöriges Projekt" → Wähle dein Projekt
4. Speichern

**Weg 2: Aus dem Projekt heraus**
1. Öffne Projekt → "Dokumente"
2. "+ Dokument verknüpfen"
3. Wähle DMS-Dokument aus Liste
4. Speichern

**Vorteile der Verknüpfung:**
- ✅ Zentraler Zugriff auf Projektdokumentation
- ✅ Dokumente erscheinen automatisch im Projekt-Dashboard
- ✅ Versionierung und Freigabe-Workflow aus DMS verfügbar
- ✅ Volltextsuche findet Dokumente über Projekt

**Best Practice:** Verknüpfe wichtige Dokumente wie:
- Projektauftrag
- Pflichtenheft
- Verträge
- Abnahmeprotokolle
- Lessons Learned

---

**F: Was ist der Unterschied zwischen DMS-Verknüpfung und Projekt-Dateien?**

**Antwort:**
Das sind zwei unterschiedliche Systeme mit verschiedenen Einsatzzwecken:

| Aspekt | DMS-Verknüpfung | Projekt-Dateien |
|--------|----------------|----------------|
| **Zweck** | Offizielle, geprüfte Dokumente | Arbeitsdateien, Entwürfe |
| **Versionierung** | ✅ Vollständig (Major/Minor) | ❌ Nur "letzte Version" |
| **Freigabe-Workflow** | ✅ Ja (Prüfung/Genehmigung) | ❌ Nein |
| **Sichtbarkeit** | Unternehmensweit (je nach Berechtigung) | Nur Projekt-Team |
| **Beispiele** | Projektauftrag, Verträge, Protokolle | Mockups, Excel-Listen, Notizen |

**Faustregel:**
- **DMS:** Für alles, was "offiziellen Charakter" hat
- **Projekt-Dateien:** Für alles, was nur das Projekt-Team braucht

**Praxis-Tipp:** Finale Versionen ins DMS überführen und mit Projekt verknüpfen, Arbeitsdateien als Projekt-Dateien belassen.

---

**F: Kann ich Projekte in Prozesse einbinden?**

**Antwort:**
Ja! Das ist eine mächtige Kombination:

**Szenario:** Prozess "Produkt-Launch" beinhaltet Projektphase

**Schritt-für-Schritt:**
1. Erstelle Prozess im Prozess-Modul (z.B. "Produkt-Launch")
2. Füge Aktivität hinzu: "Marketing-Projekt durchführen"
3. In Aktivität: Feld "Verknüpftes Projekt" auswählen
4. Wähle bestehendes Projekt oder erstelle neues

**Vorteile:**
- Projekt-Status wird in Prozess-Übersicht angezeigt
- Prozess-Dokumente können mit Projekt verknüpft werden
- Klare Verantwortlichkeiten (Prozess-Owner vs. Projektleitung)
- Audit-Trail über Prozess + Projekt

**Beispiel:**
```
Prozess: Produkt-Launch
  └─ Phase 1: Marktanalyse (Prozess-Aktivität)
  └─ Phase 2: Produktentwicklung (Projekt verknüpft)
       └─ Projekt: "Entwicklung Widget 2.0"
            └─ Team, Budget, Meilensteine
  └─ Phase 3: Marketing-Kampagne (Projekt verknüpft)
```

---

**F: Wie nutze ich Projekt-Hierarchien (Parent/Child)?**

**Antwort:**
Projekt-Hierarchien helfen bei komplexen Vorhaben:

**Wann verwenden?**
- ✅ Grossprojekte mit mehreren Teilprojekten
- ✅ Programme mit mehreren Projekten
- ✅ Abhängige Projekte (z.B. Phase 1 → Phase 2)

**Einrichtung:**
1. Erstelle "Parent-Projekt" (Hauptprojekt)
2. Erstelle "Child-Projekte" (Teilprojekte)
3. In Child-Projekt: "Details bearbeiten" → Feld "Eltern-Projekt"
4. Wähle Parent-Projekt aus

**Vorteile:**
- Übersichtliche Struktur
- Aggregierte Budget-Übersicht (Parent zeigt Summe aller Children)
- Reports über alle Teilprojekte
- Klare Verantwortlichkeiten pro Ebene

**Beispiel:**
```
📦 Parent: Digitalisierungs-Initiative 2025
   ├─ Child 1: CRM-Einführung
   ├─ Child 2: Website Relaunch
   └─ Child 3: Intranet-Modernisierung

Budget Parent: 1'200h (Summe aller Children)
Status Parent: "In Arbeit" (wenn mind. 1 Child "In Arbeit")
```

**Praxis-Tipp:** Nutze Parent-Projekt für Programm-Management und Reporting, Child-Projekte für operative Umsetzung.

---

## 🚨 Troubleshooting - Häufige Fehler und Lösungen

### Problem: "Ich kann kein Projekt erstellen"

**Mögliche Ursachen:**

1. **Fehlende Berechtigung:**
   - Lösung: Prüfe, ob du die Berechtigung "Projekt hinzufügen" hast
   - Wo prüfen? "Einstellungen" → "Meine Berechtigungen"
   - Wer kann helfen? ELIZA-Administrator

2. **Modul nicht aktiviert:**
   - Lösung: ELIZA-Admin muss Projekt-Modul aktivieren
   - Wo aktivieren? Admin-Bereich → Constance → `PROJECTS_ENABLED`

3. **Browser-Problem:**
   - Lösung: Cache leeren (Ctrl+Shift+R) oder anderen Browser testen

**Quick-Check:**
```
□ Berechtigung vorhanden?
□ Modul aktiviert?
□ Andere User haben gleiches Problem?
```

---

### Problem: "Zeit kann nicht auf Projekt erfasst werden"

**Ursache:** Zeit wird auf **Kostenstellen** erfasst, nicht direkt auf Projekten.

**Lösung:**
1. Erstelle mindestens eine Kostenstelle im Projekt
2. Gehe zu "Zeiterfassung" (Hauptmenü)
3. Wähle Kostenstelle aus Dropdown
4. Erfasse Zeit

**Häufiger Fehler:** Projekt ohne Kostenstellen erstellt.

**Präventiv:** Lege beim Projektstart sofort Kostenstellen an.

---

### Problem: "Projekt erscheint nicht in meiner Übersicht"

**Mögliche Ursachen:**

1. **Filter aktiv:**
   - Lösung: Prüfe Filter in Projekt-Übersicht
   - Zurücksetzen: "Filter löschen" Button

2. **Nicht als Mitwirkender hinzugefügt:**
   - Lösung: Federführung muss dich als Mitwirkenden hinzufügen
   - Weg: Projekt → "Team" → "+ Mitwirkende hinzufügen"

3. **Projekt archiviert:**
   - Lösung: Filter "Archivierte anzeigen" aktivieren

**Quick-Check:**
```
□ Filter zurückgesetzt?
□ Bin ich Mitwirkender?
□ Ist Projekt aktiv (nicht archiviert)?
```

---

### Problem: "Budget-Ampel stimmt nicht"

**Mögliche Ursachen:**

1. **Zeiterfassung auf falscher Kostenstelle:**
   - Lösung: Prüfe Zeiteinträge → Korrigiere Kostenstellen-Zuordnung

2. **Budget nicht gesetzt:**
   - Lösung: Kostenstelle → "Budget bearbeiten" → Budget eingeben

3. **Cache-Problem:**
   - Lösung: Seite neu laden (F5)

**Ampel-Logik nochmal:**
- 🟢 0-75% verbraucht
- 🟡 76-90% verbraucht
- 🔴 91-100% verbraucht
- ⚫ >100% überschritten

---

### Problem: "Dokument kann nicht mit Projekt verknüpft werden"

**Mögliche Ursachen:**

1. **DMS-Modul nicht aktiviert:**
   - Lösung: Admin muss `DMS_ENABLED` aktivieren

2. **Dokument nicht freigegeben:**
   - Lösung: Dokument muss mindestens Status "Freigegeben" haben

3. **Fehlende Berechtigung:**
   - Lösung: Du brauchst Lese-Rechte auf DMS-Dokument

**Quick-Check:**
```
□ DMS-Modul aktiv?
□ Dokument freigegeben?
□ Berechtigung vorhanden?
```

---

### Problem: "Status kann nicht geändert werden"

**Mögliche Ursachen:**

1. **Fehlende Rolle:**
   - Nur Federführung und Admins können Status ändern
   - Lösung: Wende dich an Federführung

2. **Genehmigungskriterien nicht erfüllt:**
   - Bei Wechsel "In Prüfung" → "Freigegeben" müssen Kriterien erfüllt sein
   - Lösung: Prüfe Genehmigungskriterien, erfülle diese

3. **Workflow-Einschränkung:**
   - Einige Status-Übergänge sind nicht erlaubt
   - Beispiel: Nicht direkt von "Entwurf" zu "Abgeschlossen"

---

### Problem: "Meilenstein-Termin überschritten, aber kein Alarm"

**Erklärung:** ELIZA hat aktuell keine automatischen Alarm-Benachrichtigungen für überschrittene Meilensteine.

**Workarounds:**

1. **Manuelle Überwachung:**
   - Wöchentlicher Check der Meilenstein-Übersicht
   - Filtere nach "Überfällig"

2. **Dashboard-Nutzung:**
   - Dashboard zeigt überfällige Meilensteine mit ⚠️

3. **Kalendar-Integration:**
   - Trage Meilensteine in deinen Kalender ein
   - Setze Reminder 1 Woche vorher

**Feature-Request:** Automatische E-Mail-Benachrichtigungen bei Meilenstein-Überschreitung (auf Roadmap).

---

### Problem: "Kann Projekt nicht löschen"

**Ursache:** Projekte mit erfasster Zeit oder verknüpften Dokumenten können nicht gelöscht werden (Datenintegrität).

**Lösung:**

**Option 1: Archivieren** (empfohlen)
- Projekt → "Archivieren"
- Projekt wird ausgeblendet, Daten bleiben erhalten

**Option 2: Löschen erzwingen** (nur Admin)
- Admin-Bereich → Projects → Projekt auswählen
- "Löschen" Button → Bestätige Löschung
- ⚠️ Vorsicht: Löscht alle Daten unwiderruflich

**Best Practice:** Archiviere statt löschen → Audit-Trail bleibt erhalten.

---

## ✅ Erweiterte Checklisten

### Checkliste: Projekt-Start

**Phase 1: Planung (Vor Projektbeginn)**

- [ ] **Projekt-Idee dokumentiert:** Kurzbeschreibung, Ziele, Nutzen
- [ ] **Stakeholder identifiziert:** Wer ist betroffen? Wer entscheidet?
- [ ] **Grobschätzung erstellt:** Budget (Stunden/CHF), Dauer, Ressourcen
- [ ] **Genehmigung eingeholt:** Falls erforderlich (>100h oder >CHF 50k)
- [ ] **Projekt in ELIZA erstellt:** Titel, Beschreibung, Ziele eingegeben
- [ ] **Klassifikation gesetzt:** Normal oder Vertraulich
- [ ] **Team zusammengestellt:** Federführung, Admins, Mitwirkende definiert
- [ ] **Kostenstellen angelegt:** 5-10 Kostenstellen basierend auf Projektphasen
- [ ] **Budgets zugewiesen:** Pro Kostenstelle realistisches Stunden-Budget
- [ ] **Meilensteine definiert:** 3-8 Meilensteine mit realistischen Terminen
- [ ] **Status gesetzt:** "Entwurf" → "Geplant" → "In Prüfung" (falls nötig)

**Phase 2: Kick-off (Projektbeginn)**

- [ ] **Kick-off Meeting durchgeführt:** Team, Ziele, Rollen besprochen
- [ ] **Kommunikationsplan erstellt:** Wer berichtet wann an wen?
- [ ] **DMS-Verknüpfungen:** Projektauftrag, Pflichtenheft verknüpft
- [ ] **Status geändert:** "Freigegeben" → "In Arbeit"
- [ ] **Erste Zeiterfassung:** Team erfasst erste Stunden
- [ ] **Dashboard-Check:** Alle Projekt-Infos korrekt angezeigt?

**Phase 3: Erste Woche**

- [ ] **Erstes Wochen-Update:** Status-Check mit Team
- [ ] **Budget-Check:** Ampeln im grünen Bereich?
- [ ] **Probleme identifiziert:** Risiken oder Blocker dokumentiert
- [ ] **Nächste Schritte:** Aufgaben für kommende Woche verteilt

---

### Checkliste: Projekt-Durchführung (Laufende Überwachung)

**Wöchentlich:**

- [ ] **Budget-Ampeln prüfen:** Alle Kostenstellen im grünen/gelben Bereich?
- [ ] **Zeiterfassung prüfen:** Erfassen alle Team-Mitglieder Zeit?
- [ ] **Meilenstein-Check:** Sind wir auf Kurs?
- [ ] **Probleme eskalieren:** Blocker an Federführung melden
- [ ] **Team-Update:** Kurzes Stand-up oder Status-Mail

**Monatlich:**

- [ ] **Detaillierter Budget-Report:** Soll/Ist-Vergleich pro Kostenstelle
- [ ] **Stakeholder-Kommunikation:** Report an Auftraggeber/Management
- [ ] **Risiko-Review:** Sind neue Risiken entstanden?
- [ ] **Scope-Check:** Sind wir noch im ursprünglichen Scope?
- [ ] **Team-Zufriedenheit:** Kurzes Feedback-Gespräch mit Team

**Quartalsweise:**

- [ ] **Strategischer Review:** Passt Projekt noch zur Unternehmensstrategie?
- [ ] **Lessons Learned (Zwischenstand):** Was lief gut/schlecht?
- [ ] **Budget-Forecast:** Reicht Budget bis Projektende?
- [ ] **Termin-Forecast:** Können wir Deadline einhalten?

---

### Checkliste: Projekt-Abschluss

**Phase 1: Abschluss vorbereiten**

- [ ] **Alle Aufgaben erledigt:** Alle Kostenstellen abgeschlossen
- [ ] **Alle Meilensteine erreicht:** Oder bewusst verschoben/gestrichen
- [ ] **Lieferungen übergeben:** Alle Ergebnisse an Auftraggeber geliefert
- [ ] **Abnahme eingeholt:** Formelle Bestätigung durch Auftraggeber
- [ ] **Finale Zeiterfassung:** Alle Team-Mitglieder haben Zeit erfasst
- [ ] **Budget finalisiert:** Alle Kosten erfasst und verbucht

**Phase 2: Dokumentation**

- [ ] **Lessons Learned erstellt:** Was lief gut/schlecht? (siehe Template oben)
- [ ] **Projekt-Dokumentation vollständig:** Alle wichtigen Dokumente im DMS
- [ ] **Wissenstransfer sichergestellt:** Nachfolger/Betrieb eingewiesen
- [ ] **Abschlussbericht geschrieben:** Executive Summary für Management

**Phase 3: Formeller Abschluss**

- [ ] **Status auf "Abgeschlossen" gesetzt:** Finaler Status-Wechsel
- [ ] **Abschluss-Meeting durchgeführt:** Team-Feier, Dankeschön
- [ ] **Archivierung:** Projekt archivieren (optional)
- [ ] **Nachkalkulation:** Soll/Ist-Vergleich für zukünftige Schätzungen

**Phase 4: Nachbereitung**

- [ ] **Lessons Learned geteilt:** Mit anderen Projektleitern teilen
- [ ] **Best Practices aktualisiert:** Falls neue Erkenntnisse
- [ ] **Follow-up Termin gesetzt:** 3-6 Monate nach Abschluss (Post-Review)

---

## ⚡ Quick Reference - Tägliche Aufgaben

### Als Projektleiter (Federführung):

| Aufgabe | Weg in ELIZA | Häufigkeit |
|---------|--------------|------------|
| **Budget-Check** | Projekt → Kostenstellen → Ampeln prüfen | Täglich |
| **Zeiterfassung prüfen** | Projekt → Zeiterfassung → Filter: "Letzte 7 Tage" | Täglich |
| **Team-Updates lesen** | Projekt → Aktivitäts-Stream | Täglich |
| **Meilensteine prüfen** | Projekt → Meilensteine → Filter: "Überfällig" | Wöchentlich |
| **Status aktualisieren** | Projekt → Details → Status ändern | Bei Bedarf |
| **Report erstellen** | Projekt → Dashboard → Screenshot + Export | Wöchentlich/Monatlich |

### Als Mitwirkender:

| Aufgabe | Weg in ELIZA | Häufigkeit |
|---------|--------------|------------|
| **Zeit erfassen** | Zeiterfassung → Kostenstelle wählen → Eintragen | Täglich |
| **Aufgaben prüfen** | Projekt → Kostenstellen → Meine Aufgaben | Täglich |
| **Probleme melden** | Projekt → Notizen/Kommentar → @Federführung | Bei Bedarf |
| **Dokumente suchen** | Projekt → Dokumente → Suche | Bei Bedarf |

---

## 💡 Tipps für Effizienz

### Tastaturkürzel (Browser):

- `Ctrl + K` → Globale Suche (schneller Zugriff auf Projekte)
- `Ctrl + S` → Formular speichern
- `Ctrl + Shift + R` → Seite neu laden (Cache löschen)

### ELIZA-Shortcuts:

- **Favoriten:** Nutze Favoriten für häufig verwendete Projekte (Stern-Icon)
- **Filter speichern:** Erstelle Filter für "Meine Projekte" und speichere diese
- **Dashboard-Widgets:** Passe Dashboard an deine Bedürfnisse an

### Zeit sparen:

1. **Batch-Erfassung:** Erfasse Zeit für ganze Woche auf einmal (z.B. Freitagnachmittag)
2. **Templates nutzen:** Erstelle Projekt-Templates für wiederkehrende Projekttypen
3. **Kommentare nutzen:** Dokumentiere wichtige Entscheidungen direkt im Aktivitäts-Stream
4. **Mobile App:** Erfasse Zeit unterwegs (falls verfügbar)

### Best Practices für Projekt-Namen:

✅ **Gut:**
- "Marketing - Website Relaunch 2025"
- "IT - CRM-System Einführung Q2"
- "HR - Mitarbeiter-Onboarding Process"

❌ **Schlecht:**
- "Projekt 123"
- "Website"
- "Diverses"

**Regel:** [Abteilung] - [Projekttyp] - [Spezifikation] [Jahr/Quartal]

---

## 📚 Zusammenfassung

### Die 10 goldenen Regeln für erfolgreiches Projektmanagement in ELIZA:

1. ✅ **Plane sorgfältig:** Investiere Zeit in Projektplanung (Kostenstellen, Budget, Meilensteine)
2. ✅ **Team einbinden:** Stelle sicher, dass alle Mitwirkenden ihre Rollen kennen
3. ✅ **Budget überwachen:** Prüfe Ampeln täglich, reagiere bei 🟡 Orange
4. ✅ **Zeit erfassen:** Erfasse Zeit konsequent und zeitnah
5. ✅ **Kommuniziere proaktiv:** Informiere Stakeholder regelmässig
6. ✅ **Dokumentiere Entscheidungen:** Nutze Aktivitäts-Stream und DMS
7. ✅ **Setze realistische Ziele:** Überschätzung ist besser als Unterschätzung
8. ✅ **Nutze Status richtig:** Gehe Workflow-Schritte systematisch durch
9. ✅ **Lerne aus Erfahrungen:** Schreibe Lessons Learned nach Projektabschluss
10. ✅ **Bleibe flexibel:** Passe Budget und Scope an, wenn nötig

### Was macht ein gutes Projekt aus?

| Aspekt | Gutes Projekt | Schlechtes Projekt |
|--------|---------------|-------------------|
| **Planung** | Klare Ziele, realistische Budgets | Vage Beschreibung, keine Budgets |
| **Team** | Rollen klar verteilt, motiviert | Unklare Verantwortlichkeiten |
| **Kommunikation** | Regelmässige Updates, transparent | Sporadisch, nur bei Problemen |
| **Budget** | Überwacht, rechtzeitig korrigiert | Ignoriert, Überraschungen am Ende |
| **Dokumentation** | Vollständig, nachvollziehbar | Lückenhaft, nur im Kopf |
| **Abschluss** | Strukturiert, mit Lessons Learned | Projekt "versandet", kein Abschluss |

---

## 🚀 Nächste Schritte

### Für Einsteiger:

1. ✅ Lies Kapitel [Erste Schritte]({{< ref "01-erste-schritte" >}}) - Grundlagen verstehen
2. ✅ Erstelle dein erstes Test-Projekt (klein, <20h)
3. ✅ Experimentiere mit Kostenstellen und Zeiterfassung
4. ✅ Lies Kapitel [Status und Workflow]({{< ref "04-status-workflow" >}}) - Status-Workflow verstehen

### Für Fortgeschrittene:

1. ✅ Lies Kapitel [Integrationen]({{< ref "12-integrationen" >}}) - DMS und Prozess-Integration
2. ✅ Nutze Projekt-Hierarchien für komplexe Vorhaben
3. ✅ Experimentiere mit Genehmigungskriterien
4. ✅ Erstelle Custom-Reports für Management

### Für Projektleiter:

1. ✅ Lies Kapitel [Berechtigungskonzept]({{< ref "11-berechtigungskonzept" >}}) - Team-Rechte verstehen
2. ✅ Etabliere Report-Rhythmen (wöchentlich, monatlich)
3. ✅ Erstelle Projekt-Templates für wiederkehrende Projekttypen
4. ✅ Teile Best Practices mit anderen Projektleitern

---

## 📞 Weitere Hilfe

- **User Manual Hauptseite:** [Übersicht]({{< ref "index" >}})
- **Visualisierungen:** Siehe [Visualisierungen]({{< ref "13-visualisierungen" >}})
- **Support:** support@eliza.swiss
- **Community:** ELIZA User Forum (intern)

---

**Viel Erfolg mit deinen Projekten in ELIZA! 🚀**
