---
title: "Best Practices"
description: ""
weight: "8"
tags:
  - "best-practices"
  - "tips"
  - "optimization"
---


# Best Practices

In diesem Kapitel findest du praktische Empfehlungen und häufige Fehlerquellen im Vertragsmanagement.

## Ordnerstrukturen sinnvoll aufbauen

### Hierarchie planen

**✅ Gute Ordnerstruktur:**

```
📁 Verträge (Hauptordner)
   ├─ 📁 Lieferantenverträge
   │  ├─ 📁 IT-Lieferanten
   │  │  ├─ 📄 Microsoft Office 365
   │  │  └─ 📄 Adobe Creative Cloud
   │  ├─ 📁 Facility-Lieferanten
   │  │  ├─ 📄 Reinigungsfirma
   │  │  └─ 📄 Sicherheitsdienst
   │  └─ 📁 HR-Lieferanten
   ├─ 📁 Kundenverträge
   │  ├─ 📁 Projektverträge
   │  └─ 📁 Serviceverträge
   ├─ 📁 Mietverträge
   │  ├─ 📁 Büroräume
   │  └─ 📁 Lager
   └─ 📁 Vertragsvorlagen
      ├─ 📁 Mietverträge
      ├─ 📁 Lizenzverträge
      └─ 📁 Dienstleistungsverträge
```

**Prinzipien:**

1. **Nicht zu tief:** Maximal 3-4 Ebenen
2. **Logische Gruppierung:** Nach Vertragstyp oder Abteilung
3. **Konsistenz:** Gleiche Struktur auf allen Ebenen
4. **Vorlagen-Ordner:** Eigener Bereich für Vorlagen

**❌ Schlechte Ordnerstruktur:**

```
📁 Verträge
   ├─ 📄 Microsoft
   ├─ 📄 Adobe
   ├─ 📁 Verschiedenes
   │  ├─ 📄 Irgendwas
   │  └─ 📁 Alt
   │     └─ 📁 Sehr alt
   │        └─ 📁 Noch älter
   └─ 📄 Neuer Vertrag 2024
```

**Probleme:**

- Zu viele Ebenen
- Keine klare Struktur
- "Verschiedenes" wird zur Müllhalde
- Verträge direkt im Hauptordner

### Benamung

**✅ Gute Namen:**

- "Lieferantenverträge IT"
- "Kundenverträge Projektgeschäft"
- "Mietverträge Büroräume"
- "Vertragsvorlagen Lizenzen"

**❌ Schlechte Namen:**

- "Ordner1"
- "Neu"
- "Verschiedenes"
- "Temp"

**Prinzipien:**

- Beschreibend
- Nicht zu lang (max. 50 Zeichen)
- Konsistente Namenskonvention
- Keine Sonderzeichen

## Berechtigungen richtig setzen

### Sichtbarkeit wählen

**Normal verwenden für:**

- ✅ Standard-Lieferantenverträge
- ✅ Allgemeine Kundenverträge
- ✅ Öffentliche Rahmenverträge
- ✅ Vertragsvorlagen (alle sollen nutzen können)

**Geschützt verwenden für:**

- 🔐 Geschäftsführungs-Verträge
- 🔐 Personalverträge
- 🔐 M&A-Verträge
- 🔐 Sensible Lieferantenverträge

### Teams und Admins

**Team-Zusammenstellung:**

✅ **Empfehlungen:**

- Nur Personen, die wirklich Zugriff brauchen
- Vererbung für konsistente Unterordner
- Regelmässig überprüfen (vierteljährlich)
- Alte Mitarbeiter entfernen

❌ **Häufige Fehler:**

- Alle ins Team aufnehmen
- Keine Vererbung nutzen
- Teams nie aktualisieren
- Keine Admins definieren

**Admins zuweisen:**

- 1-2 Personen pro Ordner
- Verantwortliche für Abteilung
- Müssen zuerst Team-Mitglieder sein

## Verträge vollständig erfassen

### Pflichtfelder

**Immer ausfüllen:**

- ✅ **Titel**: Aussagekräftig und eindeutig
- ✅ **Von-Datum**: Vertragsbeginn
- ✅ **Bis-Datum**: Vertragsende (falls befristet)
- ✅ **Verantwortlicher Mitarbeiter**: Ansprechpartner
- ✅ **Verantwortliche Orgunit**: Zuständige Abteilung
- ✅ **Status**: Aktueller Status

**Optional, aber empfohlen:**

