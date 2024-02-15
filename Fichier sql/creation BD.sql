CREATE DATABASE  IF NOT EXISTS `vente_en_ligne` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `vente_en_ligne`;

DROP TABLE IF EXISTS `Rabais`;
DROP TABLE IF EXISTS `InfoLivraison`;
DROP TABLE IF EXISTS `Facture`;
DROP TABLE IF EXISTS `Commandes`;
DROP TABLE IF EXISTS `EspaceClient`;
DROP TABLE IF EXISTS `Users`;
DROP TABLE IF EXISTS `Fidelite`;
DROP TABLE IF EXISTS `Favoris`; 
DROP TABLE IF EXISTS `Panier_Produit`;
DROP TABLE IF EXISTS `Panier`; 
DROP TABLE IF EXISTS `Produits`;
DROP TABLE IF EXISTS `Categorie`;
DROP TABLE IF EXISTS `Catalogues`;
DROP TABLE IF EXISTS `Admin`;
DROP TABLE IF EXISTS `Person`;
-- Table structure for table `Catalogues`

CREATE TABLE `Categorie`(
	`id_categorie` int NOT NULL AUTO_INCREMENT,
	`nom_categorie` varchar(150) NOT NULL,
    PRIMARY KEY (`id_categorie`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

 -- Table structure for table `Produits`

CREATE TABLE Produits(
	id_produit int NOT NULL AUTO_INCREMENT,
	nom_produit nchar(150) NOT NULL,
	prix float NOT NULL,
	stock int NOT NULL,
	imageProduit nchar(200) NOT NULL,
	descriptionProduit nchar(200) NOT NULL,
	categorieId int NOT NULL REFERENCES `Categorie` (`id_categorie`),
	rabaisProduit float NOT NULL,
	PRIMARY KEY (`id_produit`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

-- Table structure for table `Panier_Produit`		/*	a revoir	*/

CREATE TABLE Panier(
	id_panier int NOT NULL AUTO_INCREMENT,
    nbr_produit int NOT NULL,
	produitId int NOT NULL REFERENCES `Produits` (`id_produit`),
	PRIMARY KEY (`id_panier`)
 )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

-- Table structure for table `Favoris`		/* a revoir	*/

CREATE TABLE Favoris(
	id_favoris int NOT NULL AUTO_INCREMENT,
	produitId int NOT NULL,
    PRIMARY KEY (`id_favoris`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
 
-- Table structure for table `Users`

CREATE TABLE Users(
	id_user int NOT NULL AUTO_INCREMENT,
    prenom varchar(150) NOT NULL,
	nom varchar(150) NOT NULL,
	email varchar(200) NOT NULL,
	telephone varchar(15) NULL,
	password varchar(50) NOT NULL,
	address varchar(200) NULL,
    role boolean default(false) NOT NULL,
    nb_point_fidelite int default(100) NOT NULL,
	PRIMARY KEY (`id_user`)
 )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

-- Table structure for table `Commandes`

CREATE TABLE Commandes(
	id_commande int NOT NULL AUTO_INCREMENT,
	quantite int  NOT NULL,
	dateCommande datetime NOT NULL,
	statutCommande int NOT NULL,
	produitId int NOT NULL REFERENCES `Produits` (`id_produit`),
	userId int NOT NULL REFERENCES `Users` (`id_user`),
    PRIMARY KEY (`id_commande`)
 )ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
 
  -- Table structure for table `Facture`
 
CREATE TABLE Facture(
	id_facture int NOT NULL AUTO_INCREMENT,
	coutLivraison float NOT NULL,
	commandeId int NOT NULL REFERENCES `Commandes` (`id_commande`),
     PRIMARY KEY (`id_facture`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
 
  -- Table structure for table `InfoLivraison`

CREATE TABLE InfoLivraison(
	id_infoLivraison int NOT NULL AUTO_INCREMENT,
	dateLivraison datetime NOT NULL,
	adressLivraison nchar(200) NOT NULL,
	typeLivraison nchar(150) NOT NULL,
	commandeId int NOT NULL REFERENCES `Commandes` (`id_commande`),
	PRIMARY KEY (`id_infoLivraison`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
 
 -- Table structure for table `Rabais` 				a supprimer
 
CREATE TABLE Rabais(
	id_rabais int NOT NULL AUTO_INCREMENT,
	seuil_achat_rabais int NOT NULL,
	pourcentageRabais float NOT NULL,
	commandeId int NOT NULL REFERENCES `Commandes` (`id_commande`),
	PRIMARY KEY (`id_rabais`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;