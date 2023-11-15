CREATE DATABASE ydb;
USE ydb;
CREATE TABLE articles(
   aid INT AUTO_INCREMENT,
   titre VARCHAR(120) ,
   datecrea DATETIME,
   contenu VARCHAR(280) ,
   PRIMARY KEY(aid)
);

CREATE TABLE utilisateur(
   uid INT AUTO_INCREMENT,
   email VARCHAR(100) ,
   mdp VARCHAR(120) ,
   nom VARCHAR(50) ,
   prenom VARCHAR(50) ,
   aid INT,
   PRIMARY KEY(uid),
   FOREIGN KEY(aid) REFERENCES articles(aid)
);

