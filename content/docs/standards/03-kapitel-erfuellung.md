---
title: "Kapitel und Erfüllung"
description: ""
weight: "3"
tags:
  - "kapitel"
  - "erfüllung"
  - "nachweise"
  - "verknüpfungen"
---


# Kapitel und Erfüllung

In diesem Kapitel lernst du, wie du Normen in Kapitel strukturierst, Anforderungen dokumentierst und den Erfüllungsgrad bewertest.

## Kapitel-Struktur verstehen

### Hierarchische Organisation

Normen werden in Kapitel und Unterkapitel unterteilt:

<pre>
ISO 9001:2015
│
├── 4 Kontext der Organisation
│   ├── 4.1 Verstehen der Organisation und ihres Kontextes
│   ├── 4.2 Verstehen der Erfordernisse interessierter Parteien
│   ├── 4.3 Festlegen des Anwendungsbereichs
│   └── 4.4 Qualitätsmanagementsystem
│       ├── 4.4.1 Allgemeines
│       └── 4.4.2 Prozessorientierter Ansatz
│
├── 5 Führung
│   ├── 5.1 Führung und Verpflichtung
│   │   ├── 5.1.1 Allgemeines
│   │   └── 5.1.2 Kundenorientierung
│   └── 5.2 Politik
│
└── ...
</pre>

**Ebenen:**
- **Hauptkapitel** - Ohne übergeordnetes Kapitel (z.B. "4 Kontext")
- **Unterkapitel** - Mit übergeordnetem Kapitel (z.B. "4.1", "4.1.1")

> **💡 Tipp:** Du kannst beliebig viele Ebenen verschachteln, aber mehr als 3-4 Ebenen machen die Struktur unübersichtlich.

### Kapitelnummerierung

Die Nummerierung hilft bei der Orientierung:

| Nummer | Ebene | Beispiel |
|--------|-------|----------|
| 4 | Hauptkapitel | "4 Kontext der Organisation" |
| 4.1 | Unterkapitel | "4.1 Verstehen der Organisation" |
| 4.1.1 | Unter-Unterkapitel | "4.1.1 Externe Themen" |

> **⚠️ Wichtig:** Die Nummerierung ist ein Freitextfeld. Das System sortiert natürlich (4.1 kommt vor 4.10).

## Kapitel erstellen

### Hauptkapitel anlegen

Hauptkapitel sind die oberste Ebene direkt unter der Norm.

**Schritt 1: Norm öffnen**

1. Navigiere zur Norm
2. Öffne die Detailansicht

**Schritt 2: Neues Kapitel hinzufügen**

1. Klicke auf den grünen Button **"Kapitel"** (+ Symbol)
2. Das Formular "Neues Kapitel" öffnet sich

**Schritt 3: Formular ausfüllen**

| Feld | Pflicht | Beschreibung | Beispiel |
|------|---------|--------------|----------|
| **Nummer** | Nein | Kapitelnummer | "4" oder "4.1" |
| **Titel** | Ja | Kapitelbezeichnung | "Kontext der Organisation" |
| **Beschreibung** | Nein | Was fordert die Norm? | "Die Organisation muss..." |
| **Geforderte Nachweise** | Nein | Erforderliche Belege | "Kontextanalyse, SWOT" |
| **Erfüllung erforderlich** | Nein | Muss-Anforderung? | ☑ (Checkbox) |

**Feld-Details:**

**Nummer** (optional, aber empfohlen)
- Eindeutige Kennzeichnung des Kapitels
- Wird für Sortierung verwendet
- Beispiele: "4", "4.1", "4.1.1", "A.5.1"

**Titel** (Pflichtfeld)
- Bezeichnung des Kapitels
- Sollte der Norm-Struktur entsprechen
- Beispiel: "Kontext der Organisation"

**Beschreibung** (optional, aber wichtig)
- Was fordert die Norm in diesem Kapitel?
- Was muss das Unternehmen tun?
- Kann Markdown-Formatierung enthalten

**Geforderte Nachweise** (optional)
- Welche Dokumente/Prozesse sind erforderlich?
- Was wird bei Audits geprüft?
- Beispiele: "Verfahrensanweisung", "Protokolle", "Checklisten"

**Erfüllung erforderlich** (Checkbox)
- ☑ Aktiviert: Kapitel ist Muss-Anforderung (zählt zum Erfüllungsgrad)
- ☐ Deaktiviert: Kapitel ist optional (informativer Charakter)

**Schritt 4: Speichern**

