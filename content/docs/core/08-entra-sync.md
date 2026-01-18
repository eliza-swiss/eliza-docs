---
title: "Microsoft Entra ID Synchronisation"
description: ""
weight: "8"
tags:
  - "entra"
  - "azure-ad"
  - "sync"
  - "integration"
  - "api"
  - "admin"
---


# Microsoft Entra ID Synchronisation

In diesem Kapitel lernst du, wie du Benutzer und Mitarbeitende automatisch aus Microsoft Entra ID (früher Azure AD) mit ELIZA synchronisierst.

## Lernziele

Nach diesem Kapitel kannst du:

- Das Entra ID Sync-Tool einrichten und konfigurieren
- Benutzer und Mitarbeitende automatisch synchronisieren
- Organisationseinheiten-Zuordnungen konfigurieren
- Gruppen-Synchronisation einrichten
- Automatisierte Synchronisations-Jobs planen

---

## Was ist Entra ID Synchronisation?

Die Entra ID Synchronisation ist ein externes Tool, das Benutzerdaten zwischen Microsoft Entra ID (dem Identitätsdienst von Microsoft 365) und ELIZA automatisch abgleicht.

### Vorteile der automatischen Synchronisation

| Ohne Sync | Mit Sync |
|-----------|----------|
| Benutzer manuell anlegen | Automatischer Import aus Entra ID |
| Namen und E-Mails manuell pflegen | Automatische Aktualisierung |
| Mitarbeitende separat erstellen | Automatische Verknüpfung |
| Organisationseinheiten manuell zuweisen | Automatisches Mapping |

### Was wird synchronisiert?

- **Benutzer**: Login-Accounts werden aus Entra ID erstellt/aktualisiert
- **Mitarbeitende**: Personendaten werden automatisch gepflegt
- **Gruppen** (optional): Entra ID Gruppen können als ELIZA-Gruppen übernommen werden
- **Organisationseinheiten** (optional): Automatische Zuordnung basierend auf Firmendaten

---

## Voraussetzungen

### Technische Anforderungen

- **ELIZA-Installation** mit aktiviertem API-Zugang
- **Microsoft 365 Tenant** mit Entra ID (Azure AD)
- **Python 3.10+** mit UV Package Manager
- **Server-Zugriff** für die Ausführung des Sync-Tools

### Benötigte Zugangsdaten

