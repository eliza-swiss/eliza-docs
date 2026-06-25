---
title: "Kurse erstellen und verwalten"
description: ""
weight: "3"
tags:
  - "kurse"
  - "course"
  - "erstellen"
  - "verwalten"
  - "skills"
  - "zertifikate"
---


# Kurse erstellen und verwalten

Kurse sind in sich geschlossene Schulungseinheiten zu einem bestimmten Thema. In diesem Kapitel lernst du, wie du Kurse erstellst, konfigurierst und verwaltest.

## Was ist ein Kurs?

Ein Kurs in ELIZA:

- **Gehört zu einem Ordner** und erbt dessen Berechtigungen
- **Hat einen Modus**: Schulung (mit Anmeldung/Fortschritt) oder Handbuch (Nachschlagewerk)
- **Enthält Lektionen** mit strukturierten Lerninhalten
- **Kann Labels** zur thematischen Verschlagwortung haben
- **Kann Skills verknüpfen** für Kompetenzentwicklung
- **Ermöglicht Teilnehmer-Anmeldungen** mit Fortschrittsverfolgung (Schulungs-Modus)
- **Unterstützt Zertifikate** als Teilnahmebestätigung (Schulungs-Modus)

> 💡 Im Handbuch-Modus entfallen Anmeldung, Fortschritt und Quiz. Stattdessen werden Inline-Editing, Kommentare und eine Artikel-Ansicht aktiviert. Details: [Kapitel 8: Handbuch-Modus]({{< ref "08-handbuch-modus" >}}).

### Schulung vs. Handbuch — Modus wählen

| Aspekt | Schulung | Handbuch |
|--------|----------|----------|
| **Anmeldung / Enrollment** | Ja | Nein |
| **Fortschrittsverfolgung** | Ja | Nein |
| **Quiz / Tests** | Ja | Nein |
| **Zertifikat** | Ja | Nein |
| **Einladungen zu einzelnen Lektionen** | Ja | Ja |
| **Inline-Editing der Inhalte** | Über Lektions-Bearbeiten | Direkt auf der Artikel-Seite |
| **Kommentare** | Nein | Ja (auf Artikel-Ebene) |
| **Section-Anker-Navigation** | Nein | Ja |
| **Vollbild-Lese-Ansicht** | Vollbild für Lektion | Eigene Artikel-Ansicht |

Der Modus wird beim Erstellen festgelegt und sollte nicht mehr gewechselt werden, sobald Lektionen existieren.

---

## Kurs erstellen

### Voraussetzungen

Du benötigst:

- Bearbeitungsrechte für den Ordner (Admin-Team-Mitglied oder `add_course`-Berechtigung)

### Variante 1: Wizard (empfohlen)

1. Wissenshub-Startseite → **Hinzufügen**
2. **Schritt 1**: Wähle "Schulungskurs" oder "Handbuch"
3. **Schritt 2**: Wähle (oder erstelle) einen Ordner
4. **Schritt 3**: Titel, Beschreibung, optional Titelbild
5. **Speichern** — der Kurs landet im Status "Entwurf" und du kannst sofort die ersten Lektionen anlegen

### Variante 2: Direkt im Ordner

1. **Navigiere zum Ordner**
2. **Klicke auf**: "Schulungskurs hinzufügen" oder "Handbuch hinzufügen"
3. **Fülle die Pflichtfelder aus**:
   - **Titel**: Aussagekräftiger Kursname
4. **Optionale Felder** (empfohlen):
   - **Beschreibung**: Lernziele und Kursinhalte (Markdown unterstützt)
   - **Titelbild / Cover-Bild**: Visuelles Erkennungsmerkmal (Fallback ist ein Icon-Platzhalter)
   - **Labels**: Themen-Schlagworte zur Auffindbarkeit (siehe [Kapitel 9]({{< ref "09-labels-themen-suche" >}}))
5. **Klicke auf**: "Speichern"

Der Kurs wird im Status "Entwurf" erstellt und ist nur für Administratoren sichtbar.

> **💡 Tipp:** Eine gute Beschreibung hilft Teilnehmern zu verstehen, was sie im Kurs erwartet.

---

## Kurs-Einstellungen

### Grundeinstellungen

| Feld | Beschreibung | Pflicht |
|------|--------------|---------|
| **Titel** | Name des Kurses (max. 255 Zeichen) | ✅ |
| **Modus** | Schulung oder Handbuch (siehe oben) | ✅ |
| **Beschreibung** | Ausführliche Beschreibung (Markdown) | Empfohlen |
| **Titelbild** | Cover-Bild für visuelle Darstellung | Optional |
| **Ordner** | Übergeordneter Ordner | Automatisch |
| **Labels** | Themen zur Auffindbarkeit | Optional |

### Status

Jeder Kurs hat einen Freigabe-Status:

