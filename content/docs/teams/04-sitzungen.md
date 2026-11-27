---
title: "Sitzungen"
description: ""
weight: "4"
tags:
  - "meetings"
  - "agenda"
  - "beschluesse"
  - "protokoll"
---


# Sitzungen

In diesem Kapitel lernst du, wie du Sitzungen (Meetings) mit Agenda-Punkten und Beschlüssen strukturiert dokumentierst.

## Meeting erstellen

### Voraussetzungen

- Du musst **Admin** des Space sein

Reine Team-Mitgliedschaft (auch über eine Benutzergruppe) reicht nicht aus. Team-Mitglieder ohne Admin-Rolle sehen den Space und seine Sitzungen, können aber selbst keine neuen Sitzungen anlegen. Wenn du eine Sitzung anlegen möchtest und den Button "Sitzung" nicht siehst, bitte einen Space-Admin, dich unter "Admins" als Admin einzutragen.

### Schritt 1: Meeting-Formular öffnen

1. Öffne einen Space
2. Klicke auf den Tab **"Meetings"**
3. Klicke auf **"+ Neues Meeting"**

### Schritt 2: Formular ausfüllen

#### Pflichtfelder

**Titel** (Pflicht):

- Name der Sitzung
- Beispiele:
  - "Jahresplanung 2025"
  - "Sprint Review Sprint 1"
  - "Geschäftsleitungssitzung 15/2024"
  - "QM-Audit Nachbesprechung"

**Beginn** (Pflicht):

- Datum und Uhrzeit der Sitzung
- Format: `DD.MM.YYYY HH:MM`
- Beispiel: `15.01.2025 14:00`

#### Empfohlene Felder

**Nummer**:

- Eindeutige Identifikation
- Beispiele:
  - "GL-2025-01"
  - "QM-2025-15"
  - "Sprint-Review-1"

**Beschreibung**:

- Zweck und Ziele der Sitzung
- Beispiel:

```markdown
## Zweck
Planung der strategischen Ziele für das Jahr 2025

## Vorbereitung
- Budget-Entwurf studieren
- SWOT-Analyse durchführen
```

**Ende**:

- Ende-Zeit der Sitzung
- Berechnet Dauer automatisch

**Ort**:

- Physischer Ort oder "Online"
- Beispiele:
  - "Sitzungszimmer 1.OG"
  - "Online via Jitsi"
  - "Hauptsitz Zürich"

**Teilnehmer**:

- Freitext-Feld für Teilnehmerliste
- Beispiel:

```text
Anwesend:
- Max Muster (Vorsitz)
- Anna Beispiel
- Peter Test

Entschuldigt:
- Maria Demo
```

**Status**:

- **geplant**: Sitzung ist geplant
- **vorbereitet**: Agenda ist fertig
- **abgeschlossen**: Sitzung ist durchgeführt
- **Vorlage**: Template für wiederkehrende Sitzungen

### Schritt 3: Speichern

Klicke auf **"Speichern"**.

✅ **Erfolg!** Meeting ist erstellt.

## Meeting-Detailansicht

### Übersicht

Nach dem Erstellen siehst du die Meeting-Detailansicht mit:

**Header:**

- Titel und Status
- Datum, Zeit, Ort
- Jitsi-Link (falls konfiguriert)
- Aktions-Buttons

**Tabs:**

1. **Agenda**: Agenda-Punkte
2. **Beschlüsse**: Entscheidungen aus diesem Meeting
3. **Dateien**: Präsentationen, Unterlagen
4. **Historie**: Änderungslog

### Jitsi-Integration

**Automatischer Video-Meeting-Link:**

Jedes Meeting erhält eine eindeutige Jitsi-URL:

```text
https://meet.jit.si/[meeting-uuid]
```

**Verwendung:**

1. Klicke auf **"Jitsi Meeting beitreten"**
2. Browser öffnet Video-Konferenz
3. Keine Registrierung erforderlich

**Hinweis:** Jitsi muss in ELIZA konfiguriert sein (`settings.JITSI_URL`).

## Agenda verwalten

### Agenda-Punkt erstellen

**Schritt-für-Schritt:**

1. Öffne Meeting-Detail
2. Klicke auf Tab **"Agenda"**
3. Klicke auf **"+ Neuer Agenda-Punkt"**
4. Fülle Formular aus

