---
title: "Web-Suche mit Gemini"
description: ""
weight: "6"
tags:
  - "web-search"
  - "google"
  - "gemini"
  - "datenschutz"
  - "privacy"
  - "grounding"
---


# Web-Suche mit Gemini

Der ELIZA AI Assistant bietet dir die Möglichkeit, aktuelle Informationen aus dem Web in deine Unterhaltungen einzubinden. Diese Funktion ist besonders nützlich, wenn du Fragen zu aktuellen Ereignissen, neuesten Entwicklungen oder Informationen hast, die sich häufig ändern.

## Was ist Web-Suche?

Die **Web-Suche** ist eine Funktion, die es unterstützten KI-Modellen (wie Google Gemini) ermöglicht, automatisch im Web zu suchen und die Antworten mit aktuellen, verifizierten Informationen zu ergänzen.

### Wie funktioniert es?

1. **Du stellst eine Frage** an den AI Assistant
2. **Das KI-Modell entscheidet**, ob eine Web-Suche hilfreich wäre
3. **Automatische Web-Suche** wird durchgeführt
4. **Relevante Informationen** werden in die Antwort eingebunden
5. **Quellen werden angezeigt** unterhalb der Antwort mit klickbaren Links

### Welche Modelle unterstützen Web-Suche?

Aktuell unterstützen folgende KI-Modelle die Web-Suche:

- ✅ **Google Gemini 1.5 Pro**
- ✅ **Google Gemini 1.5 Flash**
- ✅ **Google Gemini 2.0 Flash** (neuestes Modell)
- ❌ OpenAI GPT-Modelle (noch nicht unterstützt)
- ❌ Anthropic Claude-Modelle (noch nicht unterstützt)

> **💡 Tipp:** Gemini-Modelle erkennst du am Namen. Sie beginnen immer mit "Gemini".

## Web-Suche aktivieren

### Schritt-für-Schritt Anleitung

**Schritt 1:** Öffne einen bestehenden Chat oder erstelle einen neuen Chat

**Schritt 2:** Klicke auf das **Bearbeiten-Symbol** (Stift-Icon) oben rechts

**Schritt 3:** Wähle ein **Gemini-Modell** aus der Dropdown-Liste

> ⚠️ **Wichtig:** Die Web-Suche ist nur für Gemini-Modelle verfügbar. Wenn du ein anderes Modell auswählst, ist die Funktion deaktiviert.

**Schritt 4:** Aktiviere die Checkbox **"Web-Suche aktivieren"**

**Schritt 5:** **Lies den Datenschutz-Hinweis** sorgfältig (siehe unten)

**Schritt 6:** Klicke auf **"Speichern"** (grüner Button)

### Visueller Datenschutz-Hinweis

Sobald die Web-Suche aktiviert ist, siehst du im Chat einen **orangen Warnbanner** mit folgendem Hinweis:

> ⚠️ **Web-Suche aktiviert - Datenschutz-Hinweis**
>
> In diesem Chat ist die Web-Suche aktiviert. Deine Anfragen,
> Kontextinformationen und Antworten werden für 30 Tage bei Google gespeichert.
>
> ⚠️ Verwende KEINE vertraulichen oder personenbezogenen Daten in diesem Chat!

Dieser Banner erscheint bei **jedem Öffnen** des Chats und erinnert dich daran, keine sensiblen Daten zu verwenden.

## Web-Suche nutzen

### Beispiel-Anwendungsfälle

**Geeignet für:**

✅ **Aktuelle Nachrichten und Ereignisse**
```
"Was sind die neuesten Entwicklungen zum Schweizer Datenschutzgesetz?"
```

✅ **Technologie-Updates**
```
"Welche neuen Features gibt es in Python 3.12?"
```

✅ **Aktuelle Marktdaten**
```
"Wie hat sich der SMI heute entwickelt?"
```

✅ **Verifizierte Fakten**
```
"Wie viele Einwohner hat die Schweiz aktuell?"
```

✅ **Öffentlich verfügbare Informationen**
```
"Wie sind die Öffnungszeiten des Bundesamts für Gesundheit?"
```

**NICHT geeignet für:**

❌ **Unternehmensinterne Informationen**
```
"Wie sind unsere Quartalszahlen?"
```

