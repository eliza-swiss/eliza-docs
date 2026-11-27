---
title: "Endpunkte-Übersicht"
description: ""
weight: "4"
tags:
  - "api"
  - "endpoints"
  - "referenz"
---


# Endpunkte-Übersicht

Diese Referenz listet alle verfügbaren API-Endpoints nach Modulen gruppiert.

## Organisation

Mitarbeitende, Abteilungen und Rollen verwalten.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/organisation/mitarbeitende` | Mitarbeitende (Personen) |
| `/api/organisation/orgunit` | Organisationseinheiten (Abteilungen) |
| `/api/organisation/funktionen` | Funktionen/Rollen |
| `/api/organisation/membership` | Funktions-Mitgliedschaften |
| `/api/organisation/salary` | Gehaltsdaten |
| `/api/organisation/skill-category` | Skill-Kategorien |
| `/api/organisation/skill` | Skills/Kompetenzen |

**Person zu einem Benutzerkonto:** `GET /api/organisation/mitarbeitende?user=<Benutzer-ID>` liefert die Person, die mit diesem Konto verknüpft ist, `?user=me` deine eigene. Eine unbekannte ID ergibt eine leere Liste, ein Wert, der weder eine ganze Zahl noch `me` ist, ergibt 400. Du siehst dabei nur Personen, die du ohnehin siehst.

## Dokumentenmanagement (DMS)

Dokumente und Ordner verwalten.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/dms/document` | Dokumente |
| `/api/dms/folder` | Dokumentenordner |
| `/api/dms/documenttype` | Dokumententypen |
| `/api/dms/batch_move` | Batch: Dokumente verschieben |
| `/api/dms/batch_archive` | Batch: Dokumente archivieren |
| `/api/dms/batch_delete` | Batch: Dokumente löschen |

**Status nur über die Workflow-Endpunkte:** Das Feld `state` eines Dokuments ist nur lesbar. Beim Anlegen entsteht jedes Dokument als Entwurf (`draft`). Den Status änderst du mit `POST /api/dms/document/{uuid}/review`, `/approve`, `/reject` (mit `comment`), `/archive` und `/new_version`; welche Vorgänge dir gerade offenstehen, liefert `GET /api/dms/document/{uuid}/allowed_actions`. Ein PATCH oder PUT mit einem anderen `state` wird mit HTTP 400 abgelehnt. Dasselbe gilt für das Freigabedatum `approval_date`, das nur die Freigabe (`approve`) setzt. Beim Anlegen in einem Ordner setzt ELIZA wie beim Hochladen dich als Autor/in und die Funktionen des Ordners, sofern du die Felder nicht mitsendest.

**Template-Sprache und PDF-Darstellung über Aktionen:** Die Felder `disable_template_language` und `enable_pdf_rendering` sind beim Ändern und Anlegen gesperrt (HTTP 400 mit Hinweis, ein unveränderter Wert geht durch). Schalte sie mit `POST /api/dms/document/{uuid}/template_language` beziehungsweise `/pdf_rendering` und dem Zielwert `{"enabled": true}` oder `{"enabled": false}`; `enabled` ist Pflicht, auch formularkodiert. Ein Aufruf mit dem gespeicherten Wert ändert nichts und löst weder Verarbeitung noch Rendern aus. Lässt sich die PDF-Darstellung beim Einschalten nicht erzeugen, bleibt sie aus und die API antwortet mit HTTP 503. Die Template-Sprache schaltet, wer das Dokument ändern darf; die PDF-Darstellung, wer das Original sieht (Änderungs- oder Arbeitskopie-Recht).

**Folgen eines Statuswechsels wie in «Status bearbeiten»:** `review`, `approve`, `reject` und `archive` schreiben einen Workflow-Kommentar mit der Statuszeile («Status geändert: …») und tragen dich und die zuständige Person als Beitragende ein. Die zuständige Person erhält eine Benachrichtigung, ausser du handelst selbst; ist das Benachrichtigungsmodul ausgeschaltet, eine Mail. Optional sendest du `comment` (bei `reject` Pflicht) und `notification_user_ids`, eine Liste von Personen, die zusätzlich benachrichtigt werden. Wählbar sind wie im Formular nur die Personen, denen das Dokument zugewiesen werden kann; eine andere Person beantwortet die API mit HTTP 400 wie eine unbekannte ID. Zuständigkeit und Frist bleiben unverändert; darf die zuständige Person den nächsten Schritt nicht ausführen (nach `review` etwa nicht prüfen), antwortet die API wie das Formular mit HTTP 400 unter `assigned_user`, und du änderst die Zuständigkeit in ELIZA unter «Status bearbeiten». Gibst du eine Arbeitskopie frei, übernimmt das Original ihren Inhalt, die Arbeitskopie wird gelöscht und die Antwort zeigt das Original.

**Geschützte Ordner erkennst du an `effective_visibility`:** Das Feld `visibility` eines Ordners zeigt den gespeicherten Wert (`normal` oder `protected`). Unter einem geschützten Ordner ist aber jeder Ordner geschützt, auch wenn bei ihm `visibility` `normal` steht, zum Beispiel ein Unterordner, der Berechtigungen erbt. Welcher Schutz gilt, zeigt das nur lesbare Feld `effective_visibility`. Ändern kannst du weiterhin nur `visibility`; ein mitgesendetes `effective_visibility` übergeht die API, ein GET-Ergebnis kannst du also unverändert zurücksenden.

## Projekte

