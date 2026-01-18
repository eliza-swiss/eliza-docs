---
title: "Dokumentensuche und Wissensbasis"
description: ""
weight: "3"
tags:
  - "documents"
  - "embeddings"
  - "knowledge-base"
  - "search"
  - "context"
---


# Dokumentensuche und Wissensbasis

Lerne, wie du Dokumente als Wissensbasis für den AI Assistant verwendest. Mit dieser Funktion kann der AI Assistant spezifisches Wissen aus deinen Dokumenten nutzen und präzise Antworten auf Basis deiner Unterlagen geben.

## Was ist eine Wissensbasis?

Eine Wissensbasis ist eine Sammlung von Dokumenten, die der AI Assistant als Kontext für seine Antworten nutzt. Wenn du Dokumente hochlädst, werden sie analysiert und in eine durchsuchbare Form gebracht.

### Vorteile einer Wissensbasis

**Präzise Antworten**
- Der AI Assistant antwortet basierend auf deinen eigenen Dokumenten
- Fakten und Informationen stammen aus deiner Wissensbasis
- Keine Halluzinationen oder erfundene Informationen

**Kontextbezogene Unterstützung**
- Beantworte Fragen zu spezifischen Projekten oder Themen
- Analysiere und fasse lange Dokumente zusammen
- Finde Informationen in großen Dokumentensammlungen

**Zeit sparen**
- Kein manuelles Durchsuchen von Dokumenten mehr
- Schneller Zugriff auf relevante Informationen
- Automatische Zusammenfassungen und Analysen

## Unterstützte Dateiformate

Der AI Assistant kann folgende Dokumenttypen verarbeiten:

| Format | Beschreibung | Ideal für |
|--------|--------------|-----------|
| **PDF** | Adobe PDF-Dokumente | Berichte, Handbücher, Formulare |
| **DOCX** | Microsoft Word | Texte, Dokumentationen |
| **TXT** | Textdateien | Notizen, Code, Logs |
| **MD** | Markdown | Dokumentationen, READMEs |
| **XLSX** | Microsoft Excel | Daten, Tabellen (wird als Text verarbeitet) |
| **PPTX** | Microsoft PowerPoint | Präsentationen (Text wird extrahiert) |

> **💡 Tipp:** PDFs und Word-Dokumente funktionieren am besten, da hier Texte und Struktur gut erhalten bleiben.

## Dokumente hochladen

### Einzelne Dokumente hochladen

**Schritt 1:** Öffne den Chat, dem du Dokumente hinzufügen möchtest

**Schritt 2:** Klicke auf **"Dateien"** im Chat-Menü

**Schritt 3:** Klicke auf **"Datei hochladen"** (grüner Button)

**Schritt 4:** Wähle das Dokument von deinem Computer aus

**Schritt 5:** Die Datei wird hochgeladen und verarbeitet

**Schritt 6:** Du siehst die Datei in der Liste der hochgeladenen Dokumente

> **💡 Tipp:** Große Dateien (>10 MB) können eine Weile brauchen. Warte, bis der Upload abgeschlossen ist.

### Mehrere Dokumente auf einmal hochladen

**Schritt 1:** Klicke auf **"Dateien"** im Chat-Menü

**Schritt 2:** Ziehe mehrere Dateien gleichzeitig in den Upload-Bereich (Drag & Drop)

**Schritt 3:** Alternativ: Wähle mehrere Dateien im Datei-Dialog aus (Strg + Klick oder Cmd + Klick)

**Schritt 4:** Alle Dateien werden nacheinander hochgeladen

> **💡 Tipp:** Du kannst bis zu 10 Dateien gleichzeitig hochladen. Für größere Mengen lade die Dateien in Gruppen hoch.

## Dokumente verwalten

### Hochgeladene Dokumente anzeigen

**Schritt 1:** Öffne den Chat

**Schritt 2:** Klicke auf **"Dateien"** im Chat-Menü

**Schritt 3:** Du siehst eine Liste aller hochgeladenen Dokumente

Informationen die angezeigt werden:
- **Titel**: Dateiname
- **Dateigröße**: Größe der Datei
- **Upload-Datum**: Wann wurde die Datei hochgeladen

