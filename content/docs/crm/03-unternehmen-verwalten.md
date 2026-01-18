---
title: "Unternehmen verwalten"
description: ""
weight: "3"
tags:
  - "organisations"
  - "companies"
  - "crm"
---


# Unternehmen verwalten

In diesem Kapitel lernst du, wie du Organisationen (Unternehmen) im ELIZA CRM erstellst, bearbeitest und effektiv verwaltest.

## Organisationen-Liste öffnen

1. Klicke in der CRM-Navigation auf **"Organisationen"**
2. Du siehst die **Organisationen-Übersicht** mit allen Unternehmen

Die Liste zeigt folgende Spalten:

| Spalte | Beschreibung | Sortierbar |
|--------|--------------|------------|
| **Name** | Firmenname (klickbar) | Ja |
| **Strasse** | Geschäftsadresse | Nein |
| **Ort** | Geschäftsort | Ja |

## Neue Organisation erstellen

### Schritt 1: Formular öffnen

Klicke auf den grünen Button **"+ Organisation hinzufügen"** im Dashboard oder in der Organisationen-Liste.

### Schritt 2: Unternehmensdaten eingeben

Das Formular ist klar strukturiert und erfasst alle wichtigen Geschäftsdaten.

#### Name (Pflicht)

**Firmenname**

- Vollständiger, offizieller Firmenname
- Beispiel: "Beispiel AG", "Muster GmbH", "Schweizer Beratung KLG"

💡 **Tipp**: Verwende den offiziellen Namen aus dem Handelsregister für Konsistenz.

#### Beschreibung / Kommentar

**Freitextfeld für zusätzliche Informationen**

- Notizen zur Organisation
- Geschäftsfeld, Branche
- Besonderheiten, wichtige Informationen
- Unterstützt **Markdown-Formatierung**

Beispiel:

```markdown
## Geschäftsfeld
- Software-Entwicklung
- IT-Beratung
- Cloud-Services

## Besonderheiten
- Hauptlieferant für CRM-Systeme
- Bevorzugte Zahlungskonditionen: 30 Tage netto
- Ansprechperson IT: Max Muster
```

#### Geschäftliche Kontaktdaten

**Strasse (Geschäftlich)**

- Vollständige Geschäftsadresse
- Mehrere Zeilen möglich
- Beispiel:
  ```
  Musterstrasse 123
  Gebäude A, 3. Stock
  Postfach 456
  ```

**PLZ und Ort**

- **PLZ (Geschäftlich)**: z.B. "8001"
- **Ort (Geschäftlich)**: z.B. "Zürich"

💡 **Tipp**: Diese Daten werden für Google Maps Integration und geografische Auswertungen verwendet.

**Website (URL)**

- Vollständige Website-Adresse
- Beispiel: "https://www.beispielfirma.ch"
- Wird als klickbarer Link angezeigt

**E-Mail (Geschäftlich)**

- Allgemeine Kontakt-E-Mail der Firma
- z.B. "info@beispielfirma.ch" oder "kontakt@beispielfirma.ch"
- Wird als mailto-Link angezeigt

**Telefon (Geschäftlich)**

- Zentrale Telefonnummer
- Beispiel: "+41 44 123 45 67"
- Wird als tel-Link angezeigt (klickbar auf Smartphones)

#### Social Media und Unternehmensprofile

**LinkedIn (URL)**

- Link zur LinkedIn Unternehmensseite
- Beispiel: "https://www.linkedin.com/company/beispiel-ag/"
- Wird mit LinkedIn-Logo angezeigt

**Xing (URL)**

- Link zur Xing Unternehmensseite
- Beispiel: "https://www.xing.com/pages/beispielag"
- Wird mit Xing-Logo angezeigt

**Moneyhouse (URL)**

- Link zum Moneyhouse-Profil (Schweizer Firmenverzeichnis)
- Enthält Finanzdaten, Handelsregisterauszug, etc.
- Beispiel: "https://www.moneyhouse.ch/de/company/beispiel-ag-..."

**Moneyhouse (UID)**

