---
layout: ../layouts/Layout.astro
title: KI-Cluster der FH Südwestfalen
---
# Cluster für KI und  Data Science der Fachhochschule Südwestfalen 

Willkommen auf dem Cluster für KI und Data Science der FH Südwestfalen.

### Infrastruktur

Der Cluster bietet aktuell folgende Infrastruktur:
- 2 GPU-Server mit je 4 GPUs (NVIDIA A100 SMX, 80GB HBM2)
- 4 CPU-Server mit je zwei AMD EPYC 7532 Prozessoren (32 Kerne, 64 Threads)
- Hot Storage (24 x 3,84 TB NVMe SSDs)
- Cold Storage (36 x 16 TB HDDs)
- 100 Gbit Infiband
 
Derzeit sind alle Komponenten im Hause der Fachhochschule Südwestfahlen stationiert.
Als Orchestrierung Werkzeug wird Kubernetes eingesetzt.

## JupyterHub

Die primäre Anwendung, die derzeit auf dem Cluster läuft, ist das [JupyterHub](https://www.ki.fh-swf.de/jupyterhub). Hier können Sie sich mit Ihren Hochschulzugangsdaten anmelden und einen Containerisiertes JupyterLab starten. Je nach Umgebung haben Sie dort Zugang zu einer persistenten "ready to go" Entwicklungsumgebung. 

### Wartung

Der JupyterHub wird gelegentlich aktualisiert. Während dieser Zeit kann es sein, dass Ihr laufender Server, bzw. laufendes Image ebenfalls neugestartet wird.
Stellen Sie deshalb sicher, dass Sie Ihre Daten regelmäßig speichern. Die IPython-Notebooks sollten automatisch gesichert werden.

Ein regelmäßiges Wartungsfenster existiert derzeit an jedem Dienstag zwischen 10 und 12 Uhr.

### Images für JupyterHub

Für die Nutzung von JupyterHub wurden eigene Images erstellt, die auf den GPU-Servern und den CPU-Servern laufen und als Umgenungen den Nutzern zur Auswahl zur Verfügung stehen. Die Umgebungen sind auf die Bedürfnisse des Clusters angepasst und enthalten bereits die wichtigsten Pakete für Data Science, KI, DeepLearning und mehr. 

Wenn Sie eine eigene, angepasste Umgebungen benötigen, können Sie unter [github.com/fhswf/Jupyterhub-K8s](https://github.com/fhswf/Jupyterhub-K8s/issues) ein Issue erstellen. Bitte geben Sie dort an, welche besondere Anforderungen Sie haben, wie etwa spezielle Python-Pakete.

## Betrieb und Entwicklung

Für Feedback und Issues rund um den Cluster existiert ein weiteres (internes) Repository unter [github.com/fhswf/kicluster-deployments](https://github.com/fhswf/kicluster-deployments/issues) sowie ein [Projekt](https://github.com/orgs/fhswf/projects/6) auf Github.  

Der Cluster befindet sich aktuell noch in der Erprobungsphase. 

Wenn Sie Wünsche oder Anregungen haben, oder gegebenfalls den Cluster für Ihr Projekt an der Fachhochschule in der Lehre einsetzen möchten, dann wenden Sie sich gerne an uns!