### Dokument öffnen oder herunterladen

**Schritt 1:** Gehe zur Dateiliste

**Schritt 2:** Klicke auf den Dateinamen

**Schritt 3:** Das Dokument wird angezeigt oder heruntergeladen

> **💡 Tipp:** Für Office-Dokumente (Word, Excel, PowerPoint) kannst du die Online-Bearbeitung nutzen, falls konfiguriert.

### Dokument umbenennen

**Schritt 1:** Klicke auf das **Bearbeiten-Symbol** neben dem Dokument

**Schritt 2:** Ändere den Titel im Feld **"Titel"**

**Schritt 3:** Klicke auf **"Speichern"**

> **💡 Tipp:** Verwende aussagekräftige Namen wie "Projekthandbuch_V2.pdf" statt "dokument123.pdf"

### Dokument löschen

**Schritt 1:** Klicke auf das **Löschen-Symbol** (Papierkorb) neben dem Dokument

**Schritt 2:** Bestätige die Löschung

> **⚠️ Wichtig:** Gelöschte Dokumente können nicht wiederhergestellt werden! Die Wissensbasis wird neu aufgebaut ohne dieses Dokument.

## Mit Dokumenten chatten

Sobald Dokumente hochgeladen sind, kannst du Fragen dazu stellen:

### Allgemeine Fragen zu Dokumenten

**Beispiele:**

- "Fasse das Dokument zusammen"
- "Was sind die Hauptpunkte in diesem Dokument?"
- "Erkläre mir das Kapitel über [Thema]"
- "Welche Anforderungen werden im Dokument genannt?"

> **💡 Tipp:** Der AI Assistant durchsucht automatisch alle hochgeladenen Dokumente und findet die relevanten Informationen.

### Spezifische Fragen

**Beispiele:**

- "Was steht auf Seite 15 über die Budgetplanung?"
- "Welche Risiken werden im Projektplan genannt?"
- "Finde alle Erwähnungen von [Begriff] in den Dokumenten"
- "Vergleiche die Anforderungen aus Dokument A und Dokument B"

### Zitate und Quellenangaben

Der AI Assistant zitiert aus den Dokumenten:

**Beispiel-Antwort:**
```
Laut dem Projekthandbuch (Seite 12) beträgt das Budget für Phase 1
insgesamt 50.000 CHF. Die Aufteilung ist wie folgt:
- Personal: 30.000 CHF
- Material: 15.000 CHF
- Sonstiges: 5.000 CHF
```

> **💡 Tipp:** Frage nach spezifischen Quellenangaben, wenn du die Original-Passage im Dokument nachschlagen möchtest.

## Wie funktioniert die Dokumentensuche?

Die Dokumentensuche basiert auf modernen Technologien namens **Embeddings** und **Vector Search** (Vektor-Suche):

### Schritt 1: Dokument verarbeiten

Wenn du ein Dokument hochlädst:
1. Der Text wird aus dem Dokument extrahiert
2. Der Text wird in kleinere Abschnitte unterteilt (sogenannte "Chunks")
3. Jeder Abschnitt wird in eine mathematische Darstellung (Embedding) umgewandelt

### Schritt 2: Suche durchführen

Wenn du eine Frage stellst:
1. Deine Frage wird in die gleiche mathematische Form umgewandelt
2. Das System findet die relevantesten Dokumentenabschnitte
3. Diese Abschnitte werden dem AI Assistant als Kontext gegeben

### Schritt 3: Antwort generieren

Der AI Assistant:
1. Liest die relevanten Dokumentenabschnitte
2. Beantwortet deine Frage basierend auf diesen Informationen
3. Zitiert bei Bedarf aus den Dokumenten

> **💡 Tipp:** Je präziser deine Frage, desto besser kann das System die relevanten Dokument-Abschnitte finden.

## Was sind Embeddings?

Embeddings sind die Technologie, die hinter der intelligenten Dokumentensuche steckt. Hier erfährst du, wie sie funktionieren und wie du sie optimal nutzt.

### Das Konzept einfach erklärt

