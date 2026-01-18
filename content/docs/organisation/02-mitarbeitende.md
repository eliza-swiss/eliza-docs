---
title: "Mitarbeitende verwalten"
description: ""
weight: "2"
tags:
  - "mitarbeitende"
  - "hr"
  - "personal"
  - "anstellung"
  - "weiterbildung"
---


# Mitarbeitende verwalten

In diesem Kapitel lernst du, wie du Mitarbeitende in ELIZA erfasst, bearbeitest und verwaltest. Die Mitarbeiterverwaltung ist das Herzstück des Organisation-Moduls.

## Übersicht der Mitarbeitenden-Liste

### Zur Liste navigieren

1. Klicke auf **Organisation** in der Hauptnavigation
2. Wähle **Mitarbeitende** aus dem Menü
3. Die Liste aller Mitarbeitenden wird angezeigt

### Spalten in der Liste

Die Mitarbeitenden-Liste zeigt folgende Informationen:

| Spalte | Beschreibung |
|--------|--------------|
| **Name** | Vor- und Nachname des Mitarbeitenden |
| **Funktion** | Hauptfunktion (aus Stammdaten) |
| **Eintrittsdatum** | Beginn des Arbeitsverhältnisses |
| **Anstellungsgrad** | Beschäftigungsgrad in Prozent |
| **Organisation** | Aktuelle Organisationseinheit(en) |

### Filtern und Suchen

**Textsuche:**
- Nutze das Suchfeld oben rechts
- Suche nach Vor- oder Nachname
- Die Ergebnisse werden live gefiltert

**Nach Organisationseinheit filtern:**
- Verwende den Filter "Organisationseinheit" in der Seitenleiste
- Wähle eine Abteilung oder ein Team
- Nur Mitarbeitende dieser Einheit werden angezeigt

## Neue Mitarbeitende erfassen

### Schritt-für-Schritt Anleitung

**Schritt 1: Formular öffnen**

1. Navigiere zu **Organisation** → **Mitarbeitende**
2. Klicke auf den Button **"Hinzufügen"** (grüner Button)
3. Das Erfassungsformular öffnet sich

**Schritt 2: Grunddaten eingeben**

Fülle die folgenden Pflichtfelder aus:

| Feld | Beschreibung | Pflicht |
|------|--------------|---------|
| **Anrede** | Herr, Frau oder Divers | Nein |
| **Vorname** | Vorname des Mitarbeitenden | Ja |
| **Nachname** | Nachname des Mitarbeitenden | Ja |
| **Anstellungsart** | Intern, Extern oder Ehemalig | Ja |

**Schritt 3: Weitere Daten ergänzen**

Ergänze nach Bedarf:

- **Mittelname**: Optionaler zweiter Vorname
- **Kurzzeichen**: Kürzel für den Mitarbeitenden
- **Eintrittsdatum**: Datum des Arbeitsbeginns
- **Anstellungsgrad**: Beschäftigungsgrad in Prozent
- **Hauptfunktion**: Bezeichnung der Haupttätigkeit
- **Akademischer Titel**: z.B. Dr., Prof.
- **Vorgesetzter**: Direkter Vorgesetzter aus der Mitarbeiterliste

**Schritt 4: Speichern**

1. Überprüfe die eingegebenen Daten
2. Klicke auf **"Speichern"**
3. Der neue Mitarbeitende wird angelegt

> **💡 Tipp:** Nach dem Speichern wirst du zur Detail-Ansicht weitergeleitet, wo du weitere Daten ergänzen kannst.

## Mitarbeitende bearbeiten

### Detail-Ansicht öffnen

1. Klicke in der Liste auf den Namen des Mitarbeitenden
2. Die Detail-Ansicht öffnet sich mit allen Informationen

### Tab-Bereiche im Detail

Die Detail-Ansicht ist in verschiedene Bereiche unterteilt:

#### Übersicht

Der Übersicht-Tab zeigt:

- **Stammdaten**: Name, Anrede, Kurzzeichen
- **Kontaktdaten geschäftlich**: E-Mail, Telefon, Mobil
- **Anstellungsinformationen**: Eintrittsdatum, Funktion, Vorgesetzter
- **Aktuelle Mitgliedschaften**: Organisationseinheiten-Zugehörigkeit

