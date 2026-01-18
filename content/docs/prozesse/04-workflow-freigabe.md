---
title: "Workflow und Freigabe"
description: ""
weight: "4"
tags:
  - "workflow"
  - "freigabe"
  - "prüfung"
  - "status"
  - "arbeitskopie"
---


# Workflow und Freigabe

Dieses Kapitel erklärt den Freigabe-Workflow für Prozesse: von der Erstellung über Prüfung und Freigabe bis zur Archivierung.

## Status-Workflow verstehen

### Übersicht der Status

Jeder Prozess durchläuft einen definierten Lebenszyklus:

<pre>
┌─────────┐     ┌────────────┐     ┌──────────┐     ┌────────────┐
│ Entwurf │────▶│ Zur Prüfung│────▶│ Geprüft  │────▶│ Freigegeben│
└─────────┘     └────────────┘     └──────────┘     └────────────┘
     ▲               │                  │                 │
     │               │                  │                 ▼
     │               ▼                  ▼           ┌───────────┐
     │          Ablehnen            Ablehnen       │ Abgelaufen │
     │               │                  │          └───────────┘
     └───────────────┴──────────────────┘                │
                                                         ▼
                                                   ┌───────────┐
                                                   │ Archiviert│
                                                   └───────────┘
</pre>

### Status-Beschreibungen

| Status | Bedeutung | Nächste Aktionen |
|--------|-----------|------------------|
| **Entwurf** | Prozess wird bearbeitet | Zur Prüfung einreichen |
| **Zur Prüfung** | Wartet auf Prüfung | Prüfen, Ablehnen |
| **Geprüft** | Erfolgreich geprüft | Freigeben, Ablehnen |
| **Freigegeben** | Offiziell gültig | Arbeitskopie erstellen, Archivieren |
| **Abgelaufen** | Überprüfung überfällig | Erneut freigeben, Bearbeiten |
| **Archiviert** | Nicht mehr aktiv | Reaktivieren |

---

## Workflow-Schritte

### 1. Entwurf erstellen

Jeder neue Prozess beginnt als Entwurf:

1. Erstelle einen neuen Prozess oder eine Arbeitskopie
2. Bearbeite Titel, Beschreibung, Prozessschritte
3. Der Status ist **"Entwurf"**

> **💡 Tipp:** Im Entwurf kannst du beliebig viele Änderungen vornehmen.

### 2. Zur Prüfung einreichen

Wenn der Prozess fertig ist:

1. Öffne den Prozess
2. Klicke auf **"Zur Prüfung einreichen"**
3. Optional: Füge einen Kommentar hinzu
4. Bestätige die Aktion

**Voraussetzungen:**
- Du benötigst Änderungsrechte am Prozess
- Der Prozess muss im Status "Entwurf" sein

### 3. Prozess prüfen

Als Prüfer:

1. Öffne die **Workflow-Übersicht** (Prozesse → Workflow)
2. Wähle einen Prozess mit Status "Zur Prüfung"
3. Überprüfe den Inhalt
4. Wähle eine Aktion:

| Aktion | Beschreibung | Neuer Status |
|--------|--------------|--------------|
| **Geprüft** | Prozess ist korrekt | Geprüft |
| **Ablehnen** | Änderungen erforderlich | Entwurf |

> **⚠️ Wichtig:** Bei Ablehnung erhält der Ersteller eine Benachrichtigung und kann nachbessern.

### 4. Prozess freigeben

Als Freigeber:

1. Öffne einen Prozess mit Status "Geprüft"
2. Klicke auf **"Freigeben"**
3. Optional: Füge einen Kommentar hinzu
4. Bestätige die Freigabe

**Auswirkungen der Freigabe:**
- Prozess erhält Status "Freigegeben"
- Freigabedatum wird gesetzt
- Bei Arbeitskopien: Original wird aktualisiert
- Nächstes Überprüfungsdatum wird berechnet

---

## Arbeitskopien

### Konzept

Wenn du einen freigegebenen Prozess ändern möchtest, erstellst du eine **Arbeitskopie**:

