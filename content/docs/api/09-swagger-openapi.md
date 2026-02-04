---
title: "Swagger & OpenAPI"
description: ""
weight: "9"
tags:
  - "api"
  - "swagger"
  - "openapi"
  - "dokumentation"
---


# Swagger & OpenAPI

ELIZA bietet eine interaktive API-Dokumentation basierend auf OpenAPI 3.0.

## Swagger-UI

Die Swagger-UI ermöglicht interaktives Erkunden und Testen der API.

### Zugriff

```
https://[deine-domain]/api/schema/swagger-ui/
```

Für lokale Entwicklung:

```
http://localhost:8000/api/schema/swagger-ui/
```

### Funktionen

- **Durchsuchen**: Alle Endpoints nach Modulen gruppiert
- **Testen**: Anfragen direkt im Browser ausführen
- **Schema**: Request- und Response-Formate einsehen
- **Authentifizierung**: Token für Tests eingeben

## Authentifizierung in Swagger

1. Klicke auf **Authorize** (Schloss-Symbol oben rechts)
2. Gib dein Token ein: `Token dein_api_token_hier`
3. Klicke **Authorize**

Nun sind alle Anfragen authentifiziert.

⚠️ **Wichtig:** Das Präfix `Token ` (mit Leerzeichen) muss enthalten sein.

## Endpoint testen

1. Wähle einen Endpoint (z.B. `GET /api/organisation/mitarbeitende`)
2. Klicke **Try it out**
3. Fülle optionale Parameter aus
4. Klicke **Execute**
5. Sieh dir Response-Code und Body an

## OpenAPI-Schema

Das maschinenlesbare Schema ist verfügbar unter:

```
https://[deine-domain]/api/schema/
```

### Schema herunterladen

**JSON-Format:**

```bash
curl -H "Accept: application/json" \
     https://example.myeliza.ch/api/schema/ \
     -o openapi.json
```

**YAML-Format:**

```bash
curl -H "Accept: application/yaml" \
     https://example.myeliza.ch/api/schema/ \
     -o openapi.yaml
```

### Mit Python:

```python
import requests
import json

response = requests.get(
    "https://example.myeliza.ch/api/schema/",
    headers={"Accept": "application/json"}
)

# Schema speichern
with open("openapi.json", "w") as f:
    json.dump(response.json(), f, indent=2)

# Schema-Info ausgeben
schema = response.json()
print(f"API: {schema['info']['title']}")
print(f"Version: {schema['info']['version']}")
print(f"Endpoints: {len(schema['paths'])}")
```

## Client-Generierung

Mit dem OpenAPI-Schema kannst du API-Clients automatisch generieren.

### OpenAPI Generator

```bash
# Installation
npm install @openapitools/openapi-generator-cli -g

# Python-Client generieren
openapi-generator-cli generate \
    -i https://example.myeliza.ch/api/schema/ \
    -g python \
    -o ./eliza-client

# TypeScript-Client generieren
openapi-generator-cli generate \
    -i https://example.myeliza.ch/api/schema/ \
    -g typescript-axios \
    -o ./eliza-ts-client
```

### Verfügbare Generatoren

- `python` - Python mit urllib3
- `python-pydantic` - Python mit Pydantic Models
- `typescript-axios` - TypeScript mit Axios
- `typescript-fetch` - TypeScript mit Fetch API
- `csharp` - C# / .NET
- `java` - Java
- `go` - Go
- `ruby` - Ruby

[Vollständige Liste](https://openapi-generator.tech/docs/generators)

## Schema-Struktur

Das OpenAPI-Schema enthält:

```yaml
openapi: 3.0.3
info:
  title: ELIZA API
  version: 1.0.0
  description: Eliza API documentation

paths:
  /api/organisation/mitarbeitende:
    get:
      operationId: organisation_mitarbeitende_list
      tags:
        - organisation
      parameters:
        - name: archived
          in: query
          schema:
            type: boolean
      responses:
        '200':
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Mitarbeitende'

components:
  schemas:
    Mitarbeitende:
      type: object
      properties:
        id:
          type: integer
        vorname:
          type: string
        nachname:
          type: string
```

## Postman Import

Du kannst das Schema in Postman importieren:

1. Öffne Postman
2. **File** → **Import**
3. Wähle **Link** und gib ein: `https://example.myeliza.ch/api/schema/`
4. Klicke **Import**

Alle Endpoints werden als Collection importiert.

## Insomnia Import

Für Insomnia:

1. **Application** → **Preferences** → **Data**
2. **Import Data** → **From URL**
3. Gib die Schema-URL ein

## Schema-Validierung

Prüfe, ob deine Anfragen dem Schema entsprechen:

```python
from openapi_core import OpenAPI

# Schema laden
api = OpenAPI.from_url("https://example.myeliza.ch/api/schema/")

# Request validieren
from openapi_core.testing.mock import MockRequest

request = MockRequest(
    "https://example.myeliza.ch",
    "GET",
    "/api/organisation/mitarbeitende"
)

result = api.unmarshal_request(request)
```

## Tipps für die Swagger-UI

💡 **Tipp 1:** Nutze die **Filter**-Funktion oben, um Endpoints schnell zu finden.

💡 **Tipp 2:** Klappe **Schema**-Abschnitte auf, um alle Felder zu sehen.

💡 **Tipp 3:** Die **Example Value** zeigt typische Request/Response-Daten.

💡 **Tipp 4:** Kopiere **Curl**-Befehle aus der UI für Kommandozeilen-Tests.

## Nächste Schritte

→ [Best Practices]({{< ref "10-best-practices" >}}) - Sicherheit und Performance

---

## Zusammenfassung

✅ Swagger-UI unter `/api/schema/swagger-ui/`

✅ OpenAPI-Schema unter `/api/schema/`

✅ Automatische Client-Generierung mit OpenAPI Generator

✅ Import in Postman, Insomnia und andere Tools

✅ Token-Format: `Token <dein-token>`
