---
title: "Berechtigungskonzept"
description: ""
weight: "6"
tags:
  - "berechtigungen"
  - "rollen"
  - "gruppen"
  - "zugriff"
---


# Berechtigungskonzept

Dieses Kapitel erklärt das Berechtigungssystem des Standards-Moduls und zeigt dir, wer welche Aktionen durchführen kann.

## Übersicht: Berechtigungsebenen

Das Standards-Modul arbeitet mit Systemgruppen-basierten Berechtigungen:

| Systemgruppe | Berechtigungslevel | Typische Nutzer |
|--------------|-------------------|-----------------|
| **standards_admin** | Vollzugriff (CRUD) | QM-Beauftragte, Administratoren |
| **standards_users** | Lesezugriff | Alle Mitarbeitenden, Prozessverantwortliche |

**CRUD = Create, Read, Update, Delete**

## Systemgruppe: standards_users

### Berechtigungen

Mitglieder der Gruppe **standards_users** können:

✅ **Ansehen (Read):**
- Normen anzeigen
- Kapitel lesen
- Dateien öffnen
- Stakeholder einsehen
- Kategorien anschauen

❌ **Nicht erlaubt:**
- Normen erstellen, bearbeiten oder löschen
- Kapitel hinzufügen, ändern oder löschen
- Dateien hochladen oder löschen
- Stakeholder bearbeiten
- Kategorien verwalten

### Detaillierte Berechtigungen

| Objekt | Berechtigung | Erlaubt |
|--------|--------------|---------|
| Standard (Norm) | view_standard | ✅ Ansehen |
| Standard | add_standard | ❌ Erstellen |
| Standard | change_standard | ❌ Bearbeiten |
| Standard | delete_standard | ❌ Löschen |
| Chapter (Kapitel) | view_chapter | ✅ Ansehen |
| Chapter | add_chapter | ❌ Erstellen |
| Chapter | change_chapter | ❌ Bearbeiten |
| Chapter | delete_chapter | ❌ Löschen |
| File (Datei) | view_file | ✅ Ansehen |
| File | add_file | ❌ Hochladen |
| File | change_file | ❌ Bearbeiten |
| File | delete_file | ❌ Löschen |
| Stakeholder | view_stakeholder | ✅ Ansehen |
| Stakeholder | add_stakeholder | ❌ Erstellen |
| Stakeholder | change_stakeholder | ❌ Bearbeiten |
| Stakeholder | delete_stakeholder | ❌ Löschen |
| StandardCategory | view_standardcategory | ✅ Ansehen |
| StandardCategory | add_standardcategory | ❌ Erstellen |
| StandardCategory | change_standardcategory | ❌ Bearbeiten |
| StandardCategory | delete_standardcategory | ❌ Löschen |

### Anwendungsfälle

**Geeignet für:**
- Prozessverantwortliche (Nachschlagen von Anforderungen)
- Team-Mitglieder (Information über Normvorgaben)
- Auditoren (Einsicht in Umsetzungsstand)
- Externe Berater (Lesezugriff auf Dokumentation)

**Beispiel-Szenario:**

Maria ist Prozessverantwortliche für den Einkaufsprozess. Sie ist Mitglied der Gruppe **standards_users**.

✅ Maria kann:
- ISO 9001 Norm öffnen
- Kapitel "7.4 Beschaffung" lesen
- Geforderte Nachweise einsehen
- Verknüpfte Prozesse und Dokumente aufrufen
- Word/Excel Exporte generieren

❌ Maria kann nicht:
- Erfüllungsgrad ändern
- Neue Kapitel hinzufügen
- Verknüpfungen bearbeiten

> **💡 Tipp:** Für die meisten Mitarbeitenden reicht die **standards_users** Berechtigung aus.

## Systemgruppe: standards_admin

### Berechtigungen

Mitglieder der Gruppe **standards_admin** haben Vollzugriff:

✅ **Alle Aktionen erlaubt:**
- Normen erstellen, bearbeiten, löschen
- Kapitel hinzufügen, ändern, löschen
- Dateien hochladen, bearbeiten, löschen
- Stakeholder verwalten
- Kategorien erstellen und bearbeiten
- Erfüllungsgrade bewerten
- Verknüpfungen setzen
- Massnahmen verwalten

### Detaillierte Berechtigungen

| Objekt | Alle Berechtigungen |
|--------|---------------------|
| Standard | ✅ add, change, delete, view |
| Chapter | ✅ add, change, delete, view |
| File | ✅ add, change, delete, view |
| Stakeholder | ✅ add, change, delete, view |
| StandardCategory | ✅ add, change, delete, view |

### Anwendungsfälle

**Geeignet für:**
- QM-Beauftragte
- Managementsystem-Verantwortliche
- System-Administratoren
- Zertifizierungs-Projektleiter

**Beispiel-Szenario:**

Thomas ist QM-Beauftragter und Mitglied der Gruppe **standards_admin**.

✅ Thomas kann:
- Neue ISO-Normen ins System einpflegen
- Kapitelstruktur aufbauen
- Erfüllungsgrade bewerten
- Stakeholder-Analysen durchführen
- Verknüpfungen zu Prozessen/Dokumenten setzen
- Gap-Analysen durchführen und Massnahmen planen
- Audit-Vorbereitung koordinieren

> **⚠️ Wichtig:** Die **standards_admin** Berechtigung sollte nur an vertrauenswürdige, geschulte Personen vergeben werden.

## Berechtigungen zuweisen

### Benutzer zu Gruppe hinzufügen

**Voraussetzung:** Du benötigst Administratoren-Rechte in ELIZA.

**Schritt 1: Benutzerverwaltung öffnen**

1. Navigiere zu **Administration** → **Benutzer**
2. Suche den gewünschten Benutzer

