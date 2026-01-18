---
title: "Best Practices und FAQ"
description: ""
weight: "7"
tags:
  - "best-practices"
  - "tipps"
  - "faq"
  - "iso9001"
  - "qualitätsmanagement"
---


# Best Practices und FAQ

Dieses Kapitel fasst bewährte Methoden für effektives Prozessmanagement zusammen und beantwortet häufige Fragen.

## Prozessstruktur

### Empfohlene Hierarchie

Eine übersichtliche Prozessstruktur nach ISO 9001:

<pre>
Führungsprozesse (Management)
├── Strategische Planung
├── Managementbewertung
├── Kontinuierliche Verbesserung
└── Risikomanagement

Kernprozesse (Wertschöpfung)
├── Vertrieb / Kundenakquise
├── Auftragsabwicklung
├── Produktion / Dienstleistung
└── Lieferung / Nachbetreuung

Unterstützungsprozesse (Support)
├── Personal / HR
├── IT / Infrastruktur
├── Einkauf / Beschaffung
└── Finanzen / Controlling
</pre>

### Namenskonventionen

| Typ | Format | Beispiel |
|-----|--------|----------|
| Hauptprozess | X.0 Name | 1.0 Führungsprozesse |
| Unterprozess | X.Y Name | 1.1 Strategische Planung |
| Detail-Prozess | X.Y.Z Name | 1.1.1 Zielsetzung |

> **✅ Best Practice:** Dokumentiere die Namenskonventionen und mache sie für alle verbindlich.

---

## Prozessdokumentation

### Was sollte dokumentiert werden?

| Element | Pflicht | Empfohlen |
|---------|---------|-----------|
| Titel und Nummer | ✅ | - |
| Beschreibung/Zweck | ✅ | - |
| Prozessverantwortung | ✅ | - |
| Prozessschritte | - | ✅ |
| RACI-Matrix | - | ✅ |
| Verknüpfte Dokumente | - | ✅ |
| KPIs | - | ✅ |

### Detailtiefe

**Zu wenig Detail:**
```
❌ "Kundenanfrage bearbeiten"
```

**Zu viel Detail:**
```
❌ "1. E-Mail öffnen 2. Anhang speichern 3. Ordner erstellen 4. ..."
```

**Richtige Balance:**
```
✅ "Kundenanfrage im CRM erfassen, Machbarkeit prüfen,
   Angebot erstellen, Kundenfreigabe einholen"
```

---

## Workflow-Management

### Regelmässige Überprüfung

| Prozesstyp | Empfohlene Überprüfung |
|------------|------------------------|
| Kritische Prozesse | Halbjährlich |
| Standard-Prozesse | Jährlich |
| Stabile Prozesse | Alle 2 Jahre |

### Workflow-Checkliste

Vor der Freigabe prüfen:

- [ ] Alle Pflichtfelder ausgefüllt?
- [ ] Prozessschritte vollständig?
- [ ] RACI-Matrix definiert?
- [ ] Dokumente verknüpft und aktuell?
- [ ] Prüfer und Freigeber zugewiesen?

---

## Verantwortlichkeiten

### RACI Best Practices

| Regel | Erklärung |
|-------|-----------|
| **Ein A pro Schritt** | Nur eine Person rechenschaftspflichtig |
| **R und A können gleich sein** | Aber bewusst entscheiden |
| **C sparsam einsetzen** | Zu viele Konsultationen verlangsamen |
| **I ist wichtig** | Stakeholder nicht vergessen |

### Funktionen vs. Personen

**Empfehlung:** Nutze Funktionen statt Einzelpersonen

| ❌ Personen | ✅ Funktionen |
|-------------|---------------|
| Max Muster | Vertriebsleiter |
| Lisa Müller | QM-Beauftragte |

**Vorteile:**
- Flexibilität bei Personalwechsel
- Stellvertretung automatisch
- Klare Rollenverteilung

---

## ISO 9001 Konformität

### Anforderungen erfüllen

| ISO 9001 Anforderung | ELIZA Umsetzung |
|---------------------|-----------------|
| Prozesse festlegen | Prozesse-Modul |
| Verantwortlichkeiten zuweisen | RACI, Prozessverantwortung |
| Ressourcen bereitstellen | Hilfsmittel |
| Dokumentation lenken | DMS-Integration mit Workflow |
| Überwachen und messen | KPI-Integration |
| Kontinuierlich verbessern | Arbeitskopien, Versionierung |

### Dokumentenlenkung

Für gelenkte Dokumente nach ISO 9001:

1. **Erstellen**: Prozess/Dokument im Entwurf
2. **Prüfen**: Workflow-Status "Zur Prüfung"
3. **Freigeben**: Workflow-Status "Freigegeben"
4. **Verteilen**: Automatisch über ELIZA
5. **Überprüfen**: Periodische Überprüfung
6. **Aktualisieren**: Arbeitskopie-Konzept

---

## Prozesslandkarte

### Gestaltungstipps

| Tipp | Umsetzung |
|------|-----------|
| Farbcodierung | Führung=Blau, Kern=Grün, Support=Orange |
| Hierarchie begrenzen | Max. 3-4 Ebenen |
| Konsistente Darstellung | Einheitliche Benennung und Struktur |
| Regelmässige Aktualisierung | Bei jeder Prozessänderung |

### Beispiel Farbschema

