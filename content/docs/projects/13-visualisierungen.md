---
title: "Visualisierungen"
description: ""
weight: "13"
tags:
  - "gantt"
  - "kalender"
  - "dashboard"
  - "visualisierung"
  - "workflow"
  - "kanban"
---


# Visualisierungen

ELIZA bietet dir verschiedene Visualisierungsoptionen für deine Projekte. Wähle die passende Ansicht je nach Fragestellung: Gantt für Zeitplanung, Kalender für Termine, Dashboard für Überblick und Workflow für Status-Management.

## Übersicht Visualisierungen

| Visualisierung | Hauptzweck | Beste Verwendung | Navigation |
|---|---|---|---|
| **Gantt-Diagramm** 📊 | Zeitplanung | Portfolio-Management, Ressourcen-Planung | Dashboard → Projekte → Gantt |
| **Kalender-Ansicht** 📅 | Termin-Übersicht | Meilenstein-Tracking, Frist-Überwachung | Dashboard → Projekte → Kalender |
| **Dashboard** 🏠 | Status-Überblick | Täglicher Check, Schnellzugriff | Dashboard → Projekte |
| **Workflow-Ansicht** 🔄 | Prozess-Management | Genehmigungen, Pipeline-Übersicht | Dashboard → Projekte → Workflow |

## Gantt-Diagramm

**Navigation: Dashboard → Projekte → Gantt**

Das Gantt-Diagramm visualisiert deine Projekte auf einer Zeitachse und zeigt dir auf einen Blick alle laufenden und geplanten Aktivitäten.

### Was wird angezeigt?

**Projekt-Balken:**
- Jedes Projekt mit Start-/End-Datum wird als horizontaler Balken dargestellt
- Länge des Balkens entspricht der Projektdauer
- Farbcodierung nach Projekttyp oder Status

**Projektphasen:**
- Unter jedem Projekt-Balken werden Phasen als Unter-Balken angezeigt
- Ermöglicht detaillierte Planung innerhalb eines Projekts
- Phasen-Überlappungen werden sofort sichtbar

**Meilensteine:**
- Als Diamant-Marker (◆) auf der Zeitachse dargestellt
- Farbcodierung nach Ampel-Bewertung (🟢🟡🔴)
- Klick auf Marker öffnet Meilenstein-Details

**Zeitachse:**
- Horizontale Achse zeigt Monate, Quartale oder Wochen
- Heute-Linie markiert aktuelles Datum
- Zoom-Funktion für unterschiedliche Zeiträume

### Gantt-Steuerung

**Zoom-Funktionen:**
```
Zeitraum          Ansicht
─────────────────────────────────
Jahr              Quartals-Ansicht
Quartal           Monats-Ansicht
Monat             Wochen-Ansicht
Woche             Tages-Ansicht
```

**Navigation:**
- Scrollen: Zeitachse horizontal verschieben
- Zoom +/-: Zeitraum vergrößern/verkleinern
- Heute: Zurück zum aktuellen Datum
- Vollbild: Gantt-Diagramm maximieren

**Filter-Optionen:**

| Filter | Optionen | Verwendung |
|---|---|---|
| **Projekttyp** | Intern, Kundenprojekt, Entwicklung, etc. | Fokus auf spezifische Projekt-Kategorien |
| **Status** | Geplant, In Arbeit, Abgeschlossen, etc. | Aktive vs. abgeschlossene Projekte |
| **Zeitraum** | Nächste 30 Tage, Quartal, Jahr, Custom | Zeitliche Eingrenzung |
| **Team** | Nach Federführung oder Beteiligung | Projekte bestimmter Teams |
| **Orgunit** | Nach Organisationseinheit | Abteilungs-spezifische Ansicht |

### Abhängigkeiten visualisieren

Gantt-Diagramme zeigen auch Projekt-Abhängigkeiten:

**Abhängigkeits-Typen:**
- **Ende-Start** (FS): Projekt B startet nach Ende von Projekt A
- **Start-Start** (SS): Beide Projekte starten gleichzeitig
- **Ende-Ende** (FF): Beide Projekte enden gleichzeitig
- **Start-Ende** (SF): Projekt B endet, wenn Projekt A startet

**Visuelle Darstellung:**
- Pfeile zwischen abhängigen Projekten
- Kritischer Pfad wird rot hervorgehoben
- Verzögerungen werden sofort sichtbar

### Ressourcen-Konflikte erkennen

