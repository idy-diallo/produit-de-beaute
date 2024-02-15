/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pojo;

import java.util.Date;

/**
 *
 * @author isi
 */
public class InfoLivraison {
    private int id_infoLivraison;
    private Date dateLivraison;
    private String adressLivraison;
    private String typeLivraison;
    private Commandes commande;
    
    public InfoLivraison(){}
    
    public int getId_infoLivraison() {
        return id_infoLivraison;
    }
    public void setId_infoLivraison(int id_infoLivraison) {
        this.id_infoLivraison = id_infoLivraison;
    }

    public Date getDateLivraison() {
        return dateLivraison;
    }
    public void setDateLivraison(Date dateLivraison) {
        this.dateLivraison = dateLivraison;
    }

    public String getAdressLivraison() {
        return adressLivraison;
    }
    public void setAdressLivraison(String adressLivraison) {
        this.adressLivraison = adressLivraison;
    }

    public String getTypeLivraison() {
        return typeLivraison;
    }
    public void setTypeLivraison(String typeLivraison) {
        this.typeLivraison = typeLivraison;
    }
    
    public Commandes getCommande(){
        return commande;
    }
    public void setComande(Commandes commande){
        this.commande = commande;
    }
}
