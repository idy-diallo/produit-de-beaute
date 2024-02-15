/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pojo;

/**
 *
 * @author isi
 */
public class Facture {
    private int id_facture;
    private double coutLivraison;
    private Commandes commande;
    
    public Facture(){}
    
    public int getId_facture() {
        return id_facture;
    }
    public void setId_facture(int id_facture) {
        this.id_facture = id_facture;
    }

    public double getCoutLivraison() {
        return coutLivraison;
    }
    public void setCoutLivraison(double coutLivraison) {
        this.coutLivraison = coutLivraison;
    }
    
    public Commandes getCommande(){
        return commande;
    }
    public void setComande(Commandes commande){
        this.commande = commande;
    }
}
