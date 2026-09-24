---
title: "🚀 ELIZA September-Update: Die wichtigsten Neuerungen"
date: "2026-09-26"
publishDate: "2026-09-24"
category: "Sammel-Updates"
modules: ["signatures", "contracts", "forms", "dms", "issues", "core", "organisation", "prozesse", "measuring", "resources", "timetracker"]
slug: "september-update-2026"
---



Liebe ELIZA-Nutzerin, lieber ELIZA-Nutzer

Seit dem letzten breiten Release vom 28. August haben wir ELIZA an vielen Stellen weiterentwickelt. Die Highlights dieses Updates: ELIZA Sign begleitet elektronische Unterschriften noch umfassender, Verträge erhalten einen nachvollziehbaren Freigabe-Workflow und Formulare lassen sich vielseitiger gestalten, einbetten und exportieren.

---

## Was ist neu?

### ELIZA Sign: elektronische Unterschriften durchgängig organisieren

ELIZA Sign führt dich Schritt für Schritt durch einen Signaturauftrag. Du lädst ein PDF direkt hoch oder startest den Auftrag bei einem Dokument beziehungsweise Vertrag, prüfst die Vorschau, platzierst die Unterschrift und bestimmst die unterzeichnenden Personen.

- Kommentare bei Einladung und Entscheid ergänzen
- unterzeichnete PDFs als neue Version oder in einem gewählten DMS-Ordner ablegen
- Vertrags-PDFs direkt aus dem Vertragsmodul signieren lassen
- fortgeschrittene elektronische Signaturen mit Passkey verwenden
- qualifizierte elektronische Signaturen über eSignR und Swisscom Mobile ID nutzen

Die qualifizierte elektronische Signatur ist eine Zusatzfunktion und standardmässig ausgeschaltet. Sie benötigt ein eingerichtetes eSignR-Konto, Mobile ID und die Freischaltung durch deine Administration.

### Verträge prüfen und freigeben

Verträge und Vertragsdokumente können neu einen geregelten Ablauf von Entwurf über Prüfung bis zur Freigabe durchlaufen. Prüfende und freigebende Funktionen lassen sich am Vertrag oder am Vertragsordner festlegen.

- zuständige Personen, Fristen und Kommentare im Workflow festhalten
- freigegebene Verträge über eine Arbeitskopie nachvollziehbar überarbeiten
- Vertragsdokumente unabhängig vom Vertragsstatus bearbeiten und freigeben
- ausstehende Prüfungen und Freigaben unter «Meine Vertrags-Workflows» sehen
- nur Personen auswählen, die den nächsten Workflow-Schritt tatsächlich ausführen dürfen

Der Vertragsworkflow ist eine Zusatzfunktion. Vertrags-Admins aktivieren ihn bei Bedarf in den Einstellungen des Vertragsmoduls.

### Formulare besser gestalten, einbetten und exportieren

Formular-Vorlagen können ein Titelbild tragen, das auch beim öffentlichen Ausfüllen, in einer Website-Einbettung sowie im PDF- und Word-Ausdruck erscheint. Öffentliche Formulare lassen sich kontrolliert auf ausdrücklich freigegebenen Websites einbetten.

Weitere Verbesserungen:

- Markdown, Tabellen und Bilder in PDF- und Word-Exporten darstellen
- lange und mehrzeilige Antwortoptionen vollständig anzeigen
- doppelte Formulare und Meldungen bei mehrfachem Absenden verhindern
- leere Auswahlwerte verständlich als «Keine Angabe» beschriften
- Folgeformular-Regeln nach dem Umbenennen einer Antwortoption nachführen
- Bemerkungen bei Auswahlfragen nach einem Validierungsfehler beibehalten

---

## Weitere Neuerungen im Detail

### Dokumente und Office-Dateien

Office-Dokumente können für Leserinnen und Leser als PDF-Darstellung bereitgestellt werden. Bearbeitende arbeiten weiterhin mit dem Original, während Personen mit Leserecht eine einheitliche PDF-Ansicht erhalten. Die Betriebsart lässt sich pro Installation auf «Aus», «Manuell» oder «Automatisch» setzen.

Archivierte Dokumente sind wieder zuverlässig filter- und durchsuchbar. Beim Reaktivieren eines Ordners werden die zugehörigen Dokumente mit reaktiviert. Workflow-Kommentare erscheinen in Historien formatiert statt als Markdown-Quelltext, und die Office-Vorschau lässt sich zuverlässig aktualisieren.

