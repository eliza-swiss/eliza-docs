---
title: "Benutzerverwaltung"
description: "Benutzerverwaltung, Berechtigungen und System-Einstellungen"
weight: 5
tags:
  - "overview"
  - "manual"
  - "core"
  - "einstellungen"
  - "benutzerverwaltung"
icon: "settings"
---


# Einstellungen & Benutzerverwaltung - Benutzerhandbuch

Willkommen zum umfassenden Benutzerhandbuch für die ELIZA Einstellungen und Benutzerverwaltung.

## Über dieses Handbuch

Dieses Handbuch hilft dir, Benutzer in ELIZA effektiv zu verwalten, Berechtigungen zu konfigurieren und das System nach deinen Anforderungen einzustellen. Es richtet sich sowohl an Administratoren als auch an Benutzer mit erweiterten Rechten.

![Übersicht Benutzerverwaltung](images/ueberblick.png)

## 📚 Kapitel-Übersicht

### [1. Erste Schritte](erste-schritte-in-der-benutzerverwaltung/)

**Einführung in die Benutzerverwaltung**

Lerne die Grundlagen der Benutzerverwaltung kennen: Navigation, Hauptfunktionen und erste Schritte.

**Inhalte:**
- Was ist die Benutzerverwaltung?
- Navigation und Benutzeroberfläche
- Benutzer-Übersicht verstehen
- Filter und Suchfunktionen

**Zielgruppe:** Alle Administratoren
**Lesezeit:** ~10 Minuten

---

### [2. Benutzer verwalten](benutzer-verwalten/)

**Benutzer erstellen, bearbeiten und verwalten**

Detaillierte Anleitungen für die tägliche Arbeit mit Benutzern in ELIZA.

**Inhalte:**
- Benutzer manuell erstellen
- Benutzerprofile bearbeiten
- Benutzertypen zuweisen (Aktiv, Lesen, Berater:in)
- Benutzer archivieren und reaktivieren
- Avatare und Profile verwalten
- Benutzer einladen (Onboarding)

**Zielgruppe:** Administratoren, HR-Verantwortliche
**Lesezeit:** ~20 Minuten

---

### [3. Benutzer-Import aus Excel](benutzer-import-aus-excel/)

**Mehrere Benutzer gleichzeitig importieren**

Lerne, wie du Benutzer effizient aus Excel-Dateien importierst und Zeit sparst.

**Inhalte:**
- Excel-Vorlage und Struktur
- Schritt-für-Schritt Import-Anleitung
- Gruppen-Zuordnung beim Import
- Häufige Fehler und Lösungen
- Best Practices für große Importe

**Zielgruppe:** Administratoren, HR beim Onboarding
**Lesezeit:** ~15 Minuten
**Besonderes:** Haupt-Kapitel für Excel-Import

---

### [4. Berechtigungskonzept](berechtigungskonzept/)

**Berechtigungen und Rollen verstehen**

Verstehe das mehrstufige Berechtigungssystem von ELIZA und setze es richtig ein.

**Inhalte:**
- System-Berechtigungen (Basis-Ebene)
- Systemgruppen (ELIZA-Rollen)
- Benutzerdefinierte Gruppen (Team-Gruppen)
- Benutzertypen und ihre Bedeutung
- Best Practices für Rechtevergabe
- Sicherheits-Empfehlungen

**Zielgruppe:** Administratoren, Security Officers
**Lesezeit:** ~25 Minuten

---

### [5. Systemgruppen-Referenz](systemgruppen-referenz/)

**Vollständige Liste aller Systemgruppen**

Nachschlagewerk für alle verfügbaren Systemgruppen in ELIZA.

**Inhalte:**
- Alle 82 Systemgruppen mit deutschen Bezeichnungen
- Beschreibung jeder Gruppe
- Gruppierung nach Modulen
- Berechtigungs-Level (Lesen, Hinzufügen, Admin)
- Spezial-Rollen (Reviewers, Approvers)