❌ **Personenbezogene Daten**
```
"Wie ist die Adresse von Mitarbeiter XY?"
```

❌ **Vertrauliche Dokumente**
```
"Analysiere unseren internen Compliance-Bericht"
```

❌ **Kundendaten**
```
"Welche Bestellungen hat Kunde ABC?"
```

❌ **Geschäftsgeheimnisse**
```
"Was ist unsere Preisstrategie für Produkt X?"
```

> **💡 Tipp:** Erstelle separate Chats für öffentliche Recherchen (mit Web-Suche) und interne Fragen (ohne Web-Suche)!

### Quellen-Anzeige verstehen

Wenn der AI Assistant Web-Suche verwendet hat, siehst du **unterhalb der Antwort** eine Box mit:

#### 1. Verwendete Suchabfragen

```
🔍 Verwendete Suchabfragen:
  [Schweizer Datenschutzgesetz 2025]  [DSG Revision]
```

Dies zeigt dir, welche Suchbegriffe verwendet wurden.

#### 2. Quellen (Web-Links)

```
🔗 Quellen:
  🔗 Neues Schweizer Datenschutzgesetz (DSG) - EDÖB
     https://www.edoeb.admin.ch/...

  🔗 DSG-Revision: Das musst du wissen - ICTjournal
     https://www.ictjournal.ch/...
```

Alle Quellen sind **klickbar** und öffnen sich in einem neuen Tab.

#### 3. Datenschutz-Hinweis

```
ℹ️ Diese Informationen wurden mittels Web-Suche gefunden.
   Google speichert die Anfrage für 30 Tage.
```

> **💡 Tipp:** Klicke auf die Quellen-Links, um die Originalquellen zu verifizieren und weitere Details zu lesen!

## Datenschutz und rechtliche Hinweise

### ⚠️ WICHTIG: Datenspeicherung bei Google

Wenn du die Web-Suche verwendest, gelten **spezielle Datenschutzbestimmungen**:

#### Was wird gespeichert?

**Google speichert für 30 Tage:**

- 📝 Deine **Anfragen** (alle Prompts im Chat)
- 📋 **Kontextinformationen** (vorherige Nachrichten im Chat)
- 💬 **KI-Antworten** (die generierten Texte)
- 🔍 **Suchabfragen** (verwendete Suchbegriffe)
- 🌐 **Web-Quellen** (gefundene Websites)

#### Warum wird gespeichert?

- ⚙️ **Fehleranalyse**: Bei technischen Problemen
- 🧪 **Qualitätsverbesserung**: Optimierung der Suchfunktion
- 📊 **Service-Verbesserung**: Verbesserung der Genauigkeit

### DSGVO-Konformität (EU/Schweiz)

**Positive Aspekte:**

✅ **Google Ireland Ltd.**: Für Nutzer in der EU/Schweiz zuständig
✅ **EU-Rechenzentren**: Datenverarbeitung erfolgt in Europa
✅ **Rechtliche Absicherung**: Einhaltung der Datenschutz-Grundverordnung
✅ **Vertragliche Garantien**: Standard Contractual Clauses (SCCs)

**Kritische Punkte:**

⚠️ **30-Tage Speicherung**: Daten werden **immer** 30 Tage gespeichert
⚠️ **Keine Ausnahme**: Gilt auch für bezahlte Google-Accounts
⚠️ **Umfang**: Alle Prompts, Kontext und Antworten werden gespeichert

### Empfehlungen für Schweizer KMU

#### ✅ Geeignete Nutzung (ohne Datenschutz-Risiko)

**1. Öffentliche Recherchen:**
```
"Was sind die aktuellen KMU-Förderprogramme in der Schweiz?"
```

**2. Allgemeine Fakten:**
```
"Wie funktioniert die MWST-Abrechnung in der Schweiz?"
```

**3. Technologie-Informationen:**
```
"Welche CRM-Systeme sind für KMU geeignet?"
```

**4. Markt-Trends:**
```
"Welche Digitalisierungs-Trends gibt es im Schweizer Einzelhandel?"
```

#### ❌ NICHT empfohlene Nutzung (Datenschutz-Risiko!)

**1. Unternehmensdaten:**
```
❌ "Analysiere unsere Verkaufszahlen für Q3"
```
> **Risiko:** Geschäftsdaten für 30 Tage bei Google gespeichert