Projekte, Aufgaben und Meilensteine.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/projects/project` | Projekte |
| `/api/projects/task` | Aufgaben |
| `/api/projects/milestone` | Meilensteine |
| `/api/projects/phase` | Projektphasen |

**Status nur über Statuswechsel:** Das Feld `state` eines Projekts änderst du nicht per PATCH, PUT oder beim Anlegen; ein anderer Wert als der gespeicherte wird mit HTTP 400 abgelehnt, der unveränderte Wert geht durch. Den Status wechselst du mit `POST /api/projects/project/{id}/transition` und dem Body `{"transition": "<Name>"}` (`review`, `reject`, `retract`, `approve`, `revise`, `start`, `finish`, `postpone`, `cancel`, `reactivate`). Wie in der Oberfläche gilt: ist der Wechsel im aktuellen Status nicht möglich, antwortet die API mit 400 und nennt die für dich möglichen Namen; fehlt dir das Recht für den Wechsel (etwa `approve` ohne `projects.delete_project`), mit 403.

**Zuständigkeit und Frist über `followup`:** `assigned_user` und `deadline` änderst du nicht per PATCH, PUT oder beim Anlegen; ein anderer Wert als der gespeicherte wird mit HTTP 400 abgelehnt, der unveränderte Wert geht durch. Beides ändert `POST /api/projects/project/{id}/followup` mit dem Body `{"comment": "...", "assigned_user": <ID>, "deadline": "JJJJ-MM-TT", "transition": "<Name>", "notification_user_ids": [<ID>, ...]}`; alle Felder sind optional, ein nicht gesendetes Feld behält den gespeicherten Wert. Wie im Workflow-Dialog der Oberfläche schreibt die Aktion einen Verlaufseintrag mit der angemeldeten Person und verschickt eine Mail an die Zuständigkeit und die gewählten Personen. Das gilt auch für die Aktion `transition`: sie schreibt die Statuszeile und mailt an die Zuständigkeit (ohne Zuständigkeit keine Mail); sie nimmt kein `comment` an, einen Kommentar sendest du über `followup`. Die Auswahl für `assigned_user` ist die der Oberfläche (aktive Personen mit `projects.change_project`, keine Superuser), für `notification_user_ids` Personen mit `projects.delete_project` und die Mitwirkenden des Projekts; sonst antwortet die API mit 400 unter dem Feldnamen. Die bisherige Zuständigkeit erhält keine Mail, wie in der Oberfläche.

## Teams

Kanban-Boards und Meetings.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/teams/space` | Team-Spaces |
| `/api/teams/board` | Kanban-Boards |
| `/api/teams/list` | Board-Listen (Spalten) |
| `/api/teams/card` | Karten (Aufgaben) |
| `/api/teams/label` | Labels/Tags |
| `/api/teams/meeting` | Meetings |
| `/api/teams/meetingitem` | Meeting-Traktanden |

Ein Board archivierst du nicht über das Feld `archived`: Ein geänderter Wert ergibt 400. Nutze
`POST /api/teams/board/{id}/archive` und `POST /api/teams/board/{id}/unarchive` ohne Body. Beide Aktionen
archivieren bzw. holen das Board samt allen Karten zurück, wie die Oberfläche, und verlangen dasselbe Recht
wie dort: Du musst das Board sehen dürfen und Admin des Spaces sein; hat das Board ein eigenes Team
(`inherit_team` ausgeschaltet), dürfen es auch dessen Mitglieder. Ist das Board schon archiviert bzw. nicht
archiviert, antwortet die API mit 400.

Ein PATCH oder PUT auf eine Karte wirkt wie «Antworten» in der Oberfläche: Ändern sich Frist, Liste, Status,
Labels oder Zuständigkeit, hält ein Eintrag im Verlauf der Karte die Änderung mit deinem Namen fest. Wechselt die
Karte in eine Liste mit Zielzustand, bekommt sie diesen Status, ausser du schickst einen anderen `state` mit;
archiviert die Liste eingehende Karten, wird auch diese archiviert. Beides gilt nur beim Wechsel der Liste. Mit
`notification_user_ids` benachrichtigst du Personen, beim Anlegen und beim Ändern; sie stehen danach am
Verlaufseintrag. Erlaubt ist, wen das Formular anbietet: beim Anlegen das Team des Boards, beim Ändern zusätzlich
die Beitragenden der Karte. Für eine andere Person antwortet die API mit 400 wie für eine unbekannte ID. Schickst du
eine Karte unverändert zurück, entsteht kein Eintrag. Einen Kommentar schreibst du mit
`POST /api/teams/card/{id}/add-comment`.

Eine Karte archivierst du nicht über das Feld `archived`: Ein geänderter Wert ergibt 400. Nutze
`POST /api/teams/card/{id}/archive` und `POST /api/teams/card/{id}/reactivate`, beide optional mit `comment` und
`notification_user_ids` (Mitglieder des Space-Teams). Wie in der Oberfläche schreiben sie einen Eintrag in den
Verlauf und verlangen, dass du die Karte bearbeiten darfst. Ist die Karte schon archiviert bzw. nicht archiviert,
antwortet die API mit 400.

Wie in der Oberfläche steht ein Kommentar, den du mit `add-comment` schreibst, im Verlauf der Karte, ebenso ein geänderter Kommentartext (PATCH auf `/api/teams/comment/{id}`). Schickst du denselben Text zurück, entsteht kein Eintrag. Setzt du eine Sitzung auf `closed`, hält ELIZA Zeitpunkt und Person des Abschlusses fest; beim Wiedereröffnen bleiben beide stehen.

Besitzer:in, Admins und Team eines Spaces änderst du nicht über die Felder `owner`/`owner_id`, `admin_ids` und
`team_ids`: Ein geänderter Wert ergibt 400, ein unveränderter geht durch. Besitzer:in ist, wer den Space anlegt.
Nutze `POST /api/teams/space/{id}/invite_users` mit `user_ids` (optional `send_message`, `message`),
`POST /api/teams/space/{id}/remove_users` mit `user_ids` und `POST /api/teams/space/{id}/set_admins` mit
`admin_ids`. Die Aktionen gelten wie in der Oberfläche für Besitzer:in und Admins des Spaces. Die Antwort ist der
Space (200). Mit 400 antwortet die API, wenn

