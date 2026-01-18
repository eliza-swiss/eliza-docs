---
title: "Berechtigungskonzept"
description: ""
weight: "6"
tags:
  - "permissions"
  - "security"
  - "admin"
  - "crm"
---


# Berechtigungskonzept

In diesem Kapitel lernst du, wie das Berechtigungssystem im CRM-Modul funktioniert und wie du Zugriffsrechte für Benutzer und Teams konfigurierst.

## Überblick

Das CRM-Modul verwendet das ELIZA-Berechtigungssystem in Kombination mit Systemgruppen, Spaces und Organisationseinheiten (Orgunits).

### Berechtigungsebenen

```
┌─────────────────────────────────────────────────────┐
│  1. System-Berechtigungen (Basis-Level)             │
│     ↓                                               │
│  2. Systemgruppen (ELIZA-Rollen)                    │
│     ↓                                               │
│  3. Spaces (Team-basierte Berechtigung)             │
│     ↓                                               │
│  4. Orgunits (Abteilungs-basierte Berechtigung)     │
└─────────────────────────────────────────────────────┘
```

## System-Berechtigungen (Basis-Berechtigungen)

### Standard CRM-Permissions

Jedes Model im CRM hat vier Basis-Permissions:

| Permission | Code | Beschreibung |
|------------|------|--------------|
| **Ansehen** | `crm.view_contact` | Kontakte anzeigen und lesen |
| **Hinzufügen** | `crm.add_contact` | Neue Kontakte erstellen |
| **Ändern** | `crm.change_contact` | Bestehende Kontakte bearbeiten |
| **Löschen** | `crm.delete_contact` | Kontakte löschen |

### Permissions nach Model

#### Kontakte (Contact)

- `crm.view_contact` - Kontakte ansehen
- `crm.add_contact` - Neue Kontakte erstellen
- `crm.change_contact` - Kontakte bearbeiten
- `crm.delete_contact` - Kontakte löschen

#### Organisationen (Organisation)

- `crm.view_organisation` - Organisationen ansehen
- `crm.add_organisation` - Neue Organisationen erstellen
- `crm.change_organisation` - Organisationen bearbeiten
- `crm.delete_organisation` - Organisationen löschen

#### Labels

- `crm.view_label` - Labels ansehen
- `crm.add_label` - Neue Labels erstellen
- `crm.change_label` - Labels bearbeiten
- `crm.delete_label` - Labels löschen

#### Rollen (Role)

- `crm.view_role` - Rollen ansehen
- `crm.add_role` - Neue Rollen erstellen
- `crm.change_role` - Rollen bearbeiten
- `crm.delete_role` - Rollen löschen

#### Beteiligungen (Participation)

- `crm.view_participation` - Beteiligungen ansehen
- `crm.add_participation` - Neue Beteiligungen erstellen
- `crm.change_participation` - Beteiligungen bearbeiten
- `crm.delete_participation` - Beteiligungen löschen

## Systemgruppen

ELIZA verwendet vordefinierte Systemgruppen, die Permissions bündeln.

### CRM-Systemgruppen

#### 1. CRM Admin (`crm_admin`)

**Vollzugriff auf das CRM-Modul**

Permissions:
- Alle `view_*` Permissions
- Alle `add_*` Permissions
- Alle `change_*` Permissions
- Alle `delete_*` Permissions

**Anwendungsfälle:**
- CRM-Verantwortliche
- Marketing-Leiter
- Vertriebsleiter

**Was du damit tun kannst:**
- ✅ Alle Kontakte und Organisationen sehen
- ✅ Kontakte und Organisationen erstellen, bearbeiten, löschen
- ✅ Labels und Rollen verwalten
- ✅ Beteiligungen erstellen und verwalten
- ✅ System-Konfiguration vornehmen

#### 2. CRM User (`crm_user`)

**Standard-Benutzerzugriff**

Permissions:
- `crm.view_contact`
- `crm.view_organisation`
- `crm.add_contact`
- `crm.add_organisation`
- `crm.change_contact`
- `crm.change_organisation`
- `crm.view_label`
- `crm.add_label`
- `crm.view_role`
- `crm.add_participation`
- `crm.change_participation`

**Anwendungsfälle:**
- Vertriebsmitarbeiter
- Marketing-Mitarbeiter
- Projektmanager

**Was du damit tun kannst:**
- ✅ Kontakte und Organisationen sehen
- ✅ Neue Kontakte und Organisationen erstellen
- ✅ Bestehende Einträge bearbeiten
- ✅ Labels zur Kategorisierung nutzen
- ✅ Beteiligungen erstellen
- ❌ Keine Lösch-Rechte
- ❌ Keine Rollen-Verwaltung

