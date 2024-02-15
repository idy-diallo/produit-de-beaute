"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import imageTop from "../../../public/image_top.jpg";
import "../globals.css";
import DetailsComponent from './details-component';


const Accueil = ({setUserType}) => {
  const [products, setProducts] = useState([]);
  const [selectedCategorie, setSelectedCategorie] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [selectedProductForDetails, setSelectedProductForDetails] = useState(null);


  const detail = (p) => {
    setUserType(4);
    window.localStorage.setItem("stocker", JSON.stringify(p));
  }

  useEffect(() => {

    //les produits par nom-categorie

    if (selectedCategorie) {
        axios
          .post("http://localhost:8080/W17-venteEnLigne/ExecuteServer/produitsParCategorie", {
            nom_categorie: selectedCategorie,
          })
          .then((response) => {
            setProducts(response.data);
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
          });

    } else {

    // tous les produits

    axios
        .get("http://localhost:8080/W17-venteEnLigne/ExecuteServer/listProduits")
        .then((response) => {
            setProducts(response.data);
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
    }

  }, [selectedCategorie]);

  const handleCategorieClick = (nomCategorie) => {
    setSelectedCategorie(nomCategorie === "POUR ELLE" ? null : (nomCategorie === "POUR LUI"
    ? ("Body Care","Hair Care")
    : nomCategorie));
  }

  // recherche un produit
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  }

  const handleSearch = () => {
    const filteredProducts = products.filter((product) => product.nom_produit.toLowerCase().includes(searchInput.toLowerCase()));
    setProducts(filteredProducts);
  }

  

  return (
    // top de la page
    <div>
      <div className="image-top">
        <img src={imageTop.src} alt="Snow" style={{ width: "100%" }} />
        <div className="centered">Trouver votre bonheur au naturel</div>
      </div>

      {/* bare de recherche section     */}
      <div className="barSearch">
        <h1>
          La manière la plus facile de trouver les produits de soins parfaits
        </h1>
        <div className="search">
          <form className="search-container">
            <input
              type="text"
              id="search-bar"
              placeholder="Looking for some product..."
              value = {searchInput}
              onChange = {handleSearchInputChange}
            />
            <a href="#" onClick = {() => handleSearch()}>
              <img
                className="search-icon"
                src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
              />
            </a>
          </form>
        </div>
      </div>

      {/* section des categorie     */}
      <div className="container">
        <div className="left-column">
          <div className="box left-box" onClick={() => handleCategorieClick("POUR ELLE")}>
            <img
              src="https://images.pexels.com/photos/3762878/pexels-photo-3762878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="alternate text"
            />
            POUR ELLE {/*toutes les categories*/}
          </div>
          <div className="box left-box" onClick={() => handleCategorieClick("POUR LUI")}>
            <img
              src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="alternate text"
            />
            POUR LUI {/*affiche les categories hair care et body care */}
          </div>
        </div>
        <div className="right-column">
          <div className="box right-box">
            <div className="sub-box" onClick={() => handleCategorieClick("Skin care")}>
              <img
                src="https://images.pexels.com/photos/6767790/pexels-photo-6767790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="alternate text"
              />
              Skin Care
            </div>
            <div className="sub-box" onClick={() => handleCategorieClick("Oral care")}>
              <img
                src="https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="alternate text"
              />
              Oral Care
            </div>
            <div className="sub-box" onClick={() => handleCategorieClick("Hair care")}>
              <img
                src="https://images.pexels.com/photos/8015781/pexels-photo-8015781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="alternate text"
              />
              Hair Care
            </div>
            <div className="sub-box" onClick={() => handleCategorieClick("Body care")}>
              <img
                src="https://images.pexels.com/photos/3998005/pexels-photo-3998005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="alternate text"
              />
              Body Care
            </div>
          </div>
        </div>
      </div>

      {/* section gallerie et trie option */}

      <div className="container2">
        <div className="left-column2">
          {/* checkbox pour trie */}
          <h2>Selection Avancer</h2>
          <br />
          <form action="/action_page.php">
            <input
              type="checkbox"
              id="product1"
              name="product1"
              value="item1"
            />
            <label htmlFor="product1"> 5$ et -</label>
            <br />
            <br />
            <input
              type="checkbox"
              id="product2"
              name="product2"
              value="item2"
            />
            <label htmlFor="product2"> 20$ et -</label>
            <br />
            <br />
            <input
              type="checkbox"
              id="product3"
              name="product3"
              value="item3"
            />
            <label htmlFor="product3"> 20$ et +</label>
          </form>
        </div>
        <div className="right-column2">
          {/* section gallerie */}
            {Array.isArray(products) && products.map((product) => (
              <div className="card-img" key={product.id_produit}>
                <img
                  src={product.imageProduit}
                  alt={product.nom_produit}
                  style={{ width: "100%", height: "200px" }}
                />
                <h1>{product.nom_produit}</h1>
                <p className="price">${product.prix}</p>
                <p className="discount">{product.rabaisProduit}% Rabais</p>
                <p>{product.descriptionProduit}</p>
                {/* lien pour ouvrir details de produits */}
                <p>

                  <button onClick={() => detail(product)}>Voir le Produit</button>

                </p>
              </div>
            ))}
        </div>
      </div>
       {/* Render DetailsComponent if a product is selected */}
       {selectedProductForDetails && (
        <DetailsComponent
          selectedProduct={selectedProductForDetails}
          onClose={() => setSelectedProductForDetails(null)}
        />
      )}
    </div>
  );
};

export default Accueil;
