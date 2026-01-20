---
title: "Erweiterte Schnittstellen für deine ELIZA-Integrationen"
date: 2026-01-16
slug: "rest-api-erweiterung"
emoji: "🔗"
---

Gute Nachrichten für alle, die ELIZA mit anderen Systemen verbunden haben! Wir haben die Schnittstellen für externe Anbindungen massiv ausgebaut und dabei sichergestellt, dass bestehende Verbindungen weiterhin funktionieren.

## Was ist neu?

Die technischen Schnittstellen von ELIZA wurden um zahlreiche neue Bereiche erweitert:

- **Teams & Zusammenarbeit**: Spaces, Boards, Karten, Listen, Labels und Sitzungen können jetzt auch von externen Systemen gelesen und verwaltet werden
- **Projekte**: Projekte, Aufgaben, Meilensteine und Phasen sind neu über die Schnittstelle verfügbar
- **OKR (Ziele & Ergebnisse)**: Objectives, Key Results und Updates können von aussen abgefragt werden
- **Verträge**: Vollständige Vertragsverwaltung inklusive Partner, Typen und Bewertungen
- **Formulare**: Formularvorlagen, Abschnitte und Fragen für automatisierte Workflows
- **News & Events**: Ereignisse und Teilnehmer-Verwaltung für Integrationen mit Kalender-Systemen
- **Glossar**: Begriffsdefinitionen für Wissensmanagement-Integrationen
- **Managementsysteme (IMS)**: Assets und Kategorien für Compliance-Integrationen

## Wie profitierst du davon?

- **Mehr Automatisierung**: Du kannst jetzt noch mehr ELIZA-Daten mit anderen Systemen synchronisieren
- **Bessere Integration**: Drittanbieter-Tools können auf mehr Bereiche von ELIZA zugreifen
- **Zentrale Datenhaltung**: ELIZA wird noch stärker zum Herzstück deiner digitalen Infrastruktur
- **Zukunftssicher**: Die erweiterten Schnittstellen ermöglichen neue Integrationsszenarien

## Was bedeutet das für bestehende Integrationen?

**Keine Sorge - alles funktioniert weiterhin!**

Falls du bereits Integrationen mit ELIZA nutzt: Diese funktionieren unverändert. Lediglich drei Pfade wurden reorganisiert und werden automatisch weitergeleitet:

| Bisherige Adresse | Neue Adresse |
|-------------------|--------------|
| `/api/mitarbeitende` | `/api/organisation/mitarbeitende` |
| `/api/salary` | `/api/organisation/salary` |
| `/api/monthlyclosing` | `/api/timetracker/monthlyclosing` |

Die alten Adressen funktionieren durch automatische Weiterleitung weiterhin. Wir empfehlen jedoch, bei Gelegenheit auf die neuen Pfade umzustellen.

## Für wen ist das relevant?

Diese Erweiterung ist besonders interessant für:

- IT-Abteilungen, die ELIZA mit anderen Unternehmenssystemen verbinden möchten
- Entwickler, die Automatisierungen oder Integrationen bauen
- Unternehmen mit komplexen System-Landschaften

## Tipps

- Kontaktiere deinen ELIZA-Ansprechpartner, wenn du neue Integrationsmöglichkeiten nutzen möchtest
- Die vollständige technische Dokumentation findest du unter `/api/schema/swagger-ui/`
- Bestehende Integrationen müssen nicht sofort angepasst werden - die Weiterleitungen bleiben aktiv

---

*Dein ELIZA-Team* 🐢
