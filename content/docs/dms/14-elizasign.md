---
title: "PDFs mit ELIZA Sign unterzeichnen"
description: "PDFs einfach, fortgeschritten oder qualifiziert (QES über eSignR und Mobile ID) elektronisch unterzeichnen"
weight: "14"
tags:
  - "elizasign"
  - "unterschrift"
  - "pdf"
  - "signaturauftrag"
  - "audit"
  - "dms"
  - "qes"
  - "esignr"
  - "mobile id"
icon: "draw"
---


# PDFs mit ELIZA Sign unterzeichnen

Mit **ELIZA Sign** kannst du bestehende PDF-Dokumente einfach elektronisch unterzeichnen lassen. Die sichtbare Unterschrift wird zusammen mit Name, E-Mail-Adresse, Zeitpunkt und einem dezenten ELIZA Sign-Siegel in eine neue PDF-Fassung eingebettet.

> **Wichtig:** Die einfache und die fortgeschrittene Signatur von ELIZA Sign sind keine zertifikatsbasierten qualifizierten Signaturen. Für eine **qualifizierte elektronische Signatur (QES)** wählst du beim Erstellen des Auftrags das Signaturniveau «Qualifizierte elektronische Signatur»; die Signatur bringt dann der Signaturdienst eSignR mit deiner Swisscom Mobile ID an (siehe Abschnitt «Qualifizierte elektronische Signatur (QES) über eSignR»).

## Voraussetzungen

Du kannst einen Signaturauftrag starten, wenn:

- das Modul **ELIZA Sign** für deine ELIZA-Instanz aktiviert ist,
- das angezeigte Dokument eine **PDF-Datei** ist,
- du der Systemgruppe **ELIZA Sign (Aufträge erstellen)** oder **ELIZA Sign (Admin)** angehörst,
- du das Quelldokument bearbeiten darfst und
- mindestens eine interne oder externe Person unterzeichnen soll.

Die Aktion **Einfach unterzeichnen** wird nur angezeigt, wenn diese Voraussetzungen erfüllt sind.

Administrierende können ELIZA Sign in der Modulverwaltung als Untermodul von **Dokumente (DMS)** aktivieren oder deaktivieren. Bei deaktiviertem DMS ist ELIZA Sign ebenfalls gesperrt. Das Deaktivieren löscht keine bestehenden Aufträge, Ergebnis-PDFs oder Nachweise; die ELIZA Sign-Seiten und Aktionen bleiben jedoch bis zur erneuten Aktivierung unzugänglich.

## Meine unterzeichneten Dokumente

In der linken Navigation unter **Dokumente** findest du den Eintrag **ELIZA Sign**. Die Seite **Meine unterzeichneten Dokumente** enthält drei Bereiche:

- **Zu unterzeichnen:** Aufträge, in denen du als interne Person eingetragen bist und deine Unterschrift noch aussteht. Bei einem sequenziellen Auftrag zeigt **Wartet**, dass zuerst eine andere Person unterzeichnen muss.
- **Unterzeichnet:** Dokumente, die du bereits unterzeichnet hast. Solange weitere Unterschriften fehlen, wird dies ausdrücklich angezeigt. Das fertige Ergebnis lässt sich öffnen, sobald der gesamte Auftrag abgeschlossen ist.
- **Von mir erstellt:** Signaturaufträge, die du selbst gestartet hast und weiterhin sehen darfst.

Die Übersicht zeigt ausschliesslich deine persönlichen Teilnahmen und die von dir erstellten, weiterhin zugänglichen Aufträge. Fremde Signaturaufträge werden nicht offengelegt.

Zum Unterzeichnen eines persönlich zugewiesenen Auftrags ist keine zusätzliche ELIZA Sign-Systemgruppe nötig. Die sichere Berechtigung entsteht durch die persönliche Zuweisung im Signaturauftrag. Die Gruppe **ELIZA Sign (Aufträge erstellen)** erlaubt das Erstellen eines Auftrags, ersetzt aber nicht das Bearbeitungsrecht am konkreten Quelldokument. **ELIZA Sign (Admin)** ergänzt die Verwaltungsberechtigung für sichtbare Aufträge.

