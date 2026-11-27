---
title: "Integration mit anderen Modulen"
description: ""
weight: "6"
tags:
  - "integration"
  - "dms"
  - "kpi"
  - "swot"
  - "teams"
  - "audit"
  - "auditkriterien"
  - "tutorials"
  - "verknüpfung"
---


# Integration mit anderen Modulen

Das Prozesse-Modul ist eng mit anderen ELIZA-Modulen verknüpft. Dieses Kapitel zeigt dir, wie du diese Integrationen nutzt.

## Übersicht der Integrationen

| Modul | Integration | Nutzen |
|-------|-------------|--------|
| **DMS** | Dokumente verknüpfen | Arbeitsanweisungen, Formulare bereitstellen |
| **Organisation** | Funktionen nutzen | RACI-Matrix, Verantwortlichkeiten |
| **KPI** | Kennzahlen zuordnen | Prozessleistung messen |
| **SWOT** | Massnahmen verknüpfen | Risiken und Massnahmen nachverfolgen |
| **Teams** | Audit vorbereiten | Audit-Board mit Cards und Checklisten erzeugen |
| **Tutorials** | Schulungen verlinken | Mitarbeitende schulen |
| **Checklisten** | Prüflisten erstellen | Prozessausführung unterstützen |

---

## DMS Integration

### Dokumente mit Prozessen verknüpfen

Dokumente aus dem DMS können mit Prozessen verknüpft werden:

1. Öffne den Prozess zum Bearbeiten
2. Im Feld **"Verknüpfte Dokumente"** klicke auf **"Hinzufügen"**
3. Wähle die gewünschten Dokumente aus dem DMS
4. Speichere

**Typische verknüpfte Dokumente:**
- Verfahrensanweisungen
- Arbeitsanweisungen
- Formulare und Vorlagen
- Checklisten
- Organigramme

### Ordner verknüpfen

Du kannst auch ganze DMS-Ordner mit einem Prozess verknüpfen:

1. Öffne den Prozess zum Bearbeiten
2. Im Feld **"Verknüpfte Ordner"** wähle die relevanten Ordner
3. Speichere

> **💡 Tipp:** Verknüpfe Ordner für Prozesse mit vielen zugehörigen Dokumenten.

### Hilfsdokumente bei Prozessschritten

Für die Detailverknüpfung auf Schritt-Ebene:

1. Öffne einen Prozessschritt zum Bearbeiten
2. Im Feld **"Hilfsdokumente"** wähle relevante DMS-Dokumente
3. Speichere

---

## Organisation Integration

### Funktionen für RACI nutzen

Das Organisations-Modul definiert Funktionen, die im Prozesse-Modul verwendet werden können:

| Prozess-Feld | Organisations-Verknüpfung |
|--------------|---------------------------|
| Verantwortliche Funktion | Funktion als Prozessverantwortung |
| Prüfer-Funktion | Funktion für Prozessprüfung |
| Freigeber-Funktion | Funktion für Prozessfreigabe |
| Beitragende Funktionen | Funktionen im Prozess-Team |

### Mitarbeitende zuordnen

Einzelne Mitarbeitende können direkt zugeordnet werden:

- **Prozessverantwortung**: Hauptverantwortliche Person
- **Prozessverantwortung Stv.**: Stellvertretung
- **Team**: Mitarbeitende im Prozess-Team

### Organisationseinheiten

Prozesse können Organisationseinheiten zugeordnet werden:

1. Öffne den Prozess zum Bearbeiten
2. Im Feld **"Zugeordnete Organisationseinheiten"** wähle die relevanten Einheiten
3. Speichere

---

## KPI Integration

### Kennzahlen mit Prozessen verknüpfen

Prozesse können mit KPIs (Key Performance Indicators) verknüpft werden, um die Prozessleistung zu messen:

1. Öffne den Prozess
2. Wechsle zum Tab **"KPIs"** oder **"Kennzahlen"**
3. Verknüpfe relevante KPIs

**Beispiele für Prozess-KPIs:**
- Durchlaufzeit
- Fehlerquote
- Kundenzufriedenheit
- Kosten pro Vorgang

> **💡 Tipp:** Definiere KPIs im KPI-Modul und verknüpfe sie dann mit dem Prozess.

---

## Audit vorbereiten (Teams)

