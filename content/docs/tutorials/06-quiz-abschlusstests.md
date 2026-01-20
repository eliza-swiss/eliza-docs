---
title: "Quiz und Abschlusstests"
slug: "quiz-abschlusstests"
weight: 6
category: "Kurserstellung"
tags: ["quiz", "test", "wissenskontrolle", "abschlusstest", "formulare", "bewertung"]
---

# Quiz und Abschlusstests

Das Tutorials-Modul ermöglicht die Integration von Quiz und Tests aus dem Forms-Modul, um das Wissen der Teilnehmer zu überprüfen.

## Übersicht

Quiz und Tests in ELIZA:

- **Nutzen Formular-Vorlagen** aus dem Forms-Modul
- **Können pro Lektion zugewiesen** werden
- **Unterstützen verschiedene Typen**: Quiz, Wissenskontrolle, Abschlusstest
- **Ermöglichen Bestehens-Kriterien** und Versuchsbegrenzungen
- **Werden im Kursabschluss berücksichtigt**

---

## Quiz-Typen

### Zuweisungsarten

| Typ | Beschreibung | Verwendung |
|-----|--------------|------------|
| **Quiz (optional)** | Freiwillige Selbsteinschätzung | Zwischendurch, ohne Druck |
| **Wissenskontrolle** | Pflicht-Überprüfung | Wichtige Konzepte sichern |
| **Abschlusstest** | Finale Prüfung für Kursabschluss | Zertifizierung, Compliance |

### Wann welchen Typ verwenden?

- **Quiz (optional)**: Für Selbstreflexion, motiviert ohne Zwang
- **Wissenskontrolle**: Wenn bestimmtes Wissen vermittelt werden MUSS
- **Abschlusstest**: Für offizielle Qualifikationsnachweise

---

## Quiz einer Lektion zuweisen

### Voraussetzungen

- Das Forms-Modul muss aktiviert sein
- Eine Formular-Vorlage (Quiz-Template) muss existieren
- Du benötigst Bearbeitungsrechte für die Lektion

### Schritt-für-Schritt

1. **Öffne die Lektion**, der du ein Quiz hinzufügen möchtest
2. **Klicke auf**: "Quiz zuweisen" oder das entsprechende Symbol
3. **Wähle die Formular-Vorlage** (das Quiz aus dem Forms-Modul)
4. **Konfiguriere die Zuweisung**:
   - **Zuweisungsart**: Quiz, Wissenskontrolle oder Abschlusstest
   - **Erforderlich**: Muss bestanden werden für Lektionsabschluss?
   - **Mindest-Score**: Prozentsatz zum Bestehen (Standard: 70%)
   - **Maximale Versuche**: Wie oft darf wiederholt werden? (0 = unbegrenzt)
5. **Speichere**

---

## Quiz-Einstellungen

### Formular-Zuweisung (LessonFormAssignment)

| Feld | Beschreibung | Standard |
|------|--------------|----------|
| **Formular-Vorlage** | Quiz aus dem Forms-Modul | - |
| **Zuweisungsart** | Quiz/Wissenskontrolle/Abschlusstest | Quiz |
| **Erforderlich** | Muss bestanden werden? | Nein |
| **Mindest-Score** | Prozent zum Bestehen (0-100) | 70% |
| **Maximale Versuche** | Wiederholungen erlaubt (0=unbegrenzt) | 1 |
| **Reihenfolge** | Position in der Lektion | 0 |

### Bestehens-Logik

Ein Quiz gilt als bestanden, wenn:

```
Erreichter Score >= Mindest-Score zum Bestehen
```

Beispiel: Bei 70% Mindest-Score und 15 von 20 Punkten (75%) → **Bestanden** ✅

---

## Quiz aus Teilnehmersicht

### Quiz starten

1. **Öffne die Lektion** mit dem zugewiesenen Quiz
2. **Klicke auf**: "Quiz starten" oder "Test beginnen"
3. **Beantworte die Fragen** im Formular
4. **Reiche das Quiz ein**: "Absenden" oder "Einreichen"

### Ergebnis anzeigen

Nach dem Einreichen siehst du:

- **Score**: Erreichte Punktzahl in Prozent
- **Bestanden/Nicht bestanden**: Ergebnis gegenüber Mindest-Score
- **Versuche verbraucht**: Anzahl deiner Versuche
- **Verbleibende Versuche**: Falls begrenzt

### Quiz wiederholen

Falls du nicht bestanden hast und noch Versuche übrig sind:

1. Das Quiz zeigt "Quiz wiederholen" an
2. Klicke darauf, um einen neuen Versuch zu starten
3. Dein bester Score wird für die Bewertung verwendet

> **💡 Tipp:** Lies die Lektion nochmals durch, bevor du das Quiz wiederholst.

---

## Bereits bestanden / Maximale Versuche

### Quiz bereits bestanden

Wenn du ein Quiz bereits bestanden hast:

- Du siehst dein bestes Ergebnis
- Eine erneute Teilnahme ist nicht mehr nötig
- Der Fortschritt ist gesichert

### Maximale Versuche erreicht

Wenn alle Versuche aufgebraucht sind:

- Du kannst das Quiz nicht mehr wiederholen
- Dein bestes Ergebnis zählt
- Falls nicht bestanden: Kontaktiere den Kursadministrator

---

