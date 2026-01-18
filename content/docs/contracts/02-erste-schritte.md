---
title: "Erste Schritte"
description: ""
weight: "2"
tags:
  - "getting-started"
  - "basics"
  - "contracts"
---


# Erste Schritte

In diesem Kapitel lernst du die Grundlagen der Arbeit mit dem Vertragsmanagement-Modul von ELIZA.

## Zugriff auf das Vertragsmanagement

### Voraussetzungen

Um das Vertragsmanagement-Modul nutzen zu können, benötigst du die entsprechende Berechtigung:

- **Verträge ansehen**: `contracts.view_contract` und `contracts.view_contractfolder`
- **Verträge bearbeiten**: `contracts.change_contract`
- **Verträge verwalten**: `contracts.add_contract`, `contracts.delete_contract`

💡 **Tipp:** Wenn du das Vertragsmanagement-Modul nicht siehst, wende dich an deinen Administrator.

### Navigation zum Vertragsmanagement

1. Melde dich in ELIZA an
2. Klicke in der Hauptnavigation auf **"Verträge"** oder **"Contracts"**
3. Du siehst nun die **Ordnerübersicht** mit allen Vertragsordnern

## Die Ordnerübersicht

### Hauptansicht

Die Ordnerübersicht ist dein Startpunkt und zeigt alle Vertragsordner, auf die du Zugriff hast.

**Elemente der Übersicht:**

- **Ordner-Liste**: Alle Top-Level Ordner werden als Karten angezeigt
- **Ordner-Informationen**: Titel, Beschreibung, Anzahl Verträge
- **Aktionen**: Buttons zum Öffnen, Bearbeiten, Löschen
- **Neue Ordner**: Button zum Erstellen neuer Hauptordner

### Ordner-Karten

Jede Ordner-Karte zeigt:

- 📁 **Titel**: Name des Ordners
- 📝 **Beschreibung**: Kurze Beschreibung des Ordners
- 🔢 **Anzahl Verträge**: Wie viele Verträge im Ordner liegen
- 👥 **Team**: Wer darf auf den Ordner zugreifen
- 🔐 **Sichtbarkeit**: Normal oder Geschützt

**Beispiel:**

```
📁 Lieferantenverträge
   Verträge mit unseren Hauptlieferanten
   15 Verträge
   Team: Max Muster, Anna Meier
   Sichtbarkeit: Normal
   [Öffnen] [Bearbeiten] [Löschen]
```

### Navigation in Ordnern

**Ordner öffnen:**

1. Klicke auf **"Öffnen"** oder auf den Ordner-Titel
2. Du siehst nun die **Ordner-Detailansicht**
3. Hier findest du:
   - Unterordner (falls vorhanden)
   - Verträge im Ordner
   - Ordner-Aktionen

**Zurück zur Übersicht:**

- Nutze die **Breadcrumb-Navigation** oben
- Oder klicke auf **"Alle Ordner"**

## Ordner-Detailansicht

### Struktur

Die Detailansicht eines Ordners zeigt:

**Oben:**

- **Breadcrumbs**: Pfad zum aktuellen Ordner (z.B. Verträge → Lieferanten → IT-Lieferanten)
- **Ordner-Titel und Beschreibung**
- **Aktions-Buttons**: Bearbeiten, Löschen, Neuen Unterordner, Neuen Vertrag

**Unterordner-Bereich:**

- Liste aller Unterordner
- Gleiche Karten-Darstellung wie Hauptordner
- Navigation durch Klick auf Unterordner

**Verträge-Bereich:**

- Tabelle mit allen Verträgen im Ordner
- Spalten: Titel, Partner, Von-Bis, Status, Aktionen
- Such- und Filterfunktionen

### Breadcrumb-Navigation

Die Breadcrumb-Navigation zeigt deinen Pfad:

```
Verträge → Lieferantenverträge → IT-Lieferanten → Microsoft
```

**Vorteile:**

