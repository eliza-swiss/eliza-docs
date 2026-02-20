---
category: "Meldungen & Issue-Tracker"
slug: "meldungs-verschiebe-zustaendigkeit"
---

## Meldungen zwischen Meldekreisen verschieben

Wir haben eine neue Funktion zum Verschieben von Meldungen zwischen verschiedenen Meldekreisen eingeführt:

### 🔒 Automatische Zuständigkeits-Prüfung

**Intelligente Berechtigungsprüfung:** Das System prüft automatisch, ob die zugewiesene Person im Ziel-Meldekreis berechtigt ist:

- **Admin-Berechtigung**: Prüfung ob die Person zu den Administratoren des Ziel-Meldekreises gehört
- **Team-Mitgliedschaft**: Prüfung ob die Person Mitglied des Ziel-Meldekreis-Teams ist
- **Automatische Entfernung**: Falls keine Berechtigung vorhanden ist, wird die Zuständigkeit automatisch entfernt

### 📋 Vollständige Dokumentation

**Lückenloser Audit-Trail:** Alle Änderungen werden vollständig dokumentiert:

- Verschiebung zwischen Meldekreisen wird protokolliert
- Information über ursprünglichen Status wird gespeichert
- Entfernung der Zuständigkeit wird explizit im System-Kommentar dokumentiert
- Grund der Entfernung (fehlende Berechtigung) wird transparent kommuniziert

### 🎯 Benutzerfreundlichkeit

**Was bedeutet das für dich:**

- Keine manuellen Nacharbeiten mehr bei Zuständigkeits-Konflikten
- Transparente Protokollierung aller Änderungen
- Automatische Einhaltung der Berechtigungsregeln
- Schutz vor versehentlichen Zuweisungen an nicht-berechtigte Personen

### 🔧 Technische Details

**Für Administratoren:**

- Die Prüfung erfolgt automatisch beim Verschieben
- Keine zusätzliche Konfiguration erforderlich
- Rückwärtskompatibel mit bestehenden Installationen
- Umfassende Tests gewährleisten Stabilität

Diese neue Funktion macht die Meldungsverwaltung flexibler und sicherer, während gleichzeitig die Datenintegrität und Berechtigungsregeln automatisch eingehalten werden.