---
title: "Benutzertypen-Referenz"
description: ""
weight: "6"
tags:
  - "user-types"
  - "permissions"
  - "reference"
  - "automatic-assignment"
---


# Benutzertypen-Referenz

Diese Referenz erklärt die **automatische Berechnung** der Benutzertypen durch das ELIZA-System.

## 🎯 Über dieses Kapitel

Dieses Kapitel ist eine **technische Referenz** für die automatische Benutzertyp-Zuweisung. Hier erfährst du:

- Wie ELIZA Benutzertypen automatisch bestimmt
- Welche Berechtigungen zu welchem Typ führen
- Welche Objektverantwortlichkeiten berücksichtigt werden
- Die genaue Berechnungslogik

> **💡 Tipp:** Für eine benutzerfreundliche Erklärung siehe [Kapitel 2: Benutzer verwalten]({{< ref "02-benutzer-verwalten#benutzertypen-zuweisen" >}}).

## Benutzertypen-Übersicht

ELIZA kennt **4 Benutzertypen**, die automatisch basierend auf Berechtigungen berechnet werden:

| Typ | Badge | Code-Wert | Berechnung |
|-----|-------|-----------|------------|
| **Aktiver Benutzer** | Grün | `active` | Hat erweiterte Berechtigungen oder Objektverantwortlichkeiten |
| **Lesebenutzer** | Hellblau | `reader` | Hat nur Lese-Berechtigungen, keine Spaces |
| **Lesebenutzer und Spaces** | Orange | `reader_and_spaces` | Hat Lese-Berechtigungen + Space-Berechtigungen |
| **Berater:in** | Lila | `consultant` | Manuell gesetzter Benutzertyp (überschreibt automatische Berechnung) |

## Automatische Berechnung

### Berechnungs-Ablauf

ELIZA berechnet den Benutzertyp in folgenden Schritten:

```
1. Ist user_type manuell auf "consultant" gesetzt?
   └─ JA → Typ: Berater:in (keine weitere Prüfung)
   └─ NEIN → Weiter zu Schritt 2

2. Sammle alle Berechtigungen des Benutzers
   - System-Berechtigungen
   - Gruppen-Berechtigungen
   - Objekt-spezifische Berechtigungen

3. Prüfe auf Space-Berechtigungen
   └─ Hat Space-Berechtigungen? → Markiere "read_only_with_spaces"

4. Prüfe auf erweiterte Berechtigungen
   └─ Hat Berechtigungen außer Lese-Permissions? → Markiere "active"

5. Wenn noch "read_only": Prüfe Objektverantwortlichkeiten
   - DMS-Ordner Admin?
   - Dokument-Autor?
   - Prozess-Admin?
   - Tracker-Admin/Teammitglied?
   - Massnahmen-Controller?
   └─ Hat Verantwortlichkeiten? → Markiere "active"

6. Finale Typ-Bestimmung:
   - read_only=true + spaces=true → "reader_and_spaces"
   - read_only=true + spaces=false → "reader"
   - read_only=false → "active"
```

### Berechnungs-Tabelle

| Bedingung | Space-Berechtigung | Erweiterte Berechtigung | Objektverantwortung | → Benutzertyp |
|-----------|-------------------|------------------------|---------------------|---------------|
| Manuell "consultant" gesetzt | - | - | - | **Berater:in** |
| Nur Lese-Permissions | ❌ Nein | ❌ Nein | ❌ Nein | **Lesebenutzer** |
| Nur Lese-Permissions | ✅ Ja | ❌ Nein | ❌ Nein | **Lesebenutzer und Spaces** |
| Erweiterte Permissions | egal | ✅ Ja | - | **Aktiver Benutzer** |
| Nur Lese-Permissions | egal | ❌ Nein | ✅ Ja | **Aktiver Benutzer** |

## Lese-Berechtigungen (Read-Only)

### Standard Lese-Berechtigungen

Diese Berechtigungen gelten als **Lese-Berechtigungen** und führen NICHT zu "Aktiver Benutzer":

