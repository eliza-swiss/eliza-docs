---
title: "Kontrollen durchführen"
description: ""
weight: "4"
tags:
  - "kontrollen"
  - "überprüfung"
  - "wirksamkeit"
  - "nachweis"
  - "checklisten"
---


# Kontrollen durchführen

Kontrollen sind der **Nachweis der Wirksamkeit** deiner Massnahmen. Sie dokumentieren, ob eine Massnahme korrekt umgesetzt wird und die gewünschte Wirkung erzielt.

## Was ist eine Kontrolle?

Eine Kontrolle besteht aus:
- **Datum**: Wann die Kontrolle durchgeführt wurde
- **Kontrollperson**: Wer die Kontrolle durchgeführt hat
- **Kommentar**: Beschreibung der Kontrollergebnisse
- **Status**: Ergebnis der Kontrolle
- **Beilagen**: Checklisten und Dateien als Nachweis

### Kontroll-Status

| Status | Bedeutung |
|--------|-----------|
| **in Arbeit** | Kontrolle wurde gestartet, aber noch nicht abgeschlossen |
| **erledigt** | Kontrolle erfolgreich abgeschlossen, alles in Ordnung |
| **abgelehnt** | Massnahme wurde als nicht wirksam befunden |
| **erledigt mit Mangel** | Kontrolle abgeschlossen, aber mit festgestellten Mängeln |

---

## Wer darf Kontrollen durchführen?

Es gibt verschiedene Wege, die Berechtigung zum Erstellen von Kontrollen zu erhalten:

### Automatisch berechtigt (ohne zusätzliche Berechtigung)

- **Kontrollierende Person**: Wenn du im Feld "Kontrolle durch" einer Massnahme eingetragen bist
- **Kontrollierende Funktion**: Wenn du Mitglied der kontrollierenden Funktion bist
- **Verantwortliche Person**: Wenn du als verantwortliche Person eingetragen bist
- **Verantwortliche Funktion**: Wenn du Mitglied der verantwortlichen Funktion bist

### Über Berechtigung

- **Kontrollen (Lesen und Hinzufügen)**: Allgemeine Berechtigung für Kontrollen
- **Massnahmen (Admin)**: Vollzugriff auf alle Massnahmen und Kontrollen

> **💡 Tipp:** Mehr Details zu den Berechtigungen findest du im Kapitel [Berechtigungen]({{< ref "berechtigungen" >}}).

---

## Kontrolle erstellen

### Schritt 1: Massnahme öffnen

1. Navigiere zur Massnahme, die du kontrollieren möchtest
2. Du findest sie unter **IKS → Meine Massnahmen** oder **IKS → Alle Massnahmen**

### Schritt 2: Kontrolle hinzufügen

1. Klicke auf den grünen Button **"+ Kontrolle"** im Abschnitt "Kontrollen"
2. Eine neue Kontrolle wird automatisch erstellt mit:
   - Aktuellem **Datum**
   - Dir als **Kontrollperson**
   - Status **"in Arbeit"**
3. Du wirst direkt zur Bearbeitungsansicht weitergeleitet

> **⚠️ Wichtig:** Der Button "Kontrolle" ist nur sichtbar, wenn du die Berechtigung hast, Kontrollen für diese Massnahme hinzuzufügen.

### Schritt 3: Kontrolle ausfüllen

1. **Datum**: Prüfe oder ändere das Datum
2. **Kommentar**: Beschreibe die Kontrollergebnisse
3. **Status**: Setze den passenden Status:
   - **erledigt**: Alles in Ordnung
   - **erledigt mit Mangel**: Mängel festgestellt
   - **abgelehnt**: Massnahme nicht wirksam
   - **in Arbeit**: Kontrolle noch nicht abgeschlossen
4. **Dateien anhängen**: Lade bei Bedarf Nachweisdokumente hoch
5. Klicke auf **"Speichern"**

### Schritt 4: Checkliste abarbeiten (optional)

Wenn die Massnahme eine Checkliste enthält, wird diese automatisch in die Kontrolle kopiert:

1. Gehe die Checklistenpunkte durch
2. Hake erledigte Punkte ab
3. Die Checkliste wird als Nachweis gespeichert

---

## Kontrolle bearbeiten

1. Öffne die Massnahme
2. Finde die Kontrolle in der Kontrollen-Tabelle
3. Klicke auf das **Stift-Symbol** in der Spalte "Aktionen"
4. Bearbeite Kommentar, Status oder lade Dateien hoch
5. Klicke auf **"Speichern"**

