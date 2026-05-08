---
title: "Tipps und Tricks"
description: ""
weight: "5"
tags:
  - "tipps"
  - "tricks"
  - "einstellungen"
  - "auditlog"
  - "konfiguration"
  - "faq"
---


# Tipps und Tricks

In diesem Kapitel findest du fortgeschrittene Funktionen, Einstellungen und Best Practices für die optimale Nutzung des Dashboards.

## Dashboard-Einstellungen

Administratoren können das Dashboard-Verhalten für alle Benutzer konfigurieren.

### Einstellungen öffnen

1. Gehe zum Dashboard
2. Klicke auf **Einstellungen** im Dashboard-Menü

> **💡 Tipp:** Die Einstellungen sind nur für Benutzer mit Administrator-Rechten sichtbar.

### Verfügbare Einstellungen

| Einstellung | Beschreibung | Standard |
|-------------|--------------|----------|
| **Neues Dashboard** | Aktiviert das modernere Dashboard-Design | Aus |
| **Lesebestätigung** | Ermöglicht Lesebestätigungen bei Benachrichtigungen | Ein |
| **Favoriten-Ansicht** | Standard-Ansichtsmodus (Karten/Tabelle) | Karten |
| **Wetter-Widget** | Zeigt das Wetter-Widget an | Ein |
| **Prozesse-Widget** | Zeigt offene Genehmigungen | Ein |
| **DMS-Widget** | Zeigt zuletzt geöffnete Dokumente | Ein |
| **Fristen-Vorschau** | Anzahl Tage für Fristen-Übersicht | 30 |
| **Fristen-Warnung** | Tage vor Ablauf für Warnfarbe | 7 |

### Einstellungen speichern

1. Ändere die gewünschten Einstellungen
2. Klicke auf **Speichern**
3. Die Änderungen werden sofort wirksam

> **⚠️ Wichtig:** Einige Einstellungen wirken sich auf alle Benutzer aus, nicht nur auf dich.

### Widget-Einstellungen (nur Superuser)

Superuser haben Zugriff auf zusätzliche Widget-Einstellungen:
- Prozesse-Widget aktivieren/deaktivieren
- DMS-Widget aktivieren/deaktivieren

Diese Einstellungen beeinflussen, welche Widgets allen Benutzern zur Verfügung stehen.

## Aktivitätsprotokoll (Auditlog)

Das Aktivitätsprotokoll zeigt alle Änderungen im System.

### Auditlog öffnen

1. Gehe zum Dashboard
2. Klicke auf **Auditlog** im Dashboard-Menü

> **💡 Tipp:** Der Auditlog ist nur für Administratoren sichtbar.

### Auditlog filtern

Du kannst das Protokoll nach verschiedenen Kriterien filtern:

**Module:**
- Wähle ein oder mehrere ELIZA-Module
- Z.B. nur CRM, DMS oder Prozesse

**Inhaltstypen:**
- Filtere nach spezifischen Objekttypen
- Z.B. nur Kontakte oder Dokumente

**Aktionen:**
- **Erstellen**: Neue Objekte
- **Bearbeiten**: Änderungen an bestehenden Objekten
- **Löschen**: Gelöschte Objekte

**Benutzer:**
- Filtere nach bestimmten Benutzern
- Zeige nur Änderungen von ausgewählten Personen

**Zeitraum:**
- **Anzahl Tage**: Letzte X Tage
- **Von/Bis**: Spezifischer Datumsbereich

### Auditlog-Ergebnisse

Die Ergebnisse zeigen:
- Wer hat was geändert
- Wann wurde die Änderung gemacht
- Was wurde genau geändert (alte/neue Werte)

### Export und Berichte

Du kannst die Auditlog-Ergebnisse exportieren für:
- Compliance-Berichte
- Sicherheitsaudits
- Nachverfolgung von Änderungen

## Performance-Tipps

### Dashboard schneller laden

- **Weniger Favoriten**: Halte die Anzahl unter 20
- **Widgets optimieren**: Deaktiviere nicht benötigte Widgets
- **Browser-Cache**: Leere regelmässig den Browser-Cache

### Effizientes Arbeiten

- **Shortcuts nutzen**: Erstelle Shortcuts für häufig besuchte Seiten
- **Favoriten sortieren**: Wichtigste Favoriten nach oben
- **Posteingang aufräumen**: Lösche gelesene Nachrichten regelmässig

## Mobile Nutzung

Das Dashboard ist für mobile Geräte optimiert.

### Besonderheiten auf Mobilgeräten

- **Einspaltiges Layout**: Widgets werden untereinander angezeigt
- **Touch-Gesten**: Drag & Drop funktioniert mit Touch
- **Kompakte Ansicht**: Weniger Details, bessere Übersicht

### Tipps für mobile Nutzung

