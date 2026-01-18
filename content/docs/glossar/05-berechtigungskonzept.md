---
title: "Berechtigungskonzept"
description: ""
weight: "5"
tags:
  - "permissions"
  - "security"
  - "admin"
  - "glossar"
---


# Berechtigungskonzept

In diesem Kapitel lernst du, wie das Berechtigungssystem im Glossar-Modul funktioniert und wie du Zugriffsrechte für Benutzer konfigurierst.

## Überblick

Das Glossar-Modul verwendet das ELIZA-Berechtigungssystem mit vordefinierten Systemgruppen. Im Vergleich zu anderen Modulen ist das Glossar **sehr einfach strukturiert**, da es keine team-basierten oder hierarchischen Berechtigungen gibt.

### Berechtigungsebenen

<pre>
┌─────────────────────────────────────────────────────┐
│  1. System-Berechtigungen (Basis-Ebene)             │
│     ↓                                               │
│  2. Systemgruppen (ELIZA-Rollen)                    │
└─────────────────────────────────────────────────────┘
</pre>

**Wichtig:** Das Glossar verwendet **keine** Spaces oder Orgunits. Alle berechtigten Benutzer sehen das gesamte Glossar.

## System-Berechtigungen (Basis-Ebene)

### Standard Glossar-Permissions

Jedes Model im Glossar hat vier Basis-Permissions:

| Permission | Code | Beschreibung |
|------------|------|--------------|
| **Ansehen** | `glossar.view_glossareintraege` | Glossar-Einträge anzeigen und lesen |
| **Hinzufügen** | `glossar.add_glossareintraege` | Neue Glossar-Einträge erstellen |
| **Ändern** | `glossar.change_glossareintraege` | Bestehende Einträge bearbeiten |
| **Löschen** | `glossar.delete_glossareintraege` | Glossar-Einträge löschen |

## Systemgruppen

ELIZA verwendet vordefinierte Systemgruppen, die Permissions bündeln.

### Glossar-Systemgruppen

#### 1. Glossar Users (`glossar_users`)

**Nur Lese-Zugriff auf alle Glossar-Einträge**

Permissions:
- `glossar.view_glossareintraege`

**Anwendungsfälle:**
- Alle Mitarbeiter im Unternehmen
- Standard-Benutzer, die das Glossar als Nachschlagewerk nutzen
- Temporäre Zugänge

**Was du damit tun kannst:**
- ✅ Alle Glossar-Einträge lesen
- ✅ Glossar durchsuchen (DataTables-Suche)
- ✅ Spalten ein-/ausblenden
- ✅ Einträge als Favoriten markieren
- ❌ Keine Bearbeitungs-Rechte
- ❌ Keine Erstellungs-Rechte
- ❌ Keine Lösch-Rechte
- ❌ Kein Import/Export-Zugriff
- ❌ Keine Einstellungen

**Empfehlung:** Die meisten Mitarbeiter sollten diese Gruppe haben.

#### 2. Glossar Admin (`glossar_admin`)

**Vollzugriff auf das Glossar-Modul**

Permissions:
- `glossar.view_glossareintraege`
- `glossar.add_glossareintraege`
- `glossar.change_glossareintraege`
- `glossar.delete_glossareintraege`

**Anwendungsfälle:**
- Glossar-Verantwortliche
- Qualitätsbeauftragte
- Dokumentationsverantwortliche

**Was du damit tun kannst:**
- ✅ Alle Glossar-Einträge sehen
- ✅ Neue Einträge erstellen
- ✅ Bestehende Einträge bearbeiten
- ✅ Einträge löschen
- ✅ Excel-Import und -Export durchführen
- ✅ Glossar-Einstellungen aufrufen
- ✅ Glossar-Synchronisation mit Prozessen/DMS (falls Superuser)

**Empfehlung:** Nur 1-3 Personen sollten Admin-Rechte haben.

### Systemgruppen zuweisen

**Schritt-für-Schritt:**