**Stell dir vor:**
- Jedes Wort, jeder Satz hat eine "Bedeutung" im Raum
- Ähnliche Themen liegen im Raum nah beieinander
- Das System findet Dokument-Abschnitte, die deiner Frage "nahe" sind

**Beispiel:**
- Deine Frage: "Was ist das Projektbudget?"
- Das System findet Abschnitte mit Wörtern wie: "Budget", "Kosten", "Finanzen", "Aufwand"
- Auch wenn die genauen Worte nicht vorkommen, findet es sinnverwandte Inhalte

### Technische Details (für Interessierte)

**Embedding-Prozess:**
1. Jedes Dokument wird in Abschnitte à ca. 2000 Zeichen unterteilt (optimiert für Excel und strukturierte Daten)
2. Jeder Abschnitt wird mit OpenAI's Embedding-Modell in einen 1536-dimensionalen Vektor umgewandelt
3. Diese Vektoren werden in einer Datenbank gespeichert (Vector Store)

**Suche:**
1. Deine Frage wird ebenfalls in einen Vektor umgewandelt
2. Das System vergleicht deinen Frage-Vektor mit allen Dokument-Vektoren
3. Die 50 ähnlichsten Abschnitte werden gefunden
4. Der AI Assistant erhält diese Abschnitte als Kontext

> **💡 Technischer Hintergrund:** ELIZA nutzt LlamaIndex als Framework für Embeddings und OpenAI's text-embedding-ada-002 Modell für die Vektor-Erstellung.

### Vorteile von Embeddings

**Semantisches Verständnis**
- ✅ Findet auch sinnverwandte Begriffe
- ✅ "Budget" findet auch "Kosten", "Finanzen", "Aufwand"
- ✅ Sprachunabhängig innerhalb verwandter Sprachen

**Kontextbezogenes Suchen**
- ✅ Berücksichtigt den Kontext der Frage
- ✅ "Apfel" im Kontext "Obst" vs. "Apple" im Kontext "Computer"
- ✅ Findet relevante Passagen, nicht nur Schlüsselwörter

**Flexibilität**
- ✅ Funktioniert auch bei Tippfehlern
- ✅ Findet Informationen in verschiedenen Formulierungen
- ✅ Keine exakte Wort-Übereinstimmung nötig

### Einschränkungen von Embeddings

**Strukturierte Daten (Tabellen, Zahlen)**

Embeddings funktionieren am besten mit **beschreibendem Text**. Bei reinen Zahlen oder Tabellen gibt es Einschränkungen:

❌ **Schwierig für Embeddings:**
```
Name: Borth Werner
Position: Buchhalter
Gehalt: 14404
```

✅ **Besser für Embeddings:**
```
Mitarbeiter Borth Werner arbeitet als Buchhalter mit einem
Jahresgehalt von 14.404 CHF. Er ist seit 2020 im Unternehmen tätig.
```

**Warum?** Embeddings suchen nach **semantischer Ähnlichkeit** (Bedeutungs-Nähe), nicht nach exakten Zahlen. Reine Zahlen haben keine "Bedeutung" im semantischen Raum.

**Große Dokumentensammlungen**

Bei sehr vielen Dokumenten kann die Suche ungenau werden:

- ⚠️ **Optimal**: 5-20 Dokumente pro Chat
- ⚠️ **Maximal empfohlen**: 30-50 Dokumente
- ❌ **Problematisch**: 100+ Dokumente in einem Chat

**Grund:** Mehr Dokumente = mehr Abschnitte = schwieriger die wirklich relevanten zu finden.

## Embeddings optimal nutzen

Hier sind die wichtigsten Tipps, um die besten Ergebnisse mit der Embedding-basierten Suche zu erzielen:

### ✅ Empfohlene Dokumenten-Formate

**Fließtext mit Kontext (BESTE Ergebnisse)**
- ✅ Berichte, Handbücher, Dokumentationen
- ✅ Protokolle, Notizen, Zusammenfassungen
- ✅ E-Mails, Korrespondenzen
- ✅ Word-Dokumente, PDFs mit Text