| Status | Symbol | Bedeutung |
|--------|--------|-----------|
| **Entwurf** | 🟠 | In Bearbeitung, nur für Admins sichtbar |
| **Zur Prüfung** | 🟡 | Wartet auf Freigabe |
| **Freigegeben** | 🟢 | Aktiv, für angemeldete Benutzer sichtbar |
| **Abgelaufen** | 🔴 | Überprüfung fällig |
| **Archiviert** | ⚫ | Nicht mehr aktiv |

### Sichtbarkeit

| Sichtbarkeit | Bedeutung |
|--------------|-----------|
| **Normal** | Standard-Sichtbarkeit nach Ordner-Berechtigungen |
| **Geschützt** | Nur explizit berechtigte Benutzer |

---

## Erweiterte Einstellungen

### Labels (Themen)

Mit Labels (intern: `ProcessLabel`) verschlagwortest du Kurse thematisch. Labels werden im Wissenshub als klickbare Themen-Chips angezeigt und sind in der Suche durchsuchbar.

**Labels vergeben:**

- Im Kurs-Bearbeiten-Formular im Feld "Labels" auswählen
- **Inline auf der Kurs-Detailseite**: Klick auf den Labels-Bereich öffnet das Inline-Edit (HTMX, kein Reload) — Labels können direkt hinzugefügt oder entfernt werden

Mehr dazu in [Kapitel 9: Labels, Themen und Suche]({{< ref "09-labels-themen-suche" >}}).

### Admin-Team

Das Kurs-Admin-Team hat volle Verwaltungsrechte für diesen spezifischen Kurs:

- Lektionen erstellen und bearbeiten
- Anmeldungen verwalten
- Kurseinstellungen ändern
- Quiz und Tests zuweisen

**Admin-Team festlegen:**

1. Öffne den Kurs zur Bearbeitung
2. Wähle im Feld "Admin-Team" die gewünschten Benutzer
3. Speichere die Änderungen

> **💡 Tipp:** Das Kurs-Admin-Team ergänzt das Admin-Team des übergeordneten Ordners. Beide haben volle Rechte.

### Skills-Verknüpfung

Verknüpfe den Kurs mit Skills aus dem Organisations-Modul:

1. Öffne den Kurs zur Bearbeitung
2. Wähle im Feld "Skills" die relevanten Kompetenzen
3. Speichere

**Vorteile der Skills-Verknüpfung:**

- Kompetenzmatrix in der Organisation wird aktualisiert
- Mitarbeiterprofile zeigen absolvierte Schulungen
- Skill-Gaps können identifiziert werden

### Zertifikatsvorlage

Du kannst eine Word-Vorlage aus dem DMS hinterlegen, die als Teilnahmebestätigung verwendet wird:

1. **Erstelle eine Word-Vorlage im DMS** mit Platzhaltern:
   - `{{ user.first_name }}` - Vorname
   - `{{ user.last_name }}` - Nachname
   - `{{ course.title }}` - Kurstitel
   - `{{ enrollment.completion_date }}` - Abschlussdatum
2. **Verknüpfe die Vorlage** im Kurs-Formular unter "Zertifikatsvorlage"
3. **Teilnehmer können nach Abschluss** ihr Zertifikat herunterladen

---

## Cover-Bild

Pro Kurs/Handbuch kann ein **Cover-Bild** gesetzt werden:

- Wird in Listen-Karten (Wissenshub, Ordner-Detail) und auf der Detailseite angezeigt
- Bei fehlendem Bild zeigt ELIZA einen **Icon-Platzhalter** in einem zur Kategorie passenden Stil (Kurs: Schulungs-Icon, Handbuch: Buch-Icon, Ordner: Ordner-Icon)
- Das Cover-Bild kann beim Erstellen direkt im Wizard hochgeladen oder später im Bearbeiten-Formular aktualisiert werden

> 💡 Cover-Bilder erhöhen die visuelle Wiedererkennbarkeit deutlich, vor allem auf der Wissenshub-Startseite mit ihren vielen Kacheln.

---

## Kursansicht für Administratoren

### Übersicht-Tab

Die Kursansicht zeigt:

```
┌─────────────────────────────────────────────────────────┐
│  [Titelbild]                                            │
├─────────────────────────────────────────────────────────┤
│  📊 Anmeldebanner (dein Status, falls angemeldet)       │
├─────────────────────────────────────────────────────────┤
│  🏠 ⭐ Ordner > Kursname           [Bearbeiten] [Löschen]│
├─────────────────────────────────────────────────────────┤
│  Beschreibung...                                        │
├─────────────────────────────────────────────────────────┤
│  📄 Lektionen                     [Lektionen verwalten] │
│  ├── Lektion 1: Einführung           [Neu]    Freigabe  │
│  ├── Lektion 2: Grundlagen        [Aktualisiert] Entwurf│
│  └── Lektion 3: Fortgeschritten              Freigabe   │
└─────────────────────────────────────────────────────────┘
```

### Teilnehmende-Tab

Zeigt alle Kursanmeldungen:

