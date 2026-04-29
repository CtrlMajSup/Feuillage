# 🌿 Flora — Encyclopédie de Plantes Jekyll

Un site encyclopédique de plantes, moderne et minimaliste, construit avec Jekyll.

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
bundle install

# 2. Lancer le serveur local
bundle exec jekyll serve

# 3. Ouvrir http://localhost:4000
```

## 📁 Structure du projet

```
.
├── _config.yml          # Configuration Jekyll
├── _layouts/
│   ├── default.html     # Layout de base (header/footer)
│   ├── home.html        # Layout page d'accueil
│   └── plant.html       # Layout fiche plante
├── _includes/
│   ├── header.html      # En-tête du site
│   ├── footer.html      # Pied de page
│   └── plant-card.html  # Composant carte plante
├── _plants/             # 📂 Vos fiches plantes (.md)
│   ├── monstera.md
│   └── lavande.md
├── assets/
│   ├── css/main.css     # Styles principaux
│   ├── js/main.js       # Recherche, filtres, menu mobile
│   └── images/          # Photos des plantes
├── index.html           # Page d'accueil
├── plantes.html         # Page encyclopédie (grille + recherche)
└── a-propos.html        # Page à propos
```

## 🌱 Ajouter une plante

Créez un fichier `.md` dans `_plants/` avec ce front matter :

```yaml
---
layout: plant
title: Nom de la plante
latin_name: Nom latin
date: 2024-01-01
image: /assets/images/photo.jpg   # optionnel
tags:
  - Intérieur         # utilisé pour les filtres
  - Facile
famille: Famille botanique
origine: Pays / région
exposition: Plein soleil / Mi-ombre / Ombre
arrosage: Faible / Modéré / Élevé
difficulte: Facile / Moyen / Difficile   # colore le badge
hauteur: 30 à 60 cm
entretien:
  - Conseil 1
  - Conseil 2
excerpt: Description courte affichée sur la carte.
---

Votre contenu Markdown ici...
```

## 🎨 Personnalisation

Les variables CSS dans `assets/css/main.css` permettent de changer facilement les couleurs :

```css
:root {
  --color-accent:    #3d6b4f;   /* Vert principal */
  --color-bg:        #faf9f6;   /* Fond crème */
  --font-display:    'Cormorant Garamond'; /* Titres */
  --font-body:       'DM Sans';            /* Corps */
}
```

## 🌐 Déploiement GitHub Pages

```bash
# Dans _config.yml, renseignez :
baseurl: "/nom-de-votre-repo"
url: "https://votre-username.github.io"

# Puis activez GitHub Pages sur la branche main
```
