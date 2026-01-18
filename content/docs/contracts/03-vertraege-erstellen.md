---
title: "Verträge erstellen"
description: ""
weight: "3"
tags:
  - "create"
  - "contracts"
  - "edit"
---


# Verträge erstellen

In diesem Kapitel lernst du, wie du neue Verträge erstellst und bestehende Verträge bearbeitest.

## Neuen Vertrag erstellen

### Voraussetzungen

Um einen Vertrag zu erstellen, benötigst du:

- Berechtigung: `contracts.add_contract`
- Zugriff auf einen Ordner (als Team-Mitglied oder Admin)
- Kenntnis der Vertragsdaten

### Schritt-für-Schritt Anleitung

**Schritt 1: Ordner öffnen**

1. Navigiere zum Vertragsmanagement
2. Öffne den Ordner, in dem der Vertrag liegen soll
3. Klicke auf den grünen Button **"+ Neuer Vertrag"**

**Schritt 2: Formular ausfüllen**

Das Vertragsformular ist in mehrere Bereiche gegliedert:

### Grunddaten

**Titel** (Pflichtfeld)

- Gib einen aussagekräftigen Titel ein
- Beispiel: "Microsoft Office 365 Lizenz 2024"
- ✅ Kurz und prägnant
- ❌ Nicht zu allgemein (z.B. nur "Lizenz")

**Beschreibung** (Optional)

- Ausführliche Beschreibung des Vertrags
- Besonderheiten oder wichtige Hinweise
- Markdown-Formatierung möglich

**Typ** (Optional)

- Vertragsart auswählen (z.B. "Dienstleistung", "Mietvertrag", "Lizenz")
- Falls nicht vorhanden, kann neuer Typ erstellt werden

**Partner** (Optional)

- Vertragspartner eingeben
- Name des Unternehmens oder der Person
- Beispiel: "Microsoft Deutschland GmbH"

### Laufzeit

**Von-Datum** (from_date)

- Vertragsbeginn
- Format: TT.MM.JJJJ
- Beispiel: 01.01.2024

**Bis-Datum** (to_date) (Optional)

- Vertragsende
- Bei unbefristeten Verträgen leer lassen
- Beispiel: 31.12.2024

**Dauer** (duration) (Optional)

- Vertragsdauer in Tagen
- Wird automatisch aus Von/Bis berechnet
- Kann auch manuell eingegeben werden

### Kündigung

**Kündigungsmodalitäten** (modalities)

- Textfeld für Kündigungsbedingungen
- Beispiel: "Kündigung 3 Monate zum Jahresende"
- Beispiel: "Automatische Verlängerung um 1 Jahr"

**Kündigungsfrist** (period_of_notice)

- Frist in Tagen, Wochen oder Monaten
- Beispiel: "3 Monate"
- Beispiel: "90 Tage"

**Frühester Kündigungstermin** (earliest_cancellation_date)

- Ab wann kann frühestens gekündigt werden
- Format: TT.MM.JJJJ

**Spätester Kündigungstermin** (latest_cancellation_date)

- Bis wann muss spätestens gekündigt werden
- Format: TT.MM.JJJJ
- ⚠️ Wichtig für automatische Erinnerungen

### Geldfluss und Zahlungsmodalitäten

**Zahlungsmodalitäten** (payment_modalities)

- Textfeld für Zahlungsbedingungen
- Beispiel: "Jährlich im Voraus"
- Beispiel: "Monatlich zum 1. des Monats"

**Cashflow-Typ** (cashflow_type)

- **In**: Einnahme (Kunde zahlt uns)
- **Out**: Ausgabe (wir zahlen Lieferanten)
- Beispiel: Lieferantenvertrag = "Out"

**Zahlungsperiodizität** (payment_periodicity)

Wähle aus:

- Monatlich
- Vierteljährlich
- Halbjährlich
- Jährlich
- Einmalig

**Betrag** (amount)

- Vertragssumme eingeben
- Format: 1234.56
- Währung wird automatisch gesetzt (CHF/EUR)

