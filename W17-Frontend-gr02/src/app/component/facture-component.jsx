import React, { useState, useEffect } from "react";
import "../globals.css";
import { parse } from "path";
import axios from "axios";

const FactureComponent = () => {
  const p = JSON.parse(window.localStorage.getItem("stocker"));
  const [boul, setBoul] = useState(false);
  const com = JSON.parse(window.sessionStorage.getItem("commande"));
  const id = JSON.parse(window.sessionStorage.getItem("userData"));
  const qt = window.sessionStorage.getItem("qt");
  const [state, setState] = useState({
    id_produit  : com.id_produit,
    id_user: id,
    qt: qt,
    date:"",
  })
  useEffect(() => {
    if (boul) {
      if ( window.sessionStorage.getItem("userData") === null) {
        return window.sessionStorage.setItem("page", "1");
      } else{
        return window.sessionStorage.setItem("page", "2");
      }
    }
  }, [boul]);
  function handleCommande() {
    axios({
      method: "POST",
      url: "http://localhost:8080/W17-venteEnLigne/ExecuteServer/ajoutCommande",
      data: JSON.stringify({
          id_produit  : p.id_produit,
          id_user: id,
          qt: qt,
          status:2,
          date:state.date,
      }),
      timeout: 4000,
    })
    .catch((error) => {
      console.error("Error fetching data");
    });
    setBoul(true);
    window.location.reload();
  }

  const handleChange = (e) => {
    const { title, value } = e.target;
    setState((prevState) => ({
        ...prevState,
        [title]: value,
    }));
};
  return (
    <div className="dadClass">
      <div className="tittre">
        <h1>Confirmation de Commande</h1>
      </div>

      <section>
        <h2>Articles Achetés</h2>
        {/* <div className="item">
          <img
            src="https://www.exposedskincare.com/cdn/shop/products/ExposedBasicKit_2048x.jpg?v=1649109962"
            alt="Nom de l'article"
          />
          <div>
            <p>Nom de larticle</p>
            <p>Prix : $XX.XX</p>
          </div>
          <button type="button">X</button>
        </div> */}

        <div className="item">
          <img
            src={p.imageProduit}
            alt="Nom de l'article"
          />
          <div>
            <p>{p.nom_produit}</p>
            <p>{p.prix}</p>
          </div>
          <button type="button">X</button>
        </div>
        <div>
          <h2>{(parseFloat(p.prix))*(parseInt(window.sessionStorage.getItem("qt")))}</h2>
        </div>
      </section>

      <section>
        <form onSubmit={handleCommande}>
          <h2>Informations du Client</h2>
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="nom"  title="nom" required value={com.prenom} onChange={handleChange} />

          <label htmlFor="adresse">Adresse :</label>
          <input type="text" id="adresse" title="adresse" name="adresse" required value={com.adress} onChange={handleChange}/>

          <h2>Informations de Paiement</h2>
          <label htmlFor="carte">Numéro de Carte :</label>
          <input type="text" id="carte" title="carte" name="carte" required />

          <label htmlFor="expiration">Date dExpiration :</label>
          <input
            type="date"
            title="date"
            id="expiration"
            name="expiration"
            value={state.date}
            placeholder="MM/AAAA"
            required
            onChange={handleChange}
          />
          <button type="submit">Confirmer la Commande</button>
        </form>
      </section>
    </div>
  );
};

export default FactureComponent;
