---
title: "Beteiligungen und Rollen"
description: ""
weight: "4"
tags:
  - "participations"
  - "roles"
  - "relationships"
  - "crm"
---


# Beteiligungen und Rollen

In diesem Kapitel lernst du, wie du Beteiligungen und Rollen im ELIZA CRM nutzt, um Beziehungen zwischen Kontakten, Organisationen und anderen ELIZA-Objekten abzubilden.

## Was sind Beteiligungen?

Beteiligungen (Participations) sind **Verknüpfungen** zwischen CRM-Objekten (Kontakte, Organisationen) und anderen ELIZA-Objekten wie:

- **Projekten**: Wer ist am Projekt beteiligt?
- **Verträgen**: Welche Vertragsparteien gibt es?
- **Angeboten**: Wer ist der Ansprechpartner?
- **Prozessen**: Wer ist verantwortlich?
- **Issues**: Wer ist zuständig?

Jede Beteiligung hat eine **Rolle**, die die Funktion der Person/Organisation beschreibt.

### Beispiel einer Beteiligung

```text
Kontakt: Max Muster (CRM)
    
Rolle: Projektleiter
    
Objekt: Projekt "Website Relaunch" (Projekte-Modul)
```

Das bedeutet: Max Muster ist Projektleiter im Projekt "Website Relaunch".

## Was sind Rollen?

Rollen definieren **Funktionen und Zuständigkeiten** in einem spezifischen Kontext.

### Typische Rollen

**Projekt-Rollen:**

- Projektleiter
- Projektmitglied
- Auftraggeber
- Stakeholder
- Sponsor

**Vertrags-Rollen:**

- Vertragspartei
- Ansprechperson
- Entscheidungsträger
- Unterschriftsberechtigt

**Angebots-Rollen:**

- Empfänger
- Entscheidungsträger
- Einkäufer
- Beeinflusser

**Prozess-Rollen:**

- Prozessverantwortlicher
- Prozessbeteiligter
- Freigeber
- Prüfer

### Unterschied: Labels vs. Rollen

| Aspekt | Labels | Rollen |
|--------|--------|--------|
| **Kontext** | Allgemein, statisch | Spezifisch, dynamisch |
| **Verwendung** | Kategorisierung | Funktion in Beteiligung |
| **Beispiel** | "Kunde", "Lieferant" | "Projektleiter in Projekt X" |
| **Änderung** | Selten | Häufig (pro Objekt) |

## Beteiligungen ansehen

### Beteiligungen eines Kontakts

1. Öffne einen **Kontakt** in der Detailansicht
2. Klicke auf den Tab **"Beteiligungen"**
3. Du siehst eine Tabelle mit allen Beteiligungen

**Anzeige:**

| Beteiligung | Rolle |
|-------------|-------|
| Projekt: Website Relaunch | Projektleiter |
| Vertrag: Rahmenvertrag IT | Ansprechperson |
| Angebot: CRM-Einführung | Entscheidungsträger |

### Beteiligungen einer Organisation

1. Öffne eine **Organisation** in der Detailansicht
2. Klicke auf den Tab **"Beteiligungen"**
3. Du siehst alle Beteiligungen der Organisation

**Anzeige:**

| Beteiligung | Rolle |
|-------------|-------|
| Projekt: Digitalisierung | Auftraggeber |
| Vertrag: Wartungsvertrag | Vertragspartei |
| Angebot: Cloud-Migration | Kunde |

### Aggregierte Rollen

Oben in der Detailansicht einer Organisation siehst du **alle eindeutigen Rollen** aggregiert:

```text
Rollen: Kunde, Auftraggeber, Vertragspartei
```

Diese werden automatisch aus allen Beteiligungen der Organisation extrahiert und alphabetisch sortiert.

=¡ **Tipp**: So erkennst du auf einen Blick, in welchen Funktionen eine Organisation im Gesamtsystem auftritt.

## Beteiligungen erstellen

Beteiligungen werden **automatisch** erstellt, wenn du Kontakte oder Organisationen in anderen Modulen zuweist.

### Automatische Erstellung (empfohlen)

**Beispiel: Projekt erstellen**

1. Erstelle ein **neues Projekt**
2. Im Formular gibt es ein Feld **"Projektleiter"**
3. Wähle einen **Kontakt aus dem CRM**
4. Wähle eine **Rolle** (z.B. "Projektleiter")
5. Speichere das Projekt

 Die Beteiligung wird automatisch erstellt:
- Kontakt: Der ausgewählte Kontakt
- Rolle: Projektleiter
- Objekt: Das Projekt

**Vorteil**: Beteiligungen werden direkt im Kontext des Objekts erstellt, keine separaten Schritte nötig.