- du in `invite_users` jemanden einlädst, der schon im Team ist, dich selbst, eine Superuser-Person oder eine inaktive Person,
- du in `remove_users` deine eigene ID angibst,
- du in `set_admins` jemanden angibst, der kein aktives Mitglied des Teams ist. Das trifft auch zu, wenn die Admin-Liste
  eines GET eine inaktive Person enthält und du sie unverändert zurückschickst.

Die eigene ID in `admin_ids` wird ignoriert, weil du Admin bleibst. Beim Entfernen der Besitzer:in geht der Space an
einen Admin.

Einen Space archivierst du nicht über das Feld `archived`: Ein geänderter Wert ergibt 400. Nutze
`POST /api/teams/space/{id}/archive` und `POST /api/teams/space/{id}/reactivate` ohne Body. Beide Aktionen
archivieren bzw. holen den Space samt Boards, Karten und Sitzungen zurück, wie die Oberfläche, und verlangen
dasselbe Recht wie dort (Admin des Spaces). Ist der Space schon archiviert bzw. nicht archiviert, antwortet die
API mit 400.

## Zeiterfassung

Arbeitszeiten und Abwesenheiten.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/timetracker/worktime` | Arbeitszeit-Einträge |
| `/api/timetracker/absence` | Abwesenheiten (Ferien, Krankheit) |
| `/api/timetracker/monthlyreport` | Monatsabschlüsse (ganzer Monat): erstellen, aktualisieren, abschliessen, wieder eröffnen |
| `/api/timetracker/monthlyclosing` | Monatsabschlüsse einzelner Personen, Korrekturen per PATCH |

Eine Absenz legst du mit `state` `planned` (geplant, Standard) oder `verification` (zur Bewilligung einreichen) an; jeder andere Status ergibt 400. Wie in der Oberfläche ist die vorgesetzte Person zuständig, auch wenn du für eine andere Person erfasst: Sendest du sie oder nichts, geht die Anfrage durch, eine andere Zuständigkeit ergibt 400 (danach über die Aktion `followup`). Die vorgesetzte Person bekommt die Meldung «Abwesenheit zur Genehmigung»; bei Arten, die sich automatisch freigeben, bekommen stattdessen die betroffene Person und die vorgesetzte Person die Meldung, dass die Absenz genehmigt ist. Nach dem Erfassen sind `state`, `employee` und `assigned_user` gesperrt: Ein geänderter Wert ergibt 400, ein unveränderter geht durch, sodass du eine gelesene Absenz im PUT zurückschicken kannst.

Eine Rückmeldung wie im Formular «Rückmeldung» gibst du mit `POST /api/timetracker/absence/{id}/followup`. Die Felder sind `transition` (Statuswechsel: `submit`, `retract`, `approve`, `reject` oder `reactivate`), `comment`, `assigned_user_id` (neue Zuständigkeit, `null` hebt sie auf) und `notification_user_ids` (Empfänger einer Mail). Jedes Feld ist optional, ohne eines davon antwortet die API mit 400. Zuständigkeit und Empfänger kommen aus derselben Auswahl wie im Formular: Personen, die Absenzen bearbeiten dürfen, dazu die betroffene und die vorgesetzte Person. Eine andere Person ergibt 400 wie eine unbekannte ID; Rolle und Statuswechsel prüft die API vorher, deren 403 kommt also zuerst. Eine Rückmeldung geben die betroffene Person, ihre vorgesetzte Person und wer Absenzen bearbeiten darf (`change_absence`), andere bekommen 403, auch wenn sie die Absenz sehen; wer sie nicht sieht, bekommt 404. Ein Statuswechsel, der im aktuellen Status nicht geht, ergibt 400 mit den für dich möglichen; fehlt dir das Recht dafür (freigeben und ablehnen nur die vorgesetzte Person oder `change_absence`), ergibt er 403. Jede Rückmeldung schreibt einen Eintrag mit dir als Person in den Verlauf der Absenz, schickt die Mail nur an die genannten Empfänger und meldet sich bei der zuständigen und der betroffenen Person. `POST /api/timetracker/absence/{id}/approve` ohne Body ist die Kurzform für `transition` `approve`. Für beide Aktionen brauchst du kein Recht zum Erfassen von Absenzen.

Die Arbeitszeiten eines Tages reichst du mit `POST /api/timetracker/worktime/submit-day` ein, ziehst sie mit `POST /api/timetracker/worktime/retract-day` zurück und verbuchst sie mit `POST /api/timetracker/worktime/approve-day`, wie die Knöpfe der Tagesansicht. Der Body ist `{"date": "JJJJ-MM-TT", "user": <id>}`; `user` ist optional, ohne Angabe gilt deine eigene Person. Die Antwort ist `{"count": n}` mit der Zahl der geänderten Einträge. Einreichen ändert nur erfasste Einträge (`created`) auf `verification`; Zurückziehen setzt eingereichte Einträge auf `created`, bei vorgesetzten Personen und mit `change_worktime` auch verbuchte; Verbuchen setzt alle Einträge des Tages auf `approved`. Einreichen darfst du für dich selbst, für direkt unterstellte Personen und mit `change_worktime` oder `delete_worktime`, Zurückziehen für dich selbst, für direkt unterstellte Personen und mit `change_worktime`, Verbuchen nur als vorgesetzte Person oder mit `change_worktime`; sonst antwortet die API mit 403 und dem Text der Oberfläche. Für die drei Aktionen brauchst du kein Recht zum Erfassen von Arbeitszeiten. Eine unbekannte ID wird wie eine fremde Person behandelt, damit die API nicht verrät, welche IDs es gibt; ein Wert, der keine ganze Zahl ab 1 ist, ergibt 400.

Einen ganzen Monat bearbeitest du mit `/api/timetracker/monthlyreport`: Ein Datensatz ist ein Monat für alle Mitarbeitenden, mit `id`, `month`, `state` (`open` oder `approved`), `closing_count` (Zahl der Monatsabschlüsse einzelner Personen) `frontend_url` (die Monatsseite in ELIZA) und `content_type_id`. Mit dem Recht `view_monthlyreport` oder `change_monthlyreport` kommen die Summen des Monats dazu: `month_total`, `month_total_gross`, `month_due_total`, `overtime` und `flexitime_balance` als Text `HH:MM:SS`, ausserdem `redeemed_holidays`, `remaining_holidays`, `sick_days` und `total_sick_days` als Dezimalzahl. Die Summen füllt erst «Monat abschliessen»; in einem offenen Monat sind sie 0 oder stammen vom letzten Abschluss, und `month_total_gross` bleibt immer 0. Aktuelle Werte stehen in den Monatsabschlüssen der Personen. Lesen (GET, Liste und Detail) darfst du mit einem der Rechte `view_monthlyreport`, `change_monthlyreport`, `change_worktime` oder `change_absence`, sonst antwortet die API mit 403 und dem Text «Dir fehlt das nötige Recht für diese Aktion.». Filter sind `month` (Datum), `year` (Zahl) und `state`. PUT, PATCH und DELETE ergeben 405; einen Monat löschst du in ELIZA. Ist die Zeiterfassung auf der Instanz ausgeschaltet, ergibt die Ressource 404; ein Monat, der gelöscht wurde, ebenfalls, auch wenn das Löschen eine laufende Aktion überholt.

Die vier Knöpfe der Monatsseite sind Anfragen ohne Körper, die API führt dieselben Regeln aus wie die Oberfläche und antwortet mit dem Monat:

| Knopf | Anfrage | Recht | Antwort |
|-------|---------|-------|---------|
| Monatsabschluss erstellen | `POST /api/timetracker/monthlyreport` mit `{"month": "JJJJ-MM-01"}` | `change_worktime` oder `change_absence` | 201 |
| Einträge aktualisieren | `POST /api/timetracker/monthlyreport/{id}/refresh` | `change_worktime` oder `change_absence` | 200 |
| Monat abschliessen | `POST /api/timetracker/monthlyreport/{id}/close` | `change_worktime` oder `change_monthlyreport` | 200 |
| Monat wieder eröffnen | `POST /api/timetracker/monthlyreport/{id}/reopen` | `change_worktime` oder `change_monthlyreport` | 200 |

Ohne das Recht antwortet die API mit 403 und dem Text «Du darfst Monatsabschlüsse nicht erstellen oder aktualisieren.» (erstellen, aktualisieren) bzw. «Du darfst Monate nicht abschliessen oder öffnen.» (abschliessen, öffnen). Bei den Standardgruppen darf `timetracker_admin` alle vier Knöpfe, `absences_admin` ebenfalls, `timetracker_users` keinen.

- **Erstellen:** `month` muss der Monatserste sein, sonst 400 mit «Gib den Monat mit seinem ersten Tag an, zum Beispiel 2026-10-01.». Gibt es den Monat schon, ergibt es 400 mit «Diesen Monat gibt es schon. Aktualisiere ihn mit der Aktion refresh.», ist er schon abgeschlossen, mit «Diesen Monat gibt es schon, er ist abgeschlossen. Eröffne ihn mit der Aktion reopen wieder, wenn du ihn aktualisieren willst.»; hat im Monat niemand eine Anstellung, ergibt es 400 mit «In diesem Monat hat niemand eine Anstellung. Es gibt keinen Monatsabschluss zu erstellen.». Alle vier Meldungen stehen im Feld `month`; bei `refresh`, `close` und `reopen` stehen die Meldungen in `non_field_errors`. Erstellen rechnet für alle Personen mit Anstellung im Monat oder im Folgemonat Stunden, Soll, Gleitzeit, Ferien und Krankheitstage. Es zählt alle erfassten Arbeitszeiten, auch ohne Freigabe, aber nur bewilligte Absenzen, und übernimmt den Saldo des Vormonats auch, wenn dieser offen ist. Auch ein laufender oder künftiger Monat lässt sich erstellen.
- **Aktualisieren:** rechnet alle Abschlüsse des Monats neu, auch wenn sich nur Arbeitszeiten oder Absenzen geändert haben. Im abgeschlossenen Monat ergibt es 400 mit «Dieser Monat ist abgeschlossen. Du musst ihn zuerst wieder eröffnen, bevor du die Einträge aktualisierst.». Dasselbe gilt für den Knopf in der Oberfläche.
- **Abschliessen:** rechnet nicht neu, setzt alle Abschlüsse und den Monat auf `approved` und summiert die Werte des Monats. Ab dann baut der aktuelle Gleitzeit- und Feriensaldo aller Personen auf diesem Monat auf, ausser ein späterer Monat ist schon abgeschlossen; der aktuelle Saldo baut immer auf dem jüngsten abgeschlossenen Monat auf. Jede Person sieht danach ihren Abschluss. Niemand wird benachrichtigt. Ist der Monat schon abgeschlossen, ergibt es 400 mit «Dieser Monat ist bereits abgeschlossen.».
- **Wieder eröffnen:** setzt den Monat und alle Abschlüsse auf `open`, die Werte bleiben. Ist der Monat nicht abgeschlossen, ergibt es 400 mit «Dieser Monat ist nicht abgeschlossen.». Spätere abgeschlossene Monate bleiben abgeschlossen und behalten ihren Übertrag, bis du sie wieder eröffnest und aktualisierst.
- **Gleichzeitige Anfragen:** Erstellen, Aktualisieren, Abschliessen, Wiedereröffnen und Löschen desselben Monats laufen nacheinander, egal ob aus der Oberfläche oder der API (auch «Monatsabschluss löschen» in der Oberfläche wartet auf die laufende Aktion).
- Arbeitszeiten und Absenzen in einem abgeschlossenen Monat bleiben änderbar; der Monat rechnet erst nach dem Wiedereröffnen und Aktualisieren neu.

Die Monatsabschlüsse der einzelnen Personen liest du in `/api/timetracker/monthlyclosing` (Filter `employee`, `month`, `month_from`, `month_to`); wer nur `view_monthlyclosing` hat, sieht den eigenen freigegebenen Abschluss. Dort korrigierst du mit `PATCH /api/timetracker/monthlyclosing/{id}` den Gleitzeit- und den Feriensaldo einer Person; dafür brauchst du das Recht `change_monthlyclosing`. Schreibbar sind nur drei Felder, jeweils auch in einem abgeschlossenen Monat:

- `flexitime_balance_correction`: Text `[-]H:MM` wie im Formular, zum Beispiel `08:30` oder `-04:15`; `[-]H:MM:00` (das Format, in dem die API liest) geht ebenfalls. Ein ungültiges Format ergibt 400 mit «Ungültiges Format. Bitte HH:MM eingeben (z.B. 08:30 oder -04:15)», Minuten ab 60 mit «Minuten dürfen nicht 60 oder höher sein». Ein leerer Text setzt die Korrektur auf 0 wie das leere Feld im Formular; soll sie bleiben, lass das Feld weg.
- `remaining_holidays_correction`: Tage als Dezimalzahl mit höchstens zwei Nachkommastellen, zum Beispiel `2.5`.
- `comment`: der Grund.

Eine Korrektur ersetzt den bisherigen Wert. Der Gesamtsaldo des Monats ändert sich sofort, in einem abgeschlossenen Monat auch der aktuelle Saldo der Person. Spätere Monate übernehmen die Korrektur erst, wenn du sie aktualisierst (im abgeschlossenen Monat nach dem Wiedereröffnen). Alle anderen Felder sind gesperrt: Ein unveränderter Wert geht durch, sodass du einen gelesenen Abschluss vollständig zurückschicken kannst; ein geänderter Wert ergibt 400 mit einem Hinweis je Feld. `state` setzt du für den ganzen Monat mit `close` und `reopen` («Den Status setzt du für den ganzen Monat mit den Aktionen close und reopen von timetracker/monthlyreport.»), `employee` und `month` lassen sich nicht ändern («Person und Monat eines Monatsabschlusses lassen sich nicht ändern.»), die gerechneten Felder rechnet ELIZA aus Arbeitszeiten und Absenzen («Diesen Wert rechnet ELIZA aus Arbeitszeiten und Absenzen. Ändere diese und aktualisiere den Monat mit der Aktion refresh von timetracker/monthlyreport.»). Löscht jemand in ELIZA den Monat, während die Korrektur auf das Löschen wartet, ergibt es 404. PUT ergibt 405. `DELETE` auf einen Monatsabschluss einer Person bleibt wie bisher in jedem Status möglich (Recht `delete_monthlyclosing`); wer das tut, unterbricht die Kette der Salden, und der Folgemonat startet beim nächsten Aktualisieren bei 0.

## Verträge

Vertragsmanagement und Partner.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/contracts/contract` | Verträge |
| `/api/contracts/folder` | Vertragsordner |
| `/api/contracts/partner` | Vertragspartner |
| `/api/contracts/type` | Vertragstypen |
| `/api/contracts/evaluation` | Partner-Bewertungen |
| `/api/contracts/periodicity` | Zahlungsperiodizitäten |
| `/api/contracts/valueflow` | Wertflüsse |

