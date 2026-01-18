---
title: "Hilfsmittel"
description: ""
weight: "5"
tags:
  - "hilfsmittel"
  - "ressourcen"
  - "werkzeuge"
  - "hilfsmittelarten"
---


# Hilfsmittel

Hilfsmittel sind Ressourcen und Werkzeuge, die für die Durchführung von Prozessen benötigt werden. Dieses Kapitel zeigt dir, wie du Hilfsmittel erstellst und mit Prozessen verknüpfst.

## Was sind Hilfsmittel?

Hilfsmittel beschreiben alles, was für einen Prozess oder Prozessschritt benötigt wird:

- **Software und Tools**: ERP-System, CRM, Produktionssoftware
- **Geräte und Maschinen**: Drucker, Scanner, Messgeräte
- **Physische Ressourcen**: Formulare, Arbeitsplätze, Räume
- **Systeme**: IT-Infrastruktur, Netzwerk, Datenbanken

### Unterschied zu Dokumenten

| Hilfsmittel | Dokumente |
|-------------|-----------|
| Werkzeuge und Ressourcen | Informationen und Anleitungen |
| Werden verwendet | Werden gelesen |
| Beispiel: SAP-System | Beispiel: Arbeitsanweisung für SAP |

---

## Hilfsmittelarten verwalten

### Hilfsmittelarten verstehen

Hilfsmittel werden in Kategorien (Hilfsmittelarten) organisiert:

**Typische Hilfsmittelarten:**
- Software
- Hardware
- Maschinen
- Formulare
- IT-Systeme
- Arbeitsplätze

### Hilfsmittelart erstellen

**Prozesse → Hilfsmittelarten → + Neu**

1. Navigiere zu **Prozesse → Hilfsmittelarten**
2. Klicke auf **"+ Neu"**
3. Fülle das Formular aus:

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| **Titel** | Ja | Name der Kategorie |
| **Beschreibung** | Nein | Erläuterung zur Kategorie |

4. Klicke auf **"Speichern"**

> **💡 Tipp:** Definiere Hilfsmittelarten vor dem Erstellen einzelner Hilfsmittel.

---

## Hilfsmittel erstellen

### Schritt-für-Schritt Anleitung

**Prozesse → Hilfsmittel → + Neu**

1. Navigiere zu **Prozesse → Hilfsmittel**
2. Klicke auf **"+ Neu"**
3. Fülle das Formular aus:

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| **Nummer** | Nein | Eindeutige Identifikationsnummer |
| **Titel** | Ja | Name des Hilfsmittels |
| **Beschreibung** | Nein | Detaillierte Beschreibung |
| **Art** | Nein | Kategorie (Hilfsmittelart) |

4. Klicke auf **"Speichern"**

### Erweiterte Felder

Nach dem Erstellen kannst du weitere Details hinzufügen:

| Feld | Beschreibung |
|------|--------------|
| **Standort** | Wo befindet sich das Hilfsmittel? |
| **Verantwortliche** | Wer ist für das Hilfsmittel zuständig? |
| **Verknüpfte Dokumente** | Handbücher, Anleitungen |
| **URL** | Link zu externen Ressourcen |

---

## Hilfsmittel mit Prozessen verknüpfen

### Auf Prozess-Ebene

Ein Hilfsmittel kann direkt mit einem Prozess verknüpft werden:

1. Öffne den Prozess zum Bearbeiten
2. Wechsle zum Tab **"Hilfsmittel"**
3. Klicke auf **"Hilfsmittel hinzufügen"**
4. Wähle die gewünschten Hilfsmittel
5. Speichere

### Auf Prozessschritt-Ebene

Für detailliertere Zuordnung, verknüpfe Hilfsmittel mit einzelnen Prozessschritten:

1. Öffne einen Prozessschritt zum Bearbeiten
2. Im Feld **"Hilfsmittel"** wähle die benötigten Ressourcen
3. Speichere

