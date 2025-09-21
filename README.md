# Nzela Dashboard

Nzela Dashboard est une application web moderne conçue pour la gestion et la visualisation des signalements d'infrastructures urbaines en République Démocratique du Congo (RDC). Elle offre une interface intuitive et responsive, intégrant une carte interactive, des tableaux de bord, et des fonctionnalités avancées pour le suivi, l'affectation et la résolution des signalements.

## Fonctionnalités principales
- **Carte interactive (Leaflet.js)** : Visualisation géographique des signalements sur la carte de la RDC.
- **Tableaux de bord dynamiques** : Statistiques, affectations, utilisateurs, notifications, paramètres.
- **Signalements** : Filtrage, gestion, et suivi des signalements par catégorie, statut, commune et date.
- **Navigation moderne** : Sidebar, header, dark/light mode, design glassmorphism, responsive.
- **Progressive Web App (PWA)** : Installation sur mobile, splash screen, manifest, service worker.
- **Modularité** : Code JavaScript modulaire, organisation claire des assets (images, icônes, scripts).

## Structure du projet
- `index.html` : Page d'accueil et dashboard principal
- `pages/` : Pages dédiées (signalements, carte, affectation, statistiques, utilisateurs, notifications, paramètres)
- `assets/js/` : Scripts JavaScript modulaires
- `assets/img/` et `assets/icons/` : Images et icônes
- `manifest.json` et `service-worker.js` : Fichiers PWA

## Technologies utilisées
- HTML5, CSS3 (Tailwind CSS)
- JavaScript (modulaire)
- Leaflet.js
- PWA (manifest, service worker)

## Installation
1. Cloner le dépôt :
   ```bash
   git clone https://github.com/jordanluemba/nzela-dashboard.git
   ```
2. Ouvrir le dossier dans VS Code ou un éditeur compatible.
3. Lancer un serveur local (ex : Live Server) pour profiter des fonctionnalités PWA et de la carte.

## Auteur
Jordan Luemba

## Licence
Ce projet est open-source sous licence MIT.