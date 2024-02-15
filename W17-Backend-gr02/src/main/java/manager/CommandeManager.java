/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package manager;

import connexion.Server;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import pojo.Commandes;
import pojo.Produits;
import pojo.Users;

/**
 *
 * @author isi
 */
public class CommandeManager {
    public static ArrayList<Commandes> recup_all_commandes(){
        ArrayList<Commandes> commandesList = new ArrayList<>();
        
        String query = "SELECT * FROM Commandes " + 
                "INNER JOIN Produits ON Commandes.produitId = Produits.id_produit " +
                "INNER JOIN Users ON Commandes.userId = Users.id_user";
        PreparedStatement preparedStatement = Server.connexion(query);
        
        try{
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()){
                Commandes commande = new Commandes();
                commande.setId_commande(resultSet.getInt("id_commande"));
                commande.setQuantite(resultSet.getInt("quantite"));
                commande.setDateCommande(resultSet.getTimestamp("dateCommande"));
                commande.setStatutCommande(resultSet.getInt("statutCommande"));
                
                Produits produit = new Produits();
                produit.setNom_produit(resultSet.getString("nom_produit"));
//                ArrayList<Produits> produitsList = new ArrayList<>();
//                produitsList.add(produit);

                commande.setProducts(produit);

                
                Users user = new Users();
                user.setNom(resultSet.getString("nom"));
                commande.setUser(user);
                
            commandesList.add(commande);
            }
        } catch (SQLException e){
            e.printStackTrace();
        }
        return commandesList;
    }

    public static ArrayList<Commandes> getCommandesUser(int id) {
       ArrayList<Commandes> commandesUser = new ArrayList<>();
        
        String query = "SELECT * FROM Commandes " + 
                "INNER JOIN Produits ON Commandes.produitId = Produits.id_produit " +
                "INNER JOIN Users ON Commandes.userId = Users.id_user WHERE userId = ?";
        PreparedStatement preparedStatement = Server.connexion(query);
        
        try{
            preparedStatement.setInt(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()){
                Commandes commande = new Commandes();
                commande.setId_commande(resultSet.getInt("id_commande"));
                commande.setQuantite(resultSet.getInt("quantite"));
                commande.setDateCommande(resultSet.getTimestamp("dateCommande"));
                commande.setStatutCommande(resultSet.getInt("statutCommande"));
                
                Produits produit = new Produits();
                produit.setNom_produit(resultSet.getString("nom_produit"));
                produit.setPrix(resultSet.getDouble("prix"));

                commande.setProducts(produit);

                
                Users user = new Users();
                user.setNom(resultSet.getString("nom"));
                user.setPrenom(resultSet.getString("prenom"));
                user.setEmail(resultSet.getString("email"));
                user.setPassword(resultSet.getString("password"));
                user.setTel(resultSet.getString("telephone"));
                user.setAdress(resultSet.getString("address"));
                commande.setUser(user);
                
                commandesUser.add(commande);
            }
        } catch (SQLException e){
            e.printStackTrace();
        }
        return commandesUser;
    }

    public static void ajoutCommande(int id_produit, int id_user, int qt, String date, int status) {
        String query = "INSERT INTO Commandes (produitId, userId, quantite, dateCommande, statutCommande) VALUES (?, ?, ?, ?, ?)";
        PreparedStatement preparedStatement = Server.connexion(query);
//        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME; 
//        LocalDateTime dateTime = LocalDateTime.parse(date, formatter);
//        Timestamp timestamp = Timestamp.valueOf(dateTime);
        try{
            preparedStatement.setInt(1, id_produit);
            preparedStatement.setInt(2, id_user);
            preparedStatement.setInt(3, qt);
            preparedStatement.setString(4, date);
            preparedStatement.setInt(5, status);

            preparedStatement.executeQuery();
        } catch (SQLException e) {
        }
    }
}
