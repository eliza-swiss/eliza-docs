---
title: "Arbeitsablauf"
description: ""
weight: "3"
tags:
  - "workflows"
  - "anwendungsfälle"
  - "szenarien"
  - "iso9001"
---


# Arbeitsablauf

Dieses Kapitel zeigt dir typische Arbeitsabläufe und praktische Anwendungsszenarien für den Kontext.

## Ersteinrichtung des Kontext

### Szenario: ISO 9001 Zertifizierung vorbereiten

**Ausgangssituation:**

Dein Unternehmen plant die ISO 9001 Zertifizierung. Die Norm fordert in Kapitel 4 die Dokumentation des Organisationskontexts.

**Ziel:**

- Alle relevanten interessierten Parteien identifizieren
- Interne und externe Themen erfassen
- Verknüpfungen zu Prozessen herstellen

### Schritt 1: Themenarten anlegen

**Aktion:**

Erstelle zunächst die grundlegenden Themenarten.

**Vorgehensweise:**

1. Navigation → Kontext → Themenarten
2. Button "Neue Themenart"
3. Erstelle folgende Arten:

**Themenart 1: Interne Themen**

```text
Name: Interne Themen
Beschreibung: Faktoren und Bedingungen innerhalb der Organisation,
              die Einfluss auf das QM-System haben.
```

**Themenart 2: Externe Themen**

```text
Name: Externe Themen
Beschreibung: Faktoren und Bedingungen aus der Umwelt der Organisation,
              die Einfluss auf das QM-System haben.
```

4. Speichern

**Ergebnis:**

✅ Grundstruktur für Themenmanagement ist vorhanden

### Schritt 2: Interessierte Parteien erfassen

**Aktion:**

Identifiziere die wichtigsten Stakeholder.

**Workshop-Ansatz:**

Führe einen Workshop mit der Geschäftsleitung durch:

**Brainstorming-Fragen:**

- Wer hat Einfluss auf unser Unternehmen?
- Wer hat Interesse an unseren Produkten/Dienstleistungen?
- Wen beeinflussen wir mit unseren Tätigkeiten?

**Typische Stakeholder:**

| Kategorie | Beispiele |
|-----------|-----------|
| **Kunden** | Direktkunden, Endkunden, Händler |
| **Lieferanten** | Zulieferer, Dienstleister, Partner |
| **Mitarbeitende** | Angestellte, Temporäre, Führungskräfte |
| **Eigentümer** | Aktionäre, Geschäftsleitung, Inhaber |
| **Behörden** | Ämter, Aufsichtsbehörden, Zertifizierer |
| **Öffentlichkeit** | Medien, Anwohner, Gesellschaft |
| **Wettbewerber** | Direkte, Indirekte Konkurrenten |
| **Finanzpartner** | Banken, Investoren, Versicherungen |

**Erfassung in ELIZA:**

Für jeden Stakeholder:

1. Dashboard → Button "Interessierte Partei"
2. Formular ausfüllen:

**Beispiel: Kunden**

```text
Name: Kunden
Beschreibung: Unsere direkten Auftraggeber aus der Industrie.

Interesse am Unternehmen: gross (3)
Einfluss auf das Unternehmen: gross (3)
→ Rating: 9 → Rot (hohe Priorität)

Verantwortung: Vertriebsleitung, Kundenservice
```

3. Speichern
4. Wiederholen für alle Stakeholder

**Tipp:**

Beginne mit den 5-10 wichtigsten Stakeholdern. Details können später ergänzt werden.

### Schritt 3: Interne Themen erfassen

**Aktion:**

Erfasse relevante interne Faktoren.

**Brainstorming-Fragen:**

- Welche internen Stärken haben wir?
- Wo sehen wir interne Schwächen?
- Welche Ressourcen stehen uns zur Verfügung?
- Wo gibt es interne Herausforderungen?

**Typische interne Themen:**

| Thema | Beschreibung | Beispiel-Bewertung |
|-------|--------------|-------------------|
| **Unternehmenskultur** | Werte, Führungsstil, Zusammenarbeit | Stärke |
| **Prozessreife** | Reifegrad der Geschäftsprozesse | Verbesserungspotenzial |
| **Wissen & Kompetenzen** | Know-how der Mitarbeitenden | Stärke |
| **Ressourcen** | Verfügbare finanzielle/personelle Mittel | Schwäche |
| **Technologie** | IT-Infrastruktur, Digitalisierungsgrad | Verbesserungspotenzial |
| **Innovation** | Fähigkeit zu Innovationen | Stärke |

