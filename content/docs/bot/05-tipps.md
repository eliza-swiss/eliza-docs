---
title: "Tipps, Tricks und FAQ"
description: ""
weight: "5"
tags:
  - "tips"
  - "tricks"
  - "faq"
  - "best-practices"
  - "troubleshooting"
---


# Tipps, Tricks und FAQ

In diesem Kapitel findest du praktische Tipps für den effektiven Einsatz des AI Assistants, Lösungen für häufige Probleme und Antworten auf oft gestellte Fragen.

## Best Practices für Prompts

Gute Prompts führen zu besseren Ergebnissen. Hier sind bewährte Techniken:

### Die 5-S-Regel für Prompts

**Spezifisch** - Sei präzise, was du möchtest
- ❌ "Schreib einen Text"
- ✅ "Schreibe einen 200-Wörter-Blogpost über die Vorteile von Remote-Arbeit für Schweizer KMUs"

**Strukturiert** - Gib klare Struktur vor
- ❌ "Erkläre mir Projektmanagement"
- ✅ "Erkläre mir Projektmanagement in 3 Abschnitten: 1) Definition, 2) Methoden, 3) Tools. Nutze Beispiele aus der IT-Branche"

**Stil** - Definiere den gewünschten Ton
- ❌ "Schreibe eine E-Mail"
- ✅ "Schreibe eine formelle E-Mail an einen Geschäftspartner mit höflichem und professionellem Ton"

**Schrittweise** - Komplexe Aufgaben in Schritte unterteilen
- ❌ "Analysiere und verbessere meinen Text"
- ✅ "Analysiere zuerst die Struktur meines Textes, dann prüfe die Grammatik, und schlage schliesslich Verbesserungen vor"

**Situation** - Gib Kontext
- ❌ "Was meinst du dazu?"
- ✅ "Ich bin Projektmanager in einem Software-Unternehmen. Was meinst du zu diesem Ansatz für agile Entwicklung?"

### Prompt-Techniken für bessere Ergebnisse

#### Chain-of-Thought Prompting

Lass den AI Assistant Schritt für Schritt denken:

```
Erkläre mir Schritt für Schritt, wie ich ein ELIZA-Projekt aufsetze:
1. Welche Voraussetzungen brauche ich?
2. Welche Schritte sind nötig?
3. Was sind häufige Probleme?

Denke laut und erkläre deine Überlegungen.
```

#### Role-Based Prompting

Weise dem AI Assistant eine Rolle zu:

```
Du bist ein erfahrener Marketing-Experte. Analysiere diese
Werbekampagne und gib professionelles Feedback mit konkreten
Verbesserungsvorschlägen.
```

#### Few-Shot Prompting

Gib Beispiele für das gewünschte Format:

```
Erstelle Produkt-Beschreibungen im folgenden Format:

Beispiel 1:
Produkt: Smartphone
Beschreibung: Das neueste Smartphone mit 6.5" Display, 128GB Speicher
und 5G-Unterstützung.
Highlights: • Grosses Display • Viel Speicher • Schnelles 5G

Jetzt erstelle eine Beschreibung für: Laptop
```

#### Negative Prompts

Sage explizit, was du NICHT möchtest:

```
Erstelle eine Zusammenfassung dieses Artikels.
NICHT: Füge keine eigene Meinung hinzu
NICHT: Erfinde keine zusätzlichen Fakten
NUR: Nutze Informationen aus dem Artikel
```

## Modell-Auswahl: Welches wofür?

Wähle das richtige Modell für deine Aufgabe:

### GPT-4 Turbo (Standard)

**Beste Verwendung:**
- ✅ Komplexe Analysen
- ✅ Lange Dokumente verarbeiten
- ✅ Code generieren und debuggen
- ✅ Mehrsprachige Aufgaben

**Weniger geeignet:**
- ❌ Einfache Fragen (überdimensioniert)
- ❌ Wenn Geschwindigkeit wichtiger als Qualität

### GPT-4o & GPT-4o Mini

**Beste Verwendung:**
- ✅ Schnelle Antworten
- ✅ Einfache bis mittlere Aufgaben
- ✅ Häufige Anfragen (kosteneffizient)