> **💡 Tipp:** Verknüpfe Hilfsmittel möglichst auf Prozessschritt-Ebene für bessere Nachvollziehbarkeit.

---

## Hilfsmittel suchen und filtern

### Übersicht

**Prozesse → Hilfsmittel**

Die Hilfsmittelliste zeigt:
- Nummer und Titel
- Art (Kategorie)
- Verknüpfte Prozesse

### Filter

| Filter | Beschreibung |
|--------|--------------|
| **Art** | Nach Hilfsmittelart filtern |
| **Suche** | Nach Nummer oder Titel suchen |

---

## Hilfsmittel bearbeiten

### Änderungen vornehmen

1. Öffne das Hilfsmittel
2. Klicke auf **"Bearbeiten"**
3. Ändere die gewünschten Felder
4. Klicke auf **"Speichern"**

### Was passiert bei Änderungen?

- Änderungen sind sofort sichtbar
- Alle verknüpften Prozesse sehen die Änderungen
- Keine separate Freigabe erforderlich

---

## Hilfsmittel löschen

### Voraussetzungen

- Du benötigst die Berechtigung `delete_hilfsmittel`
- Das Hilfsmittel sollte nicht mehr mit aktiven Prozessen verknüpft sein

### Vorgehen

1. Öffne das Hilfsmittel
2. Klicke auf **"Löschen"**
3. Bestätige die Löschung

> **⚠️ Wichtig:** Verknüpfungen zu Prozessen werden beim Löschen entfernt.

---

## Best Practices

### ✅ Empfehlungen

- **Konsistente Namensgebung**: Verwende einheitliche Bezeichnungen
- **Kategorisieren**: Nutze Hilfsmittelarten für Übersichtlichkeit
- **Beschreibungen**: Dokumentiere Zweck und Verwendung
- **Aktualität**: Halte die Hilfsmittelliste aktuell

### ❌ Häufige Fehler

- **Doppelte Einträge**: Führt zu Verwirrung
- **Fehlende Kategorien**: Erschwert das Finden
- **Verwaiste Hilfsmittel**: Nicht verknüpfte Einträge aufräumen

### Beispiele für gute Hilfsmittel-Einträge

| Titel | Art | Beschreibung |
|-------|-----|--------------|
| SAP Business One | Software | ERP-System für Auftragsabwicklung und Buchhaltung |
| Laserdrucker Büro 1 | Hardware | Farb-Laserdrucker für Dokumente und Berichte |
| Waage W-500 | Messgerät | Präzisionswaage für Qualitätsprüfung (max. 500kg) |

---

## FAQ

### Braucht jeder Prozess Hilfsmittel?

Nein, Hilfsmittel sind optional. Aber für komplexe Prozesse ist die Dokumentation von Ressourcen hilfreich.

### Was ist der Unterschied zwischen Hilfsmittel und Hilfsdokument?

Hilfsmittel = Werkzeuge und Ressourcen (z.B. Software)
Hilfsdokumente = Anleitungen und Informationen aus dem DMS (z.B. Arbeitsanweisung)

### Kann ich externe Links als Hilfsmittel hinterlegen?

Ja, nutze das URL-Feld um Links zu Webapplikationen oder externen Ressourcen zu speichern.

---

## Nächste Schritte

- **[Kapitel 6: Integration]({{< ref "06-integration" >}})**: Verknüpfung mit anderen Modulen
- **[Kapitel 7: Best Practices]({{< ref "07-best-practices" >}})**: Tipps für effektives Prozessmanagement

---

## Zusammenfassung

✅ Du verstehst, was Hilfsmittel sind
✅ Du kannst Hilfsmittelarten definieren
✅ Du kannst Hilfsmittel erstellen und verwalten
✅ Du weisst, wie du Hilfsmittel mit Prozessen verknüpfst
✅ Du kennst Best Practices für Hilfsmittel