**Überlappungen:**
- Projekte mit gleichen Team-Mitgliedern werden vertikal gruppiert
- Überschneidungen werden farblich markiert
- Warnung bei Überlastung (>100% Auslastung)

**Konflikt-Indikatoren:**
- ⚠️ Gelb: 80-100% Auslastung
- 🔴 Rot: >100% Auslastung
- ℹ️ Info-Icon für Details

### Vorteile Gantt-Diagramm

✅ **Zeitliche Übersicht**: Alle Projekte auf einen Blick
✅ **Überlappungen erkennen**: Konflikte sofort sichtbar
✅ **Ressourcen-Planung**: Team-Auslastung visualisiert
✅ **Meilenstein-Tracking**: Wichtige Termine im Fokus
✅ **Portfolio-Management**: Strategische Projekt-Planung
✅ **Abhängigkeiten**: Kritische Pfade identifizieren

> **💡 Tipp:** Für Gantt-Darstellung müssen Projekte Start-/End-Datum haben! Projekte ohne Datum werden nicht angezeigt.

### Gantt-Export

Du kannst das Gantt-Diagramm exportieren:

- **PDF**: Für Berichte und Präsentationen
- **PNG**: Für Einbindung in Dokumente
- **Excel**: Für weitere Analysen
- **MS Project**: Für Import in MS Project

## Kalender-Ansicht

**Navigation: Dashboard → Projekte → Kalender**

Die Kalender-Ansicht zeigt dir alle projekt-relevanten Termine in einer übersichtlichen Kalender-Darstellung. Ideal für Meilenstein-Tracking und Frist-Überwachung.

### Was wird angezeigt?

**Meilensteine:**

- Darstellung als Kalender-Events
- Farbcodierung nach Ampel-Bewertung (🟢🟡🔴)
- Titel des Meilensteins wird angezeigt
- Icon zeigt Projekt-Typ

**Projekt-Fristen:**

- End-Datum von Projekten als Deadline markiert
- Projekt-Start als Event (optional einblendbar)
- Phasen-Übergänge als Marker

**Farbcodierung:**

| Farbe | Bedeutung | Verwendung |
|---|---|---|
| 🟢 Grün | Ampel grün | Meilenstein on track |
| 🟡 Orange | Ampel orange | Gefährdet, Aufmerksamkeit nötig |
| 🔴 Rot | Ampel rot | Kritisch, überfällig |
| 🔵 Blau | Information | Projekt-Start/Ende |
| ⚫ Grau | Abgeschlossen | Erledigte Meilensteine |

### Ansichten

**Monats-Ansicht:**

- Übersicht über einen ganzen Monat
- Mehrere Events pro Tag möglich
- Ideal für Planung und Übersicht
- Schnelle Navigation zwischen Monaten

**Wochen-Ansicht:**

- Detaillierte Wochenplanung
- Tagesweise Aufteilung
- Stundengenau (optional)
- Perfekt für Sprint-Planung

**Tages-Ansicht:**

- Alle Events eines Tages im Detail
- Zeitslots sichtbar
- Konflikte werden hervorgehoben
- Für intensive Arbeits-Tage

**Listen-Ansicht:**

- Chronologische Liste aller Events
- Filterbar nach Zeitraum
- Sortierbar nach verschiedenen Kriterien
- Export-freundlich

### Kalender-Funktionen

**Interaktive Features:**

- **Klick auf Event**: Öffnet Meilenstein-Detail oder Projekt
- **Drag & Drop**: Verschieben von Meilensteinen (mit Berechtigung)
- **Doppelklick**: Neuen Meilenstein erstellen
- **Hover**: Tooltip mit zusätzlichen Informationen

**Navigation:**

```text
Heute           Zurück zum aktuellen Datum
◀ ▶             Vor/zurück (Monat/Woche/Tag)
Datum-Picker    Direkt zu spezifischem Datum
Filter          Events ein-/ausblenden
```

**Export-Optionen:**

- **iCal**: Export für Outlook, Google Calendar, Apple Calendar
- **PDF**: Druckbare Kalender-Ansicht
- **Excel**: Liste aller Events mit Details
- **Sync**: Automatische Synchronisation mit externem Kalender

### Kalender-Filter

Du kannst die Kalender-Ansicht filtern nach:

| Filter | Optionen | Effekt |
|---|---|---|
| **Projekttyp** | Intern, Kunde, Entwicklung, etc. | Zeigt nur Events dieser Projekte |
| **Ampel-Status** | 🟢🟡🔴 | Zeigt nur Events mit bestimmtem Status |
| **Eigene Projekte** | Beteiligung | Zeigt nur Events aus deinen Projekten |
| **Orgunit** | Organisationseinheit | Zeigt nur Events der Abteilung |
| **Event-Typ** | Meilenstein, Start, Ende, Phase | Spezifische Event-Typen |

### Kalender-Benachrichtigungen

Konfiguriere Erinnerungen für wichtige Termine:

**Benachrichtigungs-Optionen:**

- **E-Mail**: 1 Tag/Woche vor Meilenstein
- **Push**: Browser-Benachrichtigung
- **Dashboard**: Widget mit überfälligen Meilensteinen
- **Digest**: Wöchentliche Übersicht kommender Termine

## Dashboard

**Navigation: Dashboard → Projekte**

Das Projekt-Dashboard ist dein zentraler Einstiegspunkt für alle Projekt-Aktivitäten. Es bietet dir einen schnellen Überblick über relevante Projekte und ermöglicht direkten Zugriff auf wichtige Funktionen.

### Dashboard-Widgets

**Meine Projekte:**

- Zeigt alle Projekte, an denen du beteiligt bist
- Sortiert nach letzter Aktivität
- Schnellzugriff-Buttons (Bearbeiten, Dateien, Timetracker)
- Status-Badge für jeden Eintrag
- Favoriten-Markierung möglich

**Aktive Projekte:**

- Filtert Projekte mit Status "In Arbeit"
- Sortiert nach Priorität oder Deadline
- Zeigt Fortschritt (wenn Kostenstellen aktiviert)
- Ampel-Status für schnellen Überblick
- Klick öffnet Projekt-Detail

**Geplante Projekte:**

- Zeigt Projekte mit Status "geplant" oder "in Prüfung"
- Wichtig für Ressourcen-Planung
- Zeigt geplantes Start-Datum
- Hinweis wenn Genehmigung aussteht

**Überfällige Meilensteine:**

- Kritisches Widget für Deadline-Tracking
- Zeigt Meilensteine mit Datum < heute
- Nur Ampel rot/orange
- Direkt-Link zum Meilenstein
- Eskalations-Button für kritische Fälle

**Projekte nach Typ:**

- Gruppierung nach Projekttyp (Intern, Kunde, etc.)
- Anzahl pro Typ als Badge
- Klick öffnet gefilterte Liste
- Hilfreich für Portfolio-Übersicht

**Projekt-Status Übersicht:**

- Ampel-Status aggregiert über alle Projekte
- Anzahl grün/orange/rot als Kacheln
- Trend-Indikator (↗→↘)
- Drill-down zu Problem-Projekten

**Meine Zeitbuchungen (diese Woche):**

- Integration mit Timetracker
- Gebuchte Stunden pro Projekt
- Vergleich mit Budget (wenn Kostenstelle)
- Quick-Add Button für neue Buchung

**Kommende Meilensteine (nächste 30 Tage):**

- Timeline der anstehenden Meilensteine
- Farbcodierung nach Ampel
- Countdown bis Fälligkeit
- Reminder aktivieren möglich

### Widget-Konfiguration

Du kannst das Dashboard personalisieren:

**Layout:**

```text
Standard-Layout:     3 Spalten, Widgets gleichmäßig verteilt
Kompakt-Layout:      2 Spalten, mehr Informationsdichte
Management-Layout:   Fokus auf Status-Übersichten
Team-Layout:         Fokus auf Team-Projekte
```

**Personalisierung:**

- Drag & Drop: Widgets umordnen
- Ausblenden: Nicht benötigte Widgets deaktivieren
- Erweitern: Widget-Größe anpassen
- Filter: Standard-Filter für jedes Widget setzen

### Dashboard-Filter

Globale Filter beeinflussen alle Widgets:

| Filter | Optionen | Effekt |
|---|---|---|
| **Zeitraum** | Aktuelles Quartal, Jahr, Custom | Zeitliche Eingrenzung |
| **Orgunit** | Eigene, Alle, Spezifische | Abteilungs-Filter |
| **Projekttyp** | Intern, Kunde, Entwicklung, etc. | Typ-spezifische Ansicht |
| **Status** | Aktiv, Geplant, Alle | Lebenszyklus-Filter |
| **Beteiligung** | Federführung, Mitwirkung, Alle | Rollen-Filter |

