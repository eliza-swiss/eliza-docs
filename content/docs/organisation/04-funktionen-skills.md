---
title: "Funktionen und Skills"
description: ""
weight: "4"
tags:
  - "funktionen"
  - "skills"
  - "qualifikationen"
  - "kompetenzen"
  - "matrix"
---


# Funktionen und Skills

In diesem Kapitel lernst du, wie du Funktionen, Skills und Qualifikationen in ELIZA definierst und Mitarbeitenden zuweist.

## Überblick

Das Organisation-Modul bietet drei komplementäre Konzepte zur Beschreibung von Rollen und Kompetenzen:

| Konzept | Beschreibung | Beispiele |
|---------|--------------|-----------|
| **Funktionen** | Formelle Rollen in der Organisation | Projektleiter, QM-Beauftragter, Teamleiter |
| **Skills** | Fähigkeiten und Kompetenzen | Python, Projektmanagement, Englisch |
| **Qualifikationen** | Formelle Abschlüsse und Zertifikate | CAS, MAS, Six Sigma Green Belt |

## Funktionen

> **⚠️ Hinweis:** Dieses Modul muss aktiviert sein (`ORGANISATION_USE_FUNCTIONS`).

### Was sind Funktionen?

Funktionen beschreiben formelle Rollen innerhalb der Organisation:

- **Prozessverantwortliche**: Verantwortlich für bestimmte Geschäftsprozesse
- **Fachverantwortliche**: Experten für bestimmte Themen
- **Führungsfunktionen**: Teamleiter, Abteilungsleiter
- **Stabsfunktionen**: QM-Beauftragter, Datenschutzbeauftragter

### Zur Funktionsliste navigieren

1. Klicke auf **Organisation** in der Hauptnavigation
2. Wähle **Funktionen** aus dem Menü
3. Die Liste aller Funktionen wird angezeigt

### Eine Funktion erstellen

**Schritt 1: Formular öffnen**

1. Navigiere zu **Organisation** → **Funktionen**
2. Klicke auf **"Hinzufügen"**

**Schritt 2: Grunddaten eingeben**

| Feld | Beschreibung | Pflicht |
|------|--------------|---------|
| **Abkürzung** | Kürzel der Funktion (z.B. PL, QMB) | Nein |
| **Titel** | Vollständiger Name der Funktion | Ja |
| **Beschreibung/Aufgabengebiet** | Was macht diese Funktion? | Nein |
| **Kompetenzen** | Welche Befugnisse hat die Funktion? | Nein |
| **Verantwortung** | Wofür ist die Funktion verantwortlich? | Nein |
| **Archiviert** | Funktion nicht mehr aktiv verwenden | Nein |

**Schritt 3: Speichern**

1. Überprüfe die Eingaben
2. Klicke auf **"Speichern"**
3. Die Funktion wird angelegt

### Funktion zuweisen

Es gibt zwei Wege, Mitarbeitende einer Funktion zuzuweisen:

**Variante 1: Über Mitgliedschaften**

1. Erstelle oder bearbeite eine Mitgliedschaft
2. Wähle im Feld **"Funktion"** die gewünschte Funktion
3. Der Mitarbeitende hat nun diese Funktion in dieser Organisationseinheit

**Variante 2: Über Mitwirkungen**

1. Öffne die Detail-Ansicht der Funktion
2. Klicke auf **"Mitwirkung hinzufügen"**
3. Wähle den Mitarbeitenden
4. Optional: Setze Von/Bis-Datum
5. Speichere

> **💡 Tipp:** Mitgliedschaften werden für Organisationseinheits-bezogene Funktionen verwendet, Mitwirkungen für übergreifende Rollen.

### Funktionsdetail

Die Detail-Ansicht einer Funktion zeigt:

- **Grundinformationen**: Titel, Abkürzung, Beschreibung
- **Aktuelle Mitglieder**: Wer hat diese Funktion aktuell
- **Kriterien**: Anforderungen an die Funktion
- **Verknüpfte Gruppe**: Automatisch erstellte Systemgruppe