**Zielgruppe:** Administratoren, HR-Verantwortliche
**Lesezeit:** ~15 Minuten (als Nachschlagewerk)
**Besonderes:** Referenz-Kapitel zum Nachschlagen

---

### [6. Benutzertypen-Referenz](benutzertypen-referenz/)

**Automatische Berechnung der Benutzertypen**

Technische Referenz zur automatischen Benutzertyp-Zuweisung durch ELIZA.

**Inhalte:**
- Automatische Berechnungs-Logik
- Lese-Berechtigungen und Space-Berechtigungen
- Erweiterte Berechtigungen
- Objektverantwortlichkeiten (DMS, Prozesse, IKS)
- 5 detaillierte Praxis-Beispiele
- Spezialfälle und FAQ

**Zielgruppe:** Administratoren, Power-User
**Lesezeit:** ~20 Minuten
**Besonderes:** Detaillierte technische Erklärung

---

### [7. Allgemeine Einstellungen](allgemeine-einstellungen/)

**Globale ELIZA-Einstellungen konfigurieren**

Lerne, wie du die Allgemeinen Einstellungen verwaltest, die für alle Benutzer gelten.

**Inhalte:**
- Region & Währung konfigurieren
- Sprachen und Standard-Sprache festlegen
- Dashboard-Einstiegspunkt wählen
- Benachrichtigungen konfigurieren
- Favoriten-Ansichtsmodus festlegen
- UI-Konfigurationen (Sidebar-Badges, neues Dashboard)
- WOPI Co-Authoring und Versionsvergleich
- Best Practices und Empfehlungen

**Zielgruppe:** Administratoren, System-Verantwortliche
**Lesezeit:** ~15 Minuten
**Besonderes:** Globale Einstellungen für alle Benutzer

---

### [8. Microsoft Entra ID Synchronisation](microsoft-entra-id-synchronisation/)

**Automatische Benutzersynchronisation mit Microsoft Entra ID (Azure AD)**

Lerne, wie du Benutzer automatisch aus Microsoft Entra ID mit ELIZA synchronisierst.

**Inhalte:**
- Azure AD App Registration einrichten
- ELIZA API Token konfigurieren
- Konfigurationsdatei erstellen
- Dry-Run und echte Synchronisation
- Organisationseinheiten-Sync
- Automatisierung mit Cron/Systemd
- Troubleshooting und Best Practices

**Zielgruppe:** IT-Administratoren, System-Verantwortliche
**Lesezeit:** ~25 Minuten
**Besonderes:** Für mittlere bis grosse Organisationen mit Microsoft 365

---

### [9. Datenexport und Backup](datenexport-und-backup/)

**Vollständiger Datenexport bei Vertragskündigung**

Erfahre, wie ein vollständiges Backup aller ELIZA-Daten erstellt wird und wie du als Kunde die exportierten Daten verwendest.

**Inhalte:**
- Backup-Erstellung durch ELIZA-Team
- Struktur und Inhalt des Backup-Archivs
- JSON-Dateien öffnen und verstehen
- Media-Dateien extrahieren
- Daten in andere Systeme importieren
- Archivierung und Aufbewahrung

**Zielgruppe:** ELIZA-Mitarbeitende, Kunden bei Kündigung
**Lesezeit:** ~15 Minuten
**Besonderes:** Wichtig für Datensicherheit und Datenportabilität

---

### [10. ELIZA als Mobile App nutzen](eliza-als-mobile-app-nutzen/)

**App installieren, Benachrichtigungen aktivieren**

Lerne, wie du ELIZA als App auf deinem Smartphone installierst und Push-Benachrichtigungen einrichtest.

**Inhalte:**
- App installieren (Android, iOS, Desktop)
- Push-Benachrichtigungen aktivieren und verwalten
- Plattform-spezifische Besonderheiten (iOS-Einschränkungen)
- Offline-Nutzung
- Häufige Fragen und Troubleshooting

**Zielgruppe:** Alle Benutzer
**Lesezeit:** ~10 Minuten

---

## Zielgruppen

