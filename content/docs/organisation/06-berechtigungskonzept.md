---
title: "Berechtigungskonzept"
description: ""
weight: "6"
tags:
  - "berechtigungen"
  - "rollen"
  - "gruppen"
  - "sicherheit"
  - "admin"
---


# Berechtigungskonzept

Das Organisation-Modul verfügt über ein differenziertes Berechtigungssystem. In diesem Kapitel lernst du die verschiedenen Berechtigungsebenen kennen.

## Überblick der Berechtigungsebenen

Das Berechtigungssystem des Organisation-Moduls arbeitet auf mehreren Ebenen:

<pre>
┌─────────────────────────────────────────────────────────────┐
│  1. System-Berechtigungen (Basis-Ebene)                     │
│     ↓                                                       │
│  2. Systemgruppen (ELIZA-Rollen)                            │
│     ↓                                                       │
│  3. Lokale Berechtigungen (Orgunit-Admin, HR-Admin)         │
│     ↓                                                       │
│  4. Objektberechtigungen (Vorgesetzter, Eigene Daten)       │
└─────────────────────────────────────────────────────────────┘
</pre>

## System-Berechtigungen

Die Basis-Berechtigungen für das Organisation-Modul:

### Mitarbeitende

| Berechtigung | Beschreibung |
|--------------|--------------|
| `organisation.view_mitarbeitende` | Mitarbeitende ansehen |
| `organisation.add_mitarbeitende` | Mitarbeitende hinzufügen |
| `organisation.change_mitarbeitende` | Mitarbeitende bearbeiten |
| `organisation.delete_mitarbeitende` | Mitarbeitende löschen |

### Private Daten (Spezial-Berechtigungen)

| Berechtigung | Beschreibung |
|--------------|--------------|
| `organisation.view_private_data` | Private Daten ansehen |
| `organisation.change_private_data` | Private Daten bearbeiten |

### Organisationseinheiten

| Berechtigung | Beschreibung |
|--------------|--------------|
| `organisation.view_orgunit` | Organisationseinheiten ansehen |
| `organisation.add_orgunit` | Organisationseinheiten hinzufügen |
| `organisation.change_orgunit` | Organisationseinheiten bearbeiten |
| `organisation.delete_orgunit` | Organisationseinheiten löschen |

### Mitgliedschaften

| Berechtigung | Beschreibung |
|--------------|--------------|
| `organisation.view_membership` | Mitgliedschaften ansehen |
| `organisation.add_membership` | Mitgliedschaften hinzufügen |
| `organisation.change_membership` | Mitgliedschaften bearbeiten |
| `organisation.delete_membership` | Mitgliedschaften löschen |

### Funktionen

| Berechtigung | Beschreibung |
|--------------|--------------|
| `organisation.view_funktionen` | Funktionen ansehen |
| `organisation.add_funktionen` | Funktionen hinzufügen |
| `organisation.change_funktionen` | Funktionen bearbeiten |
| `organisation.delete_funktionen` | Funktionen löschen |

### Skills

| Berechtigung | Beschreibung |
|--------------|--------------|
| `organisation.view_skills` | Skills ansehen |
| `organisation.add_skills` | Skills hinzufügen |
| `organisation.change_skills` | Skills bearbeiten |
| `organisation.delete_skills` | Skills löschen |

### HR-Dateien

| Berechtigung | Beschreibung |
|--------------|--------------|
| `organisation.view_hrfile` | HR-Dateien ansehen |
| `organisation.add_hrfile` | HR-Dateien hinzufügen |
| `organisation.change_hrfile` | HR-Dateien bearbeiten |
| `organisation.delete_hrfile` | HR-Dateien löschen |

### Weiterbildungen

| Berechtigung | Beschreibung |
|--------------|--------------|
| `organisation.view_weiterbildungen` | Weiterbildungen ansehen |
| `organisation.add_weiterbildungen` | Weiterbildungen hinzufügen |
| `organisation.change_weiterbildungen` | Weiterbildungen bearbeiten |
| `organisation.delete_weiterbildungen` | Weiterbildungen löschen |

## Systemgruppen

ELIZA definiert drei Systemgruppen für das Organisation-Modul:

### organisation_users

**Beschreibung:** Basis-Lesezugriff auf Organisationsdaten

**Berechtigungen:**
- `view_funktionen` – Funktionen ansehen
- `view_jobdescription` – Stellenbeschreibungen ansehen
- `view_membership` – Mitgliedschaften ansehen
- `view_mitarbeitende` – Mitarbeitende ansehen
- `view_orgunit` – Organisationseinheiten ansehen
- `view_orgunittype` – Organisationsarten ansehen

**Typische Benutzer:** Alle Mitarbeitende mit ELIZA-Zugang

### organisation_admin

**Beschreibung:** Vollzugriff auf alle Organisationsdaten

