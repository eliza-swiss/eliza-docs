---
title: "Endpunkte-Übersicht"
description: ""
weight: "4"
tags:
  - "api"
  - "endpoints"
  - "referenz"
---


# Endpunkte-Übersicht

Diese Referenz listet alle verfügbaren API-Endpoints nach Modulen gruppiert.

## Organisation

Mitarbeitende, Abteilungen und Rollen verwalten.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/organisation/mitarbeitende` | Mitarbeitende (Personen) |
| `/api/organisation/orgunit` | Organisationseinheiten (Abteilungen) |
| `/api/organisation/funktionen` | Funktionen/Rollen |
| `/api/organisation/membership` | Funktions-Mitgliedschaften |
| `/api/organisation/salary` | Gehaltsdaten |
| `/api/organisation/skill-category` | Skill-Kategorien |
| `/api/organisation/skill` | Skills/Kompetenzen |

## Dokumentenmanagement (DMS)

Dokumente und Ordner verwalten.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/dms/document` | Dokumente |
| `/api/dms/folder` | Dokumentenordner |
| `/api/dms/documenttype` | Dokumententypen |
| `/api/dms/batch_move` | Batch: Dokumente verschieben |
| `/api/dms/batch_archive` | Batch: Dokumente archivieren |
| `/api/dms/batch_delete` | Batch: Dokumente löschen |

## Projekte

Projekte, Aufgaben und Meilensteine.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/projects/project` | Projekte |
| `/api/projects/task` | Aufgaben |
| `/api/projects/milestone` | Meilensteine |
| `/api/projects/phase` | Projektphasen |

## Teams

Kanban-Boards und Meetings.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/teams/space` | Team-Spaces |
| `/api/teams/board` | Kanban-Boards |
| `/api/teams/list` | Board-Listen (Spalten) |
| `/api/teams/card` | Karten (Aufgaben) |
| `/api/teams/label` | Labels/Tags |
| `/api/teams/meeting` | Meetings |
| `/api/teams/meetingitem` | Meeting-Traktanden |

## Zeiterfassung

Arbeitszeiten und Abwesenheiten.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/timetracker/worktime` | Arbeitszeit-Einträge |
| `/api/timetracker/absence` | Abwesenheiten (Ferien, Krankheit) |
| `/api/timetracker/monthlyclosing` | Monatsabschlüsse |

## Verträge

Vertragsmanagement und Partner.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/contracts/contract` | Verträge |
| `/api/contracts/folder` | Vertragsordner |
| `/api/contracts/partner` | Vertragspartner |
| `/api/contracts/type` | Vertragstypen |
| `/api/contracts/evaluation` | Partner-Bewertungen |
| `/api/contracts/periodicity` | Zahlungsperiodizitäten |
| `/api/contracts/valueflow` | Wertflüsse |

## KPI / Kennzahlen

Key Performance Indicators verwalten.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/kpi/kpi` | KPI-Definitionen |
| `/api/kpi/folder` | KPI-Ordner |
| `/api/kpi/measurement` | KPI-Messungen |

## Prozesse

Prozessmanagement (BPMN).

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/process/process` | Prozesse |
| `/api/process/processsteps` | Prozessschritte |
| `/api/process/label` | Prozess-Labels |
| `/api/process/hilfsmittel` | Hilfsmittel |
| `/api/process/hilfsmittelart` | Hilfsmittel-Arten |
| `/api/process/periodizitaet` | Periodizitäten |

## Formulare

Formularvorlagen und ausgefüllte Formulare.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/forms/folder` | Formular-Ordner |
| `/api/forms/template` | Formularvorlagen |
| `/api/forms/section` | Formular-Abschnitte |
| `/api/forms/question` | Vorlagen-Fragen |
| `/api/forms/choice` | Antwort-Optionen |
| `/api/forms/form` | Ausgefüllte Formulare |

## Issues / Tickets

Issue-Tracking und Tickets.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/issue/tracker` | Issue-Tracker |
| `/api/issue/issue` | Issues/Tickets |
| `/api/issue/category` | Issue-Kategorien |

