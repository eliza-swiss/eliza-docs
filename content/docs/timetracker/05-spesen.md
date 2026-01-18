---
title: "Spesen"
description: ""
weight: "5"
tags:
  - "spesen"
  - "expenses"
  - "kilometerentschädigung"
  - "belege"
  - "abrechnung"
---


# Spesen

In diesem Kapitel lernst du, wie du Spesen erfasst, Belege hochlädst und den Genehmigungsprozess durchläufst. Du erfährst alles über Spesenkategorien, Kilometerentschädigungen und Pauschalbeträge.

## Was sind Spesen?

Spesen sind Auslagen, die du im Rahmen deiner Arbeit tätigst und die dir von deinem Arbeitgeber erstattet werden:

- **Reisekosten** – Fahrten mit dem eigenen Fahrzeug
- **Verpflegung** – Mahlzeiten bei Auswärtsterminen
- **Übernachtungen** – Hotelkosten bei Geschäftsreisen
- **Material** – Kleinanschaffungen für die Arbeit
- **Weitere Auslagen** – Je nach Unternehmensrichtlinien

## Spesenkategorien

### Arten von Spesenkategorien

ELIZA unterstützt drei Arten von Spesenkategorien:

#### 1. Kilometerentschädigung

Für Fahrten mit dem eigenen Fahrzeug:

- Du gibst die **gefahrenen Kilometer** ein
- Der Betrag wird automatisch berechnet
- Beispiel: 50 km × CHF 0.70/km = CHF 35.00

#### 2. Stundenpauschale

Für zeitbasierte Entschädigungen:

- Du gibst die **Anzahl Stunden** ein
- Der Betrag wird automatisch berechnet
- Beispiel: 3h × CHF 15.00/h = CHF 45.00

#### 3. Pauschalbetrag

Feste Beträge für bestimmte Ausgaben:

- Der Betrag ist fix definiert
- Du musst keinen Betrag eingeben
- Beispiel: Tagespauschale Verpflegung = CHF 30.00

#### 4. Freier Betrag

Für individuelle Auslagen mit Beleg:

- Du gibst den **exakten Betrag** ein
- Ein Beleg ist erforderlich
- Beispiel: Hotelrechnung CHF 180.00

## Spesen erfassen

### Übersicht öffnen

1. Klicke im Menü auf **Zeiterfassung**
2. Wähle **Spesen**

Du siehst eine Liste all deiner erfassten Spesen.

### Neue Spesen erfassen

**Schritt 1:** Klicke auf **Spesen hinzufügen** oder **+**

**Schritt 2:** Fülle das Formular aus:

| Feld | Beschreibung | Pflicht |
|------|--------------|---------|
| **Datum** | Datum der Auslage | Ja |
| **Spesenkategorie** | Art der Spesen | Ja |
| **Kilometer/Stunden** | Bei km- oder stundenbasierten Kategorien | Je nach Kategorie |
| **Betrag** | Bei freien Beträgen | Je nach Kategorie |
| **Beschreibung** | Details zur Auslage | Empfohlen |
| **Dateien** | Belege hochladen | Empfohlen |

**Schritt 3:** Lade Belege hoch (falls vorhanden)

**Schritt 4:** Wähle ob du direkt einreichen möchtest:
- **Direkt einreichen** aktivieren → Spesen werden sofort zur Genehmigung gesendet

**Schritt 5:** Klicke auf **Speichern**

### Beispiel: Kilometerentschädigung erfassen

1. Klicke auf **Spesen hinzufügen**
2. Wähle **Datum**: 10.12.2024
3. Wähle **Spesenkategorie**: Kilometerentschädigung PKW
4. Gib **Kilometer/Stunden** ein: 85
5. Gib eine **Beschreibung** ein: "Kundenbesuch Firma XY, Zürich-Bern retour"
6. Aktiviere **Direkt einreichen**
7. Klicke auf **Speichern**

Der Betrag wird automatisch berechnet (z.B. 85 km × CHF 0.70 = CHF 59.50).

### Beispiel: Hotelrechnung erfassen

1. Klicke auf **Spesen hinzufügen**
2. Wähle **Datum**: 11.12.2024
3. Wähle **Spesenkategorie**: Übernachtung
4. Gib **Betrag** ein: 180.00 CHF
5. Gib eine **Beschreibung** ein: "Hotel Messe Basel, Konferenzteilnahme"
6. Klicke auf **Dateien** und lade die Hotelrechnung hoch
7. Aktiviere **Direkt einreichen**
8. Klicke auf **Speichern**

