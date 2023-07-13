---
layout: ../layouts/Layout.astro
key: faq
title: FAQ
---
# FAQ

## [JupyterHub](https://www.ki.fh-swf.de/jupyterhub)

### Werden meine Daten gespeichert?

Alle Daten in Ihrem privaten Home-Verzeichnis werden auf dem Storage-Cluster gespeichert. Zusätzlich haben Sie unter /home noch weitere Verzeichnisse für gemeinsame Daten. Diese werden ebenfalls auf dem Storage-Cluster persistiert. Bitte beachten Sie das wir keine garantie für Datansicherheit geben können. Sie sollte daher wichtige Daten und Dokumente zusätzlich sichern, zum Beispiel via GitHub.

### Was geschieht mit meiner Umgebung nach dem Logout?

Wenn Sie Ihre Umgebung über das JupyterLab Menü nicht eingeständig beenden wird Ihre Umgebung nach einigen Minuten Inaktivität automatisch beendet.
Laufende Programme, Scripte oder Trainings werden dabei unterbrochen. Sie sollten daher regelmäßige Checkpoints erstellen um das Training oder Ihr Programm verlustfrei vorsetzen zu können. Da Checkpoints von KI-Modellen relativ viel Speicehr verbrauchen, sollten Sie Ihr Home-Verzeichnis regelmäßig aufräumen.

Falls Sie Ihr Trainig länger laufen lassen wollen, dann lautet die derzeitige Empfehlung das Browserfenster während des Trainings offen zu halten.
Wir suchen noch nach guten alternativen dem Idle-Culler Ausnahmen mitteilen zu können.

### Kann ich auf die alten Daten auf jupiter zugreifen?

Ja.
Ihre alten Daten sind in zwei read-only Verzeichnissen unter /home/old* zu finden.
Das alte nfs shared-data Verzeichnis liegt auch dort.

### Warum ist mein Training so langsam?

Bitte kontrollieren Sie, ob Ihr Training auf einer Grafikkarte läuft und wie derzeit die Auslastung des Systems ist.
In der Konsole über nvidia-smi und top bzw. htop. können Sie die derzeitige Auslastung Ihrer Umgebung einsehen.
Bendenken Sie das Sie nicht alleine auf den Knoten des Clusters arbeiten und gehen Sie verantwortungsvoll mit den verfügbaren Ressourcen um. 
Je nach Umgebung sind die verfügbaren Ressourcen gegebenfalls zusätzlich begrenzt. Datenvorverarbeitungsschritte sind oft ein häufiges Bottleneck und sollten vor dem Training stattfinden und nicht parallel während des Trainings. Erfahrungsgemäß verbraucht zum Beispiel der PyTorch Dataloader sehr viel Ressourcen und sollte bedacht eingesetzt werden bzw. konfiguriert werden.