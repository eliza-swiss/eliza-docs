---
title: "Hauptfunktionen"
description: ""
weight: "2"
tags:
  - "funktionen"
  - "features"
  - "stakeholder"
  - "themen"
---


# Hauptfunktionen

Dieses Kapitel beschreibt alle Hauptfunktionen des Kontext Moduls im Detail.

## Dashboard

### Übersicht

Das Dashboard ist deine zentrale Anlaufstelle für den Kontext. Hier siehst du auf einen Blick:

- Alle interessierten Parteien mit Bewertungen
- Alle Themen, gruppiert nach Themenarten
- Verknüpfungen zu Prozessen und SWOT-Analysen

**Zugriff:**

Navigation → Kontext → Dashboard

### Interessierte Parteien Tabelle

Die obere Tabelle zeigt alle Stakeholder mit folgenden Spalten:

| Spalte | Beschreibung |
|--------|--------------|
| **Interessierte Partei** | Name mit Link zur Detailansicht |
| **Beschreibung** | Kurzbeschreibung (Markdown-Unterstützung) |
| **Interesse am Unternehmen** | klein / mittel / gross |
| **Einfluss auf das Unternehmen** | klein / mittel / gross |
| **Verantwortung** | Zugeordnete Funktionen |
| **Benötigte Prozesse** | Verknüpfte BPMN-Prozesse |
| **SWOT-Analyse** | Verknüpfte Einschätzungen mit Farbcodierung |

**Funktionen:**

- **DataTables Integration**: Suchen, Sortieren, Filtern
- **Markdown-Rendering**: Beschreibungen werden formatiert angezeigt
- **Direkte Links**: Klick auf Name/Funktion/Prozess öffnet Detailansicht

### Themen nach Typ

Für jede Themenart wird eine eigene Tabelle angezeigt:

**Spalten:**

| Spalte | Beschreibung |
|--------|--------------|
| **Thema** | Name mit Link zur Detailansicht |
| **Beschreibung** | Kurzbeschreibung (Markdown-Unterstützung) |
| **Verantwortung** | Zugeordnete Funktionen |
| **Benötigte Prozesse** | Verknüpfte BPMN-Prozesse |
| **SWOT-Analyse** | Verknüpfte Einschätzungen mit Farbcodierung |

**Beispiel-Darstellung:**

```text
┌───────────────────────────────────────────────┐
│ Interne Themen                         [+Thema]│
├───────────────────────────────────────────────┤
│ Thema          │ Beschreibung  │ Verantwortung│
├───────────────────────────────────────────────┤
│ Prozessreife   │ Reifegrad...  │ QM-Team      │
│ Remote Work    │ Home-Office.. │ GL           │
└───────────────────────────────────────────────┘

┌───────────────────────────────────────────────┐
│ Externe Themen                         [+Thema]│
├───────────────────────────────────────────────┤
│ Thema            │ Beschreibung │ Verantwortung│
├───────────────────────────────────────────────┤
│ Fachkräftemangel │ Schwierig... │ HR           │
│ Digitalisierung  │ Zunehmend... │ IT           │
└───────────────────────────────────────────────┘
```

## Interessierte Parteien verwalten

### Neue interessierte Partei erstellen

**Voraussetzung:**

Berechtigung: `businesscontext.add_interestedparty`

**Schritte:**

1. Dashboard öffnen
2. Button "Interessierte Partei" (grün, rechts oben)
3. Formular ausfüllen:

**Pflichtfelder:**

- **Name**: Bezeichnung der Partei (z.B. "Kunden", "Lieferanten")

**Optionale Felder:**

- **Beschreibung**: Detaillierte Informationen (Markdown-Unterstützung)
- **Interesse am Unternehmen**: Dropdown (-, klein, mittel, gross)
- **Einfluss auf das Unternehmen**: Dropdown (-, klein, mittel, gross)
- **Verantwortung**: Mehrfachauswahl von Funktionen

1. Speichern

**Bewertungslogik:**

