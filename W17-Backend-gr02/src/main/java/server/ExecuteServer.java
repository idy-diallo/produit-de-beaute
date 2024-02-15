/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package server;

import com.google.gson.Gson;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import manager.CategorieManager;
import manager.CommandeManager;
import manager.ProduitManager;
import manager.UserManager;
import org.json.JSONException;
import org.json.JSONObject;
import pojo.Users;
import pojo.Categorie;
import pojo.Commandes;
import pojo.Produits;


/**
 *
 * @author didy1
 */
public class ExecuteServer extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        
        String pathI = request.getPathInfo();
        // Determine the endpoint based on the path
        if (pathI == null) {
            response.getWriter().write("Pas de chemin spécifié");
        } 
        else if (pathI.equals("/createUser")) {
            createUser(request, response);
        }else if (pathI.equals("/listProduits")){
            list_produits(request, response);
        }else if (pathI.equals("/listCommandes")){
            list_commandes(request, response);
        }else if (pathI.equals("/ajouterProduit")){
            ajouterProduit(request, response);
        }else if (pathI.equals("/listCategorie")){
            list_categorie(request, response);
        }else if (pathI.equals("/supprimerProduit")){
            supprimerProduit(request, response);
        }else if (pathI.equals("/modifierProduit")){
            modifierProduit(request, response);
        }else if (pathI.equals("/produitsParCategorie")){
            produitsParCategorie(request, response);
        }
        else if (pathI.equals("/connexion")) {
            connexion(request, response);
        }
        else if (pathI.equals("/listCommandeUser")) {
            listCommandeUser(request, response);
        }
        else if (pathI.equals("/updateUser")) {
            updateUser(request, response);
        }
        else if (pathI.equals("/updatePassword")) {
            updatePassword(request, response);
        }
        else if (pathI.equals("/ajoutCommande")) {
            ajoutCommande(request, response);
        }
        else {
            response.getWriter().write("Chemin inconnu: " + pathI);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
    
    private void createUser(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try{
           BufferedReader reader = request.getReader();
            StringBuilder jsonBuffer = new StringBuilder();
            String line;
            while((line = reader.readLine()) != null){
                    jsonBuffer.append(line);
            }

            JSONObject jsonObject = new JSONObject(jsonBuffer.toString());

            String prenom = jsonObject.getString("firstName");
            String nom = jsonObject.getString("lastName");
            String email = jsonObject.getString("email");
            String pws = jsonObject.getString("password");

            UserManager.createUser(prenom, nom, email, pws); 
        } catch (IOException | JSONException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Une erreur interne s'est produite.");
        }
        
    }
  
  private void connexion(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        try{
           BufferedReader reader = request.getReader();
            StringBuilder jsonBuffer = new StringBuilder();
            String line;
            while((line = reader.readLine()) != null){
                    jsonBuffer.append(line);
            }

            JSONObject jsonObject = new JSONObject(jsonBuffer.toString());
            
            String email = jsonObject.getString("emailLog");
            String pws = jsonObject.getString("passwordLog");

            Users user = UserManager.connexion(email, pws);
            Gson gson = new Gson();
            String json = gson.toJson(user);
            response.getWriter().write(json);
        } catch (IOException | JSONException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Une erreur interne s'est produite.");
        }
    }
    

     private void list_produits(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ArrayList<Produits> product = ProduitManager.recup_all_produits();
        Gson gson = new Gson();
        String json = gson.toJson(product);
        response.getWriter().write(json);
    }
     
    
    private void list_commandes(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ArrayList<Commandes> commande = CommandeManager.recup_all_commandes();
        Gson gson = new Gson();
        String json = gson.toJson(commande);
        response.getWriter().write(json);
    }
    
    private void ajouterProduit(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try{
           BufferedReader reader = request.getReader();
            StringBuilder jsonBuffer = new StringBuilder();
            String line;
            while((line = reader.readLine()) != null){
                    jsonBuffer.append(line);
            }

            JSONObject jsonObject = new JSONObject(jsonBuffer.toString());
            

            String nom_produit = jsonObject.getString("nom_produit");
            double prix = jsonObject.getDouble("prix");
            int stock = jsonObject.getInt("stock");
            String imageProduit = jsonObject.getString("imageProduit");
            float rabaisProduit = jsonObject.getFloat("rabaisProduit");
            String descriptionProduit = jsonObject.getString("descriptionProduit");
            int categorieId = jsonObject.getInt("categorieId");

             ProduitManager.ajouterProduit(nom_produit, prix, stock, imageProduit, rabaisProduit, descriptionProduit, categorieId); 
        } catch (IOException | JSONException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Une erreur interne s'est produite.");
        }
    }

    
    private void list_categorie(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        ArrayList<Categorie> categorie = CategorieManager.recup_categorie();
        Gson gson = new Gson();
        String json = gson.toJson(categorie);
        response.getWriter().write(json);
    }
    
    private void supprimerProduit(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try{
            BufferedReader reader = request.getReader();
            StringBuilder jsonBuffer = new StringBuilder();
            String line;
            while((line = reader.readLine()) != null){
                    jsonBuffer.append(line);
            }
            JSONObject jsonObject = new JSONObject(jsonBuffer.toString());
            
            int id_produit = jsonObject.getInt("id_produit");
            
            ProduitManager.supprimerProduit(id_produit);
            response.getWriter().write("Produit supprimé avec succès.");
            
        }catch (JSONException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Une erreur interne s'est produite.");
        }
    }
    
    private void modifierProduit(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try{
            BufferedReader reader = request.getReader();
            StringBuilder jsonBuffer = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonBuffer.append(line);
            }

            JSONObject jsonObject = new JSONObject(jsonBuffer.toString());

            int id_produit = jsonObject.getInt("id_produit");
            double prix = jsonObject.getDouble("prix");
            int stock = jsonObject.getInt("stock");
            float rabais = jsonObject.getFloat("rabais");
            String nom = jsonObject.getString("nom");
            String image = jsonObject.getString("image");
            String description = jsonObject.getString("description");

//            ProduitManager.updateProduit(id_produit, prix, stock, rabais, nom, image, description);
            ArrayList<Produits> list = ProduitManager.updateProduit(id_produit, prix, stock, rabais, nom, image, description);
            Gson gson = new Gson();
            String json = gson.toJson(list);
            response.getWriter().write(json);
            
        }catch (JSONException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Une erreur interne s'est produite.");
        }
    }
     
    private void listCommandeUser(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try{
           BufferedReader reader = request.getReader();
            StringBuilder jsonBuffer = new StringBuilder();
            String line;
            while((line = reader.readLine()) != null){
                    jsonBuffer.append(line);
            }

            JSONObject jsonObject = new JSONObject(jsonBuffer.toString());
            
            int id = jsonObject.getInt("id");

            ArrayList<Commandes> commande = CommandeManager.getCommandesUser(id);
            Gson gson = new Gson();
            String json = gson.toJson(commande);
            response.getWriter().write(json);
        } catch (IOException | JSONException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Une erreur interne s'est produite.");
        }
    }
    
    private void updateUser(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try{
           BufferedReader reader = request.getReader();
            StringBuilder jsonBuffer = new StringBuilder();
            String line;
            while((line = reader.readLine()) != null){
                    jsonBuffer.append(line);
            }

            JSONObject jsonObject = new JSONObject(jsonBuffer.toString());
            
            int id = jsonObject.getInt("id");
            String prenom = jsonObject.getString("firstName");
            String nom = jsonObject.getString("lastName");
            String email = jsonObject.getString("email");
            String pwd = jsonObject.getString("password");
            String tel = jsonObject.getString("tel");
            String adress = jsonObject.getString("address");

            Users user = UserManager.updateUser(id, prenom, nom, email, pwd, tel, adress);
            Gson gson = new Gson();
            String json = gson.toJson(user);
            response.getWriter().write(json);
        } catch (IOException | JSONException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Une erreur interne s'est produite.");
        }
    }
    
        private void updatePassword(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try{
           BufferedReader reader = request.getReader();
            StringBuilder jsonBuffer = new StringBuilder();
            String line;
            while((line = reader.readLine()) != null){
                    jsonBuffer.append(line);
            }

            JSONObject jsonObject = new JSONObject(jsonBuffer.toString());
            
            int id = jsonObject.getInt("id");
            String pwd = jsonObject.getString("password");

            Boolean isModified = UserManager.updatePassword(id, pwd);
            Gson gson = new Gson();
            String json = gson.toJson(isModified);
            response.getWriter().write(json);
        } catch (IOException | JSONException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Une erreur interne s'est produite.");
        }
    }
        
    private void produitsParCategorie(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try{
            BufferedReader reader = request.getReader();
            StringBuilder jsonBuffer = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonBuffer.append(line);
            }

            JSONObject jsonObject = new JSONObject(jsonBuffer.toString());
            
            String nomCategorie = jsonObject.getString("nom_categorie");

            ArrayList<Produits> produits = ProduitManager.recup_produits_par_categorie(nomCategorie);

            Gson gson = new Gson();
            String jsonResult = gson.toJson(produits);
            response.getWriter().write(jsonResult);

        } catch (JSONException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Une erreur interne s'est produite.");
        }
    }
    
    private void ajoutCommande(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try{
            BufferedReader reader = request.getReader();
            StringBuilder jsonBuffer = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                jsonBuffer.append(line);
            }

            JSONObject jsonObject = new JSONObject(jsonBuffer.toString());

            int id_produit = jsonObject.getInt("id_produit");
            int id_user = jsonObject.getInt("id_user");
            int qt = jsonObject.getInt("qt");
            String date = jsonObject.getString("date");
            int status = jsonObject.getInt("status");

            CommandeManager.ajoutCommande(id_produit, id_user, qt, date, status); 

        } catch (JSONException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("Une erreur interne s'est produite.");
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