1. Klicke auf **"Speichern"**
2. Du wirst zur Norm-Detailansicht zurückgeleitet
3. Das neue Kapitel erscheint in der Kapitel-Tabelle

### Unterkapitel anlegen

Unterkapitel werden einem bestehenden Kapitel untergeordnet.

**Schritt 1: Übergeordnetes Kapitel öffnen**

1. Navigiere zur Norm-Detailansicht
2. Klicke auf das Kapitel, unter dem du ein Unterkapitel erstellen möchtest

**Schritt 2: Unterkapitel hinzufügen**

1. In der Kapitel-Detailansicht klickst du auf **"Unterkapitel hinzufügen"**
2. Das Formular öffnet sich (gleiche Felder wie bei Hauptkapitel)

**Schritt 3: Formular ausfüllen**

- Fülle die Felder wie beim Hauptkapitel aus
- Die Nummer sollte die Hierarchie widerspiegeln (z.B. "4.1" unter "4")

**Schritt 4: Speichern**

1. Klicke auf **"Speichern"**
2. Du wirst zum übergeordneten Kapitel zurückgeleitet
3. Das Unterkapitel erscheint in der Hierarchie

> **💡 Tipp:** Du kannst Unterkapitel auch nachträglich verschieben, indem du das "Übergeordnete Kapitel" änderst.

### Reihenfolge festlegen

Die Reihenfolge der Kapitel wird durch drei Faktoren bestimmt:

1. **Reihenfolge-Feld** (numerisch, höchste Priorität)
2. **Kapitelnummer** (natürliche Sortierung)
3. **Titel** (alphabetisch)

**Reihenfolge manuell steuern:**

1. Öffne das Kapitel im Bearbeiten-Modus
2. Setze das Feld **"Reihenfolge"** (z.B. 1, 2, 3, ...)
3. Speichere

> **💡 Tipp:** Verwende Reihenfolge-Werte nur bei Bedarf (z.B. bei Anhängen oder Sonderfällen). Normalerweise reicht die Nummerierung.

## Kapitel bearbeiten

### Kapitel-Details ändern

**Schritt 1: Kapitel öffnen**

1. Navigiere zur Norm
2. Klicke auf das gewünschte Kapitel

**Schritt 2: Bearbeiten-Modus**

1. Klicke auf **"Kapitel ändern"**
2. Das Bearbeitungsformular öffnet sich

**Schritt 3: Änderungen vornehmen**

Du kannst alle Felder bearbeiten:

- Nummer
- Reihenfolge
- Titel
- Beschreibung
- Geforderte Nachweise
- Erfüllung erforderlich
- Erfüllungsgrad
- Erfüllt durch
- Übergeordnetes Kapitel (= Verschieben in der Hierarchie)

**Zusätzliche Felder im Bearbeiten-Modus:**

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| **Erfüllungsgrad in %** | Bewertung 0-100% | 85 |
| **Erfüllt durch** | Wie wird die Anforderung umgesetzt? | "Prozess XY, Dokument Z" |
| **Übergeordnetes Kapitel** | Verschieben in der Hierarchie | (Dropdown-Auswahl) |

**Schritt 4: Speichern**

1. Klicke auf **"Speichern"**
2. Änderungen werden übernommen

### Erfüllungsgrad bewerten

Der Erfüllungsgrad zeigt, wie gut eine Anforderung umgesetzt ist.

**Bewertungsskala:**

| Wert | Bedeutung | Farbe |
|------|-----------|-------|
| 0% | Nicht umgesetzt | - |
| 1-29% | Geringfügig umgesetzt | Dunkelorange |
| 30-79% | Teilweise umgesetzt | Orange |
| 80-99% | Weitgehend umgesetzt | Hellgrün |
| 100% | Vollständig umgesetzt | Dunkelgrün |

**Bewertungsrichtlinien:**

**100% - Vollständig erfüllt**
- Alle Normforderungen sind dokumentiert
- Prozesse/Dokumente sind etabliert und gelebt
- Nachweise sind vollständig vorhanden
- Keine Abweichungen

**80-99% - Weitgehend erfüllt**
- Hauptanforderungen sind umgesetzt
- Kleinere Lücken oder Verbesserungspotenzial vorhanden
- Nachweise grösstenteils vorhanden

**30-79% - Teilweise erfüllt**
- Grundlegende Ansätze vorhanden
- Wesentliche Lücken bestehen
- Nachweise unvollständig

**1-29% - Geringfügig umgesetzt**
- Nur Ansätze erkennbar
- Grosse Lücken
- Kaum Nachweise