Legst du einen Vertragsordner unter einem Elternordner an, übernimmt er dessen Admins und Team, wie in der Oberfläche. Die Felder `admins` und `team` kannst du über die API nur lesen. Mit `folder` legst du einen Vertrag unter `/api/contracts/contract` in einem Ordner an oder verschiebst ihn dorthin, aber nur mit dem Recht, dort Verträge hinzuzufügen; einen Vertrag aus seinem Ordner herauszunehmen lehnt die API ab, ebenso einen Ordnerwechsel an einer Arbeitskopie (sie bleibt im Ordner ihres Originalvertrags).

## KPI / Kennzahlen

Key Performance Indicators verwalten.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/kpi/kpi` | KPI-Definitionen |
| `/api/kpi/folder` | KPI-Ordner |
| `/api/kpi/measurement` | KPI-Messungen |

Wie im Formular «Messung erfassen» setzt eine neue Messung das Datum der nächsten Messung der Kennzahl, sofern sie ein Wiedervorlagedatum oder eine Periodizität hat. Sende dazu beim Erfassen `next_date`. Ohne `next_date` rückt das Datum um eine Periode vor, wenn die neue Messung die jüngste der Kennzahl ist. Eine nachgetragene, ältere Messung ändert nichts, und ein POST auf eine bestehende Messung desselben Datums setzt das Datum nur mit gesendetem `next_date`. Im PATCH oder PUT ist `next_date` nicht erlaubt (Antwort 400).

## Prozesse

Prozessmanagement (BPMN).

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/process/process` | Prozesse |
| `/api/process/processsteps` | Prozessschritte |
| `/api/process/label` | Prozess-Labels |
| `/api/process/hilfsmittel` | Hilfsmittel |
| `/api/process/hilfsmittelart` | Hilfsmittel-Arten |
| `/api/process/periodizitaet` | Periodizitäten |

