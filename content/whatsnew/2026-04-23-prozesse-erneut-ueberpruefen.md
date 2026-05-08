---
title: "Prozesse: Überprüfung auf Knopfdruck bestätigen"
date: 2026-04-23
category: "Prozesse"
metadata:
  category: "Prozesse"
slug: "prozesse-erneut-ueberpruefen"
---

Prozesse haben – genau wie Dokumente – ein Freigabedatum, ein Datum der nächsten Überprüfung und eine Periodizität. Bisher gab es aber keinen komfortablen Weg, eine regelmässige Überprüfung einfach zu bestätigen. Das ändert sich jetzt: Ein neuer Button "erneut überprüfen" übernimmt die Rolle direkt auf der Prozess-Detailseite, analog zum bewährten Ablauf im DMS.

## Was ist neu?

### Button "erneut überprüfen" in der Metadaten-Ansicht

- In der Metadaten-Ansicht eines freigegebenen Prozesses erscheint neben dem Feld **Datum der nächsten Überprüfung** ein grüner Button mit dem Refresh-Symbol
- Der Button ist sichtbar für alle Benutzer mit Freigabe-Berechtigung auf den Prozess
- Ein Klick öffnet eine neue Seite "Prozess erneut überprüfen" mit allen relevanten Metadaten und einem Bestätigungs-Formular

### Aktionen in der Fristen-Übersicht

- In der Übersicht **Fristen** (abgelaufene und bald ablaufende Prozesse) gibt es neu eine Spalte **Aktion**
- Pro Zeile steht direkt ein grüner Refresh-Button zur Verfügung, der dich zur Bestätigungs-Seite führt
- So kannst du auch aus der Liste heraus mehrere Prozesse der Reihe nach überprüfen, ohne zuerst jeden einzeln aufrufen zu müssen

### Intelligente Vorschlagswerte

- Gültig bis und Nächste Überprüfung werden automatisch aus der hinterlegten Periodizität vorausgefüllt
- Beispiel: Bei Periodizität "halbjährlich" wird als Vorschlag das Datum heute + 6 Monate eingesetzt
- Der Hilfetext unter den Feldern zeigt, auf welcher Periodizität die Berechnung beruht
- Du kannst die Werte selbstverständlich anpassen, falls du eine andere Frist setzen möchtest

### Kommentar und Historie

- Ein optionales Kommentarfeld erlaubt dir, einen Hinweis zur Überprüfung zu hinterlegen (z.B. "keine inhaltlichen Anpassungen nötig")
- Der Kommentar wird als WorkflowComment am Prozess gespeichert und ist in der Historie ersichtlich
- Zusätzlich wird die Überprüfung im Audit-Log mit Datum, Benutzer und den neuen Daten protokolliert

## Wie profitierst du davon?

- Regelmässige Überprüfungen lassen sich jetzt mit wenigen Klicks bestätigen, ohne den Prozess inhaltlich bearbeiten zu müssen
- Die Periodizität wird automatisch auf das nächste Überprüfungsdatum angewendet
- Abgelaufene Prozesse verschwinden nach der Bestätigung aus der Fristen-Übersicht und erscheinen wieder als aktuell
- Einheitliches Verhalten zwischen DMS und Prozessen – du musst dich nicht umgewöhnen

## Wie bestätigst du eine Überprüfung?

1. Öffne den gewünschten Prozess und wechsle zum Tab **Metadaten**
2. Klicke in der Zeile **Datum der nächsten Überprüfung** auf den grünen Button **erneut überprüfen**
3. Prüfe die Vorschlagswerte für Gültig bis und Nächste Überprüfung
4. Optional: Hinterlege einen Kommentar zur Überprüfung
5. Klicke auf **Speichern**

Alternativ über die Fristen-Übersicht:

1. Navigiere zu **Prozesse** und klicke in der Navigation auf **Fristen**
2. Klicke in der Zeile des gewünschten Prozesses auf den grünen Refresh-Button in der Aktion-Spalte
3. Prüfe die Werte und bestätige mit **Speichern**

## Voraussetzungen

- Der Benutzer benötigt Freigabe-Berechtigung auf den Prozess
- Der Prozess ist im Status **Freigegeben** oder **Abgelaufen**
- Für die automatische Vorbelegung der Daten muss am Prozess eine Periodizität hinterlegt sein (optional, aber empfohlen)