**Erfassung in ELIZA:**

Für jedes Thema:

1. Dashboard → Button "Thema"
2. Formular ausfüllen:

**Beispiel: Prozessreife**

```text
Titel: Prozessreife

Beschreibung:
Der aktuelle Reifegrad unserer Geschäftsprozesse liegt bei Stufe 2
(definiert). Wir arbeiten daran, auf Stufe 3 (gesteuert) zu kommen.

**Massnahmen:**
- Prozess-KPIs einführen
- Regelmässige Process Reviews etablieren
- Prozess-Owner benennen

Typ: [x] Interne Themen

Verantwortung: QM-Beauftragter, Prozess-Koordinator
```

3. Speichern

### Schritt 4: Externe Themen erfassen

**Aktion:**

Erfasse relevante externe Faktoren.

**Brainstorming-Fragen:**

- Welche externen Chancen gibt es?
- Welche externen Risiken sehen wir?
- Welche Markttrends beeinflussen uns?
- Welche regulatorischen Anforderungen gelten?

**Typische externe Themen:**

| Thema | Beschreibung | Beispiel-Bewertung |
|-------|--------------|-------------------|
| **Fachkräftemangel** | Schwierigkeiten bei Rekrutierung | Risiko |
| **Digitalisierung** | Zunehmende Automatisierung | Chance |
| **Regulierung** | Neue Gesetze, Vorschriften | Risiko |
| **Wirtschaftslage** | Konjunktur, Nachfrage | Chance/Risiko |
| **Technologie-Trends** | Neue Technologien am Markt | Chance |
| **Wettbewerb** | Konkurrenzsituation | Risiko |

**Erfassung in ELIZA:**

**Beispiel: Fachkräftemangel**

```text
Titel: Fachkräftemangel

Beschreibung:
In unserer Branche herrscht akuter Fachkräftemangel. Offene Stellen
können oft monatelang nicht besetzt werden.

**Auswirkungen:**
- Projektverzögerungen
- Überlastung bestehender Mitarbeiter
- Qualitätsrisiken

**Gegenmassnahmen:**
- Employer Branding verstärken
- Ausbildungsoffensive starten
- Flexible Arbeitsmodelle anbieten

Typ: [x] Externe Themen

Verantwortung: HR-Leitung, Geschäftsleitung
```

### Schritt 5: Bewertungen vornehmen

**Aktion:**

Bewerte alle interessierten Parteien nach Interesse und Einfluss.

**Bewertungs-Workshop:**

Führe einen Workshop mit den relevanten Führungskräften durch:

**Bewertungskriterien:**

**Interesse (1-3):**

- **Klein (1)**: Partei zeigt wenig Interesse an uns
- **Mittel (2)**: Partei zeigt moderates Interesse
- **Gross (3)**: Partei ist stark an uns interessiert

**Einfluss (1-3):**

- **Klein (1)**: Partei kann uns kaum beeinflussen
- **Mittel (2)**: Partei hat moderaten Einfluss
- **Gross (3)**: Partei hat grossen Einfluss auf uns

**Bewertungs-Matrix:**

```text
           Einfluss →
Interesse  │  1  │  2  │  3  │
     ↓     ├─────┼─────┼─────┤
     1     │  1  │  2  │  3  │ 🟢 Grün
           ├─────┼─────┼─────┤
     2     │  2  │  4  │  6  │ 🟠 Orange
           ├─────┼─────┼─────┤
     3     │  3  │  6  │  9  │ 🔴 Rot
```

**Beispiel-Bewertungen:**

| Stakeholder | Interesse | Einfluss | Rating | Farbe |
|-------------|-----------|----------|--------|-------|
| Kunden | 3 | 3 | 9 | 🔴 Rot |
| Mitarbeitende | 3 | 2 | 6 | 🟠 Orange |
| Lieferanten | 2 | 2 | 4 | 🟢 Grün |
| Behörden | 1 | 3 | 3 | 🟢 Grün |

**Ergebnis:**

✅ Alle Stakeholder sind priorisiert

### Schritt 6: Prozesse verknüpfen

**Aktion:**

Verknüpfe Prozesse mit Stakeholdern und Themen.

**Vorgehensweise:**