| Berechtigung | Modul | Beschreibung |
|--------------|-------|--------------|
| `streams.view_stream` | News & Events | Streams ansehen |
| `streams.add_comment` | News & Events | Kommentare hinzufügen |
| `streams.change_comment` | News & Events | Eigene Kommentare bearbeiten |
| `streams.view_message` | News & Events | Nachrichten ansehen |
| `streams.view_comment` | News & Events | Kommentare ansehen |
| `streams.add_like` | News & Events | Likes hinzufügen |
| `streams.delete_like` | News & Events | Eigene Likes entfernen |
| `streams.view_like` | News & Events | Likes ansehen |
| `streams.delete_comment` | News & Events | Eigene Kommentare löschen |
| `streams.change_like` | News & Events | Eigene Likes ändern |
| `issues.add_issue` | Q-Meldungen | Q-Meldungen erstellen |
| `issues.view_cir` | CIRS | CIRS-Meldungen ansehen |
| `issues.add_cir` | CIRS | CIRS-Meldungen erstellen |
| `*.view_*` | Alle | Alle view-Berechtigungen |

> **💡 Hinweis:** Alle Berechtigungen, die mit `view_` beginnen, gelten automatisch als Lese-Berechtigungen.

## Space-Berechtigungen

Diese Berechtigungen markieren einen Benutzer als "mit Spaces":

| Berechtigung | Beschreibung |
|--------------|--------------|
| `teams.view_space` | Spaces ansehen |
| `teams.add_space` | Neue Spaces erstellen |
| `teams.change_space` | Spaces bearbeiten |
| `teams.delete_space` | Spaces löschen |

> **💡 Regel:** Ein Benutzer mit Space-Berechtigungen + nur Lese-Berechtigungen = "Lesebenutzer und Spaces"

## Erweiterte Berechtigungen

**Erweiterte Berechtigungen** sind alle Berechtigungen, die:

- NICHT in der Liste der Lese-Berechtigungen sind
- NICHT mit `view_` beginnen
- NICHT Space-Berechtigungen sind

**Beispiele für erweiterte Berechtigungen:**

| Berechtigung | Führt zu "Aktiver Benutzer" | Grund |
|--------------|-------------------------------|-------|
| `dms.add_document` | ✅ Ja | Dokumente erstellen (über Standard hinaus) |
| `dms.change_document` | ✅ Ja | Dokumente bearbeiten |
| `dms.delete_document` | ✅ Ja | Dokumente löschen |
| `projects.add_project` | ✅ Ja | Projekte erstellen |
| `crm.change_contact` | ✅ Ja | Kontakte bearbeiten |
| `prozesse.view_draft_process` | ✅ Ja | Prozess-Entwürfe ansehen (spezielle Berechtigung) |
| `organisation.change_mitarbeitende` | ✅ Ja | Mitarbeitende bearbeiten |

## Objektverantwortlichkeiten

Selbst wenn ein Benutzer nur Lese-Berechtigungen hat, wird er zu einem **Aktiven Benutzer**, wenn er Verantwortlichkeiten für bestimmte Objekte hat:

### DMS-Verantwortlichkeiten

| Verantwortlichkeit | Prüfung | Badge-Grund |
|--------------------|---------|-------------|
| **DMS-Ordner Admin** | Ist in `DocumentFolder.admins` | "Ist Admin von DMS-Ordnern" |
| **Dokument-Autor** | Hat Dokumente als `Document.autor` erstellt | "Ist Autor von Dokumenten" |

### Prozess-Verantwortlichkeiten

| Verantwortlichkeit | Prüfung | Badge-Grund |
|--------------------|---------|-------------|
| **Prozess-Admin** | Ist in `Prozesse.admins` | "Ist Admin von Prozessen" |
| **Prozessverantwortung** | Ist in `Prozesse.prozessverantwortung` | "Hat Prozessverantwortung" |

### Q-Meldungen-Verantwortlichkeiten

