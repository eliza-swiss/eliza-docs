---
title: "Kontakte verwalten"
description: ""
weight: "2"
tags:
  - "contacts"
  - "management"
  - "crm"
---


# Kontakte verwalten

In diesem Kapitel lernst du alles über die Verwaltung von Kontakten im ELIZA CRM.

## Kontakte-Liste öffnen

1. Klicke in der CRM-Navigation auf **"Kontakte"**
2. Du siehst die **Kontakte-Übersicht** mit allen verfügbaren Kontakten

Die Liste zeigt folgende Spalten:

| Spalte | Beschreibung | Sortierbar |
|--------|--------------|------------|
| **Organisation** | Firma des Kontakts (klickbar) | Ja |
| **Nachname** | Nachname des Kontakts (klickbar) | Ja |
| **Vorname** | Vorname des Kontakts (klickbar) | Ja |
| **Erstellt** | Erstellungsdatum | Ja |
| **Anrede** | Herr/Frau | Ja |
| **Labels** | Zugewiesene Kategorien | Nein |

## Neuen Kontakt erstellen

### Schritt 1: Formular öffnen

Klicke auf den grünen Button **"+ Kontakt hinzufügen"** oben rechts.

### Schritt 2: Kontaktdaten eingeben

Das Formular ist in mehrere Abschnitte gegliedert:

#### Grunddaten

**Anrede** (Pflicht)

- Wähle zwischen "Herr" (Standard) oder "Frau"

**Organisation**

- Option 1: Freitext-Feld für Organisationsname
- Option 2: **"Verlinkte Organisationseinheit"** - Wähle eine existierende Organisation aus der Dropdown-Liste

💡 **Tipp**: Verwende bevorzugt die "Verlinkte Organisationseinheit", um echte Verknüpfungen zu erstellen. Der Freitext ist nur für temporäre oder externe Organisationen gedacht.

**Name**

- **Vorname**: z.B. "Max"
- **Mittelname**: Optional, z.B. "Alexander"
- **Nachname**: z.B. "Muster"

**Funktion**

- Jobtitel, z.B. "Geschäftsführer", "Projektleiter", "Sales Manager"
- Dies ist die Hauptfunktion, wie sie auf einer Visitenkarte erscheint

**Kurzzeichen**

- Optionale Abkürzung, z.B. "MM" für Max Muster
- Nützlich für schnelle Referenzen

**Akademischer Titel / Ausbildung**

- z.B. "Dr. med.", "lic. oec. HSG", "MBA"
- Wird in formellen Anreden verwendet

**Beschreibung / Kommentar**

- Freitextfeld für zusätzliche Notizen
- Unterstützt **Markdown-Formatierung** für strukturierte Notizen
- Beispiel:
  ```markdown
  ## Notizen
  - Ansprechperson für IT-Projekte
  - Bevorzugt E-Mail-Kontakt
  - Erreichbar: Mo-Fr 8-17 Uhr
  ```

#### Bild

**Profilbild hochladen**

- Klicke auf **"Datei wählen"**
- Wähle ein Foto (JPEG, PNG)
- Empfohlene Grösse: 300x300px
- Wird als rundes Avatar-Bild angezeigt

💡 **Tipp**: Ein Profilbild macht Kontakte persönlicher und hilft bei der Wiedererkennung.

#### Geschäftliche Kontaktdaten

**Strasse (Geschäftlich)**

- Vollständige Geschäftsadresse
- Mehrere Zeilen möglich
- Beispiel:
  ```
  Musterstrasse 123
  Gebäude B, 2. Stock
  ```

**PLZ und Ort**

- **PLZ**: z.B. "8001"
- **Ort**: z.B. "Zürich"

💡 **Tipp**: PLZ und Ort werden für die Google Maps Integration verwendet.

**E-Mail (Geschäftlich)**

- Geschäftliche E-Mail-Adresse
- Wird als mailto-Link angezeigt
- Beispiel: "max.muster@beispielfirma.ch"

**Telefon (Geschäftlich)**

- Festnetz-Nummer
- Wird als tel-Link angezeigt (klickbar auf Smartphones)
- Beispiel: "+41 44 123 45 67"

**Telefon Mobil**

- Mobilnummer
- Separat vom Festnetz
- Beispiel: "+41 79 123 45 67"

**LinkedIn und Xing**

