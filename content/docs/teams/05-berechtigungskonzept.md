---
title: "Berechtigungskonzept"
description: ""
weight: "5"
tags:
  - "permissions"
  - "security"
  - "admin"
  - "teams"
  - "spaces"
---


# Berechtigungskonzept

In diesem Kapitel lernst du, wie das mehrstufige Berechtigungssystem im Spaces-Modul funktioniert.

> 💡 **Für Einsteiger:** Eine vereinfachte, praxisorientierte Einführung ins Berechtigungskonzept mit Beispielen und FAQ findest du in [Kapitel 5b: Berechtigungskonzept Einführung]({{< ref "05-berechtigungskonzept-einfuehrung" >}}).

## Überblick

Das Spaces-Modul verwendet ein **hierarchisches Berechtigungssystem** mit mehreren Ebenen:

```text
┌─────────────────────────────────────────────────────┐
│  1. System-Berechtigungen (Basis-Level)             │
│     ↓                                               │
│  2. Space-Level (Owner, Admins, Team)              │
│     ↓                                               │
│  3. Board-Level (Team-Vererbung oder eigenes Team) │
│     ↓                                               │
│  4. Card-Level (assigned_user, contributors)       │
│     ↓                                               │
│  5. Meeting-Level (Meeting-Admins, Contributors)   │
└─────────────────────────────────────────────────────┘
```

## System-Berechtigungen (Basis-Berechtigungen)

### Standard Space-Permissions

Jedes Model im Spaces-Modul hat vier Basis-Permissions:

| Permission | Code | Beschreibung |
|------------|------|--------------|
| **Ansehen** | `teams.view_space` | Spaces anzeigen und lesen |
| **Hinzufügen** | `teams.add_space` | Neue Spaces erstellen |
| **Ändern** | `teams.change_space` | Spaces bearbeiten |
| **Löschen** | `teams.delete_space` | Spaces löschen |

### Model-spezifische Permissions

**Space-Permissions:**

- `teams.view_space` - Space ansehen
- `teams.add_space` - Space erstellen
- `teams.change_space` - Space bearbeiten
- `teams.delete_space` - Space löschen

**Board-Permissions:**

- `teams.view_board` - Board ansehen
- `teams.add_board` - Board erstellen
- `teams.change_board` - Board bearbeiten
- `teams.delete_board` - Board löschen

**Card-Permissions:**

- `teams.view_card` - Card ansehen
- `teams.add_card` - Card erstellen
- `teams.change_card` - Card bearbeiten
- `teams.delete_card` - Card löschen

**Meeting-Permissions:**

- `teams.view_meeting` - Meeting ansehen
- `teams.add_meeting` - Meeting erstellen
- `teams.change_meeting` - Meeting bearbeiten
- `teams.delete_meeting` - Meeting löschen

**Wichtig:** Diese Permissions sind die **Grundvoraussetzung**. Zusätzlich gelten objektspezifische Permissions (siehe unten).

## Space-Level Berechtigungen

### Owner (Besitzer)

**Automatisch gesetzt:**

- Ersteller des Space wird automatisch Owner
- Kann **nicht** geändert werden

**Rechte:**

- ✅ Volle Kontrolle über Space
- ✅ Space bearbeiten und löschen
- ✅ Team verwalten (hinzufügen/entfernen)
- ✅ Admins verwalten (hinzufügen/entfernen)
- ✅ Alle Boards und Meetings verwalten
- ✅ Alle Cards bearbeiten
- ✅ Space archivieren/reaktivieren

**Besonderheit:**

- Owner wird automatisch Admin und Team-Mitglied
- Kann sich selbst nicht aus Team entfernen

### Admins

**Verwaltung:**

- Owner kann Admins hinzufügen/entfernen
- Andere Admins können keine Admins verwalten

**Rechte:**

