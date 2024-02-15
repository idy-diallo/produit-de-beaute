"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../globals.css";

const AdminEspace = () => {
  const [commandesData, setCommandesData] = useState([]);
  const [produitsData, setProduitsData] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [selectedProductInfo, setSelectedProductInfo] = useState(null);
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [catalogue, setCatalogue] = useState("");
  const [rabais, setRabais] = useState("");
  const [description, setDescription] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [originalCommandesData, setOriginalCommandesData] = useState([]);
  const [originalProductsData, setOriginalProdictsData] = useState([]);
  //-----------------------
  const [prix_m, setPrix_m] = useState("");
  const [stock_m, setStock_m] = useState("");
  const [rabais_m, setRabais_m] = useState("");

  const [selectedProductInfo, setSelectedProductInfo] = useState({
    id_produit:'',
    nom: '',
    prix: '',
    stock: '',
    image: '',
    rabais: '',
    description: ''
  });

  // const [searchCommandeValue, setSearchCommandeValue] = useState([]);
  // const [searcheProduitValue, setSearchProduitValue] = useState([]);

  useEffect(() => {
    //recevoir les donnees de Commande

    axios({
      method: "post",
      url: "http://localhost:8080/W17-venteEnLigne/ExecuteServer/listCommandes",
      timeout: 4000,
    })
      .then((response) => {
        setCommandesData(response.data);
        setOriginalCommandesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    //recevoir les donnees de Produits

    axios({
      method: "GET",
      url: "http://localhost:8080/W17-venteEnLigne/ExecuteServer/listProduits",
      timeout: 4000,
    })
      .then((response) => {
        setProduitsData(response.data);
        setOriginalProdictsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    //recevoir les donnees de Categorie

    axios({
      method: "GET",
      url: "http://localhost:8080/W17-venteEnLigne/ExecuteServer/listCategorie",
      timeout: 4000,
    })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSupprimer = (id_produit) => {
    fetch(
      "http://localhost:8080/W17-venteEnLigne/ExecuteServer/supprimerProduit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_produit: id_produit }),
      }
    )
      .then((response) => {
        if (response.ok) {
          setProduitsData((prevState) =>
            prevState.filter((product) => product.id_produit !== id_produit)
          );
        } else {
          console.error("Error deleting product:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const rendreCommandes = () => {
    return (
      <table className="table-center">
        <thead>
          <tr className="row-table">
            <th>Id-Command</th>
            <th>Nom-Produit</th>
            <th>Nom-User</th>
            <th>Quantite</th>
            <th>Statut</th>
            <th>Date-Commande</th>
          </tr>
        </thead>
        <tbody>
          {commandesData.map((cmd) => (
            <tr key={cmd.id_commande}>
              <td>{cmd.id_commande}</td>
              <td>
                {cmd.products.nom_produit}
              </td>
              <td>{cmd.user.nom}</td>
              <td>{cmd.quantite}</td>
              <td>{cmd.statutCommande}</td>
              <td>{cmd.dateCommande}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSelectedProductInfo(prevState => ({
      ...prevState,
      [id]: value
    }));
  }

  const handleProduitClick = (p) => {
    setSelectedProductInfo({
      id_produit: p.id_produit,
      nom: p.nom_produit,
      prix: p.prix,
      stock: p.stock,
      image: p.imageProduit,
      rabais: p.rabaisProduit,
      description: p.descriptionProduit,
    });
  }
  
  const updateData = {
    id_produit: selectedProductInfo.id_produit,
    prix: selectedProductInfo.prix,
    stock: selectedProductInfo.stock,
    rabais: selectedProductInfo.rabais,
    nom: selectedProductInfo.nom,
    image: selectedProductInfo.image,
    description: selectedProductInfo.description,
  };
  const updateProduit = () => {
    fetch("http://localhost:8080/W17-venteEnLigne/ExecuteServer/modifierProduit",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
      timeout: 4000,
    })
    .then((response)=> {
      if (response.status === 200) {
        setNom("");
        setPrix_m("");
        setStock_m("");
        setImage("");
        setRabais_m("");
        setDescription("");
      }
    })
    .catch((error) => {
      console.error("Error adding product:", error);
    });
    console.log("update : ", updateData);
  }

  //la table de Produits

  const rendreProduits = () => {
    return (
      <table className="table-center">
        <thead>
          <tr className="row-table">
            <th>Id-Produit</th>
            <th>Nom-Produit</th>
            <th>Prix</th>
            <th>Stock</th>
            <th>Categorie</th>
            <th>Rabais</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {produitsData.map((product) => (
            <tr
              key={product.id_produit}
              onClick={() => handleProduitClick(product)}
            >
              <td>{product.id_produit}</td>
              <td>{product.nom_produit}</td>
              <td>{product.prix}</td>
              <td>{product.stock}</td>
              <td>{product.categorie.nom_categorie}</td>
              <td>{product.rabaisProduit}</td>
              <td>{product.descriptionProduit}</td>
              <td>
                <button
                  className="BTN-supprimer"
                  onClick={() => handleSupprimer(product.id_produit)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const ajouterProduct = () => {
    fetch(
      "http://localhost:8080/W17-venteEnLigne/ExecuteServer/ajouterProduit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom_produit: nom,
          prix: prix,
          stock: stock,
          imageProduit: image,
          categorieId: catalogue,
          rabaisProduit: rabais,
          descriptionProduit: description,
        }),
      }
    )
      .then((response) => {
        console.log("le produit a ajouté");
        if (response.ok) {
          setNom("");
          setPrix("");
          setStock("");
          setImage("");
          setCatalogue("");
          setRabais("");
          setDescription("");
        }
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  const handleSearchProduitSubmit = (event) => {
    event.preventDefault();
  }

  const handleButtonPClick = (button) => {
    if (button === "rechercheParProduit") {
      const filteredProducts = produitsData.filter((product) => product.nom_produit.toLowerCase().includes(searchProduct.toLowerCase()));
      setProduitsData(filteredProducts);
    } else if (button === "rechercheParCategorie") {
      const filteredProducts = produitsData.filter((product) => product.categorie.nom_categorie.toLowerCase().includes(searchProduct.toLowerCase()));
      setProduitsData(filteredProducts);
    } else if (button === "rechercheParPrix") {
      const filteredProducts = produitsData.filter((product) => parseFloat(product.prix) === parseFloat(searchProduct));
      setProduitsData(filteredProducts);
    } else if (button === "liste") {
      setProduitsData(originalProductsData);
    }
  };

  const handleSearchCommandeSubmit = (event) => {
    event.preventDefault();
  }

  const handleButtonCClick = (button) => {
    if (button === 'rechercheParUser') {
        const filteredCommandes = originalCommandesData.filter((cmd) => cmd.user.nom.toLowerCase().includes(searchUser.toLowerCase()));
        setCommandesData(filteredCommandes);
    } else if (button === 'rechercheParDate') {
        const filteredCommandes = originalCommandesData.filter((cmd) => cmd.dateCommande.toLowerCase().includes(searchUser.toLowerCase()));
        setCommandesData(filteredCommandes);
    }  else if (button === 'rechercheParProduit') {
        const filteredCommandes = originalCommandesData.filter((cmd) => cmd.products.nom_produit.toLowerCase().includes(searchUser.toLowerCase()));
        setCommandesData(filteredCommandes);
    } else if (button === 'liste') {
        setCommandesData(originalCommandesData);
    }
  }

  return (
    <div>
      <p className="admin">ADMIN</p>
      <p className="listCommande">LISTE DE COMMANDES</p>
      <div className="searche-bar-admin">
        <form onSubmit={handleSearchCommandeSubmit}>
          <input type="search" placeholder="Recherchez par nom de client" 
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          className="bar-recherche"/>
          <button onClick={() => handleButtonCClick("rechercheParUser")} type="submit" className="BTN-recherche">RECHERCHE</button>
          <button onClick={() => handleButtonCClick("rechercheParDate")} type="submit" className="BTN-Searche-admin"> PAR DATE </button>
          <button onClick={() => handleButtonCClick("rechercheParProduit")} type="submit" className="BTN-Searche-admin"> PAR PRODUIT </button>
          <button onClick={() => handleButtonCClick("liste")} type="submit" className="BTN-Searche-admin">Liste Commande</button>
        </form>
      </div>
      {rendreCommandes()}

      <p className="listProduit">LISTE DE PRODUITS</p>
      <div className="searche-bar-admin">
        <form onSubmit={handleSearchProduitSubmit}>
          <input type="search" placeholder="Recherchez le nom de produit" 
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}/>
          <button onClick={() => handleButtonPClick("rechercheParProduit")} type="submit" className="BTN-recherche">RECHERCHE</button>
          <button onClick={() => handleButtonPClick("rechercheParCategorie")} className="BTN-Searche-admin" >PAR CATEGORIE</button>
          <button onClick={() => handleButtonPClick("rechercheParPrix")} className="BTN-Searche-admin">PAR PRIX</button>
          <button onClick={() => handleButtonPClick("liste")} className="BTN-Searche-admin">Liste des produit</button>
        </form>

      </div>
      {rendreProduits()}

      <p className="modification-title">MODIFICATION DANS PRODUIT</p>
      <div className="modification-produit">
        <div className="row-modification">
          {/* Modifier Produit Form */}
          <div className="modifier-form">
            <h2>Modifier Produit</h2>
            <form>
              <div className="modifier-produit">
                <label for="nom">Nom:</label>
                <input
                  type="text"
                  className="modifier"
                  id="nom"
                  placeholder="Enter Nom"
                  value={selectedProductInfo.nom}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="modifier-produit">
                <label for="prix">Prix:</label>
                <input
                  type="number"
                  className="modifier"
                  id="prix"
                  placeholder="Enter Prix"
                  value={selectedProductInfo.prix}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="modifier-produit">
                <label for="stock">Stock:</label>
                <input
                  type="number"
                  className="modifier"
                  id="stock"
                  placeholder="Enter Stock"
                  value={selectedProductInfo.stock}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="modifier-produit">
                <label for="image">Image:</label>
                <input
                  type="text"
                  className="modifier"
                  id="image"
                  placeholder="Enter Image URL"
                  value={selectedProductInfo.image}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="modifier-produit">
                <label for="rabais">Rabais:</label>
                <input
                  type="number"
                  className="modifier"
                  id="rabais"
                  placeholder="Enter Rabais"
                  value={selectedProductInfo.rabais}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="modifier-produit">
                <label for="description">Description:</label>
                <textarea
                  className="modifier"
                  id="description"
                  placeholder="Enter Description"
                  value={selectedProductInfo.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button className="BTN-modifier" onClick={updateProduit}>
                Mettre à jour
              </button>
            </form>
          </div>

          {/* Ajouter Produit Form */}
          <div className="ajouter-form">
            <h2>Ajouter Produit</h2>
            <form>
              <div className="ajouter-produit">
                <label for="nom">Nom:</label>
                <input
                  type="text"
                  className="ajouter"
                  id="nom"
                  placeholder="Enter Nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
              </div>
              <div className="ajouter-produit">
                <label for="prix">Prix:</label>
                <input
                  type="text"
                  className="ajouter"
                  id="prix"
                  placeholder="Enter Prix"
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                  required
                />
              </div>
              <div className="ajouter-produit">
                <label for="stock">Stock:</label>
                <input
                  type="text"
                  className="ajouter"
                  id="stock"
                  placeholder="Enter Stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  required
                />
              </div>
              <div className="ajouter-produit">
                <label for="image">Image:</label>
                <input
                  type="text"
                  className="ajouter"
                  id="image"
                  placeholder="Enter Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>
              <div className="ajouter-produit">
                <label for="catalogue">Categorie:</label>
                <select
                  id="catalogue"
                  className="ajouter"
                  value={catalogue}
                  onChange={(e) => setCatalogue(e.target.value)}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((categorie) => (
                    <option
                      key={categorie.id_categorie}
                      value={categorie.id_categorie}
                    >
                      {categorie.nom_categorie}
                    </option>
                  ))}
                </select>
              </div>
              <div className="ajouter-produit">
                <label for="rabais">Rabais:</label>
                <input
                  type="text"
                  className="ajouter"
                  id="rabais"
                  placeholder="Enter Rabais"
                  value={rabais}
                  onChange={(e) => setRabais(e.target.value)}
                  required
                />
              </div>
              <div className="ajouter-produit">
                <label for="description">Description:</label>
                <textarea
                  className="ajouter"
                  id="description"
                  placeholder="Enter Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <button className="BTN-ajouter" onClick={ajouterProduct}>
                Ajouter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEspace;