## Belege hochladen

### Unterstützte Dateiformate

- **Bilder**: JPG, PNG, GIF
- **Dokumente**: PDF
- **Andere**: Je nach Konfiguration

### Belege beim Erfassen hochladen

1. Klicke im Spesenformular auf **Dateien**
2. Wähle eine oder mehrere Dateien aus
3. Die Dateien werden automatisch hochgeladen
4. Du siehst eine Vorschau der hochgeladenen Belege

### Belege nachträglich hinzufügen

1. Öffne die bestehende Spese
2. Klicke auf **Bearbeiten**
3. Füge weitere Dateien hinzu
4. Klicke auf **Speichern**

> **💡 Tipp:** Fotografiere Belege mit dem Smartphone und lade sie direkt hoch. So gehen keine Quittungen verloren!

## Freigabe-Workflow für Spesen

### Status-Übersicht

Spesen durchlaufen einen mehrstufigen Workflow:

<pre>
┌──────────┐
│ Erstellt │  Spese erfasst, noch nicht eingereicht
└────┬─────┘
     │ Einreichen
     ▼
┌────────────┐
│ Eingereicht│  Wartet auf Genehmigung
└────┬───────┘
     │
 ┌───┴───┐
 ▼       ▼
┌─────┐ ┌──────────┐
│Geneh│ │ Abgelehnt│
│migt │ └────┬─────┘
└──┬──┘      │ Überarbeiten
   │         ▼
   │    ┌──────────┐
   │    │ Erstellt │
   │    └──────────┘
   ▼
┌──────────┐
│ Erstattet│  Auszahlung erfolgt
└──────────┘
</pre>

### Statusbedeutungen

| Status | Farbe | Bedeutung |
|--------|-------|-----------|
| **Erstellt** | Grau | Entwurf, kann bearbeitet werden |
| **Eingereicht** | Orange | Zur Genehmigung gesendet |
| **Genehmigt** | Grün | Freigegeben, wartet auf Erstattung |
| **Abgelehnt** | Rot | Nicht genehmigt |
| **Erstattet** | Grün | Auszahlung erfolgt |

### Spesen einreichen

**Einzeln einreichen:**
1. Öffne die Spese
2. Klicke auf **Einreichen**
3. Die Spese wird an deinen Vorgesetzten gesendet

**Mehrere Spesen gleichzeitig einreichen:**
1. Wähle die gewünschten Spesen aus (Checkbox)
2. Klicke auf **Sammeleinreichung** in der Toolbar
3. Alle ausgewählten Spesen werden eingereicht

### Spesen zurückziehen

Solange die Spese noch "Eingereicht" ist:

1. Öffne die Spese
2. Klicke auf **Zurückziehen**
3. Der Status wechselt zurück zu "Erstellt"

## Spesen bearbeiten und löschen

### Spese bearbeiten

Du kannst eine Spese bearbeiten, wenn:
- Der Status "Erstellt" oder "Abgelehnt" ist
- Du die Spese selbst erfasst hast

**So geht's:**
1. Öffne die Spese
2. Klicke auf **Bearbeiten**
3. Ändere die gewünschten Felder
4. Klicke auf **Speichern**

### Spese löschen

Du kannst eine Spese löschen, wenn:
- Der Status "Erstellt" ist
- Du die Spese selbst erfasst hast

**So geht's:**
1. Öffne die Spese
2. Klicke auf **Löschen**
3. Bestätige die Löschung

> **⚠️ Wichtig:** Eingereichte, genehmigte oder erstattete Spesen können nicht mehr gelöscht werden.

## Genehmigung von Spesen (für Vorgesetzte)

### Offene Spesen anzeigen

Als Vorgesetzte/r oder Spesenverantwortliche/r:

1. Öffne die **Spesenübersicht**
2. Filtere nach Status "Eingereicht"
3. Du siehst alle Spesen, die auf deine Genehmigung warten

### Spese prüfen

Vor der Genehmigung solltest du prüfen:

- ✅ Ist die Spesenkategorie korrekt?
- ✅ Stimmt das Datum?
- ✅ Ist der Betrag plausibel?
- ✅ Sind Belege vorhanden (falls erforderlich)?
- ✅ Ist die Beschreibung nachvollziehbar?

### Spese genehmigen