**Status nur über die Workflow-Endpunkte:** Das Feld `state` eines Prozesses ist nur lesbar. Beim Anlegen entsteht jeder Prozess als Entwurf (`draft`). Den Status änderst du mit `POST /api/process/process/{id}/transition` (`{"transition": "review", "comment": "…"}`); die möglichen Übergänge liefert `GET /api/process/process/{id}/available_transitions`. Eine Arbeitskopie eines freigegebenen Prozesses legst du mit `POST /api/process/process/{id}/create_workingcopy` an. Ein PATCH oder PUT mit einem anderen `state` wird mit HTTP 400 abgelehnt.

**Folgen eines Statuswechsels:** Wie im Workflow-Dialog schreibt jeder Statuswechsel über `transition` einen Workflow-Kommentar mit der Statuszeile («Status geändert: …», mit oder ohne `comment`) und trägt dich als Beitragende ein. Die Freigabe einer Arbeitskopie überträgt sie ins Original und legt die Kopie in den Papierkorb; `new_state` ist dann der Status des Originals. Benachrichtigt wird bei `transition` niemand: sie nimmt keine Empfänger an, die wählst du über `followup`. Fehlt dir das Recht für den Wechsel, antwortet sie mit HTTP 403 und einem übersetzten Hinweis unter `error`. Wie der Dialog lehnt `transition` die Einreichung zur Prüfung mit HTTP 400 unter `assigned_user` ab, wenn die gespeicherte zuständige Person nicht prüfen darf; dann änderst du zuerst die Zuständigkeit über `followup`.

