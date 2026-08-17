---
title: "Dokumenten-Workflow und Status"
description: ""
weight: "4"
tags:
  - "workflow"
  - "status"
  - "freigabe"
  - "prüfung"
  - "genehmigung"
  - "arbeitskopie"
---


# Dokumenten-Workflow und Status

Dieses Kapitel erklärt den Dokumenten-Lebenszyklus in ELIZA - von der Erstellung über die Prüfung bis zur Freigabe und darüber hinaus.

## Der Dokumenten-Lebenszyklus

### Status-Übersicht

Jedes Dokument in ELIZA durchläuft einen definierten Lebenszyklus mit folgenden Status:

```
                    ┌──────────────┐
                    │   Entwurf    │ ← Neues Dokument startet hier
                    └──────┬───────┘
                           │ zur Prüfung einreichen
                           ▼
                    ┌──────────────┐
                    │ Zur Prüfung  │
                    └──────┬───────┘
                           │ prüfen / ablehnen
                    ┌──────┴───────┐
                    ▼              ▼
             ┌──────────────┐ ┌──────────────┐
             │   Geprüft    │ │   Entwurf    │ (zurück)
             └──────┬───────┘ └──────────────┘
                    │ freigeben / ablehnen
                    ▼
             ┌──────────────┐
             │  Freigegeben │ ← Dokument ist aktiv
             └──────┬───────┘
                    │ überprüfung fällig / archivieren
             ┌──────┴───────┐
             ▼              ▼
      ┌──────────────┐ ┌──────────────┐
      │  Abgelaufen  │ │  Archiviert  │
      └──────────────┘ └──────────────┘
```

### Status im Detail

| Status | Farbe | Bedeutung | Aktionen möglich |
|--------|-------|-----------|------------------|
| **Entwurf** | 🔵 Blau | Dokument wird bearbeitet | Bearbeiten, Löschen, Zur Prüfung einreichen |
| **Zur Prüfung** | 🟡 Gelb | Wartet auf Prüfung | Prüfen, Ablehnen, Abbrechen |
| **Geprüft** | 🟠 Orange | Geprüft, wartet auf Freigabe | Freigeben, Ablehnen, Zurück zu Entwurf |
| **Freigegeben** | 🟢 Grün | Aktiv und gültig | Arbeitskopie erstellen, Archivieren |
| **Abgelaufen** | 🔴 Rot | Überprüfung überfällig | Überprüfen, Archivieren, Reaktivieren |
| **Archiviert** | ⚫ Grau | Nicht mehr aktiv | Reaktivieren |

---

## Workflow-Schritte

### 1. Entwurf erstellen

Jedes neue Dokument startet im Status **"Entwurf"**.

**Was du tun kannst:**
- Dokument bearbeiten (Titel, Beschreibung, Datei)
- Metadaten ergänzen
- Datei austauschen
- Dokument löschen

**Wer kann das:**
- Ersteller des Dokuments
- Benutzer mit `change_document` Berechtigung
- Ordner-Administratoren

### 2. Zur Prüfung einreichen

Wenn das Dokument fertig ist, reichst du es zur Prüfung ein.

**Zugriff:**
1. Öffne das Dokument
2. Klicke auf **"Zur Prüfung einreichen"** (oder **"Review"**)
3. Optional: Füge einen Kommentar hinzu
4. Bestätige

**Was passiert:**
- Status wechselt zu "Zur Prüfung"
- Prüfer werden benachrichtigt
- Dokument kann nicht mehr bearbeitet werden (ausser durch Prüfer)

> **💡 Tipp:** Prüfe vor dem Einreichen, ob alle Metadaten vollständig sind.

### 3. Dokument prüfen

Benutzer mit der Rolle **Prüfer** können das Dokument prüfen.

**Optionen für Prüfer:**

| Aktion | Beschreibung | Neuer Status |
|--------|--------------|--------------|
| **Genehmigen** | Prüfung bestanden | Geprüft |
| **Ablehnen** | Zurück zur Überarbeitung | Entwurf |
| **Kommentieren** | Feedback ohne Statusänderung | Zur Prüfung |

