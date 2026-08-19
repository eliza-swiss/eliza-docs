---
title: "Release-Mitteilungen per E-Mail versenden"
date: "2026-08-19"
category: "Server-Tools"
modules: ["core", "streams"]
slug: "release-mitteilungen-per-email"
---



Mit `notify_admins.py` lassen sich Release-Mitteilungen und Wartungsankündigungen neu als personalisierte E-Mail, interne ELIZA-Benachrichtigung oder über beide Kanäle an die aktiven Administratorinnen und Administratoren ausgewählter Installationen senden.

Das vollständige E-Mail-Template wird zusammen mit dem Skript verteilt. Die Zielinstallation liefert das konfigurierte Django-Mailbackend, den Absender und das vorhandene Whitelabel-Logo.

## Kanäle

| Wert | Wirkung |
|---|---|
| `notification` | Erstellt nur eine interne ELIZA-Benachrichtigung. Dies ist der Standard. |
| `email` | Sendet nur eine E-Mail. Es wird keine interne Benachrichtigung erstellt. |
| `both` | Erstellt die interne Benachrichtigung und sendet zusätzlich eine E-Mail. |

Die E-Mail enthält eine HTML-Version und einen lesbaren Plain-Text-Fallback. Ein Aktionsknopf erscheint nur, wenn `action_url` und `action_label` gemeinsam angegeben sind.

## Empfänger vor dem Versand prüfen

Empfänger sind alle aktiven Benutzerinnen und Benutzer der Zielinstallation mit der Berechtigung `core.change_user`. Das Skript besitzt keinen separaten Empfängerfilter.

Wichtig:

- Eine Vorschau ohne `--execute` versendet nichts.
- `--limit 1` begrenzt die Anzahl Installationen, nicht die Anzahl Administratorinnen und Administratoren innerhalb einer Installation.
- Vor einem Einzeltest muss die gewählte Installation deshalb genau die beabsichtigten aktiven Administratoren mit den korrekten E-Mail-Adressen enthalten.
- Die Vorschau ist vor jedem produktiven Lauf zu kontrollieren.

## Nachricht und Mailmetadaten in einer Datei

Der Nachrichtentext kann mit `--message-file` aus einer Textdatei gelesen werden. Betreff, Preheader und optionaler Aktionslink lassen sich im Frontmatter derselben Datei hinterlegen:

```text
---
subject: ELIZA August-Update: Wartungsfenster am 22. August 2026
preheader: Neue Funktionen und Wartungsfenster am Samstag von 08:00 bis 10:00 Uhr
action_url: https://docs.eliza.swiss/whatsnew/august-update-2026/
action_label: Alle Neuerungen ansehen
---
Hallo {vorname},

am kommenden Samstag wird dein ELIZA-System ({server_url}) aktualisiert.
```

Unterstützte Frontmatter-Felder:

- `subject`
- `preheader`
- `action_url`
- `action_label`

Explizite Optionen auf der Kommandozeile überschreiben die Werte aus dem Frontmatter. Für den Kanal `email` oder `both` ist ein Betreff erforderlich; er kann aus einer der beiden Quellen stammen.

## Personalisierung

Folgende Platzhalter stehen im Nachrichtentext, im Betreff, im Preheader und im Aktionslink zur Verfügung:

| Platzhalter | Inhalt |
|---|---|
| `{vorname}` | Vorname, ersatzweise Benutzername |
| `{nachname}` | Nachname |
| `{username}` | Benutzername |
| `{server_url}` | Vollständige URL der Installation |
| `{hostname}` | Hostname der Installation |

## August-Mitteilung als Vorschau

Auf einem App-Server liegt das operative Skript unter `/srv/bin/notify_admins.py`. Die vorbereitete August-Mitteilung wird aus dem App-Repository gelesen:

```bash
python3 /srv/bin/notify_admins.py \
  --instance testbedrock01.myeliza.ch \
  --channel email \
  --message-file /srv/eliza.app/docs/releases/2026-08-21_august_update_ankuendigung.txt
```

Die Ausgabe muss die erwartete Installation, die Anzahl Administratorinnen und Administratoren sowie die korrekten Empfängeradressen zeigen. Erst danach wird derselbe Aufruf um `--execute` ergänzt:

```bash
python3 /srv/bin/notify_admins.py \
  --instance testbedrock01.myeliza.ch \
  --channel email \
  --message-file /srv/eliza.app/docs/releases/2026-08-21_august_update_ankuendigung.txt \
  --execute
```

## Mailomat-Warteschlange

Installationen mit dem Mailomat-Backend legen E-Mails zunächst in einer lokalen Warteschlange ab. Eine erfolgreiche Skriptausgabe bedeutet dort, dass die Nachricht erfolgreich eingereiht wurde; die externe Zustellung erfolgt anschliessend asynchron.

Wird ein Fehler gemeldet oder ein Lauf unterbrochen, darf der Versand nicht blind wiederholt werden. Zuerst sind Warteschlange und Mailomat-Protokoll zu prüfen, damit keine doppelte Release-Mitteilung entsteht.

## Ergebnis auswerten

Die Zusammenfassung weist die Kanäle getrennt aus:

- erfolgreich erstellte interne Benachrichtigungen
- erfolgreich eingereihte oder versendete E-Mails
- wegen fehlender E-Mail-Adresse übersprungene Empfänger
- pro Empfänger isolierte Versandfehler
- Instanzfehler

Ein Fehler bei einem Empfänger stoppt die Verarbeitung der übrigen Empfänger nicht.