**Frist und Zuständigkeit:** `deadline` und `assigned_user` sind beim Anlegen und Ändern gesperrt (HTTP 400 mit Hinweis auf die Aktion; ein unveränderter Wert geht durch, die gelesene Darstellung lässt sich also zurückschicken). Du änderst sie mit `POST /api/process/process/{id}/followup`, dem Workflow-Dialog der Oberfläche: `{"comment": "…", "deadline": "2030-01-31", "assigned_user": <Benutzer-ID>, "transition": "review", "notification_user_ids": [<Benutzer-ID>, …]}`, alle Felder optional; nicht gesendete Frist und Zuständigkeit bleiben. Dafür genügt wie in der Oberfläche das Leserecht am Prozess; einen Statuswechsel nimmt die Aktion nur an, wenn du ihn ausführen darfst; das prüft sie vor Zuständigkeit und Benachrichtigten (HTTP 403, wenn der Status ihn erlaubt und dir das Recht fehlt, sonst HTTP 400 unter `transition`). Zuständigkeit und Benachrichtigte kommen aus der Auswahl des Dialogs (Admins, Verantwortliche, Prüfende und Freigebende), andere Personen antworten wie eine unbekannte ID. Die gespeicherte Zuständigkeit bleibt stehen, auch wenn die Person nicht mehr zur Auswahl gehört (etwa deaktiviert). Im Verlauf stehen «Frist geändert» und «Zuständigkeit geändert»; die Gewählten erhalten eine Benachrichtigung, du selbst nicht. Die Antwort ist der Prozess, nach der Freigabe einer Arbeitskopie das Original.

**Formulare verknüpfen:** `formtemplates` an Prozess und Prozessschritt nimmt beim Anlegen und Ändern die IDs der Formular-Vorlagen (`/api/forms/template`) und ersetzt die Verknüpfungen als ganze Liste; sende also alle mit, die bleiben sollen. Wählbar sind wie im Bearbeitungsformular aktive Vorlagen und Entwürfe, die du siehst; eine archivierte oder für dich unsichtbare Vorlage beantwortet die API mit HTTP 400 wie eine unbekannte ID. Bereits verknüpfte Vorlagen lassen sich zurückschicken, auch archivierte. Verknüpfungen auf Vorlagen, die du nicht siehst, bleiben beim Speichern erhalten. Ist das Formular-Modul ausgeschaltet, nimmt die API keine neue Verknüpfung an und lässt die gespeicherten unverändert.

**Schritt verschieben:** Das Feld `prozess` eines bestehenden Prozessschritts ist beim Ändern gesperrt (HTTP 400, ein unveränderter Wert geht durch). Einen Schritt legst du mit `POST /api/process/processsteps/{id}/move` (`{"target_process": <Prozess-ID>}`) in einen anderen Prozess: wie in der Oberfläche landet er am Ende des Zielprozesses und ohne Verknüpfung zum Prozessdiagramm. Dafür brauchst du das Änderungsrecht an Quell- und Zielprozess; Schritte einer Arbeitskopie lassen sich nicht verschieben (HTTP 403), Zielprozesse ohne Recht, Arbeitskopien und der eigene Prozess antworten mit HTTP 400 unter `target_process`.

**Unterprozesse:** Mit `uebergeordneter_prozess` angelegt, übernimmt ein Prozess wie in der Oberfläche alle nicht gesendeten Felder des übergeordneten Prozesses (Nummer, Sichtbarkeit, Farben, Admins, Team, Organisationseinheiten, Funktionen; ein gesendeter Wert, auch `null`, gewinnt). Ohne Superuser-Recht bekommt er die Admins des übergeordneten Prozesses und dich; andere Admins in `admins` oder `admin_id` antworten mit HTTP 400.

## Formulare

Formularvorlagen und ausgefüllte Formulare.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/forms/folder` | Formular-Ordner |
| `/api/forms/template` | Formularvorlagen |
| `/api/forms/section` | Formular-Abschnitte |
| `/api/forms/question` | Vorlagen-Fragen |
| `/api/forms/choice` | Antwort-Optionen |
| `/api/forms/form` | Ausgefüllte Formulare |

**Folgeformulare:** `POST /api/forms/form/{uuid}/submit_answers` mit `"action": "submit"` führt wie die Oberfläche weiter. Die Antwort enthält den Schlüssel `follow_up`: `{"route": "none|case_end|existing|follow_up|select", "form": <uuid oder null>, "options": [{"uuid", "title", "rule_description"}], "message": <Hinweistext oder null>}`. Bei `follow_up` und `existing` ist `form` das Folgeformular, bei `case_end` ist der Fall am eingereichten Formular abgeschlossen (die Meldung ist erstellt), bei `select` wählst du aus `options`. Das gewählte Folgeformular startest du mit `POST /api/forms/form/{uuid}/follow_up_start` (`{"follow_up": "<uuid der Option>"}`, 201 mit dem neuen Formular, 200 mit dem bestehenden). Den Fall ohne Folgeformular schliesst du mit `POST /api/forms/form/{uuid}/follow_up_finish` ab (`{"finalized": true}`, bei einem weiteren Aufruf `false`). Beides geht erst, wenn das Formular abgeschlossen ist. Scheitert beim Abschluss eine Aktion (etwa das Erstellen der Meldung), antwortet die API mit HTTP 500 und der Fall bleibt offen, ein erneuter Aufruf schliesst ihn ab. Ein Folgeformular übernimmt die Anonymität des Startformulars, auch wenn seine eigene Vorlage keine anonyme Ausfüllung erlaubt.

## Issues / Tickets

Issue-Tracking und Tickets.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/issue/tracker` | Issue-Tracker |
| `/api/issue/issue` | Issues/Tickets |
| `/api/issue/category` | Issue-Kategorien |

