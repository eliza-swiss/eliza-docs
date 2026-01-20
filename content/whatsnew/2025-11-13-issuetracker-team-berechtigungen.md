---
title: "Verbesserte Team-Berechtigungen im Issue-Tracker"
date: 2025-11-13
slug: "issuetracker-team-berechtigungen"
emoji: "🔐"
---

Liebe ELIZA-Nutzerin, lieber ELIZA-Nutzer

Wir haben die Berechtigungslogik im Issue-Tracker optimiert, damit du als Team-Mitglied noch besser mit neuen und ausstehenden Issues arbeiten kannst.

## Was ist neu?

Bisher konnten nur Administratoren und Contributors neue oder ausstehende Issues in "normalen" Trackern sehen. Das hat die Zusammenarbeit im Team manchmal erschwert.

Jetzt gelten diese klaren Regeln für die Sichtbarkeit von neuen und ausstehenden Issues:

- **Normale Tracker**: Alle Team-Mitglieder können neue und ausstehende Issues sehen und bearbeiten
- **Team-Tracker**: Nur Team-Mitglieder des spezifischen Teams haben Zugriff
- **Private Tracker**: Nur Administratoren und Contributors sehen die Issues
- **Tracker-Administratoren**: Mit der entsprechenden Berechtigung siehst du immer alle Issues

## Wie profitierst du davon?

Diese Verbesserung bringt dir konkrete Vorteile:

- Du siehst neue Issues in normalen Trackern sofort, ohne erst als Contributor hinzugefügt werden zu müssen
- Die Team-Zusammenarbeit wird einfacher, weil alle relevanten Issues für dein Team sichtbar sind
- Du kannst schneller auf neue Aufgaben reagieren und musst nicht auf Freigaben warten
- Die Berechtigungslogik ist jetzt einheitlicher und transparenter

## Wie nutzt du die verbesserten Berechtigungen?

Die neue Logik funktioniert automatisch im Hintergrund. Du musst nichts ändern:

1. Öffne deinen Issue-Tracker wie gewohnt
2. Neue und ausstehende Issues in normalen Trackern sind jetzt für dich als Team-Mitglied sichtbar
3. Du kannst direkt mit der Bearbeitung beginnen, ohne auf Administrator-Rechte zu warten
4. Die Sichtbarkeit privater oder team-spezifischer Tracker bleibt wie bisher geschützt

## Tipps für die optimale Nutzung

- **Team-Organisation**: Nutze "normale" Tracker für allgemeine Zusammenarbeit im Team
- **Vertrauliche Issues**: Verwende weiterhin "private" Tracker für sensible Themen
- **Team-spezifische Aufgaben**: Team-Tracker bleiben ideal für dedizierte Team-Projekte
- **Übersicht behalten**: Mit den klaren Berechtigungsregeln weisst du immer, welche Issues für dich relevant sind

## Technischer Hintergrund

Falls es dich interessiert: Wir haben die `has_view_permission()` Methode im Issue-Modell optimiert. Die neue Logik unterscheidet jetzt präziser zwischen den verschiedenen Tracker-Typen und Benutzerrollen. Team-Mitglieder erhalten dadurch automatisch die passenden Zugriffsrechte für normale Tracker.

---

*Dein ELIZA-Team* 🐢