**Strukturierte Daten mit Beschreibungen (GUTE Ergebnisse)**
- ✅ Excel-Tabellen mit **Spalten-Überschriften** und **Zeilen-Beschreibungen**
- ✅ PDFs mit Text und erklärenden Absätzen
- ✅ Präsentationen mit aussagekräftigen Texten

**Reine Daten ohne Kontext (EINGESCHRÄNKTE Ergebnisse)**
- ⚠️ Excel-Tabellen mit nur Zahlen und Kurz-Codes
- ⚠️ Rohe Datenbank-Exports
- ⚠️ Listen ohne Beschreibungen

### ✅ Dokumente vorbereiten

**Für Excel-Dateien:**
1. Füge **beschreibende Spalten-Überschriften** hinzu
2. Verwende **aussagekräftige Zeilen-Bezeichnungen**
3. Füge eine **Erläuterung** oder **Legende** auf dem ersten Blatt hinzu

**Beispiel für gute Excel-Struktur:**
```
Gehaltsübersicht 2024 - Abteilung IT

Diese Tabelle zeigt die Jahresgehälter aller IT-Mitarbeiter
inklusive Bonuszahlungen und Sozialleistungen.

Mitarbeiter-Name | Position | Jahresgehalt (CHF) | Bonus (CHF)
Borth Werner | Buchhalter | 85.000 | 5.000
Müller Anna | Senior Developer | 95.000 | 8.000
```

**Für PDF-Dokumente:**
1. Verwende **durchsuchbare PDFs** (kein gescanntes Bild)
2. Strukturiere mit **Überschriften** und **Absätzen**
3. Füge **Inhaltsverzeichnisse** für lange Dokumente hinzu

### ✅ Fragen richtig formulieren

**Präzise Fragen stellen**

❌ **Ungenau:** "Was steht da?"

✅ **Besser:** "Welches Gehalt hat Borth Werner laut der Gehaltsübersicht?"

❌ **Zu allgemein:** "Zeige mir die Zahlen"

✅ **Besser:** "Zeige mir die Umsatzzahlen aus dem Quartalsbericht Q3 2024"

**Kontext in der Frage angeben**

✅ **Mit Kontext:** "Welche Mitarbeiter in der IT-Abteilung haben das höchste Gehalt?"

✅ **Mit Datei-Bezug:** "Suche in der Datei 'Gehaltsübersicht_2024.xlsx' nach dem höchsten Gehalt"

✅ **Mit beschreibenden Begriffen:** "Zeige mir die Top-Verdiener aus der Gehaltsliste"

### ✅ Dokumenten-Organisation

**Thematisch gruppieren**

✅ **Empfohlen:**
- Chat 1: "Projekt Alpha - Alle Projektdokumente"
- Chat 2: "Gehaltsabrechnungen 2024"
- Chat 3: "Marketing-Strategie Q1-Q4"

❌ **Nicht empfohlen:**
- Ein Chat mit allen Dokumenten aus verschiedenen Projekten vermischt

**Anzahl begrenzen**

✅ **Optimal:** 5-20 Dokumente pro Chat

⚠️ **Bei vielen Dokumenten:**
- Teile in mehrere thematische Chats auf
- Verwende mehrere Chats nach Zeitraum (Q1, Q2, Q3, Q4)
- Erstelle separate Chats nach Abteilung oder Projekt

**Versionierung**

✅ **Gute Praxis:**
- Verwende klare Dateinamen: `Projektplan_v2.1_2024.pdf`
- Lösche alte Versionen
- Lade neue Versionen mit Versionsnummer hoch

### ✅ Alternative Strategien bei Problemen

**Wenn Embeddings nicht funktionieren:**

**Strategie 1: Direkten Text-Kontext liefern**

Anstatt zu fragen: "Wer hat das höchste Gehalt?"

Kopiere die Tabelle direkt in die Frage:
```
Hier ist die Gehaltsliste:
- Borth Werner: 85.000 CHF
- Müller Anna: 95.000 CHF
- Schmidt Peter: 78.000 CHF

Wer hat das höchste Gehalt?
```

**Strategie 2: Datei-Export als Text**

