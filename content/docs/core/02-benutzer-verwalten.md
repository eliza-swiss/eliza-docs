---
title: "Benutzer verwalten"
description: ""
weight: "2"
tags:
  - "users"
  - "management"
  - "create"
  - "edit"
  - "onboarding"
---


# Benutzer verwalten

In diesem Kapitel lernst du, wie du Benutzer in ELIZA erstellst, bearbeitest und verwaltest.

## 🎯 Lernziele

Nach diesem Kapitel kannst du:

- Benutzer manuell erstellen und konfigurieren
- Benutzerprofile bearbeiten
- Benutzertypen zuweisen und verstehen
- Benutzer archivieren und reaktivieren
- Benutzer per E-Mail einladen (Onboarding)
- Avatare und Profile verwalten

## Benutzer manuell erstellen

### Schritt-für-Schritt Anleitung

**1. Zur Benutzer-Erstellung navigieren**

- Navigiere zu **Einstellungen** → **Benutzer**
- Klicke oben rechts auf den grünen Button **[+ Benutzer]**
- Das Benutzer-Erstellungsformular öffnet sich

**2. Grundinformationen eingeben**

Das Formular ist in mehrere Abschnitte unterteilt:

#### Persönliche Daten

| Feld | Pflicht | Beschreibung |
|------|---------|--------------|
| **Vorname** | ⚠️ | Vorname des Benutzers (Pflicht wenn als Mitarbeiter:in hinzugefügt) |
| **Nachname** | ⚠️ | Nachname des Benutzers (Pflicht wenn als Mitarbeiter:in hinzugefügt) |
| **Benutzername** | ✅ | Eindeutiger Login-Name (z.B. `max.muster`) |
| **E-Mail** | ❌ | E-Mail-Adresse (optional, aber empfohlen) |
| **Avatar** | ❌ | Profilbild hochladen (optional) |
| **Passwort** | ✅ | Initialespasswort (wird automatisch generiert) |

> **💡 Tipp:** Der Benutzername sollte einheitlich sein, z.B. immer `vorname.nachname` oder `v.nachname`.

> **💡 Tipp:** Das Passwort wird automatisch generiert - du kannst es bei Bedarf ändern.

#### Bemerkung zum Benutzer

| Feld | Beschreibung |
|------|--------------|
| **Bemerkung** | Interne Notiz zum Benutzer (nur für Admins sichtbar, optional) |

Nutze dieses Feld für:
- Interne Hinweise zum Benutzer
- Temporäre Zugangsgründe
- Audit-Informationen

**3. Zugriffsrechte konfigurieren**

Dies ist der wichtigste Abschnitt für die Berechtigungsvergabe:

#### Vorlage verwenden (Optional)

| Feld | Beschreibung |
|------|--------------|
| **Vorlage** | Wähle einen existierenden Benutzer als Vorlage |

> **💡 Tipp:** Wenn du einen Vorlagen-Benutzer auswählst, werden dessen Gruppen und Berechtigungen automatisch auf den neuen Benutzer übertragen. Das spart Zeit bei ähnlichen Benutzern!

**Anwendungsfall:**
- Du hast einen "Standard-Mitarbeiter" mit typischen Gruppen
- Erstelle neue Mitarbeiter mit dieser Vorlage
- Alle Gruppen werden automatisch übernommen

#### Gruppen zuweisen

| Feld | Beschreibung |
|------|--------------|
| **Gruppen** | Wähle eine oder mehrere Systemgruppen aus |

Mindestens erforderlich:
- **`eliza_users`** - Basis-Zugriff auf ELIZA (Pflicht!)

Typische Kombinationen:
- Normaler Mitarbeiter: `eliza_users` + modul-spezifische User-Gruppen
- Administrator: `eliza_users` + `eliza_admin` + modul-spezifische Admin-Gruppen

> **⚠️ Wichtig:** Ohne `eliza_users` Gruppe kann sich der Benutzer **nicht anmelden**!

