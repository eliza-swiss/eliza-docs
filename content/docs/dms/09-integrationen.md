---
title: "Integrationen"
description: ""
weight: "9"
tags:
  - "integration"
  - "prozesse"
  - "bpmn"
  - "office"
  - "wopi"
  - "ai"
---


# Integrationen

Dieses Kapitel erklärt die Verknüpfungen des DMS mit anderen ELIZA-Modulen und externen Systemen.

## Übersicht der Integrationen

| Integration | Beschreibung |
|-------------|--------------|
| **Prozesse (BPMN)** | Verknüpfung mit Prozessdiagrammen |
| **Mitgeltende Dokumente** | Dokumentenbeziehungen |
| **Office 365 / WOPI** | Online-Bearbeitung in Word/Excel |
| **AI-Zusammenfassungen** | Automatische Textanalyse |
| **Kommentare** | Diskussionen zu Dokumenten |
| **QR-Codes** | Dokumentvalidierung |
| **Projekte** | Projektdokumentation |
| **Teams** | Collaboration |
| **SharePoint** | SharePoint-Dokumente direkt öffnen |

---

## Prozess-Verknüpfung (BPMN)

### Konzept

Dokumente können mit BPMN-Prozesselementen verknüpft werden:

- Arbeitsanweisungen zu Aktivitäten
- Checklisten zu Prüfpunkten
- Richtlinien zu Entscheidungen

### Ordner mit Prozess verknüpfen

1. Bearbeite den Ordner
2. Trage im Feld **"BPMN-ID"** die Element-ID ein
3. Speichere

**Effekt im Prozessdiagramm:**
- Element wird als verknüpft markiert
- Klick öffnet den Ordner
- Dokumentenliste wird angezeigt

### Dokument mit Prozess verknüpfen

1. Bearbeite das Dokument
2. Im Feld **"Verknüpfte Prozesse"** Prozess auswählen
3. Speichere

### Navigation

**Vom Prozess zum Dokument:**
1. Öffne das Prozessdiagramm
2. Klicke auf ein verknüpftes Element
3. Dokumenten-Popup erscheint

**Vom Dokument zum Prozess:**
1. Öffne das Dokument
2. Gehe zu Tab **"Verknüpfungen"**
3. Klicke auf den verknüpften Prozess

---

## Mitgeltende Dokumente

### Konzept

Mitgeltende Dokumente sind Dokumente, die zusammen gelten:

- Hauptdokument referenziert Anhänge
- Arbeitsanweisung verweist auf Formulare
- Richtlinie referenziert Verfahrensanweisungen

### Mitgeltende Dokumente hinzufügen

1. Öffne das Hauptdokument
2. Gehe zu Tab **"Verknüpfungen"** oder bearbeite das Dokument
3. Im Feld **"Mitgeltende Dokumente"** weitere Dokumente auswählen
4. Speichere

### Anzeige

- Im Dokument unter **"Mitgeltende Dokumente"**
- Als Tabelle mit Titel, ID und Status
- Direkter Link zum verknüpften Dokument

### Bidirektionale Verknüpfung

Die Verknüpfung ist bidirektional:
- Dokument A → "Mitgeltende Dokumente" → Dokument B
- Dokument B → "Wird referenziert von" → Dokument A

---

## Office 365 / WOPI Integration

### Was ist WOPI?

WOPI (Web Application Open Platform Interface) ermöglicht die Online-Bearbeitung von Office-Dokumenten im Browser.

### Voraussetzungen

- WOPI-Integration muss aktiviert sein
- Office 365 Lizenz für die Organisation
- Unterstützte Dateiformate: .docx, .xlsx, .pptx

### Dokument online bearbeiten

1. Öffne das Dokument
2. Klicke auf **"In Office bearbeiten"** oder **"Online öffnen"**
3. Dokument öffnet sich in Word/Excel Online
4. Änderungen werden automatisch gespeichert
5. Schliesse den Tab - Dokument ist aktualisiert

### Vorteile

- Keine lokale Office-Installation nötig
- Mehrere Benutzer gleichzeitig
- Änderungen sofort im DMS verfügbar

### Einschränkungen

- Nur bei aktivierter Integration
- Internetverbindung erforderlich
- Manche Formatierungen können abweichen

---

## AI-Zusammenfassungen

### Funktion

ELIZA kann automatisch Zusammenfassungen von Dokumenten erstellen:

- Analysiert den Dokumentinhalt
- Erstellt kurze Zusammenfassung
- Extrahiert Schlüsselinformationen