1. Navigiere zu **Core** → **Benutzerverwaltung**
2. Wähle den Benutzer aus
3. Scrolle zu **Gruppen**
4. Wähle die gewünschte Glossar-Systemgruppe:
   - `glossar_users` für Standard-Benutzer (Lesezugriff)
   - `glossar_admin` für Administratoren (Vollzugriff)
5. Klicke auf **Speichern**

> **💡 Tipp:** Die meisten Mitarbeiter sollten `glossar_users` Rechte haben, damit sie das Glossar als Nachschlagewerk nutzen können.

## Besonderheiten des Glossar-Moduls

### Keine Space-Trennung

**Im Glossar gibt es keine Spaces.**

Das bedeutet:
- ✅ Alle berechtigten Benutzer sehen das **gesamte Glossar**
- ✅ Kein Aufwand für Space-Verwaltung
- ✅ Einheitliche Terminologie im ganzen Unternehmen
- ⚠️ Keine Möglichkeit, Einträge für bestimmte Teams zu verstecken

**Grund:** Das Glossar soll ein **unternehmensweites Nachschlagewerk** sein, das allen zur Verfügung steht.

### Keine Orgunit-Trennung

**Im Glossar gibt es keine Orgunit-basierten Berechtigungen.**

Das bedeutet:
- ✅ Einfache Verwaltung
- ✅ Keine hierarchischen Berechtigungen
- ⚠️ Keine abteilungsspezifischen Einträge möglich

### Kein Eigentümer-Konzept

**Im Glossar gibt es keine Eigentümer-Rechte.**

Das bedeutet:
- ✅ Jeder mit `glossar_admin` Rechten kann alle Einträge bearbeiten
- ✅ Kollaboratives Arbeiten am Glossar
- ⚠️ Keine individuellen Zugriffsbeschränkungen auf einzelne Einträge

**Best Practice:** Nutze die Audit-Log-Funktion, um nachzuvollziehen, wer welche Änderungen vorgenommen hat.

## Berechtigungs-Kombinationen

### Häufige Szenarien

#### Szenario 1: Glossar-Verantwortlicher

**Anforderung:** Eine Person soll das Glossar pflegen und verwalten

**Lösung:**
- Systemgruppe: `glossar_admin`

**Ergebnis:**
- ✅ Vollzugriff auf alle Glossar-Funktionen
- ✅ Kann Import/Export durchführen
- ✅ Kann Einstellungen aufrufen
- ✅ Kann Einträge löschen

#### Szenario 2: Alle Mitarbeiter mit Lesezugriff

**Anforderung:** Alle Mitarbeiter sollen das Glossar als Nachschlagewerk nutzen können

**Lösung:**
- Systemgruppe: `glossar_users` für alle Mitarbeiter

**Ergebnis:**
- ✅ Können alle Einträge lesen und suchen
- ❌ Können nichts ändern
- ✅ Einfache Verwaltung (eine Gruppe für alle)

#### Szenario 3: Kein Zugriff

**Anforderung:** Bestimmte Benutzer sollen keinen Zugriff auf das Glossar haben

**Lösung:**
- Keine Glossar-Systemgruppe zuweisen

**Ergebnis:**
- ❌ Kein Zugriff auf Glossar-Modul
- ❌ Glossar erscheint nicht in der Navigation

## Import/Export-Berechtigungen

### Excel-Import

**Berechtigung erforderlich:** `glossar.add_glossareintraege` (Systemgruppe: `glossar_admin`)

**Warum Admin-Rechte?**
- Import kann bestehende Einträge überschreiben
- Import kann das gesamte Glossar verändern
- Fehlerhafte Importe können Schaden anrichten

**Best Practice:** Nur Glossar-Administratoren sollten Import-Rechte haben.

### Excel-Export

**Berechtigung erforderlich:** Keine spezielle Berechtigung

**Wer kann exportieren?**
- ✅ Alle Benutzer mit Zugriff auf Einstellungen (Admins)

**Format:** Alle Admins können das Glossar als Excel-Datei exportieren.

## Einstellungen-Zugriff

