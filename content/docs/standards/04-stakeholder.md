---
title: "Interessierte Parteien (Stakeholder)"
description: ""
weight: "4"
tags:
  - "stakeholder"
  - "interessierte-parteien"
  - "bewertung"
  - "kontext"
---


# Interessierte Parteien (Stakeholder)

Dieses Kapitel zeigt dir, wie du interessierte Parteien (Stakeholder) im Standards-Modul erfasst und bewertest.

## Was sind interessierte Parteien?

Interessierte Parteien sind Personen, Gruppen oder Organisationen, die:
- Ein **Interesse** an deinem Unternehmen haben
- Einen **Einfluss** auf dein Unternehmen ausüben können

**Typische Stakeholder:**

- Kunden
- Lieferanten
- Mitarbeitende
- Eigentümer/Aktionäre
- Behörden und Regulierungsstellen
- Verbände und Zertifizierungsstellen
- Anwohner und Öffentlichkeit
- Medien
- Konkurrenten
- Finanzinstitute

## Warum Stakeholder erfassen?

Viele Managementsystem-Normen fordern die Identifikation interessierter Parteien:

**ISO 9001 (Qualitätsmanagement)**
- Kapitel 4.2: "Verstehen der Erfordernisse interessierter Parteien"

**ISO 14001 (Umweltmanagement)**
- Kapitel 4.2: "Erfordernisse interessierter Parteien"

**ISO 45001 (Arbeitsschutz)**
- Kapitel 4.2: "Erfordernisse der Mitarbeitenden und anderer interessierter Parteien"

**Vorteile der systematischen Stakeholder-Analyse:**

- ✅ Anforderungen vollständig erfassen
- ✅ Risiken frühzeitig erkennen
- ✅ Chancen identifizieren
- ✅ Kommunikation gezielt steuern
- ✅ Audit-Anforderungen erfüllen

## Stakeholder erstellen

### Schritt-für-Schritt Anleitung

**Schritt 1: Zur Stakeholder-Liste navigieren**

1. Öffne das Standards-Modul
2. Navigiere zu **Stakeholder** (über die URL oder Suche)

> **💡 Tipp:** Die direkte URL ist `/standards/stakeholders/`

**Schritt 2: Neuen Stakeholder anlegen**

1. Klicke auf **"Hinzufügen"** (+ Symbol)
2. Das Formular öffnet sich

**Schritt 3: Formular ausfüllen**

| Feld | Pflicht | Beschreibung | Beispiel |
|------|---------|--------------|----------|
| **Titel** | Ja | Name des Stakeholders | "Kunden Schweiz" |
| **Beschreibung** | Nein | Details zur Partei | "Alle Kunden im Schweizer Markt" |
| **Interesse am Unternehmen** | Nein | Wie gross ist das Interesse? | "gross" (Auswahl) |
| **Einfluss auf das Unternehmen** | Nein | Wie gross ist der Einfluss? | "gross" (Auswahl) |

**Feld-Details:**

**Titel** (Pflichtfeld)
- Eindeutige Bezeichnung
- Kann eine Gruppe oder Organisation sein
- Beispiele: "Hauptkunden", "Lokale Behörden", "Mitarbeitende"

**Beschreibung** (optional, aber empfohlen)
- Wer gehört dazu?
- Welche Erwartungen haben sie?
- Welche Anforderungen stellen sie?

**Interesse am Unternehmen** (Auswahl)

Optionen:
- **-** (nicht bewertet)
- **klein** - Geringes Interesse
- **mittel** - Moderates Interesse
- **gross** - Hohes Interesse

**Einfluss auf das Unternehmen** (Auswahl)

Optionen:
- **-** (nicht bewertet)
- **klein** - Geringer Einfluss
- **mittel** - Moderater Einfluss
- **gross** - Hoher Einfluss

**Schritt 4: Speichern**

1. Klicke auf **"Speichern"**
2. Der Stakeholder wird erstellt
3. Du siehst die Detailansicht

