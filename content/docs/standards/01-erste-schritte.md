---
title: "Erste Schritte im Standards-Modul"
description: ""
weight: "1"
tags:
  - "getting-started"
  - "basics"
  - "standards"
  - "einführung"
---


# Erste Schritte im Standards-Modul

Dieses Kapitel führt dich in das Standards-Modul von ELIZA ein und zeigt dir die grundlegenden Konzepte und Funktionen.

## Was ist das Standards-Modul?

Das Standards-Modul unterstützt dich bei der systematischen Umsetzung von Normen und Standards in deinem Unternehmen. Es hilft dir:

- **Normen zu verwalten** - ISO-Normen, Branchenstandards und eigene Vorgaben zentral erfassen
- **Anforderungen zu strukturieren** - Normkapitel hierarchisch organisieren
- **Erfüllung zu dokumentieren** - Nachweise erfassen und Erfüllungsgrad bewerten
- **Fortschritt zu überwachen** - Gesamtübersicht über den Umsetzungsstand
- **Audits vorzubereiten** - Alle relevanten Informationen für Audits griffbereit
- **Stakeholder zu managen** - Interessierte Parteien identifizieren und bewerten

## Wofür wird das Modul verwendet?

Das Standards-Modul ist besonders nützlich für:

### Qualitätsmanagement (z.B. ISO 9001)
- Strukturierte Erfassung aller Normvorgaben
- Dokumentation der Umsetzungsmassnahmen
- Vorbereitung interner und externer Audits
- Kontinuierliche Verbesserung nachweisen

### Umweltmanagement (z.B. ISO 14001)
- Umweltaspekte systematisch erfassen
- Compliance mit Umweltvorschriften dokumentieren
- Verbesserungsmassnahmen planen und überwachen

### Informationssicherheit (z.B. ISO 27001)
- Sicherheitsanforderungen strukturieren
- Umsetzungsstand der Controls dokumentieren
- Risikobewertung und Massnahmen verknüpfen

### Weitere Managementsysteme
- Arbeitsschutz (ISO 45001)
- Energiemanagement (ISO 50001)
- Bildungsmanagement (ISO 21001)
- Branchenspezifische Standards

## Zugriff auf das Standards-Modul

### Navigation zur Standards-Übersicht

**Schritt 1: Dashboard öffnen**

Nach dem Login befindest du dich auf dem ELIZA Dashboard.

**Schritt 2: Standards-Modul aufrufen**

1. Klicke in der Hauptnavigation auf **"Standards"**
2. Du gelangst automatisch zur Normen-Übersicht

> **💡 Tipp:** Du kannst auch die Suchfunktion nutzen, um direkt zu einer bestimmten Norm zu springen.

### Berechtigungen prüfen

Nicht alle Benutzer haben die gleichen Rechte im Standards-Modul:

- **standards_users** - Können Normen und Kapitel ansehen
- **standards_admin** - Können Normen erstellen, bearbeiten und löschen

> **⚠️ Wichtig:** Wenn du keine Normen siehst oder bearbeiten kannst, wende dich an deinen Administrator für die entsprechenden Berechtigungen.

Mehr Details zu Berechtigungen findest du in [Kapitel 6: Berechtigungskonzept]({{< ref "06-berechtigungskonzept" >}}).

## Benutzeroberfläche verstehen

### Hauptübersicht: Normen-Liste

Die Normen-Liste zeigt alle im System erfassten Normen:

| Spalte | Beschreibung |
|--------|--------------|
| **Titel** | Name der Norm (z.B. "ISO 9001:2015") |
| **Erfüllungsgrad** | Prozentualer Umsetzungsstand |
| **Kategorien** | Zugeordnete Kategorien (z.B. "QM", "Umwelt") |

**Funktionen in der Übersicht:**

- **Suche** - Filter nach Titel oder Kategorien
- **Sortierung** - Klicke auf Spaltenüberschriften zum Sortieren
- **Details** - Klicke auf eine Norm für die Detailansicht

### Detailansicht einer Norm

Die Detailansicht zeigt:

<pre>
┌─────────────────────────────────────────────────────┐
│ ISO 9001:2015 - Qualitätsmanagement                 │
│                                      Erfüllungsgrad: 85%│
├─────────────────────────────────────────────────────┤
│ Beschreibung                                         │
│ Kategorien: Qualitätsmanagement                      │
│ Dateien: ISO-9001-2015.pdf                          │
│                                                      │
│ Kapitel-Struktur:                                    │
│ 4   Kontext der Organisation              90%       │
│ 4.1 Verstehen der Organisation            100%      │
│ 4.2 Interessierte Parteien                80%       │
│ 5   Führung                               85%       │
│ ...                                                  │
└─────────────────────────────────────────────────────┘
</pre>

**Aktionen in der Detailansicht:**

- **Bearbeiten** (Stift-Symbol) - Norm-Details ändern
- **Kapitel hinzufügen** - Neues Hauptkapitel erstellen
- **Datei hochladen** - Anhänge hinzufügen
- **Word Export** - Norm als Word-Dokument exportieren
- **Excel Export** - Kapitelstruktur als Excel-Tabelle
- **Gesamtansicht** - Alle Kapitel auf einen Blick

### Menü-Navigation

Im linken Menü findest du:

- **Kategorien** - Normkategorien verwalten
- **Massnahmen** - Übersicht aller Verbesserungsmassnahmen
- **Hilfe** - Dieses Benutzerhandbuch

## Grundlegende Konzepte

### Hierarchie: Normen und Kapitel

Das Standards-Modul arbeitet mit einer zweistufigen Hierarchie:

<pre>
Norm (z.B. ISO 9001:2015)
│
├── Hauptkapitel (z.B. "4 Kontext der Organisation")
│   ├── Unterkapitel (z.B. "4.1 Verstehen der Organisation")
│   │   └── Unterkapitel (z.B. "4.1.1 Externe Themen")
│   └── Unterkapitel (z.B. "4.2 Interessierte Parteien")
│
└── Hauptkapitel (z.B. "5 Führung")
    └── Unterkapitel (z.B. "5.1 Führung und Verpflichtung")
</pre>

**Norm** = Der Standard selbst (z.B. ISO 9001, ISO 14001)
**Kapitel** = Einzelne Anforderungen oder Abschnitte der Norm

### Kategorien

Kategorien helfen dir, Normen zu organisieren:

- **Qualitätsmanagement** (QM)
- **Umweltmanagement** (UM)
- **Informationssicherheit** (ISMS)
- **Arbeitsschutz** (AMS)
- Eigene Kategorien nach Bedarf

> **💡 Tipp:** Eine Norm kann mehreren Kategorien zugeordnet sein.

### Erfüllungsgrad

Der Erfüllungsgrad zeigt, wie gut eine Norm umgesetzt ist:

- **0-29%** - Rot: Niedrige Erfüllung
- **30-79%** - Orange: Teilweise erfüllt
- **80-99%** - Hellgrün: Weitgehend erfüllt
- **100%** - Dunkelgrün: Vollständig erfüllt

Der Gesamterfüllungsgrad einer Norm wird automatisch aus den Kapiteln berechnet.

### Verknüpfungen

Kapitel können mit anderen ELIZA-Objekten verknüpft werden:

- **Prozesse** - Welcher Prozess erfüllt diese Anforderung?
- **Dokumente** - Welche Dokumente sind Nachweise?
- **Ordner** - Wo liegen relevante Dokumente?
- **Hilfsmittel** - Welche Tools werden benötigt?
- **Auditkriterien** - Prüfkriterien für Audits
- **Massnahmen** - Verbesserungsmassnahmen

## Deine erste Norm ansehen

Lass uns gemeinsam eine Norm im Detail betrachten:

**Schritt 1: Zur Normen-Liste navigieren**

1. Klicke in der Hauptnavigation auf **"Standards"**
2. Du siehst die Liste aller Normen

**Schritt 2: Norm auswählen**

1. Klicke auf eine Norm in der Liste (z.B. "ISO 9001:2015")
2. Die Detailansicht öffnet sich

**Schritt 3: Struktur erkunden**

1. Scrolle nach unten zur Kapitel-Tabelle
2. Sieh dir die Hauptkapitel und ihren Erfüllungsgrad an
3. Klicke auf ein Kapitel, um mehr Details zu sehen

**Schritt 4: Kapitel-Details ansehen**