- Schnelle Navigation zu übergeordneten Ordnern
- Übersicht über Ordner-Hierarchie
- Ein-Klick zurück zu jedem Ebenen-Ordner

## Verträge ansehen

### Vertragsübersicht im Ordner

In der Ordner-Detailansicht siehst du eine Tabelle mit allen Verträgen:

| Titel | Partner | Von | Bis | Status | Aktionen |
|-------|---------|-----|-----|--------|----------|
| Microsoft Office 365 | Microsoft | 01.01.2024 | 31.12.2024 | Aktiv | [Ansehen] [Bearbeiten] |
| Adobe Creative Cloud | Adobe | 15.03.2024 | 14.03.2025 | Aktiv | [Ansehen] [Bearbeiten] |

**Funktionen:**

- **Suche**: Suchfeld oben rechts für schnelle Suche
- **Sortierung**: Klicke auf Spaltentitel zum Sortieren
- **Filter**: Nach Status, Datum, Partner filtern
- **Paginierung**: Blättere durch lange Listen

### Vertrag öffnen

**Schritt-für-Schritt:**

1. Finde den Vertrag in der Tabelle
2. Klicke auf **"Ansehen"** oder auf den Vertragstitel
3. Du siehst nun die **Vertrags-Detailansicht**

### Vertrags-Detailansicht

Die Detailansicht zeigt alle Informationen zum Vertrag:

**Tabs:**

1. **Übersicht**: Alle Vertragsdaten auf einen Blick
2. **Dateien**: Vertragsunterlagen und Dokumente
3. **Wertflüsse**: Ein- und Ausgangsrechnungen
4. **Historie**: Änderungsprotokoll (Audit-Trail)

**Übersicht-Tab:**

Zeigt strukturiert alle Felder:

- Grunddaten (Titel, Beschreibung, Typ, Partner)
- Laufzeit (Von-Datum, Bis-Datum, Dauer)
- Kündigung (Fristen, Termine, Modalitäten)
- Finanzielle Aspekte (Cashflow, Zahlungen, Betrag)
- Verantwortlichkeiten (Mitarbeiter, Organisationseinheit)
- Status

**Dateien-Tab:**

Liste aller hochgeladenen Dateien:

- Dateiname und Titel
- Beschreibung
- Upload-Datum
- Download-Button

**Wertflüsse-Tab:**

Übersicht aller Zahlungsströme:

- Typ (Einnahme/Ausgabe)
- Zeitraum
- Periodizität (einmalig/monatlich/jährlich)
- Betrag
- Bearbeiten/Löschen

## Berechtigungen verstehen

### Was du sehen kannst

Deine Berechtigungen bestimmen, welche Ordner und Verträge du siehst:

**Normale Ordner:**

- Sichtbar für alle mit `view_contract` Berechtigung
- Du siehst alle Verträge im Ordner

**Geschützte Ordner:**

- Nur sichtbar für:
  - Ordner-Team-Mitglieder
  - Ordner-Administratoren
  - Mitglieder der zugewiesenen Organisationseinheiten
  - Superuser

### Was du tun kannst

Je nach Berechtigung kannst du unterschiedliche Aktionen ausführen:

**Mit View-Berechtigung:**

- ✅ Ordner ansehen
- ✅ Verträge ansehen
- ✅ Dateien herunterladen
- ❌ Nichts bearbeiten oder erstellen

**Mit Change-Berechtigung:**

- ✅ Alles von View
- ✅ Verträge bearbeiten
- ✅ Dateien hochladen
- ✅ Wertflüsse hinzufügen
- ❌ Keine Ordner/Verträge erstellen oder löschen

**Mit Add/Delete-Berechtigung:**

- ✅ Alles von View und Change
- ✅ Neue Ordner erstellen
- ✅ Neue Verträge erstellen
- ✅ Verträge löschen
- ✅ Ordner löschen (nur wenn leer)

**Als Ordner-Administrator:**

- ✅ Alles von oben
- ✅ Ordner-Berechtigungen verwalten
- ✅ Team-Mitglieder hinzufügen/entfernen
- ✅ Ordner-Einstellungen ändern