**Ablauf:**
1. Öffne das Dokument aus der Workflow-Übersicht
2. Prüfe Inhalt und Metadaten
3. Wähle **"Prüfung genehmigen"** oder **"Ablehnen"**
4. Füge einen Kommentar hinzu (Pflicht bei Ablehnung)

### 4. Dokument freigeben

Nach erfolgreicher Prüfung kann ein **Freigeber** das Dokument freigeben.

**Optionen für Freigeber:**

| Aktion | Beschreibung | Neuer Status |
|--------|--------------|--------------|
| **Freigeben** | Dokument wird aktiv | Freigegeben |
| **Ablehnen** | Zurück zur Überarbeitung | Entwurf |

**Was bei Freigabe passiert:**

- Status wechselt zu "Freigegeben"
- Freigabedatum wird gesetzt
- Neue Version wird erstellt
- Revisionsnummer wird erhöht (falls automatische Vergabe aktiviert)
- Nächstes Überprüfungsdatum wird berechnet (falls Periodizität gesetzt)
- Dokument ist für alle berechtigten Benutzer verfügbar

> **💡 Tipp:** Mit aktivierter automatischer Revisionsnummer wird die Nummer bei jeder Freigabe hochgezählt (1, 2, 3...). Siehe [Kapitel 6: Versionierung]({{< ref "06-versionierung" >}}) für Details.

### 5. Dokument archivieren

Nicht mehr benötigte Dokumente können archiviert werden.

**Zugriff:**
1. Öffne das freigegebene Dokument
2. Klicke auf **"Archivieren"**
3. Bestätige

**Effekt:**
- Dokument erscheint nicht mehr in normalen Listen
- Kann über Filter "Archiviert" angezeigt werden
- Kann reaktiviert werden

---

## Arbeitskopien

### Was sind Arbeitskopien?

Wenn du ein **freigegebenes** Dokument ändern möchtest, erstellst du eine Arbeitskopie:

- Das Original bleibt freigegeben und verfügbar
- Änderungen erfolgen in der Arbeitskopie
- Nach Freigabe ersetzt die Arbeitskopie das Original

### Arbeitskopie erstellen

**Zugriff:**
1. Öffne das freigegebene Dokument
2. Klicke auf **"Arbeitskopie erstellen"**
3. Die Arbeitskopie wird erstellt und geöffnet

**Eigenschaften der Arbeitskopie:**
- Kennzeichnung "(Arbeitskopie)" im Titel
- Status "Entwurf"
- Verknüpfung zum Original-Dokument
- Eigene Versionierung

### Arbeitskopie bearbeiten

Bearbeite die Arbeitskopie wie ein normales Dokument:

1. Lade eine neue Datei hoch
2. Aktualisiere Metadaten
3. Reiche zur Prüfung ein
4. Durchlaufe den normalen Workflow

### Arbeitskopie freigeben

Bei Freigabe der Arbeitskopie:

1. Das Original-Dokument wird archiviert
2. Die Arbeitskopie wird zum neuen Hauptdokument
3. Versionsnummer wird erhöht
4. Historie bleibt erhalten

> **⚠️ Wichtig:** Während eine Arbeitskopie existiert, kann keine zweite erstellt werden.

---

## Workflow-Übersicht

### Zugriff

**DMS → Workflow**

Die Workflow-Übersicht zeigt alle Dokumente, die auf Aktion warten.

### Ansichten

| Tab | Zeigt |
|-----|-------|
| **Meine Aufgaben** | Dokumente, die du bearbeiten musst |
| **Zur Prüfung** | Dokumente, die auf Prüfung warten |
| **Zur Freigabe** | Dokumente, die auf Freigabe warten |
| **Meine Entwürfe** | Deine Dokumente im Entwurf-Status |

### Filter

- Nach Ordner
- Nach Dokumentart
- Nach Datum
- Nach Ersteller

---

## Abgelaufene Dokumente

### Was sind abgelaufene Dokumente?

Dokumente mit überfälligem Überprüfungsdatum werden als **"Abgelaufen"** markiert.

