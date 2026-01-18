---
title: "Workflow und Freigabeprozesse"
description: ""
weight: "7"
tags:
  - "workflow"
  - "processes"
  - "contracts"
---


# Workflow und Freigabeprozesse

In diesem Kapitel lernst du, wie du Workflows für strukturierte Vertragsprozesse nutzt.

## Vertragsworkflow verstehen

### Status-Konzept

Verträge durchlaufen verschiedene Status während ihres Lebenszyklus:

```
[Entwurf] → [Aktiv] → [Gekündigt] → [Abgelaufen] → [Archiviert]
```

**Status im Detail:**

| Status | Beschreibung | Anwendungsfall |
|--------|--------------|----------------|
| **Entwurf** | Vertrag in Vorbereitung | Vertrag wird gerade erstellt, noch nicht unterschrieben |
| **Aktiv** | Vertrag läuft | Vertrag ist unterschrieben und gültig |
| **Gekündigt** | Vertrag wurde gekündigt | Kündigung wurde ausgesprochen, Vertrag läuft noch bis Enddatum |
| **Abgelaufen** | Vertrag ist ausgelaufen | Enddatum ist erreicht, Vertrag ist nicht mehr gültig |
| **Archiviert** | Vertrag archiviert | Vertrag wird nicht mehr benötigt, aus aktiver Liste entfernt |

### Workflow-Diagramm

**Typischer Workflow:**

```
1. Erstellen
   ↓
[Entwurf] ──────────────────────────────┐
   ↓                                     │
2. Prüfen und freigeben                  │
   ↓                                     │
[Aktiv] ─────────────────────────────────┤
   ↓                                     │
3. Laufzeit überwachen                   │
   ↓                                     │
4. Kündigung aussprechen (optional)      │
   ↓                                     │
[Gekündigt] ─────────────────────────────┤
   ↓                                     │
5. Vertragsende erreichen                │
   ↓                                     │
[Abgelaufen] ────────────────────────────┤
   ↓                                     │
6. Archivieren                           │
   ↓                                     │
[Archiviert] ────────────────────────────┘
```

## Status-Übergänge

### Von Entwurf zu Aktiv

**Wann:** Vertrag ist unterschrieben und gültig

**Vorgehen:**

1. Öffne den Vertrag
2. Prüfe alle Daten:
   - ✅ Alle Felder ausgefüllt
   - ✅ Vertragsunterlagen hochgeladen
   - ✅ Laufzeit korrekt
   - ✅ Kündigungsfristen erfasst
3. Klicke auf **"Bearbeiten"**
4. Setze Status auf **"Aktiv"**
5. Speichere

**Folgen:**

- ✅ Vertrag erscheint in aktiver Vertragsliste
- ✅ Kündigungsfristen-Überwachung startet
- ✅ Wertflüsse werden berücksichtigt

### Von Aktiv zu Gekündigt

**Wann:** Kündigung wurde ausgesprochen

**Vorgehen:**

1. Öffne den Vertrag
2. Klicke auf **"Bearbeiten"**
3. Setze Status auf **"Gekündigt"**
4. Optional: Notiere Kündigungsdatum in Beschreibung
5. Speichere

**Folgen:**

- ⚠️ Vertrag ist gekennzeichnet als gekündigt
- ✅ Läuft noch bis Enddatum
- ✅ Keine Verlängerung mehr

### Von Gekündigt/Aktiv zu Abgelaufen

**Wann:** Enddatum ist erreicht

**Vorgehen:**

1. System kann automatisch Status ändern (falls konfiguriert)
2. Oder manuell:
   - Öffne den Vertrag
   - Setze Status auf **"Abgelaufen"**
   - Speichere

**Folgen:**

- ❌ Vertrag ist nicht mehr gültig
- ✅ Bleibt sichtbar in Vertragsübersicht
- ⚠️ Kann archiviert werden

### Von Abgelaufen zu Archiviert

**Wann:** Vertrag wird nicht mehr benötigt

**Vorgehen:**

