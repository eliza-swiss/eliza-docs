---
title: "Stammdaten"
description: ""
weight: "3"
tags:
  - "stammdaten"
  - "anwendungen"
  - "datenkategorien"
  - "rechtsgrundlagen"
---


# Stammdaten

Die Stammdaten bilden das Fundament für deine Datenschutz-Dokumentation. In diesem Kapitel lernst du alle Stammdaten-Typen im Detail kennen.

## Übersicht der Stammdaten

| Stammdaten-Typ | Beschreibung |
|----------------|--------------|
| **Anwendungen** | IT-Systeme und Software |
| **Anwendungstypen** | Kategorien von Anwendungen |
| **Datenkategorien** | Arten personenbezogener Daten |
| **Datenfelder** | Konkrete Datenattribute |
| **Rechtsgrundlagen** | Rechtliche Basis für Verarbeitungen |
| **Empfänger** | Organisationen, die Daten erhalten |
| **Untervertragspartner** | Externe Auftragsverarbeiter |
| **TOMs** | Technische und Organisatorische Massnahmen |
| **Massnahmen** | Risikominderungs-Massnahmen |

## Anwendungen

### Was sind Anwendungen?

Anwendungen sind **IT-Systeme und Software**, die personenbezogene Daten verarbeiten. Beispiele:

- ERP-System (z.B. SAP, Microsoft Dynamics)
- CRM-System (z.B. Salesforce, HubSpot)
- E-Mail-System (z.B. Microsoft 365, Google Workspace)
- HR-Software
- Buchhaltungssoftware

### Eine Anwendung erstellen

1. Navigiere zum Datenschutzsystem → **Anwendungen**
2. Klicke auf **"+ Anwendung"**
3. Fülle die Felder aus:

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| **Titel** | Ja | Name der Anwendung |
| **Beschreibung** | Nein | Detaillierte Beschreibung |
| **Anwendungstyp** | Nein | Kategorie der Anwendung |
| **URL** | Nein | Link zur Anwendung |
| **Logo** | Nein | Logo der Anwendung (Bild) |
| **Untervertragspartner** | Nein | Anbieter der Anwendung |
| **Status** | Ja | In Betrieb / In Entwicklung / In Planung / Ausser Betrieb |
| **Archiviert** | Nein | Anwendung ist nicht mehr aktiv |
| **Genutzt in Prozessen** | Nein | Verknüpfung mit ELIZA-Prozessen |
| **Genutzt in Prozessschritten** | Nein | Verknüpfung mit Prozessschritten |
| **Interessierte Parteien** | Nein | Stakeholder der Anwendung |

4. Klicke auf **"Speichern"**

### Status-Werte für Anwendungen

| Status | Bedeutung |
|--------|-----------|
| **In Betrieb** | Anwendung wird aktiv genutzt |
| **In Entwicklung** | Anwendung wird gerade entwickelt |
| **In Planung** | Anwendung ist geplant |
| **Ausser Betrieb** | Anwendung wurde abgeschaltet |

## Anwendungstypen

### Was sind Anwendungstypen?

Anwendungstypen kategorisieren deine Anwendungen. Beispiele:

- Cloud-Dienst
- On-Premise-Software
- Mobile App
- Webapplikation
- Datenbank

### Einen Anwendungstyp erstellen

1. Navigiere zum Datenschutzsystem → **Anwendungsarten**
2. Klicke auf **"+ Anwendungstyp"**
3. Fülle die Felder aus:
   - **Titel**: Name des Typs
   - **Beschreibung**: Erläuterung
   - **Untervertragspartner**: Optional - falls ein Anbieter zugeordnet werden soll

## Datenkategorien

### Was sind Datenkategorien?

Datenkategorien beschreiben die **Arten personenbezogener Daten**, die verarbeitet werden. Beispiele:

- Stammdaten (Name, Adresse, Geburtsdatum)
- Kontaktdaten (E-Mail, Telefon)
- Finanzdaten (Kontonummer, Kreditkartendaten)
- Gesundheitsdaten
- Beschäftigungsdaten
- Nutzungsdaten

> **Wichtig:** Besondere Kategorien personenbezogener Daten (Art. 9 DSGVO) erfordern erhöhten Schutz: Gesundheitsdaten, religiöse Überzeugungen, ethnische Herkunft, biometrische Daten etc.

