---
category: "Dokumentenmanagement"
slug: "dms-verbesserte-berechtigungen"
---

Liebe ELIZA-Nutzerin, lieber ELIZA-Nutzer

Wir haben die Berechtigungslogik im Dokumentenmanagement grundlegend verbessert. Prüfer und Freigeber können jetzt geschützte Ordner und freigegebene Dokumente sehen, die sie für ihre Arbeit benötigen – ohne dass du zusätzliche Berechtigungen manuell vergeben musst.

## Was ist neu?

### Automatische Vererbung von Berechtigungen

- **Ordner-Berechtigungen werden vererbt**: Wenn du einem übergeordneten Ordner eine Freigeber- oder Prüfer-Funktion zuweist, gilt diese automatisch auch für alle Unterordner
- **Geschützte Ordner automatisch sichtbar**: Prüfer und Freigeber sehen geschützte Ordner automatisch, wenn sie die entsprechende Funktion haben
- **Sichtbarkeit wird vererbt**: Ein Unterordner erbt die Sichtbarkeit (normal/geschützt) vom übergeordneten Ordner

### Intelligente Formular-Anzeige

- **Felder werden automatisch ausgeblendet**: Wenn du "Berechtigungen von übergeordnetem Ordner vererben" aktivierst, werden die Berechtigungs-Felder (Sichtbarkeit, Orgunits, Admin-Team, Team) automatisch ausgeblendet
- **Funktionen bleiben sichtbar**: Die Funktionszuordnungen (Verantwortliche, Prüfende und Freigebende Funktion) bleiben immer sichtbar und können unabhängig gesetzt werden
- **Sofortige Rückmeldung**: Die Felder erscheinen wieder, sobald du die Vererbung deaktivierst

### Freigeber können freigegebene Dokumente sehen

- Freigeber sehen Dokumente, die sie freigegeben haben, auch nach der Freigabe
- Keine zusätzlichen Berechtigungen mehr nötig
- Konsistentes Verhalten über alle Workflow-Stati

### Transparente Berechtigungs-Übersicht

- **Neue Übersichtstabelle**: Im "Berechtigungen anzeigen"-Dialog siehst du jetzt eine Tabelle mit allen vererbten Eigenschaften
- **Klare Kennzeichnung**: Grüner Haken zeigt vererbte Werte, graues Symbol zeigt lokal gesetzte Werte
- **Alle Funktionen sichtbar**: Verantwortliche, Prüfende und Freigebende Funktionen werden mit Vererbungsstatus angezeigt

## Wie profitierst du davon?

### Weniger Verwaltungsaufwand
- Keine manuellen Berechtigungen mehr für jeden Unterordner setzen
- Freigeber und Prüfer haben automatisch Zugriff auf ihre Arbeitsbereiche
- Weniger Support-Anfragen wegen fehlender Berechtigungen

### Bessere Zusammenarbeit
- Freigeber können freigegebene Dokumente nachvollziehen und kontrollieren
- Prüfer haben Zugriff auf alle relevanten geschützten Ordner
- Transparenterer Dokumenten-Workflow

### Mehr Sicherheit
- Berechtigungen werden zentral über Funktionen gesteuert
- Konsistente Vererbung über die gesamte Ordnerstruktur
- Keine versehentlich vergessenen Berechtigungen

## Wie funktioniert das konkret?

### Beispiel 1: Vererbung von Ordner-Berechtigungen

**Vorher:**
```
📁 Qualitätsmanagement (geschützt, Freigeber: QMB)
   📁 Prozesse (geschützt, Freigeber: ❌ manuell setzen)
      📁 Produktion (geschützt, Freigeber: ❌ manuell setzen)
```

**Jetzt:**
```
📁 Qualitätsmanagement (geschützt, Freigeber: QMB)
   📁 Prozesse (geschützt, ✅ automatisch geerbt)
      📁 Produktion (geschützt, ✅ automatisch geerbt)
```

Der QMB sieht automatisch alle Unterordner und kann dort Dokumente freigeben.

### Beispiel 2: Freigeber sehen freigegebene Dokumente

**Vorher:**
```
📄 Arbeitsanweisung.pdf
   Status: Freigegeben
   Freigegeben durch: QMB
   Sichtbar für QMB: ❌ Nein
```

