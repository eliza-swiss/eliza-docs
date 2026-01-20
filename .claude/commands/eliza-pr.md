---
name: "eliza-pr"
description: "Erstellt einen GitHub Pull Request mit strukturierter Beschreibung in Schweizer Hochdeutsch"
author: "ELIZA Development Team"
version: "1.0.0"
allowed-tools: ["Bash", "Read", "Grep", "Glob", "TodoWrite"]
---

# /pr - GitHub Pull Request erstellen

## Zweck
Erstellt einen professionellen GitHub Pull Request mit automatisch generierter, strukturierter Beschreibung in **Schweizer Hochdeutsch**.

## Sprachkonventionen

### Schweizer Rechtschreibung
- **Kein "ß"**: Immer "ss" verwenden
- Beispiele: Grösse, Strasse, schliessen, ausserdem

## Verwendung

```bash
/pr [--draft] [--base <branch>]
```

### Argumente
- `--draft` - PR als Entwurf erstellen
- `--base <branch>` - Ziel-Branch (Standard: main)

## Ausführungsschritte

### 1. Branch-Analyse
```bash
git branch --show-current
git log main..HEAD --oneline
git diff main..HEAD --stat
```

### 2. Änderungen kategorisieren
- `layouts/` → Layout-Änderungen
- `static/css/` → Styling
- `content/` → Inhalte
- `config.toml` → Konfiguration
- `.claude/` → Claude Code Konfiguration

### 3. PR-Titel generieren
Format: `typ: Kurze Beschreibung`

Typen:
- `feat:` - Neue Funktion
- `fix:` - Fehlerbehebung
- `docs:` - Dokumentation
- `style:` - Styling/CSS
- `refactor:` - Umstrukturierung
- `chore:` - Wartung

### 4. PR-Beschreibung erstellen

**Template:**
```markdown
## Zusammenfassung
<!-- 2-3 Sätze zur Hauptänderung -->

## Änderungen
<!-- Auflistung der wichtigsten Änderungen -->
- Änderung 1
- Änderung 2

## Geänderte Dateien
| Datei | Änderung |
|-------|----------|
| file1 | Beschreibung |

## Testplan
- [ ] Hugo Server lokal getestet
- [ ] Mobile Ansicht geprüft
- [ ] Links funktionieren

---
🤖 Generiert mit [Claude Code](https://claude.ai/code)
```

### 5. PR erstellen
```bash
gh pr create \
  --title "Titel" \
  --body "$(cat <<'EOF'
Beschreibung hier
EOF
)"
```

## Qualitätsprüfungen

- Titel max. 72 Zeichen
- Schweizer Rechtschreibung
- Aussagekräftige Beschreibung
- Testplan vorhanden

## Beispiel-Workflow

```bash
# PR für aktuellen Branch erstellen
/pr

# PR als Entwurf
/pr --draft

# PR gegen anderen Branch
/pr --base develop
```

## Voraussetzungen

- GitHub CLI (`gh`) installiert und authentifiziert
- Aktueller Branch hat Upstream-Tracking
- Änderungen sind committed und gepusht

## Ausgabe

Nach erfolgreicher Erstellung:
- PR-URL wird angezeigt
- PR ist auf GitHub sichtbar
- Reviewer können zugewiesen werden
