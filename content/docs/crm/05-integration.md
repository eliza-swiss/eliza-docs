---
title: "Integration mit anderen Modulen"
description: ""
weight: "5"
tags:
  - "integration"
  - "modules"
  - "workflow"
  - "crm"
---


# Integration mit anderen Modulen

In diesem Kapitel lernst du, wie das CRM-Modul mit anderen ELIZA-Modulen zusammenarbeitet und wie du diese Integrationen optimal nutzt.

## Übersicht der CRM-Integrationen

Das CRM-Modul ist das **zentrale Kontakt-Management-System** und integriert mit vielen anderen ELIZA-Modulen:

| Modul | Integration | Nutzen |
|-------|-------------|--------|
| **Projekte** | Projektbeteiligte aus CRM | Projektteams dokumentieren |
| **Verträge** | Vertragsparteien aus CRM | Vertragspartner verwalten |
| **Angebote (Quotes)** | Angebotsempfänger aus CRM | Verkaufschancen tracken |
| **Prozesse** | Prozessbeteiligte aus CRM | Verantwortlichkeiten definieren |
| **Issues** | Zuständige aus CRM | Ticket-Zuweisung |
| **Dokumente (DMS)** | Dokumenten-Verknüpfung | Dokumente zu Kontakten |
| **Zeiterfassung** | Kunden-Zuordnung | Kundenprojekt-Zeiten |
| **Bexio** | Kontakt-Synchronisation | Buchhaltungs-Integration |

## Integration mit Projekten

### Projektbeteiligte aus CRM

Wenn du ein **neues Projekt** erstellst, kannst du Beteiligte direkt aus dem CRM auswählen:

**Schritt 1: Projekt erstellen**

1. Gehe zum **Projekte-Modul**
2. Klicke auf **"+ Neues Projekt"**
3. Fülle die Projektdaten aus

**Schritt 2: Beteiligungen hinzufügen**

Im Projekt-Formular oder in der Detailansicht:

1. Scrolle zu **"Beteiligungen"**
2. Klicke auf **"Neue Beteiligung hinzufügen"**
3. Wähle einen **Kontakt** oder eine **Organisation** aus dem CRM
4. Wähle eine **Rolle** (z.B. "Projektleiter", "Auftraggeber")
5. Speichere die Beteiligung

**Ergebnis**: Die Beteiligung ist sowohl im Projekt als auch im CRM-Kontakt sichtbar.

### Typische Projekt-Rollen

- **Projektleiter**: Verantwortlicher für das Projekt
- **Projektmitglied**: Teammitglied
- **Auftraggeber**: Kunde oder interner Auftraggeber
- **Stakeholder**: Interessenvertreter
- **Sponsor**: Förderer des Projekts

### Projektbeteiligte ansehen

**Im Projekt:**

1. Öffne das **Projekt**
2. Scrolle zu **"Beteiligungen"**
3. Du siehst alle beteiligten Personen und Organisationen

**Im CRM-Kontakt:**

1. Öffne den **Kontakt** im CRM
2. Tab **"Beteiligungen"**
3. Du siehst alle Projekte, in denen der Kontakt beteiligt ist

=¡ **Vorteil**: Du kannst von beiden Seiten aus sehen, wer wo beteiligt ist.

## Integration mit Verträgen

### Vertragsparteien aus CRM

Verträge können **Kontakte und Organisationen** als Vertragsparteien haben:

**Schritt 1: Vertrag erstellen**

1. Gehe zum **Verträge-Modul**
2. Klicke auf **"+ Neuer Vertrag"**
3. Fülle die Vertragsdaten aus

**Schritt 2: Vertragsparteien hinzufügen**

1. Scrolle zu **"Beteiligungen"** oder **"Vertragsparteien"**
2. Klicke auf **"Neue Beteiligung hinzufügen"**
3. Wähle eine **Organisation** als Vertragspartei
4. Wähle **Kontakte** als Ansprechpersonen
5. Definiere **Rollen** (z.B. "Vertragspartei", "Unterschriftsberechtigt")

**Ergebnis**: Alle Vertragsparteien und Ansprechpersonen sind dokumentiert.

### Typische Vertrags-Rollen

- **Vertragspartei**: Die vertragsschliessende Organisation
- **Ansprechperson**: Hauptkontakt für den Vertrag
- **Unterschriftsberechtigt**: Person mit Unterschriftsbefugnis
- **Entscheidungsträger**: Person mit Entscheidungskompetenz
- **Vertragsprüfer**: Juristischer oder fachlicher Prüfer

### Verträge eines Kontakts ansehen

