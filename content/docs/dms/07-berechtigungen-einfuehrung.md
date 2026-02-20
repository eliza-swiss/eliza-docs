---
title: "Berechtigungskonzept im DMS"
description: ""
weight: "7"
tags:
  - "berechtigungen"
  - "dms"
  - "zugriff"
  - "ordner"
  - "rollen"
---


# 🔐 Berechtigungskonzept im DMS - Einführung

Das Dokumentenmanagement-System (DMS) von ELIZA bietet dir ein flexibles und leistungsstarkes Berechtigungskonzept. Du kannst genau steuern, wer welche Ordner und Dokumente sehen, bearbeiten und freigeben darf. Dieses Kapitel erklärt dir, wie das Berechtigungssystem funktioniert und wie du es optimal für deine Organisation nutzt.

> 🔧 **Für Administratoren:** Die technische Referenz mit Berechtigungstabellen, Django-Codenames, Rollen-Matrix und Debugging-Hinweisen findest du in [Kapitel 7: Berechtigungen und Zugriff]({{< ref "07-berechtigungen" >}}).

## Überblick: Die drei Säulen der Berechtigungen

Das DMS-Berechtigungssystem basiert auf drei Hauptkonzepten:

1. **Sichtbarkeit** - Ist ein Ordner für alle sichtbar oder geschützt?
2. **Funktionszuordnungen** - Welche Funktion ist verantwortlich, prüft oder gibt frei?
3. **Zugriffskontrolle** - Welche Teams und Organisationseinheiten haben Zugriff?

Diese drei Säulen arbeiten zusammen und schaffen ein System, das sowohl Sicherheit als auch Flexibilität bietet.

## Sichtbarkeit: Normal vs. Geschützt

### Normale Ordner

**Was bedeutet "normal"?**

- Alle Benutzer mit der Berechtigung "Dokumentordner ansehen" können den Ordner sehen
- Standardeinstellung für die meisten Ordner
- Ideal für allgemeine Unternehmensdokumente, die alle sehen dürfen

**Praktische Beispiele:**

```text
📁 Allgemeine Vorlagen (normal)
   📄 Briefvorlage.docx - ✅ Jeder sieht es
   📄 Präsentationsvorlage.pptx - ✅ Jeder sieht es

📁 Unternehmensnews (normal)
   📄 Newsletter März.pdf - ✅ Jeder sieht es
```

### Geschützte Ordner

**Was bedeutet "geschützt"?**

- Nur bestimmte Personen und Gruppen können den Ordner sehen
- Zugriff wird über Organisationseinheiten, Teams oder Funktionen gesteuert
- Ideal für vertrauliche oder spezialisierte Dokumente

**Wer sieht geschützte Ordner?**

1. **Administratoren** - Personen mit der Berechtigung "Dokumentordner löschen"
2. **Ordner-Administratoren** - Mitglieder des Admin-Teams
3. **Team-Mitglieder** - Personen im zugewiesenen Team
4. **Organisationseinheiten** - Mitglieder der zugewiesenen Orgunits
5. **Prüfer** - Personen mit der prüfenden Funktion
6. **Freigeber** - Personen mit der freigebenden Funktion

**Praktische Beispiele:**

```text
📁 Personalakten (geschützt, Orgunit: HR)
   📄 Arbeitsvertrag.pdf - ❌ Nur HR sieht es
   📄 Gehaltsabrechnung.pdf - ❌ Nur HR sieht es

📁 Finanzberichte (geschützt, Freigeber: CFO)
   📄 Jahresabschluss.pdf - ❌ Nur CFO und Finanzen sehen es
   📄 Budget 2025.xlsx - ❌ Nur CFO und Finanzen sehen es
```

## Funktionszuordnungen: Verantwortung klar regeln

### Verantwortliche Funktion

**Was macht sie?**

