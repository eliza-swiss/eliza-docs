---
title: "Berechtigungen und Zugriff"
description: ""
weight: "7"
tags:
  - "berechtigungen"
  - "zugriff"
  - "rollen"
  - "funktionen"
  - "sicherheit"
---


# Berechtigungen und Zugriff

Dieses Kapitel erklärt das Berechtigungssystem im DMS - wer welche Dokumente sehen, bearbeiten und freigeben kann.

> 💡 **Für Einsteiger:** Eine ausführliche, didaktische Einführung ins Berechtigungskonzept mit praktischen Beispielen, FAQ und Schritt-für-Schritt-Anleitungen findest du in [Kapitel 7b: Berechtigungen Einführung]({{< ref "07-berechtigungen-einfuehrung" >}}).

## Berechtigungskonzept

### Mehrschichtiges System

Das DMS verwendet ein mehrschichtiges Berechtigungssystem:

```
┌─────────────────────────────────────┐
│     1. Systemberechtigungen         │ ← Globale Rechte
├─────────────────────────────────────┤
│     2. Ordnerberechtigungen         │ ← Vererbung
├─────────────────────────────────────┤
│     3. Dokumentenberechtigungen     │ ← Spezifisch
├─────────────────────────────────────┤
│     4. Funktionsbasierte Rechte     │ ← Workflow
└─────────────────────────────────────┘
```

### Prinzip der Vererbung

Berechtigungen werden von oben nach unten vererbt:

- **System → Ordner → Dokument**
- Untergeordnete Elemente erben Rechte des übergeordneten
- Spezifischere Einstellungen überschreiben allgemeinere

---

## Systemberechtigungen

### Basis-Berechtigungen

| Berechtigung | Codename | Beschreibung |
|--------------|----------|--------------|
| **Anzeigen** | `view_document` | Dokumente sehen und herunterladen |
| **Erstellen** | `add_document` | Neue Dokumente anlegen |
| **Ändern** | `change_document` | Dokumente bearbeiten |
| **Löschen** | `delete_document` | Dokumente löschen |
| **Prüfen** | `review_document` | Dokumente prüfen (Workflow) |
| **Freigeben** | `approve_document` | Dokumente freigeben (Workflow) |

### Ordner-Berechtigungen

| Berechtigung | Codename | Beschreibung |
|--------------|----------|--------------|
| **Anzeigen** | `view_documentfolder` | Ordner sehen |
| **Erstellen** | `add_documentfolder` | Neue Ordner anlegen |
| **Ändern** | `change_documentfolder` | Ordner bearbeiten |
| **Löschen** | `delete_documentfolder` | Ordner löschen |

### Berechtigungen zuweisen

Berechtigungen werden über **Gruppen** vergeben:

1. Administrator erstellt Gruppe (z.B. "DMS-Leser")
2. Berechtigungen werden der Gruppe zugewiesen
3. Benutzer werden der Gruppe hinzugefügt

> **💡 Tipp:** Erstelle Gruppen nach Rollen, nicht nach Einzelpersonen.

---

## Ordnerberechtigungen

### Administratoren

Ordner-Administratoren haben volle Rechte auf den Ordner und alle Inhalte:

- Ordner bearbeiten und löschen
- Unterordner erstellen
- Alle Dokumente verwalten
- Berechtigungen ändern

**Zuweisung:**
1. Ordner bearbeiten
2. Im Feld **"Administratoren"** Benutzer/Gruppen hinzufügen

### Verantwortliche Funktion

Die verantwortliche Funktion hat ähnliche Rechte wie Administratoren:

- Alle Personen mit dieser Funktion erhalten Admin-Rechte
- Ideal für rollenbasierte Verwaltung

**Beispiel:**
- Funktion "Qualitätsmanager" ist verantwortlich für Ordner "QM-Dokumente"
- Alle Qualitätsmanager haben automatisch Admin-Rechte

### Berechtigungsvererbung

