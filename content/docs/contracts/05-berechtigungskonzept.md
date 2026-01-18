---
title: "Berechtigungskonzept"
description: ""
weight: "5"
tags:
  - "permissions"
  - "security"
  - "admin"
  - "contracts"
---


# Berechtigungskonzept

In diesem Kapitel lernst du, wie das Berechtigungssystem im Vertragsmanagement funktioniert und wie du Zugriffsrechte konfigurierst.

## Überblick

Das Vertragsmanagement verwendet ein mehrstufiges Berechtigungssystem:

```
┌─────────────────────────────────────────────────────┐
│  1. System-Berechtigungen (Basis-Level)             │
│     ↓                                               │
│  2. Systemgruppen (ELIZA-Rollen)                    │
│     ↓                                               │
│  3. Ordner-Berechtigungen                           │
│     ↓                                               │
│  4. Sichtbarkeit (Normal vs. Geschützt)             │
│     ↓                                               │
│  5. Teams und Admins                                │
│     ↓                                               │
│  6. Organisationseinheiten                          │
└─────────────────────────────────────────────────────┘
```

## System-Berechtigungen (Basis-Berechtigungen)

### Standard Contract-Permissions

Jedes Model im Vertragsmanagement hat vier Basis-Permissions:

| Permission | Code | Beschreibung |
|------------|------|--------------|
| **Ansehen** | `contracts.view_contract` | Verträge anzeigen und lesen |
| **Hinzufügen** | `contracts.add_contract` | Neue Verträge erstellen |
| **Ändern** | `contracts.change_contract` | Bestehende Verträge bearbeiten |
| **Löschen** | `contracts.delete_contract` | Verträge löschen |

### Permissions nach Model

#### Verträge (Contract)

- `contracts.view_contract` - Verträge ansehen
- `contracts.add_contract` - Neue Verträge erstellen
- `contracts.change_contract` - Verträge bearbeiten
- `contracts.delete_contract` - Verträge löschen

#### Ordner (ContractFolder)

- `contracts.view_contractfolder` - Ordner ansehen
- `contracts.add_contractfolder` - Neue Ordner erstellen
- `contracts.change_contractfolder` - Ordner bearbeiten
- `contracts.delete_contractfolder` - Ordner löschen

#### Dateien (File)

- `contracts.view_file` - Dateien ansehen
- `contracts.add_file` - Dateien hochladen
- `contracts.change_file` - Dateien bearbeiten
- `contracts.delete_file` - Dateien löschen

#### Wertflüsse (Valueflow)

- `contracts.view_valueflow` - Wertflüsse ansehen
- `contracts.add_valueflow` - Wertflüsse erstellen
- `contracts.change_valueflow` - Wertflüsse bearbeiten
- `contracts.delete_valueflow` - Wertflüsse löschen

## Systemgruppen

ELIZA verwendet vordefinierte Systemgruppen, die Permissions bündeln.

### Contracts-Systemgruppen

#### 1. Contracts Admin (`contracts_admin`)

**Vollzugriff auf das Vertragsmanagement**

Permissions:

- Alle `view_*` Permissions
- Alle `add_*` Permissions
- Alle `change_*` Permissions
- Alle `delete_*` Permissions

**Anwendungsfälle:**

- Vertragsmanagement-Verantwortliche
- Geschäftsführung
- Rechtsabteilung

**Was du damit tun kannst:**

- ✅ Alle Ordner und Verträge sehen (inkl. geschützter)
- ✅ Ordner erstellen, bearbeiten, löschen
- ✅ Verträge erstellen, bearbeiten, löschen
- ✅ Ordner-Berechtigungen verwalten
- ✅ Teams und Admins zuweisen
- ✅ Sichtbarkeit konfigurieren

#### 2. Contracts User (`contracts_user`)

**Standard-Benutzerzugriff**

Permissions:

- `contracts.view_contract`
- `contracts.view_contractfolder`
- `contracts.add_contract`
- `contracts.change_contract`
- `contracts.view_file`
- `contracts.add_file`
- `contracts.view_valueflow`
- `contracts.add_valueflow`
- `contracts.change_valueflow`

