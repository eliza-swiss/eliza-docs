---
title: "Einschätzungen verwalten"
description: ""
weight: "2"
tags:
  - "einschätzungen"
  - "swot"
  - "risiken"
  - "chancen"
  - "stärken"
  - "schwächen"
---


# Einschätzungen verwalten

Einschätzungen sind das Herzstück des IKS-Moduls. Sie bilden die Grundlage der SWOT-Analyse und ermöglichen dir, Stärken, Schwächen, Chancen und Risiken systematisch zu erfassen und zu bewerten.

## Was sind Einschätzungen?

Eine Einschätzung ist ein **strukturierter Eintrag**, der einen internen oder externen Faktor beschreibt und bewertet. Jede Einschätzung gehört zu einer der vier SWOT-Kategorien:

| Kategorie | Symbol | Beschreibung | Beispiel |
|-----------|--------|--------------|----------|
| **Stärke** (S) | 💪 | Interner positiver Faktor | Hohe Mitarbeiterzufriedenheit |
| **Schwäche** (W) | 😟 | Internes Verbesserungspotential | Veraltete IT-Infrastruktur |
| **Chance** (O) | 👍 | Externe Möglichkeit | Neuer Markt in der Region |
| **Risiko** (T) | ⚠️ | Externe Bedrohung | Fachkräftemangel |

---

## Einschätzungen anzeigen

### SWOT-Listenansicht

**Navigation:** IKS → Einschätzungen (SWOT)

In der Listenansicht siehst du alle Einschätzungen mit folgenden Spalten:

- **Art**: Stärke, Schwäche, Chance oder Risiko
- **Nummer**: Eindeutige Identifikation
- **Titel**: Kurzbezeichnung
- **Klassifizierung**: Zugeordnete Risikoklassen
- **Erfassungsdatum**: Wann die Einschätzung erfasst wurde
- **Bewertung**: Berechneter Risikowert (Wahrscheinlichkeit × Auswirkung)
- **Status**: Aktueller Bearbeitungsstand
- **Erfasst durch**: Wer die Einschätzung erstellt hat

> **💡 Tipp:** Nutze die Filter oben in der Liste, um nach Art, Status, Wahrscheinlichkeit, Auswirkung oder Klassifizierung zu filtern.

### Map-Ansichten

Zusätzlich stehen dir vier spezialisierte Ansichten zur Verfügung:

- **Risiko-Map**: IKS → Risiko-Map
- **Chancen-Map**: IKS → Chancen-Map
- **Stärken-Map**: IKS → Stärken-Map
- **Schwächen-Map**: IKS → Schwächen-Map

Diese Ansichten zeigen die Einschätzungen als **Risikomatrix** mit farbcodierter Bewertung. Mehr dazu im Kapitel [Risikomap nutzen]({{< ref "risikomap" >}}).

---

## Einschätzung erstellen

### Direkt im IKS-Modul