#### Formular-Felder

**Titel** (Pflicht):

- Kurze Beschreibung des Agenda-Punkts
- Beispiele:
  - "Genehmigung Jahresbudget"
  - "Bericht Kundenzufriedenheit Q4"
  - "Personalplanung 2025"

**Nummer**:

- Position in der Agenda
- Beispiele:
  - "1"
  - "2.1"
  - "3.2.1" (für Sub-Agenda-Punkte)

**Text**:

- Detaillierte Beschreibung
- Diskussionsbasis
- Beispiel:

```markdown
## Hintergrund
Das Budget wurde im Dezember durch die Abteilungen erstellt.

## Wichtige Punkte
- Personal: +2 Stellen
- IT: +CHF 50'000 für neue Server
- Marketing: -CHF 10'000 Kürzung

## Fragen
- Sind die Personalstellen genehmigt?
- Kann IT-Budget erhöht werden?
```

**Ergebnis**:

- Zusammenfassung der Diskussion
- Wird während/nach Meeting ausgefüllt
- Beispiel:

```markdown
## Diskussion
Budget wurde diskutiert. Personalstellen wurden einstimmig genehmigt.
IT-Budget wurde auf +CHF 30'000 reduziert.

## Entscheidung
Budget wird mit Anpassungen genehmigt.
```

**Verknüpfte Cards**:

- Bezug zu Aufgaben im Kanban-Board
- Mehrere Cards möglich
- Beispiel: Card "Budget erstellen"

**Beitragende**:

- Personen, die den Agenda-Punkt verantworten
- Können Agenda-Punkt bearbeiten

### Hierarchische Agenda-Punkte

**Sub-Agenda-Punkte erstellen:**

1. Öffne Agenda-Punkt
2. Klicke auf **"Sub-Agenda-Punkt hinzufügen"**
3. Fülle Formular aus
4. `Parent` wird automatisch gesetzt

**Beispiel-Struktur:**

```text
1. Jahresplanung
   1.1. Budget
   1.2. Personalplanung
       1.2.1. Neue Stellen
       1.2.2. Umstrukturierungen
   1.3. Strategie

2. Diverses
   2.1. Nächster Termin
```

**Navigation:**

- Klicke auf Sub-Agenda-Punkt um ihn zu öffnen
- Breadcrumb zeigt Hierarchie
- "Zurück zu Parent" Button

### Agenda-Reihenfolge

**Automatische Sortierung:**

Agenda-Punkte werden nach `list_order` sortiert.

**Manuelle Reihenfolge:**

1. Nutze Nummerierung (1, 2, 3, ...)
2. Bei Bedarf: Drag & Drop in der Ansicht

**Empfohlene Struktur:**

```text
1. Begrüssung und Genehmigung Agenda
2. Protokoll der letzten Sitzung
3. Hauptthemen (3.1, 3.2, ...)
4. Stand laufender Projekte
5. Beschlüsse
6. Verschiedenes
7. Nächster Termin
```

### Agenda-Punkte bearbeiten

**Bearbeitung öffnen:**

1. Klicke auf Agenda-Punkt
2. Klicke auf **"Bearbeiten"**
3. Ändere Felder
4. Speichere

**Wer kann bearbeiten:**

- Space-Admins
- Meeting-Admins
- Beitragende des Agenda-Punkts
- Nur bei Status ≠ "abgeschlossen"

### Agenda-Punkte löschen

**Löschen:**

1. Öffne Agenda-Punkt
2. Klicke auf **"Löschen"**
3. Bestätige

⚠️ **Warnung**: Löschen entfernt auch alle Beschlüsse des Agenda-Punkts!

## Beschlüsse verwalten

### Beschluss erstellen

**Aus Agenda-Punkt:**

1. Öffne Agenda-Punkt
2. Klicke auf **"Beschluss hinzufügen"**
3. Fülle Formular aus

**Direkt im Meeting:**

1. Öffne Meeting
2. Klicke auf Tab **"Beschlüsse"**
3. Klicke auf **"+ Neuer Beschluss"**

### Beschluss-Formular

#### Pflichtfelder

**Text** (Pflicht):