### Manuelle Erstellung

Du kannst Beteiligungen auch **manuell** zu bestehenden Objekten hinzufügen.

**Schritte:**

1. Öffne das **Objekt** (z.B. Projekt, Vertrag, Angebot)
2. Scrolle zum Bereich **"Beteiligungen"**
3. Klicke auf **"Neue Beteiligung hinzufügen"**
4. Es öffnet sich ein Formular

### Beteiligungs-Formular

Das Formular bietet flexible Optionen:

#### Option 1: Bestehende Organisation auswählen

**Feld: "Bestehende Organisation auswählen"**

- Wähle eine Organisation aus der Dropdown-Liste
- Alle Organisationen aus dem CRM stehen zur Verfügung

#### Option 2: Neue Organisation erfassen

Falls die Organisation noch nicht im CRM existiert:

**Felder:**

- **Organisation**: Firmenname
- **Strasse**: Geschäftsadresse
- **PLZ**: Postleitzahl
- **Ort**: Geschäftsort
- **E-Mail**: Kontakt-E-Mail

 Die Organisation wird automatisch im CRM erstellt und verknüpft.

#### Option 3: Bestehenden Kontakt auswählen

**Feld: "Bestehenden Kontakt auswählen"**

- Wähle einen Kontakt aus der Dropdown-Liste
- Alle Kontakte aus dem CRM stehen zur Verfügung

#### Option 4: Neuen Kontakt erfassen

Falls der Kontakt noch nicht im CRM existiert:

**Felder:**

- **Organisation**: Firma des Kontakts (Freitext)
- **Vorname**: Vorname der Person
- **Nachname**: Nachname der Person
- **E-Mail**: E-Mail-Adresse
- **Telefon**: Telefonnummer

 Der Kontakt wird automatisch im CRM erstellt und verknüpft.

#### Rolle auswählen oder erstellen

**Option A: Bestehende Rolle auswählen**

- Wähle eine Rolle aus der Dropdown-Liste
- Alle definierten Rollen stehen zur Verfügung

**Option B: Neue Rolle erfassen**

- Gib einen Titel für die neue Rolle ein
- z.B. "Technischer Berater", "Qualitätssicherung"

 Die Rolle wird automatisch erstellt und ist ab sofort für alle Beteiligungen verfügbar.

### Formular-Validierung

Das System prüft deine Eingaben:

| Fehlermeldung | Bedeutung | Lösung |
|---------------|-----------|--------|
| **"Kontakt doppelt"** | Bestehender UND neuer Kontakt ausgewählt | Nur eine Option wählen |
| **"Zuwenig Angaben"** | Neuer Kontakt hat zu wenig Daten | Mindestens Vor-/Nachname oder Organisation |
| **"Kein Kontakt definiert"** | Weder bestehend noch neu | Kontakt oder Organisation wählen |
| **"Rolle doppelt definiert"** | Bestehende UND neue Rolle ausgewählt | Nur eine Option wählen |
| **"Keine Rolle definiert"** | Weder bestehend noch neu | Rolle auswählen oder erstellen |
| **"Rolle existiert bereits"** | Neue Rolle mit diesem Namen existiert | Bestehende Rolle verwenden |

## Rollen verwalten

### Rollen-Liste ansehen

1. Klicke in der CRM-Navigation auf **"Rollen"**
2. Du siehst die **Rollen-Übersicht**

Die Liste zeigt:

- **Titel**: Name der Rolle
- **Anzahl**: Wie viele Beteiligungen nutzen diese Rolle

### Neue Rolle erstellen

**Methode 1: In der Rollen-Liste**

1. Gehe zu **"Rollen"** in der CRM-Navigation
2. Klicke auf **"+ Rolle hinzufügen"**
3. Gib einen **Titel** ein (z.B. "Technischer Ansprechpartner")
4. Klicke auf **"Speichern"**

**Methode 2: Beim Erstellen einer Beteiligung**

- Im Beteiligungs-Formular unter **"oder neue Rolle erfassen"**
- Gib den Titel ein
- Die Rolle wird automatisch erstellt

### Rolle bearbeiten

1. Gehe zur **Rollen-Liste**
2. Klicke auf eine **Rolle**
3. Du siehst die **Detailansicht** mit allen Beteiligungen, die diese Rolle nutzen
4. Klicke auf **"Bearbeiten"** (Stift-Icon)
5. Ändere den **Titel**
6. Speichere die Änderungen

  **Achtung**: Die Änderung wirkt sich auf **alle Beteiligungen** mit dieser Rolle aus.

### Rolle löschen

