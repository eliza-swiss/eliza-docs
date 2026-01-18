---
title: "Integration mit anderen Modulen"
description: ""
weight: "5"
tags:
  - "integration"
  - "dms"
  - "prozesse"
  - "swot"
  - "verknüpfungen"
---


# Integration mit anderen Modulen

Dieses Kapitel zeigt dir, wie das Standards-Modul mit anderen ELIZA-Modulen zusammenarbeitet.

## Überblick: Modul-Integrationen

Das Standards-Modul ist mit folgenden ELIZA-Modulen vernetzt:

| Modul | Integration | Zweck |
|-------|-------------|-------|
| **DMS** | Dokumente & Ordner | Nachweise verknüpfen |
| **Prozesse** | Prozesse, Hilfsmittel, Auditkriterien | Umsetzung dokumentieren |
| **SWOT** | Einschätzungen & Massnahmen | Risiken und Verbesserungen |
| **Dashboard** | Favoriten | Schnellzugriff auf Normen |

## Integration mit DMS (Dokumentenmanagement)

### Dokumente verknüpfen

Verknüpfe DMS-Dokumente als Nachweise für Normkapitel.

**Verwendungszwecke:**
- Verfahrensanweisungen als Nachweis
- Checklisten und Formulare
- Protokolle und Berichte
- Zertifikate und Nachweise

**Verknüpfung erstellen:**

1. Öffne ein Kapitel im Bearbeiten-Modus
2. Scrolle zu **"Verknüpfte Dokumente"**
3. Wähle ein oder mehrere Dokumente aus
4. Speichere

**In der Kapitel-Ansicht:**
- Verknüpfte Dokumente werden aufgelistet
- Klickbare Links führen direkt zum Dokument
- DMS-Vorschau ist verfügbar

> **💡 Tipp:** Verwende sprechende Dokumentnamen im DMS, damit die Zuordnung klar ist.

### Ordner verknüpfen

Verknüpfe ganze DMS-Ordner mit Kapiteln.

**Verwendungszwecke:**
- Ordner "Zertifikate" für Zertifizierungskapitel
- Ordner "Audit-Berichte" für Audit-Anforderungen
- Ordner "Schulungsunterlagen" für Kompetenzkapitel

**Vorteil:**
- Alle Dokumente im Ordner sind automatisch zugeordnet
- Neue Dokumente im Ordner sind sofort verfügbar
- Strukturierte Ablage

**Verknüpfung erstellen:**

1. Kapitel im Bearbeiten-Modus öffnen
2. Zu **"Verknüpfte Ordner"** scrollen
3. Gewünschten DMS-Ordner auswählen
4. Speichern

### Datei-Upload direkt an Norm

Neben DMS-Verknüpfungen kannst du Dateien direkt zur Norm hochladen (siehe [Kapitel 2: Normen verwalten]({{< ref "02-normen-verwalten" >}})).

**Wann DMS, wann direkter Upload?**

| Kriterium | DMS-Dokument | Direkt-Upload |
|-----------|--------------|---------------|
| Dokument wird an mehreren Stellen genutzt | ✅ Ja | ❌ Nein |
| Dokument hat Workflow (Freigabe, Versionen) | ✅ Ja | ❌ Nein |
| Normtext oder statisches PDF | ❌ Nein | ✅ Ja |
| Dokument nur für diese Norm relevant | ❌ Nein | ✅ Ja |

> **💡 Tipp:** Verwende DMS für lebendige, gemeinsam genutzte Dokumente. Nutze Direkt-Upload für normspezifische, statische Dateien.

## Integration mit Prozessmanagement

### Prozesse verknüpfen

Zeige, welche Prozesse eine Normforderung erfüllen.

**Beispiel: ISO 9001 Kapitel 5.1 "Führung"**

Verknüpfte Prozesse:
- "Managementbewertung"
- "Strategieplanung"
- "Qualitätspolitik-Review"

**Verknüpfung erstellen:**

1. Kapitel im Bearbeiten-Modus öffnen
2. Zu **"Verknüpfte Prozesse"** scrollen
3. Prozesse aus der Liste auswählen (Mehrfachauswahl)
4. Speichern

**In der Kapitel-Ansicht:**
- Prozesse werden mit Link angezeigt
- Klick führt zur Prozess-Detailseite
- BPMN-Diagramme sind einsehbar

### Hilfsmittel verknüpfen

Hilfsmittel sind Vorlagen, Checklisten oder Tools aus dem Prozessmanagement.

**Beispiele:**
- Audit-Checkliste für Kapitel "9.2 Internes Audit"
- Formular "Managementbewertung" für Kapitel "9.3"
- Messvorlage für Kapitel "9.1 Überwachung"

**Verknüpfung erstellen:**

1. Kapitel bearbeiten
2. Feld **"Hilfsmittel"** → Auswahl treffen
3. Speichern

