---
title: "Best Practices und FAQ"
description: ""
weight: "6"
tags:
  - "best-practices"
  - "faq"
  - "tipps"
  - "datenschutz"
---


# Best Practices und FAQ

In diesem Kapitel findest du Tipps für die effektive Nutzung des Datenschutz-Moduls und Antworten auf häufige Fragen.

## Best Practices

### Allgemeine Empfehlungen

#### 1. Systematischer Aufbau

Baue deine Datenschutz-Dokumentation systematisch auf:

<pre>
┌─────────────────────────────────────────────────────┐
│  1. Datenschutzsystem anlegen                       │
│     ↓                                               │
│  2. Stammdaten erfassen                             │
│     - Anwendungen                                   │
│     - Datenkategorien                               │
│     - Rechtsgrundlagen                              │
│     - Untervertragspartner                          │
│     ↓                                               │
│  3. Verarbeitungsaktivitäten dokumentieren          │
│     ↓                                               │
│  4. TOMs zuordnen                                   │
│     ↓                                               │
│  5. DSFAs für risikoreiche Verarbeitungen           │
└─────────────────────────────────────────────────────┘
</pre>

#### 2. Vollständigkeit vor Perfektion

- Erfasse zunächst alle Verarbeitungen **grob**
- Verfeinere die Details später
- Eine unvollständige Dokumentation ist besser als keine

#### 3. Regelmässige Aktualisierung

- **Jährlich:** Vollständige Überprüfung aller Einträge
- **Bei Änderungen:** Sofortige Aktualisierung bei neuen Systemen oder Prozessen
- **Nach Audits:** Anpassungen basierend auf Audit-Erkenntnissen

#### 4. Klare Verantwortlichkeiten

- Definiere einen **Datenschutzverantwortlichen** im System
- Lege fest, wer für welche Verarbeitungen zuständig ist
- Dokumentiere Vertretungsregelungen

### Verarbeitungsaktivitäten

#### Richtige Granularität finden

| Zu grob | Richtig | Zu fein |
|---------|---------|---------|
| "IT-Betrieb" | "Lohnbuchhaltung" | "Lohnabrechnungserstellung Januar" |
| "Kundenverwaltung" | "CRM-Kundenbetreuung" | "Kunde Müller anlegen" |
| "Personalwesen" | "Bewerbermanagement" | "Bewerbung Meier bearbeiten" |

**Faustregel:** Eine Verarbeitungsaktivität = Ein zusammenhängender Geschäftsprozess

#### Verknüpfungen nutzen

Nutze die Verknüpfungsmöglichkeiten konsequent:

- Verknüpfe mit **Prozessen** aus dem Prozessmodul
- Verknüpfe mit **Anwendungen** und **Untervertragspartnern**
- Verknüpfe mit **Risiken** aus dem SWOT-Modul
- Verknüpfe mit **TOMs** für Schutzmassnahmen

### Stammdaten

#### Anwendungen vollständig erfassen

Vergiss nicht:
- Cloud-Dienste (Office 365, Google Workspace)
- SaaS-Anwendungen (CRM, HR-Software)
- Mobile Apps
- Interne Eigenentwicklungen
- Excel-Listen mit personenbezogenen Daten

#### Untervertragspartner dokumentieren

Für jeden Auftragsverarbeiter dokumentieren:
- Firmenname und Kontaktdaten
- Sitzland (wichtig für Drittlandtransfers)
- Welche Daten werden verarbeitet?
- Besteht ein AVV?

### DSFAs

#### Wann eine DSFA durchführen?

Führe eine DSFA durch bei:
- Neuen Technologien (KI, Machine Learning)
- Systematischer Überwachung (Video, GPS)
- Besonderen Datenkategorien (Gesundheit, Biometrie)
- Profiling und automatisierten Entscheidungen
- Grossen Datenmengen

#### DSFA-Qualität sicherstellen

- Dokumentiere **alle** identifizierten Risiken
- Definiere für jedes Risiko **konkrete Massnahmen**
- Bewerte das **Restrisiko** nach Umsetzung
- Hole die Stellungnahme des DSB ein

### TOMs

#### Kategorisierung

Organisiere TOMs nach Schutzziel:

| Schutzziel | Beispiel-TOMs |
|------------|---------------|
| Vertraulichkeit | Verschlüsselung, Zugriffskontrollen |
| Integrität | Protokollierung, Prüfsummen |
| Verfügbarkeit | Backup, Redundanz |
| Belastbarkeit | Notfallpläne, Tests |

#### Konkret formulieren

Statt: "Zugriffsschutz"
Besser: "Zugriff auf HR-Daten nur für HR-Abteilung, Berechtigungskonzept dokumentiert in XX, jährliche Überprüfung"

## Häufige Fehler vermeiden

### Bei Verarbeitungsaktivitäten

- **Keine Rechtsgrundlage:** Jede Verarbeitung braucht eine Rechtsgrundlage
- **Fehlende Speicherfristen:** Dokumentiere, wie lange Daten aufbewahrt werden
- **Unvollständige Empfänger:** Alle Datenempfänger müssen erfasst werden
- **Veraltete Informationen:** Änderungen nicht nachgeführt

### Bei Stammdaten

- **Vergessene Cloud-Dienste:** SaaS und Cloud oft übersehen
- **Keine AVVs:** Auftragsverarbeitungsverträge fehlen
- **Unbekannte Drittlandtransfers:** Nicht erkannt, dass Daten ins Ausland gehen
- **Fehlende TOMs:** Schutzmassnahmen nicht dokumentiert

### Bei DSFAs

- **Zu spät durchgeführt:** DSFA erst nach Start der Verarbeitung
- **Oberflächliche Risikobewertung:** Risiken nicht systematisch analysiert
- **Keine Massnahmen:** Risiken identifiziert, aber keine Gegenmassnahmen
- **Nicht aktualisiert:** DSFA bei Änderungen nicht überprüft

## Häufige Fragen (FAQ)

### Allgemein

#### Was ist der Unterschied zwischen DSG und DSGVO?

- **DSG:** Schweizer Datenschutzgesetz (gilt in der Schweiz)
- **DSGVO:** EU-Datenschutzgrundverordnung (gilt in der EU)

Beide haben ähnliche Anforderungen. Das ELIZA DSG-Modul unterstützt beide Rechtsordnungen.

#### Wer sollte das DSG-Modul nutzen?

- **Datenschutzbeauftragte (DSB):** Hauptnutzer für Verwaltung
- **Führungskräfte:** Lesezugriff für Übersicht
- **IT-Verantwortliche:** Unterstützung bei Anwendungsdokumentation
- **HR-Verantwortliche:** Unterstützung bei HR-Verarbeitungen

#### Wie oft sollte die Dokumentation aktualisiert werden?

- **Mindestens jährlich:** Vollständige Überprüfung
- **Bei Änderungen:** Sofortige Aktualisierung
- **Vor Audits:** Prüfung auf Vollständigkeit

### Verarbeitungsaktivitäten

#### Was ist ein "Verzeichnis der Verarbeitungstätigkeiten"?

Das gesetzlich vorgeschriebene Verzeichnis aller Datenverarbeitungen im Unternehmen (Art. 30 DSGVO, Art. 12 DSG). Das DSG-Modul erstellt dieses Verzeichnis automatisch.

#### Muss ich jede kleine Datenverarbeitung erfassen?

Nein. Fokussiere auf:
- Geschäftsprozesse mit personenbezogenen Daten
- Regelmässige, systematische Verarbeitungen
- Verarbeitungen mit Risiken für Betroffene

Einzelne Telefonate oder E-Mails müssen nicht dokumentiert werden.

#### Was ist der Unterschied zwischen Datenkategorien und Datenfeldern?

- **Datenkategorien:** Arten von Daten (z.B. "Stammdaten", "Finanzdaten")
- **Datenfelder:** Konkrete Attribute (z.B. "Vorname", "IBAN")

Datenkategorien sind übergeordnete Gruppierungen, Datenfelder die konkreten Details.

### DSFAs

#### Muss für jede Verarbeitung eine DSFA durchgeführt werden?

Nein. Eine DSFA ist nur erforderlich bei **hohem Risiko** für die Betroffenen.

#### Wer führt die DSFA durch?

In der Regel:
- **Verantwortlicher:** Leitet den Prozess
- **DSB:** Beratung und Prüfung
- **Fachbereich:** Liefert fachlichen Input
- **IT:** Liefert technischen Input