**2. Kundendaten:**
```
❌ "Erstelle ein Angebot für Firma Müller AG"
```
> **Risiko:** Kundennamen und Geschäftsbeziehungen gespeichert

**3. Personenbezogene Daten:**
```
❌ "Wie viele Mitarbeiter haben wir in der IT-Abteilung?"
```
> **Risiko:** Interne Strukturen und Personaldaten gespeichert

**4. Compliance-relevante Themen:**
```
❌ "Hilf mir bei der ISO 9001 Dokumentation für unser QMS"
```
> **Risiko:** Compliance-Prozesse und interne Abläufe gespeichert

### Best Practices

#### 1. Separate Chats verwenden

**Empfehlung:** Erstelle **separate Chats** für Recherchen mit Web-Suche:

✅ **Chat 1**: "Allgemeine Recherchen" (Web-Suche AN)
✅ **Chat 2**: "Interne Fragen" (Web-Suche AUS)

> **💡 Tipp:** Benenne die Chats klar, damit du sofort siehst, welcher Chat Web-Suche aktiviert hat!

**Beispiel:**
- "🌐 Web-Recherche: Datenschutz-Trends 2025"
- "🔒 Intern: QMS-Dokumentation"

#### 2. Datenschutz-Verantwortlicher konsultieren

Wenn du unsicher bist, ob eine Anfrage datenschutzkonform ist:

1. **Konsultiere** deinen Datenschutz-Verantwortlichen
2. **Prüfe** die Klassifizierung der Daten (öffentlich, intern, vertraulich)
3. **Im Zweifel**: Web-Suche **deaktiviert** lassen

#### 3. Team-Schulungen

**Für Administratoren:**

- 📋 **Schulung**: Kläre dein Team über Datenschutz-Risiken auf
- 📝 **Richtlinien**: Erstelle klare Nutzungs-Richtlinien
- 🔍 **Monitoring**: Prüfe regelmäßig, welche Chats Web-Suche aktiviert haben
- ⚠️ **Warnungen**: Erinnere Mitarbeiter an Datenschutz-Hinweise

## Web-Suche deaktivieren

### Für einen einzelnen Chat

**Methode 1: Über Warnbanner**

**Schritt 1:** Öffne den Chat mit aktivierter Web-Suche

**Schritt 2:** Klicke auf **"Web-Suche deaktivieren"** im orangen Warnbanner

**Methode 2: Über Chat-Einstellungen**

**Schritt 1:** Öffne den Chat mit aktivierter Web-Suche

**Schritt 2:** Klicke auf das **Bearbeiten-Symbol** (Stift-Icon)

**Schritt 3:** Deaktiviere die Checkbox **"Web-Suche aktivieren"**

**Schritt 4:** Klicke auf **"Speichern"**

### Systemweit (für Administratoren)

Falls dein Unternehmen die Web-Suche generell nicht nutzen möchte:

**Option 1: Gemini-Modelle deaktivieren**
- Navigiere zu **Admin** → **AI-Modelle**
- Setze Gemini-Modelle auf "Inaktiv"

**Option 2: Feature deaktivieren**
- Kontaktiere deinen ELIZA-Administrator
- Feature-Flag kann systemweit deaktiviert werden

## Praktische Beispiele

### Beispiel 1: Aktuelle Gesetzgebung recherchieren

**Situation:** Du möchtest dich über neue Schweizer Gesetze informieren.

**Schritt 1:** Erstelle einen neuen Chat mit dem Titel "Web-Recherche: Gesetzgebung 2025"

**Schritt 2:** Wähle **Gemini 2.0 Flash** als AI-Modell

**Schritt 3:** Aktiviere **"Web-Suche aktivieren"**

**Schritt 4:** Stelle deine Frage:
```
"Was sind die wichtigsten Änderungen im Schweizer Datenschutzgesetz 2025?"
```

**Ergebnis:**
- Ausführliche Antwort mit aktuellen Informationen
- Quellen-Box mit Links zu:
  - EDÖB (Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter)
  - Rechtsdokumenten
  - Fachartikeln
- Verwendete Suchabfragen sichtbar

> **💡 Tipp:** Die Quellen sind immer aktuell und verifiziert!

