---
title: "Berechtigungskonzept"
description: ""
weight: "11"
tags:
  - "berechtigungen"
  - "rechte"
  - "sichtbarkeit"
  - "klassifikation"
  - "systemgruppen"
---


# Berechtigungskonzept

Verstehe Zugriffsrechte und Sichtbarkeit im Projekte-Modul. Das Berechtigungskonzept von ELIZA basiert auf einem dreistufigen System aus System-Berechtigungen, Klassifikation und projekt-spezifischen Rollen.

## Berechtigungs-Hierarchie

ELIZA verwendet ein dreistufiges Berechtigungsmodell:

```text
┌────────────────────────────────────────────────────┐
│  1. System-Berechtigungen                          │
│     ↓                                              │
│  2. Klassifikation (normal/vertraulich)            │
│     ↓                                              │
│  3. Projekt-spezifische Rollen                     │
│     (Federführung, Admins, Contributors, etc.)     │
└────────────────────────────────────────────────────┘
```

**Wichtig**: Alle drei Ebenen müssen erfüllt sein für den Zugriff!

## System-Berechtigungen

### Basis-Berechtigungen

ELIZA verwendet die Standard-Berechtigungen für Projekte:

| Berechtigung | Technischer Name | Beschreibung |
|--------------|------------------|--------------|
| **Ansehen** | `projects.view_project` | Projekte in Listen sehen und Details öffnen |
| **Hinzufügen** | `projects.add_project` | Neue Projekte erstellen |
| **Ändern** | `projects.change_project` | Projektdaten bearbeiten |
| **Löschen** | `projects.delete_project` | Projekte löschen (Super-Admin) |

### Spezielle Berechtigung

| Berechtigung | Technischer Name | Beschreibung |
|--------------|------------------|--------------|
| **Genehmigen** | `projects.approve_project` | Workflow-Transitionen (review, reject, etc.) durchführen |

**Wichtig**: `projects.delete_project` ist die "Super-Admin" Berechtigung - sie gibt Zugriff auf ALLE Projekte, auch vertrauliche!

## Systemgruppen für Projekte

ELIZA definiert im Core-Modul drei Standard-Systemgruppen für Projekte:

### 1. projects_users (Lesen)

**Berechtigungen:**
- `projects.view_project` ✅
- `projects.add_project` ❌
- `projects.change_project` ❌
- `projects.delete_project` ❌

**Verwendung:**
- Standard-Benutzer die Projekte **ansehen** möchten
- Lesezugriff auf normale (nicht-vertrauliche) Projekte
- Keine Bearbeitungsrechte

**Typische Anwendungsfälle:**
- Mitarbeitende die Projekt-Übersicht benötigen
- Controlling und Management für Reporting
- Stakeholder die informiert bleiben wollen

### 2. projects_contributors (Lesen und Hinzufügen)

**Berechtigungen:**
- `projects.view_project` ✅
- `projects.add_project` ✅
- `projects.change_project` ❌
- `projects.delete_project` ❌

**Verwendung:**
- Benutzer die **neue Projekte erstellen** können
- Können bestehende Projekte ansehen
- Können als Contributors hinzugefügt werden
- Keine Bearbeitungsrechte auf fremde Projekte

**Typische Anwendungsfälle:**
- Projektleiter die neue Projekte starten
- Team-Mitglieder die Projekt-Initiierung durchführen
- Abteilungsleiter für ihre Bereiche

### 3. projects_admin (Vollzugriff)

**Berechtigungen:**
- `projects.view_project` ✅
- `projects.add_project` ✅
- `projects.change_project` ✅
- `projects.delete_project` ✅
- `projects.approve_project` ✅

**Verwendung:**
- Super-Admins mit **vollem Zugriff**
- Können ALLE Projekte sehen (auch vertrauliche!)
- Können alle Projekte bearbeiten und löschen
- Können Workflow-Transitionen durchführen

**Typische Anwendungsfälle:**
- Geschäftsführung
- IT-Administratoren
- PMO (Project Management Office)
- Qualitätsmanagement-Beauftragte

### Systemgruppen verwalten

**Navigation**: Core → Systemgruppen → projects_users/projects_contributors/projects_admin

**Benutzer zu Systemgruppen hinzufügen:**