#### 3. CRM Viewer (`crm_viewer`)

**Nur Lese-Zugriff**

Permissions:
- `crm.view_contact`
- `crm.view_organisation`
- `crm.view_label`
- `crm.view_role`
- `crm.view_participation`

**Anwendungsfälle:**
- Controlling
- Geschäftsführung
- Reporting-Zugriff

**Was du damit tun kannst:**
- ✅ Alle Kontakte und Organisationen sehen
- ✅ Beteiligungen anzeigen
- ❌ Keine Bearbeitungs-Rechte
- ❌ Keine Erstellungs-Rechte
- ❌ Keine Lösch-Rechte

### Systemgruppen zuweisen

**Schritt-für-Schritt:**

1. Navigiere zu **Core** → **Benutzerverwaltung**
2. Wähle den Benutzer aus
3. Scrolle zu **Gruppen**
4. Wähle die gewünschte CRM-Systemgruppe:
   - `crm_admin` für Administratoren
   - `crm_user` für Standard-Benutzer
   - `crm_viewer` für Lesezugriff
5. Klicke auf **Speichern**

> **💡 Tipp:** Ein Benutzer kann mehrere Systemgruppen haben. Die Permissions werden kombiniert (additive Permissions).

## Spaces (Team-basierte Berechtigungen)

Spaces ermöglichen team-basierte Zugriffskontrolle auf Objekte.

### Was sind Spaces?

Ein Space ist ein virtueller Bereich, dem:
- **Benutzer** zugewiesen werden können
- **Objekte** (Kontakte, Organisationen) zugeordnet werden können

**Prinzip:** Nur Benutzer im gleichen Space können die zugeordneten Objekte sehen.

### Space-Konzept im CRM

```
Space "Vertrieb Deutschland"
├── Benutzer:
│   ├── Hans Müller (Vertriebsleiter)
│   ├── Maria Schmidt (Vertrieb)
│   └── Peter Wagner (Vertrieb)
└── Objekte:
    ├── Kontakte: Deutsche Kunden
    └── Organisationen: Deutsche Unternehmen

Space "Vertrieb Schweiz"
├── Benutzer:
│   ├── Thomas Meier (Vertriebsleiter)
│   └── Anna Schneider (Vertrieb)
└── Objekte:
    ├── Kontakte: Schweizer Kunden
    └── Organisationen: Schweizer Unternehmen
```

**Ergebnis:**
- Hans Müller sieht nur deutsche Kontakte
- Thomas Meier sieht nur schweizer Kontakte
- Keine Überschneidungen

### Spaces verwenden

> **⚠️ Wichtig:** Space-Verwaltung erfordert Administrator-Rechte.

**Objekte einem Space zuordnen:**

1. Öffne den Kontakt oder die Organisation
2. Scrolle zu **Space-Zuordnung**
3. Wähle den gewünschten Space
4. Speichere

**Benutzer einem Space zuweisen:**

1. Navigiere zu **Core** → **Benutzerverwaltung**
2. Wähle den Benutzer
3. Weise den Space zu
4. Speichere

### Best Practices für Spaces

✅ **Empfehlungen:**

1. **Regionale Trennung:** Nutze Spaces für geografische Bereiche (DE, CH, AT)
2. **Abteilungs-Trennung:** Separate Spaces für Marketing, Vertrieb, Support
3. **Projekt-basiert:** Eigene Spaces für große Projekte oder Kunden
4. **Klare Benennung:** Verwende eindeutige Space-Namen (`Vertrieb_DE`, `Marketing_CH`)

❌ **Vermeide:**

1. **Zu viele Spaces:** Nicht mehr als 5-10 Spaces pro Organisation
2. **Überlappende Spaces:** Klare Zuständigkeiten definieren
3. **Inkonsistente Nutzung:** Entweder konsequent nutzen oder gar nicht

## Orgunits (Organisationseinheiten)

Organisationseinheiten ermöglichen hierarchische Zugriffskontrolle basierend auf Abteilungsstrukturen.

### Was sind Orgunits?

Orgunits bilden die Organisationsstruktur ab:

```
Unternehmen
├── Geschäftsführung
├── Vertrieb
│   ├── Vertrieb Deutschland
│   └── Vertrieb Schweiz
├── Marketing
└── IT
```

### Orgunit-basierte Berechtigungen im CRM

**Prinzip:** Benutzer sehen nur Kontakte/Organisationen, die ihrer Orgunit oder untergeordneten Orgunits zugeordnet sind.

**Beispiel:**

```
Benutzer: Hans Müller (Orgunit: Vertrieb Deutschland)
↓
Sieht Kontakte von:
- Vertrieb Deutschland ✅
- Untergeordnete Orgunits von Vertrieb Deutschland ✅
- Andere Orgunits (z.B. Vertrieb Schweiz) ❌
```