- Beschlusstext
- Präzise und eindeutig formulieren
- Beispiel:

```text
Es wird beschlossen, zwei neue Stellen im Bereich IT-Support
zu schaffen. Budget: CHF 150'000 pro Jahr.
Stellenausschreibung bis 31.01.2025.
```

**Agenda-Punkt**:

- Bezug zum Agenda-Punkt
- Automatisch gesetzt bei Erstellung aus Agenda-Punkt

#### Empfohlene Felder

**Nummer**:

- Eindeutige Beschluss-Nummer
- Beispiele:
  - "BE-2025-001"
  - "2025-GL-01"
  - "Beschluss 1/2025"

**Datum**:

- Beschlussdatum
- Standard: Meeting-Datum

**Verantwortung**:

- Zuständige Person/Abteilung
- Beispiel: "IT-Leitung, Max Muster"

**Frist**:

- Umsetzungs-Deadline
- Beispiel: `31.01.2025`

**Status**:

- **offen**: Noch nicht begonnen
- **in Arbeit**: Umsetzung läuft
- **erledigt**: Umgesetzt und abgeschlossen

### Beschluss-Tracking

**Status-Workflow:**

```text
offen → in Arbeit → erledigt
```

**Übersicht:**

1. Öffne Meeting
2. Tab **"Beschlüsse"**
3. Siehe alle Beschlüsse mit Status

**Filter:**

- Nur offene Beschlüsse
- Nur überfällige Beschlüsse
- Nach Verantwortung filtern

### Beschluss bearbeiten

**Status aktualisieren:**

1. Öffne Beschluss
2. Ändere Status
3. Optional: Kommentar hinzufügen
4. Speichere

**Frist verlängern:**

1. Öffne Beschluss
2. Setze neue Frist
3. Kommentar mit Begründung
4. Speichere

### Beschlüsse über Meetings hinweg

**Alle Beschlüsse eines Space:**

1. Öffne Space
2. Klicke auf **"Alle Beschlüsse"**
3. Siehe Übersicht aller Meetings

**Filter:**

- Nach Status
- Nach Frist (überfällig, diese Woche, ...)
- Nach Verantwortung

## Meeting-Status

### Status-Workflow

```text
geplant → vorbereitet → abgeschlossen
   ↓
Vorlage (für wiederkehrende Sitzungen)
```

### Status ändern

**Status aktualisieren:**

1. Öffne Meeting
2. Klicke auf Status-Dropdown
3. Wähle neuen Status
4. Speichere

**Status-Bedeutungen:**

- **geplant**: Termin steht, Agenda noch nicht fertig
- **vorbereitet**: Agenda ist vorbereitet, bereit für Durchführung
- **abgeschlossen**: Sitzung ist durchgeführt, Protokoll erstellt
- **Vorlage**: Template für neue Meetings

### Abgeschlossene Meetings

**Eigenschaften:**

- ✅ Schreibgeschützt (keine Bearbeitung mehr möglich)
- ✅ Protokoll ist finalisiert
- ✅ Beschlüsse sind dokumentiert
- ⚠️ Können nur von Space-Admins reaktiviert werden

**Meeting abschliessen:**

1. Stelle sicher, alle Agenda-Punkte haben Ergebnis
2. Alle Beschlüsse sind dokumentiert
3. Ändere Status zu **"abgeschlossen"**
4. Speichere

## Meeting-Vorlagen

### Vorlage erstellen

**Aus bestehendem Meeting:**

1. Öffne Meeting
2. Ändere Status zu **"Vorlage"**
3. Speichere

**Neue Vorlage:**

1. Erstelle Meeting mit Standard-Agenda-Punkten
2. Setze Status **"Vorlage"**
3. Keine Datumsangaben

**Beispiel-Vorlage: Geschäftsleitungssitzung**

```text
Meeting: "GL-Sitzung Vorlage"
Status: Vorlage

Agenda:
1. Begrüssung und Genehmigung Agenda
2. Protokoll der letzten Sitzung
3. Bericht Finanzen
4. Bericht HR
5. Bericht IT
6. Strategie und Projekte
7. Verschiedenes
8. Nächster Termin
```

### Vorlage verwenden

**Meeting aus Vorlage erstellen:**