**Schritt 2: Benutzer bearbeiten**

1. Klicke auf den Benutzer
2. Scrolle zum Abschnitt **"Systemgruppen"**
3. Wähle die gewünschte Gruppe:
   - **standards_users** (Lesezugriff)
   - **standards_admin** (Vollzugriff)
4. Speichere die Änderungen

**Schritt 3: Berechtigungen prüfen**

1. Melde dich als der Benutzer an (oder bitte den Benutzer zu testen)
2. Navigiere zum Standards-Modul
3. Prüfe, ob die erwarteten Berechtigungen vorhanden sind

### Berechtigungen entziehen

**Schritt 1: Benutzer öffnen**

1. Navigiere zu **Administration** → **Benutzer**
2. Wähle den Benutzer

**Schritt 2: Gruppe entfernen**

1. Öffne den Benutzer
2. Scrolle zu **"Systemgruppen"**
3. Entferne die Systemgruppe (standards_users oder standards_admin)
4. Speichere

> **⚠️ Wichtig:** Benutzer ohne Systemgruppe haben KEINEN Zugriff auf das Standards-Modul.

## Spezielle Berechtigungsfälle

### Massnahmen

**Ansehen:**
- **standards_users**: Können nur eigene Massnahmen sehen (wo sie Verantwortung haben)
- **standards_admin**: Können alle Massnahmen sehen

**Bearbeiten:**
- **standards_admin**: Können alle Massnahmen bearbeiten
- **Verantwortliche Person**: Kann eigene Massnahme bearbeiten (auch wenn nur standards_users)

### Einschätzungen (SWOT)

Einschätzungen werden über das SWOT-Modul verwaltet:

- **swot.view_einschaetzungen**: Ansehen
- **swot.add_einschaetzungen**: Erstellen

> **💡 Tipp:** Für vollständige Nutzung der SWOT-Integration benötigen Benutzer auch entsprechende SWOT-Berechtigungen.

### Favoriten

Jeder Benutzer kann eigene Favoriten setzen, unabhängig von der Systemgruppe:

- **standards_users**: Kann Normen als Favorit markieren
- **standards_admin**: Kann Normen als Favorit markieren

Favoriten sind benutzerspezifisch und privat.

## Best Practices für Berechtigungsvergabe

### ✅ Empfohlene Vorgehensweisen

**Principle of Least Privilege**
- Vergebe nur die minimal notwendigen Berechtigungen
- Standard: **standards_users**
- Nur bei Bedarf: **standards_admin**

**Rollentrennung**
- Nicht alle QM-Mitarbeitenden brauchen Admin-Rechte
- Klare Rollen definieren (Viewer vs. Editor vs. Admin)

**Dokumentation**
- Halte fest, wer welche Berechtigungen hat und warum
- Regelmässige Reviews (halbjährlich)

**Schulung**
- Vor Admin-Rechtevergabe: Schulung durchführen
- Best Practices vermitteln
- Audit-Relevanz erklären

**Vier-Augen-Prinzip**
- Mindestens 2 Personen mit **standards_admin**
- Verhindert Engpässe bei Abwesenheit
- Sichert kontinuierliche Pflege

### ❌ Häufige Fehler vermeiden

**Keine übermässige Rechtevergabe**
- ❌ Allen Mitarbeitenden **standards_admin** geben
- ✅ Nur QM-Beauftragten und Administratoren

**Keine ungenutzten Berechtigungen**
- ❌ Benutzer mit Admin-Rechten, die nie editieren
- ✅ Regelmässig prüfen und anpassen

**Keine fehlende Dokumentation**
- ❌ Unklare Verantwortlichkeiten
- ✅ Rollen und Zuständigkeiten klar definieren

**Keine Einzelkämpfer**
- ❌ Nur eine Person mit Admin-Rechten
- ✅ Mindestens 2 Personen für Vertretung

## Audit-Log und Nachvollziehbarkeit

Alle Änderungen im Standards-Modul werden protokolliert:

**Protokollierte Aktionen:**
- Erstellen von Normen, Kapiteln, Stakeholdern
- Bearbeiten von Objekten
- Löschen von Objekten
- Änderung von Erfüllungsgraden
- Setzen von Verknüpfungen

**Audit-Log aufrufen:**

1. Öffne ein Objekt (Norm, Kapitel, Stakeholder)
2. Scrolle zum Bereich **"Änderungshistorie"**
3. Du siehst alle Änderungen mit:
   - Zeitstempel
   - Benutzer
   - Geänderte Felder
   - Alte und neue Werte

> **💡 Tipp:** Das Audit-Log ist besonders wichtig für Zertifizierungs-Audits, um Nachvollziehbarkeit zu gewährleisten.

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Die zwei Systemgruppen: **standards_users** (Lesen) und **standards_admin** (Vollzugriff)
- ✅ Welche Berechtigungen jede Gruppe hat
- ✅ Wie Berechtigungen zugewiesen werden
- ✅ Spezielle Berechtigungsfälle (Massnahmen, Einschätzungen, Favoriten)
- ✅ Best Practices für sichere und effiziente Rechtevergabe
- ✅ Audit-Log zur Nachvollziehbarkeit

## Nächste Schritte

Für die praktische Arbeit:

- [Erste Schritte]({{< ref "01-erste-schritte" >}}) - Grundlagen für neue Benutzer
- [Best Practices]({{< ref "07-best-practices" >}}) - Optimiere Arbeitsabläufe
- [Integration]({{< ref "05-integration" >}}) - Verknüpfungen mit anderen Modulen

> **💡 Tipp:** Beginne mit **standards_users** für alle und vergebe **standards_admin** nur gezielt an geschulte Personen!