- Vollständige URL zum Profil
- Beispiel LinkedIn: "https://www.linkedin.com/in/max-muster/"
- Beispiel Xing: "https://www.xing.com/profile/Max_Muster"
- Wird mit Logo-Icons angezeigt

**Moneyhouse**

- URL zum Moneyhouse-Profil (Schweizer Firmenverzeichnis)
- Beispiel: "https://www.moneyhouse.ch/..."
- Optional: **Moneyhouse UID** für die Unternehmensidentifikation

#### Labels

Wähle ein oder mehrere Labels aus der Liste:

- Labels helfen bei der Kategorisierung
- Mehrfachauswahl möglich (Ctrl/Cmd + Klick)
- Beispiele: "Kunde", "Lieferant", "Lead", "VIP"

### Schritt 3: Speichern

Klicke auf den grünen **"Speichern"** Button unten rechts im Formular.

✅ **Erfolg!** Der Kontakt wurde erstellt und du wirst zur Detailansicht weitergeleitet.

## Kontakt bearbeiten

### Kontakt öffnen

1. Gehe zur **Kontakte-Liste**
2. Klicke auf den Namen des Kontakts
3. In der Detailansicht klicke auf das **Bearbeiten-Icon** (Stift) oben rechts

### Änderungen vornehmen

- Alle Felder können bearbeitet werden
- Änderungen werden im **Änderungsprotokoll** aufgezeichnet
- Du siehst, wer wann was geändert hat

### Speichern

Klicke auf **"Speichern"** um die Änderungen zu übernehmen.

## Kontakt-Detailansicht

Die Detailansicht ist in Tabs organisiert:

### Tab: Übersicht

Die Übersicht zeigt die wichtigsten Informationen auf einen Blick:

**Visitenkarten-Ansicht**

```
[Profilbild]    Organisation
                Vorname Nachname
                Strasse
                PLZ Ort
                📧 E-Mail
                📞 Telefon
                📱 Mobile
```

**Auf Google Maps anzeigen**

- Klicke auf den Link unter der Adresse
- Öffnet die Adresse in Google Maps
- Nützlich für Routenplanung

**Social Media Profile**

Wenn LinkedIn, Xing oder Moneyhouse hinterlegt sind, werden die Icons angezeigt:

- 🔗 LinkedIn-Logo (klickbar)
- 🔗 Xing-Logo (klickbar)
- 🔗 Moneyhouse-Logo (klickbar)

**Weitere Informationen**

- **Beschreibung/Kommentar**: Markdown-formatierte Notizen
- **Labels**: Alle zugewiesenen Labels mit Klick zur Label-Detailseite
- **Vollständiger Name**: Inkl. Mittelname (falls vorhanden)
- **Kurzzeichen**: Die Abkürzung
- **Funktion**: Der Jobtitel
- **Akademischer Titel**: Falls vorhanden

### Tab: Beteiligungen

Zeigt alle Beteiligungen des Kontakts:

- An welchen **Projekten** ist der Kontakt beteiligt?
- In welchen **Verträgen** ist der Kontakt involviert?
- Welche **Rollen** hat der Kontakt?

Beispiel:

| Beteiligung | Rolle |
|-------------|-------|
| Projekt: Website Relaunch | Projektleiter |
| Vertrag: Rahmenvertrag IT | Ansprechperson |
| Angebot: CRM-Einführung | Entscheidungsträger |

💡 **Tipp**: Beteiligungen werden automatisch erstellt, wenn du den Kontakt in anderen Modulen zuweist.

### Tab: Info

Zeigt Metadaten:

- **Erstellt am**: Wann wurde der Kontakt erstellt?
- **Erstellt von**: Wer hat den Kontakt erstellt? (falls im System erfasst)
- **Geändert am**: Letzte Änderung
- **Bexio ID**: Falls mit Bexio synchronisiert

### Aktionen in der Detailansicht

Oben rechts findest du folgende Icons:

- ✏️ **Bearbeiten**: Kontakt bearbeiten
- 🗑️ **Löschen**: Kontakt löschen (Vorsicht!)
- ☁️ **Bexio**: Kontakt in Bexio öffnen (nur wenn Bexio ID vorhanden)

## Kontakte suchen und filtern

### Suchfunktion

Die Kontakte-Liste hat oben rechts ein **Suchfeld**:

- Suche nach **Vorname**
- Suche nach **Nachname**
- Suche nach **Organisation**
- Suche nach **E-Mail**

Die Suche erfolgt in Echtzeit und filtert die Tabelle dynamisch.

### Filter

Nutze die **Filter-Optionen** über der Tabelle:

**Nach Labels filtern**

- Klicke auf das Filter-Symbol
- Wähle ein oder mehrere Labels
- Die Liste zeigt nur Kontakte mit diesen Labels

**Nach Anrede filtern**

- Filtere nach "Herr" oder "Frau"
- Nützlich für gezielte Ansprachen oder Statistiken

### Sortierung

Klicke auf die **Spaltenüberschriften** um zu sortieren:

- **Alphabetisch**: Nach Nachname, Vorname, Organisation
- **Chronologisch**: Nach Erstellungsdatum (neueste zuerst)
- **Umgekehrte Sortierung**: Erneuter Klick kehrt die Sortierung um

## Kontakte kategorisieren mit Labels

### Was sind Labels?

Labels sind **Kategorisierungs-Tags**, die du Kontakten und Organisationen zuweisen kannst:

- "Kunde" - Bestehende Kunden
- "Lead" - Potenzielle Kunden
- "Lieferant" - Dienstleister und Zulieferer
- "Partner" - Geschäftspartner
- "VIP" - Wichtige Kontakte
- "Aktiv" / "Inaktiv" - Status
- "Regional: Zürich" - Geografische Zuordnung

### Labels zuweisen

**Beim Erstellen**

- Wähle Labels im Kontakt-Formular aus (Mehrfachauswahl)

**Beim Bearbeiten**

- Öffne den Kontakt
- Klicke auf "Bearbeiten"
- Ändere die Label-Auswahl im Formular

### Neue Labels erstellen

1. Gehe zu **"Labels"** in der CRM-Navigation
2. Klicke auf **"+ Label hinzufügen"**
3. Gib einen **Titel** ein (z.B. "Strategischer Partner")
4. Klicke auf **"Speichern"**

Das neue Label steht nun in allen Kontakt- und Organisations-Formularen zur Verfügung.

### Labels verwalten

**Label-Liste ansehen**

- Zeigt alle verfügbaren Labels
- Zeigt die Anzahl verknüpfter Objekte pro Label

**Label bearbeiten**

- Klicke auf ein Label in der Liste
- Ändere den Titel
- Speichere die Änderungen

**Label löschen**

- Achtung: Verknüpfungen gehen verloren!
- Prüfe vorher die Anzahl verknüpfter Objekte

## Kontakt löschen

### Vorsicht beim Löschen

⚠️ **Warnung**: Das Löschen von Kontakten ist **permanent** und kann **nicht rückgängig** gemacht werden.

### Vor dem Löschen prüfen

Prüfe folgende Punkte:

- ❓ Gibt es **Beteiligungen** an Projekten, Verträgen oder anderen Objekten?
- ❓ Ist der Kontakt in **Dokumenten** referenziert?
- ❓ Gibt es **E-Mail-Korrespondenz** mit diesem Kontakt?
- ❓ Ist der Kontakt mit **Bexio** synchronisiert?

💡 **Tipp**: Statt zu löschen, erwäge ein Label "Inaktiv" zuzuweisen.

### Kontakt löschen

1. Öffne die **Kontakt-Detailansicht**
2. Klicke auf das **Löschen-Icon** (Mülleimer) oben rechts
3. Bestätige die Sicherheitsabfrage
4. Der Kontakt wird gelöscht

### Alternative: Inaktiv markieren

Statt zu löschen, markiere Kontakte als inaktiv:

1. Erstelle ein Label **"Inaktiv"**
2. Weise es inaktiven Kontakten zu
3. Filtere bei Bedarf nach aktiven Kontakten

**Vorteile**:

- ✅ Historische Daten bleiben erhalten
- ✅ Beteiligungen bleiben sichtbar
- ✅ Kann reaktiviert werden
- ✅ Keine Datenverluste

## Best Practices

### ✅ Empfehlungen

**Vollständige Daten erfassen**

- Erfasse möglichst alle Kontaktdaten (E-Mail, Telefon, Adresse)
- Fehlende Daten erschweren die Kontaktaufnahme

