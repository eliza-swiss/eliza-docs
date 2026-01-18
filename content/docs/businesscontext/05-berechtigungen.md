---
title: "Berechtigungskonzept"
description: ""
weight: "5"
tags:
  - "permissions"
  - "berechtigungen"
  - "rollen"
  - "kontext"
---


# Berechtigungskonzept

In diesem Kapitel lernst du, wer welche Funktionen im Kontext Modul nutzen kann und wie Berechtigungen funktionieren.

## Überblick

Das Berechtigungssystem im Kontext Modul ist bewusst einfach gehalten:

```
1. Modul muss aktiviert sein
   ↓
2. Benutzer braucht passende Berechtigungen
   ↓
3. Benutzer kann Kontext nutzen
```

## Modul aktivieren/deaktivieren

### Ist das Kontext Modul aktiviert?

Dein ELIZA-Administrator kann das gesamte Kontext Modul ein- oder ausschalten.

**Aktiviert:**
- ✅ "Kontext" erscheint im Hauptmenü
- ✅ Dashboard ist zugänglich
- ✅ Alle Funktionen stehen zur Verfügung

**Deaktiviert:**
- ❌ "Kontext" erscheint NICHT im Menü
- ❌ Alle Kontext-Funktionen sind ausgeblendet

> **💡 Hinweis:** Wenn du das Kontext Modul nicht siehst, ist es möglicherweise für deine Organisation deaktiviert. Frage deinen Administrator.

## Benutzergruppen

Das Kontext Modul verwendet **zwei vordefinierte Systemgruppen**:

- **businesscontext_admin** - Kontext (Admin)
- **businesscontext_users** - Kontext (Lesen)

Dein Administrator kann dir eine dieser Gruppen zuweisen.

### Verfügbare Benutzergruppen

Es gibt zwei Hauptgruppen für das Kontext Modul:

#### 1. businesscontext_admin - Kontext (Admin)

**Systemgruppe:** `businesscontext_admin`

**Für wen:** QM-Beauftragte, Compliance-Verantwortliche, ISO Koordinatoren

**Was du tun kannst:**
- ✅ Alle Stakeholder und Themen ansehen
- ✅ Neue Stakeholder und Themen erstellen
- ✅ Stakeholder und Themen bearbeiten
- ✅ Stakeholder und Themen löschen
- ✅ Themenarten verwalten
- ✅ Änderungshistorie einsehen
- ✅ Verknüpfungen zu Prozessen und SWOT erstellen

**Typische Aufgaben:**
- ISO 9001 Zertifizierung vorbereiten
- Stakeholder-Bewertungen durchführen
- Kontext-Dokumentation pflegen
- Audit-Nachweise bereitstellen

#### 2. businesscontext_users - Kontext (Lesen)

**Systemgruppe:** `businesscontext_users`

**Für wen:** Alle Mitarbeitende, Prozess-Owner, Führungskräfte, externe Auditoren

**Was du tun kannst:**
- ✅ Alle Stakeholder ansehen
- ✅ Alle Themen ansehen
- ✅ Verknüpfungen zu Prozessen/SWOT sehen
- ❌ Nichts bearbeiten oder erstellen
- ❌ Nichts löschen
- ❌ Keine Themenarten verwalten
- ❌ Keine Historie einsehen

**Typische Aufgaben:**
- Kontext verstehen
- Stakeholder-Landschaft kennenlernen
- ISO 9001 Anforderungen nachvollziehen
- Informationen für eigene Prozesse nutzen

## Berechtigungen im Überblick

Diese Tabelle zeigt, wer was tun kann:

| Aktion | Admin | Users (Lesen) |
|--------|:-----:|:-------------:|
| **Stakeholder ansehen** | ✅ | ✅ |
| **Stakeholder erstellen** | ✅ | ❌ |
| **Stakeholder bearbeiten** | ✅ | ❌ |
| **Stakeholder löschen** | ✅ | ❌ |
| **Themen ansehen** | ✅ | ✅ |
| **Themen erstellen** | ✅ | ❌ |
| **Themen bearbeiten** | ✅ | ❌ |
| **Themen löschen** | ✅ | ❌ |
| **Themenarten verwalten** | ✅ | ❌ |
| **Historie einsehen** | ✅ | ❌ |
| **Verknüpfungen erstellen** | ✅ | ❌ |
| **Bewertungen anpassen** | ✅ | ❌ |