**Anwendungsfälle:**

- Abteilungsleiter
- Projekt-/Vertragsverantwortliche
- Controlling

**Was du damit tun kannst:**

- ✅ Normale Ordner und Verträge sehen
- ✅ Verträge in zugänglichen Ordnern erstellen
- ✅ Verträge bearbeiten
- ✅ Dateien hochladen
- ✅ Wertflüsse hinzufügen und bearbeiten
- ❌ Keine Ordner erstellen/löschen
- ❌ Keine Verträge löschen
- ❌ Keine geschützten Ordner sehen (ausser als Team-Mitglied)

#### 3. Contracts Viewer (`contracts_viewer`)

**Nur Lese-Zugriff**

Permissions:

- `contracts.view_contract`
- `contracts.view_contractfolder`
- `contracts.view_file`
- `contracts.view_valueflow`

**Anwendungsfälle:**

- Controlling
- Geschäftsführung (nur Übersicht)
- Externe Prüfer

**Was du damit tun kannst:**

- ✅ Normale Ordner und Verträge ansehen
- ✅ Dateien herunterladen
- ✅ Wertflüsse ansehen
- ❌ Keine Bearbeitungs-Rechte
- ❌ Keine Erstellungs-Rechte
- ❌ Keine Lösch-Rechte

### Systemgruppen zuweisen

**Schritt-für-Schritt:**

1. Navigiere zu **Core** → **Benutzerverwaltung**
2. Wähle den Benutzer aus
3. Scrolle zu **Gruppen**
4. Wähle die gewünschte Contracts-Systemgruppe:
   - `contracts_admin` für Administratoren
   - `contracts_user` für Standard-Benutzer
   - `contracts_viewer` für Lesezugriff
5. Klicke auf **Speichern**

> **💡 Tipp:** Ein Benutzer kann mehrere Systemgruppen haben. Die Permissions werden kombiniert (additive Permissions).

## Ordner-Berechtigungen

### Ordner-basierte Zugriffskontrolle

**Jeder Ordner hat eigene Berechtigungen:**

- **Eigentümer** (owner): Ersteller des Ordners
- **Team**: Benutzer mit Zugriff auf den Ordner
- **Admins**: Benutzer mit Verwaltungsrechten für den Ordner
- **Sichtbarkeit**: Normal oder Geschützt
- **Organisationseinheiten**: Zugriff nach Orgunit

### Sichtbarkeit: Normal vs. Geschützt

**Normale Ordner (visibility = "normal")**

Alle Benutzer mit `view_contractfolder` Permission können normale Ordner sehen.

**Vorteile:**

- ✅ Einfache Verwaltung
- ✅ Transparenz im Unternehmen
- ✅ Keine Zugriffsprobleme

**Nachteile:**

- ❌ Alle sehen alle Verträge
- ❌ Keine Vertraulichkeit

**Anwendungsfälle:**

- Standard-Lieferantenverträge
- Allgemeine Kundenverträge
- Öffentliche Rahmenverträge

**Geschützte Ordner (visibility = "protected")**

Nur bestimmte Benutzergruppen können geschützte Ordner sehen:

**Wer darf geschützte Ordner sehen:**

1. **Ordner-Eigentümer**: Der Ersteller des Ordners
2. **Ordner-Admins**: Explizit als Admin hinzugefügte Benutzer
3. **Ordner-Team**: Explizit als Team-Mitglied hinzugefügte Benutzer
4. **Organisations-Mitglieder**: Benutzer der zugewiesenen Orgunits
5. **Superuser**: Haben immer Zugriff

**Vorteile:**

- ✅ Vertraulichkeit
- ✅ Zugriffskontrolle
- ✅ Compliance

**Nachteile:**

- ❌ Komplexere Verwaltung
- ❌ Team-Mitglieder müssen explizit hinzugefügt werden

**Anwendungsfälle:**

- Geschäftsführungs-Verträge
- Sensible Lieferantenverträge
- Personalverträge
- M&A-Verträge

### Ordner-Teams

**Team-Mitglieder hinzufügen:**

