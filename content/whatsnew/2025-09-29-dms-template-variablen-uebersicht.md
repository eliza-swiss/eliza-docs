---
title: "DMS Template-Variablen Übersicht - Alle verfügbaren Felder auf einen Blick"
date: 2025-09-29
slug: "dms-template-variablen-uebersicht"
emoji: "📝"
---

Hallo! Wir haben eine praktische neue Funktion im **Dokumenten-Management-System (DMS)** für dich entwickelt. Ab sofort kannst du dir alle verfügbaren Template-Variablen für deine DOCX- und XLSX-Dokumente übersichtlich anzeigen lassen.

[https://app.arcade.software/share/Kx7ZvlNJrf0Zzqbw13PB](https://app.arcade.software/share/Kx7ZvlNJrf0Zzqbw13PB)

## Was ist neu?

**Template-Variablen Übersicht**
Im Dropdown-Menü jedes Dokuments findest du jetzt die neue Option "Template-Variablen anzeigen". Diese zeigt dir alle über 25 verfügbaren Template-Variablen mit ihren aktuellen Werten an.

**Copy-to-Clipboard Funktionalität**
Jede Template-Variable kann mit einem einfachen Klick in die Zwischenablage kopiert werden. So kannst du die korrekte Syntax direkt in deine Dokumentvorlagen einfügen.

**Aktuelle Werte anzeigen**
Die Übersicht zeigt nicht nur die Variable selbst, sondern auch den aktuellen Wert an. So siehst du sofort, welche Daten beim Generieren des Dokuments eingefügt werden.

**Berechtigungsbasierte Anzeige**
Die Funktion ist nur für Benutzer sichtbar, die berechtigt sind, das Dokument zu bearbeiten oder eine Arbeitskopie zu erstellen.

## Wie profitierst du davon?

**Einfache Template-Erstellung**
Du musst nicht mehr raten oder in der Dokumentation nachschlagen - alle verfügbaren Variablen sind übersichtlich aufgelistet.

**Korrekte Syntax garantiert**
Durch das Kopieren aus der Übersicht verwendest du automatisch die korrekte Template-Syntax und vermeidest Tippfehler.

**Schnellere Dokumentenerstellung**
Die Übersicht beschleunigt die Erstellung von Dokumentvorlagen erheblich, da du sofort siehst, welche Daten verfügbar sind.

**Bessere Dokumentqualität**
Mit Zugriff auf alle verfügbaren Felder kannst du reichhaltigere und informativere Dokumentvorlagen erstellen.

## Wo findest du die neue Funktion?

**In der Dokumentendetailansicht:**
1. Öffne ein beliebiges Dokument im DMS
2. Klicke auf das Dropdown-Menü "..." (drei Punkte)
3. Wähle "Template-Variablen anzeigen" mit dem Code-Symbol
4. Es öffnet sich eine übersichtliche Auflistung aller verfügbaren Variablen

**Die Übersicht zeigt dir:**
- Den Namen der Template-Variable (z.B. `{{ document.title }}`)
- Den aktuellen Wert der Variable
- Einen Kopieren-Button für jede Variable

## Verfügbare Template-Variablen

Die Übersicht umfasst verschiedene Kategorien von Variablen:

**Dokument-Informationen:**
- Titel, Beschreibung, Freigabedatum
- Dokumententyp, Version, Status
- Ersteller und Freigabeverantwortlicher

**Organisations-Daten:**
- Firmenname, Adresse, Logo
- Kontaktinformationen
- Orgunit-spezifische Daten

**Benutzer-Informationen:**
- Name, E-Mail, Telefon
- Abteilung und Rolle
- Benutzerdefinierte Felder

**System-Daten:**
- Aktuelle Daten und Zeiten
- System-URLs und Links
- Automatisch generierte IDs

## Praktische Anwendung

**Beispiel 1: Dokumentenkopfzeile**
Kopiere `{{ organisation.name }}` für den Firmennamen in deine Kopfzeile.

**Beispiel 2: Freigabevermerk**
Verwende `{{ document_approved_by }}` und `{{ document.approved_at }}` für einen automatischen Freigabevermerk.

**Beispiel 3: Kontaktdaten**
Nutze `{{ organisation.phone }}` und `{{ organisation.email }}` für Kontaktinformationen.

**Beispiel 4: Benutzerdaten**
Füge `{{ user.get_full_name }}` für den Namen des aktuellen Benutzers ein.

## Tipps für die optimale Nutzung

**Für Template-Ersteller:**
Nutze die Übersicht als Referenz beim Erstellen neuer Dokumentvorlagen und experimentiere mit verschiedenen Variablen.

**Für Qualitätsmanager:**
Verwende die verfügbaren Variablen für automatische Qualitätsvermerke und Nachverfolgung in deinen Dokumenten.

**Für Administratoren:**
Die Übersicht hilft dir dabei, Benutzern die verfügbaren Möglichkeiten zu erklären und bei der Template-Erstellung zu unterstützen.

**Bei der Dokumentenerstellung:**
Öffne die Übersicht parallel zu deinem Word-Dokument und kopiere die benötigten Variablen direkt hinein.

## Was ändert sich für dich?

**Keine Änderung bei bestehenden Templates**
Alle deine bisherigen Dokumentvorlagen funktionieren weiterhin wie gewohnt.

**Einfachere Template-Entwicklung**
Die Erstellung neuer Vorlagen wird deutlich einfacher und schneller.

**Weniger Fehler**
Durch das Kopieren der korrekten Syntax reduzierst du Fehler in deinen Templates.

**Mehr Möglichkeiten**
Du entdeckst vermutlich Variablen, die du bisher nicht kanntest und die deine Dokumente noch besser machen.

Diese neue Funktion macht die Arbeit mit Dokumentvorlagen in ELIZA deutlich effizienter und benutzerfreundlicher - ein wichtiger Schritt für professionelle Dokumentenerstellung.

*Dein ELIZA-Team* 🐢