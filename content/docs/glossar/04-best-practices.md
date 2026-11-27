---
title: "Best Practices"
description: ""
weight: "4"
tags:
  - "best-practices"
  - "tipps"
  - "qualität"
---


# Best Practices

Dieses Kapitel zeigt dir bewährte Methoden für ein effektives und pflegeleichtes Glossar.

## Glossar-Struktur

### Eindeutige Begriffe wählen

✅ **Gut:**

- "Qualitätsmanagement"
- "Audit (intern)"
- "Audit (extern)"
- "Prozessmanagement"

❌ **Schlecht:**

- "QM" (zu kurz, unklar - schreibe lieber den vollständigen Begriff)
- "Audit" (zu allgemein, wenn mehrere Typen existieren - verwende Klammern zur Präzisierung)
- "Das Ding mit der Qualität" (unprofessionell)

### Konsistente Benennung

Lege Regeln fest und halte dich daran:

| Regel | Beispiel |
|-------|----------|
| **Singular verwenden** | "Prozess" statt "Prozesse" |
| **Vollständige Begriffe** | "Kontinuierliche Verbesserung" statt nur "KVP" |
| **Schweizer Rechtschreibung** | "Massnahme" statt "Maßnahme" |
| **Gross-/Kleinschreibung** | "ISO 9001" nicht "iso 9001" |

**Abkürzungen ganz in Grossbuchstaben erfassen:** Die automatische Verlinkung in Prozessen und Dokumenten erkennt einen Begriff, der ganz in Grossbuchstaben erfasst ist (z.B. "IM" oder "ISO 9001"), nur in genau dieser Schreibweise. So wird aus dem Wort "im" kein Link auf "IM" (Inklusionsmanagement). Alle anderen Begriffe werden unabhängig von der Gross-/Kleinschreibung erkannt, "Audit" also auch als "audit". Gibt es denselben Begriff in mehreren Schreibweisen (z.B. "Im" und "IM"), wird jede Schreibweise nur genau so verlinkt.

## Beschreibungen schreiben

### Die 5-Satz-Regel

Eine gute Beschreibung besteht aus:

1. **Was ist es?** (Kurzdefinition)
2. **Wofür wird es verwendet?** (Zweck)
3. **Wie funktioniert es?** (Optional: Erklärung)
4. **Wo wird es eingesetzt?** (Kontext)
5. **Verwandte Begriffe** (Optional: Verweise mit Markdown-Links)

#### Beispiel

```markdown
**Audit**

Ein Audit ist eine systematische, unabhängige Untersuchung. Es dient der Bewertung, ob Prozesse den Anforderungen entsprechen. Audits erfolgen anhand von Checklisten und Interviews. Sie werden im Qualitätsmanagement zur Überprüfung der ISO 9001 eingesetzt.

Siehe auch: [Internes Audit](#), [Externes Audit](#), [Zertifizierungsaudit](#)
```

### Verständliche Sprache

✅ **Gut verständlich:**
> "Qualitätssicherung umfasst alle Massnahmen, die sicherstellen, dass Produkte fehlerfrei sind."

❌ **Zu komplex:**
> "Qualitätssicherung konstituiert ein Ensemble evaluativer Methodologien zwecks Minimierung von Nonkonformitäten."

### Fachbegriffe erklären

Wenn du Fachbegriffe oder Abkürzungen verwendest, erkläre sie beim ersten Vorkommen:

❌ **Ohne Erklärung:**
> "FMEA ist eine präventive Methode der Qualitätssicherung."

✅ **Mit Erklärung:**
> "FMEA (Failure Mode and Effects Analysis = Fehler-Möglichkeits- und Einfluss-Analyse) ist eine präventive Methode der Qualitätssicherung."

## Markdown nutzen

### Strukturierte Beschreibungen

Nutze Markdown für lesbare, strukturierte Beschreibungen:

```markdown
## Qualitätsmanagement

**Definition**: Qualitätsmanagement umfasst alle Massnahmen zur Planung, Steuerung und Optimierung.

**Hauptziele:**
- Kundenzufriedenheit erhöhen
- Fehler reduzieren
- Kontinuierliche Verbesserung

**Anwendungsbereich**: Alle Unternehmensabteilungen

**Normen**: ISO 9001:2015

**Verwandte Begriffe**: [Audit](#), [Prozessmanagement](#), [Zertifizierung](#)
```

### Verwandte Begriffe verlinken

Verlinke verwandte Glossar-Einträge in der Beschreibung:

```markdown
ISO 9001 ist eine internationale Norm für [Qualitätsmanagement](#).
Sie wird durch [Audits](#) überprüft und führt zur [Zertifizierung](#).
```

## Glossar pflegen

### Regelmässige Reviews

Plane quartalsweise Reviews ein:

**Q1-Review (Januar - März):**

- [ ] Alle Einträge auf Aktualität prüfen
- [ ] Neue Begriffe aus dem letzten Quartal hinzufügen
- [ ] Veraltete Beschreibungen aktualisieren
- [ ] Duplikate zusammenführen (mit DataTables-Suche finden)

**Q2-Review (April - Juni):**

- [ ] Markdown-Links prüfen und aktualisieren
- [ ] Beschreibungen auf Verständlichkeit prüfen

