---
title: "Ordnerstruktur und Navigation"
description: ""
weight: "3"
tags:
  - "ordner"
  - "struktur"
  - "navigation"
  - "favoriten"
  - "organisation"
---


# Ordnerstruktur und Navigation

Dieses Kapitel zeigt dir, wie du eine effektive Ordnerstruktur aufbaust und effizient durch deine Dokumente navigierst.

## Ordner-Konzept

### Was sind Ordner?

Ordner im DMS dienen zur logischen Organisation deiner Dokumente. Sie funktionieren ähnlich wie Ordner auf deinem Computer:

- **Hierarchische Struktur**: Ordner können Unterordner enthalten
- **Berechtigungsvererbung**: Zugriffsrechte werden an Unterordner vererbt
- **Verantwortlichkeiten**: Ordner können eigene Verantwortliche haben
- **Prozess-Verknüpfung**: Ordner können mit BPMN-Prozessen verknüpft werden

### Ordner vs. Labels

| Ordner | Labels |
|--------|--------|
| Hierarchische Struktur | Flache Tags |
| Ein Dokument = ein Ordner | Ein Dokument = mehrere Labels |
| Für Hauptkategorisierung | Für Zusatzattribute |
| Bestimmt Berechtigungen | Keine Berechtigungswirkung |

> **💡 Tipp:** Nutze Ordner für die Grundstruktur und Labels für Querschnittskategorien.

---

## Ordner erstellen

### Zugriff

**DMS → Ordner → Button "+ Neuer Ordner"**

### Ordner-Formular

#### Titel (Pflichtfeld)

Der Name des Ordners.

**Empfehlungen:**
- Kurz und prägnant
- Beschreibt den Inhalt
- Keine Sonderzeichen

**Beispiele:**
- Qualitätsmanagement
- Arbeitsanweisungen
- Formulare
- Projekte

#### Beschreibung (Optional)

Erklärung, welche Dokumente in diesen Ordner gehören.

#### Übergeordneter Ordner

Bestimmt die Position in der Hierarchie.

- Leer lassen für Wurzelordner
- Ordner auswählen für Unterordner

#### Organisationseinheiten

Weist den Ordner einer oder mehreren Abteilungen zu.

- Ermöglicht Filterung nach Abteilung
- Kann Berechtigungen beeinflussen

---

## Ordner-Berechtigungen

### Verantwortliche Funktion

Die Hauptverantwortliche für den Ordner und seine Inhalte.

- Hat volle Bearbeitungsrechte
- Kann Dokumente freigeben
- Wird bei Problemen kontaktiert

### Prüfende Funktion

Funktion, die Dokumente in diesem Ordner prüfen soll.

- Wird automatisch bei "Zur Prüfung" benachrichtigt
- Gilt für alle Dokumente ohne eigene Prüfende Funktion

### Freigebende Funktion

Funktion, die Dokumente in diesem Ordner freigeben kann.

- Wird automatisch bei "Zur Freigabe" benachrichtigt
- Gilt für alle Dokumente ohne eigene Freigebende Funktion

### Administratoren

Benutzer oder Gruppen mit vollen Verwaltungsrechten.

- Können Ordner bearbeiten und löschen
- Können alle Dokumente verwalten
- Können Unterordner erstellen

### Berechtigungen vererben

Standardmässig werden Berechtigungen an Unterordner vererbt.

**Option: "Berechtigungen vom übergeordneten Ordner erben"**

- ✅ Aktiviert: Verwendet Berechtigungen des Parent-Ordners
- ❌ Deaktiviert: Eigene Berechtigungen definieren

> **💡 Tipp:** Nutze Vererbung für konsistente Berechtigungen und definiere nur Ausnahmen explizit.

---

## Ordnerstruktur planen

### Strukturierungsansätze

#### 1. Nach Dokumentart

```
DMS/
├── Arbeitsanweisungen/
├── Verfahrensanweisungen/
├── Formulare/
├── Checklisten/
├── Richtlinien/
└── Protokolle/
```

**Vorteile:** Klar, einfach, gängig in QM-Systemen

#### 2. Nach Abteilung/Bereich

