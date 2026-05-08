---
title: "Berechtigungskonzept"
description: ""
weight: "4"
tags:
  - "permissions"
  - "groups"
  - "security"
  - "roles"
  - "access-control"
---


# Berechtigungskonzept

In diesem Kapitel lernst du das mehrstufige Berechtigungssystem von ELIZA kennen und verstehst, wie Zugriffsrechte funktionieren.

## 🎯 Lernziele

Nach diesem Kapitel kannst du:

- Das mehrstufige Berechtigungssystem verstehen
- Systemgruppen korrekt zuweisen
- Benutzerdefinierte Gruppen für Team-Berechtigungen nutzen
- Benutzertypen und ihre Bedeutung verstehen
- Best Practices für Rechtevergabe anwenden
- Sicherheits-Empfehlungen umsetzen

## Das ELIZA Berechtigungssystem

ELIZA verwendet ein **mehrstufiges Berechtigungssystem** mit 3 Ebenen:

<pre>
┌─────────────────────────────────────────────────┐
│  1. System-Berechtigungen (Basis-Ebene)         │
│     - Basis-Berechtigungen des Systems          │
│     - add, change, delete, view                 │
│     - Pro Objekt-Typ definiert                  │
│     └─────────────────────────────────┐         │
│                                       ↓         │
│  2. Systemgruppen (ELIZA-Rollen)               │
│     - Vordefinierte Gruppen                    │
│     - Module-spezifisch                        │
│     - Mehrere Berechtigungen gebündelt         │
│     └─────────────────────────────────┐        │
│                                       ↓        │
│  3. Benutzerdefinierte Gruppen (Team-Gruppen) │
│     - Frei erstellbare Gruppen                │
│     - Für spezifische Teams/Projekte          │
│     - Zusätzliche Sichtbarkeitskontrollen     │
│     └──────────────────────────────────        │
└─────────────────────────────────────────────────┘
</pre>

> **💡 Tipp:** Die meisten Administratoren arbeiten hauptsächlich mit Ebene 2 (Systemgruppen).

## Ebene 1: System-Berechtigungen

### CRUD-Berechtigungen

Jedes ELIZA-Objekt hat 4 Basis-Berechtigungen:

| Berechtigung | Kürzel | Bedeutung | Beispiel |
|--------------|--------|-----------|----------|
| **View** (Ansehen) | `view` | Objekt ansehen | Dokumente lesen |
| **Add** (Hinzufügen) | `add` | Neue Objekte erstellen | Dokumente hochladen |
| **Change** (Ändern) | `change` | Bestehende Objekte bearbeiten | Dokumente bearbeiten |
| **Delete** (Löschen) | `delete` | Objekte löschen | Dokumente löschen |

### Berechtigungs-Namensschema

Berechtigungen folgen dem Format: `<modul>.<aktion>_<objekt>`

**Beispiele:**

- `dms.view_dokument` - DMS Dokumente ansehen
- `dms.add_dokument` - DMS Dokumente hochladen
- `dms.change_dokument` - DMS Dokumente bearbeiten
- `dms.delete_dokument` - DMS Dokumente löschen
- `core.change_user` - Benutzer bearbeiten
- `crm.add_contact` - CRM Kontakte erstellen

> **⚠️ Wichtig:** Normale Administratoren arbeiten NICHT direkt mit diesen Berechtigungen - sie nutzen Systemgruppen!

## Ebene 2: Systemgruppen (ELIZA-Rollen)

### Was sind Systemgruppen?

**Systemgruppen** sind vordefinierte Gruppen, die mehrere Berechtigungen bündeln.

**Vorteile:**
- ✅ Einfacher als einzelne Permissions zu vergeben
- ✅ Vordefiniert und getestet
- ✅ Module-spezifisch (z.B. `dms_admin`, `crm_users`)
- ✅ Konsistent über alle ELIZA-Installationen

### Systemgruppen-Kategorien

#### 1. Basis-Gruppen (Pflicht für alle)