1. Öffne den **Kontakt** im CRM
2. Tab **"Beteiligungen"**
3. Filtere nach **"Vertrag"**
4. Du siehst alle Verträge, in denen der Kontakt involviert ist

=¡ **Nutzen**: Übersicht über alle vertraglichen Beziehungen mit einem Kontakt.

## Integration mit Angeboten (Quotes)

### Angebotsempfänger aus CRM

Angebote können direkt an **CRM-Organisationen und Kontakte** gerichtet werden:

**Schritt 1: Angebot erstellen**

1. Gehe zum **Angebote-Modul**
2. Klicke auf **"+ Neues Angebot"**
3. Fülle die Angebotsdaten aus

**Schritt 2: Empfänger auswählen**

1. Im Feld **"Empfänger"** oder **"Kunde"** wähle eine **Organisation** aus dem CRM
2. Füge **Kontakte** als Ansprechpersonen hinzu
3. Definiere **Rollen** (z.B. "Empfänger", "Entscheidungsträger")

**Ergebnis**: Das Angebot ist mit dem CRM verknüpft.

### Typische Angebots-Rollen

- **Empfänger**: Primärer Angebotsempfänger (Organisation)
- **Entscheidungsträger**: Person mit Entscheidungskompetenz
- **Einkäufer**: Verantwortlicher für Beschaffung
- **Beeinflusser**: Person mit Einfluss auf Entscheidung
- **Nutzer**: Endanwender des angebotenen Produkts/Service

### Lead-Management mit CRM

Nutze das CRM für **Lead-Management**:

1. Erstelle einen **Kontakt** oder eine **Organisation** im CRM
2. Weise das Label **"Lead"** zu
3. Erstelle ein **Angebot** für diesen Lead
4. Verknüpfe das Angebot mit dem CRM-Kontakt

**Workflow:**

```text
Lead (CRM Label)  Angebot erstellt  Angebot gewonnen  Label zu "Kunde" ändern
```

=¡ **Vorteil**: Du siehst im CRM alle Angebote für einen Kontakt und kannst den Lead-Status tracken.

## Integration mit Prozessen

### Prozessbeteiligte aus CRM

ELIZA's Prozess-Management kann **Verantwortliche und Beteiligte** aus dem CRM nutzen:

**Schritt 1: Prozess erstellen**

1. Gehe zum **Prozesse-Modul**
2. Erstelle einen **neuen Prozess**
3. Definiere den Prozessablauf

**Schritt 2: Verantwortlichkeiten zuweisen**

1. Im Prozess-Formular oder in der Detailansicht
2. Füge **Beteiligungen** hinzu
3. Wähle **Kontakte** aus dem CRM
4. Definiere **Rollen** (z.B. "Prozessverantwortlicher", "Freigeber")

**Ergebnis**: Verantwortlichkeiten sind dokumentiert und im CRM nachvollziehbar.

### Typische Prozess-Rollen

- **Prozessverantwortlicher**: Verantwortlich für den Prozess
- **Prozessbeteiligter**: Mitwirkender im Prozess
- **Freigeber**: Genehmigt Prozessänderungen
- **Prüfer**: Prüft Prozesskonformität
- **Prozesseigner**: Eigentümer des Prozesses

### Prozesse eines Kontakts ansehen

1. Öffne den **Kontakt** im CRM
2. Tab **"Beteiligungen"**
3. Filtere nach **"Prozess"**
4. Du siehst alle Prozesse, in denen der Kontakt verantwortlich ist

## Integration mit Issues (Ticket-System)

### Zuständige aus CRM

Issues können **CRM-Kontakten** zugewiesen werden:

**Schritt 1: Issue erstellen**

1. Gehe zum **Issues-Modul**
2. Klicke auf **"+ Neues Issue"**
3. Fülle die Issue-Daten aus

**Schritt 2: Zuständigen zuweisen**

1. Im Feld **"Zuständig"** oder **"Assigned to"** wähle einen **Kontakt** aus dem CRM
2. Alternativ: Füge eine **Beteiligung** mit Rolle "Zuständig" hinzu

**Ergebnis**: Der Kontakt ist als Zuständiger im Issue und im CRM verknüpft.

### Issues eines Kontakts ansehen

1. Öffne den **Kontakt** im CRM
2. Tab **"Beteiligungen"**
3. Filtere nach **"Issue"**
4. Du siehst alle Issues, für die der Kontakt zuständig ist

=¡ **Nutzen**: Übersicht über alle Aufgaben und Tickets eines Mitarbeiters oder Dienstleisters.

## Integration mit Dokumenten (DMS)

