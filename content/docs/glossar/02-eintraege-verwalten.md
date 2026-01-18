---
title: "Einträge verwalten"
description: ""
weight: "2"
tags:
  - "bearbeiten"
  - "löschen"
  - "verwalten"
---


# Einträge verwalten

Dieses Kapitel zeigt dir, wie du bestehende Glossareinträge bearbeitest, aktualisierst und löschst.

## Glossareintrag bearbeiten

### Bearbeitungsmodus öffnen

**Über die Detailansicht:**
1. Öffne den Eintrag durch Klick auf den Titel in der Liste
2. Klicke oben rechts auf das **Stift-Symbol** 📝

### Änderungen vornehmen

Im Bearbeitungsmodus kannst du beide Felder anpassen:

- **Titel ändern**: Korrigiere Rechtschreibfehler oder präzisiere den Begriff
- **Beschreibung erweitern**: Füge weitere Details hinzu oder verbessere die Formulierung
- **Markdown nutzen**: Strukturiere die Beschreibung mit Markdown-Formatierungen

### Speichern

Klicke auf **"Speichern"**, um deine Änderungen zu übernehmen.

⚠️ **Wichtig**: Alle Änderungen werden im Audit-Log protokolliert und sind nachvollziehbar.

## Versionierung und Historie

### Änderungshistorie

Jeder Glossareintrag hat eine vollständige Änderungshistorie durch das ELIZA Audit-Log:

- Wer die Änderung vorgenommen hat
- Wann die Änderung erfolgte
- Was genau geändert wurde

Du kannst die Änderungshistorie über das Audit-Log-System von ELIZA einsehen (falls für deine Installation aktiviert).

## Glossareintrag löschen

### Einzelnen Eintrag löschen

⚠️ **Achtung**: Gelöschte Einträge können nicht wiederhergestellt werden!

**Schritt-für-Schritt:**

1. Öffne den Eintrag in der Detailansicht
2. Klicke oben rechts auf das **Papierkorb-Symbol** 🗑️
3. Bestätige die Sicherheitsabfrage
4. Der Eintrag wird entfernt

**Berechtigung erforderlich**: Du brauchst `glossar_admin` Rechte zum Löschen von Einträgen.

## Duplikate verhindern

### Vor dem Erstellen prüfen

Bevor du einen neuen Eintrag erstellst:

1. Nutze die **Suchfunktion** in der DataTables-Tabelle
2. Suche nach ähnlichen Begriffen
3. Prüfe, ob der Begriff bereits existiert

### Duplikat-Warnung

ELIZA kann dich beim Erstellen warnen, wenn ein ähnlicher Begriff bereits existiert (abhängig von der Konfiguration).

## Best Practices

### ✅ Empfehlungen

1. **Regelmässige Reviews**: Prüfe Einträge quartalsweise auf Aktualität
2. **Vier-Augen-Prinzip**: Lass wichtige Definitionen von Kollegen prüfen
3. **Konsistenz**: Verwende einheitliche Formulierungen
4. **Markdown nutzen**: Nutze Markdown für strukturierte, lesbare Beschreibungen

### 📋 Checkliste vor dem Speichern

- [ ] Titel ist präzise und eindeutig
- [ ] Beschreibung ist klar und verständlich (2-5 Sätze)
- [ ] Rechtschreibung ist korrekt (Schweizer Rechtschreibung!)
- [ ] Markdown ist korrekt formatiert (falls verwendet)
- [ ] Keine Duplikate vorhanden (mit Suche geprüft)

## Berechtigungen

### Wer darf was?

| Rolle | Erstellen | Bearbeiten | Löschen |
|-------|-----------|------------|---------|
| **glossar_users** | ❌ | ❌ | ❌ |
| **glossar_admin** | ✅ | ✅ | ✅ |

**Hinweis**: Nur Administratoren (`glossar_admin`) können Einträge erstellen, bearbeiten und löschen. Die Gruppe `glossar_users` hat nur Lesezugriff.

### Berechtigungen prüfen

Deine aktuellen Berechtigungen erkennst du an den verfügbaren Buttons:

- **Kein "+" Button**: Du darfst keine Einträge erstellen
- **Kein Stift-Symbol**: Du darfst nicht bearbeiten
- **Kein Papierkorb**: Du darfst nicht löschen

Mehr Details findest du im Kapitel [Berechtigungskonzept]({{< ref "05-berechtigungskonzept" >}}).

## Häufige Fragen

**Q: Kann ich gelöschte Einträge wiederherstellen?**
A: Nein, Löschungen sind endgültig. Bei Unsicherheit: Eintrag lieber archivieren statt löschen (falls Archivierungs-Feature aktiviert ist).

**Q: Werden andere Benutzer über meine Änderungen informiert?**
A: Abhängig von den Benachrichtigungseinstellungen. Admins sehen alle Änderungen im Audit-Log.

**Q: Kann ich Markdown in Beschreibungen verwenden?**
A: Ja! Nutze Markdown für Formatierungen:
- `**fett**` für **fett**
- `*kursiv*` für *kursiv*
- `- Liste` für Listen
- `[Link](URL)` für Links

**Q: Kann ich den Ersteller eines Eintrags sehen?**
A: Ja, über das Audit-Log sind alle Änderungen und der Ersteller nachvollziehbar.

## Nächste Schritte

Im nächsten Kapitel lernst du, wie du:
- Mehrere Einträge per Excel importierst
- Das gesamte Glossar exportierst
