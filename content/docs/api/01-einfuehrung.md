---
title: "Einführung"
description: ""
weight: "1"
tags:
  - "api"
  - "einführung"
  - "übersicht"
---


# Einführung in die ELIZA REST API

Die ELIZA REST API ermöglicht dir den programmatischen Zugriff auf alle ELIZA-Daten und -Funktionen. Mit über 90 Endpoints kannst du Daten lesen, erstellen, aktualisieren und löschen.

## Was ist die ELIZA REST API?

Die API ist eine **RESTful HTTP-Schnittstelle**, die:

- Alle ELIZA-Module abdeckt (Organisation, DMS, Projekte, Teams, etc.)
- Standard-HTTP-Methoden verwendet (GET, POST, PUT, PATCH, DELETE)
- Daten im JSON-Format austauscht
- Token-basierte Authentifizierung unterstützt
- Mit einer interaktiven Swagger-Dokumentation kommt

## Basis-URL

```
https://[deine-domain]/api/
```

Für lokale Entwicklung:

```
http://localhost:8000/api/
```

💡 **Tipp:** Die API verwendet **keine abschliessenden Schrägstriche**. Verwende `/api/organisation/mitarbeitende` statt `/api/organisation/mitarbeitende/`.

## Verfügbare Module

Die API ist in Module organisiert, die den ELIZA-Geschäftsbereichen entsprechen:

| Modul | Beschreibung | Beispiel-Endpoint |
|-------|--------------|-------------------|
| **organisation** | Mitarbeitende, Abteilungen, Funktionen | `/api/organisation/mitarbeitende` |
| **dms** | Dokumente und Ordner | `/api/dms/document` |
| **projects** | Projekte, Aufgaben, Meilensteine | `/api/projects/project` |
| **teams** | Spaces, Boards, Karten | `/api/teams/space` |
| **timetracker** | Arbeitszeiten, Abwesenheiten | `/api/timetracker/worktime` |
| **contracts** | Verträge, Partner | `/api/contracts/contract` |
| **kpi** | Kennzahlen, Messungen | `/api/kpi/kpi` |
| **process** | Prozesse, Prozessschritte | `/api/process/process` |
| **glossar** | Glossareinträge | `/api/glossar/entry` |
| **forms** | Formulare, Vorlagen | `/api/forms/template` |

Eine vollständige Liste findest du im Kapitel [Endpunkte-Übersicht]({{< ref "04-endpunkte-uebersicht" >}}).

## Unterstützte Operationen

Jeder Endpoint unterstützt die Standard-CRUD-Operationen:

| HTTP-Methode | Operation | Beispiel |
|--------------|-----------|----------|
| `GET` | Liste abrufen | `GET /api/organisation/mitarbeitende` |
| `GET` | Einzelnes Objekt | `GET /api/organisation/mitarbeitende/123` |
| `POST` | Neues Objekt erstellen | `POST /api/organisation/mitarbeitende` |
| `PUT` | Objekt vollständig ersetzen | `PUT /api/organisation/mitarbeitende/123` |
| `PATCH` | Objekt teilweise aktualisieren | `PATCH /api/organisation/mitarbeitende/123` |
| `DELETE` | Objekt löschen | `DELETE /api/organisation/mitarbeitende/123` |

## Datenformat

Die API verwendet ausschliesslich **JSON** für Request- und Response-Bodies:

```json
{
  "id": 123,
  "vorname": "Hugo",
  "nachname": "Boss",
  "email": "hugo.boss@example.com"
}
```

## Interaktive Dokumentation

ELIZA bietet eine **Swagger-UI** für interaktives Testen:

```
https://[deine-domain]/api/schema/swagger-ui/
```

Dort kannst du:

- Alle Endpoints durchsuchen
- Request-/Response-Formate einsehen
- Anfragen direkt im Browser testen

## Authentifizierung

Die API erfordert Authentifizierung für alle Anfragen. Du kannst wählen zwischen:

1. **Token-Authentifizierung** (empfohlen für Integrationen)
2. **Session-Authentifizierung** (für Browser-basierte Clients)

Details findest du im nächsten Kapitel [Authentifizierung]({{< ref "02-authentifizierung" >}}).

## Berechtigungen

Jeder API-Aufruf wird gegen das ELIZA-Berechtigungssystem geprüft. Du kannst nur auf Daten zugreifen, für die dein Benutzer berechtigt ist.

Beispiel-Berechtigungen:

- `organisation.view_mitarbeitende` - Mitarbeitende lesen
- `organisation.add_mitarbeitende` - Mitarbeitende erstellen
- `dms.change_document` - Dokumente bearbeiten

## Nächste Schritte

Jetzt, wo du die Grundlagen kennst, geht es weiter mit:

→ [Authentifizierung]({{< ref "02-authentifizierung" >}}) - API-Zugang einrichten

---

## Zusammenfassung

✅ Die ELIZA REST API bietet Zugriff auf alle Module

✅ Basis-URL: `https://[domain]/api/`

✅ Standard-CRUD-Operationen via HTTP-Methoden

✅ JSON-Datenformat

✅ Swagger-UI für interaktive Dokumentation