### Dashboard-Aktionen

Schnellzugriff auf häufige Aktionen:

**Globale Aktionen:**

- ➕ Neues Projekt erstellen
- 📊 Gantt-Ansicht öffnen
- 📅 Kalender öffnen
- 🔄 Workflow-Ansicht öffnen
- 📈 Portfolio-Report generieren

**Widget-Aktionen:**

- 🔍 Filtern: Widget-spezifischer Filter
- ⬇️ Export: Widget-Daten exportieren
- ↻ Aktualisieren: Widget neu laden
- ⚙️ Konfiguration: Widget-Einstellungen

### Rollen-basierte Dashboards

Dashboard-Widgets variieren je nach Rolle:

**Projekt-Mitarbeiter:**

- Fokus auf eigene Projekte
- Zeitbuchungs-Widget prominent
- Eigene Meilensteine
- Team-Kalender

**Projekt-Admin:**

- Alle Projekte der Orgunit
- Status-Übersichten
- Genehmigungs-Queue
- Budget-Überwachung

**Management:**

- Portfolio-Übersicht
- Aggregierte KPIs
- Trend-Analysen
- Risiko-Dashboard
- Ressourcen-Auslastung

**Gast (externe Partner):**

- Nur zugewiesene Projekte
- Eingeschränkte Aktionen
- Fokus auf Deliverables
- Kommunikations-Widget

## Projekt-Workflow Ansicht

**Navigation: Dashboard → Projekte → Workflow**

Die Workflow-Ansicht zeigt deine Projekte in einer Kanban-ähnlichen Board-Darstellung. Perfekt für Prozess-Management, Genehmigungsworkflows und Pipeline-Übersicht.

### Kanban-Board-Struktur

Projekte sind in Spalten nach Status gruppiert:

| Status | Bedeutung | Typische Verweildauer |
|---|---|---|
| **Geplant** | Ideen, noch nicht gestartet | Tage bis Wochen |
| **In Prüfung** | Genehmigung läuft | 1-5 Tage |
| **Freigegeben** | Genehmigt, bereit zum Start | 0-7 Tage |
| **In Arbeit** | Aktive Umsetzung | Wochen bis Monate |
| **Abgeschlossen** | Erfolgreich beendet | - |
| **Verschoben** | Temporär pausiert | Wochen bis Monate |
| **Abgebrochen** | Beendet ohne Erfolg | - |

### Projekt-Karten

Jede Karte zeigt:

**Header:**

- Projekt-Titel (klickbar)
- Projekt-Nr. als Badge
- Typ-Icon (Intern/Kunde/etc.)

**Content:**

- Kurzbeschreibung (erste 100 Zeichen)
- Federführung (Avatar + Name)
- Ampel-Status (🟢🟡🔴)
- Fortschritt-Balken (wenn Kostenstellen)

**Footer:**

- Start-/End-Datum
- Anzahl Meilensteine
- Anzahl offene Aufgaben
- Team-Größe (Avatar-Stack)

### Workflow-Funktionen

**Drag & Drop:**

- Ziehe Karte in andere Spalte um Status zu ändern
- Automatische Status-Änderung im Projekt
- Berechtigung erforderlich (change_project)
- Audit-Log wird automatisch erstellt

**Status-Übergänge:**

```text
Geplant → In Prüfung → Freigegeben → In Arbeit → Abgeschlossen
           ↓              ↓            ↓
       Abgebrochen    Abgebrochen  Verschoben
```

**Spalten-Konfiguration:**

- Spalten ein-/ausblenden
- Sortierung innerhalb Spalte (Priorität, Datum, Titel)
- WIP-Limits setzen (Work In Progress)
- Swimlanes nach Orgunit oder Typ

### WIP-Limits (Work In Progress)

Verhindere Überlastung durch Limits:

**Beispiel-Konfiguration:**

| Status | WIP-Limit | Effekt |
|---|---|---|
| In Prüfung | 5 Projekte | Max. 5 Projekte gleichzeitig zur Genehmigung |
| In Arbeit | 10 Projekte | Max. 10 aktive Projekte pro Team |
| Freigegeben | 3 Projekte | Nur 3 Projekte warten auf Start |

**Visuelle Indikatoren:**

- 🟢 Grün: Unter Limit (0-75%)
- 🟡 Orange: Nahe Limit (76-99%)
- 🔴 Rot: Limit erreicht (100%)
- 🚫 Blockiert: Limit überschritten, Drag & Drop deaktiviert