**Wann wird ein Dokument abgelaufen:**
- "Datum der nächsten Überprüfung" liegt in der Vergangenheit
- "Gültig bis" Datum wurde überschritten

### Abgelaufene Dokumente finden

**DMS → Workflow → Abgelaufene Dokumente**

oder

**DMS → Filter → Status: Abgelaufen**

### Abgelaufene Dokumente behandeln

| Aktion | Beschreibung |
|--------|--------------|
| **Überprüfen & Bestätigen** | Dokument bleibt gültig, neues Überprüfungsdatum setzen |
| **Arbeitskopie erstellen** | Dokument aktualisieren und neu freigeben |
| **Archivieren** | Dokument wird nicht mehr benötigt |

---

## Berechtigungen im Workflow

### Wer kann was?

| Berechtigung | Beschreibung | Typische Rolle |
|--------------|--------------|----------------|
| `add_document` | Dokumente erstellen | Autor |
| `change_document` | Dokumente bearbeiten | Autor |
| `delete_document` | Dokumente löschen | Administrator |
| `review_document` | Dokumente prüfen | Prüfer |
| `approve_document` | Dokumente freigeben | Freigeber |

### Funktionsbasierte Berechtigungen

Zusätzlich zu den globalen Berechtigungen können Funktionen definiert werden:

- **Prüfende Funktion**: Kann das spezifische Dokument prüfen
- **Freigebende Funktion**: Kann das spezifische Dokument freigeben
- **Verantwortliche Funktion**: Hat volle Bearbeitungsrechte

> **💡 Tipp:** Funktionen werden auf Dokument- oder Ordner-Ebene definiert und vererbt.

---

## Benachrichtigungen

### Automatische Benachrichtigungen bei Workflow-Ereignissen

ELIZA sendet automatisch Benachrichtigungen bei Workflow-Ereignissen:

| Ereignis | Empfänger |
|----------|-----------|
| Zur Prüfung eingereicht | Prüfer |
| Geprüft | Freigeber, Ersteller |
| Freigegeben | Ersteller, Verantwortliche |
| Abgelehnt | Ersteller |

### Automatische Benachrichtigungen für Überprüfungstermine

ELIZA führt regelmässig automatische Prüfungen durch und benachrichtigt relevante Benutzer über anstehende oder überfällige Überprüfungen.

#### Tägliche Benachrichtigungen (Daily)

Die tägliche Prüfung läuft automatisch und führt folgende Aktionen durch:

| Aktion | Bedingung | Empfänger |
|--------|-----------|-----------|
| **Status auf "Abgelaufen" setzen** | `Gültig bis` < heute | Dokument-Autor/in + Verantwortliche Funktion |
| **Vorwarnung "Dokument läuft in 30 Tagen ab"** | `Gültig bis` = heute + 30 Tage | Dokument-Autor/in + Verantwortliche Funktion |
| **Vorwarnung "Dokument läuft in 7 Tagen ab"** | `Gültig bis` = heute + 7 Tage | Dokument-Autor/in + Verantwortliche Funktion |

**Empfänger** sind die Autor:in des Dokuments sowie alle Mitglieder der verantwortlichen Funktion (direkt am Dokument oder über den Ordner vererbt). Mitwirkende und Ordner-Administratoren erhalten diese Benachrichtigungen nicht.

> **💡 Hinweis:** Sobald das "Gültig bis"-Datum überschritten ist, wird das Dokument automatisch auf den Status "Abgelaufen" gesetzt. Damit du genug Zeit für die Verlängerung hast, wirst du bereits 30 und 7 Tage vor dem Ablaufdatum vorgewarnt.

#### Wöchentliche Benachrichtigungen (Weekly)

Die wöchentliche Prüfung sendet Erinnerungen für überfällige Termine:

**Benachrichtigungen für "Nächste Überprüfung" (next_review):**

| Zeitraum | Benachrichtigung | Empfänger |
|----------|------------------|-----------|
| In den nächsten 7 Tagen | "Dokument muss bald überprüft werden" | Dokument-Autor + Verantwortliche Funktion |
| Bereits überfällig | "Überprüfung des Dokuments überfällig" | Dokument-Autor + Verantwortliche Funktion |

