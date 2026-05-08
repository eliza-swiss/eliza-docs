---
title: "Berechtigungen im Spaces-Modul"
description: ""
weight: "5"
tags:
  - "berechtigungen"
  - "spaces"
  - "teams"
  - "zugriff"
  - "rollen"
---


# Berechtigungen im Spaces-Modul - Einführung

## Überblick

Das Spaces-Modul verwendet ein einfaches Berechtigungssystem, das zwischen **öffentlichen** und **geschützten Spaces** unterscheidet. Diese Anleitung erklärt, wer was sehen und bearbeiten darf.

> 🔧 **Für Administratoren:** Die technische Referenz mit Berechtigungstabellen, Django-Codenames, Permissions-Matrix und erweiterten Konfigurationen findest du in [Kapitel 5: Berechtigungskonzept]({{< ref "05-berechtigungskonzept" >}}).

## Aufbau des Spaces-Moduls

Das Spaces-Modul ist wie folgt aufgebaut:

```
Space (Arbeitsbereich)
  └─ Board (Kanban-Tafel)
      └─ List (Spalte)
          └─ Card (Aufgabe/Karte)
```

Berechtigungen werden von oben nach unten weitergegeben. Bei einzelnen Cards können aber **zugewiesene Personen** und **Mitwirkende** spezielle Rechte erhalten.

---

## Arten von Spaces

### 1. Öffentliche Spaces

**Bedeutung:** Für alle Mitarbeitenden im Unternehmen sichtbar.

#### Was kann ich sehen?
- Alle Mitarbeitenden mit entsprechender Berechtigung können die Boards und Cards ansehen
- Ideal für Transparenz und Überblick

#### Was kann ich bearbeiten?
⚠️ **Wichtig:** In öffentlichen Spaces können normale Teammitglieder **NICHT** einfach so Cards bearbeiten!

**Bearbeiten dürfen:**
- Verwalter des Space
- Personen, denen eine Card zugewiesen ist
- Mitwirkende an einer Card

#### Was kann ich löschen?
- Verwalter des Space
- Person, der die Card zugewiesen ist

### 2. Geschützte Spaces (Private)

**Bedeutung:** Nur für Teammitglieder sichtbar und verwendbar.

#### Was kann ich sehen?
- Nur Teammitglieder des Space
- Aussenstehende sehen nichts

#### Was kann ich bearbeiten?
- Alle Teammitglieder können Cards ansehen **und** bearbeiten
- Zugewiesene Personen
- Mitwirkende

#### Was kann ich löschen?
- Verwalter des Space
- Person, der die Card zugewiesen ist

---

## Wer darf was?

### Besitzer des Space (Owner)
- **Automatisch:** Verwalter mit allen Rechten
- **Kann:** Alles sehen, bearbeiten, hinzufügen und löschen
- **Zuständig für:** Verwaltung des Space und Ernennung weiterer Verwalter

### Verwalter des Space (Admin)
- **Ernennung:** Durch Owner oder andere Admins
- **Kann:**
  - ✅ Alles ansehen
  - ✅ Neue Boards und Cards erstellen
  - ✅ Alles bearbeiten
  - ✅ Alles löschen
- **Tipp:** Admin-Rechte nur an vertrauenswürdige Personen vergeben

### Teammitglied

**In geschützten Spaces:**
- ✅ Alles ansehen
- ✅ Alles bearbeiten
- ✅ Neue Cards erstellen
- ❌ Löschen (nur Admins)

**In öffentlichen Spaces:**
- ✅ Alles ansehen
- ❌ Bearbeiten (nur bei eigenen zugewiesenen Cards)
- ❌ Löschen (nur Admins)

### Zugewiesene Person (Assigned User)
- **Pro Card:** Eine Person kann als Verantwortlicher zugewiesen werden
- **Rechte auf dieser Card:**
  - ✅ Ansehen
  - ✅ Bearbeiten
  - ✅ Löschen
- **Wichtig:** Funktioniert auch wenn die Person nicht im Team ist!
- **Vorteil:** Klare Verantwortlichkeit

### Mitwirkende (Contributors)
- **Pro Card:** Mehrere Personen können als Mitwirkende hinzugefügt werden
- **Rechte auf dieser Card:**
  - ✅ Ansehen
  - ✅ Bearbeiten
  - ❌ Löschen (nur Assigned User und Admins)