## Signaturauftrag erstellen

1. Öffne das gewünschte PDF-Dokument in ELIZA.
2. Wähle im PDF-Viewer **Einfach unterzeichnen**.
3. Lege die Reihenfolge fest:
   - **Parallel:** Alle eingeladenen Personen können unabhängig voneinander unterzeichnen.
   - **Nacheinander:** Die Personen werden in der festgelegten Reihenfolge aufgefordert.
4. Wähle interne ELIZA-Benutzende aus.
5. Ergänze bei Bedarf externe Personen mit Vorname, Nachname und E-Mail-Adresse.
6. Wähle **Snapshot fixieren und Auftrag starten**.

ELIZA erstellt beim Start einen unveränderbaren PDF-Snapshot und zeigt dessen SHA-256-Prüfsumme an. Das ursprüngliche Dokument wird beim Start nicht überschrieben.

## Interne und externe Personen

### Interne Personen

Interne Personen erhalten eine ELIZA-Benachrichtigung mit dem persönlichen Link zum Signaturauftrag. Sie öffnen den Auftrag mit ihrem eigenen ELIZA-Konto.

### Externe Personen

Externe Personen erhalten eine persönliche E-Mail-Einladung. Der Link ist zeitlich begrenzt und kann nur für die eingeladene Person verwendet werden. Nach dem Abschluss erhalten externe Personen einen separaten, ebenfalls zeitlich begrenzten Zugang zum fertigen Ergebnis.

> **Sicherheit:** Leite persönliche Einladungs- oder Ergebnislinks nicht an andere Personen weiter.

## Dokument prüfen und unterzeichnen

Die eingeladene Person führt folgende Schritte aus:

1. PDF im integrierten Viewer vollständig prüfen.
2. Eine Unterschrift erstellen oder auswählen:
   - direkt zeichnen,
   - aus dem Namen oder Kürzel erzeugen,
   - ein PNG-, JPG- oder WebP-Bild hochladen oder
   - einen bereits gespeicherten persönlichen Unterschrifts-Badge verwenden.
3. Die Unterschrift auf der gewünschten PDF-Seite positionieren und in der Grösse anpassen.
4. Optional einen Ort eintragen.
5. Die angezeigte SHA-256-Prüfsumme des konkreten Dokuments bestätigen.
6. **Dokument bestätigen und unterzeichnen** wählen.

Alternativ kann die eingeladene Person die Unterschrift ablehnen. ELIZA protokolliert auch diese Entscheidung im Signaturauftrag.

### Persönliche Unterschrifts-Badges

Angemeldete Personen können bis zu 20 persönliche Unterschrifts-Badges speichern und wiederverwenden. Die Badges sind privat und nur für die jeweilige Person sichtbar. Beim Unterzeichnen übernimmt ELIZA einen unveränderbaren Snapshot des ausgewählten Badges in das Signaturereignis.

## Auftrag verfolgen und abbrechen

Öffne einen selbst erstellten Auftrag unter **Dokumente → ELIZA Sign → Von mir erstellt**. Die Detailansicht zeigt den aktuellen Auftragsstatus, die beteiligten Personen, deren Bearbeitungsstand sowie die Prüfwerte des fixierten Snapshots und – nach dem Abschluss – des Ergebnis-PDFs.

Die erstellende Person oder ein Mitglied der Gruppe **ELIZA Sign (Admin)** kann einen noch laufenden Auftrag über **Signaturauftrag abbrechen** beenden, sofern das Quelldokument für diese Person sichtbar ist. Bereits abgeschlossene, abgelehnte oder abgelaufene Aufträge lassen sich nicht nachträglich abbrechen. Entscheidungen und Statusänderungen bleiben im Auditprotokoll nachvollziehbar.