1. Öffne einen Prozess (BPMN-Modul)
2. Prozess bearbeiten
3. Wähle relevante interessierte Parteien
4. Wähle relevante Themen
5. Speichern

**Beispiel: Vertriebsprozess**

```text
Prozess: Kundenauftrag abwickeln

Interessierte Parteien:
- [x] Kunden
- [x] Lieferanten
- [x] Mitarbeitende

Themen:
- [x] Kundenzufriedenheit (intern)
- [x] Liefertreue (extern)
```

**Systematisches Vorgehen:**

Gehe alle Hauptprozesse durch und stelle die Verknüpfungen her:

- [ ] Vertriebsprozesse → Kunden, Wettbewerber
- [ ] Beschaffungsprozesse → Lieferanten, Einkauf
- [ ] Produktionsprozesse → Mitarbeitende, Qualität
- [ ] Support-Prozesse → Kunden, IT-Infrastruktur

**Ergebnis:**

✅ Vollständige Traceability zwischen Kontext und Prozessen

### Schritt 7: SWOT-Analysen verknüpfen (optional)

**Aktion:**

Verknüpfe strategische SWOT-Einschätzungen mit Stakeholdern und Themen.

**Vorgehensweise:**

1. SWOT-Modul öffnen
2. Einschätzung erstellen
3. Interessierte Partei ODER Thema auswählen
4. Speichern

**Beispiel-Verknüpfungen:**

| SWOT-Einschätzung | Typ | Verknüpfung |
|-------------------|-----|-------------|
| Hohe Kundenzufriedenheit | Stärke | → Stakeholder: Kunden |
| Abhängigkeit von wenigen Lieferanten | Schwäche | → Stakeholder: Lieferanten |
| Neue Regulierungen | Risiko | → Thema: Regulierung |
| Wachsende Nachfrage | Chance | → Thema: Wirtschaftslage |

**Ergebnis:**

✅ Kontext ist mit strategischer Analyse verknüpft

### Schritt 8: Review und Dokumentation

**Aktion:**

Prüfe die Vollständigkeit und erstelle Audit-Dokumentation.

**Checkliste:**

- [ ] Alle relevanten Stakeholder erfasst (mindestens 8-10)
- [ ] Alle Stakeholder bewertet (Interesse + Einfluss)
- [ ] Interne Themen erfasst (mindestens 5)
- [ ] Externe Themen erfasst (mindestens 5)
- [ ] Verantwortungen zugewiesen (Funktionen)
- [ ] Prozesse verknüpft (mindestens Hauptprozesse)
- [ ] SWOT-Verknüpfungen vorhanden (optional)

**Dokumentation für Audit:**

Exportiere das Dashboard für Audit-Nachweise:

1. Dashboard öffnen
2. Browser-Druckfunktion (Strg/Cmd + P)
3. Als PDF speichern
4. Ablage im DMS

**Ergebnis:**

✅ Kontext ist vollständig dokumentiert und audit-bereit

## Regelmässige Pflege des Kontext

### Szenario: Quartalsweiser Review

**Ausgangssituation:**

Der Kontext ist eingerichtet und soll aktuell gehalten werden.

**Ziel:**

- Änderungen im Unternehmensumfeld erfassen
- Bewertungen anpassen
- Veraltete Einträge entfernen

### Quartalsweise Routine

**Q1-Review (Januar - März):**

**Fokus:** Neue Themen identifizieren

1. Workshop mit Führungskräften
2. Neue externe Themen aus Markt/Wirtschaft erfassen
3. Neue interne Themen aus Organisation erfassen
4. Veraltete Themen archivieren/löschen

**Q2-Review (April - Juni):**

**Fokus:** Stakeholder-Bewertungen aktualisieren

1. Interessierte Parteien durchgehen
2. Bewertungen (Interesse/Einfluss) überprüfen
3. Neue Stakeholder hinzufügen
4. Inaktive Stakeholder entfernen

**Q3-Review (Juli - September):**

**Fokus:** Verknüpfungen prüfen

1. Prozess-Verknüpfungen aktualisieren
2. SWOT-Verknüpfungen prüfen
3. Verantwortlichkeiten anpassen

**Q4-Review (Oktober - Dezember):**

**Fokus:** Jahresabschluss und Planung

1. Vollständigen Review aller Einträge
2. Dokumentation für Jahresaudit vorbereiten
3. Planung für nächstes Jahr