#### Private Daten

> **⚠️ Wichtig:** Dieser Bereich ist nur mit der Berechtigung `organisation.view_private_data` sichtbar.

Der Private-Daten-Tab enthält:

- **Private Adresse**: Strasse, PLZ, Ort
- **Private Kontaktdaten**: E-Mail, Telefon
- **Persönliche Daten**: Geburtsdatum, Zivilstand, Nationalität
- **AHV-Nummer**: Sozialversicherungsnummer
- **Bankverbindung**: Bankdaten für Gehaltszahlung
- **Notfallkontakt**: Kontaktperson für Notfälle

#### Führung

Der Führungs-Tab zeigt (falls aktiviert):

- **Vorgesetzter**: Wer ist der direkte Vorgesetzte
- **Team**: Welche Mitarbeitende berichten an diese Person
- **Ist Vorgesetzter**: Ob die Person Führungsverantwortung hat

### Daten bearbeiten

**So bearbeitest du einen Mitarbeitenden:**

1. Öffne die Detail-Ansicht
2. Klicke auf **"Bearbeiten"** (Stift-Icon)
3. Das Bearbeitungsformular öffnet sich
4. Ändere die gewünschten Felder
5. Klicke auf **"Speichern"**

> **💡 Tipp:** Du kannst auch direkt auf einzelne Felder klicken, um sie zu bearbeiten (abhängig von der Konfiguration).

## Anstellungsarten verstehen

### Interne Mitarbeitende (Typ: intern)

- Regulär angestellte Mitarbeitende
- Erscheinen standardmässig in allen Listen
- Haben vollen Zugang zu Personalfunktionen
- Werden in Statistiken berücksichtigt

### Externe Mitarbeitende (Typ: extern)

- Externe Kräfte, Berater, Freelancer
- Erscheinen in der Liste "Externe Mitarbeitende"
- Werden in der Standard-Liste angezeigt
- Name wird mit "(extern)" gekennzeichnet

### Ehemalige Mitarbeitende (Typ: ehemalig)

- Ausgetretene Mitarbeitende (Alumni)
- Werden in der Standard-Liste **nicht** angezeigt
- Zugriff über spezielle "Alumni"-Liste
- Name wird mit "(ehemalig)" gekennzeichnet
- Historische Daten bleiben erhalten

**Mitarbeitende zu Ehemaligen machen:**

1. Öffne die Detail-Ansicht des Mitarbeitenden
2. Klicke auf **"Bearbeiten"**
3. Setze das **Austrittsdatum**
4. Ändere die **Anstellungsart** auf "ehemalig"
5. Speichere die Änderungen

> **⚠️ Wichtig:** Beende auch alle aktiven Mitgliedschaften, wenn ein Mitarbeitender austritt.

## Geschäftliche Daten

### Kontaktinformationen

| Feld | Beschreibung |
|------|--------------|
| **Raumnummer** | Büroraum-Nummer |
| **Strasse (Geschäftlich)** | Geschäftsadresse |
| **PLZ (Geschäftlich)** | Postleitzahl |
| **Ort (Geschäftlich)** | Stadt/Gemeinde |
| **E-Mail (Geschäftlich)** | Geschäftliche E-Mail-Adresse |
| **Telefon (Geschäftlich)** | Festnetznummer Büro |
| **Telefon Mobil** | Geschäftliche Mobilnummer |

### Soziale Profile

| Feld | Beschreibung |
|------|--------------|
| **LinkedIn (URL)** | Link zum LinkedIn-Profil |
| **Xing (URL)** | Link zum Xing-Profil |
| **Moneyhouse (URL)** | Link zum Moneyhouse-Eintrag |

### Benutzer-Verknüpfung

Das Feld **"Zugeordneter Benutzer"** verbindet den Mitarbeitenden mit einem ELIZA-Benutzerkonto:

- Ermöglicht dem Mitarbeitenden den Login
- Verknüpft Zeiterfassung und andere Module
- Wichtig für Berechtigungszuordnungen

> **💡 Tipp:** Ohne Benutzer-Verknüpfung kann der Mitarbeitende sich nicht bei ELIZA anmelden.

## Private Daten verwalten

> **⚠️ Datenschutz:** Private Daten sind besonders geschützt. Nur Berechtigte können sie einsehen und bearbeiten.

