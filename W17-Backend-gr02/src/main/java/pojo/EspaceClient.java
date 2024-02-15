/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pojo;

/**
 *
 * @author isi
 */
public class EspaceClient {
    private int id_espace;
    private Users user;
    private Fidelite fidelite;
    
    public EspaceClient(){}
    
    public int getId_espace() {
        return id_espace;
    }
    public void setId_espace(int id_espace) {
        this.id_espace = id_espace;
    }
    
    public Users getUser(){
        return user;
    }
    public void setUser(Users user){
        this.user = user;
    }
    
    public Fidelite getFidelite(){
        return fidelite;
    }
    public void setFidelite(Fidelite fidelite){
        this.fidelite = fidelite;
    }
    
}
