# 🌿 FLORA - Installation et utilisation

## 📥 Installation

### 1. Extraire l'archive
Décompresse `flora-jekyll.tar.gz` où tu veux installer ton site :
```bash
tar -xzf flora-jekyll.tar.gz -C mon-site-flora
cd mon-site-flora
```

### 2. Installer Jekyll (si pas déjà fait)
```bash
# Sur Ubuntu/Debian
sudo apt install ruby-full build-essential

# Sur macOS
brew install ruby

# Installer bundler
gem install bundler
```

### 3. Installer les dépendances du projet
```bash
bundle install
```

### 4. Lancer le serveur local
```bash
bundle exec jekyll serve
```
→ Ton site est visible sur **http://localhost:4000** 🎉

---

## 🌱 Ajouter une plante

### Créer un fichier dans `_plants/`
Exemple : `_plants/basilic.md`

```yaml
---
layout: plant
title: Basilic
latin_name: Ocimum basilicum
date: 2024-01-25
image: /assets/images/basilic.jpg
tags:
  - Aromatique
  - Intérieur
  - Facile
  - Cuisine
famille: Lamiaceae
origine: Asie tropicale
exposition: Plein soleil
arrosage: Régulier
difficulte: Facile
hauteur: 20 à 50 cm
entretien:
  - Arroser régulièrement sans noyer
  - Pincer les sommités pour favoriser la ramification
  - Éviter les courants d'air froid
excerpt: Le basilic est l'herbe aromatique incontournable de la cuisine méditerranéenne, facile à cultiver en pot.
---

## Description

Le basilic (*Ocimum basilicum*) est une plante annuelle...

## Entretien

### Lumière
Le basilic a besoin de beaucoup de lumière...
```

### Ajouter l'image
Place tes photos dans `assets/images/` :
- Format : `.jpg`, `.png`, `.webp`
- Résolution recommandée : 800x600px minimum
- Nom : `nom-de-plante.jpg`

---

## 🏷️ Système de tags

### Tags multiples
Tu peux mettre autant de tags que tu veux :
```yaml
tags:
  - Intérieur
  - Extérieur
  - Tropical
  - Méditerranéen
  - Plante grasse
  - Aromatique
  - Facile
  - Moyen
  - Difficile
  - Cuisine
  - Médicinale
  - Décorative
```

**Le système gère automatiquement :**
- La liste des tags est générée dynamiquement
- Les filtres permettent de **combiner plusieurs tags** (ex : Intérieur + Facile + Aromatique)
- Défilement automatique si + de 20 tags
- Recherche par nom en temps réel

---

## 🎨 Personnalisation des couleurs

Édite `assets/css/main.css` (lignes 11-18) :

```css
:root {
  --color-bg:         #faf9f6;   /* Fond crème */
  --color-surface:    #ffffff;   /* Cartes */
  --color-border:     #e8e4dc;   /* Bordures */
  --color-text:       #1a1a18;   /* Texte principal */
  --color-text-soft:  #6b6b63;   /* Texte secondaire */
  --color-accent:     #3d6b4f;   /* Vert principal - CHANGE ICI */
  --color-accent-lt:  #e8f0eb;   /* Vert clair */
  --color-accent-dk:  #2a4d38;   /* Vert foncé */

  --color-easy:       #3d6b4f;   /* Badge Facile */
  --color-medium:     #b87333;   /* Badge Moyen */
  --color-hard:       #8b3a3a;   /* Badge Difficile */
}
```

---

## 🌐 Déploiement GitHub Pages (gratuit)

### 1. Créer un dépôt GitHub
- Va sur github.com
- Nouveau repo : `flora-encyclopedie`
- Ne pas initialiser avec README

### 2. Configurer `_config.yml`
```yaml
baseurl: "/flora-encyclopedie"
url: "https://ton-username.github.io"
```

### 3. Pusher le code
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ton-username/flora-encyclopedie.git
git push -u origin main
```

### 4. Activer GitHub Pages
- Settings → Pages
- Source : `main` branch
- Save

Ton site sera en ligne sur : **https://ton-username.github.io/flora-encyclopedie** ✨

---

## 📂 Structure des fichiers

```
.
├── _config.yml              # Config Jekyll
├── _layouts/
│   ├── default.html         # Layout de base
│   ├── home.html            # Page d'accueil
│   └── plant.html           # Fiche plante
├── _includes/
│   ├── header.html
│   ├── footer.html
│   └── plant-card.html      # Carte plante (grille)
├── _plants/                 # ⬅️ TES FICHES ICI
│   ├── monstera.md
│   ├── lavande.md
│   └── basilic.md
├── assets/
│   ├── css/main.css         # Styles
│   ├── js/main.js           # Recherche/filtres
│   └── images/              # ⬅️ TES PHOTOS ICI
│       ├── monstera.jpg
│       ├── lavande.jpg
│       └── basilic.jpg
├── index.html               # Accueil
├── plantes.html             # Grille + recherche
└── a-propos.html            # À propos
```

---

## ✨ Fonctionnalités incluses

✅ **Recherche en temps réel** (par nom de plante)  
✅ **Filtres multi-tags** (combine plusieurs catégories)  
✅ **Responsive** (mobile, tablette, desktop)  
✅ **Design minimaliste moderne**  
✅ **Fiches détaillées** avec infos rapides  
✅ **Navigation fluide**  
✅ **Menu mobile**  
✅ **Défilement des tags** si beaucoup de catégories  

Bon jardinage ! 🌿