### Federführung

**Verantwortlicher Mitarbeiter** (responsible_employee)

- Wer ist für den Vertrag verantwortlich?
- Wähle aus Benutzerliste
- Beispiel: Max Muster

**Verantwortliche Organisationseinheit** (responsible_orgunit)

- Welche Abteilung ist verantwortlich?
- Wähle aus Orgunit-Liste
- Beispiel: "IT-Abteilung"

**Zugewiesene Organisationseinheiten** (assigned_orgunits)

- Welche weiteren Abteilungen sind beteiligt?
- Mehrfachauswahl möglich
- Beispiel: IT, Finanzen

### Status

Wähle den aktuellen Status:

- **Entwurf**: Vertrag in Vorbereitung
- **Aktiv**: Vertrag läuft
- **Gekündigt**: Vertrag wurde gekündigt
- **Abgelaufen**: Vertrag ist ausgelaufen
- **Archiviert**: Vertrag archiviert

**Schritt 3: Speichern**

1. Prüfe alle Angaben
2. Klicke auf den grünen Button **"Speichern"**
3. Du wirst zur Vertrags-Detailansicht weitergeleitet

## Dateien hochladen

Nach dem Erstellen des Vertrags kannst du Dateien hochladen:

**Schritt 1: Dateien-Tab öffnen**

1. Öffne den Vertrag
2. Klicke auf den Tab **"Dateien"**
3. Klicke auf **"+ Neue Datei"**

**Schritt 2: Datei hochladen**

1. **Titel**: Name der Datei (z.B. "Vertragsunterlagen")
2. **Beschreibung**: Optionale Beschreibung
3. **Datei**: Wähle Datei von deinem Computer
4. Klicke auf **"Hochladen"**

**Unterstützte Formate:**

- PDF (empfohlen)
- Word (.docx, .doc)
- Excel (.xlsx, .xls)
- Bilder (.png, .jpg)

## Wertflüsse hinzufügen

Wertflüsse sind Ein- und Ausgangsrechnungen:

**Schritt 1: Wertflüsse-Tab öffnen**

1. Öffne den Vertrag
2. Klicke auf den Tab **"Wertflüsse"**
3. Klicke auf **"+ Neuer Wertfluss"**

**Schritt 2: Wertfluss-Typ wählen**

- **Einnahme (in)**: Kunde zahlt uns
- **Ausgabe (out)**: Wir zahlen Lieferanten

**Schritt 3: Zahlungsart wählen**

**Einmalige Zahlung:**

- Aktiviere "Einmalige Zahlung"
- Wähle Startdatum
- Wähle Enddatum (optional)
- Gib Betrag ein

**Periodische Zahlung:**

- Lasse "Einmalige Zahlung" deaktiviert
- Wähle Periodizität (monatlich, jährlich, etc.)
- Wähle Startdatum
- Wähle Enddatum
- Gib Betrag pro Periode ein

**Schritt 4: Weitere Daten**

- **Einheit**: CHF, EUR, USD (Standard: CHF)
- **Betrag**: Summe pro Periode
- **Beschreibung**: Optionale Notiz

**Schritt 5: Speichern**

- Klicke auf **"Speichern"**
- Wertfluss erscheint in der Liste

**Beispiel: Monatliche Mietzahlung**

```
Typ: Ausgabe (out)
Einmalige Zahlung: Nein
Periodizität: Monatlich
Startdatum: 01.01.2024
Enddatum: 31.12.2024
Betrag: 5000
Einheit: CHF
Beschreibung: Monatliche Miete für Büroräume
```

## Vertrag bearbeiten

### Voraussetzungen

- Berechtigung: `contracts.change_contract`
- Zugriff auf den Ordner

### Schritt-für-Schritt

1. Öffne den Vertrag
2. Klicke auf **"Bearbeiten"** (oben rechts)
3. Ändere die gewünschten Felder
4. Klicke auf **"Speichern"**