**Berechtigung erforderlich:** `glossar.delete_glossareintraege` (Systemgruppe: `glossar_admin`)

**Was sind Glossar-Einstellungen?**
- Zugang zu Excel-Import
- Zugang zu Excel-Export

**Nur für Administratoren:** Einstellungen können das Verhalten des gesamten Glossars beeinflussen.

## Berechtigungen prüfen

### Als Benutzer

**Deine eigenen Berechtigungen prüfen:**

1. Klicke auf **Dein Profil** (oben rechts)
2. Wähle **Mein Profil**
3. Scrolle zu **Gruppen und Berechtigungen**
4. Prüfe, welche **Glossar-Systemgruppe** du hast:
   - `glossar_admin` → Vollzugriff
   - `glossar_users` → Nur Lesen
   - Keine Glossar-Gruppe → Kein Zugriff

**Schnell-Test im Glossar:**
- Siehst du den Button **"+ Glossareintrag"**? → Du bist `glossar_admin`
- Siehst du nur die Liste ohne Buttons? → Du bist `glossar_users`
- Siehst du das Glossar-Modul gar nicht? → Keine Berechtigung

### Als Administrator

**Berechtigungen anderer Benutzer prüfen:**

1. Navigiere zu **Core** → **Benutzerverwaltung**
2. Wähle den Benutzer
3. Prüfe, welche **Glossar-Systemgruppe** zugewiesen ist

## Häufige Probleme und Lösungen

### Problem: Benutzer sieht keine Glossar-Einträge

**Mögliche Ursachen:**

1. **Keine View-Permission**
   - **Lösung:** Systemgruppe `glossar_users` oder `glossar_admin` zuweisen

2. **Glossar ist leer**
   - **Lösung:** Prüfe, ob Einträge vorhanden sind (als Admin einloggen)

3. **Modul nicht in Navigation**
   - **Lösung:** Keine Glossar-Gruppe zugewiesen → Gruppe zuweisen

### Problem: Benutzer kann keine Einträge erstellen

**Ursache:** Nur `glossar_admin` kann Einträge erstellen

**Lösung:** Systemgruppe auf `glossar_admin` upgraden (falls berechtigt)

### Problem: Benutzer kann keine Einträge löschen

**Das ist oft gewollt!**

**Erklärung:** Nur `glossar_admin` kann Einträge löschen. `glossar_users` hat absichtlich keine Lösch-Rechte.

**Lösung:** Falls Lösch-Rechte wirklich benötigt werden, auf `glossar_admin` upgraden.

### Problem: Import-Funktion fehlt

**Ursache:** Nur `glossar_admin` kann Import/Export nutzen

**Lösung:** Benutzer zur Systemgruppe `glossar_admin` hinzufügen

### Problem: Einstellungen nicht sichtbar

**Ursache:** Nur `glossar_admin` hat Zugriff auf Einstellungen

**Lösung:** Prüfe, ob Benutzer in Gruppe `glossar_admin` ist

## Best Practices

### ✅ Empfehlungen

1. **Users für alle:** Gib allen Mitarbeitern `glossar_users` Rechte
2. **Wenige Admins:** Nur 1-3 Personen sollten `glossar_admin` sein
3. **Regelmäßige Reviews:** Prüfe einmal jährlich alle Glossar-Berechtigungen
4. **Dokumentation:** Halte fest, wer Glossar-Admin ist
5. **Einarbeitung:** Zeige neuen Admins die Import/Export-Funktion
6. **Audit-Log nutzen:** Überwache Änderungen über das Audit-Log

### ❌ Häufige Fehler

1. **Zu restriktiv:** Nicht alle Mitarbeiter haben Lesezugriff
2. **Zu viele Admins:** Zu viele Personen mit Lösch-Rechten und Import-Zugriff
3. **Keine Admins:** Niemand kann das Glossar verwalten
4. **Vergessene Accounts:** Alte Mitarbeiter haben noch Admin-Rechte

## Zusammenfassung

### Berechtigungsmodell