| Verantwortlichkeit | Prüfung | Badge-Grund |
|--------------------|---------|-------------|
| **Tracker-Admin** | Ist in `Tracker.admins` | "Ist Admin von Trackern" |
| **Tracker-Team** | Ist in `Tracker.team` | "Ist Teammitglied in Trackern" |

### IKS-Verantwortlichkeiten

| Verantwortlichkeit | Prüfung | Badge-Grund |
|--------------------|---------|-------------|
| **Massnahmen-Controller (direkt)** | Ist `Massnahmen.controller_user` | "Ist kontrollierender Benutzer bei Massnahmen" |
| **Massnahmen-Controller (Funktion)** | Ist über Funktion `Massnahmen.controller_function` | "Ist in kontrollierender Funktion bei Massnahmen" |

## Spezialfälle

### Spezialfall 1: Prozess-Entwürfe

Die Berechtigung `prozesse.view_draft_process` ist eine **Ausnahme** und führt zu "Aktiver Benutzer", obwohl es eine `view_` Berechtigung ist.

**Grund:** Entwürfe ansehen zu können ist eine erweiterte Berechtigung, die über normale Lese-Rechte hinausgeht.

### Spezialfall 2: Berater:in (manuell gesetzt)

Wenn `user.user_type = "consultant"` **manuell** gesetzt wurde, überschreibt dies die automatische Berechnung vollständig.

**Verwendung:** Für externe Berater, Auditoren, die spezielle Berechtigungen benötigen, die nicht in die Standard-Kategorien passen.

### Spezialfall 3: Kombinierte Verantwortlichkeiten

Ein Benutzer kann mehrere Verantwortlichkeiten haben. Alle werden in der Erklärung aufgelistet:

**Beispiel:**
```
Aktiver Benutzer - Ist Admin von DMS-Ordnern; Ist Autor von Dokumenten; Ist Admin von Prozessen
```

## Berechnungs-Beispiele

### Beispiel 1: Reiner Lesebenutzer

**Benutzer:** Maria Schmidt

**Gruppen:**
- DMS Dokumente (Lesen)
- Prozesse (Lesen)
- Organisation (Lesen)

**Berechtigungen:**
- `dms.view_document`
- `prozesse.view_prozess`
- `organisation.view_mitarbeitende`

**Objektverantwortlichkeiten:** Keine

**→ Berechnung:**
- Space-Berechtigung? ❌ Nein
- Erweiterte Berechtigung? ❌ Nein (nur `view_`)
- Objektverantwortlichkeiten? ❌ Nein

**→ Ergebnis:** **Lesebenutzer** (reader)

---

### Beispiel 2: Lesebenutzer mit Spaces

**Benutzer:** Thomas Weber

**Gruppen:**
- DMS Dokumente (Lesen)
- Spaces (Teilnehmen und Hinzufügen)

**Berechtigungen:**
- `dms.view_document`
- `teams.view_space`
- `teams.add_space`

**Objektverantwortlichkeiten:** Keine

**→ Berechnung:**
- Space-Berechtigung? ✅ Ja (`teams.add_space`)
- Erweiterte Berechtigung? ❌ Nein
- Objektverantwortlichkeiten? ❌ Nein

**→ Ergebnis:** **Lesebenutzer und Spaces** (reader_and_spaces)

---

### Beispiel 3: Aktiver Benutzer durch Gruppe

**Benutzer:** Anna Müller

**Gruppen:**
- DMS Dokumente (Admin)
- Projekte (Lesen und Hinzufügen)

**Berechtigungen:**
- `dms.view_document`
- `dms.add_document`
- `dms.change_document`
- `dms.delete_document`
- `projects.view_project`
- `projects.add_task`

**Objektverantwortlichkeiten:** Keine

**→ Berechnung:**
- Space-Berechtigung? ❌ Nein
- Erweiterte Berechtigung? ✅ Ja (`dms.add_document`, `dms.change_document`, `dms.delete_document`)
- Objektverantwortlichkeiten? ❌ Nein

**→ Ergebnis:** **Aktiver Benutzer** (active)
**Grund:** "Hat erweiterte Berechtigungen: DMS Dokumente bearbeiten"