1. Navigiere zu einer der Map-Ansichten (z.B. **Risiko-Map**)
2. Klicke auf den grünen Button **"+ Risiko hinzufügen"** (bzw. Chance, Stärke, Schwäche)
3. Fülle das Formular aus (siehe [Formularfelder](#formularfelder))
4. Klicke auf **"Speichern"**

### Aus einem anderen Objekt heraus

Einschätzungen können auch direkt aus anderen Objekten erstellt werden, z.B. aus einem Prozess, einem IMS-Objekt oder einem anderen verknüpften Element:

1. Öffne das Quellobjekt (z.B. einen Prozess)
2. Scrolle zum Abschnitt **"Einschätzungen"**
3. Klicke auf **"Einschätzung hinzufügen"**
4. Die Verknüpfung zum Quellobjekt wird automatisch gesetzt

### Formularfelder

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| **Art** | Ja | Stärke, Schwäche, Chance oder Risiko |
| **Nummer** | Nein | Individuelle Nummerierung (z.B. R-001) |
| **Titel** | Ja | Kurze, aussagekräftige Bezeichnung |
| **Klassifizierung** | Nein | Zuordnung zu einer oder mehreren Risikoklassen |
| **Beschreibung** | Nein | Detaillierte Beschreibung des Faktors |
| **Analyse / Ursache** | Nein | Ursachenanalyse oder Hintergrund |
| **Mögliche Massnahmen** | Nein | Vorschläge für Massnahmen (Freitext) |
| **Wahrscheinlichkeit** | Ja | Eintretenswahrscheinlichkeit (1-5) |
| **Auswirkung** | Ja | Potentielle Auswirkung (1-5) |
| **Status** | Ja | Aktueller Status |
| **Betroffene Prozesse** | Nein | Verknüpfung mit Prozessen |
| **Interessierte Parteien** | Nein | Verknüpfung mit interessierten Parteien |
| **Verantwortung** | Nein | Verantwortliche Funktion(en) |
| **Erfassungsdatum** | Nein | Datum der Erfassung |
| **Erfasst durch** | Nein | Erfassende Person |

> **💡 Tipp:** Die Felder "Beschreibung", "Analyse / Ursache" und "Mögliche Massnahmen" unterstützen **Markdown-Formatierung**. Du kannst Aufzählungen, Überschriften und Links verwenden.

---

## Bewertungsskala

Die Bewertung einer Einschätzung ergibt sich aus der Multiplikation von **Wahrscheinlichkeit** und **Auswirkung**:

### Wahrscheinlichkeit / Schwierigkeitsgrad

| Wert | Bedeutung |
|------|-----------|
| 1 | klein |
| 2 | gering |
| 3 | mittel |
| 4 | gross |
| 5 | sehr gross |

### Auswirkung

| Wert | Bedeutung |
|------|-----------|
| 1 | klein |
| 2 | gering |
| 3 | mittel |
| 4 | gross |
| 5 | sehr gross |

### Bewertung (Risikozahl)

Die **Bewertung** ist das Produkt aus Wahrscheinlichkeit × Auswirkung und reicht von **1 bis 25**:

| Bewertung | Einstufung | Farbe |
|-----------|------------|-------|
| 1-4 | Niedrig | Grün |
| 5-9 | Mittel | Orange |
| 10-15 | Hoch | Dunkelorange |
| 16-25 | Sehr hoch | Rot |

> **⚠️ Wichtig:** Bei **Stärken und Chancen** wird die Farbskala invertiert dargestellt. Ein hoher Wert (grün) bedeutet hier eine grosse Stärke oder Chance.

---

## Status einer Einschätzung

| Status | Bedeutung |
|--------|-----------|
| **aktiv** | Einschätzung ist aktuell und relevant |
| **in Arbeit** | Wird derzeit bearbeitet oder analysiert |
| **akzeptiert** | Wurde akzeptiert (z.B. Restrisiko akzeptiert) |
| **abgeschlossen** | Bearbeitung ist abgeschlossen |
| **verschoben** | Bearbeitung wurde verschoben |
| **archiviert** | Nicht mehr aktiv, historisch aufbewahrt |

> **💡 Tipp:** In den Map-Ansichten werden nur Einschätzungen mit Status **"aktiv"** und **"in Arbeit"** angezeigt.

---

## Detailansicht einer Einschätzung

Wenn du eine Einschätzung öffnest, siehst du:

### Linke Seite (Hauptbereich)

- **Übersichts-Tab**: Alle Details der Einschätzung
  - Status, Klassifizierung, Verantwortung
  - Beschreibung und Analyse (Markdown-formatiert)
  - Mögliche Massnahmen
  - Betroffene Prozesse und interessierte Parteien
  - Verknüpftes Objekt ("Gehört zu")
- **Massnahmen**: Zugeordnete konkrete Massnahmen
- **IKS Reporting**: Historische Bewertungen über die Zeit
- **Kommentare**: Diskussion und Austausch
- **Versionen-Tab**: Änderungshistorie

### Rechte Seite (Bewertung)

- **Bewertungszahl** mit Farbcodierung
- **Eintretenswahrscheinlichkeit / Schwierigkeitsgrad**
- **Auswirkung**
- Erklärung der Bewertungsskala (1 = niedrig, 25 = schwerwiegend)

---

## Einschätzung bearbeiten

1. Öffne die Einschätzung
2. Klicke auf das **Stift-Symbol** oben rechts
3. Bearbeite die gewünschten Felder
4. Klicke auf **"Speichern"**

> **⚠️ Wichtig:** Wenn du die Bewertung (Wahrscheinlichkeit oder Auswirkung) änderst, wird automatisch ein neuer **IKS Report** erstellt. So wird die Bewertungshistorie nachvollziehbar dokumentiert.

---

## IKS Reporting

Jede Einschätzung hat eine **Reporting-Historie**, die automatisch geführt wird:

- Bei **Erstellung** einer Einschätzung wird ein erster Report-Eintrag erstellt
- Bei **Änderung der Bewertung** (Wahrscheinlichkeit oder Auswirkung) wird ein neuer Report-Eintrag erstellt
- Reports können auch **manuell hinzugefügt** werden über den Button "Reporting"

### Report-Eintrag manuell hinzufügen

1. Öffne die Einschätzung
2. Scrolle zum Abschnitt **"IKS Reporting"**
3. Klicke auf den grünen Button **"+ Reporting"**
4. Fülle das Formular aus:
   - **Datum**: Wann die Bewertung erfolgte
   - **Beschreibung**: Begründung der Bewertung
   - **Wahrscheinlichkeit**: Aktuelle Einschätzung
   - **Auswirkung**: Aktuelle Einschätzung
5. Klicke auf **"Speichern"**

> **💡 Tipp:** Über die Reporting-Historie kannst du die Entwicklung einer Einschätzung über die Zeit nachverfolgen. Das ist besonders bei Audits und Reviews hilfreich.

---

## Verknüpfungen

Einschätzungen können mit verschiedenen Objekten verknüpft werden:

| Verknüpfung | Beschreibung |
|-------------|--------------|
| **Prozesse** | Betroffene Geschäftsprozesse |
| **Interessierte Parteien** | Betroffene Stakeholder |
| **Interne/externe Themen** | Relevante Kontextthemen |
| **IMS-Objekte** | Verknüpfung mit dem Integrierten Managementsystem |
| **Massnahmen** | Konkrete Aktionen zur Behandlung |

---

## Häufige Fragen

### Kann ich eine Einschätzung mehreren Klassifizierungen zuordnen?

**Ja**, du kannst einer Einschätzung mehrere Risikoklassen zuordnen. Das ist sinnvoll, wenn ein Risiko verschiedene Bereiche betrifft.

### Was passiert, wenn ich die Bewertung ändere?

Es wird automatisch ein neuer **IKS Report** erstellt. So bleibt die Bewertungshistorie vollständig nachvollziehbar.

### Warum sehe ich eine Einschätzung nicht in der Map?

Die Map-Ansichten zeigen nur Einschätzungen mit Status **"aktiv"** oder **"in Arbeit"**. Prüfe den Status der Einschätzung.

### Wer kann Einschätzungen bearbeiten?

- Personen mit der **Verantwortlichen Funktion** können die Einschätzung bearbeiten
- Personen mit der Berechtigung **"IKS (Bearbeiten)"** können alle Einschätzungen bearbeiten

---

## Nächste Schritte

- **[Massnahmen erstellen]({{< ref "massnahmen" >}})**: Definiere konkrete Aktionen
- **[Risikomap nutzen]({{< ref "risikomap" >}})**: Visualisiere deine Einschätzungen
- **[Reports erstellen]({{< ref "reports" >}})**: Erstelle Auswertungen

---

**Zurück zur [Übersicht]({{< ref "_index" >}})**

*Stand: Februar 2026*