1. Öffne die Systemgruppe in der Core-Verwaltung
2. Klicke auf **"Benutzer verwalten"**
3. Wähle die gewünschten Benutzer aus
4. Speichere die Änderungen

**Hinweis**: Systemgruppen und ihre Berechtigungen können nicht geändert werden - nur die Mitgliedschaften.

## Klassifikation

Die Klassifikation eines Projekts bestimmt die grundlegende Sichtbarkeit.

### Normal (official)

**Sichtbarkeit:**
- Für **ALLE** Benutzer mit `projects.view_project` sichtbar
- Standard-Einstellung für neue Projekte
- Projekt erscheint in Listen und Übersichten

**Verwendung:**
- Normale Geschäftsprojekte
- Öffentliche Information innerhalb der Organisation
- Team-übergreifende Zusammenarbeit
- Transparenz gewünscht

**Beispiele:**
- Website-Relaunch
- Neue Produktentwicklung
- Marketing-Kampagne
- IT-Infrastruktur-Projekt
- Prozessoptimierung

### Vertraulich (classified)

**Sichtbarkeit:**
- **NUR** für direkt Beteiligte sichtbar:
  - ✅ Benutzer mit `projects.delete_project` (Super-Admins)
  - ✅ Projekt-Admins
  - ✅ Contributors (Projektteam)
  - ✅ Federführung (als Mitarbeitender)
  - ✅ Mitwirkende (ProjectAssignments)
- **NICHT** für andere Benutzer sichtbar (auch nicht mit `projects.view_project`!)
- Projekt erscheint NICHT in allgemeinen Listen

**Verwendung:**
- Sensible Projekte
- Personalbezogene Daten (HR-Projekte)
- Strategische Projekte vor Bekanntgabe
- Compliance-kritische Themen
- M&A (Mergers & Acquisitions)

**Beispiele:**
- Personalabbau-Projekt
- Gehaltsreview
- Strategische Akquisition
- Unternehmensverkauf
- Compliance-Audit mit sensiblen Findings
- Vorstandsvergütung

**⚠️ WICHTIG**: Klassifikation kann nach Erstellung **NICHT** geändert werden! Wähle sorgfältig.

## Projekt-spezifische Rollen

Zusätzlich zu System-Berechtigungen und Klassifikation gibt es projekt-spezifische Rollen:

### Federführung (responsible_employee)

**Was ist das?**
- **Ein Mitarbeitender** (nicht Benutzer!) pro Projekt
- Hauptverantwortlicher für den Projekterfolg
- Fachliche Leitung

**Rechte:**
- View: ✅ (auch bei vertraulich!)
- Add: ✅
- Change: ✅
- Delete: ✅
- Approve: Mit `approve_project` Berechtigung

**Besonderheit:**
- Federführung hat **immer** Vollzugriff auf "sein" Projekt
- Auch ohne System-Berechtigungen `change_project` oder `delete_project`
- Wichtig für Delegation an Projektleiter

**Verwendung:**
- Projektleiter der das Projekt führt
- Verantwortlicher für Erfolg und Ergebnis
- Hauptansprechpartner für Stakeholder

### Projekt-Admins (admins)

**Was ist das?**
- **Mehrere Benutzer** möglich
- Administrativer Vollzugriff auf das Projekt
- Technische Verwaltung

**Rechte:**
- View: ✅ (auch bei vertraulich!)
- Add: ✅
- Change: ✅
- Delete: ✅
- Approve: ❌ (außer mit System-Berechtigung)

**Besonderheit:**
- Admins haben **immer** Vollzugriff
- Auch ohne System-Berechtigungen
- Können andere Admins hinzufügen/entfernen

**Verwendung:**
- Stellvertreter des Projektleiters
- PMO-Mitarbeiter für Unterstützung
- Controlling für Datenpflege
- Mehrere Verantwortliche bei grossen Projekten

### Contributors (Projektteam)

**Was ist das?**
- **Mehrere Benutzer** möglich
- Informelle Zuordnung zum Projektteam
- Lesezugriff und eingeschränkte Rechte

**Rechte:**
- View: ✅ (auch bei vertraulich!)
- Add: ✅ (eingeschränkt, z.B. Kommentare)
- Change: ❌
- Delete: ❌
- Approve: ❌