**Weniger geeignet:**
- ❌ Sehr komplexe Analysen
- ❌ Längste Kontextfenster nötig

### Gemini Pro & Flash

**Beste Verwendung:**
- ✅ Aktuelle Informationen (mit Web-Suche)
- ✅ Recherche und Faktenchecks
- ✅ Flash: Sehr schnelle Antworten

**Weniger geeignet:**
- ❌ Ohne Web-Suche für aktuelle Events
- ❌ Kreatives Schreiben (GPT-4 ist oft besser)

### Claude Sonnet

**Beste Verwendung:**
- ✅ Natürliche Konversation
- ✅ Code-Analyse und -Generierung
- ✅ Längere Dokumente

**Weniger geeignet:**
- ❌ Bildgenerierung (nutze DALL-E)

### DALL-E 3

**Beste Verwendung:**
- ✅ Bilder aus Textbeschreibungen
- ✅ Kreative Visualisierungen
- ✅ Marketing-Material

**Nur für:**
- Bildgenerierung (keine Textverarbeitung)

## Effektive Arbeitsabläufe

### Workflow 1: Dokumenten-Analyse

**Szenario:** Du hast ein 50-seitiges PDF und suchst spezifische Informationen

**Schritt 1:** Chat erstellen und Dokument hochladen

**Schritt 2:** Übersicht gewinnen
```
Fasse das Dokument in 5 Hauptpunkten zusammen.
```

**Schritt 3:** Spezifisch nachfragen
```
Welche Budget-Zahlen werden im Kapitel über Projektplanung genannt?
```

**Schritt 4:** Tiefergehende Analyse
```
Vergleiche die Budgetplanung mit den Risikofaktoren.
Wo könnten Kostenüberschreitungen drohen?
```

### Workflow 2: Content-Erstellung

**Szenario:** Du musst einen Blogpost schreiben

**Schritt 1:** Brainstorming
```
Gib mir 10 Ideen für einen Blogpost über Digitalisierung in Schweizer KMUs
```

**Schritt 2:** Struktur erstellen
```
Erstelle eine Gliederung für einen Blogpost über [gewähltes Thema]
mit Einleitung, 3 Hauptteilen und Fazit
```

**Schritt 3:** Entwurf schreiben
```
Schreibe den ersten Entwurf basierend auf dieser Gliederung.
Ton: Professionell aber zugänglich. Länge: 800-1000 Wörter
```

**Schritt 4:** Überarbeiten
```
Verbessere den Entwurf:
- Mache die Einleitung spannender
- Füge konkrete Beispiele hinzu
- Optimiere für SEO mit Fokus auf "Digitalisierung KMU Schweiz"
```

### Workflow 3: Code-Entwicklung

**Szenario:** Du entwickelst eine neue Funktion

**Schritt 1:** Anforderungen klären
```
Ich brauche eine Python-Funktion, die CSV-Dateien einliest und
Duplikate entfernt. Erkläre mir den besten Ansatz.
```

**Schritt 2:** Code generieren
```
Schreibe jetzt den Code mit:
- Error Handling
- Type Hints
- Docstrings
- Unit Tests
```

**Schritt 3:** Code Review
```
Analysiere diesen Code auf:
- Performance-Probleme
- Security-Issues
- Best Practices

Hier ist mein Code:
[Code einfügen]
```

**Schritt 4:** Dokumentation
```
Erstelle eine README-Dokumentation für diese Funktion mit
Verwendungsbeispielen und Erklärung der Parameter.
```

## Produktivitäts-Tipps

### Favorites nutzen

Markiere wichtige Chats als Favoriten:

**Wann Favoriten nutzen:**
- ✅ Häufig genutzte Chat-Vorlagen
- ✅ Wichtige Projekt-Chats
- ✅ Chats mit wertvollen Informationen

**Organisationstipp:**
- Maximal 10-15 Favoriten
- Regelmäßig aufräumen
- Aussagekräftige Titel verwenden

### Chat-Organisation