### Workflow-Filter

Filter reduzieren Komplexität bei vielen Projekten:

**Standard-Filter:**

- Nach Projekttyp
- Nach Orgunit
- Nach Federführung
- Nach Zeitraum (Start-Datum)
- Nach Ampel-Status

**Erweiterte Filter:**

- Nach Budget-Status (Kostenstellen)
- Nach Risiko-Level
- Nach Kundenzuordnung (CRM)
- Nach Tags/Labels

### Workflow-Metriken

Das Board zeigt wichtige Kennzahlen:

**Lead Time:**

- Durchschnittliche Zeit von "Geplant" bis "Abgeschlossen"
- Identifiziere Engpässe
- Vergleich mit Benchmark

**Cycle Time:**

- Zeit von "In Arbeit" bis "Abgeschlossen"
- Misst Umsetzungs-Effizienz
- Team-Performance-Indikator

**Throughput:**

- Anzahl abgeschlossener Projekte pro Zeitraum
- Kapazitäts-Planung
- Trend-Analyse

**Bottleneck-Analyse:**

- Welche Spalte hat längste Verweildauer?
- Wo stauen sich Projekte?
- Automatische Alerts bei Stau

### Team-Workflow

Optimiert für Team-Zusammenarbeit:

**Kollaborations-Features:**

- Live-Updates wenn andere User Karten verschieben
- Kommentare direkt auf Karte
- @Mentions für Team-Mitglieder
- Aktivitäts-Feed zeigt alle Änderungen

**Zuständigkeiten:**

- Farbcodierung nach Federführung
- Avatar-Stack zeigt alle Beteiligten
- Filter nach "Meine Projekte"
- Benachrichtigung bei Status-Änderung

## Praktische Beispiele

### Beispiel 1: Portfolio-Management mit Gantt (Geschäftsführung)

**Ausgangslage:**
- Marina ist Geschäftsführerin einer Software-Firma
- 8 parallele Projekte laufen
- Ressourcen-Engpässe müssen erkannt werden

**Gantt-Konfiguration:**

| Projekt | Start | Ende | Team | Status |
|---|---|---|---|---|
| Kundenportal Relaunch | 01.03.2025 | 31.05.2025 | 4 Entwickler | 🟢 On Track |
| Mobile App v2.0 | 15.03.2025 | 30.06.2025 | 5 Entwickler | 🟡 Risiko |
| ISO 27001 Zertifizierung | 01.02.2025 | 30.04.2025 | 2 QM | 🟢 On Track |
| Interne Tool-Migration | 01.04.2025 | 31.07.2025 | 3 Entwickler | 🟢 On Track |

**Gantt zeigt auf einen Blick:**

- **Überlappung März-April**: 3 Entwickler-Teams parallel (12 Personen)
- **Ressourcen-Konflikt**: Team hat nur 10 Entwickler → ⚠️ Überlastung
- **Kritischer Pfad**: Mobile App verzögert → beeinflusst Kundenportal
- **Lösung**: ISO-Projekt auf Mai verschieben, Entwickler freischaufeln

**Ergebnis:**
✅ Ressourcen-Konflikt erkannt und gelöst, bevor Verzögerungen entstehen
✅ Kritischer Pfad visualisiert, Stakeholder informiert
✅ Portfolio-Report für Board mit Gantt-Export erstellt

### Beispiel 2: Sprint-Planung mit Kalender (Agiles Team)

**Ausgangslage:**
- Tom ist Scrum Master eines 6-köpfigen Entwickler-Teams
- 2-Wochen-Sprints mit fixen Meilensteinen
- Team arbeitet an 2 parallelen Projekten

**Kalender-Konfiguration:**

**März 2025 - Meilensteine:**

| Datum | Event | Projekt | Ampel |
|---|---|---|---|
| 03.03. | Sprint 12 Review | Mobile App | 🟢 |
| 03.03. | Sprint 13 Planning | Mobile App | 🟢 |
| 10.03. | Feature Freeze Backend | Mobile App | 🟡 |
| 17.03. | Sprint 13 Review | Mobile App | 🟢 |
| 17.03. | Sprint 14 Planning | Mobile App | 🟢 |
| 24.03. | Beta Release | Mobile App | 🔴 |
| 31.03. | Sprint 14 Review | Mobile App | 🟢 |

**Kalender-Nutzung:**

