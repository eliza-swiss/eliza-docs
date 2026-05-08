---
title: "Öffentliche Dokumente und Dokument-Pakete"
date: 2026-04-17
category: "DMS"
metadata:
  category: "DMS"
slug: "dms-oeffentliche-dokumente-pakete"
---

Du kannst ab sofort freigegebene Dokumente über einen **öffentlichen Link** ohne Login teilen. Ideal für Kunden, Partner, Auditoren oder Lieferanten, die auf bestimmte Dokumente zugreifen müssen — ohne ein ELIZA-Benutzerkonto.

## Was ist neu?

### Einzelne Dokumente veröffentlichen

- Freigegebene Dokumente können über die Transition **Publizieren** öffentlich gemacht werden
- Jedes öffentliche Dokument erhält einen **eindeutigen Link** und einen **QR-Code**
- Externe Personen können das Dokument im Browser ansehen und herunterladen
- Mit **Zurückziehen** wird der öffentliche Zugang sofort deaktiviert

### Dokument-Pakete (Bundles)

- Fasse mehrere Dokumente in einem **Paket** zusammen und teile sie über einen einzigen Link
- Erstelle Pakete unter **DMS → Pakete → Neues Paket erstellen**
- Wähle ein optionales **Ablaufdatum** (7, 30 oder 90 Tage)
- Pakete können jederzeit **bearbeitet**, **deaktiviert** oder **gelöscht** werden

### Neue Berechtigungsgruppe

- Neue Gruppe **DMS Dokumente (Veröffentlichen)** steuert, wer Dokumente publizieren und Pakete verwalten darf
- Die Gruppe wird nur angezeigt, wenn das Feature aktiviert ist

## Wie aktivierst du das Feature?

1. Gehe zu **DMS → Einstellungen → Konfiguration**
2. Setze **DMS_PUBLIC_DOCUMENTS_ENABLED** auf **True**
3. Weise den gewünschten Benutzern die Gruppe **DMS Dokumente (Veröffentlichen)** zu

## Anwendungsbeispiele

- **Externe Audits:** Stelle alle relevanten Dokumente als Paket mit 30-Tage-Ablauf bereit
- **Kundeninformation:** Publiziere Produktdatenblätter mit QR-Code für Printmaterialien
- **Lieferantenmanagement:** Teile Qualitätsrichtlinien als Paket mit neuen Lieferanten
- **Behörden:** Stelle Reglemente und Richtlinien öffentlich zur Verfügung

## Sicherheit

- Links verwenden zufällige UUIDs — nicht erratbar
- Alle Zugriffe werden im Audit-Log protokolliert
- Abgelaufene Pakete sind sofort nicht mehr zugänglich