### Dokumente mit Kontakten verknüpfen

Dokumente können mit **CRM-Kontakten und Organisationen** verknüpft werden:

**Schritt 1: Dokument hochladen**

1. Gehe zum **DMS-Modul**
2. Lade ein **Dokument** hoch
3. Fülle die Metadaten aus

**Schritt 2: CRM-Verknüpfung erstellen**

Je nach DMS-Konfiguration:

- **Option A**: Wähle im Feld **"Verknüpfte Objekte"** einen CRM-Kontakt oder Organisation
- **Option B**: Erstelle eine **Beteiligung** am Dokument mit CRM-Kontakt

**Ergebnis**: Das Dokument ist im CRM und im DMS verknüpft.

### Typische Dokument-Verknüpfungen

- **Verträge**: Vertragsdokumente mit Vertragsparteien (CRM)
- **Angebote**: Angebotsdokumente mit Kunden (CRM)
- **Korrespondenz**: E-Mails und Briefe mit Kontakten (CRM)
- **Rechnungen**: Rechnungen mit Kunden (CRM)

### Dokumente eines Kontakts ansehen

1. Öffne den **Kontakt** im CRM
2. Tab **"Beteiligungen"** oder **"Dokumente"** (je nach Konfiguration)
3. Du siehst alle verknüpften Dokumente

=¡ **Nutzen**: Zentrale Dokumentenübersicht pro Kontakt/Organisation.

## Integration mit Zeiterfassung

### Kunden-Zuordnung für Zeitbuchungen

Die Zeiterfassung kann **CRM-Organisationen als Kunden** nutzen:

**Schritt 1: Projekt mit CRM-Kunde**

1. Erstelle ein **Projekt** im Projekte-Modul
2. Verknüpfe das Projekt mit einer **CRM-Organisation** als Auftraggeber

**Schritt 2: Zeitbuchung**

1. Gehe zur **Zeiterfassung**
2. Erstelle eine **Zeitbuchung**
3. Wähle das **Projekt**
4. Der **Kunde** (CRM-Organisation) wird automatisch zugeordnet

**Ergebnis**: Zeitbuchungen sind dem CRM-Kunden zugeordnet.

### Auswertungen

Du kannst Auswertungen erstellen:

- Alle Zeitbuchungen für **CRM-Organisation XY**
- Alle Projekte mit **CRM-Kontakt XY** als Projektleiter
- Stunden pro Kunde (aus CRM)

=¡ **Nutzen**: Projekt-Controlling und Kunden-Auswertungen basierend auf CRM-Daten.

## Integration mit Bexio

### Was ist Bexio?

**Bexio** ist eine Schweizer Cloud-Buchhaltungssoftware. ELIZA kann mit Bexio **Kontakte synchronisieren**.

### Bexio-Synchronisation aktivieren

Die Synchronisation wird vom Administrator konfiguriert. Wenn aktiviert:

- CRM-Kontakte haben ein Feld **"Bexio ID"**
- Synchronisierte Kontakte zeigen ein **Cloud-Symbol** ()
- Klick auf das Symbol öffnet den Kontakt in Bexio

### Kontakt mit Bexio verknüpfen

**Automatisch** (bei aktivierter Sync):

- Neue Kontakte in ELIZA werden automatisch zu Bexio übertragen
- Neue Kontakte in Bexio werden automatisch ins ELIZA CRM importiert
- Änderungen werden bidirektional synchronisiert

**Manuell**:

1. Öffne den **Kontakt** im CRM
2. Klicke auf **"Bearbeiten"**
3. Gib die **Bexio ID** ein (falls bekannt)
4. Speichere den Kontakt

### Bexio-Kontakt in ELIZA anzeigen

1. Öffne einen **Kontakt** mit Bexio ID
2. Oben rechts erscheint ein **Cloud-Symbol** ()
3. Klicke darauf
4. Der Kontakt wird in Bexio geöffnet (neuer Tab)

=¡ **Nutzen**: Nahtlose Integration zwischen CRM und Buchhaltung.

### Bexio-Synchronisations-Status

Im CRM-Dashboard oder in der Kontakte-Liste kannst du sehen:

- Welche Kontakte mit Bexio synchronisiert sind (Bexio ID vorhanden)
- Welche Kontakte noch nicht synchronisiert sind

Wende dich an deinen Administrator für:

- Manuelle Synchronisation
- Fehler-Behebung
- Sync-Konfiguration

## Workflow-Beispiele

### Workflow 1: Lead zu Kunde

**Szenario**: Ein Interessent wird zum Kunden.

