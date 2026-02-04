---
title: "REST API"
description: "Programmatischer Zugriff auf ELIZA-Daten für Integrationen und Automatisierungen. Token-Authentifizierung, Python-Beispiele, 90+ Endpoints."
weight: 98
tags:
  - "api"
  - "rest"
  - "übersicht"
icon: "code"
---


# ELIZA REST API Handbuch

Willkommen zum Benutzerhandbuch der ELIZA REST API. Diese Dokumentation hilft dir, die API effektiv für Integrationen und Automatisierungen zu nutzen.

## Kapitelübersicht

### [1. Einführung]({{< ref "01-einfuehrung" >}})

**Was ist die ELIZA REST API?**

Überblick über die API-Architektur, verfügbare Module und grundlegende Konzepte.

**Inhalte:**

- API-Architektur und Basis-URL
- Übersicht über 90+ Endpoints
- Unterstützte Datenformate

**Lesezeit:** ~5 Minuten

---

### [2. Authentifizierung]({{< ref "02-authentifizierung" >}})

**Zugang zur API sichern**

Alles über Token-Authentifizierung, Session-Auth und das Berechtigungssystem.

**Inhalte:**

- API-Token erstellen und verwenden
- Authorization-Header konfigurieren
- Berechtigungen verstehen

**Lesezeit:** ~10 Minuten

---

### [3. Erste Anfragen]({{< ref "03-erste-anfragen" >}})

**Schnellstart mit Python und curl**

Praktische Beispiele für deine ersten API-Aufrufe.

**Inhalte:**

- Python-Setup mit requests
- GET- und POST-Anfragen
- Response-Interpretation

**Lesezeit:** ~10 Minuten

---

### [4. Endpunkte-Übersicht]({{< ref "04-endpunkte-uebersicht" >}})

**Alle verfügbaren API-Endpoints**

Vollständige Referenz aller Module und ihrer Endpoints.

**Inhalte:**

- Tabellarische Übersicht nach Modulen
- CRUD-Operationen
- Spezial-Endpoints

**Lesezeit:** ~5 Minuten (Nachschlagewerk)

---

### [5. Datenformate]({{< ref "05-datenformate" >}})

**JSON-Struktur und Serialisierung**

Verstehe, wie Daten in der API strukturiert sind.

**Inhalte:**

- JSON Request/Response Format
- UUID vs. ID für Relationen
- Datumsformate

**Lesezeit:** ~8 Minuten

---

### [6. Filterung und Suche]({{< ref "06-filterung-suche" >}})

**Daten effizient abfragen**

Query-Parameter für gezielte Datenabfragen.

**Inhalte:**

- Filter-Parameter
- Volltextsuche
- Sortierung und Paginierung

**Lesezeit:** ~8 Minuten

---

### [7. Fehlerbehandlung]({{< ref "07-fehlerbehandlung" >}})

**HTTP-Status-Codes und Fehlermeldungen**

Fehler verstehen und korrekt behandeln.

**Inhalte:**

- HTTP-Status-Codes
- Fehler-Response-Format
- Häufige Probleme und Lösungen

**Lesezeit:** ~8 Minuten

---

### [8. Praxisbeispiele]({{< ref "08-praxisbeispiele" >}})

**Vollständige Integrationsszenarien**

Komplette Python-Skripte für typische Anwendungsfälle.

**Inhalte:**

- Mitarbeitende-Synchronisation
- Dokument-Upload
- Zeiterfassung-Export
- KPI-Daten abrufen

**Lesezeit:** ~15 Minuten

---

### [9. Swagger & OpenAPI]({{< ref "09-swagger-openapi" >}})

**Interaktive Dokumentation nutzen**

Die Swagger-UI für Tests und Exploration verwenden.

**Inhalte:**

- Swagger-UI Zugriff
- Interaktives Testen
- Schema-Download

**Lesezeit:** ~5 Minuten

---

### [10. Best Practices]({{< ref "10-best-practices" >}})

**Sicherheit und Performance**

Empfehlungen für produktionsreife Integrationen.

**Inhalte:**

- Token-Sicherheit
- Error-Handling
- Logging und Monitoring

**Lesezeit:** ~8 Minuten

---

## Lernpfad für Integratoren

**Empfohlene Reihenfolge für den Einstieg:**

1. **Einführung** - Grundkonzepte verstehen
2. **Authentifizierung** - API-Zugang einrichten
3. **Erste Anfragen** - Praktisch loslegen
4. **Praxisbeispiele** - Vollständige Szenarien studieren

**Für fortgeschrittene Nutzung:**

5. **Endpunkte-Übersicht** - Alle Möglichkeiten entdecken
6. **Filterung und Suche** - Effiziente Abfragen
7. **Best Practices** - Produktionsreife Implementierung

---

## Konventionen in dieser Dokumentation

- **Fett** - Wichtige Begriffe und UI-Elemente
- `Code` - Technische Begriffe, Pfade, Parameter
- 💡 **Tipp** - Hilfreiche Hinweise
- ⚠️ **Wichtig** - Kritische Informationen
- ✅ **Best Practice** - Empfohlene Vorgehensweise
- ❌ **Häufiger Fehler** - Was du vermeiden solltest

---

## Schnelllinks

- **Swagger-UI**: [/api/schema/swagger-ui/](/api/schema/swagger-ui/)
- **OpenAPI-Schema**: [/api/schema/](/api/schema/)
- **API-Token verwalten**: Einstellungen → API-Tokens

---

**Version:** 1.0
**Letzte Aktualisierung:** 2026-01-27
