---
title: "Zusammenarbeit"
description: ""
weight: "6"
tags:
  - "collaboration"
  - "comments"
  - "files"
  - "notifications"
  - "teamwork"
---


# Zusammenarbeit

In diesem Kapitel lernst du alle Kollaborations-Features des Spaces-Moduls kennen, die effektive Teamarbeit ermöglichen.

## Kommentare

Kommentare sind das Herzstück der Kommunikation im Spaces-Modul. Sie können zu allen wichtigen Objekten hinzugefügt werden.

### Wo können Kommentare hinzugefügt werden?

Spaces kennen zwei Arten von Kommentaren, die sich in Bedienung und Funktionsumfang unterscheiden:

| Objekt | Art | Funktionen |
|--------|-----|------------|
| **Sitzungen** und **Traktanden** | Diskussion | Kommentare, Antworten, Emoji-Reaktionen, @-Erwähnungen |
| **Cards** (Aufgaben) und **Beschlüsse** | Klassisches Kommentarfeld | Kommentar schreiben, bearbeiten, löschen |

> **💡 Alles an einem Ort:** Kommentare aus der Diskussion, also an Sitzungen und Traktanden, sammelt ELIZA zusätzlich unter **Dashboard → Kommentare**, zusammen mit den Kommentaren aus den übrigen Modulen. Wie diese Übersicht funktioniert und wer dort was sieht, steht im Dashboard-Handbuch, Kapitel «Kommentare: alle Diskussionen an einem Ort». Kommentare an Cards und Beschlüssen erscheinen dort nicht, sie stehen nur am Objekt selbst.

> **⚠️ Sichtbarkeit:** Bei Sitzungen und Traktanden zählt die Sichtbarkeit des Spaces und nicht die Mitgliedschaft. Steht ein Space auf **öffentlich**, sind seine Sitzungen, Traktanden und deren Kommentare für alle Mitarbeitenden einsehbar. Für vertrauliche Themen gehört der Space auf **geschützt**.

### Kommentar erstellen

**Schritt-für-Schritt:**

1. Öffne das Objekt (Card, Meeting, etc.)
2. Scrolle zum Bereich **"Kommentare"**
3. Schreibe deinen Kommentar im Textfeld
4. Optional: Füge Datei-Anhänge hinzu
5. Klicke auf **"Kommentieren"**

✅ **Fertig!** Kommentar wird gespeichert und Benachrichtigungen versendet.

### Kommentar-Formatierung

**Unterstützt Markdown:**

```markdown
**Fett** für wichtige Punkte
*Kursiv* für Betonungen
- Listen für strukturierte Infos
[Links](https://example.com) zu externen Ressourcen

# Überschrift für Struktur
```

**Code-Blöcke:**

```markdown
\`\`\`python
def example():
    return "Code-Beispiel"
\`\`\`
```

### Kommentar mit Anhang

**Datei an Kommentar anhängen:**

1. Schreibe Kommentar
2. Klicke auf **"📎 Datei anhängen"**
3. Wähle Datei
4. Kommentieren

**Anwendungsfälle:**

- Screenshots von Fehlern
- Entwürfe zur Diskussion
- Zusätzliche Dokumentation
- Meeting-Notizen als PDF

### Kommentare bearbeiten

**Eigene Kommentare bearbeiten:**

1. Klicke auf Kommentar
2. Klicke auf **"Bearbeiten"** (✏️)
3. Ändere Text
4. Speichere

**Bearbeitung durch Admins:**

Space-Admins können alle Kommentare bearbeiten.

**Änderungshistorie:**

- Änderungsdatum wird angezeigt
- Ursprünglicher Text wird nicht gespeichert

### Kommentare löschen

**Löschen:**

1. Klicke auf Kommentar
2. Klicke auf **"Löschen"** (🗑️)
3. Bestätige

**Wer kann löschen:**

- ✅ Space-Admins
- ✅ Parent-Objekt-Admins
- ❌ Normale Benutzer (auch Autor)

### System-Kommentare

