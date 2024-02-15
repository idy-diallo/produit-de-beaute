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
public class CategorieManager {
    public static ArrayList<Categorie> recup_categorie(){
        ArrayList<Categorie> categorieList = new ArrayList<>();
        
        String query = "SELECT * FROM Categorie ";
        PreparedStatement preparedStatement = Server.connexion(query);
        
        try{
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()){
                Categorie categorie = new Categorie();
                
                categorie.setId_categorie(resultSet.getInt("id_categorie"));
                categorie.setNom_categorie(resultSet.getString("nom_categorie"));
                                
                categorieList.add(categorie);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return categorieList;
    }
}