1. Gehe zur **Rollen-Liste**
2. Klicke auf eine **Rolle**
3. Klicke auf **"Löschen"** (Mülleimer-Icon)
4. Bestätige die Sicherheitsabfrage

  **Warnung**: Alle Beteiligungen mit dieser Rolle werden gelöscht. Dies kann **nicht rückgängig** gemacht werden.

=¡ **Tipp**: Prüfe vorher die Anzahl der Beteiligungen. Wenn viele Beteiligungen existieren, erwäge die Rolle umzubenennen statt zu löschen.

### Rollen-Detailansicht

Die Detailansicht einer Rolle zeigt:

**Tab: Beteiligungen**

Tabelle mit allen Beteiligungen, die diese Rolle verwenden:

| Kontakt | Beteiligung |
|---------|-------------|
| Max Muster | Projekt: Website Relaunch |
| Anna Schmidt | Vertrag: IT-Dienstleistungen |
| Organisation XY | Angebot: Cloud-Services |

=¡ **Tipp**: Nutze diese Ansicht, um zu sehen, wer welche Rolle in welchen Objekten hat.

## Beteiligungen bearbeiten

### Bestehende Beteiligung ändern

1. Öffne das **Objekt** (Projekt, Vertrag, etc.)
2. Scrolle zum Bereich **"Beteiligungen"**
3. Klicke auf das **Bearbeiten-Icon** (Stift) neben der Beteiligung
4. Es öffnet sich das **Änderungs-Formular**

**Felder:**

- **Rolle**: Ändere die Rolle der Beteiligung
- **Kontakt**: Ändere den beteiligten Kontakt
- **Organisation**: Ändere die beteiligte Organisation

### Beteiligung löschen

1. Öffne das **Objekt** (Projekt, Vertrag, etc.)
2. Scrolle zum Bereich **"Beteiligungen"**
3. Klicke auf das **Löschen-Icon** (Mülleimer) neben der Beteiligung
4. Bestätige die Sicherheitsabfrage

  **Achtung**: Die Beteiligung wird gelöscht, aber der Kontakt/die Organisation bleiben im CRM erhalten.

## Praktische Anwendungsfälle

### Use Case 1: Projektteam aufbauen

**Situation**: Du startest ein neues Projekt und musst das Team zusammenstellen.

**Schritte:**

1. Erstelle das **Projekt**
2. Füge Beteiligungen hinzu:
   - Projektleiter: Max Muster (Kontakt)
   - Projektmitglied: Anna Schmidt (Kontakt)
   - Auftraggeber: Beispiel AG (Organisation)
   - Stakeholder: Marketing-Abteilung (Organisation)

**Ergebnis**: Alle Beteiligungen sind dokumentiert und über das CRM nachvollziehbar.

### Use Case 2: Vertragsparteien dokumentieren

**Situation**: Du erstellst einen Vertrag und musst alle Parteien erfassen.

**Schritte:**

1. Erstelle den **Vertrag**
2. Füge Beteiligungen hinzu:
   - Vertragspartei: Muster GmbH (Organisation)
   - Ansprechperson: Max Muster (Kontakt)
   - Unterschriftsberechtigt: Anna Schmidt (Kontakt)

**Ergebnis**: Alle relevanten Kontakte und ihre Rollen sind dokumentiert.

### Use Case 3: Angebot mit Entscheidungsträgern

**Situation**: Du erstellst ein Angebot und musst die Entscheidungsträger beim Kunden kennen.

**Schritte:**

1. Erstelle das **Angebot**
2. Füge Beteiligungen hinzu:
   - Empfänger: Ziel AG (Organisation)
   - Entscheidungsträger: CEO Max Muster (Kontakt)
   - Einkäufer: Anna Schmidt (Kontakt)
   - Beeinflusser: IT-Leiter Thomas Huber (Kontakt)

**Ergebnis**: Du weisst, wer beim Kunden welche Rolle im Entscheidungsprozess hat.

## Best Practices

###  Empfehlungen

**Klare Rollen-Namen verwenden**

- Verwende selbsterklärende Rollen-Titel
- Beispiel: "Projektleiter" statt "PL"
- Vermeide Abkürzungen

**Konsistente Rollen-Struktur**

- Definiere Standard-Rollen für häufige Szenarien
- Beispiel: "Projektleiter", "Projektmitglied", "Auftraggeber" für alle Projekte
- Nutze die gleichen Rollen über verschiedene Objekte hinweg

**Beteiligungen aktuell halten**

- Wenn Personen wechseln, aktualisiere die Beteiligungen
- Entferne nicht mehr aktive Beteiligungen
- Dokumentiere Rollen-Wechsel im Beschreibungsfeld

