---
title: "KI-Tools verbinden (MCP-Server)"
description: "Claude Code, ChatGPT, Microsoft 365 Copilot und Hermes Agent mit ELIZA verbinden. OAuth-Autorisierung per Browser-Login, Arbeiten mit den eigenen Berechtigungen."
weight: "12"
tags:
  - "mcp"
  - "ki"
  - "claude"
  - "chatgpt"
  - "copilot"
  - "hermes"
  - "oauth"
  - "integration"
icon: "smart_toy"
---


# KI-Tools verbinden (MCP-Server)

ELIZA stellt einen **MCP-Server** (Model Context Protocol) bereit. Damit verbindest du externe KI-Werkzeuge wie **Claude Code**, **ChatGPT**, **Microsoft 365 Copilot** oder den **Hermes Agent** direkt mit deiner ELIZA-Instanz — und kannst zum Beispiel sagen: «Erfasse eine Meldung in ELIZA» oder «Welche Verträge laufen diesen Monat aus?».

Das Wichtigste vorab:

- Du meldest dich **mit deinem normalen ELIZA-Login** an (auch Passkeys oder Single Sign-On funktionieren).
- Das KI-Tool arbeitet **mit deinen Berechtigungen** — es sieht nur, was du auch in ELIZA siehst.
- Du kannst den Zugriff **jederzeit widerrufen**.

## Voraussetzungen

> **⚠️ Wichtig:** Der MCP-Server ist standardmässig deaktiviert. Eine Administratorin oder ein Administrator muss ihn zuerst freischalten.

**Für Administratoren:** Öffne die Systemkonfiguration und aktiviere im Abschnitt **MCP**:

| Einstellung | Wirkung |
|-------------|---------|
| `MCP_HTTP_ENABLED` | Schaltet den MCP-Server (`/mcp`) frei — ohne diese Einstellung sind alle Verbindungen deaktiviert |
| `MCP_HTTP_WRITE_ENABLED` | Erlaubt zusätzlich das **Erstellen und Ändern** von Daten über KI-Tools (optional) |

> **💡 Tipp:** Starte nur mit Lesezugriff (`MCP_HTTP_ENABLED`). Schalte den Schreibzugriff erst frei, wenn dein Team Erfahrung mit den KI-Tools gesammelt hat.

**Für alle Benutzer:** Du brauchst ein aktives ELIZA-Benutzerkonto und eines der unten beschriebenen KI-Tools.

## So funktioniert die Autorisierung

Egal welches Tool du verwendest, der Ablauf ist immer gleich:

<pre>
┌──────────────────────────────────────────────────────────┐
│  1. Tool mit der ELIZA-Adresse verbinden                 │
│     ↓                                                    │
│  2. Browser öffnet sich: Anmeldung mit deinem            │
│     ELIZA-Login (Passwort, Passkey oder SSO)             │
│     ↓                                                    │
│  3. Consent-Bildschirm: Du siehst, welche Zugriffe       │
│     angefragt werden («ELIZA-Daten lesen» und/oder       │
│     «ELIZA-Daten erstellen und ändern»)                  │
│     ↓                                                    │
│  4. «Zugriff gewähren» klicken — fertig!                 │
└──────────────────────────────────────────────────────────┘
</pre>

Danach kann das Tool in deinem Namen mit ELIZA arbeiten, bis du den Zugriff widerrufst.

## Claude Code verbinden

Claude Code ist das KI-Kommandozeilen-Werkzeug von Anthropic.

**Schritt 1: MCP-Server hinzufügen**

Führe im Terminal aus (ersetze die Adresse durch deine ELIZA-Instanz):

```bash
claude mcp add --transport http eliza https://deinefirma.myeliza.ch/mcp
```

**Schritt 2: Autorisieren**

1. Starte Claude Code und gib `/mcp` ein
2. Wähle den Server **eliza** und starte die Authentifizierung
3. Dein Browser öffnet sich: Melde dich in ELIZA an und klicke auf **«Zugriff gewähren»**

**Schritt 3: Ausprobieren**

Stelle Claude Code eine Frage zu deinen ELIZA-Daten:

```text
Welche offenen Meldungen gibt es in ELIZA?
```

## ChatGPT verbinden

ChatGPT unterstützt MCP-Server über sogenannte **Connectors**.

> **⚠️ Wichtig:** Connectors mit eigenen MCP-Servern erfordern in ChatGPT den **Developer Mode** (verfügbar je nach ChatGPT-Abo). Aktiviere ihn in den ChatGPT-Einstellungen unter **Apps & Connectors** → **Advanced Settings**.

**Schritt 1: Connector erstellen**

1. Öffne in ChatGPT die **Einstellungen** → **Apps & Connectors** (bzw. **Connectors**)
2. Klicke auf **«Create»** (Connector erstellen)
3. Gib einen Namen ein (z.B. «ELIZA») und trage als MCP-Server-URL ein:
   `https://deinefirma.myeliza.ch/mcp`
4. Wähle als Authentifizierung **OAuth**

**Schritt 2: Autorisieren**

