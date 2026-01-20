---
title: "Berechtigungen und Zugriff"
slug: "berechtigungen"
weight: 7
category: "Administration"
tags: ["berechtigungen", "permissions", "zugriff", "admin", "gruppen", "sicherheit"]
---

# Berechtigungen und Zugriff

Das Tutorials-Modul verfügt über ein differenziertes Berechtigungssystem, das den Zugriff auf Kursordner, Kurse, Lektionen und Anmeldungen steuert.

## Berechtigungskonzept

### Hierarchische Vererbung

Berechtigungen werden von oben nach unten vererbt:

```
Kursordner (Folder)
 └── Kurs (Course) ← erbt von Ordner
      └── Lektion (Lesson) ← erbt von Kurs
           └── Abschnitt (Section) ← erbt von Lektion
```

Wenn ein Benutzer Rechte auf einem Kursordner hat, gelten diese automatisch für alle enthaltenen Elemente.

### Berechtigungsebenen

| Ebene | Beschreibung |
|-------|--------------|
| **Anzeigen (View)** | Inhalte sehen und lesen |
| **Hinzufügen (Add)** | Neue Elemente erstellen |
| **Ändern (Change)** | Bestehende Elemente bearbeiten |
| **Löschen (Delete)** | Elemente entfernen |

---

## Berechtigungsgruppen

### Standard-Gruppen

Das Modul erstellt automatisch zwei Berechtigungsgruppen:

| Gruppe | Technischer Name | Rechte |
|--------|------------------|--------|
| **Tutorials (Admin)** | `tutorials_admin` | Volle Verwaltungsrechte |
| **Tutorials (Lesen)** | `tutorials_users` | Lesezugriff auf freigegebene Inhalte |

### Gruppen verwalten

**Wissen & Lernen → Einstellungen → Gruppen verwalten**

Als Administrator kannst du:

1. Benutzer zu Gruppen hinzufügen
2. Benutzer aus Gruppen entfernen
3. Gruppen-Mitgliedschaften einsehen

---

## Basis-Berechtigungen

### Kursordner-Berechtigungen

| Berechtigung | Beschreibung |
|--------------|--------------|
| `view_folder` | Kursordner anzeigen |
| `add_folder` | Neue Kursordner erstellen |
| `change_folder` | Kursordner bearbeiten |
| `delete_folder` | Kursordner löschen |

### Kurs-Berechtigungen

| Berechtigung | Beschreibung |
|--------------|--------------|
| `view_course` | Kurse anzeigen |
| `add_course` | Neue Kurse erstellen |
| `change_course` | Kurse bearbeiten |
| `delete_course` | Kurse löschen |

### Lektions-Berechtigungen

| Berechtigung | Beschreibung |
|--------------|--------------|
| `view_lesson` | Lektionen anzeigen |
| `add_lesson` | Neue Lektionen erstellen |
| `change_lesson` | Lektionen bearbeiten |
| `delete_lesson` | Lektionen löschen |

### Anmeldungs-Berechtigungen

| Berechtigung | Beschreibung |
|--------------|--------------|
| `view_enrollment` | Anmeldungen anzeigen |
| `add_enrollment` | Teilnehmer anmelden |
| `change_enrollment` | Anmeldungen bearbeiten |
| `delete_enrollment` | Anmeldungen löschen |

### Fortschritts-Berechtigungen

| Berechtigung | Beschreibung |
|--------------|--------------|
| `view_lessonprogress` | Lernfortschritt anzeigen |
| `change_lessonprogress` | Lernfortschritt bearbeiten |
| `delete_lessonprogress` | Fortschrittsdaten löschen |

---

## Spezielle Berechtigungen

### System-Objekte

Für System-Objekte (z.B. ELIZA-Systemschulungen) gibt es spezielle Berechtigungen:

| Berechtigung | Beschreibung |
|--------------|--------------|
| `view_system_objects` | System-Objekte anzeigen |
| `change_system_objects` | System-Objekte bearbeiten |

System-Objekte:
- Sind als `is_system_object=True` markiert
- Benötigen explizite Berechtigung zum Anzeigen/Bearbeiten
- Werden typischerweise von ELIZA bereitgestellt

---

## Ordner-basierte Berechtigungen

### Admin-Team

Das Admin-Team eines Kursordners hat **volle Rechte** auf:
- Den Kursordner selbst
- Alle enthaltenen Kurse
- Alle Lektionen und Abschnitte
- Alle Anmeldungen

**So wirst du Admin:**
1. Ein bestehender Admin fügt dich zum Admin-Team hinzu
2. Oder: Du hast die globale `delete_folder`-Berechtigung

### Team

Team-Mitglieder haben **eingeschränkte Rechte**:
- Kursordner und Kurse anzeigen
- Lektionen lesen
- Eigene Anmeldungen verwalten

### Beteiligte Organisationseinheiten

Benutzer in den zugewiesenen Organisationseinheiten:
- Können den Kursordner sehen (bei `state=approved`)
- Haben automatisch Zugriff auf freigegebene Kurse
- Berechtigungen werden dynamisch aktualisiert

> **💡 Tipp:** Organisationseinheiten eignen sich für abteilungsbasierte Schulungen.

---

## Sichtbarkeit

### Normal vs. Geschützt

| Sichtbarkeit | Wer kann zugreifen |
|--------------|-------------------|
| **Normal** | Alle mit `view_folder`/`view_course`-Berechtigung |
| **Geschützt** | Nur Admin-Team, Team oder zugewiesene Orgunits |

