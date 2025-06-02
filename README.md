# My Fullstack App Chart

## Aufgabenbeschreibung

In dieser Aufgabe soll ein Kubernetes-Stack mit Helm erstellt werden, der aus einem Frontend, einem Backend und einer Datenbank besteht. Ziel ist es, die einzelnen Komponenten als Helm-Chart zu paketieren, korrekt zu deployen und so zu konfigurieren, dass die Anwendung im Cluster läuft. 

---

## Inhalt des Charts

- **Frontend:** Ein Reactbasiertes Web-Frontend, gebaut mit Node.js und ausgeliefert über Nginx.
- **Backend:** Node.js-Anwendung, die REST-API-Endpunkte bereitstellt.
- **Datenbank:** PostgreSQL als StatefulSet für persistente Speicherung.
- **ConfigMaps und Secrets:** Verwaltung von Konfigurationen und sensiblen Informationen (z.B. Datenbankpasswörter).
- **Service:** Kubernetes Services für die Kommunikation zwischen den Komponenten und zur Exposition des Frontends.

---

## Installation

Zum Installieren des Stacks im Kubernetes-Cluster Helm verwenden:

```bash
helm upgrade --install my-release-name .
```


---

## Aktualisierung

Bei Änderungen am Chart oder an den Konfigurationswerten einfach folgenden Befehl erneut ausführen:

```bash
helm upgrade my-release-name .
```

---

## Deinstallation

Um den Stack zu entfernen und alle Ressourcen zu löschen, nutze:

```bash
helm uninstall my-release-name
```
