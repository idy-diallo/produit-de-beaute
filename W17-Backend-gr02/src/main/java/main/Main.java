/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package main;

import connexion.Server;
import java.io.IOException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import manager.CategorieManager;
import manager.ProduitManager;
import static manager.ProduitManager.recup_produits_par_categorie;
import pojo.Categorie;
import pojo.Commandes;
import pojo.Produits;
import pojo.Users;

/**
 *
 * @author isi
 */
public class Main {
    public static void main(String[] args) throws IOException{
//        try{
//
//                Users fact = new Users();
//                fact.setNom("Palm");
//                fact.setEmail("mail");
//                fact.setTel("775246987");
//                fact.setPassword("1234");
//                fact.setAdress("dashbord");
//            
//                String query = "INSERT INTO person (prenom, nom, email, telephone, password, address) VALUES (?, ?, ?, ?, ?, ?)";
//
//                PreparedStatement preparedStatement = Server.connexion(query);
//            
//                preparedStatement.setString(1, fact.getNom());
//                preparedStatement.setString(2, fact.getEmail());
//                preparedStatement.setString(3, fact.getTel());
//                preparedStatement.setString(5, fact.getPassword());
//                preparedStatement.setString(6, fact.getAdress());
//                preparedStatement.executeUpdate();
//                System.out.println("Insertion réussie !");
//
//                Server.close();

//                Users fact = new Users();
//                fact.setNom("Palm");
//                fact.setEmail("mail");
//                fact.setTel("775246987");
//                fact.setUsername("username");
//                fact.setPassword("1234");
//                fact.setAdress("dashbord");
//            
//                String query = "INSERT INTO person (prenom, nom, email, telephone, password, address) VALUES (?, ?, ?, ?, ?, ?)";
//
//                PreparedStatement preparedStatement = Server.connexion(query);
//            
//                preparedStatement.setString(1, fact.getNom());
//                preparedStatement.setString(2, fact.getEmail());
//                preparedStatement.setString(3, fact.getTel());
//                preparedStatement.setString(4, fact.getUsername());
//                preparedStatement.setString(5, fact.getPassword());
//                preparedStatement.setString(6, fact.getAdress());
//                preparedStatement.executeUpdate();
//                System.out.println("Insertion réussie !");


//               String query = "SELECT * FROM Commandes";
//
//            PreparedStatement preparedStatement = Server.connexion(query);
//
//            ResultSet resultSet = preparedStatement.executeQuery();
//
//            ArrayList<Commandes> commandesList = new ArrayList<>();
//
//            while (resultSet.next()) {
//                Commandes commande = new Commandes();
//                commande.setId_commande(resultSet.getInt("id_commande"));
//                commande.setQuantite(resultSet.getInt("quantite"));
//                commande.setDateCommande(resultSet.getTimestamp("dateCommande"));
//                commande.setStatutCommande(resultSet.getInt("statutCommande"));
//                
//                commandesList.add(commande);
//            }
//            Server.close();
//            displayCommandesInfo(commandesList);
//        }
//        catch(SQLException nfe){}
//        
//    }
//     public static void displayCommandesInfo(ArrayList<Commandes> commandesList) {
//        for (Commandes commande : commandesList) {
//            System.out.println("Commande ID: " + commande.getId_commande());
//            System.out.println("Quantité: " + commande.getQuantite());
//            System.out.println("Date de commande: " + commande.getDateCommande());
//            System.out.println("Statut de commande: " + commande.getStatutCommande());
//            System.out.println("-------------------------------------");
//        }
//    }


// test pour recup_categorie():

//        ArrayList<Categorie> categories = CategorieManager.recup_categorie();
//
//                for (Categorie category : categories) {
//                    System.out.println("Id: " + category.getId_categorie() + ", Nom: " + category.getNom_categorie());
//                }
//            }

// test pour ajouter un produit

//        String nom_produit = "bbb";
//        double prix = 50.0;
//        int stock = 100;
//        String imageProduit = "bbb.jpg";
//        float rabaisProduit = (float) 0.1;
//        String descriptionProduit = "ababab";
//        int categorieId = 1; 
//
//        ProduitManager.ajouterProduit(nom_produit, prix, stock, imageProduit, rabaisProduit, descriptionProduit, categorieId);
//
//        System.out.println("le produit a ajouté");
//
//    }
//     public static void displayCommandesInfo(ArrayList<Commandes> commandesList) {
//        for (Commandes commande : commandesList) {
//            System.out.println("Commande ID: " + commande.getId_commande());
//            System.out.println("Quantité: " + commande.getQuantite());
//            System.out.println("Date de commande: " + commande.getDateCommande());
//            System.out.println("Statut de commande: " + commande.getStatutCommande());
//            System.out.println("-------------------------------------");
//
//        }
//    }
    // test1 pour la methode updateProduit
    
//        int id_produit = 18;
//        Double newPrix = 15.99;
//        Integer newStock = 50;
//        Float newRabaisProduit = 0.1f;
//
//        ProduitManager.updateProduit(id_produit, newPrix, newStock, newRabaisProduit);
//
//        System.out.println("update successful");
    
//-----    

}
}
