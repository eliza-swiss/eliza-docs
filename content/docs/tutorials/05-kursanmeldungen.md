---
title: "Kursanmeldungen und Teilnehmerverwaltung"
description: ""
weight: "5"
tags:
  - "anmeldungen"
  - "enrollment"
  - "teilnehmer"
  - "fortschritt"
  - "zertifikate"
  - "fristen"
---


# Kursanmeldungen und Teilnehmerverwaltung

Die Teilnehmerverwaltung ermöglicht dir, Benutzer zu Kursen anzumelden, deren Fortschritt zu verfolgen und Zertifikate auszustellen.

## Übersicht

ELIZA kennt zwei sich ergänzende Konzepte, um Teilnehmende zuzuordnen:

### Anmeldung (Enrollment) vs. Einladung (Invitation)

| Aspekt | Anmeldung (Enrollment) | Einladung (Invitation) |
|--------|------------------------|------------------------|
| **Zielobjekt** | Ganzer Kurs | Einzelne Lektion / Artikel |
| **Verfügbar bei** | Schulungs-Modus | Schulungs- und Handbuch-Modus |
| **Fortschritt** | Über alle Lektionen | Nur für die eingeladene Lektion |
| **Frist** | Ja | Optional pro Lektion |
| **Zertifikat** | Möglich | Nicht direkt |
| **Anwendungsfall** | Vollständige Schulung | Gezielte Aufgabe / Lese-Auftrag |

> 💡 **Faustregel**: Soll jemand einen kompletten Kurs absolvieren, **anmelden**. Soll jemand einen bestimmten Artikel/eine Lektion lesen oder kommentieren, **einladen**.

Eine Kursanmeldung (Enrollment) in ELIZA:

- **Verknüpft einen Benutzer mit einem Kurs**
- **Verfolgt den Lernfortschritt** über alle Lektionen
- **Ermöglicht Fristen** für den Kursabschluss
- **Kann Unterschriften erfordern** beim Abschluss
- **Generiert Zertifikate** bei erfolgreicher Teilnahme

Eine Einladung (Invitation, intern `LessonInvite`):

- **Verknüpft einen Benutzer mit einer einzelnen Lektion oder einem Artikel**
- **Erstellt einen LessonProgress-Eintrag** für die eingeladene Lektion
- **Zeigt einen Einladungs-Banner** auf der Lektion/dem Artikel
- **Erscheint im "Für dich"-Bereich** im Wissenshub bis erledigt

---

## Einzelne Anmeldung erstellen

### Schritt-für-Schritt

1. **Öffne den Kurs**, zu dem du jemanden anmelden möchtest
2. **Wechsle zum Tab**: "Teilnehmende"
3. **Klicke auf**: "Teilnehmende hinzufügen" (grüner Button)
4. **Fülle das Formular aus**:
   - **Teilnehmende Person** (Pflicht): Wähle den Benutzer
   - **Startdatum** (Pflicht): Ab wann ist der Kurs verfügbar
   - **Frist für Kursabschluss**: Optional, Deadline
   - **Nachricht**: Persönliche Mitteilung an den Teilnehmer
   - **Unterschrift erforderlich**: Checkbox für Signatur beim Abschluss
5. **Klicke auf**: "Speichern"

Der Teilnehmer erhält eine Benachrichtigung über die Anmeldung.

---

## Massenanmeldung

### Mehrere Teilnehmer gleichzeitig anmelden

Für effiziente Anmeldungen mehrerer Personen:

1. **Navigiere zum Ordner** oder zur **globalen Einladungs-Seite** (`/tutorials/add_multiple_enrollments_global/`)
2. **Klicke auf**: "Anmeldungen hinzufügen" / "Neue Einladungen erstellen"
3. **Wähle die Kurse** (Mehrfachauswahl möglich)
4. **Wähle die Teilnehmer** (Mehrfachauswahl möglich)
5. **Setze gemeinsame Optionen**:
   - Startdatum
   - Frist
   - Nachricht
   - Unterschrift erforderlich
6. **Klicke auf**: "Anmeldungen erstellen"

> **💡 Tipp:** Die globale Einladungs-Seite ist ideal, wenn du mehreren Personen Kurse aus verschiedenen Ordnern in einem Schritt zuweisen willst.

---

## Einladung zu einzelnen Lektionen/Artikeln

Statt eines kompletten Kurses kannst du Personen gezielt zu einer **einzelnen Lektion** oder einem **Handbuch-Artikel** einladen.

### Anwendungsfälle

- Lese-Auftrag zu einem bestimmten Artikel im Handbuch
- Punktuelle Schulung zu einem einzelnen Thema
- Aufgabe an bestimmte Mitarbeitende ohne komplette Kursanmeldung

### Einladung erstellen

1. **Öffne die Lektion** oder den Handbuch-Artikel
2. **Klick auf das Personen-Icon** / "Einladen" in der Toolbar oder Sidebar
3. **Wähle die einzuladenden Personen** (Mehrfachauswahl)
4. **Optional**: Nachricht beifügen, Frist setzen
5. **Speichern** — die Einladung wird verschickt, ein `LessonProgress`-Eintrag mit Status "eingeladen" wird angelegt