Der Assistent **"Audit vorbereiten"** überführt deine Prozesse in ein Kanban-Board: Für jeden ausgewählten Prozess entsteht eine Card, und die Auditkriterien des Prozesses werden auf dieser Card als Checkliste hinterlegt. So arbeitest du ein internes oder externes Audit Prozess für Prozess ab und siehst jederzeit, welche Kriterien schon geprüft sind.

**Prozesse → Einstellungen → Audit vorbereiten**

### Voraussetzungen

| Voraussetzung | Wo du sie einrichtest |
|---------------|-----------------------|
| Ein Board für die Audit-Cards | Teams → Space → Board erstellen |
| Deine Mitgliedschaft im Space des Boards | Teams → Space → Team |
| Mindestens eine Liste auf dem Board | Teams → Board → Liste hinzufügen |
| Auditkriterien an den Prozessen | Prozess → Tab **"Auditkriterien"** |

> **⚠️ Achtung:** Im ersten Schritt erscheinen nur Boards aus Spaces, in denen du selbst Teammitglied bist. Bleibt die Auswahl leer, gibt es entweder noch kein Board oder du bist im betreffenden Space nicht eingetragen. Beides pflegst du im Teams-Modul, es gibt dafür keine Einstellung im Prozesse-Modul.

### Auditkriterien erfassen

Auditkriterien legen fest, was bei einem Audit geprüft wird. Du erfasst sie immer direkt am Prozess:

1. Öffne den Prozess
2. Wechsle zum Tab **"Auditkriterien"**
3. Klicke auf **"+ Auditkriterium"**
4. Fülle die Felder aus und speichere

| Feld | Bedeutung |
|------|-----------|
| **Titel** | Wird beim Audit-Assistenten zum Eintrag in der Checkliste auf der Card |
| **Beschreibung** | Erläuterung, was genau geprüft wird |
| **Nachweis** | Womit die Erfüllung belegt wird |
| **Nachweis durch Hilfsmittel** | Verknüpfung zu Hilfsmitteln des Prozesses |
| **Nachweis durch Dokumente** | Verknüpfung zu DMS-Dokumenten |
| **Erfüllungsgrad in %** | Farbige Bewertung in der Übersicht: grün bei hoher, orange bei mittlerer, kräftiges Orange bei tiefer Erfüllung |

> **💡 Tipp:** Der Tab **"Auditkriterien"** ist nur mit dem Recht **"Auditkriterium ansehen"** sichtbar. Eine modulweite Liste aller Auditkriterien gibt es im Menü nicht, die Pflege erfolgt immer am einzelnen Prozess.

### Der Assistent in drei Schritten

**Schritt 1: Board**

Wähle das Board, auf dem die Audit-Cards entstehen sollen. Unter dem Dropdown siehst du zur Kontrolle den Space sowie die Anzahl Listen und Cards des gewählten Boards.

**Schritt 2: Prozesse**

Wähle im Prozessbaum die Prozesse aus, die auditiert werden sollen. Zur Auswahl stehen Prozesse im Status **Entwurf** und **freigegeben**; Prozesse in Prüfung, geprüfte, abgelaufene und archivierte Prozesse erscheinen nicht.

**Schritt 3: Erstellen**

Die Zusammenfassung zeigt pro Prozess, wie viele Auditkriterien mitkommen. Mit dem Erstellen legt ELIZA die Cards an und öffnet anschliessend das Board.

### Was auf dem Board entsteht

- Pro Prozess eine Card mit dem Prozesstitel, abgelegt in der **ersten Liste** des Boards
- Auf der Card eine Checkliste **"Auditkriterien"** mit einem Eintrag pro Auditkriterium des Prozesses
- Die Card ist mit dem Prozess verknüpft, du springst also direkt vom Audit zurück in die Prozessdokumentation

Prozesse ohne Auditkriterien ergeben eine Card ohne Checkliste. Erfasse die Kriterien darum vor dem Start des Assistenten.

> **⚠️ Achtung:** Der Assistent legt bei jedem Durchlauf neue Cards an und erkennt keine bereits vorhandenen. Startest du ihn für dieselben Prozesse zweimal, entstehen doppelte Cards.

---

## SWOT Integration

### Massnahmen verknüpfen

Aus Auditergebnissen abgeleitete Massnahmen können mit Prozessen verknüpft werden:

1. Öffne den Prozess
2. Wechsle zum Tab **"Massnahmen"** oder **"Verknüpfungen"**
3. Verknüpfe relevante SWOT-Massnahmen

---

## Tutorials Integration

### Schulungen verknüpfen