### Auditkriterien verknüpfen

Auditkriterien definieren Prüfpunkte für interne/externe Audits.

**Verwendung:**
- Systematische Audit-Vorbereitung
- Checkliste für Auditoren
- Vollständigkeit sicherstellen

**Verknüpfung erstellen:**

1. Auditkriterium im Prozessmodul erstellen
2. Kapitel im Standards-Modul bearbeiten
3. Feld **"Auditkriterien"** → Auswahl
4. Speichern

**Vorteil:**
- Bei Audits: Alle Prüfkriterien sind am Kapitel hinterlegt
- Auditor sieht sofort, was zu prüfen ist

## Integration mit SWOT-Analysen

### Einschätzungen erfassen

Erfasse Risikobewertungen zu Normen oder Kapiteln.

**Verwendungszwecke:**
- Risiken identifizieren (z.B. "Compliance-Risiko bei Gesetzesänderung")
- Chancen bewerten (z.B. "Wettbewerbsvorteil durch Zertifizierung")
- Schwächen erkennen (z.B. "Lücke in der Umsetzung")

**Einschätzung erstellen:**

1. Öffne Norm oder Kapitel in der Detailansicht
2. Scrolle zum Abschnitt **"Einschätzungen"**
3. Klicke auf **"Einschätzung hinzufügen"**
4. Fülle das Formular aus:
   - Titel
   - Bewertung (z.B. Risikostufe 1-5)
   - Beschreibung
5. Speichere

**Durchschnittliche Bewertung:**

Das System berechnet automatisch die durchschnittliche Risikobewertung aller Einschätzungen eines Kapitels.

### Massnahmen planen

Erfasse Verbesserungsmassnahmen zu Normen oder Kapiteln.

**Typische Massnahmen:**
- Lücken schliessen (z.B. "VA für internes Audit erstellen")
- Verbesserungen umsetzen (z.B. "Prozess digitalisieren")
- Compliance herstellen (z.B. "Schulung durchführen")

**Massnahme erstellen:**

1. Öffne Norm oder Kapitel
2. Scrolle zum Abschnitt **"Massnahmen"**
3. Klicke auf **"Massnahme hinzufügen"**
4. Fülle das Formular aus:
   - **Titel** - Kurzbeschreibung
   - **Beschreibung** - Detaillierte Massnahme
   - **Verantwortung** - Zuständige Person
   - **Fälligkeitsdatum** - Termin
   - **Status** - Offen/In Bearbeitung/Abgeschlossen
5. Speichere

**Massnahmen-Übersicht:**

Alle Massnahmen aus dem Standards-Modul kannst du zentral einsehen:

1. Klicke im Menü auf **"Massnahmen"**
2. Du siehst alle Standards-Massnahmen
3. Filtere nach Status, Verantwortung, Fälligkeit

**Anzeige in der Massnahmen-Übersicht:**

| Spalte | Inhalt |
|--------|--------|
| Titel | Massnahmen-Titel |
| Verknüpfte Norm/Kapitel | Ursprung der Massnahme |
| Verantwortung | Zuständige Person |
| Status | Offen/In Bearbeitung/Abgeschlossen |
| Fälligkeit | Termin |

> **💡 Tipp:** Nutze die Massnahmen-Übersicht für regelmässige Reviews im Managementbewertungs-Meeting.

## Integration mit Dashboard

### Favoriten nutzen

Markiere häufig genutzte Normen als Favoriten für schnellen Zugriff.

**Favorit setzen:**

1. Öffne eine Norm in der Detailansicht
2. Klicke auf das **Stern-Symbol** ⭐ oben rechts
3. Die Norm wird als Favorit markiert

**Favoriten aufrufen:**

- Klicke im Menü auf "Favoriten"
- Oder nutze die direkte URL `/standards/favorites`
- Du siehst alle deine favorisierten Standards-Objekte

**Favorit entfernen:**

1. Öffne die Norm
2. Klicke erneut auf das Stern-Symbol
3. Der Favorit wird entfernt

> **💡 Tipp:** Markiere die Normen als Favoriten, an denen du aktiv arbeitest oder die du regelmässig brauchst.

## Modul-übergreifende Workflows

### Workflow 1: Norm-Anforderung umsetzen

<pre>
1. Standards: Normkapitel erfassen
   → Beschreibung: Was fordert die Norm?
   → Geforderte Nachweise: Was ist nötig?
   
2. Prozesse: Prozess erstellen/anpassen
   → Prozess erfüllt Normforderung
   
3. Standards: Prozess mit Kapitel verknüpfen
   → "Verknüpfte Prozesse" setzen
   
4. DMS: Nachweisdokumente erstellen
   → Verfahrensanweisung, Formulare
   
5. Standards: Dokumente mit Kapitel verknüpfen
   → "Verknüpfte Dokumente" setzen
   