**Berechtigungen:** Alle `add_`, `change_`, `delete_`, `view_` Berechtigungen für:
- Kostenstellen
- Funktionen
- Stellenbeschreibungen
- Mitgliedschaften
- Mitarbeitende (inkl. private Daten)
- Memos
- Mitwirkungen
- Organisationseinheiten und -arten
- Qualifikationen
- Anstellungsverhältnisse
- Skills und Skill-Kategorien
- Arbeitszeitabrechnungen
- Weiterbildungen
- Kriterien und Kriterienarten

**Typische Benutzer:** HR-Leitung, Administratoren

### organisation_hrfiles_admin

**Beschreibung:** Verwaltung von HR-Dokumenten und Dokumentarten

**Berechtigungen:**
- HR-Dateien verwalten
- HR-Dokumentarten verwalten

**Typische Benutzer:** HR-Sachbearbeiter für Dokumentenverwaltung

## Lokale Berechtigungen

Zusätzlich zu den globalen Berechtigungen gibt es lokale Berechtigungen pro Organisationseinheit.

### Orgunit-Admins

Jede Organisationseinheit kann eigene Administratoren haben:

**So weist du Admins zu:**

1. Öffne die Organisationseinheit
2. Klicke auf **"Bearbeiten"**
3. Füge Benutzer unter **"Admins"** hinzu
4. Speichere

**Berechtigungen von Orgunit-Admins:**

| Berechtigung | Beschreibung |
|--------------|--------------|
| Mitarbeitende bearbeiten | Alle Mitglieder der Einheit |
| Mitgliedschaften verwalten | In dieser Einheit |
| Untergeordnete Einheiten | Administrieren |

> **💡 Tipp:** Orgunit-Admins können Mitarbeitende ihrer Einheit verwalten, auch ohne globale Admin-Rechte.

### HR-Admins

HR-Admins haben erweiterten Zugriff auf persönliche Daten:

**So weist du HR-Admins zu:**

1. Öffne die Organisationseinheit
2. Klicke auf **"Bearbeiten"**
3. Füge Benutzer unter **"HR Admins"** hinzu
4. Speichere

**Zusätzliche Berechtigungen von HR-Admins:**

| Berechtigung | Beschreibung |
|--------------|--------------|
| Private Daten ansehen | Alle Mitglieder der Einheit |
| Private Daten bearbeiten | Alle Mitglieder der Einheit |
| HR-Dateien verwalten | Personaldokumente der Einheit |
| Weiterbildungen verwalten | Weiterbildungen der Einheit |

### Vererbung

Berechtigungen können sich vererben:

- **Parent-Admins**: Können auch untergeordnete Einheiten administrieren
- **HR-Admins**: Berechtigung gilt für die gesamte Einheit

## Objektberechtigungen

Bestimmte Berechtigungen basieren auf der Beziehung zum Objekt.

### Vorgesetzten-Berechtigungen

Der Vorgesetzte eines Mitarbeitenden hat erweiterte Rechte:

| Berechtigung | Beschreibung |
|--------------|--------------|
| Mitarbeitende bearbeiten | Direkte Mitarbeitende |
| Mitarbeitende löschen | Direkte Mitarbeitende |
| Private Daten ansehen | Direkte Mitarbeitende |
| Private Daten bearbeiten | Direkte Mitarbeitende |
| HR-Dateien ansehen | Direkte Mitarbeitende |
| HR-Dateien bearbeiten | Direkte Mitarbeitende |
| Weiterbildungen ansehen | Direkte Mitarbeitende |
| Weiterbildungen bearbeiten | Direkte Mitarbeitende |

**Wie wird der Vorgesetzte bestimmt?**

Das Feld "Vorgesetzter" im Mitarbeiterprofil definiert diese Beziehung.

### Eigene Daten

Jeder Mitarbeitende mit verknüpftem Benutzer kann:

| Berechtigung | Beschreibung |
|--------------|--------------|
| Eigene Daten ansehen | Stammdaten und Kontaktdaten |
| Eigene private Daten ansehen | Private Informationen |
| Eigene HR-Dateien ansehen | Personaldokumente |
| Eigene Weiterbildungen ansehen | Eigene Schulungen |

> **⚠️ Wichtig:** Bearbeiten der eigenen Daten erfordert zusätzliche Berechtigung oder Administrator-Status.

## Sichtbarkeit nach Anstellungsart

Die Anstellungsart beeinflusst die Sichtbarkeit:

### Interne und Externe Mitarbeitende

| Berechtigung | Erfordert |
|--------------|-----------|
| Ansehen | `view_mitarbeitende` |
| Bearbeiten | `change_mitarbeitende` |
| Löschen | `delete_mitarbeitende` |

### Ehemalige Mitarbeitende (Alumni)

| Berechtigung | Erfordert |
|--------------|-----------|
| Ansehen | `change_mitarbeitende` (höhere Stufe!) |
| Bearbeiten | `change_mitarbeitende` |
| Löschen | `delete_mitarbeitende` |

> **💡 Tipp:** Alumni sind standardmässig nicht sichtbar für Benutzer mit nur `view_mitarbeitende`.

