---
title: "Einführung ins Vertragsmanagement"
description: ""
weight: "1"
tags:
  - "introduction"
  - "basics"
  - "contracts"
---


# Einführung ins Vertragsmanagement

In diesem Kapitel lernst du die Grundlagen des ELIZA Vertragsmanagement-Moduls kennen.

## Was ist das Vertragsmanagement-Modul?

Das Vertragsmanagement-Modul hilft dir dabei, alle Verträge deines Unternehmens zentral, strukturiert und sicher zu verwalten. Es bietet eine vollständige Lösung für:

- **Vertragsdaten verwalten**: Alle wichtigen Informationen zu Verträgen zentral speichern
- **Dokumente organisieren**: Vertragsunterlagen sicher ablegen und versionieren
- **Kündigungsfristen überwachen**: Automatische Erinnerungen für wichtige Termine
- **Zahlungsströme nachverfolgen**: Ein- und Ausgangsrechnungen im Blick behalten
- **Berechtigungen steuern**: Sensible Verträge nur berechtigten Personen zugänglich machen
- **Zusammenarbeit fördern**: Teams können gemeinsam an Verträgen arbeiten

## Hauptfunktionen

### 📁 Ordner-basierte Organisation

Verträge werden in einer hierarchischen Ordnerstruktur organisiert:

```
📁 Hauptordner (z.B. "Verträge")
   ├─ 📁 Unterordner 1 (z.B. "Lieferantenverträge")
   │  ├─ 📄 Vertrag A
   │  └─ 📄 Vertrag B
   ├─ 📁 Unterordner 2 (z.B. "Kundenverträge")
   │  ├─ 📄 Vertrag C
   │  └─ 📄 Vertrag D
   └─ 📁 Unterordner 3 (z.B. "Mietverträge")
      └─ 📄 Vertrag E
```

**Vorteile:**

- Beliebig tiefe Hierarchien möglich
- Klare Strukturierung nach Kategorien
- Ordner-spezifische Berechtigungen
- Einfache Navigation

### 📄 Vollständige Vertragsdaten

Für jeden Vertrag kannst du umfassende Informationen erfassen:

**Grunddaten:**

- Titel und Beschreibung
- Vertragstyp
- Vertragspartner

**Laufzeit:**

- Startdatum (von Datum)
- Enddatum (bis Datum)
- Vertragsdauer

**Kündigung:**

- Kündigungsmodalitäten
- Kündigungsfrist
- Früheste Kündigungstermin
- Späteste Kündigungstermin

**Finanzielle Aspekte:**

- Cashflow-Typ (Einnahme/Ausgabe)
- Zahlungsmodalitäten
- Zahlungsperiodizität
- Vertragssumme

**Verantwortlichkeiten:**

- Verantwortlicher Mitarbeiter
- Verantwortliche Organisationseinheit
- Zugewiesene Organisationseinheiten

**Status:**

- Entwurf
- Aktiv
- Gekündigt
- Abgelaufen
- Archiviert

### 🗂️ Datei-Management

Verwalte alle Vertragsunterlagen zentral:

- Vertrags-PDF hochladen
- Anlagen und Zusatzvereinbarungen speichern
- Mehrere Dateien pro Vertrag
- Datei-Titel und Beschreibung
- Versionierung durch mehrfache Uploads

### 💰 Wertfluss-Management

Erfasse Ein- und Ausgangsrechnungen:

**Einmalige Wertflüsse:**

- Einmalige Zahlung (z.B. Einrichtungsgebühr)
- Start- und Enddatum
- Betrag und Einheit (CHF, EUR, etc.)

**Periodische Wertflüsse:**

- Wiederkehrende Zahlungen (monatlich, jährlich, etc.)
- Periodizität definieren
- Automatische Berechnung über Laufzeit

**Typen:**

- Einnahmen (incoming)
- Ausgaben (outgoing)

### 🔐 Berechtigungssystem

Kontrolliere den Zugriff auf Verträge durch:

**Ordner-Berechtigungen:**

- Normale Ordner (alle Berechtigten sehen)
- Geschützte Ordner (nur Team und Admins)

**Team-Verwaltung:**

- Team-Mitglieder pro Ordner
- Ordner-Administratoren
- Vererbung von Berechtigungen

**Organisations-basiert:**

- Zugriff nach Organisationseinheit
- Verantwortliche Organisationseinheit

### 📋 Vertragsvorlagen

Nutze Vorlagen für wiederkehrende Vertragsmuster:

- Vertrag als Vorlage markieren
- Aus Vorlage neuen Vertrag erstellen
- Alle Felder und Dateien werden kopiert
- Zeitersparnis bei gleichartigen Verträgen

## Zentrale Konzepte

### Ordner (ContractFolder)

Ordner strukturieren deine Verträge:

- **Hierarchie**: Ordner können Unterordner haben
- **Berechtigungen**: Jeder Ordner hat eigene Berechtigungen
- **Vererbung**: Unterordner können Berechtigungen erben
- **Sichtbarkeit**: Normal oder Geschützt
- **Team**: Wer darf auf den Ordner zugreifen?
- **Admins**: Wer darf den Ordner verwalten?

### Vertrag (Contract)

Verträge sind die Hauptobjekte:

- **Zuordnung**: Jeder Vertrag gehört zu einem Ordner
- **Vollständige Daten**: Alle Vertragsdetails erfassen
- **Dateien**: Mehrere Dokumente pro Vertrag
- **Wertflüsse**: Finanzielle Aspekte nachverfolgen
- **Status**: Aktueller Zustand des Vertrags
- **Vorlage**: Kann als Vorlage markiert werden

### Dateien (File)