**Automatische Benachrichtigungen:**

System-Kommentare werden automatisch erstellt bei:

- Status-Änderungen
- Zuordnungs-Änderungen
- Deadline-Änderungen
- Label-Änderungen
- Archivierung/Reaktivierung

**Beispiel:**

```text
🤖 System: Card-Status geändert von "doing" zu "done"
durch Max Muster am 15.01.2025 14:30
```

**Unterscheidung:**

- Benutzer-Kommentare: Mit Benutzer-Avatar
- System-Kommentare: Mit System-Icon (🤖)

### Benachrichtigungen

**Wer wird benachrichtigt:**

- Assigned User (bei Cards)
- Contributors (bei Cards)
- Meeting-Admins (bei Meetings)
- Traktanden-Beitragende (bei Traktanden)
- Beschluss-Verantwortliche (bei Decisions)

**Benachrichtigungs-Kanäle:**

- In-App Benachrichtigungen (🔔)
- E-Mail (optional, in Benutzer-Einstellungen)
- Push-Notifications (falls konfiguriert)

### @-Mentions

**Benutzer erwähnen:**

```text
@max_muster Kannst du das bitte prüfen?
```

**Verhalten:**

- Erwähnter Benutzer erhält Benachrichtigung
- Auch wenn nicht direkt beteiligt
- Name wird verlinkt

**Verwendung:**

- Aufmerksamkeit von Experten
- Fragen an bestimmte Personen
- Delegation von Aufgaben

## Dateiverwaltung

### Datei-Upload

**Wo können Dateien hochgeladen werden:**

- ✅ Cards
- ✅ Meetings
- ✅ Meetingitems (Traktanden)
- ✅ Decisions (Beschlüsse)
- ✅ Kommentare

**Upload-Methoden:**

**Methode 1: Direkter Upload**

1. Öffne Objekt
2. Klicke auf **"Datei hochladen"** oder **"📎 Anhang"**
3. Wähle Datei
4. Optional: Titel und Beschreibung
5. Speichere

**Methode 2: Drag & Drop**

1. Öffne Objekt
2. Ziehe Datei aus Finder/Explorer
3. Lasse über Upload-Bereich los
4. Datei wird hochgeladen

### Unterstützte Dateiformate

**Dokumente:**

- PDF (mit Text-Extraktion)
- DOCX, DOTX (mit Text-Extraktion)
- XLSX (Excel)
- PPTX (PowerPoint)
- TXT, CSV

**Bilder:**

- JPG, JPEG
- PNG
- GIF
- WEBP

**Videos:**

- MP4
- WEBM

**Diagramme:**

- Excalidraw (.excalidraw)

**Andere:**

- ZIP, RAR (Archive)
- Alle anderen Formate möglich

### Datei-Eigenschaften

**Automatisch erfasst:**

- **Titel**: Dateiname oder manuell angegeben
- **Erstellungsdatum**: Upload-Zeitpunkt
- **Uploader**: Benutzer, der Datei hochgeladen hat
- **Grösse**: Dateigrösse
- **Typ**: Dateiformat (erkannt anhand Extension)

**Optional:**

- **Beschreibung**: Zusätzliche Informationen
- **Kommentare**: Feedback zur Datei

### Datei-Vorschau

**Unterstützte Vorschauen:**

- **Bilder**: Direkte Anzeige im Browser
- **PDF**: Browser-PDF-Viewer
- **Videos**: Browser-Video-Player
- **Text**: Direkte Anzeige

**Vorschau öffnen:**

1. Klicke auf Dateiname oder Thumbnail
2. Vorschau öffnet sich in Modal oder neuem Tab

### Datei herunterladen

**Download:**

1. Klicke auf **"Download"** Button (⬇️) bei Datei
2. Datei wird heruntergeladen

**Bulk-Download:**

Alle Dateien eines Objekts als ZIP herunterladen:

1. Klicke auf **"Alle herunterladen"**
2. ZIP-Archiv wird erstellt und heruntergeladen

### Datei-Versionierung

**Versionskontrolle mit reversion:**