- ✅ **Beschreibung**: Zusätzliche Informationen
- ✅ **Partner**: Vertragspartner
- ✅ **Typ**: Vertragstyp
- ✅ **Kündigungsmodalitäten**: Bedingungen
- ✅ **Kündigungsfrist**: Frist
- ✅ **Spätester Kündigungstermin**: Datum
- ✅ **Betrag**: Vertragssumme
- ✅ **Cashflow-Typ**: Ein-/Ausgang

### Dateien hochladen

**Immer hochladen:**

- 📄 Vertragsunterlagen (PDF)
- 📄 Anlagen
- 📄 Zusatzvereinbarungen

**Best Practices:**

- Aussagekräftige Dateinamen
- PDF bevorzugen (archivierungsfähig)
- Titel und Beschreibung pro Datei
- Versionierung durch mehrfache Uploads

### Wertflüsse erfassen

**Wann erstellen:**

- Sobald Vertrag aktiviert wird
- Für alle finanziellen Verpflichtungen

**Was erfassen:**

- Typ: Einnahme oder Ausgabe
- Periodizität: Einmalig oder wiederkehrend
- Zeitraum: Start- und Enddatum
- Betrag: Summe pro Periode

## Vorlagen konsequent nutzen

### Vorlagen-Bibliothek aufbauen

**Empfohlene Vorlagen:**

1. **Mietverträge:**
   - Büroräume
   - Lager
   - Parkplätze

2. **Lizenzverträge:**
   - Software-Lizenzen
   - Cloud-Services
   - Subscriptions

3. **Dienstleistungsverträge:**
   - IT-Dienstleister
   - Reinigung
   - Sicherheit

4. **Arbeitsverträge:**
   - Festanstellung
   - Befristete Anstellung
   - Teilzeit

**Vorlagen pflegen:**

- Jährlich überprüfen
- Bei Änderungen aktualisieren
- Veraltete löschen

### Aus Vorlagen erstellen

**Workflow:**

1. ✅ Passende Vorlage suchen
2. ✅ Aus Vorlage erstellen
3. ✅ Spezifische Daten anpassen
4. ✅ Wertflüsse hinzufügen
5. ✅ Status aktivieren

**Zeitersparnis:**

- ✅ Keine Feldausfüller von Grund auf
- ✅ Konsistente Verträge
- ✅ Weniger Fehler

## Kündigungsfristen im Blick behalten

### Fristen erfassen

**Immer erfassen:**

- ⏰ **Kündigungsfrist**: Dauer (z.B. "3 Monate")
- ⏰ **Spätester Kündigungstermin**: Datum

**Berechnung:**

Beispiel: Vertrag endet 31.12.2024, Kündigung 3 Monate

- Spätester Kündigungstermin: 30.09.2024
- Benachrichtigung: 01.07.2024 (3 Monate vorher)

### Überwachung

**Wöchentliche Routine:**

1. Vertragsübersicht öffnen
2. Nach Ablaufdatum sortieren
3. Filter: Bis-Datum < heute + 3 Monate
4. Status: Aktiv
5. Prüfen: Kündigen oder verlängern?

**Monatliche Prüfung:**

- Alle Verträge mit Status "Aktiv"
- Kündigungstermine in nächsten 6 Monaten
- Entscheidungen vorbereiten

### Benachrichtigungen nutzen

**Falls konfiguriert:**

- ✅ Automatische E-Mails
- ✅ 3 Monate vor Kündigungstermin
- ✅ 1 Monat vor Kündigungstermin

**Manuelle Erinnerungen:**

- Kalendereinträge erstellen
- Tasks in ELIZA anlegen

## Wertflüsse korrekt erfassen

### Typen unterscheiden

**Einnahmen (in):**

- Kundenverträge
- Mieteinnahmen
- Lizenzeinnahmen

**Ausgaben (out):**

- Lieferantenverträge
- Mietausgaben
- Lizenzkosten

### Periodizität

**Einmalige Zahlungen:**

- Einrichtungsgebühren
- Abschlusszahlungen
- Sonderzahlungen

**Periodische Zahlungen:**

- Monatlich: Miete, Abos
- Vierteljährlich: Servicepauschalen
- Halbjährlich: Versicherungen
- Jährlich: Lizenzen, Wartungsverträge

### Reporting

**Regelmässige Auswertungen:**

1. **Monatlich:**
   - Alle fälligen Zahlungen
   - Cashflow-Übersicht

2. **Quartalsweise:**
   - Ausgaben pro Orgunit
   - Top 10 kostenintensive Verträge