### Status-abhängige Sichtbarkeit

| Status | Sichtbar für |
|--------|--------------|
| **Entwurf** | Nur Admins und Bearbeiter |
| **Zur Prüfung** | Admins und Bearbeiter |
| **Freigegeben** | Alle berechtigten Benutzer |
| **Abgelaufen** | Alle berechtigten Benutzer (mit Warnung) |
| **Archiviert** | Nur Admins |

---

## Berechtigungsprüfung

### Zugriff auf Kursordner

Die Prüfung erfolgt in dieser Reihenfolge:

1. **System-Objekt?** → Spezielle Berechtigung prüfen
2. **Admin-Team-Mitglied?** → Voller Zugriff
3. **Team-Mitglied?** → Lesezugriff
4. **In Organisationseinheit?** → Lesezugriff
5. **Status = freigegeben?**
   - Bei `normal`: `view_folder`-Berechtigung prüfen
   - Bei `geschützt`: Nur explizite Berechtigungen
6. **Sonst**: `change_folder`-Berechtigung prüfen

### Zugriff auf Kurse

1. **System-Objekt?** → Spezielle Berechtigung prüfen
2. **Status = freigegeben?**
   - `view_course`-Berechtigung ODER
   - Ordner-Berechtigung prüfen
3. **Nicht freigegeben?**
   - Kurs-Admin-Team ODER
   - Ordner-Admin-Team ODER
   - `change_course`-Berechtigung

### Zugriff auf Lektionen

Lektionen erben die Berechtigung von:
1. Übergeordneter Lektion (bei Unterlektionen)
2. Kurs
3. Kursordner

### Zugriff auf Anmeldungen

| Aktion | Wer kann |
|--------|----------|
| **Eigene anzeigen** | Jeder für seine eigenen |
| **Alle anzeigen** | Ordner/Kurs-Admins, `view_enrollment` |
| **Bearbeiten** | Ordner/Kurs-Admins, `change_enrollment` |
| **Löschen** | Ordner/Kurs-Admins, `delete_enrollment` |

> **⚠️ Wichtig:** Teilnehmer können ihre eigene Anmeldung NICHT bearbeiten oder löschen.

---

## Superuser-Verhalten

Superuser haben besondere Eigenschaften:

- **Alle Berechtigungen**: Zugriff auf alles
- **Keine LessonProgress**: Für Superuser werden keine Fortschrittsdaten erstellt
- **Test-Zwecke**: Ideal zum Testen von Kursen

---

## Berechtigungen einrichten

### Für einen neuen Kursordner

1. **Erstelle den Kursordner**
2. **Füge das Admin-Team hinzu**: Benutzer, die verwalten sollen
3. **Optional: Team hinzufügen**: Für eingeschränkten Zugriff
4. **Optional: Organisationseinheiten**: Für abteilungsbasierte Berechtigungen
5. **Setze die Sichtbarkeit**: Normal oder Geschützt
6. **Gib den Ordner frei**: Status auf "Freigegeben" setzen

### Für einen neuen Kurs

Kurse erben Berechtigungen vom Ordner. Optional:

1. **Kurs-Admin-Team hinzufügen**: Zusätzliche Verwalter für diesen spezifischen Kurs
2. **Sichtbarkeit anpassen**: Falls abweichend vom Ordner

### Für Teilnehmer

1. **Gruppe zuweisen**: Füge Benutzer zur Gruppe "Tutorials (Lesen)" hinzu
2. **Oder Anmeldung erstellen**: Berechtigt automatisch zum Kurs-Zugriff
3. **Oder Organisationseinheit nutzen**: Für automatische Berechtigung

---

## Fehlersuche

### "Zugriff verweigert"

Mögliche Ursachen:

| Problem | Lösung |
|---------|--------|
| Kurs/Ordner im Entwurf | Status auf "Freigegeben" setzen |
| Keine Berechtigung | Benutzer zur Gruppe hinzufügen |
| Geschützte Sichtbarkeit | Benutzer zum Team/Admin-Team hinzufügen |
| Nicht angemeldet | Anmeldung für den Kurs erstellen |

### "Kurs nicht sichtbar"

Prüfe:

1. Ist der Kurs freigegeben?
2. Ist der übergeordnete Ordner freigegeben?
3. Hat der Benutzer die nötige Berechtigung?
4. Bei geschützten Ordnern: Ist der Benutzer im Team?

---

## Best Practices

### ✅ Empfehlungen

- **Organisationseinheiten nutzen**: Vereinfacht die Verwaltung
- **Admin-Teams klein halten**: Nur wer wirklich verwalten muss
- **Status konsequent nutzen**: Entwurf für WIP, Freigegeben für Produktiv
- **Gruppen dokumentieren**: Wer ist in welcher Gruppe und warum
- **Regelmässig prüfen**: Berechtigungen bei Personalwechsel anpassen

### ❌ Häufige Fehler

- Alle als Admin eintragen
- Berechtigungen nicht testen
- Ordner/Kurse im Entwurf belassen
- Organisationseinheiten vergessen zu aktualisieren
- Ausgeschiedene Mitarbeiter nicht entfernen

---

## Zusammenfassung

✅ Du verstehst die hierarchische Berechtigungsstruktur
✅ Du kennst die Standard-Berechtigungsgruppen
✅ Du weisst, wie Admin-Team und Team funktionieren
✅ Du verstehst die Sichtbarkeitsoptionen
✅ Du kannst Berechtigungen für neue Ordner/Kurse einrichten
✅ Du kannst Berechtigungsprobleme diagnostizieren