> **Tipp:** Wenn sich das Quelldokument geändert hat oder eine falsche Person eingeladen wurde, brich den laufenden Auftrag ab und starte für die korrekte PDF-Fassung einen neuen Auftrag.

## Was im PDF sichtbar ist

Jede eingebettete Unterschrift enthält:

- die gezeichnete, erzeugte oder hochgeladene Unterschrift,
- den Namen der unterzeichnenden Person,
- deren E-Mail-Adresse,
- das serverseitige Datum und die Uhrzeit,
- den optional angegebenen Ort und
- das dezente **ELIZA Sign-Siegel** mit der Einordnung **Einfache Unterschrift**.

Das Siegel ist ein sichtbares Gestaltungselement. Es ist kein amtliches Siegel, kein persönliches Zertifikat und keine qualifizierte PDF-Signatur.

## Abschluss und Ablage im DMS

Sobald alle erforderlichen Personen unterzeichnet haben, erstellt ELIZA das vollständig unterzeichnete Ergebnis-PDF. Der ursprüngliche Snapshot bleibt erhalten, das DMS bleibt vorerst unverändert.

Wo das unterzeichnete PDF hinkommt, entscheidest du danach selbst: In der Detailansicht des Auftrags wählst du **Unterzeichnetes PDF ablegen**. Je nach Quelle stehen diese Ablagearten zur Wahl:

- **Als neue Version im Dokument** (nur bei Aufträgen aus einem DMS-Dokument): Die vorherige Fassung bleibt in der Versionshistorie verfügbar.
- **Als neues Dokument im gleichen Ordner** (nur bei Aufträgen aus einem DMS-Dokument): ELIZA legt einen Entwurf an und verknüpft ihn mit dem Ursprungsdokument.
- **Als neues Dokument in einem anderen Ordner**: ELIZA legt einen Entwurf im gewählten Ordner an. Bei hochgeladenen Dateien und Vorlagen ist das die einzige Ablageart.

Zur Auswahl stehen nur Ordner, in denen du im DMS Dokumente hinzufügen darfst, zum Beispiel als Ordner-Admin. Darfst du auf keine dieser Arten ablegen, fehlt der Knopf; das unterzeichnete PDF kannst du trotzdem herunterladen.

Wenn das DMS-Dokument nach dem Start des Auftrags verändert wurde, überschreibt ELIZA die neuere Fassung nicht. Die Ablage als neue Version wird dann abgelehnt.

Ergebnisse aus Verträgen legt ELIZA beim Abschluss automatisch als neue Version der Vertragsdatei ab.

Berechtigte Personen können in der Detailansicht des Signaturauftrags das Ergebnis-PDF und das Auditprotokoll herunterladen. Interne Personen, die unterzeichnet haben, erhalten ebenfalls eine persönliche Ergebnisansicht.

## Nachweis und Integritätsprüfung

ELIZA Sign erzeugt zum Ergebnis einen geschützten **ELIZA Sign-Nachweis** als separate `.sig.json`-Datei. Dieser Nachweis:

- bindet das vollständige Ergebnis-PDF über SHA-256,
- enthält Auftrag, beteiligte Personen, Ereignisse und serverseitige Zeitpunkte,
- wird mit einem installationsbezogenen Ed25519-Schlüssel geschützt und
- kann von berechtigten verwaltenden Personen exportiert werden.

Der Nachweis schützt die Zuordnung und Integrität des Ergebnis-PDFs. Er ersetzt keine persönliche Zertifikatssignatur der unterzeichnenden Person.

## Status im PDF-Viewer

Der PDF-Viewer unterscheidet zwei Fälle:

- **Mit ELIZA Sign unterzeichnet:** Das gerade angezeigte PDF stimmt exakt mit dem abgeschlossenen Ergebnis überein.
- **Unterzeichnetes Ergebnis vorhanden:** Für das Quelldokument existiert ein Ergebnis, aber im Viewer wird nicht exakt diese PDF-Fassung angezeigt.

