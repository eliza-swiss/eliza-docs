---
title: "Berechtigungskonzept"
description: ""
weight: "4"
tags:
  - "berechtigungen"
  - "rollen"
  - "sichtbarkeit"
  - "klassifikation"
  - "sicherheit"
---


# Berechtigungskonzept

In diesem Kapitel lernst du das mehrstufige Berechtigungssystem des Meldungen-Moduls kennen. Das System kombiniert globale Systemgruppen mit lokalen Rollen und Sichtbarkeitsstufen.

## Übersicht

Das Berechtigungssystem basiert auf drei Ebenen:

<pre>
┌─────────────────────────────────────────────────────────────────────┐
│                    Berechtigungsebenen                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. SYSTEMGRUPPEN (Basis-Berechtigungen)                            │
│     └── issue_users, issue_admin                                    │
│         ↓                                                           │
│  2. LOKALE ROLLEN (Meldekreis-spezifisch)                           │
│     └── Admins, Team, Beteiligte Orgunits                           │
│         ↓                                                           │
│  3. KLASSIFIKATION (Meldungs-spezifisch)                            │
│     └── Öffentlich, Vertraulich, Geheim                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
</pre>

## 1. Systemgruppen

Systemgruppen werden von ELIZA-Administratoren zugewiesen und bestimmen die Basis-Berechtigungen für das Meldungen-Modul.

### issue_users

**Beschreibung:** Standard-Benutzer für das Meldungen-Modul

**Berechtigungen:**

| Berechtigung | Beschreibung |
|--------------|-------------|
| `view_genericissue` | Meldungen anzeigen |
| `add_issue` | Neue Meldungen erstellen |
| `view_tracker` | Meldekreise anzeigen |

**Kann:**

- Eigene Meldungen erstellen
- Meldekreise mit Sichtbarkeit "normal" sehen
- Eigene Meldungen verfolgen und kommentieren

**Kann nicht:**

- Fremde Meldungen bearbeiten
- Meldekreise verwalten
- Meldungen löschen

### issue_admin

**Beschreibung:** Administrator für das Meldungen-Modul

**Berechtigungen:**

| Berechtigung | Beschreibung |
|--------------|-------------|
| `view_genericissue` | Meldungen anzeigen |
| `add_issue` | Neue Meldungen erstellen |
| `change_issue` | Meldungen bearbeiten |
| `delete_issue` | Meldungen löschen |
| `view_issue` | Alle Meldungen anzeigen |
| `add_issuecategory` | Labels erstellen |
| `change_issuecategory` | Labels bearbeiten |
| `delete_issuecategory` | Labels löschen |
| `view_issuecategory` | Labels anzeigen |
| `add_tracker` | Meldekreise erstellen |
| `change_tracker` | Meldekreise bearbeiten |
| `delete_tracker` | Meldekreise löschen |
| `view_tracker` | Meldekreise anzeigen |

**Kann:**

- Alle Funktionen von issue_users
- Meldekreise erstellen, bearbeiten, löschen
- Alle Meldungen in "normalen" Meldekreisen bearbeiten
- Labels verwalten
- Einstellungen konfigurieren

## 2. Lokale Rollen (Meldekreis-spezifisch)

Jeder Meldekreis hat eigene Rollen, die die Systemgruppen ergänzen oder überschreiben.

### Meldekreis-Admins

**Definition:** Benutzer, die im Feld "Admins" eines Meldekreises eingetragen sind

**Rechte:**

- Voller Zugriff auf den Meldekreis
- Können alle Meldungen sehen und bearbeiten
- Können den Meldekreis konfigurieren
- Sehen auch "geheime" Meldungen
- Können als Zuständige zugewiesen werden
- Erhalten Benachrichtigungen bei neuen Meldungen

> **💡 Tipp:** Admin-Rechte auf Meldekreis-Ebene sind unabhängig von den Systemgruppen. Ein Benutzer mit nur `issue_users` kann trotzdem Admin eines bestimmten Meldekreises sein.

### Team-Mitglieder

**Definition:** Benutzer, die im Feld "Team" eines Meldekreises eingetragen sind

**Rechte:**

- Können alle Meldungen im Meldekreis sehen (ausser "geheime")
- Können Meldungen bearbeiten
- Können Kommentare hinzufügen
- Können als Zuständige zugewiesen werden
- Sehen interne Kommentare

### Beteiligte Organisationseinheiten

**Definition:** Organisationseinheiten, die dem Meldekreis zugeordnet sind

**Rechte (abhängig von Einstellung):**

| Einstellung | Rechte |
|-------------|--------|
| **"Können Übersicht sehen"** aktiviert | Können alle sichtbaren Meldungen einsehen |
| **"Können Übersicht sehen"** deaktiviert | Können nur neue Meldungen erstellen |

**Hinweis:** Benutzer müssen einer Gruppe zugeordnet sein, die zur Organisationseinheit gehört.

