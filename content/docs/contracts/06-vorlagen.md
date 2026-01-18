---
title: "Vertragsvorlagen"
description: ""
weight: "6"
tags:
  - "templates"
  - "efficiency"
  - "contracts"
---


# Vertragsvorlagen

In diesem Kapitel lernst du, wie du Vertragsvorlagen erstellst und nutzt, um Zeit bei wiederkehrenden Vertragsmuster zu sparen.

## Was sind Vertragsvorlagen?

Vertragsvorlagen sind Muster-Verträge, die als Basis für neue Verträge dienen.

**Vorteile:**

- ✅ Zeitersparnis bei gleichartigen Verträgen
- ✅ Konsistente Vertragsstruktur
- ✅ Alle Felder und Dateien werden kopiert
- ✅ Nur noch spezifische Daten anpassen

**Anwendungsfälle:**

- Mietverträge (gleiche Struktur, verschiedene Objekte)
- Lizenzverträge (gleicher Anbieter, verschiedene Produkte)
- Dienstleistungsverträge (gleiche Bedingungen, verschiedene Kunden)
- Rahmenverträge (Muster für Abrufverträge)

## Vorlage erstellen

### Methode 1: Neuen Vertrag als Vorlage anlegen

**Schritt 1: Vertrag erstellen**

1. Navigiere zum gewünschten Ordner
2. Klicke auf **"+ Neuer Vertrag"**
3. Fülle alle Felder aus, die für die Vorlage relevant sind
4. Speichere den Vertrag

**Schritt 2: Als Vorlage markieren**

1. Öffne den Vertrag
2. Klicke auf **"Bearbeiten"**
3. Aktiviere die Checkbox **"Als Vorlage verwenden"** (is_template)
4. Speichere

**Schritt 3: Dateien hochladen** (optional)

1. Wechsle zum Tab **"Dateien"**
2. Lade Muster-Dateien hoch (z.B. PDF-Vorlage des Vertrags)
3. Diese werden bei jedem neuen Vertrag aus der Vorlage mitkopiert

**Was wird in der Vorlage gespeichert:**

- ✅ Alle Vertragsfelder (Titel, Beschreibung, Typ, Partner)
- ✅ Laufzeit-Informationen (Von-Datum, Bis-Datum)
- ✅ Kündigungsmodalitäten
- ✅ Zahlungsmodalitäten
- ✅ Verantwortliche Organisationseinheit
- ✅ Zugewiesene Organisationseinheiten
- ✅ Alle hochgeladenen Dateien

**Was NICHT gespeichert wird:**

- ❌ Wertflüsse (müssen für jeden Vertrag neu erstellt werden)
- ❌ Status (Vorlagen sind immer als "Entwurf" markiert)

### Methode 2: Bestehenden Vertrag zur Vorlage machen

**Schritt-für-Schritt:**

1. Öffne einen bestehenden Vertrag, der als Vorlage dienen soll
2. Klicke auf **"Bearbeiten"**
3. Aktiviere **"Als Vorlage verwenden"**
4. Optional: Passe Titel an (z.B. "Vorlage: Mietvertrag Büroräume")
5. Speichere

**Tipp:** Dupliziere den Vertrag zuerst, um das Original zu behalten.

## Vorlage bearbeiten

### Vorlage finden

**Vorlagen sind normale Verträge mit aktivierter Checkbox:**

1. Navigiere zum Ordner mit Vorlagen
2. Vorlagen sind in der Vertragsliste sichtbar
3. Erkennbar am Titel (z.B. "Vorlage: ...") oder Filter

**Empfehlung:** Erstelle einen eigenen Ordner "Vertragsvorlagen"

### Vorlage anpassen

1. Öffne die Vorlage
2. Klicke auf **"Bearbeiten"**
3. Ändere die gewünschten Felder
4. Speichere

**Was du ändern solltest:**

- **Titel**: Klare Benennung (z.B. "Vorlage: Mietvertrag Büro")
- **Beschreibung**: Erklärung, wofür die Vorlage gedacht ist
- **Felder**: Alle Standard-Werte, die bei neuen Verträgen übernommen werden sollen

**Was du NICHT in Vorlagen setzen solltest:**

- Spezifische Daten (z.B. konkrete Namen, Adressen)
- Konkrete Datumsangaben (werden bei Erstellung aus Vorlage überschrieben)

## Vertrag aus Vorlage erstellen

### Schritt-für-Schritt

**Schritt 1: Ordner öffnen**

1. Navigiere zum Ordner, wo der neue Vertrag liegen soll
2. Klicke auf **"Aus Vorlage erstellen"**

**Schritt 2: Vorlage auswählen**

1. Wähle die gewünschte Vorlage aus der Liste
2. Nur Vorlagen werden angezeigt, auf die du Zugriff hast
3. Klicke auf **"Weiter"**