### Funktionen archivieren

Nicht mehr verwendete Funktionen sollten archiviert statt gelöscht werden:

1. Öffne die Funktion
2. Klicke auf **"Bearbeiten"**
3. Setze **"Archiviert"** auf "Ja"
4. Speichere

> **💡 Tipp:** Archivierte Funktionen werden mit "(archiviert)" gekennzeichnet und sind in Auswahlfeldern nicht mehr verfügbar.

## Funktionsmatrix

Die Funktionsmatrix bietet eine Übersicht aller Funktionen und ihrer Inhaber:

### Funktionsmatrix aufrufen

1. Navigiere zu **Organisation** → **Dashboard**
2. Klicke auf **"Funktionsmatrix"**
3. Oder: **Organisation** → **Funktionen** → **Funktionsmatrix**

### Darstellung

Die Matrix zeigt:

- **Spalten**: Funktionen
- **Zeilen**: Organisationseinheiten oder Mitarbeitende
- **Zellen**: Wer hat welche Funktion

> **💡 Tipp:** Die Funktionsmatrix ist nützlich für Compliance-Nachweise und Stellvertretungsplanung.

## Kriterien für Funktionen

Kriterien definieren Anforderungen an Funktionsinhaber:

### Kriterienarten verwalten

1. Navigiere zu **Organisation** → **Einstellungen** → **Kriterienarten**
2. Erstelle neue Arten wie:
   - Ausbildung
   - Erfahrung
   - Zertifizierung
   - Sprachkenntnisse

### Kriterium hinzufügen

1. Öffne die Detail-Ansicht einer Funktion
2. Navigiere zu **"Kriterien"**
3. Klicke auf **"Hinzufügen"**
4. Wähle die Kriterienart
5. Beschreibe die Anforderung
6. Optional: Wähle eine benötigte Qualifikation
7. Speichere

## Skills

> **⚠️ Hinweis:** Dieses Modul muss aktiviert sein (`ORGANISATION_USE_SKILLS`).

### Was sind Skills?

Skills beschreiben konkrete Fähigkeiten und Kompetenzen:

- **Technische Skills**: Programmiersprachen, Tools, Methoden
- **Soft Skills**: Kommunikation, Führung, Teamarbeit
- **Sprachkenntnisse**: Deutsch, Englisch, Französisch
- **Zertifizierungen**: ITIL, Scrum Master, ISO Lead Auditor

### Zur Skill-Liste navigieren

1. Klicke auf **Organisation** in der Hauptnavigation
2. Wähle **Skills** aus dem Menü
3. Die Liste aller Skills wird angezeigt

### Einen Skill erstellen

**Schritt 1: Formular öffnen**

1. Navigiere zu **Organisation** → **Skills**
2. Klicke auf **"Hinzufügen"**

**Schritt 2: Daten eingeben**

| Feld | Beschreibung | Pflicht |
|------|--------------|---------|
| **Titel** | Name des Skills | Ja |
| **Beschreibung** | Was beinhaltet dieser Skill? | Nein |
| **Kategorien** | Zuordnung zu Skill-Kategorien | Nein |

**Schritt 3: Speichern**

1. Klicke auf **"Speichern"**
2. Der Skill wird angelegt

### Skill-Kategorien

Skill-Kategorien helfen bei der Organisation:

#### Kategorien verwalten

1. Navigiere zu **Organisation** → **Skills**
2. Wähle **"Kategorien"** im Untermenü
3. Oder: Klicke auf eine vorhandene Kategorie

#### Eine Kategorie erstellen

1. Klicke auf **"Hinzufügen"**
2. Gib Titel und Beschreibung ein
3. Speichere

**Beispiel-Kategorien:**

| Kategorie | Beispiel-Skills |
|-----------|-----------------|
| **Programmierung** | Python, Java, JavaScript |
| **Projektmanagement** | Scrum, Prince2, Waterfall |
| **Sprachen** | Deutsch, Englisch, Französisch |
| **Methoden** | Design Thinking, Lean, Six Sigma |
| **Tools** | Jira, Confluence, MS Office |