**0% - Nicht umgesetzt**
- Keine Umsetzung
- Keine Nachweise

**Erfüllungsgrad setzen:**

1. Öffne das Kapitel im Bearbeiten-Modus
2. Setze den **"Erfüllungsgrad in %"** (0-100)
3. Ergänze im Feld **"Erfüllt durch"** die Umsetzungsbeschreibung
4. Speichere

> **💡 Tipp:** Der Gesamt-Erfüllungsgrad einer Norm wird automatisch aus allen als "erforderlich" markierten Kapiteln berechnet.

### Erfüllungsbeschreibung dokumentieren

Das Feld "Erfüllt durch" beschreibt WIE die Normforderung umgesetzt wird.

**Best Practices:**

**Konkret und spezifisch**
- ✅ "Dokumentiert in VA-001 'Managementbewertung', durchgeführt quartalsweise"
- ❌ "Wird gemacht"

**Verknüpfungen nennen**
- ✅ "Prozess 'Strategieplanung' (P-001), Dokument 'SWOT-Analyse 2024'"
- ❌ "In Prozessen vorhanden"

**Nachvollziehbar für Dritte**
- ✅ "Jährliche Kontextanalyse durch QMB, dokumentiert in Protokoll MB-2024-01"
- ❌ "QMB macht das"

**Aktuelle Referenzen**
- ✅ "Siehe aktuelle Kundenzufriedenheitsanalyse Q4/2023"
- ❌ "Wird analysiert" (ohne Zeitbezug)

## Verknüpfungen erstellen

Kapitel können mit anderen ELIZA-Objekten verknüpft werden, um Nachweise zu dokumentieren.

### Verfügbare Verknüpfungen

| Verknüpfung | Zweck | Beispiel |
|-------------|-------|----------|
| **Prozesse** | Welcher Prozess erfüllt die Anforderung? | "Managementbewertung" |
| **Hilfsmittel** | Welche Tools/Vorlagen werden verwendet? | "Checklis te Audit" |
| **Dokumente** | Welche Dokumente sind Nachweise? | "QM-Handbuch" |
| **Ordner** | Wo liegen relevante Dokumente? | "Zertifikate" |
| **Auditkriterien** | Prüfkriterien für Audits | "Vollständigkeit MB" |

### Prozesse verknüpfen

**Schritt 1: Kapitel öffnen**

1. Navigiere zum gewünschten Kapitel
2. Klicke auf **"Kapitel ändern"**

**Schritt 2: Prozesse auswählen**

1. Scrolle zum Abschnitt **"Verknüpfungen"**
2. Im Feld **"Verknüpfte Prozesse"** wählst du einen oder mehrere Prozesse
3. Nutze die Mehrfachauswahl (Strg/Cmd + Klick)

**Schritt 3: Speichern**

1. Klicke auf **"Speichern"**
2. Die Verknüpfungen werden gespeichert
3. In der Kapitel-Detailansicht erscheinen die verlinkten Prozesse

> **💡 Tipp:** Verknüpfte Prozesse sind klickbar und führen direkt zur Prozess-Detailseite.

### Dokumente und Ordner verknüpfen

**Dokumente** = Einzelne DMS-Dokumente
**Ordner** = DMS-Ordner mit mehreren Dokumenten

**Schritt 1: Kapitel im Bearbeiten-Modus öffnen**

**Schritt 2: Verknüpfungen setzen**

- **"Verknüpfte Dokumente"** - Wähle spezifische Dokumente
- **"Verknüpfte Ordner"** - Wähle Dokumentordner

**Schritt 3: Speichern**

Mehr zur DMS-Integration in [Kapitel 5: Integration]({{< ref "05-integration" >}}).

### Hilfsmittel verknüpfen

Hilfsmittel sind Vorlagen, Checklisten oder Werkzeuge aus dem Prozessmanagement.

**Verwendung:**
- Audit-Checklisten
- Formular-Vorlagen
- Messvorrichtungen
- Software-Tools

**Verknüpfung:**
1. Kapitel im Bearbeiten-Modus öffnen
2. Im Feld **"Hilfsmittel"** gewünschte Elemente auswählen
3. Speichern

### Auditkriterien verknüpfen

Auditkriterien definieren, was bei internen/externen Audits geprüft wird.

**Schritt 1: Auditkriterien erstellen** (im Prozessmodul)

**Schritt 2: Mit Kapitel verknüpfen**

1. Kapitel bearbeiten
2. Im Feld **"Auditkriterien"** gewünschte Kriterien auswählen
3. Speichern