1. Öffne den Ordner
2. Klicke auf **"Team verwalten"**
3. Wähle Benutzer aus
4. Speichere

**Was Team-Mitglieder können:**

- ✅ Ordner sehen (auch wenn geschützt)
- ✅ Verträge im Ordner sehen
- ✅ Verträge bearbeiten (wenn `change_contract` Permission)
- ✅ Neue Verträge erstellen (wenn `add_contract` Permission)
- ❌ Keine Ordner-Einstellungen ändern

### Ordner-Admins

**Admins hinzufügen:**

1. Öffne den Ordner
2. Klicke auf **"Admins verwalten"**
3. Wähle Benutzer aus (nur aus Team-Mitgliedern)
4. Speichere

**Was Ordner-Admins können:**

- ✅ Alles was Team-Mitglieder können
- ✅ Ordner-Einstellungen ändern
- ✅ Team-Mitglieder hinzufügen/entfernen
- ✅ Andere Admins hinzufügen/entfernen
- ✅ Sichtbarkeit ändern
- ✅ Unterordner erstellen und verwalten

**Wichtig:** Admins müssen zuerst Team-Mitglieder sein!

### Berechtigungsvererbung

**Unterordner können Berechtigungen erben:**

**Option: "Berechtigungen von übergeordnetem Ordner übernehmen"**

Wenn aktiviert:

- ✅ Admins des Eltern-Ordners werden zu Admins des Unterordners
- ✅ Team des Eltern-Ordners wird zu Team des Unterordners
- ✅ Sichtbarkeit wird geerbt
- ✅ Organisationseinheiten werden geerbt

**Vorteile:**

- ✅ Einfache Verwaltung
- ✅ Konsistente Berechtigungen
- ✅ Weniger Aufwand

**Nachteile:**

- ❌ Weniger Flexibilität
- ❌ Unterordner-spezifische Berechtigungen nicht möglich

**Beispiel mit Vererbung:**

```
📁 Hauptordner (Team: Max, Anna | Admins: Max)
   ├─ 📁 Unterordner 1 (erbt: Team: Max, Anna | Admins: Max)
   └─ 📁 Unterordner 2 (erbt: Team: Max, Anna | Admins: Max)
```

**Beispiel ohne Vererbung:**

```
📁 Hauptordner (Team: Max, Anna | Admins: Max)
   ├─ 📁 Unterordner 1 (eigenes Team: Peter | Admins: Peter)
   └─ 📁 Unterordner 2 (eigenes Team: Maria | Admins: Maria)
```

## Organisationseinheiten

### Orgunit-basierte Berechtigungen

**Ordner können Organisationseinheiten zugewiesen werden:**

**Verantwortliche Organisationseinheit:**

- Definiert, welche Orgunit für den Ordner verantwortlich ist
- Benutzer dieser Orgunit erhalten automatisch Zugriff

**Zugewiesene Organisationseinheiten:**

- Mehrere Orgunits können Zugriff erhalten
- Alle Mitglieder der zugewiesenen Orgunits sehen den Ordner

**Beispiel:**

```
📁 IT-Verträge
   Verantwortliche Orgunit: IT-Abteilung
   Zugewiesene Orgunits: IT-Abteilung, Finanzen

   → Alle IT-Mitarbeiter sehen den Ordner
   → Alle Finanz-Mitarbeiter sehen den Ordner
```

### Orgunits bei Verträgen

**Verträge erben Organisationseinheiten vom Ordner:**

Wenn ein Vertrag im Ordner erstellt wird:

- ✅ Verantwortliche Orgunit wird vom Ordner übernommen
- ✅ Zugewiesene Orgunits werden vom Ordner übernommen

**Kann nachträglich geändert werden:**

- Vertrag öffnen → Bearbeiten → Organisationseinheiten anpassen

## Berechtigungs-Kombinationen

### Häufige Szenarien

#### Szenario 1: Allgemeine Lieferantenverträge

**Anforderung:** Alle Mitarbeiter sollen Lieferantenverträge sehen können.

**Lösung:**