- ✅ Space bearbeiten
- ✅ Space löschen (falls Permission vorhanden)
- ✅ Team verwalten
- ✅ Boards erstellen/bearbeiten/löschen
- ✅ Meetings erstellen/bearbeiten/löschen
- ✅ Alle Cards bearbeiten (bei öffentlichen Spaces)
- ❌ Können Owner nicht ändern
- ❌ Können andere Admins nicht verwalten (nur Owner)

**Verwendung:**

- Co-Projektleiter
- Stellvertretende Leitung
- Power Users mit Verwaltungsaufgaben

### Team

**Verwaltung:**

- Owner und Admins können Team-Mitglieder hinzufügen/entfernen

**Rechte:**

- ✅ Space ansehen (bei geschützten Spaces erforderlich)
- ✅ Boards ansehen (bei inherit_team=True)
- ✅ Cards ansehen
- ✅ Meetings ansehen
- ✅ Cards bearbeiten (bei privaten Spaces, wenn Board-Team vererbt)
- ❌ Keine Space-Verwaltung
- ❌ Können nicht andere Team-Mitglieder verwalten

**Verwendung:**

- Alle Projekt-Mitarbeiter
- Stakeholder mit Lesezugriff
- Beitragende ohne Admin-Rechte

### Space-Status und Berechtigungen

#### Öffentliche Spaces (`state = "public"`)

**Sichtbarkeit:**

- ✅ Alle Benutzer mit `teams.view_space` Permission können Space sehen
- ✅ Alle Boards im Space sind sichtbar
- ✅ Alle Cards sind sichtbar

**Bearbeitung:**

- ❌ Nur Space-Admins können fremde Cards bearbeiten
- ✅ Assigned User kann eigene Card bearbeiten
- ✅ Contributors können Card bearbeiten

**Anwendungsfall:**

- Unternehmensweite Projekte
- Öffentliche Informationen
- Transparenz erwünscht

#### Geschützte Spaces (`state = "private"`)

**Sichtbarkeit:**

- ❌ Nur Team-Mitglieder können Space sehen
- ❌ Nur Team-Mitglieder können Boards sehen
- ❌ Nur Team-Mitglieder können Cards sehen

**Bearbeitung:**

- ✅ Alle Team-Mitglieder können Cards bearbeiten (falls Board-Team vererbt)
- ✅ Assigned User kann Card bearbeiten
- ✅ Contributors können Card bearbeiten

**Anwendungsfall:**

- Abteilungsinterne Themen
- Vertrauliche Projekte
- Eingeschränkter Zugriff

### Berechtigungs-Matrix Space-Level

| Aktion | Owner | Admin | Team (öff.) | Team (priv.) |
|--------|-------|-------|-------------|--------------|
| **Space ansehen** | ✅ | ✅ | ✅ | ✅ |
| **Space bearbeiten** | ✅ | ✅ | ❌ | ❌ |
| **Space löschen** | ✅ | ✅ | ❌ | ❌ |
| **Team verwalten** | ✅ | ✅ | ❌ | ❌ |
| **Boards erstellen** | ✅ | ✅ | ✅* | ✅* |
| **Fremde Cards bearbeiten** | ✅ | ✅ | ❌ | ✅** |

*: Nur mit `teams.add_board` Permission

**: Nur bei Board mit inherit_team=True

## Board-Level Berechtigungen

### Team-Vererbung

Boards können Berechtigungen vom Space erben oder ein eigenes Team haben.

#### inherit_team = True (Standard, empfohlen)

**Verhalten:**

- Board nutzt das **Space-Team**
- Alle Space-Team-Mitglieder haben Zugriff
- Space-Admins haben volle Rechte
- Änderungen am Space-Team gelten automatisch für Board

**Berechtigungen:**

- **Ansehen**: Space-Team + Space-Admins
- **Bearbeiten**: Space-Admins
- **Cards bearbeiten**:
  - Bei öffentlichen Spaces: Nur Space-Admins oder assigned_user/contributors
  - Bei privaten Spaces: Alle Space-Team-Mitglieder

**Anwendungsfall:**

