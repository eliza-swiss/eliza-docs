---
title: "OKR"
description: "Objectives und Key Results für strategische Zielsetzungen verwalten"
weight: 57
tags:
  - "overview"
  - "manual"
  - "okr"
  - "objectives"
  - "key-results"
icon: "flag"
---


# OKR Benutzerhandbuch

Willkommen zum umfassenden Benutzerhandbuch für das ELIZA OKR-Modul.

## Was ist OKR?

**OKR** steht für **Objectives and Key Results** (Zielsetzungen und Schlüsselergebnisse). Es ist eine bewährte Methode zur Zielsetzung und Leistungsmessung, die von vielen erfolgreichen Unternehmen weltweit eingesetzt wird.

Das OKR-Framework hilft dir dabei:

- **Klare Ziele** zu definieren (Objectives)
- **Messbare Ergebnisse** festzulegen (Key Results)
- **Fortschritt** transparent zu verfolgen
- **Teams** auf gemeinsame Ziele auszurichten

## Über dieses Handbuch

Dieses Handbuch führt dich durch alle Funktionen des OKR-Moduls in ELIZA. Es ist in mehrere Kapitel unterteilt, die dich von den Grundlagen bis zu fortgeschrittenen Funktionen begleiten.

## 📚 Kapitelübersicht

### [1. Erste Schritte](erste-schritte/)

**Einführung in das OKR-Modul**

Lerne die Grundlagen des OKR-Moduls kennen und mache dich mit der Navigation und den wichtigsten Konzepten vertraut.

**Inhalte:**
- Was ist OKR und warum ist es nützlich?
- Zugang zum OKR-Modul
- Übersicht der Hauptfunktionen
- Die OKR-Hierarchie verstehen

**Zielgruppe:** Alle Benutzer
**Lesezeit:** ~10 Minuten

---

### [2. Zielsysteme verwalten](zielsysteme/)

**Das strategische Fundament deiner Organisation**

Erfahre, wie du Zielsysteme erstellst und verwaltest - das übergeordnete Framework für deine strategische Planung.

**Inhalte:**
- Neues Zielsystem erstellen
- Vision, Mission, Strategie und Nordstern definieren
- Verantwortliche zuweisen
- Sichtbarkeit und Zugriffsrechte steuern
- Jahresplaner nutzen

**Zielgruppe:** Administratoren, Führungskräfte
**Lesezeit:** ~15 Minuten

---

### [3. Perioden und Zielsetzungen](perioden-objectives/)

**Ziele strukturiert planen und umsetzen**

Lerne, wie du Perioden als Zeitrahmen für deine Ziele anlegst und konkrete Zielsetzungen (Objectives) formulierst.

**Inhalte:**
- Perioden erstellen und verwalten
- Zielsetzungen (Objectives) anlegen
- Objectives mit Prozessen, Projekten und KPIs verknüpfen
- Status-Workflow verstehen
- Fortschritt verfolgen

**Zielgruppe:** Team-Leads, Projektverantwortliche
**Lesezeit:** ~20 Minuten

---

### [4. Ergebnisse und Updates](ergebnisse-updates/)

**Messbare Resultate erfassen und Fortschritt dokumentieren**

Erfahre, wie du Key Results (Schlüsselergebnisse) definierst und regelmässige Updates zur Fortschrittsmessung erfasst.

**Inhalte:**
- Ergebnisse (Key Results) erstellen
- Budget und Aufwand schätzen
- Zielwerte und Einheiten festlegen
- Updates erfassen
- Bewertung und Trends nutzen
- Meine Ergebnisse und Meine Updates

**Zielgruppe:** Alle Benutzer
**Lesezeit:** ~15 Minuten

---

### [5. Berechtigungskonzept](berechtigungskonzept/)

**Zugriffsrechte und Rollen verstehen**

Verstehe das Berechtigungssystem des OKR-Moduls und wie die verschiedenen Rollen funktionieren.

**Inhalte:**
- Systemgruppen (okr_admin, okr_users)
- Eigentümer-basierte Berechtigungen
- Geschützte Zielsysteme
- Organisations-basierte Zugriffskontrolle