- Unternehmens-Identifikationsnummer
- Format: CHE-123.456.789
- Schweizer Handelsregister-Nummer

💡 **Tipp**: Moneyhouse-Daten sind wertvoll für Bonitätsprüfungen und Unternehmensanalysen.

#### Labels

**Kategorisierung**

- Wähle ein oder mehrere Labels aus der Liste
- Mehrfachauswahl möglich (Ctrl/Cmd + Klick)
- Beispiele: "Kunde", "Lieferant", "Partner", "Lead"

Typische Label-Systeme:

```text
Status:
- Aktiv
- Inaktiv
- Lead

Typ:
- Kunde
- Lieferant
- Partner
- Wettbewerber

Grösse:
- KMU
- Enterprise
- Startup

Region:
- Zürich
- Bern
- Westschweiz
```

### Schritt 3: Speichern

Klicke auf den grünen **"Speichern"** Button unten rechts im Formular.

✅ **Erfolg!** Die Organisation wurde erstellt und du wirst zur Detailansicht weitergeleitet.

## Organisation bearbeiten

### Organisation öffnen

1. Gehe zur **Organisationen-Liste**
2. Klicke auf den Namen der Organisation
3. In der Detailansicht klicke auf das **Bearbeiten-Icon** (Stift) oben rechts

### Änderungen vornehmen

- Alle Felder können bearbeitet werden
- Änderungen werden im **Änderungsprotokoll** aufgezeichnet
- Du siehst, wer wann was geändert hat

### Speichern

Klicke auf **"Speichern"** um die Änderungen zu übernehmen.

## Organisations-Detailansicht

Die Detailansicht zeigt alle wichtigen Informationen und Verknüpfungen:

### Kopfbereich

**Navigation und Aktionen**

Oben rechts findest du folgende Icons:

- ✏️ **Bearbeiten**: Organisation bearbeiten
- 🗑️ **Löschen**: Organisation löschen (Vorsicht!)
- ☁️ **Bexio**: Organisation in Bexio öffnen (nur wenn Bexio ID vorhanden)

### Übersicht

**Kontaktdaten-Block**

```
Firmenname
Strasse
PLZ Ort
📧 E-Mail
📞 Telefon
🌐 Website
```

**Auf Google Maps anzeigen**

- Klicke auf den Link unter der Adresse
- Öffnet die Geschäftsadresse in Google Maps
- Nützlich für Besuchsplanung und Routennavigation

**Social Media Profile**

Wenn LinkedIn, Xing oder Moneyhouse hinterlegt sind, werden die Icons angezeigt:

- 🔗 LinkedIn-Logo (klickbar)
- 🔗 Xing-Logo (klickbar)
- 🔗 Moneyhouse-Logo (klickbar)

**Weitere Informationen**

- **Beschreibung/Kommentar**: Markdown-formatierte Notizen und Details
- **Labels**: Alle zugewiesenen Labels mit Klick zur Label-Detailseite

### Tab: Beteiligungen

Zeigt alle Beteiligungen der Organisation:

**Was sind Beteiligungen?**

Beteiligungen verknüpfen die Organisation mit anderen ELIZA-Objekten:

- **Projekte**: An welchen Projekten ist die Organisation beteiligt?
- **Verträge**: Welche Verträge bestehen mit der Organisation?
- **Angebote**: Welche Angebote wurden erstellt?
- **Andere Module**: Alle weiteren Verknüpfungen

**Ansicht**

Tabelle mit folgenden Spalten:

| Beteiligung | Rolle |
|-------------|-------|
| Projekt: Website Relaunch | Kunde |
| Vertrag: Wartungsvertrag | Auftraggeber |
| Angebot: CRM-Einführung | Interessent |

**Rollen**

Oben in der Detailansicht siehst du alle **eindeutigen Rollen** der Organisation:

- Kunde
- Lieferant
- Partner

Diese werden automatisch aus allen Beteiligungen aggregiert.

💡 **Tipp**: Beteiligungen werden automatisch erstellt, wenn du die Organisation in anderen Modulen zuweist.

### Tab: Info

