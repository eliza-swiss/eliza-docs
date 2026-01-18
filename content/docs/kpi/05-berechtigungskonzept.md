---
title: "Berechtigungskonzept"
description: ""
weight: "5"
tags:
  - "berechtigungen"
  - "rollen"
  - "gruppen"
  - "zugriff"
  - "sicherheit"
---


# Berechtigungskonzept

In diesem Kapitel erfährst du, wie Berechtigungen im Kennzahlen-Modul funktionieren und wie du Zugriffsrechte verwaltest.

## Berechtigungsebenen

Das Kennzahlen-Modul verwendet ein mehrstufiges Berechtigungskonzept:

<pre>
┌─────────────────────────────────────────────────────────────────┐
│  1. Systemgruppen (globale Berechtigungen)                      │
│     └─→ kpi_users, kpi_admin                                    │
│                                                                 │
│  2. Kennzahlenordner (ordnerbezogene Berechtigungen)           │
│     └─→ Admins, Team, Organisationseinheiten, Sichtbarkeit     │
│                                                                 │
│  3. Kennzahlen (objektbezogene Berechtigungen)                 │
│     └─→ Verantwortliche Person, Verantwortliche Funktion       │
└─────────────────────────────────────────────────────────────────┘
</pre>

## Systemgruppen

Das System definiert zwei Gruppen für das Kennzahlen-Modul:

### kpi_users

**Berechtigung:** Nur Lesezugriff

| Berechtigung | Beschreibung |
|--------------|--------------|
| view_kpi | Kennzahlen anzeigen |

**Typische Anwendung:**
- Mitarbeiter, die Kennzahlen einsehen aber nicht bearbeiten sollen
- Führungskräfte, die nur Auswertungen lesen möchten
- Externe Berater mit Leserechten

### kpi_admin

**Berechtigung:** Vollzugriff

| Berechtigung | Beschreibung |
|--------------|--------------|
| view_kpi | Kennzahlen anzeigen |
| add_kpi | Neue Kennzahlen erstellen |
| change_kpi | Kennzahlen bearbeiten |
| delete_kpi | Kennzahlen löschen |

**Typische Anwendung:**
- Qualitätsmanager
- Prozessverantwortliche
- Administratoren

### Gruppenzugehörigkeit prüfen

Um zu sehen, welchen Gruppen du angehörst:

1. Klicke auf dein Profil-Symbol
2. Wähle **Profil** oder **Einstellungen**
3. Deine Gruppenzugehörigkeiten werden angezeigt

> **Hinweis:** Die Zuweisung zu Systemgruppen erfolgt durch Administratoren.

## Kennzahlenordner-Berechtigungen

Jeder Kennzahlenordner kann eigene Berechtigungen definieren:

### Sichtbarkeit

| Einstellung | Bedeutung |
|-------------|-----------|
| **normal** | Alle Benutzer mit `view_kpi` sehen den Ordner |
| **geschützt** | Nur explizit berechtigte Benutzer sehen den Ordner |

### Berechtigungsfelder

| Feld | Beschreibung |
|------|--------------|
| **Admins** | Voller Zugriff auf Ordner und alle enthaltenen Kennzahlen |
| **Team** | Lesezugriff auf Ordner und enthaltene Kennzahlen |
| **Beteiligte Organisationseinheiten** | Alle Mitglieder dieser Abteilungen haben Zugriff |

### Zugriffsprüfung für Ordner

Die Zugriffsprüfung erfolgt in dieser Reihenfolge:

**Bei geschützter Sichtbarkeit:**
1. Hat der Benutzer `view_kpifolder`-Berechtigung? → Zugriff
2. Ist der Benutzer in der Admin-Liste? → Zugriff
3. Ist der Benutzer im Team? → Zugriff
4. Gehört der Benutzer zu einer beteiligten Organisationseinheit? → Zugriff
5. Sonst → Kein Zugriff

**Bei normaler Sichtbarkeit:**
1. Ist der Benutzer in der Admin-Liste oder im Team? → Zugriff
2. Gehört der Benutzer zu einer beteiligten Organisationseinheit? → Zugriff
3. Hat der Benutzer `view_kpifolder`-Berechtigung? → Zugriff

