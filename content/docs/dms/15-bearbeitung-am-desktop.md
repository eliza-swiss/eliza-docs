---
title: "Dokumente am Computer bearbeiten"
description: "Entwürfe, Arbeitskopien und Dateien anderer Module direkt in Word, Excel, PowerPoint, LibreOffice oder Collabora Office auf deinem Rechner bearbeiten"
weight: "15"
tags:
  - "desktop"
  - "word"
  - "excel"
  - "powerpoint"
  - "libreoffice"
  - "collabora"
  - "office"
  - "arbeitskopie"
  - "bearbeiten"
  - "dms"
icon: "desktop_windows"
---


# Dokumente am Computer bearbeiten

Mit der Bearbeitung am Computer öffnest du die Datei eines Entwurfs oder einer Arbeitskopie direkt im Office-Programm auf deinem Rechner: Microsoft Word, Excel und PowerPoint, LibreOffice oder Collabora Office. Du musst die Datei nicht herunterladen und wieder hochladen. Was du speicherst, landet sofort in ELIZA. Pro Bearbeitung entsteht eine Fassung in der Versionshistorie.

Das ist praktisch, wenn du Funktionen brauchst, die es nur im Office-Programm auf dem Rechner gibt, zum Beispiel Makros, Serienbriefe oder eingebettete Objekte (siehe [Integrationen]({{< ref "09-integrationen" >}})).

![Ablauf der Bearbeitung am Computer](/docs/dms/images/desktop_bearbeitung_ablauf.svg)

## Voraussetzungen

Der Button **«Am Computer bearbeiten»** erscheint direkt bei der Dokumentenvorschau, wenn alle folgenden Punkte zutreffen:

| Voraussetzung | Erklärung |
|---|---|
| Funktion eingeschaltet | Eine ELIZA-Administratorin oder ein ELIZA-Administrator hat die **Desktop-Bearbeitung** eingeschaltet (siehe unten). |
| Entwurf oder Arbeitskopie | Das Dokument hat den Status **Entwurf**. Freigegebene Dokumente bearbeitest du über eine Arbeitskopie. |
| Änderungsrecht | Du darfst das Dokument bearbeiten. |
| Passende Datei | Word-Dateien (docx, doc, dotx, rtf), Excel-Dateien (xlsx, xls, xlsm), PowerPoint-Dateien (pptx, ppt) oder die entsprechenden Formate von LibreOffice (odt, ods, odp). |
| Grosser Bildschirm | Auf Smartphones und Tablets ist der Button ausgeblendet, weil es dort kein passendes Office-Programm gibt. |
| Programm installiert | Auf deinem Rechner ist das Office-Programm installiert, das in ELIZA eingestellt ist. |

> **💡 Tipp:** Ein freigegebenes Dokument bleibt unverändert, bis die Arbeitskopie freigegeben ist. Wie du eine Arbeitskopie erstellst, steht im Kapitel [Versionierung]({{< ref "06-versionierung" >}}).

## Ein Dokument am Computer bearbeiten

**Schritt für Schritt:**

1. Öffne den Entwurf oder die Arbeitskopie im DMS.
2. Klicke direkt bei der Dokumentenvorschau auf **«Am Computer bearbeiten»**. Wenn die Online-Bearbeitung verfügbar ist, steht daneben **«Im Browser bearbeiten»**. Fährst du mit der Maus über einen der Buttons, zeigt ein Hinweis, mit welchem Programm das Dokument geöffnet wird und was dafür auf deinem Computer installiert sein muss.
3. Dein Browser fragt, ob er das Office-Programm öffnen darf. Erlaube es. Wenn du «Immer erlauben» wählst, fragt der Browser beim nächsten Mal nicht mehr.
4. Das Office-Programm öffnet die Datei. Bearbeite sie wie gewohnt.
5. Speichere mit **Ctrl+S** (auf dem Mac **Cmd+S**), so oft du willst. Das erste Speichern legt in ELIZA eine Fassung an, jedes weitere Speichern aktualisiert sie.
6. Wenn du fertig bist, schliesse das Dokument im Office-Programm.
7. Reiche die Arbeitskopie wie gewohnt zur Prüfung ein.

