---
title: "Benutzer-Import aus Excel"
description: ""
weight: "3"
tags:
  - "import"
  - "excel"
  - "bulk"
  - "onboarding"
  - "mass-import"
---


# Benutzer-Import aus Excel

In diesem Kapitel lernst du, wie du mehrere Benutzer gleichzeitig aus einer Excel-Datei importierst.

## 🎯 Lernziele

Nach diesem Kapitel kannst du:

- Excel-Dateien für den Benutzer-Import korrekt strukturieren
- Benutzer aus Excel importieren
- Gruppen beim Import zuweisen
- Import-Fehler erkennen und beheben
- Grosse Benutzer-Mengen effizient verwalten

## Warum Excel-Import verwenden?

### Vorteile des Massen-Imports

- ⚡ **Schnell**: 50+ Benutzer in wenigen Minuten importieren
- 📊 **Übersichtlich**: Excel ermöglicht einfache Datenerfassung und -pflege
- 🔄 **Wiederverwendbar**: Vorlagen für regelmässige Importe (z.B. Schulstart, Onboarding)
- ✅ **Konsistent**: Einheitliche Datenstruktur für alle Benutzer
- 📥 **Extern**: Daten aus HR-Systemen oder anderen Quellen übernehmen

### Typische Anwendungsfälle

| Szenario | Anzahl Benutzer | Empfehlung |
|----------|-----------------|------------|
| **Einzelner Benutzer** | 1 | Manuell erstellen (Kapitel 2) |
| **Kleines Team** | 2-10 | Manuell oder Import |
| **Neue Abteilung** | 10-50 | Excel-Import empfohlen |
| **Grosses Onboarding** | 50+ | Excel-Import zwingend |
| **Jährlicher Schulstart** | 100+ | Excel-Import mit Vorlage |

> **💡 Tipp:** Ab 10 Benutzern lohnt sich der Excel-Import definitiv.

## Voraussetzungen

### Benötigte Berechtigungen

- Systemgruppe **«Benutzer verwalten (Admin)»** (technisch `manage_users`), also das Recht «Benutzer ändern» (`core.change_user`)
- **Kein** Superuser-Status nötig

> **💡 Tipp:** Wer Benutzer manuell anlegen darf, darf sie auch importieren. Der Import vergibt nur Gruppen, die du auch im Benutzerformular zuweisen könntest.

### Benötigte Software

- **Microsoft Excel** (2016 oder neuer) ODER
- **LibreOffice Calc** (6.0 oder neuer) ODER
- **Google Sheets** (Export als .xlsx)

> **💡 Tipp:** CSV-Dateien werden NICHT unterstützt - nur .xlsx Excel-Format!

## Excel-Datei strukturieren

### Vorlage herunterladen

Du musst die Datei nicht selbst aufbauen. Auf der Import-Seite findest du zwei Knöpfe:

| Knopf | Inhalt | Wofür |
|-------|--------|-------|
| **Leere Vorlage herunterladen** | Nur die Kopfzeile | Neue Benutzer erfassen |
| **Aktuelle Benutzer als Excel herunterladen** | Alle aktiven Benutzer mit ihren Gruppen | Bestehende Benutzer ergänzen, Gruppen nachtragen, Sicherung vor einem Massen-Import |

Beide Dateien haben exakt die Struktur, die der Import erwartet. Bestehende Benutzer werden am Benutzernamen erkannt und nicht doppelt angelegt.

> **⚠️ Wichtig:** Der Knopf «Excel» über der Benutzerliste ist dafür **nicht** geeignet. Er schreibt eine Titelzeile vor die Kopfzeile, und der Import lehnt die Datei ab.

### Pflicht-Spalten

Die Excel-Datei **muss** folgende 4 Spalten enthalten (exakte Schreibweise beachten):