**Wichtig:** Bei Dokumenten mit einer **verantwortlichen Funktion** werden zusätzlich zum Autor auch alle Mitglieder der Funktions-Gruppe benachrichtigt. Der Autor wird dabei nicht doppelt benachrichtigt.

### Unterschied: "Gültig bis" vs. "Nächste Überprüfung"

| Feld | Bedeutung | Automatische Aktion |
|------|-----------|---------------------|
| **Gültig bis** | Ablaufdatum des Dokuments | Status wird auf "Abgelaufen" gesetzt |
| **Nächste Überprüfung** | Datum für inhaltliche Prüfung | Nur Benachrichtigung, kein Statuswechsel |

> **💡 Tipp:** Bei Dokumenten mit **Periodizität** wird nach jeder Freigabe das "Nächste Überprüfungsdatum" automatisch berechnet. Das "Gültig bis"-Datum wird dabei auf das gleiche Datum gesetzt.

### Übersicht: Dokumente zur Überprüfung

Du findest Dokumente mit anstehender Überprüfung unter:

**DMS → Workflow → Nächste Überprüfung**

Diese Übersicht zeigt alle freigegebenen Dokumente, deren Überprüfungsdatum in den **nächsten 30 Tagen** liegt.

**Wer sieht welche Dokumente:**

| Rolle | Sichtbare Dokumente |
|-------|---------------------|
| **Dokument-Autor** | Alle eigenen Dokumente |
| **Verantwortliche Funktion** | Dokumente mit der eigenen Funktion als Verantwortliche |

> **⚠️ Wichtig:** Du siehst nur Dokumente, für die du als Autor eingetragen bist oder bei denen du Mitglied der verantwortlichen Funktion bist.

### Menüpunkt "Fristen"

Der Menüpunkt **"Fristen"** im DMS bietet eine zentrale Übersicht über alle Dokumente mit Handlungsbedarf bezüglich Gültigkeit und Überprüfung.

**Zugriff:**

**DMS → Fristen**

Der Fristen-Bereich zeigt einen Badge mit der Anzahl relevanter Dokumente an.

#### Ansichten im Fristen-Bereich

| Ansicht | URL | Beschreibung |
|---------|-----|--------------|
| **Abgelaufene Dokumente** | `/dms/documents/expired/` | Dokumente mit überschrittenem "Gültig bis"-Datum |
| **Überfällige Überprüfungen** | `/dms/documents/expired_review/` | Dokumente mit überschrittenem Überprüfungsdatum |
| **Anstehende Überprüfungen** | `/dms/documents/next_review/` | Dokumente mit Überprüfung in den nächsten 30 Tagen |

#### Berechtigungen pro Ansicht

**Abgelaufene Dokumente (`valid_to` < heute):**

| Rolle | Sichtbarkeit |
|-------|--------------|
| **DMS Administrator** | Alle abgelaufenen Dokumente |
| **Ordner-Administrator** | Abgelaufene Dokumente im eigenen Ordner |
| **Verantwortliche Funktion** | Dokumente mit der eigenen Funktion |

**Überfällige Überprüfungen (`next_review` < heute):**

| Rolle | Sichtbarkeit |
|-------|--------------|
| **Benutzer mit Änderungsrecht** | Dokumente, für die man `change_permission` hat |

**Anstehende Überprüfungen (nächste 30 Tage):**

| Rolle | Sichtbarkeit |
|-------|--------------|
| **Dokument-Autor** | Eigene Dokumente |
| **Verantwortliche Funktion** | Dokumente mit der eigenen Funktion |

#### Aktionen bei abgelaufenen Dokumenten

Wenn ein Dokument in der Fristen-Übersicht erscheint, hast du folgende Optionen:

| Aktion | Beschreibung |
|--------|--------------|
| **Arbeitskopie erstellen** | Dokument überarbeiten und neu freigeben |
| **Überprüfen & Bestätigen** | Dokument bleibt gültig, neues Überprüfungsdatum setzen |
| **Archivieren** | Dokument wird nicht mehr benötigt |

