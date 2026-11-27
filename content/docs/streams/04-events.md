---
title: "Events planen und verwalten"
description: ""
weight: "4"
tags:
  - "events"
  - "calendar"
  - "participants"
  - "invitations"
  - "ical"
  - "self-registration"
  - "waitlist"
  - "attendance"
  - "signature"
---


# Events planen und verwalten

Events ermöglichen dir, Termine zu organisieren, Teilnehmer einzuladen und Anwesenheit zu erfassen. In diesem Kapitel lernst du alle Funktionen kennen.

## Was sind Events?

Events sind Termine mit erweiterten Funktionen:

- **Datum und Uhrzeit**: Start- und Endzeit
- **Ort**: Physischer oder virtueller Veranstaltungsort
- **Teilnehmerverwaltung**: Einladungen, Zu- und Absagen
- **Anwesenheitsprüfung**: Wer hat tatsächlich teilgenommen?
- **Unterschriften**: Optionale digitale Signaturen
- **Kalender-Integration**: Export als iCal-Feed

## Events anzeigen

### Alle Events

**Navigationspfad:** News & Events → Events

Du siehst alle Events chronologisch sortiert nach Startdatum.

### Meine Events

**Navigationspfad:** News & Events → Meine Events

Zeigt nur Events, die dich betreffen:

- Events, zu denen du **eingeladen** bist
- Events, die du **erstellt** hast
- Events, bei denen du **Admin** oder **Anwesenheitsprüfer** bist

## Ein Event erstellen

### Direkt aus dem Newskanal

1. Öffne den gewünschten **Newskanal**
2. Klicke auf **Event hinzufügen**
3. Fülle das Formular aus
4. Speichere

### Über die Event-Übersicht

1. Navigiere zu **News & Events** → **Events**
2. Klicke auf **Event hinzufügen**
3. Wähle den **Newskanal** aus
4. Fülle das Formular aus
5. Speichere

## Das Event-Formular

### Grundlegende Felder

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| **Newskanal** | Ja | In welchem Kanal erscheint das Event |
| **Titel** | Ja | Name des Events |
| **Text** | Nein | Beschreibung (Markdown-Format) |
| **Bild** | Nein | Titelbild für das Event |

### Zeitangaben

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| **Startdatum** | Ja | Beginn des Events |
| **Enddatum** | Ja | Ende des Events |
| **Ganztägig** | Nein | Event ohne spezifische Uhrzeiten |
| **Veröffentlichungszeitpunkt** | Ja | Ab wann das Event sichtbar ist |

### Ort

| Feld | Beschreibung |
|------|--------------|
| **Ort** | Textbeschreibung (z.B. "Konferenzraum A") |
| **Ort (URL)** | Link zu Online-Meeting oder Kartenansicht |

> 💡 **Tipp:** Kombiniere beide Felder, z.B. "Zoom-Meeting" mit dem Einladungslink.

### Teilnehmer-Einstellungen