> **⚠️ Wichtig:** Öffnet sich nach dem Klick nichts, klicke innerhalb von 60 Sekunden in der blauen Karte auf **«Am Computer öffnen»**. Danach ist der Link nicht mehr gültig. Klicke dann einfach nochmals auf «Am Computer bearbeiten».

## Dateien in anderen Modulen

Das Monitor-Symbol gibt es überall dort, wo du eine Datei auch **«Online bearbeiten»** kannst. Es steht in der Leiste über der Vorschau, direkt neben dem Stift:

| Modul | Dateien |
|---|---|
| Spaces | Dateien in Spaces, Boards und Sitzungen |
| Projekte | Projektdateien |
| Meldungen | Dateien an Meldungen |
| Verträge | Vertragsdateien |
| Datenschutzmanagement | Dokumente von Untervertragspartnern |
| Organisation & HR | Dateien im Personaldossier und an Notizen |
| KI-Assistent | Dateien, die ein Chat als Wissensquelle nutzt |

Der Ablauf ist derselbe wie im DMS: Monitor-Symbol, bearbeiten, speichern, schliessen. Es gelten dieselben Rechte wie bei «Online bearbeiten». Der Status «Entwurf» spielt nur im DMS eine Rolle. Bei Verträgen mit Freigabe-Workflow und Arbeitskopien-Pflicht bearbeitest du freigegebene Dateien über eine Arbeitskopie. Dateien im Papierkorb oder im Archiv lassen sich nicht am Desktop bearbeiten.

> **💡 Tipp:** Dateien des KI-Assistenten haben keine Versionshistorie. Dort überschreibt jedes Speichern die Datei, wie bei «Online bearbeiten».

> **⚠️ Datenschutz:** Gerade bei Dateien aus dem Personaldossier gilt der Hinweis zu Sicherungskopien weiter unten: Das Office-Programm kann Kopien auf deinem Rechner ablegen.

## Was ELIZA während der Bearbeitung anzeigt

Über dem Dokument erscheint eine Karte, die sich alle paar Sekunden selbst aktualisiert. Ein grün pulsierender Punkt zeigt, dass ELIZA laufend nachschaut.

![Statuskarten der Bearbeitung am Computer](/docs/dms/images/desktop_bearbeitung_statuskarten.svg)

| Karte | Bedeutung |
|---|---|
| **Blau:** «Das Dokument öffnet sich in deinem Office-Programm.» | ELIZA wartet, bis dein Office-Programm die Datei abgerufen hat. |
| **Orange:** «Du bearbeitest dieses Dokument seit … am Computer.» | Die Bearbeitung läuft. Nach jedem Speichern steht dort zusätzlich «Zuletzt gespeichert um …». |
| **Orange mit Hinweis:** «Das Office-Programm hat das Dokument schreibgeschützt geöffnet.» | Office zeigt die Datei zuerst nur zum Lesen an (siehe nächster Abschnitt). |
| **Grün:** «Die Bearbeitung am Computer ist beendet.» | Du hast das Office-Programm geschlossen. Wurde gespeichert, lädt die Seite nach kurzer Zeit die neue Fassung. |

Während jemand ein Dokument am Computer bearbeitet:

- sehen alle anderen mit Leserecht in der orangen Karte, wer gerade bearbeitet;
- ist **«Im Browser bearbeiten»** gesperrt, damit nicht zwei Programme dieselbe Datei überschreiben: Bei dir ist der Button ausgegraut, bei allen anderen ausgeblendet;
- kann niemand sonst das Dokument am Computer öffnen. Für alle anderen ist «Am Computer bearbeiten» ausgeblendet.

### Office öffnet zuerst schreibgeschützt

Microsoft Word, Excel und PowerPoint unter Windows öffnen Dateien aus dem Internet oft zuerst in der **geschützten Ansicht**. Oben im Office-Programm erscheint dann ein gelber Balken mit dem Button **«Bearbeitung aktivieren»**.