```
DMS/
├── Qualitätsmanagement/
├── Produktion/
├── Vertrieb/
├── Personal/
├── IT/
└── Finanzen/
```

**Vorteile:** Entspricht Organisationsstruktur, klare Verantwortlichkeiten

#### 3. Nach Prozess

```
DMS/
├── Führungsprozesse/
│   ├── Strategische Planung/
│   └── Management Review/
├── Kernprozesse/
│   ├── Auftragsabwicklung/
│   └── Produktion/
└── Unterstützungsprozesse/
    ├── Personal/
    └── IT/
```

**Vorteile:** Prozessorientiert, ideal für ISO 9001

#### 4. Hybrid-Ansatz (Empfohlen)

```
DMS/
├── Qualitätsmanagement/
│   ├── Arbeitsanweisungen/
│   ├── Verfahrensanweisungen/
│   └── Formulare/
├── Produktion/
│   ├── Arbeitsanweisungen/
│   └── Checklisten/
└── Personal/
    ├── Richtlinien/
    └── Formulare/
```

**Vorteile:** Kombiniert Bereich und Dokumentart, flexibel

---

## Navigation

### Breadcrumb-Navigation

Zeigt deinen aktuellen Pfad in der Ordnerhierarchie:

```
DMS > Qualitätsmanagement > Arbeitsanweisungen > Produktion
```

- Klicke auf einen Teil, um dorthin zu navigieren
- Schneller Sprung zu übergeordneten Ordnern

### Ordnerbaum (Seitenleiste)

Die linke Seitenleiste zeigt die komplette Ordnerstruktur:

- Klicke auf `▶` um Unterordner aufzuklappen
- Klicke auf den Ordnernamen zum Öffnen
- Aktiver Ordner ist hervorgehoben

---

## Favoriten

### Was sind Favoriten?

Favoriten ermöglichen schnellen Zugriff auf häufig genutzte Dokumente und Ordner.

### Favorit hinzufügen

**Methode 1: Über das Stern-Icon**
1. Öffne ein Dokument oder Ordner
2. Klicke auf das Stern-Icon ⭐ in der Titelzeile
3. Der Eintrag wird zu deinen Favoriten hinzugefügt

**Methode 2: Über das Kontextmenü**
1. Rechtsklick auf Dokument/Ordner in der Liste
2. Wähle "Zu Favoriten hinzufügen"

### Favoriten anzeigen

**DMS → Favoriten**

Hier siehst du alle deine favorisierten Dokumente und Ordner.

### Favorit entfernen

1. Gehe zu deinen Favoriten
2. Klicke auf das gefüllte Stern-Icon ⭐
3. Der Favorit wird entfernt

> **💡 Tipp:** Favoriten sind persönlich - jeder Benutzer hat seine eigenen.

---

## Zuletzt geöffnete Dokumente

### Zugriff

**DMS → Zuletzt geöffnet** oder **Dashboard → Letzte Dokumente**

### Funktionen

- Zeigt die letzten 20 geöffneten Dokumente
- Sortiert nach Zugriffszeit (neueste zuerst)
- Schneller Wiedereinstieg in die Arbeit

> **💡 Tipp:** Nutze diese Ansicht, um schnell zu kürzlich bearbeiteten Dokumenten zurückzukehren.

---

## Dokumente verschieben

### Einzelnes Dokument verschieben

1. Öffne das Dokument
2. Klicke auf **"Bearbeiten"**
3. Ändere das Feld **"Ordner"**
4. Speichere

### Mehrere Dokumente verschieben

1. Wähle mehrere Dokumente in der Liste (Checkbox)
2. Klicke auf **"Aktionen" → "Verschieben"**
3. Wähle den Zielordner
4. Bestätige

> **⚠️ Wichtig:** Beim Verschieben können sich Berechtigungen ändern, wenn der Zielordner andere Einstellungen hat.

---

## Ordner verwalten

### Ordner bearbeiten

1. Navigiere zum Ordner
2. Klicke auf das Zahnrad-Icon ⚙️ oder **"Ordner bearbeiten"**
3. Ändere Titel, Beschreibung oder Berechtigungen
4. Speichere