> **💡 Tipp:** Mehr zu Gruppen und Berechtigungen findest du in [Kapitel 4: Berechtigungskonzept]({{< ref "04-berechtigungen" >}}).

**4. Organisation konfigurieren (Optional)**

Wenn das Organisations-Modul aktiviert ist:

| Feld | Beschreibung |
|------|--------------|
| **Als Mitarbeiter:in hinzufügen** | Checkbox: Erstelle automatisch einen Mitarbeitenden-Eintrag (Standard: aktiviert) |
| **Organisationseinheiten** | Weise den Benutzer Organisationseinheiten zu (z.B. "Vertrieb", "IT") |
| **Funktionen** | Weise Funktionen zu (z.B. "Projektleiter", "Teamleiter") |

> **💡 Tipp:** Wenn "Als Mitarbeiter:in hinzufügen" aktiviert ist, werden Vorname und Nachname zu Pflichtfeldern.

**Vorteile der Mitarbeitenden-Verknüpfung:**
- Automatische Erstellung eines Mitarbeitenden-Profils im Organisations-Modul
- Verknüpfung zwischen Benutzer und Mitarbeitenden-Stammdaten
- Zugriff auf HR-Funktionen (Abwesenheiten, Zeiterfassung, etc.)

**5. Benutzer speichern**

- Überprüfe alle eingegebenen Daten
- Klicke auf den grünen Button **[Speichern]** unten rechts
- Der Benutzer wird erstellt und du wirst zur Benutzer-Detailseite weitergeleitet

### Formular-Übersicht

<pre>
┌────────────────────────────────────────────────────┐
│ Neuen Benutzer erstellen                   [⚙]     │
├────────────────────────────────────────────────────┤
│                                                    │
│ Persönliche Daten:                                 │
│ ┌────────────────────────────────────────────────┐ │
│ │ Vorname:         [________________]            │ │
│ │ Nachname:        [________________]            │ │
│ │ Benutzername:    [________________] (Pflicht)  │ │
│ │ E-Mail:          [________________]            │ │
│ │ Avatar:          [Datei wählen]                │ │
│ │ Passwort:        [Automatisch generiert]       │ │
│ └────────────────────────────────────────────────┘ │
│                                                    │
│ Bemerkung zum Benutzer:                            │
│ ┌────────────────────────────────────────────────┐ │
│ │ Bemerkung:       [____________________]        │ │
│ └────────────────────────────────────────────────┘ │
│                                                    │
│ Zugriffsrechte:                                    │
│ ┌────────────────────────────────────────────────┐ │
│ │ Vorlage:         [Benutzer wählen... ▼]       │ │
│ │ Gruppen:         [Mehrfachauswahl... ▼]       │ │
│ │                  ☑ eliza_users                 │ │
│ │                  ☐ eliza_admin                 │ │
│ │                  ☐ dms_users                   │ │
│ └────────────────────────────────────────────────┘ │
│                                                    │
│ Organisation:                                      │
│ ┌────────────────────────────────────────────────┐ │
│ │ ☑ Als Mitarbeiter:in hinzufügen (Optional)    │ │
│ │ Organisationseinheiten: [Mehrfachauswahl ▼]   │ │
│ │ Funktionen:      [Mehrfachauswahl ▼]          │ │
│ └────────────────────────────────────────────────┘ │
│                                                    │
│                           [Abbrechen] [Speichern] │
└────────────────────────────────────────────────────┘
</pre>

### Häufige Fehler bei der Benutzererstellung

#### Fehler: "Benutzername existiert bereits"

**Problem:** Der eingegebene Benutzername wird bereits verwendet.

**Lösung:**
- Wähle einen anderen Benutzernamen
- ELIZA unterscheidet nicht zwischen Groß- und Kleinschreibung
- Beispiel: `max.muster` und `Max.Muster` sind identisch

#### Fehler: "Vorname/Nachname ist erforderlich"

**Problem:** Checkbox "Als Mitarbeiter:in hinzufügen" ist aktiviert, aber Vor- oder Nachname fehlt.

