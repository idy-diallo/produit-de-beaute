/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pojo;

/**
 *
 * @author isi
 */
public class Rabais {
    private int id_rabais;
    private int seuil_achat_rabais;
    private double pourcentageRabais;
    private Commandes commande;
    
    public Rabais(){}
    
     public int getId_rabais() {
        return id_rabais;
    }
    public void setId_rabais(int id_rabais) {
        this.id_rabais = id_rabais;
    }
    
    public int getSeuil_achat_rabais() {
        return seuil_achat_rabais;
    }
    public void setSeuil_achat_rabais(int seuil_achat_rabais) {
        this.seuil_achat_rabais = seuil_achat_rabais;
    }

    public double getPourcentageRabais() {
        return pourcentageRabais;
    }
    public void setPourcentageRabais(double pourcentageRabais) {
        this.pourcentageRabais = pourcentageRabais;
    }
    
    public Commandes getCommande(){
        return commande;
    }
    public void setComande(Commandes commande){
        this.commande = commande;
    }
}