| Feld | Beschreibung |
|------|--------------|
| **Minimale Teilnehmerzahl** | Mindestanzahl für Durchführung |
| **Maximale Teilnehmerzahl** | Kapazitätsgrenze |
| **Anmeldefrist** | Bis wann Anmeldungen möglich sind |
| **Selbstanmeldung erlauben** | Personen können sich ohne Einladung selbst anmelden |
| **Unterschrift erforderlich** | Teilnehmer müssen digital unterschreiben |
| **Teilnehmerliste für alle sichtbar** | Standardmässig aktiv. Wenn deaktiviert, sehen nur Ersteller, Admins und Anwesenheitsprüfer die Namensliste – die Teilnehmerzahl bleibt für alle sichtbar |
| **Teilnahmebestätigung anbieten** | Anwesende Personen und die Event-Verwaltung können nach dem Event eine Teilnahmebestätigung als Word-Dokument herunterladen (siehe [Teilnahmebestätigung](#teilnahmebestätigung)) |
| **Vorlage Teilnahmebestätigung** | Optional: Word-Dokument aus dem DMS mit Platzhaltern. Leer lassen für die ELIZA-Standardvorlage |

### Verwaltung

| Feld | Beschreibung |
|------|--------------|
| **Admins** | Benutzer mit Vollzugriff auf das Event |
| **Anwesenheitsprüfer** | Wer die Teilnahme erfassen darf |
| **Kategorien** | Thematische Einordnung |

## Event-Detailansicht

![Event mit Teilnehmern](/docs/streams/images/event-participants.svg)

## Teilnehmende hinzufügen

Nach dem Erstellen eines Events kannst du als Event-Verwaltung (Ersteller, Admins, Anwesenheitsprüfer) Teilnehmende hinzufügen:

1. Öffne das Event und klicke auf das Personen-Icon (**Teilnehmende verwalten**)
2. Klicke auf **Hinzufügen**
3. Wähle die **Art der Aufnahme**:
   - **Einladen**: die Person erhält eine Einladung und sagt selbst zu oder ab
   - **Direkt anmelden**: die Person wird sofort mit Status «Zugesagt» eingetragen. Ist das Event ausgebucht, landet sie auf der Warteliste
4. Wähle die Personen aus:
   - **Einzelne Benutzer** auswählen
   - **Organisationseinheiten** (alle aktuellen Mitglieder)
5. Optional: eine **Mitteilung an die Personen** erfassen
6. Klicke auf **Hinzufügen**

Die Personen erhalten eine Benachrichtigung («Einladung zum Event» bzw. «Anmeldung zum Event»). Die Erfolgsmeldung zeigt, wie viele Personen eingeladen, direkt angemeldet oder auf die Warteliste gesetzt wurden.

> 💡 **Tipp für Personen ohne Systemzugang:** Mit «Direkt anmelden» trägst du Personen ein, die sich nicht selbst anmelden. Offene Einladungen kannst du in der Liste **Eingeladen** mit dem grünen Knopf **Anmeldung bestätigen** im Namen der Person zusagen.

Der Knopf **Hinzufügen** bleibt für die Event-Verwaltung bis zum Event-Ende sichtbar, auch nach Ablauf der Anmeldefrist. Die Anmeldefrist gilt nur für die Selbstanmeldung.

## Einladungen beantworten

Als eingeladene Person siehst du das Event unter **Meine Events**:

### Zusagen

1. Öffne das Event
2. Klicke auf **Zusagen** (grüner Button)
3. Falls erforderlich: Unterschreibe digital

### Absagen

1. Öffne das Event
2. Klicke auf **Absagen** (roter Button)

### Status-Übersicht

| Status | Bedeutung | Icon |
|--------|-----------|------|
| **Eingeladen** | Keine Antwort bisher | ✉️ |
| **Zugesagt** | Teilnahme bestätigt | ✓ |
| **Warteliste** | Event ausgebucht, du rückst bei freien Plätzen nach | ⏳ |
| **Abgelehnt** | Kann nicht teilnehmen | ✗ |

> 💡 **Hinweis:** Hast du abgesagt, kannst du es dir anders überlegen – auf der Event-Seite erscheint ein Hinweis mit einem **Zusagen**-Button, solange das Event nicht vorbei ist. An-, Ab- und Zusagen werden jeweils mit einer Sicherheitsabfrage bestätigt.

## Anmeldefrist

Wenn eine **Anmeldefrist** gesetzt ist:

- Vor der Frist: Zusagen und Absagen möglich
- Nach der Frist: Keine Änderungen mehr möglich

> 💡 **Tipp:** Setze die Anmeldefrist einige Tage vor dem Event, damit du planen kannst.

## Selbst anmelden (ohne Einladung)

Ist bei einem Event **Selbstanmeldung erlauben** aktiviert, kannst du dich ohne persönliche Einladung selbst eintragen.

### In der Events-Übersicht

In der Liste **News & Events → Events** siehst du zwei Spalten, die dir die Anmeldung erleichtern:

- **Plätze**: zeigt freie Plätze an (z.B. «3 / 10»), «Ausgebucht» oder «Unbegrenzt»
- **Anmeldung**: zeigt deinen aktuellen Status (Angemeldet / Warteliste / Eingeladen) oder einen Button **Anmelden** bzw. **Auf Warteliste** – je nachdem, ob noch Plätze frei sind

Ist die Anmeldefrist abgelaufen oder das Event bereits beendet, ist keine Anmeldung mehr möglich; das wird entsprechend angezeigt.

### Auf der Event-Seite

Öffnest du das Event, zeigt dir ein farbiges Banner deinen Status:

- **Anmelden-Banner**: «Du kannst dich selbst für dieses Event anmelden» mit Button **Anmelden** (oder **Auf Warteliste setzen**, wenn das Event voll ist)
- **Status-Banner**: «Du bist für dieses Event angemeldet» bzw. «Du bist auf der Warteliste» – mit Button **Abmelden**

Ist ein Event ausgebucht, landest du beim Anmelden automatisch auf der **Warteliste** und rückst nach, sobald ein Platz frei wird.

## Anwesenheit selbst bestätigen

Während ein Event läuft, kannst du als angemeldete Person deine Anwesenheit direkt selbst bestätigen:

1. Öffne das Event (während es läuft)
2. Im Status-Banner erscheint der Button **Anwesenheit bestätigen** (bzw. **Anwesenheit mit Unterschrift bestätigen**)
3. Verlangt das Event eine Unterschrift, unterschreibst du direkt auf dem Bildschirm und bestätigst mit **Unterzeichnen**
4. Danach zeigt das Banner «Deine Anwesenheit ist bestätigt»

Das Unterschrift-Fenster zeigt dir klar, um welches Event es geht (Titel, Datum, Ort) und auf welchen Namen unterschrieben wird.

> ⚠️ **Hinweis:** Der Button erscheint nur, solange das Event läuft. Sobald deine Anwesenheit bestätigt ist, kannst du dich nicht mehr abmelden.

## Teilnehmerlimits

Mit **minimaler** und **maximaler Teilnehmerzahl** kannst du:

- **Minimum**: Sicherstellen, dass genug Personen dabei sind
- **Maximum**: Kapazitätsgrenzen einhalten

Wenn das Maximum erreicht ist, können keine weiteren Personen zusagen.

## Unterschrift erforderlich

Bei aktivierter Option **Unterschrift erforderlich**:

1. Teilnehmer müssen beim Zusagen digital unterschreiben
2. Die Unterschrift wird gespeichert
3. Admins können die Unterschriften einsehen

Dies ist nützlich für:
- Schulungen mit Nachweispflicht
- Sicherheitsunterweisungen
- Verbindliche Anmeldungen

## Anwesenheit erfassen

Als **Anwesenheitsprüfer** oder **Admin** kannst du die tatsächliche Teilnahme erfassen:

1. Öffne das Event
2. Gehe zu **Teilnehmer**
3. Markiere anwesende Personen
4. Bei Bedarf: Lasse Teilnehmer vor Ort unterschreiben

Auf der Teilnehmer-Seite hast du zusätzlich:

- **Anwesenheitsliste**: alle als anwesend markierten Personen. Bei unterschriftspflichtigen Events siehst du pro Person, ob die Unterschrift vorliegt («Signiert») oder noch fehlt («Unterschrift offen»). Fehlende Unterschriften kannst du über **Unterschrift nachtragen** erfassen.
- **Abwesend**: zugesagte Personen, die noch nicht als anwesend markiert sind – so erkennst du auf einen Blick, wer fehlt.
- **Excel-Export**: die Anwesenheitsliste lässt sich als Excel-Datei exportieren (inkl. Unterschriftsbild).
- **Teilnahmebestätigung**: ist sie im Event aktiviert, lädst du pro anwesende Person eine Word-Bestätigung oder alle zusammen als ZIP (siehe unten).

Anwesenheit und Unterschrift lassen sich auch **nach dem Event** noch erfassen oder nachtragen.

> 💡 **Hinweis:** Teilnehmende werden mit Avatar dargestellt. Der Name ist nur für berechtigte Personen (mit der Berechtigung «Benutzer ansehen») anklickbar.

## Teilnahmebestätigung

Für Kurse und Schulungen kann ELIZA eine **Teilnahmebestätigung als Word-Dokument** erzeugen.

### Aktivieren

1. Öffne das Event zum Bearbeiten
2. Aktiviere im Abschnitt **Anmeldung & Teilnehmer** den Schalter **Teilnahmebestätigung anbieten**
3. Optional: wähle unter **Vorlage Teilnahmebestätigung** ein Word-Dokument aus dem DMS. Ohne Vorlage verwendet ELIZA die Standardvorlage (Logo der Installation, Titel, Name, Event, Datum, Ort, Unterschriftslinie)

Beim Kopieren eines Events werden Schalter und Vorlage mitkopiert.

### Herunterladen

Eine Bestätigung gibt es nur für Personen mit **bestätigter Anwesenheit**:

- **Teilnehmende** laden ihre eigene Bestätigung auf der Event-Seite (Banner «Deine Anwesenheit ist bestätigt» › **Teilnahmebestätigung herunterladen**), in **Meine Events** oder in ihrer Event-Historie auf der Mitarbeitenden-Seite
- Die **Event-Verwaltung** findet in der **Anwesenheitsliste** pro Person das Bestätigungs-Symbol sowie oben rechts das Symbol **Alle Bestätigungen (ZIP)**

### Eigene Word-Vorlage

Lade ein Word-Dokument (.docx) ins DMS hoch und verwende darin diese Platzhalter:

| Platzhalter | Inhalt |
|------|--------------|
| `{{ teilnehmer_name }}` | Name der Person |
| `{{ event_titel }}` | Titel des Events |
| `{{ event_datum }}` | Datum bzw. Zeitraum des Events (formatiert) |
| `{{ start_datum }}`, `{{ end_datum }}` | Start- und Enddatum |
| `{{ ort }}` | Ort |
| `{{ newskanal }}` | Newskanal (Veranstalter) |
| `{{ event_text }}` | Beschreibung des Events als Klartext |
| `{{ ausgestellt_von }}` | Name der Person, die das Event erstellt hat |
| `{{ heute_datum }}` | Datum der Erstellung der Bestätigung |
| `{{ firma_name }}` | Name aus den Whitelabel-Einstellungen (App-Name) |
| `{{ logo_bild }}` | Logo der Installation (Word-Logo aus den Whitelabel-Einstellungen) |
| `{{ event_bild }}` | Titelbild des Events, falls vorhanden |
| `{{ unterschrift_bild }}` | Unterschrift der Person, falls beim Event erfasst |

Bedingungen sind möglich, z.B. `{% if ort %}Ort: {{ ort }}{% endif %}`.

## Event anheften (Sticky)

Wichtige Events können angeheftet werden:

1. Bearbeite das Event
2. Aktiviere **Angeheftet**
3. Setze **Start-** und optional **Enddatum**
4. Speichere

Angeheftete Events erscheinen prominent auf der Startseite.

## Event kopieren

Für wiederkehrende Events:

1. Öffne das Event
2. Klicke auf **Kopieren** (falls verfügbar)
3. Passe Datum und Details an
4. Speichere als neues Event

## Kalender-Integration

### iCal-Feed abonnieren

ELIZA bietet einen persönlichen iCal-Feed für deine Events:

1. Navigiere zu **News & Events** → **Events**
2. Suche nach dem **Kalender-Link** oder **iCal-Button**
3. Kopiere die URL
4. Füge sie in deiner Kalender-App hinzu (Outlook, Google Calendar, Apple Kalender)

Der Feed aktualisiert sich automatisch mit neuen Events.

### Einzelnes Event herunterladen (.ics)

Jedes Event lässt sich einzeln als .ics-Datei herunterladen und in Outlook, Google Kalender oder Apple Kalender öffnen:

- Auf der **Event-Seite** über das Kalender-Symbol oben rechts (**Termin herunterladen (.ics)**)
- In **Meine Events** über das Kalender-Symbol in der Spalte «Aktionen»
- Auf der **Teilnehmerseite** über das Kalender-Symbol neben dem Excel-Export

Die Datei enthält Titel, Zeit, Ort, Beschreibung und den Link zurück ins Event. Wer den iCal-Feed abonniert hat, erhält keinen Doppeltermin: Datei und Feed verwenden dieselbe Termin-Kennung.

## Benachrichtigungen

Als Event-Admin kannst du Teilnehmer benachrichtigen:

1. Öffne das Event
2. Klicke auf **Benachrichtigen** oder das Glocken-Icon
3. Wähle die Zielgruppe:
   - Alle Eingeladenen
   - Nur Zugesagte
   - Nur Eingeladene (ohne Antwort)
4. Füge optional eine Nachricht hinzu
5. Sende die Benachrichtigung

## Event bearbeiten

1. Öffne das Event
2. Klicke auf **Bearbeiten** (Stift-Icon)
3. Nimm Änderungen vor
4. Speichere

> ⚠️ **Wichtig:** Informiere Teilnehmer über wesentliche Änderungen (Datum, Ort).

## Event löschen

1. Öffne das Event
2. Klicke auf **Löschen** (Papierkorb-Icon)
3. Bestätige die Löschung

Eingeladene Teilnehmer werden **nicht automatisch** benachrichtigt. Nutze vorher die Benachrichtigungsfunktion.

## Best Practices

- ✅ **Frühzeitig erstellen**: Gib Teilnehmern genug Vorlauf
- ✅ **Anmeldefrist setzen**: Ermöglicht bessere Planung
- ✅ **Ort und URL kombinieren**: Für hybride Events
- ✅ **Teilnehmerlimits nutzen**: Bei begrenzten Räumen
- ✅ **Kalender-Feed bewerben**: Erleichtert die Integration
- ✅ **Erinnerungen senden**: Kurz vor dem Event benachrichtigen
- ✅ **Anwesenheit erfassen**: Für Dokumentation und Nachverfolgung

## Häufige Fragen

### Kann ich die Teilnehmerliste exportieren?

Ja, als Admin siehst du die vollständige Teilnehmerliste mit Status und kannst diese exportieren.

### Was passiert, wenn ich ein Event absage?

Dein Status ändert sich zu "Abgelehnt". Du kannst es dir anders überlegen: Auf der Event-Seite erscheint ein **Zusagen**-Button, solange das Event nicht vorbei ist – das gilt auch für Events ohne Selbstanmeldung. Hast du deine Anwesenheit aber bereits bestätigt, ist eine Abmeldung nicht mehr möglich.

### Kann ich mich nach einer Abmeldung wieder anmelden?

Ja. Bei Events mit Selbstanmeldung erscheint wieder der **Anmelden**-Button, bei Einladungs-Events ein **Zusagen**-Button – jeweils solange das Event nicht beendet ist.

### Werden Teilnehmer bei Änderungen benachrichtigt?

Nicht automatisch. Nutze die Benachrichtigungsfunktion, um über wichtige Änderungen zu informieren.

### Kann ich ein Event wiederholen?

Nutze die Kopier-Funktion und passe das Datum an. Automatische Wiederholungen werden aktuell nicht unterstützt.

### Wie synchronisiere ich Events mit meinem Kalender?

Abonniere den iCal-Feed in deiner Kalender-App. Der Feed aktualisiert sich automatisch.

## Nächste Schritte

- Verstehe das [Berechtigungskonzept]({{< ref "05-berechtigungen" >}})
- Kehre zur [Übersicht](./) zurück
