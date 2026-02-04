---
title: "Filterung und Suche"
description: ""
weight: "6"
tags:
  - "api"
  - "filter"
  - "suche"
  - "query-parameter"
---


# Filterung und Suche

Lerne, wie du Daten mit Query-Parametern gezielt abfragst.

## Grundlagen

Filter werden als Query-Parameter an die URL angehängt:

```
/api/organisation/mitarbeitende?archived=false&orgunit=5
```

## Exakte Filter

Filtere nach exakten Werten:

```python
# Nur aktive Mitarbeitende
response = session.get(f"{BASE_URL}/organisation/mitarbeitende?archived=false")

# Mitarbeitende einer bestimmten Abteilung
response = session.get(f"{BASE_URL}/organisation/mitarbeitende?orgunit=5")

# Dokumente in einem bestimmten Ordner
response = session.get(f"{BASE_URL}/dms/document?folder=10")
```

### Mit curl

```bash
curl -H "Authorization: Token $TOKEN" \
     "https://example.myeliza.ch/api/dms/document?folder=10&state=approved"
```

## Mehrere Filter kombinieren

Filter werden mit `&` verknüpft (UND-Logik):

```python
# Aktive Mitarbeitende in Abteilung 5
params = {
    "archived": "false",
    "orgunit": 5
}
response = session.get(f"{BASE_URL}/organisation/mitarbeitende", params=params)
```

## Volltextsuche

Viele Endpoints unterstützen einen `search`-Parameter:

```python
# Nach Namen suchen
response = session.get(f"{BASE_URL}/organisation/mitarbeitende?search=hugo")

# Nach Dokumenttitel suchen
response = session.get(f"{BASE_URL}/dms/document?search=vertrag")
```

💡 **Tipp:** Die Suche durchsucht typischerweise mehrere Felder (Name, Titel, Beschreibung).

## Status-Filter

Filtere nach Status/Zustand:

```python
# Dokumente im Status "Entwurf"
response = session.get(f"{BASE_URL}/dms/document?state=draft")

# Genehmigte Dokumente
response = session.get(f"{BASE_URL}/dms/document?state=approved")
```

Typische Status-Werte:

| Status | Bedeutung |
|--------|-----------|
| `draft` | Entwurf |
| `review` | In Prüfung |
| `approved` | Genehmigt |
| `archived` | Archiviert |

## Datumsfilter

Filtere nach Zeiträumen:

```python
# Arbeitszeiten für einen bestimmten Monat
params = {
    "date_from": "2024-01-01",
    "date_to": "2024-01-31"
}
response = session.get(f"{BASE_URL}/timetracker/worktime", params=params)
```

### Verfügbare Datumsfilter

| Parameter | Beschreibung |
|-----------|--------------|
| `date_from` | Ab Datum (inklusiv) |
| `date_to` | Bis Datum (inklusiv) |
| `created_after` | Erstellt nach |
| `created_before` | Erstellt vor |
| `modified_after` | Geändert nach |

## Sortierung

Verwende `ordering` für die Sortierung:

```python
# Nach Nachname sortieren (aufsteigend)
response = session.get(f"{BASE_URL}/organisation/mitarbeitende?ordering=nachname")

# Nach Erstelldatum sortieren (absteigend = neueste zuerst)
response = session.get(f"{BASE_URL}/dms/document?ordering=-created")

# Mehrere Felder
response = session.get(f"{BASE_URL}/organisation/mitarbeitende?ordering=nachname,vorname")
```

| Syntax | Bedeutung |
|--------|-----------|
| `ordering=feld` | Aufsteigend (A-Z, 0-9) |
| `ordering=-feld` | Absteigend (Z-A, 9-0) |
| `ordering=feld1,feld2` | Mehrere Felder |

## Relationen filtern

Filtere nach verknüpften Objekten:

```python
# Dokumente eines bestimmten Typs
response = session.get(f"{BASE_URL}/dms/document?documenttype=3")

# Aufgaben eines Projekts
response = session.get(f"{BASE_URL}/projects/task?project=15")

# Karten auf einem Board
response = session.get(f"{BASE_URL}/teams/card?board=7")
```

## Filter mit UUID

Manche Endpoints unterstützen UUID-Filter:

```python
# Dokument mit bestimmter UUID
response = session.get(
    f"{BASE_URL}/dms/document",
    params={"uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"}
)
```

## Remote-Key Filter

Für Integrationen mit externen Systemen:

```python
# Objekt mit externem Schlüssel finden
response = session.get(f"{BASE_URL}/dms/document?remote_key=EXT-12345")

if response.json():
    # Objekt existiert bereits
    dokument = response.json()[0]
else:
    # Objekt muss erstellt werden
    pass
```

## Beispiel: Komplexe Abfrage

```python
"""
Suche alle genehmigten Dokumente im Ordner 'Verträge',
die im Jahr 2024 erstellt wurden und 'Mietvertrag' im Titel haben,
sortiert nach Änderungsdatum (neueste zuerst).
"""

params = {
    "folder": 10,
    "state": "approved",
    "created_after": "2024-01-01",
    "created_before": "2024-12-31",
    "search": "Mietvertrag",
    "ordering": "-modified"
}

response = session.get(f"{BASE_URL}/dms/document", params=params)

for doc in response.json():
    print(f"{doc['title']} - {doc['modified']}")
```

## Häufig verwendete Filter pro Modul

### Organisation

```python
# Mitarbeitende
?archived=false           # Nur aktive
?orgunit=5                # Nach Abteilung
?search=hugo              # Namenssuche
```

### DMS

```python
# Dokumente
?folder=10                # Nach Ordner
?state=approved           # Nach Status
?documenttype=3           # Nach Dokumenttyp
?search=vertrag           # Titelsuche
```

### Timetracker

```python
# Arbeitszeiten
?employee=15              # Nach Mitarbeiter
?date_from=2024-01-01     # Ab Datum
?date_to=2024-01-31       # Bis Datum
?project=8                # Nach Projekt
```

### Projects

```python
# Aufgaben
?project=15               # Nach Projekt
?assignee=10              # Nach Zuständigem
?status=open              # Nach Status
```

## Fehler bei Filtern

⚠️ Unbekannte Filter werden ignoriert (kein Fehler):

```python
# Dieser Filter existiert nicht - wird ignoriert
response = session.get(f"{BASE_URL}/organisation/mitarbeitende?unknown_filter=test")
# Liefert alle Mitarbeitenden, kein Fehler
```

## Nächste Schritte

→ [Fehlerbehandlung]({{< ref "07-fehlerbehandlung" >}}) - HTTP-Fehler verstehen

→ [Praxisbeispiele]({{< ref "08-praxisbeispiele" >}}) - Vollständige Szenarien

---

## Zusammenfassung

✅ Filter als Query-Parameter: `?key=value`

✅ Mehrere Filter mit `&` kombinieren

✅ `search` für Volltextsuche

✅ `ordering` für Sortierung (`-` für absteigend)

✅ Datumsfilter: `date_from`, `date_to`

✅ Unbekannte Filter werden ignoriert
