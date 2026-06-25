---
title: "Tutorials"
description: "Wissenshub mit Kursen, Handbüchern, Suche, Einladungen und Lernfortschritt"
weight: 95
tags:
  - "overview"
  - "manual"
  - "tutorials"
  - "wissen"
  - "lernen"
  - "handbuch"
  - "kurse"
  - "lektionen"
icon: "school"
---


# Wissen & Lernen Benutzerhandbuch

Willkommen zum umfassenden Benutzerhandbuch für das ELIZA Modul "Wissen & Lernen" (intern auch "Wissenshub" genannt).

## Über dieses Handbuch

Dieses Handbuch hilft dir, das Modul "Wissen & Lernen" effektiv zu nutzen. Es ist in mehrere Kapitel unterteilt, die dich von den Grundlagen bis zu fortgeschrittenen Funktionen führen. Du lernst, wie du Schulungsinhalte und Wissensartikel erstellst, organisierst, Teilnehmende einlädst und deren Lernfortschritt verfolgst.

## Was ist neu

Das Modul "Wissen & Lernen" wurde grundlegend erweitert. Die wichtigsten Neuerungen:

- **Zwei Modi pro Kurs**: Klassische **Schulung** mit Fortschritt und Quiz oder neu **Handbuch** als strukturiertes Nachschlagewerk
- **Wissenshub-Startseite** mit prominenter Suche, Favoriten, "Für dich"-Sektion und Themen
- **Modulübergreifende Suche** (Elasticsearch) — durchsucht zusätzlich DMS, Prozesse und Streams
- **Wizard** zum Erstellen neuer Inhalte in drei Schritten
- **Labels/Themen** für Kurse und Artikel mit Inline-Editing
- **Einladungssystem** für gezielte Verteilung einzelner Artikel/Lektionen (ergänzend zur Anmeldung)
- **Globaler Teilnehmer-Dashboard** für Admins
- **Inline-Editing** für Abschnitte und Artikel via HTMX
- **Historie/Versionsvergleich** für Lektionen
- **BPMN-Diagramme, Excalidraw, Bilder, Videos, PDFs** als Abschnitts-Typen
- **Kommentare** auf Handbuch-Artikeln

## 📚 Kapitel-Übersicht

### [1. Erste Schritte](erste-schritte/)

**Einführung in den Wissenshub**

Lerne die Wissenshub-Startseite kennen, suche modulübergreifend nach Wissen und finde dich in der Navigation zurecht.

**Inhalte:**
- Was ist das Modul "Wissen & Lernen"?
- Wissenshub-Startseite (Suche, Favoriten, Für dich, Themen, Was ist neu, Letzte Kommentare)
- Struktur: Ordner → Kurse/Handbücher → Lektionen/Artikel → Abschnitte
- Schulung vs. Handbuch — die zwei Modi
- Wizard zum Erstellen neuer Inhalte

**Zielgruppe:** Alle Benutzer
**Lesezeit:** ~10 Minuten

---

### [2. Kursordner](ordner/)

**Inhalte organisieren und strukturieren**

Erstelle und verwalte Ordner, um Schulungen und Handbücher thematisch zu gruppieren.

**Inhalte:**
- Ordner erstellen und bearbeiten
- Titelbilder und Beschreibungen
- Sichtbarkeit (normal/geschützt)
- Admin-Team und beteiligte Organisationseinheiten
- Kurse und Handbücher im Ordner verwalten
- Teilnehmerverwaltung auf Ordner-Ebene

**Zielgruppe:** Administratoren
**Lesezeit:** ~12 Minuten

---

### [3. Kurse erstellen und verwalten](kurse-erstellen-und-verwalten/)

**Schulungskurse aufbauen**

Lerne, wie du Schulungskurse erstellst, mit Lektionen füllst und freigibst.

**Inhalte:**
- Neuen Kurs im Wizard erstellen
- Kurs-Metadaten (Titel, Beschreibung, Titelbild, Labels)
- Modus wählen: Schulung oder Handbuch
- Skills-Verknüpfung
- Admin-Team
- Zertifikatsvorlagen konfigurieren
- Kursstatus (Entwurf, Freigegeben, Archiviert)
- Kurs als Word exportieren

**Zielgruppe:** Kursersteller, Administratoren
**Lesezeit:** ~15 Minuten

---

### [4. Lektionen und Abschnitte](lektionen-und-abschnitte/)

**Lerninhalte strukturieren**

Erstelle Lektionen mit verschiedenen Abschnitts-Typen und organisiere sie in Kapiteln.

**Inhalte:**
- Lektionen erstellen, bearbeiten und sortieren
- Unterlektionen (Kapitel)
- Abschnitts-Typen: Text, Bild, Video, PDF, BPMN, Excalidraw-Zeichnung
- Video-Integration (YouTube, Vimeo, Loom, Arcade, SharePoint)
- Inline-Editing via HTMX
- Mitgeltende Dokumente verknüpfen
- Historie/Versionsvergleich
- Vollbild-Modus für Lernende

**Zielgruppe:** Kursersteller
**Lesezeit:** ~20 Minuten

---

### [5. Anmeldungen und Einladungen](kursanmeldungen-und-teilnehmerverwaltung/)

