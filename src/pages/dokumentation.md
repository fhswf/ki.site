---
layout: ../layouts/Layout.astro
key: dokumentation
title: Dokumentation KI-Cluster
---

# JupyterHub
[JupyterHub](https://www.ki.fh-swf.de/jupyterhub)

## Anmeldung 

**Mit FH-Kennung**
Wählen Sie die derzeit einzige Option zur Anmeldung auf der JupyterHub Seite aus und Sie werden an den Keycloak Service des Clusters weitergeleitet.

Wählen Sie "SSO Login mit FH Kennung" aus und Sie werden an den Login Service der IT-Services weitergeleitet. Im Fall der ersten Anmeldung über diesen Dienst werden Sie nach der Anmeldung einmalig gefragt, ob Sie der Datenweiterleitung zustimmen. Dies müssen Sie bestätigen. Die einzigen Daten, die wir von IT-Servies erhalten, sind Ihre FH Kennung, sowie E-Mail Addresse und Name. Diese geben wir natürlich nicht an Dritte weiter. 

Nach erfolgreicher Anmeldung sollten Sie über die automatische Weiterleitung wieder zurück auf den JupyterHub gelangen und können dort eine Umgebung auswählen.

**Über Moodle**

Eine direkte Anmeldung mit Moodle ist nicht möglich.
Moodlekurs-Administratoren können in Ihrem Kurs einen Login-Link anlegen, über den eine Umgebung in JupyterHub gestartet wird.
Der Login selbst funktioniert über die LTI-Schnitstelle automatisch, wenn der Nutzer im Moodle bereits angemeldet ist. 
Da die Nutzernamen im Moodle mit denen der IT-Services übereinstimmen, erhalten Nutzer dieselben Home-Verzeichnisse.

**Cluster intern**

Wählen Sie die derzeit einzige Option zur Anmeldung auf der JupyterHub Seite aus und Sie werden an den Keycloak Service des Clusters weitergeleitet.

Wählen Sie "Cluster Login" aus und Sie können sich an dem Keycloak Service des Clusters direkt anmelden. Ihre FH Kennung funktioniert hier nicht.
Diese Option ist dann für relevant, wenn Sie keine FH Kennung besitzen und ein Administrator des Cluster für Sie einen Login angelegt hat.

## VS Code

In den meisten Umgebungen ist eine Browser-Version von VS Code erhalten, diese können Sie genau so nutzen wie auch die Desktop-Version. 
Aus Lizenzgründen können wir leider keine Extensions aus dem offiziellen Microsoft Marketplace anbieten und greifen hier daher auf [Open VSX](https://open-vsx.org/) zurück. Extensions, die Sie installieren, werden pro Umgebung auf dem Cluster persisiert. 

Wenn Sie in Ihrer Umgebung einen WebServer starten, kann VS Code über einen Proxy nach außen verfügbar machen.
Bitte beachten Sie das der in VS Code eingabaute Browser lokal auf Ihrem eigenen Rechner läuft und nicht auf dem Cluster. Einige Funktionen sind daher nicht verfügbar.

## Images für JupyterHub

Wenn Sie ein eigenes, angepasstes Image benötigen, können Sie unter [github.com/fhswf/Jupyterhub-K8s](https://github.com/fhswf/Jupyterhub-K8s/issues) ein Issue erstellen. Bitte geben Sie dort an, welche besondere Anforderungen Sie haben, etwa spezielle Python-Pakete.

Letzendlich sind die Nutzerumgebungen Docker Images in denen ein JupyterLab-Server gestartet wird. Wenn Sie das nötige Know-How besitzen können Sie gerne auch selbst ein Dockerfile erstelllen und wir pflegen diesen dann in das Hub ein.

# FAQ

## Werden meine Daten gespeichert?

Alle Daten in Ihrem privaten Home-Verzeichnis werden auf dem Storage-Cluster gespeichert. Zusätzlich haben Sie unter /home noch weitere Verzeichnisse für gemeinsame Daten. Diese werden ebenfalls auf dem Storage-Cluster persistiert. Bitte beachten Sie das wir keine garantie für Datansicherheit geben können. Sie sollte daher wichtige Daten und Dokumente zusätzlich sichern, zum Beispiel via GitHub.

## Was geschieht mit meiner Umgebung nach dem Logout?

Wenn Sie Ihre Umgebung über das JupyterLab Menü nicht eingeständig beenden wird Ihre Umgebung nach einigen Minuten Inaktivität automatisch beendet.
Laufende Programme, Scripte oder Trainings werden dabei unterbrochen. Sie sollten daher regelmäßige Checkpoints erstellen um das Training oder Ihr Programm verlustfrei vorsetzen zu können. Da Checkpoints von KI-Modellen relativ viel Speicehr verbrauchen, sollten Sie Ihr Home-Verzeichnis regelmäßig aufräumen.

Falls Sie Ihr Trainig länger laufen lassen wollen, dann lautet die derzeitige Empfehlung das Browserfenster während des Trainings offen zu halten.
Wir suchen noch nach guten alternativen dem Idle-Culler Ausnahmen mitteilen zu können.

