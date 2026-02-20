---
title: "SharePoint-Migration"
description: "Dokumente inkl. Versionshistorie aus SharePoint Document Libraries nach ELIZA DMS migrieren. Schritt-für-Schritt Anleitung mit Azure AD Setup."
weight: "11"
tags:
  - "sharepoint"
  - "migration"
  - "dms"
  - "microsoft"
  - "graph-api"
icon: "cloud_download"
---


# SharePoint-Migration nach ELIZA DMS

Migriere Dokumente inkl. Ordnerstruktur und Versionshistorie aus einer SharePoint Document Library nach ELIZA DMS.

## Übersicht

Das Management Command `import_sharepoint_documents` ermöglicht dir:

- **Vollständiger Import** aller Dokumente aus einer SharePoint Document Library
- **Versionshistorie** übernehmen (alle SharePoint-Versionen werden als ELIZA-Revisionen gespeichert)
- **Ordnerstruktur** beibehalten (SharePoint-Ordner → ELIZA DocumentFolder)
- **Datums-Übernahme** (Erstellungs- und Änderungsdatum aus SharePoint)
- **Idempotenz** (wiederholte Ausführung importiert nur neue/geänderte Dokumente)
- **Dry-Run** Modus zur Vorschau ohne Änderungen

## Voraussetzungen

### 1. Azure AD App Registration

Du benötigst eine Azure AD App Registration mit folgenden **Application Permissions** (nicht Delegated):

| Permission | Beschreibung |
|-----------|-------------|
| `Sites.Read.All` | Zugriff auf SharePoint Sites |
| `Files.Read.All` | Dateien und Versionen lesen |

⚠️ **Wichtig**: Ein Microsoft 365 Administrator muss die **Admin Consent** (Administratorzustimmung) für diese Berechtigungen erteilen.

### 2. Benötigte Zugangsdaten

Nach der App Registration benötigst du drei Werte:

| Wert | Wo zu finden |
|------|-------------|
| **Tenant-ID** | Azure Portal → App Registration → Übersicht → "Verzeichnis-ID (Mandant)" |
| **Client-ID** | Azure Portal → App Registration → Übersicht → "Anwendungs-ID (Client)" |
| **Client-Secret** | Azure Portal → App Registration → Zertifikate & Geheimnisse → Neuer geheimer Clientschlüssel |

💡 **Tipp**: Der Client-Secret Wert wird nur einmal angezeigt! Kopiere ihn sofort nach der Erstellung.

---

## Azure AD einrichten (Schritt für Schritt)

### Schritt 1: App Registration erstellen

