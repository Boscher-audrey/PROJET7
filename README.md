# Projet 7 - Kasa

Ce projet a été réalisé avec [Create React App](https://github.com/facebook/create-react-app) par Audrey Boscher.

## Visuels du projet fini

- Accueil
  ![Home](https://github.com/Boscher-audrey/PROJET7/blob/master/public/README/Home.jpg?raw=true)

- A propos
  ![About](https://github.com/Boscher-audrey/PROJET7/blob/master/public/README/About.png?raw=true)

- Propriété
  ![Property](https://github.com/Boscher-audrey/PROJET7/blob/master/public/README/Property.png?raw=true)

- Erreur
  ![Error](https://github.com/Boscher-audrey/PROJET7/blob/master/public/README/Error.png?raw=true)

## Lancement du projet

Pour lancer le projet, il vous faudra cloner ce repo sur votre machine locale en cliquant sur le bouton <> Code et de copier la ligne de code - proposée selon l'option choisie (HTTPS / SSH / GitHub Cli) - dans votre terminal.

A la suite de ça, voici quelques scripts qui vous seront utiles :

### `npm install` / `yarn install`

Permet d'installer toutes les dépendances nécessaires pour faire tourner le projet correctement.

### `npm start` / `yarn start`

Lance l'application en local dans le navigateur en mode developpement à l'adresse suivant : [http://localhost:3000](http://localhost:3000)
**Note : Veuillez à bien vérifier qu'aucune autre instance du `port 3000` ne tourne en même temps, autrement l'application risque de ne pas se lancer.**
**Ou choisissez de lancer l'application sur un autre port si le terminal le propose.**

## Architecture du projet

### yarn.lock

Le projet ayant été installé avec `yarn`, c'est le fichier qui contient toutes les données dépendances installées dont leur version.
Si vous decidez de l'installer avec `npm`, le fichier correspondant sera `package-lock.json`.

### package.json

Fichier qui contient les metadata du projet lues par `npm` ou `yarn` dont les scripts et les dépendances à installer.
Il peut également contenir la version du projet, son nom et autres informations sur l'application.

### prettier.rc

Fichier prettier pour la mise en forme du code.

### public

Dossier qui contient les fichiers statiques tels que l'index ou les images qui ne seront pas compilées par l'application.

### src

Dossier coeur du projet qui contient tous les fichiers nécessaire à l'affichage et au traitement des informations.

- index.jsx

Fichier qui englobe l'application et contient les routes de celle-ci.

- assets

Dossier qui contient les images du projet.

- pages

Dossier qui contient les pages uniques de l'application.

- components

Dossier qui contient les composants réutilisables dans les différentes pages de l'application.

- data

Dossier qui contient les données brutes au format json.

- styles

Dossier qui contient le style avec une feuille pour chaque page / composant.

- utils

Dossier qui contient les fonctions génériques à l'application.
Ici j'y ai mis les styles globaux au projet.

## Les différentes routes

- [http://localhost:3000](http://localhost:3000) renvoi vers l'`Accueil`.
- [http://localhost:3000/about](http://localhost:3000/about) renvoi vers la section `A propos`.
- [http://localhost:3000/property/:id](http://localhost:3000/about) renvoi vers une page de `Propriété` en fonction de son id.
- Toute autre route non définie ici sera automatiquement transférée vers la page d'`Erreur`, y compris un id de propriété non existant.

## En apprendre d'avantage

Vous pouvez en apprendre plus sur [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Pour ce qui est de react, allez sur [React documentation](https://reactjs.org/).