**Namenskonvention:**
```
[Kategorie] Spezifisches Thema - Datum

Beispiele:
[Marketing] Social Media Q1 2024
[Dev] Python Migration - 2024-03
[Support] FAQ Produktanfragen
```

**Archivierungs-Strategie:**
- Monatlich: Chats älter als 3 Monate archivieren
- Quartalsweise: Archiv durchsehen und aufräumen
- Jährlich: Alte Archive löschen

### Batch-Processing

Bearbeite ähnliche Aufgaben in einem Durchgang:

**Beispiel: Mehrere E-Mails schreiben**
```
Ich muss 5 E-Mails schreiben. Ich gebe dir jeweils Empfänger und Thema.
Schreibe alle 5 E-Mails in einem professionellen Ton.

E-Mail 1: An Kunde Müller, Thema: Projektverzögerung
E-Mail 2: An Lieferant Schmidt, Thema: Bestellung #1234
[...]
```

## Häufige Probleme und Lösungen

### Problem: Antworten sind zu allgemein

**Symptom:** Der AI Assistant gibt vage, allgemeine Antworten

**Lösung 1:** Füge mehr Kontext hinzu
```
❌ "Wie mache ich Marketing?"
✅ "Ich betreibe ein kleines Schweizer Software-Unternehmen (5 Mitarbeiter,
   B2B-Fokus). Welche 3 Marketing-Strategien mit kleinem Budget empfiehlst
   du mir für die nächsten 6 Monate?"
```

**Lösung 2:** Nutze die Systemrolle
```
Erstelle einen Chat mit Systemrolle:
"Du bist ein Marketing-Berater für Schweizer KMUs im B2B-Sektor.
Gib konkrete, umsetzbare Ratschläge mit Fokus auf geringe Budgets."
```

**Lösung 3:** Fordere Spezifität ein
```
"Gib mir keine allgemeinen Tipps, sondern 3 konkrete Aktionen mit
Schritt-für-Schritt Anleitungen."
```

### Problem: Falsche oder veraltete Informationen

**Symptom:** Der AI Assistant gibt Fakten an, die nicht stimmen

**Lösung 1:** Aktiviere Web-Suche (nur Gemini)
- Wechsle zu Gemini Pro
- Aktiviere "Web-Suche" in den Chat-Einstellungen

**Lösung 2:** Lade Dokumente als Wissensbasis
- Hochladen aktueller Dokumente
- Explizit darauf verweisen: "Nutze nur Informationen aus den hochgeladenen Dokumenten"

**Lösung 3:** Faktcheck erzwingen
```
"Prüfe diese Information auf Richtigkeit und gib mir Quellen an.
Wenn du unsicher bist, sag es deutlich."
```

**Lösung 4:** Stelle Folgefragen
```
"Wie aktuell ist diese Information? Auf welchen Daten basiert deine Antwort?"
```

### Problem: Antworten brechen ab

**Symptom:** Lange Antworten werden mittendrin abgebrochen

**Lösung 1:** Fordere Fortsetzung an
```
"Fahre fort wo du aufgehört hast"
```

**Lösung 2:** Teile die Aufgabe auf
```
❌ "Schreibe einen kompletten 5000-Wörter-Artikel"
✅ "Schreibe zuerst die Gliederung. Dann schreiben wir jeden
   Abschnitt einzeln."
```

**Lösung 3:** Nutze Modelle mit größerem Kontextfenster
- GPT-4 Turbo hat das größte Kontextfenster
- Besser für sehr lange Ausgaben

### Problem: Chat ist langsam oder hängt

**Symptom:** Antworten dauern sehr lange oder kommen nicht

**Lösung 1:** Wechsle das Modell
- Nutze GPT-4o Mini oder Gemini Flash für schnellere Antworten
- Besonders bei einfachen Anfragen

**Lösung 2:** Reduziere die Dokumentenanzahl
- Entferne unnötige Dokumente aus dem Chat
- Nutze nur relevante Dokumente (max. 10-20)

**Lösung 3:** Leere den Browser-Cache
- Browser-Einstellungen öffnen
- Cache und Cookies löschen
- Seite neu laden

