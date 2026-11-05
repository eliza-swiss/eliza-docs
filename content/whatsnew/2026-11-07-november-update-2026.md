---
title: "🚀 ELIZA November-Update: Office am Computer und PDF-Darstellung"
date: "2026-11-07"
publishDate: "2026-11-05"
category: "Sammel-Updates"
modules: ["dms", "wopi", "contracts", "teams", "prozesse", "search", "organisation", "tutorials", "core"]
slug: "november-update-2026"
---



Liebe ELIZA-Nutzerin, lieber ELIZA-Nutzer

Seit dem letzten breit angekündigten September-Update hat sich besonders die Arbeit mit Office-Dateien verbessert. Dieses Update bringt die Bearbeitung am Computer in Microsoft Office und LibreOffice sowie weitere Verbesserungen bei der PDF-Darstellung. Welche Möglichkeiten du siehst, hängt von den Rechten und Einstellungen deiner Installation ab.

## Was ist neu?

### Microsoft Office am Computer

Entwürfe und Arbeitskopien im DMS lassen sich mit **«Am Computer bearbeiten»** in Word, Excel oder PowerPoint öffnen. Du speicherst im Office-Programm, ELIZA übernimmt die Änderung als neue Fassung. Freigegebene Dokumente bearbeitest du weiterhin über eine Arbeitskopie. Der Knopf erscheint nur bei passenden Rechten und wenn die Administration die Desktop-Bearbeitung eingerichtet hat.

Für Dateien mit Office-Online-Bearbeitung steht die Desktop-Bearbeitung auch in weiteren Modulen zur Verfügung, etwa bei Verträgen, Spaces, Projekten und Meldungen. Bearbeiten im Browser bleibt eine Alternative. Während der Desktop-Bearbeitung ist die gleichzeitige Online-Bearbeitung gesperrt.

### LibreOffice am Computer

Für DMS-Dokumente kann die Administration neben Microsoft Office auch **LibreOffice oder Collabora Office** als Desktop-Programm wählen. Du öffnest einen Entwurf oder eine Arbeitskopie aus ELIZA und speicherst wie gewohnt im Programm. Auf dem Mac empfehlen wir Microsoft Office.

### Automatische PDF-Darstellung für Lesende

Die PDF-Darstellung wurde **bereits im September eingeführt**. Im Modus «Automatisch» erstellt ELIZA aus unterstützten Office-Dateien eine PDF-Ansicht. Wer ein DMS-Dokument nur lesen darf, sieht und lädt dann das PDF; Bearbeitende arbeiten weiterhin mit dem Original. Bis die PDF-Erzeugung abgeschlossen ist, erscheint für Lesende eine Warteansicht. Die Administration wählt zwischen «Aus», «Manuell» und «Automatisch»; eine Umstellung ist nicht Bestandteil dieses Releases und muss pro Installation entschieden werden.

Neuere Verbesserungen erhalten die gewählte PDF-Einstellung auch bei Arbeitskopien und stellen Kopf- und Fusszeilen von Tabellen in der PDF-Ansicht wieder dar. Prüfe nach der Aktivierung komplexe Tabellen und Seitenumbrüche.

---

## Weitere Neuerungen im Detail

### Dokumente und Verträge

- Die Dokumentdetailseite bündelt Darstellung, Bearbeitung, Download und Vorschau in einer Leiste. Sie zeigt, mit welchem Office-Programm sich die Datei öffnet.
- Vertragsdokumente haben dieselbe Vorschauleiste. Arbeitskopien lassen sich anlegen, bearbeiten und zur Freigabe einreichen.
- DMS-Labels können bei freigegebenen Dokumenten ohne neue Fassung geändert werden. Ordner lassen sich ebenfalls mit Labels versehen.
- Die Dokumentvorlage kennt neu die Variable `{{ document_reviewed_by }}` für die prüfende Person der letzten Freigabe.

### Prozesse und Sitzungen

- Eine Prozesslandkarte kann mit einem Einstiegsbild und anklickbaren Bereichen starten, wenn die Administration diese Option aktiviert.
- In der Prozesslandkarte sind Arbeitskopien als solche erkennbar. Dokumentvorschauen im Diagramm zeigen die verarbeitete Datei.
- Sitzungen lassen sich als PDF oder als Word-Datei ausgeben, die Word-Datei auf Wunsch mit einer Vorlage aus dem DMS. «Sitzung abschliessen» steht neu im Dreipunktmenü, sofern du die Sitzung bearbeiten darfst und sie noch nicht abgeschlossen ist. «Sitzung löschen» steht rot und abgetrennt zuunterst.

### Wissen & Lernen

- Kurse, Handbücher, Lektionen und Wissensartikel lassen sich mit Änderungsrechten über das Dreipunktmenü archivieren statt löschen und später wieder zurückholen. Abgeschlossene Kurse bleiben in «Meine Kurse» stehen und sind als archiviert markiert.

### Suche, Spracheingabe und Bedienung

- Die Suche findet Titel und Wortanfänge wieder zuverlässiger.
- In Formularen und bei Meldungen ist die Spracheingabe mit sichtbarer Transkription verfügbar, sofern das jeweilige Werkzeug freigeschaltet ist.
- Tabellen mit Datumsspalten sortieren nach Datum statt nach dem angezeigten Text. Die Werkzeugleiste des Texteditors bleibt beim Scrollen sichtbar.

### Sicherheit

Rechteprüfungen wurden in verschiedenen Modulen verschärft. Die Anmeldung mit Passwort ist gegen wiederholte Fehlversuche begrenzt. Einige Aktionen können deshalb für bisher zu weit berechtigte Konten eingeschränkt sein.

---

## Tipps für die Nutzung

1. **Office-Programm prüfen:** Frage deine Administration, ob die Desktop-Bearbeitung für deine Installation aktiviert und welches Programm eingestellt ist.
2. **Arbeitskopie verwenden:** Bearbeite ein freigegebenes DMS-Dokument über eine Arbeitskopie, nicht direkt am freigegebenen Original.
3. **PDF-Einstellung wählen:** Die Administration kann die PDF-Darstellung für Lesende gezielt einschalten. Prüfe wichtige Tabellen und Umbrüche vor der breiten Aktivierung.

*Dein ELIZA-Team* 🐢