**Schritt 3: Neue Vertragsdaten prüfen**

Das System erstellt automatisch einen neuen Vertrag mit:

- ✅ Allen Feldern aus der Vorlage
- ✅ Allen Dateien aus der Vorlage (werden kopiert)
- ✅ Neues Von-Datum = Heute
- ✅ Status = "Entwurf"

**Schritt 4: Anpassen**

1. Der neue Vertrag wird geöffnet
2. Klicke auf **"Bearbeiten"**
3. Passe die spezifischen Daten an:
   - Titel (z.B. "Mietvertrag Büro Zürich")
   - Partner (konkreter Partner)
   - Laufzeit (konkrete Daten)
   - Betrag (konkreter Betrag)
4. Speichere

**Schritt 5: Wertflüsse hinzufügen** (optional)

1. Wechsle zum Tab **"Wertflüsse"**
2. Füge konkrete Zahlungsströme hinzu
3. Speichere

**Schritt 6: Status aktivieren**

1. Wenn der Vertrag vollständig ist, ändere Status auf **"Aktiv"**
2. Speichere

## Vorlagen verwalten

### Vorlagen-Ordner erstellen

**Best Practice: Eigener Ordner für Vorlagen**

1. Erstelle einen Hauptordner **"Vertragsvorlagen"**
2. Erstelle Unterordner für verschiedene Kategorien:
   - Mietverträge
   - Lizenzverträge
   - Dienstleistungsverträge
   - Arbeitsverträge
3. Setze Sichtbarkeit auf **"Normal"** (alle sollen Vorlagen nutzen können)

**Struktur-Beispiel:**

```
📁 Vertragsvorlagen
   ├─ 📁 Mietverträge
   │  ├─ 📄 Vorlage: Mietvertrag Büro
   │  └─ 📄 Vorlage: Mietvertrag Lager
   ├─ 📁 Lizenzverträge
   │  ├─ 📄 Vorlage: Microsoft Lizenz
   │  └─ 📄 Vorlage: Adobe Lizenz
   └─ 📁 Dienstleistungsverträge
      └─ 📄 Vorlage: IT-Dienstleistung
```

### Vorlagen löschen

**Voraussetzungen:**

- `contracts.delete_contract` Permission
- Ordner-Admin-Rechte

**Schritt-für-Schritt:**

1. Öffne die Vorlage
2. Klicke auf **"Löschen"**
3. Bestätige

⚠️ **Warnung:** Gelöschte Vorlagen können nicht wiederhergestellt werden!

**Alternative:** Deaktiviere die Checkbox "Als Vorlage verwenden" statt zu löschen.

## Praktische Beispiele

### Beispiel 1: Mietvertrag-Vorlage

**Szenario:** Dein Unternehmen mietet regelmässig neue Büroräume.

**Vorlage erstellen:**

1. **Titel**: "Vorlage: Mietvertrag Büroräume"
2. **Beschreibung**: "Standard-Mietvertrag für Büroräume mit 3 Monaten Kündigungsfrist"
3. **Typ**: "Mietvertrag"
4. **Kündigungsmodalitäten**: "Kündigung 3 Monate zum Quartalsende"
5. **Kündigungsfrist**: "3 Monate"
6. **Cashflow-Typ**: "Out" (Ausgabe)
7. **Zahlungsperiodizität**: "Monatlich"
8. **Verantwortliche Orgunit**: "Facility Management"
9. **Datei hochladen**: Muster-Mietvertrag PDF
10. **Als Vorlage markieren**: ✅

**Neuen Vertrag erstellen:**

1. Aus Vorlage erstellen
2. Anpassen:
   - Titel: "Mietvertrag Büro Zürich Bahnhofstrasse"
   - Partner: "ABC Immobilien GmbH"
   - Von-Datum: 01.07.2024
   - Bis-Datum: 30.06.2029
   - Betrag: 5000 CHF
3. Wertfluss hinzufügen (monatlich 5000 CHF)

### Beispiel 2: Lizenzvertrag-Vorlage

**Szenario:** Dein Unternehmen kauft jährlich Software-Lizenzen von Microsoft.

**Vorlage erstellen:**

1. **Titel**: "Vorlage: Microsoft Lizenz"
2. **Partner**: "Microsoft Deutschland GmbH"
3. **Typ**: "Lizenzvertrag"
4. **Laufzeit**: Von-Datum: (wird bei Erstellung gesetzt)
5. **Bis-Datum**: (1 Jahr nach Von-Datum)
6. **Kündigungsmodalitäten**: "Automatische Verlängerung, Kündigung 3 Monate zum Jahresende"
7. **Cashflow-Typ**: "Out"
8. **Zahlungsperiodizität**: "Jährlich"
9. **Verantwortliche Orgunit**: "IT-Abteilung"
10. **Als Vorlage markieren**: ✅