**Neue Kontakte/Organisationen im CRM erstellen**

- Nutze die "Neuen Kontakt erfassen"-Option im Beteiligungs-Formular
- Spart Zeit und sorgt für Vollständigkeit im CRM
- Alle Daten sind zentral verfügbar

**Rollen nicht zu granular**

- Vermeide zu viele spezifische Rollen
- Beispiel: "Projektmitglied" statt "Frontend-Entwickler", "Backend-Entwickler", "DevOps"
- Spezifische Details gehören ins Beschreibungsfeld des Objekts

**Aggregierte Rollen nutzen**

- Schaue dir die aggregierten Rollen einer Organisation an
- Erkenne so alle Funktionen auf einen Blick
- Beispiel: "Kunde, Lieferant, Partner"

### L Häufige Fehler

**Zu viele Rollen erstellen**

- Problem: Unübersichtliche Rollen-Liste mit vielen ähnlichen Rollen
- Lösung: Standard-Rollen definieren und konsequent nutzen

**Rollen löschen statt umbenennen**

- Problem: Beteiligungen gehen verloren
- Lösung: Rolle umbenennen statt zu löschen

**Beteiligungen nicht aktualisieren**

- Problem: Veraltete Informationen (z.B. Projektleiter hat gewechselt)
- Lösung: Regelmässig Beteiligungen prüfen und aktualisieren

**Neue Kontakte nicht vollständig erfassen**

- Problem: CRM-Kontakt hat zu wenig Daten
- Lösung: Beim Erstellen im Beteiligungs-Formular alle verfügbaren Daten eingeben

**Keine Beteiligungen dokumentieren**

- Problem: Unklar, wer für was zuständig ist
- Lösung: Immer Beteiligungen erfassen, sobald das Objekt erstellt wird

## Häufige Fragen

### Kann ich einen Kontakt mehrfach im gleichen Projekt haben?

Ja, ein Kontakt kann **mehrere Rollen** im gleichen Objekt haben:

- Max Muster: Projektleiter UND Stakeholder

Erstelle einfach zwei separate Beteiligungen mit unterschiedlichen Rollen.

### Was passiert, wenn ich einen Kontakt aus dem CRM lösche?

- Alle **Beteiligungen** des Kontakts werden gelöscht
- Die **Objekte** (Projekte, Verträge) bleiben bestehen
- Es entsteht eine Lücke in der Dokumentation

=¡ **Tipp**: Markiere Kontakte lieber als "Inaktiv" statt sie zu löschen.

### Kann ich Beteiligungen exportieren?

Aktuell nicht direkt über die UI. Wende dich an deinen Administrator für:

- Berichte über Beteiligungen
- CSV-Export
- Auswertungen

### Wie finde ich alle Projekte, in denen Max Muster beteiligt ist?

1. Öffne den **Kontakt** "Max Muster"
2. Tab **"Beteiligungen"**
3. Du siehst alle Objekte, in denen er beteiligt ist

### Kann eine Organisation UND ein Kontakt gleichzeitig beteiligt sein?

Ja! Im Beteiligungs-Formular kannst du **beides** angeben:

- **Organisation**: Beispiel AG
- **Kontakt**: Max Muster

Das bedeutet: Max Muster (von Beispiel AG) ist in der definierten Rolle beteiligt.

### Wie kann ich alle Kontakte mit Rolle "Projektleiter" finden?

1. Gehe zur **Rollen-Liste**
2. Klicke auf die Rolle **"Projektleiter"**
3. Im Tab **"Beteiligungen"** siehst du alle Beteiligungen mit dieser Rolle

### Was ist der Unterschied zwischen "Organisation" (Freitext) und "Verlinkte Organisationseinheit" im Kontaktformular?

- **"Organisation" im Beteiligungs-Formular**: Wird zu einem neuen CRM-Kontakt
- **"Verlinkte Organisationseinheit" im Kontakt-Formular**: Verknüpfung zu bestehender Organisation

=¡ **Empfehlung**: Nutze das Beteiligungs-Formular, um neue Organisationen direkt zu erstellen.

## Nächste Schritte

Jetzt, wo du Beteiligungen und Rollen verstehst:

1. Nutze **CRM-Integrationen** mit anderen Modulen (Kapitel 5)
2. Erstelle **Standard-Rollen** für deine häufigsten Szenarien
3. Dokumentiere **Projektteams** und **Vertragsparteien** konsequent
4. Halte **Beteiligungen aktuell** bei Änderungen

Im nächsten Kapitel lernst du, wie das CRM mit **anderen ELIZA-Modulen integriert** ist und wie du diese Integrationen optimal nutzt.