## 3. Sichtbarkeit (Meldekreis-Ebene)

Die Sichtbarkeit eines Meldekreises bestimmt, wer ihn grundsätzlich sehen kann.

### Normal

**Beschreibung:** Standard-Sichtbarkeit

**Wer sieht den Meldekreis?**

- Alle Benutzer mit `view_tracker`-Berechtigung

**Wer kann Meldungen erstellen?**

- Alle Benutzer mit `add_issue`-Berechtigung

**Wer kann Meldungen bearbeiten?**

- Admins und Team des Meldekreises
- Benutzer mit `delete_issue`-Berechtigung (für normale Meldungen)

### Geschützt

**Beschreibung:** Eingeschränkte Sichtbarkeit

**Wer sieht den Meldekreis?**

- Admins und Team des Meldekreises
- Benutzer mit `delete_tracker`-Berechtigung
- Benutzer aus beteiligten Organisationseinheiten (wenn "Können Übersicht sehen" aktiviert)

**Wer kann Meldungen erstellen?**

- Admins und Team des Meldekreises
- Benutzer aus beteiligten Organisationseinheiten
- Alle Benutzer (wenn "Alle können Meldungen erstellen" aktiviert)

### Vertraulich

**Beschreibung:** Höchste Einschränkung auf Meldekreis-Ebene

**Wer sieht den Meldekreis?**

- Nur Admins und Team des Meldekreises

**Wer kann Meldungen erstellen?**

- Nur Admins und Team des Meldekreises
- Benutzer aus beteiligten Organisationseinheiten

> **⚠️ Wichtig:** Bei vertraulichen Meldekreisen muss mindestens ein Admin zugewiesen sein! Die Sichtbarkeit kann danach nicht mehr auf "normal" oder "geschützt" geändert werden.

## 4. Klassifikation (Meldungs-Ebene)

Jede Meldung hat eine eigene Klassifikation, die die Sichtbarkeit innerhalb des Meldekreises steuert.

### Öffentlich

**Symbol:** 🟢

**Wer sieht die Meldung?**

- Alle Benutzer, die den Meldekreis sehen können
- Nach Statusänderung zu "akzeptiert" oder höher: Auch allgemeine Benutzer mit `view_issue`

**Einschränkung:** Nur bei Meldekreisen mit Sichtbarkeit "normal" verfügbar.

### Vertraulich

**Symbol:** 🟡

**Wer sieht die Meldung?**

- Admins des Meldekreises
- Team-Mitglieder des Meldekreises
- Beitragende (contributors) der Meldung

**Besonderheiten:**

- Ersteller sieht seine eigene Meldung
- Beitragende werden automatisch hinzugefügt, wenn sie kommentieren

### Geheim

**Symbol:** 🔴

**Wer sieht die Meldung?**

- Nur Admins des Meldekreises
- Beitragende, die explizit hinzugefügt wurden

**Besonderheiten:**

- Ersteller sieht seine eigene Meldung NICHT mehr
- Ersteller wird NICHT als Beitragender hinzugefügt
- Team-Mitglieder sehen die Meldung NICHT

> **⚠️ Wichtig:** Geheime Meldungen sind für sensible Inhalte gedacht, bei denen auch der Ersteller keinen Zugriff haben soll (z.B. Whistleblowing).

## Berechtigungsmatrix

### Meldekreis sehen

| Benutzertyp | Normal | Geschützt | Vertraulich |
|-------------|--------|-----------|-------------|
| issue_users | ✅ | ❌ | ❌ |
| issue_admin | ✅ | ✅ | ❌ |
| Meldekreis-Admin | ✅ | ✅ | ✅ |
| Team-Mitglied | ✅ | ✅ | ✅ |
| Beteiligte Orgunit | ✅ | ✅* | ❌ |

*Nur wenn "Können Übersicht sehen" aktiviert

### Meldung erstellen

| Benutzertyp | Normal | Geschützt | Vertraulich |
|-------------|--------|-----------|-------------|
| issue_users | ✅ | ❌** | ❌ |
| issue_admin | ✅ | ❌** | ❌ |
| Meldekreis-Admin | ✅ | ✅ | ✅ |
| Team-Mitglied | ✅ | ✅ | ✅ |
| Beteiligte Orgunit | ✅ | ✅ | ✅ |

**Mit "Alle können Meldungen erstellen" aktiviert: ✅

### Meldung bearbeiten

| Benutzertyp | Öffentlich | Vertraulich | Geheim |
|-------------|------------|-------------|--------|
| issue_users | ❌ | ❌ | ❌ |
| issue_admin | ✅* | ❌ | ❌ |
| Meldekreis-Admin | ✅ | ✅ | ✅ |
| Team-Mitglied | ✅ | ✅ | ❌ |
| Ersteller | ❌ | ❌ | ❌ |
| Beitragender | ❌ | ❌ | ❌ |