- **Wochen-Ansicht**: Zeigt alle Sprint-Events der Woche
- **Farbcodierung**: 🔴 für Beta Release (kritisch), 🟢 für reguläre Sprints
- **iCal-Export**: Team synchronisiert mit Google Calendar
- **Reminder**: E-Mail 1 Tag vor jedem Review

**Problem erkannt:**

- 24.03. Beta Release zeigt 🔴 (gefährdet)
- Feature Freeze 10.03. zeigt 🟡 (verzögert)
- Kalender-Ansicht macht Verzug sofort sichtbar

**Massnahme:**

- Sprint 13 fokussiert auf kritische Features
- Beta Release auf 31.03. verschoben (Drag & Drop im Kalender)
- Stakeholder über Kalender-Export informiert

**Ergebnis:**
✅ Alle Sprint-Termine im Team-Kalender synchronisiert
✅ Verzögerungen frühzeitig durch Farbcodierung erkannt
✅ Beta Release erfolgreich zum neuen Termin ausgeliefert

### Beispiel 3: Executive Dashboard (Management)

**Ausgangslage:**
- Sarah ist CTO, verantwortlich für 15 Projekte
- Benötigt täglichen Status-Überblick ohne Details
- Fokus auf Risiken und Engpässe

**Dashboard-Konfiguration:**

**Management-Layout:**

| Widget | Anzeige | Status |
|---|---|---|
| **Projekt-Status Übersicht** | 🟢 8 Projekte / 🟡 5 Projekte / 🔴 2 Projekte | Trend ↘ (verschlechtert) |
| **Überfällige Meilensteine** | 3 kritische Meilensteine | Eskalation nötig |
| **Budget-Status** | 2 Projekte >90% Budget | ⚠️ Warnung |
| **Ressourcen-Auslastung** | IT: 105% / QM: 85% | IT überlastet |
| **Portfolio-Wert** | CHF 2.4M Gesamt-Budget | 68% bereits verbraucht |

**Dashboard-Nutzung am Morgen:**

1. **Quick Check (2 Minuten):**
   - Status-Übersicht zeigt 2 rote Projekte → Drill-down
   - Überfällige Meilensteine Widget → Eskalations-E-Mail an PM
   - Budget-Widget zeigt 2 kritische Projekte → Meeting ansetzen

2. **Wöchentliches Review (30 Minuten):**
   - Portfolio-Report aus Dashboard generieren
   - Trend-Analyse: Status verschlechtert sich (↘)
   - Ressourcen-Auslastung: IT-Team überlastet → Hiring-Bedarf

3. **Aktionen aus Dashboard:**
   - Rote Projekte: Status-Call mit PMs einberufen
   - Budget-Projekte: CFO informieren, Freigabe nötig
   - IT-Überlastung: Externes Team für 2 Monate buchen

**Ergebnis:**
✅ Täglicher Status-Check in 2 Minuten statt 30 Minuten
✅ Risiken frühzeitig erkannt und eskaliert
✅ Datenbasierte Entscheidungen (Hiring, Budget)

### Beispiel 4: Workflow-Optimierung mit Kanban (Projekt-Office)

**Ausgangslage:**
- Lisa leitet das Project Management Office (PMO)
- Genehmigungsprozess für neue Projekte dauert zu lang
- 12 Projekte "stecken" in verschiedenen Phasen

**Workflow-Board (Ausgangszustand):**

| Status | Anzahl | Problem |
|---|---|---|
| Geplant | 8 Projekte | Zu viele Ideen, keine Priorisierung |
| In Prüfung | 7 Projekte | 🔴 **Bottleneck!** WIP-Limit 5 überschritten |
| Freigegeben | 1 Projekt | Wartet auf Ressourcen |
| In Arbeit | 5 Projekte | Auslastung ok |

**Bottleneck-Analyse:**

- **Lead Time "In Prüfung"**: Durchschnittlich 14 Tage (Ziel: 5 Tage)
- **Ursache**: Zu viele Projekte gleichzeitig zur Prüfung, Gremium überlastet
- **Effekt**: Projekte starten verzögert, Teams warten

**Workflow-Optimierung:**

1. **WIP-Limit setzen:**
   - "In Prüfung": Max. 5 Projekte gleichzeitig
   - "Geplant": Priorisierung nach Business Value
   - Neue Projekte erst nach Abschluss alter Prüfungen

