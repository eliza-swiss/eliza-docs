---
category: "Inhalte & Zusammenarbeit"
slug: "diskussion-social-bar"
---

Liebe ELIZA-Nutzerin, lieber ELIZA-Nutzer,

wir freuen uns, eine modulübergreifende Neuerung vorzustellen: die **Diskussions-Card**. Sie ist jetzt auf **News-Beiträgen**, **DMS-Dokumenten**, **Tutorials-Lektionen** und **Prozessen** verfügbar und macht es einfach, schnell zu reagieren, zu kommentieren und zu sehen, wer einen Inhalt schon angeschaut hat — vergleichbar mit LinkedIn oder Facebook, aber im geschützten Rahmen deiner ELIZA-Installation.

![Diskussions-Card mit Reagieren, Kommentieren und Gesehen-Tracking](/docs/streams/images/social-bar-overview.svg)

## 🚀 Was ist neu?

- **Reagieren mit Emojis** – 👍 ❤️ 😂 😮 😢 🔥 plus eigene Emojis aus dem Picker
- **Kommentieren mit Antworten** – Top-Level-Kommentare und eine Ebene Verschachtelung
- **Eigene Kommentare nachträglich bearbeiten** – Stift-Icon ✏️ klicken, Text anpassen, fertig
- **„(bearbeitet)"-Marker** – Bearbeitete Kommentare sind für andere Leser transparent gekennzeichnet
- **Gesehen-Tracking** – Sieh als Autor/Admin, wer dein Dokument oder deinen Beitrag schon angeschaut hat
- **Versions-bewusst** – Bei DMS-Dokumenten zählt der Gesehen-Counter nur User, die die aktuelle Version gesehen haben
- **Benachrichtigungen** – Du wirst automatisch informiert, wenn jemand deinen Beitrag kommentiert oder auf deinen Kommentar antwortet

## ✏️ So funktioniert's

### Aktions-Leiste im Detail

![Detail der Aktions-Leiste](/docs/streams/images/social-bar-actions.svg)

### Reagieren

- Klick auf **Reagieren** → vergibt 👍
- **Hover** für die Schnellauswahl mit allen sechs Emojis
- Klick auf **+** → öffnet den vollen Emoji-Picker

### Kommentieren

- Klick auf **Kommentieren** öffnet das Eingabefeld (bzw. ist direkt sichtbar, wenn schon Kommentare existieren)
- **Antworten** unter jedem Kommentar für threaded Replies
- Eigene Kommentare können **15 Minuten** lang bearbeitet oder gelöscht werden (Admins können das später anpassen)
- **Mit vorhandenen Antworten** wird ein Kommentar fixiert — das schützt die Diskussions-Integrität

### Gesehen-Tracking

- Erfassung erfolgt automatisch, sobald ein Inhalt mindestens 5 Sekunden im Blickfeld ist
- Funktioniert auch für sehr lange Beiträge (50% Bildschirmfüllung reicht)
- Pausiert, wenn der Browser-Tab im Hintergrund läuft
- Die Liste **wer hat gesehen** sehen nur Autor und Admins

## 🔧 Aktivierung (für Administratoren)

Die Diskussion ist **standardmässig deaktiviert** und muss pro Modul eingeschaltet werden:

1. **Einstellungen** → **Social-Bar**
2. Module aktivieren:
   - **DMS** (Dokumente)
   - **Tutorials** (Lektionen)
   - **Prozesse**
3. Optional **Zeitfenster für Kommentar-Bearbeitung** anpassen (Standard 15 Min, 0 = unbegrenzt)
4. **Speichern**

News & Events haben Reaktionen und Kommentare seit jeher aktiv — dort ist die Diskussion ohne weitere Schritte verfügbar.

💡 **Tipp:** Beginne mit einem Modul (z.B. DMS), sammle 1–2 Wochen Feedback und schalte dann die weiteren Module nach.

## 🔔 Wer wird benachrichtigt?

| Was passiert | Empfänger |
|---|---|
| Kommentar auf deinem Inhalt | Du (Autor/Verantwortliche/r) |
| Antwort auf deinen Kommentar | Du (Verfasser des Eltern-Kommentars) |
| Reaktion (Emoji) | _Keine Notification_ – verhindert Spam bei beliebten Inhalten |

Self-Notifications (du kommentierst dein eigenes Dokument) werden automatisch unterdrückt.

## 🔒 Berechtigungen bleiben erhalten

Die Diskussion respektiert die normalen Sichtbarkeits-Regeln:

- **Reagieren/Kommentieren**: nur mit Sicht-Berechtigung auf den Inhalt
- **Gesehen-Liste**: nur Autor/Admin
- **Bestehende Kommentar-Daten**: bleiben in der Datenbank erhalten, auch wenn man die Funktion wieder deaktiviert

## 📚 Mehr erfahren

Vollständige Anleitung mit allen Details: → [**Diskussion: Reagieren, Kommentieren, Gesehen** im News-Handbuch]({{< ref "06-diskussion" >}})

Viel Freude beim Diskutieren! 🎉