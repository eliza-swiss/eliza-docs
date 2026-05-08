---
title: "Allgemeine Einstellungen"
description: ""
weight: "7"
tags:
  - "settings"
  - "configuration"
  - "general"
  - "global"
---


# Allgemeine Einstellungen

Diese Referenz erklärt die **Allgemeinen Einstellungen** in ELIZA, die global für alle Benutzer gelten.

## 🎯 Über dieses Kapitel

Dieses Kapitel richtet sich an **Administratoren** und erklärt:

- Wie du die Allgemeinen Einstellungen aufrufst
- Welche Einstellungen verfügbar sind
- Was jede Einstellung bewirkt
- Best Practices für die Konfiguration

> **💡 Tipp:** Allgemeine Einstellungen wirken sich auf ALLE Benutzer aus. Teste Änderungen zuerst in einer Test-Umgebung.

## Zugriff auf Allgemeine Einstellungen

### Voraussetzungen

Um die Allgemeinen Einstellungen zu verwalten, benötigst du:

- **Berechtigung**: `core.change_user` Permission
- **Rolle**: Mitglied der Gruppe `Benutzer verwalten (Admin)` oder Superuser-Status

### Navigation

**Dashboard → Einstellungen → Allgemeine Einstellungen**

Alternativ direkt via URL: `/core/general-settings/`

## Verfügbare Einstellungen

Die Einstellungen sind in folgende Kategorien gruppiert:

### Region & Währung

#### Land

- **Beschreibung**: Wähle das Land für deine Organisation aus
- **Verwendung**: Wird für die Standardsprache und regionale Einstellungen verwendet
- **Empfehlung**: Setze dies auf `Schweiz` für Schweizer Organisationen

#### Währung

- **Beschreibung**: Wähle die Standardwährung aus
- **Verfügbare Optionen**:
  - CHF (Schweizer Franken)
  - EUR (Euro)
  - USD (US-Dollar)
  - Weitere internationale Währungen
- **Verwendung**: Wird in Spesen, Verträgen, Projekten und anderen Finanzmodulen verwendet
- **Empfehlung**: Setze dies auf `CHF` für Schweizer Organisationen

---

### Sprachen

#### Standard-Sprache

- **Beschreibung**: Wähle die Standard-Sprache für ELIZA aus
- **Verfügbare Optionen**:
  - Deutsch (de)
  - Französisch (fr)
  - Englisch (en)
  - Italienisch (it)
- **Verwendung**: Wird als Standard-Sprache für neue Benutzer und System-Texte verwendet
- **Empfehlung**: Setze dies auf die Hauptsprache deiner Organisation

#### Verfügbare Sprachen

- **Beschreibung**: Wähle die verfügbaren Sprachen für Benutzer aus
- **Verwendung**: Benutzer können aus diesen Sprachen in ihren Profil-Einstellungen wählen
- **Empfehlung**: Aktiviere alle Sprachen, die in deiner Organisation gesprochen werden
- **Standard**: Alle verfügbaren Sprachen sind aktiviert

---

### Einstiegspunkt

#### Dashboard

- **Beschreibung**: Wähle die Startseite für das Dashboard aus
- **Verfügbare Optionen** (abhängig von aktivierten Modulen):
  - Dashboard (Standard)
  - News & Events
  - Organisation & HR
  - Tutorials
  - Prozesse
  - Spaces
  - DMS
  - Meldungen
- **Verwendung**: Wenn ein Benutzer auf das ELIZA-Logo klickt oder die Startseite aufruft, wird diese Seite angezeigt
- **Empfehlung**: Lass dies auf `Dashboard` für die beste Übersicht

---

### Benachrichtigungen

#### Lesebestätigung bei Benachrichtigungen

- **Beschreibung**: Aktiviere die Lesebestätigung bei Benachrichtigungen
- **Verwendung**: Ermöglicht es, zu sehen, ob eine Benachrichtigung gelesen wurde
- **Standard**: Deaktiviert
- **Empfehlung**: Aktiviere dies, wenn du nachverfolgen möchtest, ob wichtige Benachrichtigungen gelesen wurden

#### Hierarchische Benutzerauswahl

