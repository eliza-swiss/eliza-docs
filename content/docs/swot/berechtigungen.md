---
title: "IKS Berechtigungen"
description: ""
weight: "1"
tags:
  - "berechtigungen"
  - "rollen"
  - "zugriff"
  - "iks"
---


# IKS Berechtigungen

Eine umfassende Übersicht über das Berechtigungssystem im IKS-Modul.

## Übersicht

Das IKS-Modul verwendet ein **feingranulares Berechtigungssystem**, das sicherstellt, dass Benutzer nur auf die Daten zugreifen können, die sie für ihre Arbeit benötigen.

### Berechtigungsebenen

Es gibt **vier Hauptebenen** von Berechtigungen:

1. **Lesen** - Einsicht in bestehende Daten
2. **Hinzufügen** - Neue Einträge erstellen
3. **Bearbeiten** - Bestehende Einträge ändern
4. **Löschen** - Einträge entfernen

Zusätzlich gibt es **Admin-Rechte** für erweiterte Verwaltung.

## IKS-Berechtigungsgruppen

### IKS (Lesen)

**Umfassender Lesezugriff auf alle IKS-Module**

**Was kannst du tun?**
- ✅ Alle Einschätzungen (Risiken, Chancen, Stärken, Schwächen) anzeigen
- ✅ Alle Massnahmen einsehen
- ✅ Kontrollen anzeigen
- ✅ Risikoklassen ansehen
- ✅ IKS-Reports einsehen
- ✅ Kontrolldateien anzeigen

**Was kannst du NICHT tun?**
- ❌ Neue Einschätzungen erstellen
- ❌ Massnahmen anlegen oder bearbeiten
- ❌ Kontrollen hinzufügen

**Für wen geeignet?**
- Personen, die einen vollständigen Überblick über das IKS benötigen
- Management für Reporting-Zwecke
- Auditoren zur Einsichtnahme

---

### Massnahmen (Lesen)

**Nur Lesezugriff auf Massnahmen**

**Was kannst du tun?**
- ✅ Massnahmen anzeigen
- ✅ Status und Fristen einsehen
- ✅ Verantwortliche sehen

**Was kannst du NICHT tun?**
- ❌ Massnahmen erstellen
- ❌ Massnahmen bearbeiten
- ❌ Kontrollen hinzufügen
- ❌ Andere IKS-Module (Einschätzungen, etc.) einsehen

**Für wen geeignet?**
- Personen, die nur über Massnahmen informiert sein müssen
- Mitarbeitende ohne aktive Rolle im IKS

---

### Massnahmen (Lesen und Hinzufügen)

**Massnahmen anzeigen und erstellen**

**Was kannst du tun?**
- ✅ Massnahmen anzeigen
- ✅ Neue Massnahmen erstellen
- ✅ Massnahmen mit Einschätzungen verknüpfen

**Was kannst du NICHT tun?**
- ❌ Fremde Massnahmen bearbeiten
- ❌ Massnahmen löschen
- ❌ Kontrollen hinzufügen (ausser wenn als Controller eingetragen)

**Für wen geeignet?**
- Massnahmenverantwortliche
- Qualitätsbeauftragte
- Team-Mitglieder mit aktiver IKS-Rolle

---

### Massnahmen (Admin)

**Vollzugriff auf Massnahmen und Kontrollen**

**Was kannst du tun?**
- ✅ Alle Massnahmen anzeigen
- ✅ Massnahmen erstellen
- ✅ Alle Massnahmen bearbeiten (auch fremde)
- ✅ Massnahmen löschen
- ✅ Kontrollen anzeigen
- ✅ Kontrollen erstellen
- ✅ Kontrollen bearbeiten
- ✅ Kontrollen löschen

**Für wen geeignet?**
- IKS-Verantwortliche
- Qualitätsmanager
- Personen mit Gesamtverantwortung für Massnahmen

---

### Kontrollen (Lesen und Hinzufügen)

**Kontrollen anzeigen und durchführen**

**Was kannst du tun?**
- ✅ Kontrollen anzeigen
- ✅ Neue Kontrollen erstellen
- ✅ Kontrollergebnisse dokumentieren

**Was kannst du NICHT tun?**
- ❌ Kontrollen anderer Personen bearbeiten
- ❌ Kontrollen löschen

**Für wen geeignet?**
- Kontrollverantwortliche
- Personen, die regelmässig Kontrollen durchführen