```python
# Automatische Berechnung
Rating = Interesse × Einfluss

# Beispiele:
Interesse: gross (3) × Einfluss: gross (3) = Rating: 9 → Rot
Interesse: mittel (2) × Einfluss: mittel (2) = Rating: 4 → Grün
Interesse: klein (1) × Einfluss: gross (3) = Rating: 3 → Grün
```

**Farbcodierung:**

- Rating < 4: 🟢 Grün (niedrige Priorität)
- Rating 4-7: 🟠 Orange (mittlere Priorität)
- Rating > 7: 🔴 Rot (hohe Priorität)

### Interessierte Partei bearbeiten

**Voraussetzung:**

Berechtigung: `businesscontext.change_interestedparty`

**Schritte:**

1. Dashboard → Klick auf Name der Partei
2. Detailansicht öffnet sich
3. Button "Bearbeiten" (rechts oben)
4. Änderungen vornehmen
5. Speichern

**Änderungen protokollieren:**

Alle Änderungen werden automatisch im Audit-Log gespeichert:

- Wer hat geändert?
- Was wurde geändert?
- Wann erfolgte die Änderung?

### Detailansicht einer interessierten Partei

Die Detailansicht zeigt:

**Stammdaten:**

- Name
- Beschreibung (Markdown-formatiert)
- Interesse am Unternehmen (mit Badge)
- Einfluss auf das Unternehmen (mit Badge)
- Rating (berechnet, mit Farbcodierung)

**Verknüpfungen:**

- **Verantwortliche Funktionen**: Liste mit Links
- **Benötigte Prozesse**: BPMN-Prozesse, die diese Partei adressieren
- **SWOT-Analysen**: Verknüpfte Einschätzungen mit Farb-Badges

**Aktionen:**

- Bearbeiten (wenn Berechtigung vorhanden)
- Löschen (wenn Berechtigung vorhanden)
- Liste aller Parteien (Breadcrumb-Navigation)

### Interessierte Partei löschen

**Voraussetzung:**

Berechtigung: `businesscontext.delete_interestedparty`

**Schritte:**

1. Detailansicht öffnen
2. Button "Löschen" (rechts oben)
3. Bestätigung
4. Partei wird entfernt

⚠️ **Achtung:**

- Verknüpfungen zu Prozessen gehen verloren
- SWOT-Verknüpfungen werden entfernt
- Aktion wird im Audit-Log protokolliert

### Liste aller interessierten Parteien

**Zugriff:**

Navigation → Kontext → Interessierte Parteien

**Funktionen:**

- Alphabetische Sortierung (nach `list_order`, dann Titel)
- DataTables Suche und Filter
- Direkte Links zu Detailansichten
- Button "Neue interessierte Partei" (wenn berechtigt)

## Themen verwalten

### Themenart erstellen

**Voraussetzung:**

Berechtigung: `businesscontext.add_issuetype`

**Schritte:**

1. Navigation → Kontext → Themenarten
2. Button "Neue Themenart"
3. Formular ausfüllen:

**Felder:**

- **Name**: Bezeichnung (z.B. "Interne Themen", "Markttrends")
- **Beschreibung**: Erklärung der Kategorie

1. Speichern

**Standard-Themenarten:**

Es empfiehlt sich, mindestens diese beiden anzulegen:

- **Interne Themen**: Faktoren innerhalb des Unternehmens
- **Externe Themen**: Faktoren aus der Unternehmensumwelt

**Erweiterte Kategorien:**

Je nach Branche und Bedarf:

- **Regulatorische Themen**: Gesetze, Vorschriften, Normen
- **Technologische Themen**: IT-Trends, Digitalisierung
- **Wirtschaftliche Themen**: Konjunktur, Märkte
- **Soziale Themen**: Gesellschaftliche Entwicklungen

### Neues Thema erstellen

**Voraussetzung:**

Berechtigung: `businesscontext.add_issue`

**Schritte:**

1. Dashboard → Button "Thema" (grün)
2. Formular ausfüllen:

**Pflichtfelder:**

- **Titel**: Kurze Bezeichnung (z.B. "Fachkräftemangel")
- **Typ**: Mindestens eine Themenart auswählen

