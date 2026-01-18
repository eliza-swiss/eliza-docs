---
title: "Versionierung und Historie"
description: ""
weight: "6"
tags:
  - "versionierung"
  - "historie"
  - "revision"
  - "änderungen"
  - "audit"
---


# Versionierung und Historie

Dieses Kapitel erklärt, wie ELIZA Dokumentenänderungen automatisch nachverfolgt und wie du frühere Versionen einsehen und wiederherstellen kannst.

## Versionierungs-Konzept

### Automatische Versionierung

ELIZA erstellt automatisch neue Versionen bei:

- Jeder Speicherung von Änderungen
- Jeder Workflow-Transition (z.B. Freigabe)
- Jedem Datei-Upload

**Vorteile:**
- Lückenlose Nachverfolgung aller Änderungen
- Jederzeit Rückkehr zu früheren Ständen möglich
- Compliance-konform (ISO 9001, FDA, etc.)

### Was wird versioniert?

| Versioniert | Nicht versioniert |
|-------------|-------------------|
| Titel | Zugriffszähler |
| Beschreibung | Letzte Ansicht |
| Datei-Inhalt | Favoritenstatus |
| Metadaten | Kommentare |
| Status | Verknüpfungen |
| Verantwortlichkeiten | |

---

## Versionshistorie anzeigen

### Zugriff

**Dokument öffnen → Tab "Versionen"**

oder

**Dokument öffnen → Aktionen → "Versionen anzeigen"**

### Versions-Übersicht

Die Versionshistorie zeigt chronologisch alle Versionen:

```
┌─────────────────────────────────────────────────────────┐
│ Version  │ Datum       │ Benutzer    │ Änderung        │
├─────────────────────────────────────────────────────────┤
│ v3       │ 15.03.2025  │ M. Muster   │ Freigegeben     │
│ v2       │ 14.03.2025  │ H. Beispiel │ Datei geändert  │
│ v1       │ 01.03.2025  │ A. Admin    │ Erstellt        │
└─────────────────────────────────────────────────────────┘
```

### Informationen pro Version

| Feld | Beschreibung |
|------|--------------|
| **Versionsnummer** | Automatische fortlaufende Nummer |
| **Datum/Zeit** | Zeitpunkt der Änderung |
| **Benutzer** | Wer die Änderung durchgeführt hat |
| **Kommentar** | Automatischer oder manueller Änderungsgrund |
| **Änderungen** | Welche Felder geändert wurden |

---

## Version anzeigen

### Einzelne Version öffnen

1. Gehe zur Versionshistorie
2. Klicke auf die gewünschte Version
3. Die Version wird in einer Detailansicht geöffnet

### Was du sehen kannst

- **Alle Metadaten** zum Zeitpunkt der Version
- **Datei herunterladen** (falls vorhanden)
- **Vergleich zur aktuellen Version**

> **💡 Tipp:** Du kannst die Datei einer früheren Version herunterladen, ohne die aktuelle Version zu ändern.

---

## Versionen vergleichen

### Vergleich mit aktueller Version

1. Öffne eine Version aus der Historie
2. Die Änderungen zur aktuellen Version werden hervorgehoben:
   - 🟢 **Grün**: Hinzugefügt
   - 🔴 **Rot**: Entfernt
   - 🟡 **Gelb**: Geändert

### Vergleich von Text-Inhalten

Für Word- und Text-Dokumente kann der Inhalt verglichen werden:

1. Wähle **"Mit aktueller Version vergleichen"**
2. Textunterschiede werden markiert angezeigt

> **⚠️ Wichtig:** Der Textvergleich funktioniert nur bei unterstützten Dateiformaten (Word, PDF mit Text, TXT).

---

## Version wiederherstellen

### Wann wiederherstellen?

- Versehentliche Änderungen rückgängig machen
- Zu einem bekannt guten Stand zurückkehren
- Falsche Datei hochgeladen

### Ablauf

