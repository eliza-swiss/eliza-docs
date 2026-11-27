---
title: "Vorlagen erstellen"
description: ""
weight: "3"
tags:
  - "templates"
  - "formtemplate"
  - "wizard"
  - "questions"
  - "layout"
---


# Vorlagen erstellen

Formular-Vorlagen sind das Herzstück des Forms-Moduls. Eine Vorlage definiert, welche Fragen in welcher Reihenfolge gestellt werden und wie das Formular aussieht.

## 🎯 Was du in diesem Kapitel lernst

- Vorlagen mit dem 3-Schritt-Wizard erstellen
- Fragen hinzufügen und konfigurieren
- Fragen bearbeiten und anordnen
- Layout-Optionen nutzen (volle/halbe/drittel Breite)
- Mit Folgeformularen verzweigen
- Quiz- und Checklisten-Einstellungen

---

## 📋 Vorlage erstellen: 3-Schritt-Wizard

Der Forms-Wizard führt dich in 3 einfachen Schritten zur fertigen Formular-Vorlage.

### Schritt 1: Ordner wählen

> **Schritt 1/3: Ordner wählen**
>
> Wähle einen Ordner aus der Ordner-Übersicht:
> - Mitarbeiterbefragungen
> - Audits und Checklisten
> - Schulungen
>
> Klicke dann auf **[Weiter]**

**Aktion:**

1. Wähle den Ordner aus, in dem die Vorlage gespeichert werden soll
2. Klicke auf den Button **"Ordner wählen"**
3. Klicke auf **"Weiter"**

> **💡 Tipp:** Der Ordner bestimmt die Berechtigungen für die Vorlage. Wähle einen Ordner, auf den dein Team Zugriff hat.

---

### Schritt 2: Basis-Informationen

> **Schritt 2/3: Basis-Informationen**
>
> - **Titel**: Name der Vorlage eingeben
> - **Beschreibung**: Kurze Erklärung zum Formular
> - **Modus**: Formular / Quiz / Checkliste wählen
>
> Klicke dann auf **[Weiter]**

**Felder ausfüllen:**

- **Titel**: Sprechender Name für die Vorlage (z.B. "Mitarbeiterzufriedenheit 2025")
- **Beschreibung**: Kurze Erklärung, wofür das Formular verwendet wird
- **Modus**: Wähle zwischen:
  - **Formular**: Normales Formular zum Ausfüllen
  - **Test**: Nur ein Versuch, mit Punktevergabe und Bestehensgrenze
  - **Quiz**: Mehrere Versuche möglich, mit Feedback
  - **Checkliste**: Audit-Checkliste mit Erfüllungsgrad
  - **Abstimmung**: Umfrage mit Aggregation der Antworten

**Erweiterte Einstellungen:**

**Quiz-Einstellungen** (nur bei Quiz-Modus):

- Bestehensgrenze: z.B. 70%
- Korrekte Antworten anzeigen
- Fragen zufällig anordnen

**Formular-Optionen:**

- Öffentliches Formular (Link-Sharing)
- Anonyme Einsendungen erlauben
- Mehrere Einsendungen pro Person

> **⚠️ Wichtig:** Bei Quiz-Modus müssen später die korrekten Antworten definiert werden!

**Aktion:**
- Fülle alle Pflichtfelder aus
- Wähle optional erweiterte Einstellungen
- Klicke auf **"Weiter"**

---

### Schritt 3: Fragen hinzufügen

> **Schritt 3/3: Fragen hinzufügen**
>
> **Neue Frage hinzufügen:**
>
> - Fragetyp auswählen (Text, E-Mail, Skala, etc.)
> - Fragetext eingeben
>
> **Aktuelle Fragen:**
>
> 1. Wie heisst du? [Text]
> 2. E-Mail-Adresse [Email]
> 3. Zufriedenheit (1-10) [Skala]
>
> Klicke auf **[Speichern und beenden]**

**Fragen auswählen:**

1. **Filtern** nach Kategorie oder Suchbegriff
2. **Ankreuzen** der gewünschten Fragen
3. **Hinzufügen** mit Button **"Ausgewählte Fragen hinzufügen"**
4. **Reihenfolge** per Drag & Drop anpassen
5. **Speichern** mit Button **"Speichern und beenden"**

> **💡 Tipp:** Du kannst jederzeit später weitere Fragen hinzufügen oder entfernen.

---

## 🔧 Fragen bearbeiten und anordnen

Nach dem Erstellen der Vorlage kannst du Fragen weiter anpassen.