**Optionale Felder:**

- **Beschreibung**: Detaillierte Erklärung (Markdown-Unterstützung)
- **Verantwortung**: Mehrfachauswahl von Funktionen

1. Speichern

**Markdown-Unterstützung:**

Du kannst die Beschreibung strukturiert formatieren:

```markdown
## Fachkräftemangel

**Situation:**
- Schwierigkeiten bei der Rekrutierung
- Hohe Fluktuation in bestimmten Bereichen

**Auswirkungen:**
- Verzögerungen in Projekten
- Überlastung bestehender Mitarbeiter

**Massnahmen:**
- Employer Branding verbessern
- Weiterbildung fördern
- Flexible Arbeitsmodelle anbieten
```

### Thema bearbeiten

**Voraussetzung:**

Berechtigung: `businesscontext.change_issue`

**Schritte:**

1. Dashboard → Klick auf Thema-Name
2. Detailansicht öffnet sich
3. Button "Bearbeiten"
4. Änderungen vornehmen
5. Speichern

### Detailansicht eines Themas

Die Detailansicht zeigt:

**Stammdaten:**

- Titel
- Beschreibung (Markdown-formatiert)
- Zugeordnete Themenarten

**Verknüpfungen:**

- **Verantwortliche Funktionen**: Liste mit Links
- **Benötigte Prozesse**: BPMN-Prozesse, die dieses Thema behandeln
- **SWOT-Analysen**: Verknüpfte Einschätzungen mit Farb-Badges

**Aktionen:**

- Bearbeiten (wenn Berechtigung vorhanden)
- Löschen (wenn Berechtigung vorhanden)

### Thema löschen

**Voraussetzung:**

Berechtigung: `businesscontext.delete_issue`

**Schritte:**

1. Detailansicht öffnen
2. Button "Löschen"
3. Bestätigung
4. Thema wird entfernt

⚠️ **Achtung:**

- Verknüpfungen zu Prozessen gehen verloren
- SWOT-Verknüpfungen werden entfernt
- Aktion wird im Audit-Log protokolliert

## Verknüpfungen verwalten

### Verantwortung zuweisen

**Funktionen zuordnen:**

Sowohl interessierte Parteien als auch Themen können Funktionen zugeordnet werden.

**Schritte:**

1. Objekt bearbeiten (Partei oder Thema)
2. Feld "Verantwortung": Mehrfachauswahl
3. Funktionen auswählen (Strg/Cmd + Klick für mehrere)
4. Speichern

**Bedeutung:**

- Klarstellung, wer sich um diese Partei/Thema kümmert
- Basis für Prozess-Zuordnungen
- Wichtig für Audit-Nachweise

### Prozesse verknüpfen

**Bidirektionale Verknüpfung:**

Prozesse können mit interessierten Parteien und Themen verknüpft werden.

**Option 1: Von Prozess aus**

1. Prozess öffnen (BPMN-Modul)
2. Prozess bearbeiten
3. Feld "Interessierte Parteien": Auswahl treffen
4. Feld "Themen": Auswahl treffen
5. Speichern

**Option 2: Automatische Anzeige**

- Im Dashboard werden automatisch alle Prozesse angezeigt, die eine Partei/Thema referenzieren
- Spalte "Benötigte Prozesse" zeigt diese Verknüpfungen

**Nutzen:**

- Traceability: Welcher Prozess adressiert welchen Stakeholder?
- Lückenanalyse: Gibt es Stakeholder ohne zugeordnete Prozesse?
- Audit-Nachweis: ISO 9001 Kapitel 4.2 erfüllt

### SWOT-Analysen verknüpfen

**SWOT-Integration:**

SWOT-Einschätzungen können mit Stakeholdern und Themen verknüpft werden.

**Schritte:**

1. SWOT-Modul öffnen
2. Einschätzung erstellen/bearbeiten
3. Feld "Interessierte Partei": Auswahl
4. Oder: Feld "Thema": Auswahl
5. Speichern

**Darstellung im Dashboard:**