## Bewertungsmatrix verstehen

Die Bewertung erfolgt nach zwei Dimensionen: **Interesse** und **Einfluss**.

### Bewertungsstufen

| Stufe | Wert | Bedeutung |
|-------|------|-----------|
| - | 0 | Noch nicht bewertet |
| klein | 1 | Niedrig |
| mittel | 2 | Mittel |
| gross | 3 | Hoch |

### Risikobewertung (Rating)

Das System berechnet automatisch ein Rating:

```
Rating = Interesse × Einfluss
```

**Beispiele:**

| Interesse | Einfluss | Rating | Bedeutung |
|-----------|----------|--------|-----------|
| gross (3) | gross (3) | 9 | Sehr hohes Risiko |
| gross (3) | mittel (2) | 6 | Hohes Risiko |
| mittel (2) | mittel (2) | 4 | Mittleres Risiko |
| klein (1) | klein (1) | 1 | Niedriges Risiko |

### Farb-Codierung

Die Stakeholder werden farblich gekennzeichnet:

| Rating | Farbe | Priorität | Handlung |
|--------|-------|-----------|----------|
| 8-9 | Rot | Sehr hoch | Eng einbinden, kontinuierlich managen |
| 4-7 | Orange | Hoch | Regelmässig informieren, Anforderungen kennen |
| 0-3 | Grün | Niedrig | Beobachten, bei Bedarf informieren |

## Stakeholder-Matrix visualisieren

Die Interesse-Einfluss-Matrix hilft, Stakeholder zu priorisieren:

<pre>
             Einfluss
              klein    mittel    gross
Interesse
  ┌─────────┬─────────┬─────────┬─────────┐
g │         │         │         │ Rot     │
r │ Grün    │ Grün    │ Orange  │ Key     │
o │         │         │         │ Player  │
s ├─────────┼─────────┼─────────┼─────────┤
s │         │         │ Orange  │ Orange  │
  │ Grün    │ Grün    │         │         │
m │         │         │         │         │
i ├─────────┼─────────┼─────────┼─────────┤
t │         │ Orange  │ Orange  │ Orange  │
t │ Grün    │         │         │         │
e │         │         │         │         │
l ├─────────┼─────────┼─────────┼─────────┤
  │         │         │         │ Orange  │
k │ Grün    │ Grün    │ Orange  │         │
l │         │         │         │         │
e ├─────────┼─────────┼─────────┼─────────┤
i │ Grün    │ Grün    │ Grün    │ Grün    │
n │         │         │         │         │
  └─────────┴─────────┴─────────┴─────────┘
</pre>

**Strategien nach Quadrant:**

**Key Player (Rot: hoch/hoch)**
- Engste Zusammenarbeit
- Kontinuierliche Kommunikation
- Anforderungen höchste Priorität

**Wichtig halten (Orange: hoch/mittel oder mittel/hoch)**
- Regelmässig informieren
- Einbindung bei wichtigen Themen
- Zufriedenheit sicherstellen

**Informiert halten (Grün: niedrig in mind. einer Dimension)**
- Grundinformation bereitstellen
- Bei Bedarf kontaktieren
- Beobachten auf Veränderungen

## Stakeholder bearbeiten

### Bewertung anpassen

**Schritt 1: Stakeholder öffnen**

1. Navigiere zur Stakeholder-Liste
2. Klicke auf den gewünschten Stakeholder

**Schritt 2: Bearbeiten**

1. Klicke auf **"Bearbeiten"** (Stift-Symbol)
2. Passe Interesse und/oder Einfluss an
3. Aktualisiere die Beschreibung bei Bedarf

**Schritt 3: Speichern**

1. Klicke auf **"Speichern"**
2. Das Rating wird automatisch neu berechnet
3. Die Farbe passt sich an

> **💡 Tipp:** Überprüfe die Stakeholder-Bewertungen regelmässig, z.B. jährlich oder bei wesentlichen Änderungen im Unternehmensumfeld.