**Verlinkte Organisationen verwenden**

- Nutze "Verlinkte Organisationseinheit" statt Freitext
- Ermöglicht bessere Auswertungen und Verknüpfungen

**Labels konsequent verwenden**

- Definiere ein Label-System und halte dich daran
- Beispiel: "Status: Aktiv/Inaktiv", "Typ: Kunde/Lieferant/Partner"

**Beschreibungsfeld nutzen**

- Notiere wichtige Informationen im Beschreibungsfeld
- Nutze Markdown für Struktur
- Beispiel: Meeting-Notizen, Präferenzen, Besonderheiten

**Profilbilder hinzufügen**

- Mache Kontakte persönlicher mit Profilbildern
- Hilft bei der Wiedererkennung in Listen

**Social Media Profile verlinken**

- LinkedIn und Xing sind wertvolle Informationsquellen
- Halte die Links aktuell

**Regelmässig aktualisieren**

- Kontaktdaten ändern sich: E-Mail, Telefon, Position
- Plane regelmässige Reviews ein

### ❌ Häufige Fehler

**Duplikate erstellen**

- Problem: Mehrere Einträge für dieselbe Person
- Lösung: Vor dem Anlegen nach existierenden Kontakten suchen

**Unvollständige Daten**

- Problem: Fehlende E-Mail-Adressen oder Telefonnummern
- Lösung: Mindestens E-Mail ODER Telefon erfassen

**Keine Labels zuweisen**

- Problem: Unkategorisierte Kontakte sind schwer zu filtern
- Lösung: Beim Erstellen direkt Labels zuweisen

**Freitext statt verlinkter Organisation**

- Problem: Keine echte Verknüpfung zur Organisation
- Lösung: Organisation zuerst anlegen, dann verlinken

**Beschreibungsfeld leer lassen**

- Problem: Wichtige Informationen gehen verloren
- Lösung: Notiere Besonderheiten, Präferenzen, Meeting-Notes

**Inaktive Kontakte löschen**

- Problem: Historische Daten und Beteiligungen gehen verloren
- Lösung: Label "Inaktiv" verwenden statt löschen

## Häufige Fragen

### Wie finde ich doppelte Kontakte?

Aktuell gibt es keine automatische Duplikate-Erkennung. Nutze die Suchfunktion und prüfe vor dem Anlegen:

1. Suche nach **Nachname**
2. Suche nach **E-Mail**
3. Prüfe die **Organisation**

### Kann ich Kontakte importieren?

Massenimport ist aktuell nicht über die Benutzeroberfläche verfügbar. Wende dich für CSV-Importe an deinen Administrator.

### Wie kann ich alle Kontakte einer Organisation sehen?

1. Öffne die **Organisation** in der Organisations-Liste
2. Im Tab **"Beteiligungen"** siehst du alle verknüpften Kontakte
3. Alternativ: Filtere in der Kontakte-Liste nach Organisation

### Was ist der Unterschied zwischen "Organisation" und "Verlinkte Organisationseinheit"?

- **Organisation** (Freitext): Einfaches Textfeld ohne Verknüpfung
- **Verlinkte Organisationseinheit**: Echte Verknüpfung zu einem Organisations-Objekt

💡 **Empfehlung**: Verwende immer "Verlinkte Organisationseinheit" für bessere Auswertungen.

### Warum kann ich einen Kontakt nicht löschen?

Mögliche Gründe:

- Du hast keine Lösch-Berechtigung (`crm.delete_contact`)
- Wende dich an deinen Administrator

### Wie kann ich Kontakte exportieren?

Export über die UI ist aktuell nicht verfügbar. Frage deinen Administrator nach:

- CSV-Export
- Excel-Export
- Bexio-Synchronisation

### Wird die Änderungshistorie gespeichert?

Ja, alle Änderungen werden protokolliert:

- **Was** wurde geändert
- **Wann** wurde geändert
- **Wer** hat geändert

Die Historie ist im Dashboard unter "Letzte Änderungen" einsehbar.

## Nächste Schritte

Jetzt, wo du Kontakte verwalten kannst:

1. Lerne **Organisationen zu verwalten** (Kapitel 3)
2. Verstehe **Beteiligungen und Rollen** (Kapitel 4)
3. Nutze **CRM-Integrationen** mit anderen Modulen (Kapitel 5)