1. **System-Berechtigungen:** Ansehen, Hinzufügen, Ändern, Löschen
2. **Zwei Systemgruppen:** `glossar_users` (Read-Only), `glossar_admin` (Full Access)
3. **Keine weiteren Ebenen:** Kein Space, Orgunit oder Eigentümer

### Wichtige Punkte

- 📖 **Unternehmensweites Glossar:** Alle sehen alles (mit Berechtigung)
- 👥 **Einfache Verwaltung:** Nur Systemgruppen, keine komplexen Filter
- 🔐 **Minimale Rechte:** Gib jedem nur die Rechte, die er braucht
- 👑 **Wenige Admins:** Nur 1-3 Personen sollten Vollzugriff haben
- 📋 **Audit-Log:** Nutze das Audit-Log, um Änderungen nachzuvollziehen

### Empfohlene Konfiguration

Für die meisten Unternehmen:

- **Alle Mitarbeiter:** `glossar_users` (Lesezugriff)
- **Glossar-Verantwortliche (1-3 Personen):** `glossar_admin` (Vollzugriff)

## Vergleich mit anderen Modulen

### Glossar vs. DMS

| Feature | Glossar | DMS |
|---------|---------|-----|
| **Spaces** | ❌ Nein | ✅ Ja |
| **Orgunits** | ❌ Nein | ✅ Ja |
| **Eigentümer** | ❌ Nein | ✅ Ja |
| **Geschützte Ordner** | ❌ Nein | ✅ Ja |
| **Systemgruppen** | ✅ Ja (2) | ✅ Ja |

**Ergebnis:** Glossar ist **viel einfacher** in der Berechtigungsverwaltung.

### Glossar vs. CRM

| Feature | Glossar | CRM |
|---------|---------|-----|
| **Spaces** | ❌ Nein | ✅ Ja |
| **Orgunits** | ❌ Nein | ✅ Ja |
| **Eigentümer** | ❌ Nein | ❌ Nein |
| **Systemgruppen** | ✅ Ja (2) | ✅ Ja |

**Ergebnis:** Beide Module sind ähnlich einfach, aber CRM nutzt Spaces für regionale Trennung.

## Häufige Fragen (FAQ)

### Wer kann Glossar-Berechtigungen verwalten?

Nur Benutzer mit Superuser-Rechten oder der Permission `auth.change_user` können Berechtigungen vergeben.

### Kann ich Einträge vor bestimmten Benutzern verstecken?

Nein, das Glossar-Modul unterstützt keine selektiven Berechtigungen auf Eintrags-Ebene. Entweder ein Benutzer sieht alle Einträge oder keine.

### Warum haben nur Admins Import-Rechte?

Der Import kann das gesamte Glossar überschreiben. Daher ist diese Funktion auf Administratoren beschränkt.

### Kann ich eigene Glossar-Gruppen erstellen?

Ja, aber es wird empfohlen, die vordefinierten Systemgruppen zu verwenden. Eigene Gruppen sollten über die ELIZA-Administrator-Oberfläche erstellt werden.

### Was passiert, wenn ein Benutzer mehrere Glossar-Gruppen hat?

Die Permissions werden kombiniert (additive Permissions). Ein Benutzer mit `glossar_users` UND `glossar_admin` hat alle Rechte von `glossar_admin`.

### Wie erhalte ich mehr Rechte im Glossar?

Kontaktiere deinen ELIZA-Administrator und begründe, warum du erweiterte Rechte benötigst (z.B. Verantwortung für Terminologie-Pflege).

### Gibt es eine Möglichkeit, Einträge zu schützen?

Nein, das Glossar unterstützt keine geschützten Einträge. Verwende das Audit-Log, um Änderungen nachzuvollziehen.

### Warum gibt es keine mittlere Berechtigungsstufe (Edit ohne Delete)?

Das Glossar ist bewusst einfach gehalten. Entweder voller Admin-Zugriff oder nur Lesezugriff. Dies vereinfacht die Verwaltung erheblich.

---

**Bei Fragen zum Berechtigungskonzept wende dich an deinen ELIZA-Administrator!**
