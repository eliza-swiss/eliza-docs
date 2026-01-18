---
title: "Berechtigungskonzept"
description: ""
weight: "7"
tags:
  - "berechtigungen"
  - "rollen"
  - "gruppen"
  - "permissions"
  - "admin"
---


# Berechtigungskonzept

In diesem Kapitel lernst du das Berechtigungskonzept der Zeiterfassung kennen. Du erfährst, welche Rollen es gibt, welche Berechtigungen sie haben und wie sie zugewiesen werden.

## Übersicht der Berechtigungsgruppen

Die Zeiterfassung verwendet ein rollenbasiertes Berechtigungskonzept. Jede Rolle (Gruppe) hat bestimmte Berechtigungen:

### Zeiterfassung

| Gruppe | Beschreibung | Hauptberechtigungen |
|--------|--------------|---------------------|
| **timetracker_users** | Standard-Benutzer | Eigene Arbeitszeiten erfassen |
| **timetracker_admin** | Administratoren | Voller Zugriff auf alle Zeiterfassungsfunktionen |

### Spesen

| Gruppe | Beschreibung | Hauptberechtigungen |
|--------|--------------|---------------------|
| **expense_users** | Standard-Benutzer | Eigene Spesen erfassen |
| **expense_admin** | Administratoren | Voller Zugriff auf alle Spesenfunktionen |
| **expense_approver** | Genehmiger | Spesen anderer genehmigen/ablehnen |
| **expense_reimburser** | Auszahlungsverantwortliche | Spesen als erstattet markieren |

## Detaillierte Berechtigungen

### timetracker_users

Diese Gruppe ist für alle Mitarbeitenden gedacht, die ihre Arbeitszeit erfassen:

**Berechtigungen:**
- ✅ Eigene Arbeitszeiten erfassen (`add_worktime`)
- ✅ Eigene Arbeitszeiten bearbeiten
- ✅ Eigene Arbeitszeiten löschen (wenn Status erlaubt)
- ✅ Eigenen Monatsreport einsehen
- ✅ Eigene Abwesenheiten erfassen und einreichen
- ❌ Keine Einsicht in fremde Zeitdaten
- ❌ Keine Monatsabschlüsse durchführen

**Typische Benutzer:**
- Alle Mitarbeitenden mit Zeiterfassungspflicht
- Teilzeitmitarbeitende
- Temporäre Mitarbeitende

### timetracker_admin

Diese Gruppe hat volle Kontrolle über alle Zeiterfassungsfunktionen:

**Berechtigungen:**
- ✅ Alle Berechtigungen von `timetracker_users`
- ✅ Arbeitszeiten aller Mitarbeitenden einsehen
- ✅ Arbeitszeiten anderer bearbeiten
- ✅ Monatsabschlüsse durchführen
- ✅ Manuelle Korrekturen vornehmen
- ✅ Ungültige Einträge akzeptieren
- ✅ Stundenarten verwalten
- ✅ Feiertage verwalten
- ✅ Berichte und Auswertungen erstellen

**Typische Benutzer:**
- HR-Mitarbeitende
- Abteilungsleiter mit Personalverantwortung
- Lohnbuchhaltung

### expense_users

Diese Gruppe ist für alle Mitarbeitenden gedacht, die Spesen erfassen:

**Berechtigungen:**
- ✅ Eigene Spesen erfassen (`add_expense`)
- ✅ Eigene Spesen bearbeiten (wenn Status erlaubt)
- ✅ Eigene Spesen einreichen
- ✅ Belege hochladen
- ❌ Keine Einsicht in fremde Spesen
- ❌ Keine Genehmigung oder Erstattung

**Typische Benutzer:**
- Alle Mitarbeitenden mit Spesenrecht
- Aussendienst-Mitarbeitende
- Reisende Mitarbeitende

### expense_admin

Diese Gruppe hat volle Kontrolle über alle Spesenfunktionen:

**Berechtigungen:**
- ✅ Alle Berechtigungen von `expense_users`
- ✅ Spesen aller Mitarbeitenden einsehen
- ✅ Spesen anderer bearbeiten
- ✅ Spesen genehmigen und ablehnen
- ✅ Spesen als erstattet markieren
- ✅ Spesenkategorien verwalten
- ✅ Berichte und Auswertungen erstellen

**Typische Benutzer:**
- HR-Mitarbeitende
- Finanzverantwortliche
- Geschäftsleitung

### expense_approver

Diese Gruppe kann Spesen genehmigen, aber nicht erstatten:

**Berechtigungen:**
- ✅ Eingereichte Spesen einsehen
- ✅ Spesen genehmigen (`approve_expense`)
- ✅ Spesen ablehnen
- ✅ Prüfkommentare hinzufügen
- ❌ Keine Erstattung möglich
- ❌ Keine Verwaltung von Spesenkategorien