### Fragen-Liste verwalten

In der Vorlagen-Detailansicht siehst du alle Fragen in einer übersichtlichen Tabelle:

| # | Frage | Typ | Pflicht | Breite | Aktionen |
|---|-------|-----|---------|--------|----------|
| 1 | Wie heißt du? | Text | ✅ | Voll | ⚙️ ✏️ 🗑️ |
| 2 | E-Mail-Adresse | Email | ✅ | Voll | ⚙️ ✏️ 🗑️ |
| 3 | Zufriedenheit | Skala | ❌ | Halb | ⚙️ ✏️ 🗑️ |

**Aktionen:**

- **⚙️ Optionen bearbeiten**: Konfiguriere fragenspezifische Einstellungen
- **✏️ Bearbeiten**: Ändere Fragetext, Hilfetext und Pflichtfeld-Status
- **🗑️ Entfernen**: Lösche die Frage aus der Vorlage
- **↕️ Drag & Drop**: Ziehe Fragen am Griff mit den sechs Punkten, um die Reihenfolge zu ändern. Auf Touch-Geräten hältst du den Griff zuerst kurz ruhig (350 ms) und ziehst anschliessend die Frage an die gewünschte Position. Wenn du direkt wischst, scrollst du stattdessen durch das Formular. Mit der Maus kannst du sofort ziehen.

---

### Frage bearbeiten

Klicke auf das **Bearbeiten-Icon (✏️)** um eine Frage anzupassen:

**Frage bearbeiten - Formular:**

| Feld | Beschreibung |
|------|--------------|
| Fragetext | Der angezeigte Fragetext |
| Hilfetext | Zusätzliche Erklärung unter der Frage |
| Pflichtfeld | Muss ausgefüllt werden (Ja/Nein) |
| Nur für Admin | Versteckt die Frage vor normalen Benutzern |
| Spaltenbreite | Volle Breite / Halbe Breite / Drittel Breite |

**Einstellungen:**

- **Fragetext**: Ändere den Fragetext
- **Hilfetext**: Zusätzliche Erklärung unter der Frage
- **Pflichtfeld**: Muss ausgefüllt werden ✅ oder optional ❌
- **Nur für Admin sichtbar**: Verstecke Frage vor normalen Benutzern
- **Spaltenbreite**: Layout-Option (siehe unten)

---

### Fragenspezifische Optionen

Manche Fragetypen haben zusätzliche Konfigurationsoptionen. Klicke auf **Optionen bearbeiten (⚙️)**:

#### Bewertungsskala-Optionen

**Bewertungsskala konfigurieren:**

| Option | Beschreibung |
|--------|--------------|
| **Darstellung** | Slider / Zahlenfeld / Buttons |
| **Button-Stil** | Zahlen (1 2 3 4 5) oder Sterne (⭐⭐⭐⭐⭐) |
| **Wertebereich** | Min, Max und Schrittweite festlegen |

**Display-Modi für Bewertungsskalen:**

1. **Slider** (Standard): Schieberegler von Min bis Max
2. **Zahlenfeld**: Direkteingabe einer Zahl
3. **Buttons (Zahlen)**: Anklickbare Zahlen-Buttons (1 2 3 4 5)
4. **Buttons (Sterne)**: Anklickbare Sterne-Buttons (⭐⭐⭐⭐⭐)

> **💡 Tipp:** Sterne-Buttons eignen sich für Bewertungen (1-5), Zahlen-Buttons für NPS-Skalen (0-10).

#### Auswahl-Optionen

**Auswahloptionen konfigurieren:**

| Option | Beschreibung |
|--------|--------------|
| **Sonstiges-Feld** | Freitextfeld für zusätzliche Eingaben aktivieren |
| **Label** | Beschriftung für das Sonstiges-Feld (z.B. "Weitere Anmerkungen") |
| **Antwortoptionen** | Liste der verfügbaren Auswahlmöglichkeiten |

---

## 🖼️ Titelbild

Ein querformatiges Bild über Titel und Beschreibung gibt dem Formular ein Gesicht, zum Beispiel ein Foto vom Anlass oder das Motiv deiner Kampagne. Es erscheint in der Ausfüllansicht (angemeldet und öffentlich), in der Website-Einbettung, auf der Detailseite der Vorlage sowie im PDF- und Word-Ausdruck.

### Titelbild hochladen

1. Öffne die Vorlage und klicke auf **Bearbeiten**.
2. Wähle im Abschnitt **Darstellung** beim Feld **Titelbild** eine Bilddatei.
3. Klicke auf **Speichern**.

