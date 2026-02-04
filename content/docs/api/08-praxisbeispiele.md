---
title: "Praxisbeispiele"
description: ""
weight: "8"
tags:
  - "api"
  - "beispiele"
  - "integration"
  - "python"
---


# Praxisbeispiele

Vollständige Python-Skripte für typische Integrationsszenarien.

## Beispiel 1: Mitarbeitende synchronisieren

Synchronisiere Mitarbeitende aus einem externen HR-System.

```python
"""
Mitarbeitende-Synchronisation
Importiert Mitarbeitende aus einem externen System nach ELIZA.
"""
import os
from requests import Session

# Konfiguration
API_TOKEN = os.environ.get("ELIZA_API_TOKEN")
BASE_URL = os.environ.get("ELIZA_BASE_URL", "https://example.myeliza.ch/api")

# Session einrichten
session = Session()
session.headers.update({
    "Authorization": f"Token {API_TOKEN}",
    "Content-Type": "application/json"
})


def sync_mitarbeitende(externe_daten):
    """
    Synchronisiert Mitarbeitende basierend auf remote_key.

    Args:
        externe_daten: Liste von Dicts mit Mitarbeitenden-Daten

    Returns:
        Dict mit Statistiken (erstellt, aktualisiert, fehler)
    """
    statistik = {"erstellt": 0, "aktualisiert": 0, "fehler": 0}

    for person in externe_daten:
        remote_key = person.get("externe_id")

        # Prüfen ob bereits vorhanden
        response = session.get(
            f"{BASE_URL}/organisation/mitarbeitende",
            params={"remote_key": remote_key}
        )

        eliza_daten = {
            "vorname": person["vorname"],
            "nachname": person["nachname"],
            "email": person.get("email", ""),
            "remote_key": remote_key
        }

        if response.json():
            # Aktualisieren
            ma_id = response.json()[0]["id"]
            result = session.patch(
                f"{BASE_URL}/organisation/mitarbeitende/{ma_id}",
                json=eliza_daten
            )
            if result.status_code == 200:
                statistik["aktualisiert"] += 1
                print(f"✓ Aktualisiert: {person['vorname']} {person['nachname']}")
            else:
                statistik["fehler"] += 1
                print(f"✗ Fehler bei {person['vorname']}: {result.json()}")
        else:
            # Neu erstellen
            result = session.post(
                f"{BASE_URL}/organisation/mitarbeitende",
                json=eliza_daten
            )
            if result.status_code == 201:
                statistik["erstellt"] += 1
                print(f"+ Erstellt: {person['vorname']} {person['nachname']}")
            else:
                statistik["fehler"] += 1
                print(f"✗ Fehler bei {person['vorname']}: {result.json()}")

    return statistik


# Beispiel-Verwendung
if __name__ == "__main__":
    # Beispieldaten (normalerweise aus externem System)
    externe_mitarbeitende = [
        {"externe_id": "HR-001", "vorname": "Hugo", "nachname": "Boss", "email": "hugo@example.com"},
        {"externe_id": "HR-002", "vorname": "Anna", "nachname": "Müller", "email": "anna@example.com"},
        {"externe_id": "HR-003", "vorname": "Max", "nachname": "Muster", "email": "max@example.com"},
    ]

    statistik = sync_mitarbeitende(externe_mitarbeitende)

    print(f"\n--- Zusammenfassung ---")
    print(f"Erstellt: {statistik['erstellt']}")
    print(f"Aktualisiert: {statistik['aktualisiert']}")
    print(f"Fehler: {statistik['fehler']}")
```

## Beispiel 2: Dokument hochladen

Lade ein Dokument mit Metadaten hoch.