ChatGPT leitet dich zum ELIZA-Login weiter. Melde dich an und klicke auf **«Zugriff gewähren»**.

**Schritt 3: Ausprobieren**

Aktiviere den Connector in einer Unterhaltung und frage zum Beispiel:

```text
Zeige mir die Kennzahlen aus ELIZA.
```

## Microsoft 365 Copilot verbinden

Microsoft 365 Copilot bindet eigene MCP-Server über einen **Agenten in Microsoft Copilot Studio** ein. Ein Administrator oder eine Person mit Maker-Berechtigung richtet den ELIZA-Agenten einmalig ein und gibt ihn danach für die gewünschten Benutzer oder Gruppen frei. Normale Benutzer müssen die MCP-Adresse nicht selbst konfigurieren.

> **Voraussetzungen:** Für die Einrichtung brauchst du Zugriff auf Microsoft Copilot Studio und die nötigen Berechtigungen in der Power-Platform-Umgebung. Die Benutzer benötigen eine für den veröffentlichten Agenten geeignete Microsoft-365-Copilot-Lizenz. Datenrichtlinien deiner Organisation dürfen die MCP-Verbindung nicht blockieren.

**Schritt 1: Agenten und MCP-Tool einrichten**

1. Erstelle in **Microsoft Copilot Studio** einen Agenten, zum Beispiel «ELIZA Assistent».
2. Öffne beim Agenten **Tools** → **Add a tool** → **New tool** → **Model Context Protocol**.
3. Erfasse einen Namen und eine kurze Beschreibung. Die Beschreibung hilft Copilot zu entscheiden, wann ELIZA verwendet werden soll.
4. Trage als Server-URL ein: `https://deinefirma.myeliza.ch/mcp`
5. Wähle **OAuth 2.0** und danach **Dynamic discovery**.
6. Erstelle die Verbindung. Copilot Studio ermittelt die OAuth-Endpunkte, registriert den Client und liest die verfügbaren ELIZA-Werkzeuge automatisch ein.

**Schritt 2: Verbindung testen**

1. Erstelle im Dialog eine neue Verbindung zum ELIZA-MCP-Server.
2. Melde dich im geöffneten Browserfenster mit deinem ELIZA-Konto an.
3. Prüfe die angeforderten Zugriffe und klicke auf **«Zugriff gewähren»**.
4. Teste den Agenten in Copilot Studio, zum Beispiel mit:

```text
Welche offenen Meldungen gibt es in ELIZA?
```

**Schritt 3: Für Benutzer veröffentlichen**

Veröffentliche den Agenten für **Microsoft 365 Copilot** oder **Microsoft Teams** und gib ihn für die gewünschten Benutzer oder Gruppen frei. Beim ersten Einsatz stellt jede Person ihre eigene ELIZA-Verbindung her und autorisiert sie mit ihrem persönlichen ELIZA-Konto. Dadurch gelten auch in Copilot immer die individuellen ELIZA-Berechtigungen.

> **💡 Tipp:** Starte den Pilotbetrieb mit deaktiviertem Schreibzugriff (`MCP_HTTP_WRITE_ENABLED`). Teste den Agenten mit mindestens zwei Benutzern mit unterschiedlichen ELIZA-Berechtigungen, bevor du Erstellen und Ändern freischaltest.

Die aktuellen Menünamen und Voraussetzungen findest du in der [Microsoft-Anleitung zur Einbindung eines bestehenden MCP-Servers](https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-existing-server-to-agent).

## Hermes Agent verbinden

Der Hermes Agent wird über seine Konfigurationsdatei verbunden.

**Schritt 1: Konfiguration ergänzen**

Trage den ELIZA-MCP-Server in der `config.yaml` von Hermes ein:

```yaml
mcp_servers:
  eliza:
    url: "https://deinefirma.myeliza.ch/mcp"
    auth: oauth
```

**Schritt 2: Autorisieren**

Beim nächsten Start erkennt Hermes den neuen Server und öffnet den Browser für die Autorisierung. Melde dich in ELIZA an und klicke auf **«Zugriff gewähren»**. Hermes speichert die Anmeldung und erneuert sie automatisch.

## Was können die KI-Tools in ELIZA tun?

Nach der Verbindung stehen dem KI-Tool folgende Werkzeuge zur Verfügung:

| Werkzeug | Zugriff | Beschreibung |
|----------|---------|--------------|
| `eliza_api_schema` | Lesen | Zeigt die verfügbaren Datenbereiche und ihre Felder |
| `eliza_api_list` | Lesen | Listet Datensätze mit Filtern und Suche (z.B. Meldungen, Verträge, Kennzahlen) |
| `eliza_api_get` | Lesen | Liest einen einzelnen Datensatz |
| `eliza_api_create` | Schreiben | Erstellt einen neuen Datensatz |
| `eliza_api_update` | Schreiben | Ändert einzelne Felder eines Datensatzes |

**Die Schreib-Werkzeuge erscheinen nur, wenn:**

