---
title: "Prozessschritte"
description: ""
weight: "3"
tags:
  - "prozessschritte"
  - "aktivitäten"
  - "raci"
  - "verantwortlichkeiten"
---


# Prozessschritte

Prozessschritte dokumentieren die einzelnen Aktivitäten innerhalb eines Prozesses. Dieses Kapitel zeigt dir, wie du Prozessschritte erstellst und verwaltest.

## Was sind Prozessschritte?

Prozessschritte sind die einzelnen Aktivitäten, die innerhalb eines Prozesses durchgeführt werden. Sie beschreiben:

- **Was** getan wird
- **Wer** es tut (Verantwortlichkeiten)
- **Wie** es getan wird (Beschreibung)
- **Womit** es getan wird (Hilfsmittel, Dokumente)
- **Was** das Ergebnis ist

### Beispiel

Für den Prozess "Angebotserstellung" könnten die Schritte sein:

1. Kundenanfrage erfassen
2. Machbarkeit prüfen
3. Kalkulation erstellen
4. Angebot verfassen
5. Freigabe einholen
6. Angebot versenden

---

## Prozessschritt erstellen

### Schritt-für-Schritt Anleitung

1. Öffne einen Prozess
2. Wechsle zum Tab **"Prozessschritte"**
3. Klicke auf **"+ Neuer Prozessschritt"**
4. Fülle das Formular aus:

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| **Nummer** | Nein | Schrittnummer (z.B. "1", "2", "2.1") |
| **Titel** | Ja | Name der Aktivität |
| **Text** | Nein | Detaillierte Beschreibung der Aktivität |
| **Ergebnis** | Nein | Erwartetes Ergebnis des Schritts |
| **Verantwortung** | Nein | Hauptverantwortliche Funktion |

5. Klicke auf **"Speichern"**

### Erweiterte Felder

| Feld | Beschreibung |
|------|--------------|
| **Periodizität** | Wie oft wird der Schritt ausgeführt |
| **Accountable** | Wer ist rechenschaftspflichtig (RACI) |
| **Consulted** | Wer wird konsultiert (RACI) |
| **Informed** | Wer wird informiert (RACI) |
| **Hilfsmittel** | Verknüpfte Ressourcen |
| **Hilfsdokumente** | Verknüpfte Dokumente aus dem DMS |
| **Lektionen** | Verknüpfte Tutorial-Lektionen |

---

## Verantwortlichkeiten (RACI)

### RACI-Matrix verstehen

Die RACI-Matrix definiert Verantwortlichkeiten für jeden Prozessschritt:

| Rolle | Bedeutung | Beschreibung |
|-------|-----------|--------------|
| **R** - Responsible | Verantwortung | Wer führt die Aktivität durch |
| **A** - Accountable | Rechenschaftspflicht | Wer ist letztendlich verantwortlich |
| **C** - Consulted | Konsultiert | Wer muss vorher gefragt werden |
| **I** - Informed | Informiert | Wer muss über das Ergebnis informiert werden |

### RACI zuweisen

1. Öffne einen Prozessschritt zum Bearbeiten
2. Wähle für jede RACI-Rolle die entsprechenden Funktionen:
   - **Verantwortung**: Hauptverantwortliche Funktion
   - **Accountable**: Rechenschaftspflichtige Funktionen
   - **Consulted**: Zu konsultierende Funktionen
   - **Informed**: Zu informierende Funktionen
3. Speichere die Änderungen

### Beispiel RACI-Matrix

| Schritt | R (Responsible) | A (Accountable) | C (Consulted) | I (Informed) |
|---------|-----------------|-----------------|---------------|--------------|
| Anfrage erfassen | Vertrieb | Vertriebsleitung | - | Projektleitung |
| Machbarkeit prüfen | Technik | Vertriebsleitung | Produktion | Vertrieb |
| Kalkulation | Controlling | Vertriebsleitung | Technik | - |
| Angebot freigeben | - | Geschäftsleitung | Controlling | Vertrieb |

> **💡 Tipp:** Jeder Schritt sollte genau eine rechenschaftspflichtige Person (A) haben.

---

## Reihenfolge und Nummerierung

### Reihenfolge festlegen

Prozessschritte haben eine Reihenfolge, die du anpassen kannst:

1. Öffne den Prozess
2. Wechsle zum Tab **"Prozessschritte"**
3. Nutze die Pfeile oder Drag & Drop, um die Reihenfolge zu ändern

### Nummerierung

Verwende eine konsistente Nummerierung:

| Format | Beispiel | Verwendung |
|--------|----------|------------|
| Einfach | 1, 2, 3 | Lineare Prozesse |
| Hierarchisch | 1.1, 1.2, 2.1 | Prozesse mit Unterschritten |
| Alphanumerisch | 1a, 1b, 2a | Alternative Pfade |

---

## Hilfsdokumente verknüpfen

### Dokumente aus dem DMS

Du kannst Dokumente aus dem DMS-Modul mit Prozessschritten verknüpfen:

1. Öffne den Prozessschritt zum Bearbeiten
2. Im Feld **"Hilfsdokumente"** klicke auf **"Hinzufügen"**
3. Wähle die relevanten Dokumente aus dem DMS
4. Speichere die Änderungen

**Typische Hilfsdokumente:**
- Arbeitsanweisungen
- Formulare
- Checklisten
- Vorlagen
- Referenzdokumente

> **💡 Tipp:** Verknüpfe nur freigegebene Dokumente, damit immer die aktuelle Version verwendet wird.

---

## Hilfsmittel verknüpfen

### Hilfsmittel zuweisen

Hilfsmittel sind Ressourcen, die für einen Prozessschritt benötigt werden:

1. Öffne den Prozessschritt zum Bearbeiten
2. Im Feld **"Hilfsmittel"** wähle die benötigten Ressourcen
3. Speichere die Änderungen

Mehr zu Hilfsmitteln findest du in [Kapitel 5: Hilfsmittel]({{< ref "05-hilfsmittel" >}}).

---

## Prozessschritt bearbeiten

### Inline-Bearbeitung

Für schnelle Änderungen:
1. Klicke auf den Prozessschritt in der Liste
2. Bearbeite die gewünschten Felder direkt
3. Speichere mit Enter oder dem Speichern-Button

### Vollständige Bearbeitung

Für umfangreiche Änderungen:
1. Öffne den Prozessschritt (Klick auf Titel oder "Bearbeiten")
2. Bearbeite alle Felder im Formular
3. Klicke auf **"Speichern"**

---

## Prozessschritt löschen

### Vorgehen

1. Öffne den Prozess
2. Wechsle zum Tab **"Prozessschritte"**
3. Klicke auf das Löschen-Icon (🗑️) neben dem Schritt
4. Bestätige die Löschung

> **⚠️ Wichtig:** Gelöschte Prozessschritte werden mit der nächsten Freigabe der Arbeitskopie endgültig entfernt.

---

## Prozessschritte und Arbeitskopien

### Verhalten bei Arbeitskopien

Wenn du eine Arbeitskopie eines Prozesses erstellst:

- Alle Prozessschritte werden in die Arbeitskopie kopiert
- Änderungen in der Arbeitskopie betreffen nicht das Original
- Bei Freigabe werden die Änderungen auf das Original übertragen

### Neue Schritte in Arbeitskopie

1. Erstelle eine Arbeitskopie des Prozesses
2. Füge neue Prozessschritte hinzu
3. Reiche die Arbeitskopie zur Prüfung/Freigabe ein
4. Nach Freigabe sind die neuen Schritte im Original

---

## Best Practices

### ✅ Empfehlungen

- **Klare Titel**: Beschreibe die Aktivität präzise (Verb + Objekt)
- **Detaillierte Beschreibung**: Was genau ist zu tun?
- **RACI definieren**: Mindestens R und A für jeden Schritt
- **Ergebnis dokumentieren**: Was ist das Ergebnis des Schritts?
- **Dokumente verknüpfen**: Relevante Unterlagen zuordnen

### ❌ Häufige Fehler

- **Zu grobe Schritte**: "Projekt durchführen" ist zu unspezifisch
- **Zu feine Schritte**: Nicht jeder Mausklick braucht einen eigenen Schritt
- **Fehlende RACI**: Ohne Verantwortlichkeiten bleiben Aufgaben liegen
- **Veraltete Dokumente**: Immer aktuelle Versionen verknüpfen

### Beispiele für gute Schritt-Titel

| ❌ Schlecht | ✅ Gut |
|-------------|--------|
| Anfrage | Kundenanfrage in CRM erfassen |
| Prüfung | Technische Machbarkeit prüfen |
| Dokument | Angebotsdokument erstellen |
| Abschluss | Kundenfreigabe einholen |

---

## FAQ

### Wie detailliert sollten Prozessschritte sein?

Ein Prozessschritt sollte eine abgeschlossene Aktivität mit einem definierten Ergebnis sein. Faustregel: Wenn du nicht beschreiben kannst, wann der Schritt fertig ist, ist er zu unspezifisch.

### Kann ich Schritte zwischen Prozessen kopieren?

Aktuell nicht direkt. Du kannst aber einen Prozess duplizieren und dann die Schritte anpassen.

### Was passiert mit Schritten bei der Prozessfreigabe?

Bei Freigabe einer Arbeitskopie werden alle Änderungen an Prozessschritten (neu, geändert, gelöscht) auf das Original übertragen.

---

## Nächste Schritte

- **[Kapitel 4: Workflow]({{< ref "04-workflow-freigabe" >}})**: Verstehe den Freigabeprozess
- **[Kapitel 5: Hilfsmittel]({{< ref "05-hilfsmittel" >}})**: Lerne Hilfsmittel zu verwalten

---

## Zusammenfassung

✅ Du verstehst, was Prozessschritte sind
✅ Du kannst Prozessschritte erstellen und bearbeiten
✅ Du weisst, wie die RACI-Matrix funktioniert
✅ Du kannst Dokumente und Hilfsmittel verknüpfen
✅ Du verstehst das Verhalten bei Arbeitskopien