| Spalte | Pflicht | Beschreibung | Beispiel |
|--------|---------|--------------|----------|
| **Vorname** | ✅ | Vorname des Benutzers | `Max` |
| **Nachname** | ✅ | Nachname des Benutzers | `Muster` |
| **E-Mail** | ✅ | E-Mail-Adresse (muss eindeutig sein) | `max.muster@beispiel.ch` |
| **Benutzername** | ✅ | Login-Name (muss eindeutig sein) | `max.muster` |

### Optionale Spalten

| Spalte | Optional | Beschreibung | Beispiel |
|--------|----------|--------------|----------|
| **Gruppen** | ❌ | Kommaseparierte Liste von Gruppen | `eliza_users,dms_admin` |

> **⚠️ Wichtig:** Die Spalten-Überschriften müssen **exakt** so geschrieben sein (Gross-/Kleinschreibung beachten!).

### Excel-Vorlage: Korrekte Struktur

**Zeile 1 (Header):**

```
| Vorname | Nachname | E-Mail | Benutzername | Gruppen |
```

**Zeile 2+ (Daten):**

```
| Max | Muster | max.muster@beispiel.ch | max.muster | eliza_users |
| Anna | Schmidt | anna.schmidt@beispiel.ch | anna.schmidt | eliza_users,dms_admin |
| Peter | Meier | peter.meier@beispiel.ch | peter.meier | eliza_users |
```

### Beispiel: Vollständige Excel-Datei

<pre>
┌───────────┬───────────┬──────────────────────────┬───────────────┬─────────────────────┐
│ Vorname   │ Nachname  │ E-Mail                   │ Benutzername  │ Gruppen             │
├───────────┼───────────┼──────────────────────────┼───────────────┼─────────────────────┤
│ Max       │ Muster    │ max.muster@beispiel.ch   │ max.muster    │ eliza_users         │
│ Anna      │ Schmidt   │ anna.schmidt@beispiel.ch │ anna.schmidt  │ eliza_users,dms_admin │
│ Peter     │ Meier     │ peter.meier@beispiel.ch  │ peter.meier   │ eliza_users         │
│ Lisa      │ Weber     │ lisa.weber@beispiel.ch   │ lisa.weber    │ eliza_users         │
│ Tom       │ Fischer   │ tom.fischer@beispiel.ch  │ tom.fischer   │ eliza_users,crm_admin │
└───────────┴───────────┴──────────────────────────┴───────────────┴─────────────────────┘
</pre>

## Gruppen-Zuordnung beim Import

### Gruppen-Namen korrekt angeben

Die Spalte "Gruppen" akzeptiert **Titel** der Systemgruppen, **nicht** die technischen Namen.

**Beispiel Gruppen-Zuordnung:**

| Systemgruppen-Titel | Verwendung in Excel | Beschreibung |
|---------------------|---------------------|--------------|
| **ELIZA User** | `eliza_users` | Basis-Zugriff (IMMER vergeben!) |
| **ELIZA Admin** | `eliza_admin` | Administrator-Rechte |
| **DMS User** | `dms_users` | DMS Lese-Zugriff |
| **DMS Admin** | `dms_admin` | DMS Administrator |
| **CRM Admin** | `crm_admin` | CRM Administrator |
| **Projects Admin** | `projects_admin` | Projekt-Administrator |

> **⚠️ Wichtig:** Verwende den exakten Titel wie er in ELIZA unter "Einstellungen → Systemgruppen" angezeigt wird!

### Mehrere Gruppen zuweisen

**Format:** Kommasepariert, **ohne** Leerzeichen

**✅ RICHTIG:**
```
eliza_users,dms_admin,crm_admin
```

**❌ FALSCH:**
```
eliza_users, dms_admin, crm_admin    (Leerzeichen!)
eliza_users;dms_admin;crm_admin      (Semikolon statt Komma!)
```

### Gruppen-Spalte leer lassen

Wenn die Spalte "Gruppen" **leer** ist oder **fehlt**:
- Benutzer werden ohne Gruppen importiert
- Sie können sich zwar anmelden, haben aber **keine Berechtigungen**