Zum Entfernen setzt du beim Feld **Titelbild** das Häkchen **Löschen** und speicherst.

### Formate und Grösse

- **Dateiformate**: JPEG, PNG oder WebP. GIF, SVG und PDF werden abgelehnt.
- **Dateigrösse**: höchstens 5 MB.
- **Empfohlene Abmessungen**: 1600 × 500 Pixel (Seitenverhältnis 16:5).

Das Bild füllt die volle Breite der Formularkarte und wird auf das Verhältnis 16:5 zugeschnitten, mittig und ohne Verzerrung. Wichtige Motive gehören deshalb in die Bildmitte; bei einem hochformatigen Foto bleiben nur der mittlere Streifen sichtbar.

> **💡 Tipp:** Beim Duplizieren einer Vorlage wird das Titelbild mitkopiert. Die Kopie hat ihre eigene Bilddatei, du kannst sie also unabhängig vom Original ändern.

---

## 📐 Layout-Optionen

Gestalte dein Formular übersichtlich mit verschiedenen Spaltenbreiten.

### Spaltenbreiten

| Breite | Prozent | Beispiel-Verwendung |
|--------|---------|---------------------|
| **Volle Breite** | 100% | Lange Texteingaben, z.B. "Wie heisst du?" |
| **Halbe Breite** | 50% | Zwei Felder nebeneinander, z.B. Vorname + Nachname |
| **Drittel Breite** | 33% | Drei Felder nebeneinander, z.B. PLZ + Ort + Land |

**Verwendung:**

- **Volle Breite**: Lange Texteingaben, Textarea, Matrix-Fragen
- **Halbe Breite**: Vorname/Nachname, Stadt/PLZ, Datum/Uhrzeit
- **Drittel Breite**: PLZ/Ort/Land, Bewertungen nebeneinander

> **💡 Tipp:** Gruppiere zusammengehörige Fragen optisch durch gleiche Spaltenbreite.

---

## 🔀 Verzweigen mit Folgeformularen

Einzelne Fragen innerhalb eines Formulars lassen sich nicht abhängig von früheren Antworten ein- oder ausblenden. Verzweigen kannst du aber zwischen ganzen Formularen: Nach dem Absenden geht es in einem passenden **Folgeformular** weiter. Das passende Folgeformular wählt entweder die ausfüllende Person selbst oder ELIZA anhand der Antworten.

**Beispiel (automatische Auswahl):** Ein kurzes Startformular fragt "Nutzt du Software?". Bei "Ja" geht es im Folgeformular "Software-Details" weiter, bei "Nein" wird der Ablauf abgeschlossen.

### Folgeformular verknüpfen

1. Erstelle zuerst die Folgeformulare als eigene Vorlagen und aktiviere sie
2. Öffne die Vorlage, mit der der Ablauf beginnt (Startformular)
3. Wechsle in den Tab **Folgeformulare**
4. Wähle oben den **Auswahlmodus für Folgeformulare** (siehe unten), bevor du Verknüpfungen anlegst: Die Felder für die Regel erscheinen nur bei automatischer Auswahl
5. Klicke auf **Folgeformular hinzufügen** und wähle das **Zielformular**
6. Bei automatischer Auswahl: Lege die Regel fest oder setze **Als «Standard/Sonst» verwenden** (siehe unten)
7. Speichere mit **Folgeformular verknüpfen**

### Auswahlmodus wählen

Unter **Auswahlmodus für Folgeformulare** legst du fest, wie das passende Folgeformular bestimmt wird:

- **Manuelle Auswahl mit Anleitung** (Standard): Die ausfüllende Person wählt nach dem Absenden selbst. Gibt es nur ein Folgeformular, das sie ausfüllen kann, geht es ohne Auswahlseite direkt dorthin. Hinterlege bei jeder Verknüpfung eine **Anleitung für die Auswahl**, z.B. "Wähle dieses Formular, wenn du Software nutzt".
- **Automatische Auswahl per Regel**: ELIZA wählt das Folgeformular anhand der Antworten im Startformular.

### Regeln für die automatische Auswahl

Bei jeder Verknüpfung legst du unter **Automatische Auswahlregel** eine oder mehrere Bedingungen fest:

- **Frage**: Die Frage im Startformular, deren Antwort geprüft wird
- **Operator**: Passend zum Fragetyp, z.B. "ist gleich", "ist nicht gleich", "ist eine von", "enthält", bei Zahlen "ist grösser als" oder "ist kleiner als", bei Daten "vor" oder "nach"
- **Wert**: Der erwartete Wert, bei Auswahlfragen eine der Optionen

