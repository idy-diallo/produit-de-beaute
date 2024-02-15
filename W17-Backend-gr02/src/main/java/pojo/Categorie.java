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
public class Categorie {
    private int id_categorie;
    private String nom_categorie;
    private ArrayList<Produits> products;
    
    public Categorie(){
        products = new ArrayList<Produits>();
    }
    
    public int getId_categorie() {
        return id_categorie;
    }
    public void setId_categorie(int id_categorie) {
        this.id_categorie = id_categorie;
    }

    public String getNom_categorie() {
        return nom_categorie;
    }
    public void setNom_categorie(String nom_categorie) {
        this.nom_categorie = nom_categorie;
    }
    
    public ArrayList<Produits> getProducts(){
         return products;
    }
    public void setProducts(ArrayList<Produits> products) {
        this.products = products;
    }
}