1. Öffne den Vertrag
2. Klicke auf **"Bearbeiten"**
3. Setze Status auf **"Archiviert"**
4. Speichere

**Folgen:**

- 📦 Vertrag wird aus aktiver Liste entfernt
- ✅ Bleibt in Datenbank (nicht gelöscht)
- ✅ Kann über Filter wieder angezeigt werden

## Verantwortlichkeiten und Organisationseinheiten

### Verantwortlicher Mitarbeiter

**Wer ist für den Vertrag verantwortlich?**

Der verantwortliche Mitarbeiter:

- ✅ Ist Ansprechpartner für den Vertrag
- ✅ Überwacht Kündigungsfristen
- ✅ Koordiniert Verlängerungen
- ✅ Erhält Benachrichtigungen (falls konfiguriert)

**Setzen:**

1. Vertrag bearbeiten
2. Feld **"Verantwortlicher Mitarbeiter"** auswählen
3. Speichern

### Verantwortliche Organisationseinheit

**Welche Abteilung ist zuständig?**

Die verantwortliche Orgunit:

- ✅ Definiert Zuständigkeit
- ✅ Ermöglicht Reporting nach Abteilung
- ✅ Steuert Zugriffsrechte (in Kombination mit Ordner-Berechtigungen)

**Best Practice:**

- IT-Verträge → IT-Abteilung
- HR-Verträge → Personalabteilung
- Mietverträge → Facility Management

### Zugewiesene Organisationseinheiten

**Welche weiteren Abteilungen sind beteiligt?**

Zugewiesene Orgunits:

- ✅ Mehrfachauswahl möglich
- ✅ Alle Mitglieder dieser Orgunits erhalten Zugriff
- ✅ Wichtig für Reporting und Auswertungen

**Beispiel:**

```
Vertrag: "Microsoft Office 365"
Verantwortliche Orgunit: IT-Abteilung
Zugewiesene Orgunits: IT, Finanzen, Marketing

→ IT ist federführend
→ Finanzen und Marketing können auf Vertrag zugreifen
```

## Kündigungsfristen und Benachrichtigungen

### Kündigungsfristen erfassen

**Wichtige Felder:**

**Kündigungsfrist (period_of_notice):**

- Frist in Tagen, Wochen oder Monaten
- Beispiel: "3 Monate", "90 Tage"

**Frühester Kündigungstermin (earliest_cancellation_date):**

- Ab wann kann frühestens gekündigt werden
- Optional

**Spätester Kündigungstermin (latest_cancellation_date):**

- Bis wann muss spätestens gekündigt werden
- ⚠️ Wichtig für automatische Erinnerungen!

**Kündigungsmodalitäten (modalities):**

- Textfeld für Bedingungen
- Beispiel: "Kündigung 3 Monate zum Jahresende"
- Beispiel: "Automatische Verlängerung um 1 Jahr bei Nicht-Kündigung"

### Berechnung des Kündigungstermins

**Beispiel 1: Feste Kündigungstermine**

```
Vertrag: Microsoft Office 365
Laufzeit: 01.01.2024 - 31.12.2024
Kündigung: 3 Monate zum Jahresende
Spätester Kündigungstermin: 30.09.2024

→ Kündigung muss bis 30.09.2024 ausgesprochen werden
→ Sonst automatische Verlängerung um 1 Jahr
```

**Beispiel 2: Flexible Kündigungstermine**

```
Vertrag: Büromietvertrag
Laufzeit: 01.07.2024 - unbefristet
Kündigung: 3 Monate zum Quartalsende
Frühester Kündigungstermin: 01.07.2025 (nach 1 Jahr)

→ Frühestens zum 30.09.2025 kündbar (Kündigung bis 30.06.2025)
→ Oder zum 31.12.2025 (Kündigung bis 30.09.2025)
→ Oder zum 31.03.2026 (Kündigung bis 31.12.2025)
```

### Benachrichtigungen (falls konfiguriert)

**Automatische Erinnerungen:**

Manche ELIZA-Installationen senden automatische Benachrichtigungen:

- ⏰ 3 Monate vor Kündigungstermin
- ⏰ 1 Monat vor Kündigungstermin
- ⏰ 1 Woche vor Kündigungstermin

**Empfänger:**

- Verantwortlicher Mitarbeiter
- Ordner-Admins
- Admins der verantwortlichen Orgunit

**Konfiguration:**

- Systemeinstellung (nur für Administratoren)
- Individuell pro Ordner (optional)

## Wertfluss-Management

### Wertflüsse im Workflow

Wertflüsse sind Ein- und Ausgangsrechnungen, die mit dem Vertrag verbunden sind.

**Wann erstellen:**

- ✅ Bei Aktivierung des Vertrags (Status = "Aktiv")
- ✅ Sobald Zahlungsströme bekannt sind

**Arten:**

**Einmalige Wertflüsse:**

- Einrichtungsgebühren
- Einmalige Zahlungen
- Abschlusszahlungen

**Periodische Wertflüsse:**

- Monatliche Miete
- Jährliche Lizenzgebühren
- Vierteljährliche Servicepauschale

### Wertflüsse über Vertragslaufzeit

**Beispiel: Monatliche Zahlungen**

```
Vertrag: Büromietvertrag
Laufzeit: 01.01.2024 - 31.12.2024
Zahlungsperiodizität: Monatlich
Betrag: 5000 CHF

Wertfluss:
- Typ: Ausgabe (out)
- Periodizität: Monatlich
- Startdatum: 01.01.2024
- Enddatum: 31.12.2024
- Betrag: 5000 CHF

Gesamtsumme: 12 × 5000 CHF = 60'000 CHF
```

### Reporting über Wertflüsse

**Auswertungen:**

- 📊 Alle Ausgaben pro Quartal
- 📊 Alle Einnahmen pro Jahr
- 📊 Vertragswerte nach Organisationseinheit
- 📊 Kostenintensive Verträge (Top 10)

**Export für Excel:**

1. Vertragsübersicht öffnen
2. Filter anwenden (z.B. Cashflow-Typ = "Out")
3. Exportieren
4. In Excel Pivot-Tabelle erstellen

## Vertrags-Export

### Excel-Export

**Verträge exportieren:**

1. Öffne Ordner
2. Klicke auf **"Exportieren"**
3. Wähle Optionen:
   - ✅ Unterordner einbeziehen
   - ❌ Abgelaufene Verträge
   - ❌ Archivierte Verträge
4. Export wird heruntergeladen

**Exportierte Daten:**

- Alle Vertragsdaten (Grunddaten, Laufzeit, Kündigung, Finanzen)
- Status
- Verantwortlichkeiten
- Nicht exportiert: Dateien, Wertflüsse

### Verwendung des Exports

**Typische Anwendungsfälle:**

**1. Reporting:**

- Pivot-Tabellen in Excel
- Auswertung nach Organisationseinheit
- Analyse nach Vertragstyp

**2. Controlling:**

- Übersicht Vertragskosten
- Budget-Vergleich
- Forecast für kommendes Jahr

**3. Archivierung:**

- Regelmässiger Export für Backup
- Langzeit-Archivierung

## Workflow-Beispiele

### Beispiel 1: Neuer Lizenzvertrag

**Schritt 1: Erstellen**

1. Ordner "Lizenzverträge" öffnen
2. Neuen Vertrag erstellen (aus Vorlage)
3. Status: **Entwurf**
4. Daten erfassen:
   - Titel: "Microsoft Office 365 Enterprise E3"
   - Partner: "Microsoft Deutschland GmbH"
   - Laufzeit: 01.01.2025 - 31.12.2025
   - Kündigung: 3 Monate zum Jahresende
   - Betrag: 15'000 CHF jährlich
5. Speichern

**Schritt 2: Prüfen**

1. Vertrag prüfen (fachliche Prüfung)
2. Dateien hochladen (Vertragsunterlagen)
3. Verantwortliche setzen:
   - Mitarbeiter: Max Muster (IT-Leiter)
   - Orgunit: IT-Abteilung

