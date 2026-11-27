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

> 💡 **Du suchst SSO-Login statt Sync?** Dieses Kapitel beschreibt nur den Hintergrund-**Datenabgleich** (Server-zu-Server mit Application Permissions). Wenn Benutzer sich mit ihrem Microsoft-365-Konto in ELIZA **anmelden** sollen, lies stattdessen [Kapitel 11: Single Sign-On (SSO) mit Microsoft 365 einrichten]({{< ref "11-sso-login" >}}). Beide Integrationen können parallel betrieben werden.

## Lernziele

Nach diesem Kapitel kannst du:

- Das Entra ID Sync-Tool einrichten und konfigurieren
- Festlegen, wer synchronisiert wird
- Organisationseinheiten aus Entra-Gruppen oder Firmendaten zuordnen
- Berechtigungsgruppen, Vorgesetzte und Austrittsdatum aus Entra ID übernehmen
- Austritte und Wiedereintritte automatisch abbilden
- Den Abgleich regelmässig laufen lassen und überwachen

---

## Was ist Entra ID Synchronisation?

Die Entra ID Synchronisation ist ein externes Tool, das Personendaten aus Microsoft Entra ID (dem Identitätsdienst von Microsoft 365) automatisch nach ELIZA überträgt. Die Richtung ist immer **Entra ID → ELIZA**: Das Tool liest in Entra ID nur und ändert dort nichts.

### Vorteile der automatischen Synchronisation

| Ohne Sync | Mit Sync |
|-----------|----------|
| Benutzer manuell anlegen | Automatischer Import aus Entra ID |
| Namen und E-Mails manuell pflegen | Automatische Aktualisierung |
| Mitarbeitende separat erstellen und verknüpfen | Benutzer und Mitarbeitende werden zusammen angelegt und verknüpft |
| Organisationseinheiten manuell zuweisen | Zuordnung aus Entra-Gruppen oder Firmendaten |
| Austritte von Hand nachführen | Konto wird gesperrt, Person als ehemalig markiert |

### Was wird synchronisiert?

- **Benutzer**: Login-Konten werden erstellt und aktualisiert. Benutzername ist der `userPrincipalName` aus Entra ID.
- **Mitarbeitende**: Personendaten (Name, E-Mail, Telefon, Adresse) werden gepflegt und mit dem Benutzer verknüpft.
- **Organisationseinheiten** (optional): Zuordnung der Mitarbeitenden aus Entra-Gruppen oder aus einem Feld wie `companyName`.
- **Berechtigungsgruppen** (optional): Mitglieder bestimmter Entra-Gruppen kommen in die passende benutzerdefinierte Gruppe in ELIZA und damit zu deren Rechten.
- **Gruppe für alle Benutzer** (optional): Jeder synchronisierte Benutzer kommt in eine feste ELIZA-Gruppe, z.B. für Grundrechte.
- **Vorgesetzte Person** (optional): aus dem Manager in Entra ID.
- **Austrittsdatum** (optional): aus dem geplanten Austrittsdatum in Entra ID.
- **Benutzerdefinierte Gruppen** (optional): Entra-Gruppen können als leere benutzerdefinierte Gruppen in ELIZA übernommen werden.

**Nicht synchronisiert** werden Passwörter. Die Anmeldung läuft über ELIZA oder über SSO (Kapitel 11).

### Checkliste: Welche Angaben in Entra ID pflegen?

Der Abgleich kann nur übernehmen, was in Entra ID gepflegt ist. Diese Angaben sind für die Benutzerverwaltung in ELIZA sinnvoll:

| Angabe | Feld in Entra ID | In ELIZA | Nötig? |
|---|---|---|---|
| Vorname, Nachname | `givenName`, `surname` | Benutzer und Mitarbeitende | **Pflicht**, sonst wird das Konto übersprungen |
| E-Mail-Adresse | `mail` | Benutzer, geschäftliche E-Mail | **Pflicht**, sonst wird das Konto übersprungen |
| Benutzername | `userPrincipalName` | Benutzername | **Pflicht** (immer vorhanden) |
| Mitgliedschaft in der ELIZA-Gruppe | Gruppe aus `required_groups` | entscheidet, wer übernommen wird | **Empfohlen** |
| Abteilung | Gruppen mit Präfix (z.B. `O_`) oder `department` | Organisationseinheiten | Empfohlen |
| Berechtigungsgruppe | Gruppen mit Präfix (z.B. `R_`) | Benutzerdefinierte Gruppe mit ihren Rechten | Empfohlen |
| Vorgesetzte Person | Manager | Vorgesetzte Person | Empfohlen, sofern vorhanden |
| Austrittsdatum | `employeeLeaveDateTime` | Austrittsdatum | Empfohlen, sofern vorhanden |
| Telefon | `businessPhones`, `mobilePhone` | Telefon geschäftlich und mobil | Optional |
| Geschäftsadresse | `streetAddress`, `postalCode`, `city`, `usageLocation` | Adresse geschäftlich, Land | Optional |
| Konto aktiv | `accountEnabled` | Deaktiviert → Austritt in ELIZA | wird immer ausgewertet |