## OKR

Objectives and Key Results.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/okr/system` | OKR-Systeme |
| `/api/okr/period` | OKR-Perioden |
| `/api/okr/objective` | Objectives (Ziele) |
| `/api/okr/result` | Key Results |
| `/api/okr/update` | Updates/Check-ins |

## Streams / Events

Aktivitäten und Termine.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/stream/stream` | Aktivitäts-Streams |
| `/api/stream/messages` | Nachrichten |
| `/api/stream/event` | Termine/Events |
| `/api/stream/participant` | Event-Teilnehmer |

## Tutorials

Lernplattform und Kurse.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/tutorial/folder` | Kurs-Ordner |
| `/api/tutorial/course` | Kurse |
| `/api/tutorial/lesson` | Lektionen |
| `/api/tutorial/section` | Abschnitte |
| `/api/tutorial/enrollment` | Einschreibungen |
| `/api/tutorial/lesson-progress` | Lernfortschritt |

## Standards

Normen und Compliance.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/standards/standard` | Standards/Normen |
| `/api/standards/category` | Kategorien |
| `/api/standards/chapter` | Kapitel |

## SWOT / Risikomanagement

Massnahmen und Kontrollen.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/swot/measure` | Massnahmen |
| `/api/swot/estimate` | Einschätzungen |
| `/api/swot/control` | Kontrollen |

## Weitere Module

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/glossar/entry` | Glossareinträge |
| `/api/bot/aimodel` | KI-Modelle |
| `/api/bot/chat` | KI-Chat-Konversationen |
| `/api/bot/chatspace` | Chat-Spaces |
| `/api/bot/entry` | Chat-Einträge |
| `/api/bot/context_check` | Context-Prüfung |
| `/api/ims/system` | IMS-Systeme |
| `/api/ims/assetcategory` | Asset-Kategorien |
| `/api/ims/asset` | Assets |
| `/api/resources/resources` | Ressourcen |
| `/api/resources/allocations` | Ressourcen-Zuweisungen |
| `/api/businesscontext/interestedparty` | Interessierte Parteien |
| `/api/businesscontext/issuetype` | Issue-Typen |
| `/api/businesscontext/issue` | Business Context Issues |
| `/api/measuringtool/measuringtool` | Messinstrumente |
| `/api/customgroup` | Benutzerdefinierte Gruppen |
| `/api/user` | Benutzer |

## CRUD-Operationen

Alle Endpoints unterstützen diese Operationen:

| Operation | HTTP-Methode | URL-Muster | Beispiel |
|-----------|--------------|------------|----------|
| Liste | GET | `/api/modul/ressource` | GET `/api/dms/document` |
| Detail | GET | `/api/modul/ressource/{id}` | GET `/api/dms/document/123` |
| Erstellen | POST | `/api/modul/ressource` | POST `/api/dms/document` |
| Aktualisieren | PUT/PATCH | `/api/modul/ressource/{id}` | PATCH `/api/dms/document/123` |
| Löschen | DELETE | `/api/modul/ressource/{id}` | DELETE `/api/dms/document/123` |

## Deprecated Endpoints

⚠️ Diese Endpoints sind veraltet und werden in zukünftigen Versionen entfernt:

| Alt | Neu |
|-----|-----|
| `/api/mitarbeitende` | `/api/organisation/mitarbeitende` |
| `/api/salary` | `/api/organisation/salary` |
| `/api/monthlyclosing` | `/api/timetracker/monthlyclosing` |

Die alten URLs funktionieren noch (HTTP 301 Redirect), aber bitte aktualisiere deinen Code.

## Nächste Schritte

→ [Datenformate]({{< ref "05-datenformate" >}}) - JSON-Struktur verstehen

→ [Swagger-UI](/api/schema/swagger-ui/) - Interaktive Dokumentation