| Spalte | Inhalt |
|--------|--------|
| **Teilnehmende Person** | Name mit Link zur Anmeldung |
| **Beginn** | Startdatum der Anmeldung |
| **Ende** | Abschlussdatum (falls vorhanden) |
| **Status** | Aktueller Anmeldestatus |

---

## Lektionen verwalten

### Neue Lektion hinzufügen

1. Öffne den Kurs
2. Klicke auf **"Lektion"** (grüner Button mit + Symbol)
3. Gib Titel und Beschreibung ein
4. Speichere

### Lektionsreihenfolge ändern

1. Klicke auf das Zahnrad-Symbol **"Lektionen verwalten"**
2. Verwende Drag & Drop, um die Reihenfolge zu ändern
3. Speichere die neue Reihenfolge

### Lektion kopieren/verschieben

Lektionen können zwischen Kursen verschoben oder kopiert werden:

1. Öffne die Lektion
2. Wähle "Kopieren/Verschieben" aus dem Menü
3. Wähle den Zielkurs
4. Bestätige die Aktion

---

## Kurs als Word exportieren

Du kannst den gesamten Kursinhalt als Word-Dokument exportieren:

1. Öffne den Kurs
2. Klicke auf das **Drei-Punkte-Menü** (⋯)
3. Wähle **"Als Word exportieren"**
4. Das Dokument enthält:
   - Kursbeschreibung
   - Alle Lektionen mit Abschnitten
   - Bilder und Formatierungen

> **💡 Tipp:** Der Word-Export eignet sich für Offline-Schulungen oder als Backup.

---

## Kursfortschritt überwachen

### Fortschrittsübersicht

**Wissen & Lernen → Kurs → Kursfortschritt (📊 Icon)**

Die Fortschrittsübersicht zeigt:

- Alle angemeldeten Teilnehmer
- Status jeder Lektion pro Teilnehmer
- Gesamtfortschritt in Prozent
- Überfällige Anmeldungen

### Matrix-Ansicht

Die Kurs-Matrix zeigt den Lernfortschritt aller Teilnehmer in einer Übersichtstabelle:

| Teilnehmer | Lektion 1 | Lektion 2 | Lektion 3 | Gesamt |
|------------|-----------|-----------|-----------|--------|
| Max Muster | ✅ | 🔄 | ⬜ | 33% |
| Anna Beispiel | ✅ | ✅ | ✅ | 100% |
| Peter Test | ✅ | ✅ | 🔄 | 67% |

---

## Best Practices

### ✅ Empfehlungen

- **Klare Lernziele definieren**: Beschreibe, was Teilnehmer nach dem Kurs können
- **Logische Struktur**: Teile Inhalte in überschaubare Lektionen
- **Konsistente Benennung**: Verwende ein einheitliches Namensschema
- **Titelbild hinzufügen**: Verbessert Wiedererkennbarkeit
- **Skills verknüpfen**: Ermöglicht Kompetenz-Tracking
- **Zertifikatsvorlage nutzen**: Motiviert Teilnehmer

### ❌ Häufige Fehler

- Kurs im Entwurf belassen (Teilnehmer sehen nichts)
- Zu viele Lektionen pro Kurs (besser aufteilen)
- Keine Beschreibung hinzufügen
- Lektionen nicht in logischer Reihenfolge

---

## Kurs archivieren/löschen

### Archivieren

Archivierte Kurse:

- Sind in der Standardansicht nicht mehr sichtbar
- Behalten alle Daten, Lektionen und Anmeldungen
- Können wiederhergestellt werden

### Löschen

> **⚠️ Achtung:** Das Löschen eines Kurses entfernt alle Lektionen, Abschnitte und Anmeldungen unwiderruflich!

Zum Löschen:

1. Öffne den Kurs
2. Klicke auf das Löschen-Symbol
3. Bestätige die Aktion

---

## Nächste Schritte

- **[Kapitel 4: Lektionen]({{< ref "04-lektionen" >}})**: Erstelle Lerninhalte für deinen Kurs
- **[Kapitel 5: Kursanmeldungen]({{< ref "05-kursanmeldungen" >}})**: Melde Teilnehmer an
- **[Kapitel 6: Quiz]({{< ref "06-quiz-abschlusstests" >}})**: Füge Wissenskontrollen hinzu
- **[Kapitel 8: Handbuch-Modus]({{< ref "08-handbuch-modus" >}})**: Wenn du den Modus "Handbuch" gewählt hast
- **[Kapitel 9: Labels, Themen und Suche]({{< ref "09-labels-themen-suche" >}})**: Kurs mit Labels auffindbar machen

---

## Zusammenfassung

✅ Du kannst Kurse erstellen und konfigurieren
✅ Du verstehst die Kurs-Einstellungen (Status, Sichtbarkeit, Admin-Team)
✅ Du weisst, wie du Skills und Zertifikatsvorlagen verknüpfst
✅ Du kannst Lektionen hinzufügen und deren Reihenfolge verwalten
✅ Du kannst den Kursfortschritt überwachen
✅ Du kennst den Word-Export für Offline-Nutzung