> **💡 Tipp:** Weise immer mindestens `eliza_users` zu, sonst ist der Benutzer nutzlos!

## Schritt-für-Schritt Import-Anleitung

### Schritt 1: Excel-Datei vorbereiten

1. Öffne die Import-Seite (siehe Schritt 2) und klicke auf **Leere Vorlage herunterladen** (oder auf **Aktuelle Benutzer als Excel herunterladen**, wenn du bestehende Benutzer ergänzen willst)
2. Öffne die Datei in Excel, LibreOffice Calc oder Google Sheets
3. Fülle die Benutzerdaten ab Zeile 2 ein; die Spalten-Überschriften in Zeile 1 bleiben unverändert. Formeln sind erlaubt (z.B. `=KLEIN(A2&"."&B2)` für den Benutzernamen): ELIZA importiert den berechneten Wert, nicht die Formel
4. Speichere die Datei als **`.xlsx`** Format (kein CSV)

> **💡 Tipp:** Beginne mit wenigen Test-Benutzern (3-5) um die Struktur zu überprüfen.

### Schritt 2: Import-Funktion öffnen

1. Melde dich mit einem Konto an, das Benutzer verwalten darf (Gruppe «Benutzer verwalten (Admin)»)
2. Navigiere zu **Einstellungen** → **Benutzer**
3. Klicke oben rechts auf das **☁ Cloud-Upload-Icon**
4. Die Import-Seite öffnet sich

<pre>
┌──────────────────────────────────────────────────────┐
│  Benutzer importieren                                │
│  Lege mehrere Benutzer auf einmal aus einer          │
│  Excel-Datei an. ...                                 │
│  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐  │
│  │   ☁  Excel-Datei hierher ziehen oder auswählen │  │
│  │   [Datei]  Excel Datei                          │  │
│  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘  │
│                                      [Importieren]   │
│                                                      │
│  NOCH KEINE DATEI?                                   │
│  ┌ Vorlage ─────────────┐ ┌ So muss Zeile 1 … ─────┐ │
│  │ Leere Vorlage        │ │  A    B    C    D    E  │ │
│  │ Aktuelle Benutzer    │ │ 1 Vorname Nachname …    │ │
│  └──────────────────────┘ └────────────────────────┘ │
└──────────────────────────────────────────────────────┘
</pre>

### Schritt 3: Excel-Datei hochladen

1. Ziehe deine vorbereitete `.xlsx` Datei in das gestrichelte Feld **oder** klicke auf **[Datei]** und wähle sie aus
2. Der Dateiname erscheint im Feld neben dem Knopf

### Schritt 4: Import starten

1. Klicke auf den Button **[Importieren]**
2. Ein Ladebalken erscheint (bei grossen Dateien kann das dauern)
3. Nach erfolgreicherem Import wird eine Übersicht angezeigt

### Schritt 5: Import-Ergebnis prüfen

Nach dem Import siehst du eine Tabelle mit den importierten Benutzern:

<pre>
┌────────────────────────────────────────────────────────────────────┐
│  5 Benutzer importiert                                              │
├────┬───────────┬────────────┬────────────────┬─────────────────────┤
│ #  │ Vorname   │ Nachname   │ Benutzername   │ Gruppen             │
├────┼───────────┼────────────┼────────────────┼─────────────────────┤
│ 1  │ Max       │ Muster     │ max.muster     │ ELIZA User          │
│ 2  │ Anna      │ Schmidt    │ anna.schmidt   │ ELIZA User, DMS Admin │
│ 3  │ Peter     │ Meier      │ peter.meier    │ ELIZA User          │
│ 4  │ Lisa      │ Weber      │ lisa.weber     │ ELIZA User          │
│ 5  │ Tom       │ Fischer    │ tom.fischer    │ ELIZA User, CRM Admin │
└────┴───────────┴────────────┴────────────────┴─────────────────────┘
</pre>

