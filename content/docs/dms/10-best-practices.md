---
title: "Best Practices und FAQ"
description: ""
weight: "10"
tags:
  - "best-practices"
  - "tipps"
  - "faq"
  - "iso9001"
  - "empfehlungen"
---


# Best Practices und FAQ

Dieses Kapitel fasst bewährte Methoden für das Dokumentenmanagement zusammen und beantwortet häufig gestellte Fragen.

## Best Practices

### Dokumentenorganisation

#### ✅ Strukturierte Ordnerhierarchie

**Empfohlene Struktur:**

```
DMS/
├── 01_Führungsdokumente/
│   ├── Qualitätspolitik
│   ├── Qualitätsziele
│   └── Management Review
├── 02_Kernprozesse/
│   ├── Auftragsabwicklung/
│   ├── Produktion/
│   └── Logistik/
├── 03_Unterstützungsprozesse/
│   ├── Personal/
│   ├── IT/
│   └── Einkauf/
├── 04_Arbeitsanweisungen/
│   ├── AA-Produktion/
│   ├── AA-Qualität/
│   └── AA-Logistik/
├── 05_Formulare/
│   └── [Nach Bereich]
└── 99_Archiv/
    └── [Archivierte Dokumente]
```

**Vorteile:**
- Nummerierung sorgt für feste Sortierung
- Maximal 3-4 Hierarchieebenen
- Klare Trennung nach Dokumenttyp

#### ✅ Einheitliche Namenskonventionen

**Dokumenttitel:**
```
[Typ] - [Thema] - [Bereich]
```

**Beispiele:**
- AA - Qualitätskontrolle - Wareneingang
- VA - Reklamationsmanagement - Kunde
- F - Prüfprotokoll - Endkontrolle

**Dokument-ID:**
```
[Typ]-[Bereich]-[Nummer]
```

**Beispiele:**
- AA-QK-001 (Arbeitsanweisung Qualitätskontrolle Nr. 1)
- VA-RK-003 (Verfahrensanweisung Reklamation Kunde Nr. 3)
- F-WE-012 (Formular Wareneingang Nr. 12)

#### ✅ Labels effektiv nutzen

**Empfohlene Label-Kategorien:**

| Kategorie | Labels |
|-----------|--------|
| **Priorität** | 🔴 Kritisch, 🟠 Hoch, 🟡 Normal, 🟢 Niedrig |
| **Status** | 📋 In Bearbeitung, ✅ Aktuell, ⚠️ Review fällig |
| **Bereich** | Produktion, Qualität, Personal, IT |
| **Compliance** | ISO 9001, ISO 14001, Kundenaudit |

---

### Workflow-Management

#### ✅ Klare Verantwortlichkeiten

**Für jeden Ordner definieren:**
- Verantwortliche Funktion (wer ist zuständig?)
- Prüfende Funktion (wer prüft?)
- Freigebende Funktion (wer gibt frei?)

**Auf Ordner-Ebene statt Dokument-Ebene:**
- Weniger Verwaltungsaufwand
- Konsistente Berechtigungen
- Vererbung nutzen

#### ✅ Zeitnahe Workflow-Bearbeitung

**Empfehlungen:**
- Prüfaufgaben innerhalb von 5 Arbeitstagen bearbeiten
- Workflow-Übersicht wöchentlich prüfen
- Blockierte Dokumente eskalieren

#### ✅ Aussagekräftige Kommentare

**Bei Workflow-Aktionen:**
- Begründung für Ablehnung (Pflicht)
- Hinweise für Prüfer/Freigeber
- Änderungsnotizen bei Überarbeitung

**Beispiel:**
```
Freigegeben nach Prüfung durch QM.
Änderungen gegenüber v2.1:
- Abschnitt 3.4 präzisiert
- Neue Checkliste in Anhang B
```

---

### Versionierung

#### ✅ Bewusste Versionierung

**Vor dem Speichern fragen:**
- Sind alle Änderungen sinnvoll zusammengefasst?
- Ist ein aussagekräftiger Kommentar vorhanden?
- Muss das Dokument neu geprüft werden?