- Diese Funktion ist für den Inhalt des Ordners verantwortlich
- Kann Dokumente hochladen, bearbeiten und verwalten
- Hat automatisch Zugriff auf den Ordner

**Wann brauchst du sie?**

- Für klare Zuständigkeiten in der Organisation
- Bei Audits und Compliance-Prüfungen
- Zur Dokumentation von Verantwortlichkeiten

**Praktisches Beispiel:**

```text
📁 Qualitätsmanagement
   Verantwortliche Funktion: Qualitätsmanagementbeauftragte/r

   → Der QMB ist für alle Dokumente in diesem Ordner verantwortlich
   → Bei Fragen wissen alle: "Ich muss den QMB fragen"
   → Bei Audits ist klar: "Der QMB verantwortet diesen Bereich"
```

### Prüfende Funktion

**Was macht sie?**

- Diese Funktion prüft Dokumente, bevor sie freigegeben werden
- Sieht alle Dokumente im Status "In Prüfung"
- Hat automatisch Zugriff auf geschützte Ordner mit dieser Funktion
- Kann Dokumente annehmen oder zur Überarbeitung zurückweisen

**Wann brauchst du sie?**

- Bei Dokumenten, die eine fachliche Prüfung benötigen
- Für Vier-Augen-Prinzip bei wichtigen Dokumenten
- Bei ISO-Zertifizierungen und Compliance-Anforderungen

**Praktisches Beispiel:**

```text
📁 Arbeitsanweisungen (geschützt)
   Prüfende Funktion: Abteilungsleitung Produktion

   Workflow:
   1. Mitarbeiter erstellt Arbeitsanweisung → Status: Entwurf
   2. Zur Prüfung freigeben → Status: In Prüfung
   3. Abteilungsleitung prüft → ✅ Annehmen oder ❌ Zurückweisen
   4. Nach Prüfung → Status: Geprüft
```

### Freigebende Funktion

**Was macht sie?**

- Diese Funktion gibt Dokumente endgültig frei
- Sieht alle Dokumente im Status "Geprüft"
- Hat automatisch Zugriff auf geschützte Ordner mit dieser Funktion
- Kann Dokumente freigeben und sieht sie auch nach der Freigabe

**Wann brauchst du sie?**

- Bei Dokumenten mit rechtlicher oder strategischer Bedeutung
- Für finale Freigabe nach Prüfung
- Bei ISO 9001 und anderen Managementsystemen

**Praktisches Beispiel:**

```text
📁 Unternehmensprozesse (geschützt)
   Prüfende Funktion: Prozessverantwortliche/r
   Freigebende Funktion: Geschäftsführung

   Workflow:
   1. Prozessverantwortliche/r erstellt Prozess → Status: Entwurf
   2. Zur Prüfung freigeben → Status: In Prüfung
   3. Prozessverantwortliche/r prüft → Status: Geprüft
   4. Geschäftsführung gibt frei → Status: Freigegeben ✅

   → Geschäftsführung kann das freigegebene Dokument jederzeit einsehen
```

## Vererbung von Berechtigungen

### Das Prinzip der Vererbung

Eine der mächtigsten Funktionen im DMS ist die Vererbung von Berechtigungen. Wenn du einen Ordner mit Unterordnern anlegst, kannst du die Berechtigungen automatisch vererben lassen.

**Was wird vererbt?**

- ✅ Sichtbarkeit (normal/geschützt)
- ✅ Organisationseinheiten
- ✅ Admin-Team
- ✅ Team
- ✅ Prüfende Funktion
- ✅ Freigebende Funktion

**Was wird NICHT automatisch vererbt?**

- ❌ Verantwortliche Funktion (kann aber manuell vererbt werden)

### Aktivieren der Vererbung

Beim Erstellen oder Bearbeiten eines Ordners findest du die Checkbox:

```text
☑️ Berechtigungen von übergeordnetem Ordner vererben
```

**Was passiert, wenn du sie aktivierst?**