### Änderungen protokollieren

**Wichtig:**

Alle Änderungen werden automatisch im Audit-Log gespeichert.

**Zugriff:**

Navigation → Kontext → Historie

**Nutzen:**

- Nachvollziehbarkeit für Audits
- Dokumentation von Entwicklungen
- Basis für Management Review

## Vorbereitung auf ISO 9001 Audit

### Szenario: Zertifizierungsaudit steht bevor

**Ausgangssituation:**

Das Zertifizierungsaudit ist in 4 Wochen. Der Auditor wird Kapitel 4 der ISO 9001 prüfen.

**Ziel:**

- Vollständigen Kontext nachweisen
- Audit-Fragen souverän beantworten
- Dokumentation bereitstellen

### Audit-Vorbereitung Checkliste

**4 Wochen vor Audit:**

- [ ] Vollständigkeit prüfen (Stakeholder, Themen)
- [ ] Bewertungen aktualisieren
- [ ] Verknüpfungen zu Prozessen herstellen
- [ ] Verantwortlichkeiten klären

**2 Wochen vor Audit:**

- [ ] Dashboard als PDF exportieren
- [ ] Dokumentation im DMS ablegen
- [ ] Management Review durchführen
- [ ] Änderungshistorie sichten

**1 Woche vor Audit:**

- [ ] Mock-Audit durchführen (interne Prüfung)
- [ ] Audit-Fragen vorbereiten
- [ ] Nachweise für Verknüpfungen bereitstellen

**Tag des Audits:**

- [ ] Dashboard geöffnet und bereit
- [ ] Dokumentation griffbereit
- [ ] Ansprechpartner informiert

### Typische Audit-Fragen und Antworten

**Frage 1: "Wie haben Sie die relevanten interessierten Parteien bestimmt?"**

**Antwort:**

> "Wir haben in einem Workshop mit der Geschäftsleitung systematisch alle
> Parteien identifiziert, die Einfluss auf uns haben oder von uns beeinflusst
> werden. Diese sind im Kontext Dashboard dokumentiert."

**Nachweis zeigen:** Dashboard mit Stakeholder-Tabelle

**Frage 2: "Wie bewerten Sie die Relevanz der interessierten Parteien?"**

**Antwort:**

> "Wir bewerten jede Partei nach zwei Kriterien: Interesse am Unternehmen
> und Einfluss auf das Unternehmen. Die Kombination ergibt ein Rating, das
> uns bei der Priorisierung hilft. Rot markierte Parteien haben höchste
> Priorität."

**Nachweis zeigen:** Bewertungs-Matrix, Farbcodierung im Dashboard

**Frage 3: "Welche internen und externen Themen haben Sie identifiziert?"**

**Antwort:**

> "Wir haben die Themen in zwei Kategorien erfasst: Interne Themen (wie
> Prozessreife, Ressourcen) und Externe Themen (wie Fachkräftemangel,
> Regulierungen). Alle sind im Kontext dokumentiert."

**Nachweis zeigen:** Themen-Tabellen nach Typ gruppiert

**Frage 4: "Wie stellen Sie sicher, dass diese Informationen aktuell bleiben?"**

**Antwort:**

> "Wir führen quartalsweise Reviews des Kontext durch. Alle
> Änderungen werden automatisch im Audit-Log protokolliert. Zudem ist der
> Kontext Teil unseres jährlichen Management Reviews."

**Nachweis zeigen:** Änderungshistorie, Management Review Protokoll

**Frage 5: "Wie berücksichtigen Sie diese Themen in Ihren Prozessen?"**

**Antwort:**

> "Wir haben alle Hauptprozesse mit den relevanten Stakeholdern und Themen
> verknüpft. Im Dashboard sehen Sie in der Spalte 'Benötigte Prozesse',
> welche Prozesse welche Stakeholder adressieren."

**Nachweis zeigen:** Prozess-Verknüpfungen im Dashboard und in BPMN-Prozessen

**Frage 6: "Wer ist für die Pflege des Kontext verantwortlich?"**

**Antwort:**

> "Der QM-Beauftragte ist verantwortlich für die Pflege. Für einzelne
> Stakeholder und Themen sind spezifische Funktionen zugeordnet, die Sie
> in der Spalte 'Verantwortung' sehen."

**Nachweis zeigen:** Zugeordnete Funktionen im Dashboard