Zeigt Metadaten:

- **Erstellt am**: Wann wurde die Organisation erstellt?
- **Geändert am**: Letzte Änderung
- **Bexio ID**: Falls mit Bexio synchronisiert

## Verknüpfung: Kontakte und Organisationen

### Kontakte mit Organisationen verknüpfen

Es gibt zwei Möglichkeiten, Kontakte mit Organisationen zu verknüpfen:

#### Methode 1: Beim Kontakt erstellen

1. Öffne **"Kontakt erstellen"**
2. Im Feld **"Verlinkte Organisationseinheit"** wähle die Organisation aus
3. Speichere den Kontakt

✅ Der Kontakt ist nun mit der Organisation verknüpft.

#### Methode 2: Bestehenden Kontakt bearbeiten

1. Öffne den **Kontakt**
2. Klicke auf **"Bearbeiten"**
3. Wähle im Feld **"Verlinkte Organisationseinheit"** die Organisation
4. Speichere den Kontakt

### Kontakte einer Organisation anzeigen

Um alle Kontakte einer Organisation zu sehen:

1. Öffne die **Organisation**
2. Gehe zum Tab **"Beteiligungen"**
3. Du siehst alle verknüpften Kontakte mit ihren Rollen

Alternativ:

1. Gehe zur **Kontakte-Liste**
2. Nutze die Suche und gib den Organisationsnamen ein
3. Alle Kontakte dieser Organisation werden angezeigt

## Organisationen suchen und filtern

### Suchfunktion

Die Organisationen-Liste hat oben rechts ein **Suchfeld**:

- Suche nach **Firmenname**
- Suche nach **Ort**
- Suche nach **E-Mail**

Die Suche erfolgt in Echtzeit und filtert die Tabelle dynamisch.

### Filter

Nutze die **Filter-Optionen** über der Tabelle:

**Nach Labels filtern**

- Klicke auf das Filter-Symbol
- Wähle ein oder mehrere Labels
- Die Liste zeigt nur Organisationen mit diesen Labels

**Nach Ort filtern**

- Filtere nach Geschäftsort
- Nützlich für regionale Auswertungen
- Beispiel: Alle Kunden in Zürich

### Sortierung

Klicke auf die **Spaltenüberschriften** um zu sortieren:

- **Alphabetisch**: Nach Firmenname
- **Geografisch**: Nach Ort
- **Umgekehrte Sortierung**: Erneuter Klick kehrt die Sortierung um

## Organisationen kategorisieren mit Labels

### Typische Label-Strukturen

**Status-Labels**

- "Aktiv" - Aktive Geschäftsbeziehung
- "Inaktiv" - Ehemalige Geschäftsbeziehung
- "Lead" - Potenzielle Kunden
- "Prospect" - Qualifizierte Leads

**Typ-Labels**

- "Kunde" - Bestehende Kunden
- "Lieferant" - Zulieferer und Dienstleister
- "Partner" - Geschäftspartner
- "Wettbewerber" - Konkurrenz (für Marktbeobachtung)

**Grössen-Labels**

- "KMU" - Kleine und mittlere Unternehmen
- "Enterprise" - Grosskunden
- "Startup" - Jungunternehmen
- "Konzern" - Grosse Unternehmensgruppen

**Regional-Labels**

- "Zürich", "Bern", "Basel", "Westschweiz", "Tessin"
- "DACH" (Deutschland, Österreich, Schweiz)
- "International"

### Labels zuweisen

**Beim Erstellen**

- Wähle Labels im Organisations-Formular aus (Mehrfachauswahl)

**Beim Bearbeiten**

- Öffne die Organisation
- Klicke auf "Bearbeiten"
- Ändere die Label-Auswahl im Formular

### Neue Labels erstellen

1. Gehe zu **"Labels"** in der CRM-Navigation
2. Klicke auf **"+ Label hinzufügen"**
3. Gib einen **Titel** ein (z.B. "VIP-Kunde")
4. Klicke auf **"Speichern"**

Das neue Label steht nun in allen Organisations- und Kontakt-Formularen zur Verfügung.