## Typische Szenarien

### Szenario 1: ISO 9001 Zertifizierung

**Situation:** Ihr bereitet euch auf eine ISO 9001 Zertifizierung vor

**Empfohlene Berechtigungen:**
- **QM-Team**: businesscontext_admin (verwaltet alles)
- **Alle Mitarbeitende**: businesscontext_users (verstehen Kontext)

**Vorteil:**
- QM-Team hat volle Kontrolle
- Alle verstehen den organisatorischen Kontext (ISO 9001 Anforderung!)
- Transparenz im Unternehmen

### Szenario 2: Externe Berater einbinden

**Situation:** Externe Berater unterstützen bei Stakeholder-Analyse

**Empfohlene Berechtigungen:**
- **Externe Berater**: businesscontext_users (nur Lesezugriff)
- **Internes QM-Team**: businesscontext_admin (volle Kontrolle)

**Vorteil:**
- Externe sehen den aktuellen Stand
- Externe können nichts ändern oder löschen
- Internes Team behält die Kontrolle

## Deine Berechtigungen prüfen

### Welche Rechte habe ich?

**Schnell-Check:**

1. Öffne das **Kontext Dashboard**
2. Prüfe, welche Buttons du siehst:

| Wenn du siehst... | Dann hast du... |
|-------------------|-----------------|
| "+ Interessierte Partei" Button | **businesscontext_admin** |
| "Bearbeiten" Icon bei Stakeholdern | **businesscontext_admin** |
| "Löschen" Icon | **businesscontext_admin** |
| "Historie" Menü | **businesscontext_admin** |
| Nur Dashboard ohne Buttons | **businesscontext_users** |

### Welche Gruppe habe ich?

1. Klicke auf **Dein Profil** (oben rechts)
2. Wähle **Mein Profil**
3. Scrolle zu **Gruppen und Berechtigungen**
4. Prüfe, welche Kontext-Gruppe du hast

## Häufige Fragen

### Warum sehe ich das Kontext Modul nicht?

**Mögliche Gründe:**

1. **Modul ist deaktiviert** → Frage deinen Administrator
2. **Keine Berechtigungen** → Du brauchst mindestens Viewer-Rechte
3. **Nicht eingeloggt** → Logge dich ein

### Warum kann ich keine Stakeholder erstellen?

**Grund:** Du hast nur **businesscontext_users** Rechte (nur Lesen)

**Lösung:** Frage deinen Administrator, ob du **businesscontext_admin** Rechte bekommen kannst

### Warum sehe ich keine Historie?

**Grund:** Nur **Admins** können die Änderungshistorie einsehen

**Lösung:** Falls du die Historie für Audits benötigst, bitte deinen Administrator um Admin-Rechte

### Kann ich nur meine Abteilung sehen?

**Nein.** Das Kontext Modul hat keine Abteilungs-Filter.

**Alle Benutzer mit Viewer-Rechten sehen ALLE Stakeholder und Themen.**

**Warum?**
- Kontext ist unternehmensweite Information
- ISO 9001 verlangt Transparenz
- Stakeholder und Themen betreffen oft mehrere Bereiche

**Alternative:** Falls du sensible Informationen hast, nutze das **DMS** oder **Contracts** Modul mit Team-basierten Berechtigungen.

## Berechtigungen zuweisen (Für Administratoren)

Falls du Administrator bist und Berechtigungen vergeben möchtest:

### Systemgruppen

Die zwei Systemgruppen sind bereits vordefiniert:

1. **businesscontext_admin** - Kontext (Admin) - Volle Verwaltung
2. **businesscontext_users** - Kontext (Lesen) - Nur Lesezugriff

### Benutzer zuweisen

1. Gehe zu **Core** → **Benutzerverwaltung**
2. Wähle einen Benutzer
3. Scrolle zu **Gruppen**
4. Wähle die passende Systemgruppe:
   - **businesscontext_admin** für QM-Beauftragte
   - **businesscontext_users** für alle anderen