- Alle Änderungen werden protokolliert
- Frühere Versionen können wiederhergestellt werden
- Historie ist einsehbar

**Versionen ansehen:**

1. Öffne Datei-Detail
2. Klicke auf **"Historie"**
3. Siehe alle Versionen

**Version wiederherstellen:**

1. Wähle Version aus Historie
2. Klicke auf **"Wiederherstellen"**
3. Version wird wiederhergestellt

### Datei-Suche

**Text-Extraktion:**

PDF und DOCX Dateien werden automatisch für Volltextsuche extrahiert.

**Suche:**

1. Nutze ELIZA-Suche (oben rechts)
2. Gib Suchbegriff ein
3. Dateien mit passendem Inhalt werden gefunden

**Beispiel:**

```text
Suche: "Jahresbudget 2025"
→ Findet PDF "Budget_2025.pdf" mit diesem Text
```

### Datei löschen

**Löschen:**

1. Öffne Datei
2. Klicke auf **"Löschen"** (🗑️)
3. Bestätige

**Wer kann löschen:**

- ✅ Uploader
- ✅ Parent-Objekt-Admins
- ✅ Space-Admins

⚠️ **Warnung**: Löschen ist permanent!

### Datei-Organisation

**Empfohlene Struktur:**

```text
Space: "Projekt Website Relaunch"
   ├─ Meeting: "Kickoff"
   │  ├─ Präsentation_Kickoff.pptx
   │  └─ Protokoll_Kickoff.pdf
   │
   ├─ Board: "Sprint 1"
   │  └─ Card: "Design Homepage"
   │     ├─ Entwurf_Homepage_V1.png
   │     ├─ Entwurf_Homepage_V2.png
   │     └─ Feedback_Design.pdf
   │
   └─ Zentrale Dateien (Space-Level)
      ├─ Projektplan.xlsx
      └─ Requirements.docx
```

## Checklisten

### Checkliste erstellen

**Für Cards:**

1. Öffne Card
2. Klicke auf **"Checkliste hinzufügen"**
3. Gib Titel ein (z.B. "Akzeptanzkriterien")
4. Füge Items hinzu

**Items hinzufügen:**

1. Klicke auf **"+ Item hinzufügen"**
2. Gib Text ein
3. Drücke Enter

**Beispiel-Checkliste:**

```text
✅ Akzeptanzkriterien
   ☐ Backend-API implementiert
   ☐ Frontend-Integration
   ☑ Tests geschrieben
   ☐ Code Review durchgeführt
   ☐ Dokumentation aktualisiert

Fortschritt: 1/5 (20%)
```

### Checklist-Items abhaken

**Abhaken:**

1. Klicke auf Checkbox
2. Item wird als erledigt markiert
3. Fortschritt aktualisiert sich

**Rückgängig machen:**

1. Klicke erneut auf Checkbox
2. Item wird wieder geöffnet

### Fortschritts-Tracking

**Automatische Berechnung:**

```text
Fortschritt = (Erledigte Items / Total Items) * 100%
```

**Anzeige:**

- Fortschrittsbalken in Card
- Prozent-Anzeige
- "3/5" Zähler
- Farbcodierung (Rot < 50%, Orange 50-80%, Grün > 80%)

### Checkliste bearbeiten

**Item bearbeiten:**

1. Klicke auf Item-Text
2. Bearbeite Inline
3. Drücke Enter

**Item löschen:**

1. Hover über Item
2. Klicke auf **"Löschen"** (🗑️)

**Checkliste löschen:**

1. Klicke auf Checklisten-Titel
2. Klicke auf **"Checkliste löschen"**
3. Bestätige

### Checkliste kopieren

**Von Template:**

1. Erstelle Card-Template mit Standard-Checkliste
2. Erstelle neue Card aus Template
3. Checkliste wird mitkopiert

**Manuelle Kopie:**

1. Erstelle neue Checkliste
2. Kopiere Items aus anderer Card

## Zeiterfassung

**Voraussetzung:** Timetracker-Modul muss aktiviert sein.

