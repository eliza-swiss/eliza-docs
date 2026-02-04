---
title: "Best Practices"
description: ""
weight: "10"
tags:
  - "api"
  - "sicherheit"
  - "performance"
  - "best-practices"
---


# Best Practices

Empfehlungen für sichere und performante API-Integrationen.

## Sicherheit

### Token-Management

✅ **Best Practices:**

```python
import os

# Token aus Umgebungsvariable
API_TOKEN = os.environ.get("ELIZA_API_TOKEN")

# Oder aus Secrets-Manager (z.B. AWS, Azure, HashiCorp Vault)
# API_TOKEN = secrets_manager.get_secret("eliza-api-token")
```

❌ **Niemals:**

```python
# FALSCH - Token im Code
API_TOKEN = "1801d1fd0c1c1f9e3388bba24a747b7311dbdc72"

# FALSCH - Token in Konfigurationsdatei ohne Verschlüsselung
config = {"token": "..."}
```

### HTTPS verwenden

Verwende **immer** HTTPS in Produktionsumgebungen:

```python
# RICHTIG
BASE_URL = "https://example.myeliza.ch/api"

# FALSCH (nur für lokale Entwicklung)
BASE_URL = "http://localhost:8000/api"
```

### Separate Tokens

Erstelle separate Tokens für verschiedene Integrationen:

- `HR-Sync-Token` - Nur Mitarbeitende lesen/schreiben
- `DMS-Backup-Token` - Nur Dokumente lesen
- `Reporting-Token` - Nur lesende Zugriffe

So kannst du einzelne Integrationen deaktivieren, ohne andere zu beeinflussen.

## Error-Handling

### Umfassendes Exception-Handling

```python
import requests
from requests.exceptions import (
    RequestException,
    HTTPError,
    ConnectionError,
    Timeout
)

def sichere_api_anfrage(session, url, method="GET", **kwargs):
    """API-Anfrage mit umfassendem Error-Handling."""

    try:
        response = session.request(method, url, timeout=30, **kwargs)
        response.raise_for_status()
        return response.json() if response.content else None

    except HTTPError as e:
        status = e.response.status_code

        if status == 401:
            raise AuthenticationError("Token ungültig oder abgelaufen")
        elif status == 403:
            raise PermissionError(f"Keine Berechtigung für {url}")
        elif status == 404:
            raise NotFoundError(f"Ressource nicht gefunden: {url}")
        elif status == 400:
            raise ValidationError(e.response.json())
        elif status >= 500:
            raise ServerError(f"Server-Fehler: {status}")
        else:
            raise

    except ConnectionError:
        raise ConnectionError("Verbindung zum Server fehlgeschlagen")

    except Timeout:
        raise TimeoutError("Server antwortet nicht (Timeout)")

    except RequestException as e:
        raise RuntimeError(f"Netzwerkfehler: {e}")
```

### Retry-Logik

```python
import time
from functools import wraps

def mit_retry(max_versuche=3, backoff_faktor=2):
    """Decorator für automatische Wiederholungsversuche."""

    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for versuch in range(max_versuche):
                try:
                    return func(*args, **kwargs)
                except (ConnectionError, TimeoutError, ServerError) as e:
                    if versuch == max_versuche - 1:
                        raise
                    wartezeit = backoff_faktor ** versuch
                    print(f"Fehler: {e}. Retry in {wartezeit}s...")
                    time.sleep(wartezeit)
        return wrapper
    return decorator


@mit_retry(max_versuche=3)
def daten_abrufen():
    return session.get(f"{BASE_URL}/organisation/mitarbeitende")
```

## Performance

### Session wiederverwenden

```python
# RICHTIG - Session einmal erstellen
session = Session()
session.headers.update({"Authorization": f"Token {TOKEN}"})

for i in range(100):
    response = session.get(url)  # Nutzt Connection-Pool


# FALSCH - Jedes Mal neue Verbindung
for i in range(100):
    response = requests.get(url, headers={"Authorization": ...})
```

### Timeout setzen

```python
# Immer Timeout setzen
response = session.get(url, timeout=30)

# Oder global in Session
session.request = lambda *args, **kwargs: \
    super(Session, session).request(*args, timeout=kwargs.pop('timeout', 30), **kwargs)
```

### Nur benötigte Felder

Wenn möglich, schränke die Datenmenge ein:

```python
# Statt alle Dokumente...
response = session.get(f"{BASE_URL}/dms/document")

# ...nur die in einem Ordner
response = session.get(f"{BASE_URL}/dms/document?folder=10")
```

### Batch-Verarbeitung

Für grosse Datenmengen:

```python
def batch_verarbeiten(items, batch_groesse=50):
    """Verarbeitet Items in Batches."""

    for i in range(0, len(items), batch_groesse):
        batch = items[i:i + batch_groesse]

        for item in batch:
            # Verarbeitung
            pass

        # Kurze Pause zwischen Batches
        time.sleep(0.5)
```

## Logging

### Strukturiertes Logging

```python
import logging

# Logger konfigurieren
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger("eliza-integration")

def api_aufruf(url):
    logger.info(f"API-Aufruf: GET {url}")

    try:
        response = session.get(url)
        logger.info(f"Response: {response.status_code}")

        if response.status_code >= 400:
            logger.error(f"Fehler-Response: {response.text[:500]}")

        return response

    except Exception as e:
        logger.exception(f"Exception bei {url}")
        raise
```

### Sensitive Daten schützen

```python
# FALSCH - Token im Log
logger.info(f"Authentifizierung mit Token: {API_TOKEN}")

# RICHTIG - Token maskieren
logger.info(f"Authentifizierung mit Token: {API_TOKEN[:8]}...")
```

## Konfiguration

### Umgebungsvariablen

```python
import os

class Config:
    API_TOKEN = os.environ.get("ELIZA_API_TOKEN")
    BASE_URL = os.environ.get("ELIZA_BASE_URL", "https://example.myeliza.ch/api")
    TIMEOUT = int(os.environ.get("ELIZA_TIMEOUT", "30"))
    DEBUG = os.environ.get("ELIZA_DEBUG", "false").lower() == "true"

    @classmethod
    def validate(cls):
        if not cls.API_TOKEN:
            raise ValueError("ELIZA_API_TOKEN muss gesetzt sein")
```

### .env-Datei (für Entwicklung)

```bash
# .env
ELIZA_API_TOKEN=dein_token_hier
ELIZA_BASE_URL=https://example.myeliza.ch/api
ELIZA_TIMEOUT=30
ELIZA_DEBUG=false
```

```python
from dotenv import load_dotenv
load_dotenv()  # Lädt .env
```

⚠️ **Wichtig:** `.env` niemals in Git committen!

```gitignore
# .gitignore
.env
.env.local
```

## Monitoring

### Health-Check

```python
def health_check():
    """Prüft die API-Erreichbarkeit."""
    try:
        response = session.get(f"{BASE_URL}/organisation/mitarbeitende", timeout=5)
        return response.status_code == 200
    except:
        return False


# Regelmässig prüfen
if not health_check():
    alert("ELIZA API nicht erreichbar!")
```

### Metriken sammeln

```python
import time

class APIMetrics:
    def __init__(self):
        self.requests = 0
        self.errors = 0
        self.total_time = 0

    def track(self, func):
        def wrapper(*args, **kwargs):
            start = time.time()
            try:
                result = func(*args, **kwargs)
                self.requests += 1
                return result
            except:
                self.errors += 1
                raise
            finally:
                self.total_time += time.time() - start
        return wrapper

    @property
    def avg_response_time(self):
        return self.total_time / self.requests if self.requests else 0


metrics = APIMetrics()

@metrics.track
def api_call():
    return session.get(url)
```

## Checkliste für Produktions-Integrationen

- [ ] Token aus Umgebungsvariablen/Secrets-Manager
- [ ] HTTPS in Produktion
- [ ] Timeout für alle Anfragen
- [ ] Retry-Logik für transiente Fehler
- [ ] Umfassendes Error-Handling
- [ ] Strukturiertes Logging
- [ ] Sensitive Daten nicht loggen
- [ ] Health-Check implementiert
- [ ] Metriken für Monitoring
- [ ] Separate Tokens für verschiedene Integrationen

---

## Zusammenfassung

✅ Tokens sicher speichern (Umgebungsvariablen)

✅ HTTPS verwenden, Timeouts setzen

✅ Session wiederverwenden für Performance

✅ Retry-Logik für robuste Integrationen

✅ Strukturiertes Logging ohne sensitive Daten

✅ Monitoring und Health-Checks implementieren