- Das Original bleibt freigegeben und verfügbar
- Alle Änderungen erfolgen in der Arbeitskopie
- Nach Freigabe ersetzt die Arbeitskopie das Original

### Arbeitskopie erstellen

1. Öffne einen freigegebenen Prozess
2. Klicke auf **"Arbeitskopie erstellen"**
3. Die Arbeitskopie wird automatisch geöffnet

**Was wird kopiert:**
- Alle Grunddaten (Titel, Beschreibung, etc.)
- Alle Prozessschritte
- Verknüpfte Dokumente und Hilfsmittel
- RACI-Zuordnungen

### Arbeitskopie bearbeiten

Die Arbeitskopie funktioniert wie ein normaler Prozess im Entwurf:

1. Bearbeite die gewünschten Inhalte
2. Füge neue Prozessschritte hinzu oder entferne welche
3. Aktualisiere Verknüpfungen

> **💡 Tipp:** In der Prozessliste sind Arbeitskopien mit "(Arbeitskopie von...)" gekennzeichnet.

### Arbeitskopie freigeben

1. Reiche die Arbeitskopie zur Prüfung ein
2. Nach Prüfung und Freigabe:
   - Die Arbeitskopie wird gelöscht
   - Das Original wird mit den Änderungen aktualisiert
   - Das Original behält seinen freigegebenen Status

---

## Periodische Überprüfung

### Periodizität einstellen

Prozesse können automatisch zur Überprüfung fällig werden:

1. Öffne den Prozess zum Bearbeiten
2. Wähle eine **"Periodizität"** (z.B. jährlich, halbjährlich)
3. Speichere die Änderungen

**Verfügbare Periodizitäten:**
- Monatlich
- Vierteljährlich
- Halbjährlich
- Jährlich
- Nach Bedarf (keine automatische Fälligkeit)

### Abgelaufene Prozesse

Wenn die Überprüfungsfrist abläuft:

1. Der Prozess erhält den Status **"Abgelaufen"**
2. Er erscheint in der **Workflow-Übersicht**
3. Verantwortliche werden benachrichtigt

### Abgelaufenen Prozess behandeln

**Option 1: Erneut freigeben (ohne Änderungen)**

1. Öffne den abgelaufenen Prozess
2. Klicke auf **"Erneut freigeben"**
3. Das Überprüfungsdatum wird neu berechnet

**Option 2: Überarbeiten**

1. Erstelle eine Arbeitskopie
2. Führe notwendige Aktualisierungen durch
3. Reiche zur Prüfung und Freigabe ein

---

## Prozesse archivieren

### Wann archivieren?

- Prozess wird nicht mehr benötigt
- Prozess wurde durch neuen ersetzt
- Organisation hat sich geändert

### Archivierung durchführen

1. Öffne den Prozess
2. Klicke auf **"Archivieren"**
3. Bestätige die Aktion

**Auswirkungen:**
- Status wird "Archiviert"
- Prozess ist nicht mehr in der normalen Liste sichtbar
- Prozess kann bei Bedarf reaktiviert werden

### Archivierte Prozesse anzeigen

**Prozesse → Archivierte Prozesse**

Hier siehst du alle archivierten Prozesse und kannst sie bei Bedarf reaktivieren.

### Prozess reaktivieren

1. Öffne den archivierten Prozess
2. Klicke auf **"Reaktivieren"**
3. Der Prozess erhält wieder den Status "Entwurf"

---

## Workflow-Kommentare

### Kommentare hinzufügen

Bei jedem Workflow-Schritt kannst du Kommentare hinzufügen:

1. Führe eine Workflow-Aktion aus (z.B. "Zur Prüfung")
2. Im Dialog: Füge einen Kommentar hinzu
3. Der Kommentar wird in der Historie gespeichert

### Kommentar-Historie

Die Historie aller Workflow-Aktionen findest du:

1. Öffne den Prozess
2. Wechsle zum Tab **"Historie"** oder **"Aktivitäten"**
3. Sieh alle Statusänderungen mit Kommentaren