#### Was passiert, wenn das Restrisiko hoch bleibt?

Dann muss die **Aufsichtsbehörde konsultiert** werden:
- Schweiz: EDÖB
- EU: Zuständige Datenschutzaufsicht

### TOMs

#### Was ist der Unterschied zwischen TOMs und Massnahmen?

- **TOMs:** Allgemeine technische und organisatorische Schutzmassnahmen
- **Massnahmen:** Spezifische Risikominderungs-Massnahmen (oft aus DSFA)

TOMs gelten oft unternehmensweit, Massnahmen sind verarbeitungsspezifisch.

#### Wie detailliert sollten TOMs dokumentiert werden?

Ausreichend detailliert, um nachzuweisen:
- Was genau wird gemacht?
- Wie wird es umgesetzt?
- Wer ist verantwortlich?

### Export

#### Welche Export-Formate werden unterstützt?

Aktuell: **Word-Export** (.docx) für das Verzeichnis der Verarbeitungstätigkeiten.

#### Wer kann Exporte durchführen?

Nur Benutzer mit `dsg_admin` Berechtigung.

## Checkliste für die Einführung

### Ersteinrichtung

- [ ] Datenschutzsystem angelegt
- [ ] Datenschutzverantwortlichen zugewiesen
- [ ] Berechtigungen vergeben

### Stammdaten

- [ ] Alle Anwendungen erfasst
- [ ] Anwendungstypen definiert
- [ ] Datenkategorien angelegt
- [ ] Wichtige Datenfelder dokumentiert
- [ ] Rechtsgrundlagen definiert
- [ ] Alle Untervertragspartner erfasst
- [ ] Empfänger dokumentiert
- [ ] TOMs dokumentiert

### Verarbeitungsaktivitäten

- [ ] Alle Hauptprozesse dokumentiert
- [ ] Verknüpfungen hergestellt
- [ ] Rechtsgrundlagen zugeordnet
- [ ] Speicherfristen definiert

### DSFAs

- [ ] Risikoreiche Verarbeitungen identifiziert
- [ ] DSFAs durchgeführt
- [ ] Massnahmen definiert
- [ ] Restrisiken bewertet

### Laufender Betrieb

- [ ] Verantwortlichkeiten definiert
- [ ] Aktualisierungsprozess etabliert
- [ ] Jährliche Überprüfung eingeplant

## Weiterführende Ressourcen

### Gesetzliche Grundlagen

- **DSGVO:** Verordnung (EU) 2016/679
- **DSG:** Schweizer Datenschutzgesetz (nDSG seit 1.9.2023)

### Behörden

- **EDÖB:** www.edoeb.admin.ch (Schweiz)
- **DSK:** Konferenz der Datenschutzaufsichtsbehörden (Deutschland)

### Weitere ELIZA-Module

Das DSG-Modul integriert mit anderen ELIZA-Modulen:

- **Prozesse:** Verknüpfung mit Geschäftsprozessen
- **Organisation:** Organisationseinheiten und Mitarbeitende
- **SWOT:** Risikoeinschätzungen
- **Businesscontext:** Interessierte Parteien

## Zusammenfassung

### Die 5 wichtigsten Tipps

1. **Systematisch aufbauen:** Stammdaten → Verarbeitungen → TOMs → DSFAs
2. **Vollständigkeit:** Alle Verarbeitungen und Anwendungen erfassen
3. **Aktualität:** Regelmässig aktualisieren, bei Änderungen sofort
4. **Verknüpfungen:** Beziehungen zwischen Objekten nutzen
5. **Qualität:** Lieber wenige, gut dokumentierte Einträge als viele oberflächliche

### Erfolgskriterien

- Jederzeit auskunftsfähig bei Anfragen von Betroffenen
- Audit-bereit für behördliche Prüfungen
- Transparenz über alle Datenverarbeitungen
- Nachweisbare Schutzmassnahmen (TOMs)
- Dokumentierte Risikobewertungen (DSFAs)

---

**Viel Erfolg mit dem Datenschutz-Modul!**

Bei Fragen wende dich an deinen Datenschutzbeauftragten oder ELIZA-Administrator.