### Meldungen und Benachrichtigungen

Meldekreise lassen sich samt ihren Meldungen kontrolliert archivieren und später wieder reaktivieren. Offene Meldungen werden dabei nur nach einer ausdrücklichen Bestätigung mitarchiviert.

Benachrichtigungen können gefiltert, erneut gesendet und für Rückmeldungen geöffnet werden. Persönliche Antwortvorlagen mit einer Standardvorlage beschleunigen wiederkehrende Antworten. Optional zeigen Kanban-Karten zusätzliche Angaben zur meldenden Person, zum Alter der Meldung und dazu, wer als Nächstes reagieren sollte.

### Suche und Personenauswahl

Die Suche und Navigation wurden auf Smartphones verbessert. Prüfmittel sind neu über die globale Suche auffindbar. In Personen- und Empfängerauswahlen bleiben Markierungen auch beim Suchen, bei der Bedienung mit Enter und nach Validierungsfehlern erhalten.

Grosse Personenauswahlen reagieren schneller. Suchbegriffe finden Personen unabhängig davon, ob du «Vorname Nachname» oder «Nachname Vorname» eingibst.

### Organisation und Prozesse

Organisationseinheiten können neben einer Leitung auch Co-Leitungen führen. Listen, Detailansichten und Mitarbeitenden-Profile unterscheiden die Leitung und die Co-Leitungen klar.

Bei Prozessen bleiben Mitwirkungen beim Freigeben einer Arbeitskopie erhalten. Archivierte Prozesse werden nicht mehr als Standardprozess angeboten, und die Auswahl von Unterprozessen und Farben wurde übersichtlicher gestaltet.

### CMI-Verweise direkt öffnen

ELIZA erkennt gültige `kal://`-Verweise aus CMI und stellt sie als kompakte, anklickbare Verknüpfungen dar. Solche Verweise lassen sich in formatierten Texten, bei DMS-Dokumenten sowie als Hilfsmittel in Prozessen verwenden. Voraussetzung ist ein eingerichteter CMI-Protokoll-Handler auf dem verwendeten Gerät.

### Weitere Verbesserungen

- **Inventar:** Tabellen mit vielen Spalten horizontal scrollen und externe IDs wieder korrekt aus Excel importieren
- **Prüfmittel:** externe Referenzen im Formular pflegen und Prüfmittel über die globale Suche finden
- **Zeiterfassung:** Uhrzeiten beim Bearbeiten auch kompakt als `0815` oder `815` eingeben
- **Tutorials:** Reihenfolge von Lektionen und Abschnitten auch über die REST API setzen
- **Oberfläche:** verständlichere Toast-Meldungen, verbesserter Dunkelmodus und kompaktere öffentliche Seiten
- **Sicherheit:** Sichtbarkeits- und Berechtigungsprüfungen in Oberfläche, Suche, Dateiabrufen und REST API umfassend verstärkt
- **Performance:** grosse Meldungslisten, Dashboard-Abfragen und Empfängerauswahlen laden deutlich schneller

---

## Tipps für die optimale Nutzung

1. **Signaturart bewusst wählen:** Nutze QES nur, wenn die rechtlichen und organisatorischen Voraussetzungen erfüllt sind. Für viele interne Abläufe genügt eine einfache oder fortgeschrittene elektronische Signatur.
2. **Vertragsworkflow zuerst konfigurieren:** Lege prüfende und freigebende Funktionen fest, bevor du den Workflow für neue Verträge aktivierst.
3. **Formulare vor der Veröffentlichung testen:** Prüfe Titelbild, Einbettung und Export einmal auf dem Smartphone und einmal am Desktop.
4. **Archivierung kontrolliert einsetzen:** Prüfe vor dem Archivieren eines Meldekreises die angezeigte Zahl offener Meldungen.

---

Viel Spass mit den neuen Funktionen! Bei Fragen steht dir unser Support unter support@eliza.swiss zur Verfügung.

*Dein ELIZA-Team* 🐢

---

**Version:** 2026-09-26

**Kategorie:** September-Update

**Module:** ELIZA Sign, Verträge, Formulare, Dokumente, Meldungen, Organisation, Prozesse, Prüfmittel, Inventar, Zeiterfassung