- **Beschreibung**: Aktiviert die übersichtliche Baumansicht für die Benutzerauswahl bei Benachrichtigungen
- **Verwendung**: Mitarbeitende werden nach Organisationseinheiten gruppiert und alphabetisch nach Nachname sortiert
- **Standard**: Deaktiviert
- **Empfehlung**: Aktiviere dies bei grossen Organisationen mit vielen Benutzern (50+ Benutzer)

**Vorteile der hierarchischen Ansicht:**
- ✅ Übersichtliche Darstellung nach Organisationseinheiten
- ✅ Alphabetische Sortierung nach Nachname
- ✅ Schnelleres Finden von Benutzern
- ✅ Bessere Übersicht bei vielen Benutzern

---

### Favoriten

#### Standard-Ansichtsmodus für Favoriten

- **Beschreibung**: Wähle den Standard-Ansichtsmodus für Favoriten aus
- **Verfügbare Optionen**:
  - **Karten**: Visuelle Karten-Ansicht mit Vorschaubildern
  - **Tabelle**: Kompakte Tabellen-Ansicht mit mehr Details
- **Verwendung**: Benutzer können diesen individuell überschreiben
- **Standard**: Karten
- **Empfehlung**: Lass dies auf `Karten` für eine visuelle Darstellung oder wähle `Tabelle` für eine kompakte Ansicht

---

### Konfigurationen

#### Sidebar Badges

- **Beschreibung**: Wähle aus, ob die Sidebar-Badges angezeigt werden sollen
- **Verwendung**: Navigationssymbole in der Seitenleiste helfen dabei, den Status oder wichtige Informationen schnell sichtbar zu machen
- **Standard**: Aktiviert
- **Empfehlung**: Aktiviere dies für bessere Übersicht und schnellere Navigation

**Beispiele für Sidebar-Badges:**
- Anzahl neuer Benachrichtigungen
- Anzahl offener Aufgaben
- Status-Indikatoren für Module

#### Neues Dashboard

- **Beschreibung**: Aktiviere das neue Dashboard-Design mit erweiterten Funktionen und verbesserter Benutzeroberfläche
- **Standard**: Aktiviert (empfohlen)
- **Empfehlung**: Aktiviere dies für die beste Benutzererfahrung
- **Hinweis**: Das neue Dashboard bietet verbesserte Performance und moderne UI-Elemente

#### WOPI Co-Authoring Support

- **Beschreibung**: Aktiviere den Co-Authoring Support für WOPI
- **Verwendung**: Ermöglicht es mehreren Benutzern, gleichzeitig an Dokumenten zu arbeiten
- **Voraussetzung**: WOPI-Server (z.B. Microsoft Office Online Server oder Collabora Online) muss konfiguriert sein
- **Standard**: Deaktiviert
- **Empfehlung**: Aktiviere dies nur, wenn du einen WOPI-Server konfiguriert hast und Co-Authoring benötigst

**Vorteile von Co-Authoring:**
- ✅ Mehrere Benutzer können gleichzeitig an einem Dokument arbeiten
- ✅ Echtzeit-Synchronisation von Änderungen
- ✅ Reduziert Konflikte bei der Dokumentenbearbeitung

#### Versionsvergleich in Textform

- **Beschreibung**: Aktiviere den Versionsvergleich in Textform für Word-Dokumente
- **Verwendung**: Zeigt Unterschiede zwischen Dokumentversionen als Text-Diff an
- **Standard**: Deaktiviert
- **Empfehlung**: Aktiviere dies, wenn du detaillierte Text-Unterschiede zwischen Versionen sehen möchtest

**Funktionsweise:**
- Konvertiert Word-Dokumente in Text
- Zeigt hinzugefügte und entfernte Zeilen an
- Nützlich für Änderungsverfolgung und Audits

---

### User Manual / Hilfe

#### Hilfe-Sichtbarkeit

- **Beschreibung**: Steuere, welche Benutzer die Hilfe-Menüeinträge sehen
- **Standard**: Alle Benutzer
- **Verfügbare Modi**:

| Modus | Beschreibung |
|-------|-------------|
| **Alle Benutzer** | Alle eingeloggten Benutzer sehen die Hilfe (Standard) |
| **Nur aktive Benutzer** | Nur Benutzer mit dem Benutzertyp "aktiv" sehen die Hilfe |
| **Nur Administratoren** | Nur ELIZA-Administratoren sehen die Hilfe |
| **Nur Benutzer mit Berechtigung** | Nur Benutzer mit der Berechtigung "Kann Hilfe und Benutzerhandbuch sehen" |

**Was wird gesteuert?**
- Der Hauptmenüpunkt **Hilfe** in der Sidebar
- Die **Hilfe-Links** innerhalb der Untermenüs aller Module (z.B. Dashboard → Hilfe, Dokumente → Hilfe)

> **Hinweis:** Die Seite **Was gibt's Neues** bleibt immer für alle Benutzer sichtbar, unabhängig von dieser Einstellung.

**Berechtigung zuweisen (Modus "Nur mit Berechtigung"):**

1. Navigiere zu **Benutzerverwaltung → Gruppen**
2. Wähle die gewünschte Gruppe aus (oder erstelle eine neue, z.B. "Hilfe-Zugriff")
3. Füge die Berechtigung **Kann Hilfe und Benutzerhandbuch sehen** hinzu
4. Speichere die Änderungen

> **Tipp:** Erstelle eine eigene Gruppe für den Hilfe-Zugriff. So kannst du den Zugriff einfach über Gruppenmitgliedschaften steuern.

---

## Einstellungen ändern

### Schritt-für-Schritt Anleitung

1. **Navigiere zu den Einstellungen**
   - Öffne das Dashboard
   - Klicke auf **Einstellungen** in der Sidebar
   - Wähle **Allgemeine Einstellungen**

2. **Ändere die gewünschten Einstellungen**
   - Scrolle zu der Kategorie, die du ändern möchtest
   - Ändere die Werte nach Bedarf
   - Beachte die Hilfe-Texte unter jedem Feld

3. **Speichere die Änderungen**
   - Klicke auf **Speichern** am Ende des Formulars
   - Eine Bestätigungsmeldung wird angezeigt: "Einstellungen gespeichert"

4. **Überprüfe die Änderungen**
   - Ändere bei Bedarf die Seite oder melde dich ab und wieder an
   - Teste die geänderten Einstellungen

> **⚠️ Wichtig:** Allgemeine Einstellungen wirken sich sofort auf alle Benutzer aus. Teste Änderungen zuerst in einer Test-Umgebung.

---

## Best Practices

### Region & Währung

✅ **Empfehlung**: Setze diese Einstellungen während der initialen ELIZA-Konfiguration und ändere sie danach nicht mehr

❌ **Vermeide**: Häufige Änderungen der Währung - dies kann zu Inkonsistenzen in Finanzberichten führen

### Sprachen

✅ **Empfehlung**: Aktiviere alle Sprachen, die in deiner Organisation gesprochen werden

✅ **Empfehlung**: Setze die Standard-Sprache auf die Hauptsprache deiner Organisation

❌ **Vermeide**: Zu viele aktivierte Sprachen - dies kann Benutzer verwirren

### Dashboard-Einstiegspunkt

✅ **Empfehlung**: Lass dies auf `Dashboard` für neue Benutzer

✅ **Empfehlung**: Ändere dies nur, wenn ein bestimmtes Modul der Hauptfokus deiner Organisation ist

**Beispiele:**
- Fokus auf News & Events → Setze auf `/streams/`
- Fokus auf Prozessmanagement → Setze auf `/prozesse/`
- Fokus auf Dokumentenmanagement → Setze auf `/dms/`

### Benachrichtigungen

✅ **Empfehlung**: Aktiviere Lesebestätigung für wichtige Benachrichtigungen

✅ **Empfehlung**: Aktiviere hierarchische Benutzerauswahl bei 50+ Benutzern

❌ **Vermeide**: Lesebestätigung für unwichtige Benachrichtigungen - dies kann Benutzer überfordern

### Dashboard & UI

✅ **Empfehlung**: Aktiviere das neue Dashboard für bessere Performance

✅ **Empfehlung**: Aktiviere Sidebar-Badges für bessere Übersicht

✅ **Empfehlung**: Wähle Standard-Ansichtsmodus für Favoriten basierend auf Benutzer-Feedback

### WOPI & Co-Authoring