1. Klicke im Office-Programm auf **«Bearbeitung aktivieren»**.
2. Die orange Karte in ELIZA zeigt danach wieder nur «Du bearbeitest …».
3. Bearbeite und speichere wie gewohnt.

Klickst du innerhalb von drei Minuten nicht auf «Bearbeitung aktivieren», verschwindet die orange Karte in ELIZA. Bearbeiten kannst du trotzdem noch: Klicke im Office-Programm auf «Bearbeitung aktivieren» und lade die Seite in ELIZA neu, dann erscheint die Karte wieder.

### Bearbeitung beenden

Die Bearbeitung endet normalerweise, wenn du das Office-Programm schliesst. Ist das Programm abgestürzt oder hast du den Rechner zugeklappt, gibt ELIZA das Dokument spätestens nach drei Minuten wieder frei.

Mit **«Bearbeitung beenden»** in der orangen Karte gibst du das Dokument sofort frei. Diesen Button sehen die Person, die gerade bearbeitet, und die Admins des Dokuments.

> **⚠️ Wichtig:** Nach «Bearbeitung beenden» kann das noch offene Office-Programm nicht mehr in ELIZA speichern. Speichere deine Änderungen vorher.

## Speichern im Office-Programm

### LibreOffice fragt nach dem Dateiformat

LibreOffice fragt beim ersten Speichern einer Word-, Excel- oder PowerPoint-Datei, ob es im ODF-Format speichern soll.

- Wähle immer **«Word-Format verwenden»** (bzw. Excel- oder PowerPoint-Format).
- Mit dem ODF-Format würde LibreOffice eine neue Datei anlegen. Das lässt ELIZA nicht zu, und das Speichern schlägt fehl.

> **💡 Tipp:** Die Frage lässt sich abschalten: LibreOffice → Einstellungen → Laden/Speichern → Allgemein → «Warnen, wenn nicht im ODF- oder Standardformat gespeichert wird» abwählen.

### Versionshistorie

Pro Bearbeitung am Computer entsteht im Reiter **Versionen** eine Fassung, so wie bei der Bearbeitung mit Office Online. Der Kommentar nennt das Programm, zum Beispiel «Desktop (Microsoft Word)» oder «Desktop (LibreOffice)».

- Das **erste Speichern** einer Bearbeitung legt die Fassung an.
- **Jedes weitere Speichern** in derselben Bearbeitung aktualisiert diese Fassung. Zwischenstände innerhalb einer Bearbeitung bleiben nicht einzeln erhalten.
- **Schliesst du das Programm** und öffnest das Dokument später wieder am Computer, beginnt eine neue Bearbeitung mit einer neuen Fassung.
- Fassungen aus früheren Bearbeitungen bleiben unverändert erhalten.

> **💡 Tipp:** Willst du einen Zwischenstand als eigene Fassung festhalten, schliesse das Dokument im Office-Programm und öffne es in ELIZA erneut am Computer.

## Einstellungen für ELIZA-Administratoren

Die Bearbeitung am Desktop ist zuerst ausgeschaltet. ELIZA-Administratorinnen und ELIZA-Administratoren schalten sie unter **Dokumente** → **Einstellungen** → **Desktop-Bearbeitung** ein. Andere Benutzerinnen und Benutzer sehen diese Karte nicht. Den Menüpunkt **Einstellungen** sehen nur DMS-Administratorinnen und DMS-Administratoren: Fehlt dir dieses Recht, bitte eine Kollegin oder einen Kollegen mit beiden Rechten um die Einstellung oder lass dir das Recht geben.

![Einstellungsseite der Desktop-Bearbeitung](/docs/dms/images/desktop_bearbeitung_einstellungen.svg)

| Bereich | Was du einstellst |
|---|---|
| **Aktivierung** | Schalter für die ganze ELIZA-Instanz. Ist er aus, gibt es nirgends den Button «Am Computer bearbeiten». |
| **Office-Programm** | **LibreOffice / Collabora Office** oder **Microsoft Office (Word, Excel, PowerPoint)**. Die Wahl gilt für alle. |
| **Verbindung** | Zeigt die Adresse, mit der die Links gebaut werden. Sie muss von den Rechnern der Benutzerinnen und Benutzer erreichbar sein. |
| **Laufende Bearbeitungen** | Verweist auf die Übersicht, die alle DMS-Administratoren sehen (siehe nächster Abschnitt). |

