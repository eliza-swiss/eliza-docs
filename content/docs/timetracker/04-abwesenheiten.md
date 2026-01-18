---
title: "Abwesenheiten"
description: ""
weight: "4"
tags:
  - "abwesenheit"
  - "ferien"
  - "urlaub"
  - "krankheit"
  - "absence"
---


# Abwesenheiten

In diesem Kapitel lernst du, wie du Abwesenheiten wie Ferien, Krankheit und andere Absenzen erfasst und verwaltest. Du erfährst alles über den Freigabe-Workflow und die verschiedenen Übersichten.

## Abwesenheitsarten im Überblick

ELIZA unterscheidet verschiedene Arten von Abwesenheiten:

### Typische Abwesenheitsarten

| Art | Als Arbeitszeit | Ferienabzug | Kranktage |
|-----|-----------------|-------------|-----------|
| **Ferien** | Ja | Ja | Nein |
| **Krankheit** | Ja | Nein | Ja |
| **Militär/Zivildienst** | Ja | Nein | Nein |
| **Weiterbildung** | Ja | Nein | Nein |
| **Unbezahlter Urlaub** | Nein | Nein | Nein |
| **Mutterschaftsurlaub** | Ja | Nein | Nein |
| **Vaterschaftsurlaub** | Ja | Nein | Nein |

### Eigenschaften einer Abwesenheitsart

Jede Abwesenheitsart hat folgende Eigenschaften:

- **Als Arbeitszeit angerechnet** – Zählt als geleistete Arbeitszeit
- **Als Ferien angerechnet** – Wird vom Feriensaldo abgezogen
- **Als Kranktage angerechnet** – Wird als Kranktag gezählt
- **Als unbezahlte Abwesenheit** – Keine Lohnfortzahlung
- **Automatisch freigeben** – Absenz wird ohne Genehmigung sofort freigegeben

> **💡 Tipp:** Welche Abwesenheitsarten in deiner Organisation verfügbar sind, hängt von der Konfiguration ab.

### Info-Anzeige bei Absenzentyp-Auswahl

Wenn du einen Absenzentyp auswählst, zeigt ELIZA dir automatisch farbige Info-Chips an, die die Eigenschaften der gewählten Abwesenheitsart darstellen:

| Chip | Farbe | Bedeutung |
|------|-------|-----------|
| **Arbeitszeit** | Grün | Wird als Arbeitszeit angerechnet |
| **Ferien** | Blau | Wird vom Feriensaldo abgezogen |
| **Krankheit** | Orange | Wird als Kranktag gezählt |
| **Unbezahlt** | Rot | Keine Lohnfortzahlung |
| **Automatisch freigegeben** | Grün | Absenz wird sofort freigegeben |

Diese Info-Chips helfen dir, auf einen Blick zu verstehen, welche Auswirkungen deine gewählte Abwesenheitsart hat.

## Meine Absenzen

### Übersicht öffnen

1. Klicke im Menü auf **Zeiterfassung**
2. Wähle **Meine Absenzen**

Hier siehst du alle deine Abwesenheiten:
- Vergangene Abwesenheiten
- Aktuelle Abwesenheiten
- Geplante Abwesenheiten

### Filter nutzen

Du kannst die Liste filtern nach:
- **Status** – Geplant, In Prüfung, Freigegeben, Abgelehnt
- **Art** – Ferien, Krankheit, etc.
- **Zeitraum** – Von/Bis Datum

## Abwesenheit erfassen

### Neue Abwesenheit erstellen

**Schritt 1:** Klicke auf **Abwesenheit hinzufügen** oder **Neue Absenz**

**Schritt 2:** Fülle das Formular aus:

| Feld | Beschreibung | Pflicht |
|------|--------------|---------|
| **Absenzentyp** | Art der Abwesenheit (z.B. Ferien) | Ja |
| **Beginn** | Erster Tag der Abwesenheit | Ja |
| **Ende** | Letzter Tag der Abwesenheit | Ja |
| **Dauer** | Ganzer Tag, Vormittag oder Nachmittag | Ja |
| **Beschreibung** | Optionale Notiz | Nein |
| **Status** | Geplant oder zur Bewilligung einreichen | Ja |

**Schritt 3:** Wähle den Status:
- **Geplante Abwesenheit** – Speichert den Antrag ohne Freigabe-Anfrage
- **Zur Bewilligung einreichen** – Sendet den Antrag zur Genehmigung