---

## Berechtigungen für Workflow

### Wer kann was?

| Aktion | Berechtigung |
|--------|--------------|
| Zur Prüfung einreichen | Prozessverantwortung, Team, Admin |
| Prüfen | Prüfer-Funktion oder Admin |
| Freigeben | Freigeber-Funktion oder Admin |
| Arbeitskopie erstellen | Prozessverantwortung oder Admin |
| Archivieren | Admin oder change_prozesse |
| Reaktivieren | Admin |

### Prüfer und Freigeber festlegen

Die Funktionen für Prüfung und Freigabe werden am Prozess definiert:

1. Öffne den Prozess zum Bearbeiten
2. Setze **"Prüfer-Funktion"** und **"Freigeber-Funktion"**
3. Mitglieder dieser Funktionen können entsprechend handeln

---

## Workflow-Übersicht nutzen

### Aufgaben finden

**Prozesse → Workflow**

Die Workflow-Übersicht zeigt dir:

| Tab | Inhalt |
|-----|--------|
| **Zur Prüfung** | Prozesse, die auf deine Prüfung warten |
| **Zur Freigabe** | Prozesse, die auf deine Freigabe warten |
| **Meine Entwürfe** | Deine Prozesse im Entwurf-Status |
| **Abgelaufen** | Prozesse mit überfälliger Überprüfung |

### Effizient arbeiten

> **💡 Tipp:** Nutze die Workflow-Übersicht als tägliche Checkliste für anstehende Aufgaben.

---

## Benachrichtigungen

### Automatische Benachrichtigungen

Das System sendet Benachrichtigungen bei:

- Prozess zur Prüfung eingereicht
- Prozess abgelehnt
- Prozess freigegeben
- Prozess abgelaufen
- Arbeitskopie erstellt

### E-Mail-Vorlagen

Administratoren können E-Mail-Vorlagen anpassen:

**Prozesse → Einstellungen → E-Mail-Vorlagen**

---

## Best Practices

### ✅ Empfehlungen

- **Regelmässige Überprüfung**: Setze realistische Periodizitäten
- **Kommentare nutzen**: Dokumentiere Änderungsgründe
- **Arbeitskopien**: Freigegebene Prozesse nicht direkt ändern
- **Workflow-Übersicht**: Täglich prüfen für anstehende Aufgaben

### ❌ Häufige Fehler

- **Überspringen der Prüfung**: Prozesse sollten immer geprüft werden
- **Zu lange Entwürfe**: Prozesse nicht ewig im Entwurf lassen
- **Ignorieren abgelaufener Prozesse**: Führt zu veralteter Dokumentation
- **Fehlende Prüfer/Freigeber**: Workflow blockiert wenn niemand zuständig

---

## FAQ

### Was passiert mit verknüpften Dokumenten bei Freigabe einer Arbeitskopie?

Die Verknüpfungen werden auf das Original übertragen. Stelle sicher, dass alle verknüpften Dokumente aktuell sind.

### Kann ich einen freigegebenen Prozess direkt bearbeiten?

Nein, du musst zuerst eine Arbeitskopie erstellen. Dies stellt sicher, dass das Original während der Überarbeitung verfügbar bleibt.

### Was bedeutet "Erneut freigeben"?

Bei abgelaufenen Prozessen kannst du ohne Änderungen neu freigeben. Das Überprüfungsdatum wird dann neu berechnet.

---

## Nächste Schritte

- **[Kapitel 5: Hilfsmittel]({{< ref "05-hilfsmittel" >}})**: Ressourcen für Prozesse verwalten
- **[Kapitel 6: Integration]({{< ref "06-integration" >}})**: Verknüpfung mit anderen Modulen

---

## Zusammenfassung

✅ Du verstehst den Status-Workflow
✅ Du kannst Prozesse zur Prüfung und Freigabe einreichen
✅ Du weisst, wie Arbeitskopien funktionieren
✅ Du verstehst die periodische Überprüfung
✅ Du kannst die Workflow-Übersicht effektiv nutzen