> **💡 Tipp:** Auditkriterien helfen dir bei der Audit-Vorbereitung und stellen sicher, dass alle relevanten Punkte geprüft werden.

## SWOT und Massnahmen

Zu jedem Kapitel kannst du Risikobewertungen und Verbesserungsmassnahmen erfassen.

### Einschätzungen (Risikobewertung)

**Zweck:**
- Risiken identifizieren
- Schwachstellen erkennen
- Chancen bewerten

**Einschätzung erstellen:**

1. Öffne die Kapitel-Detailansicht
2. Scrolle zum Abschnitt **"Einschätzungen"**
3. Klicke auf **"Einschätzung hinzufügen"**
4. Fülle das Formular aus:
   - Titel der Einschätzung
   - Bewertung (z.B. Risikostufe)
   - Beschreibung

**Durchschnittliche Risikobewertung:**

Das System berechnet automatisch die durchschnittliche Bewertung aller Einschätzungen eines Kapitels.

### Massnahmen erfassen

**Zweck:**
- Lücken schliessen
- Verbesserungen planen
- Compliance herstellen

**Massnahme erstellen:**

1. Öffne die Kapitel-Detailansicht
2. Scrolle zum Abschnitt **"Massnahmen"**
3. Klicke auf **"Massnahme hinzufügen"**
4. Fülle das Formular aus:
   - **Titel** - Kurzbeschreibung
   - **Beschreibung** - Detaillierte Massnahme
   - **Verantwortung** - Zuständige Person
   - **Fälligkeitsdatum** - Termin
   - **Status** - Offen/In Bearbeitung/Abgeschlossen

**Massnahmen-Übersicht:**

Alle Massnahmen aus dem Standards-Modul kannst du zentral einsehen:

1. Klicke im Menü auf **"Massnahmen"**
2. Du siehst alle Standards-Massnahmen

Mehr dazu in [Kapitel 5: Integration]({{< ref "05-integration" >}}).

## Kapitel löschen

### Lösch-Prozess

**Schritt 1: Kapitel öffnen**

1. Navigiere zum Kapitel, das gelöscht werden soll

**Schritt 2: Löschen**

1. Klicke auf **"Löschen"**
2. Bestätige die Sicherheitsabfrage

> **⚠️ Wichtig:** Das Löschen eines Kapitels entfernt auch alle Unterkapitel! Diese Aktion kann nicht rückgängig gemacht werden.

**Auswirkungen:**

- Kapitel und alle Unterkapitel werden gelöscht
- Verknüpfungen werden entfernt (nicht die verlinkten Objekte selbst)
- Einschätzungen und Massnahmen werden gelöscht
- Der Erfüllungsgrad der Norm wird neu berechnet

### Alternative: Kapitel inaktiv markieren

Statt zu löschen, kannst du:

1. Erfüllungsgrad auf 0% setzen
2. "Erfüllung erforderlich" deaktivieren
3. In der Beschreibung "[NICHT ZUTREFFEND]" ergänzen

## Navigation zwischen Kapiteln

### Navigations-Buttons

In der Kapitel-Detailansicht findest du Navigations-Buttons:

| Button | Funktion | Ziel |
|--------|----------|------|
| **↑ Hoch** | Zum übergeordneten Element | Übergeordnetes Kapitel oder Norm |
| **↓ Runter** | Zum ersten Unterelement | Erstes Unterkapitel (falls vorhanden) |
| **← Vorheriges** | Zum vorherigen Element | Vorheriges Kapitel auf gleicher Ebene |
| **→ Nächstes** | Zum nächsten Element | Nächstes Kapitel auf gleicher Ebene |

**Verwendung:**

1. Klicke auf den entsprechenden Button
2. Du wirst zum Ziel-Kapitel navigiert

> **💡 Tipp:** Mit diesen Buttons kannst du effizient durch die gesamte Normstruktur navigieren, ohne zurück zur Übersicht zu müssen.

### Breadcrumb-Navigation

Die Breadcrumb-Navigation zeigt den aktuellen Pfad:

```
ISO 9001:2015 > 4 Kontext > 4.1 Organisation > 4.1.1 Externe Themen
```

**Verwendung:**

- Klicke auf ein Element im Pfad
- Du springst direkt zu dieser Ebene

## Häufige Fragen

### Wie tief kann ich Kapitel verschachteln?

Technisch unbegrenzt, aber empfohlen:
- Maximal 4-5 Ebenen
- Bei ISO-Normen: meist 3 Ebenen (z.B. 4.4.1)