Prozesse können mit Tutorial-Lektionen verknüpft werden:

1. Öffne den Prozess zum Bearbeiten
2. Im Feld **"Verknüpfte Lektionen"** wähle relevante Tutorials
3. Speichere

**Anwendungsfälle:**
- Onboarding: Neuen Mitarbeitenden Prozesse erklären
- Änderungen: Schulung zu Prozessänderungen
- Vertiefung: Detailwissen zu komplexen Schritten

### Lektionen bei Prozessschritten

Auch auf Prozessschritt-Ebene können Tutorials verknüpft werden:

1. Öffne einen Prozessschritt zum Bearbeiten
2. Im Feld **"Lektionen"** wähle relevante Tutorial-Lektionen
3. Speichere

---

## Checklisten Integration

### Checkliste zu Prozess erstellen

Für Prozesse können Checklisten erstellt werden:

1. Öffne den Prozess
2. Klicke auf **"Checkliste erstellen"** oder **"+ Checkliste"**
3. Definiere die Prüfpunkte
4. Speichere

**Verwendung:**
- Prozessausführung kontrollieren
- Qualitätssicherung
- Einarbeitung neuer Mitarbeitender

---

## Mitteilungen und Benachrichtigungen

### Automatische Mitteilungen

Das System kann automatisch Mitteilungen versenden:

| Ereignis | Mitteilung an |
|----------|---------------|
| Prozess zur Prüfung | Prüfer-Funktion |
| Prozess abgelehnt | Prozessverantwortung |
| Prozess freigegeben | Team, Stakeholder |
| Prozess abgelaufen | Prozessverantwortung |

### Mitteilungsvorlagen

**Prozesse → Einstellungen → E-Mail-Vorlagen**

Administratoren können die Mitteilungsvorlagen anpassen:

1. Navigiere zu den E-Mail-Vorlagen
2. Wähle die gewünschte Vorlage
3. Passe Text und Platzhalter an
4. Speichere

---

## Favoriten und Schnellzugriff

### Prozess als Favorit markieren

1. Öffne den Prozess
2. Klicke auf das Stern-Icon (☆)
3. Der Prozess erscheint in deinen Favoriten

**Prozesse → Favoriten**

Hier findest du alle deine favorisierten Prozesse für schnellen Zugriff.

---

## Verlinkung in Beschreibungen

### Links zu anderen Objekten

In Beschreibungsfeldern kannst du auf andere ELIZA-Objekte verlinken:

- Links zu anderen Prozessen
- Links zu DMS-Dokumenten
- Links zu KPIs

> **💡 Tipp:** Nutze Verlinkungen für Querverweise zwischen zusammenhängenden Prozessen.

---

## Best Practices für Integration

### ✅ Empfehlungen

- **Dokumente aktuell halten**: Verknüpfe nur freigegebene Dokumente
- **RACI mit Funktionen**: Nutze Funktionen für flexiblere Zuordnung
- **KPIs definieren**: Miss die Prozessleistung mit Kennzahlen
- **Schulungen verlinken**: Erleichtert das Onboarding

### ❌ Häufige Fehler

- **Tote Links**: Gelöschte Dokumente bleiben verknüpft
- **Zu viele Verknüpfungen**: Fokus auf die wichtigsten
- **Fehlende Aktualisierung**: Verknüpfungen bei Änderungen prüfen

---

## FAQ

### Werden verknüpfte Dokumente automatisch aktualisiert?

Ja, Verknüpfungen zeigen immer auf die aktuelle Version des DMS-Dokuments.

### Kann ich externe Systeme verknüpfen?

Ja, nutze das URL-Feld bei Hilfsmitteln oder Links in Beschreibungen.

### Was passiert mit Verknüpfungen beim Löschen?

Wenn ein verknüpftes Objekt gelöscht wird, bleibt die Verknüpfung bestehen, zeigt aber auf ein nicht mehr existierendes Objekt.

---

## Nächste Schritte

- **[Kapitel 7: Best Practices]({{< ref "07-best-practices" >}})**: Tipps für effektives Prozessmanagement

---

## Zusammenfassung

✅ Du kennst die Integrationen mit anderen Modulen
✅ Du kannst Dokumente und Ordner aus dem DMS verknüpfen
✅ Du verstehst die Nutzung von Funktionen aus der Organisation
✅ Du kannst KPIs und SWOT-Elemente verknüpfen
✅ Du weisst, wie Tutorials und Checklisten integriert werden
