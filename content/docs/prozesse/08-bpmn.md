---
title: "BPMN 2.0 Prozessmodellierung"
description: ""
weight: "8"
tags:
  - "bpmn"
  - "prozessmodellierung"
  - "diagramme"
  - "notation"
  - "workflow"
---


# BPMN 2.0 Prozessmodellierung

ELIZA unterstützt die visuelle Modellierung von Prozessen mit BPMN 2.0 (Business Process Model and Notation). Dieses Kapitel zeigt dir, wie du BPMN-Diagramme erstellst und nutzt.

## Was ist BPMN 2.0?

BPMN 2.0 ist ein internationaler Standard zur grafischen Darstellung von Geschäftsprozessen. Die Notation verwendet standardisierte Symbole, die von allen Beteiligten verstanden werden.

### Vorteile von BPMN

| Vorteil | Beschreibung |
|---------|--------------|
| **Standardisierung** | Einheitliche Notation weltweit |
| **Verständlichkeit** | Visuell ansprechend und leicht zu lesen |
| **Detailtiefe** | Vom Überblick bis zu technischen Details |
| **Austauschbarkeit** | Export/Import zwischen verschiedenen Tools |

---

## BPMN-Grundelemente

### Aktivitäten (Tasks)

Aktivitäten repräsentieren Arbeitsschritte im Prozess:

| Symbol | Name | Verwendung |
|--------|------|------------|
| ▭ | **Task** | Allgemeine Aktivität |
| ▭👤 | **User Task** | Manuelle Tätigkeit durch Benutzer |
| ▭⚙️ | **Service Task** | Automatisierte Systemaktivität |
| ▭📧 | **Send Task** | Nachricht versenden |
| ▭📨 | **Receive Task** | Nachricht empfangen |
| ▭📋 | **Manual Task** | Rein manuelle Tätigkeit |
| ▭📜 | **Script Task** | Automatisiertes Skript |
| ▭📊 | **Business Rule Task** | Geschäftsregel anwenden |

### Ereignisse (Events)

Ereignisse markieren Start, Ende und Zwischenpunkte:

| Symbol | Name | Verwendung |
|--------|------|------------|
| ○ | **Start Event** | Prozessstart |
| ◎ | **Intermediate Event** | Zwischenereignis |
| ◉ | **End Event** | Prozessende |
| ○⏱️ | **Timer Event** | Zeitgesteuertes Ereignis |
| ○📧 | **Message Event** | Nachrichtenbasiertes Ereignis |
| ○⚠️ | **Error Event** | Fehlerbehandlung |

### Gateways (Verzweigungen)

Gateways steuern den Prozessfluss:

| Symbol | Name | Verwendung |
|--------|------|------------|
| ◇ | **Exclusive Gateway (XOR)** | Entweder/Oder-Entscheidung |
| ◇+ | **Parallel Gateway (AND)** | Parallele Ausführung |
| ◇○ | **Inclusive Gateway (OR)** | Eine oder mehrere Pfade |
| ◇★ | **Complex Gateway** | Komplexe Bedingungen |
| ◇⬡ | **Event-Based Gateway** | Ereignisbasierte Entscheidung |

### Verbindungselemente

| Symbol | Name | Verwendung |
|--------|------|------------|
| → | **Sequence Flow** | Reihenfolge der Aktivitäten |
| ⇢ | **Message Flow** | Nachrichtenfluss zwischen Pools |
| ⋯→ | **Association** | Verknüpfung mit Datenobjekten |

### Swimlanes

| Element | Verwendung |
|---------|------------|
| **Pool** | Repräsentiert eine Organisation oder Abteilung |
| **Lane** | Unterteilt Pool in Verantwortungsbereiche |

---

## BPMN-Editor in ELIZA

### Editor öffnen

1. Öffne einen Prozess
2. Klicke auf **"BPMN bearbeiten"** oder das Diagramm-Symbol
3. Der BPMN-Editor öffnet sich

### Editor-Oberfläche

Der BPMN-Editor besteht aus:

| Bereich | Funktion |
|---------|----------|
| **Palette** | Werkzeugleiste mit BPMN-Elementen |
| **Canvas** | Zeichenfläche für das Diagramm |
| **Properties** | Eigenschaften des ausgewählten Elements |
| **Toolbar** | Speichern, Zoom, Undo/Redo |

### Elemente hinzufügen