## Praktische Tipps für den Einstieg

### ✅ Empfehlungen

**1. Übersicht verschaffen:**

- Schaue dir zuerst alle Ordner an
- Verstehe die Ordnerstruktur
- Prüfe, auf welche Ordner du Zugriff hast

**2. Verträge durchsuchen:**

- Nutze die Suchfunktion
- Filtere nach Status
- Sortiere nach Ablaufdatum

**3. Einen Beispiel-Vertrag genau ansehen:**

- Öffne einen Vertrag
- Schaue dir alle Tabs an
- Verstehe die Struktur

**4. Berechtigungen prüfen:**

- Welche Buttons siehst du?
- Kannst du Verträge bearbeiten?
- Siehst du geschützte Ordner?

### ❌ Häufige Anfängerfehler

**1. Verträge im falschen Ordner suchen:**

- 💡 Nutze die Breadcrumb-Navigation
- 💡 Verwende die Suche über alle Ordner

**2. Geschützte Ordner nicht sehen:**

- 💡 Das ist normal, wenn du kein Team-Mitglied bist
- 💡 Wende dich an den Ordner-Administrator

**3. Buttons fehlen:**

- 💡 Prüfe deine Berechtigungen
- 💡 Du hast vielleicht nur View-Rechte

**4. Ordner-Hierarchie nicht verstehen:**

- 💡 Nutze die Breadcrumbs
- 💡 Schaue dir die Ordnerstruktur in Ruhe an

## Häufige Fragen

### Wie finde ich einen bestimmten Vertrag?

**Methode 1: Suche in Ordner:**

1. Öffne den Ordner, wo der Vertrag liegen sollte
2. Nutze das Suchfeld oben rechts in der Vertrags-Tabelle
3. Gib einen Teil des Titels oder Partners ein

**Methode 2: Globale Suche:**

1. Nutze die ELIZA-Hauptsuche (oben rechts)
2. Gib den Vertragstitel ein
3. Wähle den Vertrag aus den Suchergebnissen

### Warum sehe ich einen Ordner nicht?

**Mögliche Gründe:**

1. **Geschützter Ordner**: Du bist nicht im Team oder den zugewiesenen Orgunits
2. **Keine Berechtigung**: Du hast keine `view_contractfolder` Berechtigung
3. **Ordner existiert nicht**: Der Ordner wurde gelöscht oder nie erstellt

**Lösung:**

- Wende dich an den Ordner-Administrator oder deinen ELIZA-Administrator

### Kann ich Verträge über mehrere Ordner hinweg suchen?

Aktuell gibt es keine Ordner-übergreifende Suche in der Vertragsübersicht. Du musst:

- Jeden Ordner einzeln durchsuchen
- Oder die ELIZA-Hauptsuche nutzen (global)

### Wie erkenne ich, ob ein Ordner geschützt ist?

In der Ordner-Karte steht:

- **Sichtbarkeit: Normal** → Alle sehen den Ordner
- **Sichtbarkeit: Geschützt** → Nur Team und Admins sehen ihn

### Kann ich die Ordnerstruktur ändern?

Nur wenn du Ordner-Administrator oder Superuser bist. Sonst wende dich an deinen Administrator.

## Nächste Schritte

Jetzt, wo du die Grundlagen kennst, kannst du:

1. **[Kapitel 3: Verträge erstellen]({{< ref "03-vertraege-erstellen" >}})** - Lerne, wie du neue Verträge anlegst
2. **[Kapitel 4: Vertragsübersicht]({{< ref "04-vertragsuebersicht" >}})** - Nutze erweiterte Such- und Filterfunktionen
3. **[Kapitel 5: Berechtigungskonzept]({{< ref "05-berechtigungskonzept" >}})** - Verstehe Berechtigungen im Detail

---

💡 **Tipp:** Nimm dir Zeit, die Ordnerstruktur zu verstehen, bevor du eigene Verträge erstellst. Das spart später viel Zeit!