| Gruppe | Beschreibung | Berechtigungen |
|--------|--------------|----------------|
| **eliza_users** | Basis-Zugang zu ELIZA | Dashboard, Profil, Basis-Funktionen |
| **eliza_admin** | ELIZA Administrator | Benutzerverwaltung, Systemeinstellungen |
| **eliza_consultants** | Externe Berater | Eingeschränkter Lesezugriff |

> **💡 Tipp:** JEDER Benutzer braucht mindestens `eliza_users` um sich anmelden zu können!

#### 2. Modul-spezifische User-Gruppen

Format: `<modul>_users`

| Gruppe | Beschreibung | Typische Berechtigungen |
|--------|--------------|-------------------------|
| **dms_users** | DMS Benutzer | Dokumente ansehen, hochladen |
| **organisation_users** | Organisation Benutzer | Mitarbeitende ansehen |
| **projects_users** | Projekt Benutzer | Projekte ansehen, Aufgaben bearbeiten |
| **crm_users** | CRM Benutzer | Kontakte ansehen |
| **timetracker_users** | Zeiterfassung Benutzer | Eigene Zeiten erfassen |

#### 3. Modul-spezifische Admin-Gruppen

Format: `<modul>_admin`

| Gruppe | Beschreibung | Typische Berechtigungen |
|--------|--------------|-------------------------|
| **dms_admin** | DMS Administrator | Alle DMS-Funktionen + Konfiguration |
| **projects_admin** | Projekt Administrator | Projekte erstellen, löschen, konfigurieren |
| **crm_admin** | CRM Administrator | Kontakte verwalten, Export, Labels |
| **timetracker_admin** | Zeiterfassung Admin | Arbeitszeiten verwalten, Abwesenheiten |
| **organisation_admin** | Organisation Admin | Mitarbeitende verwalten, Organigramm |

#### 4. Spezial-Rollen

| Gruppe | Beschreibung | Verwendung |
|--------|--------------|------------|
| **hr_admin** | HR Administrator | Mitarbeitenden-Verwaltung |
| **hr_private_data** | HR Persönliche Daten | Zugriff auf sensible Personaldaten |
| **hr_files** | HR Personaldossiers | Zugriff auf alle Personaldossiers |
| **quality_management** | Qualitätsmanagement | Prozesse, Audits, KPIs |

### Systemgruppen zuweisen

**Schritt-für-Schritt:**

1. Öffne die **Benutzer-Detailseite**
2. Scrolle zum Abschnitt **"Gruppen"**
3. Finde die Sektion **"Systemgruppen"**
4. Wähle gewünschte Gruppen aus (Mehrfachauswahl möglich)
5. Klicke auf **[Speichern]**

<pre>
┌────────────────────────────────────────────────┐
│ Systemgruppen:                                 │
│                                                │
│ ☑ eliza_users                                  │
│ ☑ dms_admin                                    │
│ ☐ dms_users                                    │
│ ☐ crm_admin                                    │
│ ☑ crm_users                                    │
│ ☐ projects_admin                               │
│ ☐ projects_users                               │
│                                                │
│ [Speichern]                                    │
└────────────────────────────────────────────────┘
</pre>

### Gruppen-Kombinationen

**Typische Kombinationen:**

| Rolle | Gruppen | Beschreibung |
|-------|---------|--------------|
| **Basis-Benutzer** | `eliza_users` | Nur Lese-Zugriff |
| **Dokument-Manager** | `eliza_users`, `dms_admin` | Vollzugriff auf DMS |
| **Projekt-Leiter** | `eliza_users`, `projects_admin` | Projekte verwalten |
| **Vertriebs-Mitarbeiter** | `eliza_users`, `crm_admin` | CRM verwalten |
| **System-Administrator** | `eliza_admin`, + alle *_admin Gruppen | Vollzugriff |

> **💡 Tipp:** Kombiniere `eliza_users` immer mit modul-spezifischen Gruppen.

## Ebene 3: Benutzerdefinierte Gruppen (Team-Gruppen)

### Was sind benutzerdefinierte Gruppen?

**Benutzerdefinierte Gruppen** sind frei erstellbare Gruppen für:

- Team-basierte Berechtigungen
- Projekt-spezifische Zugriffe
- Temporäre Berechtigungen
- Abteilungs-spezifische Rechte

**Unterschied zu Systemgruppen:**

| Systemgruppen | Benutzerdefinierte Gruppen |
|---------------|----------------------------|
| Vordefiniert | Frei erstellbar |
| ELIZA-weit gültig | Benutzer/Team-spezifisch |
| Nicht löschbar | Löschbar |
| Standard-Berechtigungen | Flexibel konfigurierbar |

### Benutzerdefinierte Gruppen erstellen

**Schritt-für-Schritt:**

1. Navigiere zu **Einstellungen** → **Benutzerdefinierte Gruppen**
2. Klicke auf **[+ Benutzerdefinierte Gruppe]**
3. Fülle die Felder aus:
   - **Titel**: Name der Gruppe (z.B. "Projekt Alpha Team")
   - **Beschreibung**: Zweck der Gruppe
   - **Berechtigungen**: Wähle spezifische Permissions aus
4. Klicke auf **[Speichern]**

### Benutzerdefinierte Gruppen verwenden

**Typische Anwendungsfälle:**

1. **Projekt-Teams**
   - Erstelle Gruppe "Projekt Relaunch Team"
   - Weise nur Projektmitglieder zu
   - Gewähre Zugriff auf Projekt-Dokumente

2. **Temporäre Zugänge**
   - Erstelle Gruppe "Audit Team 2025"
   - Weise Auditoren zu
   - Gewähre Lese-Zugriff auf relevante Bereiche
   - Lösche Gruppe nach Abschluss

3. **Abteilungs-spezifisch**
   - Erstelle Gruppe "Marketing Team"
   - Weise Marketing-Mitarbeiter zu
   - Gewähre Zugriff auf Marketing-DMS-Ordner

> **💡 Tipp:** Benutzerdefinierte Gruppen sind ideal für flexible, temporäre oder team-spezifische Berechtigungen.

## Benutzertypen verstehen

ELIZA berechnet **Benutzertypen** automatisch basierend auf zugewiesenen Gruppen.

### Benutzertypen-Matrix

| Benutzertyp | Badge | Gruppen-Kriterien | Rechte |
|-------------|-------|-------------------|--------|
| **Aktiv** | Grün | Min. 1 Admin-Gruppe | Volle Schreib-/Bearbeitungsrechte |
| **Lesen** | Hellblau | Nur `eliza_users` | Nur Leserechte |
| **Berater:in** | Lila | Mitglied in `eliza_consultants` | Eingeschränkte Rechte |
| **Lesen & Spaces** | Orange | `eliza_users` + Space-Gruppen | Lesen + Spaces-Zugriff |

### Berechnungs-Logik

**Aktiv-Typ:** Benutzer hat mindestens eine der folgenden Gruppen:
- Jede `*_admin` Gruppe (z.B. `dms_admin`, `crm_admin`)
- `eliza_admin`
- HR-spezifische Gruppen (`hr_admin`, `hr_files`, etc.)

**Lesen-Typ:** Benutzer hat:
- `eliza_users` Gruppe
- KEINE Admin-Gruppen
- KEINE Berater-Gruppe

**Berater:in-Typ:** Benutzer ist:
- Mitglied in `eliza_consultants` Gruppe

### Benutzertyp manuell aktualisieren

**Normalerweise automatisch, aber bei Problemen:**

1. Navigiere zur **Benutzerliste**
2. Klicke auf **[Benutzertypen aktualisieren]** (nur Superuser)
3. Alle Typen werden neu berechnet

## Best Practices für Berechtigungsvergabe

### ✅ Goldene Regeln

1. **Prinzip der minimalen Rechte**
   - Gib nur Rechte, die wirklich benötigt werden
   - Starte mit `eliza_users`, erweitere nach Bedarf
   - Admin-Rechte sparsam vergeben