### Zusammenfassung generieren

1. Öffne das Dokument
2. Klicke auf **"AI-Zusammenfassung"** oder **"Zusammenfassung erstellen"**
3. Die KI analysiert das Dokument
4. Zusammenfassung wird im Feld **"Zusammenfassung"** gespeichert

### Unterstützte Formate

- Word (.docx)
- PDF (mit Text)
- Text-Dateien

### Verwendung

- Schneller Überblick über lange Dokumente
- Suche wird verbessert
- Hilft bei der Dokumentenauswahl

> **💡 Tipp:** Die Zusammenfassung kann manuell bearbeitet und verfeinert werden.

---

## Kommentare und Diskussionen

### Kommentar hinzufügen

1. Öffne das Dokument
2. Gehe zu Tab **"Kommentare"**
3. Schreibe deinen Kommentar
4. Klicke auf **"Senden"**

### Kommentarfunktionen

| Funktion | Beschreibung |
|----------|--------------|
| **Antworten** | Auf bestehenden Kommentar antworten |
| **Erwähnen** | @Benutzer benachrichtigen |
| **Anhänge** | Dateien an Kommentar anhängen |
| **Bearbeiten** | Eigene Kommentare bearbeiten |
| **Löschen** | Eigene Kommentare löschen |

### Benachrichtigungen

- Bei neuem Kommentar werden Verantwortliche benachrichtigt
- Bei Erwähnung (@) wird der Benutzer benachrichtigt
- Einstellbar in den Benachrichtigungseinstellungen

---

## QR-Codes und Validierung

### Konzept

Gedruckte Dokumente können einen QR-Code enthalten:

- Ermöglicht Validierung der Aktualität
- Link zur digitalen Version
- Zeigt aktuellen Status

### QR-Code aktivieren

In Vorlagen:
1. Nutze den Word Template Wizard
2. Aktiviere **"QR-Code für Dokumentvalidierung"**
3. Der QR-Code wird in die Fusszeile eingefügt

### Verwendung

1. Scanne den QR-Code mit Smartphone
2. ELIZA-Seite öffnet sich
3. Zeigt aktuellen Status des Dokuments
4. Warnung, falls veraltet oder widerrufen

---

## Projekt-Integration

### Dokumente zu Projekten

Dokumente können mit Projekten verknüpft werden:

1. Bearbeite das Dokument
2. Im Feld **"Verknüpfte Projekte"** Projekt auswählen
3. Speichere

### Vom Projekt aus

1. Öffne das Projekt
2. Gehe zu Tab **"Dokumente"**
3. Klicke auf **"DMS-Dokument verknüpfen"**
4. Wähle Dokumente aus dem DMS

### Projektdokumentation

Für umfassende Projektdokumentation:
- Erstelle DMS-Ordner für das Projekt
- Verknüpfe relevante Dokumente
- Nutze Ordnerstruktur für Projektphasen

---

## Teams-Integration

### Konzept

DMS-Dokumente können in Teams-Räumen verwendet werden:

- Dokumente in Channels teilen
- Verknüpfungen zu Aufgaben
- Gemeinsame Dokumentenbearbeitung

### Dokument im Team teilen

1. Öffne das Dokument
2. Klicke auf **"Teilen"**
3. Wähle Team und Channel
4. Optional: Nachricht hinzufügen
5. Teilen

### Team-Dokumente

Vom Team aus:
1. Öffne den Team-Channel
2. Klicke auf **"DMS-Dokument verknüpfen"**
3. Wähle Dokument aus

---

## Verknüpfungen verwalten

### Übersicht aller Verknüpfungen

**Dokument → Tab "Verknüpfungen"**

Zeigt alle Verknüpfungen:
- Mitgeltende Dokumente
- Verknüpfte Prozesse
- Verknüpfte Projekte
- Referenzierende Dokumente

### Verknüpfung entfernen

1. Gehe zu Tab "Verknüpfungen"
2. Klicke auf das X neben der Verknüpfung
3. Bestätige das Entfernen

---

## Externe Referenzen

### URL-Verknüpfungen

Dokumente können auf externe Ressourcen verweisen:

1. Bearbeite das Dokument
2. Im Feld **"Externe Referenz (URL)"** Link eintragen
3. Speichere

### Verwendung

- Verknüpfung mit SharePoint
- Link zu Google Drive
- Referenz auf Intranet-Seiten

### Anzeige

- Externe Referenz wird als Link angezeigt
- Klick öffnet in neuem Tab

---

## SharePoint-Integration