- ✅ Standard-Konfiguration
- ✅ Einfache Verwaltung
- ✅ Alle Projekt-Mitarbeiter sollen Zugriff haben

#### inherit_team = False

**Verhalten:**

- Board hat **eigenes Team**
- Unabhängig vom Space-Team
- Space-Admins haben **immer** Zugriff
- Board-Team muss separat verwaltet werden

**Berechtigungen:**

- **Ansehen**: Board-Team + Space-Admins
- **Bearbeiten**: Board-Team + Space-Admins
- **Cards bearbeiten**: Board-Team + Space-Admins

**Anwendungsfall:**

- ✅ Sub-Projekte mit separaten Teams
- ✅ Eingeschränkter Zugriff innerhalb eines Space
- ✅ Externe Mitarbeiter nur für ein Board

**Beispiel:**

```text
Space: "Projekt Website Relaunch"
   Team: Alle Projekt-Mitarbeiter (15 Personen)

Board: "Backend-Entwicklung"
   inherit_team: False
   Board-Team: Nur Backend-Entwickler (3 Personen)
   → Nur Backend-Entwickler + Space-Admins sehen dieses Board
```

### Board-Team verwalten

**Board-Team aktivieren:**

1. Öffne Board-Einstellungen
2. Deaktiviere **"Berechtigungen vererben"**
3. Speichere

**Team-Mitglieder hinzufügen:**

1. Öffne Board-Team-Verwaltung
2. Klicke auf **"Mitglied hinzufügen"**
3. Wähle Benutzer
4. Speichere

**Wichtig:** Space-Admins haben **immer** Zugriff, auch wenn sie nicht im Board-Team sind.

## Card-Level Berechtigungen

Cards haben ein **flexibles Berechtigungssystem** mit mehreren Rollen.

### assigned_user (Zugewiesener Benutzer)

**Automatisch gesetzt:**

- Bei Card-Erstellung optional zuweisbar
- Kann jederzeit geändert werden

**Rechte:**

- ✅ Card ansehen
- ✅ Card bearbeiten (Titel, Beschreibung, Status, Labels, etc.)
- ✅ Card löschen
- ✅ Kommentare hinzufügen
- ✅ Dateien anhängen
- ✅ Checklisten verwalten

**Verwendung:**

- Hauptverantwortlicher für die Aufgabe
- Erhält Benachrichtigungen bei Änderungen
- Kann Card delegieren (assigned_user ändern)

### contributors (Beitragende)

**Verwaltung:**

- Mehrere Benutzer möglich
- Können von assigned_user oder Space-Admins hinzugefügt werden

**Rechte:**

- ✅ Card ansehen
- ✅ Card bearbeiten
- ✅ Kommentare hinzufügen
- ✅ Dateien anhängen
- ✅ Checklisten verwalten
- ❌ Können Card nicht löschen (nur assigned_user und Creator)

**Verwendung:**

- Personen, die an der Card mitarbeiten
- Code Reviewer
- Stakeholder mit Bearbeitungsrechten

### Space-Admins bei Cards

**Rechte abhängig von Space-Status:**

**Bei öffentlichen Spaces:**

- ✅ Alle Cards ansehen
- ✅ Alle Cards bearbeiten
- ✅ Alle Cards löschen
- ✅ Zuständigkeiten ändern

**Bei geschützten Spaces:**

- ✅ Alle Cards ansehen (als Team-Mitglied)
- ✅ Alle Cards bearbeiten (wenn Board-Team vererbt)
- ✅ Alle Cards löschen

### Card-Berechtigungs-Matrix

| Aktion | assigned_user | contributors | Space-Admin (öff.) | Space-Admin (priv.) | Creator |
|--------|--------------|--------------|-------------------|---------------------|---------|
| **Ansehen** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Bearbeiten** | ✅ | ✅ | ✅ | ✅* | ✅ |
| **Löschen** | ✅ | ❌ | ✅ | ✅* | ✅ |
| **Zuordnung ändern** | ✅ | ❌ | ✅ | ✅* | ✅ |
| **Contributors hinzufügen** | ✅ | ❌ | ✅ | ✅* | ✅ |