```python
"""
Dokument-Upload via API
Lädt eine Datei mit Metadaten ins DMS hoch.
"""
import os
from requests import Session

API_TOKEN = os.environ.get("ELIZA_API_TOKEN")
BASE_URL = os.environ.get("ELIZA_BASE_URL", "https://example.myeliza.ch/api")

session = Session()
session.headers.update({"Authorization": f"Token {API_TOKEN}"})


def dokument_hochladen(dateipfad, ordner_id, titel=None, remote_key=None):
    """
    Lädt ein Dokument ins DMS hoch.

    Args:
        dateipfad: Pfad zur lokalen Datei
        ordner_id: ID des Zielordners in ELIZA
        titel: Optionaler Titel (Standard: Dateiname)
        remote_key: Optionaler externer Schlüssel

    Returns:
        Das erstellte Dokument als Dict oder None bei Fehler
    """
    if not os.path.exists(dateipfad):
        print(f"Datei nicht gefunden: {dateipfad}")
        return None

    dateiname = os.path.basename(dateipfad)
    titel = titel or dateiname

    # Metadaten
    daten = {
        "title": titel,
        "folder": ordner_id,
    }

    if remote_key:
        daten["remote_key"] = remote_key

    # Datei öffnen und hochladen
    with open(dateipfad, "rb") as datei:
        response = session.post(
            f"{BASE_URL}/dms/document",
            data=daten,
            files={"file": (dateiname, datei)}
        )

    if response.status_code == 201:
        dokument = response.json()
        print(f"✓ Hochgeladen: {titel} (ID: {dokument['id']})")
        return dokument
    else:
        print(f"✗ Fehler beim Upload: {response.status_code}")
        print(response.json())
        return None


def dokument_status_aendern(dokument_id, neuer_status):
    """
    Ändert den Status eines Dokuments.

    Args:
        dokument_id: ID des Dokuments
        neuer_status: Neuer Status ('draft', 'review', 'approved', 'archived')
    """
    response = session.patch(
        f"{BASE_URL}/dms/document/{dokument_id}",
        json={"state": neuer_status}
    )

    if response.status_code == 200:
        print(f"✓ Status geändert auf: {neuer_status}")
        return True
    else:
        print(f"✗ Fehler: {response.json()}")
        return False


# Beispiel-Verwendung
if __name__ == "__main__":
    # Dokument hochladen
    dok = dokument_hochladen(
        dateipfad="vertrag_2024.pdf",
        ordner_id=10,
        titel="Mietvertrag 2024",
        remote_key="VERTRAG-2024-001"
    )

    if dok:
        # Status auf "Genehmigt" setzen
        dokument_status_aendern(dok["id"], "approved")
```

## Beispiel 3: Arbeitszeiten exportieren

Exportiere Arbeitszeiten für einen Zeitraum.

```python
"""
Arbeitszeiten-Export
Exportiert Arbeitszeiten für einen bestimmten Zeitraum.
"""
import os
import csv
from datetime import datetime
from requests import Session

API_TOKEN = os.environ.get("ELIZA_API_TOKEN")
BASE_URL = os.environ.get("ELIZA_BASE_URL", "https://example.myeliza.ch/api")

session = Session()
session.headers.update({"Authorization": f"Token {API_TOKEN}"})


def arbeitszeiten_abrufen(von_datum, bis_datum, mitarbeiter_id=None):
    """
    Ruft Arbeitszeiten für einen Zeitraum ab.

    Args:
        von_datum: Startdatum (YYYY-MM-DD)
        bis_datum: Enddatum (YYYY-MM-DD)
        mitarbeiter_id: Optional - nur für diesen Mitarbeiter

    Returns:
        Liste der Arbeitszeit-Einträge
    """
    params = {
        "date_from": von_datum,
        "date_to": bis_datum
    }

    if mitarbeiter_id:
        params["employee"] = mitarbeiter_id

    response = session.get(
        f"{BASE_URL}/timetracker/worktime",
        params=params
    )

    if response.status_code == 200:
        return response.json()
    else:
        print(f"Fehler: {response.status_code}")
        return []


def exportiere_als_csv(arbeitszeiten, ausgabedatei):
    """
    Exportiert Arbeitszeiten als CSV-Datei.
    """
    if not arbeitszeiten:
        print("Keine Daten zum Exportieren")
        return

    felder = ["datum", "mitarbeiter", "projekt", "stunden", "beschreibung"]

    with open(ausgabedatei, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=felder)
        writer.writeheader()

        for eintrag in arbeitszeiten:
            writer.writerow({
                "datum": eintrag.get("date", ""),
                "mitarbeiter": eintrag.get("employee_name", ""),
                "projekt": eintrag.get("project_name", ""),
                "stunden": eintrag.get("hours", 0),
                "beschreibung": eintrag.get("description", "")
            })

    print(f"✓ Exportiert: {ausgabedatei} ({len(arbeitszeiten)} Einträge)")


# Beispiel-Verwendung
if __name__ == "__main__":
    # Arbeitszeiten für Januar 2024 abrufen
    zeiten = arbeitszeiten_abrufen("2024-01-01", "2024-01-31")

    # Als CSV exportieren
    exportiere_als_csv(zeiten, "arbeitszeiten_januar_2024.csv")

    # Zusammenfassung
    total_stunden = sum(z.get("hours", 0) for z in zeiten)
    print(f"\nTotal: {total_stunden} Stunden in {len(zeiten)} Einträgen")
```

## Beispiel 4: KPI-Daten abrufen

Lese KPI-Messwerte für Dashboards.