## Stakeholder-Analyse durchführen

### Vorgehen bei der Identifikation

**Schritt 1: Brainstorming**

Sammle alle potenziellen Stakeholder in einem Workshop:
- Wer hat Erwartungen an uns?
- Wer kann unseren Erfolg beeinflussen?
- Wer ist von unseren Aktivitäten betroffen?

**Schritt 2: Kategorisieren**

Gruppiere die Stakeholder:
- Interne vs. externe Parteien
- Primäre vs. sekundäre Stakeholder
- Individuen vs. Organisationen

**Schritt 3: Im System erfassen**

Erstelle für jede Gruppe einen Stakeholder-Eintrag:
- Aussagekräftiger Titel
- Detaillierte Beschreibung
- Erste Bewertung

**Schritt 4: Bewerten**

Für jeden Stakeholder:
1. Interesse bewerten (klein/mittel/gross)
2. Einfluss bewerten (klein/mittel/gross)
3. Farb-Code beachten

**Schritt 5: Anforderungen ableiten**

Für kritische Stakeholder (orange/rot):
- Welche Anforderungen haben sie?
- Wie kommunizieren wir mit ihnen?
- Welche Massnahmen sind nötig?

### Anforderungen dokumentieren

In der **Beschreibung** des Stakeholders kannst du erfassen:

**Erwartungen:**
- Was erwartet diese Partei von uns?

**Anforderungen:**
- Welche konkreten Forderungen gibt es?

**Kommunikation:**
- Wie informieren wir sie?
- Wie oft findet Austausch statt?

**Risiken:**
- Was passiert bei Nichterfüllung?

**Chancen:**
- Welche Potenziale ergeben sich?

**Beispiel-Beschreibung:**

```markdown
**Erwartungen:**
- Hochwertige Produkte zu fairen Preisen
- Pünktliche Lieferung
- Umweltfreundliche Produktion

**Anforderungen:**
- ISO 9001 Zertifizierung
- RoHS-Konformität
- Liefertreue > 95%

**Kommunikation:**
- Quartalsweise Newsletter
- Jährliche Kundenzufriedenheitsbefragung
- Account Manager als Ansprechpartner

**Massnahmen:**
- QM-System nach ISO 9001 etabliert
- Lieferketten-Monitoring implementiert
- Kundenfeedback-Prozess aktiv
```

## Stakeholder löschen

**Schritt 1: Stakeholder öffnen**

1. Navigiere zum Stakeholder

**Schritt 2: Löschen**

1. Klicke auf **"Löschen"**
2. Bestätige die Sicherheitsabfrage

> **⚠️ Wichtig:** Gelöschte Stakeholder können nicht wiederhergestellt werden.

## Integration mit Normen

Stakeholder-Informationen können in Normen referenziert werden.

### Verknüpfung zu Kapiteln

In Kapiteln wie "4.2 Interessierte Parteien":

**Im Feld "Erfüllt durch":**

```
Stakeholder-Analyse durchgeführt am DD.MM.YYYY

Identifizierte Stakeholder:
- Kunden Schweiz (Rating: 9, rot)
- Behörden (Rating: 6, orange)
- Mitarbeitende (Rating: 8, rot)
- Lieferanten (Rating: 4, orange)

Dokumentiert in: /standards/stakeholders/

Massnahmen:
- Kundenbefragung quartalsweise
- Compliance-Monitoring für Behörden-Anforderungen
- Mitarbeiter-Feedback-System etabliert
```

### Massnahmen aus Stakeholder-Anforderungen

Für kritische Stakeholder (orange/rot) sollten Massnahmen definiert werden:

1. Öffne die Stakeholder-Detailansicht
2. Erfasse Massnahmen (falls Funktion verfügbar)
3. Oder verknüpfe in der Beschreibung mit bestehenden Massnahmen

## Häufige Fragen

### Wie viele Stakeholder sollte ich erfassen?

**Richtwert:** 10-20 Stakeholder-Gruppen