## Organisation löschen

### Vorsicht beim Löschen

⚠️ **Warnung**: Das Löschen von Organisationen ist **permanent** und kann **nicht rückgängig** gemacht werden.

### Vor dem Löschen prüfen

Prüfe folgende Punkte:

- ❓ Gibt es **verknüpfte Kontakte**?
- ❓ Gibt es **Beteiligungen** an Projekten, Verträgen oder anderen Objekten?
- ❓ Ist die Organisation in **Dokumenten** referenziert?
- ❓ Gibt es **Verträge** mit dieser Organisation?
- ❓ Ist die Organisation mit **Bexio** synchronisiert?

💡 **Tipp**: Statt zu löschen, erwäge ein Label "Inaktiv" zuzuweisen.

### Organisation löschen

1. Öffne die **Organisations-Detailansicht**
2. Klicke auf das **Löschen-Icon** (Mülleimer) oben rechts
3. Bestätige die Sicherheitsabfrage
4. Die Organisation wird gelöscht

### Alternative: Inaktiv markieren

Statt zu löschen, markiere Organisationen als inaktiv:

1. Erstelle ein Label **"Inaktiv"**
2. Weise es inaktiven Organisationen zu
3. Filtere bei Bedarf nach aktiven Organisationen

**Vorteile**:

- ✅ Historische Daten bleiben erhalten
- ✅ Beteiligungen und Verträge bleiben sichtbar
- ✅ Kann reaktiviert werden
- ✅ Keine Datenverluste
- ✅ Änderungshistorie bleibt erhalten

## Best Practices

### ✅ Empfehlungen

**Vollständige Firmendaten erfassen**

- Name (offizieller Handelsregistername)
- Vollständige Geschäftsadresse
- Zentrale Telefonnummer und E-Mail
- Website und Social Media Profile

**Moneyhouse-Daten nutzen**

- Verlinke Schweizer Firmen mit Moneyhouse
- Nutze die UID für eindeutige Identifikation
- Ermöglicht Bonitätsprüfungen und Firmenanalysen

**Labels konsequent verwenden**

- Definiere ein Label-System (Status, Typ, Grösse, Region)
- Halte dich konsequent an die Struktur
- Beispiel: Jede Organisation hat mindestens ein Status- und ein Typ-Label

**Beschreibungsfeld nutzen**

- Notiere Geschäftsfeld und Branche
- Halte Besonderheiten fest (Zahlungskonditionen, Präferenzen)
- Nutze Markdown für Struktur

**Social Media Profile pflegen**

- LinkedIn für B2B-Unternehmen
- Xing für DACH-Region
- Hilft bei Research und Kontaktaufnahme

**Regelmässig aktualisieren**

- Unternehmensdaten ändern sich: Adresse, Telefon, Website
- Prüfe bei jedem Kontakt, ob die Daten noch aktuell sind
- Plane jährliche Daten-Reviews

**Kontakte verknüpfen**

- Verknüpfe Kontakte immer mit ihrer Organisation
- Nutze "Verlinkte Organisationseinheit" im Kontaktformular
- Ermöglicht bessere Auswertungen und Übersichten

### ❌ Häufige Fehler

**Duplikate erstellen**

- Problem: Mehrere Einträge für dieselbe Firma (z.B. "Beispiel AG" und "Beispiel")
- Lösung: Vor dem Anlegen nach existierenden Organisationen suchen

**Unvollständige Daten**

- Problem: Fehlende Adresse oder Kontaktdaten
- Lösung: Mindestens Name, Adresse und E-Mail oder Telefon erfassen

**Keine Labels zuweisen**

- Problem: Unkategorisierte Organisationen sind schwer zu filtern
- Lösung: Beim Erstellen direkt Labels zuweisen (mind. Status und Typ)

**Moneyhouse ignorieren**

- Problem: Wertvolle Firmendaten bleiben ungenutzt
- Lösung: Bei Schweizer Firmen immer Moneyhouse verlinken

**Beschreibungsfeld leer lassen**