1. Öffne die Versionshistorie
2. Wähle die Version, die wiederhergestellt werden soll
3. Klicke auf **"Diese Version wiederherstellen"**
4. Bestätige die Aktion
5. Eine neue Version wird erstellt mit dem alten Inhalt

**Was passiert:**
- Die gewählte Version wird kopiert
- Als neue (aktuelle) Version gespeichert
- Die Historie bleibt vollständig erhalten
- Status wird auf "Entwurf" gesetzt

> **⚠️ Wichtig:** Das Wiederherstellen erstellt eine neue Version - die Historie wird nicht verändert oder gelöscht.

### Berechtigungen

Zum Wiederherstellen benötigst du:
- `change_document` Berechtigung
- Zugriff auf das Dokument

---

## Revisionsnummer

### Unterschied Version vs. Revision

| Aspekt | Version | Revision |
|--------|---------|----------|
| **Verwaltung** | Automatisch | Manuell oder automatisch |
| **Nummerierung** | Fortlaufend (1, 2, 3...) | Frei wählbar oder automatisch |
| **Zweck** | Technische Nachverfolgung | Offizielle Dokumentversion |
| **Beispiel** | v15 | Rev. B, 2.1, 1, 2, 3 |

### Automatische Revisionsnummer

> **💡 Neu:** ELIZA kann Revisionsnummern automatisch vergeben und hochzählen.

Wenn die automatische Revisionsnummer aktiviert ist:

- **Bei jeder Freigabe** wird die Revisionsnummer automatisch um 1 erhöht
- **Erste Freigabe**: Revisionsnummer wird auf "1" gesetzt
- **Weitere Freigaben**: Revisionsnummer wird hochgezählt (2, 3, 4...)
- **Erneute Freigabe (Reapprove)**: Die Nummer bleibt unverändert
- **Das Feld ist gesperrt**: Du kannst die Revisionsnummer nicht manuell ändern

**Woran erkennst du die automatische Vergabe?**

Im Dokumentformular siehst du:

- Das Feld "Revisionsnummer" ist ausgegraut
- Der Hinweistext "Wird automatisch bei Freigabe vergeben"

> **⚠️ Wichtig:** Diese Funktion muss von deinem Administrator aktiviert werden (DMS → Einstellungen → Konfiguration).

### Manuelle Revisionsnummer

Wenn die automatische Vergabe **nicht** aktiviert ist, kannst du die Revisionsnummer manuell setzen:

1. Bearbeite das Dokument
2. Trage im Feld **"Revisionsnummer"** deine Kennung ein
3. Speichere

**Typische Formate:**
- `1.0`, `1.1`, `2.0` - Numerisch mit Punkten
- `Rev. A`, `Rev. B` - Buchstaben-basiert
- `2025-01`, `2025-02` - Datumsbasiert

### Revisionsnummer in Vorlagen

Die Revisionsnummer kann in Vorlagen verwendet werden:

```
Version: {{ document_version }}
Revision: {{ revision_number }}
```

---

## Audit-Trail

### Was ist der Audit-Trail?

Der Audit-Trail protokolliert alle Aktionen an einem Dokument für Compliance-Zwecke.

### Zugriff

**Dokument → Tab "Aktivität"** oder **"Audit-Log"**

### Protokollierte Ereignisse

| Ereignis | Details |
|----------|---------|
| **Erstellt** | Wer, wann |
| **Bearbeitet** | Wer, wann, welche Felder |
| **Status geändert** | Von/Nach, Wer, Kommentar |
| **Datei hochgeladen** | Dateiname, Grösse |
| **Angesehen** | Wer, wann (optional) |
| **Heruntergeladen** | Wer, wann |
| **Kommentiert** | Wer, wann, Text |

### Audit-Trail exportieren

Für Compliance-Nachweise:

1. Öffne den Audit-Trail
2. Klicke auf **"Exportieren"**
3. Wähle Format (PDF, Excel)
4. Der Export enthält alle protokollierten Ereignisse

