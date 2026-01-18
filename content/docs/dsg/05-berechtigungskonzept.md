---
title: "Berechtigungskonzept"
description: ""
weight: "5"
tags:
  - "permissions"
  - "security"
  - "admin"
  - "dsg"
---


# Berechtigungskonzept

In diesem Kapitel lernst du, wie das Berechtigungssystem im Datenschutz-Modul (DSG) funktioniert und wie du Zugriffsrechte für Benutzer konfigurierst.

## Überblick

Das Datenschutz-Modul verwendet das ELIZA-Berechtigungssystem mit vordefinierten Systemgruppen. Im Vergleich zu anderen Modulen ist das DSG-Modul **relativ einfach strukturiert**, da es keine team-basierten oder Space-basierten Berechtigungen gibt.

### Berechtigungsebenen

<pre>
┌─────────────────────────────────────────────────────┐
│  1. System-Berechtigungen (Basis-Ebene)             │
│     ↓                                               │
│  2. Systemgruppen (ELIZA-Rollen)                    │
└─────────────────────────────────────────────────────┘
</pre>

**Wichtig:** Das DSG-Modul verwendet **keine** Spaces oder Orgunits zur Zugriffssteuerung. Alle berechtigten Benutzer sehen alle Daten im Datenschutzsystem.

## System-Berechtigungen (Basis-Ebene)

### Standard DSG-Permissions

Jedes Objekt im DSG-Modul hat vier Basis-Berechtigungen:

| Permission-Typ | Beschreibung |
|----------------|--------------|
| **view** | Objekte anzeigen und lesen |
| **add** | Neue Objekte erstellen |
| **change** | Bestehende Objekte bearbeiten |
| **delete** | Objekte löschen |

### Berechtigungen pro Objekt

| Objekt | View | Add | Change | Delete |
|--------|------|-----|--------|--------|
| System | `dsg.view_system` | `dsg.add_system` | `dsg.change_system` | `dsg.delete_system` |
| Activity | `dsg.view_activity` | `dsg.add_activity` | `dsg.change_activity` | `dsg.delete_activity` |
| Application | `dsg.view_application` | `dsg.add_application` | `dsg.change_application` | `dsg.delete_application` |
| DataCategory | `dsg.view_datacategory` | `dsg.add_datacategory` | `dsg.change_datacategory` | `dsg.delete_datacategory` |
| DPIA | `dsg.view_dpia` | `dsg.add_dpia` | `dsg.change_dpia` | `dsg.delete_dpia` |
| TOM | `dsg.view_tom` | `dsg.add_tom` | `dsg.change_tom` | `dsg.delete_tom` |

(Analog für alle weiteren Objekte: Recipient, Subcontractor, LegalBasis, etc.)

## Systemgruppen

ELIZA verwendet vordefinierte Systemgruppen, die Berechtigungen bündeln.

### DSG-Systemgruppen

#### 1. DSG Users (`dsg_users`)

**Basis-Lesezugriff auf das Datenschutz-Modul**

**Was du damit tun kannst:**
- Alle Datenschutzinformationen lesen
- Verarbeitungsaktivitäten einsehen
- Stammdaten einsehen
- DSFAs einsehen
- TOMs einsehen

**Was du NICHT kannst:**
- Objekte erstellen
- Objekte bearbeiten
- Objekte löschen
- Export-Funktionen nutzen

**Anwendungsfälle:**
- Mitarbeitende, die Datenschutzinformationen einsehen müssen
- Auditoren mit Lesezugriff
- Neue Mitarbeitende in Einarbeitung

**Empfehlung:** Für Mitarbeitende, die nur lesend auf Datenschutzinformationen zugreifen müssen.

#### 2. DSG Admin (`dsg_admin`)

**Vollzugriff auf das Datenschutz-Modul**

**Was du damit tun kannst:**
- Alle Datenschutzinformationen lesen
- Datenschutzsysteme erstellen und verwalten
- Verarbeitungsaktivitäten erstellen, bearbeiten und löschen
- Alle Stammdaten verwalten
- DSFAs erstellen und bearbeiten
- TOMs verwalten
- Word-Export durchführen
- Einstellungen aufrufen

**Anwendungsfälle:**
- Datenschutzbeauftragter (DSB)
- Datenschutzkoordinator
- QM-Beauftragte mit Datenschutzverantwortung
- IT-Sicherheitsbeauftragte

