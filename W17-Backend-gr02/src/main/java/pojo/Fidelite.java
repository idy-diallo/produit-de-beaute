/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pojo;

/**
 *
 * @author isi
 */
public class Fidelite {
    private int id_fidelite;
    private int nb_point_fidelite;
    private EspaceClient espace;
    
    public Fidelite(){}
    
    public int getId_fidelite() {
        return id_fidelite;
    }
    public void setId_fidelite(int id_fidelite) {
        this.id_fidelite = id_fidelite;
    }

    public int getNb_point_fidelite() {
        return nb_point_fidelite;
    }
    public void setNb_point_fidelite(int nb_point_fidelite) {
        this.nb_point_fidelite = nb_point_fidelite;
    }
    
    public EspaceClient getEspace(){
        return espace;
    }
    public void setEspace(EspaceClient espace){
        this.espace = espace;
    }
}