Unter **Verknüpfung** wählst du **Alle Bedingungen müssen zutreffen** oder **Mindestens eine Bedingung muss zutreffen**.

**So wählt ELIZA aus:**

- Treffen mehrere Regeln zu, gilt das erste Folgeformular in der **Reihenfolge**
- Trifft keine Regel zu, greift das Folgeformular mit **Als «Standard/Sonst» verwenden** (höchstens eines pro Startformular)
- Gibt es kein Standard-Folgeformular, wird der Ablauf ohne Folgeformular abgeschlossen

**Anwendungsbeispiele:**

1. **Rückfragen bei bestimmten Antworten:**
   - Folgeformular "Verbesserungsvorschläge" → wenn "Zufrieden?" ist gleich "Nein"

2. **Detaillierte Informationen:**
   - Folgeformular "Fahrzeugangaben" → wenn "Besitzt du ein Auto?" ist gleich "Ja"

3. **Segmentierung:**
   - Folgeformular "Mitarbeiterfragen" → wenn "Rolle" ist gleich "Mitarbeiter"

---

## 🎓 Quiz-Einstellungen

Bei Quiz-Vorlagen sind zusätzliche Einstellungen erforderlich.

### Korrekte Antworten definieren

Für jede Frage im Quiz musst du die korrekte Antwort festlegen:

**Beispiel - Single Choice Frage:**

> **Frage:** "Was ist die Hauptstadt der Schweiz?"
>
> - ○ Zürich
> - ● **Bern** ← Korrekte Antwort
> - ○ Genf
> - ○ Basel
>
> **Punkte:** 10

**Pro Fragetyp:**

- **Single Choice**: Markiere die richtige Option
- **Multiple Choice**: Markiere alle richtigen Optionen
- **Ja/Nein**: Wähle "Ja" oder "Nein"
- **Text/Zahl**: Gib die exakte korrekte Antwort ein
- **Skala**: Definiere den korrekten Wert

**Punktevergabe:**

- Standard: 10 Punkte pro Frage
- Anpassbar: 5-100 Punkte
- Gewichtung: Wichtige Fragen erhalten mehr Punkte

---

### Quiz-Parameter

**Quiz-Einstellungen:**

| Einstellung | Beschreibung |
|-------------|--------------|
| **Bestehensgrenze** | Prozent der Punkte zum Bestehen (z.B. 70%) |
| **Korrekte Antworten anzeigen** | Zeigt nach Abschluss die richtigen Antworten |
| **Erreichte Punkte anzeigen** | Zeigt die erreichte Punktzahl |
| **Fragen zufällig anordnen** | Mischt die Reihenfolge der Fragen |
| **Zeitlimit** | Optionales Zeitlimit in Minuten |

**Unterschied Test vs. Training:**

| Feature | Test | Training |
|---------|------|----------|
| Versuche | 1 | Unbegrenzt |
| Feedback | Nach Abschluss | Sofort |
| Antworten anzeigen | Optional | Empfohlen |
| Zertifikat | Ja | Nein |

---

## 📋 Checklisten-Einstellungen

Checklisten sind spezialisierte Formulare für Audits und Kontrollen.

### Erfüllungsgrad konfigurieren

**Checklisten-Optionen:**

| Option | Beschreibung |
|--------|--------------|
| **Erfüllungsgrad-Berechnung** | Prozent (0-100%) oder Punkte |
| **Mindest-Erfüllungsgrad** | Minimum zum Bestehen (z.B. 80%) |
| **Gewichtung** | Fragen können unterschiedlich gewichtet werden |

**Gewichtung pro Frage:**

- Standard: Alle Fragen gleich wichtig (1x)
- Kritisch: Wichtige Punkte (2x oder 3x)
- Optional: Nice-to-have (0.5x)

> **💡 Tipp:** Gewichte kritische Sicherheitspunkte höher als organisatorische Punkte.

---

## ✅ Best Practices

### ✅ Empfehlung 1: Logische Struktur

Gruppiere Fragen thematisch:

1. **Persönliche Daten** (Name, E-Mail, Abteilung)
2. **Hauptfragen** (Thema des Formulars)
3. **Feedback** (Freitext, Verbesserungsvorschläge)

### ✅ Empfehlung 2: Klare Formulierung