- Problem: Wichtige Informationen gehen verloren
- Lösung: Notiere Geschäftsfeld, Besonderheiten, Zahlungskonditionen

**Inaktive Organisationen löschen**

- Problem: Historische Daten und Verträge gehen verloren
- Lösung: Label "Inaktiv" verwenden statt löschen

**Kontakte nicht verknüpfen**

- Problem: Kontakte sind nicht der Organisation zugeordnet
- Lösung: Nutze "Verlinkte Organisationseinheit" im Kontaktformular

## Häufige Fragen

### Wie finde ich doppelte Organisationen?

Aktuell gibt es keine automatische Duplikate-Erkennung. Nutze die Suchfunktion:

1. Suche nach **Firmenname**
2. Prüfe **Ort** und **Adresse**
3. Prüfe **Moneyhouse UID** (eindeutig)

💡 **Tipp**: Bei Duplikaten, verschiebe alle Verknüpfungen zur korrekten Organisation, dann lösche das Duplikat.

### Kann ich Organisationen importieren?

Massenimport ist aktuell nicht über die Benutzeroberfläche verfügbar. Wende dich für CSV-Importe an deinen Administrator.

### Wie kann ich alle Kontakte einer Organisation sehen?

**Methode 1: In der Organisation**

1. Öffne die **Organisation**
2. Tab **"Beteiligungen"** zeigt verknüpfte Kontakte

**Methode 2: In der Kontakte-Liste**

1. Gehe zur **Kontakte-Liste**
2. Suche nach dem Organisationsnamen
3. Alle Kontakte dieser Organisation werden angezeigt

### Was passiert mit Kontakten, wenn ich eine Organisation lösche?

Kontakte bleiben erhalten, aber die Verknüpfung geht verloren:

- Das Feld "Verlinkte Organisationseinheit" wird geleert
- Das Feld "Organisation" (Freitext) bleibt eventuell erhalten

⚠️ **Achtung**: Verknüpfungen können nicht wiederhergestellt werden!

### Wie kann ich Organisationen exportieren?

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

### Was ist der Unterschied zwischen Labels und Rollen?

- **Labels**: Kategorisierung von Kontakten und Organisationen (Status, Typ, Region)
- **Rollen**: Funktion in einem spezifischen Kontext (z.B. "Projektleiter" in Projekt XYZ)

Labels sind **statisch und allgemein**, Rollen sind **dynamisch und kontextspezifisch**.

### Kann ich eine Organisation in mehreren Kategorien haben?

Ja! Eine Organisation kann **mehrere Labels** haben:

- "Kunde" + "Partner" (wenn beides zutrifft)
- "Aktiv" + "Enterprise" + "Zürich" (kombinierte Kategorisierung)

Das ermöglicht flexible Filterung und Auswertungen.

## Integration mit anderen Modulen

Das CRM-Modul ist mit vielen anderen ELIZA-Modulen verbunden:

### Projekte

- Projektauftraggeber aus CRM-Organisationen
- Projektbeteiligte aus CRM-Kontakten
- Automatische Beteiligungen-Erstellung

### Verträge

- Vertragsparteien aus CRM-Organisationen
- Ansprechpersonen aus CRM-Kontakten
- Vertragsverwaltung mit CRM-Bezug

### Angebote (Quotes)

- Angebotsempfänger aus CRM-Organisationen
- Ansprechpersonen aus CRM-Kontakten
- Lead-Management

### Dokumente (DMS)

- Dokumente können mit Organisationen verknüpft werden
- Verträge, Angebote, Korrespondenz

### Bexio

- Synchronisation mit Bexio-Kontakten
- Bexio ID wird im CRM gespeichert
- Direkt-Link zu Bexio-Profil

💡 **Mehr Details zur Integration in Kapitel 5: Integration mit anderen Modulen**

## Nächste Schritte

Jetzt, wo du Organisationen verwalten kannst:

1. Verstehe **Beteiligungen und Rollen** (Kapitel 4)
2. Nutze **CRM-Integrationen** mit anderen Modulen (Kapitel 5)
3. Optimiere dein **Label-System** für bessere Kategorisierung