#### ✅ Revisionsnummern konsistent verwenden

**Schema festlegen und dokumentieren:**

| Schema | Beispiel | Verwendung |
|--------|----------|------------|
| **Major.Minor** | 1.0, 1.1, 2.0 | Grosse/kleine Änderungen |
| **Datum** | 2025-01, 2025-06 | Monatliche Revisionen |
| **Buchstaben** | Rev. A, Rev. B | Einfache Zählung |

#### ✅ Arbeitskopien zeitnah fertigstellen

- Arbeitskopie erstellen = Änderung geplant
- Zügig bearbeiten und freigeben
- Nicht als "Parkplatz" missbrauchen

---

### ISO 9001 Dokumentenlenkung

#### ✅ Anforderungen erfüllen

**ISO 9001 fordert:**
1. Eindeutige Identifikation (Dokument-ID)
2. Versionskontrolle (Revisionsnummer)
3. Prüfung und Freigabe (Workflow)
4. Verfügbarkeit aktueller Versionen (Status "Freigegeben")
5. Verhinderung unbeabsichtigter Nutzung veralteter Versionen (Archivierung)
6. Aufbewahrung und Schutz (Berechtigungen, Backup)

#### ✅ ISO-konforme Vorlagen

Nutze den Word Template Wizard mit ISO 9001 Footer:

```
┌─────────────────────────────────────────────────────────┐
│ Dok-Nr: AA-QK-001    Version: 2.1    Freigabe: 15.03.25 │
│ Erstellt: M. Muster   QM              Seite 1 von 3     │
└─────────────────────────────────────────────────────────┘
```

**Enthält:**
- Dokument-ID
- Versionsnummer
- Freigabedatum
- Autor/Verantwortlicher
- Organisationseinheit
- Seitenzahl mit Gesamtzahl

#### ✅ Regelmässige Überprüfung

**Überprüfungszyklus definieren:**
- Kritische Dokumente: jährlich
- Standarddokumente: alle 2 Jahre
- Formulare: alle 3 Jahre

**Überprüfung durchführen:**
1. Inhalt auf Aktualität prüfen
2. Arbeitskopie erstellen (wenn Änderungen nötig)
3. Oder: Überprüfungsdatum verlängern

---

### Sicherheit und Compliance

#### ✅ Berechtigungen minimal halten

- Nur notwendige Rechte vergeben
- Regelmässig Berechtigungen prüfen
- Bei Personalwechsel aktualisieren

#### ✅ Sensible Dokumente schützen

- Separater Ordner mit eingeschränktem Zugriff
- Berechtigungsvererbung deaktivieren
- Explizite Administratoren definieren

#### ✅ Aufbewahrungsfristen einhalten

- Fristen beim Erstellen/Archivieren setzen
- Gesetzliche Anforderungen beachten
- Löschprozess dokumentieren

---

## Häufig gestellte Fragen (FAQ)

### Allgemein

#### Wie viele Dokumente kann das DMS speichern?

Es gibt keine praktische Obergrenze. ELIZA skaliert für tausende von Dokumenten. Die Performance bleibt durch Indexierung und Caching konstant.

#### Welche Dateiformate werden unterstützt?

Alle gängigen Formate werden unterstützt. Für Volltextsuche werden Word, PDF (mit Text), Excel, PowerPoint und Textdateien indexiert.

#### Kann ich das DMS offline nutzen?

Nein, ELIZA ist eine webbasierte Anwendung und erfordert eine Internetverbindung. Dokumente können jedoch heruntergeladen und offline bearbeitet werden.

---

### Dokumente

#### Kann ich ein Dokument umbenennen?

Ja, bearbeite das Dokument und ändere das Feld "Titel". Der Dateiname der hochgeladenen Datei wird nicht automatisch geändert.

#### Kann ich die Datei eines Dokuments ersetzen?

Ja, bearbeite das Dokument und lade eine neue Datei hoch. Die alte Datei wird als Version archiviert.

#### Kann ich mehrere Dateien zu einem Dokument hochladen?