Diese Unterscheidung verhindert, dass eine frühere oder andere PDF-Version irrtümlich als unterzeichnet markiert wird.

## Qualifizierte elektronische Signatur (QES) über eSignR

Wenn deine ELIZA-Instanz dafür eingerichtet ist, bietet der Schritt **Signaturniveau** beim Erstellen eines Auftrags die Karte **Qualifizierte elektronische Signatur (QES)**. Die Signatur wird dann nicht von ELIZA, sondern vom Signaturdienst **eSignR** mit der **Swisscom Mobile ID** der unterzeichnenden Person angebracht. ELIZA verwaltet den Auftrag, die Reihenfolge, die Position im Dokument und das Auditprotokoll und übernimmt das signierte PDF unverändert.

### Voraussetzungen für die unterzeichnende Person

- ein eigenes **eSignR-Konto** mit eingerichteter Mobile ID,
- ein persönlicher **Zugangscode**, erstellt in der eSignR-Webapp,
- Vor- und Nachname **genau wie im Pass**.

Das gilt für interne und externe Personen gleichermassen. Externe Personen erhalten die gewohnte E-Mail-Einladung mit dem Hinweis auf das benötigte eSignR-Konto. QES-Aufträge werden immer **nacheinander** unterzeichnet.

### Ablauf auf der Signierseite

Die eingeladene Person öffnet den Auftrag wie gewohnt über die Benachrichtigung oder den persönlichen Link. Die Signierseite trägt oben rechts die Kennzeichnung **Qualifiziert (QES) via eSignR und Mobile ID** und führt durch folgende Schritte:

1. Prüfe das Dokument im Viewer, blättere und zoome bei Bedarf.
2. Ziehe den grün gestrichelten Platzhalter **eSignR · QES** an die Stelle, an der der Signaturblock erscheinen soll, und passe die Grösse mit dem Regler an. Der Platzhalter zeigt nur die Position; den Signaturblock selbst gestaltet eSignR. Bei gedrehter Ansicht zeichnet eSignR in der Originalausrichtung der Seite.
3. Prüfe bzw. ergänze deine eSignR-Angaben:
   - **eSignR-Konto**: Als interne Person meldest du dich immer mit der E-Mail-Adresse deines ELIZA-Kontos an; ELIZA zeigt sie nur an («eSignR-Konto: …»). Externe Personen geben ihren **eSignR-Benutzernamen** selbst ein.
   - **Persönlicher eSignR-Zugangscode**: erstellt in der eSignR-Webapp; das Feld wird beim Start sofort geleert. Hast du deinen Zugangscode in ELIZA hinterlegt, entfällt das Feld, und es steht **Zugangscode hinterlegt** mit dem Link **Ändern** (siehe [Zugangscode hinterlegen](#zugangscode-hinterlegen)).
   - **Vorname und Nachname genau wie im Pass** (vorbefüllt aus deinem Profil bzw. der Einladung).
4. Ergänze optional Ort und Kommentar und bestätige das Dokument mit der angezeigten SHA-256-Prüfsumme.
5. Klicke auf **Mit Mobile ID qualifiziert signieren**. Ein Statuspanel zeigt die Schritte **Bei eSignR anmelden**, **Dokument an eSignR übermitteln**, **Signatur starten**, **In der Mobile-ID-App bestätigen** und **Signiertes PDF übernehmen** und markiert sie fortlaufend.
6. Sobald die Signatur gestartet ist, erscheint im Panel der **sechsstellige Code** (z.B. `v3JHTH`) mit der verbleibenden Wartezeit. Vergleiche ihn mit der Anzeige in der Mobile-ID-App auf deinem Handy und bestätige dort. Der Code wechselt bei jedem Versuch.
7. Nach der Bestätigung holt ELIZA das signierte PDF von eSignR, übernimmt es als neue Fassung und leitet dich zur Ergebnisseite weiter. Der ganze Vorgang dauert typischerweise unter einer Minute.

Wie bei den anderen Signaturniveaus kannst du die Unterschrift mit **Unterschrift ablehnen** und einem Kommentar verweigern; die Ablehnung wird protokolliert.

Der Zugangscode wird nur für die Anmeldung bei eSignR verwendet und nie protokolliert. Gespeichert wird er nur, wenn du ihn selbst hinterlegst, und dann verschlüsselt. Bleib während des Vorgangs auf der Seite: Das Sitzungsmerkmal, mit dem ELIZA bei eSignR nachfragt, existiert nur in deinem Browser.

### Zugangscode hinterlegen

Als interne Person kannst du deinen persönlichen Zugangscode einmal in ELIZA hinterlegen. Danach fragt die Signierseite nicht mehr danach; jede Signatur bestätigst du weiterhin selbst in der Mobile-ID-App.

1. Öffne dein **Benutzerprofil** (Avatar oben rechts) und klicke auf **eSignR-Zugang hinterlegen**. Alternativ führt der Link **Für künftige Signaturen hinterlegen** auf der Signierseite oder der Eintrag **Mein eSignR-Zugang** im Menü von ELIZA Sign zur selben Seite.
2. Gib im Feld **Persönlicher eSignR-Zugangscode** deinen Code aus der eSignR-Webapp ein und klicke auf **Hinterlegen**.
3. Du kommst dorthin zurück, wo du gestartet bist, also ins Profil oder zum Dokument.

Der Weg über das Profil funktioniert auch, wenn du ELIZA Sign sonst nur zum Signieren nutzt und keinen Zugriff auf die Übersicht hast. Im Profil zeigt die Zeile **eSignR-Zugang**, ob ein Code hinterlegt ist, seit wann und wann ELIZA ihn zuletzt verwendet hat; der Knopf heisst dann **eSignR-Zugang verwalten**. Dort kannst du den Code mit **Ersetzen** austauschen oder mit **Entfernen** löschen.

Gut zu wissen:

- ELIZA speichert den Code verschlüsselt und zeigt ihn nie wieder an, auch nicht Administrierenden.
- Den hinterlegten Code verwendet ELIZA nur, wenn du selbst einen Auftrag signierst, zu dem du eingeladen bist. Gibst du auf der Signierseite trotzdem einen Code ein, hat dieser Vorrang.
- Erzeugst du in der eSignR-Webapp einen neuen Zugangscode, wird der alte ungültig. Lehnt eSignR den hinterlegten Code ab, weist die Fehlermeldung darauf hin; hinterlege dann den neuen Code.
- Externe Personen können keinen Code hinterlegen; sie geben ihn bei jeder Signatur ein.

### Versuche, Abbruch und Neustart

Jeder Start auf der Signierseite ist ein eigener **Versuch**. Die Detailseite des Auftrags (**Dokumente → ELIZA Sign → Von mir erstellt**) listet pro Person alle Versuche mit Nummer, Zeitpunkt, Mobile-ID-Code und Status:

- **Mobile-Bestätigung ausstehend** / **Wird verarbeitet**: Der Versuch läuft; die Person muss noch auf dem Handy bestätigen bzw. ELIZA holt das Ergebnis ab.
- **Abgeschlossen**: Das signierte PDF wurde übernommen.
- **Zeitüberschreitung**: Die Bestätigung in der Mobile-ID-App ist nicht innerhalb von fünf Minuten erfolgt.
- **Abgelehnt**: Die Signatur wurde in der Mobile-ID-App abgelehnt oder abgebrochen.
- **Fehlgeschlagen**: eSignR hat einen Schritt zurückgewiesen (z.B. falscher Zugangscode, Profil nicht vorhanden, Dokument mit ungültigen Bestandssignaturen). ELIZA zeigt den Grund in bereinigter Form an.
- **Ergebnis unbestimmt**: Die Seite wurde während des Wartens verlassen oder der Vorgang mit **Abbrechen** beendet, ohne dass das Ergebnis von eSignR vorlag.
- **Durch neuen Versuch ersetzt**: Ein offener Versuch wurde durch einen späteren Start abgelöst.

Auf der Signierseite beenden **Abbrechen** (während des Wartens) und **Erneut versuchen** (nach einem Fehler) den laufenden Versuch; das Formular ist danach wieder frei, und ohne hinterlegten Zugang wird der Zugangscode erneut abgefragt. Wer die Seite später wieder öffnet, sieht einen Hinweis auf den letzten nicht abgeschlossenen oder fehlgeschlagenen Versuch und kann direkt einen neuen starten. Erst ein abgeschlossener Versuch schliesst die Person ab; alle früheren Versuche bleiben im Auditprotokoll erhalten.

> **Tipp:** Wenn ein Versuch mit «Fehlgeschlagen» endet, lohnt sich ein Blick auf den angezeigten Grund. Ein falscher Zugangscode oder ein fehlendes Signaturprofil lässt sich in der eSignR-Webapp beheben; einen hinterlegten Code ersetzt du unter **eSignR-Zugang verwalten** im Profil. Danach einfach einen neuen Versuch starten.

### Was im PDF und im Nachweis steht

Der von eSignR gezeichnete Signaturblock an der gewählten Position enthält:

- **Name** der unterzeichnenden Person, wie er im persönlichen Zertifikat steht (bei einem zweiten Vornamen also der vollständige Passname),
- **Datum und Uhrzeit** der Signatur,
- die **Deklaration** «Qualifiziert elektronisch signiert über ELIZA Sign»,
- als **Kontakt** den eSignR-Benutzernamen und
- den **Ort**, falls du einen angegeben hast.

Dahinter steht die **qualifizierte Signatur (PAdES, SIG-CH)** mit dem persönlichen Zertifikat, ausgestellt über Swisscom. ELIZA bettet bei QES keinen eigenen Badge ein und verändert das signierte PDF nicht; die Prüfsumme des Ergebnisses entspricht exakt der von eSignR gelieferten Datei. Die Gültigkeit der Signatur prüfst du im PDF-Programm (z.B. Adobe Acrobat) anhand des Zertifikats. Unterschreiben mehrere Personen nacheinander, signiert jede das jeweils aktuelle Ergebnis; das PDF trägt am Ende alle Signaturen.

Der Abschluss läuft wie bei den anderen Niveaus: Du legst das Ergebnis selbst im DMS ab (siehe [Abschluss und Ablage im DMS](#abschluss-und-ablage-im-dms)), das Original bleibt erhalten, Ergebnis und **sig.json** stehen zum Download bereit. Das sig.json führt zusätzlich alle eSignR-Versuche mit Dokument- und Prozess-IDs, Prüfsummen und Signaturzählern, aber nie Zugangscodes oder Sitzungsdaten. Es ist das Auditprotokoll mit Instanzsiegel, nicht die qualifizierte Signatur selbst.

### Einrichtung durch Administrierende

QES ist standardmässig ausgeschaltet. Für die Aktivierung braucht es die Einstellung **ELIZASIGN_QES_ENABLED**, die eSignR-Umgebung in der Serverkonfiguration (`ESIGNR_BASE_URL` und `ESIGNR_ALLOWED_HOST`) sowie den Namen des eSignR-Signaturprofils (**ELIZASIGN_QES_PROFILE_NAME**, Standard «standard»). Ohne konfiguriertes Backend erscheint die QES-Karte nicht.

Damit Personen ihren Zugangscode hinterlegen können, braucht die Serverkonfiguration zusätzlich einen eigenen Schlüssel `ELIZASIGN_CREDENTIAL_KEYS` (Fernet-Schlüssel, pro Installation ein eigener; erzeugen mit `manage.py rotate_esignr_credentials --generate-key`). Ohne Schlüssel zeigt die Seite «Mein eSignR-Zugang» den Hinweis «nicht eingerichtet», das Profil zeigt nichts, und der Code wird bei jeder Signatur abgefragt. Zum Wechseln des Schlüssels den neuen vorne in die Liste setzen, den alten dahinter belassen und `manage.py rotate_esignr_credentials` ausführen.

## QR-Echtheitsprüfung und PAdES-Plattformsiegel

Bei **einfachen (EES)** und **fortgeschrittenen (FES)** Unterschriften können zwei voneinander unabhängige Nachweise eingeschaltet werden:

- **QR-Code im sichtbaren Stempel:** Nach dem Scannen zeigt eine öffentliche Prüfseite zunächst nur Status, Signaturniveau und Anzahl Unterschriften. Wenn du das fertige PDF auf der Prüfseite auswählst, berechnet dein Browser lokal dessen SHA-256-Prüfsumme. Nur wenn sie mit dem gespeicherten Ergebnis übereinstimmt, werden Dokumenttitel und Unterzeichnende angezeigt. Die Datei selbst wird nicht hochgeladen. Gib den QR-Link nur weiter, wenn der öffentliche Status des Auftrags sichtbar sein darf.
- **PAdES-Plattformsiegel:** Nach der letzten EES-/FES-Unterschrift erhält das fertige PDF ein zusätzliches Zertifikatssiegel der ELIZA-Sign-Installation. Ein PDF-Programm wie Adobe Reader kann spätere Änderungen erkennen. Das Zertifikat gehört der Plattform, nicht der unterzeichnenden Person; es macht aus einer EES oder FES keine QES. Ein selbst ausgestelltes Testzertifikat wird nicht automatisch als vertrauenswürdig angezeigt. Ein Fehler beim Versiegeln blockiert die Unterschrift nicht, wird aber im Auditprotokoll festgehalten.

**Einrichtung:** Als Superadministrator öffnest du **Module → ELIZA Sign → Einstellungen**. Dort lässt sich der **QR-Code zur Echtheitsprüfung** (`ELIZASIGN_VERIFICATION_QR_ENABLED`) ein- oder ausschalten. Er ist bei neuen Installationen standardmässig aktiv; ein bereits gespeicherter abweichender Wert bleibt erhalten und kann hier geändert werden. Das **PAdES-Plattformsiegel** (`ELIZASIGN_PADES_ENABLED`) bleibt standardmässig aus und wird ausschliesslich unter **Constance → DMS** aktiviert. Dafür muss vorab ein PKCS#12-Zertifikat auf dem Server unter `ELIZASIGN_PADES_PKCS12_PATH` und gegebenenfalls `ELIZASIGN_PADES_PKCS12_PASSWORD` eingerichtet werden; ein Zeitstempeldienst (`ELIZASIGN_PADES_TSA_URL`) ist optional. Diese Geheimnisse lassen sich nicht in der Moduloberfläche bearbeiten. DMS und ELIZA Sign müssen ebenfalls aktiviert sein. Die Einstellungen gelten für neue Signaturen; bestehende PDFs erhalten nachträglich weder QR-Code noch Siegel. QES verwendet weiterhin die Signaturen von eSignR.

## Häufige Fragen

### Warum sehe ich «Einfach unterzeichnen» nicht?

Prüfe, ob ELIZA Sign aktiviert ist, ob du der Systemgruppe **ELIZA Sign (Aufträge erstellen)** oder **ELIZA Sign (Admin)** angehörst, ob die Datei ein PDF ist und ob du das Dokument bearbeiten darfst. Ohne Modulzugriff, Gruppenberechtigung oder Änderungsrecht kannst du keinen neuen Signaturauftrag starten.

### Kann ich einen laufenden Auftrag nach einer Dokumentänderung weiterverwenden?

Nein. ELIZA bindet den Auftrag an den fixierten Snapshot. Bei einer zwischenzeitlichen Änderung musst du den Konflikt klären und für die aktuelle Fassung einen neuen Auftrag starten.

### Wird das Original-PDF überschrieben?

Nein, nicht automatisch. Nach Abschluss entscheidest du, ob das unterzeichnete PDF als neue Version oder als neues Dokument abgelegt wird; bei einer neuen Version bleibt die Ausgangsfassung in der Historie erhalten.

### Was passiert, wenn ein externer Link abgelaufen ist?

Ein abgelaufener Einladungs- oder Ergebnislink kann nicht weiterverwendet werden. Die externe Person wendet sich an die Person, die den Signaturauftrag gestartet hat. Persönliche Links dürfen nicht weitergegeben oder gemeinsam verwendet werden.

### Warum brauche ich für die QES einen eSignR-Zugangscode?

Eine qualifizierte Signatur ist rechtlich deine persönliche Unterschrift. eSignR verlangt deshalb zwei Dinge, die nur dir gehören: den **Zugangscode** deines Kontos (Wissen), mit dem ELIZA den Vorgang in deinem Namen starten darf, und die **Mobile ID** auf deinem Handy (Besitz), mit der du die Signatur freigibst. Ohne den Code könnte jede Person, die deine E-Mail-Adresse kennt, Signaturanfragen auf dein Handy auslösen. Den Code erstellst du einmalig in der eSignR-Webapp und bewahrst ihn wie ein Passwort auf. ELIZA speichert ihn nur, wenn du ihn unter [Zugangscode hinterlegen](#zugangscode-hinterlegen) selbst hinterlegst, und dann verschlüsselt.

### Ist ELIZA Sign eine qualifizierte elektronische Signatur?

Die einfache und die fortgeschrittene Signatur nicht: Sie dokumentieren eine Unterschrift mit sichtbarem PDF-Badge, Auditdaten und Integritätsnachweis. Auch ein optionales PAdES-Plattformsiegel ändert das Signaturniveau nicht. Mit dem Signaturniveau **Qualifizierte elektronische Signatur (QES)** bringt der Signaturdienst eSignR eine qualifizierte Signatur mit Mobile ID an — siehe Abschnitt «Qualifizierte elektronische Signatur (QES) über eSignR».

### Was tun, wenn der Mobile-ID-Code nicht ankommt?

Prüfe, ob die Mobile-ID-App auf deinem Handy aktiv ist und ob der angezeigte Code übereinstimmt. Läuft die Wartezeit ab, endet der Versuch als «Zeitüberschreitung»; starte danach einen neuen Versuch. Bleibt das Problem bestehen, liegt es meist am eSignR-Konto oder an der Mobile-ID-Einrichtung, nicht an ELIZA.

### Ein QES-Versuch ist fehlgeschlagen — was nun?

Die Detailseite des Auftrags und die Signierseite zeigen den von eSignR gemeldeten Grund in bereinigter Form. Bei «Benutzername oder Zugangscode nicht akzeptiert» prüfst du die Angaben oder erstellst in der eSignR-Webapp einen neuen Zugangscode; bei «Signaturprofil nicht vorhanden» wendest du dich an die Administration. Danach startest du auf der Signierseite einfach einen neuen Versuch; frühere Versuche bleiben nachvollziehbar im Auditprotokoll.

## Nächste Schritte

- **[Kapitel 6: Versionierung und Historie]({{< ref "06-versionierung" >}}):** Ausgangs- und Ergebnisversion nachvollziehen
- **[Kapitel 7: Berechtigungen und Zugriff]({{< ref "07-berechtigungen" >}}):** Dokumentrechte verstehen
- **[Kapitel 10: Best Practices und FAQ]({{< ref "10-best-practices" >}}):** Dokumentenprozesse sauber organisieren