### Beispiel 2: Technologie-Trends recherchieren

**Situation:** Du möchtest über neue Entwicklungen in der IT-Branche informiert bleiben.

**Schritt 1:** Erstelle einen Chat "🌐 Tech-Trends 2025"

**Schritt 2:** Aktiviere Web-Suche für Gemini-Modell

**Schritt 3:** Stelle Fragen wie:
```
"Welche KI-Trends sind 2025 für Schweizer KMU relevant?"
"Was sind die neuesten Cloud-Sicherheits-Standards?"
"Wie entwickelt sich der Markt für Cybersecurity in der Schweiz?"
```

**Vorteil:** Du erhältst immer die aktuellsten Informationen aus vertrauenswürdigen Quellen.

### Beispiel 3: Marktanalyse durchführen

**Situation:** Du bereitest eine Präsentation vor und benötigst aktuelle Marktdaten.

**Checkliste:**
- ✅ Separate Chat für Marktanalyse erstellen
- ✅ **KEINE** internen Unternehmensdaten erwähnen
- ✅ Nur öffentliche Marktdaten abfragen
- ✅ Quellen für Präsentation nutzen

**Beispiel-Anfrage:**
```
"Wie hat sich der Schweizer E-Commerce Markt 2024 entwickelt?
Welche Trends gibt es für 2025?"
```

**Ergebnis:**
- Aktuelle Statistiken
- Markt-Trends
- Klickbare Quellen (z.B. Statista, Branchenverbände)

> **💡 Tipp:** Kopiere die Quellen-Links direkt in deine Präsentation für Transparenz!

## Häufige Fragen (FAQ)

### Kostet die Web-Suche extra?

**Antwort:** Nein, die Web-Suche ist in ELIZA **kostenlos** verfügbar. Google berechnet keine zusätzlichen Gebühren.

### Kann ich die 30-Tage-Speicherung umgehen?

**Antwort:** Nein, die 30-Tage-Speicherung ist eine **Bedingung von Google** und gilt für alle Nutzer (bezahlt & unbezahlt). Es gibt keine Ausnahmen.

### Wie kann ich meine Daten bei Google löschen?

**Antwort:** Daten werden **automatisch nach 30 Tagen gelöscht**. Eine manuelle Löschung vor Ablauf der 30 Tage ist **nicht möglich**.

### Welche Websites werden durchsucht?

**Antwort:** Die Web-Suche durchsucht **öffentlich zugängliche Websites**. Websites, die bestimmte Suchmaschinen-Einschränkungen haben, werden nicht verwendet.

### Kann ich die Quellen-Anzeige ausblenden?

**Antwort:** Nein, die Anzeige von Quellen ist eine **Anforderung von Google** und kann nicht deaktiviert werden. Dies dient der Transparenz.

### Ist Web-Suche DSGVO-konform?

**Antwort:** Ja, Google ist DSGVO-konform. **Aber:** Die 30-Tage-Speicherung gilt universell, daher solltest du **keine personenbezogenen Daten** verwenden.

### Was passiert bei Offline-Nutzung?

**Antwort:** Web-Suche benötigt eine **aktive Internetverbindung**. Bei Offline-Nutzung ist die Funktion nicht verfügbar.

### Kann ich die Web-Suche für bestimmte Teams sperren?

**Antwort:** Ja, Administratoren können die Gemini-Modelle deaktivieren oder die Web-Suche-Funktion systemweit ausschalten.

### Sieht der AI Assistant meine internen ELIZA-Dokumente?

**Antwort:** Nein! Die Web-Suche durchsucht nur **öffentliche Websites**. Deine ELIZA-Dokumente und internen Daten sind **nicht** Teil der Web-Suche.

> **⚠️ Wichtig:** Web-Suche und Dokumenten-Embedding sind **separate Funktionen**!
>
> - **Web-Suche**: Sucht im öffentlichen Web (Google)
> - **Dokumenten-Embedding**: Sucht in deinen hochgeladenen ELIZA-Dokumenten (privat)

### Wie erkenne ich, ob eine Antwort aus der Web-Suche stammt?

**Antwort:** Wenn Web-Suche verwendet wurde, siehst du **immer** die Quellen-Box unterhalb der Antwort. Wenn keine Quellen-Box erscheint, wurde **keine** Web-Suche verwendet.

