---
name: "commit"
description: "Erstellt Git-Commits mit Schweizer Rechtschreibung und Grammatik"
author: "ELIZA Development Team"
version: "1.0.0"
---

# /commit - Git-Commit mit Schweizer Sprachkonventionen

## Zweck
Erstellt professionelle Git-Commits für die ELIZA-Dokumentationsseite mit automatisch generierten Commit-Messages in **Schweizer Hochdeutsch**.

## Sprachkonventionen

### Schweizer Rechtschreibung
- **Kein "ß"**: Immer "ss" verwenden (z.B. "Strasse" statt "Straße", "gross" statt "groß")
- **Schweizer Begriffe**: Lokale Terminologie bevorzugen

### Beispiele
| Falsch (DE) | Richtig (CH) |
|-------------|--------------|
| Größe | Grösse |
| Straße | Strasse |
| außerdem | ausserdem |
| schließen | schliessen |
| müßte | müsste |

## Commit-Message-Struktur

```
typ: Kurze Beschreibung (max. 72 Zeichen)

- Detaillierte Änderung 1
- Detaillierte Änderung 2

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Typ-Präfixe
- `feat:` - Neue Funktion oder Inhalt
- `fix:` - Fehlerbehebung
- `docs:` - Dokumentationsänderungen
- `style:` - Formatierung, CSS-Änderungen
- `refactor:` - Code-Umstrukturierung
- `chore:` - Wartungsarbeiten, Konfiguration

## Verwendung

```bash
/commit [--auto] [--stage-all] [--push]
```

### Argumente
- `--auto` - Automatische Message-Generierung aus Git-Diff
- `--stage-all` - Alle Änderungen vor Commit stagen
- `--push` - Nach Commit automatisch pushen

## Ausführungsschritte

1. **Git-Status prüfen**: Überprüft Staging-Area und Änderungen
2. **Änderungen analysieren**: Kategorisiert nach Typ (Layout, CSS, Content, Config)
3. **Message generieren**: Erstellt Commit-Message in Schweizer Hochdeutsch
4. **Commit ausführen**: Führt Git-Commit mit generierter Message aus
5. **Optional pushen**: Pushed bei `--push` Flag

## Hugo-spezifische Kategorien

- `layouts/` → Layout-Änderungen
- `static/css/` → Styling-Änderungen
- `content/` → Inhaltsänderungen
- `config.toml` → Konfigurationsänderungen
- `static/` → Statische Dateien

## Qualitätsprüfungen

- Maximale Zeilenlänge: 72 Zeichen (erste Zeile)
- Schweizer Rechtschreibung validieren
- Aussagekräftige Beschreibungen
- Konsistente Formatierung

## Beispiele

**Automatischer Commit:**
```
/commit --auto
```

**Stage und Commit:**
```
/commit --stage-all --auto
```

**Vollständiger Workflow:**
```
/commit --stage-all --auto --push
```