*Nur bei normaler Meldekreis-Sichtbarkeit

### Meldung sehen (nach Status)

#### Status: Neu oder In Prüfung

| Benutzertyp | Öffentlich | Vertraulich | Geheim |
|-------------|------------|-------------|--------|
| issue_users | ❌ | ❌ | ❌ |
| issue_admin (normal) | ✅ | ❌ | ❌ |
| Meldekreis-Admin | ✅ | ✅ | ✅ |
| Team-Mitglied | ✅ | ✅ | ❌ |
| Ersteller | ✅ | ✅ | ❌ |
| Beitragender | ✅ | ✅ | ✅ |

#### Status: Akzeptiert oder höher

| Benutzertyp | Öffentlich | Vertraulich | Geheim |
|-------------|------------|-------------|--------|
| issue_users | ✅ | ❌ | ❌ |
| issue_admin | ✅ | ❌ | ❌ |
| Meldekreis-Admin | ✅ | ✅ | ✅ |
| Team-Mitglied | ✅ | ✅ | ❌ |
| Ersteller | ✅ | ✅ | ❌ |
| Beitragender | ✅ | ✅ | ✅ |

## Beitragende (Contributors)

Beitragende sind Benutzer, die aktiv an einer Meldung mitgearbeitet haben.

### Automatisches Hinzufügen

Benutzer werden automatisch als Beitragende hinzugefügt, wenn sie:

- Die Meldung erstellen (ausser bei geheimen Meldungen)
- Einen Kommentar hinzufügen
- Als zuständige Person zugewiesen werden

### Rechte von Beitragenden

- Können die Meldung immer sehen (auch bei vertraulicher Klassifikation)
- Erhalten Benachrichtigungen bei Änderungen
- Bei geheimen Meldungen: Nur wenn explizit hinzugefügt

## Praktische Szenarien

### Szenario 1: Internes Verbesserungsvorschläge

**Anforderung:** Alle Mitarbeiter können Vorschläge einreichen, alle können genehmigte sehen.

**Konfiguration:**

- Meldekreis-Sichtbarkeit: **Normal**
- Initiale Klassifikation: **Öffentlich**
- Admins: Qualitätsmanagement-Team
- Team: Abteilungsleiter

### Szenario 2: Kundenreklamationen

**Anforderung:** Nur Service-Team sieht Reklamationen, Kunden können melden.

**Konfiguration:**

- Meldekreis-Sichtbarkeit: **Geschützt**
- Öffentliches Formular: **Aktiviert**
- Externe Beitragende: **Aktiviert**
- Admins: Service-Leitung
- Team: Service-Mitarbeiter

### Szenario 3: Whistleblowing-Kanal

**Anforderung:** Anonyme Meldungen, nur Compliance-Beauftragte sehen Meldungen.

**Konfiguration:**

- Meldekreis-Sichtbarkeit: **Vertraulich**
- Anonyme Meldungen: **Aktiviert**
- Initiale Klassifikation: **Geheim**
- Admins: Compliance-Beauftragte (nur diese!)
- Team: Leer lassen

### Szenario 4: Abteilungs-Support

**Anforderung:** IT-Support für bestimmte Abteilungen, andere sollen nicht sehen.

**Konfiguration:**

- Meldekreis-Sichtbarkeit: **Geschützt**
- Beteiligte Orgunits: Betroffene Abteilungen
- "Können Übersicht sehen": **Deaktiviert**
- Admins: IT-Leitung
- Team: IT-Support-Mitarbeiter

## Best Practices

### ✅ Empfehlungen

- **Mindestens 2 Admins** für jeden Meldekreis (Vertretungsregelung)
- **Sichtbarkeit bewusst wählen** - nicht alles muss "normal" sein
- **Geheime Klassifikation sparsam nutzen** - nur wenn wirklich nötig
- **Regelmässig Berechtigungen prüfen** - insbesondere bei Personalwechsel
- **Dokumentation der Zugriffskonzepte** für Audits

### ❌ Fehler vermeiden

- Vertrauliche Meldekreise ohne Admin
- Zu viele Admins (verwässert Verantwortung)
- Geheime Klassifikation für normale Meldungen
- Beteiligte Orgunits ohne klaren Nutzen

## Zusammenfassung

Das Berechtigungssystem des Meldungen-Moduls ist hierarchisch aufgebaut:

1. **Systemgruppen** definieren die Basis-Berechtigungen
2. **Lokale Rollen** (Admins, Team) erweitern Rechte auf Meldekreis-Ebene
3. **Sichtbarkeit** des Meldekreises bestimmt den Grundzugang
4. **Klassifikation** der Meldung steuert die Fein-Sichtbarkeit

## Nächste Schritte

- Erfahre [Tipps und Tricks]({{< ref "05-tipps-tricks" >}}) für effizientes Arbeiten
- Zurück zur [Übersicht]({{< ref "_index" >}})