**Schritt 3: Aktivieren**

1. Status auf **"Aktiv"** setzen
2. Wertfluss hinzufügen:
   - Typ: Ausgabe
   - Periodizität: Jährlich
   - Betrag: 15'000 CHF
   - Startdatum: 01.01.2025
   - Enddatum: 31.12.2025

**Schritt 4: Überwachen**

- Benachrichtigung: 3 Monate vor Kündigungstermin (30.09.2025)
- Entscheidung: Verlängern oder kündigen?

**Schritt 5: Verlängern oder kündigen**

**Option A: Verlängern**

1. Bis-Datum anpassen: 31.12.2026
2. Wertfluss verlängern

**Option B: Kündigen**

1. Status auf **"Gekündigt"** setzen
2. Notiz: Kündigungsdatum und Grund

**Schritt 6: Vertragsende**

1. Am 31.12.2025: Status auf **"Abgelaufen"**
2. Nach 1 Jahr: Status auf **"Archiviert"**

### Beispiel 2: Mietvertrag mit Kündigung

**Ablauf:**

```
01.01.2024: Vertrag erstellen (Status: Entwurf)
15.01.2024: Vertrag aktivieren (Status: Aktiv)
            Wertfluss: 5000 CHF monatlich
30.06.2025: Benachrichtigung: Kündigungstermin naht
15.07.2025: Kündigung aussprechen (Status: Gekündigt)
30.09.2025: Vertragsende (Status: Abgelaufen)
01.10.2026: Archivieren (Status: Archiviert)
```

## Best Practices

### ✅ Empfehlungen

**1. Status konsequent pflegen:**

- Entwürfe zeitnah aktivieren
- Gekündigte Verträge markieren
- Abgelaufene Verträge archivieren

**2. Verantwortlichkeiten setzen:**

- Jeder Vertrag braucht einen Verantwortlichen
- Organisationseinheit zuweisen

**3. Kündigungsfristen erfassen:**

- Spätester Kündigungstermin eintragen
- Kündigungsmodalitäten dokumentieren

**4. Wertflüsse hinzufügen:**

- Sobald Vertrag aktiv ist
- Periodische vs. einmalige Zahlungen

**5. Regelmässige Reviews:**

- Wöchentlich: Kündigungstermine prüfen
- Monatlich: Status aktualisieren
- Jährlich: Archivierte Verträge aufräumen

### ❌ Häufige Fehler

**1. Status nicht aktualisiert:**

- Verträge bleiben als "Entwurf"
- Abgelaufene Verträge nicht auf "Abgelaufen" gesetzt

**2. Kündigungsfristen fehlen:**

- Keine Benachrichtigungen
- Verträge laufen ungewollt weiter

**3. Keine Verantwortlichen:**

- Unklar, wer für Vertrag zuständig ist
- Keine Ansprechpartner

**4. Wertflüsse fehlen:**

- Keine finanzielle Übersicht
- Reporting lückenhaft

## Zusammenfassung

### Workflow-Schritte

1. **Erstellen**: Neuen Vertrag als Entwurf anlegen
2. **Prüfen**: Daten kontrollieren, Dateien hochladen
3. **Aktivieren**: Status auf "Aktiv" setzen, Wertflüsse hinzufügen
4. **Überwachen**: Kündigungsfristen im Blick behalten
5. **Kündigen** (optional): Status auf "Gekündigt" setzen
6. **Abschliessen**: Status auf "Abgelaufen" setzen
7. **Archivieren**: Status auf "Archiviert" setzen

### Wichtige Punkte

- 📋 Status konsequent pflegen
- 👤 Verantwortlichkeiten klar definieren
- ⏰ Kündigungsfristen erfassen
- 💰 Wertflüsse hinzufügen
- 📊 Regelmässige Reviews durchführen

## Nächste Schritte

- **[Kapitel 8: Best Practices]({{< ref "08-best-practices" >}})** - Optimiere dein Vertragsmanagement

---

💡 **Tipp:** Erstelle eine Checkliste für neue Verträge mit allen Workflow-Schritten!