1. Öffne Vorlagen-Meeting
2. Klicke auf **"Meeting aus Vorlage erstellen"**
3. Setze Datum und Titel
4. Agenda-Punkte werden kopiert
5. Speichere

**Manuelle Kopie:**

1. Erstelle neues Meeting
2. Kopiere Agenda-Punkte aus Vorlage
3. Passe an

## Dateien anhängen

### Datei zu Meeting hinzufügen

**Upload:**

1. Öffne Meeting
2. Klicke auf Tab **"Dateien"**
3. Klicke auf **"Datei hochladen"**
4. Wähle Datei (Drag & Drop möglich)
5. Optional: Titel und Beschreibung
6. Speichere

**Unterstützte Formate:**

- Präsentationen: PPTX, PDF
- Dokumente: DOCX, PDF
- Tabellen: XLSX
- Bilder: JPG, PNG

### Datei zu Agenda-Punkt hinzufügen

**Upload:**

1. Öffne Agenda-Punkt
2. Klicke auf **"Datei hochladen"**
3. Wähle Datei
4. Speichere

**Anzeige:**

Datei wird beim Agenda-Punkt und im Meeting-Datei-Tab angezeigt.

## Export und Druck

Alle Exporte findest du in der Sitzung oben rechts im Menü mit den drei Punkten:

![Menü der Sitzung mit Word-Export, PDF-Export und Zip-Export](/docs/teams/images/sitzung_exportmenue.webp)

### Protokoll als PDF exportieren

1. Öffne die Sitzung
2. Klicke oben rechts auf die drei Punkte
3. Wähle **«PDF-Export»**
4. Das PDF wird heruntergeladen

**Das PDF enthält:**

- Oben rechts auf jeder Seite das Logo deiner ELIZA (dasselbe wie in Word-Dokumenten)
- Titelblock mit Space, Nummer und Status der Sitzung
- Datum, Zeit, Ort, Teilnehmende und bei abgeschlossenen Sitzungen, wann und von wem sie abgeschlossen wurde
- Beschreibung und eine Traktandenliste als Übersicht
- Alle Traktanden und Unter-Traktanden nummeriert, mit Text und hervorgehobenem Ergebnis
- Beschlüsse mit Nummer, Text, Verantwortung, Frist und Status
- Verknüpfte Cards und Meldungen
- Bilder aus den Beilagen, andere Beilagen als Liste mit Dateinamen
- Fusszeile mit dem Titel der Sitzung und «Seite X von Y»

Farben und Schrift richten sich nach den Whitelabel-Einstellungen deiner ELIZA. Zum Drucken öffnest du das PDF und druckst es wie gewohnt.

### Protokoll als Word exportieren

1. Öffne die Sitzung
2. Klicke oben rechts auf die drei Punkte
3. Wähle **«Word-Export»**
4. Wähle im Fenster **«Ohne Vorlage»** oder eine Word-Vorlage aus dem DMS
5. Klicke auf **«Exportieren»**, das Word-Dokument wird heruntergeladen

![Fenster Word-Export mit der Auswahl «Ohne Vorlage» und Vorlagen aus dem DMS](/docs/teams/images/sitzung_word_export_vorlage.webp)

**Ohne Vorlage** enthält das Dokument in der Kopfzeile das Logo deiner ELIZA und in der Fusszeile den Titel der Sitzung mit Seitenzahl.

**Mit Vorlage** übernimmt das Dokument aus der Vorlage:

- Kopf- und Fusszeilen, zum Beispiel deinen Briefkopf
- Seitenränder und Seitenformat
- Formatierung, zum Beispiel Schrift und Farbe der Überschriften

Der Inhalt der Vorlage selbst wird nicht übernommen. Der Inhalt des Protokolls ist in beiden Fällen gleich wie im PDF.

**Eine Word-Vorlage bereitstellen:**

1. Erstelle in Word ein Dokument mit der gewünschten Kopf- und Fusszeile, die Seite selbst kann leer bleiben
2. Passe bei Bedarf die Formatvorlagen «Überschrift 1» bis «Überschrift 3» und «Standard» an
3. Speichere es im Format **.docx** (nicht .dotx)
4. Lege es im DMS ab, setze das Häkchen **«Vorlage»** und gib das Dokument frei