1. Öffne das [Azure Portal](https://portal.azure.com)
2. Navigiere zu **Microsoft Entra ID** → **App-Registrierungen**
3. Klicke auf **"+ Neue Registrierung"**
4. Fülle aus:
   - **Name**: `ELIZA SharePoint Migration`
   - **Unterstützte Kontotypen**: "Nur Konten in diesem Organisationsverzeichnis"
   - **Umleitungs-URI**: leer lassen
5. Klicke **"Registrieren"**
6. Notiere dir **Anwendungs-ID (Client)** und **Verzeichnis-ID (Mandant)** von der Übersichtsseite

### Schritt 2: API-Berechtigungen hinzufügen

1. Klicke im linken Menü auf **"API-Berechtigungen"**
2. Klicke auf **"+ Berechtigung hinzufügen"**
3. Wähle **"Microsoft Graph"**
4. Wähle **"Anwendungsberechtigungen"** (nicht "Delegierte Berechtigungen")
5. Suche und aktiviere:
   - `Files.Read.All`
   - `Sites.Read.All`
6. Klicke **"Berechtigungen hinzufügen"**
7. Klicke auf **"Administratorzustimmung für [Organisation] erteilen"**
8. Bestätige den Dialog

✅ Alle Berechtigungen sollten nun ein **grünes Häkchen** unter "Status" zeigen.

### Schritt 3: Client-Secret erstellen

1. Klicke im linken Menü auf **"Zertifikate & Geheimnisse"**
2. Klicke auf **"+ Neuer geheimer Clientschlüssel"**
3. Beschreibung: `ELIZA SharePoint Migration`
4. Ablauf: Wähle einen passenden Zeitraum (z.B. 24 Monate)
5. Klicke **"Hinzufügen"**
6. **Kopiere den "Wert" sofort** – er wird nach dem Verlassen der Seite nicht mehr angezeigt!

---

## Konfiguration

### Option A: Environment-Variablen (empfohlen)

Trage die Zugangsdaten in deine `.env` Datei ein:

```env
SP_SITE_URL=https://firma.sharepoint.com/sites/QMS
SP_TENANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
SP_CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
SP_CLIENT_SECRET=dein-client-secret
```

Falls deine Installation bereits `MS_TENANT_ID`, `MS_CLIENT_ID` und `MS_CLIENT_SECRET` konfiguriert hat und die Azure App die nötigen Permissions besitzt, werden diese automatisch als Fallback verwendet.

### Option B: CLI-Argumente

Alternativ können alle Werte direkt als Argumente übergeben werden:

```bash
uv run python manage.py import_sharepoint_documents \
    --site-url "https://firma.sharepoint.com/sites/QMS" \
    --tenant-id "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" \
    --client-id "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" \
    --client-secret "dein-client-secret"
```

CLI-Argumente haben Vorrang vor Environment-Variablen.

---

## Verwendung

### Dry-Run (Vorschau)

Zeigt an, was importiert würde, ohne Änderungen vorzunehmen:

```bash
uv run python manage.py import_sharepoint_documents --dry-run
```

**Ausgabe:**

```
Verbinde mit SharePoint: https://firma.sharepoint.com/sites/QMS
Verbunden. Site: ..., Drive: ...

Lese SharePoint-Struktur...
Gefunden: 12 Ordner, 245 Dateien

--- DRY-RUN MODUS ---

Ordner:
  📁 /Handbücher
  📁 /Handbücher/QM
  📁 /Formulare

Dokumente (245):
  📄 /Handbücher/QM/QM-Handbuch.docx [2.4 MB] (5 Versionen)
  📄 /Formulare/Checkliste.xlsx [156 KB] (3 Versionen)
  ...

Zusammenfassung:
  Ordner: 12
  Dateien: 245
  Versionen total: 487
  Zielstatus: approved
```

💡 **Tipp**: Führe immer zuerst einen Dry-Run durch, um den Umfang zu prüfen.

### Test-Import (wenige Dokumente)

Importiere nur eine begrenzte Anzahl Dokumente zum Testen:

```bash
uv run python manage.py import_sharepoint_documents --limit 5
```

### Vollständiger Import

Importiere alle Dokumente mit Versionshistorie:

```bash
uv run python manage.py import_sharepoint_documents
```

### Import in einen bestehenden Ordner

Importiere in einen bestimmten ELIZA-Ordner (anhand der Ordner-ID):

```bash
uv run python manage.py import_sharepoint_documents --target-folder-id 42
```

### Nur einen SharePoint-Unterordner importieren

```bash
uv run python manage.py import_sharepoint_documents --folder "/Handbücher/QM"
```

### Import ohne Versionshistorie

Nur die aktuelle Version jedes Dokuments importieren (schneller):

```bash
uv run python manage.py import_sharepoint_documents --skip-versions
```

### Import als Entwurf

Dokumente als "Entwurf" statt "Freigegeben" importieren:

```bash
uv run python manage.py import_sharepoint_documents --state draft
```

---

## Alle Optionen

| Option | Beschreibung | Standard |
|--------|-------------|----------|
| `--site-url` | SharePoint Site-URL | `SP_SITE_URL` aus `.env` |
| `--tenant-id` | Azure AD Tenant-ID | `SP_TENANT_ID` aus `.env` |
| `--client-id` | Azure AD Client-ID | `SP_CLIENT_ID` aus `.env` |
| `--client-secret` | Azure AD Client-Secret | `SP_CLIENT_SECRET` aus `.env` |
| `--drive-id` | SharePoint Drive-ID | Standard Document Library |
| `--folder` | Nur diesen Unterordner importieren | Gesamte Library |
| `--target-folder-id` | ELIZA Ziel-Ordner ID | Ohne Ordner (Root-Level) |
| `--state` | Zielstatus: `approved` oder `draft` | `approved` |
| `--dry-run` | Vorschau ohne Import | – |
| `--skip-versions` | Nur aktuelle Version importieren | – |
| `--limit` | Maximale Anzahl Dokumente | Alle |

---

## Ablauf des Imports

Der Import läuft in zwei Phasen:

### Phase 1: Ordner importieren

- Für jeden SharePoint-Ordner wird ein `DocumentFolder` in ELIZA erstellt
- Die Ordner-Hierarchie (Unterordner) wird beibehalten
- Bereits importierte Ordner (gleiche `remote_key`) werden übersprungen

### Phase 2: Dokumente importieren

Für jedes Dokument:

1. **Idempotenz-Check**: Wurde das Dokument bereits importiert? (Prüfung via `remote_key`)
2. **Versionen abrufen**: Alle SharePoint-Versionen werden chronologisch geladen (älteste zuerst)
3. **Versionen importieren**: Jede Version wird als ELIZA-Revision gespeichert (sichtbar im Tab "Versionen")
4. **Fallback**: Falls Versions-Downloads fehlschlagen, wird die aktuelle Version heruntergeladen
5. **Datum übernehmen**: Erstellungs- und Änderungsdatum aus SharePoint werden übernommen
6. **Status setzen**: Das Dokument erhält den konfigurierten Zielstatus

**Ausgabe während des Imports:**

```
--- Phase 2: Dokumente importieren ---
  ✅ [1/245] /Handbücher/QM/QM-Handbuch.docx (5 Versionen)
  ✅ [2/245] /Formulare/Checkliste.xlsx (3 Versionen)
  🔄 [3/245] /Formulare/Protokoll.docx (1 Versionen)
  ⏭️ [4/245] /Archiv/alt.pdf (0 Versionen)
  ...

--- Import abgeschlossen ---
  Erstellt:     230 Dokumente
  Aktualisiert: 10 Dokumente
  Übersprungen: 5 Dokumente
  Versionen:    487 total
```

| Symbol | Bedeutung |
|--------|----------|
| ✅ | Neues Dokument erstellt |
| 🔄 | Bestehendes Dokument aktualisiert |
| ⏭️ | Dokument übersprungen (bereits aktuell) |
| ❌ | Fehler beim Import |

---

## Wiederholte Ausführung (Inkrementelle Synchronisation)

Der Import ist **idempotent** – du kannst ihn mehrfach ausführen:

- Bereits importierte Dokumente werden anhand des `remote_key` erkannt
- Nur neue oder geänderte Dokumente werden importiert
- Das `remote_last_modification_date` wird verglichen, um unnötige Updates zu vermeiden

```bash
# Erster Import
uv run python manage.py import_sharepoint_documents

# Späterer Import – importiert nur neue/geänderte Dokumente
uv run python manage.py import_sharepoint_documents
```

---

## Fehlerbehebung

### Authentifizierung fehlgeschlagen

```
Fehlende Konfiguration: --site-url / SP_SITE_URL, --tenant-id / SP_TENANT_ID
```

**Lösung**: Prüfe deine `.env` Datei oder übergib die Werte als CLI-Argumente.

### 403 Forbidden

**Lösung**: Prüfe ob die Administratorzustimmung (Admin Consent) im Azure Portal erteilt wurde. Alle Berechtigungen müssen ein grünes Häkchen zeigen.

### 400 Bad Request bei Versions-Download

Einige Dateitypen (z.B. `.eml`) unterstützen keinen Versions-Download über die Graph API. Der Import fällt automatisch auf die aktuelle Version zurück.

### Rate-Limiting (429 Too Many Requests)

Bei sehr grossen Libraries kann die Microsoft Graph API Rate-Limits erreichen. Der Import behandelt dies automatisch mit Wartezeiten und Retries. Bei Problemen:

```bash
# Importiere in kleineren Batches
uv run python manage.py import_sharepoint_documents --limit 100
```

### Spezifische Drive-ID verwenden

Falls die SharePoint Site mehrere Document Libraries hat, wird standardmässig die erste verwendet. Du kannst eine spezifische Library auswählen:

```bash
# Drive-IDs werden beim Verbinden angezeigt:
# "Verfügbare Document Libraries:"
# "  - Documents: b!abc..."
# "  - Archiv: b!xyz..."

uv run python manage.py import_sharepoint_documents --drive-id "b!xyz..."
```

---

## SharePoint Site-URL finden

Die Site-URL ist der Teil **vor** `/Shared Documents/...` oder `/_layouts/...`:

| SharePoint-URL | Site-URL |
|---------------|----------|
| `https://firma.sharepoint.com/sites/QMS/Shared Documents/...` | `https://firma.sharepoint.com/sites/QMS` |
| `https://firma.sharepoint.com/sites/Team/Forms/AllItems.aspx` | `https://firma.sharepoint.com/sites/Team` |
| `https://firma.sharepoint.com/Shared Documents/doc.docx` | `https://firma.sharepoint.com` |

---

## Sicherheitshinweise

- ⚠️ Speichere den **Client-Secret niemals** in Git-Repositories
- ⚠️ Füge `.env` zu `.gitignore` hinzu
- ⚠️ Verwende einen **separaten Client-Secret** pro Umgebung (Entwicklung, Produktion)
- ⚠️ Setze ein **angemessenes Ablaufdatum** für den Client-Secret (z.B. 12-24 Monate)
- 💡 Erneuere den Client-Secret rechtzeitig vor Ablauf

---

## Zusammenfassung

✅ Azure AD App Registration mit `Sites.Read.All` und `Files.Read.All`

✅ Admin Consent erteilen

✅ Zugangsdaten in `.env` konfigurieren

✅ Dry-Run zur Vorschau ausführen

✅ Import starten – Ordner, Dokumente und Versionen werden automatisch übernommen

✅ Wiederholte Ausführung für inkrementelle Synchronisation
