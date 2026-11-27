---
title: "Freigabe-Workflow und Arbeitskopien"
description: ""
weight: "9"
tags:
  - "workflow"
  - "freigabe"
  - "arbeitskopie"
  - "contracts"
---


# Freigabe-Workflow und Arbeitskopien

In diesem Kapitel lernst du, wie Verträge und Vertragsdokumente geprüft und freigegeben werden und wie du freigegebene Verträge über eine Arbeitskopie änderst.

> **Hinweis:** Der Freigabe-Workflow ist eine Zusatzfunktion. Deine Administratorin oder dein Administrator schaltet sie in den ELIZA-Einstellungen frei (Einstellung «Freigabe-Workflow für Verträge und Vertragsdokumente aktivieren»). Ohne diese Einstellung verhält sich das Vertragsmodul wie bisher.

## Freigabestatus verstehen

Der Freigabestatus ist unabhängig vom Laufzeitstatus (aktiv, abgelaufen). Er zeigt, ob der Inhalt eines Vertrags oder eines Vertragsdokuments geprüft und freigegeben ist – so wie du es von den Dokumenten im DMS kennst.

```
[Entwurf] → [zur Prüfung] → [Geprüft] → [Freigegeben]
```

| Status | Bedeutung |
|--------|-----------|
| **Entwurf** | Der Vertrag wird erarbeitet. Die Federführung kann ihn bearbeiten. |
| **zur Prüfung** | Der Vertrag liegt bei der prüfenden Funktion. |
| **Geprüft** | Die Prüfung ist abgeschlossen; der Vertrag wartet auf die Freigabe. |
| **Freigegeben** | Der Vertrag ist verbindlich und schreibgeschützt. Änderungen laufen über eine Arbeitskopie oder über «Überarbeiten» (zurück auf Entwurf). |

Den aktuellen Freigabestatus siehst du auf der Detailseite direkt unter dem Titel («Freigabe: …») und in der Dateiliste in der Spalte «Freigabe».

## Rollen: Wer prüft, wer gibt frei?

Der Workflow arbeitet mit zwei Funktionen aus der Organisation:

- **Prüfende Funktion** – die Mitglieder dieser Funktion prüfen den Vertrag.
- **Freigebende Funktion** – die Mitglieder dieser Funktion geben den Vertrag frei.

Beide Funktionen setzt du entweder direkt am Vertrag (Formular, Abschnitt «Freigabe») oder am **Vertragsordner**. Ordner vererben die Funktionen an alle darin liegenden Verträge und an Unterordner, solange dort «Berechtigungen von übergeordnetem Ordner vererben» eingeschaltet ist. Am Vertrag gesetzte Funktionen haben Vorrang vor dem Ordner.

Vertragsdokumente haben keine eigenen Rollen – sie übernehmen immer die Funktionen ihres Vertrags.

**Wer darf was?**

| Aktion | Berechtigt |
|--------|-----------|
| Zur Prüfung geben, zurückziehen, überarbeiten | Federführung, Ordner-Admins, Vertragsbearbeitende |
| Prüfen, zurückweisen | Mitglieder der prüfenden Funktion |
| Freigeben | Mitglieder der freigebenden Funktion |
| Arbeitskopie erstellen | Federführung, Ordner-Admins, Vertragsbearbeitende |

Ist keine Funktion hinterlegt, gelten die Rechte «Verträge prüfen» und «Verträge freigeben» der Gruppe **Verträge (Admin)**.

## Den Workflow bedienen

### Aktionen über das Zahnrad in der Zeile «Freigabe»

Auf der Detailseite eines Vertrags oder eines Vertragsdokuments findest du in der Übersicht die Zeile **Freigabe**: den Status-Chip (mit Frist und Zuständigkeit) und daneben ein **Zahnrad**. Ein Klick darauf öffnet ein Menü mit genau den Aktionen, die du gerade ausführen darfst – zum Beispiel **Zur Prüfung geben**, **Als geprüft markieren**, **Freigeben**, **Zurückweisen**, **Zurückziehen**, **Überarbeiten** oder **Arbeitskopie erstellen**. Zuunterst steht immer **Workflow-Dialog und Verlauf**, auch wenn du selbst keine Aktion ausführen darfst.

Wählst du eine Aktion, öffnet sich der Workflow-Dialog mit dieser Aktion bereits ausgewählt. Du ergänzt höchstens einen Kommentar oder passt die Empfängerinnen und Empfänger der Benachrichtigung an und klickst auf den Speichern-Knopf – ohne die Seite zu verlassen. Nach dem Speichern aktualisieren sich Status und Menü sofort.

### Der Workflow-Dialog

Der Dialog öffnet sich als Fenster über der aktuellen Seite und zeigt:

- die prüfende und freigebende Funktion mit ihren Mitgliedern
- den Status als Kette von Entwurf bis Freigegeben
- Frist, Zuständigkeit und Beitragende
- das Formular **Status ändern** mit Kommentar, neuer Zuständigkeit, Frist, Aktion und Benachrichtigung
- den **Verlauf** mit allen bisherigen Kommentaren und Statuswechseln

Nach dem Speichern bleibt das Fenster offen, zeigt eine Bestätigung und den aktualisierten Verlauf. Die Detailseite im Hintergrund zeigt den neuen Status sofort – ohne dass du die Seite neu laden musst.

Über das Symbol neben dem Titel des Fensters öffnest du denselben Dialog als eigene Seite, zum Beispiel wenn du den Link weitergeben möchtest.

### Zurückweisen mit Begründung

Wenn du einen Vertrag zur Überarbeitung zurückweist, musst du einen Kommentar erfassen. So sieht die Federführung im Verlauf, was anzupassen ist.

