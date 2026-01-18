---
title: "Erste Schritte"
description: ""
weight: "1"
tags:
  - "einführung"
  - "übersicht"
  - "navigation"
  - "prozesslandkarte"
  - "erste-schritte"
---


# Erste Schritte

Dieses Kapitel führt dich in das ELIZA Prozessmanagement-Modul ein und zeigt dir, wie du schnell produktiv wirst.

## Was ist das Prozesse-Modul?

Das ELIZA Prozesse-Modul ist ein umfassendes System zur Verwaltung, Dokumentation und Freigabe von Geschäftsprozessen. Es unterstützt dich bei:

- **Prozesslandkarte**: Visuelle Übersicht aller Prozesse
- **Hierarchische Strukturierung**: Ober- und Unterprozesse organisieren
- **Prozessschritte**: Detaillierte Dokumentation einzelner Aktivitäten
- **Freigabe-Workflows**: Strukturierte Prüfung und Genehmigung
- **Hilfsmittel-Management**: Ressourcen und Werkzeuge verknüpfen
- **Integration**: Verknüpfung mit Dokumenten, KPIs und mehr

### Typische Anwendungsfälle

| Anwendungsfall | Beschreibung |
|----------------|--------------|
| **Qualitätsmanagement** | Prozesse nach ISO 9001 dokumentieren und lenken |
| **Prozessoptimierung** | Abläufe analysieren und verbessern |
| **Onboarding** | Neue Mitarbeitende mit Prozessen vertraut machen |
| **Audit-Vorbereitung** | Prozesse für interne und externe Audits bereitstellen |
| **Wissensmanagement** | Know-how zu Abläufen zentral dokumentieren |

---

## Zugriff auf das Prozesse-Modul

### Navigation

**Hauptmenü → Prozesse** oder **Dashboard → Prozesse-Kachel**

Das Prozesse-Modul erreichst du über das Hauptmenü auf der linken Seite oder direkt über die Prozesse-Kachel im Dashboard.

### Voraussetzungen

Um das Prozesse-Modul nutzen zu können, benötigst du:

1. **Aktives ELIZA-Konto**: Ein gültiger Benutzeraccount
2. **Prozesse-Berechtigung**: Mindestens die Berechtigung `view_prozesse`
3. **Modulaktivierung**: Das Prozesse-Modul muss für deine Organisation aktiviert sein

> **💡 Tipp:** Wenn du keinen Zugriff auf das Prozesse-Modul hast, wende dich an deinen Administrator.

---

## Hauptbereiche des Prozesse-Moduls

### 1. Prozesslandkarte

Die Prozesslandkarte ist deine zentrale Übersicht. Hier siehst du alle Prozesse in ihrer hierarchischen Struktur auf einen Blick.

**Prozesse → Prozesslandkarte**

Die Prozesslandkarte zeigt:
- **Hauptprozesse**: Die oberste Ebene deiner Prozesshierarchie
- **Unterprozesse**: Aufklappbare Unterebenen
- **Farbcodierung**: Prozesse können farblich kategorisiert werden
- **Status-Anzeige**: Erkenne auf einen Blick den Freigabestatus

### 2. Prozessliste

**Prozesse → Prozesse**

Die Prozessliste bietet eine tabellarische Übersicht aller Prozesse mit:

- **Nummer und Titel**: Eindeutige Identifikation
- **Status**: Aktueller Freigabestatus
- **Verantwortung**: Prozessverantwortliche Person
- **Filter und Suche**: Schnelles Finden von Prozessen

### 3. Workflow-Übersicht

**Prozesse → Workflow**

Die Workflow-Übersicht zeigt dir alle Prozesse, die auf eine Aktion warten:

- **Zur Prüfung**: Prozesse, die du prüfen musst
- **Zur Freigabe**: Prozesse, die du freigeben musst
- **Meine Entwürfe**: Prozesse, die du noch bearbeiten musst

### 4. Meine Prozesse

**Prozesse → Meine Prozesse**