### Ordner löschen

1. Der Ordner muss leer sein (keine Dokumente, keine Unterordner)
2. Klicke auf **"Ordner löschen"**
3. Bestätige die Löschung

> **⚠️ Wichtig:** Ordner mit Inhalt können nicht gelöscht werden. Verschiebe oder lösche zuerst alle Inhalte.

### Ordner archivieren

Alternativ zum Löschen kannst du Ordner archivieren:

1. Klicke auf **"Archivieren"**
2. Der Ordner und alle Inhalte werden ausgeblendet
3. Archivierte Ordner können wiederhergestellt werden

---

## BPMN-Verknüpfung

### Was ist BPMN?

BPMN (Business Process Model and Notation) ist ein Standard zur Darstellung von Geschäftsprozessen. ELIZA unterstützt die Verknüpfung von Ordnern mit BPMN-Elementen.

### Ordner mit Prozess verknüpfen

1. Bearbeite den Ordner
2. Trage im Feld **"BPMN-ID"** die ID des Prozess-Elements ein
3. Speichere

**Effekt:**
- Im Prozessdiagramm wird der Ordner als Verknüpfung angezeigt
- Klick auf das Element öffnet den Ordner
- Dokumentation wird direkt im Prozesskontext verfügbar

---

## Best Practices

### ✅ Flache Hierarchie

Vermeide zu tiefe Verschachtelung:

```
❌ Schlecht (zu tief):
DMS/QM/Dokumente/Anleitungen/Produktion/Maschinen/Drehmaschine/...

✅ Gut (flach):
DMS/QM-Arbeitsanweisungen/Produktion-Drehmaschine/
```

**Empfehlung:** Maximal 3-4 Ebenen Tiefe

### ✅ Konsistente Benennung

Etabliere einheitliche Namenskonventionen:

| Ebene | Beispiel |
|-------|----------|
| 1. Ebene | Bereich (QM, HR, IT) |
| 2. Ebene | Dokumentart (AA, VA, F) |
| 3. Ebene | Thema (Produktion, Einkauf) |

### ✅ Verantwortlichkeiten definieren

- Jeder Hauptordner sollte einen Verantwortlichen haben
- Nutze Funktionen statt einzelne Benutzer
- Dokumentiere, wer für was zuständig ist

### ✅ Regelmässige Aufräumarbeiten

- Prüfe quartalsweise die Ordnerstruktur
- Archiviere nicht mehr benötigte Ordner
- Konsolidiere doppelte Strukturen

---

## Häufige Fehler vermeiden

### ❌ Fehler: Zu viele Wurzelordner

**Problem:** 50+ Ordner auf oberster Ebene

**Lösung:** Gruppiere in Hauptkategorien (max. 10-15 Wurzelordner)

### ❌ Fehler: Inkonsistente Struktur

**Problem:** Jede Abteilung hat eigene Logik

**Lösung:** Definiere unternehmensweite Standards

### ❌ Fehler: Dokumente im Wurzelverzeichnis

**Problem:** Dokumente ohne Ordner sind schwer zu finden

**Lösung:** Erstelle immer einen passenden Ordner

### ❌ Fehler: Fehlende Berechtigungen

**Problem:** Niemand kann den Ordner verwalten

**Lösung:** Setze immer mindestens eine verantwortliche Funktion

---

## Nächste Schritte

- **[Kapitel 4: Workflow]({{< ref "04-workflow-status" >}})**: Verstehe den Freigabe-Workflow
- **[Kapitel 7: Berechtigungen]({{< ref "07-berechtigungen" >}})**: Detailliertes Berechtigungskonzept
- **[Kapitel 8: Suche]({{< ref "08-suche-filter" >}})**: Dokumente schnell finden

---

## Zusammenfassung

✅ Du kannst Ordner erstellen und verwalten
✅ Du kennst verschiedene Strukturierungsansätze
✅ Du navigierst effizient durch die Ordnerstruktur
✅ Du nutzt Favoriten für schnellen Zugriff
✅ Du verstehst Berechtigungsvererbung
✅ Du vermeidest häufige Fehler bei der Ordnerstruktur