**Hinweis:** Wenn du als **Controller bei einer Massnahme** eingetragen bist, benötigst du diese Berechtigung nicht! Siehe: [Rollenbasierte Berechtigungen](#rollenbasierte-berechtigungen)

---

### Verträge (Lesen)

**Nur Lesezugriff auf Verträge**

**Was kannst du tun?**
- ✅ Verträge anzeigen
- ✅ Vertragsordner einsehen
- ✅ Vertragsdetails ansehen

**Was kannst du NICHT tun?**
- ❌ Verträge erstellen oder bearbeiten

**Für wen geeignet?**
- Personen, die Vertragsinformationen benötigen
- Vertragspartner ohne Bearbeitungsrechte

---

## Rollenbasierte Berechtigungen

### Automatische Berechtigungen für Controller

Ein **besonderes Feature** des IKS-Moduls: Wenn du als **Controller** bei einer Massnahme eingetragen bist, erhältst du **automatisch** das Recht, Kontrollen für diese Massnahme hinzuzufügen - **unabhängig** von deinen allgemeinen Berechtigungen.

#### Wie funktioniert das?

**1. Controller User**
Wenn du im Feld "**Kontrollierende Person**" bei einer Massnahme eingetragen bist:
- ✅ Du kannst Kontrollen für DIESE Massnahme hinzufügen
- ✅ Keine zusätzliche Berechtigung erforderlich
- ✅ Auch wenn du nur "Massnahmen (Lesen)" hast

**2. Controller Funktion**
Wenn du Mitglied einer "**Kontrollierenden Funktion**" bist:
- ✅ Du kannst Kontrollen für alle Massnahmen dieser Funktion hinzufügen
- ✅ Keine zusätzliche Berechtigung erforderlich
- ✅ Gilt für alle Funktionsmitglieder

#### Beispiel

**Szenario:**
- Max hat die Berechtigung "Massnahmen (Lesen)"
- Max ist als "Kontrollierende Person" bei der Massnahme "Datensicherheit überprüfen" eingetragen

**Ergebnis:**
- Max kann alle Massnahmen anzeigen (Leseberechtigung)
- Max kann Kontrollen NUR für "Datensicherheit überprüfen" hinzufügen (Controller-Rolle)
- Max kann KEINE Kontrollen für andere Massnahmen hinzufügen

#### Warum ist das so?

Diese Logik ist **intuitiv und praxisnah**:

1. **Zuständigkeitsprinzip** - Wer kontrollieren soll, muss kontrollieren können
2. **Weniger Rechteverwaltung** - Keine zusätzlichen Berechtigungen nötig
3. **Flexibilität** - Controller können wechseln ohne Rechteanpassung
4. **Sicherheit** - Zugriff nur auf zugewiesene Massnahmen

### Verantwortliche vs. Controller

Es gibt einen **wichtigen Unterschied**:

| Rolle | Berechtigung erforderlich? | Kann Kontrollen hinzufügen? |
|-------|---------------------------|----------------------------|
| **Verantwortliche Person** | ✅ Ja, "Kontrollen (Lesen und Hinzufügen)" | ✅ Ja, wenn berechtigt |
| **Kontrollierende Person** | ❌ Nein, automatisch | ✅ Ja, immer |
| **Verantwortliche Funktion** | ✅ Ja, "Kontrollen (Lesen und Hinzufügen)" | ✅ Ja, wenn berechtigt |
| **Kontrollierende Funktion** | ❌ Nein, automatisch | ✅ Ja, immer |

**Begründung:**
- **Verantwortliche** setzen Massnahmen um → benötigen allgemeine Berechtigung
- **Controller** überwachen und prüfen → erhalten automatisch Zugriff auf ihre Massnahmen

---

## Berechtigungen zuweisen

### Schritt-für-Schritt Anleitung

**1. Benutzerverwaltung öffnen**
- Navigiere zu "Administration" → "Benutzerverwaltung"
- Wähle den gewünschten Benutzer aus

**2. Gruppenmitgliedschaften bearbeiten**
- Klicke auf "Gruppenmitgliedschaften bearbeiten"
- Die Gruppen sind hierarchisch sortiert angezeigt

**3. Gruppe suchen**
- Nutze das **Suchfeld** oberhalb der Gruppenliste
- Tippe z.B. "IKS", "Massnahmen" oder "Kontrollen"
- Die Liste wird in Echtzeit gefiltert

**4. Gruppe auswählen**
- Wähle die passende Berechtigungsgruppe aus
- Multiple Gruppen können gleichzeitig ausgewählt werden

**5. Speichern**
- Klicke auf "Speichern"
- Die Berechtigungen sind sofort aktiv

### Tipps für die Gruppenvergabe

**Suchfunktion nutzen**
- Suche nach "lesen" für alle Lese-Berechtigungen
- Suche nach "admin" für alle Admin-Gruppen
- Suche nach Modulnamen (z.B. "Massnahmen")

**Hierarchie beachten**
- Gruppen sind sortiert: IKS → Massnahmen → Kontrollen → Verträge
- Admin-Gruppen haben die umfassendsten Rechte
- Wähle die passende Ebene für jede Person

**Weniger ist mehr**
- Vergebe nur die minimal notwendigen Rechte
- Nutze rollenbasierte Controller-Zuweisungen statt globaler Berechtigungen
- Überprüfe Berechtigungen regelmässig

---

## Controller bei Massnahmen eintragen

So nutzt du die **automatische Kontroll-Berechtigung**:

### Controller User eintragen

**1. Massnahme öffnen**
- Navigiere zur gewünschten Massnahme
- Klicke auf "Bearbeiten"

**2. Controller eintragen**
- Scrolle zum Abschnitt "Kontrolle durch"
- Wähle im Feld "**Kontrollierende Person**" den User aus
- Speichere die Änderungen

**3. Fertig!**
- Der Controller kann jetzt automatisch Kontrollen hinzufügen
- Keine zusätzliche Berechtigung erforderlich

### Controller Funktion eintragen

**1. Funktion erstellen** (falls noch nicht vorhanden)
- Navigiere zu "Organisation" → "Funktionen"
- Erstelle eine neue Funktion (z.B. "IKS-Controller")
- Weise Benutzer der Gruppe zu

**2. Massnahme öffnen**
- Navigiere zur gewünschten Massnahme
- Klicke auf "Bearbeiten"

**3. Funktion eintragen**
- Wähle im Feld "**Kontrollierende Funktion**" die Funktion aus
- Speichere die Änderungen

**4. Fertig!**
- Alle Mitglieder der Funktion können Kontrollen hinzufügen
- Ideal für wiederkehrende Zuständigkeiten

### Vorteile der Funktionen

**Zentrale Verwaltung**
- Füge User zur Funktion hinzu → automatisch Controller für alle zugewiesenen Massnahmen
- Entferne User aus Funktion → automatisch keine Controller-Rechte mehr

**Konsistenz**
- Alle Massnahmen eines Bereichs haben dieselbe Controller-Funktion
- Weniger Verwaltungsaufwand

**Übersichtlichkeit**
- Klar erkennbar, welche Funktion für Kontrollen zuständig ist
- Bessere Dokumentation

---

## Best Practices

### Berechtigungskonzept erstellen

**1. Rollen definieren**
- Welche Rollen gibt es in deinem IKS? (z.B. QM-Beauftragter, Auditor, Massnahmenverantwortlicher)
- Welche Berechtigungen benötigt jede Rolle?

**2. Gruppen zuordnen**
- Weise jeder Rolle die passenden ELIZA-Gruppen zu
- Dokumentiere die Zuordnung

**3. Umsetzung**
- Weise Benutzern die entsprechenden Gruppen zu
- Nutze Funktionen für wiederkehrende Rollen

### Regelmässige Überprüfung

**Quartalsweise**
- Prüfe, ob die Berechtigungen noch aktuell sind
- Entziehe nicht mehr benötigte Rechte
- Dokumentiere Änderungen

**Bei Rollenwechsel**
- Passe Berechtigungen unmittelbar an
- Entziehe alte Rechte
- Vergebe neue Berechtigungen

### Sicherheitstipps

**Need-to-know-Prinzip**
- Vergebe nur die minimal notwendigen Rechte
- Vermeide globale Admin-Rechte wo möglich

**Vier-Augen-Prinzip**
- Nutze unterschiedliche Rollen für Ersteller und Controller
- Verantwortliche sollten nicht ihre eigenen Kontrollen durchführen

**Dokumentation**
- Halte ein Berechtigungskonzept schriftlich fest
- Dokumentiere Änderungen und Gründe
- Erstelle eine Übersicht für neue Mitarbeitende

---

## Häufige Fragen (FAQ)

### Kann ich mehrere Gruppen gleichzeitig haben?

**Ja!** Du kannst mehreren Gruppen gleichzeitig angehören. Die Berechtigungen werden **kombiniert** (höchste Berechtigung gilt).

**Beispiel:**
- Du hast "Massnahmen (Lesen)" UND "Kontrollen (Lesen und Hinzufügen)"
- Ergebnis: Du kannst Massnahmen lesen UND Kontrollen hinzufügen

### Was passiert, wenn ich als Controller UND Controller-Funktion eingetragen bin?

Das **Ergebnis ist identisch** - du kannst Kontrollen hinzufügen. Beide Zuweisungen führen zum gleichen Recht.

### Kann ich fremde Kontrollen bearbeiten?

**Nein**, es sei denn:
- Du bist "Massnahmen (Admin)" → kannst alle Kontrollen bearbeiten
- Du bist in der Controller-Funktion der Massnahme → kannst Kontrollen dieser Massnahme bearbeiten

### Sehe ich alle Massnahmen im Dashboard?

**Nein**, das Dashboard zeigt nur Massnahmen, auf die du **Zugriff** hast:
- Mit "IKS (Lesen)" siehst du alle
- Mit "Massnahmen (Lesen)" siehst du alle Massnahmen
- Als Controller siehst du nur deine zugewiesenen Massnahmen (plus allgemeine Rechte)

### Kann ich Controller nachträglich ändern?

**Ja**, Controller können jederzeit geändert werden:
- Bearbeite die Massnahme
- Ändere "Kontrollierende Person" oder "Kontrollierende Funktion"
- Speichere

Die Berechtigungen werden sofort angepasst.

### Was ist besser: Controller User oder Controller Funktion?

**Kommt darauf an:**

**Controller User** - wenn:
- Es um spezifische, einmalige Zuweisungen geht
- Die Person direkt verantwortlich ist

**Controller Funktion** - wenn:
- Mehrere Personen kontrollieren sollen
- Die Rolle häufig wechselt
- Konsistenz über mehrere Massnahmen hinweg gewünscht ist

**Empfehlung:** Nutze Funktionen für **wiederkehrende, strukturelle Zuständigkeiten** und direkte User-Zuweisungen für **spezifische, temporäre Aufgaben**.

---

## Troubleshooting

### Ich kann keine Kontrolle hinzufügen

**Prüfe folgendes:**

1. **Bist du als Controller eingetragen?**
   - Öffne die Massnahme
   - Prüfe Feld "Kontrollierende Person" oder "Kontrollierende Funktion"
   - Falls nein: Kontaktiere den Massnahmenverantwortlichen

2. **Hast du die Berechtigung "Kontrollen (Lesen und Hinzufügen)"?**
   - Wenn du NICHT als Controller eingetragen bist, benötigst du diese Berechtigung
   - Kontaktiere deinen Administrator

3. **Ist das IKS-Modul aktiviert?**
   - Falls keine IKS-Funktionen sichtbar sind, ist das Modul ggf. deaktiviert
   - Kontaktiere deinen Administrator

### Ich sehe die Massnahme nicht im Dashboard

**Mögliche Gründe:**

1. **Keine Berechtigung**
   - Du hast keine Lese-Berechtigung für Massnahmen
   - Kontaktiere deinen Administrator

2. **Filter aktiv**
   - Prüfe aktive Filter im Dashboard
   - Entferne Filter oder passe sie an

3. **Modul deaktiviert**
   - Das IKS-Modul ist für dich nicht aktiviert
   - Kontaktiere deinen Administrator

### Der Button "Kontrolle hinzufügen" ist nicht sichtbar

**Prüfe:**

1. **Bist du auf der Massnahmen-Detailseite?**
   - Der Button erscheint nur dort

2. **Hast du die Berechtigung?**
   - Bist du Controller? → Button sichtbar
   - Hast du "Kontrollen (Lesen und Hinzufügen)"? → Button sichtbar
   - Sonst → Button nicht sichtbar

---

## Zusammenfassung

### Wichtigste Punkte

1. **Berechtigungen sind feingranular** - Vergebe nur benötigte Rechte
2. **Controller haben automatisch Zugriff** - Keine extra Berechtigung nötig
3. **Funktionen sind praktisch** - Nutze sie für wiederkehrende Rollen
4. **Suchfunktion spart Zeit** - Nutze sie bei der Gruppenvergabe
5. **Regelmässig überprüfen** - Halte Berechtigungen aktuell

### Nächste Schritte

- **[Einschätzungen verwalten]({{< ref "einschaetzungen" >}})** - Risiken und Chancen erfassen
- **[Massnahmen erstellen]({{< ref "massnahmen" >}})** - Aktionen planen
- **[Kontrollen durchführen]({{< ref "kontrollen" >}})** - Massnahmen überprüfen

---

**Zurück zur [Übersicht]({{< ref "index" >}})**

*Stand: Oktober 2025*