✅ **Empfehlung**: Aktiviere WOPI Co-Authoring nur, wenn ein WOPI-Server konfiguriert ist

⚠️ **Wichtig**: Teste Co-Authoring gründlich, bevor du es in Produktion aktivierst

❌ **Vermeide**: Co-Authoring ohne entsprechende WOPI-Server-Konfiguration

### Versionsvergleich

✅ **Empfehlung**: Aktiviere Versionsvergleich für regulierte Umgebungen (ISO 9001, ISO 13485, etc.)

✅ **Empfehlung**: Nutze Versionsvergleich für Audits und Compliance

---

## Häufige Fragen (FAQ)

### Wie oft sollte ich die Allgemeinen Einstellungen ändern?

**Antwort**: Idealerweise solltest du die Allgemeinen Einstellungen während der initialen ELIZA-Konfiguration setzen und danach nur bei Bedarf ändern.

**Ausnahmen:**
- Dashboard-Einstiegspunkt kann je nach Fokus geändert werden
- Sidebar-Badges und UI-Einstellungen können basierend auf Benutzer-Feedback angepasst werden

### Können Benutzer die Einstellungen überschreiben?

**Antwort**: Einige Einstellungen können von Benutzern individuell überschrieben werden:

- **Sprache**: Benutzer können ihre bevorzugte Sprache in den Profil-Einstellungen wählen
- **Favoriten-Ansicht**: Benutzer können zwischen Karten und Tabelle wechseln

**Globale Einstellungen** (nicht überschreibbar):
- Land und Währung
- Dashboard-Einstiegspunkt
- WOPI Co-Authoring
- Versionsvergleich

### Was passiert, wenn ich die Währung ändere?

**Antwort**: Die Währung wird für alle neuen Finanz-Einträge verwendet. Bestehende Einträge behalten ihre ursprüngliche Währung.

**⚠️ Wichtig**: Ändere die Währung nur während der initialen Konfiguration oder mit grosser Vorsicht. Inkonsistenzen in Finanzberichten sind möglich.

### Wie teste ich Änderungen, bevor sie alle Benutzer betreffen?

**Antwort**: Leider gibt es keine Test-Umgebung für Allgemeine Einstellungen. Empfehlungen:

1. **Test-Installation**: Teste Änderungen in einer separaten Test-Installation
2. **Kommunikation**: Informiere Benutzer über bevorstehende Änderungen
3. **Zeitpunkt**: Ändere Einstellungen ausserhalb der Hauptarbeitszeiten

### Warum sehe ich bestimmte Dashboard-Optionen nicht?

**Antwort**: Dashboard-Optionen hängen von den aktivierten Modulen ab.

**Beispiel**: Die Option `/streams/` (News & Events) erscheint nur, wenn das Modul `STREAMS_ENABLED=True` ist.

**Lösung**: Aktiviere das entsprechende Modul in der Constance-Konfiguration.

### Kann ich mehrere Standard-Sprachen haben?

**Antwort**: Nein, es gibt nur eine Standard-Sprache. Aber du kannst mehrere **verfügbare Sprachen** aktivieren, aus denen Benutzer wählen können.

---

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Wie du die Allgemeinen Einstellungen aufrufst
- ✅ Welche Einstellungen verfügbar sind und was sie bewirken
- ✅ Best Practices für die Konfiguration
- ✅ Häufige Fragen und Antworten

## Nächste Schritte

**Zurück zur Übersicht:** [Inhaltsverzeichnis]({{< ref "_index" >}})

**Verwandte Kapitel:**
- [Kapitel 1: Erste Schritte]({{< ref "01-erste-schritte" >}}) - Grundlagen der Benutzerverwaltung
- [Kapitel 4: Berechtigungskonzept]({{< ref "04-berechtigungen" >}}) - Berechtigungen und Rollen

**Praktische Anwendung:**
- Konfiguriere die Allgemeinen Einstellungen während der initialen ELIZA-Einrichtung
- Teste Änderungen in einer Test-Umgebung
- Dokumentiere deine Konfigurations-Entscheidungen

---

**← Zurück zu: [Benutzertypen-Referenz]({{< ref "06-benutzertypen-referenz" >}}) | Zurück zum [Inhaltsverzeichnis]({{< ref "_index" >}})**
