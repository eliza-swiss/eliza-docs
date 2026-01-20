---
title: "Kursanmeldungen und Teilnehmerverwaltung"
slug: "kursanmeldungen"
weight: 5
category: "Verwaltung"
tags: ["anmeldungen", "enrollment", "teilnehmer", "fortschritt", "zertifikate", "fristen"]
---

# Kursanmeldungen und Teilnehmerverwaltung

Die Teilnehmerverwaltung ermöglicht dir, Benutzer zu Kursen anzumelden, deren Fortschritt zu verfolgen und Zertifikate auszustellen.

## Übersicht

Eine Kursanmeldung (Enrollment) in ELIZA:

- **Verknüpft einen Benutzer mit einem Kurs**
- **Verfolgt den Lernfortschritt** über alle Lektionen
- **Ermöglicht Fristen** für den Kursabschluss
- **Kann Unterschriften erfordern** beim Abschluss
- **Generiert Zertifikate** bei erfolgreicher Teilnahme

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

1. **Navigiere zum Kursordner**
2. **Klicke auf**: "Anmeldungen hinzufügen"
3. **Wähle die Kurse** (Mehrfachauswahl möglich)
4. **Wähle die Teilnehmer** (Mehrfachauswahl möglich)
5. **Setze gemeinsame Optionen**:
   - Startdatum
   - Frist
   - Nachricht
   - Unterschrift erforderlich
6. **Klicke auf**: "Anmeldungen erstellen"

> **💡 Tipp:** Die Massenanmeldung spart viel Zeit beim Onboarding neuer Mitarbeiter oder bei Pflichtschulungen.

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

- **[Kapitel 6: Quiz](06_quiz_abschlusstests.md)**: Integriere Wissenskontrollen
- **[Kapitel 7: Berechtigungen](07_berechtigungen.md)**: Verstehe das Zugriffskonzept

---

## Zusammenfassung

✅ Du kannst einzelne und Massenanmeldungen erstellen
✅ Du verstehst die verschiedenen Anmeldestatus
✅ Du weisst, wie du Fristen setzt und überwachst
✅ Du kannst Unterschriften beim Abschluss erfordern
✅ Du weisst, wie du Zertifikate generierst
✅ Du kannst den Lernfortschritt verfolgen
✅ Du kennst die Batch-Operationen und den Excel-Export