1. Wähle ein Element aus der Palette
2. Klicke auf die Zeichenfläche
3. Positioniere das Element
4. Verbinde es mit anderen Elementen

**Schnellmethode:**
- Klicke auf ein Element und nutze das Kontextmenü
- Wähle das nächste Element direkt aus
- Die Verbindung wird automatisch erstellt

### Elemente verbinden

1. Klicke auf das Quell-Element
2. Ziehe eine Linie zum Ziel-Element
3. Lasse los, um die Verbindung zu erstellen

> **💡 Tipp:** Halte die Linie an einem Verbindungspunkt des Ziel-Elements, um eine saubere Verbindung zu erstellen.

### Elemente bearbeiten

1. Doppelklicke auf ein Element
2. Gib den Namen ein
3. Klicke ausserhalb, um zu bestätigen

**Eigenschaften bearbeiten:**
1. Klicke auf ein Element
2. Im Properties-Panel rechts siehst du alle Eigenschaften
3. Bearbeite Name, ID und weitere Attribute

---

## Prozessschritte mit BPMN verknüpfen

### Verknüpfung erstellen

Prozessschritte können mit BPMN-Elementen verknüpft werden:

1. Öffne einen Prozessschritt zum Bearbeiten
2. Im Feld **"BPMN Element"** wähle das entsprechende Element
3. Speichere

**Vorteile der Verknüpfung:**
- Klick auf BPMN-Element zeigt Prozessschritt-Details
- Konsistenz zwischen Diagramm und Dokumentation
- Interaktive Prozessvisualisierung

### Automatische Verknüpfung

ELIZA kann Prozessschritte automatisch mit BPMN-Elementen verknüpfen:

1. Erstelle zuerst das BPMN-Diagramm
2. Klicke auf **"Schritte aus BPMN generieren"**
3. ELIZA erstellt Prozessschritte für jede Aktivität

> **⚠️ Wichtig:** Bestehende Prozessschritte werden dabei nicht überschrieben.

---

## Hilfsmittel im BPMN-Diagramm

### Hilfsmittel verknüpfen

Hilfsmittel können direkt im BPMN-Diagramm angezeigt werden:

1. Öffne das BPMN-Diagramm im Editor
2. Wähle ein Data Store oder Data Object Element
3. Verknüpfe es mit einem Hilfsmittel

**Oder über den Prozessschritt:**
1. Öffne den Prozessschritt
2. Füge Hilfsmittel hinzu
3. Das verknüpfte BPMN-Element zeigt das Hilfsmittel an

### Dokumente verknüpfen

DMS-Dokumente können ebenfalls im Diagramm erscheinen:

1. Wähle ein Data Object im Diagramm
2. Verknüpfe es mit einem DMS-Dokument
3. Das Dokument wird im interaktiven Diagramm anklickbar

---

## BPMN-Bibliothek

### Was ist die BPMN-Bibliothek?

Die BPMN-Bibliothek speichert wiederverwendbare Diagrammvorlagen:

**Prozesse → BPMN Bibliothek**

### Vorlage erstellen

1. Navigiere zur **BPMN Bibliothek**
2. Klicke auf **"+ Neu"**
3. Gib einen Titel ein
4. Erstelle das Diagramm im Editor
5. Speichere

### Vorlage verwenden

1. Öffne einen Prozess
2. Klicke auf **"BPMN aus Vorlage"**
3. Wähle eine Vorlage aus der Bibliothek
4. Das Diagramm wird in den Prozess kopiert

> **💡 Tipp:** Erstelle Vorlagen für häufig verwendete Prozessmuster wie Genehmigungsworkflows oder Eskalationsprozesse.

---

## Interaktive Prozessvisualisierung

### BPMN-Viewer

Der BPMN-Viewer zeigt das Diagramm in der Prozessdetailansicht:

- **Zoom**: Vergrössern/Verkleinern des Diagramms
- **Pan**: Verschieben der Ansicht
- **Klick**: Element auswählen für Details
- **Vollbild**: Maximale Darstellung

### Interaktive Elemente

Im Viewer sind folgende Elemente interaktiv:

| Element | Aktion bei Klick |
|---------|------------------|
| **Task** | Zeigt verknüpften Prozessschritt |
| **Data Object** | Öffnet verknüpftes Dokument |
| **Data Store** | Zeigt verknüpftes Hilfsmittel |
| **Subprocess** | Navigiert zum Unterprozess |