Im Fenster Word-Export erscheinen alle .docx-Vorlagen, die du im DMS sehen darfst.

### Sitzung mit Beilagen als Zip exportieren

1. Öffne die Sitzung
2. Klicke oben rechts auf die drei Punkte
3. Wähle **«Zip-Export»**
4. Du erhältst ein Zip-Archiv mit allen Beilagen der Sitzung und ihrer Traktanden

### Was im Export erscheint

Exporte zeigen nur, was du selbst sehen darfst: Verknüpfte Cards, Meldungen und Beilagen erscheinen im PDF und im Word-Dokument nur, wenn du sie in ELIZA öffnen darfst. Gibst du ein Protokoll weiter, prüfe deshalb, ob der Empfänger dieselben Inhalte sehen soll.

## Benachrichtigungen

### Wer erhält Benachrichtigungen?

**Automatische Benachrichtigungen bei:**

- Meeting erstellt → Space-Team
- Meeting geändert → Meeting-Admins
- Agenda-Punkt erstellt → Beitragende
- Beschluss erstellt → Verantwortliche
- Status geändert → Alle Beteiligten

### E-Mail-Benachrichtigungen

**Konfiguration:**

1. Öffne Benutzer-Einstellungen
2. Wähle **"Benachrichtigungen"**
3. Aktiviere/Deaktiviere Meeting-Benachrichtigungen

**Benachrichtigungs-Typen:**

- Neue Meetings
- Agenda-Updates
- Beschluss-Fristen
- Status-Änderungen

## Kommentare

### Kommentar hinzufügen

**Zu Meeting:**

1. Öffne Meeting
2. Scrolle zu **"Kommentare"**
3. Schreibe Kommentar
4. Speichere

**Zu Agenda-Punkt:**

1. Öffne Agenda-Punkt
2. Scrolle zu **"Kommentare"**
3. Schreibe Kommentar
4. Speichere

**Verwendung:**

- Notizen während der Sitzung
- Nachfragen zu Agenda-Punkten
- Feedback zu Beschlüssen

Kommentare an Sitzungen und Traktanden laufen über die **Diskussion**: Du kannst auf einen Kommentar antworten, mit einem Emoji reagieren und andere mit `@` erwähnen. Alle Kommentare, die du sehen darfst, findest du zusätzlich gesammelt unter **Dashboard → Kommentare**.

> **⚠️ Wer mitliest:** Ob jemand die Kommentare einer Sitzung sieht, entscheidet die Sichtbarkeit des Spaces, nicht die Mitgliedschaft. Ein Space auf «öffentlich» ist für alle Mitarbeitenden einsehbar. Für vertrauliche Sitzungen gehört der Space auf «geschützt».

## Meeting-Administration

### Meeting-Admins verwalten

**Admin hinzufügen:**

1. Öffne Meeting
2. Klicke auf **"Admins verwalten"**
3. Wähle Benutzer
4. Speichere

**Admin-Rechte:**

- ✅ Meeting bearbeiten
- ✅ Agenda-Punkte erstellen/bearbeiten/löschen
- ✅ Beschlüsse verwalten
- ✅ Status ändern

**Space-Admins:**

Space-Admins haben automatisch Meeting-Admin-Rechte.

### Meeting archivieren

**Archivierung:**

1. Öffne Meeting
2. Klicke auf **"Archivieren"**
3. Bestätige

**Auswirkungen:**

- Meeting wird ausgeblendet
- Schreibgeschützt
- Zugriff über Archiv-Ansicht

**Wann archivieren:**

- ✅ Meeting ist abgeschlossen
- ✅ Beschlüsse sind alle umgesetzt
- ✅ Nach 1 Jahr (Aufbewahrungsfrist)

### Meeting löschen

⚠️ **Warnung**: Permanent, kann nicht rückgängig gemacht werden!

**Löschen:**

1. Öffne Meeting
2. Klicke auf **"Löschen"**
3. Bestätige mit Meeting-Titel
4. Endgültig löschen

**Empfehlung:** Archiviere statt zu löschen!

## Best Practices

### ✅ Meeting-Vorbereitung

**Vor der Sitzung:**

