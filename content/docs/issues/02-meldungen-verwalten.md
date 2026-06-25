---
title: "Meldungen verwalten"
description: ""
weight: "2"
tags:
  - "meldungen"
  - "bearbeiten"
  - "status"
  - "workflow"
  - "kommentare"
---


# Meldungen verwalten

In diesem Kapitel lernst du alle Funktionen rund um die Verwaltung von Meldungen kennen. Du erfährst, wie du Meldungen erstellst, bearbeitest, kommentierst und durch den Workflow führst.

## Meldung erstellen

### Standard-Erfassung (angemeldete Benutzer)

**Schritt 1: Zum Meldekreis navigieren**

1. Öffne das Meldungen-Dashboard
2. Klicke auf den gewünschten Meldekreis
3. Klicke auf **"Neue Meldung"**

**Schritt 2: Pflichtfelder ausfüllen**

| Feld | Beschreibung | Beispiel |
|------|-------------|----------|
| **Titel** | Kurze, prägnante Beschreibung | "Drucker im 2. OG druckt nicht" |
| **Ereignisdatum** | Wann ist es aufgetreten? | 15.01.2025 14:30 |

**Schritt 3: Optionale Felder ergänzen**

| Feld | Beschreibung |
|------|-------------|
| **Beschreibung** | Ausführliche Schilderung des Problems |
| **Kategorien** | Labels zur Klassifizierung |
| **Mögliche Massnahmen** | Dein Lösungsvorschlag |
| **Referenznummer** | Externe Referenz (z.B. Kundennummer) |
| **Dateien** | Screenshots, Dokumente |

**Schritt 4: Kontaktdaten (falls gewünscht)**

- Anrede, Vorname, Nachname
- E-Mail-Adresse
- Telefonnummer

**Schritt 5: Speichern**

Klicke auf **"Speichern"** um die Meldung zu erstellen.

### Anonyme Meldungen

Wenn der Meldekreis anonyme Meldungen erlaubt:

1. Aktiviere die Checkbox **"Anonyme Meldung"**
2. Deine Identität wird nicht mit der Meldung verknüpft
3. Kontaktdaten können trotzdem optional angegeben werden

> **⚠️ Wichtig:** Bei anonymen Meldungen kannst du nicht mehr auf die Meldung zugreifen, nachdem du sie erstellt hast – es sei denn, du gibst eine E-Mail-Adresse an.

### Öffentliche Formulare (ohne Anmeldung)

Einige Meldekreise bieten öffentliche Formulare an, die ohne ELIZA-Anmeldung zugänglich sind:

1. Rufe den Link zum öffentlichen Formular auf
2. Fülle die Pflichtfelder aus
3. Gib eine E-Mail-Adresse an (falls erforderlich)
4. Du erhältst per E-Mail einen Link zum Nachverfolgen

> **💡 Tipp:** Öffentliche Formulare eignen sich besonders für Kundenreklamationen oder Feedback von externen Personen.

## Meldungsdetails verstehen

### Kopfbereich

Im Kopfbereich einer Meldung siehst du:

- **Meldungsnummer**: Eindeutige Kennung (z.B. #42 oder BUG-042)
- **Titel**: Beschreibung der Meldung
- **Status**: Aktueller Bearbeitungsstand
- **Klassifikation**: Vertraulichkeitsstufe (öffentlich, vertraulich, geheim)

### Hauptbereich

Der Hauptbereich enthält:

- **Beschreibung**: Vollständiger Text der Meldung
- **Mögliche Massnahmen**: Vorgeschlagene Lösung
- **Kategorien**: Zugeordnete Labels
- **Betroffene Prozesse**: Verknüpfte Geschäftsprozesse

### Seitenbereich

Im Seitenbereich findest du:

| Information | Beschreibung |
|-------------|-------------|
| **Meldekreis** | Zugehöriger Meldekreis |
| **Erstellt am** | Erstellungsdatum |
| **Erstellt von** | Ersteller (falls nicht anonym) |
| **Zuständig** | Aktuell zuständige Person |
| **Frist** | Bearbeitungsfrist |
| **Ereignisdatum** | Wann das Ereignis stattfand |

### Kommentarbereich

Der Kommentarbereich zeigt den gesamten Verlauf:

- Alle Kommentare chronologisch
- Systemkommentare (Statusänderungen, Zuweisungen)
- Angehängte Dateien

## Status-Workflow

> **Eigene Workflow-Status**: Du kannst pro Meldekreis eigene Workflow-Status mit Kanban-Board definieren — statt der klassischen sieben Status. Die Funktion ist standardmässig deaktiviert und wird von einem Meldungs-Admin unter **Meldungen → Einstellungen → Benutzerdefinierte Workflow-Status** aktiviert. Details siehe [Kapitel 3: Eigene Workflow-Status]({{< ref "03-meldekreise-verwalten#eigene-workflow-status" >}}).

### Übersicht der Status

Meldungen durchlaufen einen definierten Workflow:

<pre>
┌─────────────────────────────────────────────────────────────────────┐
│                        Status-Workflow                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│    ┌───────┐                                                        │
│    │  Neu  │ ─────────────────────────────────────┐                 │
│    └───┬───┘                                      │                 │
│        │                                          │                 │
│        ▼                                          ▼                 │
│  ┌────────────┐     ┌────────────┐     ┌──────────────────┐         │
│  │ In Prüfung │ ──► │ Akzeptiert │ ──► │  In Bearbeitung  │         │
│  └─────┬──────┘     └──────┬─────┘     └────────┬─────────┘         │
│        │                  │                     │                   │
│        ▼                  ▼                     ▼                   │
│  ┌──────────────┐   ┌──────────────────────────────────┐            │
│  │Zurückgewiesen│   │     Wirksamkeitsprüfung          │            │
│  └──────────────┘   └──────────────┬───────────────────┘            │
│                                   │                                 │
│                                   ▼                                 │
│                            ┌──────────┐                             │
│                            │ Erledigt │                             │
│                            └──────────┘                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
</pre>

### Status-Beschreibungen

| Status | Bedeutung | Typische Aktion |
|--------|-----------|-----------------|
| **Neu** | Frisch erstellt, unbearbeitet | Erste Sichtung |
| **In Prüfung** | Wird auf Relevanz geprüft | Entscheiden: Akzeptieren oder Ablehnen |
| **Akzeptiert** | Angenommen, wartet auf Bearbeitung | Ressourcen zuweisen |
| **In Bearbeitung** | Aktiv bearbeitet | Lösung umsetzen |
| **Wirksamkeitsprüfung** | Lösung umgesetzt, wird geprüft | Erfolg bestätigen |
| **Erledigt** | Abgeschlossen | Archivierung |
| **Zurückgewiesen** | Abgelehnt | Begründung dokumentieren |

### Status ändern

Als Bearbeiter kannst du den Status ändern:

1. Öffne die Meldung
2. Im Bereich **"Aktion"** siehst du verfügbare Statusübergänge
3. Wähle die gewünschte Aktion
4. Optional: Füge einen Kommentar hinzu
5. Klicke auf **"Speichern"**

> **💡 Tipp:** Nicht alle Statusübergänge sind immer möglich. Das System zeigt nur die erlaubten Aktionen an.

### Meldung wieder öffnen

Eine abgeschlossene oder zurückgewiesene Meldung kann wieder geöffnet werden:

1. Öffne die geschlossene Meldung
2. Wähle die Aktion **"Wieder öffnen"**
3. Füge eine Begründung als Kommentar hinzu
4. Die Meldung wechselt zurück zu **"In Prüfung"**

## Meldungen bearbeiten

### Grunddaten ändern

Als Bearbeiter kannst du die Meldungsdetails anpassen:

1. Öffne die Meldung
2. Klicke auf **"Bearbeiten"** (Stift-Icon)
3. Ändere die gewünschten Felder
4. Klicke auf **"Speichern"**

### Änderbare Felder

| Feld | Beschreibung |
|------|-------------|
| Titel | Anpassung der Bezeichnung |
| Beschreibung | Ergänzung oder Korrektur |
| Ereignisdatum | Korrektur des Datums |
| Referenznummer | Externe Referenz ergänzen |
| Kosten | Entstandene Kosten dokumentieren |
| Mögliche Massnahmen | Lösungsvorschläge ergänzen |
| Kategorien | Labels hinzufügen oder entfernen |
| Klassifikation | Vertraulichkeit anpassen |
| Kontaktdaten | Anpassen der Kontaktinformationen |
| Erstellungsdatum | Korrektur (nur Admins) |
| Abschlussdatum | Manuell setzen |
| Archiviert | Meldung ausblenden |

## Kommentare und Kommunikation

### Kommentar hinzufügen

1. Öffne die Meldung
2. Scrolle zum Bereich **"Antworten"**
3. Gib deinen Kommentar ein
4. Optional: Aktiviere **"Interner Kommentar"**
5. Optional: Füge Dateien hinzu
6. Klicke auf **"Antworten"**

### Interne Kommentare

Interne Kommentare sind nur für Admins und Team-Mitglieder des Meldekreises sichtbar:

- Nutze sie für vertrauliche Notizen
- Ersteller der Meldung sehen interne Kommentare nicht
- Externe Beteiligte erhalten keine Benachrichtigung

> **💡 Tipp:** Interne Kommentare eignen sich für Rücksprachen im Team, bevor eine offizielle Antwort erfolgt.

### Dateien anhängen

Du kannst Dateien sowohl bei der Erstellung als auch in Kommentaren anhängen:

**Unterstützte Dateitypen:**

- Bilder (JPG, PNG, GIF)
- Dokumente (PDF, Word, Excel)
- Archive (ZIP)
- Sonstige Dateien

**Vorgehensweise:**

1. Klicke auf **"Dateien auswählen"**
2. Wähle eine oder mehrere Dateien
3. Die Dateien werden beim Speichern hochgeladen

### Benachrichtigungen

Beim Kommentieren kannst du auswählen, wer benachrichtigt wird:

- **Interne Benutzer**: Admins, Team-Mitglieder, Beitragende
- **Externer Benutzer**: Kontaktperson der Meldung (falls E-Mail vorhanden)

Die Checkbox-Liste zeigt:

- 👁️ = Benutzer kann die Meldung aktuell einsehen
- 🚫 = Benutzer kann die Meldung erst nach Statusänderung sehen

### Meldungen abonnieren (Favoriten-Stern)

Mit dem Stern oben rechts in der Meldung abonnierst du Benachrichtigungen für diese Meldung – der Stern ist auch im Meldungs-Modal des Kanban-Boards verfügbar:

1. Öffne die gewünschte Meldung
2. Klicke auf den **Stern** – die Meldung wird als Favorit markiert und du bist abonniert
3. Ab sofort erhältst du bei jeder neuen Antwort eine **Benachrichtigung im Dashboard**
4. Zum Abbestellen klickst du einfach erneut auf den Stern

Das Umschalten funktioniert ohne Neuladen der Seite. Die Meldung erscheint zusätzlich in deinen Favoriten auf dem Dashboard.

![Übersicht: Wer wird bei einer neuen Antwort benachrichtigt – die zwei Modi im Vergleich](/docs/issues/images/favoriten_benachrichtigungen.svg)

**Wer wird bei einer neuen Antwort benachrichtigt?**

Das hängt vom Modus des Meldekreises ab (Schalter «Automatische E-Mails an alle Beteiligten versenden», siehe [Meldekreise verwalten]({{< ref "03-meldekreise-verwalten" >}})):

| Empfänger | Schalter aktiviert | Schalter deaktiviert |
| --- | :---: | :---: |
| Zugewiesene Person | ✓ | ✓ |
| Ausgewählte Empfänger der Antwort | ✓ | ✓ |
| ⭐ Favoriten-Abonnenten | ✓ | ✓ |
| Admins des Meldekreises | ✓ | – |
| Alle Beitragenden | ✓ | – |
| Zentrale Benachrichtigungs-E-Mail | ✓ | – |

> **💡 Hinweis:** Als ELIZA-Benutzer erhältst du Benachrichtigungen direkt im Dashboard (Glocke). Direkte E-Mails gehen nur an externe Adressen. Ob du zusätzlich E-Mails erhältst, steuerst du in deinen persönlichen Einstellungen mit «Benachrichtigungen per E-Mail erhalten».

## Zuständigkeit und Fristen

### Zuständigkeit zuweisen

1. Öffne die Meldung
2. Im Feld **"Neue Zuständigkeit"** wähle eine Person
3. Nur Admins und Team-Mitglieder des Meldekreises stehen zur Auswahl
4. Speichere die Änderung

Der zuständige Benutzer:

- Erhält eine Benachrichtigung
- Sieht die Meldung unter "Mir zugewiesen"
- Wird automatisch als Beitragender hinzugefügt

### Frist setzen

1. Öffne die Meldung
2. Im Feld **"Frist"** wähle ein Datum
3. Speichere die Änderung

Frist-Anzeige:

- Überfällige Fristen werden rot markiert
- Meldungen mit Frist erscheinen in der Übersicht priorisiert

## Meldungen verschieben

Du kannst Meldungen zwischen Meldekreisen verschieben:

### Voraussetzungen

- Du hast Bearbeitungsrechte an der Meldung
- Du hast Erstellungsrechte im Ziel-Meldekreis
- Der Ziel-Meldekreis hat gleiche oder höhere Sichtbarkeit

### Vorgehensweise

1. Öffne die Meldung
2. Klicke auf **"Verschieben"** (in den Aktionen)
3. Wähle den **Ziel-Meldekreis**
4. Wähle, welche **Labels übernommen** werden sollen
5. Optional: Wähle die Weiterleitung nach dem Verschieben
6. Klicke auf **"Verschieben"**

### Was passiert beim Verschieben?

- Die Meldung erhält eine **neue Laufnummer** im Ziel-Meldekreis
- Der **Status wird auf "Neu" zurückgesetzt**
- Ein **Systemkommentar** dokumentiert die Verschiebung
- Labels werden bei Bedarf im Ziel-Meldekreis **neu erstellt**
- Falls der zuständige Benutzer nicht im Ziel-Meldekreis berechtigt ist, wird die **Zuständigkeit entfernt**

> **⚠️ Wichtig:** Eine Verschiebung in einen Meldekreis mit niedrigerer Sichtbarkeit ist nicht möglich (z.B. von "geschützt" nach "normal").

## Zeiterfassung auf Meldungen

Wenn die Zeiterfassung für den Meldekreis aktiviert ist, kannst du Arbeitszeit erfassen:

### Arbeitszeit erfassen

1. Öffne die Meldung
2. Im Bereich **"Zeiterfassung"** siehst du:
   - Projektaufgabe
   - Arbeitszeit-Typ
   - Datum
   - Zeitaufwand (Format HH:MM)
3. Fülle die Felder aus
4. Speichere mit dem Kommentar

### Erfasste Zeiten einsehen

Die erfassten Arbeitszeiten werden:

- Im Timetracker-Modul angezeigt
- Mit der Meldung verknüpft
- Für Auswertungen verwendet

## Boards-Integration

Meldungen können mit Team-Boards verknüpft werden:

### Meldung zu Board hinzufügen

1. Öffne die Meldung
2. Klicke auf **"Zu Board hinzufügen"**
3. Wähle ein bestehendes Board **oder**
4. Erstelle ein neues Board (Titel + Space angeben)
5. Speichere

Die Meldung erscheint als Karte auf dem gewählten Board und kann dort im Kanban-Stil bearbeitet werden.

## Meldungen exportieren

Als Admin kannst du Meldungen eines Meldekreises exportieren:

### Export starten

1. Öffne den Meldekreis
2. Klicke auf **"Export"** (Excel-Icon)
3. Wähle die zu exportierenden Status
4. Wähle, ob archivierte Meldungen eingeschlossen werden
5. Wähle das Ziel:
   - **Datei als Nachricht senden**: Du erhältst eine Nachricht mit der Datei
   - **In DMS-Ordner speichern**: Die Datei wird im Dokumentenmanagement abgelegt

Der Export wird im Hintergrund erstellt und du erhältst eine Benachrichtigung, sobald er fertig ist.

## Best Practices

### ✅ Empfehlungen

- **Klare Titel** verwenden, die das Problem sofort erkennen lassen
- **Reproduktionsschritte** in der Beschreibung angeben
- **Screenshots** bei visuellen Problemen anhängen
- **Status zeitnah aktualisieren** für transparente Kommunikation
- **Fristen setzen** um Verbindlichkeit zu schaffen
- **Interne Kommentare** für Team-Abstimmungen nutzen

### ❌ Fehler vermeiden

- Meldungen ohne Rückmeldung im Status "Neu" belassen
- Mehrere Probleme in einer Meldung vermischen
- Vertrauliche Informationen in öffentlichen Meldungen teilen
- Zuständigkeiten unklar lassen

## Zusammenfassung

Du hast gelernt, wie du:

- ✅ Meldungen erstellst (auch anonym oder öffentlich)
- ✅ Meldungsdetails verstehst
- ✅ Den Status-Workflow nutzt
- ✅ Meldungen bearbeitest und kommentierst
- ✅ Zuständigkeiten und Fristen verwaltest
- ✅ Meldungen zwischen Meldekreisen verschiebst

## Nächste Schritte

- Erfahre, wie du [Meldekreise konfigurierst]({{< ref "03-meldekreise-verwalten" >}})
- Verstehe das [Berechtigungskonzept]({{< ref "04-berechtigungskonzept" >}})