**Besonderheit:**
- Contributors sehen vertrauliche Projekte!
- Können aber nicht bearbeiten
- Gut für Team-Mitglieder ohne Admin-Rechte

**Verwendung:**
- Projekt-Team-Mitglieder
- Stakeholder die informiert bleiben sollen
- Beteiligte ohne Bearbeitungsrechte
- Transparenz innerhalb des Teams

### Mitwirkende (ProjectAssignments)

**Was ist das?**
- **Mehrere Mitarbeitende** möglich
- Formalisierte Zuordnung mit Rolle und Pensum
- Nur Lesezugriff

**Rechte:**
- View: ✅ (auch bei vertraulich!)
- Add: ❌
- Change: ❌
- Delete: ❌
- Approve: ❌

**Besonderheit:**
- Mitwirkungen sind an **Mitarbeitende** gebunden (nicht Benutzer!)
- Sichtbar auch wenn kein ELIZA-Benutzer vorhanden
- Für Ressourcenplanung und Kapazitätsmanagement

**Verwendung:**
- Externe Berater (mit oder ohne ELIZA-Login)
- Team-Mitglieder mit definiertem Pensum
- Formalisierte Rollen (z.B. "Entwickler 50%")
- Kapazitätsplanung und Reporting

## Berechtigungs-Matrix

Vollständige Übersicht aller Berechtigungen:

| Rolle | View (normal) | View (vertraulich) | Add | Change | Delete | Approve |
|-------|---------------|---------------------|-----|--------|--------|---------|
| **Systemgruppe: projects_users** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Systemgruppe: projects_contributors** | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Systemgruppe: projects_admin** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Federführung** | ✅ | ✅ | ✅ | ✅ | ✅ | Mit approve_project |
| **Projekt-Admin** | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Contributor** | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Mitwirkender** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Kein Zugriff** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

## Workflow-Berechtigungen

Workflow-Transitionen haben spezielle Berechtigungsregeln:

| Transition | Berechtigung erforderlich | Beschreibung |
|------------|---------------------------|--------------|
| **review** | `approve_project` ODER Projekt-Bearbeiter | Projekt zur Review einreichen |
| **reject** | `approve_project` | Review ablehnen, zurück zu draft |
| **retract** | `approve_project` ODER Projekt-Bearbeiter | Aus Review zurückziehen |
| **approve** | `delete_project` | Finale Genehmigung (nur Super-Admins!) |
| **start** | `approve_project` ODER Projekt-Bearbeiter | Projekt starten (von approved zu active) |
| **finish** | `approve_project` ODER Projekt-Bearbeiter | Projekt abschliessen |
| **postpone** | `approve_project` ODER Projekt-Bearbeiter | Projekt pausieren |
| **cancel** | `approve_project` | Projekt abbrechen |
| **reactivate** | `approve_project` | Abgeschlossenes Projekt reaktivieren |

**"Projekt-Bearbeiter"** bedeutet:
- Federführung ODER
- Projekt-Admin ODER
- Benutzer mit `change_project` System-Berechtigung

## Praktische Beispiele

### Beispiel 1: Normales IT-Projekt (Öffentlich)

**Projekt:** Website-Relaunch für Marketing

**Setup:**
- **Klassifikation**: normal
- **Federführung**: Max Muster (Projektleiter)
- **Projekt-Admins**: Anna Admin (PMO), IT-Leiter
- **Contributors**:
  - Entwickler-Team (5 Personen)
  - Marketing-Team (3 Personen)
  - Designer (2 Personen)
- **Mitwirkungen**:
  - Max Muster (Projektleiter, 40%)
  - Externe Agentur (Design, 20%)

**Wer sieht das Projekt?**
- ✅ **Alle** mit `projects.view_project` (Systemgruppe projects_users)
- ✅ Max, Anna, IT-Leiter (Federführung/Admins)
- ✅ Entwickler, Marketing, Designer (Contributors)
- ✅ Externe Agentur (über Mitwirkung)
- ✅ Super-Admins mit `delete_project`

**Wer kann bearbeiten?**
- ✅ Max Muster (Federführung)
- ✅ Anna Admin, IT-Leiter (Projekt-Admins)
- ✅ Benutzer in Systemgruppe projects_admin
- ❌ Entwickler, Marketing, Designer (nur Contributors, kein Change-Recht)
- ❌ Externe Agentur (nur Lesezugriff)

