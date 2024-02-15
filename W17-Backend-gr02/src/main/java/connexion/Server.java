/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package connexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 *
 * @author isi
 */
public class Server {
    private static final String urlServeur="jdbc:mariadb://localhost:3306/vente_en_ligne";
    private static final String identifiant = "root";
    private static final String motDePasse = "root";

    private static Connection connection = null;
    public static PreparedStatement connexion(String query){
        PreparedStatement ps = null;
        try{
            Class.forName("org.mariadb.jdbc.Driver");
            connection = DriverManager.getConnection(urlServeur, identifiant, motDePasse);
            ps = connection.prepareStatement(query);
        }
        catch(ClassNotFoundException | SQLException nfe){}
        
        return ps;
    }
    public static void close(){
        try{
            connection.close();
        }
        catch(SQLException s){}
    }
}