2. **Swimlanes einführen:**
   - "Express" (< CHF 50k): Schnelle Genehmigung
   - "Standard" (CHF 50-200k): Regulärer Prozess
   - "Strategisch" (> CHF 200k): Board-Genehmigung

3. **Metriken überwachen:**
   - Lead Time Target: 7 Tage (war 14)
   - Durchsatz: Min. 4 Projekte/Monat freigeben
   - Cycle Time: 30 Tage von Freigabe bis Abschluss

**Ergebnis nach 2 Monaten:**

| Metrik | Vorher | Nachher | Verbesserung |
|---|---|---|---|
| Lead Time "In Prüfung" | 14 Tage | 6 Tage | -57% ⬇️ |
| Durchsatz | 2.5 Projekte/Monat | 4.8 Projekte/Monat | +92% ⬆️ |
| Bottleneck | In Prüfung (7 Projekte) | Keiner (max. 5) | ✅ Gelöst |
| Team-Zufriedenheit | 3.2/5 | 4.5/5 | +41% ⬆️ |

**Ergebnis:**
✅ Genehmigungsprozess von 14 auf 6 Tage beschleunigt
✅ Bottleneck durch WIP-Limits beseitigt
✅ Durchsatz fast verdoppelt, mehr Projekte abgeschlossen

## Best Practices

### ✅ Richtige Visualisierung wählen

**Entscheidungs-Matrix:**

| Fragestellung | Beste Visualisierung | Grund |
|---|---|---|
| Welche Projekte laufen parallel? | Gantt | Zeitliche Überlappungen sichtbar |
| Wann sind die nächsten Meilensteine? | Kalender | Termin-Übersicht |
| Welche Projekte haben Probleme? | Dashboard | Schneller Status-Überblick |
| Wo staut sich der Genehmigungsprozess? | Workflow | Bottleneck-Analyse |
| Wie ausgelastet ist das Team? | Gantt | Ressourcen-Konflikte erkennbar |
| Was muss ich heute priorisieren? | Dashboard | Täglicher Check |

### ✅ Gantt-Diagramm optimal nutzen

**Do's:**

- ✅ Start-/End-Datum bei ALLEN Projekten setzen
- ✅ Projektphasen für Detail-Planung nutzen
- ✅ Realistische Zeiträume planen (Buffer einrechnen)
- ✅ Filter bei vielen Projekten (>10) nutzen
- ✅ Abhängigkeiten zwischen Projekten dokumentieren
- ✅ Regelmässig aktualisieren (wöchentlich)
- ✅ Export für Stakeholder-Reports nutzen

**Don'ts:**

- ❌ Projekte ohne Datum erstellen
- ❌ Zu optimistische Zeitpläne (kein Buffer)
- ❌ Abhängigkeiten ignorieren
- ❌ Gantt nur am Projekt-Start erstellen, dann vergessen
- ❌ Alle Projekte gleichzeitig anzeigen (unübersichtlich)

### ✅ Kalender effektiv einsetzen

**Do's:**

- ✅ Wichtige Meilensteine setzen (nicht jeden Task)
- ✅ Farben bewusst nutzen (Ampel-Bewertung)
- ✅ Fristen realistisch planen
- ✅ Regelmässig aktualisieren (nach jedem Sprint/Phase)
- ✅ iCal-Export für Team-Kalender nutzen
- ✅ Reminder für kritische Termine aktivieren
- ✅ Wochen-Ansicht für Sprint-Planung

**Don'ts:**

- ❌ Jeden Task als Event (zu viele Einträge)
- ❌ Falsche Farben verwenden (verwirrt Team)
- ❌ Überfällige Meilensteine ignorieren
- ❌ Kalender als statisches Dokument behandeln
- ❌ Team-Kalender nicht synchronisieren

### ✅ Dashboard personalisieren

**Do's:**

- ✅ Favoriten für häufig genutzte Projekte markieren
- ✅ Filter speichern (eigene Projekte, Orgunit)
- ✅ Layout an Rolle anpassen (Mitarbeiter vs. Management)
- ✅ Widgets priorisieren (wichtigste oben)
- ✅ Überfällige Meilensteine Widget prominent platzieren
- ✅ Täglichen Check zur Routine machen (morgens 5 Min.)
- ✅ Export-Funktion für Reports nutzen

**Don'ts:**

- ❌ Alle Widgets aktivieren (unübersichtlich)
- ❌ Dashboard ignorieren (veraltete Daten)
- ❌ Standard-Layout für alle Rollen (nicht optimal)
- ❌ Filter nicht nutzen (zu viele Projekte)
- ❌ Dashboard nur ansehen, nicht handeln

