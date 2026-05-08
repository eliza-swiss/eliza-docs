---
category: "Dokumentenmanagement"
slug: "dms-approval-by-nur-funktion"
---

Hallo!

Bei der Verwendung von Dokumenten-Vorlagen mit Platzhaltern gab es bisher eine kleine Unschönheit: Die Variable `{document_approval_by}` zeigte die Funktion UND den Benutzernamen zusammen an, z.B. "QMB (Max Mustermann)". Das war nicht immer gewünscht, insbesondere auf gedruckten Dokumenten.

## Was ist neu?

Die Template-Variablen für die Freigabe sind jetzt sauber getrennt:

| Variable | Vorher | Neu |
|----------|--------|-----|
| `{document_approval_by}` | QMB (Max Mustermann) | **QMB** |
| `{document_approved_by}` | Max Mustermann | Max Mustermann *(unverändert)* |
| `{document_approval_by_code}` | QMB-001 | QMB-001 *(unverändert)* |

## Wie profitierst du davon?

- **Sauberere Dokumente**: Auf dem gedruckten Dokument steht nur die Funktion (z.B. "QMB"), nicht der Name der Person
- **Mehr Flexibilität**: Du entscheidest selbst, ob du Funktion, Name oder beides anzeigen möchtest
- **Professioneller Auftritt**: Besonders bei ISO-Audits wird oft nur die Funktion auf dem Dokument erwartet

## Wie verwendest du es?

In deiner Word-Vorlage kannst du die Variablen einzeln oder kombiniert verwenden:

- **Nur Funktion**: `{document_approval_by}` → "QMB"
- **Nur Name**: `{document_approved_by}` → "Max Mustermann"
- **Beides**: `{document_approval_by} ({document_approved_by})` → "QMB (Max Mustermann)"
- **Funktion + Code**: `{document_approval_by} [{document_approval_by_code}]` → "QMB [QMB-001]"

## 💡 Tipp

Prüfe deine bestehenden Word-Vorlagen: Falls du bisher `{document_approval_by}` verwendet hast und den Benutzernamen weiterhin anzeigen möchtest, ergänze einfach `({document_approved_by})` dahinter.