- Spalte "SWOT-Analyse" zeigt verknüpfte Einschätzungen
- Farbcodierung (grün/orange/rot) für Risikobewertung
- Klick auf SWOT-Badge öffnet Detailansicht

**Beispiel-Verknüpfungen:**

| Stakeholder | SWOT-Einschätzung | Typ | Farbe |
|-------------|-------------------|-----|-------|
| Kunden | Hohe Kundenzufriedenheit | Stärke | 🟢 Grün |
| Lieferanten | Abhängigkeit von wenigen | Schwäche | 🔴 Rot |
| Behörden | Neue Regulierungen | Risiko | 🟠 Orange |
| Markt | Wachsende Nachfrage | Chance | 🟢 Grün |

## Änderungshistorie

### Historie anzeigen

**Voraussetzung:**

Berechtigung: `businesscontext.delete_interestedparty` (⚠️ Ungewöhnlich, aber so implementiert)

**Zugriff:**

Navigation → Kontext → Historie

**Anzeige:**

Die Historie zeigt alle Änderungen chronologisch (neueste zuerst):

**Informationen pro Änderung:**

- **Aktor**: Wer hat geändert (Benutzer)
- **Aktion**: Erstellt, Geändert, Gelöscht
- **Zeitstempel**: Wann erfolgte die Änderung
- **Objekt**: Welches Objekt wurde geändert
- **Änderungen**: Feldweise alte → neue Werte

**Beispiel-Eintrag:**

```text
2025-01-15 14:23:45
Geändert: Interessierte Partei "Kunden"

Änderungen:
- interest: 2 (mittel) → 3 (gross)
- influence: 2 (mittel) → 3 (gross)
- Rating: 4 → 9
- Farbe: grün → rot
```

**Nutzen:**

- Audit-Trail für ISO-Zertifizierungen
- Nachvollziehbarkeit von Bewertungsänderungen
- Fehlersuche und Debugging

### Audit-Log interpretieren

**Arten von Änderungen:**

1. **Erstellt (Created)**
   - Neues Objekt wurde angelegt
   - Alle Felder werden mit Initialwerten protokolliert

2. **Geändert (Changed)**
   - Bestehende Felder wurden modifiziert
   - Nur geänderte Felder werden angezeigt (alter → neuer Wert)

3. **Gelöscht (Deleted)**
   - Objekt wurde entfernt
   - Alle Feldinhalte werden protokolliert (für Wiederherstellung)

**System-Einträge:**

Einträge ohne Aktor (actor=null) werden ausgeblendet:

- Automatische Migrations
- System-Initialisierungen
- Bulk-Imports

## Berechtigungen im Detail

### Rollen-Übersicht

| Berechtigung | Typ | Beschreibung |
|--------------|-----|--------------|
| `businesscontext.view_interestedparty` | Ansehen | Dashboard und Detailansichten |
| `businesscontext.add_interestedparty` | Hinzufügen | Neue Parteien erstellen |
| `businesscontext.change_interestedparty` | Bearbeiten | Bestehende bearbeiten |
| `businesscontext.delete_interestedparty` | Löschen | Parteien löschen + Historie |
| `businesscontext.view_issue` | Ansehen | Themen ansehen |
| `businesscontext.add_issue` | Hinzufügen | Neue Themen erstellen |
| `businesscontext.change_issue` | Bearbeiten | Themen bearbeiten |
| `businesscontext.delete_issue` | Löschen | Themen löschen |
| `businesscontext.view_issuetype` | Ansehen | Themenarten ansehen |
| `businesscontext.add_issuetype` | Hinzufügen | Themenarten erstellen |
| `businesscontext.change_issuetype` | Bearbeiten | Themenarten bearbeiten |
| `businesscontext.delete_issuetype` | Löschen | Themenarten löschen |

### Typische Rollen-Konfigurationen

**QM-Beauftragter:**

- ✅ Alle Berechtigungen (View, Add, Change, Delete)
- Verantwortlich für Pflege des Kontext

**Prozess-Owner:**