**Wer kann genehmigen/Status ändern?**
- ✅ Max Muster (kann review/start/finish)
- ✅ Benutzer mit `approve_project` (können review/reject/cancel)
- ✅ Benutzer mit `delete_project` (können approve)

### Beispiel 2: Vertrauliches HR-Projekt

**Projekt:** Personalabbau Abteilung Produktion

**Setup:**
- **Klassifikation**: **vertraulich**
- **Federführung**: HR-Leitung
- **Projekt-Admins**: CEO, CFO
- **Contributors**: - (leer, niemand sonst soll sehen)
- **Mitwirkungen**: - (leer)

**Wer sieht das Projekt?**
- ✅ HR-Leitung (Federführung)
- ✅ CEO, CFO (Projekt-Admins)
- ✅ Super-Admins mit `delete_project` (z.B. IT-Admin für technische Unterstützung)
- ❌ **Alle anderen** (auch mit `view_project`!)
- ❌ Projekt erscheint **NICHT** in allgemeinen Listen

**Wer kann bearbeiten?**
- ✅ HR-Leitung (Federführung)
- ✅ CEO, CFO (Projekt-Admins)
- ✅ Super-Admins mit `delete_project`

**Best Practice:**
- Halte Contributors-Liste bei vertraulichen Projekten leer
- Nur explizit Beteiligte als Admins hinzufügen
- Nutze Mitwirkungen nicht für hochsensible Daten

### Beispiel 3: Team-Projekt mit externen Beratern

**Projekt:** ISO 9001 Zertifizierung

**Setup:**
- **Klassifikation**: normal
- **Federführung**: Qualitätsmanager
- **Projekt-Admins**: - (leer, QM hat Vollzugriff über Federführung)
- **Contributors**:
  - Interne QM-Mitarbeiter (3 Personen)
  - Prozessverantwortliche (5 Personen)
- **Mitwirkungen**:
  - Externer Berater (Beratung, 30%, Mitarbeitender OHNE ELIZA-Login)
  - Interner Auditor (Review, 10%, Mitarbeitender MIT ELIZA-Login)

**Wer sieht das Projekt?**
- ✅ Alle mit `projects.view_project`
- ✅ Qualitätsmanager (Federführung)
- ✅ QM-Mitarbeiter, Prozessverantwortliche (Contributors)
- ✅ Externer Berater (über Mitwirkung, WENN ELIZA-Login vorhanden)
- ✅ Interner Auditor (über Mitwirkung)

**Wer kann bearbeiten?**
- ✅ Qualitätsmanager (Federführung)
- ✅ Super-Admins mit `change_project`
- ❌ QM-Mitarbeiter, Prozessverantwortliche (nur Contributors)
- ❌ Externer Berater (nur Lesezugriff)
- ❌ Interner Auditor (nur Lesezugriff)

**Besonderheit:**
- Externer Berater ist als Mitarbeitender erfasst, hat aber **keinen** ELIZA-Login
- Interner Auditor hat ELIZA-Login und kann Projekt einsehen
- Mitwirkungen ermöglichen Sichtbarkeit auch ohne Contributors-Zuordnung

### Beispiel 4: Grosses Projekt mit mehreren Admins

**Projekt:** ERP-System Einführung (12 Monate, 25 Beteiligte)

**Setup:**
- **Klassifikation**: normal
- **Federführung**: IT-Leiter (Gesamtverantwortung)
- **Projekt-Admins**:
  - Leiter Finanzen (Teilprojekt Finanzen)
  - Leiter Operations (Teilprojekt Operations)
  - PMO-Mitarbeiter (Projektunterstützung)
- **Contributors**:
  - 5 Key-User aus verschiedenen Abteilungen
  - Geschäftsführung
  - Alle Abteilungsleiter
  - IT-Team (10 Personen)
- **Mitwirkungen**:
  - 5 Key-User (Fachexperten, 20% je, 6-12 Monate)
  - 2 Entwickler (System-Integration, 100% je, 8 Monate)
  - 1 Trainer (Schulungen, 50%, 3 Monate)
  - Externe Berater (Beratung, 30%, 12 Monate)