**Jetzt:**
```
📄 Arbeitsanweisung.pdf
   Status: Freigegeben
   Freigegeben durch: QMB
   Sichtbar für QMB: ✅ Ja
```

Der QMB kann das Dokument auch nach der Freigabe jederzeit einsehen.

### Beispiel 3: Intelligente Formular-Anzeige

**Beim Erstellen eines neuen Unterordners:**

```
☑️ Berechtigungen von übergeordnetem Ordner vererben

Funktionszuordnungen:
  Verantwortliche Funktion: [Dropdown sichtbar]
  Prüfende Funktion: [Dropdown sichtbar]
  Freigebende Funktion: [Dropdown sichtbar]

Berechtigungen:
  Sichtbarkeit: [ausgeblendet]
  Orgunits: [ausgeblendet]
  Admin-Team: [ausgeblendet]
  Team: [ausgeblendet]
```

**Sobald du die Checkbox deaktivierst:**

```
☐ Berechtigungen von übergeordnetem Ordner vererben

Funktionszuordnungen:
  Verantwortliche Funktion: [Dropdown sichtbar]
  Prüfende Funktion: [Dropdown sichtbar]
  Freigebende Funktion: [Dropdown sichtbar]

Berechtigungen:
  Sichtbarkeit: [Dropdown sichtbar]
  Orgunits: [Multiselect sichtbar]
  Admin-Team: [Multiselect sichtbar]
  Team: [Multiselect sichtbar]
```

So siehst du sofort, welche Felder geerbt werden und welche du manuell setzen musst.

## Praktische Anwendungsfälle

### Qualitätsmanagement
- Der QMB legt einen geschützten Hauptordner "Qualitätsdokumente" an
- Alle Unterordner (Prozesse, Formulare, Vorlagen) erben automatisch die Freigeber-Funktion
- Der QMB sieht alle Ordner und kann überall Dokumente freigeben

### Finanzwesen
- Leitung Finanzen & Controlling hat Freigeber-Funktion für "Finanzordner"
- Alle Unterordner (Buchhaltung, Controlling, Budget) sind automatisch sichtbar
- Freigegebene Finanzberichte bleiben für die Leitung sichtbar

### Compliance
- Compliance-Beauftragte sind als Prüfer für "Compliance-Ordner" gesetzt
- Neue Unterordner für verschiedene Richtlinien werden automatisch zugänglich
- Alle geprüften Dokumente bleiben nachvollziehbar

## Was ändert sich für dich?

### Als Administrator
- Berechtigungen nur noch auf oberster Ebene setzen
- Unterordner übernehmen automatisch die Einstellungen
- Weniger Wartungsaufwand bei neuen Ordnern

### Als Prüfer/Freigeber
- Automatischer Zugriff auf alle relevanten geschützten Ordner
- Freigegebene Dokumente bleiben sichtbar
- Besserer Überblick über den gesamten Dokumenten-Workflow

### Als normale Benutzer
- Keine Änderung – normale Berechtigungen funktionieren wie bisher
- Geschützte Ordner bleiben geschützt
- Nur Personen mit entsprechender Funktion haben Zugriff

## Häufige Fragen

**Kann ich die Vererbung unterbrechen?**
Ja, indem du explizit eine andere Freigeber- oder Prüfer-Funktion für einen Unterordner setzt. Diese überschreibt dann die geerbte Einstellung.

**Was passiert mit bestehenden Berechtigungen?**
Alle bestehenden manuell gesetzten Berechtigungen bleiben erhalten und funktionieren wie bisher. Die neue Vererbung erweitert nur die Möglichkeiten.

**Können normale Benutzer jetzt mehr sehen?**
Nein, die Sicherheit bleibt gleich. Normale Benutzer brauchen weiterhin die entsprechenden Berechtigungen oder müssen im Team/Orgunit sein.

## Tipp

Nutze die Vererbung strategisch:
1. Lege Hauptordner für große Bereiche an (QM, Finanzen, HR, etc.)
2. Setze die Freigeber- und Prüfer-Funktionen nur auf dieser obersten Ebene
3. Alle Unterordner erben automatisch die Einstellungen
4. Bei Bedarf kannst du Unterordner mit eigenen Funktionen überschreiben

So sparst du Zeit und behältst trotzdem volle Kontrolle über deine Dokumenten-Berechtigungen!

---

*Dein ELIZA-Team* 🐢