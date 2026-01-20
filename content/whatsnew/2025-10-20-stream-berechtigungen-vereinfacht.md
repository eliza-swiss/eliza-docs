---
title: "News-Berechtigungen flexibler steuern"
date: 2025-10-20
slug: "stream-berechtigungen-vereinfacht"
emoji: "🔐"
---

Liebe ELIZA-Nutzerin, lieber ELIZA-Nutzer

Wir haben die Berechtigungsverwaltung für News-Erstellung in Newskanälen grundlegend verbessert! Ab sofort kannst du mit drei einfachen Checkboxen präzise festlegen, wer in deinen Newskanälen neue Beiträge erstellen darf.

[https://app.arcade.software/share/bIHgrwOG0wSMS160TXJr](https://app.arcade.software/share/bIHgrwOG0wSMS160TXJr)

## Was ist neu?

Beim Erstellen oder Bearbeiten eines Newskanals findest du drei neue Berechtigungs-Optionen:

- **Alle mit Leseberechtigung**: Alle Benutzer, die den Newskanal sehen können, dürfen auch News erstellen (Standard: aktiviert)
- **Beteiligte Organisationseinheiten**: Nur Benutzer aus den zugewiesenen Organisationseinheiten dürfen News erstellen
- **Beteiligte benutzerdefinierte Gruppen**: Nur Benutzer aus den zugewiesenen benutzerdefinierten Gruppen dürfen News erstellen

Diese neuen Checkboxen ersetzen das bisherige "News-Berechtigung" Dropdown-Feld, das jetzt als "Legacy" markiert ist. Du kannst die Berechtigungen beliebig kombinieren – mehrere Checkboxen können gleichzeitig aktiviert sein.

## Wie profitierst du davon?

- **Flexibler**: Kombiniere verschiedene Berechtigungen nach deinen Bedürfnissen
- **Verständlicher**: Klare Checkboxen statt kryptischem Dropdown-Menü
- **Präziser**: Steuere genau, welche Benutzergruppen News erstellen dürfen
- **Kontrollierbarer**: Unterscheide zwischen "Newskanal sehen" und "News erstellen"

## Wie nutzt du die neuen Berechtigungen?

1. Öffne einen bestehenden Newskanal oder erstelle einen neuen
2. Scrolle zum Bereich "News-Berechtigungen"
3. Aktiviere die gewünschten Optionen:
   - **Alle mit Leseberechtigung**: Für offene Diskussionskanäle
   - **Organisationseinheiten**: Für abteilungsspezifische Newskanäle
   - **Benutzerdefinierte Gruppen**: Für projekt- oder themenspezifische Kanäle
4. Du kannst mehrere Optionen kombinieren (z.B. Organisationseinheiten + benutzerdefinierte Gruppen)
5. Speichere deine Änderungen

**Wichtig:** Admins und Team-Mitglieder des Newskanals können IMMER News erstellen, unabhängig von den Checkbox-Einstellungen.

## Praktische Anwendungsbeispiele

**Unternehmens-News (nur Management darf publizieren)**
- Alle mit Leseberechtigung: ✗ Nicht aktiviert
- Beteiligte Organisationseinheiten: ✓ Aktiviert (z.B. "Geschäftsleitung")
- Beteiligte benutzerdefinierte Gruppen: ✗ Nicht aktiviert

**Offener Team-Austausch (alle dürfen schreiben)**
- Alle mit Leseberechtigung: ✓ Aktiviert
- Beteiligte Organisationseinheiten: ✗ Nicht aktiviert
- Beteiligte benutzerdefinierte Gruppen: ✗ Nicht aktiviert

**Projekt-Newskanal (nur Projektteam darf schreiben)**
- Alle mit Leseberechtigung: ✗ Nicht aktiviert
- Beteiligte Organisationseinheiten: ✗ Nicht aktiviert
- Beteiligte benutzerdefinierte Gruppen: ✓ Aktiviert (z.B. "Projekt Alpha Team")

**Abteilungs-News (Abteilung + externe Partner)**
- Alle mit Leseberechtigung: ✗ Nicht aktiviert
- Beteiligte Organisationseinheiten: ✓ Aktiviert (z.B. "Marketing")
- Beteiligte benutzerdefinierte Gruppen: ✓ Aktiviert (z.B. "Externe Partner")

## Tipps für die optimale Nutzung

- Verwende "Alle mit Leseberechtigung" für offene Diskussionskanäle
- Kombiniere Organisationseinheiten und Gruppen für erweiterte Berechtigungen
- Nutze benutzerdefinierte Gruppen für projektspezifische Newskanäle
- Das alte "News-Berechtigung (Legacy)" Feld wird automatisch migriert

## Migration bestehender Newskanäle

Deine bestehenden Newskanal-Berechtigungen wurden automatisch in das neue System übertragen:

- **"Alle mit Leseberechtigung"** (alt) → `allow_all_viewers` aktiviert
- **"Zugewiesene Organisationseinheiten und Gruppen"** (alt) → `allow_assigned_orgunits` + `allow_assigned_custom_groups` aktiviert
- **"Nur Team und Admins"** (alt) → Alle Checkboxen deaktiviert

Du musst nichts manuell anpassen, kannst aber jetzt die Berechtigungen feiner justieren.

Bei Fragen zu den neuen Berechtigungen stehen wir dir gerne zur Verfügung!

*Dein ELIZA-Team* 🐢