1. Ordner: **"Lieferantenverträge"**
2. Sichtbarkeit: **Normal**
3. Team: Keine spezifische Zuweisung nötig
4. Admins: Einkaufsleiter
5. Verantwortliche Orgunit: Einkauf

**Ergebnis:**

- ✅ Alle mit `view_contract` sehen den Ordner
- ✅ Einkaufsleiter kann Ordner verwalten
- ✅ Einfache Verwaltung

#### Szenario 2: Geschützte GF-Verträge

**Anforderung:** Nur Geschäftsführung darf sensible Verträge sehen.

**Lösung:**

1. Ordner: **"Geschäftsführung"**
2. Sichtbarkeit: **Geschützt**
3. Team: Max Muster (GF), Anna Meier (GF)
4. Admins: Max Muster
5. Verantwortliche Orgunit: Geschäftsführung

**Ergebnis:**

- ✅ Nur GF-Team sieht den Ordner
- ✅ Andere Mitarbeiter sehen den Ordner nicht
- ✅ Vertraulichkeit gewährleistet

#### Szenario 3: Abteilungs-spezifische Verträge

**Anforderung:** Jede Abteilung verwaltet eigene Verträge.

**Lösung:**

1. Hauptordner: **"Verträge"**
2. Unterordner: **"IT-Verträge"**, **"HR-Verträge"**, **"Marketing-Verträge"**
3. Sichtbarkeit: **Normal** (oder **Geschützt** je nach Bedarf)
4. Verantwortliche Orgunit: IT, HR, Marketing (jeweils)
5. Zugewiesene Orgunits: Entsprechende Abteilung

**Ergebnis:**

- ✅ Klare Zuständigkeiten
- ✅ Orgunit-Mitglieder sehen ihre Verträge
- ✅ Übersichtliche Struktur

#### Szenario 4: Vererbung für Unterordner

**Anforderung:** Alle Lieferantenverträge sollen gleiche Berechtigungen haben.

**Lösung:**

1. Hauptordner: **"Lieferantenverträge"**
2. Team: Einkauf-Team
3. Admins: Einkaufsleiter
4. Unterordner mit **"Berechtigungen erben"** aktiviert

**Ergebnis:**

- ✅ Alle Unterordner haben gleiche Berechtigungen
- ✅ Einfache Verwaltung
- ✅ Konsistente Zugriffskontrolle

## Berechtigungen prüfen

### Als Benutzer

**Deine eigenen Berechtigungen prüfen:**

1. Klicke auf **Dein Profil** (oben rechts)
2. Wähle **Mein Profil**
3. Scrolle zu **Gruppen und Berechtigungen**
4. Prüfe:
   - Welche **Systemgruppen** du hast
   - Welche **Orgunit** du hast
   - Welche **Contracts-Permissions** du hast

**Schnell-Test:**

- Siehst du den Button **"+ Neuer Ordner"**? → Du hast `add_contractfolder`
- Siehst du **"Bearbeiten"** bei Verträgen? → Du hast `change_contract`
- Siehst du nur **"Ansehen"**? → Du hast nur `view_*` Permissions

### Als Administrator

**Berechtigungen anderer Benutzer prüfen:**

1. Navigiere zu **Core** → **Benutzerverwaltung**
2. Wähle den Benutzer
3. Prüfe:
   - **Gruppen**: Welche Systemgruppen hat der Benutzer?
   - **Orgunit**: Welcher Orgunit gehört der Benutzer an?
   - **Team-Mitgliedschaften**: In welchen Ordner-Teams ist er?

### Berechtigungen testen

**Test-Vorgehen:**

1. **Als Testbenutzer einloggen**
2. **Vertragsmanagement öffnen**
3. **Prüfen:**
   - Welche Ordner sind sichtbar?
   - Welche Buttons sind verfügbar?
   - Kann ich Verträge erstellen/bearbeiten?

## Häufige Probleme und Lösungen

### Problem: Benutzer sieht keinen Ordner

**Mögliche Ursachen:**

1. **Geschützter Ordner**
   - **Lösung:** Benutzer zum Team hinzufügen

2. **Keine View-Permission**
   - **Lösung:** Systemgruppe `contracts_user` zuweisen