### Kann ich Kapitel zwischen Normen verschieben?

Nein, Kapitel sind fest einer Norm zugeordnet. Alternative:
1. Neues Kapitel in der Ziel-Norm erstellen
2. Inhalte manuell übertragen
3. Altes Kapitel löschen

### Wer sieht meine Erfüllungsgrad-Bewertungen?

Alle Benutzer mit **standards_users** Berechtigung können Erfüllungsgrade sehen. Nur **standards_admin** können sie ändern.

### Wie berechnet sich der Gesamt-Erfüllungsgrad?

```
Gesamt-Erfüllungsgrad =
  Summe(Erfüllungsgrad aller als "erforderlich" markierten Kapitel)
  / Anzahl("erforderlich" Kapitel)
```

**Beispiel:**
- Kapitel 1: 100% (erforderlich)
- Kapitel 2: 80% (erforderlich)
- Kapitel 3: 60% (nicht erforderlich) ← zählt NICHT
- Gesamt: (100 + 80) / 2 = 90%

### Kann ich den Erfüllungsgrad automatisch berechnen?

Nein, der Erfüllungsgrad muss manuell gesetzt werden. Dies stellt sicher, dass Bewertungen bewusst und nachvollziehbar erfolgen.

## Best Practices

### ✅ Empfohlene Vorgehensweisen

**Struktur folgt der Norm**
- Übernehme die offizielle Kapitelnummerierung
- Verwende die Originalbezeichnungen
- Füge eigene Unterkapitel nur bei Bedarf hinzu

**Erfüllungsgrad regelmässig aktualisieren**
- Quartalsweise Überprüfung
- Nach Implementierung von Massnahmen
- Vor internen/externen Audits

**"Erfüllt durch" detailliert dokumentieren**
- Konkrete Prozesse und Dokumente nennen
- Aktuelle Verweise verwenden
- Für Auditor verständlich formulieren

**Verknüpfungen konsequent setzen**
- Prozesse immer verlinken
- Nachweisdokumente zuordnen
- Hilfsmittel referenzieren

**Nur "erforderlich" bei Muss-Anforderungen**
- Informative Kapitel NICHT als "erforderlich" markieren
- Sonst wird der Erfüllungsgrad verfälscht

**Massnahmen bei Lücken erfassen**
- Bei Erfüllungsgrad < 100%: Massnahme planen
- Verantwortung und Termin festlegen
- Nachverfolgung sicherstellen

### ❌ Häufige Fehler vermeiden

**Keine inkonsistente Bewertung**
- ❌ 100% setzen ohne vollständige Umsetzung
- ✅ Ehrliche, nachvollziehbare Bewertung

**Keine leeren "Erfüllt durch" Felder**
- ❌ Erfüllungsgrad ohne Umsetzungsbeschreibung
- ✅ Immer dokumentieren WIE die Anforderung erfüllt wird

**Keine zu granulare Struktur**
- ❌ 10 Ebenen Verschachtelung
- ✅ Maximal 3-4 Ebenen

**Keine veralteten Verknüpfungen**
- ❌ Links zu gelöschten Prozessen/Dokumenten
- ✅ Regelmässig Verknüpfungen prüfen

**Keine isolierten Kapitel**
- ❌ Kapitel ohne Verknüpfungen oder Umsetzungsbeschreibung
- ✅ Zusammenhänge dokumentieren

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Kapitel-Struktur zu verstehen (Hierarchie, Nummerierung)
- ✅ Hauptkapitel und Unterkapitel zu erstellen
- ✅ Erfüllungsgrad zu bewerten und zu dokumentieren
- ✅ Verknüpfungen mit Prozessen, Dokumenten, etc. zu setzen
- ✅ Einschätzungen und Massnahmen zu erfassen
- ✅ Zwischen Kapiteln zu navigieren
- ✅ Best Practices für strukturierte Dokumentation

## Nächste Schritte

Jetzt kennst du die Kernfunktionen des Standards-Moduls. Weiter geht's mit:

- [Interessierte Parteien]({{< ref "04-stakeholder" >}}) - Lerne Stakeholder-Management
- [Integration]({{< ref "05-integration" >}}) - Vertiefe die Verknüpfungen mit anderen Modulen
- [Best Practices]({{< ref "07-best-practices" >}}) - Optimiere deine Workflows

> **💡 Tipp:** Die Verknüpfungen zwischen Kapiteln und anderen ELIZA-Modulen (Prozesse, DMS) sind der Schlüssel zu einem lebendigen Managementsystem. Nutze sie konsequent!