### Audit-Dokumentation

**Bereitzustellende Nachweise:**

1. **Dashboard-Export (PDF)**
   - Vollständige Übersicht
   - Aktuelles Datum sichtbar

2. **Prozess-Verknüpfungen**
   - BPMN-Diagramme mit Stakeholder-/Themen-Referenzen
   - Traceability-Matrix

3. **Änderungshistorie**
   - Letzter Quartals-Review
   - Bewertungsänderungen dokumentiert

4. **Management Review Protokoll**
   - Kontext als Agendapunkt
   - Diskussion und Beschlüsse

**Ergebnis:**

✅ Audit erfolgreich bestanden, keine Abweichungen zu Kapitel 4

## Integration mit anderen ELIZA-Modulen

### Szenario: Prozessmanagement mit Kontext

**Ausgangssituation:**

Du entwickelst neue Prozesse und möchtest diese direkt mit dem Kontext verknüpfen.

**Workflow:**

**Schritt 1: Prozess erstellen**

1. BPMN-Modul öffnen
2. Neuen Prozess anlegen
3. BPMN-Diagramm modellieren

**Schritt 2: Stakeholder identifizieren**

Frage dich:

- Welche Stakeholder sind von diesem Prozess betroffen?
- Welche Stakeholder haben Anforderungen an diesen Prozess?

**Beispiel: Reklamationsprozess**

Betroffene Stakeholder:

- Kunden (Reklamationseinreicher)
- Mitarbeitende (Bearbeiter)
- Lieferanten (bei Lieferantenfehler)
- Qualitätsmanagement (Auswertung)

**Schritt 3: Themen identifizieren**

Frage dich:

- Welche internen/externen Themen adressiert dieser Prozess?

**Beispiel: Reklamationsprozess**

Adressierte Themen:

- Kundenzufriedenheit (intern)
- Qualitätssicherung (intern)
- Produkthaftung (extern)

**Schritt 4: Verknüpfungen herstellen**

1. Prozess bearbeiten
2. Feld "Interessierte Parteien": Auswahl
3. Feld "Themen": Auswahl
4. Speichern

**Schritt 5: Validierung**

1. Kontext Dashboard öffnen
2. Prüfe: Prozess erscheint in Spalte "Benötigte Prozesse"
3. ✅ Verknüpfung erfolgreich

### Szenario: SWOT-Analyse mit Kontext

**Ausgangssituation:**

Du führst eine SWOT-Analyse durch und möchtest diese mit dem Kontext verknüpfen.

**Workflow:**

**Schritt 1: SWOT-Einschätzung erstellen**

1. SWOT-Modul öffnen
2. Neue Einschätzung anlegen
3. Art wählen: Stärke, Schwäche, Chance, Risiko

**Schritt 2: Kontext-Verknüpfung**

Frage dich:

- Bezieht sich diese Einschätzung auf einen Stakeholder?
- Oder auf ein internes/externes Thema?

**Beispiel: Stärke "Hohe Kundenloyalität"**

```text
Art: Stärke
Titel: Hohe Kundenloyalität
Beschreibung: 80% unserer Kunden sind Stammkunden

Verknüpfung: Interessierte Partei → Kunden
```

**Beispiel: Risiko "Neue Datenschutzregulierungen"**

```text
Art: Risiko
Titel: Neue Datenschutzregulierungen
Beschreibung: EU plant strengere DSGVO-Anforderungen

Verknüpfung: Thema → Regulierung (extern)
```

**Schritt 3: Validierung**

1. Kontext Dashboard öffnen
2. Spalte "SWOT-Analyse" prüfen
3. SWOT-Badge mit Farbe erscheint
4. ✅ Verknüpfung erfolgreich

**Ergebnis:**

✅ Strategische Analysen sind mit operativem Kontext verknüpft

## Zusammenarbeit im Team

### Szenario: Verteilte Verantwortlichkeiten

**Ausgangssituation:**

Verschiedene Abteilungen sind für unterschiedliche Stakeholder/Themen verantwortlich.

**Rollen-Verteilung:**

| Abteilung | Verantwortlich für |
|-----------|-------------------|
| **QM** | Gesamtkoordination, Behörden, Normen |
| **Vertrieb** | Kunden, Wettbewerber |
| **Einkauf** | Lieferanten, Partner |
| **HR** | Mitarbeitende, Kultur-Themen |
| **IT** | Technologie-Themen, Digitalisierung |