3. **Jährlich:**
   - Gesamtkosten Verträge
   - Budget-Vergleich
   - Forecast für nächstes Jahr

## Häufige Fehler vermeiden

### ❌ Fehler 1: Verträge nicht aktivieren

**Problem:** Verträge bleiben im Status "Entwurf"

**Folge:**

- Keine Kündigungsfristen-Überwachung
- Wertflüsse nicht berücksichtigt
- Unvollständiges Reporting

**Lösung:**

- Status zeitnah auf "Aktiv" setzen
- Wöchentlich Entwürfe prüfen

### ❌ Fehler 2: Keine Kündigungsfristen

**Problem:** Spätester Kündigungstermin nicht erfasst

**Folge:**

- Keine Benachrichtigungen
- Verträge laufen ungewollt weiter
- Automatische Verlängerung verpasst

**Lösung:**

- Immer spätesten Kündigungstermin eintragen
- Bei Vertragserstellung Kündigungsmodalitäten prüfen

### ❌ Fehler 3: Keine Verantwortlichen

**Problem:** Kein verantwortlicher Mitarbeiter gesetzt

**Folge:**

- Unklar, wer zuständig ist
- Keine Ansprechpartner
- Benachrichtigungen gehen ins Leere

**Lösung:**

- Jeden Vertrag einem Mitarbeiter zuweisen
- Orgunit setzen

### ❌ Fehler 4: Dateien fehlen

**Problem:** Keine Vertragsunterlagen hochgeladen

**Folge:**

- Verträge nicht auffindbar
- Bei Audit-Problemen
- Rechtliche Unsicherheit

**Lösung:**

- Immer PDF der Vertragsunterlagen hochladen
- Anlagen und Zusatzvereinbarungen ergänzen

### ❌ Fehler 5: Status nicht aktualisiert

**Problem:** Abgelaufene Verträge bleiben als "Aktiv"

**Folge:**

- Falsche Reporting-Zahlen
- Unübersichtliche Listen
- Veraltete Verträge im Blick

**Lösung:**

- Monatlich Status prüfen
- Abgelaufene auf "Abgelaufen" setzen
- Nach 1 Jahr archivieren

### ❌ Fehler 6: Wertflüsse fehlen

**Problem:** Keine Wertflüsse erfasst

**Folge:**

- Keine finanzielle Übersicht
- Reporting lückenhaft
- Budget-Planung schwierig

**Lösung:**

- Bei Aktivierung Wertflüsse hinzufügen
- Alle finanziellen Verpflichtungen erfassen

### ❌ Fehler 7: Falsche Ordner-Struktur

**Problem:** Verträge im falschen Ordner

**Folge:**

- Schwer auffindbar
- Falsche Berechtigungen
- Unübersichtlich

**Lösung:**

- Ordner-Struktur planen
- Verträge richtig zuordnen
- Bei Bedarf verschieben

## Checklisten

### Checkliste: Neuen Vertrag anlegen

- [ ] Richtigen Ordner wählen
- [ ] Titel aussagekräftig formulieren
- [ ] Alle Pflichtfelder ausfüllen
- [ ] Laufzeit (Von/Bis) erfassen
- [ ] Kündigungsmodalitäten erfassen
- [ ] Spätesten Kündigungstermin setzen
- [ ] Verantwortlichen Mitarbeiter zuweisen
- [ ] Verantwortliche Orgunit setzen
- [ ] Partner eingeben
- [ ] Cashflow-Typ wählen
- [ ] Betrag erfassen
- [ ] Status auf "Aktiv" setzen
- [ ] Vertragsunterlagen hochladen
- [ ] Wertflüsse hinzufügen
- [ ] Prüfen und speichern

### Checkliste: Wöchentliche Routine

- [ ] Vertragsübersicht öffnen
- [ ] Nach Ablaufdatum sortieren
- [ ] Filter: Bis-Datum < heute + 3 Monate
- [ ] Kündigungstermine prüfen
- [ ] Entscheidungen vorbereiten (kündigen/verlängern)
- [ ] Status aktualisieren
- [ ] Verantwortliche informieren

### Checkliste: Monatliche Prüfung

- [ ] Alle Entwürfe prüfen (aktivieren oder löschen)
- [ ] Alle aktiven Verträge durchgehen
- [ ] Status aktualisieren (Abgelaufen/Gekündigt)
- [ ] Kündigungstermine in nächsten 6 Monaten prüfen
- [ ] Wertflüsse überprüfen
- [ ] Veraltete Dateien entfernen
- [ ] Reporting erstellen