### Skills bei Mitarbeitenden pflegen

#### Skillseinträge erstellen

1. Öffne die Detail-Ansicht eines Mitarbeitenden
2. Navigiere zum Tab **"Skills"**
3. Klicke auf **"Hinzufügen"**
4. Wähle den Skill aus der Liste
5. Optional: Ergänze Details
6. Speichere

#### Mehrere Skills auf einmal

1. Öffne die Detail-Ansicht des Mitarbeitenden
2. Navigiere zum Tab **"Skills"**
3. Klicke auf **"Skills bearbeiten"**
4. Wähle mehrere Skills aus
5. Speichere

### Skill-Übersicht

Die Skill-Detail-Ansicht zeigt:

- **Titel und Beschreibung**: Was ist dieser Skill?
- **Kategorien**: Zugeordnete Kategorien
- **Mitarbeitende**: Wer hat diesen Skill?
- **Anzahl**: Wie viele Personen haben den Skill?

> **💡 Tipp:** Die Mitarbeiter-Anzahl zählt nur aktive Mitarbeitende (keine Alumni).

## Qualifikationen

Qualifikationen beschreiben formelle Abschlüsse und Stufen:

### Qualifikationen verwalten

1. Navigiere zu **Organisation** → **Dashboard**
2. Klicke auf **"Qualifikationen"**
3. Oder: **Organisation** → **Qualifikationen**

### Eine Qualifikation erstellen

1. Klicke auf **"Hinzufügen"**
2. Fülle aus:

| Feld | Beschreibung |
|------|--------------|
| **Abkürzung** | Kürzel (z.B. MAS, CAS) |
| **Titel** | Vollständiger Name |
| **Beschreibung** | Details zur Qualifikation |
| **Textfarbe** | Farbe für Darstellung |
| **Hintergrundfarbe** | Badge-Hintergrund |

3. Speichere

### Qualifikationen zuweisen

Qualifikationen können bei Mitgliedschaften zugewiesen werden:

1. Erstelle oder bearbeite eine Mitgliedschaft
2. Wähle im Feld **"Qualifikation"** die gewünschte Qualifikation
3. Speichere

> **💡 Tipp:** Qualifikationen sind nützlich, um verschiedene Kompetenzstufen innerhalb einer Funktion zu unterscheiden.

## Mitwirkungen

Mitwirkungen verbinden Mitarbeitende mit Funktionen (unabhängig von Organisationseinheiten):

### Eine Mitwirkung erstellen

1. Navigiere zu **Organisation** → **Mitarbeitende**
2. Öffne den gewünschten Mitarbeitenden
3. Navigiere zum Tab **"Mitwirkungen"**
4. Klicke auf **"Hinzufügen"**
5. Wähle die Funktion
6. Optional: Setze Von/Bis-Datum
7. Speichere

### Mitwirkungen-Felder

| Feld | Beschreibung |
|------|--------------|
| **Mitarbeiter** | Der Mitarbeitende |
| **Funktion** | Die zugewiesene Funktion |
| **Beginn** | Startdatum |
| **Ende** | Enddatum (leer = unbefristet) |

### Unterschied: Mitgliedschaft vs. Mitwirkung

| Aspekt | Mitgliedschaft | Mitwirkung |
|--------|----------------|------------|
| **Bezug** | Organisationseinheit + optional Funktion | Nur Funktion |
| **Stellenprozente** | Können zugeordnet werden | Keine |
| **Organigramm** | Erscheint im Organigramm | Nicht im Organigramm |
| **Verwendung** | Linien-Organisation | Fachliche Rollen |

## Stellenbeschreibungen

> **⚠️ Hinweis:** Dieses Modul muss aktiviert sein (`ORGANISATION_USE_JOBDESCRIPTIONS`).

### Stellenbeschreibungen verwalten

