/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pojo;

/**
 *
 * @author isi
 */
public class Favoris {
    private int id_favori;
    private Produits product;
    
    public Favoris(){}
    
    public int getId_favori() {
        return id_favori;
    }
    public void setId_favori(int id_favori) {
        this.id_favori = id_favori;
    }
    
    public Produits getProduct(){
        return product;
    }
    public void setProduct (Produits product){
        this.product = product;
    }
}