**Option: "Berechtigungen vom übergeordneten Ordner erben"**

| Einstellung | Verhalten |
|-------------|-----------|
| ✅ Aktiviert | Verwendet Berechtigungen des Parent-Ordners |
| ❌ Deaktiviert | Eigene Berechtigungen definieren |

**Empfehlung:**
- Aktiviere Vererbung für konsistente Strukturen
- Deaktiviere nur für Ordner mit speziellen Anforderungen

---

## Dokumentenberechtigungen

### Autor

Der Autor eines Dokuments hat automatisch Bearbeitungsrechte:

- Kann das Dokument bearbeiten
- Kann das Dokument zur Prüfung einreichen
- Kann keine Freigabe erteilen (Vier-Augen-Prinzip)

### Verantwortliche Funktion

Auf Dokumentenebene definierbar:

- Überschreibt die Ordner-Funktion
- Alle Personen mit dieser Funktion haben Bearbeitungsrechte

### Contributors (Mitwirkende)

Zusätzliche Benutzer mit Bearbeitungsrechten:

- Können das Dokument bearbeiten
- Können es zur Prüfung einreichen

---

## Workflow-Berechtigungen

### Prüfende Funktion

Wer kann ein Dokument prüfen?

1. Benutzer mit globaler `review_document` Berechtigung
2. PLUS Mitglieder der prüfenden Funktion

**Prüfende Funktion definieren:**
- Auf Dokument-Ebene: Im Dokument-Formular
- Auf Ordner-Ebene: Wird vererbt
- Auf System-Ebene: Globale Prüfer-Berechtigung

### Freigebende Funktion

Wer kann ein Dokument freigeben?

1. Benutzer mit globaler `approve_document` Berechtigung
2. PLUS Mitglieder der freigebenden Funktion

**Freigebende Funktion definieren:**
- Auf Dokument-Ebene: Im Dokument-Formular
- Auf Ordner-Ebene: Wird vererbt
- Auf System-Ebene: Globale Freigeber-Berechtigung

### Vier-Augen-Prinzip

Für ISO 9001 und andere Standards:

- Ersteller ≠ Prüfer ≠ Freigeber
- Wird automatisch erzwungen
- Kann nicht umgangen werden

---

## Rollen-Matrix

### Typische Rollen und Rechte

| Rolle | Sehen | Erstellen | Bearbeiten | Prüfen | Freigeben | Löschen |
|-------|-------|-----------|------------|--------|-----------|---------|
| **Leser** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Autor** | ✅ | ✅ | ✅* | ❌ | ❌ | ❌ |
| **Prüfer** | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Freigeber** | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Koordinator** | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Administrator** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

*Nur eigene Dokumente oder als Verantwortlicher

### Empfohlene Gruppen

**DMS-Leser**
- `view_document`
- `view_documentfolder`

**DMS-Autor**
- Alle Leser-Rechte
- `add_document`
- `change_document`

**DMS-Prüfer**
- Alle Leser-Rechte
- `review_document`

**DMS-Freigeber**
- Alle Leser-Rechte
- `approve_document`

**DMS-Administrator**
- Alle Rechte
- `delete_document`
- `add_documentfolder`
- `change_documentfolder`
- `delete_documentfolder`

---

## Organisationseinheiten

### Konzept

Ordner können Organisationseinheiten zugewiesen werden:

- Ermöglicht Filterung nach Abteilung
- Kann zusätzliche Berechtigungen steuern
- Integriert mit Organigramm

### Zuweisung

1. Ordner bearbeiten
2. Im Feld **"Zugewiesene Organisationseinheiten"** auswählen
3. Speichern

### Auswirkungen

- Dokumente werden in OE-Übersichten angezeigt
- Kann für Berechtigungssteuerung genutzt werden
- Ermöglicht abteilungsspezifische Ansichten

---

## Berechtigungsprüfung

### Wer kann was sehen?

Ein Benutzer kann ein Dokument sehen, wenn:

1. Er `view_document` Berechtigung hat UND
2. Einer der folgenden Punkte zutrifft:
   - Er ist Autor des Dokuments
   - Er ist Mitglied einer verantwortlichen Funktion
   - Er ist Ordner-Administrator
   - Er ist Contributor des Dokuments
   - Der Ordner keine Einschränkungen hat

### Wer kann was bearbeiten?

Ein Benutzer kann ein Dokument bearbeiten, wenn:

1. Er `change_document` Berechtigung hat UND
2. Einer der folgenden Punkte zutrifft:
   - Er ist Autor des Dokuments
   - Er ist Mitglied der verantwortlichen Funktion
   - Er ist Ordner-Administrator
   - Er ist Contributor des Dokuments

### Debugging von Berechtigungen

Wenn jemand keinen Zugriff hat:

1. Prüfe globale Berechtigungen (Gruppen)
2. Prüfe Ordner-Einstellungen (Administratoren, Vererbung)
3. Prüfe Dokument-Einstellungen (Autor, Funktionen)
4. Prüfe Funktionszugehörigkeit

---

## Berechtigungen für vertrauliche Dokumente

### Eingeschränkter Zugriff

Für besonders sensible Dokumente:

1. Erstelle einen separaten Ordner
2. Deaktiviere Berechtigungsvererbung
3. Definiere explizit, wer Zugriff hat
4. Setze nur spezifische Administratoren

### Audit-relevante Dokumente

Für Compliance-Anforderungen:

- Aktiviere Audit-Logging
- Definiere klare Verantwortlichkeiten
- Dokumentiere Berechtigungsänderungen

---

## Best Practices

### ✅ Rollen statt Einzelpersonen

- Erstelle funktionsbasierte Berechtigungen
- Nutze Gruppen für Rollenzuweisung
- Erleichtert Personalwechsel

### ✅ Minimale Rechte

- Vergib nur notwendige Berechtigungen
- Starte mit Leser-Rechten
- Erweitere bei Bedarf

### ✅ Dokumentierte Struktur

- Dokumentiere dein Berechtigungskonzept
- Erstelle Übersicht der Gruppen und Rechte
- Schulung für Administratoren

### ✅ Regelmässige Überprüfung

- Prüfe quartalsweise die Berechtigungen
- Entferne nicht mehr benötigte Zugänge
- Aktualisiere bei Personalwechsel

---

## Häufige Fehler vermeiden

### ❌ Fehler: Zu viele Administratoren

**Problem:** Jeder ist Administrator

**Lösung:** Admin-Rechte sparsam vergeben, Rollen nutzen

### ❌ Fehler: Keine Vererbung

**Problem:** Jeder Ordner hat eigene Einstellungen

**Lösung:** Nutze Vererbung, definiere nur Ausnahmen

### ❌ Fehler: Vergessene Funktionen

**Problem:** Workflow blockiert, weil keine Prüfer/Freigeber definiert

**Lösung:** Definiere Funktionen auf Ordner-Ebene als Standard

### ❌ Fehler: Einzelpersonen statt Gruppen

**Problem:** Berechtigungen an Max Muster statt an Rolle

**Lösung:** Immer über Gruppen/Funktionen berechtigen

---

## Nächste Schritte

- **[Kapitel 8: Suche]({{< ref "08-suche-filter" >}})**: Dokumente finden
- **[Kapitel 10: Best Practices]({{< ref "10-best-practices" >}})**: Empfehlungen für Administration

---

## Zusammenfassung

✅ Du verstehst das mehrschichtige Berechtigungssystem
✅ Du kennst System-, Ordner- und Dokumentenberechtigungen
✅ Du verstehst Workflow-Berechtigungen (Prüfer, Freigeber)
✅ Du kannst Rollen sinnvoll definieren
✅ Du nutzt Vererbung effektiv
✅ Du vermeidest häufige Berechtigungsfehler