**Meldekreise, Wissensartikel und Beilagen:** Den Status eines Meldekreises änderst du mit `POST /api/issue/tracker/{id}/archive` und `/reactivate`; ein PATCH oder PUT mit einem anderen `state` wird mit HTTP 400 abgelehnt. Ebenso lässt sich der Meldekreis eines Wissensartikels (`tracker_id`) nach dem Anlegen nicht mehr wechseln, und den Dateiinhalt einer Beilage (`file`) ersetzt du über die Aktion `replace`.

## Kompass / OKR

Objectives and Key Results sowie Managementbewertungen.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/okr/system` | OKR-Systeme |
| `/api/okr/period` | OKR-Perioden |
| `/api/okr/objective` | Objectives (Ziele) |
| `/api/okr/result` | Key Results |
| `/api/okr/update` | Updates/Check-ins |
| `/api/okr/review-item` | Bewertungsthemen einer Managementbewertung |

Für eine Managementbewertung stehen zusätzlich Aktionen auf der Periode zur Verfügung:

| Endpoint | Methode | Beschreibung |
|----------|---------|--------------|
| `/api/okr/period/{id}/apply_review_template` | POST | Zwölf ISO-9001-Standardthemen übernehmen |
| `/api/okr/period/{id}/copy_review` | POST | Ausgewählte Themen und optional sichtbare Nachweise aus einer früheren Bewertung kopieren |
| `/api/okr/period/{id}/reorder_review_items` | POST | Vollständige Themenreihenfolge konfliktbewusst speichern |
| `/api/okr/period/{id}/close_review` | POST | Bewertung abschliessen und unveränderbaren PDF-Nachweis erzeugen |
| `/api/okr/period/{id}/review_pdf` | GET | Dynamische Vorschau oder archivierten PDF-Nachweis mit API-Token herunterladen |

`copy_review` erwartet `source_period`, optional `item_ids` und `copy_evidence`. Ohne `item_ids` werden alle Themen der sichtbaren Quelle kopiert. Bewertungen, Trends, Datenstände, Auswertungen, Managemententscheide und Abschlussnachweise werden nie übernommen.

`reorder_review_items` erwartet alle `item_ids` in der gewünschten Reihenfolge. Mit `previous_item_ids` kann ein Client verhindern, dass eine zwischenzeitlich geänderte Reihenfolge überschrieben wird.

**Fortschritt und Bewertungsbeginn:** Der `progress` eines Updates (`/api/okr/update`) ist höchstens 100. Legst du ein Update mit `progress` an, wird dieser Wert auch der Fortschritt des Key Results; ein PATCH auf ein bestehendes Update ändert das Key Result nicht. Sobald ein Bewertungsthema eine `rating` bekommt (beim Anlegen oder Ändern), wechselt die Managementbewertung von «Vorbereitung» zu «in Bewertung».

## Streams / Events

Aktivitäten und Termine.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/stream/stream` | Aktivitäts-Streams |
| `/api/stream/messages` | Nachrichten |
| `/api/stream/event` | Termine/Events |
| `/api/stream/participant` | Event-Teilnehmer |

**Teilnahmen an Events:** Eine neue Teilnahme legst du wie mit «Hinzufügen» unter «Teilnehmende verwalten» mit `status` `invited` (einladen) oder `accepted` (direkt anmelden) an. Ist das Event ausgebucht, kommt eine direkte Anmeldung auf die Warteliste (`waitlisted`). Die Person bekommt dieselbe Benachrichtigung wie aus der Oberfläche, ohne Mitteilung. Ein anderer Status oder `participated` beim Anlegen gibt HTTP 400. Status und Anwesenheit einer bestehenden Teilnahme ändert nur, wer die Teilnehmenden des Events verwalten darf: `status` nur auf `accepted` oder `declined`, nur bis zum Beginn des Events und beim Zusagen nur mit freiem Platz. Die Anwesenheit (`participated`) lässt sich auch nach dem Beginn setzen. Verlangt das Event eine Unterschrift, bestätigst du deine eigene Anwesenheit in ELIZA mit deiner Unterschrift; die Anwesenheit anderer Personen setzt du über die API, die Unterschrift tragen sie selbst nach. Ein unverändert zurückgeschickter Wert geht immer durch.

## Tutorials

