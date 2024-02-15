/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pojo;

import java.util.ArrayList;

/**
 *
 * @author isi
 */
public class Produits {
    private int id_produit;
    private String nom_produit;
    private double prix;
    private int stock;
    private String imageProduit;
    private float rabaisProduit;
    private String descriptionProduit;
    private ArrayList<Users> users;
    private ArrayList<Commandes> commandes;
    private ArrayList<Panier> paniers;
    private Favoris favori;
    private Categorie categorie;
    
    public Produits(){
    }
    
    public int getId_produit() {
        return id_produit;
    }
    public void setId_produit(int id_produit) {
        this.id_produit = id_produit;
    }

    public String getNom_produit() {
        return nom_produit;
    }
    public void setNom_produit(String nom_produit) {
        this.nom_produit = nom_produit;
    }

    public double getPrix() {
        return prix;
    }
    public void setPrix(double prix) {
        this.prix = prix;
    }

    public int getStock() {
        return stock;
    }
    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getImageProduit() {
        return imageProduit;
    }
    public void setImageProduit(String imageProduit) {
        this.imageProduit = imageProduit;
    }

    public float getRabaisProduit() {
        return rabaisProduit;
    }
    public void setRabaisProduit(float rabaisProduit) {
        this.rabaisProduit = rabaisProduit;
    }

    public String getDescriptionProduit() {
        return descriptionProduit;
    }
    public void setDescriptionProduit(String descriptionProduit) {
        this.descriptionProduit = descriptionProduit;
    }
    
    public ArrayList<Users> getUsers(){
         return users;
    }
    public void setUsers(ArrayList<Users> users) {
        this.users = users;
    }
    
    public ArrayList<Commandes> getCommandes(){
         return commandes;
    }
    public void setCommandes(ArrayList<Commandes> commandes) {
        this.commandes = commandes;
    }
    
    public ArrayList<Panier> getPaniers(){
         return paniers;
    }
    public void setPanier(ArrayList<Panier> paniers) {
        this.paniers = paniers;
    }
    
    public Favoris getFavori(){
        return favori;
    }
    public void setFavori(Favoris favori){
        this.favori = favori;
    }
    
   public Categorie getCategorie(){
        return categorie;
    }
    public void setCategorie(Categorie categorie){
        this.categorie = categorie;
    }
}