### Benachrichtigungen

ELIZA schlägt dir passende Empfängerinnen und Empfänger vor: bei «Zur Prüfung geben» die Mitglieder der prüfenden Funktion, nach der Prüfung die Mitglieder der freigebenden Funktion. Du kannst die Auswahl vor dem Speichern anpassen. Wechselt die Zuständigkeit, werden bisherige und neue zuständige Person informiert.

## Freigegebene Verträge ändern

Ein freigegebener Vertrag ist schreibgeschützt. Du hast zwei Wege, ihn zu ändern:

- **Überarbeiten** (Aktion im Workflow-Dialog): setzt den Vertrag zurück auf Entwurf. Er ist damit sofort bearbeitbar, gilt aber bis zur nächsten Freigabe nicht mehr als freigegeben. Geeignet für kleine Korrekturen oder wenn der Vertrag ohnehin neu verhandelt wird.
- **Arbeitskopie**: der Originalvertrag bleibt freigegeben, während du an der Kopie arbeitest. Geeignet, wenn der gültige Stand jederzeit sichtbar bleiben muss.

Solange eine Arbeitskopie existiert, ist «Überarbeiten» am Original nicht verfügbar.

### Die Arbeitskopie

Damit Änderungen nachvollziehbar bleiben, arbeitest du mit einer **Arbeitskopie**:

1. Öffne den freigegebenen Vertrag und klicke in der Workflow-Leiste auf **Arbeitskopie erstellen**.
2. ELIZA legt eine Kopie der Vertragsdaten an (Titel, Konditionen, Laufzeit, Kündigungsfristen, Beträge, Federführung, Organisationseinheiten). Die Kopie ist als «(Arbeitskopie)» gekennzeichnet und startet im Status Entwurf.
3. Bearbeite die Arbeitskopie wie einen normalen Vertrag und führe sie durch den Workflow: zur Prüfung geben, prüfen, freigeben.
4. Mit der Freigabe der Arbeitskopie werden die geänderten Vertragsdaten in den Originalvertrag übernommen. Die Arbeitskopie verschwindet, der Originalvertrag ist wieder freigegeben. Der vorherige Stand bleibt in der Historie erhalten.

**Gut zu wissen:**

- Vertragsdokumente, Wertflüsse, Massnahmen, Einschätzungen und Beteiligungen bleiben immer am Originalvertrag. Sie werden nicht kopiert.
- Pro Vertrag gibt es höchstens eine Arbeitskopie. Existiert bereits eine, führt dich der Knopf dorthin.
- Der Originalvertrag zeigt einen Hinweis «Arbeitskopie vorhanden» mit Link; die Arbeitskopie zeigt «Dies ist eine Arbeitskopie von …».
- Arbeitskopien erscheinen nicht in den Vertragslisten und Auswertungen. Du findest sie über den Originalvertrag oder in der Übersicht «Meine Vertrags-Workflows» unter **Arbeitskopien**.

## Vertragsdokumente: neue Version

Auch jedes Vertragsdokument hat einen eigenen Freigabestatus. Eine neue Datei ersetzt eine freigegebene Datei nicht direkt:

1. Öffne im Vertrag den Reiter **Dateien** oder das Dokument selbst und klicke auf **Neue Version**.
2. Lade die neue Datei hoch, passe bei Bedarf Titel und Beschreibung an und klicke auf **Arbeitskopie erstellen**.
3. Die neue Version durchläuft den Workflow. Bei der Freigabe ersetzt sie die bisherige Datei; die alte Version bleibt unter **Versionen** abrufbar.

Der Reiter **Dateien** zeigt pro Dokument den Freigabestatus und, falls vorhanden, die zugehörige Arbeitskopie. Im Reitertitel siehst du, wie viele Dokumente freigegeben sind («Dateien (2/3 freigegeben)»).

Wichtig: Der Freigabestatus des Vertrags und derjenige seiner Dokumente sind unabhängig voneinander. Ist der Vertrag freigegeben, kannst du ihm trotzdem neue Dokumente hinzufügen, und Dokumente im Status **Entwurf** bleiben ganz normal bearbeitbar – Titel und Beschreibung ändern, Text aus PDF extrahieren, digital signieren mit ELIZA Sign. Erst wenn ein Dokument selbst freigegeben ist, läuft eine Änderung über **Neue Version**. Bei einem archivierten Vertrag sind auch die Dokumente schreibgeschützt.

## Übersicht «Meine Vertrags-Workflows»

Über das Symbol mit der Häkchenliste in der Vertragsnavigation öffnest du deine Workflow-Übersicht. Sie zeigt:

- **zur Prüfung** – Verträge, die auf deine Prüfung warten
- **Geprüft** – Verträge, die auf deine Freigabe warten
- **Entwurf**, **Freigegeben** und **Arbeitskopien** als weitere Filter

Warten Aufgaben auf dich, zeigt die Navigation zusätzlich den Knopf **Workflow: n**. Ist eine Frist überschritten, ist er rot. Ein Klick auf einen Vertrag in der Übersicht öffnet den Workflow-Dialog direkt.

## Tipps

- Setze die prüfende und freigebende Funktion am Vertragsordner. So musst du sie nicht bei jedem Vertrag einzeln erfassen.
- Nutze die Frist im Workflow-Dialog, damit anstehende Prüfungen in «Meine Vertrags-Workflows» rot markiert werden, wenn sie überfällig sind.
- Schreibe bei jedem Statuswechsel einen kurzen Kommentar. Der Verlauf ist später dein Nachweis, wer wann was entschieden hat.
