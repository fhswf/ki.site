---
layout: ../layouts/Layout.astro
title: KI-Cluster der FH Südwestfalen
---
# KI und  Data Science an der FH Südwestfalen 

Willkommen auf dem Cluster für KI und Data Science der FH Südwestfalen.
Der Cluster befindet sich aktuell noch im Aufbau. Derzeit kann ein JupyterLab – wahlweise mit GPU-Unterstützung – genutzt werden.


## Anmeldung (im *Testbetrieb*)

Die Anmeldung erfolgt über das [JupyterHub](https://www.ki.fh-swf.de/jupyterhub). Hier können Sie sich mit Ihren Hochschulzugangsdaten anmelden und einen JupyterLab-Server starten.

Eine Integration mit Moodle (= die Studierenden können direkt aus Moodle heraus ein JupyterLab starten) ist in Arbeit.

## Infrastruktur

Der Cluster bietet aktuell folgende Infrastruktur:
- 2 GPU-Server mit je 4 GPUs (NVIDIA A100)
- 4 CPU-Server mit je zwei AMD EPYC 7532 Prozessoren (32 Kerne, 64 Threads)
- Hot Storage (24 x 3,84 TB NVMe SSDs)
- Cold Storage (36 x 16 TB HDDs)

## Angepasste Images für JupyterLab

Für die Nutzung von JupyterLab wurden eigene Images erstellt, die auf den GPU-Servern und den CPU-Servern laufen. Die Images sind auf die Bedürfnisse des Clusters angepasst und enthalten bereits die wichtigsten Pakete für Data Science und KI. 

Wenn Sie ein eigenes, angepasstes Image benötigen, können Sie unter [github.com/fhswf/kicluster-deployments/issues](https://github.com/fhswf/kicluster-deployments/issues) einen Issue erstellen. Bitte geben Sie dort an, welche besondere Anforderungen Sie haben, etwa spezielle Python-Pakete.
Wir werden dann versuchen, ein angepasstes Image zu erstellen.