| Kategorie | Farbe | MaterializeCSS |
|-----------|-------|----------------|
| Führungsprozesse | Blau | blue |
| Kernprozesse | Grün | green |
| Unterstützungsprozesse | Orange | orange |
| Archiviert | Grau | grey |

---

## Häufige Fehler vermeiden

### ❌ Fehler 1: Zu komplexe Hierarchien

**Problem:** Mehr als 4 Hierarchie-Ebenen

**Lösung:** Flache Struktur, separate Prozesse statt Verschachtelung

### ❌ Fehler 2: Fehlende Aktualität

**Problem:** Prozesse entsprechen nicht mehr der Realität

**Lösung:** Regelmässige Überprüfung, Periodizität nutzen

### ❌ Fehler 3: Keine Verantwortlichkeiten

**Problem:** Niemand fühlt sich zuständig

**Lösung:** Prozessverantwortung immer zuweisen, RACI nutzen

### ❌ Fehler 4: Isolierte Prozesse

**Problem:** Keine Verknüpfung mit Dokumenten, KPIs

**Lösung:** Integrationen aktiv nutzen

### ❌ Fehler 5: Papierlose Freigabe

**Problem:** Prozesse werden nie freigegeben

**Lösung:** Workflow konsequent durchlaufen

---

## FAQ

### Allgemeine Fragen

**Wie viele Prozesse sollte eine Organisation haben?**

Das hängt von der Grösse und Komplexität ab. Faustregel:
- Kleine Unternehmen: 15-30 Prozesse
- Mittlere Unternehmen: 30-60 Prozesse
- Grosse Unternehmen: 60+ Prozesse

**Wer sollte Prozesse erstellen?**

Prozesse sollten von denjenigen erstellt werden, die sie kennen:
- Fachexperten dokumentieren die Abläufe
- Prozessverantwortliche koordinieren
- QM-Beauftragte unterstützen methodisch

**Wie detailliert sollten Prozesse sein?**

Detailliert genug, dass ein Neuer den Prozess verstehen kann, aber nicht so detailliert, dass jede Kleinigkeit dokumentiert ist.

### Technische Fragen

**Kann ich Prozesse exportieren?**

Ja, über **Prozesse → Export**:
- Excel-Export für Übersichten
- PDF-Export für einzelne Prozesse

**Wie funktioniert die Suche?**

Die Suche durchsucht:
- Prozessnummer
- Titel
- Beschreibung
- Prozessschritte

**Kann ich gelöschte Prozesse wiederherstellen?**

Gelöschte Prozesse sind endgültig entfernt. Nutze stattdessen **Archivieren** für temporäre Deaktivierung.

### Workflow-Fragen

**Was passiert, wenn kein Prüfer zugewiesen ist?**

Dann können Benutzer mit der Berechtigung `change_prozesse` prüfen.

**Kann ich den Workflow überspringen?**

Mit Admin-Rechten können Prozesse direkt freigegeben werden, aber dies wird nicht empfohlen.

**Wie handhabe ich dringende Änderungen?**

1. Erstelle Arbeitskopie
2. Führe Änderungen durch
3. Beschleunige Prüfung/Freigabe (Kommunikation!)
4. Dokumentiere den Grund

---

## Checklisten

### Vor dem Go-Live

- [ ] Prozessstruktur definiert
- [ ] Namenskonventionen festgelegt
- [ ] Berechtigungen konfiguriert
- [ ] Prüfer/Freigeber-Funktionen definiert
- [ ] Mitarbeitende geschult

### Regelmässige Wartung

- [ ] Abgelaufene Prozesse bearbeiten
- [ ] Workflow-Übersicht prüfen
- [ ] Verknüpfte Dokumente auf Aktualität prüfen
- [ ] Archivierte Prozesse aufräumen

### Audit-Vorbereitung

- [ ] Alle relevanten Prozesse freigegeben
- [ ] Prozesslandkarte aktuell
- [ ] Dokumentenverknüpfungen vollständig
- [ ] RACI-Matrizen definiert
- [ ] KPIs aktuell

---

## Weiterführende Ressourcen

### Interne Dokumente

- QM-Handbuch (falls vorhanden)
- Organisationshandbuch
- ISO 9001 Zertifizierungsunterlagen

### Schulungen

Nutze das Tutorials-Modul für:
- Einführung ins Prozessmanagement
- Workflow-Schulung
- RACI-Methodik

---

## Zusammenfassung

### Die 10 wichtigsten Regeln

1. **Struktur vor Inhalt** - Hierarchie zuerst planen
2. **Weniger ist mehr** - Fokus auf Kernprozesse
3. **Verantwortung zuweisen** - Jeder Prozess braucht einen Eigentümer
4. **RACI nutzen** - Klare Verantwortlichkeiten
5. **Workflow einhalten** - Prüfung und Freigabe nicht überspringen
6. **Dokumente verknüpfen** - Integration mit DMS nutzen
7. **Regelmässig überprüfen** - Periodizität einsetzen
8. **Arbeitskopien verwenden** - Freigegebene nicht direkt ändern
9. **Einfach halten** - Verständlichkeit vor Vollständigkeit
10. **Kontinuierlich verbessern** - Feedback einarbeiten

---

✅ Du kennst die Best Practices für Prozessmanagement
✅ Du verstehst die ISO 9001 Anforderungen
✅ Du weisst, welche Fehler du vermeiden solltest
✅ Du hast Antworten auf häufige Fragen
✅ Du hast Checklisten für verschiedene Szenarien