**Neuen Vertrag erstellen:**

1. Aus Vorlage erstellen
2. Anpassen:
   - Titel: "Microsoft Office 365 Enterprise E3 Lizenz 2024"
   - Von-Datum: 01.01.2024
   - Bis-Datum: 31.12.2024
   - Betrag: 15000 CHF
3. Wertfluss hinzufügen (jährlich 15000 CHF)

### Beispiel 3: Dienstleistungsvertrag-Vorlage

**Szenario:** Dein Unternehmen beauftragt regelmässig externe IT-Dienstleister.

**Vorlage erstellen:**

1. **Titel**: "Vorlage: IT-Dienstleistungsvertrag"
2. **Typ**: "Dienstleistungsvertrag"
3. **Beschreibung**: "Standard-Vertrag für externe IT-Dienstleister"
4. **Zahlungsmodalitäten**: "Monatlich nach Aufwand"
5. **Cashflow-Typ**: "Out"
6. **Verantwortliche Orgunit**: "IT-Abteilung"
7. **Datei hochladen**: Rahmenvertrag-PDF
8. **Als Vorlage markieren**: ✅

## Best Practices

### ✅ Empfehlungen

**1. Vorlagen-Ordner erstellen:**

- Eigener Ordner "Vertragsvorlagen"
- Kategorisiert nach Vertragstyp
- Normale Sichtbarkeit (alle sollen nutzen können)

**2. Klare Benennung:**

- Präfix "Vorlage:" im Titel
- Beschreibender Name (z.B. "Vorlage: Mietvertrag Büro")
- Beschreibung mit Verwendungszweck

**3. Vollständige Vorlagen:**

- Alle relevanten Felder ausfüllen
- Muster-Dateien hochladen
- Kündigungsmodalitäten definieren

**4. Regelmässig aktualisieren:**

- Prüfe Vorlagen jährlich
- Aktualisiere bei Änderungen der Geschäftsbedingungen
- Lösche veraltete Vorlagen

**5. Dokumentation:**

- Beschreibung: Wofür ist die Vorlage gedacht?
- Welche Felder müssen bei Erstellung angepasst werden?
- Besonderheiten oder Hinweise

### ❌ Häufige Fehler

**1. Unvollständige Vorlagen:**

- Wichtige Felder fehlen
- Keine Dateien hochgeladen
- 💡 Lösung: Prüfe Vorlage vor erster Nutzung

**2. Zu spezifische Vorlagen:**

- Konkrete Partner-Namen in Vorlage
- Spezifische Datumsangaben
- 💡 Lösung: Vorlagen sollten allgemein sein

**3. Keine Kategorisierung:**

- Alle Vorlagen in einem Ordner
- 💡 Lösung: Unterordner für Vertragstypen

**4. Veraltete Vorlagen:**

- Alte Bedingungen
- Geänderte Modalitäten
- 💡 Lösung: Regelmässige Reviews

**5. Vorlagen nicht als solche markiert:**

- Checkbox "Als Vorlage" vergessen
- 💡 Lösung: Immer Checkbox aktivieren

## Häufige Fragen

### Kann ich aus Vorlagen Vorlagen erstellen?

Ja! Du kannst:

1. Vorlage A öffnen
2. Aus Vorlage A einen neuen Vertrag B erstellen
3. Vertrag B anpassen
4. Vertrag B als neue Vorlage markieren

### Was passiert, wenn ich die Original-Vorlage ändere?

Bereits erstellte Verträge werden **nicht** beeinflusst. Nur neue Verträge, die nach der Änderung aus der Vorlage erstellt werden, haben die neuen Werte.

### Kann ich Vorlagen aus anderen Ordnern nutzen?

Ja, bei "Aus Vorlage erstellen" werden alle Vorlagen angezeigt, auf die du Zugriff hast (auch aus anderen Ordnern).

### Werden Wertflüsse aus Vorlagen kopiert?

Nein, Wertflüsse müssen für jeden neuen Vertrag manuell hinzugefügt werden. Nur Vertragsdaten und Dateien werden kopiert.

### Kann ich eine Vorlage deaktivieren statt löschen?

Ja, deaktiviere einfach die Checkbox "Als Vorlage verwenden". Der Vertrag bleibt erhalten, wird aber nicht mehr als Vorlage angezeigt.

## Nächste Schritte

Jetzt, wo du Vorlagen nutzen kannst:

1. **[Kapitel 7: Workflow]({{< ref "07-workflow" >}})** - Verstehe Workflows und Status
2. **[Kapitel 8: Best Practices]({{< ref "08-best-practices" >}})** - Optimiere dein Vertragsmanagement

---

💡 **Tipp:** Erstelle Vorlagen für alle häufig genutzten Vertragstypen. Das spart langfristig viel Zeit!