**Empfehlung:** Nur 1-3 Personen sollten diese Rechte haben.

### Systemgruppen zuweisen

**Schritt-für-Schritt:**

1. Navigiere zu **Core** → **Benutzerverwaltung**
2. Wähle den Benutzer aus
3. Scrolle zu **Gruppen**
4. Wähle die gewünschte DSG-Systemgruppe:
   - `dsg_users` für Lesezugriff
   - `dsg_admin` für Vollzugriff
5. Klicke auf **Speichern**

> **Tipp:** Die Gruppe `dsg_users` ist ideal für alle Mitarbeitenden, die Datenschutzinformationen einsehen, aber nicht ändern sollen.

## Besonderheiten des DSG-Moduls

### Keine Space-Trennung

**Im DSG-Modul gibt es keine Spaces.**

Das bedeutet:
- Alle berechtigten Benutzer sehen **alle Datenschutzsysteme**
- Keine Möglichkeit, Daten für bestimmte Abteilungen zu verstecken
- Einheitliche Datenschutz-Dokumentation im ganzen Unternehmen

**Grund:** Datenschutz ist ein unternehmensweites Thema. Eine Fragmentierung würde die Übersicht erschweren.

### Keine Orgunit-Trennung

**Im DSG-Modul gibt es keine Orgunit-basierten Berechtigungen.**

Das bedeutet:
- Keine abteilungsspezifischen Zugriffsrechte
- Einfache, zentrale Verwaltung

### System-basierte Berechtigungsprüfung

Das DSG-Modul prüft Berechtigungen auf **System-Ebene**:

- `has_view_permission`: Darf der Benutzer das System sehen?
- `has_change_permission`: Darf der Benutzer das System bearbeiten?
- `has_add_permission`: Darf der Benutzer neue Objekte erstellen?
- `has_delete_permission`: Darf der Benutzer Objekte löschen?

Diese Prüfungen basieren auf den System-Berechtigungen des Benutzers.

## Berechtigungs-Kombinationen

### Häufige Szenarien

#### Szenario 1: Datenschutzbeauftragter

**Anforderung:** Vollständige Verwaltung des Datenschutzsystems

**Lösung:**
- Systemgruppe: `dsg_admin`

**Ergebnis:**
- Kann alle Datenschutzinformationen verwalten
- Kann DSFAs erstellen und bearbeiten
- Kann TOMs dokumentieren
- Kann Exporte durchführen

#### Szenario 2: Abteilungsleiter mit Lesezugriff

**Anforderung:** Einsicht in Datenschutzinformationen der eigenen Verarbeitungen

**Lösung:**
- Systemgruppe: `dsg_users`

**Ergebnis:**
- Kann alle Verarbeitungsaktivitäten einsehen
- Kann keine Änderungen vornehmen
- Kann keine neuen Objekte erstellen

#### Szenario 3: Kein Zugriff

**Anforderung:** Benutzer soll keinen Zugriff auf Datenschutzinformationen haben

**Lösung:**
- Keine DSG-Systemgruppe zuweisen

**Ergebnis:**
- DSG-Modul erscheint nicht in der Navigation
- Kein Zugriff auf Datenschutzinformationen

## Export-Berechtigungen

### Word-Export

**Berechtigung erforderlich:** `dsg.view_system` und `dsg.change_system`

Effektiv: Systemgruppe `dsg_admin`

**Was wird exportiert:**
- Alle Verarbeitungsaktivitäten
- Beschreibungen und Zwecke
- Rechtsgrundlagen
- Betroffene Personengruppen

## Berechtigungen prüfen

### Als Benutzer

**Deine eigenen Berechtigungen prüfen:**

1. Klicke auf **Dein Profil** (oben rechts)
2. Wähle **Mein Profil**
3. Scrolle zu **Gruppen und Berechtigungen**
4. Prüfe, welche **DSG-Systemgruppe** du hast:
   - `dsg_admin` → Vollzugriff
   - `dsg_users` → Nur Lesen
   - Keine DSG-Gruppe → Kein Zugriff

**Schnell-Test im DSG-Modul:**
- Siehst du den Button **"+"** zum Erstellen neuer Objekte? → Du bist `dsg_admin`
- Siehst du nur Listen ohne Erstellen-Buttons? → Du bist `dsg_users`
- Siehst du das DSG-Modul gar nicht? → Keine Berechtigung