2. **Konsistente Gruppen-Vergabe**
   - Definiere Standard-Gruppen pro Rolle/Abteilung
   - Dokumentiere welche Rolle welche Gruppen bekommt
   - Nutze Excel-Import für konsistente Massen-Zuweisung

3. **Regelmässige Überprüfung**
   - Quartalsweise Berechtigungen überprüfen
   - Entferne nicht mehr benötigte Rechte
   - Nutze "Zuordnungen aufräumen" Funktion

4. **Separation of Duties**
   - Nicht jeder Admin für alles
   - Aufteilen: DMS-Admin, CRM-Admin, Projekt-Admin
   - Reduziert Fehler- und Missbrauchsrisiko

5. **Benutzerdefinierte Gruppen für temporäre Zugänge**
   - Nutze benutzerdefinierte Gruppen für zeitlich begrenzte Rechte
   - Lösche Gruppen nach Projekt-Abschluss
   - Dokumentiere Zweck der Gruppe in Beschreibung

### ❌ Häufige Fehler vermeiden

1. **Alle zu Admins machen**
   - Problem: Sicherheitsrisiko, keine Nachvollziehbarkeit
   - Lösung: Admin-Rechte nur bei echtem Bedarf

2. **Benutzer ohne Gruppen**
   - Problem: Benutzer kann ELIZA nicht nutzen
   - Lösung: Immer min. `eliza_users` zuweisen

3. **Zu viele benutzerdefinierte Gruppen**
   - Problem: Unübersichtlich, Verwaltungsaufwand
   - Lösung: Nutze Systemgruppen wo möglich

4. **Berechtigungen nicht dokumentieren**
   - Problem: Niemand weiss mehr warum jemand welche Rechte hat
   - Lösung: Nutze Bemerkungsfeld, führe Dokumentation

5. **Ausgeschiedene Mitarbeiter nicht deaktivieren**
   - Problem: Sicherheitsrisiko, Compliance-Problem
   - Lösung: Zeitnahe Archivierung nach Austritt

## Spezial-Berechtigungen

### Superuser-Status

**Was ist ein Superuser?**
- Höchste Berechtigungsstufe in ELIZA
- Zugriff auf ALLE Funktionen
- Kann Berechtigungen vergeben
- Kann sensible Einstellungen ändern

**Wer sollte Superuser sein?**
- System-Administrator
- IT-Leiter
- Max. 2-3 Personen pro Organisation

> **⚠️ ACHTUNG:** Superuser-Rechte nur an vertrauenswürdige Personen vergeben!

### HR-Berechtigungen

Spezielle Rollen für HR-Bereich:

| Rolle | Berechtigung | Zugriff auf |
|-------|--------------|-------------|
| **HR Admin** | `is_hr_admin` | Mitarbeitende verwalten |
| **HR Persönliche Daten** | `is_hr_private_data` | Geburtsdatum, Sozialversicherung, etc. |
| **HR Personaldossiers** | `is_hr_files` | ALLE Personaldossiers aller Mitarbeiter |

**Diese Rollen ermöglichen in der Benutzer-Detailseite:**

1. Öffne Benutzer-Detailseite
2. Scrolle zu **"Erweiterte Berechtigungen"**
3. Setze entsprechende Checkboxen
4. Speichern

## Lokale Berechtigungskonzepte

Zusätzlich zu den System-Berechtigungen gibt es **modul-spezifische** Zugriffskonfigurationen:

### Space-basierte Berechtigungen (Teams-Modul)

- Benutzer erstellen eigene Spaces (Arbeitsbereiche)
- Nur Space-Mitglieder haben Zugriff
- Unabhängig von Systemgruppen

### Orgunit-basierte Berechtigungen (Organisation)

- Berechtigungen basieren auf Organisationseinheit
- Vorgesetzte sehen Untergebene
- HR sieht alle Mitarbeitenden

### Geschützte Ordner (DMS)

- Ordner können als "Geschützt" markiert werden
- Nur Eigentümer und zugewiesene Benutzer haben Zugriff
- Zusätzlich zu Systemgruppen

> **💡 Tipp:** Diese lokalen Konzepte arbeiten **zusätzlich** zu Systemgruppen.