1. der Schreibzugriff auf der Instanz freigeschaltet ist (`MCP_HTTP_WRITE_ENABLED`), **und**
2. du beim Autorisieren den Zugriff «ELIZA-Daten erstellen und ändern» gewährt hast.

> **💡 Tipp:** Es gelten immer deine persönlichen ELIZA-Berechtigungen. Auch mit Schreibzugriff kann das KI-Tool nur Daten ändern, die du selbst ändern dürftest — und sensible Bereiche wie Benutzerverwaltung, Gehälter oder Personaldossiers sind grundsätzlich ausgeschlossen.

### Beispiel-Anfragen

```text
Welche Datenbereiche stehen in ELIZA zur Verfügung?

Liste die fünf neuesten Meldungen im Meldekreis «Qualität» auf.

Erfasse eine Meldung: Titel «Drucker im 2. Stock defekt»,
Beschreibung «Papierstau lässt sich nicht beheben».

Aktualisiere den Glossareintrag «QMS» mit einer besseren Beschreibung.
```

## Zugriff widerrufen

Du behältst jederzeit die Kontrolle über verbundene KI-Tools:

1. Öffne in deinem Browser: `https://deinefirma.myeliza.ch/oauth/authorized_tokens/`
2. Du siehst alle Anwendungen, denen du Zugriff gewährt hast
3. Klicke bei der gewünschten Anwendung auf **Löschen** — der Zugriff ist sofort beendet

> **⚠️ Wichtig:** Nach dem Widerruf muss sich das KI-Tool neu autorisieren, bevor es wieder auf ELIZA zugreifen kann.

## Best Practices

- ✅ **Mit Lesezugriff starten**: Verbinde dein KI-Tool zuerst nur lesend und aktiviere den Schreibzugriff erst bei Bedarf.
- ✅ **Ergebnisse prüfen**: Kontrolliere erstellte oder geänderte Datensätze in ELIZA — jeder Eintrag ist dort mit deinem Namen im Änderungsprotokoll nachvollziehbar.
- ✅ **Zugriffe aufräumen**: Widerrufe Freigaben für Tools, die du nicht mehr verwendest.
- ❌ **Vermeide** die Freigabe auf fremden Geräten: Autorisiere KI-Tools nur auf Geräten, die du selbst kontrollierst.

## Häufige Fragen (FAQ)

### Warum schlägt die Verbindung mit «404» oder «Nicht gefunden» fehl?

Der MCP-Server ist auf deiner Instanz nicht aktiviert. Bitte deine Administratorin oder deinen Administrator, die Einstellung `MCP_HTTP_ENABLED` einzuschalten.

### Warum sehe ich nur drei Werkzeuge (ohne Erstellen/Ändern)?

Entweder ist der Schreibzugriff auf der Instanz deaktiviert (`MCP_HTTP_WRITE_ENABLED`), oder du hast beim Autorisieren nur den Lesezugriff gewährt. Widerrufe in diesem Fall den Zugriff und verbinde das Tool neu.

### Das KI-Tool meldet «Keine Berechtigung» — woran liegt das?

Das KI-Tool arbeitet mit deinen persönlichen ELIZA-Berechtigungen. Wenn du einen Datenbereich in ELIZA nicht sehen darfst, kann ihn auch das KI-Tool nicht abrufen. Wende dich bei Bedarf an deine Administratorin oder deinen Administrator.

### Sieht das KI-Tool auch Daten anderer Benutzer?

Nein. Jede Verbindung ist an die Person gebunden, die den Zugriff autorisiert hat. Es gelten dieselben Sichtbarkeitsregeln wie beim Arbeiten in ELIZA selbst.

### Was passiert mit meinen Daten beim KI-Anbieter?

Das KI-Tool ruft nur die Daten ab, die für deine konkrete Anfrage nötig sind, und verarbeitet sie gemäss den Bedingungen des jeweiligen Anbieters (Anthropic, OpenAI usw.). Kläre mit deiner Organisation, welche Daten über KI-Tools verarbeitet werden dürfen.

### Kann ich mehrere KI-Tools gleichzeitig verbinden?

Ja. Jedes Tool erhält eine eigene Freigabe, die du einzeln widerrufen kannst.

## Zusammenfassung

- ELIZA stellt unter `/mcp` einen MCP-Server für externe KI-Tools bereit
- Die Autorisierung läuft über deinen normalen ELIZA-Login mit Consent-Bildschirm
- KI-Tools arbeiten immer mit deinen persönlichen Berechtigungen
- Lese- und Schreibzugriff werden getrennt gesteuert (Instanz-Einstellung + Freigabe)
- Unter `/oauth/authorized_tokens/` widerrufst du Zugriffe jederzeit

## Nächste Schritte

- [Authentifizierung]({{< ref "02-authentifizierung" >}}) — API-Tokens für eigene Skripte und Integrationen
- [Endpunkte-Übersicht]({{< ref "04-endpunkte-uebersicht" >}}) — welche Datenbereiche die Schnittstelle abdeckt
- [Best Practices]({{< ref "10-best-practices" >}}) — Empfehlungen für den produktiven Einsatz
