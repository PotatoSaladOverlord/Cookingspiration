# Cookingspiration

Cookingspiration est une plateforme de partage de recettes où les utilisateurs peuvent naviguer, créer et partager des recettes. La plateforme comprend un système de connexion utilisateur, une fonction de recherche de recettes et la possibilité pour les utilisateurs authentifiés d'ajouter leurs propres recettes.

## Fonctionnalités

- **Authentification des utilisateurs** : Les utilisateurs peuvent se connecter à la plateforme et créer des recettes.
- **Gestion des recettes** : Les utilisateurs peuvent ajouter, consulter et rechercher des recettes.
- **Interface utilisateur responsive** : Conçu pour être utilisé sur des appareils de bureau et mobiles.
- **Gestion des ingrédients** : Les utilisateurs peuvent ajouter et supprimer des ingrédients d'une recette.
- **Formulaires dynamiques** : Les champs du formulaire s'ajustent dynamiquement en fonction de l'entrée de l'utilisateur.

## Prérequis

- Node.js (version 16.x ou supérieure)
- Angular (version 15.x ou supérieure)

## Installation

### Cloner le Répertoire

```bash
git clone https://github.com/tonutilisateur/cookingspiration.git
cd cookingspiration
```

### Installer les Dépendances

Avant de pouvoir lancer l'application, vous devez installer les dépendances nécessaires. Pour ce faire, exécutez la commande suivante dans votre terminal à la racine du projet :

```bash
npm install
```

Cette commande va télécharger et installer toutes les bibliothèques nécessaires à partir du fichier package.json. Une fois l'installation terminée, vous pourrez démarrer le serveur de développement ou effectuer d'autres actions selon les besoins du projet.

### Lancer l'Application

Une fois les dépendances installées, vous pouvez démarrer l'application en utilisant la commande suivante :

```bash
npm start
```

Cette commande démarre le serveur de développement et vous permettra d'accéder à l'application via votre navigateur à l'adresse suivante : http://localhost:4200

L'application se rechargera automatiquement chaque fois que vous effectuerez des modifications dans les fichiers du projet.

## Fonctionnalités détaillées

### Authentification
- **Connexion/Inscription** : Les utilisateurs peuvent se connecter et s'inscrire via un formulaire.
- **Déconnexion** : Les utilisateurs connectés peuvent se déconnecter facilement.

### Gestion des Recettes
- **Ajouter une recette** : Les utilisateurs authentifiés peuvent ajouter des recettes avec des ingrédients, des étapes de préparation, et plus encore.
- **Modifier et supprimer** : Les utilisateurs peuvent modifier ou supprimer leurs recettes après les avoir ajoutées.

### Recherche de Recettes
- **Recherche par nom** : Les utilisateurs peuvent rechercher des recettes par nom.
- **Recherche par ingrédient** : La recherche par ingrédient permet de trouver des recettes qui contiennent cet ingrédient.
- **Recherche par région** : Les utilisateurs peuvent rechercher des recettes en fonction de la région.

### Responsivité
L'application est entièrement responsive et fonctionne sur des appareils mobiles, tablettes et ordinateurs de bureau.