Dateien sind die Vertragsunterlagen:

- **Zuordnung**: Jede Datei gehört zu einem Vertrag
- **Upload**: PDF, Word, Excel, etc.
- **Metadaten**: Titel und Beschreibung
- **Versionierung**: Mehrfache Uploads möglich

### Wertflüsse (Valueflow)

Wertflüsse sind Ein- und Ausgangsrechnungen:

- **Zuordnung**: Jeder Wertfluss gehört zu einem Vertrag
- **Typ**: Einnahme oder Ausgabe
- **Zeitraum**: Start- und Enddatum
- **Periodizität**: Einmalig oder wiederkehrend
- **Betrag**: Summe in definierter Währung

## Integration mit anderen Modulen

Das Vertragsmanagement ist mit anderen ELIZA-Modulen verbunden:

### CRM-Integration

**Vertragspartner aus CRM:**

- Wähle Vertragspartner aus CRM-Kontakten
- Automatische Verknüpfung mit Organisationen
- Beteiligungen für Vertragsparteien

**Beteiligungen:**

- Kontakte und Organisationen können am Vertrag beteiligt sein
- Rollen für Vertragsparteien (z.B. "Auftraggeber", "Auftragnehmer")

### Organisation-Integration

**Verantwortlichkeiten:**

- Verantwortliche Organisationseinheit pro Vertrag
- Zugewiesene Organisationseinheiten für Zugriffskontrolle
- Verantwortlicher Mitarbeiter

### DMS-Integration

**Dokumentenverknüpfung:**

- Verträge können mit DMS-Dokumenten verknüpft werden
- Erweiterte Dokumentenverwaltung für Vertragsunterlagen

## Vorteile für dein Unternehmen

### ✅ Zentrale Verwaltung

- Alle Verträge an einem Ort
- Keine verstreuten Excel-Listen mehr
- Schneller Zugriff auf Vertragsinformationen

### ✅ Kündigungsfrist-Management

- Automatische Berechnung von Kündigungsterminen
- Benachrichtigungen für wichtige Fristen
- Keine vergessenen Kündigungen mehr

### ✅ Finanzielle Übersicht

- Ein- und Ausgangsrechnungen im Blick
- Automatische Berechnung wiederkehrender Zahlungen
- Reporting über Vertragswerte

### ✅ Rechtssicherheit

- Vollständige Dokumentation aller Vertragsdaten
- Versionierung von Vertragsunterlagen
- Audit-Trail für Änderungen

### ✅ Zusammenarbeit

- Team-basierte Berechtigungen
- Mehrere Personen können an Verträgen arbeiten
- Klare Verantwortlichkeiten

### ✅ Compliance

- Geschützte Ordner für sensible Verträge
- Zugriffskontrolle nach Organisationseinheit
- Nachvollziehbare Berechtigungen

## Typische Anwendungsfälle

### Lieferantenverträge verwalten

**Szenario:** Dein Unternehmen hat viele Lieferantenverträge mit unterschiedlichen Laufzeiten und Kündigungsfristen.

**Lösung:**

1. Ordner "Lieferantenverträge" erstellen
2. Für jeden Lieferanten einen Vertrag anlegen
3. Kündigungsfristen erfassen
4. Wertflüsse für Ausgaben hinzufügen
5. Automatische Benachrichtigungen für Kündigungstermine

### Kundenverträge mit Wertflüssen

**Szenario:** Dein Unternehmen hat Serviceverträge mit monatlichen Zahlungen.

**Lösung:**

1. Ordner "Kundenverträge" erstellen
2. Vertrag mit Laufzeit erstellen
3. Periodische Wertflüsse (monatlich) hinzufügen
4. Automatische Berechnung der Gesamtsumme
5. Übersicht über erwartete Einnahmen

### Geschützte Verträge für Geschäftsführung

**Szenario:** Sensible Verträge sollen nur der Geschäftsführung zugänglich sein.

**Lösung:**

1. Geschützten Ordner "Geschäftsführung" erstellen
2. Nur GF-Team als Admins und Team hinzufügen
3. Verträge in geschütztem Ordner ablegen
4. Andere Benutzer sehen den Ordner nicht

### Vertragsvorlagen für wiederkehrende Muster

**Szenario:** Dein Unternehmen nutzt Standard-Mietverträge mit gleichem Aufbau.

**Lösung:**

1. Muster-Mietvertrag erstellen
2. Als Vorlage markieren
3. Für neue Mietobjekte aus Vorlage erstellen
4. Nur noch spezifische Daten anpassen
5. Zeitersparnis durch Vorlagen

## Was du in diesem Handbuch lernst

Dieses Handbuch führt dich durch alle Aspekte des Vertragsmanagements:

1. **Erste Schritte** (Kapitel 2): Navigation und Grundlagen
2. **Verträge erstellen** (Kapitel 3): Schritt-für-Schritt Anleitung
3. **Vertragsübersicht** (Kapitel 4): Suchen, Filtern, Sortieren
4. **Berechtigungen** (Kapitel 5): Zugriffskontrolle verstehen
5. **Vorlagen** (Kapitel 6): Effizienz durch Vorlagen
6. **Workflow** (Kapitel 7): Prozesse und Status
7. **Best Practices** (Kapitel 8): Tipps und Tricks

## Nächste Schritte

Bereit für den Einstieg? Fahre fort mit:

- **[Kapitel 2: Erste Schritte]({{< ref "02-erste-schritte" >}})** - Lerne die Navigation und erste Funktionen kennen

---

💡 **Tipp:** Lies zuerst Kapitel 1 und 2, um die Grundlagen zu verstehen, bevor du eigene Verträge anlegst.