## Fehlerbehebung

### Problem: Web-Suche ist ausgegraut

**Symptom:** Die Checkbox "Web-Suche aktivieren" ist deaktiviert und kann nicht angeklickt werden.

**Lösung:**
1. Prüfe, ob ein **Gemini-Modell** ausgewählt ist
2. Nur Gemini-Modelle unterstützen Web-Suche
3. Wähle z.B. "Gemini 2.0 Flash" aus
4. Checkbox sollte nun aktivierbar sein

### Problem: Keine Quellen werden angezeigt

**Symptom:** Der AI Assistant gibt eine Antwort, aber keine Quellen-Box erscheint.

**Mögliche Ursachen:**
- **Web-Suche wurde nicht verwendet**: Der AI Assistant hat entschieden, dass keine Web-Suche notwendig ist
- **Antwort basiert auf Training**: Die Informationen waren bereits im Modell enthalten

**Lösung:** Stelle deine Frage spezifischer für aktuelle Informationen:
```
❌ "Was ist Datenschutz?"  (allgemein, im Training enthalten)
✅ "Was sind die neuesten Änderungen im Schweizer Datenschutzgesetz 2025?" (aktuell, Web-Suche notwendig)
```

### Problem: Warnbanner erscheint nicht

**Symptom:** Obwohl Web-Suche aktiviert ist, sehe ich keinen orangen Warnbanner.

**Lösung:**
1. Lade die Seite neu (F5 oder Cmd+R)
2. Prüfe in den Chat-Einstellungen, ob "Web-Suche aktivieren" wirklich aktiviert ist
3. Falls Problem weiterhin besteht: Kontaktiere den ELIZA-Administrator

## Zusammenfassung

### ✅ Vorteile der Web-Suche

- 🌐 **Aktuelle Informationen** aus dem gesamten Web
- 🔍 **Verifizierte Quellen** mit klickbaren Links
- ⚡ **Schnelle Recherche** ohne manuelles Googeln
- 📊 **Faktenbasierte Antworten** mit Quellenangaben
- 🆕 **Immer aktuell** - neueste Informationen verfügbar

### ⚠️ Wichtige Einschränkungen

- 🔒 **30-Tage Datenspeicherung** bei Google (keine Ausnahmen)
- 🚫 **Keine vertraulichen Daten** verwenden
- 🤖 **Nur Gemini-Modelle** unterstützen Web-Suche
- 📋 **Quellen-Anzeige Pflicht** (nicht deaktivierbar)
- 🌐 **Internet erforderlich** (keine Offline-Nutzung)

### 💡 Empfohlene Nutzung

**JA für:**
- ✅ Öffentliche Recherchen
- ✅ Aktuelle Nachrichten
- ✅ Technologie-Updates
- ✅ Allgemeine Fakten
- ✅ Markt-Trends
- ✅ Gesetzgebungs-Updates

**NEIN für:**
- ❌ Unternehmensdaten
- ❌ Kundendaten
- ❌ Personenbezogene Daten
- ❌ Compliance-Dokumente
- ❌ Geschäftsgeheimnisse
- ❌ Interne Prozesse

## Nächste Schritte

**Nach dem Lesen dieses Kapitels kannst du:**

- ✅ Web-Suche aktivieren und deaktivieren
- ✅ Datenschutz-Risiken einschätzen
- ✅ Geeignete Use Cases identifizieren
- ✅ Quellen-Anzeige verstehen und nutzen
- ✅ Separate Chats für Recherchen erstellen

**Weiterführende Kapitel:**

- [Dokumentensuche und Wissensbasis]({{< ref "03-dokumente-suche" >}}) - Private Dokumente als Wissensbasis nutzen
- [Tipps, Tricks und FAQ]({{< ref "05-tipps" >}}) - Best Practices für effektive Nutzung
- [Integration]({{< ref "04-integration" >}}) - AI Assistant mit anderen ELIZA-Modulen nutzen

---

**Bei Fragen zur Web-Suche:**
- 📧 Kontaktiere deinen ELIZA-Administrator
- 📖 Lies die ELIZA Datenschutz-Richtlinien
- 💬 Nutze den ELIZA-Support-Chat

**Letzte Aktualisierung:** 2025.11.14
**Version:** 1.0