In der Kapitel-Detailansicht siehst du:

- **Nummer und Titel** - Eindeutige Identifikation
- **Beschreibung** - Was fordert die Norm?
- **Geforderte Nachweise** - Welche Belege sind erforderlich?
- **Erfüllt durch** - Wie wird die Anforderung umgesetzt?
- **Erfüllungsgrad** - Bewertung von 0-100%
- **Verknüpfungen** - Links zu Prozessen, Dokumenten, etc.

> **💡 Tipp:** Nutze die Navigations-Buttons "Vorheriges" und "Nächstes" um zwischen Kapiteln zu wechseln.

## Navigation in Kapiteln

Das Modul bietet mehrere Navigationsmöglichkeiten:

### Hierarchische Navigation

- **Hoch** (↑) - Zum übergeordneten Kapitel oder zur Norm
- **Runter** (↓) - Zum ersten Unterkapitel
- **Vorheriges** (←) - Zum vorherigen Kapitel auf gleicher Ebene
- **Nächstes** (→) - Zum nächsten Kapitel auf gleicher Ebene

### Gesamtansicht

Für eine Übersicht aller Kapitel:

1. Öffne eine Norm in der Detailansicht
2. Klicke auf das **Dashboard-Symbol** (⊞)
3. Du siehst alle Kapitel auf einer Seite

Diese Ansicht ist ideal für:
- Schnellen Überblick über den Gesamtstatus
- Vorbereitung von Audits
- Präsentationen

## Häufige erste Fragen

### Kann ich eine Norm löschen?

Ja, wenn du **standards_admin** Berechtigungen hast. Gehe zur Norm-Detailansicht und wähle "Standard löschen" im Dropdown-Menü.

> **⚠️ Wichtig:** Gelöschte Normen können nicht wiederhergestellt werden!

### Wie exportiere ich eine Norm?

Du hast zwei Export-Möglichkeiten:

1. **Word Export** - Erstellt ein formatiertes Word-Dokument
2. **Excel Export** - Tabelle mit allen Kapiteln und Erfüllungsgraden

Beide Funktionen findest du im Dropdown-Menü (⋮) in der Norm-Detailansicht.

### Woher kommen die Norm-Daten?

Normen können auf zwei Arten ins System gelangen:

1. **Manuelle Erfassung** - Kapitel für Kapitel einpflegen
2. **Import** - JSON-Dateien mit Normstruktur importieren

Für neue Normen empfehlen wir, zuerst die Norm anzulegen und dann Schritt für Schritt Kapitel hinzuzufügen.

### Wer kann den Erfüllungsgrad ändern?

Nur Benutzer mit **standards_admin** Berechtigung können Erfüllungsgrade bearbeiten. Dies stellt sicher, dass Bewertungen nachvollziehbar bleiben.

### Wie oft sollte der Erfüllungsgrad aktualisiert werden?

Das hängt von deinem Unternehmen ab. Empfohlene Intervalle:

- **Quartalsweise** - Bei aktiven Verbesserungsprojekten
- **Halbjährlich** - Bei stabilem Managementsystem
- **Vor Audits** - Zur Vorbereitung interner/externer Audits
- **Bei Änderungen** - Wenn neue Nachweise erstellt wurden

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Was das Standards-Modul leistet
- ✅ Wie du auf Normen zugreifst
- ✅ Die Benutzeroberfläche zu verstehen
- ✅ Grundlegende Konzepte (Hierarchie, Kategorien, Erfüllungsgrad)
- ✅ Eine Norm zu erkunden
- ✅ In Kapiteln zu navigieren

## Nächste Schritte

Jetzt bist du bereit für die praktische Arbeit:

- [Normen verwalten]({{< ref "02-normen-verwalten" >}}) - Lerne, wie du Normen erstellst und pflegst
- [Kapitel und Erfüllung]({{< ref "03-kapitel-erfuellung" >}}) - Dokumentiere Anforderungen und bewerte den Fortschritt
- [Integration]({{< ref "05-integration" >}}) - Verknüpfe Normen mit Prozessen und Dokumenten

> **💡 Tipp:** Für den Einstieg empfehlen wir, zunächst bestehende Normen anzusehen, bevor du eigene erstellst. So lernst du die Best Practices kennen.
