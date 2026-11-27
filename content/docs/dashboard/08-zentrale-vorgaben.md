---
title: "Zentrale Vorgaben"
description: ""
weight: "8"
tags:
  - "zentrale vorgaben"
  - "presets"
  - "favoriten"
  - "shortcuts"
  - "widget-reihenfolge"
  - "administration"
  - "dashboard_admin"
---


# Zentrale Vorgaben

Mit zentralen Vorgaben stellst du einer Gruppe von Mitarbeitenden Favoriten, Shortcuts und Widgets fürs Dashboard bereit. So muss nicht jede Person alles selbst einrichten. Dieses Kapitel richtet sich an Administratoren.

📝 **Beispiele:**
- Alle Mitarbeitenden sehen oben im Dashboard den Link zum Notfallprozess.
- Die Pflege bekommt ihre wichtigsten Dokumente als Favoriten vorgeschlagen.
- Das Wetter-Widget ist für die Verwaltung ausgeschaltet.

## Fix oder Vorschlag

Jede Vorgabe hat einen Modus:

| Modus | Was die Mitarbeitenden sehen |
|-------|------------------------------|
| **Vorschlag** (Auge) | Die Einträge erscheinen im Dashboard. Wer sie nicht braucht, blendet sie aus. |
| **Fix** (Schloss) | Die Einträge erscheinen immer und lassen sich nicht ausblenden. |

Brauchst du für dieselben Personen beides, legst du zwei Vorgaben an: eine fixe und eine als Vorschlag.

## Die Übersicht

Öffne **Dashboard › Einstellungen**. Links stehen deine Vorgaben, rechts die allgemeinen Einstellungen (siehe [Tipps und Tricks]({{< ref "05-tipps-tricks" >}})).

Jede Vorgabe ist eine Karte. Darauf siehst du auf einen Blick:

- den **Titel** und ob sie **Fix** oder **Vorschlag** ist
- ob sie **aktiv** ist; mit dem Häkchen schaltest du sie sofort ein oder aus
- für wen sie gilt (**Zielgruppe**) und wie viele Personen das heute sind («Trifft 12 Personen»)
- was drin ist: ⭐ Favoriten, ⚡ Shortcuts und Widget-Regeln, z.B. «Wetter: Aus»

Mit dem Stift bearbeitest du eine Vorgabe, mit dem Papierkorb löschst du sie.

> **💡 Tipp:** Steht dort «Objekt, das du nicht siehst», ist ein Favorit drin, auf den du selbst keinen Zugriff hast, etwa ein Dokument in einem geschützten Ordner. Die Mitarbeitenden mit Zugriff sehen ihn trotzdem. «Objekt existiert nicht mehr» heisst: Das Objekt wurde gelöscht. Entferne diesen Favoriten aus der Vorgabe. «Konnte nicht geprüft werden, Fehler ist gemeldet» heisst: ELIZA konnte den Favoriten gerade nicht prüfen und hat den Fehler gemeldet. Versuche es später noch einmal.

## Eine Vorgabe anlegen

1. Klicke auf **«Neue Vorgabe»**.
2. Fülle das Formular aus:
   - **Titel**: z.B. «Pflege». Die Mitarbeitenden sehen ihn, wenn sie mit der Maus auf «Vorgabe» zeigen.
   - **Beschreibung**: Notiz für dich, Mitarbeitende sehen sie nicht.
   - **Aktiv**: Nur aktive Vorgaben erscheinen im Dashboard.
   - **Priorität**: Eine Zahl. Gelten für eine Person mehrere Vorgaben, gewinnt die höhere Zahl.
   - **Modus**: Fix oder Vorschlag.
   - **Zielgruppe**: «Gilt für alle Benutzer» oder bestimmte Organisationseinheiten bzw. Gruppen.
3. Klicke auf **«Speichern»**. Du bleibst auf der Seite und kannst jetzt Inhalte hinzufügen.

## Favoriten hinzufügen

1. Suche im Feld der Karte **«Favoriten»** nach einem Dokument, Prozess oder anderen Objekt.
2. Klicke beim Treffer auf **«Hinzufügen»**.

Die Reihenfolge änderst du per Ziehen. Mit **«Entfernen»** nimmst du einen Favoriten wieder heraus.

> **⚠️ Wichtig:** Jede Person sieht nur Favoriten, die sie auch sonst sehen darf. Eine Vorgabe gibt niemandem zusätzliche Rechte.

## Shortcuts hinzufügen

Fülle in der Karte **«Shortcuts»** Titel, Adresse, Icon und Farbe aus, wie bei einem eigenen Shortcut. Die Adresse beginnt mit:

- `/` für eine Seite in ELIZA, z.B. `/dms/`
- `https://` oder `http://` für eine Webseite
- `mailto:` für eine E-Mail-Adresse

## Widgets festlegen

Im Bereich **«Widgets»** wählst du für jedes Widget eine Regel. Änderungen werden sofort gespeichert.

| Regel | Was die Mitarbeitenden sehen |
|-------|------------------------------|
| **Sichtbar** | Das Widget ist da. Jede Person kann es selbst ausblenden. |
| **Ausgeblendet** | Das Widget ist zuerst weg. Jede Person kann es selbst einblenden. |
| **Pflicht** | Das Widget ist immer da und lässt sich nicht ausblenden. |
| **Aus** | Das Widget fehlt ganz. |

Möchtest du auch die **Reihenfolge** vorgeben, ordne die Widgets per Ziehen oder mit den Pfeilen und setze das Häkchen **«Reihenfolge übernehmen»**.

- Bei einem **Vorschlag** startet das Dashboard in deiner Reihenfolge. Wer selbst Widgets verschiebt, behält seine eigene Reihenfolge.
- Bei **Fix** gilt deine Reihenfolge für alle in der Zielgruppe. Verschieben ist dann nicht möglich.

## Wenn mehrere Vorgaben zutreffen

Eine Person kann zu mehreren Zielgruppen gehören. Dann gilt:

- Favoriten und Shortcuts aus allen Vorgaben erscheinen, jeder aber nur einmal.
- Bei Widgets und Reihenfolge gewinnt die Vorgabe mit der **höheren Priorität**.
- Bei gleicher Priorität gewinnt die strengere Vorgabe: Fix vor Vorschlag, bei den Widgets «Aus» vor «Pflicht» vor «Ausgeblendet».

## Wer darf Vorgaben verwalten?

Gib den zuständigen Personen die Gruppe **`dashboard_admin`**, wie jede andere Gruppe im Benutzerformular. Superuser dürfen es immer.
