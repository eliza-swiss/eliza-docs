---
title: "Tipps und Tricks"
description: ""
weight: "5"
tags:
  - "tipps"
  - "tricks"
  - "faq"
  - "best-practices"
  - "effizienz"
---


# Tipps und Tricks

In diesem Kapitel findest du bewährte Vorgehensweisen, praktische Tipps und Antworten auf häufig gestellte Fragen zum Meldungen-Modul.

## Effiziente Meldungsbearbeitung

### Schnelle Navigation

**Tastaturkürzel und Schnellzugriffe:**

- **"Meine Meldungen"**: Zeigt alle von dir erstellten Meldungen
- **"Mir zugewiesen"**: Zeigt deine aktuellen Aufgaben
- **"Alle Meldungen"**: Übergreifende Suche über alle Meldekreise

> **💡 Tipp:** Setze dir den Link zu "Mir zugewiesen" als Browser-Lesezeichen für den schnellen Tageseinstieg.

### Priorisierung deiner Arbeit

**Empfohlener Workflow:**

1. **Morgens**: "Mir zugewiesen" öffnen
2. **Überfällige Fristen** zuerst bearbeiten (rot markiert)
3. **Neue Meldungen** prüfen und erste Reaktion geben
4. **Laufende Bearbeitung** fortführen

### Batch-Bearbeitung

Wenn du viele ähnliche Meldungen bearbeiten musst:

1. Nutze Labels zur Gruppierung
2. Filtere nach Status und Label
3. Bearbeite systematisch von oben nach unten
4. Nutze Vorlagen für wiederkehrende Antworten

## Labels clever nutzen

### Scoped Labels für Struktur

Verwende das Format `Kategorie:Wert` für organisierte Labels:

**Beispiele:**

| Label | Beschreibung |
|-------|-------------|
| `Priorität:Kritisch` | Höchste Dringlichkeit |
| `Priorität:Hoch` | Dringend |
| `Priorität:Normal` | Standard |
| `Priorität:Niedrig` | Bei Gelegenheit |
| `Typ:Bug` | Fehler |
| `Typ:Feature` | Neue Funktion |
| `Typ:Frage` | Rückfrage |
| `Bereich:Frontend` | Benutzeroberfläche |
| `Bereich:Backend` | Server-Seite |
| `Bereich:Dokumentation` | Anleitungen |

### Label-Farben sinnvoll einsetzen

**Empfohlene Farbcodierung:**

| Farbe | Verwendung |
|-------|------------|
| 🔴 Rot | Kritisch, Dringend, Blocker |
| 🟠 Orange | Wichtig, Warnung |
| 🟡 Gelb | Mittel, In Bearbeitung |
| 🟢 Grün | Erledigt, Positiv |
| 🔵 Blau | Information, Neutral |
| 🟣 Violett | Spezial, Premium |

### Labels nicht überladen

**✅ Empfohlen:**
- 5-10 Labels pro Meldekreis
- Klare, eindeutige Bezeichnungen
- Konsistente Verwendung

**❌ Vermeiden:**
- Mehr als 20 Labels
- Überlappende Bedeutungen
- Labels, die niemand verwendet

## Benachrichtigungen optimieren

### E-Mail-Flut vermeiden

**Für Administratoren:**

1. **Zentrale Benachrichtigungs-E-Mail** einrichten statt einzelner Admins
2. **E-Mail-Filter** oder Ordner für Meldungs-E-Mails erstellen
3. Bei hohem Volumen: **Automatische E-Mails deaktivieren**, ELIZA-Benachrichtigungen nutzen

**Für Benutzer:**

1. **Nicht bei jeder Aktion benachrichtigen** - nur bei wichtigen Änderungen
2. **Benachrichtigungs-Auswahl gezielt setzen** beim Kommentieren
3. ELIZA-Benachrichtigungen in der Sidebar prüfen

### Wichtige Benachrichtigungen nicht verpassen

**Sicherstellen:**
- E-Mail-Adresse im Profil ist aktuell
- Meldungs-E-Mails landen nicht im Spam
- Regelmässig "Mir zugewiesen" prüfen

## Vorlagen nutzen

### Meldungsvorlagen erstellen

Als Bearbeiter kannst du persönliche Vorlagen für häufige Antworten erstellen:

1. Öffne einen Meldekreis
2. Gehe zu **"Vorlagen"**
3. Erstelle eine neue Vorlage mit:
   - Titel (z.B. "Erste Antwort Kundenreklamation")
   - Text mit Platzhaltern

**Verfügbare Platzhalter:**
- `{{ salutation }}` - Anrede
- `{{ firstname }}` - Vorname
- `{{ lastname }}` - Nachname

### Vorlagen aktivieren

1. Wähle eine Vorlage als **"Aktiv"**
2. Beim Öffnen einer Meldung wird der Text automatisch ins Kommentarfeld geladen
3. Passe den Text nach Bedarf an