**Lösung:**
- Fülle Vorname und Nachname aus, ODER
- Deaktiviere die Checkbox "Als Mitarbeiter:in hinzufügen"

#### Warnung: Benutzer kann sich nicht anmelden

**Problem:** Keine Gruppen zugewiesen oder `eliza_users` fehlt.

**Lösung:**
- Weise mindestens die Gruppe `eliza_users` zu
- Überprüfe nach Erstellung die Gruppen-Zuordnung

### Best Practices für Benutzererstellung

**✅ Empfohlener Workflow:**

1. **Vorlage nutzen**: Erstelle "Standard-Benutzer" als Vorlagen für typische Rollen
2. **Einheitliche Benutzernamen**: Definiere eine Konvention (z.B. `vorname.nachname`)
3. **Gruppen sofort zuweisen**: Nicht vergessen - sonst kann sich der Benutzer nicht anmelden
4. **E-Mail-Adresse angeben**: Ermöglicht Passwort-Reset und Benachrichtigungen
5. **Mitarbeitenden-Verknüpfung**: Aktiviere dies für echte Mitarbeiter (nicht für technische Accounts)

**❌ Häufige Fehler vermeiden:**

- ❌ Benutzer ohne Gruppen erstellen
- ❌ Zu viele Admin-Rechte vergeben
- ❌ Inkonsistente Benutzernamen (mal Punkt, mal Unterstrich)
- ❌ Passwort unsicher weitergeben (nutze Passwort-Reset-Link)

## Benutzerprofile bearbeiten

### Benutzer-Detailseite öffnen

1. Navigiere zur **Benutzerliste** (Einstellungen → Benutzer)
2. Klicke auf den **Benutzernamen** des zu bearbeitenden Benutzers
3. Die Benutzer-Detailseite öffnet sich

### Bearbeitbare Bereiche

Die Detailseite ist in mehrere Abschnitte unterteilt:

<pre>
┌────────────────────────────────────────────────────┐
│ Benutzer: max.muster                       [⚙]     │
├────────────────────────────────────────────────────┤
│                                                    │
│ Grundinformationen:                                │
│ - Vorname, Nachname, E-Mail                        │
│ - Benutzername                                     │
│ - Aktiv-Status                                     │
│                                                    │
│ Gruppen und Berechtigungen:                        │
│ - Systemgruppen                                    │
│ - Benutzerdefinierte Gruppen                       │
│ - Benutzertyp                                      │
│                                                    │
│ Zusatzinformationen:                               │
│ - Bemerkung                                        │
│ - Letzte Anmeldung                                 │
│ - Verknüpfungen (Mitarbeitende, etc.)              │
│                                                    │
└────────────────────────────────────────────────────┘
</pre>

### Grundinformationen bearbeiten

**Bearbeitbare Felder:**

- **Vorname** und **Nachname**: Können jederzeit geändert werden
- **E-Mail**: Kann geändert werden (muss eindeutig bleiben)
- **Benutzername**: Kann geändert werden (muss eindeutig bleiben)
- **Aktiv-Status**: Checkbox zum Aktivieren/Deaktivieren

> **⚠️ Wichtig:** Änderungen am Benutzernamen betreffen den Login - informiere den Benutzer!

### Passwort zurücksetzen

**Als Administrator ein neues Passwort setzen:**

1. Öffne die Benutzer-Detailseite
2. Scrolle zum Abschnitt **"Passwort"**
3. Klicke auf **[Passwort ändern]**
4. Gib das neue Passwort zweimal ein
5. Klicke auf **[Speichern]**

**Passwort-Reset-Link senden:**

1. Öffne die Benutzer-Detailseite
2. Klicke auf **[Passwort-Reset-Link senden]**
3. Der Benutzer erhält eine E-Mail mit einem Link zum Zurücksetzen

> **💡 Tipp:** Passwort-Reset-Links sind sicherer als manuelle Passwort-Vergabe.

## Benutzertypen zuweisen

ELIZA kennt verschiedene Benutzertypen, die automatisch basierend auf Gruppen-Mitgliedschaften berechnet werden.