1. **Berechtigungsfelder werden ausgeblendet**

   - Sichtbarkeit
   - Organisationseinheiten
   - Admin-Team
   - Team

2. **Funktionsfelder bleiben sichtbar**

   - Verantwortliche Funktion
   - Prüfende Funktion
   - Freigebende Funktion

3. **Werte werden vom übergeordneten Ordner übernommen**

   - Der Ordner erbt alle Einstellungen automatisch
   - Du musst nichts manuell konfigurieren

### Praktisches Beispiel: Qualitätsmanagement

**Vorher - Ohne Vererbung:**

```text
📁 Qualitätsmanagement (geschützt, Freigeber: QMB, Orgunit: QM)
   ├─ 📁 Prozesse
   │  └─ ⚠️ Du musst manuell setzen:
   │     - Sichtbarkeit: geschützt
   │     - Freigeber: QMB
   │     - Orgunit: QM
   │
   ├─ 📁 Formulare
   │  └─ ⚠️ Du musst manuell setzen:
   │     - Sichtbarkeit: geschützt
   │     - Freigeber: QMB
   │     - Orgunit: QM
   │
   └─ 📁 Arbeitsanweisungen
      └─ ⚠️ Du musst manuell setzen:
         - Sichtbarkeit: geschützt
         - Freigeber: QMB
         - Orgunit: QM
```

**Jetzt - Mit Vererbung:**

```text
📁 Qualitätsmanagement (geschützt, Freigeber: QMB, Orgunit: QM)
   ├─ 📁 Prozesse
   │  └─ ✅ Erbt automatisch:
   │     - Sichtbarkeit: geschützt
   │     - Freigeber: QMB
   │     - Orgunit: QM
   │
   ├─ 📁 Formulare
   │  └─ ✅ Erbt automatisch:
   │     - Sichtbarkeit: geschützt
   │     - Freigeber: QMB
   │     - Orgunit: QM
   │
   └─ 📁 Arbeitsanweisungen
      └─ ✅ Erbt automatisch:
         - Sichtbarkeit: geschützt
         - Freigeber: QMB
         - Orgunit: QM
```

**Zeitersparnis:** Statt 3× die gleichen Einstellungen zu setzen, konfigurierst du sie nur einmal auf oberster Ebene!

### Vererbung unterbrechen

Du kannst die Vererbung jederzeit für einzelne Unterordner unterbrechen:

**Szenario:** Du möchtest, dass der Ordner "Vertrauliche Protokolle" nur die Geschäftsleitung als Freigeber hat.

```text
📁 Qualitätsmanagement (Freigeber: QMB)
   ├─ 📁 Prozesse (✅ erbt: Freigeber: QMB)
   ├─ 📁 Formulare (✅ erbt: Freigeber: QMB)
   └─ 📁 Vertrauliche Protokolle
      └─ ☐ Berechtigungen vererben (deaktiviert)
      └─ Freigeber: Geschäftsleitung (manuell gesetzt)
```

So behältst du volle Kontrolle und kannst Ausnahmen definieren, wo nötig.

## Berechtigungen anzeigen

ELIZA bietet dir eine transparente Übersicht über alle effektiven Berechtigungen eines Ordners.

**Wo findest du sie?**

- In der Ordner-Detailansicht
- Über den Button "Berechtigungen anzeigen"

**Was siehst du?**

Eine Tabelle mit allen Eigenschaften und ihrem Vererbungsstatus:

| Eigenschaft | Wert | Status |
|-------------|------|--------|
| Sichtbarkeit | Geschützt | ✅ Vererbt |
| Organisationseinheiten | QM, Produktion | ✅ Vererbt |
| Admin-Team | Leer | 🔘 Lokal |
| Team | Qualitätszirkel | ✅ Vererbt |
| Verantwortliche Funktion | QMB | 🔘 Lokal |
| Prüfende Funktion | Abteilungsleitung | ✅ Vererbt |
| Freigebende Funktion | QMB | ✅ Vererbt |