### Eine Datenkategorie erstellen

1. Navigiere zum Datenschutzsystem → **Datenkategorien**
2. Klicke auf **"+ Datenkategorie"**
3. Fülle die Felder aus:
   - **Titel**: Name der Kategorie
   - **Beschreibung**: Was umfasst diese Kategorie?
   - **Anwendungen**: In welchen Systemen werden diese Daten verarbeitet?

## Datenfelder

### Was sind Datenfelder?

Datenfelder sind die **konkreten Attribute** innerhalb einer Datenkategorie. Beispiele:

Für die Kategorie "Stammdaten":
- Vorname
- Nachname
- Geburtsdatum
- Geschlecht

Für die Kategorie "Kontaktdaten":
- E-Mail-Adresse
- Telefonnummer (privat)
- Telefonnummer (geschäftlich)
- Postadresse

### Ein Datenfeld erstellen

1. Navigiere zum Datenschutzsystem → **Datenfelder**
2. Klicke auf **"+ Datenfeld"**
3. Fülle die Felder aus:
   - **Nummer**: Optionale Nummerierung
   - **Titel**: Name des Datenfelds
   - **Beschreibung**: Erläuterung des Felds
   - **Kategorien**: Zuordnung zu Datenkategorien
   - **Anwendungen**: In welchen Systemen existiert dieses Feld?

## Rechtsgrundlagen

### Was sind Rechtsgrundlagen?

Jede Datenverarbeitung benötigt eine **rechtliche Grundlage**. Die wichtigsten nach DSGVO:

| Rechtsgrundlage | Art. DSGVO | Beispiel |
|-----------------|------------|----------|
| **Einwilligung** | Art. 6 Abs. 1 lit. a | Newsletter-Anmeldung |
| **Vertragserfüllung** | Art. 6 Abs. 1 lit. b | Bestellabwicklung |
| **Rechtliche Verpflichtung** | Art. 6 Abs. 1 lit. c | Steuerliche Aufbewahrung |
| **Lebenswichtige Interessen** | Art. 6 Abs. 1 lit. d | Notfallkontakt |
| **Öffentliches Interesse** | Art. 6 Abs. 1 lit. e | Behördliche Aufgaben |
| **Berechtigtes Interesse** | Art. 6 Abs. 1 lit. f | Direktmarketing |

### Eine Rechtsgrundlage erstellen

1. Navigiere zum Datenschutzsystem → **Rechtsgrundlagen**
2. Klicke auf **"+ Rechtsgrundlage"**
3. Fülle die Felder aus:
   - **Name**: Bezeichnung der Rechtsgrundlage
   - **Beschreibung**: Erläuterung und Anwendungsbereich

## Empfänger

### Was sind Empfänger?

Empfänger sind **Organisationen oder Personen**, an die personenbezogene Daten übermittelt werden. Beispiele:

- Behörden (Finanzamt, Sozialversicherung)
- Geschäftspartner
- Konzernunternehmen
- Kunden

### Einen Empfänger erstellen

1. Navigiere zum Datenschutzsystem → **Empfänger**
2. Klicke auf **"+ Empfänger"**
3. Fülle die Felder aus:

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| **Name** | Ja | Bezeichnung des Empfängers |
| **Beschreibung** | Nein | Erläuterung |
| **Adresse** | Nein | Postadresse |
| **Land** | Nein | Sitzland (wichtig für Drittlandtransfers!) |
| **E-Mail** | Nein | Kontakt-E-Mail |
| **Telefonnummer** | Nein | Kontakttelefon |
| **URL** | Nein | Webseite |
| **Organisationseinheit** | Nein | Verknüpfung mit ELIZA-Orgunit |
| **Interessierte Partei** | Nein | Verknüpfung mit Stakeholder |

> **Wichtig:** Bei Empfängern in Drittländern (ausserhalb EU/EWR/CH) muss ein angemessenes Datenschutzniveau sichergestellt werden!

## Untervertragspartner

### Was sind Untervertragspartner?

Untervertragspartner (auch: Auftragsverarbeiter) sind **externe Dienstleister**, die in deinem Auftrag personenbezogene Daten verarbeiten. Beispiele:

- Cloud-Anbieter (AWS, Microsoft Azure, Google Cloud)
- Hosting-Provider
- E-Mail-Marketing-Dienste
- IT-Dienstleister
- Lohnbüros

> **Wichtig:** Mit jedem Auftragsverarbeiter muss ein **Auftragsverarbeitungsvertrag (AVV)** geschlossen werden!

### Einen Untervertragspartner erstellen

1. Navigiere zum Datenschutzsystem → **Untervertragspartner**
2. Klicke auf **"+ Untervertragspartner"**
3. Fülle die Felder aus:

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| **Name** | Ja | Firmenname |
| **Adresse** | Nein | Postadresse |
| **Land** | Nein | Sitzland (wichtig für Drittlandtransfers!) |
| **Ansprechpartner** | Nein | Kontaktperson |
| **E-Mail** | Nein | Kontakt-E-Mail |
| **Telefonnummer** | Nein | Kontakttelefon |
| **URL** | Nein | Webseite |

## Technische und Organisatorische Massnahmen (TOMs)

### Was sind TOMs?

TOMs sind **Schutzmassnahmen** zur Sicherstellung der Datensicherheit. Sie sind unterteilt in:

**Technische Massnahmen:**
- Verschlüsselung
- Zugriffskontrollen
- Firewalls
- Backup-Systeme
- Pseudonymisierung

**Organisatorische Massnahmen:**
- Schulungen
- Arbeitsanweisungen
- Zutrittsbeschränkungen
- Vertraulichkeitsverpflichtungen
- Dokumentation

### Einen TOM erstellen

1. Navigiere zum Datenschutzsystem → **TOMs**
2. Klicke auf **"+ TOM"**
3. Fülle die Felder aus:
   - **Name**: Bezeichnung der Massnahme
   - **Beschreibung**: Detaillierte Beschreibung der Massnahme

### Beispiele für TOMs

| Kategorie | Beispiele |
|-----------|-----------|
| **Zutrittskontrolle** | Schliessanlage, Besucherregistrierung, Videoüberwachung |
| **Zugangskontrolle** | Passwortrichtlinie, 2-Faktor-Authentifizierung, Benutzersperrung |
| **Zugriffskontrolle** | Berechtigungskonzept, Need-to-Know-Prinzip, Protokollierung |
| **Weitergabekontrolle** | Verschlüsselung, VPN, sichere E-Mail |
| **Eingabekontrolle** | Protokollierung, Änderungshistorie |
| **Auftragskontrolle** | AVV, Lieferantenprüfung |
| **Verfügbarkeitskontrolle** | Backup, USV, Disaster Recovery |
| **Trennungskontrolle** | Mandantenfähigkeit, Berechtigungen |

## Massnahmen zur Risikominderung

### Was sind Risikominderungs-Massnahmen?

Zusätzlich zu den TOMs können spezifische **Massnahmen zur Risikominderung** dokumentiert werden. Diese sind oft das Ergebnis einer Datenschutz-Folgenabschätzung (DSFA).

### Eine Massnahme erstellen

1. Navigiere zum Datenschutzsystem → **Massnahmen**
2. Klicke auf **"+ Massnahme"**
3. Fülle die Felder aus:
   - **Titel**: Bezeichnung der Massnahme
   - **Beschreibung**: Was genau wird umgesetzt?

## Best Practices für Stammdaten

### Empfehlungen

- **Vollständigkeit**: Erfasse alle relevanten Anwendungen und Dienstleister
- **Konsistenz**: Verwende einheitliche Bezeichnungen
- **Aktualität**: Aktualisiere bei neuen Systemen oder Dienstleisterwechseln
- **Verknüpfungen**: Nutze die Verknüpfungsmöglichkeiten konsequent

### Häufige Fehler

- **Fehlende Untervertragspartner**: Cloud-Dienste werden oft vergessen
- **Unvollständige Länderangaben**: Wichtig für Drittlandtransfers
- **Veraltete Einträge**: Abgeschaltete Systeme nicht aktualisiert
- **Fehlende TOMs**: Schutzmassnahmen nicht dokumentiert

## Nächste Schritte

Im nächsten Kapitel lernst du alles über **Datenschutz-Folgenabschätzungen (DSFA)** für risikoreiche Verarbeitungen.