*: Nur wenn Board-Team vererbt oder Admin im Board-Team

### Creator (Ersteller)

**Automatisch gesetzt:**

- Benutzer, der die Card erstellt hat
- Wird durch Audit-Log ermittelt

**Rechte:**

- ✅ Card löschen (auch wenn nicht mehr assigned)
- ✅ Card bearbeiten
- ✅ Alle Rechte wie assigned_user

## Meeting-Level Berechtigungen

### Meeting-Admins

**Verwaltung:**

- Space-Admins können Meeting-Admins hinzufügen
- Meeting-Ersteller ist automatisch Admin

**Rechte:**

- ✅ Meeting bearbeiten
- ✅ Traktanden erstellen/bearbeiten/löschen
- ✅ Beschlüsse verwalten
- ✅ Status ändern
- ✅ Dateien hinzufügen
- ❌ Können Meeting nicht löschen (nur Space-Admins)

**Verwendung:**

- Sitzungsleitung
- Protokollführer
- Co-Moderatoren

### Traktanden-Beitragende

**Verwaltung:**

- Meeting-Admins können Beitragende hinzufügen
- Pro Traktandum separate Beitragende möglich

**Rechte:**

- ✅ Traktandum ansehen
- ✅ Traktandum bearbeiten (nur eigene)
- ✅ Beschlüsse erstellen
- ✅ Kommentare hinzufügen
- ❌ Können Traktandum nicht löschen
- ❌ Nur solange Meeting-Status ≠ "abgeschlossen"

**Verwendung:**

- Experten für spezifische Traktanden
- Berichterstatter
- Themenverantwortliche

### Meeting-Berechtigungs-Matrix

| Aktion | Space-Admin | Meeting-Admin | Contributor | Team |
|--------|-------------|---------------|-------------|------|
| **Meeting ansehen** | ✅ | ✅ | ✅ | ✅ |
| **Meeting bearbeiten** | ✅ | ✅ | ❌ | ❌ |
| **Meeting löschen** | ✅ | ❌ | ❌ | ❌ |
| **Traktandum erstellen** | ✅ | ✅ | ❌* | ❌ |
| **Traktandum bearbeiten** | ✅ | ✅ | ✅** | ❌ |
| **Beschluss erstellen** | ✅ | ✅ | ✅** | ❌ |
| **Status ändern** | ✅ | ✅ | ❌ | ❌ |

*: Nur bei Meeting-Status ≠ "abgeschlossen"

**: Nur eigene Traktanden

### Archivierte Meetings

**Besonderheit:**

- ❌ Keine Bearbeitung möglich (schreibgeschützt)
- ✅ Ansehen weiterhin möglich
- ✅ Nur Space-Admins können reaktivieren

## Kommentare und Dateien

### Kommentare

**Ansehen:**

- Folgt Berechtigungen des Parent-Objekts
- Wenn du Card/Meeting/Traktandum siehst, siehst du Kommentare

**Bearbeiten:**

- ✅ Eigene Kommentare: Autor kann bearbeiten
- ✅ Fremde Kommentare: Parent-Objekt-Admins können bearbeiten

**Löschen:**

- ✅ Parent-Objekt-Admins können löschen
- ❌ Normale Benutzer können nicht löschen

### Dateien

**Ansehen:**

- Folgt Berechtigungen des Parent-Objekts

**Hochladen:**

- Benötigt Bearbeitungsrecht auf Parent-Objekt

**Löschen:**

- ✅ Parent-Objekt-Admins können löschen
- ✅ Uploader kann eigene Dateien löschen

## Berechtigungs-Kombinationen

### Szenario 1: Öffentlicher Projekt-Space

**Setup:**

- Space: "Website Relaunch" (öffentlich)
- Owner: Projektleiter
- Admins: Co-Projektleiter
- Team: Alle Projekt-Mitarbeiter