Lernplattform und Kurse.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/tutorial/folder` | Kurs-Ordner |
| `/api/tutorial/course` | Kurse |
| `/api/tutorial/lesson` | Lektionen |
| `/api/tutorial/section` | Abschnitte |
| `/api/tutorial/enrollment` | Einschreibungen |
| `/api/tutorial/lesson-progress` | Lernfortschritt |

Die Reihenfolge (`list_order`) ist in den Objekten nur lesbar. Zum Sortieren gibt es Aktionen auf dem übergeordneten Objekt:

| Endpoint | Methode | Beschreibung |
|----------|---------|--------------|
| `/api/tutorial/course/{id}/reorder_lessons` | POST | Reihenfolge der Lektionen der obersten Ebene eines Kurses |
| `/api/tutorial/lesson/{id}/reorder_sublessons` | POST | Reihenfolge der Unterlektionen einer Lektion |
| `/api/tutorial/lesson/{id}/reorder_sections` | POST | Reihenfolge der Abschnitte einer Lektion |

Alle drei erwarten `{"ids": [...]}` mit **allen** IDs der Ebene in der gewünschten Reihenfolge und antworten mit derselben Struktur. Eine Teilmenge, doppelte oder fremde IDs geben 400; nötig ist das Änderungsrecht auf Kurs bzw. Lektion.

Eine Anmeldung (`POST /api/tutorial/enrollment`) lädt ein wie die Oberfläche: Bei Status `invited`, `not_started` oder `in_progress` legt ELIZA für jede freigegebene Lektion des Kurses einen Lernstand «eingeladen» an, und die teilnehmende Person bekommt die Benachrichtigung «hat dich zum Kurs eingeladen» mit dem Text aus `message`. Mit `notify_users: false` entfällt die Benachrichtigung (Vorgabe `true`, auch ohne Feld in Formular-Anfragen); **Importe vieler Anmeldungen senden `notify_users=false`**, sonst bekommt jede Person eine Benachrichtigung samt Web-Push. Die Lernstände entstehen in jedem Fall. `notify_users` gilt nur beim Anlegen, bei PATCH oder PUT antwortet 400. Den Absender (`sender`) trägt ELIZA ein, nämlich die anlegende Person; eine andere Person gibt 400. Beim Wechsel auf `completed` berechnet ELIZA `next_due_date` aus der Periodizität des Kurses, sofern du keinen anderen Wert mitsendest.

Lernstände legst du mit `user_id` und `lesson_id` an (auch auf Unterlektionen) und änderst sie danach per PATCH oder PUT, ohne dass ein zweiter Eintrag entsteht; `lesson_id` und `user_id` bleiben dabei gesperrt (HTTP 400), einen anderen Lernstand legst du neu an. Wie in der Oberfläche wählst du nur dich selbst, ausser du hast das Änderungsrecht auf die Lektion. Den Absender (`sender`) setzt ELIZA nicht von selbst: erlaubt ist nur du selbst, ohne Angabe bleibt er leer; später lässt er sich nicht ändern. `state: "completed"` setzt du nicht direkt, weil dabei das Pflicht-Quiz zu prüfen ist. Dafür gibt es die Aktion:

| Endpoint | Methode | Beschreibung |
|----------|---------|--------------|
| `/api/tutorial/lesson-progress/{id}/complete` | POST | Schliesst den eigenen Lernstand ab (ohne Body). Nur die teilnehmende Person selbst; 400 bei fehlendem Pflicht-Quiz, bereits abgeschlossen oder «Keine Teilnahme» |

## Standards

Normen und Compliance.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/standards/standard` | Standards/Normen |
| `/api/standards/category` | Kategorien |
| `/api/standards/chapter` | Kapitel |

## SWOT / Risikomanagement

Massnahmen und Kontrollen.

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/swot/measure` | Massnahmen |
| `/api/swot/estimate` | Einschätzungen |
| `/api/swot/control` | Kontrollen |

Beim Anlegen einer Einschätzung setzt die API wie die Oberfläche die erfassende Person als Erfasser:in und das heutige Datum als Erfassungsdatum, sofern du die Felder nicht mitschickst; ein mitgeschicktes `null` bleibt leer. Gehört die Einschätzung zu einem Aspekt eines Managementsystems (IMS), wird sie dort automatisch verknüpft. Beim Anlegen einer Kontrolle werden die Checklisten der Massnahme in die Kontrolle kopiert.

## Weitere Module

| Endpoint | Beschreibung |
|----------|--------------|
| `/api/glossar/entry` | Glossareinträge |
| `/api/bot/aimodel` | KI-Modelle |
| `/api/bot/chat` | KI-Chat-Konversationen |
| `/api/bot/chatspace` | Chat-Spaces |
| `/api/bot/entry` | Chat-Einträge |
| `/api/bot/context_check` | Context-Prüfung |
| `/api/ims/system` | IMS-Systeme |
| `/api/ims/assetcategory` | Asset-Kategorien |
| `/api/ims/asset` | Assets |
| `/api/resources/resources` | Ressourcen |
| `/api/resources/allocations` | Ressourcen-Zuweisungen |
| `/api/businesscontext/interestedparty` | Interessierte Parteien |
| `/api/businesscontext/issuetype` | Issue-Typen |
| `/api/businesscontext/issue` | Business Context Issues |
| `/api/measuringtool/measuringtool` | Messinstrumente |
| `/api/crm/participation` | Beteiligungen an Vertrag, Projekt, Inventar, Karte oder Prüfmittel; Anlegen mit `parent_type` (z.B. `projects.project`) und `parent_id` |
| `/api/customgroup` | Benutzerdefinierte Gruppen |
| `/api/user` | Benutzer |

## CRUD-Operationen

Alle Endpoints unterstützen diese Operationen:

| Operation | HTTP-Methode | URL-Muster | Beispiel |
|-----------|--------------|------------|----------|
| Liste | GET | `/api/modul/ressource` | GET `/api/dms/document` |
| Detail | GET | `/api/modul/ressource/{id}` | GET `/api/dms/document/123` |
| Erstellen | POST | `/api/modul/ressource` | POST `/api/dms/document` |
| Aktualisieren | PUT/PATCH | `/api/modul/ressource/{id}` | PATCH `/api/dms/document/123` |
| Löschen | DELETE | `/api/modul/ressource/{id}` | DELETE `/api/dms/document/123` |

## Deprecated Endpoints

⚠️ Diese Endpoints sind veraltet und werden in zukünftigen Versionen entfernt:

| Alt | Neu |
|-----|-----|
| `/api/mitarbeitende` | `/api/organisation/mitarbeitende` |
| `/api/salary` | `/api/organisation/salary` |
| `/api/monthlyclosing` | `/api/timetracker/monthlyclosing` |

Die alten URLs funktionieren noch (HTTP 301 Redirect), aber bitte aktualisiere deinen Code.

## Nächste Schritte

→ [Datenformate]({{< ref "05-datenformate" >}}) - JSON-Struktur verstehen

→ [Swagger-UI](/api/schema/swagger-ui/) - Interaktive Dokumentation