**Teilnehmende verwalten**

Melde Benutzer zu Kursen an oder lade sie gezielt zu einzelnen Lektionen ein.

**Inhalte:**
- Anmeldung (Enrollment) vs. Einladung (Invitation)
- Einzelne Anmeldung erstellen
- Massenanmeldung für mehrere Teilnehmer
- Einladung zu einzelnen Lektionen/Artikeln
- Anmeldestatus (eingeladen, in Arbeit, abgeschlossen)
- Fristen und Deadlines setzen
- Unterschrift beim Kursabschluss
- Zertifikate generieren
- Globaler Teilnehmer-Dashboard
- Fortschrittsübersicht und Auswertungen
- Excel-Export

**Zielgruppe:** Kursadministratoren
**Lesezeit:** ~18 Minuten

---

### [6. Quiz und Abschlusstests](quiz-und-abschlusstests/)

**Wissen prüfen und zertifizieren**

Integriere Quiz und Tests in deine Lektionen für interaktives Lernen.

**Inhalte:**
- Quiz einer Lektion zuweisen
- Wissenskontrollen und Abschlusstests
- Bestehens-Kriterien definieren
- Maximale Versuche festlegen
- Quiz-Ergebnisse einsehen
- Kurs-Abschlussanforderungen

**Zielgruppe:** Kursersteller, Administratoren
**Lesezeit:** ~12 Minuten

---

### [7. Berechtigungen und Zugriff](berechtigungen-und-zugriff/)

**Zugriffsrechte steuern**

Verstehe das Berechtigungskonzept und konfiguriere den Zugriff auf Lerninhalte.

**Inhalte:**
- Berechtigungsgruppen (Admin, Lesen)
- Ordner-basierte Berechtigungen
- Team-Zuweisungen
- Organisationseinheiten-basierter Zugriff
- Sichtbarkeit: Normal vs. Geschützt
- Geschützte Kurse: Zugriff via Einladung oder Anmeldung
- System-Objekte und spezielle Berechtigungen

**Zielgruppe:** Administratoren
**Lesezeit:** ~15 Minuten

---

### [8. Handbuch-Modus](handbuch-modus/)

**Kurse als strukturiertes Nachschlagewerk**

Im Handbuch-Modus wird ein Kurs zum strukturierten Online-Nachschlagewerk mit eigener Artikel-Ansicht, Inline-Editing und Kommentaren.

**Inhalte:**
- Wann Handbuch, wann Schulung?
- Handbuch-Startseite mit Inhaltsverzeichnis
- Artikel-Ansicht (Fullscreen) und Section-Anker
- Inline-Editing direkt auf der Seite
- Kommentare und soziale Interaktion
- Historie und Versionsvergleich
- Einladungs-Banner für Aufgaben
- Unterschiede zur Schulungs-Ansicht

**Zielgruppe:** Wissensautoren, Redaktoren
**Lesezeit:** ~15 Minuten

---

### [9. Labels, Themen und Suche](labels-themen-und-suche/)

**Inhalte auffindbar machen**

Lerne, wie du Labels vergibst, Themen filterst und modulübergreifend nach Wissen suchst.

**Inhalte:**
- Labels (Themen) für Kurse, Lektionen und Artikel
- Labels inline vergeben und löschen
- Themen-Filter auf der Wissenshub-Startseite
- Live-Suche (Elasticsearch) im Wissenshub
- Suche schliesst DMS, Prozesse und Streams ein
- Favoriten verwalten

**Zielgruppe:** Alle Benutzer
**Lesezeit:** ~10 Minuten

---

## Zielgruppen

### 📋 Lernende
**Empfohlene Kapitel:** 1, 8, 9

Starte mit den ersten Schritten, lerne die Suche kennen und finde dich im Handbuch-Modus zurecht.

### 👨‍🏫 Wissensautoren / Kursersteller
**Empfohlene Kapitel:** 1–4, 6, 8, 9

Fokussiere dich auf das Erstellen von Kursen, Lektionen, Handbuch-Artikeln und Quiz.

### 👔 Kursadministratoren
**Empfohlene Kapitel:** 1–9

Verwalte Teilnehmer und Einladungen, Berechtigungen und überwache den Lernfortschritt.

### 🔧 System-Administratoren
**Empfohlene Kapitel:** 2, 5, 7

Verstehe Berechtigungskonzepte und Systemkonfiguration.

---

## Verwendete Konventionen

- **Fett**: UI-Elemente, Buttons und wichtige Begriffe
- `Code`: Technische Begriffe und Einstellungen
- > Blockquote: Tipps, Warnungen und wichtige Hinweise
- → : Navigation (z.B. Wissen & Lernen → Ordner → Neuer Kurs)
- 💡 Tipp
- ⚠️ Wichtig
- ✅ Best Practice
- ❌ Häufiger Fehler

---

## Feedback und Verbesserungen

Dieses Handbuch wird kontinuierlich verbessert. Wenn du Fehler findest oder Verbesserungsvorschläge hast, kontaktiere bitte den Support.

---

## Letzte Aktualisierung

**Version**: 2026.05.25
**Autor**: ELIZA Documentation Team

---

**Viel Erfolg beim Lernen und Lehren!** 🎓