**Boards:**

- "Sprint 1", "Sprint 2", "Backlog" (inherit_team=True)

**Berechtigungen:**

- ✅ Alle Benutzer mit `teams.view_space` sehen Space und Boards
- ✅ Alle können Cards lesen
- ❌ Nur Admins oder assigned_user können fremde Cards bearbeiten
- ✅ Team-Mitglieder können eigene Cards erstellen

### Szenario 2: Geschützter Abteilungs-Space

**Setup:**

- Space: "QM-Abteilung" (geschützt)
- Owner: QM-Leitung
- Admins: QM-Mitarbeiter
- Team: QM-Abteilung

**Boards:**

- "Verbesserungsmassnahmen" (inherit_team=True)

**Berechtigungen:**

- ❌ Nur Team-Mitglieder sehen Space
- ✅ Team-Mitglieder können alle Cards bearbeiten
- ✅ Team-Mitglieder können Cards erstellen
- ✅ Admins können alles verwalten

### Szenario 3: Space mit separatem Board-Team

**Setup:**

- Space: "IT-Projekte" (geschützt)
- Space-Team: Alle IT-Mitarbeiter (20 Personen)
- Board: "Security Audit" (inherit_team=False)
- Board-Team: Nur Security-Team (3 Personen)

**Berechtigungen:**

- ✅ Alle IT-Mitarbeiter sehen Space
- ✅ Alle IT-Mitarbeiter sehen andere Boards
- ❌ Nur Security-Team + Space-Admins sehen "Security Audit" Board
- ✅ Security-Team kann Cards in ihrem Board bearbeiten

## Best Practices

### ✅ Empfehlungen

**Space-Verwaltung:**

1. **Minimale Admins**: Nur 2-3 Personen als Admin
2. **Klare Owner**: Owner ist Projektleiter oder Abteilungsleiter
3. **Team vollständig**: Alle Stakeholder im Team
4. **Status-Wahl**: Öffentlich für Transparenz, Geschützt für Vertraulichkeit

**Board-Verwaltung:**

1. **Team-Vererbung**: Standard (inherit_team=True) nutzen
2. **Eigenes Team**: Nur bei spezifischen Anforderungen
3. **Dokumentation**: Festhalten, warum eigenes Team nötig ist

**Card-Verwaltung:**

1. **Zuordnung**: Immer assigned_user setzen
2. **Contributors**: Nur bei Bedarf hinzufügen
3. **Klare Verantwortung**: Nur eine Person assigned

**Meeting-Verwaltung:**

1. **Meeting-Admins**: Sitzungsleitung + Protokollführer
2. **Contributors**: Nur für spezifische Traktanden
3. **Archivierung**: Nach Abschluss aller Beschlüsse

### ❌ Häufige Fehler

**Zu viele Admins:**

- ❌ Problem: 10+ Admins, alle können alles löschen
- ✅ Lösung: Reduziere auf 2-3 Admins, andere als normale Team-Mitglieder

**Falsche Status-Wahl:**

- ❌ Problem: Öffentlicher Space, aber vertrauliche Daten
- ✅ Lösung: Ändere zu "Geschützt" und prüfe Team-Mitglieder

**Vergessene Zuordnungen:**

- ❌ Problem: Cards ohne assigned_user, niemand fühlt sich verantwortlich
- ✅ Lösung: Immer assigned_user setzen, auch bei Team-Aufgaben

**Eigene Board-Teams ohne Grund:**

- ❌ Problem: Alle Boards haben eigenes Team, Verwaltungsaufwand hoch
- ✅ Lösung: Nutze Team-Vererbung, eigenes Team nur bei Bedarf

## Berechtigungen prüfen

### Als Benutzer

**Deine Rechte prüfen:**

1. Öffne Space/Board/Card
2. Siehst du **"Bearbeiten"** Button? → Du hast Bearbeitungsrechte
3. Siehst du **"Löschen"** Button? → Du hast Löschrechte
4. Siehst du **"Team verwalten"**? → Du bist Admin