Bei Excel-Dateien mit vielen Zahlen:
1. Exportiere die Tabelle als CSV
2. Öffne mit einem Text-Editor
3. Füge beschreibende Zeilen hinzu
4. Speichere als `.txt` Datei
5. Lade die Text-Datei hoch

**Strategie 3: Weniger Dokumente hochladen**

Wenn du 50 Dokumente hast:
- Lade nur die 5-10 relevantesten hoch
- Erstelle mehrere Chats nach Thema
- Nutze präzise Dateinamen für bessere Orientierung

## Technische Parameter (für Administratoren)

Falls du Administrator bist oder technische Details benötigst:

**Aktuelle Embedding-Konfiguration:**
- **Chunk-Größe**: 2048 Zeichen (optimiert für Excel-Daten)
- **Chunk-Overlap**: 200 Zeichen (Überlappung zwischen Abschnitten)
- **Similarity Top-K**: 50 (Anzahl der abgerufenen ähnlichsten Dokument-Abschnitte)
- **Embedding-Modell**: OpenAI text-embedding-ada-002
- **Vector Store**: LlamaIndex VectorStoreIndex

**Was bedeutet das?**
- Jedes Dokument wird in Abschnitte à 2048 Zeichen aufgeteilt
- Bei einer Frage werden die 50 ähnlichsten Abschnitte gefunden
- Diese Parameter wurden für bessere Excel-Verarbeitung optimiert

## Best Practices für die Wissensbasis

### ✅ Empfohlene Praktiken

**Dokumente gut benennen**
- ✅ "Projekthandbuch_Marketing_2024.pdf"
- ❌ "dokument.pdf"

**Dokumentenqualität**
- Verwende klare, gut strukturierte Dokumente
- PDF mit durchsuchbarem Text (nicht gescannte Bilder)
- Vermeide stark verschachtelte oder komplexe Layouts

**Dokumentengröße**
- Optimal: 1-10 MB pro Dokument
- Maximal: 50 MB pro Dokument
- Teile sehr große Dokumente in kleinere Teile auf

**Dokumentenanzahl**
- Optimal: 5-20 Dokumente pro Chat
- Maximal: 50 Dokumente
- Für sehr viele Dokumente: Nutze mehrere Chats nach Thema

**Aktualität**
- Halte Dokumente aktuell
- Lösche veraltete Versionen
- Lade neue Versionen mit klaren Versionsnummern hoch

### ❌ Häufige Fehler

**Zu viele Dokumente auf einmal**
- Vermeide: 100 Dokumente in einem Chat hochladen
- Problem: Die Suche wird ungenau und langsam
- Lösung: Organisiere Dokumente thematisch in verschiedenen Chats

**Schlechte Dokumentenqualität**
- Vermeide: Gescannte PDFs ohne OCR
- Problem: Text kann nicht extrahiert werden
- Lösung: Nutze PDF mit durchsuchbarem Text oder OCR-Tool

**Unklare Fragen**
- Vermeide: "Was steht da?"
- Problem: System kann relevante Abschnitte nicht finden
- Lösung: "Was sind die Projektziele in Kapitel 3?"

**Dokumente in falscher Sprache**
- Vermeide: Deutsche Fragen zu englischen Dokumenten
- Problem: Übersetzung kann Informationen verfälschen
- Lösung: Stelle Fragen in der Sprache der Dokumente

## Erweiterte Funktionen

### Dokumente kombinieren

Du kannst Informationen aus mehreren Dokumenten kombinieren:

**Beispiel:**
"Vergleiche die Budgetplanung aus dem Projekthandbuch mit den tatsächlichen Kosten aus dem Quartalsbe richt. Wo gibt es Abweichungen?"

### Dokumente analysieren

Lasse den AI Assistant Dokumente analysieren:

**Beispiele:**
- "Analysiere die Risiken in diesem Projektplan"
- "Erstelle eine Zusammenfassung der wichtigsten Punkte"
- "Welche Empfehlungen werden im Bericht gegeben?"
- "Finde Widersprüche zwischen Dokument A und B"

### Tabellen und Daten extrahieren

Auch Tabellen können verarbeitet werden:

**Beispiel:**
"Welche Umsatzzahlen enthält die Tabelle auf Seite 5?"