### Benutzertypen im Überblick

| Benutzertyp | Badge | Beschreibung |
|-------------|-------|--------------|
| **Aktiver Benutzer** | Grün | Volle Schreib- und Bearbeitungsrechte in mindestens einem Modul |
| **Lesebenutzer** | Hellblau | Nur Leserechte, keine Bearbeitung möglich |
| **Berater:in** | Lila | Externe Berater mit speziellen, eingeschränkten Rechten |
| **Lesebenutzer und Spaces** | Orange | Leserechte + Zugriff auf spezifische Spaces/Teams |

### Benutzertyp 1: Aktiver Benutzer

**Wer ist ein aktiver Benutzer?**

Ein Benutzer wird als **aktiv** klassifiziert, wenn er mindestens eine der folgenden Gruppen besitzt:

- Jede **Admin-Gruppe** eines Moduls (z.B. "DMS Dokumente (Admin)", "Projekte (Admin)", "CRM & Kontakte (Admin)")
- Gruppe "Benutzer verwalten (Admin)"
- HR-spezifische Admin-Gruppen ("Persönliche Daten von Mitarbeitenden verwalten", "Anstellungsverhältnisse (Admin)")

**Typische Rechte:**
- ✅ Inhalte erstellen, bearbeiten und löschen
- ✅ Andere Benutzer-Inhalte verwalten (je nach Modul)
- ✅ Modul-spezifische Konfigurationen ändern
- ✅ Export- und Auswertungs-Funktionen nutzen

**Typische Rollen:**
- Projekt-Leiter ("Projekte (Admin)")
- Dokument-Manager ("DMS Dokumente (Admin)")
- Vertriebs-Leiter ("CRM & Kontakte (Admin)")
- Team-Leiter (mehrere Modul-Admin-Gruppen)

**Beispiel:**
```
Benutzer: Anna Müller
Gruppen:
  - DMS Dokumente (Admin)
  - Projekte (Lesen und Hinzufügen)

→ Typ: Aktiver Benutzer (wegen DMS Admin-Gruppe)
```

### Benutzertyp 2: Lesebenutzer

**Wer ist ein Lesebenutzer?**

Ein Benutzer wird als **Lesebenutzer** klassifiziert, wenn er:

- Nur Lese-Gruppen besitzt (z.B. "DMS Dokumente (Lesen)", "Projekte (Lesen)")
- KEINE Admin-Gruppen hat
- NICHT in Berater-Gruppen ist

**Typische Rechte:**
- ✅ Inhalte ansehen und lesen
- ❌ Keine Inhalte erstellen oder bearbeiten
- ❌ Keine Konfigurationen ändern
- ✅ Eigenes Profil bearbeiten

**Typische Rollen:**
- Praktikanten mit Lese-Zugriff
- Geschäftsführung mit reinem Informations-Bedarf
- Mitarbeitende in Einarbeitung

**Beispiel:**
```
Benutzer: Thomas Weber
Gruppen:
  - DMS Dokumente (Lesen)
  - Prozesse (Lesen)
  - Organisation (Lesen)

→ Typ: Lesebenutzer (nur Lese-Gruppen)
```

### Benutzertyp 3: Berater:in

**Wer ist ein Berater?**

Ein Benutzer wird als **Berater:in** klassifiziert, wenn er in einer speziellen Berater-Gruppe ist (z.B. für externe Consultants, Auditoren).

**Typische Rechte:**
- ✅ Eingeschränkte Leserechte auf definierte Bereiche
- ✅ Zeitlich begrenzte Zugänge
- ❌ Keine Bearbeitungsrechte
- ❌ Kein Zugriff auf sensible HR-Daten

**Typische Rollen:**
- Externe ISO-Auditoren
- Unternehmensberater
- Temporäre Projekt-Consultants
- Externe QM-Berater

**Beispiel:**
```
Benutzer: Dr. Martin Keller (externer Auditor)
Gruppen:
  - Berater-Gruppe für ISO-Audit
  - Prozesse (Lesen)
  - DMS Dokumente (Lesen)

→ Typ: Berater:in (Berater-Gruppe aktiv)
```

