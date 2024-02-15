import React, { useState } from "react";
import Modal from "react-modal";
import "../globals.css";
import logo from "../../../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import PanierModal from "./panierModal-component";

const Header = ({ setUserType, isLoggedIn, onLogin, onLogout }) => {
  const [isPanierModalOpen, setIsPanierModalOpen] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const p = JSON.parse(window.localStorage.getItem("stocker"));

  const openPanierModal = () => {
    if (window.localStorage.getItem("stocker") != null) {
      setProductInfo({
        name: p.nom_produit,
        price: p.prix,
        image: p.imageProduit,
      });
    } else{
      setProductInfo({
        name: "",
        price: "",
        image: "",
      });
    }
    setIsPanierModalOpen(true);
  };

  const closePanierModal = () => {
    setIsPanierModalOpen(false);
  };
  const accueil = () => {
    setUserType(0);
  };

  return (
    <header>
      <div className="header">
        <div className="logo">
          <img src={logo.src} alt="Logo CASADY" />
        </div>
        <div className="nav">
        {/* <Link to="/">Accueil</Link> */}
          {/* <a href="#">Nos produits</a> */}
        </div>
        <div className="connexion">
          <div className="se connecter">
              <button onClick={accueil}>Accueil</button>
              <button onClick={() => {isLoggedIn ? (setUserType(0), onLogout()) : (setUserType(1), onLogin())} }>{isLoggedIn ? "Deconnexion" : "Se Connecter"}</button>
          </div>
          <div className="espace">
            <a href="#"><FontAwesomeIcon icon={faUser} />My Account</a>
            <a href="#"><FontAwesomeIcon icon={faHeart} />Wishlist</a>
            <button className="panier" onClick={openPanierModal}><FontAwesomeIcon icon={faShoppingCart} /></button>
          </div>
        </div>
      <PanierModal isOpen={isPanierModalOpen} onClose={closePanierModal} productInfo={productInfo} />
      </div>
    </header>
  );
};

export default Header;