## Suche und Filter

### Effektive Suche

**In der Suchleiste:**
- Meldungsnummern: `#42` oder `BUG-42`
- Stichworte aus Titel oder Beschreibung
- Namen von Benutzern

### Filter kombinieren

**Nützliche Kombinationen:**

| Ziel | Filter |
|------|--------|
| Überfällige Aufgaben | Status: "In Bearbeitung" + Frist überschritten |
| Eigene offene Meldungen | Ersteller: Ich + Status: nicht "Erledigt" |
| Dringende neue Meldungen | Status: "Neu" + Label: "Priorität:Kritisch" |

## Zusammenarbeit im Team

### Übergaben dokumentieren

Bei Zuständigkeitswechsel:

1. **Kommentar mit Kontext** hinterlassen
2. Erklären, was bereits gemacht wurde
3. Nächste Schritte empfehlen
4. Dann erst **Zuständigkeit ändern**

### Interne vs. Externe Kommunikation

**Interne Kommentare nutzen für:**
- Rückfragen an Kollegen
- Technische Details
- Zwischenstände
- Kritische Anmerkungen

**Öffentliche Kommentare für:**
- Kommunikation mit Meldern
- Offizielle Stellungnahmen
- Lösungsmitteilungen

### Eskalation

Bei Problemen mit Meldungen:

1. **Label setzen** (z.B. "Eskaliert")
2. **Internen Kommentar** mit Begründung
3. **Admin informieren** per Benachrichtigung
4. **Frist anpassen** falls nötig

## Auswertung und Reporting

### Export für Analyse

**Excel-Export nutzen:**

1. Öffne den Meldekreis
2. Klicke auf **"Export"**
3. Wähle Status und Optionen
4. Analysiere in Excel

**Auswertungsmöglichkeiten:**
- Anzahl Meldungen pro Zeitraum
- Durchschnittliche Bearbeitungszeit
- Häufigste Labels/Kategorien
- Meldungen pro Meldekreis

### Regelmässige Reviews

**Empfohlener Rhythmus:**

| Frequenz | Aktivität |
|----------|-----------|
| Täglich | "Mir zugewiesen" prüfen |
| Wöchentlich | Status offener Meldungen |
| Monatlich | Überblick alle Meldekreise |
| Quartalsweise | Trend-Analyse, Kennzahlen |

## Häufige Probleme und Lösungen

### Problem: Meldung nicht sichtbar

**Symptom:** Eine Meldung, die existieren sollte, wird nicht angezeigt.

**Mögliche Ursachen:**

1. **Klassifikation**: Meldung ist vertraulich oder geheim
2. **Status**: Meldung ist noch "neu" und du bist kein Team-Mitglied
3. **Meldekreis-Sichtbarkeit**: Geschützt oder vertraulich
4. **Archiviert**: Meldung wurde ausgeblendet

**Lösung:**
- Prüfe deine Berechtigungen
- Frage einen Admin des Meldekreises
- Prüfe mit einem Admin, ob die Meldung existiert

### Problem: Kann keine Meldung erstellen

**Symptom:** Der Button "Neue Meldung" fehlt oder ist deaktiviert.

**Mögliche Ursachen:**

1. **Keine Berechtigung**: Du hast nicht `add_issue`
2. **Geschützter Meldekreis**: Nur bestimmte Benutzer dürfen erstellen
3. **Meldekreis nicht sichtbar**: Du siehst den Meldekreis gar nicht

**Lösung:**
- Wende dich an deinen Administrator
- Prüfe, ob du im richtigen Meldekreis bist
- Nutze ggf. ein öffentliches Formular

### Problem: E-Mail-Benachrichtigungen fehlen

**Symptom:** Du erhältst keine E-Mails zu Meldungsänderungen.

**Mögliche Ursachen:**

1. **Spam-Filter**: E-Mails landen im Spam
2. **E-Mail-Adresse**: Im Profil fehlt oder ist falsch
3. **Benachrichtigungen deaktiviert**: Im Meldekreis oder global
4. **Nicht als Beitragender**: Du bist nicht an der Meldung beteiligt

**Lösung:**
- Prüfe deinen Spam-Ordner
- Aktualisiere deine E-Mail-Adresse im Profil
- Frage den Meldekreis-Admin nach den Einstellungen

### Problem: Status kann nicht geändert werden

**Symptom:** Die gewünschte Status-Aktion ist nicht verfügbar.

**Mögliche Ursachen:**

1. **Workflow-Einschränkung**: Dieser Übergang ist nicht erlaubt
2. **Keine Berechtigung**: Du kannst den Status nicht ändern
3. **Meldung ist archiviert**: Archivierte Meldungen sind gesperrt

**Lösung:**
- Prüfe das Workflow-Diagramm (Kapitel 2)
- Wende dich an einen Admin
- Prüfe, ob die Meldung archiviert ist