**Zielgruppe:** Administratoren
**Lesezeit:** ~10 Minuten

---

### [6. Anwendungsbeispiele](anwendungsbeispiele/)

**OKR in der Praxis: Beispiele aus verschiedenen Branchen**

Entdecke vollständige OKR-Beispiele aus Startup, Altersheim und Pizzeria - mit konkreten Zielsystemen, Objectives und Key Results.

**Inhalte:**
- Startup/Tech: Wachstum, Produkt und Team
- Altersheim/Pflege: Qualität, Bewohner und Mitarbeiter
- Pizzeria/Gastro: Kundenbindung, Service und Wirtschaftlichkeit
- Vergleich und Best Practices
- Vorlagen zum Nachbauen

**Zielgruppe:** Alle Benutzer
**Lesezeit:** ~20 Minuten

---

## Die OKR-Hierarchie auf einen Blick

<pre>
┌─────────────────────────────────────────────────────────────────┐
│                        ZIELSYSTEM                               │
│    (Vision, Mission, Strategie, Nordstern)                      │
│                             │                                   │
│              ┌──────────────┼──────────────┐                    │
│              ▼              ▼              ▼                    │
│         ┌─────────┐   ┌─────────┐   ┌─────────┐                 │
│         │ Periode │   │ Periode │   │ Periode │                 │
│         │  (Q1)   │   │  (Q2)   │   │  (Q3)   │                 │
│         └────┬────┘   └────┬────┘   └────┬────┘                 │
│              │              │              │                    │
│       ┌──────┼──────┐      ...           ...                    │
│       ▼      ▼      ▼                                           │
│   ┌───────┐┌───────┐┌───────┐                                   │
│   │  O1   ││  O2   ││  O3   │  ← Zielsetzungen (Objectives)     │
│   └───┬───┘└───┬───┘└───┬───┘                                   │
│       │        │        │                                       │
│   ┌───┴───┐┌───┴───┐┌───┴───┐                                   │
│   │KR1 KR2││KR1 KR2││KR1 KR2│  ← Ergebnisse (Key Results)       │
│   └───────┘└───────┘└───────┘                                   │
└─────────────────────────────────────────────────────────────────┘
</pre>

## Schnellstart

Wenn du sofort loslegen möchtest, hier die wichtigsten Schritte:

1. **Zielsystem erstellen** → Definiere Vision und Strategie
2. **Periode anlegen** → Bestimme den Zeitrahmen (z.B. Quartal)
3. **Objectives formulieren** → Lege ambitionierte, qualitative Ziele fest
4. **Key Results definieren** → Erstelle messbare Ergebnisse für jedes Objective
5. **Updates erfassen** → Dokumentiere regelmässig den Fortschritt

## Tipps für erfolgreiches OKR

> **💡 Tipp:** Beginne mit wenigen, aber fokussierten Zielen. Qualität geht vor Quantität!

> **💡 Tipp:** Objectives sollten inspirierend und ambitioniert sein - "Was wollen wir erreichen?"

> **💡 Tipp:** Key Results müssen messbar sein - "Wie wissen wir, dass wir erfolgreich waren?"

## Häufige Fragen

### Wie viele Objectives sollte ich pro Periode haben?
Empfohlen sind 3-5 Objectives pro Periode. Weniger ist mehr - fokussiere dich auf das Wesentliche.

### Was ist der Unterschied zwischen Objectives und Key Results?
- **Objectives** beschreiben *was* du erreichen möchtest (qualitativ, inspirierend)
- **Key Results** definieren *wie* du den Erfolg misst (quantitativ, messbar)

### Kann ich bestehende Objectives in neue Perioden übernehmen?
Ja! Beim Erstellen einer neuen Periode kannst du bestehende Objectives aus der vorherigen Periode übernehmen.

## Verwendete Konventionen

In diesem Handbuch verwenden wir folgende Konventionen:

- **Fett**: UI-Elemente und wichtige Begriffe
- → : Navigation (z.B. Dashboard → OKR → Zielsysteme)
- > Blockquote: Tipps, Warnungen und wichtige Hinweise

---

**Viel Erfolg bei der Arbeit mit OKR!** 🎯
