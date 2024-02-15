/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package manager;

import connexion.Server;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import pojo.Users;

/**
 *
 * @author didy1
 */
public class UserManager {
    
        //fonction pour s'inscrire
    public static void createUser(String prenom, String nom, String email, String password) {
        String query = "INSERT INTO users (prenom, nom, email, password) VALUES (?, ?, ?, ?)";
        PreparedStatement preparedStatement = Server.connexion(query);

        try{
            preparedStatement.setString(1, prenom);
            preparedStatement.setString(2, nom);
            preparedStatement.setString(3, email);
            preparedStatement.setString(4, password);

            preparedStatement.executeQuery();
        } catch (SQLException e) {
        }
    }
    
    //Pour se connecter
    public static Users connexion(String email, String pws) {
        Users user = null;
        String query = "SELECT * FROM users WHERE email = ? and password = ?";
        PreparedStatement selectUser = Server.connexion(query);
        try{
            selectUser.setString(1, email);
            selectUser.setString(2, pws);

            ResultSet result = selectUser.executeQuery();
            user = new Users();
            while (result.next()) {
            
                user.setId_user(result.getInt("id_user"));
                user.setPrenom(result.getString("prenom"));
                user.setNom(result.getString("nom"));
                user.setRole(result.getBoolean("role"));
                user.setAdress(result.getString("address"));
            }
            
        } catch (SQLException e) {
        }
        return user;
    }

    public static Users updateUser(int id, String prenom, String nom, String email, String pwd, String tel, String adress) {
        String query = "UPDATE Users SET prenom = ?, nom = ?, email = ?, telephone = ?, address = ? WHERE id_user = ?";
        PreparedStatement update = Server.connexion(query);
        try{
            update.setString(1, prenom);
            update.setString(2, nom);
            update.setString(3, email);
            update.setString(4, tel);
            update.setString(5, adress);
            update.setInt(6, id);

            update.executeUpdate();
        } catch (SQLException e) {
        }
        return connexion(email, pwd);
    }
    
        public static boolean updatePassword(int id, String pwd) {
        boolean isModified = false;
        String query = "UPDATE Users SET password = ? WHERE id_user = ?";
        PreparedStatement update = Server.connexion(query);
        try{
            update.setString(1, pwd);
            update.setInt(2, id);

            int valueModified = update.executeUpdate();
            if(valueModified == 1){
                isModified = true;
            }
        } catch (SQLException e) {
        }
        return isModified;
    }
}
