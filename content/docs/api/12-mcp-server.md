---
title: "KI-Tools verbinden (MCP-Server)"
description: "Microsoft 365 Copilot, Claude, ChatGPT, Claude Code und Hermes Agent mit ELIZA verbinden. Admins steuern auf «KI-Verbindungen», welche Tools sich verbinden dürfen. Anmeldung per Browser-Login, Arbeiten mit den eigenen Berechtigungen."
weight: "12"
tags:
  - "mcp"
  - "ki"
  - "claude"
  - "claude-code"
  - "chatgpt"
  - "copilot"
  - "hermes"
  - "oauth"
  - "ki-verbindungen"
  - "sperren"
  - "integration"
icon: "smart_toy"
---


# KI-Tools verbinden (MCP-Server)

ELIZA stellt einen **MCP-Server** (Model Context Protocol) bereit. Damit verbindest du KI-Werkzeuge direkt mit deiner ELIZA-Instanz und kannst zum Beispiel sagen: «Erfasse eine Meldung in ELIZA» oder «Welche Verträge laufen diesen Monat aus?».

Diese Tools kannst du verbinden:

- **Microsoft 365 Copilot**: Ein Admin richtet den ELIZA-Agenten einmal für alle ein.
- **Claude**: claude.ai im Browser und die Claude-App.
- **ChatGPT**: chatgpt.com im Browser.
- **Claude Code und andere lokale Tools**: Programme, die sich über deinen eigenen Rechner anmelden, zum Beispiel Claude Code mit einem Server aus `claude mcp add` oder der Hermes Agent.

Das Wichtigste vorab:

- Du meldest dich **mit deinem normalen ELIZA-Login** an (auch Passkeys oder Single Sign-On funktionieren).
- Das KI-Tool arbeitet **mit deinen Berechtigungen**: Es sieht nur, was du auch in ELIZA siehst.
- Die Tools sind so eingerichtet, dass sie dir vor dem Erfassen oder Ändern **zeigen, was sie speichern wollen**, und auf dein Ja warten. Das ist eine Anweisung an das Tool, keine Sperre in ELIZA. Was ein KI-Tool überhaupt speichern darf, begrenzt dagegen ELIZA selbst (siehe [Was die KI-Tools speichern können](#was-die-ki-tools-speichern-konnen)).
- Du kannst den Zugriff **jederzeit widerrufen**. Admins können zudem einzelne KI-Tools abschalten und einzelne Personen sperren.

**Wo fange ich an?**

- Du verwaltest ELIZA oder die IT: Lies [Voraussetzungen](#voraussetzungen), [Für Admins: Seite «KI-Verbindungen»](#fur-admins-seite-ki-verbindungen) und [Microsoft 365 Copilot einrichten](#microsoft-365-copilot-einrichten).
- Du willst selbst ein Tool verbinden: Springe zu [Claude verbinden](#claude-verbinden), [ChatGPT verbinden](#chatgpt-verbinden) oder [Claude Code und andere lokale Tools](#claude-code-und-andere-lokale-tools).

## Voraussetzungen

> **⚠️ Wichtig:** Der MCP-Server ist ein **kostenpflichtiges Zusatzmodul** und standardmässig ausgeschaltet. **ELIZA schaltet ihn für deine Instanz frei**, sobald ihr ihn erworben habt. Ein Angebot erhältst du über `hello@eliza.swiss`. Auch Administratorinnen und Administratoren bei dir können ihn nicht selbst einschalten.

ELIZA schaltet zwei Dinge getrennt frei:

- **MCP-Server:** Ohne ihn ist jede Verbindung ausgeschaltet. Mit ihm erscheint für Admins die Seite «KI-Verbindungen».
- **Schreiben (optional):** Erst damit dürfen KI-Tools Daten erfassen und ändern (welche, steht unter [Was die KI-Tools speichern können](#was-die-ki-tools-speichern-konnen)). Ohne Schreiben können sie nur lesen.

Für Microsoft 365 Copilot braucht es zusätzlich zum MCP-Server den **Microsoft 365 Agent** von ELIZA. Auch er ist kostenpflichtig; ein Angebot erhältst du über `hello@eliza.swiss` (siehe [Microsoft 365 Copilot einrichten](#microsoft-365-copilot-einrichten)).

> **💡 Tipp:** Starte nur mit Lesezugriff. Bitte den ELIZA-Support erst um das Schreiben, wenn dein Team Erfahrung mit den KI-Tools gesammelt hat.

**Für alle Benutzer:** Du brauchst ein aktives ELIZA-Benutzerkonto und eines der unten beschriebenen KI-Tools.

## So funktioniert die Autorisierung

Egal welches Tool du verwendest, der Ablauf ist immer gleich:

<pre>
┌────────────────────────────────────────────────────────────┐
│  1. Tool mit der ELIZA-Adresse verbinden                   │
│     ↓                                                      │
│  2. Browser öffnet sich: Anmeldung mit deinem              │
│     ELIZA-Login (Passwort, Passkey oder SSO)               │
│     ↓                                                      │
│  3. Bildschirm «Zugriff autorisieren»: Du siehst, welche   │
│     Zugriffe angefragt werden («ELIZA-Daten über MCP       │
│     lesen» und/oder «ELIZA-Daten über MCP erstellen        │
│     und ändern»)                                           │
│     ↓                                                      │
│  4. «Zugriff gewähren» klicken, fertig!                    │
└────────────────────────────────────────────────────────────┘
</pre>

Die Adresse deiner Instanz findest du in deinem Profil unter **Verbundene Apps**. Dort steht auch, welche Tools du verbinden kannst. Hat deine Administration Microsoft 365 Copilot eingerichtet, steht dort auch seine Karte; verbinden musst du Copilot nicht, und mit **«In Copilot öffnen»** öffnest du den Agenten «ELIZA» direkt, sobald deine Administration den Link dazu eingetragen hat. Ist ein Tool schon verbunden, zeigt seine Karte «Verbunden» und statt «Verbinden» die Links **«Anleitung anzeigen»**, **«Verbindungen anzeigen»** und **«Trennen»**. «Verbindungen anzeigen» listet jede Anmeldung des Tools mit Datum und Uhrzeit; **«Abmelden»** beendet nur diese eine, die anderen bleiben. Auf welchem Gerät du dich angemeldet hast, sieht ELIZA nicht: Bei claude.ai und ChatGPT meldet sich der Server des Anbieters an, nicht dein Browser oder deine App. «Trennen» fragt in einem Fenster nach und beendet den Zugriff des Tools auf dein ELIZA-Konto auf allen Geräten.

Danach kann das Tool in deinem Namen mit ELIZA arbeiten, bis du den Zugriff widerrufst, ein Admin dich für das Tool sperrt oder das Tool abschaltet. In den beiden letzten Fällen zeigt ELIZA stattdessen eine Meldung (siehe [FAQ](#ich-sehe-die-meldung-dass-ich-fur-ein-tool-gesperrt-bin-was-tun)).

## Für Admins: Seite «KI-Verbindungen»

Auf dieser Seite legst du fest, welche KI-Tools sich mit ELIZA verbinden dürfen, siehst, wer verbunden ist, und richtest Microsoft 365 Copilot ein.

Du findest sie in den **ELIZA Einstellungen** auf der Kachel **KI-Verbindungen** («Verbindet Microsoft 365 Copilot mit ELIZA und legt fest, welche KI-Tools sich verbinden dürfen.»). Klicke dort auf **«Konfigurieren»**. Die Kachel sehen alle, die Benutzer verwalten dürfen, sobald ELIZA den MCP-Server freigeschaltet hat. Ohne das Recht oder bei ausgeschaltetem MCP-Server erscheint sie nicht.

Im Bereich **«KI-Verbindungen»** unter den KI-Tools steht die **Adresse für KI-Tools** mit dem Knopf **«Kopieren»**. Gib sie an alle weiter, die Claude, ChatGPT oder Programme auf dem eigenen Rechner wie Claude Code verbinden. Copilot braucht sie nicht.

Die Seite hat vier Bereiche: «KI-Tools», «KI-Verbindungen», «Verbundene Personen» und «Microsoft 365 Copilot».

### KI-Tools ein- und abschalten

Im Bereich **«KI-Tools»** steht jedes Tool als Karte. Oben links steht der Zustand («Aktiv» oder «Abgeschaltet»), über dem Knopf die Zahl der verbundenen Personen. **«Verbinden»** öffnet eine kurze Anleitung für das Tool, bei Claude, ChatGPT und Programmen auf dem eigenen Rechner mit der Adresse zum Kopieren. Mit dem Link unter dem Knopf schaltest du das Tool ab («… abschalten») oder wieder ein («… aktivieren»). ELIZA fragt jeweils vorher nach und nennt beim Abschalten, wie viele Personen betroffen sind. Solange ein Tool abgeschaltet ist, ist «Verbinden» gesperrt. Standardmässig sind alle vier Tools aktiv.

| Tool | Wofür der Schalter gilt |
|------|-------------------------|
| **Microsoft 365 Copilot** | Die Verbindungen, die du weiter unten anlegst |
| **Claude** | claude.ai im Browser und die Claude-App, auch Claude Code mit dem Konnektor aus claude.ai. Ein Server, den du in Claude Code mit `claude mcp add` hinzufügst, gehört zu «Programme auf dem eigenen Rechner» |
| **ChatGPT** | chatgpt.com im Browser und die ChatGPT-App |
| **Programme auf dem eigenen Rechner** | Programme, die sich über den eigenen Rechner anmelden, zum Beispiel Claude Code mit einem Server aus `claude mcp add`, der Hermes Agent oder VS Code |

Ein abgeschaltetes Tool kann sich nicht mehr verbinden, und bestehende Verbindungen hören sofort auf zu arbeiten. Die Personen sehen beim Verbinden eine Meldung, dass das Tool abgeschaltet ist, oder eine ähnliche Fehlermeldung im KI-Tool (siehe [FAQ](#das-tool-ist-abgeschaltet-was-kann-ich-tun)).

### Verbundene Personen

Der Bereich **«Verbundene Personen»** zeigt, wer sich mit welchem Tool verbunden hat. Pro Person und Tool gibt es eine Zeile mit diesen Angaben:

- **Person** und **Tool**
- **Rechte**: «Lesen» oder «Lesen und Schreiben»
- **Verbunden seit**
- **Status**: «Verbunden» oder «Gesperrt»

Über das Suchfeld «Person oder Tool suchen» findest du eine Zeile schnell. Der Umschalter über der Tabelle zeigt nur die Personen eines Tools; dasselbe erreichst du mit einem Klick auf «… Personen verbunden» in der Karte des Tools. Die Zahlen im Umschalter zählen wie die Karten nur verbundene Personen; gesperrte Personen stehen trotzdem in der Tabelle. Hat sich noch niemand verbunden, steht dort «Noch niemand verbunden».

### Personen sperren und Sperre aufheben

Mit **«Sperren»** in der Zeile einer Person sperrst du sie für dieses eine Tool. ELIZA fragt zuerst in einem Fenster nach: «<Name> wird für <Tool> gesperrt und sofort abgemeldet. Die Sperre gilt, bis du sie aufhebst.»

- **Wirkung:** Gesperrte Personen können sich mit diesem Tool nicht mehr verbinden. Andere Tools bleiben für sie offen, ausser ein Programm meldet sich für mehrere Tools zugleich an. Dann ist es ganz gesperrt.
- **Die Person** sieht beim Verbinden die Meldung «Du bist für das Tool «<Tool>» gesperrt. Wende dich an die Person, die ELIZA bei euch verwaltet.»
- **Sperre aufheben:** Mit **«Sperre aufheben»** in derselben Zeile kann die Person das Tool wieder verbinden. Sie muss es neu verbinden, weil die Sperre ihre bisherige Anmeldung beendet hat.

### Copilot-Verbindungen

Der Bereich **«Microsoft 365 Copilot»** zeigt jede Verbindung als Karte: wann und von wem sie angelegt wurde, ihre Rechte und den Stand der Einrichtung. «Einrichtung offen» heisst, die Registration ID fehlt noch; **«Einrichtung fortsetzen»** führt zur Detailseite. «Bereit» heisst, die Registration ID ist eingetragen; **«Microsoft 365 Agent herunterladen»** lädt den Agenten für Microsoft 365. Ist der Link zum Agenten eingetragen (Schritt 4), ist auch «In Microsoft 365 hochladen» erledigt: Microsoft vergibt die Kennung im Link erst beim Hochladen. Die Karte führt dann mit **«In Copilot öffnen»** zum Agenten. Ist das Tool «Microsoft 365 Copilot» abgeschaltet, zeigt eine eingerichtete Verbindung «Abgeschaltet» statt «Bereit». **«Details öffnen»** führt immer zur Detailseite, die Kachel **«Copilot-Verbindung anlegen»** legt eine neue an. Die Einrichtung beschreibt der nächste Abschnitt.

## Microsoft 365 Copilot einrichten

Microsoft 365 Copilot bindet ELIZA über einen **Agenten** ein. Den Agenten lädst du in ELIZA als ZIP-Datei herunter und in Microsoft 365 hoch. Du richtest ihn einmal ein und stellst ihn danach den gewünschten Personen bereit. Jede Person meldet sich anschliessend selbst mit ihrem ELIZA-Konto an.

**Das brauchst du:**

- den Microsoft 365 Agent von ELIZA: Er ist kostenpflichtig und kommt zum MCP-Server dazu; ein Angebot erhältst du über `hello@eliza.swiss`
- das Recht, in ELIZA Benutzer zu verwalten (für die Seite «KI-Verbindungen»)
- Zugriff auf das [Teams Developer Portal](https://dev.teams.microsoft.com/tools)
- Zugriff auf [admin.microsoft.com](https://admin.microsoft.com) mit Administratorrechten für Microsoft 365
- für die Personen eine für den Agenten geeignete Microsoft-365-Copilot-Lizenz
- das Tool «Microsoft 365 Copilot» auf «KI-Verbindungen» im Zustand «Aktiv»

Klicke auf der Seite «KI-Verbindungen» im Bereich «Microsoft 365 Copilot» auf **«Copilot-Verbindung anlegen»**. ELIZA öffnet die Detailseite der neuen Verbindung. Oben steht derselbe Fortschritt wie auf der Karte: **«Registration ID»** und **«In Microsoft 365 hochladen»**. Darunter zeigt die Seite immer einen Schritt, beim Öffnen den, der gerade ansteht. Mit einem Klick auf einen Schritt im Fortschrittsbalken wechselst du zu ihm, zum Beispiel um die Werte für das Portal nachzuschlagen.

> **⚠️ Wichtig:** Ob eine Verbindung schreiben darf, steht beim Anlegen fest. Verbindungen, die vor dem Einschalten von Schreiben angelegt wurden, können nur lesen. Lege für Schreiben eine neue an.

**Schritt 1: Im Teams Developer Portal registrieren («Registration ID»)**

Direkt nach dem Anlegen zeigt ELIZA in diesem Schritt unter «OAuth-Einstellungen» das **Geheimnis** der Verbindung an, neben der Client-ID. Kopiere es jetzt ins Portal: Es wird danach nicht mehr angezeigt. Das Geheimnis erscheint nur nach dem Anlegen und nach «Neues Geheimnis erzeugen».

Öffne mit **«Teams Developer Portal öffnen»** das Portal, wähle «OAuth-Clientregistrierung» und lege eine neue Registrierung mit den Werten von der Detailseite an. ELIZA nennt die Felder so wie das Portal und in derselben Reihenfolge: auf Deutsch, wenn du ELIZA auf Deutsch nutzt, sonst mit den englischen Namen des Portals (in Klammern unten).

Unter **«App-Einstellungen»**:

| Feld im Portal | Wert oder Einstellung |
|----------------|-----------------------|
| Registrierungsname (Registration name) | Wert von ELIZA |
| Basis-URL (Base URL) | Wert von ELIZA |
| Verwendung nach Organisation einschränken (Restrict usage by org) | Nur meine Organisation (My organization only) |
| Nutzung durch die Teams-App einschränken (Restrict usage by app) | **Jede Teams-App (nur zum Testen und zur Überprüfung des Stores)** (Any Teams app), sonst scheitert jeder Aufruf |

Unter **«OAuth-Einstellungen»**:

| Feld im Portal | Wert oder Einstellung |
|----------------|-----------------------|
| Client-ID (Client ID) | Wert von ELIZA |
| Geheimer Clientschlüssel (Client secret) | Das Geheimnis, nur direkt nach dem Anlegen oder einem neuen Geheimnis sichtbar |
| Autorisierungsendpunkt (Authorization endpoint) | Wert von ELIZA |
| Tokenendpunkt (Token endpoint) | Wert von ELIZA |
| Endpunkt aktualisieren (Refresh endpoint) | Wert von ELIZA |
| Bereich (Scope) | Wert von ELIZA |
| Prüfschlüssel für Code Exchange (PKCE) aktivieren (Enable Proof Key for Code Exchange (PKCE)) | **einschalten**, sonst scheitert die Anmeldung |

Jeder Wert steht in ELIZA in einem eigenen Feld mit dem Knopf **«Kopieren»**. Die Authentifizierungsmethode für das Clientkennwort lässt du auf der Voreinstellung «Anforderungstextparameter (Standard)».

> **💡 Tipp:** Hast du das Geheimnis nicht mehr, erzeuge ein neues (siehe [Geheimnis verloren?](#geheimnis-verloren)). Auf der Detailseite steht dann beim geheimen Clientschlüssel: «Nur einmal angezeigt.» mit dem Link «Neues erzeugen».

**Schritt 2: Registration ID eintragen («Registration ID»)**

Das Teams Developer Portal zeigt die Registration ID nach dem Speichern als «OAuth client registration ID» an. Trage sie in ELIZA im Kasten **«Zum Schluss: Registration ID eintragen»** ein und klicke auf **«Speichern»**. Danach zeigt ELIZA die gespeicherte Registration ID dort an, mit **«Ändern»** trägst du eine andere ein. Die Karte der Verbindung auf «KI-Verbindungen» zeigt nun «Bereit».

**Schritt 3: Microsoft 365 Agent herunterladen und hochladen («In Microsoft 365 hochladen»)**

Der Knopf **«Microsoft 365 Agent herunterladen»** ist erst aktiv, wenn die Registration ID eingetragen ist. Er lädt eine ZIP-Datei herunter. Lade diese in [admin.microsoft.com](https://admin.microsoft.com) unter **Agents** hoch und stelle den Agenten für die gewünschten Personen bereit. Der Knopf **«Microsoft 365 Admin Center öffnen»** auf der Detailseite führt dorthin; welche Organisation sich öffnet, entscheidet deine Anmeldung bei Microsoft.

Laut [Microsoft-Anleitung zum Hochladen eigener Agenten](https://learn.microsoft.com/en-us/microsoft-365/copilot/agent-essentials/agent-lifecycle/agent-upload-agents) wählst du dort **Agents** › **Upload custom agent**, dann die ZIP-Datei, danach die Personen. Wähle zum Testen zuerst nur dich selbst («Just me») oder eine kleine Testgruppe. Nach dem Hochladen kann es einige Minuten dauern, bis der Agent in Microsoft 365 erscheint. Menünamen von Microsoft können sich ändern; im Zweifel gilt die Microsoft-Anleitung.

**Schritt 4 (freiwillig): Link zum Agenten eintragen**

Mit dem Link zum Agenten öffnen Personen ELIZA aus ihrem Profil direkt in Copilot: Unter **Verbundene Apps** zeigt die Karte «Microsoft 365 Copilot» dann den Knopf **«In Copilot öffnen»**. Den Link holst du in Microsoft 365 Copilot, sobald der Agent dort erscheint: Zeige im linken Bereich unter **Agents** auf «ELIZA», wähle **Mehr (…)** und dann **Freigeben** ([Microsoft-Anleitung](https://support.microsoft.com/de-de/topic/using-agents-for-microsoft-365-copilot-169469d7-328d-4d37-9090-bfc2058a39bd)). Copilot kopiert den Link. Füge ihn auf der Detailseite im Schritt «In Microsoft 365 hochladen» unter **«Link zum Agenten (freiwillig)»** ein und klicke auf **«Speichern»**. Der Schritt «In Microsoft 365 hochladen» zeigt danach «Erledigt», auf der Detailseite und auf der Karte.

ELIZA nimmt nur Links von `m365.cloud.microsoft` an, die die Kennung des Agenten (`titleId`) enthalten, zum Beispiel `https://m365.cloud.microsoft/chat/?titleId=T_…`. Leer gespeichert, entfernt ELIZA den Link wieder. Hast du mehrere Verbindungen mit Link, zeigt das Profil den Link der neuesten.

> **💡 Tipp:** Hast du ein neues Paket hochgeladen, prüfe mit **«In Copilot öffnen»** auf der Detailseite, ob der Link noch zum Agenten führt. Sonst trage den neuen Link ein.

### Erste Anmeldung jeder Person

Sobald der Agent für eine Person bereitsteht, öffnet sie Microsoft 365 Copilot, wählt den Agenten «ELIZA» und stellt ihre erste Frage. Ist ein Link zum Agenten eingetragen, öffnet sie ihn auch über **«In Copilot öffnen»** auf der Karte «Microsoft 365 Copilot» in ihrem Profil. Beim ersten Einsatz stellt jede Person ihre eigene ELIZA-Verbindung her: Sie meldet sich mit ihrem persönlichen ELIZA-Konto an, prüft die angefragten Zugriffe und klickt auf **«Zugriff gewähren»**. Dadurch gelten auch in Copilot immer die individuellen ELIZA-Berechtigungen.

Teste den Agenten mit mindestens zwei Personen mit unterschiedlichen ELIZA-Berechtigungen, bevor du ihn für alle bereitstellst.

> **⚠️ Wichtig:** Ist das Tool «Microsoft 365 Copilot» abgeschaltet, funktioniert die Verbindung nicht. Die Detailseite zeigt dann: «Microsoft 365 Copilot ist abgeschaltet. Diese Verbindung funktioniert erst, wenn du es auf der Übersicht aktivierst.»

### Paket aktualisieren

Die Version des Pakets steht im Dateinamen: `eliza-copilot-<Adresse>-<Version>.zip`, zum Beispiel `eliza-copilot-deinefirma.myeliza.ch-1.6.1.zip`.

Das Paket ändert sich in diesen Fällen, und die Version steigt dann:

- ELIZA liefert eine neue Version aus, die das Paket verändert.
- ELIZA schaltet das Schreiben für deine Instanz ein oder aus. Das betrifft Verbindungen, die schreiben dürfen.
- Du trägst bei der Verbindung eine andere Registration ID ein.

> **⚠️ Wichtig:** Pakete ab der Version `1.4.x` enthalten neue Regeln für das Speichern: Der Agent erfasst Meldungen, antwortet auf Meldungen, ändert ihren Status, ihre Zuständigkeit und Frist und pflegt Glossareinträge (siehe [Was die KI-Tools speichern können](#was-die-ki-tools-speichern-konnen)). Hast du Copilot schon eingerichtet, lade nach dem ELIZA-Update das Paket ab Version 1.4.x einmal als Update hoch, sonst arbeitet der Agent mit den alten Agent-Regeln weiter, nach denen er Statusänderungen nicht selbst macht. ELIZA lehnt alles andere sofort ab, für jedes Paket.

> **⚠️ Wichtig:** Pakete mit der Version `1.5.x` enthalten zusätzlich die Regel, bei Fragen ohne klaren Bereich zuerst mit `eliza_search` über alle Bereiche zu suchen, bevor der Agent sagt, dass ELIZA nichts dazu hat. Das Werkzeug und seine Beschreibung mit derselben Regel bekommt Copilot nach dem ELIZA-Update ohne neues Paket; in den Agent-Regeln steht sie erst ab Paket 1.5.x. Lade deshalb das Paket mit Version 1.5.x einmal als Update hoch.

> **⚠️ Wichtig:** Pakete mit der Version `1.6.x` enthalten zusätzlich die Regeln zu Arbeitszeiten: Der Agent erfasst und korrigiert deine Arbeitszeiten und startet und stoppt deinen Timer (siehe [Was die KI-Tools speichern können](#was-die-ki-tools-speichern-konnen)). Hast du Copilot schon eingerichtet, lade nach dem ELIZA-Update das Paket mit Version 1.6.x einmal als Update hoch, sonst arbeitet der Agent mit den alten Agent-Regeln weiter, nach denen er Arbeitszeiten nicht selbst erfasst. ELIZA lehnt alles andere sofort ab, für jedes Paket.

> **⚠️ Wichtig:** Pakete mit der Version `1.7.x` enthalten zusätzlich die Regeln zu den Knöpfen (zum Beispiel eine Karte archivieren oder ein Dokument zur Prüfung geben). Die Regeln fürs Speichern nennen in diesem Paket keine einzelnen Bereiche mehr. Ab dieser Version kommen neue Bereiche und neue Knöpfe ohne neues Paket bei Copilot an, weil der Agent sie bei ELIZA nachliest. Hast du Copilot schon eingerichtet, lade nach dem ELIZA-Update das Paket mit Version 1.7.x einmal als Update hoch, sonst arbeitet der Agent mit den alten Agent-Regeln weiter, nach denen er keine Knöpfe drückt. ELIZA lehnt alles andere sofort ab, für jedes Paket.

> **⚠️ Wichtig:** Pakete mit der Version `1.8.x` enthalten neue Regeln für Meldungslisten: Fragst du nach «meinen Meldungen», fragt der Agent nur die Meldungen ab, die dir zugewiesen sind. Gibt es mehr Treffer, als auf eine Seite passen, nennt er die Anzahl, zeigt die erste Seite und bietet an, die Abfrage einzugrenzen, statt alle Seiten zu holen. Hast du Copilot schon eingerichtet, lade nach dem ELIZA-Update das Paket mit Version 1.8.x einmal als Update hoch, sonst versucht der Agent weiter, jede Seite zu holen.

> **⚠️ Wichtig:** Pakete mit der Version `1.9.x` enthalten Regeln für die Werkzeuge zu Fristen, Verlauf, Versionsvergleich, Zuständigkeiten und Normabdeckung (siehe [Was können die KI-Tools in ELIZA tun?](#was-konnen-die-ki-tools-in-eliza-tun)). Hast du Copilot schon eingerichtet, lade nach dem ELIZA-Update das Paket mit Version 1.9.x einmal als Update hoch, sonst kennt der Agent diese Regeln nicht.

Ein **automatisches Update gibt es nicht**. So aktualisierst du:

1. Klicke auf «KI-Verbindungen» in der Karte der Verbindung auf **«Microsoft 365 Agent herunterladen»** (oder öffne sie mit **«Details öffnen»** und lade ihn dort beim Schritt «In Microsoft 365 hochladen» herunter).
2. Vergleiche die Version im Dateinamen mit der Version des Agenten in [admin.microsoft.com](https://admin.microsoft.com). Ist die neue Version höher, lade die ZIP-Datei dort unter **Agents** nochmals hoch.

Microsoft nimmt eine hochgeladene Datei nur dann als Update an, wenn ihre Version höher ist als die installierte. Eine gleiche Version bedeutet, dass sich am Paket nichts geändert hat.

### Geheimnis verloren?

Öffne auf der Detailseite oben rechts das Menü **«Weitere Aktionen»** (⋮) und wähle **«Neues Geheimnis erzeugen»**. ELIZA fragt in einem Fenster nach: «Das bisherige Geheimnis gilt sofort nicht mehr. Copilot funktioniert erst wieder, wenn du das neue im Teams Developer Portal einträgst. Den Microsoft 365 Agent musst du nicht neu hochladen.» Bestätigst du mit **«Neues Geheimnis erzeugen»**, zeigt die Seite das neue Geheimnis einmal beim Schritt «Registration ID» an; der Schritt steht dabei auf «Jetzt Geheimnis ersetzen». Ersetze damit das Geheimnis der bestehenden Registrierung im Teams Developer Portal. Registration ID und Microsoft 365 Agent bleiben gleich.

Der Link **«Neues erzeugen»** beim geheimen Clientschlüssel führt zur selben Rückfrage.

### Verbindung löschen

Öffne auf der Detailseite oben rechts das Menü **«Weitere Aktionen»** (⋮) und wähle **«Verbindung löschen»**. ELIZA fragt in einem Fenster nach: «Alle Personen verlieren sofort den Zugriff über Copilot. Entferne danach auch die App in admin.microsoft.com und die Registrierung im Teams Developer Portal.» Mit **«Löschen»** ist die Verbindung weg.

## Claude verbinden

Claude verbindest du als eigenen **Konnektor** (Custom Connector). Das gilt für claude.ai im Browser und für die Claude-App. Claude Code ist ein anderes Tool, siehe [Claude Code und andere lokale Tools](#claude-code-und-andere-lokale-tools).

> **⚠️ Wichtig:** Bei **Team- und Enterprise-Abos** legt zuerst ein **Owner** den Konnektor für die Organisation an. Erst danach können sich die Mitarbeitenden damit verbinden. Mit einem persönlichen Konto legst du den Konnektor selbst an.

**Schritt 1: Konnektor anlegen**

Mitarbeitende in Team- oder Enterprise-Abos überspringen diesen Schritt, wenn der Owner den Konnektor schon angelegt hat.

- **Persönliches Konto:** Öffne in Claude **Anpassen** › **Connectoren**, klicke auf **+ Hinzufügen** und wähle **Benutzerdefinierten Connector hinzufügen**.
- **Team oder Enterprise (Owner):** Öffne **Organisationseinstellungen** › **Connectoren**, wähle **Hinzufügen**, dann **Benutzerdefiniert** und, falls gefragt, **Web**.

Gib einen Namen ein (zum Beispiel «ELIZA») und trage als Adresse des MCP-Servers ein: `https://deinefirma.myeliza.ch/mcp` (deine Adresse steht in deinem Profil unter **Verbundene Apps**). Die erweiterten Angaben zu OAuth lässt du leer: Eine eigene Client-ID und ein Geheimnis brauchst du nicht. Bestätige mit **Hinzufügen**.

**Schritt 2: Verbinden und autorisieren**

Öffne in Claude **Anpassen** › **Connectoren**, suche den Konnektor in der Liste und klicke auf **Verbinden**. Claude leitet dich zum ELIZA-Login weiter. Melde dich an und klicke auf **«Zugriff gewähren»**. Bei Team und Enterprise macht jede Person diesen Schritt selbst. Fragt Claude schon beim Anlegen nach der Anmeldung, entfällt der Klick auf **Verbinden**.

**Schritt 3: Ausprobieren**

Schalte den Konnektor in einer Unterhaltung ein: Klicke unten links im Chat auf **+**, wähle **Connectoren** und aktiviere den Konnektor. Frage dann zum Beispiel:

```text
Welche offenen Meldungen gibt es in ELIZA?
```

Die Menünamen stehen hier so, wie sie die [deutsche Anleitung von Anthropic zu benutzerdefinierten Konnektoren](https://support.claude.com/de/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp) nennt. Ist Claude auf Englisch eingestellt, heissen sie **Customize** › **Connectors**, **+ Add**, **Add custom connector** und **Connect**. Je nach Version von Claude können sie abweichen; massgebend ist die Anleitung von Anthropic.

> **💡 Tipp:** Der Schalter «Claude» und eine Sperre für «Claude» auf «KI-Verbindungen» gelten auch für Claude Code, wenn es mit dem Konnektor aus claude.ai arbeitet. Ein Server, den du in Claude Code mit `claude mcp add` hinzugefügt hast, zählt dagegen zu «Programme auf dem eigenen Rechner». Daran ändern Schalter und Sperre für «Claude» nichts.

## ChatGPT verbinden

ChatGPT bindet eigene MCP-Server als **Plugin** ein. Du richtest es in ChatGPT im Browser ein.

> **⚠️ Wichtig:** Laut [OpenAI-Anleitung zu eigenen MCP-Servern](https://help.openai.com/de-de/articles/12584461-developer-mode-and-full-mcp-connectors-in-chatgpt-beta) richtest du ELIZA nur in ChatGPT im Browser ein, und das vollständige Arbeiten mit eigenen MCP-Servern (auch Erfassen und Ändern) ist für **ChatGPT Business** oder **Enterprise/Edu** vorgesehen.

- **Business:** Nur Admins und Owner können solche Plugins erstellen und veröffentlichen.
- **Enterprise/Edu:** Admins können das Recht «Create plugins with MCPs» einzelnen Mitgliedern geben.
- **Persönliches Pro-Konto:** Bei Prüfungen von ELIZA (November 2026) liessen sich auch mit einem persönlichen Pro-Konto Meldungen erfassen. Rechne deshalb mit Schreibzugriff und stelle die Rückfrage ein (Schritt 3).
- Der **Developer Mode** muss nicht mehr eingeschaltet werden.

**Schritt 1: Plugin erstellen**

1. Öffne in ChatGPT **Plugins**.
2. Klicke auf **+** und wähle **Benutzerdefinierten MCP-Server hinzufügen**. Die Einträge «Plugin erstellen» und «Plugin-Archiv hochladen» im selben Menü sind für ELIZA nicht gemeint.
3. Gib einen Namen ein (zum Beispiel «ELIZA») und, wenn du magst, eine Beschreibung.
4. Trage unter **Verbindung** die Adresse des MCP-Servers ein: `https://deinefirma.myeliza.ch/mcp` (deine Adresse steht in deinem Profil unter **Verbundene Apps**)
5. Wähle als Authentifizierung **OAuth**.
6. Lies den Risikohinweis und setze das Häkchen bei **Ich verstehe und möchte fortfahren**.
7. Klicke auf **Als Plugin erstellen** und prüfe die gefundenen Werkzeuge.

**Schritt 2: Autorisieren**

ChatGPT leitet dich zum ELIZA-Login weiter. Melde dich an und klicke auf **«Zugriff gewähren»**.

**Schritt 3: Rückfrage vor dem Ausführen einstellen**

Öffne die Seite des Plugins in ChatGPT. Dort steht unter **Standardberechtigung** zunächst «Tools mit geringem Risiko zulassen». Mit dieser Einstellung änderte ChatGPT bei Prüfungen von ELIZA (November 2026) den Status einer Meldung, ohne vorher zu fragen. Mit dieser Einstellung kann ChatGPT auch heute Meldungen erfassen, auf Meldungen antworten sowie Status, Zuständigkeit und Frist ändern, ohne vorher zu fragen, wenn es die Werkzeuge ohne Rückfrage aufruft. Auch eine Arbeitszeit kann ChatGPT so ohne Rückfrage erfassen, denn ELIZA kennzeichnet das Erfassen (`eliza_api_create`) nicht als Werkzeug, das bestehende Daten verändert; den Timer (`eliza_worktime_timer`) kennzeichnet ELIZA so, weil das Stoppen einen bestehenden Eintrag ändert. Deshalb bleibt die Empfehlung: Stelle die Berechtigung so ein, dass ChatGPT vor dem Ausführen von Werkzeugen fragt.

**Schritt 4: Ausprobieren**

Installiere das Plugin, starte eine neue Unterhaltung, tippe `@` und wähle das Plugin aus. Frage zum Beispiel:

```text
Zeige mir die Kennzahlen aus ELIZA.
```

Die Menünamen stammen aus der deutschen Anleitung von OpenAI, die OpenAI maschinell übersetzt. In der App können sie leicht abweichen und sich ändern; im Zweifel gilt die OpenAI-Anleitung. Ist ChatGPT auf Englisch eingestellt, heissen sie **Add custom MCP server**, **Connection**, **I understand and want to continue** und **Create as a plugin**.

## Claude Code und andere lokale Tools

Programme, die sich über deinen eigenen Rechner anmelden, laufen auf der Seite «KI-Verbindungen» unter **«Programme auf dem eigenen Rechner»**. Dazu gehören der Hermes Agent und Claude Code mit einem Server, den du mit `claude mcp add` hinzugefügt hast. Claude Code mit dem Konnektor aus claude.ai zählt dagegen zu «Claude». Schaltet ein Admin dieses Tool ab oder sperrt dich dafür, funktionieren all diese Programme nicht mehr.

> **⚠️ Wichtig:** Beim Autorisieren warnt ELIZA: «Diese Anwendung läuft auf deinem eigenen Rechner. Gewähre den Zugriff nur, wenn du sie gerade selbst gestartet hast.»

### Claude Code verbinden

Claude Code ist das KI-Kommandozeilen-Werkzeug von Anthropic.

> **⚠️ Wichtig:** Claude Code übernimmt die Konnektoren aus deinem claude.ai-Konto. `/mcp` zeigt sie mit an, zum Beispiel als «claude.ai ELIZA». Ist ELIZA in claude.ai und in Claude Code eingerichtet, arbeitet Claude Code mit beiden Verbindungen gleichzeitig. Behalte nur eine: Entferne die Verbindung in Claude Code mit `claude mcp remove eliza` oder trenne den Konnektor in claude.ai.

**Schritt 1: MCP-Server hinzufügen**

Führe im Terminal aus (ersetze die Adresse durch deine; sie steht in deinem Profil unter **Verbundene Apps**):

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

### Hermes Agent verbinden

Der Hermes Agent wird über seine Konfigurationsdatei verbunden.

**Schritt 1: Konfiguration ergänzen**

Trage den ELIZA-MCP-Server in der `config.yaml` von Hermes ein (deine Adresse steht in deinem Profil unter **Verbundene Apps**):

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
| `eliza_api_list` | Lesen | Listet Datensätze mit Filtern und Suche (z.B. Meldungen, Verträge, Kennzahlen). Meldungen erscheinen in Listen mit Nummer, Titel, Status, Meldekreis, zuständiger und meldender Person, Frist, Daten und Link, ohne Beschreibung |
| `eliza_api_get` | Lesen | Liest einen einzelnen Datensatz |
| `eliza_search` | Lesen | Sucht wie die Suchseite über alle Bereiche, bei Dokumenten auch im Dateiinhalt. Es kommen nur Treffer, die du selbst sehen darfst |
| `eliza_read_content` | Lesen | Liest den Inhalt eines Dokuments, Prozesses, einer Meldung, eines Vertrags, Glossareintrags, einer News oder eines Traktandums, lange Inhalte in Teilen, auch direkt aus einem Treffer von `eliza_search`. Bei Dokumenten nennt es die Eckdaten (Status, Revisionsnummer, Gültigkeit, nächste Überprüfung, zuständige Funktionen), bei Dokumenten und Prozessen die verknüpften Normkapitel, die du sehen darfst. Dateien wie pptx, msg, eml, txt, csv und md liest es ebenfalls |
| `eliza_my_deadlines` | Lesen | Listet deine Fristen aus allen Modulen nach Datum, getrennt in überfällig, heute und demnächst fällig |
| `eliza_history` | Lesen | Zeigt den Verlauf eines Dokuments oder Prozesses: Versionen mit Datum, Status und Freigabe, dazu die Workflow-Schritte («Wer hat das freigegeben?») |
| `eliza_compare_versions` | Lesen | Zeigt, was sich zwischen zwei Versionen eines Dokuments oder Prozesses geändert hat, mit geänderten Feldern und geändertem Text («Was ist neu im Personalreglement?») |
| `eliza_my_responsibilities` | Lesen | Listet die freigegebenen Prozesse, Prozessschritte und Dokumente, für die du zuständig bist, persönlich oder über eine Funktion, eine Organisationseinheit oder eine Mitwirkung im Prozess |
| `eliza_standard_coverage` | Lesen | Zeigt je Kapitel einer Norm die verknüpften Nachweise und die Kapitel ohne Nachweis («Wo fehlen uns Nachweise für ISO 9001?») |
| `eliza_api_create` | Schreiben | Erstellt einen neuen Datensatz |
| `eliza_api_update` | Schreiben | Ändert einzelne Felder eines Datensatzes |
| `eliza_issue_followup` | Schreiben | Ändert Status, Zuständigkeit und Frist einer Meldung, mit oder ohne Antwort |
| `eliza_worktime_timer` | Schreiben | Startet oder stoppt deinen Timer in der Zeiterfassung |
| `eliza_api_action` | Schreiben | Drückt einen Knopf wie in der Oberfläche, zum Beispiel eine Teams-Karte archivieren oder ein Dokument zur Prüfung geben (siehe [Knöpfe](#knopfe)) |

**Was die Lese-Werkzeuge zeigen:** Es gilt, was du in ELIZA selbst siehst. Wer ein Dokument oder einen Prozess nur lesen darf, sieht nur die freigegebenen Versionen. Entwürfe, Workflow-Kommentare und die Personen dahinter sieht nur, wer das Dokument oder den Prozess in ELIZA pflegen darf. `eliza_my_responsibilities` listet nur freigegebene Objekte; was du prüfen oder freigeben musst, zeigt `eliza_my_deadlines`.

**Die Schreib-Werkzeuge erscheinen nur, wenn:**

1. ELIZA das Schreiben für deine Instanz freigeschaltet hat, **und**
2. die Verbindung den Zugriff «ELIZA-Daten über MCP erstellen und ändern» anfragt. Das legt das Tool bei der Registrierung fest. Der Bildschirm «Zugriff autorisieren» zeigt nur, was das Tool angefragt hat, du wählst dort nichts ab. Bei Microsoft 365 Copilot steht es beim Anlegen der Verbindung fest (siehe [Microsoft 365 Copilot einrichten](#microsoft-365-copilot-einrichten)).

### Was die KI-Tools speichern können

Mit Schreibzugriff können KI-Tools genau diese Dinge speichern:

- **Meldung erfassen:** mit Meldekreis, Titel, Beschreibung, Lösungsvorschlag, Ereignisdatum, Frist und Referenznummer.
- **Antwort auf eine Meldung schreiben:** auch als interne Notiz, wenn du die Meldung ändern darfst.
- **Meldung bearbeiten wie im Antwortformular:** Status, Zuständigkeit und Frist, mit oder ohne Antwort. Die Änderung steht im Verlauf der Meldung, und ELIZA benachrichtigt die Beteiligten.
- **Glossareintrag erfassen und ändern.**
- **Arbeitszeit erfassen:** Datum, Beginn, Ende, Stundenart, Kostenstelle und Beschreibung, immer für dich selbst und im Status «erfasst».
- **Eigene erfasste Arbeitszeit korrigieren:** dieselben Felder.
- **Timer starten und stoppen:** wie der Start- und Stopp-Knopf in der Tagesansicht.
- **Teams-Karte anlegen und ändern:** mit Liste, Titel, Beschreibung, Frist, Status, Zuständigkeit und Personen, die benachrichtigt werden. Wechselt eine Karte in eine Liste mit Archivierung oder Zielstatus, gilt das wie im Board. Das Tool verschiebt eine Karte nur in eine Liste desselben Boards; auf ein anderes Board verschiebst du sie selbst mit «Kopieren / Verschieben».
- **Kommentar an einer Teams-Karte ändern:** nur den Text deiner eigenen Kommentare an Karten, wie auf der Karte. Die Zeilen, die ELIZA zum Verlauf in einen Kommentar schreibt, bleiben, wie sie sind.
- **Traktandum anlegen und ändern:** in einer Sitzung, mit Nummer, Titel, Text, Ergebnis und Beitragenden.
- **Spaces anlegen und ändern:** Einen Space legt das Tool nur mit Titel an und nur, wenn du das Recht dazu hast. Du wirst Besitzerin oder Besitzer und Admin, und der neue Space ist geschützt: Ihn sehen nur du, die Admins und das Team. Titel, Beschreibung und Sichtbarkeit ändern die Admins. Ist ein Space «öffentlich», sehen ihn nur noch Personen mit dem Leserecht auf Spaces, auch Besitzer:in, Admins und Team ohne dieses Recht nicht mehr, und Karten ändern dann nur noch die Space-Admins sowie Zuständige und Beitragende einer Karte. Wird er wieder geschützt, sehen ihn nur noch Besitzer:in, Admins und Team, alle anderen verlieren den Zugriff. Beides sagt dir das Tool vorher. Team, Admins und Archivieren ändert das Tool mit den Knöpfen (siehe [Knöpfe](#knopfe)). Die Farbe stellst du selbst ein.
- **Boards und Listen anlegen und ändern:** Ein Board legt das Tool in einem Space an, in dem du Admin bist; ELIZA legt dazu die Listen ToDo, Doing, Wait und Done und drei Farb-Labels an. Eigene Berechtigungen für ein Board setzt das Tool nur mit der ganzen Liste der Personen, die das Board sehen sollen, und nennt dir vorher, wer dazukommt und wer den Zugriff verliert. Gibst du dem Board wieder die Berechtigungen des Space, sehen es alle, die den Space sehen, in einem öffentlichen Space alle mit dem Leserecht auf Spaces; auch dann nennt dir das Tool vorher, wer dazukommt und wer den Zugriff verliert. Zielstatus und Archivierung einer Liste gelten für Karten, die danach in die Liste kommen; Karten, die schon darin liegen, bleiben, wie sie sind. Das Tool sagt dir das vorher. Labels legt ELIZA mit dem Board an, das Tool ändert keine.
- **Sitzungen anlegen und ändern:** in einem Space, in dem du Admin bist. Der Beginn ist Pflicht, wie im Formular; nennst du keinen, fragt das Tool nach. Admins setzt das Tool beim Ändern, nur aus dem Team des Space, und nennt sie dir. Setzt das Tool beim Ändern den Status «abgeschlossen», hält ELIZA fest, wer die Sitzung wann abgeschlossen hat; legt es eine Sitzung gleich als abgeschlossen an, hält ELIZA das nicht fest; wieder öffnen geht nur mit einem Grund, der im Verlauf steht. In einen anderen Space verschiebt das Tool eine Sitzung nach den Regeln des Dialogs «Sitzung kopieren / verschieben»: nur aus einem öffentlichen Space und nur in einen Space, in dem du Admin bist. Ist der Ziel-Space geschützt, fragt das Tool dich ausdrücklich, weil die Sitzung danach nur noch für Berechtigte des Ziel-Space sichtbar ist. Archivieren und wiederherstellen dürfen die Admins des Space und der Sitzung, wie mit den Knöpfen «Archivieren» und «Archiv wiederherstellen»: Eine archivierte Sitzung steht in der Sitzungsliste und in der des Space nur noch unter «Archiviert», im Dashboard und im Kalender bleibt sie sichtbar. Niemand ändert sie oder legt Traktanden an, bis sie wiederhergestellt ist. Das sagt dir das Tool vorher. Speichern benachrichtigt niemanden; «Teilnehmer» ist Text, Einladungen verschickst du in ELIZA mit «Team benachrichtigen».
- **Dokument ohne Datei anlegen und ändern:** nur in einem Ordner und mit Titel; dazu die Angaben wie Dokumentart, Beschreibung, Funktionen, nächste Prüfung und Gültigkeit. Die Datei lädst du selbst in ELIZA hoch.
- **Dokumentordner anlegen und ändern:** in einem Ordner, in dem du Admin bist oder Ordner anlegen darfst, auf oberster Ebene nur mit `dms.add_documentfolder`; das Tool fragt nach dem Elternordner. Ohne Angabe erbt ein neuer Unterordner Admins, Team, Organisationseinheiten, Sichtbarkeit und Funktionen; ein Ordner auf oberster Ebene erbt nichts und hat ohne eigene Admins keine, ändern kann ihn dann nur, wer Ordner löschen darf. Eigene Werte setzt das Tool nur mit ausgeschalteter Vererbung und gibt dann alle an, nachdem es die bisher geerbten nachgelesen und dich gefragt hat. Ändern dürfen nur Admins des Ordners und wer Ordner löschen darf. Vorher nennt das Tool alle Personen, Funktionen und Organisationseinheiten und sagt, wer Zugriff bekommt oder verliert. Niemand wird benachrichtigt.
- **Dokumentarten und Risikoklassen (Klassifikationen von SWOT-Einschätzungen) anlegen und ändern:** Titel und Beschreibung, ein neuer Titel gilt überall. Risikoklassen nur, wenn du sie in ELIZA anlegen beziehungsweise ändern und Einschätzungen anlegen beziehungsweise ändern darfst. Das PDF-Layout-Profil einer Dokumentart stellen Superuser in ELIZA ein.
- **SWOT-Massnahme erfassen und ändern:** mit oder ohne Bezug zu einem Objekt (zum Beispiel einem Prozess, Vertrag oder Projekt). Die erlaubten Objekttypen nennt `eliza_api_schema` in `mcp_parent_types`; bei jedem anderen Typ lehnt ELIZA ab. Den Bezug legst du nur beim Erfassen fest, später ändert ihn das Tool nicht mehr.
- **SWOT-Einschätzung erfassen und ändern:** mit oder ohne Bezug, mit denselben Regeln. Ohne Angabe trägt ELIZA dich als Besitzerin oder Besitzer und das heutige Datum ein. Das Team setzt das Tool nicht. Ändert das Tool Verknüpfungen (Prozesse, Funktionen, Meldungen, interessierte Parteien, Klassen), gibt es die ganze Liste an und nennt dir vorher, welche wegfallen.
- **Kontrolle einer Massnahme erfassen und ändern:** Setzt sie den Status auf «erledigt», kann ELIZA die Frist einer periodischen Massnahme verschieben, und zwar auf das erste Datum im Rhythmus, das mehr als eine halbe Periode nach dem Datum der Kontrolle liegt. Liegt die Frist weit genug in der Zukunft, bleibt sie. Das KI-Tool liest die Massnahme danach und nennt dir die Frist.
- **Messwert einer Kennzahl erfassen und ändern:** Pro Kennzahl und Tag gibt es einen Messwert. Gibt es am Datum schon einen, lehnt ELIZA das Erfassen ab und nennt seine ID; das Tool bietet dir an, den bestehenden zu ändern. Ändern darf es nur, wenn du die Kennzahl ändern darfst, wie in ELIZA. Ohne Zielwert übernimmt ELIZA beim Erfassen den der Kennzahl, wenn er eine Zahl ist, wie das Formular. Das Datum der nächsten Messung übernimmt ELIZA nur bei einer Kennzahl mit Rhythmus oder Wiedervorlage; bei anderen Kennzahlen ignoriert sie es, und das Tool verspricht dir dann keines. Eine Kennzahl, die du nicht sehen darfst, bleibt für das Tool unsichtbar.
- **Update eines Key Results erfassen und ändern:** Der Fortschritt (0 bis 100) ist beim Erfassen Pflicht und geht ins Key Result. Änderst du ein Update später, ändert sich das Key Result nicht.
- **Norm und Normenkategorie anlegen und ändern:** Das Datum «Gültig bis» muss nach «Gültig ab» liegen, sonst lehnt das Tool ab, wie das Formular. Kategorien einer Norm ersetzt das Tool als ganze Liste und gibt deshalb alle an, die bleiben sollen.
- **Kapitel einer Norm anlegen und ändern:** mit Nummer (Pflicht), Titel, Erfüllungsgrad (0 bis 100) und Unterkapiteln. Die Norm wechselt ein Kapitel nicht mehr. Verknüpfen kann das Tool nur Dokumente, Ordner und Prozesse, die du selbst siehst; bei einem anderen lehnt es ab, und nichts wird gespeichert. Die Listen ersetzt es als ganze. Hilfsmittel und Auditkriterien verknüpfst du selbst in ELIZA.
- **Interessierte Parteien, Themen und Themenarten anlegen und ändern:** Ein Thema braucht mindestens eine Themenart; nennst du keine, fragt das Tool danach. Das Rating einer interessierten Partei berechnet ELIZA aus Interesse und Einfluss.
- **Managementsysteme (IMS), Aspekte und Aspektkategorien anlegen und ändern:** Das Tool verknüpft nur Datensätze, die du selbst siehst: bei Aspekten Einschätzungen, Massnahmen, Prozesse, interessierte Parteien, Kennzahlen und Zielsetzungen, bei Systemen Meldekreise, Normen, Skill-Kategorien, Teams, Dokumente und Dokumentordner. Zielsetzungen verknüpft es nur, wenn OKR eingeschaltet ist. Die Listen ersetzt es als ganze. Ein Aspekt wechselt das System nicht mehr; archiviert das Tool einen Aspekt, verschwindet er aus den Ansichten, und es sagt dir das vorher. Speichern geht nur mit den Rechten des Moduls (`ims.add_system`, `ims.change_system`, `ims.add_asset`, `ims.change_asset`, `ims.add_assetcategory`, `ims.change_assetcategory`); Admins eines Systems ohne diese Rechte pflegen in ELIZA, was sie dort dürfen.
- **Kennzahlenordner und Kennzahlen anlegen und ändern:** Das Tool fragt nach dem Ordner; ohne Ordner sehen alle mit Leserecht auf Kennzahlen die Kennzahl. Admins, Team und Organisationseinheiten eines Ordners sowie Verantwortliche, Prozesse und den Kommentar zur Bewertung einer Kennzahl setzt du selbst in ELIZA; bis dahin sehen den Ordner nur Personen, die alle Kennzahlenordner lesen oder ändern dürfen, und das Tool sagt dir das vorher. Eine Kennzahl ändert das Tool nur, wenn du Staff bist, zur Gruppe `kpi_admin` gehörst oder das Recht `kpi.change_kpi` hast, und dann nur Kennzahlen, die du ändern darfst; Anlegen braucht `kpi.add_kpi`. Archiviert das Tool eine Kennzahl, verschwindet sie aus der Liste und aus den fälligen Messungen; das sagt es dir vorher. Die Sichtbarkeit «geschützt» eines Ordners ändert heute nicht, wer ihn sieht; das Tool verspricht keinen Schutz.
- **Zielsysteme, Perioden, Zielsetzungen, Key Results und Bewertungsthemen im OKR anlegen und ändern:** Den Typ eines Zielsystems (OKR oder Managementbewertung) legst du beim Anlegen fest, später ändert ihn das Tool nicht. Normen und den Meldekreis für Massnahmen ändert das Tool wie das Formular nur bei Managementbewertungen, und es verknüpft nur, was du siehst. Ein System mit abgeschlossener Bewertung lässt sich nicht mehr ändern; dort ändern nur noch die Verantwortlichen der Perioden diese, und eine danach angelegte Periode kann niemand mehr ändern. Das Tool schlägt dann ein neues Zielsystem vor. Eine Periode braucht Beginn und Ende; fehlen sie, fragt das Tool. Zielsetzungen der letzten Periode übernimmt das Tool nicht. Eine neue Zielsetzung ist ein Entwurf, den nur ihre Verantwortlichen und Personen mit Löschrecht sehen; das Tool nennt deshalb beim Anlegen die Verantwortlichen und fragt danach. Wechselt der Status einer Zielsetzung auf «in Bearbeitung», «erledigt» oder «abgebrochen», sehen sie nur noch Personen mit Löschrecht, auch die Verantwortlichen nicht mehr; das sagt das Tool vorher. Den Fortschritt eines Key Results ändert es in Prozent. Setzt es die Bewertung eines Themas, während die Managementbewertung «in Planung» ist, wechselt sie auf «in Bearbeitung»; das sagt es vorher. Prozesse, Projekte und Kennzahlen einer Zielsetzung sowie das Budget eines Key Results trägst du selbst ein, ebenso Nachweise der Themen, die du nicht siehst; die Nachweise, die du siehst, ersetzt das Tool als ganze Liste. Das Tool speichert nur, wenn du das Recht des Moduls hast (zum Beispiel `okr.add_period` oder `okr.change_period`, `okr.add_objective`, `okr.change_result`, `okr.change_managementreviewitem`); Verantwortliche ohne dieses Recht ändern in ELIZA, was sie dort dürfen. Niemand wird benachrichtigt, auch die Verantwortlichen nicht.
- **Projekt, Kostenstelle, Meilenstein und Phase anlegen und ändern:** wie in den Formularen des Projekts. Investitionswert eines Projekts sowie Stundensatz und Budgetierten Betrag einer Kostenstelle trägst du selbst ein, ebenso die Bexio-ID einer Kostenstelle und Beginn und Ende einer Phase. Eine Kostenstelle, einen Meilenstein oder eine Phase legt das Tool bei einem Projekt an und verschiebt sie nicht in ein anderes. Einen Meilenstein legt das Tool nur mit Datum an, wie das Formular; nennst du keines, fragt es nach. Beim Lesen eines Projekts nennt das Tool die zuständige Person mit Namen.
- **Prozess anlegen und ändern:** ein neuer Prozess ist ein Entwurf. Status, Zuständigkeit und Frist ändert das Tool nur mit den Knöpfen (siehe [Knöpfe](#knopfe)). Das Diagramm zeichnest du selbst in ELIZA. Listenfelder wie Admins oder Team ersetzt das Tool als ganze Liste und gibt deshalb alle an, die bleiben sollen. Formular-Vorlagen verknüpft das Tool wie das Formular: neu nur aktive Vorlagen und Entwürfe, die du siehst. Bereits verknüpfte, auch archivierte, lässt es stehen, ausser du willst sie lösen. Verknüpfungen auf Vorlagen, die du nicht siehst, bleiben erhalten.
- **Prozessschritt anlegen und ändern:** in einem Prozess, den du ändern darfst. Einem freigegebenen Prozess fügt das Tool keinen Schritt hinzu, wie in der Oberfläche; es bietet dir stattdessen eine Arbeitskopie an, wenn deine Instanz Arbeitskopien nutzt, du eine Arbeitskopie erstellen darfst (Admin des Prozesses oder Recht `prozesse.change_prozesse`) und Prozesse und Prozessschritte anlegen darfst (Rechte `prozesse.add_prozesse` und `prozesse.add_prozessschritte`, wie in der Gruppe `prozesse_admin`). Einen Schritt in einen anderen Prozess verschiebt das Tool nur mit dem Knopf. Listenfelder wie Dokumente, Ordner oder Formular-Vorlagen ersetzt das Tool als ganze Liste und gibt deshalb alle an, die bleiben sollen. Formular-Vorlagen verknüpft es wie das Formular: neu nur aktive Vorlagen und Entwürfe, die du siehst. Bereits verknüpfte, auch archivierte, lässt es stehen, ausser du willst sie lösen. Verknüpfungen auf Vorlagen, die du nicht siehst, bleiben erhalten.
- **Hilfsmittel, Labels, Arten von Hilfsmitteln und Periodizitäten anlegen und ändern:** Die Datei eines Hilfsmittels lädst du selbst hoch. Labels gelten für Prozesse und Dokumente, eine Änderung wirkt in beiden Bereichen.
- **Meldung ändern:** Titel, Beschreibung, Lösungsvorschlag, Ereignisdatum, Referenznummer, Kosten, Prozesse, Klassifizierung, Kategorien und Archivieren, wie im Änderungsformular. Kategorien nimmt das Tool nur aus dem Meldekreis der Meldung und gibt beim Ändern alle an, die bleiben sollen. Setzt es die Klassifizierung auf «vertraulich» oder «geheim» oder archiviert es, kannst du die Meldung danach womöglich nicht mehr sehen oder ändern; das sagt es dir vorher. Das Ändern benachrichtigt niemanden.
- **Antwort auf eine Meldung ändern:** Text und interne Notiz, auch bei Antworten anderer Personen, wie in ELIZA. Das Tool nennt dir vorher, wer die Antwort verfasst hat, und sagt es, wenn eine interne Notiz für alle sichtbar würde.
- **Wissensartikel anlegen und ändern:** ein neuer Artikel ist ein Entwurf. Freigeben und mit Meldungen verknüpfen machst du selbst in ELIZA, ein freigegebener Artikel lässt sich nicht mehr ändern. In einem Meldekreis ohne Wissensdatenbank legt das Tool keinen Artikel an.
- **Kategorien von Meldungen anlegen und ändern:** den Titel, in einem Meldekreis, den du ändern darfst, und mit dem Recht, Kategorien anzulegen beziehungsweise zu ändern. Die Farbe stellst du selbst ein.
- **Kontakte, Organisationen, Labels und Rollen im CRM anlegen und ändern:** Das Tool sucht vorher, ob es den Kontakt oder die Organisation schon gibt, weil ELIZA beim Speichern nicht auf Dubletten prüft. Es erfasst nur Angaben, die du nennst. Ohne Anrede speichert ELIZA einen neuen Kontakt als «Herr»; nennst du keine, fragt das Tool danach.
- **Beteiligung anlegen und ändern:** Kontakt oder Organisation mit einer Rolle bei einem Vertrag, Projekt, Inventarobjekt, einer Teams-Karte oder einem Prüfmittel, wenn deine Instanz das Modul eingeschaltet hat. Das Objekt legst du beim Erfassen fest, später wechselt es nicht mehr. Kontakt, Organisation und Rolle müssen schon bestehen.
- **Vertrag anlegen und ändern:** in einem Ordner oder ohne. Das Tool fragt dich nach dem Ordner. Ohne Ordner ist ein Vertrag für alle sichtbar, die Verträge lesen dürfen; das sagt es dir vorher. In einen Ordner verschiebt es einen Vertrag nur, wenn du dort Verträge anlegen darfst, und aus einem Ordner nimmt es ihn nicht heraus. Eine Arbeitskopie bleibt im Ordner ihres Originals. Ist der Freigabe-Workflow eingeschaltet, ist «Entwurf» kein Status, wie im Formular, und einen freigegebenen Vertrag bei Arbeitskopie-Pflicht änderst du in ELIZA. Das Tool nennt vorher die Federführung, die später Meldungen zu Vertragsende und Kündigungsfrist bekommt.
- **Vertragsordner, Vertragspartner, Vertragsarten, Einheiten und Zahlungsarten anlegen und ändern:** Wer einen Ordner anlegt, wird seine Besitzerin oder sein Besitzer; Admins und Team setzt du selbst. Eine geänderte Zahlungsart rechnet alle Verträge und Wertflüsse damit neu.
- **Lieferantenbewertung anlegen und ändern:** für genau einen Partner (Vertragspartner, Organisation oder Kontakt), mit Datum, wie das Formular. Nennst du kein Datum, fragt das Tool nach.
- **Wertfluss anlegen und ändern:** nur, wenn deine Instanz Wertflüsse eingeschaltet hat. Betrag, Einheit und Daten nennst du selbst, ELIZA übernimmt nichts aus dem Vertrag.
- **Titel und Beschreibung eines Vertragsdokuments ändern:** Die Datei lädst du selbst hoch.
- **Kursordner, Kurse, Lektionen und Abschnitte anlegen und ändern:** ein neuer Kurs ist ein Entwurf; Freigeben geht mit dem Status «freigegeben». Das Tool fragt dich nach dem Ordner. Kurse legt es nur an, wenn du das Recht hast, Kurse anzulegen, auch in einem Ordner; als Admin eines Ordners ohne dieses Recht legst du Kurse in ELIZA an. Ein freigegebener Kurs ist für alle sichtbar, die Kurse lesen dürfen, auch bei Sichtbarkeit «geschützt» und auch in einem Ordner; das sagt das Tool vorher. Admins und Team eines Ordners ersetzt das Tool als ganze Liste und nennt sie. Den Inhalt einer Lektion legt das Tool als Abschnitte an (Text als Markdown, Layout, verknüpfte Dokumente). Dateien, Bilder, Zeichnungen und Videos fügst du selbst in ELIZA ein, ebenso Unterlektionen, das Titelbild und das Verschieben einer Lektion in einen anderen Kurs.
- **Teilnehmende zu einem Kurs anmelden:** nur Verantwortliche des Kurses, für Personen, die den Kurs sehen. Die angemeldete Person bekommt die Benachrichtigung «hat dich zum Kurs eingeladen», ausser das Tool schaltet sie ab; es nennt sie vorher. Das Startdatum ist Pflicht, das Tool fragt danach.
- **Eigene Lektion abschliessen:** nur der eigene Lernstand, mit dem Knopf «Abschliessen». Ein Pflicht-Quiz bestehst du vorher in ELIZA. Der Abschluss benachrichtigt niemanden und schliesst die Anmeldung nicht ab; den Lernstand einer anderen Person schliesst das Tool nicht ab. Verantwortliche einer Lektion erfassen mit dem Tool auch für andere Personen einen Lektionsbesuch, wie «Lektionsbesuch erfassen» in der Oberfläche; niemand wird benachrichtigt. Sonst erfasst das Tool ihn nur für dich selbst.
- **Lektionen, Abschnitte und Unterlektionen sortieren:** mit den Knöpfen zum Sortieren, in der Reihenfolge, die du nennst.
- **Formular-Vorlagen mit Abschnitten, Fragen, Optionen, Folgeformularen und Aktionen anlegen und ändern:** eine neue Vorlage ist ohne Angabe sofort aktiv und für alle Angemeldeten ausfüllbar; das Tool legt sie deshalb als Entwurf an, solange Fragen fehlen. Einstellungen einer Frage setzt es nur bei Bewertungsfragen (Minimum, Maximum und Schritt als ganze Zahlen, ohne Angabe von 0 bis 10, Anzeige als Regler, Zahlenfeld oder Knöpfe) und leert sie bei anderen Fragen nicht; Optionen nur mit Text und der Markierung «richtig». Regeln eines Folgeformulars schreibt es nur so, wie sie der Regel-Editor der Oberfläche schreibt. Fragen vom Typ «Unterformular» und die Wahl der Vorlage dafür richtest du selbst in ELIZA ein. Schaltet das Tool einen Link ohne Anmeldung (`public_form`) oder eine Einbettung ein, sagt es dir das vorher. Ist die Startvorlage öffentlich, füllen Personen ohne Anmeldung nur die Folgeformulare aus, die selbst öffentlich sind; das Tool sagt dir das vorher. Eine Aktion «E-Mail senden» schickt Mails an die Ausfüllenden und die Formular-Admins, solange der Schalter nicht aus ist, an die gewählten Personen und an Adressen, die auch ausserhalb von ELIZA liegen können; das Tool nennt alle Empfänger und prüft die Adressen. Eine Aktion «Meldung erstellen» geht nur in einen freigegebenen Meldekreis, den du verwaltest, und benachrichtigt die Admins des Meldekreises; hängt eine bestehende Aktion an einem Meldekreis, der nicht freigegeben ist, ändert das Tool sie nur zusammen mit einem freigegebenen Meldekreis; ausserdem geht eine Mail an dessen zentrale Benachrichtigungs-Adresse. Aktionen der Startvorlage laufen bei Folgeformularen erst am Ende der Kette.
- **Formulare ausfüllen und einreichen:** nur Formulare, die du siehst. Das Tool speichert die Antworten immer zuerst als Entwurf, prüft sie und reicht erst danach und nach deinem Ja ein; es nennt vorher die Aktionen der Vorlage (Meldekreis und alle Mail-Empfänger). Ein neues Formular über das Tool startest du nur, wenn du Formulare anlegen darfst. Einreichen geht nicht, wenn das Formular ein Captcha oder eine Pflicht-Datei hat; eine Pflicht-Unterschrift oder ein Pflicht-Unterformular blockiert nur, solange es fehlt. Wo das Einreichen blockiert ist, speichert das Tool trotzdem den Entwurf, und du reichst selbst ein. Tests und Quiz füllst du selbst aus, ebenso ein öffentlich eingereichtes Formular, das dir nicht zugewiesen ist und das du nicht angelegt hast, wenn du Formulare nicht ändern darfst. Die Folgeformulare startet und beendet das Tool mit den Knöpfen.
- **News und Events in einem bestehenden Newskanal anlegen und ändern:** News legt das Tool mit Titel, Text und Veröffentlichungsdatum an; ändern, in einen anderen Kanal verschieben und anheften (dazu braucht es ein Startdatum) geht danach. Beim Speichern benachrichtigt ELIZA niemanden. Bei einem Event meldet ELIZA später von selbst: am Tag vor dem Anmeldeschluss die Eingeladenen ohne Antwort und die erfassende Person, am Anmeldeschluss die Event-Admins, wenn die Mindestzahl nicht erreicht ist, und am Starttag die erfassende Person und alle mit Zusage; das Tool nennt dir diese Meldungen und die Admins, die du angibst, vorher. Bild, Dateien und Kommentare ergänzt du selbst in ELIZA. Newskanäle richtest du ebenfalls selbst in ELIZA ein; die KI legt keine an und ändert keine. Einen Kanal oder ein Event, den du nicht sehen darfst, behandelt das Tool wie ein unbekanntes: Du bekommst dieselbe Antwort.
- **Person zu einem Event einladen und die Teilnahme ändern:** Das Tool lädt eine Person ein oder trägt sie als angemeldet ein; ist das Event voll, kommt sie auf die Warteliste. ELIZA benachrichtigt die Person, und das Tool nennt sie vorher. Den Status ändert es nur auf «angemeldet» oder «abgesagt» und nur vor Beginn des Events. Bei der Teilnahme einer anderen Person sagt es nur eine Zusage ab, wie die Teilnehmerliste; eine Einladung oder einen Platz auf der Warteliste sagt nur die Person selbst ab. Die Anwesenheit trägt es erst ab Beginn ein; verlangt das Event eine Unterschrift, bestätigt jede Person ihre Anwesenheit selbst in ELIZA. Eine Teilnahme entfernst du selbst in ELIZA.
- **Absenz einreichen und ändern:** nur, wenn deine Instanz die Zeiterfassung und die Absenzen eingeschaltet hat. Das Tool liest die Absenzarten bei ELIZA nach, samt der Angabe, ob eine Art automatisch freigegeben wird und als Arbeitszeit zählt, und kennt deine vorgesetzte Person. Es speichert die Absenz für dich; für eine andere Person nur, wenn du Absenzen bearbeiten darfst. ELIZA benachrichtigt beim Erfassen die vorgesetzte Person der betroffenen Person, bei einer automatisch freigegebenen Art auch die betroffene Person, und das Tool nennt sie vorher. Eigene Absenzen ändert es nur im Status «geplant». Einreichen, zurückziehen, freigeben, zurückweisen und reaktivieren macht das Tool mit dem Knopf «Rückmeldung» (`followup`); einreichen und zurückziehen darf auch die betroffene Person, freigeben und zurückweisen nur die vorgesetzte Person oder wer Absenzen bearbeiten darf. Gibst du eine Absenz frei, trägt ELIZA je nach Absenzart Arbeitszeit ein. Weist du eine freigegebene Absenz danach zurück, nimmt ELIZA diese Arbeitszeit nicht zurück; das Tool sagt dir das.
- **Feiertag erfassen und ändern:** Ein Feiertag gilt für alle Mitarbeitenden und ändert ihre Sollzeit. ELIZA prüft nicht auf Doppelte; das Tool sucht deshalb vorher, ob es am Datum schon einen gibt. Niemand wird benachrichtigt.
- **Inventarobjekt, Zuordnung und Prüfmittel anlegen und ändern:** Art, Lieferant, Standort und Kategorien nennst du als bestehende Einträge, neue legst du in ELIZA an. Kosten, Bilder und Dateien erfasst du selbst. Eine Zuordnung verbindet ein Objekt mit einer Person oder einer Organisationseinheit und lässt sich ändern, wie auf der Änderungsseite der Oberfläche; ehemalige Mitarbeitende lehnt ELIZA selbst ab. Beim Prüfmittel nennt das Tool die Federführung: Sie darf das Prüfmittel ändern und sieht die nächste Prüfung in «Meine Fristen». Eine Prüfung erfasst das Tool als SWOT-Massnahme mit Kontrolle; eine erledigte Kontrolle kann die nächste Prüfung verschieben. Gibt es keine aktive Federführung, sehen Personen mit dem Recht, Prüfmittel zu ändern, die Frist. Prozesse verknüpft das Tool nur, wenn du sie siehst. Beim Speichern wird niemand benachrichtigt.
- **Mitarbeitende anlegen und ändern, nur mit geschäftlichen Angaben:** Name, Anrede, Titel, Funktionsbezeichnung, Geschäftsadresse und geschäftliche Kontaktdaten, Anstellungsart intern oder extern, Anstellungsgrad und Eintrittsdatum. Das Tool sucht vorher, ob es die Person schon gibt, weil ELIZA beim Speichern nicht auf Dubletten prüft. Private Daten (alles im Tab «Private Daten», zum Beispiel Privatadresse, Geburtsdatum, AHV-Nummer und Bankverbindung) erfasst und ändert das Tool nie, auch wenn du das Recht auf private Daten hast. Benutzerkonto, vorgesetzte Person und Bild setzt du selbst, ebenso den Austritt («ehemalig») und das Austrittsdatum, weil beide das Benutzerkonto der Person deaktivieren. Ändern geht über das Tool nur mit dem Recht, Mitarbeitende zu ändern (`organisation.change_mitarbeitende`); als vorgesetzte Person, Admin oder HR-Admin einer Einheit ohne dieses Recht änderst du in ELIZA. Aus dem Eintrittsdatum meldet ELIZA später Dienstjubiläen an die vorgesetzte Person, die HR-Admins der Einheit und wer Geburtstage oder private Daten sehen darf; das Tool sagt dir das vorher.
- **Organisationseinheiten anlegen und ändern:** mit den Feldern des Formulars ausser Admins, HR-Admins, Profilbild und Remote Key; diese setzt du selbst. Admins können jeder Person der Einheit jede Funktion mit deren Rechten geben, auch sich selbst, und HR-Admins sehen private Daten und Personaldossier. Übergeordnete Einheit und Leitungen nimmt das Tool nur aus dem, was du siehst. Die Leitungen ersetzt das Tool als ganze Liste: Es liest die Einheit vorher und schickt alle mit, die bleiben sollen. Eine Leitung oder übergeordnete Einheit, die du nicht siehst, bleibt wie beim Bearbeiten in ELIZA verknüpft; ELIZA lehnt ab, wenn das Tool sie entfernen würde.
- **Mitwirkungen anlegen und ändern:** Eine Mitwirkung verbindet eine Person mit einer Organisationseinheit, einer Funktion oder einem Prozess; mit einem Enddatum beendet das Tool sie. Solange eine Mitwirkung läuft, bekommt das Benutzerkonto der Person die Rechte ihrer Funktion und ihrer Einheit. Mit einer Einheit ändern deren Admins und HR-Admins danach die Person; die HR-Admins sehen und ändern zudem die privaten Daten, das Personaldossier und die Weiterbildungen der Person und bekommen Geburtstag, Dienstjubiläum und Pensionierung gemeldet. Das Tool liest die Einheit deshalb vorher und nennt dir Person, Funktion, Einheit, HR-Admins und Admins. ELIZA rechnet die Rechte nur beim Speichern neu: Ein Enddatum in der Zukunft nimmt sie an diesem Tag nicht weg, und eine geänderte Funktion oder Einheit lässt die bisherigen Rechte bestehen. Sollen die Rechte jetzt enden, beendet das Tool die Mitwirkung mit einem Enddatum vor heute; für eine andere Funktion oder Einheit legt es eine neue Mitwirkung an. Verknüpfen kann es nur Personen, Einheiten, Funktionen, Prozesse und Qualifikationen, die du siehst; eine Verknüpfung, die du nicht siehst, ersetzt es nur durch eine sichtbare und leert sie nicht, wie beim Bearbeiten in ELIZA.
- **Funktionen anlegen und ändern:** wenn deine Instanz die Funktionen eingeschaltet hat. Die Rechte einer Funktion und verknüpfte Dokumente setzt du selbst.
- **Skills, Skill-Kategorien und Skill-Einträge anlegen und ändern:** wenn deine Instanz die Skills eingeschaltet hat. Qualifikationen (zum Beispiel «Experte») legt das Tool auch ohne diesen Schalter an und ändert sie; eine Änderung wirkt bei allen Mitwirkungen und Skill-Einträgen mit dieser Qualifikation.
- **Weiterbildungen anlegen und ändern:** wenn deine Instanz die Weiterbildungen eingeschaltet hat, für dich selbst, als vorgesetzte Person und für andere Personen, wenn du für sie Weiterbildungen erfassen darfst. ELIZA benachrichtigt die zuständige Person sieben Tage vor dem Ablauf und am Tag nach dem Ablauf, bei einem schon vergangenen Ablaufdatum in der nächsten Nacht, und setzt die Weiterbildung dann auf «abgelaufen»; das Tool nennt die Person dir vorher. Ohne Status speichert ELIZA «abgeschlossen», das Tool fragt deshalb nach dem Status. Dateien lädst du selbst hoch.
- **Monatsabschlüsse erstellen, aktualisieren, abschliessen, wieder eröffnen und korrigieren:** nur, wenn deine Instanz die Zeiterfassung eingeschaltet hat. Ein Monat gilt für alle Mitarbeitenden. Das Tool legt ihn an (rechnet für alle Personen mit Anstellung im Monat oder im Folgemonat Stunden, Soll, Gleitzeit, Ferien und Krankheitstage), aktualisiert die Einträge nur im offenen Monat, schliesst ihn ab, ohne neu zu rechnen, und eröffnet ihn wieder. Mit dem Abschluss baut der aktuelle Gleitzeit- und Feriensaldo aller Personen auf diesem Monat auf, ausser ein späterer Monat ist schon abgeschlossen. Die Korrekturen von Gleitzeit- und Feriensaldo einer Person und ihr Kommentar ersetzen den bisherigen Wert. Die Rechte sind dieselben wie in der Oberfläche; niemand wird benachrichtigt (siehe [Knöpfe](#knopfe)).
- **Knöpfe drücken:** wie in der Oberfläche, mit Verlauf, Kommentar und Benachrichtigung (siehe [Knöpfe](#knopfe)).

Das KI-Tool spricht eine Meldung mit ihrer Nummer an, zum Beispiel «TST-12». Eine Meldung bearbeiten kann es nur, wenn du sie selbst bearbeiten darfst. Einen Statuswechsel, der im aktuellen Status nicht möglich ist, lehnt ELIZA ab und nennt die möglichen. Zuständig kann nur eine Person aus den Admins und dem Team des Meldekreises werden. Die Zuständigkeit oder die Frist entfernt das Tool nur mit einem eigenen Schalter (`remove_assigned_user`, `remove_deadline`); `null` oder ein leerer Text im Feld bedeutet «nicht angegeben» und ändert nichts.

Alles andere, zum Beispiel etwas löschen, eine Datei hochladen, Dateien, Bilder und Videos in einen Kurs einfügen, Unterformulare einrichten, einen Test oder ein Quiz ausfüllen, ein Formular mit Captcha oder Pflicht-Datei einreichen, einen Newskanal anlegen, News kommentieren, Absenzarten, Inventararten oder Standorte einrichten, eine Meldung in einen anderen Meldekreis verschieben, Beitragende einer Meldung ändern, einen Wissensartikel freigeben, einen Meldekreis ändern oder archivieren, den Typ eines Zielsystems ändern, Prozesse, Projekte und Kennzahlen einer Zielsetzung oder Hilfsmittel und Auditkriterien eines Kapitels verknüpfen, Labels anlegen oder ändern, ein Board oder eine Sitzung aus einer Vorlage anlegen, die Farbe eines Space ändern, ein Board in einen anderen Space oder eine Liste in ein anderes Board verschieben, eine Sitzung kopieren, einen Dokumentordner verschieben, archivieren, duplizieren oder mit einem Prozessdiagramm verknüpfen, das PDF-Layout-Profil einer Dokumentart einstellen, einen Monatsabschluss löschen, private Daten von Mitarbeitenden erfassen, ein Benutzerkonto mit einer Person verknüpfen, Admins und HR-Admins einer Einheit setzen, einen Austritt oder ein Austrittsdatum erfassen, Gehälter, Personaldossiers und HR-Dokumentarten pflegen, machst du selbst in ELIZA; das KI-Tool gibt dir den Link.

#### Knöpfe

Ein Knopf löst in ELIZA mehr aus als das Speichern von Feldern: Er schreibt den Verlauf, einen Kommentar und Benachrichtigungen. Das KI-Tool drückt nur diese Knöpfe, und erst nach deinem Ja:

| Bereich | Knöpfe |
|---------|--------|
| Teams-Karten | Archivieren, Reaktivieren, Kommentar hinzufügen |
| Dokumente (ohne Datei) | Zur Prüfung geben, Freigeben, Zurückweisen, Archivieren, Neue Version, Template-Sprache und PDF-Darstellung ein- oder ausschalten |
| Projekte | Status ändern; Status, Zuständigkeit und Frist mit Kommentar ändern |
| Prozesse | Status ändern; Status, Zuständigkeit und Frist mit Kommentar ändern; Arbeitskopie erstellen |
| Prozessschritte | In einen anderen Prozess verschieben |
| Lernstände | Abschliessen (nur der eigene Lernstand) |
| Kurse und Lektionen | Lektionen, Abschnitte und Unterlektionen sortieren |
| Formulare | Antworten als Entwurf speichern und einreichen, Folgeformular starten, Fall ohne Folgeformular abschliessen (keine Tests und Quiz; einreichen nicht bei Captcha, Pflicht-Datei, fehlender Pflicht-Unterschrift oder leerem Pflicht-Unterformular; öffentlich eingereichte Formulare nur, wenn sie dir zugewiesen sind, du sie angelegt hast oder Formulare ändern darfst) |
| Monatsabschlüsse (ganzer Monat) | Einträge aktualisieren, Monat abschliessen, Monat wieder eröffnen |
| Absenzen | Rückmeldung (einreichen, zurückziehen, freigeben, zurückweisen, reaktivieren; nur mit eingeschalteter Zeiterfassung und eingeschalteten Absenzen) |
| Managementbewertungen (OKR-Perioden) | Themen aus der ISO-9001-Vorlage füllen, Themen aus einer anderen Bewertung übernehmen, Themen sortieren, Bewertung abschliessen |
| Spaces | Personen ins Team einladen, Personen entfernen, Admins festlegen, Archivieren, Wiederherstellen |
| Boards | Archivieren, Zurückholen |

- **Benachrichtigte Personen:** Das Tool nennt in seiner Zusammenfassung alle, die eine Benachrichtigung bekommen. Beim Prüfen, Freigeben, Zurückweisen und Archivieren eines Dokuments ist das auch die aktuell zuständige Person, nicht nur die, die du nennst; ihren Namen liest das Tool vorher beim Dokument nach.
- **Projekte:** Die Knöpfe für Status, Zuständigkeit und Frist gehen nur, wenn du das Projekt ändern darfst, wie beim Knopf «Status bearbeiten». Beide Knöpfe benachrichtigen die danach zuständige Person per Mail, auch wenn sich die Zuständigkeit nicht ändert; mit Kommentar benachrichtigt ELIZA zusätzlich alle Personen, die du dafür nennst. Das Tool nennt sie vorher mit Namen.
- **Prozesse:** Die Knöpfe für Status, Zuständigkeit und Frist gehen nur, wenn du im Workflow des Prozesses mitarbeitest (Admin, Prüfung oder Freigabe). Den Status ändert das Tool mit dem Knopf für Status, Zuständigkeit und Frist mit Kommentar; der Knopf «Status ändern» verlangt zusätzlich das Recht, Prozesse anzulegen (`prozesse.add_prozesse`), das Prüfende und Freigebende oft nicht haben. Mit Kommentar benachrichtigt ELIZA nur die Personen, die du dafür nennst. Status ändern, Arbeitskopie erstellen und Schritt verschieben benachrichtigen niemanden. Zurückziehen, Überarbeiten, Archivieren und für abgelaufen erklären verbergen einen freigegebenen Prozess vor normalen Leserinnen und Lesern; das Tool sagt dir das vorher. Kommentare an Prozessen und Prozessschritten schreibt das Tool nicht.
- **Managementbewertung:** Beim Übernehmen aus einer anderen Bewertung nimmt das Tool nur Bewertungen, die du siehst; Nachweise kopiert es nur, wenn du das willst, und nur die sichtbaren. Beim Sortieren gibt das Tool die bisherige und die neue Reihenfolge an. Beim Abschliessen archiviert ELIZA ein PDF und sperrt Bewertung und Themen unwiderruflich; auch das Zielsystem lässt sich danach weder ändern noch löschen. Das Tool sagt dir vorher «Danach sind keine Änderungen mehr möglich» und fragt nach. Eine Bewertung ohne Themen schliesst es nicht ab, wie die Oberfläche, die den Knopf dann nicht zeigt. Verantwortliche der Periode dürfen sie in ELIZA abschliessen; über das Tool geht es nur mit dem Recht `okr.change_period`. Danach ändern nur noch die Verantwortlichen der Perioden diese, und eine danach im Zielsystem angelegte Periode kann niemand mehr ändern; das Tool sagt das vor dem Abschluss und schlägt für weitere Perioden ein neues Zielsystem vor.
- **Spaces:** Einladen und Entfernen benachrichtigen die eingeladenen oder entfernten Personen nur, wenn du das willst und Benachrichtigungen in ELIZA eingeschaltet sind, mit deiner Nachricht. Entfernen nimmt nur Personen aus dem Team, dich selbst nicht. «Admins festlegen» ersetzt alle Admins; du und die Besitzerin oder der Besitzer bleiben Admin. Das Tool nennt vorher alle, die Zugriff oder Admin-Recht bekommen oder verlieren. Archivieren nimmt alle Boards, Karten und Sitzungen des Space mit; Wiederherstellen holt alles zurück, auch vorher einzeln Archiviertes. Das Tool sagt dir das vorher.
- **Boards:** Archivieren nimmt alle Karten des Boards mit; Zurückholen holt alle Karten zurück, auch vorher einzeln archivierte. Das Tool sagt dir das vorher.
- **Monatsabschlüsse:** Ein Monat zu erstellen oder zu aktualisieren braucht `change_worktime` oder `change_absence`, abschliessen und wieder eröffnen `change_worktime` oder `change_monthlyreport`, eine Korrektur `change_monthlyclosing`; hast du das Recht in ELIZA nicht, lehnt ELIZA ab. Das Tool sucht den Monat vorher und gibt ihn immer mit seinem ersten Tag an. Beim Erstellen sagt es dir, für wie viele Personen ELIZA rechnet, dass alle erfassten Arbeitszeiten zählen (auch nicht freigegebene), aber nur bewilligte Absenzen, und dass der Saldo des Vormonats auch dann übernommen wird, wenn dieser noch offen ist. Aktualisieren geht nur im offenen Monat; ist er abgeschlossen, öffnet das Tool ihn nicht von sich aus, sondern fragt dich vorher. Vor dem Abschliessen und vor dem Wiedereröffnen nennt das Tool die Zahl der betroffenen Personen und die Wirkung auf die Salden. Es sagt dir beim Abschliessen, ob der Vormonat noch offen ist, und beim Wiedereröffnen, ob spätere Monate abgeschlossen sind; diese behalten ihren Übertrag, bis du sie wieder eröffnest und aktualisierst. Abschliessen rechnet nicht neu: Haben sich Arbeitszeiten geändert, bietet das Tool vorher das Aktualisieren an. Danach sieht jede Person ihren Abschluss; ihr aktueller Gleitzeit- und Feriensaldo baut immer auf ihrem jüngsten abgeschlossenen Monat auf. Die Summen des Monats füllt erst das Abschliessen; in einem offenen Monat sind sie 0 oder stammen vom letzten Abschluss, und die Brutto-Summe bleibt 0. Aktuelle Werte stehen in den Abschlüssen der Personen. Arbeitszeiten und Absenzen bleiben auch in einem abgeschlossenen Monat änderbar. Bei einer Korrektur liest das Tool den Abschluss vorher und nennt dir alten und neuen Wert; die Gleitzeit gibst du als `HH:MM` an, negativ mit Minus (zum Beispiel `-04:15`), die Ferien in Tagen (zum Beispiel `2.5`). Die Korrektur ändert den Gesamtsaldo des Monats sofort, in einem abgeschlossenen Monat auch den aktuellen Saldo der Person; spätere Monate übernehmen sie erst nach dem Aktualisieren. Status, Person, Monat und gerechnete Werte ändert das Tool nie, einen Monatsabschluss löscht es nicht; das Tool gibt dir den Link zur Monatsseite.
- **Arbeitskopie freigeben:** Gibst du eine Arbeitskopie eines Dokuments oder eines Prozesses frei, löscht ELIZA die Kopie und ersetzt das Original. Das Tool sagt dir das vorher.
- **Status:** Welche Knöpfe gehen, hängt vom Status des Datensatzes ab. Ist ein Knopf im aktuellen Status nicht möglich, lehnt ELIZA ab, und das Tool sagt es dir.
- **Rechte:** Das Tool darf einen Knopf nur drücken, wenn du ihn in ELIZA auch selbst drücken dürftest.

Neue Bereiche und Knöpfe kommen mit einem ELIZA-Update dazu. Das Tool liest sie bei ELIZA nach; die Liste steht nicht mehr im Paket von Copilot.

#### Arbeitszeiten

Das gilt, wenn die Zeiterfassung in deiner Instanz eingeschaltet ist und du sie nutzen darfst. Das KI-Tool arbeitet dabei so:

- **Erfassen:** Du nennst einen abgeschlossenen Zeitraum, zum Beispiel «von 8:28 bis 12:20». Das Tool speichert ihn als Arbeitszeit für dich, nie für andere Personen, und immer im Status «erfasst». Dazu braucht es ein Datum; nennst du keines, soll das Tool nachfragen.
- **Stundenart und Kostenstelle:** Nennst du keine Stundenart, schlägt das Tool die Stundenart deines letzten Eintrags vor, dazu die zuletzt verwendete Kostenstelle. Es nennt beides in der Zusammenfassung und fragt nach, bevor es speichert. Eine Kostenstelle setzt ELIZA nie von sich aus: Nennst du keine, bleibt der Eintrag ohne Kostenstelle.
- **Korrigieren:** Das Tool ändert nur deine eigenen Einträge im Status «erfasst». Ist ein Eintrag eingereicht oder verbucht, lehnt ELIZA ab, nennt den Grund und gibt dir den Link zur Tagesansicht. Einen eingereichten Tag holst du dort mit «Einträge überarbeiten» selbst zurück; einen verbuchten können nur deine vorgesetzte Person und die Admins der Zeiterfassung zurückholen. Einträge anderer Personen ändert das Tool nie, auch nicht, wenn du als Vorgesetzte oder Vorgesetzter oder in der HR sie in ELIZA sehen darfst.
- **Zeitfenster:** Wie in der Tagesansicht gilt: Zukünftige Tage und Tage ausserhalb der erlaubten Bearbeitungsdauer lehnt ELIZA ab, ausser du darfst Arbeitszeiten löschen.
- **Timer starten:** «Ich fange jetzt an» startet einen Timer mit der aktuellen Uhrzeit, «ich fange um 8:15 an» mit der genannten. Das Datum ist immer heute, eine Startzeit in der Zukunft lehnt ELIZA ab. Läuft schon ein Timer, nennt das Tool ihn. Die Kostenstelle trägt das Tool danach beim laufenden Eintrag nach.
- **Timer stoppen:** «Ich höre jetzt auf» setzt die aktuelle Uhrzeit als Ende, mit einer genannten Zeit diese. ELIZA prüft dabei wie in der Tagesansicht, ob sich der Eintrag mit einem anderen überschneidet. Das Stoppen geht auch, wenn der Tag schon eingereicht ist. Stammt der Timer von einem früheren Tag, stoppt ihn das Tool nur mit einer Endzeit von dir und fragt danach, damit ein vergessener Timer nicht bis jetzt weiterläuft.
- **Nur Stempeln:** Gilt für dich der Modus «Nur Stempeln», nimmt ELIZA beim Starten und Stoppen immer die aktuelle Uhrzeit, auch wenn du eine andere nennst.
- **Pausenwarnung:** Warnt ELIZA, dass du zu lange ohne Pause gearbeitet hast, gibt das Tool die Warnung an dich weiter.

Nicht möglich sind Löschen, Einreichen und Verbuchen eines Tages, Spesen und Einträge als Dauer ohne Uhrzeiten. Das erledigst du in ELIZA selbst.

### Vor dem Speichern fragt das Tool nach

Die KI-Tools sind so eingerichtet, dass sie vor dem Erfassen oder Ändern nicht einfach speichern:

1. Das Tool prüft die Pflichtfelder und fragt fehlende Angaben nach.
2. Es zeigt dir in einer kurzen Liste, was es speichern oder auslösen will (Bereich, Datensatz, Felder mit Werten oder den Knopf), und nennt alle Personen, die eine Benachrichtigung bekommen. Dann fragt es: «Soll ich das so in ELIZA speichern?», bei einem Knopf «Soll ich das so in ELIZA auslösen?»
3. Es soll erst speichern, wenn du in deiner nächsten Nachricht klar zustimmst, zum Beispiel mit «ja». Ohne Zustimmung soll es nichts speichern.
4. Nach dem Speichern nennt es dir die Nummer oder ID des Datensatzes.

**Löschen ist nicht möglich.** Das Tool gibt dir den Link, damit du es in ELIZA erledigst. Eine Verbindung, die nur lesen darf, sagt dir, dass sie über diese Verbindung nichts erfassen oder ändern kann.

> **⚠️ Wichtig:** Was ein KI-Tool speichern kann, bestimmt ELIZA (siehe [Was die KI-Tools speichern können](#was-die-ki-tools-speichern-konnen)). Dass es vorher nachfragt, ist dagegen nur eine Anweisung an das KI-Tool und keine Sperre in ELIZA. Lies die Liste deshalb, bevor du zustimmst, und kontrolliere das Ergebnis in ELIZA.

> **💡 Tipp:** Es gelten immer deine persönlichen ELIZA-Berechtigungen. Auch mit Schreibzugriff kann das KI-Tool nur Daten ändern, die du selbst ändern dürftest. Benutzerverwaltung, Gruppen, Gehälter und Personaldossiers sind für KI-Tools ganz gesperrt; den Datenschutz können sie lesen, aber nicht ändern.

### Beispiel-Anfragen

```text
Welche Datenbereiche stehen in ELIZA zur Verfügung?

Zeig mir meine offenen Meldungen.

Liste die fünf neuesten Meldungen im Meldekreis «Qualität» auf.

Erfasse eine Meldung: Titel «Drucker im 2. Stock defekt»,
Beschreibung «Papierstau lässt sich nicht beheben».

Aktualisiere den Glossareintrag «QMS» mit einer besseren Beschreibung.

Setze die Meldung TST-12 auf «in Bearbeitung» und schreib dazu: «Ich kümmere mich darum.»

Was ist bei mir diese Woche fällig oder überfällig?

Wer hat das Personalreglement freigegeben, und welche Versionen gibt es?

Was hat sich im Personalreglement zuletzt geändert?

Wofür bin ich zuständig, und in welchen Prozessen wirke ich mit?

Wo fehlen uns Nachweise für ISO 9001?

Ich war heute von 8:28 bis 12:20 im Büro.

Ich fange jetzt an.
```

## Zugriff widerrufen

Du behältst jederzeit die Kontrolle über verbundene KI-Tools:

1. Öffne dein Profil: Klicke oben rechts auf dein Bild, auf dem Handy auf **Mein Profil**
2. Im Abschnitt **Verbundene Apps** siehst du alle Anwendungen, denen du Zugriff gewährt hast
3. Klicke bei der gewünschten Anwendung auf **Zugriff widerrufen**. Der Zugriff ist sofort beendet

> **⚠️ Wichtig:** Nach dem Widerruf muss sich das KI-Tool neu autorisieren, bevor es wieder auf ELIZA zugreifen kann.

## Best Practices

- ✅ **Mit Lesezugriff starten**: Nutze die KI-Tools zuerst nur lesend und bitte den ELIZA-Support erst bei Bedarf um das Schreiben.
- ✅ **Vor dem Ja prüfen**: Lies die Liste, die das Tool vor dem Speichern zeigt, und kontrolliere erstellte oder geänderte Datensätze in ELIZA. Jeder Eintrag ist dort mit deinem Namen im Änderungsprotokoll nachvollziehbar.
- ✅ **Nur nötige Tools einschalten** (Admins): Schalte auf «KI-Verbindungen» die Tools ab, die in eurer Organisation nicht vorgesehen sind.
- ✅ **Zugriffe aufräumen**: Widerrufe Freigaben für Tools, die du nicht mehr verwendest.
- ❌ **Vermeide** die Freigabe auf fremden Geräten: Autorisiere KI-Tools nur auf Geräten, die du selbst kontrollierst.

## Häufige Fragen (FAQ)

### Warum schlägt die Verbindung mit «404» oder «Nicht gefunden» fehl?

Der MCP-Server ist auf deiner Instanz nicht freigeschaltet. Er ist ein kostenpflichtiges Zusatzmodul: Bitte deine Administratorin oder deinen Administrator, ihn zu erwerben (Angebot über `hello@eliza.swiss`). Danach schaltet ELIZA ihn frei.

### Warum sehe ich nur zehn Werkzeuge (ohne Erstellen/Ändern)?

Es gibt zwei Gründe:

- Das Schreiben ist für deine Instanz ausgeschaltet. Bitte deine Administratorin oder deinen Administrator, es beim ELIZA-Support einschalten zu lassen.
- Die Verbindung wurde nur zum Lesen eingerichtet. Zeigt der Bildschirm «Zugriff autorisieren» nur «ELIZA-Daten über MCP lesen», hat das Tool nur das Lesen angefragt. Du kannst das dort nicht ändern, und erneutes Verbinden bringt dasselbe Ergebnis. Bei Microsoft 365 Copilot legt eine Administratorin oder ein Administrator auf «KI-Verbindungen» eine neue Verbindung an, nachdem das Schreiben eingeschaltet wurde (siehe [Microsoft 365 Copilot einrichten](#microsoft-365-copilot-einrichten)).

### Ich sehe die neuen Werkzeuge in ChatGPT nicht

ChatGPT merkt sich die Werkzeuge vom Zeitpunkt der Verbindung und fragt ELIZA nicht von selbst nach neuen; ELIZA kann sie auch nicht nachschieben. In Business- und Enterprise-Arbeitsbereichen aktualisiert die Administratorin oder der Administrator die Verbindung in den App-Einstellungen («Aktualisieren», englisch Refresh) und schaltet die neuen Aktionen ein, denn neu hinzugekommene Aktionen sind zuerst abgewählt. Mit einem persönlichen Konto entfernst du den Connector und fügst ihn neu hinzu. Starte danach eine neue Unterhaltung. Dann stehen auch `eliza_my_deadlines`, `eliza_history`, `eliza_compare_versions`, `eliza_my_responsibilities` und `eliza_standard_coverage` zur Verfügung. Bei Copilot kommen die neuen Werkzeuge nach dem ELIZA-Update von selbst; das Paket ab Version 1.9.x bringt zusätzlich die Regeln dazu.

### Ich sehe die Meldung, dass ich für ein Tool gesperrt bin. Was tun?

Beim Autorisieren zeigt ELIZA: «Du bist für das Tool «<Tool>» gesperrt. Wende dich an die Person, die ELIZA bei euch verwaltet.» Ein Admin hat dich für dieses Tool gesperrt. Andere Tools funktionieren weiter. Bitte den Admin, auf «KI-Verbindungen» in der Zeile mit deinem Namen **«Sperre aufheben»** zu klicken. Verbinde das Tool danach neu.

### Das Tool ist abgeschaltet. Was kann ich tun?

Beim Autorisieren zeigt ELIZA: «Das Tool «<Tool>» ist in ELIZA abgeschaltet. Wende dich an die Person, die ELIZA bei euch verwaltet.» oder eine ähnliche Fehlermeldung im KI-Tool. Bei einer neuen Verbindung von Claude oder ChatGPT lehnt ELIZA schon die Registrierung des Tools ab, und das KI-Tool zeigt den Fehler auf seine Weise an. Ein Admin hat das Tool auf «KI-Verbindungen» abgeschaltet. Erneutes Verbinden hilft erst, wenn ein Admin es wieder **einschaltet**.

### Ich sehe «Diese Anwendung ist für den Zugriff auf ELIZA nicht freigegeben». Was tun?

ELIZA unterstützt nur Microsoft 365 Copilot, Claude, ChatGPT und Programme auf deinem eigenen Rechner. Entferne die Verbindung zu ELIZA in deinem KI-Tool und richte sie neu ein, wie in diesem Kapitel beschrieben. Das gilt auch für einen Agenten, den du früher in Copilot Studio mit der MCP-Adresse eingerichtet hast: Er funktioniert nicht mehr. Richte Microsoft 365 Copilot stattdessen über [«KI-Verbindungen» und den Microsoft 365 Agent](#microsoft-365-copilot-einrichten) ein.

### Wie aktualisiere ich das Copilot-Paket?

Lade den Microsoft 365 Agent in ELIZA neu herunter und in admin.microsoft.com nochmals hoch. Ein automatisches Update gibt es nicht. Die Schritte stehen im Abschnitt [Paket aktualisieren](#paket-aktualisieren).

### Nach «Zugriff widerrufen» oder einer Sperre fragt Copilot nicht nach einer neuen Anmeldung

Copilot verlangt nach einem Widerruf oder einer Sperre in ELIZA nicht von sich aus eine neue Anmeldung. Er antwortet dann ohne ELIZA-Werkzeuge. So setzt du die Verbindung zurück:

1. Öffne in Copilot **Einstellungen** › **Agents** › **ELIZA**.
2. Klicke auf **⋮** und wähle **«Berechtigungen auf "Erneut fragen" zurücksetzen»**.
3. Beginne eine **neue Unterhaltung**. Das Zurücksetzen wirkt erst in einem neuen Chat.
4. Stelle eine Frage zu ELIZA und melde dich an, wie bei der [ersten Anmeldung](#erste-anmeldung-jeder-person).

Bei einer Sperre hebt zuerst ein Admin sie auf «KI-Verbindungen» auf.

### Copilot sagt, ihm stünden keine ELIZA-Werkzeuge zur Verfügung

Manchmal antwortet Copilot, er habe keine ELIZA-Werkzeuge, obwohl die Verbindung funktioniert. Das trat bei Prüfungen von ELIZA (November 2026) zufällig über mehrere Tage auf. Es liegt bei Microsoft: ELIZA bekommt dann keinen Aufruf. Beginne eine neue Unterhaltung und stelle die Frage nochmals. Hilft das nicht, prüfe, ob du den Zugriff widerrufen hast oder gesperrt bist (siehe die vorige Frage).

### Das KI-Tool meldet «Keine Berechtigung». Woran liegt das?

Das KI-Tool arbeitet mit deinen persönlichen ELIZA-Berechtigungen. Wenn du einen Datenbereich in ELIZA nicht sehen darfst, kann ihn auch das KI-Tool nicht abrufen. Wende dich bei Bedarf an deine Administratorin oder deinen Administrator.

### Sieht das KI-Tool auch Daten anderer Benutzer?

Nein. Jede Verbindung ist an die Person gebunden, die den Zugriff autorisiert hat. Es gelten dieselben Sichtbarkeitsregeln wie beim Arbeiten in ELIZA selbst.

### Was passiert mit meinen Daten beim KI-Anbieter?

Das KI-Tool ruft nur die Daten ab, die für deine konkrete Anfrage nötig sind, und verarbeitet sie gemäss den Bedingungen des jeweiligen Anbieters (Anthropic, OpenAI, Microsoft usw.). Kläre mit deiner Organisation, welche Daten über KI-Tools verarbeitet werden dürfen.

### Kann ich mehrere KI-Tools gleichzeitig verbinden?

Ja. Jedes Tool erhält eine eigene Freigabe, die du einzeln widerrufen kannst.

## Zusammenfassung

- ELIZA stellt unter `/mcp` einen MCP-Server für externe KI-Tools bereit; er ist kostenpflichtig, und ELIZA schaltet ihn (und das Schreiben) für deine Instanz frei
- Für Microsoft 365 Copilot kommt der ebenfalls kostenpflichtige Microsoft 365 Agent dazu
- Du verbindest Microsoft 365 Copilot, Claude, ChatGPT sowie Claude Code und andere lokale Tools
- Die Autorisierung läuft über deinen normalen ELIZA-Login mit dem Bildschirm «Zugriff autorisieren»
- KI-Tools arbeiten immer mit deinen persönlichen Berechtigungen; was sie speichern können, begrenzt ELIZA (Meldungen erfassen, auf Meldungen antworten, Status, Zuständigkeit und Frist ändern, Glossar pflegen, Arbeitszeiten für dich erfassen und eigene erfasste Einträge korrigieren, Timer starten und stoppen, SWOT-Massnahmen, Einschätzungen und Kontrollen erfassen, Messwerte von Kennzahlen und Updates von Key Results erfassen, Normen, Geschäftskontext, Managementsysteme, Kennzahlen und das OKR pflegen). Dass sie vor dem Speichern zeigen, was sie speichern wollen, ist eine Anweisung an das Tool, keine Sperre in ELIZA
- Admins schalten Tools auf «KI-Verbindungen» ein und ab, sperren Personen und richten Copilot ein
- Das Copilot-Paket aktualisierst du von Hand, wenn sich seine Version ändert
- Im Profil unter «Verbundene Apps» widerrufst du Zugriffe jederzeit

## Nächste Schritte

- [Authentifizierung]({{< ref "02-authentifizierung" >}}): API-Tokens für eigene Skripte und Integrationen
- [Endpunkte-Übersicht]({{< ref "04-endpunkte-uebersicht" >}}): welche Datenbereiche die Schnittstelle abdeckt
- [Best Practices]({{< ref "10-best-practices" >}}): Empfehlungen für den produktiven Einsatz
