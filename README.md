# ELIZA Benutzerhandbuch

[![Deploy Hugo site to Pages](https://github.com/eliza-swiss/eliza-docs/actions/workflows/hugo.yaml/badge.svg)](https://github.com/eliza-swiss/eliza-docs/actions/workflows/hugo.yaml)

Offizielles Benutzerhandbuch für [ELIZA](https://eliza.swiss) - Das Schweizer Qualitätsmanagementsystem.

**Live-Website:** [docs.eliza.swiss](https://docs.eliza.swiss)

## Über dieses Repository

Dieses Repository enthält die Quelldateien für das ELIZA Benutzerhandbuch. Die Dokumentation wird automatisch aus dem Hauptrepository `eliza.uv` synchronisiert und mit [Hugo](https://gohugo.io/) als statische Website generiert.

## Technologie-Stack

- **Static Site Generator:** [Hugo](https://gohugo.io/) (Extended Edition)
- **Theme:** [Doks](https://getdoks.org/)
- **Hosting:** [GitHub Pages](https://pages.github.com/)
- **CI/CD:** GitHub Actions

## Lokale Entwicklung

### Voraussetzungen

- [Hugo Extended](https://gohugo.io/installation/) (v0.121.2+)
- [Node.js](https://nodejs.org/) (v18+)
- [Git](https://git-scm.com/)

### Installation

```bash
# Repository klonen
git clone https://github.com/eliza-swiss/eliza-docs.git
cd eliza-docs

# Theme als Submodule initialisieren
git submodule update --init --recursive

# Node dependencies installieren (falls vorhanden)
npm install

# Entwicklungsserver starten
hugo server -D
```

Die Website ist dann unter `http://localhost:1313/` erreichbar.

### Build für Produktion

```bash
hugo --gc --minify
```

Die generierten Dateien befinden sich im `public/` Verzeichnis.

## Synchronisation

Die Dokumentation wird automatisch aus dem ELIZA Hauptrepository synchronisiert:

```bash
# Im eliza.uv Verzeichnis:
python scripts/sync_docs_to_github.py

# Mit automatischem Push:
python scripts/sync_docs_to_github.py --push

# Nur ein Modul:
python scripts/sync_docs_to_github.py --module dms

# Dry-Run (ohne Änderungen):
python scripts/sync_docs_to_github.py --dry-run --verbose
```

## Verzeichnisstruktur

```
eliza-docs/
├── .github/
│   └── workflows/
│       └── hugo.yaml       # GitHub Actions Workflow
├── archetypes/             # Hugo Archetypes
├── assets/                 # Assets (CSS, JS)
├── content/
│   └── docs/               # Dokumentations-Inhalte
│       ├── _index.md       # Startseite
│       ├── bot/            # KI-Assistent
│       ├── dms/            # Dokumentenmanagement
│       └── ...             # Weitere Module
├── layouts/                # Custom Layouts
├── static/                 # Statische Dateien
├── themes/
│   └── doks/               # Doks Theme (Submodule)
├── config.toml             # Hugo Konfiguration
└── README.md               # Diese Datei
```

## Module

Das Handbuch umfasst folgende ELIZA-Module:

| Modul | Beschreibung |
|-------|--------------|
| Dashboard | Persönliches Cockpit |
| Benutzerverwaltung (core) | Benutzer und Berechtigungen |
| KI-Assistent (bot) | Intelligente Assistenz |
| Zeiterfassung (timetracker) | Arbeitszeiten erfassen |
| Organisation | Mitarbeitende verwalten |
| Dokumentenmanagement (dms) | Dokumentenlenkung |
| Prozesse (prozesse) | BPMN-Prozessmanagement |
| Formulare (forms) | Formulare und Checklisten |
| Meldungen (issues) | Reklamationen |
| Projekte (projects) | Projektmanagement |
| Teams | Zusammenarbeit |
| Verträge (contracts) | Vertragsmanagement |
| CRM | Kundenbeziehungen |
| Kennzahlen (kpi) | KPI-Tracking |
| SWOT | Strategische Analyse |
| Standards | Normkonformität |
| Glossar | Begriffsdefinitionen |

## Beitragen

Änderungen an der Dokumentation sollten im Hauptrepository `eliza.uv` vorgenommen werden:

1. Bearbeite die Markdown-Dateien in `eliza/<modul>/user_manual/`
2. Führe das Sync-Script aus
3. Die GitHub Action deployed automatisch

**Wichtig:** Dieses Repository ist read-only und wird automatisch synchronisiert. Direkte Änderungen werden bei der nächsten Synchronisation überschrieben.

## Lizenz

Copyright ELIZA AG. Alle Rechte vorbehalten.

---

Made with ❤️ in Switzerland