**Hinweis:** Alle Änderungen werden im Audit-Trail protokolliert.

## Vertrag löschen

### Voraussetzungen

- Berechtigung: `contracts.delete_contract`
- Zugriff auf den Ordner als Admin

### Schritt-für-Schritt

1. Öffne den Vertrag
2. Klicke auf **"Löschen"** (rot, oben rechts)
3. Bestätige die Löschung

⚠️ **Warnung:** Gelöschte Verträge können nicht wiederhergestellt werden! Überlege zweimal, bevor du löschst.

**Alternative:** Setze den Status auf "Archiviert" statt zu löschen.

## Best Practices

### ✅ Empfehlungen

**1. Vollständige Daten erfassen:**

- Fülle alle relevanten Felder aus
- Besonders wichtig: Laufzeit, Kündigungsfristen
- Lade alle Vertragsunterlagen hoch

**2. Aussagekräftige Titel:**

- ✅ "Microsoft Office 365 Lizenz 2024-2025"
- ❌ "Office"

**3. Kündigungsfristen pflegen:**

- Erfasse frühesten und spätesten Kündigungstermin
- Nutze die automatischen Erinnerungen

**4. Wertflüsse korrekt erfassen:**

- Einnahmen = "in"
- Ausgaben = "out"
- Bei periodischen Zahlungen: Korrekte Periodizität wählen

**5. Status aktuell halten:**

- Entwurf → Aktiv → Gekündigt → Abgelaufen
- Archiviere alte Verträge

### ❌ Häufige Fehler

**1. Unvollständige Daten:**

- Kündigungsfristen fehlen
- Keine Dateien hochgeladen
- Verantwortlicher nicht gesetzt

**2. Falsche Wertflüsse:**

- Typ verwechselt (in/out)
- Periodizität falsch (monatlich statt jährlich)
- Startdatum in der Vergangenheit vergessen

**3. Status nicht aktualisiert:**

- Vertrag läuft aus, Status bleibt "Aktiv"
- Gekündigter Vertrag nicht auf "Gekündigt" gesetzt

**4. Verträge im falschen Ordner:**

- Lieferantenvertrag bei Kundenverträgen
- 💡 Lösung: Ordner sorgfältig wählen oder Vertrag verschieben

## Häufige Fragen

### Kann ich Verträge nachträglich in einen anderen Ordner verschieben?

Ja, wenn du die entsprechenden Rechte hast:

1. Öffne den Vertrag
2. Klicke auf **"Ordner ändern"**
3. Wähle neuen Ordner
4. Speichern

### Was passiert, wenn ich das Bis-Datum nicht ausfülle?

Der Vertrag gilt als unbefristet. Du kannst später ein Enddatum ergänzen.

### Kann ich mehrere Dateien hochladen?

Ja, klicke einfach mehrmals auf "Neue Datei". Es gibt keine Beschränkung der Anzahl.

### Wie berechne ich Wertflüsse über die Laufzeit?

Das System berechnet automatisch die Gesamtsumme basierend auf:

- Periodizität (z.B. monatlich = 12x pro Jahr)
- Betrag pro Periode
- Laufzeit (Startdatum bis Enddatum)

Beispiel: 500 CHF monatlich über 12 Monate = 6'000 CHF Gesamtsumme

### Kann ich Verträge aus Vorlagen erstellen?

Ja! Siehe [Kapitel 6: Vorlagen]({{< ref "06-vorlagen" >}}) für Details.

## Nächste Schritte

Jetzt, wo du Verträge erstellen kannst:

1. **[Kapitel 4: Vertragsübersicht]({{< ref "04-vertragsuebersicht" >}})** - Lerne, wie du Verträge suchst und filterst
2. **[Kapitel 6: Vorlagen]({{< ref "06-vorlagen" >}})** - Nutze Vorlagen für wiederkehrende Verträge

---

💡 **Tipp:** Erstelle für häufige Vertragstypen (z.B. Mietverträge, Lizenzverträge) Vorlagen, um Zeit zu sparen!