- ✅ View, Add, Change (Parteien und Themen)
- ❌ Delete (nur QMB darf löschen)

**Mitarbeitende:**

- ✅ View (nur ansehen)
- ❌ Add, Change, Delete

**Externe Auditoren:**

- ✅ View (nur ansehen, keine Historie)
- ❌ Add, Change, Delete

## DataTables-Funktionen

### Suchen

Alle Tabellen im Dashboard unterstützen die DataTables-Suche:

**Verwendung:**

1. Suchfeld rechts oben in der Tabelle
2. Suchbegriff eingeben
3. Tabelle filtert automatisch

**Durchsuchte Felder:**

- Name/Titel
- Beschreibung
- Verantwortliche Funktionen

**Beispiel:**

```text
Suchbegriff: "kunde"
Ergebnis:
- Kunden
- Kundenzufriedenheit (in Beschreibung erwähnt)
- Prozesse mit Kunde im Namen
```

### Sortieren

**Verwendung:**

Klick auf Spaltenüberschrift sortiert die Tabelle:

- 1. Klick: Aufsteigend
- 1. Klick: Absteigend
- 1. Klick: Standard-Sortierung

**Standard-Sortierung:**

- Nach `list_order` (interne Reihenfolge)
- Dann alphabetisch nach Titel

### Filtern

DataTables bietet automatische Filterung:

- Suche wirkt auf alle Spalten
- Kombinierbar mit Sortierung
- Live-Update beim Tippen

## Reihenfolge verwalten

### list_order Feld

Jedes Objekt hat ein `list_order` Feld:

- Wird automatisch bei Erstellung gesetzt
- Bestimmt die Reihenfolge in Listen
- Nicht direkt bearbeitbar (nur über Code/Admin)

**Standard-Reihenfolge:**

1. Nach `list_order` (aufsteigend)
2. Bei gleichem Wert: Alphabetisch nach Titel

**Manuelle Anpassung:**

Aktuell nur über Administrator-Oberfläche möglich:

1. Admin-Interface öffnen
2. Objekt bearbeiten
3. `list_order` Feld anpassen
4. Speichern

**Zukünftige Erweiterung:**

Drag & Drop Sortierung im Dashboard ist geplant.

## Zusammenfassung

### Kernfunktionen auf einen Blick

**Interessierte Parteien:**

- Erstellen, Bearbeiten, Löschen
- Bewertung (Interesse × Einfluss)
- Farbcodierung (grün/orange/rot)
- Verantwortung zuweisen
- Prozesse verknüpfen
- SWOT-Analysen verknüpfen

**Themen:**

- Erstellen, Bearbeiten, Löschen
- Themenarten zuordnen
- Verantwortung zuweisen
- Prozesse verknüpfen
- SWOT-Analysen verknüpfen

**Dashboard:**

- Übersicht über alle Parteien und Themen
- DataTables Integration (Suchen, Sortieren, Filtern)
- Direkte Verknüpfungen zu Prozessen und SWOT

**Historie:**

- Vollständiges Audit-Log
- Nachvollziehbarkeit aller Änderungen
- Wichtig für ISO-Audits

### Wichtigste Shortcuts

| Aktion | Shortcut/Pfad |
|--------|---------------|
| Dashboard | Navigation → Kontext → Dashboard |
| Neue Partei | Dashboard → Button "Interessierte Partei" |
| Neues Thema | Dashboard → Button "Thema" |
| Partei bearbeiten | Klick auf Name → Bearbeiten |
| Thema bearbeiten | Klick auf Titel → Bearbeiten |
| Historie | Navigation → Kontext → Historie |

## Nächste Schritte

Im nächsten Kapitel lernst du:

- [Arbeitsablauf]({{< ref "03-arbeitsablauf" >}}): Typische Workflows und praktische Szenarien
- [Best Practices]({{< ref "04-best-practices" >}}): Bewährte Methoden und Tipps

---

**Tipp**: Nutze die DataTables-Suche, um schnell relevante Stakeholder oder Themen zu finden. Die Live-Suche durchsucht alle Spalten gleichzeitig.