### Orgunits im CRM verwenden

**Kontakte/Organisationen einer Orgunit zuordnen:**

1. Öffne den Kontakt oder die Organisation
2. Wähle das Feld **Organisationseinheit**
3. Wähle die passende Orgunit aus
4. Speichere

**Best Practices:**

- ✅ Ordne neue Kontakte sofort einer Orgunit zu
- ✅ Verwende die Orgunit-Hierarchie konsequent
- ✅ Prüfe regelmäßig die Zuordnung

## Eigentümer-Rechte

Im CRM gibt es kein explizites Eigentümer-Konzept wie im DMS. Alle berechtigten Benutzer können Kontakte und Organisationen sehen und bearbeiten.

### Verantwortlichkeiten über Beteiligungen

Statt Eigentümer-Rechten werden **Beteiligungen mit Rollen** verwendet:

**Beispiel:**

```
Kontakt: Max Mustermann
↓
Beteiligungen:
- Hans Müller, Rolle: "Verantwortlicher Vertrieb"
- Maria Schmidt, Rolle: "Account Manager"
```

**Vorteile:**
- Transparenz über Verantwortlichkeiten
- Mehrere Personen können verantwortlich sein
- Flexible Rollen-Definition

## Berechtigungs-Kombinationen

### Häufige Szenarien

#### Szenario 1: Vertriebsmitarbeiter mit regionalem Zugriff

**Anforderung:** Vertriebsmitarbeiter soll nur deutsche Kunden sehen

**Lösung:**
1. Systemgruppe: `crm_user`
2. Space: `Vertrieb_Deutschland`
3. Orgunit: `Vertrieb / Deutschland`

**Ergebnis:**
- ✅ Kann deutsche Kontakte sehen und bearbeiten
- ❌ Sieht keine schweizer Kontakte
- ✅ Kann neue deutsche Kontakte erstellen

#### Szenario 2: Marketing-Manager mit Vollzugriff

**Anforderung:** Marketing-Leiter soll alle Kontakte sehen und verwalten können

**Lösung:**
1. Systemgruppe: `crm_admin`
2. Space: Alle Spaces oder kein Space-Filter
3. Orgunit: Hauptorgunit (oberste Ebene)

**Ergebnis:**
- ✅ Sieht alle Kontakte und Organisationen
- ✅ Kann alles erstellen, bearbeiten, löschen
- ✅ Kann Labels und Rollen verwalten

#### Szenario 3: Controlling mit Lesezugriff

**Anforderung:** Controlling soll alle Kontakte sehen, aber nichts ändern

**Lösung:**
1. Systemgruppe: `crm_viewer`
2. Space: Alle Spaces
3. Orgunit: Hauptorgunit

**Ergebnis:**
- ✅ Sieht alle Kontakte und Organisationen
- ✅ Kann Berichte erstellen
- ❌ Kann nichts bearbeiten oder löschen

## Berechtigungen prüfen

### Als Benutzer

**Deine eigenen Berechtigungen prüfen:**

1. Klicke auf **Dein Profil** (oben rechts)
2. Wähle **Mein Profil**
3. Scrolle zu **Gruppen und Berechtigungen**
4. Prüfe:
   - Welche **Systemgruppen** du hast
   - Welche **Spaces** du zugeordnet bist
   - Welche **Orgunit** du hast

### Als Administrator

**Berechtigungen anderer Benutzer prüfen:**

1. Navigiere zu **Core** → **Benutzerverwaltung**
2. Wähle den Benutzer
3. Prüfe:
   - **Gruppen**: Welche Systemgruppen hat der Benutzer?
   - **Spaces**: Welche Spaces sind zugeordnet?
   - **Orgunit**: Welcher Orgunit gehört der Benutzer an?

### Berechtigungen testen

**Test-Vorgehen:**

1. **Als Testbenutzer einloggen**
2. **CRM-Modul öffnen**
3. **Prüfen:**
   - Welche Kontakte sind sichtbar?
   - Welche Buttons sind verfügbar? (Erstellen, Bearbeiten, Löschen)
   - Welche Menüpunkte sind sichtbar?

## Häufige Probleme und Lösungen

### Problem: Benutzer sieht keine Kontakte

**Mögliche Ursachen:**

1. **Keine View-Permission**
   - **Lösung:** Systemgruppe `crm_user` oder `crm_viewer` zuweisen

2. **Falscher Space**
   - **Lösung:** Benutzer dem richtigen Space zuweisen oder Kontakte dem Space des Benutzers zuordnen

3. **Falsche Orgunit**
   - **Lösung:** Benutzer oder Kontakte der passenden Orgunit zuordnen