- **Wichtig:** Funktioniert auch wenn die Person nicht im Team ist!
- **Vorteil:** Gemeinsame Bearbeitung möglich

---

## Praxisbeispiele

### Beispiel 1: Unternehmens-Board

**Situation:**
- Space: "Jahresziele 2025" (öffentlich)
- Board: "Marketing-Kampagnen"
- Team: 5 Marketing-Mitarbeitende
- Admin: 1 Marketing-Leiter

**Was passiert:**
- ✅ Alle Mitarbeitenden können das Board ansehen und sehen den Projektfortschritt
- ❌ Normale Mitarbeitende können keine Cards bearbeiten
- ✅ Maria wird als Assigned User für die Card "Social Media Strategie" eingetragen → Maria kann jetzt diese Card bearbeiten
- ✅ Peter und Sarah werden als Contributors hinzugefügt → Beide können mitarbeiten
- ✅ Der Marketing-Leiter (Admin) kann alle Cards bearbeiten und löschen

**Vorteil:** Transparenz für alle, Bearbeitung nur durch Verantwortliche.

### Beispiel 2: Team-internes Board

**Situation:**
- Space: "IT-Team" (geschützt/private)
- Board: "Sprint-Planung"
- Team: 3 Entwickler
- Admin: 1 Team-Lead

**Was passiert:**
- ❌ Mitarbeitende aus anderen Abteilungen sehen das Board nicht
- ✅ Alle 3 Entwickler können Cards ansehen und bearbeiten
- ✅ Alle können neue Cards erstellen
- ❌ Nur der Team-Lead kann Cards löschen
- ✅ Ein externer Berater wird als Assigned User für eine spezielle Card eingetragen → Der Berater sieht nur diese eine Card

**Vorteil:** Vertraulichkeit gewährleistet, Team arbeitet flexibel.

### Beispiel 3: Projekt mit externen Dienstleistern

**Situation:**
- Space: "Website-Relaunch" (geschützt/private)
- Board: "Design & Entwicklung"
- Team: 2 interne Mitarbeitende
- Externe: 2 Agentur-Mitarbeitende
- Admin: 1 Projektleiter

**Was passiert:**
- ❌ Die Agentur-Mitarbeitenden sehen standardmässig nichts
- ✅ Agentur-Mitarbeiter A wird als Assigned User für "Logo-Design" eingetragen:
  - Sieht nur diese Card
  - Kann nur diese Card bearbeiten
  - Sieht keine anderen Cards
- ✅ Agentur-Mitarbeiter B wird als Contributor für "Frontend-Entwicklung" hinzugefügt:
  - Kann die Card sehen und bearbeiten
  - Kann sie aber nicht löschen
- ✅ Die 2 internen Mitarbeitenden können alle Cards sehen und bearbeiten

**Vorteil:** Externe erhalten nur Zugriff auf ihre spezifischen Cards.

---

## Berechtigungsübersicht

### Öffentliche Spaces

| Wer | Ansehen | Erstellen | Bearbeiten | Löschen |
|-----|---------|-----------|------------|---------|
| Admin | ✅ | ✅ | ✅ | ✅ |
| Teammitglied | ✅ | ✅ | ❌ | ❌ |
| Assigned User (nur ihre Card) | ✅ | ✅ | ✅ | ✅ |
| Contributors (nur ihre Card) | ✅ | ✅ | ✅ | ❌ |
| Andere Mitarbeitende | ✅ | ❌ | ❌ | ❌ |

### Geschützte Spaces (Private)

| Wer | Ansehen | Erstellen | Bearbeiten | Löschen |
|-----|---------|-----------|------------|---------|
| Admin | ✅ | ✅ | ✅ | ✅ |
| Teammitglied | ✅ | ✅ | ✅ | ❌ |
| Assigned User (nur ihre Card) | ✅ | ✅ | ✅ | ✅ |
| Contributors (nur ihre Card) | ✅ | ✅ | ✅ | ❌ |
| Andere Mitarbeitende | ❌ | ❌ | ❌ | ❌ |

---

## Empfehlungen für die Praxis

### Wann öffentliche Spaces verwenden?

✅ **Gut geeignet für:**
- Unternehmensweite Projekt-Boards
- Transparenz über Abteilungsziele
- Öffentliche Ankündigungen und Roadmaps

❌ **Nicht geeignet für:**
- Vertrauliche Projekte
- Personalthemen
- Finanzplanung
- Strategische Entscheidungen

