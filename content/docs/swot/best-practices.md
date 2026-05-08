---
title: "Best Practices"
description: ""
weight: "8"
tags:
  - "best-practices"
  - "tipps"
  - "iso"
  - "risikomanagement"
  - "workflow"
---


# Best Practices

Dieses Kapitel enthält bewährte Methoden und praktische Tipps für ein effektives Internes Kontrollsystem mit ELIZA.

## Einschätzungen richtig erfassen

### Klare Titel verwenden

Formuliere Titel so, dass der Inhalt sofort klar ist:

| Schlecht | Besser |
|----------|--------|
| Risiko IT | Ausfall der IT-Infrastruktur durch veraltete Hardware |
| Personal | Fachkräftemangel im Bereich Softwareentwicklung |
| Markt | Wechselkursrisiko CHF/EUR bei Exportgeschäften |

### Beschreibung und Analyse trennen

- **Beschreibung**: Was ist das Risiko/die Chance? (Sachverhalt)
- **Analyse / Ursache**: Warum besteht es? (Hintergrund)
- **Mögliche Massnahmen**: Was kann man tun? (Handlungsoptionen)

> **✅ Best Practice:** Nutze das Feld "Analyse / Ursache" für die Ursachenanalyse. So trennst du Beschreibung von Analyse.

### Bewertung konsistent durchführen

Definiere klare Kriterien für die Bewertungsskala und wende sie einheitlich an:

**Eintretenswahrscheinlichkeit:**

| Wert | Kriterium (Beispiel) |
|------|---------------------|
| 1 - klein | Weniger als 1× in 10 Jahren |
| 2 - gering | 1× in 5-10 Jahren |
| 3 - mittel | 1× in 1-5 Jahren |
| 4 - gross | 1× pro Jahr |
| 5 - sehr gross | Mehrmals pro Jahr |

**Auswirkung:**