Nein, ein Dokument enthält eine Datei. Für zusammengehörige Dateien verwende entweder:
- ZIP-Archiv
- Mitgeltende Dokumente
- Ordner mit mehreren Dokumenten

#### Was passiert mit einem Dokument, wenn ich den Ordner lösche?

Ordner können nur gelöscht werden, wenn sie leer sind. Verschiebe oder lösche zuerst alle Dokumente.

---

### Workflow

#### Wer kann ein Dokument freigeben?

Benutzer mit `approve_document` Berechtigung ODER Mitglieder der freigebenden Funktion (auf Dokument- oder Ordner-Ebene).

#### Kann der Autor sein eigenes Dokument freigeben?

Standardmässig nein (Vier-Augen-Prinzip). Der Autor kann prüfen, aber ein anderer muss freigeben.

#### Was passiert, wenn niemand für die Prüfung zuständig ist?

Das Dokument bleibt im Status "Zur Prüfung" hängen. Definiere immer eine prüfende Funktion auf Ordner-Ebene als Fallback.

#### Kann ich den Workflow umgehen?

Nein, der Workflow ist verbindlich. Für Ausnahmen muss ein Administrator die Berechtigungen temporär anpassen.

---

### Versionen

#### Kann ich eine alte Version wiederherstellen?

Ja, in der Versionshistorie kannst du jede Version wiederherstellen. Dies erstellt eine neue Version mit dem alten Inhalt.

#### Werden Versionen automatisch gelöscht?

Nein, alle Versionen werden dauerhaft gespeichert. Dies ist wichtig für die Compliance und Nachvollziehbarkeit.

#### Wie viel Speicherplatz belegen Versionen?

Jede Version speichert die komplette Datei. Bei grossen Dateien mit vielen Änderungen kann der Speicherbedarf steigen.

---

### Vorlagen

#### Kann ich eine Vorlage bearbeiten, ohne die bestehenden Dokumente zu ändern?

Ja, Änderungen an der Vorlage betreffen nur neue Dokumente, die aus der Vorlage erstellt werden. Bestehende Dokumente bleiben unverändert.

#### Werden Platzhalter in allen Dateiformaten ersetzt?

Primär in Word (.docx) und Excel (.xlsx). PDF-Dateien werden nicht verarbeitet.

#### Kann ich eigene Platzhalter/Variablen erstellen?

Die Standardvariablen sind vordefiniert. Für benutzerdefinierte Variablen kontaktiere den Administrator.

---

### Berechtigungen

#### Warum sehe ich ein Dokument nicht?

Mögliche Gründe:
- Keine `view_document` Berechtigung
- Ordner hat eingeschränkten Zugriff
- Dokument ist archiviert (Filter prüfen)

#### Kann ich sehen, wer ein Dokument angesehen hat?

Ja, im Audit-Trail werden Zugriffe protokolliert (abhängig von Systemeinstellung).

#### Wie übertrage ich Verantwortung für Dokumente?

Ändere die verantwortliche Funktion oder den Autor im Dokument. Bei vielen Dokumenten wende dich an den Administrator.

---

### Suche

#### Warum finde ich ein Dokument nicht?

Mögliche Gründe:
- Suchbegriff nicht im Titel/Inhalt
- Dokument ist archiviert (Filter prüfen)
- Keine Berechtigung für das Dokument
- Volltextindex noch nicht aktualisiert

#### Kann ich in PDF-Dateien suchen?

Ja, wenn die PDF Text enthält. Gescannte PDFs ohne OCR werden nicht durchsucht.

---

## Checklisten

### Checkliste: Neues Dokument erstellen

- [ ] Richtigen Ordner gewählt
- [ ] Aussagekräftigen Titel vergeben
- [ ] Dokument-ID nach Schema vergeben
- [ ] Beschreibung ausgefüllt
- [ ] Dokumentart zugewiesen
- [ ] Relevante Labels gesetzt
- [ ] Autor eingetragen
- [ ] Verantwortliche Funktion definiert
- [ ] Überprüfungsdatum gesetzt (für gelenkte Dokumente)
- [ ] Datei hochgeladen

### Checkliste: Dokument zur Prüfung einreichen