Eingeladene Personen sehen:

- Einen **Einladungs-Banner** oben am Artikel/Lektion mit den Aktionen **"Start"** und **"Erledigt markieren"**
- Den Eintrag in der Sektion **"Für dich"** auf der Wissenshub-Startseite
- Auf der Handbuch-Startseite einen Hinweis-Banner, falls Einladungen im Handbuch offen sind

> 💡 Offene **Einladungs-Duplikate** werden auf der Lektion erkannt und in einem Banner angezeigt (z.B. wenn jemand mehrfach eingeladen wurde).

### Einladungen vs. Enrollments — was passiert intern

- Einladung schreibt einen `LessonProgress` mit `state="invited"` und einem **`sender`**, der die direkte Einladung markiert
- Anders als bei einer Anmeldung wird **kein Kurs-Enrollment** angelegt — die Person hat dadurch nicht automatisch Zugriff auf den ganzen Kurs (ausser bei **geschützten Kursen**: dort gibt die Einladung gezielt Lese-Zugriff auf diese Lektion, siehe [Kapitel 7]({{< ref "07-berechtigungen" >}}))

---

## Globaler Teilnehmer-Dashboard

Unter **Wissen & Lernen → Teilnehmer verwalten** findest du einen **globalen Dashboard** für alle Anmeldungen und Einladungen, die du verwalten darfst — Ordner- und Kurs-übergreifend.

Funktionen:

- Filter nach Kurs, Person, Status, Datum
- Massen-Aktionen: bearbeiten, benachrichtigen, löschen
- Direkt-Einstieg in die Detailseite jeder Anmeldung

Die alte Ansicht auf Ordner-Ebene gibt es weiterhin (über das Ordner-Menü), der globale Dashboard ist aber meist die erste Anlaufstelle für Admins, die mehrere Ordner betreuen.

---

## Anmeldestatus

### Statusübersicht

| Status | Symbol | Bedeutung |
|--------|--------|-----------|
| **Eingeladen** | 📨 | Teilnehmer wurde eingeladen, hat noch nicht begonnen |
| **Noch nicht begonnen** | ⏸️ | Anmeldung aktiv, Kurs noch nicht gestartet |
| **In Arbeit** | 🔄 | Kurs wird aktiv bearbeitet |
| **Abgeschlossen** | ✅ | Alle Anforderungen erfüllt |

### Statusübergänge

```
Eingeladen → In Arbeit (bei erstem Lektionsbesuch)
In Arbeit → Abgeschlossen (bei Kursabschluss)
```

---

## Fristen und Deadlines

### Frist setzen

Du kannst eine Frist für den Kursabschluss setzen:

1. Öffne die Anmeldung zur Bearbeitung
2. Wähle ein Datum im Feld "Frist für Kursabschluss"
3. Speichere

### Deadline-Warnungen

In der Teilnehmerübersicht werden Fristen farblich markiert:

| Farbe | Bedeutung |
|-------|-----------|
| **Grün** | Mehr als 7 Tage Zeit |
| **Orange** | Weniger als 7 Tage (dringend) |
| **Rot** | Überfällig |

> **💡 Tipp:** Nutze die Filterung in der Teilnehmerübersicht, um überfällige Anmeldungen schnell zu finden.

---

## Unterschrift beim Kursabschluss

### Unterschrift konfigurieren

Für Compliance- oder Pflichtschulungen kann eine digitale Unterschrift erforderlich sein:

1. Aktiviere "Unterschrift beim Abschluss erforderlich" bei der Anmeldung
2. Der Teilnehmer muss beim Kursabschluss digital unterschreiben
3. Die Unterschrift wird gespeichert und kann exportiert werden

### Kurs mit Unterschrift abschliessen (Teilnehmersicht)

1. Schliesse alle Lektionen ab
2. Klicke auf "Kurs abschliessen"
3. Es erscheint ein Unterschrifts-Dialog
4. Unterschreibe mit Maus oder Touch
5. Optional: Füge Abschlussnotizen hinzu
6. Bestätige den Abschluss

---

## Zertifikate

### Voraussetzungen

- Im Kurs muss eine **Zertifikatsvorlage** (Word-Dokument aus DMS) hinterlegt sein
- Die Anmeldung muss den Status **"Abgeschlossen"** haben

### Zertifikat generieren

Als Administrator:

1. Öffne die abgeschlossene Anmeldung
2. Klicke auf "Zertifikat generieren"
3. Das Word-Dokument wird mit den Teilnehmerdaten gefüllt
4. Lade das Zertifikat herunter

Als Teilnehmer:

1. Öffne den abgeschlossenen Kurs
2. Klicke auf "Zertifikat herunterladen"

### Platzhalter in Zertifikatsvorlagen

| Platzhalter | Wert |
|-------------|------|
| `{{ user.first_name }}` | Vorname |
| `{{ user.last_name }}` | Nachname |
| `{{ user.get_full_name }}` | Vollständiger Name |
| `{{ course.title }}` | Kurstitel |
| `{{ enrollment.completion_date }}` | Abschlussdatum |
| `{{ enrollment.start_date }}` | Startdatum |