> **⚠️ Hinweis:** Die spezifische Berater-Gruppenkonfiguration kann je nach ELIZA-Installation variieren. Prüfe mit deinem Administrator, welche Gruppen für Berater verwendet werden.

### Benutzertyp 4: Lesebenutzer und Spaces

**Wer ist ein Lesebenutzer mit Spaces?**

Ein Benutzer wird als **Lesebenutzer und Spaces** klassifiziert, wenn er:

- Nur Lese-Gruppen besitzt
- ZUSÄTZLICH Mitglied in Space-/Team-Gruppen ist
- KEINE Admin-Rechte hat

**Typische Rechte:**
- ✅ Inhalte ansehen und lesen
- ✅ An Spaces/Teams teilnehmen
- ✅ In Spaces Inhalte erstellen (je nach Space-Berechtigung)
- ❌ Keine globalen Bearbeitungsrechte

**Typische Rollen:**
- Mitarbeitende mit Lese-Zugriff, die in Team-Spaces aktiv sind
- Teil-Zeit-Mitarbeiter mit eingeschränktem Zugang
- Abteilungs-spezifische Lese-Benutzer

**Beispiel:**
```
Benutzer: Sarah Klein
Gruppen:
  - DMS Dokumente (Lesen)
  - Projekte (Lesen)
  - Spaces (Teilnehmen und Hinzufügen)
  - Space "Marketing Team" (Mitglied)

→ Typ: Lesebenutzer und Spaces (Lese-Gruppen + Space-Zugriff)
```

### Benutzertyp zuweisen

**Automatische Zuweisung:**

1. Öffne die Benutzer-Detailseite
2. Weise die gewünschten **Systemgruppen** zu (siehe Kapitel 5: Systemgruppen-Referenz)
3. Der Benutzertyp wird automatisch berechnet und aktualisiert
4. Badge wird in der Benutzerliste angezeigt

**Manuelle Neu-Berechnung (nur für Superuser):**

1. Navigiere zur Benutzerliste
2. Klicke auf **[Benutzertypen aktualisieren]**
3. Alle Benutzertypen werden für alle Benutzer neu berechnet

> **💡 Tipp:** Die Berechnung erfolgt normalerweise automatisch beim Speichern - manuelle Aktualisierung ist nur bei System-Problemen nötig.

### Entscheidungsbaum: Welcher Typ bin ich?

```
Hat Benutzer eine Admin-Gruppe?
├─ JA → Aktiver Benutzer (Grün)
└─ NEIN
   ├─ Ist Benutzer in Berater-Gruppe?
   │  ├─ JA → Berater:in (Lila)
   │  └─ NEIN
   │     ├─ Hat Benutzer Space-Gruppen?
   │     │  ├─ JA → Lesebenutzer und Spaces (Orange)
   │     │  └─ NEIN → Lesebenutzer (Hellblau)
```

### Häufige Fragen zu Benutzertypen

**Kann ich den Benutzertyp manuell ändern?**

Nein, der Benutzertyp wird automatisch aus den Gruppen-Mitgliedschaften berechnet. Ändere die Gruppen, um den Typ zu ändern.

**Warum ist ein Benutzer "Lesebenutzer", obwohl er Gruppen hat?**

Der Benutzer hat wahrscheinlich nur Lese-Gruppen (z.B. "DMS Dokumente (Lesen)") ohne Admin-Rechte. Füge eine Admin-Gruppe hinzu für "Aktiver Benutzer".

**Was ist der Unterschied zwischen "Lesen" und "Lesen & Spaces"?**

"Lesen & Spaces" haben zusätzlich Zugriff auf Team-Spaces, wo sie aktiv mitarbeiten können, während reine Lesebenutzer nur globale Leserechte haben.

**Wie mache ich einen Lesebenutzer zum aktiven Benutzer?**

