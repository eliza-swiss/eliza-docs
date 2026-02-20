---
category: "Benutzer & Sicherheit"
slug: "iks-berechtigungen-optimiert"
---

Liebe ELIZA-Nutzerin, lieber ELIZA-Nutzer

Wir haben das Berechtigungssystem für das IKS-Modul (Internes Kontrollsystem) grundlegend überarbeitet und die Benutzerverwaltung mit praktischen neuen Funktionen ausgestattet. Die Verwaltung von Berechtigungen wird dadurch übersichtlicher und flexibler.

## Was ist neu?

### Neue Berechtigungsgruppen für IKS

Wir haben das IKS-Berechtigungssystem mit neuen, präzisen Gruppenebenen erweitert:

**IKS-Lesezugriff (umfassend)**
- Neue Gruppe "IKS (Lesen)" mit Zugriff auf alle IKS-Module
- Enthält: Massnahmen, Kontrollen, Einschätzungen, Klassifikationen, IKS-Reporting und Kontrolldateien
- Ideal für Personen, die einen vollständigen Überblick über das IKS benötigen

**Massnahmen-spezifische Gruppen**
- "Massnahmen (Lesen)" - Nur Einsicht in Massnahmen
- "Massnahmen (Lesen und Hinzufügen)" - Massnahmen anzeigen und erstellen
- "Massnahmen (Admin)" - Vollzugriff auf Massnahmen und Kontrollen

**Kontrollen-Gruppe**
- "Kontrollen (Lesen und Hinzufügen)" - Kontrollen anzeigen und erstellen

**Verträge**
- "Verträge (Lesen)" - Nur Lesezugriff auf Verträge und Vertragsordner

### Intelligente Kontroll-Berechtigungen

**Automatische Berechtigungen für Controller**
- Wenn du als "Controller User" oder in einer "Controller Funktion" bei einer Massnahme eingetragen bist, kannst du **automatisch** Kontrollen für diese Massnahme hinzufügen
- Du benötigst dafür keine zusätzliche allgemeine Berechtigung
- Dies gilt auch, wenn du nur Lesezugriff auf das IKS-Modul hast

**Berechtigungen für Verantwortliche**
- Verantwortliche User und Funktionen benötigen die Berechtigung "Kontrollen (Lesen und Hinzufügen)", um Kontrollen hinzuzufügen
- Dies stellt sicher, dass nur befugte Personen Kontrollen erstellen können

### Präzise Dashboard-Anzeige

**Korrekte Massnahmen-Zählung**
- Das SWOT-Dashboard zeigt jetzt nur noch die Anzahl der Massnahmen an, auf die du Zugriff hast
- Auch das Diagramm "Massnahmen nach Status" berücksichtigt deine Berechtigungen
- Du siehst eine realistische Übersicht deines Arbeitsbereichs

### Verbesserte Benutzerverwaltung

**Gruppensortierung**
- IKS-Gruppen werden jetzt hierarchisch sortiert angezeigt
- Reihenfolge: IKS-Gruppen → Massnahmen-Gruppen → Kontrollen-Gruppen
- Bessere Übersicht bei der Rechtevergabe

**Übersichtlichere Gruppennamen**
- Technische Bezeichnungen (wie "swot_users") wurden entfernt
- Nur noch benutzerfreundliche deutsche Namen sichtbar
- Beispiel: Nur "IKS (Lesen)" statt "IKS (Lesen) (massnahmen_users)"

**Suchfunktion für Gruppen**
- Neues Suchfeld oberhalb der Gruppenliste
- Filtert Gruppen in Echtzeit beim Tippen
- Durchsucht sowohl Gruppennamen als auch Modulbezeichnungen
- Beispiel: Suche nach "admin" zeigt nur Admin-Gruppen

## Wie profitierst du davon?

**Präzisere Zugriffskontrolle**
- Du kannst Berechtigungen feiner abstuften
- Mitarbeitende erhalten genau die Rechte, die sie benötigen
- Bessere Einhaltung des "Need-to-know"-Prinzips

**Intelligente Kontroll-Berechtigung**
- Controller können automatisch Kontrollen für "ihre" Massnahmen hinzufügen
- Keine zusätzliche Rechtevergabe erforderlich
- Rollenbasierte Berechtigungen funktionieren intuitiv