**Zu viele Stakeholder:**
- Analyse wird unübersichtlich
- Aufwand zu hoch

**Zu wenige Stakeholder:**
- Wichtige Anforderungen übersehen
- Audit-Anforderung nicht erfüllt

> **💡 Tipp:** Fasse ähnliche Parteien zu Gruppen zusammen (z.B. "Alle Kunden" statt jeden einzelnen Kunden).

### Muss ich alle Stakeholder bewerten?

Nein, du kannst auch Stakeholder ohne Bewertung erfassen (Interesse/Einfluss = "-"). Diese erscheinen dann mit Rating 0 (grün).

Empfehlung: Mindestens die wichtigsten Stakeholder bewerten.

### Wie oft sollte ich die Bewertung aktualisieren?

**Empfohlene Intervalle:**
- **Jährlich** - Routinemässige Überprüfung
- **Bei Veränderungen** - Neue Gesetze, Marktsituation, Strategie
- **Vor Audits** - Aktualität sicherstellen

### Können Stakeholder mehrere Bewertungen haben?

Nein, pro Stakeholder gibt es eine Bewertung für Interesse und Einfluss. Bei wechselnder Bedeutung:

**Option 1:** Bewertung aktualisieren
**Option 2:** Mehrere Stakeholder-Einträge für unterschiedliche Kontexte

## Best Practices

### ✅ Empfohlene Vorgehensweisen

**Stakeholder als Gruppen erfassen**
- ✅ "Kunden Schweiz", "Kunden EU"
- ❌ Nicht jeden einzelnen Kunden

**Beschreibung detailliert ausfüllen**
- Erwartungen dokumentieren
- Anforderungen listen
- Kommunikationswege beschreiben

**Kritische Stakeholder priorisieren**
- Rote und orange Stakeholder zuerst bearbeiten
- Anforderungen in Prozesse/Dokumente überführen
- Massnahmen definieren

**Regelmässig überprüfen**
- Jährliche Review-Termine festlegen
- Bei wesentlichen Änderungen aktualisieren
- Vor Audits Vollständigkeit prüfen

**Stakeholder-Analyse dokumentieren**
- Wann wurde die Analyse durchgeführt?
- Wer war beteiligt?
- Welche Methoden wurden verwendet?

### ❌ Häufige Fehler vermeiden

**Keine zu granulare Erfassung**
- ❌ 100+ einzelne Stakeholder
- ✅ 10-20 sinnvolle Gruppen

**Keine veralteten Bewertungen**
- ❌ 5 Jahre alte Stakeholder-Liste
- ✅ Regelmässige Updates

**Keine Bewertung ohne Konsequenzen**
- ❌ Hohe Ratings ohne Massnahmen
- ✅ Kritische Stakeholder aktiv managen

**Keine Beschreibung nur mit Titel**
- ❌ Stakeholder "Kunden" ohne weitere Infos
- ✅ Erwartungen und Anforderungen dokumentieren

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Was interessierte Parteien sind und warum sie wichtig sind
- ✅ Stakeholder zu erstellen und zu bewerten
- ✅ Die Bewertungsmatrix (Interesse × Einfluss) zu verstehen
- ✅ Stakeholder nach Priorität zu managen
- ✅ Stakeholder-Analysen durchzuführen
- ✅ Best Practices für effektives Stakeholder-Management

## Nächste Schritte

Nachdem du Stakeholder erfasst hast:

- [Integration]({{< ref "05-integration" >}}) - Verknüpfe Stakeholder-Anforderungen mit Prozessen und Dokumenten
- [Best Practices]({{< ref "07-best-practices" >}}) - Optimiere dein Stakeholder-Management
- [Kapitel und Erfüllung]({{< ref "03-kapitel-erfuellung" >}}) - Dokumentiere die Umsetzung in Normkapiteln

> **💡 Tipp:** Die Stakeholder-Analyse ist ein lebendiges Dokument. Behandle sie nicht als einmalige Übung, sondern als kontinuierlichen Prozess!