**Workflow:**

**Schritt 1: Verantwortlichkeiten zuweisen**

1. QMB erstellt initiale Struktur (Stakeholder, Themen)
2. Weist Funktionen zu (Feld "Verantwortung")
3. Informiert zuständige Abteilungen

**Schritt 2: Abteilungen pflegen ihre Bereiche**

Jede Abteilung:

1. Öffnet Dashboard
2. Filtert nach eigener Funktion (DataTables-Suche)
3. Pflegt zugewiesene Einträge
4. Aktualisiert Beschreibungen und Bewertungen

**Schritt 3: Regelmässiger Austausch**

- Monatliches Meeting: Änderungen besprechen
- Quartalsreview: Gemeinsame Prüfung aller Einträge
- Audit-Log: Transparenz über alle Änderungen

**Ergebnis:**

✅ Verteilte Pflege mit zentraler Übersicht

## Troubleshooting

### Problem: Stakeholder hat falsche Farbe

**Symptom:**

Stakeholder sollte rot sein, wird aber grün angezeigt.

**Ursache:**

Bewertung (Interesse × Einfluss) ist zu niedrig.

**Lösung:**

1. Stakeholder öffnen
2. Bearbeiten
3. Interesse und Einfluss prüfen/erhöhen
4. Speichern
5. Rating und Farbe werden automatisch neu berechnet

**Beispiel:**

```text
Vorher:
Interesse: mittel (2) × Einfluss: klein (1) = 2 → Grün

Nachher:
Interesse: gross (3) × Einfluss: gross (3) = 9 → Rot
```

### Problem: Prozess erscheint nicht im Dashboard

**Symptom:**

Prozess wurde mit Stakeholder verknüpft, erscheint aber nicht in Spalte "Benötigte Prozesse".

**Ursache:**

Bidirektionale Verknüpfung ist noch nicht gespeichert.

**Lösung:**

1. Prozess öffnen (BPMN-Modul)
2. Prozess bearbeiten
3. Feld "Interessierte Parteien": Stakeholder auswählen
4. Speichern
5. Dashboard neu laden (F5)
6. ✅ Prozess erscheint jetzt

### Problem: Historie zeigt keine Einträge

**Symptom:**

Navigation → Historie ist leer.

**Ursache:**

Du hast keine Delete-Berechtigung.

**Lösung:**

Kontaktiere deinen QMB oder Administrator:

- Berechtigung `businesscontext.delete_interestedparty` erforderlich
- Oder: Admin zeigt dir die Historie

### Problem: Kann keine neue Partei erstellen

**Symptom:**

Button "Interessierte Partei" wird nicht angezeigt.

**Ursache:**

Du hast keine Add-Berechtigung.

**Lösung:**

Kontaktiere deinen Administrator:

- Berechtigung `businesscontext.add_interestedparty` erforderlich
- Oder: QMB erstellt Partei für dich

## Zusammenfassung

### Wichtigste Workflows auf einen Blick

**Ersteinrichtung:**

1. Themenarten anlegen (Intern/Extern)
2. Stakeholder erfassen und bewerten
3. Interne Themen erfassen
4. Externe Themen erfassen
5. Prozesse verknüpfen
6. SWOT-Analysen verknüpfen (optional)

**Regelmässige Pflege:**

- Quartalsweise Reviews durchführen
- Bewertungen aktualisieren
- Neue Themen/Stakeholder hinzufügen
- Veraltete Einträge entfernen

**Audit-Vorbereitung:**

- Vollständigkeit prüfen
- Dashboard als PDF exportieren
- Änderungshistorie sichten
- Audit-Fragen vorbereiten

**Team-Zusammenarbeit:**

- Verantwortlichkeiten zuweisen
- Verteilte Pflege koordinieren
- Regelmässiger Austausch
- Änderungshistorie nutzen

## Nächste Schritte

Im nächsten Kapitel lernst du:

- [Best Practices]({{< ref "04-best-practices" >}}): Bewährte Methoden und Tipps für ein effektives Kontext Management

---

**Tipp**: Beginne mit einem Workshop zur Ersteinrichtung. Involviere alle relevanten Führungskräfte, um ein vollständiges Bild zu erhalten. Die Qualität des Kontext hängt stark von der Qualität der initialen Erfassung ab.