**Vorteile mehrerer Admins:**
- ✅ Verteilung der Verantwortung auf Teilprojekte
- ✅ Vertretungsregelung bei Urlaub/Krankheit
- ✅ PMO kann administrativ unterstützen
- ✅ Vier-Augen-Prinzip für kritische Änderungen

**Wer kann was?**
- **IT-Leiter**: Vollzugriff (Federführung)
- **Leiter Finanzen/Operations**: Vollzugriff (Projekt-Admins)
- **PMO-Mitarbeiter**: Vollzugriff für Administration (Projekt-Admin)
- **Key-User, Geschäftsführung, Abteilungsleiter**: Lesezugriff (Contributors)
- **IT-Team**: Lesezugriff (Contributors)
- **Entwickler, Trainer, Externe**: Lesezugriff (Mitwirkungen)

## Best Practices

### Klassifikation richtig wählen

✅ **Frage vor dem Erstellen:**
- Müssen alle mit `view_project` das Projekt sehen? → **normal**
- Nur explizit Beteiligte? → **vertraulich**
- Gibt es sensible Daten? → **vertraulich**
- Ist Transparenz gewünscht? → **normal**

✅ **Standard-Regel:**
- Im Zweifelsfall → **normal**
- Bei Datenschutz-relevanten Daten → **vertraulich**
- Bei HR-Projekten → **vertraulich**
- Bei strategischen Projekten vor Ankündigung → **vertraulich**

❌ **Häufiger Fehler:**
- Zu viele Projekte als vertraulich klassifizieren (reduziert Transparenz)
- Zu wenige Projekte als vertraulich (Datenschutz-Risiko)

### Team-Zuordnungen richtig nutzen

✅ **Federführung immer setzen:**
- Klare Verantwortung ist essentiell
- Sollte der Projektleiter sein
- Kann nicht geändert werden (nur mit `change_project`)

✅ **Mindestens ein Admin bei grossen Projekten:**
- Sicherstelle Vertretung
- Delegation von Admin-Aufgaben
- PMO-Unterstützung ermöglichen

✅ **Contributors für Transparenz:**
- Alle relevanten Stakeholder einbinden
- Team-Mitglieder informiert halten
- Abteilungsleiter für Übersicht

✅ **Mitwirkungen für Ressourcenplanung:**
- Formalisiere Rollen mit Pensum und Zeitrahmen
- Nutze für Kapazitätsmanagement
- Auch für Externe ohne ELIZA-Login

### Minimalprinzip beachten

✅ **Nur notwendige Rechte vergeben:**
- Contributors statt Admins (wenn Lesezugriff reicht)
- Mitwirkungen statt Contributors (wenn formalisiert)
- Vertraulich nur wenn wirklich nötig

✅ **System-Berechtigungen sparsam vergeben:**
- `delete_project` nur für wenige Super-Admins
- `approve_project` nur für Projektmanagement-Verantwortliche
- `change_project` nur für aktive Projekt-Bearbeiter
- `view_project` für die breite Masse

### Regelmässig prüfen

✅ **Quartalsweise Review:**
- Team-Zuordnungen aktualisieren
- Ausgeschiedene Mitarbeiter entfernen
- Berechtigungen anpassen
- Vertrauliche Projekte überprüfen

✅ **Bei Projekt-Abschluss:**
- Contributors aufräumen
- Admins reduzieren
- Mitwirkungen abschliessen

## Häufige Fragen (FAQ)

### Kann ich die Klassifikation nach Erstellung ändern?

**Nein**, die Klassifikation ist nach dem Speichern **fix**. Grund: Audit-Trail und Datenschutz-Compliance.

**Workaround**: Erstelle ein neues Projekt mit korrekter Klassifikation und kopiere Daten manuell.

### Sehen Contributors vertrauliche Projekte?

**Ja**, Contributors die explizit zu einem vertraulichen Projekt hinzugefügt wurden, können es sehen. Daher: Contributors-Liste bei vertraulichen Projekten minimal halten!

### Was ist der Unterschied zwischen Admin und Federführung?

- **Federführung**: Fachliche Verantwortung, **ein Mitarbeitender** (kann auch ohne ELIZA-Login sein)
- **Admin**: Technische Verwaltung, **mehrere Benutzer** möglich (benötigt ELIZA-Login)
- **Beide**: Haben Vollzugriff auf das Projekt

