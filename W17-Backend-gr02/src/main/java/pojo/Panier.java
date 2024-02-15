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
public class Panier {
    private int id_panier;
    private ArrayList<Produits> products;
    
    public Panier(){
        products = new ArrayList<Produits>();
    }
    
    public int getId_panier() {
        return id_panier;
    }
    public void setId_panier(int id_panier) {
        this.id_panier = id_panier;
    }
    
    public ArrayList<Produits> getProducts(){
         return products;
    }
    public void setProducts(ArrayList<Produits> products) {
        this.products = products;
    }
}