### ✅ Workflow-Board effizient nutzen

**Do's:**

- ✅ WIP-Limits setzen und einhalten
- ✅ Regelmässig Bottlenecks analysieren
- ✅ Drag & Drop für schnelle Status-Updates
- ✅ Metriken (Lead Time, Throughput) überwachen
- ✅ Swimlanes für verschiedene Projekt-Typen
- ✅ Team involvieren (Daily Standup am Board)
- ✅ Retrospektive: Was blockiert Workflow?

**Don'ts:**

- ❌ WIP-Limits ignorieren (Überlastung)
- ❌ Karten "vergessen" in Spalten
- ❌ Status manuell ändern statt Drag & Drop
- ❌ Bottlenecks nicht adressieren
- ❌ Board nur für sich nutzen (Team einbeziehen!)
- ❌ Metriken ignorieren (kein Continuous Improvement)

## Tipps für bessere Visualisierung

### Integration zwischen Visualisierungen

**Kombinierte Nutzung für maximalen Nutzen:**

1. **Morgen-Routine (5-10 Min.):**
   - Dashboard → Schneller Status-Check
   - Überfällige Meilensteine Widget → Kalender öffnen
   - Rote Projekte → Gantt für Details öffnen
   - Kritische Status-Übergänge → Workflow-Board checken

2. **Wöchentliches Review (30 Min.):**
   - Workflow-Board → Bottleneck-Analyse
   - Gantt → Ressourcen-Konflikte nächste 2 Wochen
   - Kalender → Kommende Meilensteine vorbereiten
   - Dashboard → Portfolio-Report generieren

3. **Monatliches Planning (1-2 Std.):**
   - Gantt → Neues Quartal planen, Abhängigkeiten
   - Kalender → Alle Q-Meilensteine setzen
   - Workflow → WIP-Limits anpassen
   - Dashboard → Metriken für Management-Report

### Performance-Optimierung

**Für grosse Portfolios (>20 Projekte):**

- Nutze Filter konsequent (Orgunit, Status, Zeitraum)
- Gantt: Nur nächste 3 Monate anzeigen
- Kalender: Abgeschlossene Meilensteine ausblenden
- Dashboard: Widgets auf relevante Projekte beschränken
- Workflow: Swimlanes für bessere Übersicht

### Mobile Nutzung

Visualisierungen sind mobile-optimiert:

- **Dashboard**: Touch-freundliche Kacheln
- **Kalender**: Swipe für Monat-Navigation
- **Gantt**: Pinch-to-Zoom für Zeitachse
- **Workflow**: Drag & Drop auch auf Tablet

## Zusammenfassung

✅ **Gantt-Diagramm** für Zeitplanung und Ressourcen-Konflikte
✅ **Kalender-Ansicht** für Meilenstein-Tracking und Termine
✅ **Dashboard** für täglichen Status-Überblick
✅ **Workflow-Ansicht** für Prozess-Optimierung

### Wichtigste Erkenntnisse

- Wähle die richtige Visualisierung für deine Fragestellung
- Nutze Filter bei vielen Projekten (>10)
- Kombiniere Visualisierungen für maximalen Nutzen
- Pflege Daten regelmässig (wöchentlich)
- Setze WIP-Limits im Workflow-Board
- Personalisiere Dashboard nach deiner Rolle
- Nutze Export-Funktionen für Stakeholder-Reports

## Nächste Schritte

1. **Visualisierungen erkunden**: Öffne Gantt, Kalender, Dashboard und Workflow
2. **Personalisieren**: Passe Dashboard-Layout an deine Bedürfnisse an
3. **Filter konfigurieren**: Setze Standard-Filter für deine Orgunit/Projekte
4. **Team schulen**: Zeige dem Team die verschiedenen Ansichten
5. **Integration nutzen**: Exportiere Kalender zu Google/Outlook
6. **Metriken überwachen**: Nutze Workflow-Metriken für Continuous Improvement

**Weiterführende Kapitel:**

- **Kapitel 09**: Reporting - Erstelle Reports mit Visualisierungen
- **Kapitel 04**: Status und Workflow - Verstehe Projekt-Status-Übergänge
- **Kapitel 08**: Meilensteine - Detaillierte Meilenstein-Verwaltung
- **Kapitel 06**: Team-Verwaltung - Ressourcen-Planung mit Gantt