```python
"""
KPI-Daten abrufen
Liest KPI-Messwerte für externe Dashboards.
"""
import os
from requests import Session

API_TOKEN = os.environ.get("ELIZA_API_TOKEN")
BASE_URL = os.environ.get("ELIZA_BASE_URL", "https://example.myeliza.ch/api")

session = Session()
session.headers.update({"Authorization": f"Token {API_TOKEN}"})


def kpis_abrufen():
    """Ruft alle KPIs ab."""
    response = session.get(f"{BASE_URL}/kpi/kpi")

    if response.status_code == 200:
        return response.json()
    return []


def messungen_abrufen(kpi_id, von_datum=None, bis_datum=None):
    """
    Ruft Messwerte für einen KPI ab.

    Args:
        kpi_id: ID des KPIs
        von_datum: Optional - Startdatum
        bis_datum: Optional - Enddatum

    Returns:
        Liste der Messwerte
    """
    params = {"kpi": kpi_id}

    if von_datum:
        params["date_from"] = von_datum
    if bis_datum:
        params["date_to"] = bis_datum

    response = session.get(
        f"{BASE_URL}/kpi/measurement",
        params=params
    )

    if response.status_code == 200:
        return response.json()
    return []


def kpi_report():
    """Erstellt einen einfachen KPI-Report."""
    kpis = kpis_abrufen()

    print("=" * 60)
    print("KPI REPORT")
    print("=" * 60)

    for kpi in kpis:
        print(f"\n📊 {kpi['title']}")
        print(f"   Einheit: {kpi.get('unit', '-')}")
        print(f"   Zielwert: {kpi.get('target_value', '-')}")

        # Letzte Messung abrufen
        messungen = messungen_abrufen(kpi["id"])
        if messungen:
            letzte = messungen[-1]
            print(f"   Aktueller Wert: {letzte.get('value', '-')}")
            print(f"   Gemessen am: {letzte.get('date', '-')}")


# Beispiel-Verwendung
if __name__ == "__main__":
    kpi_report()
```

## Beispiel 5: API-Client-Klasse

Eine wiederverwendbare Client-Klasse.

```python
"""
ELIZA API Client
Wiederverwendbare Klasse für API-Zugriff.
"""
import os
from requests import Session


class ElizaAPIClient:
    """Client für die ELIZA REST API."""

    def __init__(self, base_url=None, token=None):
        self.base_url = base_url or os.environ.get(
            "ELIZA_BASE_URL",
            "https://example.myeliza.ch/api"
        )
        self.token = token or os.environ.get("ELIZA_API_TOKEN")

        if not self.token:
            raise ValueError("API-Token erforderlich")

        self.session = Session()
        self.session.headers.update({
            "Authorization": f"Token {self.token}",
            "Content-Type": "application/json"
        })

    def _request(self, method, endpoint, **kwargs):
        """Führt eine API-Anfrage aus."""
        url = f"{self.base_url}/{endpoint.lstrip('/')}"
        response = self.session.request(method, url, **kwargs)
        response.raise_for_status()
        return response.json() if response.content else None

    def get(self, endpoint, **params):
        """GET-Anfrage."""
        return self._request("GET", endpoint, params=params)

    def post(self, endpoint, data):
        """POST-Anfrage."""
        return self._request("POST", endpoint, json=data)

    def patch(self, endpoint, data):
        """PATCH-Anfrage."""
        return self._request("PATCH", endpoint, json=data)

    def delete(self, endpoint):
        """DELETE-Anfrage."""
        return self._request("DELETE", endpoint)

    # Convenience-Methoden

    def mitarbeitende(self, **filter):
        """Alle Mitarbeitenden abrufen."""
        return self.get("organisation/mitarbeitende", **filter)

    def mitarbeiter(self, id):
        """Einzelnen Mitarbeiter abrufen."""
        return self.get(f"organisation/mitarbeitende/{id}")

    def dokumente(self, **filter):
        """Alle Dokumente abrufen."""
        return self.get("dms/document", **filter)

    def projekte(self, **filter):
        """Alle Projekte abrufen."""
        return self.get("projects/project", **filter)


# Beispiel-Verwendung
if __name__ == "__main__":
    client = ElizaAPIClient()

    # Mitarbeitende abrufen
    for ma in client.mitarbeitende(archived=False):
        print(f"- {ma['vorname']} {ma['nachname']}")

    # Dokumente in Ordner 10
    for dok in client.dokumente(folder=10):
        print(f"- {dok['title']}")
```

## Nächste Schritte

→ [Swagger & OpenAPI]({{< ref "09-swagger-openapi" >}}) - Interaktive Dokumentation

→ [Best Practices]({{< ref "10-best-practices" >}}) - Produktionsreife Implementierung

---

## Zusammenfassung

✅ `remote_key` für Synchronisation mit externen Systemen

✅ Multipart-Upload für Dateien mit `files` Parameter

✅ CSV-Export für Berichte

✅ Wiederverwendbare Client-Klasse für sauberen Code