**Typische Benutzer:**
- Vorgesetzte
- Teamleiter
- Projektleiter

### expense_reimburser

Diese Gruppe markiert genehmigte Spesen als erstattet:

**Berechtigungen:**
- ✅ Genehmigte Spesen einsehen
- ✅ Spesen als erstattet markieren (`reimburse_expense`)
- ✅ Sammelerstattungen durchführen
- ❌ Keine Genehmigung möglich
- ❌ Keine Bearbeitung von Spesen

**Typische Benutzer:**
- Buchhaltung
- Lohnbuchhaltung
- Finanzabteilung

## Berechtigungsmatrix

### Zeiterfassung

| Aktion | users | admin |
|--------|:-----:|:-----:|
| Eigene Arbeitszeit erfassen | ✅ | ✅ |
| Eigene Arbeitszeit bearbeiten | ✅ | ✅ |
| Eigene Arbeitszeit löschen | ✅ | ✅ |
| Fremde Arbeitszeit einsehen | ❌ | ✅ |
| Fremde Arbeitszeit bearbeiten | ❌ | ✅ |
| Monatsabschluss durchführen | ❌ | ✅ |
| Manuelle Korrekturen | ❌ | ✅ |
| Stundenarten verwalten | ❌ | ✅ |
| Feiertage verwalten | ❌ | ✅ |

### Abwesenheiten

| Aktion | users | admin |
|--------|:-----:|:-----:|
| Eigene Abwesenheit erfassen | ✅ | ✅ |
| Eigene Abwesenheit einreichen | ✅ | ✅ |
| Fremde Abwesenheit einsehen | ❌ | ✅ |
| Abwesenheit genehmigen | ❌ | ✅ |
| Abwesenheit ablehnen | ❌ | ✅ |
| Abwesenheitsarten verwalten | ❌ | ✅ |

### Spesen

| Aktion | users | approver | reimburser | admin |
|--------|:-----:|:--------:|:----------:|:-----:|
| Eigene Spesen erfassen | ✅ | ✅ | ✅ | ✅ |
| Eigene Spesen einreichen | ✅ | ✅ | ✅ | ✅ |
| Fremde Spesen einsehen | ❌ | ✅ | ✅ | ✅ |
| Spesen genehmigen | ❌ | ✅ | ❌ | ✅ |
| Spesen ablehnen | ❌ | ✅ | ❌ | ✅ |
| Spesen erstatten | ❌ | ❌ | ✅ | ✅ |
| Spesenkategorien verwalten | ❌ | ❌ | ❌ | ✅ |

## Vorgesetzten-Berechtigungen

Zusätzlich zu den Gruppenberechtigungen gibt es hierarchische Berechtigungen:

### Vorgesetzte im Organigramm

Wenn du als Vorgesetzte/r einer Organisationseinheit eingetragen bist:

- ✅ Abwesenheiten deiner Mitarbeitenden genehmigen
- ✅ Spesen deiner Mitarbeitenden genehmigen (wenn expense_approver)
- ✅ Monatsreports deiner Mitarbeitenden einsehen
- ✅ Team-Kalender und Übersichten nutzen
- ✅ Arbeitszeiten deiner Mitarbeitenden auch ausserhalb des Bearbeitungszeitraums bearbeiten

### Stellvertretung

Bei Abwesenheit des Vorgesetzten:

- Eine Stellvertretung kann konfiguriert werden
- Die Stellvertretung erhält temporär die Freigabe-Berechtigungen
- Dies wird in der Organisation eingerichtet

## Berechtigungen zuweisen

### Als Administrator

1. Gehe zu **Organisation** → **Mitarbeitende**
2. Öffne das Profil des Mitarbeitenden
3. Wähle den Reiter **Berechtigungen** oder **Gruppen**
4. Füge die gewünschten Gruppen hinzu:
   - `timetracker_users` für Zeiterfassung
   - `expense_users` für Spesenerfassung
   - Weitere Gruppen nach Bedarf
5. Speichere die Änderungen

### Empfohlene Gruppenzuweisungen

| Rolle | Empfohlene Gruppen |
|-------|-------------------|
| **Standard-Mitarbeiter** | timetracker_users, expense_users |
| **Teamleiter** | timetracker_users, expense_users, expense_approver |
| **HR-Mitarbeiter** | timetracker_admin, expense_admin |
| **Buchhaltung** | expense_reimburser |
| **Geschäftsleitung** | timetracker_admin, expense_admin |

## Berechtigungen prüfen

### Eigene Berechtigungen

Du kannst deine eigenen Berechtigungen einsehen:

1. Klicke auf dein Profilbild (oben rechts)
2. Wähle **Mein Profil**
3. Scrolle zum Bereich **Gruppen** oder **Berechtigungen**

### Als Administrator

Du kannst die Berechtigungen aller Mitarbeitenden einsehen:

1. Gehe zu **Organisation** → **Mitarbeitende**
2. Öffne das Profil eines Mitarbeitenden
3. Prüfe den Bereich **Gruppen**

## Typische Workflows nach Rolle

### Als Standard-Mitarbeiter

<pre>
Täglicher Workflow:
1. Arbeitszeit erfassen
2. Bei Bedarf Abwesenheit einreichen
3. Bei Bedarf Spesen erfassen und einreichen
4. Monatlich: Monatsreport prüfen
</pre>

### Als Teamleiter

<pre>
Regelmässiger Workflow:
1. Eigene Arbeitszeit und Spesen erfassen
2. Offene Abwesenheitsanträge prüfen und genehmigen
3. Offene Spesenanträge prüfen und genehmigen
4. Team-Kalender überwachen
</pre>

### Als HR-Administrator

<pre>
Monatlicher Workflow:
1. Alle Arbeitszeiten überprüfen
2. Ungültige Einträge bearbeiten
3. Monatsabschluss durchführen
4. Manuelle Korrekturen vornehmen
5. Berichte erstellen
</pre>

### Als Buchhaltung

<pre>
Regelmässiger Workflow:
1. Genehmigte Spesen prüfen
2. Auszahlung veranlassen (extern)
3. Spesen als erstattet markieren
4. Spesenberichte erstellen
</pre>

## Sicherheitshinweise

### Prinzip der minimalen Berechtigung

- ✅ Vergib nur die Berechtigungen, die wirklich benötigt werden
- ✅ Prüfe regelmässig, ob Berechtigungen noch aktuell sind
- ✅ Entferne Berechtigungen bei Rollenwechsel oder Austritt

### Audit und Nachvollziehbarkeit

- Alle Aktionen werden protokolliert
- Änderungen an Arbeitszeiten sind nachvollziehbar
- Genehmigungen werden mit Benutzer und Zeitstempel gespeichert

### Best Practices

- ✅ Verwende Gruppen statt Einzelberechtigungen
- ✅ Dokumentiere, wer welche Berechtigungen hat
- ✅ Führe regelmässige Reviews durch
- ✅ Trenne Genehmigung und Auszahlung (Vier-Augen-Prinzip)

## Häufige Fragen

### Ich kann meine Arbeitszeit nicht erfassen. Was tun?

Mögliche Ursachen:

1. Du bist nicht in der Gruppe `timetracker_users`
2. Der Monat ist bereits abgeschlossen
3. Du hast kein gültiges Anstellungsverhältnis
4. Der Tag liegt ausserhalb des Bearbeitungszeitraums (z.B. mehr als 14 Tage in der Vergangenheit)

→ Kontaktiere deinen Vorgesetzten oder Administrator.

### Ich sehe keine Freigabe-Schaltfläche bei Abwesenheiten.

Mögliche Ursachen:
1. Du bist nicht als Vorgesetzte/r eingetragen
2. Du hast keine Freigabe-Berechtigung
3. Die Abwesenheit ist nicht eingereicht

→ Prüfe deine Rolle im Organigramm.

### Ich kann Spesen genehmigen, aber nicht erstatten.

Das ist korrekt so. Die Rollen `expense_approver` und `expense_reimburser` sind bewusst getrennt:
- **Approver**: Prüft und genehmigt die Spesen
- **Reimburser**: Bestätigt die Auszahlung

Dies folgt dem Vier-Augen-Prinzip.

### Wie bekomme ich erweiterte Berechtigungen?

1. Sprich mit deinem Vorgesetzten
2. Begründe, warum du die Berechtigung benötigst
3. Der Administrator kann die Berechtigung zuweisen

### Warum kann ich fremde Arbeitszeiten nicht sehen?

Aus Datenschutzgründen können nur Berechtigte (Vorgesetzte, HR, Administratoren) die Arbeitszeiten anderer einsehen. Standard-Benutzer sehen nur ihre eigenen Daten.

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Die verschiedenen Berechtigungsgruppen in der Zeiterfassung
- ✅ Welche Berechtigungen jede Gruppe hat
- ✅ Die Berechtigungsmatrix für Zeiterfassung, Abwesenheiten und Spesen
- ✅ Wie Vorgesetzten-Berechtigungen funktionieren
- ✅ Wie Berechtigungen zugewiesen werden
- ✅ Typische Workflows für verschiedene Rollen
- ✅ Sicherheitshinweise und Best Practices

Im nächsten Kapitel findest du Tipps, Tricks und häufig gestellte Fragen.