### Checkliste: Vierteljährliche Review

- [ ] Ordner-Struktur prüfen
- [ ] Berechtigungen überprüfen
- [ ] Teams aktualisieren (alte Mitarbeiter entfernen)
- [ ] Vorlagen aktualisieren
- [ ] Archivierte Verträge aufräumen
- [ ] Reporting erstellen (Ausgaben pro Orgunit)
- [ ] Budget-Vergleich durchführen

### Checkliste: Jährliche Wartung

- [ ] Alle archivierten Verträge prüfen (löschen?)
- [ ] Ordner-Struktur optimieren
- [ ] Vertragsvorlagen überprüfen und aktualisieren
- [ ] Berechtigungskonzept reviewen
- [ ] Systemgruppen prüfen
- [ ] Reporting über Gesamtjahr
- [ ] Lessons Learned dokumentieren

## Checklisten für Administratoren

### Checkliste: Neuen Ordner erstellen

- [ ] Titel aussagekräftig wählen
- [ ] Beschreibung hinzufügen
- [ ] Sichtbarkeit wählen (Normal/Geschützt)
- [ ] Verantwortliche Orgunit setzen
- [ ] Zugewiesene Orgunits wählen
- [ ] Team-Mitglieder hinzufügen
- [ ] Admins definieren
- [ ] Vererbung aktivieren (falls Unterordner)
- [ ] Prüfen und speichern
- [ ] Berechtigungen testen

### Checkliste: Berechtigungen konfigurieren

- [ ] Systemgruppen für Benutzer prüfen
- [ ] Ordner-Teams aktualisieren
- [ ] Ordner-Admins zuweisen
- [ ] Sichtbarkeit überprüfen
- [ ] Orgunit-Zuordnungen prüfen
- [ ] Vererbung konfigurieren
- [ ] Testbenutzer einloggen und testen
- [ ] Dokumentation aktualisieren

### Checkliste: Vorlagen verwalten

- [ ] Vorlagen-Ordner erstellen/prüfen
- [ ] Vorlagen nach Kategorien sortieren
- [ ] Veraltete Vorlagen deaktivieren/löschen
- [ ] Neue Vorlagen erstellen
- [ ] Dateien in Vorlagen aktualisieren
- [ ] Beschreibungen ergänzen
- [ ] Benutzer schulen (Vorlagen nutzen)

## Zusammenfassung

### Top 10 Best Practices

1. **Ordnerstruktur planen**: Logisch, maximal 3-4 Ebenen
2. **Berechtigungen setzen**: Normal für Standard, Geschützt für Sensibles
3. **Verträge vollständig erfassen**: Alle Felder, Dateien, Wertflüsse
4. **Vorlagen nutzen**: Zeitersparnis und Konsistenz
5. **Kündigungsfristen erfassen**: Immer spätesten Kündigungstermin
6. **Status pflegen**: Entwurf → Aktiv → Abgelaufen → Archiviert
7. **Verantwortliche setzen**: Mitarbeiter und Orgunit
8. **Wertflüsse hinzufügen**: Für Reporting und Übersicht
9. **Regelmässige Routinen**: Wöchentlich Kündigungen, monatlich Status
10. **Dokumentation**: Berechtigungskonzept und Prozesse dokumentieren

### Wichtige Punkte

- 📁 **Ordnerstruktur**: Logisch und konsistent
- 🔐 **Berechtigungen**: Geschützt für Sensibles, Teams pflegen
- ✅ **Vollständigkeit**: Alle Felder, Dateien, Wertflüsse
- 📋 **Vorlagen**: Zeitersparnis durch Wiederverwendung
- ⏰ **Kündigungsfristen**: Überwachung ist essentiell
- 📊 **Reporting**: Regelmässige Auswertungen
- 🔄 **Routinen**: Wöchentlich, monatlich, vierteljährlich, jährlich

## Nächste Schritte

Du hast nun alle Kapitel durchgearbeitet! Nutze dieses Wissen um:

- ✅ Dein Vertragsmanagement zu optimieren
- ✅ Best Practices umzusetzen
- ✅ Fehler zu vermeiden
- ✅ Effizienz zu steigern

**Viel Erfolg beim Vertragsmanagement!** 🚀

---

💡 **Tipp:** Drucke dir die Checklisten aus und hänge sie an deinen Arbeitsplatz!

Bei Fragen wende dich an deinen ELIZA-Administrator oder das Support-Team.