Hier findest du alle Prozesse, für die du verantwortlich bist oder in deren Team du bist.

### 5. Favoriten

**Prozesse → Favoriten**

Deine persönliche Sammlung häufig genutzter Prozesse für schnellen Zugriff.

---

## Die Prozesse-Oberfläche

### Prozessliste

<pre>
┌─────────────────────────────────────────────────────────────────────┐
│  Prozesse                                              [+ Neu]      │
├─────────────────────────────────────────────────────────────────────┤
│  Suche: [________________]  Status: [Alle ▼]  Label: [Alle ▼]       │
├─────────────────────────────────────────────────────────────────────┤
│  Nr.    │ Titel                      │ Status      │ Verantwortung  │
├─────────┼────────────────────────────┼─────────────┼────────────────┤
│  1.0    │ Führungsprozesse           │ Freigegeben │ Max Muster     │
│  1.1    │ ├─ Strategieplanung        │ Freigegeben │ Max Muster     │
│  1.2    │ └─ Managementbewertung     │ Entwurf     │ Lisa Müller    │
│  2.0    │ Kernprozesse               │ Freigegeben │ Hans Meier     │
│  2.1    │ ├─ Kundenbetreuung         │ Freigegeben │ Hans Meier     │
│  2.2    │ └─ Produktion              │ Zur Prüfung │ Anna Schmidt   │
└─────────────────────────────────────────────────────────────────────┘
</pre>

### Prozess-Detailansicht

Wenn du einen Prozess öffnest, siehst du:

| Bereich | Inhalt |
|---------|--------|
| **Kopfzeile** | Nummer, Titel, Status-Badge |
| **Aktionen** | Bearbeiten, Workflow-Aktionen, Arbeitskopie |
| **Beschreibung** | Prozessbeschreibung und Kontext |
| **Prozessschritte** | Detaillierte Aktivitäten |
| **Tabs** | Details, Dokumente, Hilfsmittel, Historie |

---

## Wichtige Konzepte

### Prozess-Status

Jeder Prozess durchläuft einen definierten Lebenszyklus:

| Status | Symbol | Bedeutung |
|--------|--------|-----------|
| **Entwurf** | 🔵 | Prozess wird bearbeitet |
| **Zur Prüfung** | 🟡 | Wartet auf Prüfung |
| **Geprüft** | 🟠 | Geprüft, wartet auf Freigabe |
| **Freigegeben** | 🟢 | Aktiv und gültig |
| **Abgelaufen** | 🔴 | Überprüfung fällig |
| **Archiviert** | ⚫ | Nicht mehr aktiv |

> **⚠️ Wichtig:** Nur freigegebene Prozesse sind offiziell gültig und sollten verwendet werden.

### Prozess-Hierarchie

Prozesse können hierarchisch organisiert werden:

- **Hauptprozesse**: Oberste Ebene (z.B. "Führungsprozesse")
- **Unterprozesse**: Untergeordnete Prozesse (z.B. "Strategieplanung")

<pre>
1.0 Führungsprozesse (Hauptprozess)
├── 1.1 Strategieplanung (Unterprozess)
├── 1.2 Managementbewertung (Unterprozess)
└── 1.3 Risikomanagement (Unterprozess)
</pre>

### Arbeitskopien

Wenn du einen freigegebenen Prozess ändern möchtest, erstellst du eine **Arbeitskopie**:

- Das Original bleibt freigegeben und verfügbar
- Änderungen erfolgen in der Arbeitskopie
- Nach Freigabe ersetzt die Arbeitskopie das Original

### Prozessschritte

Prozessschritte beschreiben die einzelnen Aktivitäten innerhalb eines Prozesses:

- **Titel und Beschreibung**: Was wird getan?
- **Verantwortung**: Wer führt den Schritt aus?
- **Hilfsmittel**: Welche Ressourcen werden benötigt?
- **Dokumente**: Welche Dokumente sind relevant?

---