**Schritte:**

1. **Lead erfassen** (CRM)
   - Erstelle Kontakt oder Organisation
   - Label "Lead" zuweisen

2. **Angebot erstellen** (Quotes)
   - Neues Angebot
   - CRM-Kontakt als Empfänger
   - Rolle "Interessent"

3. **Angebot gewonnen**
   - Angebot-Status auf "Gewonnen"
   - CRM-Label zu "Kunde" ändern

4. **Projekt starten** (Projekte)
   - Neues Projekt erstellen
   - CRM-Organisation als Auftraggeber
   - CRM-Kontakt als Ansprechperson

5. **Vertrag erstellen** (Verträge)
   - Neuer Vertrag
   - CRM-Organisation als Vertragspartei
   - CRM-Kontakt als Unterschriftsberechtigt

**Ergebnis**: Der gesamte Workflow ist im CRM nachvollziehbar.

### Workflow 2: Kundenprojekt durchführen

**Szenario**: Ein Projekt für einen Kunden wird durchgeführt.

**Schritte:**

1. **Projekt erstellen** (Projekte)
   - CRM-Organisation als Auftraggeber
   - CRM-Kontakt als Ansprechperson

2. **Projektteam definieren** (Beteiligungen)
   - Projektleiter (interner Kontakt)
   - Projektmitglieder (interne Kontakte)
   - Stakeholder (Kunden-Kontakte)

3. **Zeiterfassung** (Timetracker)
   - Zeitbuchungen auf Projekt
   - Automatische Kunden-Zuordnung

4. **Dokumentation** (DMS)
   - Projektdokumente hochladen
   - Mit Projekt und CRM-Kontakten verknüpfen

5. **Abschluss**
   - Dokumente freigeben
   - Rechnung erstellen (Bexio)
   - Projekt abschliessen

**Ergebnis**: Alle Projekt-Aktivitäten sind im CRM und in den jeweiligen Modulen verknüpft.

### Workflow 3: Lieferanten-Management

**Szenario**: Ein Lieferant wird verwaltet und in Projekte eingebunden.

**Schritte:**

1. **Lieferant erfassen** (CRM)
   - Organisation erstellen
   - Label "Lieferant" zuweisen
   - Kontakte (Ansprechpersonen) hinzufügen

2. **Rahmenvertrag** (Verträge)
   - Vertrag mit Lieferant
   - CRM-Organisation als Vertragspartei
   - Konditionen dokumentieren

3. **Projekt-Einbindung** (Projekte)
   - Lieferant als Beteiligter
   - Rolle "Dienstleister"
   - Verantwortlichkeiten definieren

4. **Issues/Tickets** (Issues)
   - Lieferanten-Kontakt als Zuständiger
   - Support-Anfragen tracken

**Ergebnis**: Vollständige Lieferanten-Dokumentation im CRM mit allen Verknüpfungen.

## Best Practices

###  Empfehlungen

**CRM als zentrale Kontakt-Quelle**

- Erfasse **alle** Geschäftskontakte im CRM
- Nutze CRM-Kontakte in **allen** anderen Modulen
- Vermeide Duplikate ausserhalb des CRMs

**Beteiligungen konsequent nutzen**

- Dokumentiere **alle** Beteiligungen (Projekte, Verträge, Angebote)
- Nutze **eindeutige Rollen** für klare Verantwortlichkeiten
- Halte Beteiligungen **aktuell** bei Änderungen

**Labels für Workflows**

- Nutze Labels für **Status-Tracking** (Lead, Kunde, Inaktiv)
- Definiere **Standard-Labels** für typische Workflows
- Halte das Label-System **konsistent**

**Bexio-Integration nutzen**

- Aktiviere Bexio-Sync für **nahtlose Buchhaltung**
- Prüfe regelmässig die **Sync-Status**
- Nutze die **Bexio-Links** für schnellen Zugriff

**Dokumenten-Verknüpfung**

- Verknüpfe **Verträge** mit CRM-Organisationen
- Verknüpfe **Angebote** mit CRM-Kontakten
- Verknüpfe **Korrespondenz** mit Beteiligungen

**Regelmässige Daten-Pflege**

- Aktualisiere **Kontaktdaten** bei Änderungen
- Entferne **veraltete Beteiligungen**
- Bereinige **Duplikate** regelmässig

### L Häufige Fehler

**Kontakte ausserhalb des CRMs erstellen**

- Problem: Duplikate und inkonsistente Daten
- Lösung: Immer CRM als zentrale Quelle nutzen

**Beteiligungen nicht dokumentieren**