- [ ] Inhalt vollständig und korrekt
- [ ] Formatierung geprüft
- [ ] Alle Metadaten aktuell
- [ ] Mitgeltende Dokumente aktuell
- [ ] Prüfer informiert (falls nötig)

### Checkliste: Dokument freigeben

- [ ] Prüfung durch qualifizierten Prüfer erfolgt
- [ ] Inhaltliche Korrektheit bestätigt
- [ ] Formale Anforderungen erfüllt
- [ ] Überprüfungsdatum korrekt gesetzt
- [ ] Freigabekommentar aussagekräftig

### Checkliste: Ordner einrichten

- [ ] Sinnvoller, beschreibender Name
- [ ] Einordnung in Hierarchie korrekt
- [ ] Verantwortliche Funktion definiert
- [ ] Prüfende Funktion definiert
- [ ] Freigebende Funktion definiert
- [ ] Berechtigungsvererbung geprüft
- [ ] Administratoren festgelegt

---

## Troubleshooting

### Problem: Dokument kann nicht bearbeitet werden

**Mögliche Ursachen:**
1. Status ist nicht "Entwurf" → Arbeitskopie erstellen
2. Keine Berechtigung → Administrator kontaktieren
3. Dokument wird von anderem Benutzer bearbeitet → Warten

### Problem: Workflow blockiert

**Mögliche Ursachen:**
1. Keine Prüfer/Freigeber definiert → Funktionen auf Ordner-Ebene prüfen
2. Zuständige Person nicht verfügbar → Vertretung aktivieren
3. Technisches Problem → Support kontaktieren

### Problem: Suche findet nichts

**Lösungsschritte:**
1. Schreibweise prüfen (Tippfehler?)
2. Filter zurücksetzen
3. Einfachere Suchbegriffe verwenden
4. Archivierte Dokumente einschliessen
5. Berechtigung prüfen

### Problem: Version kann nicht wiederhergestellt werden

**Mögliche Ursachen:**
1. Keine Berechtigung → `change_document` erforderlich
2. Dokument ist nicht im Status "Entwurf" → Zuerst Arbeitskopie erstellen

---

## Glossar

| Begriff | Erklärung |
|---------|-----------|
| **Arbeitskopie** | Kopie eines freigegebenen Dokuments zur Bearbeitung |
| **Audit-Trail** | Protokoll aller Aktionen an einem Dokument |
| **BPMN** | Business Process Model and Notation - Standard für Prozessdiagramme |
| **Dokument-ID** | Eindeutige Kennung eines Dokuments (z.B. AA-001) |
| **Dokumentart** | Kategorisierung (Arbeitsanweisung, Formular, etc.) |
| **Freigabe** | Finale Genehmigung eines Dokuments |
| **Funktion** | Organisatorische Rolle (z.B. Qualitätsmanager) |
| **Gelenkte Dokumente** | Dokumente unter Dokumentenlenkung nach ISO 9001 |
| **Label** | Farbige Tags zur Kategorisierung |
| **Mitgeltende Dokumente** | Zusammengehörige/referenzierte Dokumente |
| **Prüfung** | Review eines Dokuments vor Freigabe |
| **Revision** | Manuelle Versionsnummer (z.B. Rev. A, 2.1) |
| **Template** | Dokumentvorlage mit Platzhaltern |
| **Vererbung** | Weitergabe von Berechtigungen an Unterordner |
| **Version** | Automatischer Speicherstand eines Dokuments |
| **WOPI** | Web Application Open Platform Interface - Office-Integration |
| **Workflow** | Definierter Ablauf von der Erstellung bis zur Freigabe |

---

## Zusammenfassung

✅ Du kennst die Best Practices für Dokumentenorganisation
✅ Du verstehst ISO 9001 Anforderungen an Dokumentenlenkung
✅ Du kannst häufige Probleme selbst lösen
✅ Du hast Checklisten für wichtige Aufgaben
✅ Du kennst die wichtigsten Begriffe im DMS

---

**Viel Erfolg beim Dokumentenmanagement mit ELIZA!** 📄