## Schnellstart: Dein erster Prozess

### Schritt 1: Prozessliste öffnen

1. Navigiere zu **Prozesse → Prozesse**
2. Du siehst die Liste aller vorhandenen Prozesse

### Schritt 2: Neuen Prozess erstellen

1. Klicke auf **"+ Neu"** (grüner Button)
2. Fülle die Pflichtfelder aus:
   - **Titel**: Aussagekräftiger Name des Prozesses
   - **Nummer**: Eindeutige Prozessnummer (z.B. "1.0")
3. Optional: Wähle einen übergeordneten Prozess
4. Klicke auf **"Speichern"**

### Schritt 3: Prozess bearbeiten

1. Öffne deinen neuen Prozess
2. Klicke auf **"Bearbeiten"**
3. Füge Beschreibung und weitere Details hinzu
4. Speichere deine Änderungen

> **💡 Tipp:** Ein neuer Prozess startet immer im Status "Entwurf". Du kannst ihn jederzeit weiter bearbeiten.

---

## Berechtigungen im Überblick

### Basis-Berechtigungen

| Berechtigung | Beschreibung |
|--------------|--------------|
| `view_prozesse` | Prozesse anzeigen |
| `add_prozesse` | Neue Prozesse erstellen |
| `change_prozesse` | Prozesse bearbeiten |
| `delete_prozesse` | Prozesse löschen |

### Rollen

| Rolle | Typische Berechtigungen |
|-------|------------------------|
| **Leser** | Prozesse anzeigen und herunterladen |
| **Autor** | Prozesse erstellen und bearbeiten |
| **Prüfer** | Prozesse prüfen |
| **Freigeber** | Prozesse freigeben |
| **Administrator** | Volle Rechte inkl. Einstellungen |

### Prozess-spezifische Rechte

Zusätzlich zu den allgemeinen Berechtigungen gibt es prozess-spezifische Rechte:

- **Prozessverantwortung**: Hat volle Kontrolle über den Prozess
- **Prozess-Team**: Kann am Prozess mitarbeiten
- **Prüfer-Funktion**: Kann Prozesse prüfen
- **Freigeber-Funktion**: Kann Prozesse freigeben

> **⚠️ Wichtig:** Die tatsächlichen Berechtigungen hängen von deiner Rolle und den Prozess-Einstellungen ab.

---

## Tastenkombinationen

| Tastenkombination | Aktion |
|-------------------|--------|
| `Strg + S` | Speichern (in Formularen) |
| `Esc` | Dialog schliessen |
| `/` | Fokus auf Suchfeld |

---

## Hilfe und Support

### Dokumentation

- **Dieses Handbuch**: Umfassende Anleitungen für alle Prozesse-Funktionen
- **Tooltips**: Fahre mit der Maus über Icons für Erklärungen
- **Hilfetexte**: Kontextbezogene Hilfe in Formularen

### Support

Bei Fragen oder Problemen:

1. Konsultiere dieses Handbuch
2. Nutze die Suche im Hilfe-Bereich
3. Kontaktiere deinen lokalen Administrator
4. Wende dich an den ELIZA Support

---

## Nächste Schritte

- **[Kapitel 2: Prozesse verwalten]({{< ref "02-prozesse-verwalten" >}})**: Lerne, wie du Prozesse erstellst und organisierst
- **[Kapitel 3: Prozessschritte]({{< ref "03-prozessschritte" >}})**: Dokumentiere Prozesse im Detail
- **[Kapitel 4: Workflow]({{< ref "04-workflow-freigabe" >}})**: Verstehe den Freigabe-Prozess

---

## Zusammenfassung

✅ Du weisst, was das Prozesse-Modul ist und wofür es verwendet wird
✅ Du kennst die Hauptbereiche und Navigation
✅ Du verstehst die wichtigsten Konzepte (Status, Hierarchie, Arbeitskopien)
✅ Du kannst deinen ersten Prozess erstellen
✅ Du weisst, wo du Hilfe findest
