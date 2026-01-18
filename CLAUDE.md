# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation site for ELIZA (Swiss Quality Management System), built with Hugo and the Doks theme. The site is hosted at docs.eliza.swiss via GitHub Pages.

**Important:** This repository is read-only and auto-synchronized from the main `eliza.uv` repository. Direct changes will be overwritten on next sync.

## Commands

### Local Development
```bash
# Initialize theme submodule (first time only)
git submodule update --init --recursive

# Start development server with drafts
hugo server -D
# Site available at http://localhost:1313/

# Production build
hugo --gc --minify
```

### Install Hugo (macOS)
```bash
brew install hugo
```

## Architecture

### Content Synchronization Flow
```
eliza.uv (GitLab)              eliza-docs (GitHub)
├── eliza/<module>/user_manual/  →  content/docs/<module>/
└── scripts/sync_docs_to_github.py
                                    ↓ GitHub Actions
                                 docs.eliza.swiss
```

Content originates in `eliza.uv/eliza/<module>/user_manual/` directories. The sync script (`scripts/sync_docs_to_github.py` in eliza.uv) copies to `content/docs/`. GitHub Actions deploys on push to main.

### Key Files
- `config.toml` - Hugo site configuration
- `.github/workflows/hugo.yaml` - CI/CD pipeline (Hugo 0.121.2 extended)
- `themes/doks/` - Theme (git submodule)
- `content/docs/` - All documentation modules (23 modules, ~182 files)

### Documentation Structure
Each module follows this pattern:
```
content/docs/<module>/
├── _index.md           # Module overview
├── 01-topic.md         # Numbered chapters
├── 02-topic.md
└── images/             # Module-specific images
```

Front matter uses `weight` for ordering and German content (de-ch locale).

## Sync Commands (from eliza.uv repository)
```bash
# Dry run
python scripts/sync_docs_to_github.py --dry-run --verbose

# Sync all modules
python scripts/sync_docs_to_github.py --push

# Sync single module
python scripts/sync_docs_to_github.py --module dms --push
```
