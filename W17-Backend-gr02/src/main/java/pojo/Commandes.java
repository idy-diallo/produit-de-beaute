/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pojo;

import java.util.ArrayList;
import java.util.Date;

/**
 *
 * @author isi
 */
public class Commandes {
    private int id_commande;
    private int quantite;
    private Date dateCommande;
    private int statutCommande;
    private Produits products;
    private Users user;
    private Facture facture;
    private Rabais rabais;
    private InfoLivraison info;
    
    public Commandes(){
    }
    
    public int getId_commande() {
        return id_commande;
    }
    public void setId_commande(int id_commande) {
        this.id_commande = id_commande;
    }

    public int getQuantite() {
        return quantite;
    }
    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public Date getDateCommande() {
        return dateCommande;
    }
    public void setDateCommande(Date dateCommande) {
        this.dateCommande = dateCommande;
    }

    public int getStatutCommande() {
        return statutCommande;
    }
    public void setStatutCommande(int statutCommande) {
        this.statutCommande = statutCommande;
    }
    
    public Produits getProducts(){
         return products;
    }
    public void setProducts(Produits products) {
        this.products = products;
    }
    
    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }
    
    public Facture getFacture(){
        return facture;
    }
    public void setFacture(Facture facture){
        this.facture = facture;
    }
    
    public Rabais getRabais(){
        return rabais;
    }
    public void setRabais(Rabais rabais){
        this.rabais = rabais;
    }
    
    public InfoLivraison getInfo(){
        return info;
    }
    public void setInfo(InfoLivraison info){
        this.info = info;
    }
}