**Legende:**

- ✅ Grüner Haken = Wert ist vererbt vom übergeordneten Ordner
- 🔘 Graues Symbol = Wert ist lokal am Ordner gesetzt

So weisst du immer genau, woher welche Berechtigung kommt!

## Teams und Organisationseinheiten

### Admin-Team

**Was macht es?**

- Mitglieder haben vollständige Kontrolle über den Ordner
- Können Dokumente hinzufügen, bearbeiten und löschen
- Können Unterordner erstellen und verwalten
- Sehen geschützte Ordner automatisch

**Wann brauchst du es?**

- Für dedizierte Administratoren eines Bereichs
- Bei sehr spezialisierten oder sensiblen Ordnern
- Wenn du bestimmte Personen gezielt als Verwalter einsetzen möchtest

**Praktisches Beispiel:**

```text
📁 IT-Dokumentation (geschützt)
   Admin-Team: IT-Administratoren

   → Nur IT-Admins können Dokumente hinzufügen und bearbeiten
   → Andere Mitarbeiter können mit Leserechten (über Orgunit) nur schauen
```

### Team

**Was macht es?**

- Mitglieder können den geschützten Ordner sehen
- Haben Lesezugriff auf den Ordner
- Können je nach globalen Berechtigungen auch Dokumente hinzufügen

**Wann brauchst du es?**

- Für projektbezogene Zusammenarbeit
- Wenn eine bestimmte Gruppe an einem Thema arbeitet
- Für temporäre Zugriffsrechte

**Praktisches Beispiel:**

```text
📁 Projekt Neuprodukt-Launch (geschützt)
   Team: Projekt-Team Neuprodukt

   → Alle Projekt-Mitglieder sehen den Ordner
   → Können Dokumente hochladen und gemeinsam daran arbeiten
   → Andere Mitarbeiter sehen den Ordner nicht
```

### Organisationseinheiten (Orgunits)

**Was macht sie?**

- Alle Mitglieder der Orgunit können den geschützten Ordner sehen
- Basiert auf der Organisationsstruktur deines Unternehmens
- Ideal für abteilungsübergreifende Bereiche

**Wann brauchst du sie?**

- Für abteilungsspezifische Dokumente
- Bei Bereichs- oder Standort-basierten Zugriffen
- Für langfristige, strukturbasierte Berechtigungen

**Praktisches Beispiel:**

```text
📁 Personalordner (geschützt)
   Orgunits: HR, Geschäftsleitung

   → Alle Mitarbeiter in HR und GL sehen den Ordner
   → Neue Mitarbeiter in HR bekommen automatisch Zugriff
   → Bei Wechsel aus HR fällt der Zugriff automatisch weg
```

## Dokument-Berechtigungen

Dokumente haben ein eigenes Berechtigungsmodell, das eng mit dem Ordner-System verzahnt ist.

### Basis-Prinzip

Die Sichtbarkeit eines Dokuments hängt von seinem Status ab:

1. **Entwurf** - Nur Autor und Ordner-Admins
2. **In Prüfung** - Autor, Admins, Prüfer
3. **Geprüft** - Autor, Admins, Prüfer, Freigeber
4. **Freigegeben** - Alle mit Ordner-Zugriff + Freigeber
5. **Abgelaufen** - Nur Autor und Admins
6. **Archiviert** - Nur Admins

**Workflow-Diagramm:**

```text
[Entwurf] → [In Prüfung] → [Geprüft] → [Freigegeben]
    ↓           ↓              ↓            ↓
    └───────→ [Archiviert] ←──────────────┘
                   ↑
            [Abgelaufen]
```

### Besonderheit: Freigeber sehen freigegebene Dokumente

Ein wichtiger Aspekt der Berechtigungen:

**Freigeber können freigegebene Dokumente immer sehen**, auch wenn sie sonst keinen Zugriff auf den Ordner hätten.

**Warum ist das wichtig?**

```text
📁 Abteilung Produktion (geschützt, Orgunit: Produktion)
   Freigebende Funktion: Geschäftsführung

   📄 Arbeitsanweisung Montage.pdf
      Status: Freigegeben
      Freigegeben durch: CEO

   → CEO kann das Dokument jederzeit einsehen
   → Auch ohne Mitgliedschaft in der Orgunit "Produktion"
   → Wichtig für Nachvollziehbarkeit und Kontrolle
```

**Vorteile:**

- Freigeber behalten Überblick über freigegebene Dokumente
- Nachvollziehbarkeit und Kontrolle bleiben erhalten
- Keine zusätzlichen Berechtigungen nötig

## Best Practices

### 1. Strukturiere strategisch

**Gute Ordnerstruktur:**

```text
📁 Hauptbereiche mit Funktionen
   ├─ 📁 Unterordner mit Vererbung
   │  ├─ 📁 Spezifische Themen mit Vererbung
   │  └─ 📁 Ausnahmen ohne Vererbung
   └─ 📁 Weitere Unterordner mit Vererbung
```

**Vorteile:**

- Weniger Verwaltungsaufwand
- Konsistente Berechtigungen
- Leichter zu verstehen

### 2. Nutze Funktionen konsequent

**Für jedes Managementsystem:**

```text
📁 ISO 9001
   Verantwortliche Funktion: QMB
   Prüfende Funktion: Prozessverantwortliche
   Freigebende Funktion: Geschäftsführung

📁 ISO 14001
   Verantwortliche Funktion: Umweltbeauftragte
   Prüfende Funktion: Umweltauditor
   Freigebende Funktion: Geschäftsführung
```

**Vorteile:**

- Klare Verantwortlichkeiten
- Audit-ready
- Transparente Workflows

### 3. Kombiniere Zugriffskonzepte

**Mehrschichtige Sicherheit:**

```text
📁 Vertrauliche Dokumente (geschützt)
   Admin-Team: Geschäftsleitung
   Orgunits: Management, Controlling
   Team: Audit-Team (temporär)
   Freigebende Funktion: CEO
```

**Vorteile:**

- Maximale Flexibilität
- Verschiedene Zugriffsebenen
- Temporäre und permanente Rechte kombiniert

### 4. Dokumentiere Berechtigungen

**In der Ordner-Beschreibung:**

```text
📁 Finanzberichte
   Beschreibung:
   "Dieser Ordner enthält alle Finanzberichte und Budget-Dokumente.

   Zugriff haben:
   - Geschäftsleitung (Admin)
   - Finanzabteilung (Orgunit)
   - Controlling (Orgunit)

   Freigabe: CFO
   Prüfung: Finanzbuchhaltung"
```

**Vorteile:**

- Transparenz für alle Beteiligten
- Weniger Rückfragen
- Dokumentation für Audits

### 5. Überprüfe regelmässig

**Quartalsweise Check:**

- Sind alle Funktionszuordnungen noch aktuell?
- Haben ausgeschiedene Mitarbeiter noch Zugriff?
- Sind neue Mitarbeiter richtig zugeordnet?
- Werden die Orgunits noch genutzt oder sind sie veraltet?

**Vorteile:**

- Sicherheit bleibt gewährleistet
- Keine unnötigen Berechtigungen
- Compliance-konform

## Häufige Fragen

### Kann ich Berechtigungen nachträglich ändern?

**Ja, jederzeit!** Berechtigungen wirken sich sofort aus:

- Vererbung aktivieren → Unterordner übernehmen sofort die Einstellungen
- Funktion ändern → Neue Personen haben sofort Zugriff
- Sichtbarkeit ändern → Ordner wird sofort geschützt oder öffentlich

### Was passiert mit bestehenden Unterordnern, wenn ich Vererbung aktiviere?

