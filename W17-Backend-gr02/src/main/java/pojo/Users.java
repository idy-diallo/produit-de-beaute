/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pojo;

/**
 *
 * @author isi
 */
public class Users {
    private int id_user;
    private String prenom;
    private String nom;
    private String email;
    private String tel;
    private String password;
    private String adress;
    private boolean role;
    private int nb_point_fidelite;
    
    public Users(){}
    public Users(int id_user,String prenom, String nom, String email, String tel, String password, String adress, boolean role, int nb_point_fidelite){
        this.id_user = id_user;
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
        this.tel = tel;
        this.password = password;
        this.adress = adress;
        this.role = role;
        this.nb_point_fidelite = nb_point_fidelite;
    }
    
    public int getId_user() {
        return id_user;
    }
    public void setId_user(int id_user) {
        this.id_user = id_user;
    }
    
    public String getPrenom() {
        return prenom;
    }
    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
    
    public String getNom() {
        return nom;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }
    
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getTel() {
        return tel;
    }
    public void setTel(String tel) {
        this.tel = tel;
    }
    
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getAdress() {
        return adress;
    }
    public void setAdress(String adress) {
        this.adress = adress;
    }
    
    public boolean getRole() {
        return role;
    }
    public void setRole(boolean role) {
        this.role = role;
    }
    
    public int getNb_point_fidelite() {
        return nb_point_fidelite;
    }
    public void setNb_point_fidelite(int nb_point_fidelite) {
        this.nb_point_fidelite = nb_point_fidelite;
    }
}