1. Navigiere zu **Organisation** → **Stellenbeschreibungen**
2. Die Liste aller Stellenbeschreibungen wird angezeigt

### Eine Stellenbeschreibung erstellen

1. Klicke auf **"Hinzufügen"**
2. Fülle aus:

| Feld | Beschreibung |
|------|--------------|
| **Stellenbezeichnung** | Titel der Stelle |
| **Mitarbeiter** | Primärer Stelleninhaber |
| **Weitere Mitarbeitende** | Zusätzliche Inhaber |
| **Vorgesetzter** | Direkter Vorgesetzter |
| **Stellvertretung** | Stellvertreter |
| **Von / Bis** | Gültigkeitszeitraum |
| **Status** | Entwurf, in Prüfung, freigegeben, archiviert |
| **Beschreibung** | Aufgabengebiet |
| **Kompetenzen** | Befugnisse |
| **Verantwortung** | Verantwortungsbereiche |
| **Übertragene Funktionen** | Funktionen, die der Stelle als Bausteine zugeordnet sind (siehe unten) |

3. Speichere

### Funktionen als Bausteine übertragen

Im Abschnitt **Übertragene Funktionen** des Formulars wählst du Funktionen aus, deren Beschreibung, Kompetenzen und Verantwortung zur Stelle gehören:

1. Öffne das Auswahlfeld **Übertragene Funktionen** und wähle die gewünschten Funktionen aus. Über das Suchfeld oben in der Liste findest du eine Funktion schnell über Abkürzung oder Titel
2. Gewählte Funktionen stehen zuoberst in der Liste. Eine neu gewählte Funktion kommt ans Ende der gewählten, eine abgewählte rückt zurück zu den übrigen
3. Speichere
4. Lege in der Detailansicht die Reihenfolge fest: Ziehe eine Zeile am Griff unter der Abkürzung an die gewünschte Stelle. Die neue Reihenfolge wird sofort gespeichert. Den Griff siehst du, wenn du die Stellenbeschreibung bearbeiten darfst und mindestens zwei Funktionen übertragen sind

In der Detailansicht der Stellenbeschreibung und im Word-Export erscheinen die Funktionen in dieser Reihenfolge als Tabelle mit den Spalten **Abkürzung**, **Titel**, **Beschreibung / Aufgabengebiet**, **Kompetenzen** und **Verantwortung**. Ist ein Feld der Funktion leer, steht dort «-».

- Die Texte stammen immer direkt aus der Funktion. Änderst du die Funktion, zeigen alle Stellenbeschreibungen mit dieser Funktion sofort den neuen Stand.
- Wer die Stellenbeschreibung sehen darf, sieht auch die Texte ihrer Funktionen. Der Link zur Funktion selbst erscheint nur für Personen, die Funktionen ansehen dürfen.
- Archivierte Funktionen, die schon zugeordnet sind, bleiben sichtbar und tragen den Zusatz «(archiviert)». Du kannst sie abwählen, aber nicht neu auswählen.
- Funktionen, die du selbst nicht ansehen darfst, bleiben beim Speichern mit ihrer Position erhalten.

### Eine Stellenbeschreibung kopieren

Für eine ähnliche Stelle musst du nicht von vorne beginnen:

1. Öffne die Stellenbeschreibung, die du als Vorlage nehmen willst
2. Klicke oben rechts auf das Kopier-Symbol (**Kopieren (ohne Mitarbeitende)**)
3. ELIZA legt die Kopie an und öffnet direkt ihre Bearbeitungsseite. Die Stellenbezeichnung trägt den Zusatz «(Kopie)»
4. Wähle die Mitarbeitenden aus, passe die übrigen Angaben an und speichere

Übernommen werden Stellenbezeichnung, Vorgesetzte(r), Stellvertretung, Beschreibung, Kompetenzen, Verantwortung, Gültigkeit und die übertragenen Funktionen in ihrer Reihenfolge. Leer bleiben die Mitarbeitenden und die Dokumente, denn diese gehören zum Personaldossier der bisherigen Person. Die Kopie startet als **Entwurf**. Den Button siehst du, wenn du Stellenbeschreibungen anlegen und bearbeiten darfst.