## Sicherheits-Empfehlungen

### ✅ Sicherheits-Checkliste

- [ ] **Minimale Rechte:** Nur benötigte Rechte vergeben
- [ ] **Admin-Limit:** Max. 10% der Benutzer sollten Admin-Rechte haben
- [ ] **Regelmässige Audits:** Quartalsweise Berechtigungen überprüfen
- [ ] **Ausgeschiedene deaktivieren:** Innerhalb 24h nach Austritt
- [ ] **Passwort-Policies:** Starke Passwörter erzwingen
- [ ] **2FA aktivieren:** Wo möglich Zwei-Faktor-Authentifizierung nutzen
- [ ] **Logging:** Berechtigungs-Änderungen dokumentieren
- [ ] **Schulung:** Administratoren in Berechtigungsvergabe schulen

### Audit-Funktionen nutzen

**Berechtigungen exportieren (Superuser):**

1. Navigiere zur Benutzerliste
2. Klicke auf Excel-Export Icon
3. Erhalte vollständige Berechtigungs-Matrix
4. Nutze für Audits und Compliance-Nachweise

**Zuordnungen aufräumen:**

1. Öffne Benutzer-Detailseite
2. Klicke auf Anzahl in Spalte "Zuordnungen"
3. Entferne unnötige Gruppen-Zuordnungen
4. Reduziert Komplexität

## Häufige Fragen (FAQ)

### Warum kann ein Benutzer ein Modul nicht sehen?

**Checkliste prüfen:**
- [ ] Hat Benutzer `eliza_users` Gruppe?
- [ ] Hat Benutzer modul-spezifische Gruppe (z.B. `dms_users`)?
- [ ] Ist das Modul in Constance aktiviert (z.B. `DMS_ENABLED=True`)?
- [ ] Ist der Benutzer aktiv (nicht archiviert)?

### Was ist der Unterschied zwischen _users und _admin Gruppen?

- **_users**: Basis-Zugriff, meist Lesen + Erstellen eigener Objekte
- **_admin**: Vollzugriff inkl. Löschen, Konfiguration, Verwaltung anderer Benutzer-Objekte

### Kann ich Systemgruppen bearbeiten oder löschen?

Nein, Systemgruppen sind schreibgeschützt. Nutze benutzerdefinierte Gruppen für flexible Berechtigungen.

### Wie viele Gruppen sollte ein Benutzer haben?

**Empfehlung:** 2-5 Gruppen
- Zu wenige: Nicht genug Rechte
- Zu viele: Unübersichtlich, Sicherheitsrisiko

### Was passiert wenn ich einem Benutzer `eliza_admin` gebe?

Er wird zum Administrator und kann:
- Benutzer verwalten
- Gruppen zuweisen
- Systemeinstellungen ändern
- Auf Admin-Funktionen zugreifen

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Das 3-stufige Berechtigungssystem verstehen (Berechtigungen → Systemgruppen → Benutzerdefinierte Gruppen)
- ✅ Systemgruppen korrekt zuweisen und kombinieren
- ✅ Benutzerdefinierte Gruppen für flexible Berechtigungen nutzen
- ✅ Benutzertypen und ihre Bedeutung verstehen
- ✅ Best Practices für sichere Rechtevergabe anwenden
- ✅ Sicherheits-Empfehlungen umsetzen
- ✅ Spezial-Berechtigungen (Superuser, HR) verstehen

## Nächste Schritte

Du hast jetzt alle Kapitel der Benutzerverwaltung durchgearbeitet! 🎉

**Empfohlene nächste Themen:**

- Vertiefe dein Wissen in modul-spezifischen User Manuals (DMS, CRM, Projekte)
- Übe mit Test-Benutzern die Berechtigungsvergabe
- Erstelle eine Berechtigungs-Matrix für deine Organisation
- Führe einen Berechtigungs-Audit durch

---

**← Zurück zu: [Benutzer-Import]({{< ref "03-benutzer-import" >}}) | Zurück zum [Inhaltsverzeichnis](./)**