> **⚠️ Wichtig:** Du kannst nur **deine eigenen Kontrollen** bearbeiten, es sei denn, du hast Admin-Rechte.

---

## Kontrolle löschen

1. Öffne die Massnahme
2. Finde die Kontrolle in der Kontrollen-Tabelle
3. Klicke auf das **Papierkorb-Symbol** in der Spalte "Aktionen"
4. Bestätige die Löschung

> **⚠️ Wichtig:** Du kannst nur **deine eigenen Kontrollen** löschen.

---

## Detailansicht einer Kontrolle

Wenn du eine Kontrolle öffnest, siehst du:

| Bereich | Inhalt |
|---------|--------|
| **Gehört zu** | Link zur zugehörigen Massnahme |
| **Ausgeführt durch** | Kontrollperson |
| **Status** | Aktueller Kontrollstatus |
| **Kommentar** | Beschreibung der Kontrollergebnisse (Markdown) |
| **Checkliste** | Abgehakte Checklistenpunkte |
| **Beilagen** | Hochgeladene Nachweisdokumente |

### Beilagen hochladen

Du kannst Dateien als Nachweis an eine Kontrolle anhängen:

1. Bearbeite die Kontrolle
2. Wähle eine Datei zum Hochladen aus
3. Die Datei wird als **Kontrolldatei** gespeichert

Unterstützte Formate: Alle gängigen Dokumentformate (PDF, Word, Excel, Bilder, etc.)

---

## Kontrollen in der Massnahmen-Übersicht

In der Massnahmen-Detailansicht siehst du alle Kontrollen in einer **sortierbaren Tabelle** mit:

| Spalte | Beschreibung |
|--------|--------------|
| **Datum** | Wann die Kontrolle durchgeführt wurde |
| **Benutzer** | Wer die Kontrolle durchgeführt hat |
| **Kommentar** | Zusammenfassung der Ergebnisse |
| **Status** | Ergebnis der Kontrolle |
| **Beilagen** | Anzahl Checklisten und Dateien |
| **Aktionen** | Bearbeiten und Löschen (nur eigene) |

> **💡 Tipp:** Die Tabelle ist mit **DataTables** ausgestattet. Du kannst suchen, sortieren und nach Excel exportieren.

---

## Kontroll-Workflow

Ein typischer Kontroll-Workflow sieht so aus:

```
1. Kontrolle erstellen
   ↓
2. Status: "in Arbeit"
   ↓
3. Checkliste abarbeiten (falls vorhanden)
   ↓
4. Kommentar verfassen
   ↓
5. Nachweise hochladen (optional)
   ↓
6. Status setzen:
   ├── "erledigt" → Massnahme wirksam
   ├── "erledigt mit Mangel" → Nachbesserung nötig
   └── "abgelehnt" → Massnahme nicht wirksam
   ↓
7. Speichern
```

---

## Häufige Fragen

### Wie oft muss ich eine Kontrolle durchführen?

Das hängt von der **Periodizität** der Massnahme ab. Wenn eine Periodizität definiert ist, solltest du die Kontrolle im vorgegebenen Rhythmus durchführen.

### Kann ich eine Kontrolle nachträglich ändern?

Ja, solange es deine eigene Kontrolle ist. Klicke auf das Stift-Symbol in der Kontrollen-Tabelle der Massnahme.

### Was passiert mit den Checklisten?

Checklisten der Massnahme werden bei jeder neuen Kontrolle **kopiert**. Jede Kontrolle hat also ihre eigene unabhängige Checkliste.

### Sehen andere meine Kontrollergebnisse?

Ja, alle Personen mit Lesezugriff auf die Massnahme können auch die Kontrollen einsehen.

### Kann ich Dateien an eine Kontrolle anhängen?

Ja, du kannst beliebige Dateien als Nachweisdokumente hochladen. Diese werden in der Detailansicht der Kontrolle angezeigt.

---

## Nächste Schritte

- **[Risikomap nutzen]({{< ref "risikomap" >}})**: Visualisiere Risiken und ihre Bewertungen
- **[Reports erstellen]({{< ref "reports" >}})**: Erstelle Massnahmen- und IKS-Reports
- **[Best Practices]({{< ref "best-practices" >}})**: Tipps für effektive Kontrollen

---

**Zurück zur [Übersicht](./)**

*Stand: Februar 2026*