### Ordner-Berechtigungen konfigurieren

1. Öffne den Kennzahlenordner
2. Klicke auf **Bearbeiten**
3. Bearbeite den Abschnitt **Berechtigungen**:
   - Wähle die **Sichtbarkeit**
   - Füge **Admins** hinzu
   - Füge **Team**-Mitglieder hinzu
   - Wähle **Beteiligte Organisationseinheiten**
4. Speichere

## Kennzahlen-Berechtigungen

Einzelne Kennzahlen können zusätzliche Berechtigungen haben:

### Verantwortliche Person

Die **verantwortliche Person** erhält automatisch:
- Lesezugriff auf die Kennzahl
- Bearbeitungsrechte für die Kennzahl
- Recht, Messungen zu erfassen

### Verantwortliche Funktion

Wenn eine **verantwortliche Funktion** definiert ist, haben alle Mitglieder dieser Funktion:
- Lesezugriff auf die Kennzahl
- Bearbeitungsrechte für die Kennzahl

### Zugriffsprüfung für Kennzahlen

**Lesezugriff:**
1. Ist der Benutzer verantwortliche Person? → Zugriff
2. Gehört der Benutzer zur verantwortlichen Funktion? → Zugriff
3. Hat der übergeordnete Ordner Zugriff gewährt? → Zugriff
4. Hat der Benutzer `view_kpi`-Berechtigung? → Zugriff

**Bearbeitungsrechte:**
1. Hat der übergeordnete Ordner Bearbeitungsrechte gewährt? → Zugriff
2. Ist der Benutzer verantwortliche Person? → Zugriff
3. Gehört der Benutzer zur verantwortlichen Funktion? → Zugriff
4. Hat der Benutzer `change_kpi`-Berechtigung? → Zugriff

## Messungs-Berechtigungen

Messungen erben die Berechtigungen von ihrer übergeordneten Kennzahl:

- **Lesezugriff:** Wer die Kennzahl sehen kann, sieht auch die Messungen
- **Bearbeitungsrechte:** Wer die Kennzahl bearbeiten kann, kann auch Messungen bearbeiten
- **Hinzufügen:** Wer `add_measurement` hat ODER die Kennzahl bearbeiten kann

## Praxisbeispiele

### Beispiel 1: Geschützter Qualitätsordner

**Szenario:** Die Qualitätsabteilung möchte ihre Kennzahlen nur intern sichtbar haben.

**Konfiguration:**
- Ordner: "Qualitätskennzahlen"
- Sichtbarkeit: **geschützt**
- Admins: Qualitätsmanager (voller Zugriff)
- Team: Qualitätsmitarbeiter (Lesezugriff)
- Organisationseinheiten: Abteilung Qualität

**Ergebnis:**
- Nur die Qualitätsabteilung sieht diesen Ordner
- Der Qualitätsmanager kann alles bearbeiten
- Qualitätsmitarbeiter können lesen und Messungen erfassen

### Beispiel 2: Abteilungsübergreifende Kennzahl

**Szenario:** Eine Kennzahl betrifft mehrere Abteilungen.

**Konfiguration:**
- Ordner: "Unternehmenskennzahlen" (normale Sichtbarkeit)
- Kennzahl: "Kundenzufriedenheit"
- Verantwortliche Person: Leiter Kundenservice
- Verknüpfte Organisationseinheiten im Ordner: Vertrieb, Kundenservice, Marketing

**Ergebnis:**
- Alle drei Abteilungen sehen die Kennzahl
- Der Leiter Kundenservice kann sie bearbeiten
- Andere können lesen und bei Bedarf Messungen erfassen

### Beispiel 3: Persönliche Verantwortung

**Szenario:** Jeder Prozessverantwortliche pflegt "seine" Kennzahlen.

**Konfiguration:**
- Ordner: "Prozesskennzahlen" (normale Sichtbarkeit)
- Jede Kennzahl hat eine verantwortliche Person
- Ordner-Admins: Qualitätsmanagement-Team

**Ergebnis:**
- Alle sehen alle Kennzahlen
- Jeder bearbeitet nur seine eigenen Kennzahlen
- Das QM-Team kann bei Bedarf eingreifen

## Berechtigungen prüfen

