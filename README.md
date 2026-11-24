# QuizMaster – Application Web de Quiz Interactifs

[![React](https://img.shields.io/badge/React-19.0-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.2-ca4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_React-1.16-f59e0b?logo=lucide&logoColor=white)](https://lucide.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

QuizMaster est une application web moderne et responsive permettant aux utilisateurs d’évaluer, de développer et de mesurer leurs connaissances à travers des questionnaires interactifs chronométrés organisés par catégories.

Conçue dans un premier temps comme une SPA (Single Page Application) frontend autonome sans backend obligatoire, son architecture modulaire et découplée est spécifiquement pensée pour une migration transparente vers un backend Python FastAPI et une base de données relationnelle (PostgreSQL / MySQL).

---

## 📑 Table des Matières

1. [Fonctionnalités Principales](#-fonctionnalités-principales)
2. [Identité Visuelle & Expérience Utilisateur](#-identité-visuelle--expérience-utilisateur)
3. [Architecture Technique du Projet](#-architecture-technique-du-projet)
4. [Routes de l'Application](#-routes-de-lapplication)
5. [Modélisation des Données](#-modélisation-des-données)
6. [Installation & Démarrage](#-installation--démarrage)
7. [Évolutivité vers la Version 2 (FastAPI & PostgreSQL)](#-évolutivité-vers-la-version-2-fastapi--postgresql)

---

## 🚀 Fonctionnalités Principales

### 1. Page d'Accueil (`/`)
- En-tête héroïque avec présentation du concept et bouton direct **« Commencer un quiz »**.
- **Bannière de statistiques dynamiques** : décompte des catégories, quiz, questions rédigées et moyenne utilisateur.
- **Grille des 6 catégories officielles** avec icônes distinctives et compteurs de quiz.
- **Section des avantages clés** : défis chronométrés, correction pédagogique, suivi des performances, niveaux progressifs, autonomie locale.
- **Call-to-action final** et pied de page institutionnel.

### 2. Gestion des Catégories (`/categories` & `/categories/:id`)
- **6 disciplines majeures** : Informatique & Web, Culture Générale, Sciences & Nature, Histoire du Monde, Mathématiques & Logique, Géographie Mondiale.
- **Recherche réactive en direct** dans le catalogue complet.
- **Bannière thématique immersive** reprenant les couleurs et métadonnées de la catégorie.
- **Filtres par niveau de difficulté** : *Tous*, *Facile*, *Moyen*, *Difficile* avec compteurs dynamiques.

### 3. Interface de Questionnaire Interactif (`/quiz/:id`)
- **Épreuves dynamiques et imprévisibles** : À chaque lancement ou reprise de quiz, les questions sont piochées aléatoirement (*Fisher-Yates*) et les 4 propositions sont mélangées. Deux sessions sur le même quiz ne présentent jamais la même épreuve.
- **Volumes calibrés par difficulté** :
  - *Facile* : **5 questions** (5 minutes / 300 s)
  - *Moyen* : **10 questions** (10 minutes / 600 s)
  - *Difficile* : **20 questions** (20 minutes / 1200 s)
- Affichage séquentiel d'**une seule question à la fois**.
- Quatre propositions par question avec **sélection exclusive**.
- **Chronomètre en temps réel** avec compte à rebours précis et alerte visuelle sous les 60 secondes.
- **Arrêt automatique** et soumission instantanée dès expiration du temps.
- **Barre de progression fluide** avec ratio textuel (`Question X sur Y`) et compteur de réponses fournies.
- Conservation intégrale de l'état des réponses sélectionnées pendant toute la session.
- Boutons de navigation : *Question précédente*, *Question suivante*, et *Terminer le quiz* avec modale de confirmation.
- **Instantané fidèle pour la correction** : L'épreuve exacte générée pour la session est archivée pour garantir que `/correction/:id` affiche précisément les options et choix vécus par le joueur.

### 4. Bilan des Résultats (`/results/:id`)
- Calcul automatique : score, pourcentage de réussite, bonnes réponses, erreurs, temps consommé.
- **Appréciation qualitative adaptative** (*Excellent*, *Très bien*, *Encourageant*, *À retravailler*) avec badge coloré.
- Boutons d'action rapides : *Recommencer le quiz*, *Voir les corrections*, *Retourner à l'accueil*.

### 5. Correction Détaillée & Pédagogique (`/correction/:id`)
- Reprise de chaque question avec indication visuelle immédiate du statut (vert = réussi, rouge = erroné / non répondu).
- Distinction explicite entre le choix de l'utilisateur et la bonne réponse attendue.
- **Encadré d'explication pédagogique** pour chaque question.
- Système d'onglets de filtrage : *Toutes les questions*, *Réussies*, *Erreurs* pour cibler ses révisions.

### 6. Historique Persistant (`/history`)
- Stockage local sécurisé dans le `LocalStorage`.
- Historique complet de chaque partie avec date, score, durée, catégorie et niveau atteint.
- Suppression unitaire ou suppression globale sécurisée par modale de confirmation.
- Gestion d'état vide avec possibilité d'injecter des données de démonstration en un clic.

### 7. Tableau de Bord Statistique (`/dashboard`)
- **4 métriques fondamentales calculées dynamiquement** :
  1. Total de quiz réalisés
  2. Total de bonnes réponses
  3. Taux moyen de réussite global (%)
  4. Meilleur score personnel (%)
- **Jauges de répartition proportionnelle** des catégories les plus travaillées.
- Temps total d'entraînement cumulé et niveau d'expertise global.
- Flux des dernières activités récentes avec accès rapide aux bilans.

---

## 🎨 Identité Visuelle & Expérience Utilisateur

- **Palette de couleurs moderne :**
  - Couleur principale : Bleu nuit profond (`#090d16`, `#0f172a`, `#1e293b`).
  - Couleur secondaire & d'accentuation : Violet / Indigo vibrant (`#6366f1`, `#4f46e5`, `#8b5cf6`).
  - Surfaces claires & cartes : Blanc pur (`#ffffff`) et gris bleuté subtil (`#f8fafc`, `#f1f5f9`).
  - États sémantiques : Émeraude de réussite (`#10b981`), Rouge rubis d'erreur (`#ef4444`), Ambre d'avertissement (`#f59e0b`).
- **Typographie :** Polices Google Fonts *Outfit* (titrages premium) et *Inter* (lisibilité optimale du corps de texte).
- **Responsive design :** Interface fluide et adaptée aux smartphones, tablettes et ordinateurs de bureau.

---

## 📂 Architecture Technique du Projet

L'architecture respecte scrupuleusement la séparation des responsabilités imposée :

```
quizmaster/
├── public/
│   ├── logo.svg               # Logo vectoriel de QuizMaster
├── src/
│   ├── assets/                # Ressources graphiques et médias
│   ├── components/            # Composants réutilisables d'interface
│   │   ├── DynamicIcon.jsx    # Résolution dynamique et tree-shakable des icônes
│   │   ├── Navbar.jsx         # Navigation responsive desktop et mobile
│   │   ├── Footer.jsx         # Pied de page institutionnel
│   │   ├── CategoryCard.jsx   # Carte thématique de catégorie
│   │   └── QuizCard.jsx       # Carte de quiz avec métadonnées et difficulté
│   ├── pages/                 # Pages de l'application (vues)
│   │   ├── HomePage.jsx           # Accueil (5 sections imposées)
│   │   ├── CategoriesPage.jsx     # Catalogue avec recherche
│   │   ├── CategoryQuizzesPage.jsx# Quiz d'une catégorie avec filtres
│   │   ├── QuizPage.jsx           # Questionnaire interactif chronométré
│   │   ├── ResultsPage.jsx        # Bilan de fin de quiz
│   │   ├── CorrectionPage.jsx     # Correction détaillée et explications
│   │   ├── HistoryPage.jsx        # Historique et gestion des sessions
│   │   ├── DashboardPage.jsx      # Tableau de bord personnel
│   │   └── NotFoundPage.jsx       # Page d'erreur 404
│   ├── data/                  # Données indépendantes prêtes pour API
│   │   ├── categories.js      # Définition des 6 catégories
│   │   ├── quizzes.js         # Liste complète des quiz
│   │   └── questions.js       # Banque de questions avec 4 options & explications
│   ├── services/              # Couche d'accès aux données
│   │   └── storageService.js  # Service centralisé LocalStorage & calculs
│   ├── utils/                 # Fonctions utilitaires
│   │   ├── formatters.js      # Formatage temps, dates, appréciations, badges
│   │   └── random.js          # Moteur de tirage aléatoire et permutation Fisher-Yates
│   ├── App.jsx                # Point central du routeur React Router DOM
│   ├── main.jsx               # Point d'entrée React 19
│   └── index.css              # Charte graphique CSS3 complète et variables
├── index.html                 # Point d'entrée HTML5
├── package.json               # Configuration des dépendances et scripts
└── vite.config.js             # Configuration du bundler Vite
```

---

## 🗺️ Routes de l'Application

| Route | Page associée | Description |
|---|---|---|
| `/` | `HomePage` | Accueil, présentation, catégories phares, avantages et statistiques |
| `/categories` | `CategoriesPage` | Catalogue complet des 6 catégories avec recherche en temps réel |
| `/categories/:id` | `CategoryQuizzesPage` | Quiz de la catégorie choisie avec filtre par difficulté |
| `/quiz/:id` | `QuizPage` | Questionnaire interactif avec chronomètre et sauvegarde d'état |
| `/results/:id` | `ResultsPage` | Bilan synthétique du score, temps, appréciation et actions |
| `/correction/:id` | `CorrectionPage` | Correction détaillée question par question avec explications |
| `/history` | `HistoryPage` | Historique persistant des parties, filtres et suppression |
| `/dashboard` | `DashboardPage` | Tableau de bord statistique personnel et jauge de progression |
| `*` | `NotFoundPage` | Page 404 conviviale avec bouton de redirection vers l'accueil |

---

## 📊 Modélisation des Données

Chaque entité possède des champs standards conçus pour s'adapter directement à un schéma relationnel PostgreSQL / MySQL et à des schémas Pydantic FastAPI :

### Modèle Question
```json
{
  "id": "js-1",
  "quizId": "info-js-bases",
  "question": "Quelle est la différence fondamentale entre les mots-clés 'let' et 'var' en JavaScript ?",
  "options": [
    { "id": "A", "text": "'var' a une portée de bloc, tandis que 'let' a une portée de fonction." },
    { "id": "B", "text": "'let' a une portée de bloc, tandis que 'var' a une portée de fonction." },
    { "id": "C", "text": "'let' rend la variable immuable et impossible à réassigner." },
    { "id": "D", "text": "Il n’existe aucune différence de portée entre 'let' et 'var'." }
  ],
  "correctAnswer": "B",
  "explanation": "Introduit avec ES6, 'let' respecte la portée de bloc ({...}) contrairement à 'var' qui subit le hoisting."
}
```

---

## 💻 Installation & Démarrage

### Prérequis
- **Node.js** version 18.0 ou supérieure
- **npm** version 9.0 ou supérieure

### Instructions

1. **Cloner le dépôt ou naviguer dans le dossier du projet :**
   ```bash
   cd QuizMaster
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement local :**
   ```bash
   npm run dev
   ```
   L'application est accessible à l'adresse : `http://localhost:3000`

4. **Compiler pour la production :**
   ```bash
   npm run build
   ```

5. **Prévisualiser le build de production :**
   ```bash
   npm run preview
   ```

---

## 🔮 Évolutivité vers la Version 2 (FastAPI & PostgreSQL)

L'architecture actuelle a été conçue pour intégrer une API backend sans reconstruire le frontend :

```
QuizMaster V2 (Architecture Cible)
├── Frontend (React 19 / Vite)
│   └── src/services/apiService.js (remplace storageService par des requêtes REST)
└── Backend (Python FastAPI)
    ├── app/
    │   ├── api/routes/ (auth, categories, quizzes, questions, results)
    │   ├── models/     (SQLAlchemy / SQLModel)
    │   ├── schemas/    (Pydantic V2)
    │   └── core/       (sécurité JWT, base de données PostgreSQL)
```

### Endpoints REST prévus :
- `POST /api/auth/register` & `POST /api/auth/login` : Authentification JWT.
- `GET /api/categories` : Liste des catégories avec compteurs.
- `GET /api/categories/{id}/quizzes` : Quiz d'une catégorie donnée.
- `GET /api/quizzes/{id}/questions` : Questions d'un quiz pour l'interface de questionnaire.
- `POST /api/quizzes/{id}/submit` : Évaluation sécurisée côté serveur et enregistrement du score.
- `GET /api/users/me/history` : Historique synchronisé multi-appareils.
- `GET /api/users/me/dashboard` : Métriques et classements globaux (Leaderboard).

---

## 📄 Licence

Ce projet est sous licence MIT – libre de réutilisation académique, personnelle et professionnelle.
