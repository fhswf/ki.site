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

### Wie kann ich git mit ssh verwenden?

Ihren Key können Sie über die JupyerLab-Oberfläche hochladen und in Ihr Home-Verzeichnis legen. Mit
```bash
ssh-add ~/.ssh/my_git_key
```
können Sie Ihren Key dem SSH-Dienst bekannt machen. Diesen Command müssen Sie selber ausführen, da ein Key üblicherweise Passwort geschützt ist.
Git sollte dann wie gewohnt funktionieren, allerdings kennt der SSH-Dienst nach dem Neustart der Umgebung den Key nicht mehr und muss mit dem Command erneut hinzugefügt werden. Sie können sich hierfür auch ein Alias in Ihrer .bashrc anlegen, wenn Sie den Pfad nicht jedesmal eingeben möchten:
```bash
echo "alias addkey='ssh-add ~/.ssh/my_git_key'" >> $HOME/.bashrc
```
Wenn der SSH-Dienst nicht laufen sollte, dann können Sie ihn manuell starten und anschließend den Key hinzufügen: 

```bash
eval `ssh-agent -s`
```

### Warum ist mein Training so langsam?

Bitte kontrollieren Sie, ob Ihr Training auf einer Grafikkarte läuft und wie derzeit die Auslastung des Systems ist.
In der Konsole über nvidia-smi und top bzw. htop. können Sie die derzeitige Auslastung Ihrer Umgebung einsehen.
Bendenken Sie, dass Sie nicht alleine auf den Knoten des Clusters arbeiten und gehen Sie verantwortungsvoll mit den verfügbaren Ressourcen um. 
Je nach Umgebung sind die verfügbaren Ressourcen gegebenfalls zusätzlich begrenzt. Datenvorverarbeitungsschritte sind oft ein häufiges Bottleneck und sollten vor dem Training stattfinden und nicht parallel während des Trainings. Erfahrungsgemäß verbraucht zum Beispiel der PyTorch Dataloader sehr viel Ressourcen und sollte bedacht eingesetzt werden bzw. konfiguriert werden.
</br>

### Wo kann ich die Auslastung des Clusters einsehen?

Aktuell arbeiten wir an einem schönen Dashboard auf der einsehbar ist welche Kapazitäten auf dem Cluster noch frei sind.
Bisher gibt es nur die Möglichkeit innerhalb der Umgebung über ein Terminal an einige begrenzte Informationen zu gelangen.
Über das Tool `nvidia-smi` können Sie die Auslastung der Grafikkarte(n) überprüfen. Leider kann das Tool durch interne Limitierungen die eigenen Prozesse (zum Beispiel ihr Python-Script) derzeit nicht den einzelnen Grafikkarten zuordnen; für einen Überblick reicht es aber dennoch.
```bash
watch -n 1 nvidia-smi  #% Nur in GPU Umgebungen verfügbar, zeigt Auslastung der verfügbaren GPUs (ohne Prozesse), aktualisiert alle 1 Sekunden. (Beenden über Strg+C)
```
Mit einem Tool wie `htop` oder `top` sehen Sie Ihre laufenden Prozesse, sowie dessen Ressourcenverbrauch. Die Angaben sind relative zu den gesammten Ressourcen des Knotens zu betrachten.
```bash
htop  #% Zeigt generelle Auslastung des gesammten Knotens auf dem Ihre Umgebung läuft, sowie ihre laufenden Prozesse. (Beenden über Strg+C)
```
</br>

### Kann ich fehlende Pakete nachinstallieren?
Für Python ist dies kein Problem. Alle Pakete können wie gewohnt über `pip` nachinstalliert werden. Bedenken Sie aber, dass nach einem Neustart der Umgebung die nachinstallierten Pakete ebenfalls weg sind und erneut nachinstalliert werden müssen.
Innerhalb eines Jupyter-Notebooks kann dies mit einem Ausrufezeichen erledigt werden, also zum Beispiel `!pip install fehlendesPythonPaket`.
</br>
ACHTUNG! Wenn Sie mit `pip install --user` ein Paket installieren, dann wird dieses nicht nach einem Neustart der Umgebung entfernt. Dies kann gewollt sein, allerdings können Sie sich eventuell einige Abhägigkeiten der Basisinstallation zerschießen. Speziell sollten Sie keine eigenen Versionen von pytorch, cuda und tensorflow installieren. 
</br>
Falls Ihre eigenen Installationen Probleme verursachen, dann müssen Sie die per  `pip install --user` installierten Pakete in Ihrem HOME-Verzeichnis unter `~/.local/lib/` löschen:
```shell
rm -r `~/.local/lib/python*`
```
</br>
Für apt-Pakete geht dies nicht, da Sie keine root-Rechte in Ihrer Umgebung haben. Einige Pakete die in klassichen apt-Repositories verfügbar sind gibt es eventuell auch über conda, also `conda install somePakage` könnte weiterhelfen.
Als erfahrene Anwender haben Sie in Unix-Umgebungen alternativ immer die Möglichkeit fehlende Abhängigkeiten per Hand zu installieren, indem Sie die Quelldateien herunterladen, kompilieren und zur `$PATH`-Variablen hinzufügen. 
</br>
Wenn Sie einen bestimmten Wunsch nach einem fehlenden Paket haben kontakieren Sie uns und wir kümmern uns darum.

### Brauche ich eine einge venv oder conda Umgebung?
Prinzipiell nein. Erfahrene Anwender können sich allerdings dennoch eigene Umgebungen in Ihrem HOME-Verzeichnis anlegen. Für korrekte Versionen der von CUDA und Nvidia abhängigen Pakete müssen Sie sich in Ihrer eigenen Umgebung dann selber kümmern. 
</br>
Wenn Sie die Basisinstallation der Umgebung in Ihrer eigenen venv mit verwenden möchten, dann müssen Sie bei der Erzeugung der venv das Flag `--site-packages` verwenden.
</br>

### Wie wechsel ich die GPU?
Wenn Sie eine dedizierte GPU auswählen, dann müssen Sie für die Auswahl einer anderen Ihre Umgebung einmal schließen und neustarten. Gehen Sie dafür unter dem Reiter `File` oben Links auf das `Hub Control Pannel` und stoppen Sie dort Ihre Umgebung.
</br>
Wenn Sie auf den den gemeinsam genutzten Grafikkarten sind, dann haben Sie ohne einen Neustart in Ihrer Umgebung die Möglichkeit zwischen den GPU auf den Knoten zu wechesln, indem Sie in Ihrem Python Notebook über die Umgebungsvariable `CUDA_VISIBLE_DEVICES` eine (oder auch mehrere) GPUs sichtbar zu schalten. Weisen Sie dazu einen Index zwischen 0 und 3 der Variablen zu. Dieser Index entspricht der Reienfolge der Grafikkarten wie diese auch von `nvidia-smi` angezeigt werden.
Hier ein Python Beipiel:
```Python
import os
os.environ["CUDA_VISIBLE_DEVICES"] = "0" # wählt GPU 3 aus 
```
</br>
Beim Start der DeepLearning-Umgebung wird die GPU ausgewählt, welche am meisten VRAM frei hat. Um diesen Prozess auch ohne Nuestart zu wiederholen können Sie ein Terminal öffnen und folgenden Befehl ausführen:
```bash
source /usr/local/bin/before-notebook.d/80_configure_cuda.sh
```