### Zeit auf Card erfassen

**Erfassung:**

1. Öffne Card
2. Klicke auf **"⏱️ Zeit erfassen"**
3. Gib Stunden ein (z.B. "2.5")
4. Optional: Beschreibung der Tätigkeit
5. Optional: Datum (Standard: heute)
6. Speichere

**Beispiel:**

```text
Stunden: 3.5
Beschreibung: "Backend-API Implementierung"
Datum: 15.01.2025
```

### Zeiterfassungen ansehen

**Auf Card:**

Card zeigt Gesamtzeit:

```text
⏱️ 12.5 Stunden erfasst
```

**Detail-Ansicht:**

1. Öffne Card
2. Klicke auf Zeit-Anzeige
3. Siehe alle Zeiterfassungen mit Details

### Zeiterfassung bearbeiten/löschen

**Bearbeiten:**

1. Öffne Zeiterfassungs-Liste
2. Klicke auf Eintrag
3. Ändere Werte
4. Speichere

**Löschen:**

1. Öffne Zeiterfassungs-Liste
2. Klicke auf **"Löschen"** (🗑️)
3. Bestätige

### Zeitauswertung

**Pro Board:**

1. Öffne Board
2. Klicke auf **"Zeitauswertung"**
3. Siehe Gesamt-Zeit pro Card
4. Siehe Gesamt-Zeit pro Benutzer

**Export:**

1. Klicke auf **"Als Excel exportieren"**
2. Excel-Datei mit allen Zeiterfassungen

**Pro Space:**

1. Öffne Space
2. Klicke auf **"Zeitauswertung"**
3. Siehe Gesamt-Zeit aller Boards

## Benachrichtigungen

### Benachrichtigungs-Center

**Zugriff:**

1. Klicke auf Glocken-Icon (🔔) oben rechts
2. Siehe alle Benachrichtigungen

**Anzeige:**

- Ungelesene Benachrichtigungen (fett)
- Gelesene Benachrichtigungen (normal)
- Zeitstempel
- Link zum Objekt

### Benachrichtigungs-Arten

**Card-Benachrichtigungen:**

- Neue Card zugewiesen
- Card-Status geändert
- Kommentar hinzugefügt
- Deadline erreicht/überschritten
- @-Mention

**Meeting-Benachrichtigungen:**

- Neues Meeting erstellt
- Meeting-Status geändert
- Traktandum hinzugefügt
- Beschluss erstellt

**Board-Benachrichtigungen:**

- Neues Board erstellt
- Board archiviert

### E-Mail-Benachrichtigungen

**Konfiguration:**

1. Öffne **Benutzer-Einstellungen**
2. Wähle **"Benachrichtigungen"**
3. Aktiviere/Deaktiviere:
   - Card-Zuordnungen
   - Kommentare
   - Status-Änderungen
   - Meeting-Einladungen
   - Deadline-Erinnerungen

**Frequenz:**

- Sofort (bei jeder Änderung)
- Täglich (Zusammenfassung)
- Wöchentlich (Digest)
- Aus (keine E-Mails)

### Benachrichtigungen verwalten

**Als gelesen markieren:**

1. Klicke auf Benachrichtigung
2. Automatisch als gelesen markiert

**Alle als gelesen:**

1. Öffne Benachrichtigungs-Center
2. Klicke auf **"Alle als gelesen markieren"**

**Benachrichtigung löschen:**

1. Hover über Benachrichtigung
2. Klicke auf **"Löschen"** (🗑️)

**Alle löschen:**

1. Klicke auf **"Alle löschen"**
2. Bestätige

## Historie und Audit-Log

### Änderungshistorie

**Alle Änderungen werden protokolliert:**

- Wer hat geändert
- Was wurde geändert
- Wann wurde geändert
- Alte und neue Werte

**Verfügbar für:**

- ✅ Spaces
- ✅ Boards
- ✅ Cards
- ✅ Meetings
- ✅ Meetingitems
- ✅ Decisions
- ✅ Files

