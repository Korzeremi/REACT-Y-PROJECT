# Y-PROJECT
## TIMELINE
### Partie Réflexion
J'ai commencé par créer un repo git pour stocker mon projet puis j'ai créé dans ce repo deux dossiers :
- back, qui va gérer l'ensemble du côté serveur avec l'installation de cors, express et bcryptjs
- front, qui va gérer l'app avec React

Dans un premier temps, je vais commencer par réfléchir à la structure de ma base de données et aux différentes tables et lignes qu'elle devra contenir. Une fois la réflexion de la DB effectuée, je vais commencer à réfléchir à comment créer mon API pour gérer toute mon app.  
  
### BACK
#### Base de données  
Avant toute chose, je vais réflechir à la structure de ma DB. Pour cela, j'utilise une feuille pour y mettre l'ensemble des tables et des données qui me seront nécessaires puis j'utilise le logiciel looping afin de pouvoir générer un script SQL à partir d'un modèle MCD. Voici la première version de la DB (vous pouvez retrouver le fichier **db_structure.loo** dans /back).
![Looping](/MEDIA/image-6.png)  
Nous allons créer une première base de données locale que nous utiliserons pour le projet en local. Cette DB sera suceptible d'évoluer en fonction de l'avancé du projet. 
Voici un premier script SQL pour concevoir notre DB. 
![SQL](/MEDIA/image-7.png)  
![MDB](/MEDIA/image-8.png)  
Voici notre DB **ydb** sur DBeaver :  
![DBEAVER](/MEDIA/image-9.png)  
Passons à l'API !  
  
#### API  
Dans un premier temps, nous allons créer un fichier **server.js** où nous allons pouvoir créer l'ensemble de nos routes nécessaires au bon fonctionnement de notre API. J'ai commencé à créer un fichier **.env** et j'ai commencé à remplir le fichier **server.js** avec mes idées de routes.  
![VSCODE](/MEDIA/image-10.png)  