- ✅ Tabellen-Ansicht für Favoriten verwenden
- ✅ Shortcuts für häufige Aktionen erstellen
- ✅ Benachrichtigungen per E-Mail aktivieren
- ❌ Komplexe Aktionen lieber am Desktop

## Fehlerbehebung

### Widget wird nicht angezeigt

**Mögliche Ursachen:**
- Widget ist deaktiviert (Einstellungen prüfen)
- Modul nicht aktiviert (z.B. DMS, Zeiterfassung)
- Keine Berechtigung

**Lösung:**
1. Prüfe die Dashboard-Einstellungen
2. Kontaktiere deinen Administrator

### Favorit zeigt Fehler

**Mögliche Ursachen:**
- Objekt wurde gelöscht
- Keine Zugriffsberechtigung mehr

**Lösung:**
- Entferne den fehlerhaften Favoriten
- Prüfe deine Berechtigungen

### Benachrichtigungen kommen nicht an

**Mögliche Ursachen:**
- Nicht in der Empfängergruppe
- E-Mail-Zustellung fehlgeschlagen
- Spam-Filter blockiert

**Lösung:**
1. Prüfe deine Gruppenzugehörigkeit
2. Prüfe deinen Spam-Ordner
3. Kontaktiere den Administrator

### Drag & Drop funktioniert nicht

**Mögliche Ursachen:**
- Browser-Problem
- JavaScript deaktiviert
- Touch-Gerät ohne Unterstützung

**Lösung:**
1. Seite neu laden
2. Anderen Browser verwenden
3. JavaScript aktivieren

## Häufige Fragen (FAQ)

### Kann ich das Dashboard-Layout speichern?

Ja, Änderungen an der Reihenfolge von Favoriten und Shortcuts werden automatisch gespeichert.

### Wie setze ich das Dashboard zurück?

Derzeit gibt es keine "Zurücksetzen"-Funktion. Du kannst aber:
- Alle Favoriten entfernen und neu hinzufügen
- Alle Shortcuts löschen und neu erstellen

### Kann ich Widgets ausblenden?

Als normaler Benutzer kannst du keine Widgets ausblenden. Administratoren können bestimmte Widgets in den Einstellungen deaktivieren.

### Werden meine Daten synchronisiert?

Ja, alle Dashboard-Daten (Favoriten, Shortcuts, Einstellungen) werden serverseitig gespeichert und sind auf allen Geräten verfügbar.

### Wie oft werden die Widgets aktualisiert?

- **Automatisch**: Alle paar Minuten
- **Bei Aktionen**: Sofort nach Änderungen
- **Manuell**: Seite neu laden

### Was passiert mit meinen Favoriten, wenn ich das Unternehmen verlasse?

Bei Deaktivierung deines Benutzerkontos werden auch deine persönlichen Favoriten und Shortcuts gelöscht.

## Best Practices Zusammenfassung

### Für alle Benutzer

| Empfehlung | Begründung |
|------------|------------|
| Max. 15 Favoriten | Bessere Übersicht |
| Täglicher Posteingang-Check | Nichts verpassen |
| Shortcuts für häufige Seiten | Schnellerer Zugriff |
| Regelmässig aufräumen | Performance und Übersicht |

### Für Administratoren

| Empfehlung | Begründung |
|------------|------------|
| Widgets gezielt aktivieren | Nur relevante Widgets |
| Fristen-Konfiguration anpassen | Passend zum Unternehmen |
| Auditlog regelmässig prüfen | Sicherheit und Compliance |
| Benutzer-Feedback einholen | Kontinuierliche Verbesserung |

## Checkliste: Dashboard-Optimierung

- [ ] Favoriten auf das Wesentliche reduziert (max. 15-20)
- [ ] Shortcuts für tägliche Arbeit erstellt
- [ ] Posteingang ist aufgeräumt
- [ ] Nicht benötigte Widgets deaktiviert (Administrator)
- [ ] Fristen-Konfiguration überprüft (Administrator)
- [ ] Browser-Cache regelmässig geleert

## Zusammenfassung

Das Dashboard ist dein persönlicher Arbeitsbereich in ELIZA. Mit den richtigen Einstellungen und einer durchdachten Organisation von Favoriten und Shortcuts wird es zu einem mächtigen Werkzeug für deine tägliche Arbeit.

**Die wichtigsten Punkte:**
1. Halte dein Dashboard übersichtlich
2. Nutze Favoriten und Shortcuts gezielt
3. Prüfe regelmässig deinen Posteingang
4. Beachte Fristen und Deadlines
5. Räume regelmässig auf

---

**Viel Erfolg mit deinem optimierten Dashboard!** 🚀

---

## Zurück zur Übersicht

→ [Dashboard Benutzerhandbuch](./)