### Wann geschützte Spaces verwenden?

✅ **Gut geeignet für:**
- Team-interne Aufgabenplanung
- Vertrauliche Projekte
- HR- und Personalthemen
- Strategische Planungen

### Tipps für Assigned User

- ✅ Weise Cards klar einer verantwortlichen Person zu
- ✅ So weiss jeder, wer wofür zuständig ist
- ✅ Ermöglicht auch externen Personen gezielten Zugriff
- ✅ Funktioniert in öffentlichen und geschützten Spaces

### Tipps für Contributors

- ✅ Füge Contributors hinzu, wenn mehrere Personen an einer Card arbeiten
- ✅ Alle Contributors können die Card bearbeiten
- ℹ️ Löschen kann nur der Assigned User oder ein Admin

### Tipps für Admins

- ⚠️ Admins haben volle Kontrolle – vergib diese Rolle nur an vertrauenswürdige Personen
- ✅ Jeder Space sollte mindestens einen Admin haben
- ✅ Bei grösseren Teams können mehrere Admins sinnvoll sein

---

## Häufige Fragen

### "Ich kann meine Card nicht bearbeiten, obwohl ich im Team bin"

**Grund:** Du arbeitest in einem öffentlichen Space. Dort können normale Teammitglieder keine Cards bearbeiten.

**Lösung:**
1. Bitte einen Admin, dich als **Assigned User** für die Card einzutragen
2. Oder dich als **Contributor** hinzuzufügen
3. Oder dich zum **Admin** zu ernennen (wenn du dauerhaft mehr Rechte brauchst)

### "Ein externer Berater sieht unser Board nicht"

**Grund:** Das Board ist in einem geschützten Space. Nur Teammitglieder haben Zugriff.

**Lösung:**
1. **Voller Zugriff:** Füge den Berater zum Team des Space hinzu (kann dann alles sehen und bearbeiten)
2. **Begrenzter Zugriff:** Weise dem Berater nur spezifische Cards zu (kann dann nur diese sehen und bearbeiten)

### "Ich kann eine Card nicht löschen"

**Grund:** Das Löschen ist auf Admins und Assigned User beschränkt.

**Lösung:**
1. Bitte einen Admin, die Card zu löschen
2. Oder bitte darum, dass du als Assigned User eingetragen wirst (wenn du für die Card verantwortlich bist)

### "Nach der Änderung des Space-Typs haben Leute plötzlich andere Rechte"

**Grund:** Öffentliche und geschützte Spaces haben unterschiedliche Berechtigungsregeln.

**Was passiert:**
- Bei Änderung von geschützt → öffentlich: Teammitglieder verlieren Bearbeitungsrechte
- Bei Änderung von öffentlich → geschützt: Nur noch Teammitglieder haben Zugriff

**Tipp:** ⚠️ Sei vorsichtig beim Ändern des Space-Typs!

---

## Wichtige Hinweise

### Teamzugehörigkeit bei Boards

Jedes Board hat eine Einstellung **"Team vom Space übernehmen"**:

**Einstellung aktiv (Standard):**
- Das Board verwendet automatisch die Teammitglieder des Space
- Einfacher zu verwalten
- Empfohlen für die meisten Fälle

**Einstellung deaktiv:**
- Das Board hat ein eigenes, unabhängiges Team
- Nützlich für Untergruppen innerhalb eines Space
- Erfordert zusätzliche Verwaltung

**Wichtig:** Admins des Space haben immer Zugriff auf alle Boards, unabhängig von dieser Einstellung.

---

## Zusammenfassung

Das Berechtigungssystem im Spaces-Modul ist flexibel und sicher:

✅ **Öffentliche Spaces** schaffen Transparenz und ermöglichen kontrollierte Bearbeitung
✅ **Geschützte Spaces** wahren Vertraulichkeit bei voller Teamflexibilität
✅ **Assigned User** sorgen für klare Verantwortlichkeiten
✅ **Contributors** ermöglichen gemeinsame Bearbeitung
✅ **Admins** behalten die Kontrolle

Mit der richtigen Kombination dieser Elemente kannst du effektiv mit deinem Team zusammenarbeiten und gleichzeitig sicherstellen, dass vertrauliche Informationen geschützt bleiben.

---

**Letzte Aktualisierung:** 2025-10-13
**Version:** 3.0