## Quiz-Ergebnisse für Administratoren

### Abgaben einsehen

Als Administrator kannst du:

1. **Öffne die Lektion** mit dem Quiz
2. **Navigiere zu**: Quiz-Übersicht oder Teilnehmer-Tab
3. **Sieh alle Abgaben** (Submissions) mit:
   - Teilnehmername
   - Versuchsnummer
   - Score
   - Bestanden ja/nein
   - Einreichungsdatum

### LessonFormSubmission

Jede Quiz-Abgabe wird als LessonFormSubmission gespeichert:

| Feld | Beschreibung |
|------|--------------|
| **Benutzer** | Wer hat eingereicht |
| **Versuchs-Nummer** | Wievielter Versuch |
| **Score** | Erreichte Punktzahl (%) |
| **Bestanden** | Ja/Nein |
| **Eingereicht am** | Zeitstempel |

---

## Kurs-Abschlussanforderungen

### CourseCompletionRequirement

Du kannst Anforderungen für den Kursabschluss definieren:

1. **Öffne den Kurs** zur Bearbeitung
2. **Konfiguriere die Abschluss-Anforderungen**:
   - **Alle Lektionen erforderlich**: Ja/Nein
   - **Abschlusstest erforderlich**: Ja/Nein
   - **Mindest-Quiz-Bestehensrate**: X% aller Quiz müssen bestanden sein

### Anforderungs-Optionen

| Option | Beschreibung |
|--------|--------------|
| **Alle Lektionen erforderlich** | Alle freigegebenen Lektionen müssen completed sein |
| **Abschlusstest erforderlich** | Der verknüpfte Abschlusstest muss bestanden werden |
| **Mindest-Quiz-Bestehensrate** | X% aller erforderlichen Quiz müssen bestanden sein |

### Beispiel-Konfigurationen

**Einfacher Kurs ohne Tests:**
- Alle Lektionen erforderlich: ✅
- Abschlusstest erforderlich: ❌
- Mindest-Quiz-Bestehensrate: 0%

**Compliance-Schulung mit Test:**
- Alle Lektionen erforderlich: ✅
- Abschlusstest erforderlich: ✅
- Mindest-Quiz-Bestehensrate: 0%

**Intensivkurs mit hohen Anforderungen:**
- Alle Lektionen erforderlich: ✅
- Abschlusstest erforderlich: ✅
- Mindest-Quiz-Bestehensrate: 80%

---

## Abschluss prüfen

### Automatische Prüfung

Bei jedem Versuch, einen Kurs abzuschliessen, werden alle Anforderungen geprüft:

```
1. Sind alle Lektionen abgeschlossen? (falls erforderlich)
2. Ist der Abschlusstest bestanden? (falls erforderlich)
3. Sind genug Quiz bestanden? (falls Quote > 0%)
```

Falls nicht alle Anforderungen erfüllt sind:

- Der Abschluss wird verweigert
- Eine Liste der fehlenden Anforderungen wird angezeigt

### Fehlermeldungen

| Meldung | Bedeutung |
|---------|-----------|
| "Nicht alle Lektionen abgeschlossen" | Lektionen noch offen |
| "Abschlusstest nicht bestanden" | Final-Test fehlt oder nicht bestanden |
| "Nur X% der Quiz bestanden (erforderlich: Y%)" | Quiz-Quote nicht erreicht |

---

## Best Practices

### ✅ Empfehlungen

- **Sinnvolle Mindest-Scores**: 60-80% für normale Quiz, höher für kritische Themen
- **Mehrere Versuche erlauben**: Fördert Lernen statt Frustration
- **Quiz am Ende von Lektionen**: Nach dem Lerninhalt
- **Abschlusstests für wichtige Kurse**: Compliance, Sicherheit
- **Feedback in Formularen**: Hilft beim Lernen

### ❌ Häufige Fehler

- Zu hohe Mindest-Scores setzen (>90%)
- Nur einen Versuch erlauben
- Quiz ohne vorheriges Lernmaterial
- Keine Feedback-Optionen in Formularen
- Zu viele Quiz pro Lektion

---

## Integration mit Forms-Modul

### Quiz-Formular erstellen

Im Forms-Modul:

1. Erstelle eine neue Formular-Vorlage
2. Füge Fragen hinzu (Multiple Choice, Richtig/Falsch, etc.)
3. Definiere Punktwerte für Fragen
4. Aktiviere die Bewertungsfunktion
5. Speichere als Quiz-Template

### Punkteberechnung

Die Punkteberechnung erfolgt im Forms-Modul:

- Jede Frage hat einen Punktwert
- Richtige Antworten geben volle Punkte
- Der Gesamtscore wird als Prozent berechnet

---

## Nächste Schritte

- **[Kapitel 7: Berechtigungen](07_berechtigungen.md)**: Verstehe das Zugriffskonzept
- **Forms-Modul Dokumentation**: Erfahre mehr über Formular-Erstellung

---

## Zusammenfassung

✅ Du verstehst die verschiedenen Quiz-Typen
✅ Du kannst Quiz zu Lektionen zuweisen
✅ Du weisst, wie Bestehens-Kriterien funktionieren
✅ Du verstehst die Kurs-Abschlussanforderungen
✅ Du kannst Quiz-Ergebnisse einsehen
✅ Du kennst die Integration mit dem Forms-Modul