---

## Lernfortschritt verfolgen

### Lektionsfortschritt (LessonProgress)

Für jede Lektion wird der individuelle Fortschritt erfasst:

| Status | Bedeutung |
|--------|-----------|
| **Eingeladen** | Lektion zugewiesen |
| **Noch nicht begonnen** | Noch nicht geöffnet |
| **In Arbeit** | Wird bearbeitet |
| **Abgeschlossen** | Erfolgreich beendet |
| **Keine Teilnahme** | Nicht erforderlich |

### Fortschrittsübersicht

**Kurs → Kursfortschritt (📊 Icon)**

Die Übersicht zeigt:

- Alle Teilnehmer mit ihrem Gesamtfortschritt
- Status jeder einzelnen Lektion
- Überfällige Anmeldungen hervorgehoben

### Matrix-Ansicht

| Teilnehmer | Lektion 1 | Lektion 2 | Lektion 3 | Gesamt |
|------------|-----------|-----------|-----------|--------|
| Max Muster | ✅ | 🔄 | ⬜ | 33% |
| Anna Beispiel | ✅ | ✅ | ✅ | 100% |

---

## Batch-Operationen

### Mehrere Anmeldungen bearbeiten

In der Teilnehmerübersicht:

1. **Aktiviere die Checkboxen** bei den gewünschten Anmeldungen
2. **Nutze die Toolbar** für Batch-Aktionen:

| Aktion | Beschreibung |
|--------|--------------|
| **Bearbeiten** | Status, Fristen für alle ändern |
| **Benachrichtigen** | E-Mail an ausgewählte senden |
| **Löschen** | Anmeldungen entfernen |

### Benachrichtigungen senden

1. Wähle die Anmeldungen aus
2. Klicke auf "Benachrichtigen"
3. Verfasse die Nachricht
4. Sende an alle ausgewählten Teilnehmer

> **💡 Tipp:** Nutze Benachrichtigungen, um an überfällige Kurse zu erinnern.

---

## Excel-Export

### Teilnehmerliste exportieren

1. **Navigiere zu**: Kursordner → Teilnehmer verwalten
2. **Klicke auf**: Excel-Export-Button
3. **Die Datei enthält**:
   - Ordner-Informationen
   - Kursübersicht
   - Teilnehmer mit Status und Fortschritt
   - Unterschriften (falls vorhanden)
   - Abschlussdaten und Fristen

Der Export eignet sich für:

- Compliance-Dokumentation
- Management-Reports
- Archivierung

---

## Anmeldung abschliessen

### Als Administrator

Du kannst den Status einer Anmeldung manuell ändern:

1. Öffne die Anmeldung
2. Ändere den Status auf "Abgeschlossen"
3. Setze das Abschlussdatum
4. Speichere

### Automatischer Abschluss

Eine Anmeldung kann automatisch abgeschlossen werden, wenn:

- Alle Lektionen als abgeschlossen markiert sind
- Alle erforderlichen Quiz bestanden wurden (falls konfiguriert)
- Der Teilnehmer den Abschluss bestätigt hat

---

## Best Practices

### ✅ Empfehlungen

- **Realistische Fristen setzen**: Genug Zeit für Bearbeitung einplanen
- **Erinnerungen senden**: Vor Fristablauf benachrichtigen
- **Massenanmeldung nutzen**: Für effizientes Onboarding
- **Fortschritt regelmässig prüfen**: Überfällige Anmeldungen identifizieren
- **Zertifikate anbieten**: Motiviert Teilnehmer
- **Unterschriften für Pflichtschulungen**: Compliance-Nachweis

### ❌ Häufige Fehler

- Zu knappe Fristen setzen
- Keine Erinnerungen senden
- Fortschritt nicht überwachen
- Zertifikatsvorlage vergessen
- Anmeldungen nicht aufräumen

---

## Anmeldung löschen

> **⚠️ Achtung:** Das Löschen einer Anmeldung entfernt alle Fortschrittsdaten und Unterschriften unwiderruflich!

1. Öffne die Anmeldung
2. Klicke auf das Löschen-Symbol
3. Bestätige die Aktion

---

## Nächste Schritte

- **[Kapitel 6: Quiz]({{< ref "06-quiz-abschlusstests" >}})**: Integriere Wissenskontrollen
- **[Kapitel 7: Berechtigungen]({{< ref "07-berechtigungen" >}})**: Verstehe das Zugriffskonzept

---

## Zusammenfassung

✅ Du kannst einzelne und Massenanmeldungen erstellen
✅ Du verstehst die verschiedenen Anmeldestatus
✅ Du weisst, wie du Fristen setzt und überwachst
✅ Du kannst Unterschriften beim Abschluss erfordern
✅ Du weisst, wie du Zertifikate generierst
✅ Du kannst den Lernfortschritt verfolgen
✅ Du kennst die Batch-Operationen und den Excel-Export