Berechtigungsgruppe, Vorgesetzte und Austrittsdatum übernimmt der Abgleich nur, wenn sie in der Konfiguration eingeschaltet sind, siehe [Konfiguration im Detail](#konfiguration-im-detail).

---

## Voraussetzungen

### Technische Anforderungen

- **ELIZA-Installation** mit aktivierter REST API
- **Microsoft 365 Tenant** mit Entra ID
- **Python 3.10+** mit dem Paketmanager UV
- **Server**, auf dem das Sync-Tool regelmässig läuft

### Benötigte Zugangsdaten

| Information | Woher bekommst du sie? |
|-------------|------------------------|
| **Tenant ID** | Azure Portal → Microsoft Entra ID → Overview |
| **Client ID** | Azure Portal → App Registration → Overview |
| **Client Secret** | Azure Portal → App Registration → Certificates and secrets |
| **ELIZA API Token** | ELIZA → Detailseite des technischen Benutzers → Token erstellen |
| **ELIZA Base URL** | Deine ELIZA-Installation (z.B. https://firma.myeliza.ch) |

### Berechtigungen in Microsoft Entra ID

Die App Registration benötigt folgende **Microsoft Graph API Berechtigungen** vom Typ *Application*:

| Berechtigung | Typ | Zweck |
|--------------|-----|-------|
| User.Read.All | Application | Benutzer und ihren Manager lesen |
| Group.Read.All | Application | Gruppen und Gruppenmitglieder lesen |
| User-LifeCycleInfo.Read.All | Application | nur für das Austrittsdatum (`employeeLeaveDateTime`) |

Das Tool schreibt nie in Entra ID. Die Berechtigungen muss ein Administrator des Tenants genehmigen (Admin Consent).

### Berechtigungen in ELIZA

Das Tool meldet sich mit dem API Token eines Benutzers an und hat genau dessen Rechte. Ein Token hat keine eigenen Berechtigungen.

Lege deshalb einen **eigenen technischen Benutzer** an, z.B. `entra.sync`, statt den Token eines Administrators zu verwenden. Im Audit Log steht dann bei jeder Änderung des Abgleichs dieser Benutzer.

Der technische Benutzer braucht folgende Rechte, am einfachsten über eine benutzerdefinierte Gruppe:

| Bereich | Rechte | Wofür |
|---|---|---|
| Benutzer | `core.view_user`, `core.add_user`, `core.change_user` | Benutzer anlegen, aktualisieren, sperren, Gruppen zuweisen |
| Mitarbeitende | `organisation.view_mitarbeitende`, `organisation.add_mitarbeitende`, `organisation.change_mitarbeitende` | Mitarbeitende anlegen und pflegen, Wiedereintritt |
| Organisationseinheiten | `organisation.view_orgunit`, `organisation.add_orgunit`, `organisation.change_orgunit` | nur mit Organisationseinheiten-Sync |
| Zuordnungen | `organisation.view_membership`, `organisation.add_membership`, `organisation.delete_membership` | nur mit Organisationseinheiten-Sync |
| Benutzerdefinierte Gruppen | `core.view_customgroup`, `core.change_customgroup`, `core.add_customgroup` | nur mit Berechtigungsgruppen oder Gruppen-Sync; `add` nur, wenn der Abgleich fehlende Gruppen anlegen soll |

`core.change_user` braucht es auch, damit der Abgleich den Remote Key von Organisationseinheiten setzen darf.

---

## Einrichtung Schritt für Schritt

### Schritt 1: App Registration in Entra ID erstellen

1. Öffne das **Azure Portal** unter portal.azure.com
2. Navigiere zu **Microsoft Entra ID** → **App registrations**
3. Klicke auf **+ New registration**
4. Fülle die Felder aus:
   - **Name**: ELIZA Sync (oder ein anderer beschreibender Name)
   - **Supported account types**: Accounts in this organizational directory only (Single tenant)
   - **Redirect URI**: leer lassen (nicht benötigt)
5. Klicke auf **Register**
6. **Notiere dir** die folgenden Werte von der Overview-Seite:
   - **Application (client) ID**
   - **Directory (tenant) ID**

### Schritt 2: Client Secret erstellen

1. Gehe in der App Registration zu **Certificates and secrets**
2. Klicke unter **Client secrets** auf **+ New client secret**
3. Fülle aus:
   - **Description**: ELIZA Sync Secret
   - **Expires**: Wähle eine geeignete Laufzeit (z.B. 24 Monate)
4. Klicke auf **Add**
5. **Wichtig:** Kopiere den **Value** (Secret) sofort und speichere ihn sicher. Er wird nur einmal angezeigt.
6. **Notiere dir das Ablaufdatum.** Läuft das Secret ab, bricht jeder Abgleich ab. Erstelle rechtzeitig ein neues und ersetze es in der `.env`.

### Schritt 3: API-Berechtigungen konfigurieren

1. Gehe zu **API permissions** in der App Registration
2. Klicke auf **+ Add a permission**
3. Wähle **Microsoft Graph**
4. Wähle **Application permissions** (nicht Delegated!)
5. Suche und aktiviere:
   - User.Read.All
   - Group.Read.All
   - User-LifeCycleInfo.Read.All (nur wenn das Austrittsdatum übernommen werden soll)
6. Klicke auf **Add permissions**
7. Klicke auf **Grant admin consent for [Tenant]** (erfordert Admin-Rechte)
8. Bestätige mit **Yes**

Alle Berechtigungen sollten nun einen grünen Haken haben.

### Schritt 4: Technischen Benutzer und API Token in ELIZA erstellen

1. Melde dich in ELIZA als Administrator an
2. Lege den technischen Benutzer an (z.B. `entra.sync`), siehe [Kapitel 2]({{< ref "02-benutzer-verwalten" >}})
3. Gib ihm die Rechte aus der Tabelle oben, z.B. über eine eigene benutzerdefinierte Gruppe
4. Öffne die Detailseite des Benutzers und klicke beim API Token auf **Token erstellen**
5. **Kopiere den Token sofort.** ELIZA zeigt ihn danach nicht mehr an. Geht er verloren, erzeugst du mit **Neu generieren** einen neuen, der alte wird dabei ungültig.

Eine Übersicht aller Tokens findest du unter **Einstellungen** → **REST API** → **Tokens**.

### Schritt 5: Sync-Tool installieren

Das Tool liegt im Repository `eliza.tools` im Ordner `entra_sync`:

```bash
cd pfad/zu/eliza.tools/entra_sync
uv sync
```

### Schritt 6: Zugangsdaten in der `.env` hinterlegen

Zugangsdaten gehören nicht in die Konfigurationsdatei, sondern in eine `.env` im Ordner `entra_sync`. Sie wird nie ins Git eingecheckt. Schütze sie auf dem Server mit `chmod 600`.

```bash
ENTRA_TENANT_ID=...
ENTRA_CLIENT_ID=...
ENTRA_CLIENT_SECRET=...
ELIZA_BASE_URL=https://firma.myeliza.ch
ELIZA_API_TOKEN=...              # Token des technischen Benutzers
# Optional: jeder synchronisierte Benutzer kommt in diese Gruppe (siehe unten)
ELIZA_DEFAULT_GROUP_ID=...
```

### Schritt 7: Konfigurationsdatei erstellen

1. Kopiere die Beispiel-Konfiguration:

```bash
cp config/entra_sync.yaml.example config/entra_sync.yaml
```

2. Passe die Datei an. Die Zugangsdaten bleiben Platzhalter, das Tool liest sie aus der `.env`:

```yaml
entra:
  tenant_id: ${ENTRA_TENANT_ID}
  client_id: ${ENTRA_CLIENT_ID}
  client_secret: ${ENTRA_CLIENT_SECRET}
  authority: "https://login.microsoftonline.com/${ENTRA_TENANT_ID}"
  graph_url: "https://graph.microsoft.com/v1.0"

  # Graph-Filter: nur interne Konten, keine Gäste
  user_filter: "userType eq 'Member'"

  # Optional: nur Mitglieder dieser Gruppen synchronisieren
  required_groups:
    - "ELIZA-Benutzer"

eliza:
  base_url: ${ELIZA_BASE_URL}
  api_token: ${ELIZA_API_TOKEN}
  endpoints:
    users: "/api/user"
    mitarbeitende: "/api/organisation/mitarbeitende"
    customgroups: "/api/customgroup"
    orgunits: "/api/organisation/orgunit"
    memberships: "/api/organisation/membership"

sync_options:
  create_users: true
  update_users: true
  skip_users_without_email: true
  skip_users_without_names: true
  skip_users_without_department: false
  skip_new_disabled_users: true
  archive_disabled_users: true
  archive_users_not_in_required_groups: true
  reactivate_returning_users: true
  link_user_to_mitarbeitende: true
  sync_austrittsdatum: false
  sync_vorgesetzte: false
  sync_groups: false
```

Die einzelnen Abschnitte sind unten unter [Konfiguration im Detail](#konfiguration-im-detail) beschrieben.

---

## So arbeitet der Abgleich

### Wer wird synchronisiert?

Ein Entra-Benutzer wird nur übernommen, wenn er alle Filter besteht:

1. **Graph-Filter** (`entra.user_filter`): z.B. nur Mitglieder, keine Gäste
2. **Gruppen-Filter** (`entra.required_groups`): nur Mitglieder dieser Gruppen, auch über verschachtelte Gruppen
3. **Domain-Filter** (`domain_filter.include_domains`): nur bestimmte E-Mail-Domains
4. **Ausschlüsse** (`exclusions.exclude_users`): einzelne Konten wie Test- oder Servicekonten
5. **Pflichtangaben**: ohne E-Mail-Adresse oder ohne Vor- und Nachname wird ein Konto übersprungen (abschaltbar)

Mit `required_groups` steuert die IT in Entra ID, wer ELIZA nutzt: Wer in die Gruppe aufgenommen wird, ist beim nächsten Lauf in ELIZA.

### Wie findet der Abgleich bestehende Einträge?

- **Benutzer** über den Benutzernamen (`userPrincipalName`), ohne Rücksicht auf Gross- und Kleinschreibung
- **Mitarbeitende** über die geschäftliche E-Mail-Adresse. Fehlt sie in ELIZA, über den bereits verknüpften Benutzer.
- Neue Mitarbeitende bekommen die Objekt-ID aus Entra ID als **Remote Key**. Daran erkennt der Abgleich später auch ehemalige Mitarbeitende wieder.

Sind Personen schon vor dem ersten Abgleich in ELIZA erfasst, prüfe vorher, ob ihre E-Mail-Adressen mit Entra ID übereinstimmen. Sonst entstehen doppelte Einträge.

### Austritt

Eine Person gilt als ausgetreten, wenn ihr Konto in Entra ID **deaktiviert** wird (`archive_disabled_users`) oder wenn sie aus allen Gruppen in `required_groups` **entfernt** wird (`archive_users_not_in_required_groups`). Der Abgleich:

- sperrt den Benutzer in ELIZA,
- setzt den Mitarbeitenden-Eintrag auf **ehemalig**,
- setzt das Austrittsdatum, falls noch keines eingetragen ist: aus Entra ID, wenn dort gepflegt und `sync_austrittsdatum` eingeschaltet ist, sonst das heutige.

Gelöscht wird nichts, die Historie bleibt erhalten. Beim Entfernen aus den Gruppen sind nur Mitarbeitende betroffen, die aus dem Abgleich stammen (mit Remote Key). Von Hand erfasste Personen bleiben unberührt.

Damit deaktivierte Konten beim Abgleich ankommen, darf der Graph-Filter **nicht** `accountEnabled eq true` enthalten.

### Wiedereintritt

Ist `reactivate_returning_users` eingeschaltet und kommt eine ehemalige Person zurück (Konto wieder aktiv oder wieder in der Gruppe), entsperrt der Abgleich ihren Benutzer und führt den bisherigen Mitarbeitenden-Eintrag wieder als intern, ohne Austrittsdatum. Es entsteht kein zweiter Eintrag.

---

## Synchronisation durchführen

### Test mit Dry Run (empfohlen!)

Führe zuerst einen **Dry Run** durch, um zu sehen, was passieren würde:

```bash
uv run python entra_sync.py --config config/entra_sync.yaml --dry-run --verbose
```

Der Dry Run:
- ändert **keine** Daten in ELIZA,
- zeigt alle geplanten Aktionen im Log an (Zeilen mit «DRY RUN: Würde …»),
- hilft, Konfigurationsfehler zu finden.

Die Statistik am Ende zählt nur tatsächliche Änderungen und zeigt im Dry Run deshalb überall 0. Was angelegt oder geändert würde, siehst du im Log.

### Erste echte Synchronisation

Wenn der Dry Run das erwartete Ergebnis zeigt:

```bash
uv run python entra_sync.py --config config/entra_sync.yaml --verbose
```

### Begrenzte Synchronisation (zum Testen)

```bash
uv run python entra_sync.py --config config/entra_sync.yaml --limit-users 5 --dry-run
```

### Excel-Export der Entra-Benutzer

Exportiert die gefilterten Entra-Benutzer zur Kontrolle, ohne zu synchronisieren:

```bash
uv run python entra_sync.py --config config/entra_sync.yaml --excel-only --excel-output entra_benutzer.xlsx
```

---

## Command Line Optionen

| Option | Beschreibung | Beispiel |
|--------|--------------|----------|
| `--config` | Pfad zur Konfigurationsdatei | `--config config/entra_sync.yaml` |
| `--dry-run` | Simulation ohne Änderungen | `--dry-run` |
| `--verbose` | Detaillierte Ausgabe (Debug-Log) | `--verbose` |
| `--limit-users` | Höchstens so viele Benutzer verarbeiten | `--limit-users 10` |
| `--limit-groups` | Höchstens so viele Gruppen verarbeiten (Gruppen-Sync) | `--limit-groups 5` |
| `--verify-links` | Verknüpfungen Benutzer ↔ Mitarbeitende prüfen | `--verify-links` |
| `--assign-to-group` | Jeden Benutzer dieser Gruppe zuweisen (ID der Django-Gruppe, siehe unten) | `--assign-to-group 42` |
| `--export-excel` | Nach dem Abgleich zusätzlich einen Excel-Export erstellen | `--export-excel` |
| `--excel-output` | Dateiname für den Excel-Export | `--excel-output benutzer.xlsx` |
| `--excel-only` | Nur Excel-Export, keine Synchronisation | `--excel-only` |
| `--enable-orgunit-sync` | Organisationseinheiten-Sync einschalten | `--enable-orgunit-sync` |
| `--disable-orgunit-sync` | Organisationseinheiten-Sync ausschalten | `--disable-orgunit-sync` |
| `--create-missing-orgunits` | Fehlende Organisationseinheiten anlegen | `--create-missing-orgunits` |
| `--no-create-orgunits` | Keine Organisationseinheiten anlegen, nur zuordnen | `--no-create-orgunits` |

Die Optionen für Organisationseinheiten übersteuern die Einstellungen in der Konfigurationsdatei.

---

## Konfiguration im Detail

### Benutzer ausschliessen

```yaml
exclusions:
  # Abgleich über den userPrincipalName, Gross- und Kleinschreibung zählt
  exclude_users:
    - "testkonto@firma.ch"
    - "service@firma.ch"
```

Ausgeschlossene Konten werden weder angelegt noch geändert noch gesperrt. Das eignet sich z.B. für Administratoren, die in ELIZA bleiben sollen, aber nicht in der Gruppe aus `required_groups` sind.

### Nur bestimmte Domains

```yaml
domain_filter:
  include_domains:
    - "@firma.ch"
```

Ohne `include_domains` werden alle Domains übernommen.

### Felder vor Änderungen schützen

```yaml
exclusions:
  # Diese Benutzerfelder überschreibt der Abgleich nie
  protected_fields:
    - "email"
  # Diese Felder der Mitarbeitenden füllt der Abgleich nur, solange sie in ELIZA leer sind
  mitarbeitende_fill_only_fields:
    - "phone_business"
```

### Feld-Mapping

Links steht das Feld in ELIZA, rechts das Feld aus Entra ID:

```yaml
field_mapping:
  user:
    username: "userPrincipalName"
    email: "mail"
    first_name: "givenName"
    last_name: "surname"
    is_active: "accountEnabled"
  mitarbeitende:
    remote_key: "id"
    vorname: "givenName"
    nachname: "surname"
    email_business: "mail"
    street_business: "streetAddress"
    zip_code_business: "postalCode"
    city_business: "city"
    country_business: "usageLocation"
    phone_mobile: "mobilePhone"
    phone_business: "businessPhones[0]"
```

Lass `remote_key: "id"` drin: Austritt und Wiedereintritt brauchen ihn. Felder, die ihr in ELIZA von Hand pflegt (z.B. die Funktion), nimmst du aus dem Mapping heraus.

### Organisationseinheiten aus Entra-Gruppen

Empfohlen, wenn eure Abteilungen in Entra ID als Gruppen abgebildet sind. Jede Gruppe mit dem Präfix wird zu einer Organisationseinheit, jedes Mitglied bekommt eine Zuordnung:

```yaml
orgunit_mapping:
  enabled: true
  source: "groups"
  group_prefix: "O_"
  # Nur nötig, wenn die Einheit in ELIZA anders heisst als die Gruppe ohne Präfix
  group_mapping:
    "O_IT": "Informatik"
  create_missing_orgunits: true
```

- Beim ersten Lauf sucht der Abgleich die Organisationseinheit über den Titel (Gruppenname ohne Präfix oder Eintrag in `group_mapping`). Satzzeichen, Leerzeichen sowie Gross- und Kleinschreibung zählen dabei nicht. Fehlt sie, legt er sie an (`create_missing_orgunits`).
- Danach ist die Einheit über die Objekt-ID der Gruppe (**Remote Key**) verbunden. Den Titel darfst du in ELIZA frei ändern.
- Verlässt eine Person eine Gruppe, entfernt der Abgleich ihre Zuordnung.
- Organisationseinheiten ohne Remote Key, die ihr von Hand pflegt, fasst der Abgleich nicht an.
- Neue Organisationseinheiten legt der Abgleich flach an. Die Hierarchie pflegt ihr in ELIZA.

### Organisationseinheiten aus einem Feld

Alternativ ordnet der Abgleich über ein einzelnes Feld zu, `companyName` oder `department`. Die Zuordnung zeigt auf den **Titel** der Organisationseinheit in ELIZA:

```yaml
orgunit_mapping:
  enabled: true
  source_field: "department"
  # Nur für Werte, die in ELIZA anders heissen
  department_mapping:
    "IT": "Informatik"
  create_missing_orgunits: false
```

Für `source_field: "companyName"` heisst die Liste `company_name_mapping`.

### Berechtigungsgruppen aus Entra-Gruppen

Steuert ihr Rechte in Entra ID über Gruppen, übernimmt der Abgleich die Mitglieder in benutzerdefinierte Gruppen in ELIZA. Jede Entra-Gruppe mit dem Präfix gehört zu einer benutzerdefinierten Gruppe, die Rechte vergebt ihr in ELIZA.

```yaml
permission_groups:
  enabled: true
  group_prefix: "R_"
  # Nur nötig, wenn die Gruppe in ELIZA anders heisst als die Entra-Gruppe ohne Präfix
  group_mapping:
    "R_Lesen": "Alle Mitarbeitenden"
  # Fehlende benutzerdefinierte Gruppen anlegen (ohne Rechte)
  create_missing_groups: false
```

- Beim ersten Lauf sucht der Abgleich die benutzerdefinierte Gruppe über den Titel (Gruppenname ohne Präfix oder Eintrag in `group_mapping`). Danach ist sie über die Objekt-ID der Entra-Gruppe (**Remote Key**) verbunden, den Titel darfst du in ELIZA ändern.
- Wer in die Entra-Gruppe kommt, bekommt die Gruppe in ELIZA. Wer die Entra-Gruppe verlässt, verliert sie.
- Gruppen, die ihr in ELIZA von Hand vergebt, fasst der Abgleich nicht an.
- Fehlt die Gruppe in ELIZA und ist `create_missing_groups` aus, überspringt der Abgleich die Entra-Gruppe und meldet das im Log.

Lege die Gruppen am besten vorher in ELIZA an und vergib ihnen die Rechte. Eine neu angelegte Gruppe hat zunächst keine Rechte.

### Vorgesetzte Person

```yaml
sync_options:
  sync_vorgesetzte: true
```

Der Abgleich setzt bei jeder Person die vorgesetzte Person nach dem **Manager** in Entra ID. Beide müssen aus dem Abgleich stammen (mit Remote Key). Ist in Entra ID kein Manager eingetragen oder ist der Manager nicht in ELIZA, bleibt der Wert in ELIZA unverändert. So gehen von Hand erfasste Vorgesetzte nicht verloren.

Vorgesetzte sehen Lohn und private Daten ihrer Mitarbeitenden. Pflegt den Manager in Entra ID deshalb sorgfältig. Bleiben die Vorgesetzten trotz gepflegtem Manager leer, prüfe die Berechtigungen der App Registration. Die Funktion braucht eine ELIZA-Version, deren API die vorgesetzte Person kennt. Bei älteren Versionen überspringt der Abgleich diesen Schritt mit einer Warnung im Log.

### Austrittsdatum

```yaml
sync_options:
  sync_austrittsdatum: true
```

Der Abgleich übernimmt das Austrittsdatum aus Entra ID (`employeeLeaveDateTime`) ins Austrittsdatum der Mitarbeitenden. Dafür braucht die App Registration zusätzlich die Berechtigung `User-LifeCycleInfo.Read.All`.

- Das Datum wird in Schweizer Zeit umgerechnet.
- Ein in Entra ID gelöschtes Datum entfernt der Abgleich in ELIZA nicht.
- Kommt eine ehemalige Person zurück, bleibt nur ein Austrittsdatum in der Zukunft stehen.
- Ein Austrittsdatum allein sperrt niemanden. Gesperrt wird erst, wenn das Konto deaktiviert oder aus der Gruppe genommen wird.

### Alle Benutzer einer Gruppe zuweisen

Sollen alle synchronisierten Benutzer in eine bestimmte ELIZA-Gruppe, z.B. eine benutzerdefinierte Gruppe mit Leserechten, setze `ELIZA_DEFAULT_GROUP_ID` in der `.env` oder übergib `--assign-to-group`. Das gilt für bestehende und neue Benutzer. Aus anderen Gruppen entfernt der Abgleich niemanden.

> ⚠️ **Achtung:** Erwartet wird die ID der **Django-Gruppe**, nicht die Nummer der benutzerdefinierten Gruppe aus der Oberfläche. Zu jeder benutzerdefinierten Gruppe gehört eine Django-Gruppe mit dem Namen `custom_<Nummer>` und einer eigenen ID. Im Zweifel fragst du den ELIZA-Support.

### Entra-Gruppen als benutzerdefinierte Gruppen

```yaml
sync_options:
  sync_groups: true
  create_groups: true
  update_groups: true

groups_sync:
  include_patterns: ["ELIZA_"]
  exclude_patterns: ["_alt"]
  title_prefix: "Entra: "
```

Übernimmt Entra-Gruppen als benutzerdefinierte Gruppen in ELIZA, aber ohne Mitglieder. Mit `include_patterns` und `exclude_patterns` grenzt du ein, welche Gruppen übernommen werden. Sollen die Mitglieder mitkommen, verwende die [Berechtigungsgruppen](#berechtigungsgruppen-aus-entra-gruppen).

---

## Automatisierung

### Zeitplan

Für einen regelmässigen Abgleich richtest du einen Cron-Job ein, z.B. stündlich:

```bash
# Crontab des Benutzers bearbeiten, unter dem das Tool läuft
crontab -e

# Stündlich zur Minute 50
50 * * * * cd /pfad/zu/entra_sync && /usr/local/bin/uv run --frozen --quiet python entra_sync.py --config config/entra_sync.yaml >> logs/entra_sync.out 2>&1
```

Verwende absolute Pfade. Achte darauf, dass sich zwei Läufe nicht überschneiden, z.B. mit `flock`.

### Überwachung

Das Tool meldet das Ergebnis über den Exit-Code. Darauf kann eine Benachrichtigung reagieren:

| Exit-Code | Bedeutung |
|---|---|
| 0 | Lauf ohne Fehler |
| 1 | Lauf abgebrochen, z.B. Zugangsdaten falsch, Client Secret abgelaufen, Gruppe aus `required_groups` nicht gefunden |
| 2 | Lauf beendet, aber Fehler bei einzelnen Personen (Details im Log) |

Am Ende jedes Laufs steht im Log eine Statistik: erstellte und aktualisierte Benutzer und Mitarbeitende, Wiedereintritte, Zuordnungen und Fehler.

---

## Troubleshooting

### Häufige Fehler und Lösungen

| Problem | Mögliche Ursache | Lösung |
|---------|------------------|--------|
| 401 Unauthorized (Entra) | Falsche Zugangsdaten oder Client Secret abgelaufen | Tenant ID, Client ID und Secret prüfen, ggf. neues Secret erstellen |
| 403 Forbidden (Entra) | Fehlende Berechtigungen | API Permissions und Admin Consent prüfen |
| 401 Unauthorized (ELIZA) | Ungültiger oder neu generierter Token | Token in der `.env` ersetzen |
| 403 Forbidden (ELIZA) | Dem technischen Benutzer fehlt ein Recht | Rechte aus der Tabelle oben prüfen |
| «Gruppe … aus entra.required_groups nicht gefunden» | Gruppenname falsch oder umbenannt | Namen in der Konfiguration an Entra ID anpassen |
| Person wird nicht übernommen | Nicht in der Gruppe, ausgeschlossen, ohne E-Mail oder ohne Namen | Im Log unter «FILTER-ERGEBNISSE» nachsehen, mit `--verbose` steht der Grund pro Person |
| Doppelte Mitarbeitende | E-Mail in ELIZA weicht von Entra ID ab | E-Mail in ELIZA korrigieren, Duplikat löschen |
| Ausgetretene Person bleibt aktiv | Graph-Filter enthält `accountEnabled eq true` | Filter entfernen, `archive_disabled_users: true` |
| Benutzer werden nicht erstellt | `create_users: false` | Option in der Konfiguration einschalten |
| Austrittsdatum bleibt leer oder Fehler 403 nach Einschalten von `sync_austrittsdatum` | Berechtigung `User-LifeCycleInfo.Read.All` fehlt | Berechtigung ergänzen und Admin Consent erteilen |
| Vorgesetzte werden nicht gesetzt | Manager in Entra ID leer, Manager nicht in ELIZA, oder ältere ELIZA-Version | Log prüfen, mit `--verbose` steht der Grund pro Person |
| «Keine benutzerdefinierte Gruppe … in ELIZA» | Gruppe für eine Entra-Berechtigungsgruppe fehlt | Gruppe in ELIZA anlegen oder `group_mapping` ergänzen |

### Logs analysieren

Mit `--verbose` erhältst du den Grund für jede übersprungene Person:

```bash
uv run python entra_sync.py --config config/entra_sync.yaml --dry-run --verbose 2>&1 | tee sync.log
```

---

## Best Practices

### Empfohlene Vorgehensweise

1. **Immer erst Dry Run**: Teste jede Konfigurationsänderung
2. **Bestand prüfen**: Vor dem ersten Lauf E-Mail-Adressen der bestehenden Mitarbeitenden mit Entra ID abgleichen
3. **Backup erstellen**: Sichere die ELIZA-Datenbank vor dem ersten Lauf
4. **Mit wenigen Benutzern starten**: `--limit-users 10`
5. **Eigener technischer Benutzer**: Nie den Token eines Administrators verwenden
6. **Secrets in der `.env`**: Nie in der Konfigurationsdatei und nie im Git
7. **Ablauf des Client Secrets im Kalender eintragen**

### Häufige Fehler vermeiden

- Nie ohne Dry Run in Produktion synchronisieren
- `remote_key` nicht aus dem Feld-Mapping entfernen
- Gruppen aus `required_groups` in Entra ID nicht umbenennen, ohne die Konfiguration anzupassen
- Personen nicht zusätzlich per Excel-Import anlegen: Sie haben keinen Remote Key, und der Abgleich erkennt sie nur über die E-Mail-Adresse

---

## FAQ

### Werden Passwörter synchronisiert?

**Nein, niemals.** Die Synchronisation überträgt nur Profildaten wie Namen, E-Mail und Telefonnummern. Die Anmeldung läuft über ELIZA oder über SSO mit Microsoft 365 (Kapitel 11).

### Wie oft sollte ich synchronisieren?

**Empfehlung:** Stündlich bis alle paar Stunden. Ein Lauf ohne Änderungen verändert in ELIZA nichts, häufige Läufe schaden also nicht.

### Kann ich eine Synchronisation rückgängig machen?

**Nur manuell.** Es gibt keine automatische Rollback-Funktion. Deshalb: Immer erst einen Dry Run durchführen und vor grösseren Änderungen ein Backup erstellen. Alle Änderungen des Abgleichs stehen im Audit Log beim technischen Benutzer.

### Was passiert mit deaktivierten Benutzern in Entra ID?

Ihr ELIZA-Konto wird gesperrt und der Mitarbeitenden-Eintrag als ehemalig markiert (`archive_disabled_users`). Neue Konten, die in Entra ID schon deaktiviert sind, werden gar nicht erst angelegt (`skip_new_disabled_users`).

### Kann ich bestimmte Benutzer von der Synchronisation ausschliessen?

Ja, über `exclusions.exclude_users`. Für ganze Gruppen von Personen eignet sich `entra.required_groups`.

### Was passiert, wenn ich in ELIZA etwas ändere?

Felder aus dem Feld-Mapping überschreibt der nächste Lauf mit den Werten aus Entra ID, ebenso Vorgesetzte und Austrittsdatum, wenn diese eingeschaltet und in Entra ID gepflegt sind. Alles andere, z.B. Funktion, die Hierarchie der Organisationseinheiten, Zuordnungen zu Organisationseinheiten ohne Remote Key und von Hand vergebene Gruppen, bleibt erhalten. Mit `protected_fields` und `mitarbeitende_fill_only_fields` schützt du einzelne Felder.

---

## Zusammenfassung

Die Entra ID Synchronisation ermöglicht:

- Automatische Benutzerverwaltung ohne manuellen Aufwand
- Konsistente Daten zwischen Microsoft 365 und ELIZA
- Automatische Austritte und Wiedereintritte
- Zeitersparnis bei Onboarding und Offboarding

**Nächste Schritte:**
1. App Registration in Entra ID erstellen
2. Technischen Benutzer und API Token in ELIZA erstellen
3. `.env` und Konfiguration erstellen
4. Dry Run durchführen
5. Erste Synchronisation starten
6. Zeitplan und Überwachung einrichten

---

**Vorheriges Kapitel:** [Allgemeine Einstellungen]({{< ref "07-allgemeine-einstellungen" >}}) | **Zur Übersicht:** [Index](./)