### 🔧 Administratoren (Superuser)
**Vollzugriff auf alle Funktionen**

- Lies alle Kapitel für umfassendes Verständnis
- Fokus auf Kapitel 3 (Import), 4 (Berechtigungen), 5 (Systemgruppen), 6 (Benutzertypen) und 7 (Allgemeine Einstellungen)
- Empfohlen: Kapitel in Reihenfolge lesen
- Nutze Kapitel 5, 6 und 7 als Nachschlagewerke

### 👥 HR-Verantwortliche
**Benutzerverwaltung und Onboarding**

- Fokus auf Kapitel 1, 2 und 3
- Besonders wichtig: Excel-Import (Kapitel 3)
- Kapitel 4 und 5 für Verständnis der Rollen und Gruppen

### 🔐 Team-Leads
**Grundlegendes Verständnis der Berechtigungen**

- Fokus auf Kapitel 1, 4 und 5
- Verständnis der Gruppenkonzepte
- Best Practices für Team-Organisation

## Verwendete Konventionen

In diesem Handbuch verwenden wir folgende Konventionen:

- **Fett**: UI-Elemente, Buttons und wichtige Begriffe
- `Code`: Technische Begriffe und Konfigurationswerte
- > Blockquote: Tipps, Warnungen und wichtige Hinweise
- → : Navigation (z.B. Dashboard → Einstellungen → Benutzer)
- ✅ : Best Practice / Empfehlung
- ❌ : Häufiger Fehler / Vermeidung
- 💡 : Tipp
- ⚠️ : Wichtige Warnung

## Voraussetzungen

Um die Benutzerverwaltung zu nutzen, benötigst du:

- **Berechtigung**: Mindestens `core.change_user` Permission
- **Rolle**: Mitglied der Gruppe `eliza_admin` oder Superuser-Status
- **Zugriff**: ELIZA-Login mit entsprechenden Rechten

> **💡 Tipp:** Wenn du unsicher bist, ob du die nötigen Rechte hast, kontaktiere deinen Administrator.

## Schnelleinstieg

**Häufigste Aufgaben:**

1. **Einzelnen Benutzer erstellen** → Kapitel 2, Abschnitt "Benutzer manuell erstellen"
2. **Mehrere Benutzer importieren** → Kapitel 3, vollständige Anleitung
3. **Benutzergruppen zuweisen** → Kapitel 4, Abschnitt "Systemgruppen"
4. **Benutzer einladen** → Kapitel 2, Abschnitt "Benutzer einladen"
5. **Systemgruppen nachschlagen** → Kapitel 5, Systemgruppen-Referenz
6. **Benutzertyp verstehen** → Kapitel 6, Benutzertypen-Referenz
7. **Allgemeine Einstellungen konfigurieren** → Kapitel 7, vollständige Anleitung
8. **Entra ID Synchronisation einrichten** → Kapitel 8, vollständige Anleitung

## Feedback und Verbesserungen

Dieses Handbuch wird kontinuierlich verbessert. Wenn du Fehler findest, Fragen hast oder Verbesserungsvorschläge einbringen möchtest, kontaktiere bitte:

- **Support**: support@eliza.swiss
- **Dokumentation**: docs@eliza.swiss

## Letzte Aktualisierung

**Version**: 2025.11.27
**Autor**: ELIZA Documentation Team

**Änderungen:**

- Kapitel 8 hinzugefügt: Microsoft Entra ID Synchronisation (Azure AD Integration)
- Kapitel 7 hinzugefügt: Allgemeine Einstellungen (Region, Währung, Sprachen, UI-Konfigurationen)
- Kapitel 5 hinzugefügt: Systemgruppen-Referenz (82 Systemgruppen)
- Kapitel 6 hinzugefügt: Benutzertypen-Referenz (Automatische Berechnung)
- Kapitel 2 erweitert: Detaillierte Benutzertypen-Erklärungen
- Kapitel 4 bereinigt: Falsche Gruppennamen entfernt

---

**Viel Erfolg beim Verwalten deiner Benutzer in ELIZA!** 🚀