- **Kurz und präzise**: Max. 10-15 Wörter pro Frage
- **Eindeutig**: Keine Doppel-Fragen ("Bist du zufrieden und motiviert?")
- **Neutralität**: Keine suggestiven Formulierungen

### ✅ Empfehlung 3: Hilfreiche Hilfetexte

Nutze Hilfetexte für:
- Erklärungen komplexer Begriffe
- Beispiele für Antworten
- Hinweise auf Datenverwendung

### ✅ Empfehlung 4: Responsive Layout

- **Desktop**: Nutze halbe/drittel Breite für Übersichtlichkeit
- **Mobile**: Volle Breite für bessere Lesbarkeit
- **Test**: Probiere die Vorlage auf verschiedenen Geräten aus

### ✅ Empfehlung 5: Pflichtfelder sparsam einsetzen

- Nur essenzielle Felder als Pflicht markieren
- Optionale Fragen erhöhen Abschlussrate
- Mindestens 70% optional für gute UX

---

## ❌ Häufige Fehler vermeiden

### ❌ Fehler 1: Zu viele Fragen

**Problem:** Formulare mit >30 Fragen haben hohe Abbruchrate.

**Lösung:**
- Teile lange Formulare in mehrere Vorlagen auf
- Verschiebe Detailfragen, die nur manche betreffen, in Folgeformulare
- Frage nur das Nötigste

### ❌ Fehler 2: Fehlende Beschreibung

**Problem:** Benutzer wissen nicht, wofür das Formular ist.

**Lösung:**
- Schreibe eine klare Beschreibung im Formular-Header
- Erkläre Zweck und geschätzte Ausfüllzeit
- Gib Ansprechpartner an

### ❌ Fehler 3: Inkonsistente Skalierung

**Problem:** Einmal 1-5, dann 0-10, dann 1-10 verwirrt.

**Lösung:**
- Einheitliche Skalen im gesamten Formular
- Standard: 1-5 für Zufriedenheit, 0-10 für NPS
- Erkläre Skalenbedeutung (1=schlecht, 5=gut)

### ❌ Fehler 4: Fehlende Test-Ausfüllung

**Problem:** Fehler fallen erst beim Live-Einsatz auf.

**Lösung:**
- Teste Vorlage selbst ausfüllen
- Lass Kollegen Probe-Ausfüllung machen
- Prüfe Layout auf Mobile-Geräten

---

## 📊 Auswertungs-View

Für jede Vorlage steht eine interaktive Auswertungs-Tabelle zur Verfügung.

### Auswertung öffnen

In der Vorlagen-Detailansicht findest du:

- **Titel**: z.B. "Mitarbeiterzufriedenheit 2025"
- **Statistik**: Anzahl der ausgefüllten Formulare
- **Buttons**: [📈 Auswertung anzeigen] und [📥 Excel-Export]

**Klicke auf "Auswertung anzeigen"** um die Tabelle zu öffnen.

---

### Auswertungs-Tabelle

Die Tabelle zeigt alle ausgefüllten Formulare mit Antworten in Spalten:

| Datum | Benutzer | Status | Frage 1 | Frage 2 | Frage 3 | ... |
|-------|----------|--------|---------|---------|---------|-----|
| 22.11.25 | max.muster | ✅ | Hans Muster | max@firma.ch | 8 | ... |
| 21.11.25 | anna.meier | ✅ | Anna Meier | anna@firma.ch | 9 | ... |
| 20.11.25 | peter.koch | ✅ | Peter Koch | peter@firma.ch | 7 | ... |

**Funktionen:**

- **🔍 Suche**: Filtere nach Namen, E-Mail oder Antworten
- **📊 Sortierung**: Klicke auf Spalten-Header zum Sortieren
- **📄 Paginierung**: Blättere durch viele Einträge
- **📥 Export**: Exportiere als Excel für weitere Analyse

> **💡 Tipp:** Die Tabelle ist interaktiv und aktualisiert sich automatisch bei neuen Einsendungen.

---

### Excel-Export

Klicke auf **"Excel-Export"** um die Auswertungsdaten herunterzuladen:

**Excel-Datei enthält:**
- Header-Zeile mit Fragentexten
- Pro Formular eine Zeile
- Datum, Benutzer, Status
- Alle Antworten in separaten Spalten
- Formatierung (Header fett, Farben)

**Verwendung:**
- Weiterverarbeitung in Excel/LibreOffice
- Statistik-Auswertung mit Pivot-Tabellen
- Charts und Grafiken erstellen
- Archivierung der Ergebnisse