5. Klicke **Speichern**

> **💡 Hinweis:** Ein Benutzer kann mehrere Gruppen haben. Die Rechte werden kombiniert.

## Best Practices

### ✅ Empfehlungen

**1. Minimale Berechtigungen**
- Gib nur die Rechte, die wirklich gebraucht werden
- Die meisten Benutzer brauchen nur **businesscontext_users**
- Admin-Rechte nur für QM-Verantwortliche

**2. Transparenz fördern**
- Alle Mitarbeitende sollten **businesscontext_users** haben
- ISO 9001 verlangt, dass der Kontext kommuniziert wird
- Transparenz fördert Verständnis

**3. Klare Rollen definieren**
- Dokumentiere, wer welche Systemgruppe bekommt
- Erstelle eine Übersicht für neue Mitarbeitende
- Kommuniziere die Rollen klar

**4. Regelmässige Reviews**
- Prüfe alle 3-6 Monate die Berechtigungen
- Entferne ausgeschiedene Mitarbeitende aus Gruppen
- Passe Berechtigungen bei Rollenwechseln an

**5. Historie schützen**
- Nur **businesscontext_admin** hat Zugriff auf Historie
- Verhindert versehentliches Löschen
- Audit-Trail bleibt geschützt

### ❌ Häufige Fehler

**1. Zu viele Admins**
- Nicht allen im QM-Team Admin-Rechte geben
- Mehr Admins = höheres Fehlerrisiko
- Nur QM-Verantwortliche brauchen **businesscontext_admin**

**2. Keine Leserechte für Mitarbeitende**
- Mitarbeitende müssen den Kontext kennen
- ISO 9001 verlangt Kommunikation
- Alle sollten **businesscontext_users** haben

**3. Erwartung von Team-Berechtigungen**
- Kontext hat KEINE Abteilungs-Filter
- Alle sehen alles (mit businesscontext_users)
- Für Team-basierte Daten nutze DMS oder Contracts

**4. Vergessene Benutzer**
- Alte Mitarbeitende in Gruppen lassen
- Zugriff nicht entziehen
- Compliance-Risiko!

## Unterschiede zu anderen Modulen

### Warum hat Kontext keine Team-Berechtigungen?

**Kontext vs. Contracts/DMS:**

| Merkmal | Kontext | Contracts/DMS |
|---------|---------|---------------|
| Zweck | Unternehmensweite Information | Team-spezifische Dokumente |
| Sichtbarkeit | Alle sehen alles | Team-basierte Zugriffskontrolle |
| Systemgruppen | Keine vordefinierten | Vordefinierte Gruppen vorhanden |
| Ordner/Teams | Nicht vorhanden | Ordner mit Team-Zugriff |

**Warum?**
- Kontext ist **strategische** Information für alle
- Stakeholder und Themen betreffen das **ganze Unternehmen**
- ISO 9001 verlangt **Transparenz** im Kontext

**Für sensible Daten:** Nutze **DMS** oder **Contracts** mit Team-Berechtigungen

## Zusammenfassung

### Das Wichtigste in Kürze

- 🔐 **Einfaches System**: Nur 2 Systemgruppen, keine komplexen Team-Strukturen
- 👥 **2 Systemgruppen**: businesscontext_admin und businesscontext_users
- 🌍 **Unternehmensweite Sichtbarkeit**: Alle sehen alle Stakeholder/Themen
- 👑 **Admin-Rechte sparsam vergeben**: Nur für QM-Verantwortliche
- 📋 **Transparenz wichtig**: Alle Mitarbeitende sollten businesscontext_users haben

### Empfohlene Konfiguration

Für die meisten Unternehmen:

- **QM-Beauftragte**: businesscontext_admin
- **Alle anderen Mitarbeitende**: businesscontext_users

## Nächste Schritte

- Prüfe deine eigenen Berechtigungen im Kontext Modul
- Falls du Fragen hast, wende dich an deinen ELIZA-Administrator
- Lies [Kapitel 4: Best Practices](04_best_practices) für weitere Tipps

---

**Fragen zum Berechtigungskonzept? Dein ELIZA-Administrator hilft gerne weiter!**