### Welches Programm passt?

| Rechner | LibreOffice / Collabora Office | Microsoft Office |
|---|---|---|
| Windows | ✅ | ✅ |
| macOS | nur mit einer Zusatz-App, wende dich an den Support | ✅ |
| Linux | ✅ | – |

> **💡 Tipp:** Arbeiten in deiner Organisation Menschen mit Mac und mit Windows, ist **Microsoft Office** die einfachste Wahl.

## Laufende Bearbeitungen für DMS-Administratoren

Vergisst jemand, das Office-Programm zu schliessen, bleibt das Dokument für alle anderen gesperrt. Als DMS-Administratorin oder DMS-Administrator gibst du es wieder frei, ohne die Person suchen zu müssen.

1. Navigiere zu **Dokumente** → **Einstellungen**.
2. Klicke in der Karte **«Laufende Bearbeitungen am Desktop»** auf **«Übersicht öffnen»**. Die Karte zeigt auch, wie viele Bearbeitungen gerade laufen.
3. Die Tabelle nennt pro Bearbeitung das Dokument, die Person, das Programm, den Beginn und das letzte Speichern.
4. Klicke bei der hängengebliebenen Bearbeitung auf **«Beenden»**.

![Übersicht der laufenden Bearbeitungen am Desktop](/docs/dms/images/desktop_bearbeitung_laufend.svg)

Was bis zum Beenden gespeichert wurde, bleibt als Fassung in ELIZA. Speichert die Person danach noch einmal, meldet ihr Office-Programm einen Fehler (siehe «Häufige Fehler und Lösungen»).

Superadministratorinnen und Superadministratoren sehen in der Übersicht die Bearbeitungen aller Module, mit einer zusätzlichen Spalte **«Bereich»**. DMS-Administratorinnen und DMS-Administratoren sehen die Dokumente des DMS.

> **💡 Tipp:** Die Übersicht zeigt nur Dokumente, die du sehen darfst. Liegt ein Dokument in einem geschützten Ordner, für den du keine Rechte hast, erscheint es nicht. Admins des Dokuments oder seines Ordners können die Bearbeitung auch direkt in der orangen Karte des Dokuments beenden.

Die Karte und die Übersicht erscheinen nur, wenn die Bearbeitung am Desktop eingeschaltet ist.

## Häufige Fehler und Lösungen

### Problem: Nach dem Klick passiert nichts

**Mögliche Ursachen und Lösungen:**

- Dein Browser hat nicht gefragt, ob er das Programm öffnen darf, oder du hast abgelehnt. Klicke in der blauen Karte auf **«Am Computer öffnen»**.
- Das eingestellte Office-Programm ist auf deinem Rechner nicht installiert. Frage deine Administratorin oder deinen Administrator, welches Programm eingestellt ist.
- Deine Firma blockiert das Öffnen von Programmen aus dem Browser. Wende dich an deine IT.

### Problem: Das Office-Programm meldet beim Speichern einen Fehler

ELIZA lehnt das Speichern ab, wenn sich seit dem Öffnen etwas geändert hat:

- Das Dokument wurde inzwischen zur Prüfung eingereicht oder freigegeben.
- Du darfst das Dokument nicht mehr bearbeiten.
- Jemand hat die Bearbeitung mit «Bearbeitung beenden» beendet.
- Der Rechner war länger als 15 Minuten im Ruhezustand, oder die Bearbeitung läuft länger als 12 Stunden.

**Lösung:** Speichere die Datei im Office-Programm unter einem neuen Namen auf deinem Rechner. Öffne das Dokument in ELIZA erneut am Computer und übernimm deine Änderungen, oder lade die Datei als neue Version hoch.

### Problem: Das Dokument öffnet sich nur zum Lesen

