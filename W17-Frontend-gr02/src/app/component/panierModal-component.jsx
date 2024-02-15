import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PanierModal = ({ isOpen, onClose, productInfo }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    quantity: "",
  });
  const [boul, setBoul] = useState(false);
  const p = Object.entries(productInfo);
  
  useEffect(() => {
    setProduct(productInfo);
  }, [productInfo]);
  useEffect(() => {
    if (boul) {
      if ( window.sessionStorage.getItem("userData") === null) {
        return window.sessionStorage.setItem("page", "1");
      } else{
        return window.sessionStorage.setItem("page", "5");
      }
    }
  }, [boul]);

  function supprimer() {
    setProduct({
      name: "",
      price: "",
      image: "",
      quantity: "",
    });
    window.localStorage.removeItem("stocker");
    window.location.reload();
  } 

  function commande() {
    setBoul(true);
    window.location.reload();
  }
    
  return (
    <Modal
      className="panier-modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Panier Modal"
    >
      <div className="panier-modal-close" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      {product.image !== "" ? (
        <div className="modalPanier">
        <h1>Shopping Cart</h1>
        <div className="modal-content">
            <div className="modal-imageContainer">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="modal-textContainer">
                <h2>{product.name}</h2>
                <p className="panier-quantity">Qty:{product.quantity} </p>
                <p className="panier-price">Price: ${product.price}</p>
                <button className="panierSupprimer" onClick={supprimer}>supprimer</button>
            </div>
        </div>
        <button className="panier-acheter" onClick={commande}>Payer</button>
      </div>
      ) : <div className="modalPanier"><h1>Shopping Cart empty!</h1></div>}
    </Modal>
  );
};

export default PanierModal;