### Historie ansehen

**Schritt-für-Schritt:**

1. Öffne Objekt
2. Klicke auf Tab **"Historie"** oder **"Änderungslog"**
3. Siehe chronologische Liste aller Änderungen

**Anzeige:**

```text
15.01.2025 14:30 - Max Muster
   Status: "doing" → "done"

15.01.2025 10:15 - Anna Beispiel
   Beschreibung aktualisiert
   Deadline: 20.01.2025 → 18.01.2025

14.01.2025 09:00 - Peter Test
   Card erstellt
```

### Version wiederherstellen

**Für Files mit reversion:**

1. Öffne Datei-Historie
2. Wähle Version
3. Klicke auf **"Wiederherstellen"**

**Für andere Objekte:**

1. Siehe Historie
2. Kopiere alte Werte
3. Bearbeite Objekt manuell

## Team-Collaboration Best Practices

### ✅ Kommunikation

**Empfehlungen:**

1. **Kommentare statt E-Mail**: Diskussion direkt bei der Aufgabe
2. **@-Mentions nutzen**: Aufmerksamkeit gezielt lenken
3. **Regelmässige Updates**: Status und Fortschritt dokumentieren
4. **Konstruktives Feedback**: Höflich und lösungsorientiert
5. **Zusammenfassungen**: Lange Diskussionen zusammenfassen

### ✅ Dateiverwaltung

**Empfehlungen:**

1. **Klare Dateinamen**: "Entwurf_Homepage_V1.png" statt "image.png"
2. **Versionierung**: V1, V2, V3 in Dateinamen
3. **Beschreibungen**: Immer kurze Beschreibung hinzufügen
4. **Aufräumen**: Alte Entwürfe löschen oder archivieren
5. **Zentrale Ablage**: Wichtige Dokumente im Space-Root

### ✅ Checklisten

**Empfehlungen:**

1. **Akzeptanzkriterien**: Bei jeder Card definieren
2. **Kleinteilig**: Max. 5-10 Items pro Checkliste
3. **Messbar**: Items sollten klar abhakbar sein
4. **Priorisierung**: Wichtigste Items zuerst
5. **Review**: Vor Card-Abschluss alle Items prüfen

### ✅ Benachrichtigungen

**Empfehlungen:**

1. **E-Mail-Digest**: Täglich statt sofort (weniger Unterbrechungen)
2. **Kritische Benachrichtigungen**: Sofort für wichtige Events
3. **Regelmässig prüfen**: Täglich Benachrichtigungs-Center checken
4. **Aufräumen**: Alte Benachrichtigungen löschen
5. **Nicht spammen**: @-Mentions gezielt einsetzen

## Häufige Fehler

### ❌ Keine Kommentare

**Problem:** Diskussion per E-Mail, nicht nachvollziehbar

**Lösung:** Diskussion in Kommentaren führen

### ❌ Unstrukturierte Dateien

**Problem:** "Unbenannt.pdf", "download (1).png"

**Lösung:** Aussagekräftige Dateinamen mit Versionsnummer

### ❌ Vergessene Checklisten

**Problem:** Card ohne Akzeptanzkriterien

**Lösung:** Bei jeder Card Checkliste mit Definition of Done

### ❌ Ignorierte Benachrichtigungen

**Problem:** 150+ ungelesene Benachrichtigungen

**Lösung:**

- Täglich durchsehen
- E-Mail-Digest aktivieren
- Unwichtige deaktivieren

### ❌ Fehlende Zeit-Erfassung

**Problem:** Keine Übersicht über Aufwand

**Lösung:** Zeit konsequent erfassen, auch rückwirkend möglich

## Nächste Schritte

Jetzt, wo du die Kollaborations-Features kennst, lerne im nächsten Kapitel:

- [Integration]({{< ref "07-integration" >}}): Verknüpfungen mit anderen ELIZA-Modulen

---

**Tipp**: Nutze Kommentare und Checklisten konsequent. Sie sind der Schlüssel zu erfolgreicher Zusammenarbeit im Team.
