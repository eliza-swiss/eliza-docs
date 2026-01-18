# ELIZA Docs - Netlify Deployment Anleitung

Diese Anleitung beschreibt das Deployment der ELIZA Dokumentation auf Netlify unter `docs.eliza.swiss`.

## Warum Netlify?

| Feature | GitHub Pages | Netlify |
|---------|--------------|---------|
| Kosten | Kostenlos | Kostenlos (Starter) |
| Build-Zeit | ~2 Min | ~30 Sek |
| Preview Deploys | Nein | Ja (für jeden Branch/PR) |
| Rollback | Manuell | 1-Klick |
| SSL | Ja | Ja (Let's Encrypt) |
| Custom Headers | Nein | Ja |
| Redirects | Nein | Ja |
| Analytics | Nein | Optional ($9/Monat) |

---

## 1. Voraussetzungen

- GitHub-Repository: `github.com/eliza-swiss/eliza-docs` (bereits erstellt)
- Netlify-Account: [app.netlify.com](https://app.netlify.com) (kostenlos)
- DNS-Zugang für `eliza.swiss`

---

## 2. Netlify-Konfigurationsdatei erstellen

Erstelle `netlify.toml` im Repository-Root:

```toml
# Netlify Build Configuration for ELIZA Docs
# https://docs.netlify.com/configure-builds/file-based-configuration/

[build]
  # Hugo Build Command
  command = "hugo --gc --minify"

  # Output Directory
  publish = "public"

[build.environment]
  # Hugo Version (muss mit lokaler Version übereinstimmen)
  HUGO_VERSION = "0.121.2"

  # Production Environment
  HUGO_ENV = "production"

# Production Context
[context.production]
  command = "hugo --gc --minify --baseURL https://docs.eliza.swiss/"

# Deploy Preview Context (für Pull Requests)
[context.deploy-preview]
  command = "hugo --gc --minify --buildFuture --baseURL $DEPLOY_PRIME_URL/"

# Branch Deploy Context (für Feature Branches)
[context.branch-deploy]
  command = "hugo --gc --minify --buildFuture --baseURL $DEPLOY_PRIME_URL/"

# Headers für bessere Performance und Sicherheit
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Cache für statische Assets
[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Redirects
[[redirects]]
  from = "/handbuch/*"
  to = "/docs/:splat"
  status = 301

[[redirects]]
  from = "/manual/*"
  to = "/docs/:splat"
  status = 301

# 404 Handling
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

---

## 3. Netlify mit GitHub verbinden

### Schritt 1: Bei Netlify anmelden

1. Gehe zu [app.netlify.com](https://app.netlify.com)
2. Klicke auf **"Log in"** → **"GitHub"**
3. Autorisiere Netlify für deinen GitHub-Account

### Schritt 2: Neue Site erstellen

1. Klicke auf **"Add new site"** → **"Import an existing project"**
2. Wähle **"Deploy with GitHub"**
3. Wähle das Repository **"eliza-swiss/eliza-docs"**

### Schritt 3: Build-Einstellungen konfigurieren

| Einstellung | Wert |
|-------------|------|
| Branch to deploy | `main` |
| Build command | `hugo --gc --minify` |
| Publish directory | `public` |

4. Klicke auf **"Deploy site"**

Netlify deployed die Site automatisch und gibt dir eine temporäre URL wie:
`https://random-name-12345.netlify.app`

---

## 4. Custom Domain konfigurieren

### Schritt 1: Domain in Netlify hinzufügen

1. Gehe zu **Site settings** → **Domain management**
2. Klicke auf **"Add custom domain"**
3. Gib ein: `docs.eliza.swiss`
4. Klicke auf **"Verify"** → **"Add domain"**

### Schritt 2: DNS konfigurieren

Du hast zwei Optionen:

#### Option A: CNAME Record (Empfohlen für Subdomain)

Bei deinem DNS-Provider (z.B. Cloudflare, Infomaniak):

```
Typ:   CNAME
Name:  docs
Wert:  [deine-netlify-site].netlify.app
TTL:   Auto oder 3600
```

**Beispiel:**
```
docs.eliza.swiss  CNAME  eliza-docs.netlify.app
```

#### Option B: Netlify DNS (Alternative)

1. In Netlify: **Domain settings** → **"Set up Netlify DNS"**
2. Netlify gibt dir Nameserver wie:
   - `dns1.p01.nsone.net`
   - `dns2.p01.nsone.net`
3. Ändere die Nameserver bei deinem Domain-Registrar

### Schritt 3: SSL-Zertifikat

1. Warte 5-10 Minuten nach DNS-Konfiguration
2. Gehe zu **Domain settings** → **HTTPS**
3. Klicke auf **"Verify DNS configuration"**
4. Dann: **"Provision certificate"**

Netlify erstellt automatisch ein Let's Encrypt Zertifikat.

---

## 5. Automatische Deployments

### Bei GitHub Push

Jeder Push auf `main` triggert automatisch ein neues Deployment:

```
Push zu GitHub → Netlify Webhook → Hugo Build → Deploy
        ↓
   ~30 Sekunden
        ↓
   Live auf docs.eliza.swiss
```

### Deploy Previews für Pull Requests

Wenn du einen PR erstellst, generiert Netlify automatisch eine Preview-URL:
`https://deploy-preview-123--eliza-docs.netlify.app`

---

## 6. Netlify CLI (Optional)

Für lokales Testen und manuelles Deployment:

```bash
# Netlify CLI installieren
npm install -g netlify-cli

# Mit Netlify Account verbinden
netlify login

# Site verknüpfen (im eliza-docs Verzeichnis)
cd /Users/bbuehlmann/Django/eliza-docs
netlify link

# Lokaler Dev-Server mit Netlify-Features
netlify dev

# Manuelles Deployment
netlify deploy --prod
```

---

## 7. Umgebungsvariablen (Optional)

Falls du Umgebungsvariablen benötigst:

1. Gehe zu **Site settings** → **Build & deploy** → **Environment**
2. Füge Variablen hinzu:

| Variable | Wert | Beschreibung |
|----------|------|--------------|
| `HUGO_VERSION` | `0.121.2` | Hugo Version |
| `HUGO_ENV` | `production` | Build Environment |

---

## 8. Build-Hooks für GitLab CI/CD

Um von GitLab aus ein Netlify-Deployment zu triggern:

### Schritt 1: Build Hook in Netlify erstellen

1. **Site settings** → **Build & deploy** → **Build hooks**
2. Klicke auf **"Add build hook"**
3. Name: `GitLab CI Trigger`
4. Branch: `main`
5. Kopiere die URL (sieht aus wie: `https://api.netlify.com/build_hooks/xxxx`)

### Schritt 2: GitLab CI/CD Variable

In GitLab unter **Settings** → **CI/CD** → **Variables**:

| Variable | Wert |
|----------|------|
| `NETLIFY_BUILD_HOOK` | `https://api.netlify.com/build_hooks/xxxx` |

### Schritt 3: GitLab CI Job

Füge zu `.gitlab/sync-docs.gitlab-ci.yml` hinzu:

```yaml
# Trigger Netlify Build nach Sync
trigger-netlify:
  stage: deploy
  rules:
    - if: $CI_COMMIT_BRANCH == "master"
      changes:
        - "eliza/*/user_manual/**/*"
  script:
    - curl -X POST -d '{}' $NETLIFY_BUILD_HOOK
  needs:
    - sync-user-manual-to-github
```

---

## 9. Monitoring & Analytics

### Netlify Analytics (Optional, $9/Monat)

1. **Site settings** → **Analytics**
2. Aktiviere **"Netlify Analytics"**

Features:
- Seitenaufrufe
- Unique Visitors
- Top Pages
- 404 Tracking
- Keine Cookies, DSGVO-konform

### Status Badge

Füge zur README hinzu:

```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/[SITE-ID]/deploy-status)](https://app.netlify.com/sites/eliza-docs/deploys)
```

---

## 10. Troubleshooting

### Build schlägt fehl

1. Prüfe **Deploys** → **Deploy log** für Fehlermeldungen
2. Häufige Ursachen:
   - Hugo Version Mismatch → `HUGO_VERSION` in `netlify.toml` anpassen
   - Submodule nicht initialisiert → Prüfe ob Theme vorhanden

### DNS nicht propagiert

```bash
# DNS-Propagation prüfen
dig docs.eliza.swiss

# Oder online:
# https://www.whatsmydns.net/#CNAME/docs.eliza.swiss
```

### SSL-Zertifikat-Fehler

1. Warte 10-15 Minuten nach DNS-Änderung
2. **Domain settings** → **HTTPS** → **Renew certificate**

---

## Zusammenfassung

| Schritt | Aktion |
|---------|--------|
| 1 | `netlify.toml` erstellen und committen |
| 2 | GitHub Repo mit Netlify verbinden |
| 3 | CNAME Record bei DNS-Provider erstellen |
| 4 | SSL-Zertifikat in Netlify provisionieren |
| 5 | Build Hook für GitLab CI/CD einrichten |

**Geschätzte Einrichtungszeit:** 15-20 Minuten

**Kosten:** CHF 0.00 / Jahr (Netlify Starter Plan)

---

## Nützliche Links

- [Netlify Hugo Dokumentation](https://docs.netlify.com/integrations/frameworks/hugo/)
- [Netlify Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
- [Hugo Deployment Guide](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/)

---

Bei Fragen: support@eliza.swiss