**Q3-Review (Juli - September):**

- [ ] Feedback von Nutzern einarbeiten
- [ ] Schweizer Rechtschreibung kontrollieren

**Q4-Review (Oktober - Dezember):**

- [ ] Jahresabschluss-Review
- [ ] Excel-Backup erstellen
- [ ] Verbesserungen für nächstes Jahr planen

### Verantwortlichkeiten definieren

Lege fest, wer für welche Bereiche zuständig ist:

| Bereich | Verantwortlicher | Aufgaben |
|---------|------------------|----------|
| **QM-Begriffe** | Qualitätsmanager | Erstellen, Aktualisieren |
| **Prozesse** | Prozess-Owner | Beschreibungs-Review |
| **Normen** | QM-Beauftragter | ISO-Definitionen pflegen |
| **IT-Begriffe** | IT-Leitung | Technische Begriffe |

## Qualitätskriterien

### Checkliste für neue Einträge

Vor dem Veröffentlichen:

- [ ] **Titel**: Eindeutig, präzise, korrekte Rechtschreibung
- [ ] **Beschreibung**: 2-5 Sätze, verständlich, korrekt
- [ ] **Markdown**: Korrekt formatiert (falls verwendet)
- [ ] **Links**: Verwandte Begriffe verlinkt
- [ ] **Rechtschreibung**: Schweizer Rechtschreibung geprüft
- [ ] **Duplikate**: Mit Suchfunktion geprüft

## Anwendungsfälle

### 1. Onboarding neuer Mitarbeitender

**Szenario**: Neue Mitarbeitende sollen Unternehmens-Terminologie lernen

**Lösung**:

- Erstelle wichtige Begriffe im Glossar
- Verlinke sie im Beschreibungstext untereinander
- Teile den Link zur Glossar-Liste im Welcome-Paket
- Nutze die Favoriten-Funktion für die 20 wichtigsten Begriffe

### 2. ISO-Audit Vorbereitung

**Szenario**: Audit steht bevor, Begriffe müssen sauber definiert sein

**Lösung**:

- Erfasse alle ISO 9001 relevanten Begriffe
- Exportiere als Excel für Auditoren
- Nutze Markdown für strukturierte Definitionen
- Verlinke zu entsprechenden DMS-Dokumenten

### 3. Prozessdokumentation

**Szenario**: Prozesse sollen einheitliche Begriffe verwenden

**Lösung**:

- Erstelle Prozess-spezifische Glossareinträge
- Nutze die automatische Glossar-Verlinkung in BPMN-Diagrammen
- Halte Definitionen synchron mit Prozessbeschreibungen

## Häufige Fehler vermeiden

### ❌ Fehler 1: Zu technische Sprache

**Problem**: Nur Experten verstehen die Beschreibungen

**Lösung**:

- Schreibe für ein breites Publikum
- Erkläre Fachbegriffe in einfacher Sprache
- Nutze Beispiele aus der Praxis

### ❌ Fehler 2: Veraltete Einträge

**Problem**: Beschreibungen entsprechen nicht mehr dem aktuellen Stand

**Lösung**:

- Setze Review-Reminder (quartalsweise)
- Nutze das Audit-Log um alte Einträge zu identifizieren
- Archiviere veraltete Begriffe statt sie zu löschen

### ❌ Fehler 3: Inkonsistente Begriffe

**Problem**: Gleiche Dinge werden unterschiedlich benannt

**Lösung**:

- Definiere einen Style-Guide
- Nutze ein zentrales Glossar
- Führe regelmässige Konsistenz-Checks durch

### ❌ Fehler 4: Unstrukturierte Beschreibungen

**Problem**: Lange Textblöcke sind schwer lesbar

**Lösung**:

- Nutze Markdown für Struktur (Listen, Überschriften)
- Halte Absätze kurz
- Verwende Aufzählungen statt Fliesstext

## Zusammenfassung

### Die 10 Goldenen Regeln

1. **Klarheit vor Präzision**: Lieber verständlich als 100% technisch korrekt
2. **Kürze**: Maximal 5 Sätze pro Beschreibung
3. **Konsistenz**: Einheitliche Begriffe im gesamten Unternehmen
4. **Markdown nutzen**: Strukturiere längere Beschreibungen
5. **Verlinkungen**: Vernetze verwandte Begriffe mit Markdown-Links
6. **Aktualität**: Quartalsweise Reviews durchführen
7. **Feedback**: Höre auf deine Nutzer
8. **Schweizer Rechtschreibung**: Konsequent anwenden
9. **Duplikate vermeiden**: Vor dem Erstellen mit Suche prüfen
10. **Qualität vor Quantität**: Lieber 50 gute als 500 schlechte Einträge

### Nächste Schritte

Du hast nun alle Werkzeuge, um ein professionelles Glossar zu erstellen und zu pflegen!

**Weiterführende Ressourcen:**

- ISO 9001:2015 - Kapitel 3 (Begriffe und Definitionen)
- ELIZA Hilfe-Center
- Support-Team kontaktieren: <support@eliza.ch>

---

**Viel Erfolg mit deinem ELIZA Glossar!** 🎉