**Lösung 4:** Versuche es erneut
- Aktualisiere die Seite (F5)
- Öffne einen neuen Chat
- Kontaktiere Support bei anhaltenden Problemen

### Problem: Spracheingabe funktioniert nicht

**Symptom:** Mikrofon-Symbol ist nicht verfügbar oder funktioniert nicht

**Lösung 1:** Prüfe Browser-Berechtigungen
- Browser-Einstellungen öffnen
- Mikrofon-Zugriff für ELIZA erlauben
- Seite neu laden

**Lösung 2:** Prüfe Administrator-Einstellungen
- Frage deinen ELIZA-Administrator
- Spracheingabe muss aktiviert sein

**Lösung 3:** Nutze alternativen Browser
- Chrome und Edge funktionieren am besten
- Firefox kann Einschränkungen haben

**Lösung 4:** Lade Audiodatei hoch
- Alternativ: Aufnahme außerhalb von ELIZA machen
- Als Datei hochladen

## Erweiterte Tipps für Power-User

### Multi-Turn-Conversations meistern

Nutze den Gesprächsverlauf strategisch:

**Technik 1: Referenzieren**
```
[Nach mehreren Nachrichten:]
"Kombiniere jetzt die Ansätze aus Nachricht 2 und 4, aber vermeide
die Probleme, die wir in Nachricht 6 besprochen haben."
```

**Technik 2: Iteratives Verfeinern**
```
1. "Erstelle einen Entwurf"
2. "Mache die Einleitung spannender"
3. "Füge konkrete Zahlen hinzu"
4. "Optimiere für Suchmaschinen"
```

**Technik 3: Perspektiven-Wechsel**
```
"Analysiere dieses Problem aus 3 Perspektiven:
1. Technisch
2. Geschäftlich
3. Benutzer-orientiert"
```

### Temperature optimal nutzen

Passe die Kreativität an deine Aufgabe an:

**0.0 - 0.3: Faktisch und präzise**
- Daten-Analyse
- Code-Generierung
- Technische Dokumentation
- Faktenchecks

**0.5 - 1.0: Ausgewogen**
- Allgemeine Texte
- E-Mails
- Erklärungen
- Standard-Nutzung

**1.5 - 2.0: Kreativ und variabel**
- Marketing-Texte
- Brainstorming
- Kreatives Schreiben
- Storytelling

### Prompt-Chaining für komplexe Aufgaben

Verkette mehrere Prompts für bessere Ergebnisse:

**Beispiel: Blogpost erstellen**
```
Prompt 1: "Analysiere diese Keywords und schlag 5 Blog-Themen vor"
[Antwort erhalten]

Prompt 2: "Erstelle eine detaillierte Gliederung für Thema #3"
[Antwort erhalten]

Prompt 3: "Schreibe die Einleitung basierend auf dieser Gliederung"
[Antwort erhalten]

Prompt 4: "Schreibe Hauptteil 1"
[Usw.]
```

## Datenschutz und Sicherheit

### Was du NICHT teilen solltest

> **⚠️ Wichtig:** Teile niemals folgende Informationen:

- ❌ Passwörter oder Zugangsdaten
- ❌ Kreditkarten- oder Bankdaten
- ❌ Sozialversicherungsnummern
- ❌ Persönliche Gesundheitsinformationen
- ❌ Vertrauliche Geschäftsinformationen
- ❌ Persönliche Adressen oder Telefonnummern
- ❌ Interne System-Zugänge

### Sichere Nutzung

**✅ Empfohlene Praktiken:**

**Anonymisiere Daten**
```
❌ "Analysiere die Verkaufszahlen von Max Mustermann"
✅ "Analysiere die Verkaufszahlen von Mitarbeiter A"
```

**Nutze Platzhalter**
```
❌ "Firma Geheim AG, Musterstrasse 123, 8000 Zürich"
✅ "Firma X, Beispielstrasse, Schweiz"
```

**Vorsicht bei Screenshots**
- Entferne sensible Daten vor dem Hochladen
- Verpixle Namen, Adressen, Zahlen

## Häufige Fragen (FAQ)