**Prüfe:**
- ✅ Wurden alle Benutzer importiert?
- ✅ Sind die Namen korrekt?
- ✅ Sind die Gruppen korrekt zugeordnet?
- ✅ Wurden bestehende Benutzer übersprungen (keine Duplikate)?

## Import-Verhalten verstehen

### Neue Benutzer vs. Bestehende Benutzer

**Neue Benutzer:**
- Werden erstellt mit `is_active=True`
- Erhalten die zugewiesenen Gruppen
- Bekommen **kein** Passwort (muss separat gesetzt werden!)

**Bestehende Benutzer (Benutzername bereits vorhanden):**
- Werden **übersprungen** (nicht aktualisiert)
- Import-Log zeigt: "Benutzer existiert bereits"
- Du musst sie manuell bearbeiten wenn nötig

> **⚠️ Wichtig:** Der Import erstellt KEINE Duplikate - bestehende Benutzer bleiben unverändert!

### Passwort-Handling nach Import

Importierte Benutzer haben **kein Passwort**!

**Möglichkeiten:**

1. **Passwort-Reset-Link senden** (EMPFOHLEN)
   - Nutze die Onboarding-Funktion (Kapitel 2)
   - Benutzer setzt eigenes sicheres Passwort

2. **Manuell Passwörter setzen**
   - Zeitaufwendig bei vielen Benutzern
   - Nicht empfohlen aus Sicherheitsgründen

3. **Passkey-Onboarding nutzen** (wenn aktiviert)
   - Moderne passwortlose Anmeldung
   - Siehe Passkey-Dokumentation

> **💡 Tipp:** Nutze Onboarding-E-Mails für Self-Service Passwort-Setzung!

## Häufige Fehler und Lösungen

Bei einer unbrauchbaren Datei wird nichts importiert. Die Import-Seite zeigt die Meldung direkt unter dem Dateifeld an.

### Fehler 1: "Bitte lade eine Excel-Datei im Format .xlsx hoch. CSV-Dateien werden nicht unterstützt."

**Ursache:**
- Die Datei hat eine andere Endung als `.xlsx` (z.B. `.csv`, `.xls`, `.ods`)

**Lösung:**
- Öffne die Datei in Excel, LibreOffice Calc oder Google Sheets und speichere sie als **Excel-Arbeitsmappe (.xlsx)**

### Fehler 2: "Die Datei konnte nicht als Excel-Datei gelesen werden."

**Ursachen & Lösungen:**

| Ursache | Lösung |
|---------|--------|
| Datei wurde nur umbenannt (z.B. CSV in `.xlsx`) | In Excel öffnen und als `.xlsx` speichern |
| Datei ist beschädigt | Neu erstellen oder reparieren |
| Datei ist zu gross (>10 MB) | Reduziere Benutzeranzahl, Import in Teilen |

### Fehler 3: "In der ersten Zeile fehlen die Spaltentitel: ..."

**Symptome:**
- Die Meldung nennt die fehlenden Spalten, z.B. `Nachname, E-Mail`

**Ursache:**
- Spalten-Überschriften sind falsch geschrieben oder stehen nicht in der ersten Zeile

**Lösung:**
- Überprüfe die exakte Schreibweise:
  - ✅ `Vorname` (nicht `Vorname:`, `vorname`, `VORNAME`)
  - ✅ `Nachname` (nicht `Name`, `Familienname`)
  - ✅ `E-Mail` (nicht `Email`, `E-mail`, `e-mail`)
  - ✅ `Benutzername` (nicht `Username`, `User`, `Login`)

### Fehler 4: "In C2 steht eine Formel ohne gültigen Wert."

**Symptome:**
- Die Meldung nennt die betroffenen Zellen, z.B. `C2, D2`
- Es wird nichts importiert