| Wert | Kriterium (Beispiel) |
|------|---------------------|
| 1 - klein | Kaum spürbar, geringe Kosten (<1'000 CHF) |
| 2 - gering | Spürbar, überschaubare Kosten (1'000-10'000 CHF) |
| 3 - mittel | Deutlich spürbar, relevante Kosten (10'000-100'000 CHF) |
| 4 - gross | Schwerwiegend, hohe Kosten (100'000-500'000 CHF) |
| 5 - sehr gross | Existenzbedrohend, sehr hohe Kosten (>500'000 CHF) |

> **💡 Tipp:** Passe die Kriterien an die Grösse und Branche deines Unternehmens an. Ein KMU mit 20 Mitarbeitenden hat andere Schwellenwerte als ein Grossunternehmen.

### Risikoklassen nutzen

Nutze Risikoklassen, um Einschätzungen thematisch zu gruppieren:

- **Strategische Risiken**: Markt, Wettbewerb, Technologie
- **Operative Risiken**: Prozesse, IT, Personal
- **Finanzielle Risiken**: Liquidität, Wechselkurse, Kreditrisiken
- **Compliance-Risiken**: Gesetze, Normen, Vorschriften
- **Reputationsrisiken**: Image, Kundenzufriedenheit

---

## Massnahmen effektiv gestalten

### SMART-Prinzip anwenden

Definiere Massnahmen nach dem SMART-Prinzip:

| Kriterium | Beschreibung | Beispiel |
|-----------|--------------|----------|
| **S**pezifisch | Klar und eindeutig formuliert | "Firewall-Regeln aktualisieren" statt "IT verbessern" |
| **M**essbar | Ergebnis ist überprüfbar | "Alle Server auf aktuellen Patch-Stand bringen" |
| **A**kzeptiert | Verantwortliche Person ist einverstanden | Verantwortung klar zugewiesen |
| **R**ealistisch | Umsetzung ist machbar | Ressourcen und Budget vorhanden |
| **T**erminiert | Frist ist gesetzt | Konkretes Datum im Feld "Frist" |

### Vier-Augen-Prinzip

Weise jeder Massnahme sowohl eine **verantwortliche** als auch eine **kontrollierende** Person/Funktion zu:

- **Verantwortung**: Setzt die Massnahme um
- **Kontrolle durch**: Prüft die Wirksamkeit

> **⚠️ Wichtig:** Die verantwortliche Person sollte **nicht gleichzeitig** die kontrollierende Person sein.

### Periodizität sinnvoll einsetzen

Setze Periodizitäten für wiederkehrende Massnahmen:

| Massnahmentyp | Empfohlene Periodizität |
|---------------|------------------------|
| IT-Sicherheitschecks | 4× pro Jahr (quartalsweise) |
| Datensicherung prüfen | 2× pro Jahr |
| Jahresabschluss-Review | 1× pro Jahr |
| Compliance-Check | 1-2× pro Jahr |

---

## Kontrollen systematisch durchführen

### Regelmässigkeit sicherstellen

- Plane Kontrollen im **Kalender** ein
- Nutze die Ansicht **"Meine Massnahmen"** täglich als Checkliste
- Achte auf das **Dashboard-Widget** für überfällige Massnahmen

### Ergebnisse nachvollziehbar dokumentieren

Dokumentiere bei jeder Kontrolle:

1. **Was** wurde geprüft?
2. **Wie** wurde geprüft? (Methode)
3. **Was** war das Ergebnis?
4. **Welche** Abweichungen wurden festgestellt?
5. **Welche** Folgemassnahmen sind nötig?

> **✅ Best Practice:** Nutze das Kommentarfeld mit **Markdown-Formatierung** für strukturierte Kontrollergebnisse:

```markdown
## Prüfung Datensicherung

### Geprüft
- Backup-Protokolle der letzten 30 Tage
- Wiederherstellungstest mit Testdaten

### Ergebnis
- Alle Backups erfolgreich durchgeführt
- Wiederherstellung in 2h möglich

### Massnahmen
- Keine weiteren Massnahmen nötig
```

### Checklisten verwenden

Erstelle Checklisten für standardisierte Kontrollen:

1. Öffne die Massnahme
2. Füge über das Dropdown-Menü eine **Checkliste** hinzu
3. Definiere die Prüfpunkte
4. Bei jeder Kontrolle wird die Checkliste automatisch kopiert

---

## Reporting und Reviews

### Quartalsweises Review

Führe mindestens quartalsweise ein Review deines IKS durch:

1. **Risikomap prüfen**: Haben sich Bewertungen verändert?
2. **Massnahmen-Status**: Sind alle Massnahmen im Zeitplan?
3. **Überfällige Massnahmen**: Gibt es Handlungsbedarf?
4. **Neue Risiken**: Sind neue Risiken aufgetreten?
5. **Abgeschlossene Massnahmen**: Waren sie wirksam?

### Management Review

Bereite das jährliche Management Review vor mit:

1. **IKS-Report** als Word (alle aktiven Einschätzungen nach Schweregrad)
2. **Massnahmen-Report** als Word (alle Massnahmen inkl. Kontrollen)
3. **Risikomap** als Screenshot oder Ausdruck
4. **Trends**: Vergleich mit den Reports der Vorperiode

### ISO 9001 / ISO 14001 Compliance

Das IKS-Modul unterstützt die Anforderungen von:

- **ISO 9001:2015 Kapitel 6.1**: Massnahmen zum Umgang mit Risiken und Chancen
- **ISO 14001:2015 Kapitel 6.1**: Umweltaspekte, Risiken und Chancen
- **ISO 45001 Kapitel 6.1**: Gefährdungen und Chancen im Arbeitsschutz

> **💡 Tipp:** Verknüpfe Einschätzungen mit **Prozessen** und **Interessierten Parteien**, um die Anforderungen der ISO-Normen nachvollziehbar zu erfüllen.

---

## Berechtigungskonzept

### Empfohlene Rollenverteilung

| Rolle | Berechtigung | Aufgaben |
|-------|-------------|----------|
| **QM-Beauftragter** | IKS (Admin) | Gesamtverantwortung, Einschätzungen erstellen und verwalten |
| **Risikoverantwortlicher** | IKS (Hinzufügen) | Eigene Einschätzungen erfassen und bewerten |
| **Massnahmenverantwortlicher** | Massnahmen (Lesen und Hinzufügen) | Massnahmen umsetzen und dokumentieren |
| **Controller** | Kontrollen (Lesen und Hinzufügen) | Wirksamkeit prüfen und dokumentieren |
| **Management** | IKS (Lesen) | Übersicht und Reports einsehen |
| **Auditor** | IKS (Lesen) | Einsicht für Auditzwecke |

### Funktionen statt Einzelpersonen

Nutze **Funktionen** statt einzelne Personen als Controller:

- **Vorteil**: Wenn eine Person die Funktion wechselt, müssen nicht alle Massnahmen angepasst werden
- **Vorteil**: Mehrere Personen können die Kontrolle übernehmen (z.B. bei Abwesenheit)
- **Vorteil**: Zentrale Verwaltung über die Organisationsstruktur

Mehr dazu: [Berechtigungen]({{< ref "berechtigungen" >}})

---

## Häufige Fehler vermeiden

### Bei Einschätzungen

| Fehler | Lösung |
|--------|--------|
| Zu vage formuliert | Konkrete, messbare Beschreibungen verwenden |
| Bewertung nicht aktualisiert | Regelmässig überprüfen und anpassen |
| Keine Risikoklassen verwendet | Klassifizierung für bessere Strukturierung nutzen |
| Keine Verknüpfung zu Prozessen | Prozessverknüpfung für Nachvollziehbarkeit herstellen |

### Bei Massnahmen

| Fehler | Lösung |
|--------|--------|
| Keine Frist gesetzt | Immer eine realistische Frist definieren |
| Keine Verantwortung zugewiesen | Verantwortliche Person ODER Funktion festlegen |
| Kein Controller definiert | Kontrollierende Person/Funktion zuweisen |
| Massnahme zu allgemein | SMART-Prinzip anwenden |

### Bei Kontrollen

| Fehler | Lösung |
|--------|--------|
| Kontrollen werden vergessen | Periodizität setzen, Dashboard nutzen |
| Ergebnisse zu knapp dokumentiert | Strukturierte Dokumentation im Kommentarfeld |
| Keine Nachweise | Dateien als Beilagen anhängen |
| Verantwortlicher kontrolliert sich selbst | Vier-Augen-Prinzip beachten |

---

## Zusammenfassung

### Die 10 wichtigsten Regeln

1. **Einschätzungen klar formulieren** - Titel und Beschreibung aussagekräftig gestalten
2. **Bewertung einheitlich** - Definierte Kriterien konsistent anwenden
3. **Massnahmen SMART definieren** - Spezifisch, messbar, akzeptiert, realistisch, terminiert
4. **Vier-Augen-Prinzip** - Verantwortung und Kontrolle trennen
5. **Fristen setzen** - Jede Massnahme braucht einen Termin
6. **Regelmässig kontrollieren** - Periodizität nutzen
7. **Ergebnisse dokumentieren** - Nachvollziehbar und strukturiert
8. **Risikoklassen nutzen** - Für bessere Übersicht und Auswertung
9. **Reports erstellen** - Mindestens quartalsweise
10. **Berechtigungen pflegen** - Funktionen statt Einzelpersonen verwenden

---

**Zurück zur [Übersicht](./)**

*Stand: Februar 2026*