| Information | Woher bekommst du sie? |
|-------------|------------------------|
| **Tenant ID** | Azure Portal - Microsoft Entra ID - Overview |
| **Client ID** | Azure Portal - App Registration - Overview |
| **Client Secret** | Azure Portal - App Registration - Certificates and secrets |
| **ELIZA API Token** | ELIZA - Einstellungen - API Tokens |
| **ELIZA Base URL** | Deine ELIZA-Installation (z.B. https://firma.myeliza.ch) |

### Berechtigungen in Microsoft Entra ID

Die App Registration benötigt folgende **Microsoft Graph API Berechtigungen** (Application-Typ):

| Berechtigung | Typ | Zweck |
|--------------|-----|-------|
| User.Read.All | Application | Benutzer lesen |
| Group.Read.All | Application | Gruppen lesen |
| Directory.Read.All | Application | Verzeichnisdaten lesen |

Diese Berechtigungen muessen vom Azure AD Administrator genehmigt werden (Admin Consent erforderlich).

### Berechtigungen in ELIZA

Der API Token benötigt folgende Berechtigungen:

- User: Lesen, Schreiben
- Mitarbeitende: Lesen, Schreiben
- Groups: Lesen, Schreiben (falls Gruppen-Sync aktiviert)

---

## Einrichtung Schritt für Schritt

### Schritt 1: Azure AD App Registration erstellen

1. Öffne das **Azure Portal** unter portal.azure.com
2. Navigiere zu **Microsoft Entra ID** - **App registrations**
3. Klicke auf **+ New registration**
4. Fülle die Felder aus:
   - **Name**: ELIZA Sync (oder ein anderer beschreibender Name)
   - **Supported account types**: Accounts in this organizational directory only (Single tenant)
   - **Redirect URI**: Leer lassen (nicht benötigt)
5. Klicke auf **Register**
6. **Notiere dir** die folgenden Werte von der Overview-Seite:
   - **Application (client) ID**
   - **Directory (tenant) ID**

### Schritt 2: Client Secret erstellen

1. In der App Registration, gehe zu **Certificates and secrets**
2. Unter **Client secrets**, klicke auf **+ New client secret**
3. Fülle aus:
   - **Description**: ELIZA Sync Secret
   - **Expires**: Wähle eine geeignete Laufzeit (z.B. 24 Monate)
4. Klicke auf **Add**
5. **Wichtig:** Kopiere den **Value** (Secret) sofort und speichere ihn sicher\! Er wird nur einmal angezeigt.

### Schritt 3: API-Berechtigungen konfigurieren

1. Gehe zu **API permissions** in der App Registration
2. Klicke auf **+ Add a permission**
3. Wähle **Microsoft Graph**
4. Wähle **Application permissions** (nicht Delegated\!)
5. Suche und aktiviere:
   - User.Read.All
   - Group.Read.All
   - Directory.Read.All
6. Klicke auf **Add permissions**
7. Klicke auf **Grant admin consent for [Tenant]** (erfordert Admin-Rechte)
8. Bestätige mit **Yes**

Erfolgreich: Alle Berechtigungen sollten nun einen grünen Haken haben.

### Schritt 4: ELIZA API Token erstellen

1. Melde dich in ELIZA als Administrator an
2. Gehe zu **Einstellungen** - **API Tokens**
3. Klicke auf **Neuer Token**
4. Vergib einen Namen: Entra Sync
5. Aktiviere die benötigten Berechtigungen:
   - User (Lesen, Schreiben)
   - Mitarbeitende (Lesen, Schreiben)
   - Groups (Lesen, Schreiben) - falls Gruppen-Sync gewünscht
6. Klicke auf **Speichern**
7. **Kopiere den Token** und speichere ihn sicher

### Schritt 5: Sync-Tool installieren

Navigiere zum Sync-Tool-Verzeichnis und installiere die Abhängigkeiten:

```bash
cd pfad/zu/eliza.tools/entra_sync
uv sync
```

### Schritt 6: Konfigurationsdatei erstellen

1. Kopiere die Beispiel-Konfiguration:

```bash
cp config/entra_sync.yaml.example config/entra_sync.yaml
```

2. Öffne die Datei und trage deine Werte ein:

```yaml
# Microsoft Entra ID Konfiguration
entra:
  tenant_id: "deine-tenant-id"
  client_id: "deine-client-id"
  client_secret: "dein-client-secret"

# ELIZA API Konfiguration
eliza:
  base_url: "https://firma.myeliza.ch"
  api_token: "dein-eliza-api-token"

# Synchronisations-Optionen
sync_options:
  create_users: true
  update_users: true
  create_mitarbeitende: true
  update_mitarbeitende: true
  sync_groups: false
```

---

## Synchronisation durchführen

### Test mit Dry Run (Empfohlen\!)

Führe zuerst einen **Dry Run** durch, um zu sehen was passieren würde:

```bash
uv run python entra_sync.py --config config/entra_sync.yaml --dry-run --verbose
```

Der Dry Run:
- Ändert KEINE Daten in ELIZA
- Zeigt alle geplanten Aktionen an
- Hilft Konfigurationsfehler zu finden

### Erste echte Synchronisation

Wenn der Dry Run erfolgreich war:

```bash
uv run python entra_sync.py --config config/entra_sync.yaml --verbose
```

### Begrenzte Synchronisation (zum Testen)

Synchronisiere nur wenige Benutzer zum Testen:

```bash
uv run python entra_sync.py --config config/entra_sync.yaml --limit-users 5 --verbose
```

### Excel-Export der Entra-Benutzer

Exportiere alle Entra-Benutzer zur Überprüfung:

```bash
uv run python entra_sync.py --config config/entra_sync.yaml --export-excel entra_users.xlsx
```

---

## Command Line Optionen

| Option | Beschreibung | Beispiel |
|--------|--------------|----------|
| --config | Pfad zur Konfigurationsdatei | --config config/entra_sync.yaml |
| --dry-run | Simulation ohne Änderungen | --dry-run |
| --verbose | Detaillierte Ausgabe | --verbose |
| --limit-users | Maximale Anzahl Benutzer | --limit-users 10 |
| --assign-to-group | ELIZA Gruppen-ID für Zuweisung | --assign-to-group 5 |
| --export-excel | Excel-Export der Entra-Benutzer | --export-excel users.xlsx |
| --enable-orgunit-sync | Orgunit-Sync aktivieren | --enable-orgunit-sync |
| --skip-users | Benutzer-Sync überspringen | --skip-users |
| --skip-mitarbeitende | Mitarbeitende-Sync überspringen | --skip-mitarbeitende |

---

## Erweiterte Konfiguration

### Organisationseinheiten-Mapping

Du kannst Entra ID Firmennamen auf ELIZA Organisationseinheiten mappen:

```yaml
orgunit_mapping:
  "Firma AG": 1
  "Firma GmbH": 2
  "Tochtergesellschaft": 3
```

### Feld-Mapping anpassen

Konfiguriere welche Felder synchronisiert werden:

```yaml
field_mapping:
  user:
    username: "userPrincipalName"
    email: "mail"
    first_name: "givenName"
    last_name: "surname"
  mitarbeitende:
    telefon: "mobilePhone"
    position: "jobTitle"
    abteilung: "department"
```

### Filter für Benutzer

Synchronisiere nur bestimmte Benutzer:

```yaml
advanced:
  user_filter: "accountEnabled eq true"
  excluded_domains:
    - "external.firma.ch"
  excluded_users:
    - "admin@firma.ch"
    - "service@firma.ch"
```

---

## Automatisierung mit Cron

Für regelmässige Synchronisation kannst du einen Cron-Job einrichten:

### Beispiel: Tägliche Synchronisation um 2:00 Uhr

```bash
# Crontab bearbeiten
crontab -e

# Eintrag hinzufügen:
0 2 * * * cd /pfad/zu/entra_sync && /usr/bin/uv run python entra_sync.py --config config/entra_sync.yaml >> /var/log/entra_sync.log 2>&1
```

### Beispiel: Alle 4 Stunden

```bash
0 */4 * * * cd /pfad/zu/entra_sync && /usr/bin/uv run python entra_sync.py --config config/entra_sync.yaml >> /var/log/entra_sync.log 2>&1
```

Verwende absolute Pfade im Cron-Job und leite die Ausgabe in eine Log-Datei um.

---

## Troubleshooting

### Häufige Fehler und Lösungen

| Problem | Mögliche Ursache | Lösung |
|---------|------------------|--------|
| 401 Unauthorized (Entra) | Falsche Credentials | Überprüfe Tenant ID, Client ID und Secret |
| 403 Forbidden (Entra) | Fehlende Berechtigungen | Überprüfe API Permissions und Admin Consent |
| 401 Unauthorized (ELIZA) | Ungültiger API Token | Erstelle einen neuen Token in ELIZA |
| Connection timeout | Netzwerkproblem | Überprüfe Firewall und Proxy-Einstellungen |
| Benutzer werden nicht erstellt | create_users: false | Aktiviere Option in der Konfiguration |

### Logs analysieren

Mit --verbose erhältst du detaillierte Informationen:

```bash
uv run python entra_sync.py --config config/entra_sync.yaml --dry-run --verbose 2>&1 | tee sync.log
```

---

## Best Practices

### Empfohlene Vorgehensweise

1. **Immer erst Dry Run** - Teste jede Konfigurationsänderung
2. **Mit wenigen Benutzern starten** - Verwende --limit-users 10
3. **Backup erstellen** - Sichere die ELIZA-Datenbank vor der ersten Sync
4. **Logging aktivieren** - Verwende --verbose und speichere Logs
5. **Schrittweise vorgehen** - Erst Benutzer, dann Mitarbeitende, dann Gruppen
6. **Secrets sicher speichern** - Verwende Environment Variables

### Häufige Fehler vermeiden

- Nie ohne Dry Run in Produktion synchronisieren
- Nie alle Benutzer auf einmal beim ersten Mal synchronisieren
- Secrets nicht in Git committen
- Kein Backup vor grossen Änderungen

---

## FAQ

### Werden Passwörter synchronisiert?

**Nein, niemals.** Die Synchronisation überträgt nur Profildaten wie Namen, E-Mail und Telefonnummern. Passwörter bleiben in Entra ID und werden bei der Anmeldung über OIDC/SAML geprüft.

### Wie oft sollte ich synchronisieren?

**Empfehlung:** Alle 4-6 Stunden für normale Organisationen. Bei häufigen Personaländerungen kann auch stündlich sinnvoll sein.

### Kann ich eine Synchronisation rückgängig machen?

**Nur manuell.** Es gibt keine automatische Rollback-Funktion. Deshalb: Immer erst einen Dry Run durchführen und regelmässig Backups erstellen.

### Was passiert mit deaktivierten Benutzern in Entra ID?

Standardmässig werden nur aktive Benutzer (accountEnabled eq true) synchronisiert. Du kannst dieses Verhalten in der Konfiguration anpassen.

### Kann ich bestimmte Benutzer von der Synchronisation ausschliessen?

Ja, über die excluded_users und excluded_domains Optionen in der erweiterten Konfiguration.

---

## Zusammenfassung

Die Entra ID Synchronisation ermöglicht:

- Automatische Benutzerverwaltung ohne manuellen Aufwand
- Konsistente Daten zwischen Microsoft 365 und ELIZA
- Zeitersparnis bei Onboarding und Offboarding
- Reduzierte Fehlerquote durch Automatisierung

**Nächste Schritte:**
1. Azure App Registration erstellen
2. ELIZA API Token generieren
3. Konfiguration erstellen
4. Dry Run durchführen
5. Erste Synchronisation starten
6. Automatisierung einrichten

---

**Vorheriges Kapitel:** [Allgemeine Einstellungen]({{< ref "07-allgemeine-einstellungen" >}}) | **Zur Übersicht:** [Index]({{< ref "_index" >}})
