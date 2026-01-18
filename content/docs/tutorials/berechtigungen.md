---
title: "Untitled"
description: ""
weight: 0
---
# 🔐 Berechtigungen für das ELIZA Handbuch

Liebe ELIZA-Nutzerin, lieber ELIZA-Nutzer,

das ELIZA Handbuch (Tutorial-System) verfügt über ein durchdachtes Berechtigungssystem, das dir ermöglicht, genau zu steuern, wer Tutorials erstellen, bearbeiten und verwalten darf. Diese Anleitung erklärt dir, wie das Berechtigungssystem funktioniert und wie du es optimal für deine Organisation einsetzen kannst.

## Wie funktionieren die Berechtigungen?

### Grundprinzip
Das Tutorial-System arbeitet mit drei Berechtigungsebenen, die bestimmen, was ein Benutzer mit Tutorials machen darf:

1. **Ansehen** - Tutorials und Inhalte lesen
2. **Erstellen und Bearbeiten** - Neue Tutorials anlegen und bestehende bearbeiten
3. **Löschen und Verwalten** - Tutorials löschen und Systemeinstellungen vornehmen

### Standard-Berechtigungen
Standardmässig haben alle Benutzer das Recht, freigegebene Tutorials anzusehen. Um Tutorials zu erstellen oder zu bearbeiten, benötigen sie jedoch spezielle Berechtigungen.

## Wer hat welche Berechtigungen?

### ELIZA Administrator
Als **ELIZA Administrator** hast du automatisch volle Berechtigungen für das gesamte Tutorial-System:
- Alle Tutorials ansehen (auch geschützte und nicht freigegebene)
- Neue Tutorials, Ordner und Themen erstellen
- Bestehende Tutorials bearbeiten und löschen
- System-Objekte verwalten (ELIZA Handbuch)
- Berechtigungen für andere Benutzer konfigurieren

**System-Objekte**: Das ELIZA Handbuch selbst ist als System-Objekt markiert und kann nur von Administratoren bearbeitet werden. Dies schützt die offizielle Dokumentation vor versehentlichen Änderungen.

### Tutorial-Ersteller
Benutzer mit Tutorial-Berechtigungen können:
- Neue Tutorials, Ordner und Themen erstellen
- Eigene Tutorials bearbeiten
- Tutorials für Organisationseinheiten erstellen (wenn sie Mitglied sind)
- Mitgeltende Dokumente verknüpfen
- Tutorial-Status verwalten (Entwurf → Prüfung → Freigabe)

**Wichtig**: Tutorial-Ersteller können keine System-Objekte wie das ELIZA Handbuch bearbeiten - dies bleibt Administratoren vorbehalten.

### Standard-Benutzer
Benutzer ohne spezielle Berechtigungen können:
- Freigegebene Tutorials ansehen
- Tutorials absolvieren und als erledigt markieren
- Verknüpfte Dokumente öffnen
- Lernfortschritt verfolgen

## Berechtigungen einrichten

### Option 1: Benutzerdefinierte Gruppe erstellen (empfohlen)

Die beste Methode, um Tutorial-Berechtigungen zu vergeben, ist über eine benutzerdefinierte Gruppe. So kannst du mehrere Benutzer gleichzeitig berechtigen:

1. **Gruppe erstellen**
   - Gehe zu *Administration* → *Gruppen*
   - Erstelle eine neue Gruppe (z.B. "Tutorial-Autoren")

2. **Berechtigungen zuweisen**
   - Wähle folgende Berechtigungen aus:
     - `tutorials | topic | Can add topic` (Themen erstellen)
     - `tutorials | topic | Can change topic` (Themen bearbeiten)
     - `tutorials | folder | Can add folder` (Ordner erstellen)
     - `tutorials | folder | Can change folder` (Ordner bearbeiten)
     - `tutorials | item | Can add item` (Tutorials erstellen)
     - `tutorials | item | Can change item` (Tutorials bearbeiten)

3. **Benutzer zur Gruppe hinzufügen**
   - Füge die gewünschten Benutzer zur Gruppe hinzu
   - Alle Gruppenmitglieder erhalten automatisch die Berechtigungen

### Option 2: Individuelle Benutzerberechtigungen

Für Einzelfälle kannst du auch direkt Berechtigungen an einzelne Benutzer vergeben:

1. Gehe zu *Administration* → *Benutzer*
2. Wähle den Benutzer aus
3. Scrolle zu "Benutzerberechtigungen"
4. Füge die gewünschten Tutorial-Berechtigungen hinzu

### Option 3: Organisationseinheiten-basierte Berechtigungen

Wenn du mit Organisationseinheiten arbeitest, kannst du Tutorials bestimmten Einheiten zuweisen:

1. Beim Erstellen eines Tutorials oder Ordners
2. Wähle "Beteiligte Organisationseinheiten" aus
3. Alle Mitglieder dieser Einheiten erhalten automatisch Zugriff
4. Dies ist ideal für abteilungsspezifische Schulungsmaterialien

## Sichtbarkeits-Stufen

Das Tutorial-System bietet zwei Sichtbarkeits-Stufen:

### Normal
- Alle berechtigten Benutzer können das Tutorial sehen
- Ideal für allgemeine Schulungsmaterialien
- Standard-Einstellung für neue Tutorials

### Geschützt
- Nur Admins und explizit zugewiesene Benutzer sehen das Tutorial
- Perfekt für sensible oder abteilungsspezifische Inhalte
- Kann mit Organisationseinheiten kombiniert werden

## Best Practices

**Gruppenbasierte Verwaltung**: Verwende immer Gruppen statt individueller Berechtigungen. Das macht die Verwaltung einfacher und übersichtlicher.

**Klare Namensgebung**: Benenne Gruppen klar und eindeutig (z.B. "Tutorial-Autoren HR", "Tutorial-Ersteller Qualität").

**Regelmässige Überprüfung**: Überprüfe regelmässig, wer Tutorial-Berechtigungen hat und ob diese noch benötigt werden.

**Organisationseinheiten nutzen**: Nutze Organisationseinheiten für abteilungsspezifische Tutorials - das automatisiert die Rechtevergabe.

**System-Objekte schützen**: Das ELIZA Handbuch ist als System-Objekt geschützt. Erstelle für eigene Inhalte separate Ordner.

**Test-Zugriff**: Teste nach dem Einrichten der Berechtigungen immer mit einem Benutzer-Account, ob alles wie gewünscht funktioniert.

## Häufige Szenarien

### Szenario 1: Alle Mitarbeiter sollen Tutorials erstellen können
1. Erstelle eine Gruppe "Alle Tutorial-Autoren"
2. Weise alle Tutorial-Berechtigungen zu
3. Füge alle relevanten Mitarbeiter zur Gruppe hinzu

### Szenario 2: Nur HR darf Onboarding-Tutorials erstellen
1. Erstelle einen geschützten Ordner "Onboarding"
2. Weise der HR-Organisationseinheit den Ordner zu
3. Nur HR-Mitglieder können diesen Ordner sehen und bearbeiten

### Szenario 3: Qualitätsmanagement verwaltet das Handbuch
1. Erstelle eine Gruppe "QM Tutorial-Manager"
2. Weise volle Tutorial-Berechtigungen zu
3. Füge QM-Mitarbeiter zur Gruppe hinzu
4. QM kann nun alle Tutorials verwalten (ausser System-Objekte)

## Technische Details

### Berechtigungs-Hierarchie
Das System prüft Berechtigungen in folgender Reihenfolge:
1. Ist das Modul aktiviert? (`TUTORIALS_ENABLED`)
2. Ist der Benutzer ELIZA Administrator? → Voller Zugriff
3. Ist es ein System-Objekt? → Nur Admins dürfen bearbeiten
4. Hat der Benutzer die erforderliche Django-Berechtigung?
5. Ist der Benutzer Mitglied einer zugewiesenen Organisationseinheit?

### Cache-Invalidierung
Bei Änderungen an Berechtigungen werden alle relevanten Caches automatisch geleert, sodass Änderungen sofort wirksam werden.

### Berechtigungs-Methoden
Die Modelle `Topic`, `Folder` und `Item` verfügen über folgende Berechtigungs-Methoden:
- `has_view_permission(user)` - Berechtigung zum Ansehen
- `has_change_permission(user)` - Berechtigung zum Bearbeiten
- `has_delete_permission(user)` - Berechtigung zum Löschen

## Zusammenfassung

Das Berechtigungssystem für das ELIZA Handbuch ist flexibel und sicher gestaltet:

✅ **Administratoren** haben volle Kontrolle über alle Tutorials und System-Objekte
✅ **Benutzerdefinierte Gruppen** ermöglichen einfache Verwaltung vieler Benutzer
✅ **Organisationseinheiten** automatisieren abteilungsspezifische Berechtigungen
✅ **System-Objekte** schützen die offizielle ELIZA-Dokumentation
✅ **Flexible Sichtbarkeit** erlaubt geschützte und öffentliche Tutorials

Mit diesem Berechtigungssystem kannst du sicherstellen, dass deine Tutorials sicher verwaltet werden und gleichzeitig allen relevanten Benutzern zur Verfügung stehen.

*Dein ELIZA-Team* 🐢