**Ursache:**
- In einer Import-Spalte (Vorname, Nachname, Benutzername, E-Mail, Gruppen) steht eine Formel, zu der die Datei keinen berechneten Wert enthält. Das passiert bei Dateien, die ein Programm oder Skript ohne Berechnung erzeugt hat, oder wenn die Formel einen Fehlerwert wie `#REF!`, `#NAME?` oder `#WERT!` liefert

**Lösung:**

1. Öffne die Datei in Excel (oder LibreOffice Calc, Google Sheets)
2. Prüfe, ob die Formelzellen den gewünschten Wert anzeigen und keinen Fehlerwert
3. Speichere die Datei erneut als `.xlsx` und lade sie nochmals hoch

> **💡 Tipp:** Wenn du ganz sichergehen willst, kopiere die Formelspalte und füge sie über **Inhalte einfügen → Werte** wieder ein. Dann enthält die Datei nur noch Werte.

### Fehler 5: "Gruppe 'xyz' nicht gefunden"

**Symptome:**
- Benutzer wird importiert, aber ohne Gruppen
- Warnung im Log: "Gruppe nicht gefunden"

**Ursache:**
- Gruppen-Name ist falsch geschrieben oder existiert nicht

**Lösung:**

1. Öffne **Einstellungen** → **Systemgruppen**
2. Kopiere den exakten **Titel** der Gruppe
3. Verwende diesen Titel in Excel (ohne Leerzeichen vor/nach)

**Beispiel:**

```
Systemgruppe in ELIZA: "DMS Admin"
Excel-Eintrag: dms_admin  (Kleinschreibung, Leerzeichen durch _ ersetzt)
```

> **💡 Tipp:** Verwende den **technischen Namen** (lowercase mit Unterstrichen) statt dem Titel.

### Fehler 6: "E-Mail bereits vorhanden"

**Symptome:**
- Import bricht ab
- Fehlermeldung: "E-Mail ist nicht eindeutig"

**Ursache:**
- E-Mail-Adresse ist bereits einem anderen Benutzer zugeordnet

**Lösung:**

1. **Option A**: Ändere E-Mail-Adresse in Excel
2. **Option B**: Lösche den bestehenden Benutzer (falls Duplikat)
3. **Option C**: Überspringe diesen Benutzer (lass Zeile leer)

### Fehler 7: "Benutzername bereits vorhanden"

**Symptome:**
- Benutzer wird übersprungen
- Import-Log: "Benutzer existiert bereits"

**Ursache:**
- Benutzername ist bereits vergeben

**Verhalten:**
- Bestehender Benutzer wird **nicht** aktualisiert
- Import fährt mit nächstem Benutzer fort

**Lösung:**

- Entscheide:
  - **Behalten**: Bestehenden Benutzer nicht ändern
  - **Aktualisieren**: Manuell in ELIZA bearbeiten
  - **Löschen & Neu importieren**: Vorsicht - Datenverlust!

> **💡 Tipp:** Nutze eindeutige Benutzernamen wie `vorname.nachname.JAHR` bei Namenskollisionen.

## Best Practices für grössere Importe

### Vorbereitung

1. **Test-Import mit 5 Benutzern**
   - Erstelle Testdatei mit 5 Beispiel-Benutzern
   - Führe Import durch und überprüfe Ergebnis
   - Erst dann den Haupt-Import starten

2. **Daten bereinigen**
   - Entferne Duplikate (gleiche E-Mail oder Benutzername)
   - Überprüfe E-Mail-Adressen auf Tippfehler
   - Stelle sicher, dass alle Pflichtfelder ausgefüllt sind

3. **Backup erstellen**
   - Exportiere aktuelle Benutzer vor Massen-Import
   - Ermöglicht Rückgängig-Machen bei Fehlern

### Durchführung

1. **Import in Teilen** (bei >100 Benutzern)
   - Teile grosse Dateien auf (z.B. 50 Benutzer pro Import)
   - Erleichtert Fehlersuche
   - Verhindert Timeout-Probleme