### Status-Workflow

| Status | Beschreibung |
|--------|--------------|
| **Entwurf** | In Bearbeitung, nicht sichtbar |
| **in Prüfung** | Zur Genehmigung eingereicht |
| **freigegeben** | Gültige, aktive Stellenbeschreibung |
| **archiviert** | Nicht mehr gültig |

### Mitwirkungen aus übertragenen Funktionen

Ist die Stellenbeschreibung freigegeben und fehlen ihren Mitarbeitenden Mitwirkungen, oder entfernst du Funktionen bzw. archivierst die Stelle, öffnet sich beim **Speichern** ein Fenster über der Bearbeitung. Hast du Funktionen hinzugefügt oder entfernt, heisst es **Funktionsänderungen übernehmen**, sonst **Mitwirkungen prüfen**. Gespeichert wird erst mit **Übernehmen**:

1. Unter **Hinzugefügte Funktionen** (und unter **Fehlende Mitwirkung** für bestehende Funktionen, denen Mitwirkungen fehlen, z.B. beim Freigeben) steht für jede Funktion dasselbe Formular wie auf der Funktion: **Mitarbeitende**, **Organisationseinheit**, **Von**, **Bis**, **Prozess**, **Qualifikation** und **Im Organigramm anzeigen**. Bei **Mitarbeitende** sind alle Personen der Stelle ausgewählt, denen diese Mitwirkung noch fehlt; wählbar sind nur Personen der Stelle. Wähle ab, wer die Mitwirkung nicht erhalten soll. **Von** ist mit «Gültig ab» der Stelle vorbelegt, **Bis** darf nicht in der Vergangenheit liegen
2. Hast du Funktionen entfernt, Mitarbeitende aus der Stelle genommen oder die Stelle archiviert, nennt das Fenster unter **Entfernte Funktionen** bzw. **Nicht mehr in der Stellenbeschreibung**, was weggefallen ist. Unter **Mitwirkungen der Mitarbeitenden** wählst du pro Mitwirkung **Entfernen** (per heute beenden) oder **Behalten** (bleibt unverändert); **Alle entfernen** bzw. **Alle behalten** setzt die Wahl für alle Zeilen, danach kannst du einzelne ändern. Nicht gefragt wird nach Mitwirkungen, die eine andere freigegebene Stelle derselben Person noch enthält
3. **Übernehmen** speichert die Stellenbeschreibung zusammen mit den Mitwirkungen. Stimmt eine Angabe nicht, bleibt das Fenster mit einem Hinweis offen und es wird nichts gespeichert
4. **Zurück zur Bearbeitung** schliesst das Fenster, ohne etwas zu speichern; deine Eingaben in der Stellenbeschreibung bleiben erhalten

Fehlen bei einer gespeicherten Stelle Mitwirkungen, steht in der Detailansicht bei **Übertragene Funktionen** der Hinweis «… Mitwirkungen fehlen». Er öffnet das Fenster **Fehlende Mitwirkungen erfassen** zum Hinzufügen.

Beachte: Eine Mitwirkung vergibt der Person die Rechte der Funktion, mit einer Organisationseinheit auch die Rechte dieser Einheit. Im Organigramm erscheint sie nur mit einer Organisationseinheit. Das Fenster erscheint nur, wenn du Mitwirkungen hinzufügen bzw. ändern darfst, und zeigt nur Mitwirkungen, die du sehen darfst.

### Stellenprofil einer Person

In der Detailansicht einer Person zeigt der Tab **Stellenprofil** (Seitentitel «Stellenprofil von …») oben den Kasten **Person** mit Vorgesetzten, Anstellungsgrad, Organisation und Kontakt, darunter die Stellenbeschreibungen der Person.

Im Abschnitt **Funktionen** steht jede Funktion der Person genau einmal, aufgeteilt in drei Gruppen:

- **Übertragen, aber keine Mitwirkung**: Die Stelle verlangt die Funktion, die Person hat aber weder eine laufende Mitwirkung noch eine Mitgliedschaft dazu. Mit **Mitwirkungen abgleichen** gelangst du zur Stellenbeschreibung und legst die fehlenden Mitwirkungen an.
- **Übertragen und wahrgenommen**: Die Stelle verlangt die Funktion, und die Person nimmt sie wahr.
- **Zusätzlich wahrgenommen**: Die Person nimmt die Funktion wahr, ohne dass eine Stelle sie verlangt.

Hat die Person keine Stelle mit übertragenen Funktionen, gibt es nur die Gruppe **Wahrgenommen**. Jede Zeile nennt Prozess und Beginn der Mitwirkung oder die Mitgliedschaft; mit dem Stift bearbeitest du die Mitwirkung. Ein Klick auf die Zeile zeigt Beschreibung, Kompetenzen und Verantwortung der Funktion; ist ein Feld leer, steht dort «-». Die Zeile **Funktion** führt zur Funktion, sofern du Funktionen ansehen darfst.

Die Weiterbildungen sind nach Status gruppiert; abgelaufene stehen zuoberst.

Der Word-Export des Stellenprofils heisst «Stellenprofil». Jede Stelle erscheint mit ihrer Tabelle und dem vollen Text der Funktionen. Darunter folgen nur die Funktionen, die nicht schon in einer Stelle stehen, mit vollem Text; der Abschnitt heisst dann **Weitere aktuell zugeordnete Funktionen**.

### Dokumente anhängen

An Stellenbeschreibungen können HR-Dokumente angehängt werden:

1. Öffne die Stellenbeschreibung
2. Navigiere zu **"Dokumente"**
3. Klicke auf **"Dokument hinzufügen"**
4. Wähle oder lade das Dokument hoch

## Best Practices

### ✅ Empfehlungen

1. **Konsistente Benennung**: Verwende einheitliche Namen für Funktionen und Skills
2. **Beschreibungen pflegen**: Dokumentiere, was Funktionen und Skills bedeuten
3. **Kategorien nutzen**: Organisiere Skills in Kategorien
4. **Regelmässige Pflege**: Aktualisiere Zuordnungen bei Änderungen
5. **Archivieren statt Löschen**: Halte historische Daten erhalten

### ❌ Häufige Fehler

1. **Zu viele Funktionen**: Halte die Anzahl übersichtlich
2. **Duplikate**: Prüfe vor dem Anlegen auf ähnliche Einträge
3. **Verwaiste Einträge**: Lösche oder archiviere ungenutzte Funktionen
4. **Fehlende Zuordnungen**: Stelle sicher, dass jede Funktion Inhaber hat

### Beispiel: Funktionsdefinition

**Funktion: Qualitätsmanagement-Beauftragter (QMB)**

| Aspekt | Beschreibung |
|--------|--------------|
| **Abkürzung** | QMB |
| **Beschreibung** | Verantwortlich für das Qualitätsmanagementsystem |
| **Aufgaben** | QMS pflegen, Audits koordinieren, Schulungen durchführen |
| **Kompetenzen** | Massnahmen anordnen, Audits durchführen |
| **Verantwortung** | ISO 9001 Konformität, KVP |
| **Kriterien** | QM-Ausbildung, mind. 3 Jahre Erfahrung |

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- Was Funktionen, Skills und Qualifikationen sind
- Wie du Funktionen erstellst und zuweist
- Wie die Funktionsmatrix funktioniert
- Wie du Skills und Skill-Kategorien verwaltest
- Wie Mitwirkungen funktionieren
- Wie du Stellenbeschreibungen erstellst

## Nächste Schritte

- [Kapitel 5: Integration]({{< ref "05-integration" >}}) – Verknüpfungen mit anderen Modulen
- [Kapitel 6: Berechtigungskonzept]({{< ref "06-berechtigungskonzept" >}}) – Zugriffsrechte verstehen