Weise dem Benutzer mindestens eine Admin-Gruppe zu (z.B. "Projekte (Admin)", "DMS Dokumente (Admin)"). Der Typ wird automatisch zu "Aktiver Benutzer" aktualisiert.

## Benutzer archivieren und reaktivieren

### Benutzer archivieren (deaktivieren)

**Wann archivieren?**
- Mitarbeiter verlässt das Unternehmen
- Langzeitabwesenheit (Sabbatical, Elternzeit)
- Sicherheitsgründe (verdächtige Aktivität)

**Schritt-für-Schritt:**

1. Navigiere zur **Benutzerliste**
2. Klicke auf den gewünschten Benutzer, um die Detailseite zu öffnen
3. Klicke oben rechts auf das **Archivieren-Icon** (Kasten mit Pfeil nach unten, Tooltip **"Benutzer archivieren"**)
4. Der Benutzer wird sofort archiviert und kann sich nicht mehr anmelden

> **Hinweis:** Das Icon erscheint nur, wenn der Benutzer aktiv ist und es sich nicht um dein eigenes Konto handelt.

> **💡 Tipp:** Archivierte Benutzer bleiben in der Datenbank und können reaktiviert werden.

### Benutzer reaktivieren

**Schritt-für-Schritt:**

1. Navigiere zur **Benutzerliste**
2. Klicke auf den Filter-Button **[Archivierte Benutzer]**
3. Klicke auf den zu reaktivierenden Benutzer, um die Detailseite zu öffnen
4. Klicke im orangen Hinweis **"Dieser Benutzer ist archiviert"** auf **[reaktivieren]**
5. Der Benutzer kann sich sofort wieder anmelden

### Benutzer komplett löschen

> **⚠️ ACHTUNG:** Das Löschen von Benutzern ist **irreversibel** und kann zu Datenverlusten führen!

**Wir empfehlen ausdrücklich, Benutzer zu archivieren statt sie zu löschen.**

Archivieren erreicht dasselbe Ziel — der Benutzer kann sich nicht mehr anmelden — und ist dabei die klar bessere Wahl:

- Der Benutzer bleibt in der Datenbank erhalten und lässt sich jederzeit wieder reaktivieren
- Seine bisherige Arbeit (Dokumente, Meldungen, Prozesse, Zeiterfassung) bleibt korrekt zugeordnet und nachvollziehbar
- Die Nachvollziehbarkeit für Audits und die ISO-Konformität bleibt gewahrt

Beim Löschen gehen diese Verknüpfungen unwiderruflich verloren. Es gibt keine Rückgängig-Funktion und keinen Papierkorb.

**Nur in Ausnahmefällen löschen:**
- Testbenutzer
- Versehentlich erstellte Duplikate
- DSGVO-Löschung auf Anfrage

**Zum Löschen:**

1. Navigiere zur **Benutzerliste**
2. Klicke auf den gewünschten Benutzer, um die Detailseite zu öffnen
3. Klicke oben rechts auf das **Papierkorb-Icon** (Tooltip **"Benutzer löschen"**)
4. Die Bestätigungsseite listet auf, welche verknüpften Objekte mitgelöscht werden — prüfe diese Liste sorgfältig
5. Bestätige mit dem roten Button **[Ja, ich bin sicher]**

> **💡 Tipp:** Sind noch geschützte Objekte mit dem Benutzer verknüpft, ist der Bestätigungs-Button deaktiviert und die Seite zeigt, welche Objekte das Löschen verhindern. Archiviere den Benutzer in diesem Fall.

## Benutzer einladen (Onboarding)

Die Onboarding-Funktion ermöglicht es dir, Benutzer per E-Mail einzuladen und ihnen ein Self-Service-Onboarding anzubieten.

### Voraussetzungen

- Du benötigst die Berechtigung `core.change_user`
- E-Mail-Versand muss in ELIZA konfiguriert sein
- Der Benutzer muss bereits in ELIZA existieren

### Einladung versenden

**Schritt-für-Schritt:**

