---
title: "Erste Schritte in der Benutzerverwaltung"
description: ""
weight: "1"
tags:
  - "getting-started"
  - "basics"
  - "navigation"
  - "benutzerverwaltung"
---


# Erste Schritte in der Benutzerverwaltung

In diesem Kapitel lernst du die Grundlagen der ELIZA Benutzerverwaltung kennen und machst deine ersten Schritte.

## 🎯 Lernziele

Nach diesem Kapitel kannst du:

- Auf die Benutzerverwaltung zugreifen
- Die Benutzer-Übersicht navigieren
- Benutzer suchen und filtern
- Die Benutzeroberfläche verstehen

## Was ist die Benutzerverwaltung?

Die Benutzerverwaltung in ELIZA ist das zentrale Tool für:

- **Benutzer erstellen** und verwalten
- **Berechtigungen** zuweisen und kontrollieren
- **Gruppen** und Rollen organisieren
- **Onboarding** neuer Mitarbeiter durchführen
- **Importe** aus externen Systemen durchführen

> **💡 Tipp:** Die Benutzerverwaltung ist Teil des Core-Moduls und heisst in ELIZA "Einstellungen".

## Zugriff auf die Benutzerverwaltung

### Navigation zur Benutzerliste

**Weg 1: Über das Hauptmenü**

1. Klicke in der oberen Navigationsleiste auf **"Einstellungen"**
2. Im Dropdown-Menü wirst du automatisch zur Benutzerliste weitergeleitet

**Weg 2: Direkter Link**

- Navigiere direkt zu: `/core/users/`

> **⚠️ Wichtig:** Du benötigst die Berechtigung `core.change_user` um auf die Benutzerverwaltung zuzugreifen.

### Benötigte Berechtigungen

| Aktion | Berechtigung | Systemgruppe |
|--------|--------------|--------------|
| Benutzer ansehen | `core.view_user` | `eliza_users` |
| Benutzer erstellen/bearbeiten | `core.change_user` | `eliza_admin` |
| Benutzer löschen | `core.delete_user` | `eliza_admin` |
| Vollzugriff | Superuser-Status | Superuser |

## Die Benutzer-Übersicht

### Aufbau der Übersichtsseite

Die Benutzer-Übersicht ist deine Hauptarbeitsfläche und zeigt dir alle wichtigen Informationen auf einen Blick.

<pre>
┌────────────────────────────────────────────────────────┐
│  [Benutzertypen aktualisieren]  [+ Benutzer]           │
│                                                        │
│  Filter-Buttons:                                       │
│  [Alle] [Aktive] [Lese] [Berater:in] [Archivierte]    │
│                                                        │
│  Aktionen (Benutzerverwaltung):                        │
│  [Excel Export] [✉ Einladen] [☁ Import] [↻ Avatare]    │
│                                                        │
│  ┌──────────────────────────────────────────────┐    │
│  │ Suchen: [_________________]                   │    │
│  ├──────┬─────────┬────────┬──────────┬────────┤    │
│  │  #   │ Name    │ E-Mail │ Anmeldung│ Rollen │    │
│  ├──────┼─────────┼────────┼──────────┼────────┤    │
│  │  1   │ Max...  │ max@...│ 2 Std    │ Admin  │    │
│  │  2   │ Anna... │ anna@..│ 1 Tag    │ User   │    │
│  └──────┴─────────┴────────┴──────────┴────────┘    │
└────────────────────────────────────────────────────────┘
</pre>

### Haupt-Bereiche erklärt

#### 1. Aktions-Buttons (oben rechts)

**Für alle Personen mit Benutzerverwaltung (Gruppe «Benutzer verwalten (Admin)»):**
- **[+ Benutzer]** (grün): Neuen Benutzer manuell erstellen
- **[Excel Export]**: Berechtigungen aller Benutzer als Excel exportieren
- **[✉ Einladen]**: Benutzer per E-Mail einladen (Onboarding)
- **[☁ Import]**: Benutzer aus Excel-Datei importieren

**Nur für Superuser:**
- **[Benutzertypen aktualisieren]**: Benutzertypen neu berechnen
- **[↻ Avatare]**: Alle Profilbilder neu laden

#### 2. Filter-Buttons

Filtere die Benutzerliste nach Benutzertyp:

- **Alle Benutzer**: Zeigt alle Benutzer (Anzahl in Klammern)
- **Aktive Benutzer**: Benutzer mit Schreib- und Bearbeitungsrechten
- **Lese Benutzer**: Benutzer mit reinen Leserechten
- **Berater:in**: Externe Berater mit eingeschränkten Rechten
- **Archivierte Benutzer**: Deaktivierte/gelöschte Benutzer