> **💡 Tipp:** Prüfe regelmässig den Fristen-Bereich, um keine wichtigen Überprüfungstermine zu verpassen. Der Badge in der Navigation zeigt dir auf einen Blick, ob Handlungsbedarf besteht.

### Benachrichtigungskanäle

- **In-App Benachrichtigung**: Glocken-Icon im Header
- **E-Mail**: Falls in den Einstellungen aktiviert
- **Dashboard-Widget**: Überfällige Aufgaben

### Benachrichtigungseinstellungen

Du kannst deine Benachrichtigungseinstellungen anpassen unter:

**Profil → Einstellungen → Benachrichtigungen**

| Einstellung | Beschreibung |
|-------------|--------------|
| **Digest aktivieren** | Tägliche/wöchentliche Zusammenfassung erhalten |
| **E-Mail-Benachrichtigungen** | Benachrichtigungen auch per E-Mail |

---

## Workflow abbrechen

### Zurück zu Entwurf

Du kannst ein Dokument jederzeit zurück in den Entwurf-Status setzen (sofern berechtigt):

1. Öffne das Dokument
2. Klicke auf **"Zurück zu Entwurf"**
3. Begründe die Aktion
4. Bestätige

**Wann sinnvoll:**
- Wichtige Änderungen erforderlich
- Falsches Dokument eingereicht
- Prozess-Fehler korrigieren

> **⚠️ Wichtig:** Alle Workflow-Kommentare bleiben erhalten.

---

## Best Practices

### ✅ Vor dem Einreichen prüfen

- [ ] Titel ist korrekt und aussagekräftig
- [ ] Beschreibung ist aktuell
- [ ] Datei ist die finale Version
- [ ] Dokumentart ist gesetzt
- [ ] Verantwortliche Funktionen sind definiert
- [ ] Überprüfungsdatum ist gesetzt (für gelenkte Dokumente)

### ✅ Als Prüfer

- Prüfe Inhalt auf Korrektheit und Vollständigkeit
- Prüfe Formatierung und Lesbarkeit
- Hinterlasse konstruktive Kommentare
- Lehne frühzeitig ab, wenn grössere Änderungen nötig sind

### ✅ Als Freigeber

- Prüfe, ob alle vorherigen Schritte korrekt durchlaufen wurden
- Verifiziere, dass alle Anforderungen erfüllt sind
- Dokumentiere die Freigabe mit Kommentar

### ✅ Regelmässige Workflow-Pflege

- Prüfe wöchentlich die Workflow-Übersicht
- Bearbeite Aufgaben zeitnah
- Eskaliere blockierte Dokumente

---

## Häufige Fehler vermeiden

### ❌ Fehler: Dokument ohne Prüfer einreichen

**Problem:** Niemand ist für die Prüfung zuständig

**Lösung:** Definiere Prüfende Funktion auf Dokument- oder Ordner-Ebene

### ❌ Fehler: Abgelaufene Dokumente ignorieren

**Problem:** Dokumente bleiben im Status "Abgelaufen"

**Lösung:** Regelmässige Überprüfung, Überprüfungszyklus anpassen

### ❌ Fehler: Arbeitskopien vergessen

**Problem:** Arbeitskopie wurde erstellt, aber nie fertiggestellt

**Lösung:** Regelmässig eigene Entwürfe prüfen, nicht benötigte löschen

---

## Nächste Schritte

- **[Kapitel 5: Vorlagen]({{< ref "05-vorlagen" >}})**: Dokumentvorlagen erstellen
- **[Kapitel 6: Versionierung]({{< ref "06-versionierung" >}})**: Änderungen nachverfolgen
- **[Kapitel 7: Berechtigungen]({{< ref "07-berechtigungen" >}})**: Detailliertes Berechtigungskonzept

---

## Zusammenfassung

✅ Du verstehst den Dokumenten-Lebenszyklus
✅ Du kennst alle Status und deren Bedeutung
✅ Du kannst Dokumente durch den Workflow führen
✅ Du weisst, wie Arbeitskopien funktionieren
✅ Du nutzt die Workflow-Übersicht effektiv
✅ Du vermeidest häufige Workflow-Fehler