2. **Import ausserhalb der Arbeitszeit**
   - Weniger Serverbelastung
   - Zeit für Fehlerkorrektur

3. **Import-Log dokumentieren**
   - Screenshot des Import-Ergebnisses
   - Notiere Anzahl importierter Benutzer
   - Dokumentiere Probleme für nächsten Import

### Nach-Bearbeitung

1. **Benutzer kontrollieren**
   - Stichproben-Kontrolle (10% der Benutzer)
   - Überprüfe Gruppen-Zuordnungen
   - Teste Login mit Test-Benutzer

2. **Onboarding durchführen**
   - Sende Einladungs-E-Mails (max. 50 auf einmal)
   - Überwache Onboarding-Status
   - Nachfassen bei nicht aktivierten Benutzern

3. **Dokumentation aktualisieren**
   - Notiere Import-Datum und Benutzeranzahl
   - Aktualisiere interne Prozessbeschreibung
   - Verbessere Excel-Vorlage für nächsten Import

## Excel-Vorlagen für verschiedene Szenarien

### Vorlage 1: Einfacher Benutzer-Import (nur Basis-Rechte)

```excel
Vorname | Nachname | E-Mail | Benutzername | Gruppen
--------|----------|--------|--------------|----------
Max     | Muster   | max@...| max.muster   | eliza_users
Anna    | Schmidt  | anna@..| anna.schmidt | eliza_users
```

### Vorlage 2: Abteilungs-Import mit unterschiedlichen Rollen

```excel
Vorname | Nachname | E-Mail | Benutzername | Gruppen
--------|----------|--------|--------------|----------
Max     | Muster   | max@...| max.muster   | eliza_users,dms_admin
Anna    | Schmidt  | anna@..| anna.schmidt | eliza_users,crm_admin
Peter   | Meier    | peter@.| peter.meier  | eliza_users
Lisa    | Weber    | lisa@..| lisa.weber   | eliza_users,projects_admin
```

### Vorlage 3: Schulstart mit vielen Benutzern

```excel
Vorname | Nachname | E-Mail | Benutzername | Gruppen
--------|----------|--------|--------------|----------
Max     | Muster   | max.muster@schule.ch | max.muster | eliza_users
Anna    | Schmidt  | anna.schmidt@schule.ch | anna.schmidt | eliza_users
Peter   | Meier    | peter.meier@schule.ch | peter.meier | eliza_users
...     | ...      | ...    | ...          | ...
(100+ weitere Benutzer)
```

> **💡 Tipp:** Erstelle eine Vorlagen-Bibliothek für wiederkehrende Import-Szenarien!

## Automatisierung und Integration

### Regelmässige Importe

**Für wiederkehrende Importe (z.B. jährliches Schulstart-Onboarding):**

1. Erstelle eine **Standard-Vorlage** mit Beispieldaten
2. Dokumentiere den Prozess (Checkliste)
3. Nutze Excel-Formeln für die automatische Generierung von Benutzernamen, z.B. in der Spalte Benutzername:
   ```excel
   =KLEIN(A2&"."&B2)   → vorname.nachname (deutsches Excel)
   =LOWER(A2&"."&B2)   → vorname.nachname (englisches Excel)
   ```
   ELIZA importiert den berechneten Wert (z.B. `max.muster`), nicht die Formel. Excel, LibreOffice Calc und Google Sheets legen diesen Wert beim Speichern in der Datei ab. Fehlt er oder ist er ein Fehlerwert, meldet der Import die Zelle (siehe Fehler 4)

### Integration mit HR-Systemen

Falls dein HR-System Exporte unterstützt:

1. Exportiere Mitarbeiterdaten aus HR-System
2. Mappe Spalten auf ELIZA-Format (evtl. mit Excel-Formeln)
3. Importiere in ELIZA