---

## Aufbewahrung und Löschung

### Aufbewahrungsfrist

Dokumente können eine Aufbewahrungsfrist haben:

- Definiert in Jahren
- Beginnt bei Archivierung
- Verhindert vorzeitige Löschung

### Versionen löschen

Einzelne Versionen können nicht gelöscht werden - dies stellt die Integrität des Audit-Trails sicher.

### Dokument endgültig löschen

Nur Administratoren können Dokumente endgültig löschen:

1. Dokument muss archiviert sein
2. Aufbewahrungsfrist muss abgelaufen sein (falls gesetzt)
3. Admin muss Löschung bestätigen

> **⚠️ Wichtig:** Endgültig gelöschte Dokumente und ihre Versionen können nicht wiederhergestellt werden.

---

## Versionierung bei Arbeitskopien

### Eigene Versionierung

Arbeitskopien haben eine eigene Versionshistorie:

- Startet bei v1 (Kopie des Originals)
- Fortlaufende Versionierung während der Bearbeitung
- Bei Freigabe: Verschmelzung mit Original-Historie

### Nach Freigabe der Arbeitskopie

1. Original-Dokument wird archiviert
2. Arbeitskopie wird zum neuen Hauptdokument
3. Beide Historien bleiben erhalten
4. Versionsnummer des Originals wird fortgeführt

---

## Best Practices

### ✅ Aussagekräftige Änderungskommentare

Beim Speichern kannst du einen Kommentar hinzufügen:

- Beschreibe, WAS geändert wurde
- Beschreibe, WARUM es geändert wurde
- Erleichtert späteres Nachvollziehen

**Beispiele:**
- ✅ "Abschnitt 3.2 überarbeitet - neue Prüfschritte ergänzt"
- ❌ "Update" oder "Kleine Änderung"

### ✅ Regelmässige Freigaben

- Führe Dokumente zeitnah durch den Workflow
- Vermindert Anzahl der Entwurfs-Versionen
- Schafft klare Meilensteine in der Historie

### ✅ Revisionsnummern konsistent vergeben

- Etabliere ein Schema für deine Organisation
- Dokumentiere das Schema
- Halte dich konsequent daran

### ✅ Aufbewahrungsfristen setzen

- Definiere für jeden Dokumenttyp eine Frist
- Berücksichtige gesetzliche Anforderungen
- Setze die Frist beim Erstellen oder spätestens bei Archivierung

---

## Häufige Fragen

### Kann ich eine einzelne Version löschen?

Nein, einzelne Versionen können nicht gelöscht werden. Dies gewährleistet die Integrität des Audit-Trails.

### Wie viele Versionen werden gespeichert?

Unbegrenzt viele. Jede Änderung erzeugt eine neue Version, die dauerhaft gespeichert wird.

### Zählt jede kleine Änderung als Version?

Ja, jede Speicherung erstellt eine neue Version. Fasse mehrere Änderungen zusammen, bevor du speicherst.

### Kann ich sehen, wer das Dokument angesehen hat?

Ja, im Audit-Trail werden Zugriffe protokolliert (abhängig von der Systemkonfiguration).

### Was passiert mit Versionen bei Archivierung?

Alle Versionen bleiben erhalten. Archivierung ändert nur den Status, nicht die Historie.

---

## Nächste Schritte

- **[Kapitel 7: Berechtigungen]({{< ref "07-berechtigungen" >}})**: Wer darf was sehen?
- **[Kapitel 10: Best Practices]({{< ref "10-best-practices" >}})**: ISO 9001 Dokumentenlenkung

---

## Zusammenfassung

✅ Du verstehst das Versionierungskonzept
✅ Du kannst die Versionshistorie anzeigen
✅ Du kannst frühere Versionen einsehen und herunterladen
✅ Du kannst Versionen wiederherstellen
✅ Du verstehst den Unterschied zwischen Version und Revision
✅ Du kennst den Audit-Trail und seine Bedeutung