## FAQ - Häufig gestellte Fragen

### Allgemein

**Frage: Kann ich eine Meldung löschen?**

Nur Benutzer mit `delete_issue`-Berechtigung oder Meldekreis-Admins können Meldungen löschen. Aus Nachvollziehbarkeit empfehlen wir stattdessen das Archivieren.

---

**Frage: Wie finde ich meine alten Meldungen?**

Klicke auf "Meine Meldungen" im Dashboard. Dort siehst du alle von dir erstellten Meldungen, unabhängig vom Status.

---

**Frage: Kann ich eine anonyme Meldung nachträglich "enttarnen"?**

Nein. Bei anonymen Meldungen wird keine Benutzerverknüpfung gespeichert. Auch Administratoren können nicht sehen, wer die Meldung erstellt hat.

### Meldekreise

**Frage: Wie viele Meldekreise sollte man haben?**

So wenige wie möglich, so viele wie nötig. Typisch sind 3-8 Meldekreise für ein mittelgrosses Unternehmen. Zu viele Meldekreise verwirren Benutzer.

---

**Frage: Kann ich einen Meldekreis umbenennen?**

Ja. Öffne den Meldekreis, klicke auf "Bearbeiten" und ändere den Titel. Bestehende Meldungen bleiben erhalten.

---

**Frage: Was passiert beim Löschen eines Meldekreises?**

Alle Meldungen in diesem Meldekreis werden gelöscht. Diese Aktion kann nicht rückgängig gemacht werden!

### Berechtigungen

**Frage: Warum sehe ich manche Meldungen nicht?**

Die Sichtbarkeit hängt ab von: Klassifikation der Meldung, Sichtbarkeit des Meldekreises, deiner Rolle und dem Status der Meldung. Details findest du im Kapitel "Berechtigungskonzept".

---

**Frage: Kann ein externer Benutzer ohne ELIZA-Account Meldungen erstellen?**

Ja, wenn ein öffentliches Formular für den Meldekreis aktiviert ist. Der externe Benutzer erhält per E-Mail einen Link zum Nachverfolgen.

### Sonstiges

**Frage: Gibt es eine mobile App?**

ELIZA ist als responsive Webanwendung gestaltet und funktioniert auf mobilen Geräten im Browser. Eine dedizierte App gibt es derzeit nicht.

---

**Frage: Kann ich Meldungen per E-Mail erstellen?**

Standardmässig nicht. Es gibt jedoch Integrationsmöglichkeiten. Wende dich an deinen Administrator.

---

**Frage: Werden Änderungen protokolliert?**

Ja. Alle Änderungen werden im Audit-Log festgehalten. Administratoren können die Historie einsehen.

## Checklisten

### Checkliste: Neue Meldung

- [ ] Richtigen Meldekreis gewählt?
- [ ] Aussagekräftiger Titel?
- [ ] Beschreibung mit allen wichtigen Details?
- [ ] Ereignisdatum korrekt?
- [ ] Passende Kategorien/Labels?
- [ ] Screenshots oder Dateien angehängt (falls nützlich)?
- [ ] Kontaktdaten angegeben (falls gewünscht)?

### Checkliste: Meldung bearbeiten

- [ ] Meldung vollständig gelesen?
- [ ] Alle Kommentare durchgesehen?
- [ ] Rückfragen geklärt?
- [ ] Zuständigkeit korrekt?
- [ ] Frist gesetzt/aktualisiert?
- [ ] Status aktuell?
- [ ] Beteiligte informiert?

### Checkliste: Meldekreis einrichten

- [ ] Eindeutiger, beschreibender Name?
- [ ] Beschreibung für Benutzer?
- [ ] Sichtbarkeit passend gewählt?
- [ ] Mindestens 2 Admins zugewiesen?
- [ ] Team-Mitglieder definiert?
- [ ] Labels/Kategorien vorbereitet?
- [ ] Benachrichtigungen konfiguriert?
- [ ] Öffentliches Formular (falls nötig)?
- [ ] Test-Meldung erstellt und geprüft?

## Zusammenfassung

Die wichtigsten Tipps auf einen Blick:

- ✅ **Klare Strukturen**: Wenige, gut organisierte Meldekreise
- ✅ **Konsistente Labels**: Scoped Labels mit Farbcodierung
- ✅ **Schnelle Reaktion**: Erste Rückmeldung innerhalb von 24h
- ✅ **Transparente Kommunikation**: Status aktuell halten
- ✅ **Dokumentation**: Alles Wichtige in Kommentaren festhalten
- ✅ **Regelmässige Reviews**: Überfällige Meldungen nicht vergessen

---

**Du hast weitere Fragen?** Wende dich an deinen Administrator oder das Support-Team.

**Zurück zur [Übersicht]({{< ref "_index" >}})**