- Bei Microsoft Office: Klicke auf **«Bearbeitung aktivieren»** (geschützte Ansicht).
- Haben zwei Personen fast gleichzeitig geklickt, darf nur die erste bearbeiten. Das Programm der zweiten Person öffnet die Datei nur zum Lesen.

### Problem: Ein Link aus «Zuletzt verwendet» funktioniert nicht mehr

Die Links sind nur während einer Bearbeitung gültig. Öffne das Dokument immer über ELIZA und das Monitor-Symbol.

## Best Practices

- ✅ **Arbeitskopie verwenden:** Bearbeite freigegebene Dokumente immer über eine Arbeitskopie. Das Original bleibt bis zur Freigabe unverändert.
- ✅ **Regelmässig speichern:** Jedes Speichern sichert deinen aktuellen Stand in ELIZA.
- ✅ **Programm schliessen, wenn du fertig bist:** So ist das Dokument sofort wieder für andere frei.
- ✅ **Dateiformat beibehalten:** In LibreOffice immer das Word-, Excel- oder PowerPoint-Format wählen.
- ❌ **Vermeide** es, dasselbe Dokument in zwei Office-Fenstern zu öffnen.

> **⚠️ Datenschutz:** Office-Programme legen teilweise Kopien auf deinem Rechner ab. LibreOffice speichert zum Beispiel Sicherungskopien (`.bak`) im eigenen Profilordner. Bei vertraulichen Dokumenten kann deine IT diese Funktion abschalten (LibreOffice → Einstellungen → Laden/Speichern → Allgemein → «Immer eine Sicherungskopie erstellen»).

## Häufige Fragen (FAQ)

### Kann ich ein freigegebenes Dokument direkt am Computer bearbeiten?

Nein. Erstelle zuerst eine Arbeitskopie und bearbeite diese am Computer. Das freigegebene Original ändert sich erst, wenn die Arbeitskopie freigegeben ist.

### Können zwei Personen gleichzeitig am Computer bearbeiten?

Nein. Wer zuerst öffnet, bearbeitet. Alle anderen sehen in der orangen Karte, wer gerade arbeitet. Das Monitor-Symbol erscheint für sie erst wieder, wenn die Bearbeitung beendet ist.

### Kann ich gleichzeitig online und am Computer bearbeiten?

Nein. Solange das Dokument am Computer bearbeitet wird, ist «Im Browser bearbeiten» ausgegraut. Sobald du es im Office-Programm schliesst, ist der Button wieder frei, ohne dass du die Seite neu laden musst. Umgekehrt lässt sich ein Dokument, das gerade online bearbeitet wird, nicht am Computer öffnen.

### Was passiert, wenn jemand vergisst, das Office-Programm zu schliessen?

Solange das Programm das Dokument offen hält, bleibt es gesperrt, höchstens aber 12 Stunden. Eine DMS-Administratorin oder ein DMS-Administrator kann sie in der Übersicht der laufenden Bearbeitungen sofort beenden.

### Wo wird die Datei gespeichert?

Direkt in ELIZA. Die Datei landet nicht in deinem Download- oder Dokumente-Ordner. Das Office-Programm kann aber Sicherungskopien auf deinem Rechner ablegen (siehe Hinweis zum Datenschutz).

## Zusammenfassung

- Das Monitor-Symbol öffnet Entwürfe und Arbeitskopien direkt im Office-Programm auf deinem Rechner, ebenso Dateien in allen Modulen mit «Online bearbeiten».
- Was du speicherst, landet sofort in ELIZA. Pro Bearbeitung entsteht eine Fassung.
- Eine Karte über dem Dokument zeigt laufend, wer bearbeitet und wann zuletzt gespeichert wurde.
- Während der Bearbeitung ist das Dokument für andere gesperrt.
- ELIZA-Administratoren schalten die Funktion ein und wählen das Office-Programm.
- DMS-Administratoren sehen alle laufenden Bearbeitungen und können hängengebliebene beenden.

## Nächste Schritte

- [Versionierung und Arbeitskopien]({{< ref "06-versionierung" >}})
- [Workflow und Status]({{< ref "04-workflow-status" >}})
- [Integrationen mit Office Online]({{< ref "09-integrationen" >}})
