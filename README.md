# DjangoReactApp

## Description

DjangoReactApp est un mini projet qui démontre l'intégration du backend Django avec le frontend React. Il inclut une application CRUD (Create, Read, Update, Delete) simple construite avec Django REST framework et React.

## Fonctionnalités

- Créer, Lire, Mettre à jour et Supprimer des enregistrements via une interface web conviviale.
- Backend construit avec Django et Django REST framework pour gérer les opérations sur les données.
- Frontend construit avec React pour offrir une expérience utilisateur interactive.

## Installation

1. Cloner le dépôt :

git clone https://github.com/Awaa013/DjangoReactApp.git
cd DjangoReactApp

2. Installer les dépendances requises :
cd backend
pip install django djangorestframework

cd frontend
npm install

cd backend
python manage.py migrate
python manage.py runserver

Le serveur backend sera accessible à l'adresse `http://localhost:8000/`.

2. Lancer le frontend React :

cd frontend
npm start

Le serveur de développement React sera accessible à l'adresse `http://localhost:3000/`.

3. Ouvrir votre navigateur web et accéder à `http://localhost:3000/` pour utiliser l'application.

## Contribution

Les contributions sont les bienvenues ! Si vous trouvez des problèmes ou avez des suggestions d'améliorations, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence [MIT License](LICENSE).