1. Navigiere zur **Benutzerliste**
2. Klicke oben rechts auf das **Briefumschlag-Icon** ✉
3. Ein Dialog öffnet sich: **"Benutzer einladen"**
4. Wähle einen oder mehrere Benutzer aus
5. Optional: Füge eine persönliche Nachricht hinzu
6. Klicke auf **[Einladung senden]**

**Was passiert?**

Der Benutzer erhält eine E-Mail mit:
- Willkommenstext
- Link zum Passwort setzen
- Link zur ELIZA-Anmeldung
- Optional: Deine persönliche Nachricht

### Onboarding-Status verfolgen

In der Benutzerliste siehst du, ob ein Benutzer die Einladung bereits geöffnet hat:

- **Keine Anmeldung**: Benutzer hat sich noch nie angemeldet
- **Datum angezeigt**: Letzte Anmeldung des Benutzers

> **💡 Tipp:** Nutze die Sortierung nach "Letzte Anmeldung" um Benutzer zu finden, die die Einladung noch nicht angenommen haben.

## Avatare und Profile verwalten

### Profilbilder (Avatare) verstehen

ELIZA unterstützt zwei Arten von Profilbildern:

1. **Automatische Initialen**: Automatisch generiert aus Vor- und Nachnamen
2. **Hochgeladene Avatare**: Vom Benutzer oder Administrator hochgeladen

### Avatare aktualisieren (Superuser)

**Alle Avatare neu laden:**

1. Navigiere zur Benutzerliste
2. Klicke oben rechts auf das **Refresh-Icon** ↻
3. Alle Profilbilder werden neu generiert

> **💡 Tipp:** Nutze diese Funktion nach Namensänderungen um die Initialen zu aktualisieren.

### Benutzer-Verknüpfungen verwalten

Benutzer können mit anderen ELIZA-Objekten verknüpft werden:

**Häufige Verknüpfungen:**
- **Mitarbeitende**: Verknüpfung mit Organisations-Modul
- **Kontakte (CRM)**: Verknüpfung mit CRM-Modul
- **Projekt-Mitglieder**: Verknüpfung mit Projekt-Modul

**Verknüpfung erstellen:**

1. Öffne die Benutzer-Detailseite
2. Scrolle zum Abschnitt **"Verknüpfungen"**
3. Klicke auf **[+ Verknüpfung hinzufügen]**
4. Wähle Modul und Objekt aus
5. Klicke auf **[Speichern]**

## Häufige Aufgaben

### Benutzer duplizieren

ELIZA hat keine direkte Duplikat-Funktion, aber du kannst:

1. Einen neuen Benutzer manuell erstellen
2. Die Gruppen des Original-Benutzers kopieren
3. Gleiche Einstellungen übernehmen

> **💡 Tipp:** Für mehrere ähnliche Benutzer nutze den [Excel-Import (Kapitel 3)]({{< ref "03-benutzer-import" >}}).

### Benutzer zusammenführen

Das Zusammenführen von Benutzern ist nicht direkt möglich. Bei Duplikaten:

1. Entscheide welcher Benutzer behalten wird
2. Übertrage manuell Verknüpfungen und Daten
3. Archiviere oder lösche den Duplikat-Benutzer

### Benutzer exportieren

**Berechtigungen exportieren (Superuser):**

1. Navigiere zur Benutzerliste
2. Klicke auf das **Excel-Icon** 📊
3. Eine Excel-Datei mit allen Berechtigungen wird heruntergeladen

**Enthält:**
- Alle Benutzer
- Zugewiesene Gruppen
- Berechtigungs-Matrix
- Benutzertypen

## Best Practices

### ✅ Empfehlungen

1. **Einheitliche Benutzernamen**
   - Verwende ein konsistentes Schema (z.B. `vorname.nachname`)
   - Vermeide Sonderzeichen und Umlaute
   - Verwende Kleinbuchstaben

2. **Mindest-Berechtigungen zuweisen**
   - Neue Benutzer bekommen nur `eliza_users` Gruppe
   - Erweiterte Rechte nur bei Bedarf vergeben
   - Prinzip der minimalen Rechte befolgen