### Als Administrator

**Berechtigungen anderer Benutzer prüfen:**

1. Navigiere zu **Core** → **Benutzerverwaltung**
2. Wähle den Benutzer
3. Prüfe, welche **DSG-Systemgruppe** zugewiesen ist

## Häufige Probleme und Lösungen

### Problem: Benutzer sieht keine Datenschutzinformationen

**Mögliche Ursachen:**

1. **Keine View-Permission**
   - **Lösung:** Systemgruppe `dsg_users` oder `dsg_admin` zuweisen

2. **Modul nicht in Navigation**
   - **Lösung:** DSG-Gruppe zuweisen → Modul erscheint in Navigation

### Problem: Benutzer kann keine Verarbeitungsaktivität erstellen

**Ursache:** Nur `dsg_admin` kann Objekte erstellen

**Lösung:** Systemgruppe auf `dsg_admin` upgraden (falls berechtigt)

### Problem: Benutzer kann keine DSFA bearbeiten

**Ursache:** Nur `dsg_admin` kann DSFAs bearbeiten

**Lösung:** Prüfe, ob der Benutzer die Gruppe `dsg_admin` hat

### Problem: Export-Funktion fehlt

**Ursache:** Nur `dsg_admin` kann Exporte durchführen

**Lösung:** Benutzer zur Systemgruppe `dsg_admin` hinzufügen

## Best Practices

### Empfehlungen

1. **Klare Rollenverteilung:** DSB als `dsg_admin`, andere als `dsg_users`
2. **Minimale Rechte:** Nur so viele Rechte wie nötig vergeben
3. **Regelmässige Überprüfung:** Berechtigungen jährlich prüfen
4. **Dokumentation:** Festhalten, wer welche Rechte hat und warum
5. **Vertretungsregelung:** Mindestens 2 Personen mit `dsg_admin`

### Häufige Fehler

1. **Zu viele Admins:** Zu viele Personen mit Vollzugriff
2. **Kein Admin:** Niemand kann das System verwalten
3. **Vergessene Accounts:** Ehemalige Mitarbeiter haben noch Zugriff
4. **Keine Vertretung:** Nur eine Person hat Admin-Rechte

## Zusammenfassung

### Berechtigungsmodell

1. **System-Berechtigungen:** view, add, change, delete pro Objekt
2. **Zwei Systemgruppen:** `dsg_users` (Read-Only), `dsg_admin` (Full Access)
3. **Keine weiteren Ebenen:** Keine Spaces, Orgunits oder Eigentümer-Konzepte

### Wichtige Punkte

- **Zentrales Datenschutzmanagement:** Alle sehen alles (mit Berechtigung)
- **Einfache Verwaltung:** Nur zwei Systemgruppen
- **Minimale Rechte:** Nur `dsg_admin` kann Änderungen vornehmen
- **Wenige Admins:** Typischerweise nur DSB und Stellvertreter

### Empfohlene Konfiguration

Für die meisten Unternehmen:

- **Datenschutzbeauftragter:** `dsg_admin`
- **Stellvertreter DSB:** `dsg_admin`
- **Führungskräfte:** `dsg_users` (Lesezugriff)
- **Alle anderen:** Kein Zugriff oder `dsg_users`

## Häufige Fragen (FAQ)

### Wer kann DSG-Berechtigungen verwalten?

Nur Benutzer mit Superuser-Rechten oder der Berechtigung zur Benutzerverwaltung können Gruppen zuweisen.

### Kann ich Verarbeitungsaktivitäten vor bestimmten Benutzern verstecken?

Nein, das DSG-Modul unterstützt keine selektiven Berechtigungen. Alle mit `dsg_users` oder `dsg_admin` sehen alle Daten.

### Warum gibt es keine mittlere Berechtigungsstufe?

Das DSG-Modul ist bewusst einfach gehalten. Datenschutz ist ein sensibles Thema - entweder Lesezugriff oder Vollzugriff.

### Kann ich mehrere Datenschutzsysteme für verschiedene Abteilungen anlegen?

Technisch ja, aber es wird nicht empfohlen. Ein zentrales System ist übersichtlicher.

---

**Bei Fragen zum Berechtigungskonzept wende dich an deinen ELIZA-Administrator!**