> **💡 Tipp:** Die Anzahl in Klammern zeigt dir, wie viele Benutzer in jeder Kategorie sind.

#### 3. Interaktive Tabelle mit Benutzerliste

Die Tabelle zeigt alle wichtigen Benutzerinformationen:

| Spalte | Beschreibung |
|--------|--------------|
| **#** | Fortlaufende Nummer |
| **Benutzername** | Login-Name mit Profilbild |
| **Vorname** | Vorname des Benutzers |
| **Nachname** | Nachname des Benutzers |
| **E-Mail** | E-Mail-Adresse |
| **Letzte Anmeldung** | Wann war der Benutzer zuletzt aktiv? |
| **Verknüpfung** | Link zu Mitarbeitenden-Profil (falls vorhanden) |
| **Zuordnungen** | Anzahl der Gruppen-Zuordnungen |
| **Rollen** | ELIZA-spezifische Rollen (Admin, HR, etc.) |
| **Benutzertyp** | Status-Badge (Aktiv, Lesen, Berater:in) |
| **Bemerkung** | Optionale Notiz zum Benutzer |

### Spalten ein- und ausblenden

Über der Tabelle findest du Links zum Ein- und Ausblenden von Spalten:

```
Spalten ein- und ausblenden:
Vorname - Nachname - E-Mail - Letzte Anmeldung - Verknüpfung - Zuordnungen - Rollen - Benutzertyp - Bemerkung
```

**So funktioniert's:**

1. Klicke auf einen Spaltennamen (z.B. "E-Mail")
2. Die Spalte wird aus- oder eingeblendet
3. Deine Auswahl wird gespeichert und beim nächsten Besuch wiederhergestellt

> **💡 Tipp:** Bei vielen Benutzern blende unwichtige Spalten aus für eine bessere Übersicht.

## Benutzer suchen und filtern

### Die Suchfunktion

Die Tabellen-Suche (oben rechts in der Tabelle) durchsucht **alle sichtbaren Spalten** gleichzeitig.

**Schritt-für-Schritt:**

1. Gib deinen Suchbegriff in das Suchfeld ein
2. Die Tabelle filtert in Echtzeit während du tippst
3. Gefundene Treffer werden sofort angezeigt

**Beispiele für Suchbegriffe:**

- `max.muster` - Sucht nach Benutzername
- `max@beispiel.ch` - Sucht nach E-Mail
- `Admin` - Findet alle Administratoren
- `Aktiv` - Zeigt alle aktiven Benutzer
- `2025` - Findet Benutzer die 2025 aktiv waren

> **💡 Tipp:** Die Suche ist case-insensitive (Gross-/Kleinschreibung egal).

### Filter kombinieren

Du kannst Suche und Filter-Buttons kombinieren:

**Beispiel: Aktive Administratoren finden**

1. Klicke auf **[Aktive Benutzer]** Filter-Button
2. Gib `Admin` in die Suche ein
3. Resultat: Nur aktive Benutzer mit Admin-Rolle

### Sortierung

Klicke auf die **Spalten-Überschriften** um die Tabelle zu sortieren:

- **1x klicken**: Aufsteigend sortieren (A → Z)
- **2x klicken**: Absteigend sortieren (Z → A)
- **3x klicken**: Sortierung zurücksetzen

> **💡 Tipp:** Die Sortierung nach "Letzte Anmeldung" hilft dir inaktive Benutzer zu finden.

## Benutzer-Status verstehen

### Benutzertypen (Badges)

In der Spalte "Benutzertyp" siehst du farbige Badges:

| Badge | Farbe | Bedeutung |
|-------|-------|-----------|
| **Aktiv** | Grün | Voller Zugriff mit Schreib-/Bearbeitungsrechten |
| **Lesen** | Hellblau | Nur Leserechte, keine Bearbeitungsmöglichkeiten |
| **Berater:in** | Lila | Externe Berater mit eingeschränkten Rechten |
| **Lesen & Spaces** | Orange | Leserechte plus Zugriff auf bestimmte Bereiche (Spaces) |

### Rollen-Badges

In der Spalte "Rollen" siehst du spezielle ELIZA-Rollen:

| Rolle | Badge | Bedeutung |
|-------|-------|-----------|
| **ELIZA Admin** | Blau | Kann Benutzer und Zugriffsrechte verwalten |
| **HR Admin** | Orange | Kann Mitarbeitende verwalten |
| **HR Persönliche Daten** | Lila | Kann persönliche Daten von Mitarbeitenden verwalten |
| **HR Personaldossiers** | Rot | Kann Personaldossiers von allen Mitarbeitenden verwalten |

> **⚠️ Wichtig:** Diese Rollen sind zusätzlich zu den Systemgruppen und geben erweiterte Rechte.

## Navigation zu Benutzerdetails

Um die Details eines Benutzers anzuzeigen:

1. Klicke auf den **Benutzernamen** in der Tabelle
2. Du wirst zur Benutzer-Detailseite weitergeleitet
3. Dort kannst du:
   - Benutzerinformationen bearbeiten
   - Gruppen zuweisen
   - Berechtigungen anpassen
   - Verknüpfungen verwalten

## Häufige Anfänger-Fragen

### Warum sehe ich keine Benutzer?

**Mögliche Ursachen:**

1. **Keine Berechtigung**: Du benötigst `core.view_user` Permission
2. **Filter aktiv**: Überprüfe, ob ein Filter aktiviert ist (z.B. "Archivierte")
3. **Suchfilter**: Lösche den Suchbegriff im Suchfeld

### Warum kann ich keine Benutzer erstellen?

**Du benötigst:**

- Berechtigung `core.add_user` UND `core.change_user`
- Mitgliedschaft in der Gruppe `eliza_admin` oder Superuser-Status

### Warum sehe ich den Import-Button nicht?

**Der Import braucht das Recht «Benutzer ändern» (`core.change_user`):**

- Der Button ☁ (Cloud-Icon) erscheint für alle Mitglieder der Gruppe «Benutzer verwalten (Admin)» (technisch `manage_users`)
- Fehlt dir die Gruppe, kann sie dir eine Person mit Benutzerverwaltung im Benutzerprofil zuweisen; Superuser-Rechte sind dafür nicht nötig

### Was bedeutet "Zuordnungen"?

Die Zahl in der Spalte "Zuordnungen" zeigt, wie viele Gruppen, Rollen und Berechtigungen ein Benutzer hat. Ein Klick darauf zeigt Details und ermöglicht das Aufräumen von unnötigen Zuordnungen.

## Best Practices

### ✅ Empfehlungen

1. **Regelmässig aufräumen**
   - Überprüfe monatlich inaktive Benutzer (Filter "Letzte Anmeldung")
   - Archiviere Benutzer die das Unternehmen verlassen haben

2. **Suchfunktion nutzen**
   - Verwende Suche statt manuelles Scrollen
   - Kombiniere Filter für präzise Ergebnisse

3. **Spalten anpassen**
   - Blende unwichtige Spalten aus für bessere Übersicht
   - Zeige nur relevante Informationen an

4. **Benutzertypen verstehen**
   - Lerne die Unterschiede zwischen Aktiv, Lesen und Berater:in
   - Weise korrekte Typen zu für optimale Sicherheit

### ❌ Häufige Fehler vermeiden

1. **Nicht alle Benutzer zu Admins machen**
   - Admin-Rechte nur bei Bedarf vergeben
   - Folge dem Prinzip der minimalen Rechte

2. **Inaktive Benutzer nicht vergessen**
   - Archiviere ausgeschiedene Mitarbeiter zeitnah
   - Verhindere Sicherheitsrisiken durch alte Accounts

3. **Filter nicht übersehen**
   - Achte auf aktive Filter
   - Überprüfe welche Benutzer-Ansicht aktiv ist

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Wie du auf die Benutzerverwaltung zugreifst
- ✅ Die Struktur der Benutzer-Übersicht verstehen
- ✅ Benutzer suchen, filtern und sortieren
- ✅ Benutzertypen und Rollen unterscheiden
- ✅ Zur Benutzerdetailseite navigieren

## Nächste Schritte

Jetzt bist du bereit für die nächsten Kapitel:

- **[Kapitel 2: Benutzer verwalten]({{< ref "02-benutzer-verwalten" >}})** - Lerne Benutzer zu erstellen, bearbeiten und zu verwalten
- **[Kapitel 3: Benutzer-Import]({{< ref "03-benutzer-import" >}})** - Importiere mehrere Benutzer gleichzeitig aus Excel
- **[Kapitel 4: Berechtigungskonzept]({{< ref "04-berechtigungen" >}})** - Verstehe das Berechtigungssystem in der Tiefe

---

**Weiter zu: [Benutzer verwalten →]({{< ref "02-benutzer-verwalten" >}})**