> **💡 Tipp:** Bei komplexen Tabellen funktioniert die Excel-Datei oft besser als ein PDF.

## Wissensbasis optimieren

### Dokumente aktualisieren

**Schritt 1:** Lösche die alte Version des Dokuments

**Schritt 2:** Lade die neue Version hoch

**Schritt 3:** Die Wissensbasis wird automatisch neu aufgebaut

> **💡 Tipp:** Verwende Versionsnummern im Dateinamen (z.B. "Handbuch_v2.1.pdf")

### Wissensbasis neu aufbauen

Manchmal ist es sinnvoll, die Wissensbasis komplett neu aufzubauen:

**Schritt 1:** Gehe zu **"Dateien"** im Chat-Menü

**Schritt 2:** Klicke auf **"Wissensbasis neu aufbauen"**

**Schritt 3:** Alle Dokumente werden neu verarbeitet

> **⚠️ Wichtig:** Das Neu-Aufbauen kann bei vielen Dokumenten einige Minuten dauern.

### Systemrolle für dokumentenbasierte Chats

Du kannst die Systemrolle anpassen, um bessere Ergebnisse zu erzielen:

**Schritt 1:** Öffne die Chat-Einstellungen

**Schritt 2:** Klicke auf **"Systemrolle ändern"**

**Schritt 3:** Füge spezifische Anweisungen hinzu

**Beispiel:**
```
Du bist ein Assistent für Projektmanagement. Beantworte Fragen nur
basierend auf den hochgeladenen Projektdokumenten. Zitiere immer die
Quelle (Dokumentname und Seite).
```

## Häufige Fragen (FAQ)

### Wie viele Dokumente kann ich hochladen?

Technisch unbegrenzt, aber für beste Ergebnisse empfehlen wir maximal 20-30 Dokumente pro Chat.

### Kann ich passwortgeschützte PDFs hochladen?

Nein, passwortgeschützte Dokumente müssen erst entsperrt werden.

### Werden meine Dokumente mit dem AI-Modell trainiert?

Nein, deine Dokumente werden nur für diesen Chat verwendet und nicht für das Training von Modellen genutzt.

### Wie lange bleiben Dokumente gespeichert?

Dokumente bleiben gespeichert, bis du sie löschst oder den Chat löschst.

### Kann der AI Assistant Bilder in PDFs lesen?

Nur wenn das PDF durchsuchbaren Text enthält. Reine Bild-PDFs müssen erst mit OCR verarbeitet werden.

### Was passiert, wenn ich ein Dokument lösche?

Das Dokument wird aus der Wissensbasis entfernt. Bereits geführte Unterhaltungen bleiben erhalten, aber zukünftige Antworten berücksichtigen dieses Dokument nicht mehr.

### Kann ich Dokumente zwischen Chats kopieren?

Nein, Dokumente sind spezifisch für einen Chat. Du musst sie erneut hochladen.

### Funktioniert die Dokumentensuche auch in anderen Sprachen?

Ja, die Dokumentensuche funktioniert in vielen Sprachen. Stelle Fragen in der gleichen Sprache wie die Dokumente.

## Zusammenfassung

Du hast gelernt:
- ✅ Was eine Wissensbasis ist und wie sie funktioniert
- ✅ Welche Dateiformate unterstützt werden
- ✅ Wie du Dokumente hochlädst und verwaltest
- ✅ Wie du Fragen zu Dokumenten stellst
- ✅ Wie die Dokumentensuche technisch funktioniert
- ✅ Best Practices für die Wissensbasis
- ✅ Wie du die Wissensbasis optimierst

## Nächste Schritte

- **[Kapitel 4: Chatspaces]({{< ref "04-integration" >}})** - Organisiere Chats und arbeite im Team
- **[Kapitel 5: Tipps und Tricks]({{< ref "05-tipps" >}})** - Werde zum Power-User
- **[Kapitel 2: AI-Assistent]({{< ref "02-ki-assistent" >}})** - Vertiefe dein Wissen über Chat-Funktionen

---

**Viel Erfolg beim Arbeiten mit Dokumenten!** 🚀
