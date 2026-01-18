# ELIZA Docs - Setup Anleitung

Diese Anleitung beschreibt die Schritte zur Einrichtung der ELIZA Dokumentations-Website auf GitHub Pages.

## 1. GitHub Repository erstellen

1. Gehe zu [github.com/new](https://github.com/new)
2. Repository-Name: `eliza-docs`
3. Sichtbarkeit: **Public** (kostenlos für GitHub Pages)
4. KEINE README, .gitignore oder License hinzufügen (wir haben alles vorbereitet)
5. Repository erstellen

## 2. Lokales Repository initialisieren und pushen

```bash
cd /eliza-docs

# Git initialisieren
git init

# Hugo Doks Theme als Submodule hinzufügen
git submodule add https://github.com/h-enk/doks themes/doks

# Alle Dateien stagen
git add -A

# Erster Commit
git commit -m "Initial commit: ELIZA User Manual Documentation

- Hugo static site generator configuration
- Doks theme for documentation
- 23 module manuals synchronized
- GitHub Pages deployment workflow"

# Main Branch setzen
git branch -M main

# Remote hinzufügen (URL anpassen!)
git remote add origin https://github.com/eliza-swiss/eliza-docs.git

# Push
git push -u origin main
```

## 3. GitHub Pages aktivieren

1. Gehe zu Repository **Settings** → **Pages**
2. Source: **GitHub Actions** auswählen
3. Die erste Deployment-Pipeline startet automatisch

## 4. Custom Domain konfigurieren (optional)

### DNS-Einstellungen (bei deinem DNS-Provider)

Erstelle einen CNAME-Record:

```
docs.eliza.swiss  →  eliza-swiss.github.io
```

### GitHub Pages Custom Domain

1. Gehe zu Repository **Settings** → **Pages**
2. Custom domain: `docs.eliza.swiss`
3. **Enforce HTTPS** aktivieren
4. Warte auf DNS-Propagation (kann bis zu 24h dauern)

## 5. GitLab CI/CD einrichten (automatische Synchronisation)

### CI/CD Variablen in GitLab konfigurieren

1. Gehe zu **Settings** → **CI/CD** → **Variables**
2. Füge hinzu:
   - `GITHUB_TOKEN`: Personal Access Token mit `repo` Berechtigung
   - `GITHUB_USER`: GitHub Username (z.B. `eliza-bot` oder dein Username)

### GitLab CI/CD einbinden

Füge in der `.gitlab-ci.yml` hinzu:

```yaml
include:
  - local: '.gitlab/sync-docs.gitlab-ci.yml'
```

Jetzt wird bei jeder Änderung an `user_manual/*` Dateien automatisch synchronisiert.

## 6. Manuelle Synchronisation

Für manuelle Synchronisation (ohne CI/CD):

```bash
cd /eliza.app

# Dry-Run (zeigt was passieren würde)
uv run python scripts/sync_docs_to_github.py --dry-run --verbose

# Echte Synchronisation
uv run python scripts/sync_docs_to_github.py --verbose

# Mit automatischem Push
uv run python scripts/sync_docs_to_github.py --push

# Nur ein Modul
uv run python scripts/sync_docs_to_github.py --module dms --verbose
```

## 7. Lokale Entwicklung (optional)

Für lokale Vorschau:

```bash
cd /eliza-docs

# Hugo installieren (macOS)
brew install hugo

# Entwicklungsserver starten
hugo server -D

# Website unter http://localhost:1313/ aufrufen
```

## Dateistruktur

Nach dem Setup hast du:

```
eliza.uv (GitLab)                     eliza-docs (GitHub)
├── eliza/                            ├── content/docs/
│   ├── dms/user_manual/              │   ├── dms/
│   ├── bot/user_manual/              │   ├── bot/
│   └── .../user_manual/              │   └── .../
├── scripts/
│   └── sync_docs_to_github.py        ├── config.toml
└── .gitlab/                          ├── .github/workflows/hugo.yaml
    └── sync-docs.gitlab-ci.yml       └── themes/doks/
```

## Workflow

1. **Änderungen** in `eliza.uv/eliza/<modul>/user_manual/`
2. **Commit & Push** zu GitLab
3. **Automatische Synchronisation** via GitLab CI/CD
4. **GitHub Pages** deployed automatisch

**Kosten: CHF 0.00 / Jahr** (GitHub Pages ist kostenlos für Public Repos)

---

Bei Fragen: <support@eliza.swiss>