> **💡 Hinweis:** Bei Absenzentypen mit automatischer Freigabe wird das Status-Feld ausgeblendet. Die Absenz wird beim Speichern automatisch freigegeben und du sowie dein Vorgesetzter werden benachrichtigt.

**Schritt 4:** Klicke auf **Speichern**

### Dauer-Optionen

Bei Abwesenheiten kannst du wählen:

| Option | Bedeutung | Anrechnung |
|--------|-----------|------------|
| **Ganzer Tag** | Volle Abwesenheit | 1 Tag |
| **Vormittag** | Nur vormittags abwesend | 0.5 Tage |
| **Nachmittag** | Nur nachmittags abwesend | 0.5 Tage |

> **💡 Tipp:** Die Option gilt für alle Tage im Zeitraum. Für unterschiedliche Tage erstelle separate Einträge.

### Beispiel: Ferien beantragen

1. Klicke auf **Abwesenheit hinzufügen**
2. Wähle **Absenzentyp**: Ferien
3. Gib **Beginn** ein: 15.07.2025
4. Gib **Ende** ein: 26.07.2025
5. Wähle **Dauer**: Ganzer Tag
6. Optional: Füge eine **Beschreibung** hinzu (z.B. "Sommerferien")
7. Wähle **Status**: Zur Bewilligung einreichen
8. Klicke auf **Speichern**

## Freigabe-Workflow

Abwesenheiten durchlaufen je nach Absenzentyp einen unterschiedlichen Genehmigungsprozess:

### Standard-Workflow (mit manueller Freigabe)

<pre>
┌──────────────┐
│   Geplant    │  Du hast die Abwesenheit erstellt
└──────┬───────┘
       │ Einreichen
       ▼
┌──────────────┐
│  In Prüfung  │  Wartet auf Genehmigung durch Vorgesetzten
└──────┬───────┘
       │
   ┌───┴───┐
   ▼       ▼
┌──────┐ ┌──────────┐
│ Frei-│ │ Abgelehnt│
│gegeb.│ └──────────┘
└──────┘      │
              │ Reaktivieren
              ▼
       ┌──────────────┐
       │   Geplant    │
       └──────────────┘
</pre>

### Automatische Freigabe

Bei Absenzentypen mit aktivierter automatischer Freigabe (z.B. Schulabsenzen, Weiterbildungen) gilt ein vereinfachter Workflow:

<pre>
┌──────────────────┐
│ Absenz erstellen │  Du wählst einen auto-freigegebenen Absenzentyp
└────────┬─────────┘
         │ Speichern
         ▼
┌──────────────────┐
│   Freigegeben    │  Absenz ist sofort aktiv
└──────────────────┘
         │
         ▼
  ┌──────────────────────────────────┐
  │ Benachrichtigungen werden gesendet:
  │ • An dich (Bestätigung)
  │ • An deinen Vorgesetzten (Info)
  └──────────────────────────────────┘
</pre>

**Vorteile der automatischen Freigabe:**

- ✅ Keine Wartezeit auf Genehmigung
- ✅ Arbeitszeit wird sofort gutgeschrieben
- ✅ Weniger administrativer Aufwand
- ✅ Ideal für Routine-Absenzen wie Schulungen

> **💡 Tipp:** Welche Absenzentypen automatisch freigegeben werden, wird von deiner HR-Abteilung konfiguriert.

### Statusbedeutungen

| Status | Farbe | Bedeutung |
|--------|-------|-----------|
| **Geplant** | Grau | Entwurf, noch nicht eingereicht |
| **In Prüfung** | Orange | Zur Genehmigung eingereicht |
| **Freigegeben** | Grün | Genehmigt und gültig |
| **Abgelehnt** | Rot | Nicht genehmigt |

### Abwesenheit einreichen

Wenn du eine geplante Abwesenheit zur Genehmigung einreichen möchtest:

1. Öffne die Abwesenheit
2. Klicke auf **Einreichen** oder wähle die Aktion im Workflow
3. Optional: Füge einen Kommentar hinzu
4. Bestätige die Einreichung

Dein Vorgesetzter wird benachrichtigt und kann die Anfrage bearbeiten.

### Abwesenheit zurückziehen

Solange die Abwesenheit noch "In Prüfung" ist:

1. Öffne die Abwesenheit
2. Klicke auf **Zurückziehen**
3. Der Status wechselt zurück zu "Geplant"

### Nach Ablehnung

Wurde deine Abwesenheit abgelehnt, kannst du:

1. Die Abwesenheit **bearbeiten** (Datum ändern)
2. Die Abwesenheit **reaktivieren** und erneut einreichen
3. Die Abwesenheit **löschen**

## Abwesenheit bearbeiten

### Eigene Abwesenheit ändern

Du kannst eine Abwesenheit bearbeiten, wenn:
- Der Status "Geplant" ist
- Du die erforderlichen Berechtigungen hast

**So geht's:**
1. Öffne die Abwesenheit
2. Klicke auf **Bearbeiten**
3. Ändere die gewünschten Felder
4. Klicke auf **Speichern**

### Abwesenheit löschen

Du kannst eine Abwesenheit löschen, wenn:
- Der Status "Geplant" ist
- Die Abwesenheit dir gehört

**So geht's:**
1. Öffne die Abwesenheit
2. Klicke auf **Löschen**
3. Bestätige die Löschung

> **⚠️ Wichtig:** Freigegebene Abwesenheiten können nur von Administratoren gelöscht werden.

## Kommentare und Kommunikation

### Kommentar hinzufügen

Bei der Bearbeitung einer Abwesenheit kannst du Kommentare hinterlassen:

1. Öffne die Abwesenheit
2. Gib einen **Kommentar** ein
3. Wähle optional **Benachrichtigung an** (Empfänger auswählen)
4. Klicke auf **Speichern**

### Benachrichtigungen

Das System benachrichtigt automatisch:
- **Vorgesetzte** bei neuen Anträgen
- **Mitarbeitende** bei Statusänderungen
- **Ausgewählte Personen** bei Kommentaren

## Übersichten und Kalender

### Monatsplan

Der Monatsplan zeigt alle Abwesenheiten des Teams:

1. Klicke auf **Monatsplan** im Menü
2. Du siehst einen Kalender mit allen Team-Abwesenheiten
3. Nutze die Navigation um zwischen Monaten zu wechseln

**Farbcodierung:**
- Verschiedene Abwesenheitsarten haben unterschiedliche Farben
- So erkennst du auf einen Blick, wer wann abwesend ist

### Jahresübersicht

Für einen langfristigen Überblick:

1. Klicke auf **Gesamtübersicht** im Menü
2. Du siehst alle Abwesenheiten des gesamten Jahres
3. Filter nach Mitarbeiter, Art oder Status

### Kalender-Export (iCal)

Du kannst Abwesenheiten in deinen Kalender exportieren:

1. Klicke auf **Feed** oder das Kalender-Symbol
2. Kopiere die iCal-URL
3. Füge sie in deinem Kalender-Programm hinzu (Outlook, Google Calendar, etc.)

> **💡 Tipp:** Der iCal-Feed aktualisiert sich automatisch, wenn sich Abwesenheiten ändern.

## Freigaben (für Vorgesetzte)

### Offene Anträge anzeigen

Als Vorgesetzte/r siehst du alle offenen Anträge deines Teams:

1. Klicke auf **Freigaben** im Menü
2. Du siehst alle Abwesenheiten mit Status "In Prüfung"

### Abwesenheit genehmigen

**Schritt 1:** Öffne die Abwesenheit im Workflow

**Schritt 2:** Prüfe die Details:
- Zeitraum
- Anzahl Tage
- Restlicher Feriensaldo des Mitarbeiters

**Schritt 3:** Wähle eine Aktion:
- **Freigeben** – Genehmigt die Abwesenheit
- **Ablehnen** – Lehnt die Abwesenheit ab

**Schritt 4:** Optional: Füge einen Kommentar hinzu

**Schritt 5:** Bestätige die Aktion

### Abwesenheit ablehnen

Wenn du eine Abwesenheit ablehnst:

1. Wähle **Ablehnen** als Aktion
2. Gib einen **Kommentar** ein (empfohlen, um den Grund zu erklären)
3. Bestätige die Ablehnung

Der Mitarbeiter wird benachrichtigt und kann die Abwesenheit anpassen und erneut einreichen.

## Auswirkungen auf Salden

### Feriensaldo