6. Standards: Erfüllungsgrad bewerten
   → Erfüllungsgrad % setzen
   → "Erfüllt durch" dokumentieren
</pre>

### Workflow 2: Gap-Analyse und Massnahmenplanung

<pre>
1. Standards: Norm importieren/erfassen
   → Alle Kapitel mit Anforderungen

2. Standards: Erfüllungsgrad bewerten
   → Für jedes Kapitel: 0-100%
   → Lücken identifizieren
   
3. SWOT: Risikobewertung durchführen
   → Einschätzungen zu kritischen Kapiteln
   
4. Standards: Massnahmen planen
   → Für Kapitel mit <100% Erfüllung
   → Verantwortung und Termin setzen
   
5. Prozesse/DMS: Massnahmen umsetzen
   → Prozesse erstellen
   → Dokumente entwickeln
   
6. Standards: Verknüpfungen setzen
   → Neue Prozesse/Dokumente verlinken
   → Erfüllungsgrad aktualisieren
</pre>

### Workflow 3: Audit-Vorbereitung

<pre>
1. Standards: Gesamtansicht nutzen
   → Alle Kapitel auf einen Blick
   → Erfüllungsgrade prüfen
   
2. Standards: Lücken identifizieren
   → Kapitel mit <100% Erfüllung
   → Fehlende Nachweise
   
3. Standards: Massnahmen prüfen
   → Offene Massnahmen abschliessen
   → Status aktualisieren
   
4. DMS: Nachweise komplettieren
   → Fehlende Dokumente erstellen
   → Dokumente aktualisieren
   
5. Standards: Verknüpfungen prüfen
   → Alle Links funktionieren?
   → Aktuelle Versionen verlinkt?
   
6. Standards: Word/Excel Export
   → Audit-Dokumentation erstellen
   → An Auditor senden
</pre>

## API und Schnittstellen

Das Standards-Modul ist Teil der ELIZA REST API.

**API-Endpunkte:**

- `/api/standards/` - Liste aller Normen
- `/api/standards/<id>/` - Details einer Norm
- `/api/standards/chapters/` - Kapitel
- `/api/standards/stakeholders/` - Stakeholder

> **⚠️ Hinweis:** API-Zugriff erfordert entsprechende Berechtigungen und API-Token. Details in der API-Dokumentation.

## Best Practices für Integration

### ✅ Empfohlene Vorgehensweisen

**Systematische Verknüpfung**
- Für jedes Kapitel: Prozesse verknüpfen
- Für jedes Kapitel: Nachweise (Dokumente) verlinken
- Bei Lücken: Massnahmen erfassen

**DMS-Struktur anpassen**
- Ordner pro Norm anlegen
- Ordner mit Kapiteln verknüpfen
- Konsistente Ablagestruktur

**Prozesse referenzieren Normen**
- In Prozessbeschreibungen: Normkapitel nennen
- Bidirektionale Verknüpfung herstellen

**Massnahmen nachverfolgen**
- Wöchentliche Review der offenen Massnahmen
- Status aktuell halten
- Abgeschlossene Massnahmen → Erfüllungsgrad aktualisieren

**Favoriten gezielt einsetzen**
- Aktive Normen als Favoriten
- Favoriten regelmässig aufräumen

### ❌ Häufige Fehler vermeiden

**Keine isolierten Normen**
- ❌ Norm ohne Verknüpfungen
- ✅ Systematische Integration mit Prozessen/DMS

**Keine veralteten Verknüpfungen**
- ❌ Links zu gelöschten Dokumenten
- ✅ Regelmässig prüfen und aktualisieren

**Keine doppelte Pflege**
- ❌ Norm-Infos im DMS UND Standards dupliziert
- ✅ Standards als "Single Source of Truth"

**Keine ungenutzten Massnahmen**
- ❌ Massnahmen erfasst, aber nie verfolgt
- ✅ Aktives Massnahmen-Management

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Wie das Standards-Modul mit DMS, Prozessen und SWOT integriert ist
- ✅ Dokumente, Ordner und Prozesse zu verknüpfen
- ✅ Einschätzungen und Massnahmen zu nutzen
- ✅ Favoriten für Schnellzugriff zu setzen
- ✅ Modul-übergreifende Workflows anzuwenden
- ✅ Best Practices für effektive Integration

## Nächste Schritte

Vertiefe dein Wissen:

- [Berechtigungskonzept]({{< ref "06-berechtigungskonzept" >}}) - Verstehe Zugriffs- und Bearbeitungsrechte
- [Best Practices]({{< ref "07-best-practices" >}}) - Optimiere deine Workflows
- [Erste Schritte]({{< ref "01-erste-schritte" >}}) - Wiederhole die Grundlagen

> **💡 Tipp:** Die Stärke von ELIZA liegt in der Integration. Nutze die Verknüpfungen konsequent, um ein lebendiges Managementsystem aufzubauen!