---

### Beispiel 4: Aktiver Benutzer durch Objektverantwortung

**Benutzer:** Peter Meier

**Gruppen:**
- DMS Dokumente (Lesen)
- Prozesse (Lesen)

**Berechtigungen:**
- `dms.view_document`
- `prozesse.view_prozess`

**Objektverantwortlichkeiten:**
- Admin von DMS-Ordner "Marketing"
- Autor von 15 Dokumenten

**→ Berechnung:**
- Space-Berechtigung? ❌ Nein
- Erweiterte Berechtigung? ❌ Nein
- Objektverantwortlichkeiten? ✅ Ja (DMS-Ordner Admin, Dokument-Autor)

**→ Ergebnis:** **Aktiver Benutzer** (active)
**Grund:** "Ist Admin von DMS-Ordnern; Ist Autor von Dokumenten"

---

### Beispiel 5: Berater:in (manuell)

**Benutzer:** Dr. Martin Keller

**user_type manuell gesetzt:** `consultant`

**Gruppen:**
- Prozesse (Lesen)
- DMS Dokumente (Lesen)

**Berechtigungen:**
- `prozesse.view_prozess`
- `dms.view_document`

**→ Berechnung:**
- Manueller Typ "consultant"? ✅ Ja
- → Keine weitere Prüfung!

**→ Ergebnis:** **Berater:in** (consultant)
**Grund:** "Manuell gesetzter Benutzertyp"

## Häufige Fragen (FAQ)

### Warum ist mein Benutzer "Lesebenutzer", obwohl er Admin-Gruppen hat?

Prüfe folgendes:

1. Hat der Benutzer wirklich Admin-Gruppen zugewiesen? (nicht nur angeschaut)
2. Wurden die Änderungen gespeichert?
3. Wurde der Benutzertyp nach der Änderung aktualisiert? (sollte automatisch passieren)

### Kann ich den Benutzertyp manuell überschreiben?

Ja, aber nur für den Typ **"Berater:in"**:

1. Öffne die Benutzer-Detailseite (als Superuser)
2. Setze `user_type = "consultant"` im Admin-Interface
3. Speichern

**⚠️ Achtung:** Dies überschreibt die automatische Berechnung permanent!

### Wie kann ich sehen, warum ein Benutzer einen bestimmten Typ hat?

In der Benutzerliste wird bei "Aktiven Benutzern" der Grund angezeigt:

- "Hat erweiterte Berechtigungen: [Berechtigung]"
- "Ist Admin von DMS-Ordnern"
- "Ist Autor von Dokumenten"
- "Hat Prozessverantwortung"
- etc.

### Was passiert, wenn ein Benutzer keine Gruppen hat?

Ein Benutzer ohne Gruppen hat:

- Keine Berechtigungen
- Typ: **Lesebenutzer** (reader)
- Kann sich anmelden, aber nichts sehen/tun

**→ Lösung:** Weise mindestens eine Lese-Gruppe zu (z.B. "DMS Dokumente (Lesen)")

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Wie ELIZA Benutzertypen automatisch berechnet
- ✅ Welche Berechtigungen zu welchem Typ führen
- ✅ Die Rolle von Objektverantwortlichkeiten
- ✅ Spezialfälle und Ausnahmen

## Nächste Schritte

**Zurück zur Übersicht:**
- [Kapitel 2: Benutzer verwalten]({{< ref "02-benutzer-verwalten" >}}) - Praktische Anwendung
- [Kapitel 5: Systemgruppen-Referenz]({{< ref "05-systemgruppen-referenz" >}}) - Liste aller Gruppen

**Praktische Anwendung:**
- Teste die Berechnung mit Test-Benutzern
- Verstehe, warum bestimmte Benutzer bestimmte Typen haben
- Optimiere Gruppen-Zuweisungen für korrekte Typen

---

**← Zurück zu: [Systemgruppen-Referenz]({{< ref "05-systemgruppen-referenz" >}}) | Zurück zum [Inhaltsverzeichnis]({{< ref "_index" >}})**