### Persönliche Daten

| Feld | Beschreibung |
|------|--------------|
| **Geburtsdatum** | Für Alter-Berechnung und Geburtstagsliste |
| **Zivilstand** | Ledig, Verheiratet, Geschieden, etc. |
| **Nationalität** | Eine oder mehrere Nationalitäten |
| **Heimatort** | Bürgerort (CH-spezifisch) |
| **Familienzulagen** | Bezug von Kinderzulagen |

### Private Kontaktdaten

| Feld | Beschreibung |
|------|--------------|
| **Strasse (Privat)** | Wohnadresse |
| **PLZ (Privat)** | Postleitzahl |
| **Ort (Privat)** | Wohnort |
| **E-Mail (Privat)** | Private E-Mail-Adresse |
| **Telefon (Privat)** | Private Festnetznummer |
| **Telefon Mobil Privat** | Private Mobilnummer |

### Vertrauliche Daten

| Feld | Beschreibung |
|------|--------------|
| **AHV-Nummer** | Sozialversicherungsnummer |
| **Bankverbindung** | IBAN und Bankdaten |
| **Notfallkontakt** | Kontaktperson für Notfälle |
| **Personaldossier (URL)** | Link zu externem Dossier |
| **Notizen** | Interne Anmerkungen |

## Anstellungsverhältnisse

Anstellungsverhältnisse (Employments/Salary) definieren detaillierte Arbeitszeitmodelle:

### Ein Anstellungsverhältnis erstellen

1. Öffne die Detail-Ansicht des Mitarbeitenden
2. Navigiere zum Tab **"Anstellung"**
3. Klicke auf **"Hinzufügen"**
4. Fülle die Details aus:

| Feld | Beschreibung |
|------|--------------|
| **Von** | Startdatum des Verhältnisses |
| **Bis** | Enddatum (leer = unbefristet) |
| **Anstellungsgrad** | Beschäftigungsgrad in % |
| **Wochenstunden** | Sollstunden pro Woche |
| **Ferienanspruch** | Ferientage pro Jahr |

### Arbeitszeitmodelle

ELIZA unterstützt verschiedene Arbeitszeitmodelle:

**Standardmodell:**
- Fixer Anstellungsgrad für alle Wochentage
- Stunden werden automatisch berechnet

**Tagesspezifisches Modell:**
- Unterschiedliche Stunden pro Wochentag
- Ideal für Teilzeit mit fixen Arbeitstagen

**Vertrauensarbeitszeit:**
- Keine Stundenerfassung erforderlich
- Flexibles Arbeitszeitmodell

## HR-Dokumente (Personaldossiers)

> **⚠️ Hinweis:** Dieses Modul muss aktiviert sein (`ORGANISATION_USE_HRFILES`).

### Dokumente hochladen

1. Öffne die Detail-Ansicht des Mitarbeitenden
2. Navigiere zum Tab **"HR-Dateien"**
3. Klicke auf **"Hinzufügen"** oder **"Dateien hochladen"**
4. Wähle die Datei(en) aus
5. Ergänze optional:
   - **Titel**: Bezeichnung des Dokuments
   - **HR Dokumentart**: Kategorie (z.B. Vertrag, Zeugnis)
   - **Dokumentdatum**: Datum des Dokuments
6. Klicke auf **"Hochladen"**

### Dokumentarten verwalten

HR-Dokumentarten helfen bei der Kategorisierung:

- **Arbeitsvertrag**
- **Arbeitszeugnis**
- **Zertifikate**
- **Lohnausweise**
- etc.

Administratoren können neue Dokumentarten unter **Einstellungen** erstellen.

### Dokumente einsehen

- Klicke auf den Dokumenttitel, um es zu öffnen
- Die Vorschau zeigt das Dokument an
- Download ist möglich über den Download-Button

## Weiterbildungen dokumentieren

> **⚠️ Hinweis:** Dieses Modul muss aktiviert sein (`ORGANISATION_USE_PROFESSIONAL_DEVELOPMENT`).

### Eine Weiterbildung erfassen

1. Öffne die Detail-Ansicht des Mitarbeitenden
2. Navigiere zum Tab **"Weiterbildungen"**
3. Klicke auf **"Hinzufügen"**
4. Fülle das Formular aus:

| Feld | Beschreibung |
|------|--------------|
| **Titel** | Name der Weiterbildung |
| **Beschreibung** | Details zur Weiterbildung |
| **Von / Bis** | Zeitraum der Weiterbildung |
| **Gültig bis** | Ablaufdatum von Zertifikaten |
| **Status** | geplant, in Arbeit, abgeschlossen, etc. |
| **Skill** | Verknüpfter Skill (optional) |
| **Anzahl Arbeitstage** | Dauer in Arbeitstagen |
| **Kosten** | Kosten der Weiterbildung |
| **Zuständige Person** | Verantwortlicher für die Weiterbildung |
| **Wirkung/Ergebnis** | Was wurde erreicht |

### Weiterbildungs-Status

| Status | Beschreibung |
|--------|--------------|
| **geplant** | Weiterbildung ist vorgesehen |
| **in Prüfung** | Genehmigung ausstehend |
| **in Arbeit** | Weiterbildung läuft |
| **abgeschlossen** | Erfolgreich beendet |
| **verschoben** | Auf später verlegt |
| **abgelaufen** | Zertifikat nicht mehr gültig |
| **abgebrochen** | Weiterbildung wurde abgebrochen |

### Dokumente an Weiterbildungen anhängen

- Weiterbildungen können HR-Dokumente verknüpft haben
- Lade Zertifikate und Nachweise direkt hoch
- Diese erscheinen auch im Personaldossier

## Memos erstellen

> **⚠️ Hinweis:** Dieses Modul muss aktiviert sein (`ORGANISATION_USE_MEMOS`).

Memos sind interne Notizen zu Mitarbeitenden:

### Ein Memo erstellen

1. Öffne die Detail-Ansicht des Mitarbeitenden
2. Navigiere zum Tab **"Memos"**
3. Klicke auf **"Hinzufügen"**
4. Gib einen Titel und Inhalt ein
5. Speichere das Memo

### Memo-Dokumente

- An Memos können Dokumente angehängt werden
- Ideal für Gesprächsnotizen mit Anhängen
- Dokumente sind nur dem Ersteller zugänglich

## Excel-Export

### Mitarbeiterdaten exportieren

1. Navigiere zu **Organisation** → **Dashboard**
2. Klicke auf **"Excel Export (xlsx)"**
3. Die Excel-Datei wird heruntergeladen

**Enthaltene Daten:**
- Alle Stammdaten der Mitarbeitenden
- Anstellungsinformationen
- Kontaktdaten
- Organisationszugehörigkeiten

> **⚠️ Wichtig:** Der Export enthält sensible Daten. Behandle die Datei vertraulich.

## Best Practices

### ✅ Empfehlungen

1. **Vollständige Daten**: Erfasse alle relevanten Daten beim Anlegen
2. **Eintrittsdatum setzen**: Wichtig für Dienstalter-Berechnungen
3. **Benutzer verknüpfen**: Ermöglicht Login und Modulnutzung
4. **Mitgliedschaften pflegen**: Halte Organisationszugehörigkeiten aktuell
5. **Austritte dokumentieren**: Setze Austrittsdatum und ändere Anstellungsart

### ❌ Häufige Fehler

1. **Duplikate vermeiden**: Prüfe vor dem Anlegen, ob die Person existiert
2. **Ehemalige nicht löschen**: Ändere die Anstellungsart statt zu löschen
3. **Mitgliedschaften vergessen**: Beende Mitgliedschaften bei Wechseln
4. **Sensible Daten schützen**: Exportierte Daten vertraulich behandeln

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- Wie du die Mitarbeitenden-Liste nutzt
- Wie du neue Mitarbeitende erfasst
- Wie du Mitarbeitende bearbeitest
- Die verschiedenen Anstellungsarten
- Wie du HR-Dokumente verwaltest
- Wie du Weiterbildungen dokumentierst
- Wie du Daten exportierst

## Nächste Schritte

- [Kapitel 3: Organisationseinheiten und Organigramm]({{< ref "03-organigramm" >}}) – Lerne die Aufbauorganisation kennen
- [Kapitel 4: Funktionen und Skills]({{< ref "04-funktionen-skills" >}}) – Definiere Rollen und Kompetenzen