Du kannst die Berechtigungen für eine Kennzahl oder einen Ordner anzeigen lassen:

1. Öffne die Kennzahl oder den Ordner
2. Klicke auf das **Drei-Punkte-Menü**
3. Wähle **Berechtigungen anzeigen**

Die Anzeige zeigt:
- Wer Lesezugriff hat
- Wer Bearbeitungsrechte hat
- Woher die Berechtigungen stammen

## Best Practices

### Ordnerstruktur planen

- **Geschützte Ordner** für sensible Kennzahlen (z.B. Personal, Finanzen)
- **Normale Ordner** für transparente Kennzahlen (z.B. Qualität, Produktion)
- **Organisationseinheiten nutzen** statt vieler Einzelberechtigungen

### Verantwortlichkeiten klären

- **Eine verantwortliche Person** pro Kennzahl
- **Funktion nutzen** wenn die Verantwortung wechseln kann
- **Stellvertretung** über Team-Mitgliedschaft im Ordner

### Sicherheit gewährleisten

- **Regelmässig prüfen**: Sind die Berechtigungen noch aktuell?
- **Minimal halten**: Nur so viele Rechte wie nötig
- **Dokumentieren**: Warum hat wer welche Rechte?

### Typische Fehler vermeiden

| Fehler | Lösung |
|--------|--------|
| Zu viele individuelle Berechtigungen | Organisationseinheiten und Funktionen nutzen |
| Vergessene Ex-Mitarbeiter | Regelmässige Überprüfung der Zugriffsrechte |
| Geschützte Ordner ohne Berechtigte | Mindestens einen Admin definieren |
| Fehlende Stellvertretung | Team-Feld für Backup-Zugriff nutzen |

## Häufige Fragen (FAQ)

### Warum sehe ich eine Kennzahl nicht?

Mögliche Gründe:
- Du bist nicht in der Gruppe `kpi_users` oder `kpi_admin`
- Der Ordner ist geschützt und du bist nicht berechtigt
- Die Kennzahl ist archiviert

### Warum kann ich eine Kennzahl nicht bearbeiten?

Prüfe:
- Bist du in der Gruppe `kpi_admin`?
- Bist du Ordner-Admin?
- Bist du verantwortliche Person?
- Gehörst du zur verantwortlichen Funktion?

### Wie kann ich jemanden berechtigen?

1. **Für alle Kennzahlen:** Füge die Person zur Gruppe `kpi_admin` hinzu (Administrator-Aufgabe)
2. **Für einen Ordner:** Füge die Person als Admin oder Team-Mitglied hinzu
3. **Für eine Kennzahl:** Setze die Person als verantwortlich

### Wer kann Berechtigungen ändern?

- **Systemgruppen:** Nur Administratoren
- **Ordner-Berechtigungen:** Ordner-Admins und Benutzer mit `change_kpifolder`
- **Kennzahlen-Verantwortung:** Wer die Kennzahl bearbeiten kann

### Was passiert wenn ich die Verantwortung ändere?

Der neue Verantwortliche erhält sofort die Berechtigungen. Der alte Verantwortliche behält Zugriff nur, wenn er über andere Wege berechtigt ist (Ordner, Gruppe, etc.).

## Zusammenfassung

Du hast in diesem Kapitel gelernt:

- Die drei Berechtigungsebenen: Systemgruppen, Ordner, Kennzahlen
- Was die Gruppen `kpi_users` und `kpi_admin` können
- Wie Ordner-Berechtigungen mit Sichtbarkeit funktionieren
- Wie verantwortliche Personen und Funktionen Zugriff gewähren
- Best Practices für die Berechtigungsverwaltung

## Abschluss

Du hast das komplette Benutzerhandbuch für das Kennzahlen-Modul durchgearbeitet. Du kennst jetzt:

- Die Grundlagen des Moduls
- Wie du Kennzahlen und Ordner verwaltest
- Wie du Messungen erfasst
- Wie du das Cockpit für Auswertungen nutzt
- Wie Berechtigungen funktionieren

**Bei Fragen wende dich an deinen Administrator oder den ELIZA Support.**

---

→ [Zurück zur Übersicht]({{< ref "_index" >}})