Bei Abwesenheitsarten mit "Als Ferien angerechnet":
- Anzahl Tage wird vom Feriensaldo abgezogen
- Halbe Tage werden anteilig berechnet
- Nur freigegebene Abwesenheiten werden abgezogen

### Arbeitszeit

Bei Abwesenheitsarten mit "Als Arbeitszeit angerechnet":
- Die Sollstunden des Abwesenheitstages werden als geleistet betrachtet
- Kein Einfluss auf den Gleitzeitsaldo
- Wochenenden und Feiertage werden nicht gezählt

### Kranktage

Bei Abwesenheitsarten mit "Als Kranktage angerechnet":
- Tage werden im Kranktage-Zähler erfasst
- Jahresübersicht zeigt Gesamtzahl
- Dient der Dokumentation und Statistik

## Best Practices

### Für Mitarbeitende

- ✅ Ferien frühzeitig planen und einreichen
- ✅ Krankheitstage zeitnah erfassen
- ✅ Bei längeren Abwesenheiten Details in der Beschreibung vermerken
- ✅ Feriensaldo im Blick behalten

### Für Vorgesetzte

- ✅ Anträge zeitnah bearbeiten
- ✅ Bei Ablehnung Grund kommunizieren
- ✅ Teamkalender regelmässig prüfen
- ✅ Engpässe früh erkennen

### Vermeiden

- ❌ Abwesenheiten ohne Genehmigung antreten
- ❌ Lange Wartezeiten bei Freigaben
- ❌ Unvollständige Krankheitserfassung

## Häufige Fragen

### Wie viele Ferientage habe ich noch?

Du siehst deinen aktuellen Feriensaldo:
- Im Dashboard
- In der Abwesenheitsübersicht
- Im Monatsreport

### Kann ich halbe Ferientage nehmen?

Ja, wähle bei der Dauer "Vormittag" oder "Nachmittag". Es wird dann 0.5 Tage abgezogen.

### Was passiert mit nicht bezogenen Ferien?

Das hängt von den Regelungen deiner Organisation ab. In der Regel:
- Ferien verfallen nicht automatisch
- Übertrag ins neue Jahr möglich
- Manuelle Korrektur durch HR bei Bedarf

### Meine Abwesenheit wurde abgelehnt. Was nun?

1. Lies den Kommentar des Vorgesetzten
2. Passe den Zeitraum an oder wähle andere Tage
3. Reiche die Abwesenheit erneut ein
4. Bei Fragen: Sprich direkt mit deinem Vorgesetzten

### Kann ich mehrere Abwesenheiten gleichzeitig einreichen?

Ja, du kannst beliebig viele Abwesenheiten erstellen und einreichen. Jede wird einzeln bearbeitet.

### Wie erfasse ich Krankheitstage?

1. Erstelle eine neue Abwesenheit
2. Wähle **Absenzentyp**: Krankheit
3. Gib den Zeitraum ein
4. Bei Krankheit ist meist keine Freigabe nötig – prüfe die Regelungen deiner Organisation

### Was bedeutet "Automatisch freigegeben"?

Bestimmte Absenzentypen (z.B. Schulabsenzen, Weiterbildungen) können von deiner HR-Abteilung für automatische Freigabe konfiguriert werden. Bei diesen Absenzentypen:

- Das Status-Auswahlfeld wird beim Erfassen ausgeblendet
- Die Absenz wird beim Speichern sofort freigegeben
- Du und dein Vorgesetzter erhalten eine Benachrichtigung
- Die Arbeitszeit wird direkt gutgeschrieben

Du erkennst auto-freigegebene Absenzentypen am grünen Chip "Automatisch freigegeben", der bei der Auswahl angezeigt wird.

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Welche Abwesenheitsarten es gibt und ihre Eigenschaften
- ✅ Info-Chips zeigen dir bei der Auswahl die Eigenschaften des Absenzentyps
- ✅ Wie du Abwesenheiten erfasst und einreichst
- ✅ Automatische Freigabe für bestimmte Absenzentypen verstehen
- ✅ Den Standard-Freigabe-Workflow verstehen
- ✅ Abwesenheiten bearbeiten und löschen
- ✅ Übersichten und Kalender nutzen
- ✅ Als Vorgesetzte/r Freigaben erteilen

Im nächsten Kapitel lernst du, wie du Spesen erfasst und abrechnest.