## Schutz privater Daten

Private Daten sind besonders geschützt.

### Was sind private Daten?

- Geburtsdatum
- Zivilstand
- Nationalität
- Private Adresse und Kontaktdaten
- AHV-Nummer
- Bankverbindung
- Notfallkontakt
- Personaldossier

### Wer sieht private Daten?

| Rolle | Zugriff |
|-------|---------|
| Benutzer mit `view_private_data` | Alle privaten Daten |
| Eigener Benutzer | Eigene private Daten |
| Vorgesetzter | Private Daten der Mitarbeitenden |
| HR-Admin der Einheit | Private Daten der Einheit |

### Best Practices für Datenschutz

1. **Minimal notwendige Rechte**: Nur wer braucht, soll sehen
2. **HR-Admin statt Global-Admin**: Lokale Rechte bevorzugen
3. **Audit-Log nutzen**: Zugriffe nachvollziehen
4. **Regelmässige Prüfung**: Berechtigungen überprüfen

## Automatisch erstellte Gruppen

Das Organisation-Modul erstellt automatisch Systemgruppen:

### Orgunit-Gruppen

Format: `orgunit_<id>`

- Werden automatisch bei Erstellung einer Organisationseinheit angelegt
- Mitglieder werden automatisch synchronisiert
- Nutzbar für Space-Berechtigungen im DMS

### Funktions-Gruppen

Format: `function_<id>`

- Werden automatisch bei Erstellung einer Funktion angelegt
- Mitglieder werden über Mitgliedschaften und Mitwirkungen synchronisiert
- Nutzbar für Prozess-Berechtigungen

### Synchronisation

Die Gruppen werden automatisch aktualisiert bei:

- Erstellen/Löschen von Mitgliedschaften
- Erstellen/Löschen von Mitwirkungen
- Änderungen an Benutzer-Verknüpfungen

## Berechtigungs-Matrix

### Wer kann was bei Mitarbeitenden?

| Aktion | Global Admin | Vorgesetzter | HR-Admin | Org-Admin | User |
|--------|:------------:|:------------:|:--------:|:---------:|:----:|
| Ansehen | ✅ | ✅ | ✅ | ✅ | ✅* |
| Bearbeiten | ✅ | ✅** | ✅** | ✅** | ❌ |
| Löschen | ✅ | ✅** | ❌ | ❌ | ❌ |
| Private Daten | ✅ | ✅** | ✅** | ❌ | Eigene |

*mit `view_mitarbeitende`, **nur für zugeordnete Mitarbeitende

### Wer kann was bei HR-Dateien?

| Aktion | Global Admin | Vorgesetzter | HR-Admin | User |
|--------|:------------:|:------------:|:--------:|:----:|
| Ansehen | ✅ | ✅** | ✅** | Eigene |
| Hochladen | ✅ | ✅** | ✅** | ❌ |
| Löschen | ✅ | ✅** | ✅** | ❌ |

**nur für zugeordnete Mitarbeitende

## Best Practices

### ✅ Empfehlungen

1. **Minimale Rechte**: Nur notwendige Berechtigungen vergeben
2. **Lokale Admins nutzen**: HR-Admins statt globaler Rechte
3. **Vorgesetzten-Beziehung pflegen**: Für automatische Berechtigungen
4. **Gruppen verstehen**: Automatische Gruppen für Kollaboration
5. **Regelmässig prüfen**: Berechtigungen überprüfen

### ❌ Häufige Fehler

1. **Zu viele Admins**: Nicht jeder braucht Vollzugriff
2. **Private Daten vernachlässigen**: Datenschutz beachten
3. **Veraltete Rechte**: Bei Austritten entziehen
4. **Fehlende Dokumentation**: Berechtigungskonzept dokumentieren

### Beispiel: Berechtigungsstruktur

<pre>
Geschäftsleitung
├── CEO (organisation_admin)
│
HR-Abteilung
├── HR-Leiter (organisation_admin)
├── HR-Sachbearbeiter (organisation_hrfiles_admin)
│   └── HR-Admin für: Gesamte Organisation
│
IT-Abteilung
├── IT-Leiter
│   └── Org-Admin für: IT-Abteilung
│   └── Vorgesetzter von: IT-Team
│
Alle Mitarbeitende
└── (organisation_users)
</pre>

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- Die vier Ebenen des Berechtigungssystems
- Welche System-Berechtigungen es gibt
- Die drei Systemgruppen des Moduls
- Wie lokale Berechtigungen (Orgunit-Admin, HR-Admin) funktionieren
- Wie Objektberechtigungen (Vorgesetzter, Eigene Daten) wirken
- Wie private Daten geschützt werden
- Best Practices für die Rechtevergabe

## Weiterführende Informationen

Für detaillierte Informationen zu Berechtigungen in ELIZA siehe:

- **Benutzerverwaltung** → Berechtigungskonzept
- **Benutzerverwaltung** → Systemgruppen-Referenz