### Konzept

ELIZA erkennt automatisch SharePoint-URLs und bietet dir schnellen Zugriff auf deine SharePoint-Dokumente. So kannst du Dokumente zentral in SharePoint speichern und trotzdem über ELIZA darauf zugreifen.

### SharePoint-Dokument verknüpfen

1. Erstelle ein neues Dokument oder bearbeite ein bestehendes
2. Im Feld **"Externe Referenz (URL)"** den SharePoint-Link eintragen
3. Speichere das Dokument
4. ELIZA erkennt automatisch den SharePoint-Link

### Automatische SharePoint-Erkennung

ELIZA erkennt folgende SharePoint-URL-Formate automatisch:

| URL-Format | Beschreibung |
|------------|--------------|
| `*.sharepoint.com` | Standard SharePoint-Domäne |
| `*.sharepoint-df.com` | SharePoint Dataflow-Domäne |

### "In SharePoint öffnen"-Button

Wenn ELIZA einen SharePoint-Link erkennt, erscheint ein blauer **"In SharePoint öffnen"**-Button:

- In der Dokumenten-Detailansicht
- Im BPMN-Prozessdiagramm bei verknüpften Dokumenten
- Im Hilfsmittel-Modal
- In der Dokument-Vorschau

Ein Klick auf den Button öffnet das Dokument direkt in SharePoint in einem neuen Tab.

### Vorteile der SharePoint-Integration

- **Zentrale Verwaltung**: Dokumente bleiben in SharePoint, ELIZA dient als Einstiegspunkt
- **Volle SharePoint-Funktionalität**: Nutze Co-Authoring, Versionierung und Freigaben
- **Keine Duplikate**: Kein Herunterladen und erneutes Hochladen nötig
- **Microsoft 365 Integration**: Ideal für Unternehmen mit Microsoft 365

### Voraussetzungen für SharePoint

- Das SharePoint-Dokument muss freigegeben sein
- Benutzer müssen bei Microsoft angemeldet sein, um das Dokument zu öffnen
- Der Link muss ein gültiger SharePoint-Link sein

> **💡 Tipp:** Kopiere den Link direkt aus SharePoint ("Link kopieren" oder Browser-Adressleiste) für optimale Kompatibilität.

### Bekannte Einschränkungen

- **Keine eingebettete Vorschau**: SharePoint-Dokumente können nicht direkt in ELIZA angezeigt werden (Microsoft blockiert iFrame-Embedding aus Sicherheitsgründen)
- **Keine ELIZA-Versionierung**: Da die Datei nicht lokal gespeichert wird, greift ELIZAs Versionierung nicht
- **Separate Anmeldung**: Benutzer benötigen ggf. eine separate Microsoft-Anmeldung

---

## Best Practices

### ✅ Konsistente Verknüpfungen

- Halte Verknüpfungen aktuell
- Entferne veraltete Referenzen
- Dokumentiere wichtige Beziehungen

### ✅ Prozess-Dokumentation

- Verknüpfe alle relevanten Dokumente mit Prozessen
- Nutze Ordner für Prozessgruppen
- Halte BPMN-IDs synchron

### ✅ Mitgeltende Dokumente pflegen

- Bei Änderungen: Prüfe mitgeltende Dokumente
- Aktualisiere bei Bedarf
- Entferne obsolete Verknüpfungen

---

## Häufige Fragen

### Werden verknüpfte Dokumente mitfreigegeben?

Nein, jedes Dokument hat seinen eigenen Workflow. Prüfe manuell, ob mitgeltende Dokumente auch freigegeben sind.

### Was passiert bei Löschung eines verknüpften Dokuments?

Die Verknüpfung wird automatisch entfernt. Das referenzierende Dokument bleibt unverändert.

### Kann ich externe URLs validieren?

Nein, externe URLs werden nicht automatisch geprüft. Prüfe regelmässig, ob Links noch funktionieren.

---

## Nächste Schritte

- **[Kapitel 10: Best Practices]({{< ref "10-best-practices" >}})**: Empfehlungen und FAQ

---

## Zusammenfassung

✅ Du verstehst die Prozess-Verknüpfung (BPMN)
✅ Du kannst mitgeltende Dokumente verwalten
✅ Du kennst die Office 365 / WOPI Integration
✅ Du nutzt AI-Zusammenfassungen
✅ Du arbeitest mit Kommentaren und Diskussionen
✅ Du verstehst die Projekt- und Teams-Integration
✅ Du weisst, wie SharePoint-Dokumente verknüpft werden