**Verwendung:**
- Federführung = Wer ist inhaltlich verantwortlich?
- Admins = Wer kann administrativ unterstützen/vertreten?

### Können Mitwirkende das Projekt bearbeiten?

**Nein**, Mitwirkende (ProjectAssignments) haben nur **Lesezugriff**. Sie können:
- ✅ Projekt ansehen
- ❌ Projekt bearbeiten
- ❌ Daten ändern

**Verwendung:** Mitwirkungen sind für Ressourcenplanung und formalisierte Rollen, nicht für Bearbeitungsrechte.

### Wer kann Projekte genehmigen (approve)?

**Nur Benutzer mit `delete_project`** können die finale Genehmigung (approve-Transition) durchführen. Dies sind typischerweise:
- Geschäftsführung
- PMO-Leitung
- Qualitätsmanagement
- System-Administratoren (für technische Freigabe)

**Andere Transitionen** (review, start, finish) können von Benutzern mit `approve_project` ODER Projekt-Bearbeitern durchgeführt werden.

### Was passiert wenn ich aus projects_users entfernt werde?

**Normale Projekte:**
- ❌ Du siehst keine normalen Projekte mehr in Listen
- ✅ Projekte wo du Federführung/Admin/Contributor bist, siehst du weiterhin

**Vertrauliche Projekte:**
- ✅ Keine Auswirkung (Zugriff über Projekt-Rollen)

### Wie gebe ich externen Beratern Zugriff?

**Option 1: Mitwirkung (empfohlen):**
- Erstelle Mitarbeitenden-Eintrag für Berater
- Erstelle Mitwirkung im Projekt
- Berater kann ELIZA-Login erhalten (optional)

**Option 2: Contributor:**
- Berater benötigt ELIZA-Benutzer
- Füge als Contributor hinzu
- Berater sieht Projekt in seinen Listen

**Option 3: Projekt-Admin:**
- Nur wenn Berater Admin-Rechte benötigt
- Berater benötigt ELIZA-Benutzer

### Kann ich Projekte zwischen Klassifikationen verschieben?

**Nein**, aus Datenschutz- und Compliance-Gründen nicht möglich.

**Szenarien:**
- Projekt soll von normal zu vertraulich → Neues Projekt erstellen
- Projekt soll von vertraulich zu normal → Neues Projekt erstellen (Datenschutz prüfen!)

### Wer kann projekt-spezifische Rollen zuweisen?

**Federführung zuweisen:**
- ✅ Benutzer mit `change_project`
- ✅ Super-Admins

**Admins zuweisen:**
- ✅ Bestehende Projekt-Admins
- ✅ Federführung
- ✅ Benutzer mit `change_project`

**Contributors zuweisen:**
- ✅ Projekt-Admins
- ✅ Federführung
- ✅ Benutzer mit `change_project`

**Mitwirkungen zuweisen:**
- ✅ Projekt-Admins
- ✅ Federführung
- ✅ Benutzer mit `change_project`

## Zusammenfassung

Das ELIZA Berechtigungskonzept für Projekte basiert auf drei Ebenen:

✅ **System-Berechtigungen**: Drei Systemgruppen (projects_users, projects_contributors, projects_admin)
✅ **Klassifikation**: Normal (öffentlich) vs. Vertraulich (nur Beteiligte)
✅ **Projekt-Rollen**: Federführung, Admins, Contributors, Mitwirkungen
✅ **Minimalprinzip**: Nur notwendige Rechte vergeben
✅ **Transparenz vs. Vertraulichkeit**: Richtige Balance finden
✅ **Regelmässig prüfen**: Team-Zuordnungen aktuell halten

**Wichtigste Regeln:**

1. Klassifikation sorgfältig wählen (kann nicht geändert werden!)
2. Federführung immer setzen (klare Verantwortung)
3. Contributors für Transparenz, Admins für Verwaltung
4. Vertrauliche Projekte: Contributors-Liste minimal halten
5. Super-Admin-Rechte (`delete_project`) sparsam vergeben

**Nächste Schritte:**

- [Team-Verwaltung]({{< ref "06-team-verwaltung" >}}) für praktische Umsetzung
- [Projekt erstellen]({{< ref "02-projekt-erstellen" >}}) für Klassifikations-Auswahl
- [Integrationen]({{< ref "12-integrationen" >}}) für erweiterte Funktionen