- Problem: Unklare Verantwortlichkeiten
- Lösung: Beteiligungen immer erfassen und aktuell halten

**Labels nicht nutzen**

- Problem: Kein Status-Tracking (Lead, Kunde, etc.)
- Lösung: Label-System definieren und konsequent anwenden

**Bexio-Sync ignorieren**

- Problem: Doppelte Datenpflege in ELIZA und Bexio
- Lösung: Sync aktivieren und nutzen

**Verknüpfungen nicht pflegen**

- Problem: Veraltete oder fehlende Verknüpfungen
- Lösung: Regelmässig Verknüpfungen prüfen und aktualisieren

## Häufige Fragen

### Welche Module nutzen das CRM?

Alle Module, die **Personen oder Organisationen** verwalten, können das CRM nutzen:

-  Projekte
-  Verträge
-  Angebote (Quotes)
-  Prozesse
-  Issues
-  Dokumente (DMS)
-  Zeiterfassung
-  Bexio (extern)

### Kann ich ein Modul ohne CRM nutzen?

Ja, die Module funktionieren **unabhängig**. Aber die Integration mit dem CRM bietet:

- Zentrale Kontaktverwaltung
- Konsistente Daten
- Übersicht über alle Beziehungen
- Weniger Duplikate

=¡ **Empfehlung**: Nutze das CRM für alle Geschäftskontakte.

### Was passiert, wenn ich einen Kontakt im CRM lösche?

- **Beteiligungen** des Kontakts werden gelöscht
- **Objekte** (Projekte, Verträge) bleiben bestehen
- **Bexio-Sync**: Kontakt wird nicht automatisch in Bexio gelöscht

  **Achtung**: Lösche Kontakte nur, wenn du sicher bist. Besser: Label "Inaktiv" verwenden.

### Wie kann ich alle Projekte eines Kunden sehen?

**Methode 1: Im CRM**

1. Öffne die **CRM-Organisation** (Kunde)
2. Tab **"Beteiligungen"**
3. Filtere nach **"Projekt"**

**Methode 2: Im Projekte-Modul**

1. Gehe zur **Projekte-Liste**
2. Filtere nach **Auftraggeber** (CRM-Organisation)

### Kann ich Kontakte aus Excel ins CRM importieren?

Massenimport ist aktuell nicht über die UI verfügbar. Wende dich an deinen Administrator für:

- CSV-Import
- Excel-Import
- Bexio-Import (falls Bexio-Daten vorhanden)

### Wie synchronisiere ich Bexio-Kontakte?

Die Synchronisation erfolgt **automatisch**, wenn aktiviert. Falls Probleme:

1. Prüfe, ob die **Bexio-Integration** aktiviert ist (Administrator)
2. Prüfe, ob der Kontakt eine **Bexio ID** hat
3. Wende dich an deinen Administrator für manuelle Sync

### Kann ich die Integration deaktivieren?

Nein, die Integrationen sind **fester Bestandteil** von ELIZA. Du kannst aber:

- Beteiligungen **nicht nutzen** (optional)
- Bexio-Sync **deaktivieren** (Administrator)
- Module **deaktivieren**, die du nicht brauchst

### Wo sehe ich alle Beteiligungen eines Kontakts?

1. Öffne den **Kontakt** im CRM
2. Tab **"Beteiligungen"**
3. Du siehst **alle** Verknüpfungen (Projekte, Verträge, Angebote, etc.)

Alternativ:

- Im **Dashboard**: Timeline zeigt letzte Beteiligungen
- In **Berichten**: Auswertungen über alle Beteiligungen (Administrator)

## Zusammenfassung

Das CRM-Modul ist **zentral vernetzt** mit den wichtigsten ELIZA-Modulen:

-  **Projekte**: Projektteams aus CRM
-  **Verträge**: Vertragsparteien aus CRM
-  **Angebote**: Kunden aus CRM
-  **Prozesse**: Verantwortliche aus CRM
-  **Issues**: Zuständige aus CRM
-  **DMS**: Dokumente mit Kontakten
-  **Zeiterfassung**: Kunden-Zeitbuchungen
-  **Bexio**: Buchhaltungs-Integration

**Vorteile der Integration:**

- =Ê **Zentrale Daten**: Ein Kontakt, viele Verknüpfungen
- = **Übersicht**: Alle Beziehungen auf einen Blick
- ¡ **Effizienz**: Keine Duplikate, konsistente Daten
- <¯ **Kontext**: Wer ist wo in welcher Rolle beteiligt?

Nutze die Integrationen, um deine **Geschäftsprozesse** effizient und transparent zu gestalten!