---

## 🔍 Häufige Fragen (FAQ)

### Kann ich Fragen nachträglich ändern?

**Ja**, du kannst jederzeit:
- Fragen hinzufügen oder entfernen
- Fragetext anpassen
- Reihenfolge ändern

**⚠️ Beachte:** Bereits ausgefüllte Formulare behalten die alte Version der Fragen.

---

### Wie viele Fragen kann eine Vorlage haben?

**Technisch:** Unbegrenzt

**Empfohlen:**
- Formulare: 10-20 Fragen
- Quizze: 10-30 Fragen
- Checklisten: 20-50 Punkte

> **💡 Tipp:** Teste die Ausfüllzeit. >15 Minuten führt oft zu Abbrüchen.

---

### Kann ich Vorlagen kopieren?

**Ja**, über die Vorlagen-Liste:

1. Wähle Vorlage aus
2. Klicke auf **"Duplizieren"**-Icon
3. Benenne Kopie um
4. Passe an nach Bedarf

> **💡 Tipp:** Erstelle eine "Master-Vorlage" und kopiere sie für ähnliche Formulare.

---

### Wie teile ich eine Vorlage?

**Öffentliche Formulare:**
1. Aktiviere "Öffentliches Formular" in den Einstellungen
2. Kopiere den Formular-Link
3. Teile Link per E-Mail oder im Intranet

Hat das öffentliche Formular Folgeformulare, öffnen sich ohne Anmeldung nur die Folgeformulare, die selbst öffentlich sind. Vor einem nicht öffentlichen Folgeformular geht es mit einem öffentlichen weiter oder der Ablauf endet. Der Reiter «Folgeformulare» der Vorlage nennt die Folgeformulare, die sich ohne Anmeldung nicht öffnen.

**In eine externe Website einbetten:**

Einseitige öffentliche Formulare ohne Folge- oder Unterformulare können direkt in einer Website angezeigt werden:

1. Aktiviere **Öffentliches Formular** und **Einbettung in externe Websites erlauben**.
2. Trage unter **Erlaubte Websites** pro Zeile eine vollständige Website-Origin ein, zum Beispiel `https://www.beispiel.ch`. Pfade wie `/kontakt` gehören nicht dazu.
3. Speichere die Vorlage.
4. Kopiere auf der Vorlagen-Detailseite unter **In Website einbetten** den angezeigten Code.
5. Füge den Code an der gewünschten Stelle in der Website ein.

Die Formularhöhe passt sich automatisch an. ELIZA akzeptiert die Einbettung nur auf den eingetragenen Websites; der normale öffentliche Link bleibt davon unabhängig verfügbar.

> **Hinweis:** Mehrseitige Formulare sowie Formulare mit Folge- oder Unterformularen können noch nicht eingebettet werden. Verwende dafür den öffentlichen Link.

**Ordner-basiert:**
- Berechtigungen werden vom Ordner geerbt
- Admins und Team haben automatisch Zugriff

---

### Kann ich Fragen aus anderen Vorlagen wiederverwenden?

**Ja**, du kannst Vorlagen duplizieren:

- Öffne die Vorlage und klicke auf **Duplizieren**
- Alle Fragen werden in die neue Vorlage kopiert
- Änderungen in einer Vorlage betreffen NICHT andere Vorlagen

---

## 📚 Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Vorlagen mit dem 3-Schritt-Wizard erstellen
- ✅ Fragen hinzufügen und anordnen
- ✅ Layout-Optionen nutzen (volle/halbe/drittel Breite)
- ✅ Mit Folgeformularen je nach Antwort verzweigen
- ✅ Quiz- und Checklisten-Einstellungen konfigurieren
- ✅ Auswertungs-View und Excel-Export verwenden
- ✅ Best Practices für professionelle Formulare

---

## 🚀 Nächste Schritte

- **[Benutzer einladen]({{< ref "12-benutzer-einladen" >}})**: Lade gezielt Benutzer zum Ausfüllen ein und setze Fristen
- **[Formulare ausfüllen]({{< ref "05-formulare-ausfuellen" >}})**: Lerne, wie du Formulare ausfüllst und einreichst
- **[Quiz-Modus]({{< ref "06-quiz" >}})**: Erfahre mehr über Quiz-Einstellungen und Auswertung
- **[Alle Fragetypen]({{< ref "08-fragetypen" >}})**: Detaillierte Übersicht aller 14 Fragetypen

---

**Viel Erfolg beim Erstellen professioneller Formulare! 🎉**