**In Profil:**

1. Klicke auf Profil
2. Scrolle zu **"Gruppen und Berechtigungen"**
3. Prüfe `teams.*` Permissions

### Als Administrator

**Berechtigungen anderer Benutzer prüfen:**

1. Öffne Space
2. Tab **"Team"**
3. Siehe Liste mit Rollen (Owner, Admin, Mitglied)

**Board-Team prüfen:**

1. Öffne Board-Einstellungen
2. Prüfe **"Berechtigungen vererben"** Status
3. Falls deaktiviert: Siehe Board-Team-Liste

## Häufige Probleme und Lösungen

### Problem: Benutzer sieht Space nicht

**Mögliche Ursachen:**

1. **Space ist geschützt**: Benutzer nicht im Team
   - **Lösung**: Füge zum Space-Team hinzu

2. **Keine View-Permission**: Benutzer hat keine `teams.view_space` Permission
   - **Lösung**: Gib System-Berechtigung

### Problem: Benutzer kann Board nicht sehen

**Mögliche Ursachen:**

1. **Board hat eigenes Team**: Benutzer nicht im Board-Team
   - **Lösung**: Füge zum Board-Team hinzu oder aktiviere Team-Vererbung

2. **Space ist geschützt**: Benutzer nicht im Space-Team
   - **Lösung**: Füge zum Space-Team hinzu

### Problem: Benutzer kann Card nicht bearbeiten

**Mögliche Ursachen:**

1. **Space ist öffentlich**: Nur assigned_user oder Space-Admins können bearbeiten
   - **Lösung**: Weise Benutzer als assigned_user oder contributor zu

2. **Benutzer nicht im Team**: Bei geschützten Spaces
   - **Lösung**: Füge zum Space-Team hinzu

3. **Board-Team nicht geerbt**: Board hat eigenes Team
   - **Lösung**: Füge zum Board-Team hinzu oder aktiviere Vererbung

### Problem: Benutzer kann Meeting nicht bearbeiten

**Mögliche Ursachen:**

1. **Meeting ist abgeschlossen**: Schreibgeschützt
   - **Lösung**: Reaktiviere Meeting (nur Space-Admin)

2. **Benutzer ist kein Meeting-Admin**: Nur Meeting-Admins können bearbeiten
   - **Lösung**: Füge als Meeting-Admin hinzu

## Zusammenfassung

### Hierarchie

```text
1. System-Berechtigungen (Grundlage)
   ↓
2. Space-Level (Owner → Admins → Team)
   ↓
3. Board-Level (Vererbung oder eigenes Team)
   ↓
4. Card-Level (assigned_user, contributors)
   ↓
5. Meeting-Level (Meeting-Admins, Contributors)
```

### Wichtige Punkte

- 🔐 **Mehrstufig**: Berechtigungen auf 5 Ebenen
- 👑 **Owner**: Ersteller mit vollen Rechten
- 👥 **Team-Vererbung**: Vereinfacht Verwaltung (empfohlen)
- 🔓 **Öffentlich vs. Geschützt**: Unterschiedliche Bearbeitungsrechte
- ✅ **assigned_user**: Kann immer eigene Card bearbeiten
- 🚫 **Archiviert**: Schreibgeschützt, nur Ansehen

### Empfohlene Konfiguration

Für die meisten Projekte:

- **Space**: Geschützt (nur Team)
- **Admins**: 2-3 Personen
- **Team**: Alle Stakeholder
- **Boards**: Team-Vererbung (inherit_team=True)
- **Cards**: Immer assigned_user setzen

## Nächste Schritte

- Lies [Zusammenarbeit]({{< ref "06-zusammenarbeit" >}}) für Kollaborations-Features
- Konsultiere deinen ELIZA-Administrator für spezifische Berechtigungsfragen

---

**Bei Fragen zum Berechtigungskonzept wende dich an deinen ELIZA-Administrator!**