3. **Onboarding nutzen**
   - Lass Benutzer ihr eigenes Passwort setzen (sicherer)
   - Nutze die Einladungs-Funktion statt manueller Passwort-Vergabe
   - Füge eine persönliche Willkommensnachricht hinzu

4. **Regelmässig aufräumen**
   - Überprüfe monatlich inaktive Benutzer
   - Archiviere ausgeschiedene Mitarbeiter zeitnah
   - Lösche Testbenutzer nach Verwendung

5. **Bemerkungsfeld nutzen**
   - Notiere Besonderheiten (z.B. "Externer Berater bis 31.12.2025")
   - Dokumentiere Änderungen (z.B. "Rechte erweitert am 15.01.2025")
   - Hilfreich für Audits und Nachvollziehbarkeit

### ❌ Häufige Fehler vermeiden

1. **Alle zu Admins machen**
   - Admin-Rechte nur bei echtem Bedarf vergeben
   - Zu viele Admins = Sicherheitsrisiko

2. **Passwörter im Klartext weitergeben**
   - Nutze Passwort-Reset-Links statt E-Mail
   - Kommuniziere Passwörter nie per E-Mail

3. **Benutzer ohne Gruppen erstellen**
   - Benutzer ohne Gruppen können ELIZA nicht nutzen
   - Weise immer mindestens `eliza_users` zu

4. **Benutzernamen inkonsistent**
   - Verwende einheitliches Schema
   - Erleichtert Suche und Administration

5. **Alte Benutzer nicht archivieren**
   - Inaktive Benutzer sind Sicherheitsrisiko
   - Archiviere zeitnah nach Austritt

## Häufige Fragen (FAQ)

### Kann ich Benutzernamen nachträglich ändern?

Ja, aber informiere den Benutzer - sein Login ändert sich!

### Wie setze ich ein vergessenes Passwort zurück?

Nutze die Passwort-Reset-Funktion in der Benutzer-Detailseite oder schicke einen Reset-Link per E-Mail.

### Warum kann sich ein Benutzer nicht anmelden?

**Checkliste prüfen:**
- [ ] Ist der Benutzer **aktiv** (Checkbox gesetzt)?
- [ ] Hat der Benutzer mindestens die Gruppe `eliza_users`?
- [ ] Ist das Passwort korrekt gesetzt?
- [ ] Ist die E-Mail-Adresse verifiziert (falls erforderlich)?

### Wie viele Benutzer kann ich erstellen?

Die Anzahl hängt von deiner ELIZA-Lizenz ab. Kontaktiere deinen Account Manager für Details.

### Kann ich Benutzer aus einem anderen System importieren?

Ja! Siehe [Kapitel 3: Benutzer-Import]({{< ref "03-benutzer-import" >}}) für Excel-Import oder kontaktiere den Support für LDAP/AD-Integration.

## Zusammenfassung

In diesem Kapitel hast du gelernt:

- ✅ Benutzer manuell zu erstellen und zu konfigurieren
- ✅ Benutzerprofile zu bearbeiten und zu verwalten
- ✅ Benutzertypen zuzuweisen und zu verstehen
- ✅ Benutzer zu archivieren und zu reaktivieren
- ✅ Benutzer per E-Mail einzuladen (Onboarding)
- ✅ Avatare und Verknüpfungen zu verwalten
- ✅ Best Practices für die Benutzerverwaltung

## Nächste Schritte

- **[Kapitel 3: Benutzer-Import aus Excel]({{< ref "03-benutzer-import" >}})** - Lerne wie du mehrere Benutzer gleichzeitig importierst
- **[Kapitel 4: Berechtigungskonzept]({{< ref "04-berechtigungen" >}})** - Verstehe Gruppen und Berechtigungen im Detail

---

**← Zurück zu: [Erste Schritte]({{< ref "01-erste-schritte" >}}) | Weiter zu: [Benutzer-Import →]({{< ref "03-benutzer-import" >}})**