3. **Falsche Orgunit**
   - **Lösung:** Benutzer der richtigen Orgunit zuweisen oder Ordner der Benutzer-Orgunit zuweisen

### Problem: Benutzer kann keine Verträge erstellen

**Mögliche Ursachen:**

1. **Nur View-Permission**
   - **Lösung:** Systemgruppe auf `contracts_user` upgraden

2. **Kein Team-Mitglied**
   - **Lösung:** Benutzer zum Ordner-Team hinzufügen

### Problem: Benutzer sieht zu viele Ordner

**Ursache:** Normale Sichtbarkeit für alle Ordner

**Lösung:**

- Sensible Ordner auf "Geschützt" setzen
- Teams korrekt konfigurieren

### Problem: Admin kann Ordner nicht bearbeiten

**Ursache:** Benutzer ist nicht Ordner-Admin

**Lösung:**

- Als Ordner-Eigentümer oder Superuser: Benutzer zu Ordner-Admins hinzufügen
- Benutzer muss erst Team-Mitglied sein

## Best Practices

### ✅ Empfehlungen

**1. Minimale Berechtigungen:**

- Gib nur die Rechte, die wirklich benötigt werden
- Standard: `contracts_user` für die meisten
- Admin-Rechte nur für Verantwortliche

**2. Geschützte Ordner für sensible Verträge:**

- Geschäftsführungs-Verträge
- Personalverträge
- M&A-Verträge

**3. Vererbung nutzen:**

- Aktiviere Vererbung für konsistente Unterordner
- Spart Zeit bei der Verwaltung

**4. Organisationseinheiten konsequent nutzen:**

- Ordne Ordner den richtigen Orgunits zu
- Nutze Orgunit-basierte Zugriffsrechte

**5. Regelmässige Reviews:**

- Prüfe vierteljährlich alle Berechtigungen
- Entferne alte Mitarbeiter aus Teams

**6. Dokumentation:**

- Halte fest, welcher Ordner welche Berechtigungen haben soll
- Definiere Richtlinien für geschützte Ordner

### ❌ Häufige Fehler

**1. Zu viele Admins:**

- Nicht jeden zum `contracts_admin` machen
- Ordner-Admins reichen oft aus

**2. Keine geschützten Ordner:**

- Sensible Verträge sollten geschützt sein
- Compliance-Anforderungen beachten

**3. Vererbung nicht nutzen:**

- Führt zu inkonsistenten Berechtigungen
- Mehr Verwaltungsaufwand

**4. Vergessene Benutzer:**

- Alte Mitarbeiter in Teams vergessen
- Zugriff nicht entzogen

**5. Keine Dokumentation:**

- Berechtigungskonzept nicht schriftlich festgehalten
- Unklarheiten bei Nachfragen

## Zusammenfassung

### Berechtigungsebenen

1. **System-Berechtigungen:** Basis-Rechte (View, Add, Change, Delete)
2. **Systemgruppen:** Vordefinierte Rollen (`contracts_admin`, `contracts_user`, `contracts_viewer`)
3. **Ordner-Berechtigungen:** Team, Admins, Sichtbarkeit
4. **Organisationseinheiten:** Orgunit-basierter Zugriff

### Wichtige Punkte

- 🔐 **Sichtbarkeit:** Normal vs. Geschützt kontrolliert den Zugriff
- 👥 **Teams:** Definieren wer auf Ordner zugreifen darf
- 👑 **Admins:** Können Ordner verwalten (müssen zuerst Team-Mitglieder sein)
- 🌳 **Vererbung:** Unterordner können Berechtigungen erben
- 🏢 **Orgunits:** Automatischer Zugriff basierend auf Organisationseinheit

## Nächste Schritte

- Lies [Kapitel 6: Vorlagen]({{< ref "06-vorlagen" >}}) für effiziente Vertragserstellung
- Lies [Kapitel 8: Best Practices]({{< ref "08-best-practices" >}}) für Empfehlungen

---

**Bei Fragen zum Berechtigungskonzept wende dich an deinen ELIZA-Administrator!**