**Nichts automatisch.** Die Vererbung gilt nur für neu erstellte Unterordner oder Unterordner, bei denen du die Vererbung explizit aktivierst.

**Wenn du möchtest, dass bestehende Unterordner erben:**

1. Öffne jeden Unterordner einzeln
2. Aktiviere "Berechtigungen vererben"
3. Speichern

### Kann ich sehen, wer alles Zugriff auf einen Ordner hat?

**Ja, mit der Berechtigungsübersicht:**

- Öffne den Ordner
- Klicke auf "Berechtigungen anzeigen"
- Du siehst alle Funktionen, Teams und Orgunits

**Für detaillierte User-Listen:**

- Prüfe die Mitglieder der Funktionen in der Organisation
- Schau dir die Team-Mitglieder an
- Prüfe die Mitglieder der Orgunits

### Was ist besser: Team oder Orgunit?

**Kommt drauf an:**

**Team verwenden für:**

- Projektbezogene Zusammenarbeit
- Temporäre Zugriffsrechte
- Kleine, dedizierte Gruppen
- Flexible Zusammensetzung

**Orgunit verwenden für:**

- Abteilungsbasierte Berechtigungen
- Langfristige Strukturen
- Grosse Gruppen
- Automatische Vererbung bei Personalwechsel

**Oft ist die Kombination optimal:**

```text
📁 Projekt XYZ (geschützt)
   Orgunit: Projektmanagement (langfristig)
   Team: Externe Berater (temporär)
```

### Warum sehe ich einen geschützten Ordner, obwohl ich keine Orgunit-Mitgliedschaft habe?

**Mögliche Gründe:**

1. **Du bist Prüfer** - Du hast die prüfende Funktion
2. **Du bist Freigeber** - Du hast die freigebende Funktion
3. **Du bist im Team** - Du bist Team-Mitglied des Ordners
4. **Du bist Admin** - Du hast die globale Berechtigung "Dokumentordner löschen"
5. **Du bist im Admin-Team** - Du bist im Admin-Team des Ordners

Alle diese Rollen geben automatisch Zugriff auf geschützte Ordner!

### Kann ich Berechtigungen auf einzelne Dokumente setzen?

**Ja, teilweise:**

- Dokumente können eigene Orgunit-Zuweisungen haben
- Der Workflow-Status steuert die Sichtbarkeit
- Freigeber sehen immer freigegebene Dokumente

**Aber:** Die grundlegende Sichtbarkeit wird vom Ordner bestimmt. Ein Dokument in einem geschützten Ordner bleibt geschützt, auch mit eigenen Orgunits.

### Was passiert, wenn ich eine Funktion lösche?

**Die Zuordnung bleibt bestehen, ist aber leer:**

- Der Ordner hat weiterhin das Feld "Freigebende Funktion"
- Es ist aber keine Funktion mehr zugeordnet
- Niemand hat mehr automatische Freigeber-Rechte über diese Funktion

**Lösung:** Weise eine neue Funktion zu oder entferne die Zuordnung ganz.

## Zusammenfassung

Das DMS-Berechtigungssystem gibt dir volle Kontrolle über den Zugriff auf deine Dokumente:

- ✅ **Sichtbarkeit** steuert, ob ein Ordner für alle oder nur bestimmte Personen zugänglich ist
- ✅ **Funktionen** definieren Verantwortung, Prüfung und Freigabe
- ✅ **Vererbung** spart Zeit und sorgt für konsistente Berechtigungen
- ✅ **Teams** ermöglichen flexible, projektbasierte Zusammenarbeit
- ✅ **Orgunits** bilden deine Organisationsstruktur ab
- ✅ **Transparenz** durch Berechtigungsübersicht jederzeit gegeben

Mit diesem Wissen kannst du dein DMS optimal konfigurieren und sichere, effiziente Workflows für dein Unternehmen aufbauen!
