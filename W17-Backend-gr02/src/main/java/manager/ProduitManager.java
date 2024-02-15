/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package manager;

import connexion.Server;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import pojo.Categorie;
import pojo.Produits;

/**
 *
 * @author isi
 */
public class ProduitManager {
     /*
recup_all_produits() retourn tous les prduits de la bd
*/
    public static ArrayList<Produits> recup_all_produits(){
        ArrayList<Produits> produitsList = new ArrayList<>();
        
        String query = "SELECT * FROM Produits INNER JOIN Categorie ON Produits.categorieId = Categorie.id_categorie";
        PreparedStatement preparedStatement = Server.connexion(query);
        
        try{
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()){
                Produits produit = new Produits();
                
                produit.setId_produit(resultSet.getInt("id_produit"));
                produit.setNom_produit(resultSet.getString("nom_produit"));
                produit.setPrix(resultSet.getDouble("prix"));
                produit.setStock(resultSet.getInt("stock"));
                produit.setImageProduit(resultSet.getNString("imageProduit"));

                produit.setRabaisProduit(resultSet.getFloat("rabaisProduit"));

                produit.setDescriptionProduit(resultSet.getNString("descriptionProduit"));

                Categorie categorie = new Categorie();
                categorie.setNom_categorie(resultSet.getNString("nom_categorie"));
                produit.setCategorie(categorie);
                
                produitsList.add(produit);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return produitsList;

    }

    
    public static void ajouterProduit(String nom_produit, double prix, int stock, String imageProduit, double rabaisProduit, String descriptionProduit, int categorieId){
        String query = "INSERT INTO Produits ( nom_produit, prix, stock, imageProduit, rabaisProduit, descriptionProduit, categorieId) VALUES (?, ?, ?, ?, ?, ?, ?) ";
        PreparedStatement preparedStatement = Server.connexion(query);

        try{
            preparedStatement.setString(1, nom_produit);
            preparedStatement.setDouble(2, prix);
            preparedStatement.setInt(3, stock);
            preparedStatement.setString(4, imageProduit);
             preparedStatement.setDouble(5, rabaisProduit);
            preparedStatement.setString(6, descriptionProduit);
            preparedStatement.setInt(7, categorieId);

            preparedStatement.executeUpdate();
        } catch (SQLException e) {
        }
    }
    
    public static void supprimerProduit(int id_produit){
        String query = "DELETE FROM Produits WHERE id_produit = ?";
        PreparedStatement preparedStatement = Server.connexion(query);
        
        try{
            preparedStatement.setInt(1, id_produit);
            preparedStatement.executeUpdate();
        }catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
//    public static void updateProduit(int id_produit, double prix, int stock, float rabaisProduit) {
//        String query = "UPDATE Produits SET prix=?, stock=?, rabaisProduit=? WHERE id_produit=? ";
//        PreparedStatement preparedStatement = Server.connexion(query);
//        
//        try{
//            preparedStatement.setDouble(1,prix);
//            preparedStatement.setInt(2, stock);
//            preparedStatement.setFloat(3, rabaisProduit);
//            preparedStatement.setInt(4, id_produit);
//            
//            preparedStatement.executeUpdate();
//        } catch (SQLException e){
//            e.printStackTrace();
//        }
//    }
    
    public static ArrayList<Produits> updateProduit(int id_produit, double prix, int stock, float rabaisProduit, String nom, String image, String description) {
        String query = "UPDATE Produits SET prix=?, stock=?, rabaisProduit=?, nom_produit=?, imageProduit=?, descriptionProduit=? WHERE id_produit=? ";
        PreparedStatement preparedStatement = Server.connexion(query);
        
        try{
            preparedStatement.setDouble(1, prix);
            preparedStatement.setInt(2, stock);
            preparedStatement.setFloat(3, rabaisProduit);
            preparedStatement.setString(4, nom);
            preparedStatement.setString(5, image);
            preparedStatement.setString(6, description);
            preparedStatement.setInt(7, id_produit);

            
            preparedStatement.executeUpdate();
        } catch (SQLException e){
        }
        return recup_all_produits();
    }
    
    public static ArrayList<Produits> recup_produits_par_categorie(String nom_categorie) {
        ArrayList<Produits> produitsList = new ArrayList<>();

        String query = "SELECT * FROM Produits INNER JOIN Categorie ON Produits.categorieId = Categorie.id_categorie WHERE Categorie.nom_categorie = ?";
        PreparedStatement preparedStatement = Server.connexion(query);

        try {
            preparedStatement.setString(1, nom_categorie);
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                Produits produit = new Produits();

                produit.setId_produit(resultSet.getInt("id_produit"));
                produit.setNom_produit(resultSet.getString("nom_produit"));
                produit.setPrix(resultSet.getDouble("prix"));
                produit.setStock(resultSet.getInt("stock"));
                produit.setImageProduit(resultSet.getNString("imageProduit"));
                produit.setRabaisProduit(resultSet.getFloat("rabaisProduit"));
                produit.setDescriptionProduit(resultSet.getNString("descriptionProduit"));

                Categorie categorie = new Categorie();
                categorie.setNom_categorie(resultSet.getNString("nom_categorie"));
                produit.setCategorie(categorie);

                produitsList.add(produit);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return produitsList;
    }
}