### Kosten und Nutzung

**Frage: Kostet die Nutzung des AI Assistants?**

Antwort: Das hängt von deiner ELIZA-Lizenz ab. Frage deinen Administrator nach den Nutzungsbedingungen und eventuellen Limits.

**Frage: Gibt es Nutzungslimits?**

Antwort: Möglicherweise. Einige ELIZA-Installationen haben:
- Nachrichtenlimits pro Tag/Monat
- Limits für Bildgenerierung
- Größenbeschränkungen für Dokumente

Kontaktiere deinen Administrator für Details.

**Frage: Welches Modell verbraucht am meisten Ressourcen?**

Antwort: Bildgenerierung mit DALL-E ist am ressourcenintensivsten, gefolgt von GPT-4 Turbo für lange Dokumente.

### Technische Fragen

**Frage: Welche Browser werden unterstützt?**

Antwort: Offiziell unterstützt:
- Chrome (empfohlen)
- Firefox
- Edge
- Safari (mit Einschränkungen bei Spracheingabe)

**Frage: Funktioniert der AI Assistant auf Mobilgeräten?**

Antwort: Ja, ELIZA ist responsiv. Einige Funktionen (z.B. Drag & Drop für Dateien) funktionieren auf Mobilgeräten eingeschränkt.

**Frage: Kann ich offline arbeiten?**

Antwort: Nein, der AI Assistant benötigt eine Internetverbindung.

### Funktionalität

**Frage: Kann der AI Assistant E-Mails direkt versenden?**

Antwort: Nein, er kann E-Mail-Entwürfe erstellen, die du dann kopieren und versenden musst.

**Frage: Kann ich den AI Assistant trainieren?**

Antwort: Nein, du kannst die Modelle nicht trainieren. Aber du kannst:
- Dokumente als Wissensbasis hochladen
- Systemrollen definieren
- Beispiel-Prompts in Vorlagen hinterlegen

**Frage: Werden meine Chats für KI-Training verwendet?**

Antwort: Das hängt vom AI-Provider ab. Standard OpenAI/Gemini Chats könnten für Training verwendet werden. Frage deinen Administrator nach der spezifischen Konfiguration.

**Frage: Kann der AI Assistant Dateien erstellen (Excel, PDF)?**

Antwort: Nur indirekt:
- Er kann Inhalte generieren
- Du kannst Chats als Word-Dokument exportieren
- Für Excel/PDF: Kopiere den Inhalt und formatiere manuell

## Zusammenfassung

Du hast gelernt:
- ✅ Die 5-S-Regel für bessere Prompts
- ✅ Welches Modell für welche Aufgabe am besten geeignet ist
- ✅ Effektive Arbeitsabläufe für verschiedene Szenarien
- ✅ Produktivitäts-Tipps und Shortcuts
- ✅ Lösungen für häufige Probleme
- ✅ Erweiterte Techniken für Power-User
- ✅ Datenschutz-Best Practices
- ✅ Antworten auf häufige Fragen

## Weiterführende Ressourcen

**Innerhalb von ELIZA:**
- [Kapitel 1: Erste Schritte]({{< ref "01-erste-schritte" >}}) - Grundlagen
- [Kapitel 2: AI-Assistent nutzen]({{< ref "02-ki-assistent" >}}) - Alle Funktionen
- [Kapitel 3: Dokumentensuche]({{< ref "03-dokumente-suche" >}}) - Wissensbasis optimieren
- [Kapitel 4: Chatspaces]({{< ref "04-integration" >}}) - Team-Zusammenarbeit

**Support:**
- Kontaktiere deinen ELIZA-Administrator
- Nutze die ELIZA-Support-Kanäle
- Besuche die ELIZA-Community (falls verfügbar)

---

**Du bist jetzt bereit, den AI Assistant wie ein Profi zu nutzen!** 🚀

**Tipp zum Schluss:** Experimentiere, probiere verschiedene Techniken aus und finde heraus, was für deine Arbeitsweise am besten funktioniert. Der AI Assistant wird mit der Zeit immer wertvoller, je besser du ihn kennenlernst!