**Realistische Dashboard-Ansichten**
- Du siehst nur noch Zahlen und Statistiken für Massnahmen mit Zugriff
- Keine irreführenden Gesamtanzahlen mehr
- Dashboard spiegelt deinen tatsächlichen Arbeitsbereich wider

**Schnellere Rechtevergabe**
- Die Suchfunktion findet Gruppen sofort
- Keine lange Suche in langen Listen mehr
- Sortierte Darstellung erleichtert die Orientierung

**Klarere Übersicht**
- Gruppennamen sind selbsterklärend
- Hierarchische Sortierung zeigt Zusammenhänge
- Weniger Verwirrung durch technische Bezeichnungen

## Wie nutzt du die neuen Berechtigungen?

### Berechtigungen zuweisen

1. Öffne die Benutzerverwaltung über das Menü
2. Wähle den gewünschten Benutzer aus
3. Klicke auf "Gruppenmitgliedschaften bearbeiten"
4. Nutze das Suchfeld oben, um die passende Gruppe zu finden
   - Beispiel: Tippe "IKS" für alle IKS-bezogenen Gruppen
   - Oder: Tippe "admin" für alle Admin-Gruppen
5. Wähle die passenden Gruppen aus
6. Klicke auf "Speichern"

### Die richtige Gruppe wählen

**Für umfassenden IKS-Überblick:**
- Verwende "IKS (Lesen)" - gibt Zugriff auf alle IKS-Module

**Für Massnahmen-Verantwortliche:**
- Verwende "Massnahmen (Lesen und Hinzufügen)" - können Massnahmen erstellen
- Oder "Massnahmen (Admin)" - können Massnahmen und Kontrollen verwalten

**Für Kontroll-Verantwortliche:**
- Verwende "Kontrollen (Lesen und Hinzufügen)" - können Kontrollen erstellen
- **Hinweis:** Controller, die direkt bei einer Massnahme eingetragen sind, benötigen diese Berechtigung nicht

**Für Vertragsleser:**
- Verwende "Verträge (Lesen)" - nur Einsicht in Verträge

### Controller bei Massnahmen eintragen

**So richtest du automatische Kontroll-Berechtigungen ein:**

1. Öffne die gewünschte Massnahme
2. Klicke auf "Bearbeiten"
3. Trage im Feld "Kontrollierende Person" den Controller-User ein
4. Oder wähle im Feld "Kontrollierende Funktion" die entsprechende Funktion aus
5. Speichere die Änderungen

Der eingetragene Controller kann nun automatisch Kontrollen für diese Massnahme hinzufügen - ohne zusätzliche Berechtigung.

## Tipps für die optimale Nutzung

**Nutze die Suchfunktion**
- Spare Zeit bei der Gruppenvergabe
- Suche nach Schlagworten wie "lesen", "admin" oder Modulnamen
- Das Suchfeld filtert sowohl Gruppen als auch Module

**Beachte die Hierarchie**
- IKS-Admin-Gruppen haben die umfassendsten Rechte
- Massnahmen-Admin kann auch Kontrollen verwalten
- Wähle die passende Ebene für jede Person

**Nutze rollenbasierte Controller-Zuweisungen**
- Trage Controller direkt bei den Massnahmen ein
- Verwende Controller-Funktionen für wiederkehrende Zuständigkeiten
- Spare dir die Vergabe zusätzlicher Berechtigungen

**Prüfe das Dashboard regelmässig**
- Das Dashboard zeigt jetzt nur noch deine relevanten Massnahmen
- Nutze die korrekten Zahlen für Reportings und Analysen
- Vertraue auf realistische Statistiken

**Regelmässige Überprüfung**
- Prüfe periodisch, ob die zugewiesenen Rechte noch aktuell sind
- Entziehe nicht mehr benötigte Berechtigungen
- Halte dein Berechtigungskonzept aktuell

**Dokumentiere dein Berechtigungskonzept**
- Definiere, wer welche IKS-Gruppe erhalten soll
- Dokumentiere die Gründe für die Rechtevergabe
- Erstelle eine Übersicht für neue Mitarbeitende

## Fragen oder Feedback?

Hast du Fragen zu den neuen IKS-Berechtigungen oder zur Suchfunktion? Kontaktiere uns gerne über den Support!

*Dein ELIZA-Team* 🐢