### Highlighting

Du kannst einzelne Elemente hervorheben:

1. Klicke auf ein Element
2. Das Element wird farblich hervorgehoben
3. Details erscheinen in einem Popup

---

## BPMN-Export und -Import

### Export

**Als Bild exportieren:**
1. Öffne das BPMN-Diagramm
2. Klicke auf **"Exportieren"**
3. Wähle Format (PNG, SVG)
4. Das Bild wird heruntergeladen

**Als BPMN-XML exportieren:**
1. Öffne das BPMN-Diagramm
2. Klicke auf **"BPMN-Code anzeigen"**
3. Kopiere den XML-Code
4. Verwende ihn in anderen BPMN-Tools

### Import

1. Öffne einen Prozess zum Bearbeiten
2. Klicke auf **"BPMN importieren"**
3. Füge den BPMN-XML-Code ein
4. Das Diagramm wird geladen

> **⚠️ Wichtig:** Importierte Diagramme können Anpassungen erfordern, da nicht alle BPMN-Elemente unterstützt werden.

---

## Druckansicht

### BPMN drucken

1. Öffne das BPMN-Diagramm
2. Klicke auf **"Drucken"** oder **"Druckansicht"**
3. Das Diagramm wird optimiert für den Druck angezeigt
4. Nutze die Browser-Druckfunktion

**Optionen:**
- Hochformat oder Querformat
- Mit oder ohne Legende
- Mit oder ohne Prozessschritt-Details

---

## Best Practices für BPMN

### ✅ Empfehlungen

- **Klare Benennung**: Verwende aussagekräftige Namen für alle Elemente
- **Konsistente Richtung**: Fluss von links nach rechts oder oben nach unten
- **Swimlanes nutzen**: Zeige Verantwortlichkeiten klar auf
- **Nicht überladen**: Maximal 15-20 Elemente pro Diagramm
- **Unterprozesse**: Komplexe Abschnitte in Unterprozesse auslagern
- **Start und Ende**: Jeder Prozess hat genau einen Start und mindestens ein Ende

### ❌ Häufige Fehler

- **Zu detailliert**: Jeder Mausklick muss nicht modelliert werden
- **Fehlende Gateways**: Verzweigungen ohne Gateway-Symbol
- **Inkonsistente Benennung**: "Rechnung prüfen" vs. "Prüfung der Rechnung"
- **Spaghetti-Diagramme**: Zu viele kreuzende Verbindungen
- **Fehlende Swimlanes**: Unklar, wer was macht

### BPMN-Notation Kurzreferenz

```
○ Start         ◉ Ende          ◎ Zwischenereignis
▭ Task          ▢ Subprocess
◇ XOR Gateway   ◇+ AND Gateway  ◇○ OR Gateway
→ Sequenzfluss  ⇢ Nachrichtenfluss
▭▭ Pool/Lane    📄 Datenobjekt   🗄️ Datenspeicher
```

---

## FAQ

### Kann ich BPMN-Diagramme aus anderen Tools importieren?

Ja, ELIZA unterstützt den Import von BPMN 2.0 XML. Nicht alle Erweiterungen werden unterstützt, aber die Standardelemente funktionieren.

### Wie gross sollte ein BPMN-Diagramm maximal sein?

Wir empfehlen maximal 15-20 Elemente pro Diagramm. Grössere Prozesse sollten in Unterprozesse aufgeteilt werden.

### Werden Änderungen am Diagramm automatisch gespeichert?

Nein, du musst explizit auf **"Speichern"** klicken. Bei Arbeitskopien werden die Änderungen erst bei Freigabe übernommen.

### Kann ich das Diagramm mit anderen teilen?

Ja, exportiere es als Bild (PNG/SVG) oder teile den Link zur Prozessdetailseite.

---

## Nächste Schritte

- **[Kapitel 7: Best Practices]({{< ref "07-best-practices" >}})**: Weitere Tipps für effektives Prozessmanagement

---

## Zusammenfassung

✅ Du verstehst die BPMN 2.0 Grundelemente
✅ Du kannst BPMN-Diagramme erstellen und bearbeiten
✅ Du weisst, wie Prozessschritte mit BPMN verknüpft werden
✅ Du kannst die BPMN-Bibliothek nutzen
✅ Du kennst die Best Practices für BPMN-Modellierung