**Einzeln genehmigen:**
1. Öffne die Spese
2. Prüfe die Details und Belege
3. Klicke auf **Genehmigen**

**Mehrere Spesen genehmigen:**
1. Wähle die gewünschten Spesen aus
2. Klicke auf **Sammelgenehmigung**
3. Alle ausgewählten Spesen werden genehmigt

### Spese ablehnen

Wenn eine Spese nicht in Ordnung ist:

1. Öffne die Spese
2. Klicke auf **Ablehnen**
3. Gib einen **Prüfkommentar** ein (Grund für die Ablehnung)
4. Bestätige die Ablehnung

Der Mitarbeiter wird benachrichtigt und kann die Spese korrigieren.

## Erstattung (für Finanzverantwortliche)

### Genehmigte Spesen erstatten

Nachdem Spesen genehmigt wurden:

1. Filtere nach Status "Genehmigt"
2. Prüfe die Spesen
3. Veranlasse die Auszahlung (ausserhalb von ELIZA)
4. Markiere die Spesen als **Erstattet**

**Mehrere Spesen als erstattet markieren:**
1. Wähle die ausgezahlten Spesen aus
2. Klicke auf **Sammelerstattung**
3. Alle ausgewählten Spesen werden als erstattet markiert

## Spesenübersicht und Auswertungen

### Monatsübersicht

Im **Spesen-Monatsabschluss** siehst du:

1. Klicke auf **Spesen (Monatsabschluss)** im Menü
2. Wähle den gewünschten Monat
3. Du siehst alle Spesen des Monats mit:
   - Summe nach Status
   - Summe nach Kategorie
   - Summe nach Mitarbeiter

### Belege anzeigen

Um Belege einer Spese anzuzeigen:

1. Öffne die Spese
2. Klicke auf den Beleg oder das Vorschaubild
3. Der Beleg wird in einem Viewer angezeigt

## Tipps zur Spesenerfassung

### Effiziente Erfassung

- ✅ Spesen zeitnah erfassen (am besten am selben Tag)
- ✅ Belege sofort fotografieren und hochladen
- ✅ Aussagekräftige Beschreibungen verwenden
- ✅ Regelmässig einreichen (z.B. wöchentlich oder monatlich)

### Belege aufbewahren

- ✅ Originale aufbewahren (falls von der Buchhaltung verlangt)
- ✅ Digitale Kopien in ELIZA hochladen
- ✅ Quittungen nicht in der Sonne lagern (Thermopapaier verblasst!)

### Vermeiden

- ❌ Spesen ohne Belege einreichen (falls erforderlich)
- ❌ Unvollständige Beschreibungen
- ❌ Private Ausgaben als Geschäftsspesen deklarieren
- ❌ Lange Wartezeiten bis zur Einreichung

## Häufige Fragen

### Muss ich für jede Spese einen Beleg hochladen?

Das hängt von den Richtlinien deiner Organisation ab:
- Bei Kilometerentschädigung meist nicht erforderlich
- Bei Pauschalbeträgen meist nicht erforderlich
- Bei freien Beträgen in der Regel erforderlich

### Meine Spese wurde abgelehnt. Was tun?

1. Lies den Prüfkommentar
2. Korrigiere den Fehler (z.B. falscher Betrag, fehlender Beleg)
3. Reiche die Spese erneut ein

### Kann ich Spesen für andere Mitarbeiter erfassen?

In der Regel nicht. Jeder Mitarbeiter erfasst seine eigenen Spesen. Ausnahmen können für Administratoren konfiguriert sein.

### Wann werden Spesen ausgezahlt?

Das hängt von den Prozessen deiner Organisation ab. Typischerweise:
- Mit der nächsten Lohnabrechnung
- Monatlich nach Monatsabschluss
- Nach Einzelfreigabe

### Kann ich Spesen in Fremdwährung erfassen?

Ja, wenn deine Organisation dies unterstützt. Der Betrag wird in der Standardwährung (z.B. CHF) erfasst.

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Was Spesen sind und welche Kategorien es gibt
- ✅ Wie du Spesen erfasst (Kilometer, Pauschalen, freie Beträge)
- ✅ Belege hochladen und verwalten
- ✅ Den Freigabe-Workflow verstehen
- ✅ Spesen einreichen, bearbeiten und löschen
- ✅ Als Vorgesetzte/r Spesen genehmigen oder ablehnen

Im nächsten Kapitel lernst du alles über Auswertungen und den Monatsabschluss.