1. **Agenda-Punkte sammeln**: Eine Woche vorher
2. **Unterlagen hochladen**: 3 Tage vorher
3. **Teilnehmer informieren**: Einladung mit Agenda
4. **Status setzen**: "vorbereitet" wenn alles bereit

### ✅ Meeting-Durchführung

**Während der Sitzung:**

1. **Jitsi-Link nutzen**: Bei Online-Meetings
2. **Ergebnis dokumentieren**: Direkt bei jedem Agenda-Punkt
3. **Beschlüsse erfassen**: Mit Verantwortung und Frist
4. **Kommentare nutzen**: Für Notizen und Diskussionspunkte

### ✅ Meeting-Nachbereitung

**Nach der Sitzung:**

1. **Status "abgeschlossen"**: Meeting finalisieren
2. **Protokoll exportieren**: Als PDF oder Word, auf Wunsch mit einer Word-Vorlage aus dem DMS
3. **Beschlüsse verfolgen**: Status regelmässig prüfen
4. **Archivierung**: Nach Umsetzung aller Beschlüsse

### ✅ Agenda-Struktur

**Gute Agenda-Punkte:**

```text
1. Begrüssung (5 Min)
2. Genehmigung Protokoll letzte Sitzung (5 Min)
3. Jahresbudget 2025 (30 Min)
   3.1. Präsentation Budget (15 Min)
   3.2. Diskussion und Fragen (10 Min)
   3.3. Beschlussfassung (5 Min)
4. Nächster Termin (5 Min)
```

**Zeitangaben:**

Hilft bei Zeitmanagement während der Sitzung.

### ✅ Beschluss-Formulierung

**Gute Beschlüsse:**

- ✅ **Präzise**: "Zwei neue Stellen IT-Support ab 01.03.2025"
- ✅ **Messbar**: "Budget CHF 150'000 pro Jahr"
- ✅ **Verantwortung**: "IT-Leitung, Max Muster"
- ✅ **Frist**: "Stellenausschreibung bis 31.01.2025"

**Schlechte Beschlüsse:**

- ❌ **Vage**: "Mehr Personal einstellen"
- ❌ **Keine Frist**: "Irgendwann umsetzen"
- ❌ **Keine Verantwortung**: "Jemand soll das machen"

### ✅ Vorlagen nutzen

**Standard-Vorlagen erstellen:**

- Geschäftsleitungssitzung
- Abteilungssitzung
- Sprint Review
- QM-Audit Review

**Zeitersparnis:**

Agenda-Punkte müssen nicht jedes Mal neu erfasst werden.

## Häufige Fehler

### ❌ Keine Ergebnisse dokumentiert

**Problem:** Agenda-Punkte haben kein Ergebnis-Feld ausgefüllt

**Lösung:** Während Meeting direkt dokumentieren

### ❌ Beschlüsse ohne Verantwortung

**Problem:** Niemand fühlt sich zuständig

**Lösung:** Immer Namen und Frist festhalten

### ❌ Status nicht aktualisiert

**Problem:** Meeting ist durchgeführt, aber Status noch "geplant"

**Lösung:** Nach Meeting Status auf "abgeschlossen" setzen

### ❌ Überfällige Beschlüsse

**Problem:** Beschlüsse werden nicht verfolgt

**Lösung:**

- Wöchentliches Review aller offenen Beschlüsse
- E-Mail-Benachrichtigungen aktivieren
- In nächstem Meeting thematisieren

### ❌ Zu lange Meetings

**Problem:** 3h Sitzung mit 20 Agenda-Punkten

**Lösung:**

- Maximal 10 Hauptpunkte
- Zeitbudget pro Agenda-Punkt
- Fokus auf Entscheidungen

## Nächste Schritte

Jetzt, wo du Sitzungen dokumentieren kannst, lerne im nächsten Kapitel:

- [Berechtigungskonzept]({{< ref "05-berechtigungskonzept" >}}): Verstehe die Zugriffskontrolle
- [Zusammenarbeit]({{< ref "06-zusammenarbeit" >}}): Nutze alle Kollaborations-Features
- [Integration]({{< ref "07-integration" >}}): Verknüpfe mit anderen Modulen

---

**Tipp**: Erstelle eine Standard-Vorlage für deine wichtigsten wiederkehrenden Sitzungen. Das spart viel Zeit bei der Vorbereitung.
