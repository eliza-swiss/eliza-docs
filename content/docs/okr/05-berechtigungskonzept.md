---
title: "Berechtigungskonzept"
description: ""
weight: "5"
tags:
  - "berechtigungen"
  - "rollen"
  - "zugriff"
  - "sicherheit"
  - "admin"
---


# Berechtigungskonzept

In diesem Kapitel lernst du das Berechtigungssystem des OKR-Moduls kennen und verstehst, wie die verschiedenen Rollen und Zugriffsrechte funktionieren.

## Übersicht

Das OKR-Modul verwendet ein mehrstufiges Berechtigungssystem:

<pre>
┌─────────────────────────────────────────────────────────────────┐
│  1. Systemgruppen (ELIZA-Benutzergruppen)                       │
│     ↓                                                           │
│  2. Eigentümer-basierte Berechtigungen (Verantwortliche)        │
│     ↓                                                           │
│  3. Sichtbarkeits-Einstellungen (Normal/Geschützt)              │
│     ↓                                                           │
│  4. Organisationseinheiten-basierter Zugriff                    │
└─────────────────────────────────────────────────────────────────┘
</pre>

## Systemgruppen

ELIZA definiert zwei Hauptgruppen für das OKR-Modul:

### okr_users (Lesezugriff)

Mitglieder dieser Gruppe können:

| Berechtigung | Beschreibung |
|--------------|--------------|
| ✅ Zielsysteme ansehen | Alle normalen Zielsysteme lesen |
| ❌ Zielsysteme erstellen | Keine Berechtigung |
| ❌ Zielsysteme bearbeiten | Keine Berechtigung |
| ❌ Zielsysteme löschen | Keine Berechtigung |

> **Hinweis:** Die Gruppe `okr_users` hat nur Lesezugriff auf Zielsysteme. Perioden, Objectives und Key Results werden über das Zielsystem vererbt.

### okr_admin (Vollzugriff)

Mitglieder dieser Gruppe haben vollständigen Zugriff:

| Objekt | Ansehen | Erstellen | Bearbeiten | Löschen |
|--------|---------|-----------|------------|---------|
| **Zielsystem** | ✅ | ✅ | ✅ | ✅ |
| **Periode** | ✅ | ✅ | ✅ | ✅ |
| **Zielsetzung** | ✅ | ✅ | ✅ | ✅ |
| **Ergebnis** | ✅ | ✅ | ✅ | ✅ |
| **Update** | ✅ | ✅ | ✅ | ✅ |

## Eigentümer-basierte Berechtigungen

Unabhängig von den Systemgruppen haben **Verantwortliche (Owners)** erweiterte Rechte.

### Was ist ein Verantwortlicher?

Verantwortliche sind Benutzer, die im Feld **"Verantwortung"** eines Objekts eingetragen sind.

### Rechte der Verantwortlichen

| Objekt | Verantwortlicher kann |
|--------|----------------------|
| **Zielsystem** | Ansehen, Bearbeiten, Perioden hinzufügen |
| **Periode** | Ansehen, Bearbeiten, Objectives hinzufügen |
| **Zielsetzung** | Ansehen, Bearbeiten, Key Results hinzufügen |
| **Ergebnis** | Ansehen, Bearbeiten, Updates hinzufügen |

> **💡 Wichtig:** Ein Verantwortlicher auf einem Zielsystem hat automatisch Zugriff auf alle untergeordneten Objekte!

### Vererbung der Berechtigungen

Die Berechtigungen vererben sich nach unten:

<pre>
Zielsystem (Owner: Anna)
    │
    ├── Periode 1 (Owner: Anna, erbt von System)
    │       │
    │       └── Objective 1 (Owner: Bruno, plus Zugriff für Anna)
    │               │
    │               └── Key Result 1 (Owner: Clara, plus Zugriff für Anna und Bruno)
    │
    └── Periode 2 (Owner: Daniel, plus Zugriff für Anna)
</pre>

## Sichtbarkeits-Einstellungen

### Normale Sichtbarkeit

Bei Zielsystemen mit **normaler** Sichtbarkeit gilt:

- Alle Benutzer mit `okr.view_system` Berechtigung können das System sehen
- Standard-Berechtigungen greifen

### Geschützte Sichtbarkeit

Bei Zielsystemen mit **geschützter** Sichtbarkeit gilt:

- Nur Verantwortliche können das System sehen
- Oder Mitglieder der zugeordneten Organisationseinheiten
- Oder Benutzer mit Löschberechtigung (`okr.delete_system`)

> **💡 Tipp:** Nutze geschützte Sichtbarkeit für vertrauliche strategische Ziele!

## Organisationseinheiten-basierter Zugriff

Bei geschützten Zielsystemen können Organisationseinheiten zugeordnet werden:

### Funktionsweise

1. Ein geschütztes Zielsystem hat beteiligte Organisationseinheiten
2. Benutzer, die Mitglied einer dieser Organisationseinheiten sind, erhalten Lesezugriff
3. Dies wird über die Gruppenverknüpfung der Organisationseinheit gesteuert

### Beispiel

```
Zielsystem: "Vertrauliche Strategie 2025"
- Sichtbarkeit: geschützt
- Verantwortliche: CEO, CFO
- Beteiligte Organisationseinheiten: Geschäftsleitung, Controlling

→ Alle Mitglieder der Geschäftsleitung und Controlling können das System sehen
```