> **💡 Tipp:** Kontaktiere den ELIZA-Support für LDAP/AD-Integration bei grossen Organisationen!

## Vergleich: Manuell vs. Import

| Kriterium | Manuell | Excel-Import |
|-----------|---------|--------------|
| **Zeitaufwand** (10 Benutzer) | ~30 Min | ~5 Min |
| **Fehleranfälligkeit** | Hoch | Niedrig (mit Vorlage) |
| **Konsistenz** | Variabel | Hoch |
| **Wiederverwendbarkeit** | Nein | Ja (Vorlage) |
| **Gruppen-Zuordnung** | Einzeln | Massenweise |
| **Empfohlen ab** | 1-5 Benutzer | 10+ Benutzer |

## Häufige Fragen (FAQ)

### Kann ich auch CSV-Dateien importieren?

Nein, nur `.xlsx` Excel-Format wird unterstützt. Konvertiere CSV zu Excel wenn nötig.

### Kann ich Excel-Formeln in der Datei verwenden?

Ja. Der Import liest den berechneten Wert, nicht die Formel. Hat eine Formel keinen gültigen Wert (Fehlerwert wie `#REF!` oder Datei ohne Berechnung), meldet der Import die Zelle und importiert nichts (siehe Fehler 4).

### Werden Passwörter beim Import gesetzt?

Nein. Nutze die Onboarding-Funktion um Benutzern zu ermöglichen, eigene Passwörter zu setzen.

### Kann ich bestehende Benutzer aktualisieren?

Nein, der Import überspringt bestehende Benutzer. Aktualisierungen müssen manuell erfolgen.

### Wie viele Benutzer kann ich auf einmal importieren?

Technisch unbegrenzt, aber wir empfehlen max. 100 Benutzer pro Import für optimale Performance.

### Was passiert wenn eine Gruppe nicht existiert?

Der Benutzer wird ohne diese Gruppe importiert. Eine Warnung erscheint im Log.

### Kann ich den Import rückgängig machen?

Nein. Importierte Benutzer musst du einzeln archivieren oder löschen. Daher: Immer Test-Import zuerst!

### Kann ich mehrere Benutzer auf einmal löschen?

Nein, eine Massenlöschung gibt es nicht. Öffne den Benutzer in der Benutzerliste und verwende in der Detailansicht das Symbol **Archivieren** (Benutzer bleibt erhalten, kann sich aber nicht mehr anmelden) oder **Löschen** (endgültig, samt allen Daten des Benutzers). Beginne deshalb mit einem Test-Import von 3-5 Benutzern und prüfe das Ergebnis, bevor du die ganze Liste importierst; so bleibt ein allfälliges Aufräumen klein.

### Werden E-Mails beim Import versendet?

Nein, automatisch werden keine E-Mails versendet. Nutze die Onboarding-Funktion separat.

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Wann Excel-Import sinnvoll ist (ab 10 Benutzern)
- ✅ Wie du Excel-Dateien korrekt strukturierst
- ✅ Die 4 Pflicht-Spalten: Vorname, Nachname, E-Mail, Benutzername
- ✅ Wie du Gruppen beim Import zuweist
- ✅ Schritt-für-Schritt Import durchzuführen
- ✅ Häufige Fehler zu erkennen und zu beheben
- ✅ Best Practices für grosse Importe (100+ Benutzer)
- ✅ Automatisierung und Vorlagen zu nutzen

## Nächste Schritte

- **[Kapitel 2: Benutzer verwalten]({{< ref "02-benutzer-verwalten" >}})** - Nachbearbeitung importierter Benutzer
- **[Kapitel 4: Berechtigungskonzept]({{< ref "04-berechtigungen" >}})** - Verstehe Gruppen und Berechtigungen im Detail

---

**← Zurück zu: [Benutzer verwalten]({{< ref "02-benutzer-verwalten" >}}) | Weiter zu: [Berechtigungskonzept →]({{< ref "04-berechtigungen" >}})**