### Problem: Benutzer kann Kontakte nicht bearbeiten

**Mögliche Ursachen:**

1. **Nur View-Permission**
   - **Lösung:** Systemgruppe auf `crm_user` upgraden

2. **Viewer-Rolle**
   - **Lösung:** Von `crm_viewer` auf `crm_user` wechseln

### Problem: Benutzer sieht zu viele Kontakte

**Mögliche Ursachen:**

1. **Kein Space-Filter aktiv**
   - **Lösung:** Benutzer einem Space zuweisen und sicherstellen, dass nur relevante Kontakte diesem Space zugeordnet sind

2. **Zu hohe Orgunit**
   - **Lösung:** Benutzer einer spezifischeren Orgunit zuweisen

### Problem: Admin sieht nicht alle Kontakte

**Ursache:** Auch Admins unterliegen Space- und Orgunit-Filtern

**Lösung:**
1. Admin allen relevanten Spaces zuweisen
2. Admin der obersten Orgunit zuweisen
3. Oder: Admin-Benutzer von Filtern ausnehmen (benötigt Superuser-Rechte)

## Best Practices

### ✅ Empfehlungen

1. **Minimale Berechtigungen:** Gib nur die Berechtigungen, die wirklich benötigt werden
2. **Systemgruppen nutzen:** Verwende Systemgruppen statt individueller Permissions
3. **Spaces konsistent verwenden:** Entscheide dich für eine Space-Strategie und bleibe dabei
4. **Regelmäßige Reviews:** Prüfe vierteljährlich alle Berechtigungen
5. **Dokumentation:** Halte fest, welche Rolle welche Berechtigungen haben soll
6. **Testen:** Teste neue Berechtigungen mit Testbenutzern

### ❌ Häufige Fehler

1. **Zu viele Admins:** Nicht jeden zum `crm_admin` machen
2. **Keine Spaces verwenden:** Spaces bieten wichtige Abgrenzungen
3. **Inkonsistente Zuordnung:** Kontakte ohne Space/Orgunit-Zuordnung
4. **Vergessene Benutzer:** Alte Mitarbeiter-Accounts nicht deaktiviert
5. **Keine Dokumentation:** Berechtigungskonzept nicht schriftlich festgehalten

## Zusammenfassung

### Drei Berechtigungsebenen

1. **System-Berechtigungen:** Basis-Rechte (View, Add, Change, Delete)
2. **Systemgruppen:** Vordefinierte Rollen (`crm_admin`, `crm_user`, `crm_viewer`)
3. **Spaces & Orgunits:** Fein-granulare Zugriffskontrolle

### Wichtige Punkte

- 🔐 **Sicherheit:** Verwende minimale Berechtigungen
- 👥 **Systemgruppen:** Nutze vordefinierte Gruppen statt einzelner Permissions
- 🏢 **Spaces:** Ermöglichen team-basierte Trennung
- 🌳 **Orgunits:** Ermöglichen hierarchische Berechtigungen
- 📋 **Beteiligungen:** Zeigen Verantwortlichkeiten (kein Eigentümer-Konzept)

## Nächste Schritte

- Lies [Integration mit anderen Modulen]({{< ref "05-integration" >}}) für modul-übergreifende Berechtigungen
- Konsultiere deinen ELIZA-Administrator für spezifische Berechtigungsfragen
- Teste deine Berechtigungen regelmäßig

## Häufige Fragen (FAQ)

### Wer kann CRM-Berechtigungen verwalten?

Nur Benutzer mit Superuser-Rechten oder der Permission `auth.change_user` können Berechtigungen vergeben.

### Kann ich eigene Systemgruppen erstellen?

Ja, aber es wird empfohlen, die vordefinierten Systemgruppen zu verwenden. Eigene Gruppen sollten über die Admin-Oberfläche erstellt werden.

### Was passiert wenn ein Benutzer mehrere Systemgruppen hat?

Die Permissions werden kombiniert (additive Permissions). Ein Benutzer mit `crm_viewer` UND `crm_user` hat alle Rechte von `crm_user`.

### Wie funktionieren Berechtigungen bei Beteiligungen?

Beteiligungen haben keine eigenen Berechtigungen. Die Berechtigung zum Erstellen/Ändern von Beteiligungen wird über die Systemgruppe gesteuert.

### Können Kontakte geschützt werden?

Nein, im CRM gibt es keine geschützten Kontakte. Verwende Spaces oder Orgunits für Zugriffsbeschränkungen.

### Wie erhalte ich mehr Rechte im CRM?

Kontaktiere deinen ELIZA-Administrator und begründe, warum du erweiterte Rechte benötigst.

---

**Bei Fragen zum Berechtigungskonzept wende dich an deinen ELIZA-Administrator!**