## Status und Sichtbarkeit

### Zielsetzungen im Entwurf

Objectives im Status **"Entwurf"** sind nur sichtbar für:

- Den/die Verantwortlichen des Objectives
- Benutzer mit Löschberechtigung (`okr.delete_objective`)

### Freigegebene Objekte

Nach der Freigabe gelten die normalen Berechtigungsregeln über das übergeordnete Objekt.

## Berechtigungsmatrix

### Zusammenfassung der Zugriffsrechte

| Rolle | System ansehen | System erstellen | Periode erstellen | Objective erstellen | Key Result erstellen | Update erstellen |
|-------|----------------|-----------------|-------------------|---------------------|---------------------|------------------|
| **okr_users** | ✅¹ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **okr_admin** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **System-Owner** | ✅ | — | ✅ | ✅² | ✅² | ✅² |
| **Perioden-Owner** | ✅² | — | — | ✅ | ✅³ | ✅³ |
| **Objective-Owner** | ✅² | — | — | — | ✅ | ✅⁴ |
| **Key Result-Owner** | ✅² | — | — | — | — | ✅ |

**Legende:**
- ¹ Nur normale Systeme, keine geschützten
- ² Über Vererbung vom übergeordneten Objekt
- ³ Innerhalb der eigenen Periode/des eigenen Objectives
- ⁴ Für die eigenen Key Results

## Typische Szenarien

### Szenario 1: Unternehmensweites OKR

**Setup:**
- Ein Zielsystem für das gesamte Unternehmen
- Sichtbarkeit: normal
- Alle Mitarbeiter in Gruppe `okr_users`
- Führungskräfte in Gruppe `okr_admin`

**Ergebnis:**
- Alle können Ziele sehen
- Nur Führungskräfte können erstellen/bearbeiten

### Szenario 2: Abteilungsspezifische OKRs

**Setup:**
- Separate Zielsysteme pro Abteilung
- Sichtbarkeit: geschützt
- Abteilungsleiter als Verantwortliche
- Abteilung als beteiligte Organisationseinheit

**Ergebnis:**
- Nur Abteilungsmitglieder sehen ihre Ziele
- Abteilungsleiter können bearbeiten

### Szenario 3: Team-Level OKRs

**Setup:**
- Objectives/Key Results mit Team-Mitgliedern als Verantwortliche
- Jedes Team-Mitglied pflegt seine eigenen Key Results

**Ergebnis:**
- Jeder sieht alle Ziele (normale Sichtbarkeit)
- Jeder aktualisiert seine eigenen Key Results

## Berechtigungen prüfen

### Als Benutzer

Du kannst deine Berechtigungen überprüfen durch:

1. **Menü prüfen**: Wenn du "OKR" im Menü siehst, hast du Lesezugriff
2. **Aktionsbuttons**: Wenn du "Bearbeiten" oder "Löschen" siehst, hast du erweiterte Rechte
3. **Hinzufügen-Buttons**: Grüne Buttons zeigen Erstellungsrechte

### Als Administrator

Administratoren können Gruppenmitgliedschaften im Benutzer-Management prüfen und anpassen.

## Tipps für Administratoren

### ✅ Empfehlungen

- **Minimal-Prinzip**: Vergib nur notwendige Berechtigungen
- **Verantwortliche nutzen**: Statt breite Admin-Rechte zu vergeben
- **Geschützt für Sensibles**: Nutze geschützte Sichtbarkeit für vertrauliche Ziele
- **Regelmässige Prüfung**: Überprüfe Gruppenmitgliedschaften periodisch

### ❌ Zu vermeiden

- Alle Benutzer in `okr_admin` aufnehmen
- Keine Verantwortlichen zuweisen
- Geschützte Systeme ohne Organisationseinheiten

## Häufige Fragen

### Warum sehe ich ein Zielsystem nicht?

Mögliche Gründe:
1. Du bist nicht in der Gruppe `okr_users` oder `okr_admin`
2. Das System ist geschützt und du bist nicht Verantwortlicher oder Mitglied der Organisationseinheit
3. Das System wurde gelöscht

### Warum kann ich nichts bearbeiten?

Mögliche Gründe:
1. Du bist nicht in der Gruppe `okr_admin`
2. Du bist nicht als Verantwortlicher eingetragen
3. Das Objekt gehört zu einem geschützten System, auf das du keinen Zugriff hast

### Wie werde ich Verantwortlicher?

Ein bestehender Verantwortlicher oder Administrator kann dich im Feld "Verantwortung" hinzufügen.

### Kann ich meine eigenen Updates bearbeiten?

Ja, wenn du die entsprechende Berechtigung auf das Key Result hast (als Owner oder über Gruppen).

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Die zwei Systemgruppen (`okr_admin`, `okr_users`) und ihre Rechte
- ✅ Wie Eigentümer-basierte Berechtigungen funktionieren
- ✅ Den Unterschied zwischen normaler und geschützter Sichtbarkeit
- ✅ Wie Organisationseinheiten den Zugriff steuern
- ✅ Typische Szenarien für die Berechtigungskonfiguration

---

**Du hast das OKR Benutzerhandbuch abgeschlossen!** 🎉

Zurück zur [Übersicht](../index/)
