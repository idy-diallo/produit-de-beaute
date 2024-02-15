"use client";
import React, { useState, useRef, useEffect} from "react";
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import axios from "axios";

    function CLients(){
        const [state, setState] = useState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirm: "",
            tel: "",
            address: "",
          })
        const id = typeof window !== 'undefined' ?  window.sessionStorage.getItem("userData") : undefined;
        const [commandesDataUser, setcommandesDataUser] = useState([]);
        const [commandesFilter, setcommandesFilter] = useState([]);
        const [searchProduit, setSearchProduit] = useState("");
        const [compte, setCompte] = useState("Mon Compte");
        useEffect(() => {
            //Récupérer la liste des Commandes
            axios({
              method: "POST",
              url: "http://localhost:8080/W17-venteEnLigne/ExecuteServer/listCommandeUser",
              data: JSON.stringify({id:id}),
              timeout: 4000,
            })
            .then((response) => {
                setCompte(response.data[0].user.nom)
                setcommandesDataUser(response.data);
                setcommandesFilter(response.data);
            })
            .catch((error) => {
              console.error("Error fetching data");
            });
        
        }, [id]);

        //Information de l'utilisateur
        const infosUser = () => {
            setState(() => ({
                firstName: commandesDataUser[0].user.prenom,
                lastName: commandesDataUser[0].user.nom,
                email: commandesDataUser[0].user.email,
                password: commandesDataUser[0].password,
                confirm: commandesDataUser[0].password,
                tel: commandesDataUser[0].user.tel,
                address: commandesDataUser[0].user.adress,
            }));
        }


        const [activeIndex, setActiveIndex] = useState(1);
        const toast = useRef(null);
        const items = [
            {
                label: 'Commande passée'
            },
            {
                label: 'Commande expédié'
            },
            {
                label: 'En cours de livraison'
            },
            {
                label: 'Livré'
            }
        ];
        const handleChange = (e) => {
            const { title, value } = e.target;
            setState((prevState) => ({
                ...prevState,
                [title]: value,
            }));
        };

        //Modifier infos utilisateur
        const updateInfo = () => {
            axios({
                method: "POST",
                url: "http://localhost:8080/W17-venteEnLigne/ExecuteServer/updateUser",
                data: JSON.stringify({
                    id: id,
                    firstName: state.firstName,
                    lastName: state.lastName,
                    email: state.email,
                    tel: state.tel,
                    address: state.address,
                    password: commandesDataUser[0].user.password,
                }),
                timeout: 4000,
              })
              .then((response) => {
                if (response.ok) {
                    setState({
                        firstName: "",
                        lastName: "",
                        email: "",
                        tel: "",
                        address: "",
                    });
                }
              })
              .catch((error) => {
                console.error("Error fetching data");
              });
        }

        //Modifier password
        const updatePassword = () => {
            const password = state.password;
            const confirm = state.confirm;
            if (password === confirm) {
                axios({
                    method: "POST",
                    url: "http://localhost:8080/W17-venteEnLigne/ExecuteServer/updatePassword",
                    data: JSON.stringify({
                        id: id,
                        password: password,
                    }),
                    timeout: 4000,
                  })
                  .then((response) => {
                    if (response.ok) {
                        setState({
                            password: "",
                            confirm: "",
                        });
                    }
                    alert('Password modifier avec succès');
                })
                .catch((error) => {
                    console.error("Error fetching data");
                });
            } else{
                    alert("Oup's les deux cases ne sont pas identique !")
            }
        }

        const handleButtonCClick = (button) => {
            // alert(button);
            if (button === 'rechercheParProduit') {
                const filteredCommandes = commandesFilter.filter((commande) => commande.products.nom_produit.toLowerCase().includes(searchProduit.toLowerCase()));
                setcommandesDataUser(filteredCommandes);
            } else if (button === 'rechercheParDate') {
                const filteredCommandes = commandesFilter.filter((commande) => commande.dateCommande.toLowerCase().includes(searchProduit.toLowerCase()));
                setcommandesDataUser(filteredCommandes);
            } else if (button === 'liste') {
                setcommandesDataUser(commandesFilter);
            }
          }


        return(
            <div className="client">
                <p className="admin">Bonjour {compte} !</p>
                <p className="listCommande">LISTE ACHAT</p>
                <div className="searche-bar-admin">
                    <form>
                        <input 
                            type="search" 
                            placeholder="recherche par produit"
                            value={searchProduit}
                            onChange={(e) => setSearchProduit(e.target.value)}
                            className="bar-recherche"
                        />
                        <button onClick={() => handleButtonCClick("rechercheParProduit")} type="button" className="BTN-recherche">RECHERCHE</button>
                        <button onClick={() => handleButtonCClick("rechercheParDate")} type="button" className="BTN-Searche-admin">PAR DATE</button>
                        <button onClick={() => handleButtonCClick("liste")} type="button" className="BTN-Searche-admin">Liste des Achats</button>
                    </form>
                </div>

                <div>
                    <table className="table-center">
                        <thead>
                            <tr className="row-table">
                                <th>No Command</th>
                                <th>Produit</th>
                                <th>Prix</th>
                                <th>Quantite</th>
                                <th>Totale</th>
                                <th>Date-Commande</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commandesDataUser.map((commande) => (
                                <tr key={commande.id_commande}>
                                <td>{commande.id_commande}</td>
                                <td>{commande.products.nom_produit}</td>
                                <td>{commande.products.prix}</td>
                                <td>{commande.quantite}</td>
                                <td>{commande.products.prix * commande.quantite}</td>
                                <td>{commande.dateCommande}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <hr />

                <p className="modification-title">MODIFIER SES INFORMATIONS</p>
                <div>               
                    <div className="modifier-form">
                        <h2 style={{color:"red", cursor:"pointer"}} onClick={infosUser}>cliquer ici pour voir vos informations</h2>
                        <form>
                            <div className="modifier-info">
                                <label for="nom">Prenom:</label>
                                <input type="text" className="modifier" id="prenom" placeholder="Nouveau Prenom" title="firstName" required value={state.firstName} onChange={handleChange}/>
                            </div>

                            <div className="modifier-info">
                                <label for="nom">Nom:</label>
                                <input type="text" className="modifier" id="nom" placeholder="Nouveau Nom" title="lastName" required value={state.lastName} onChange={handleChange}/>
                            </div>
                            
                            <div className="modifier-info">
                                <label for="emeil">E-mail:</label>
                                <input type="email" className="modifier" id="email" placeholder="Nouveau email" title="email" required value={state.email} onChange={handleChange}/>
                            </div>

                            <div className="modifier-info">
                                <label for="tel">Tél:</label>
                                <input type="text" className="modifier" id="tel" placeholder="Nouveau Téléphone" title="tel" required defaultValue={state.tel} onChange={handleChange}/>
                            </div>
                            
                            <div className="modifier-info">
                                <label for="adresse">Adresse:</label>
                                <input type="text" className="modifier" id="adresse" placeholder="Nouvelle Adresse" title="address" required value={state.address} onChange={handleChange}/>
                            </div>

                            <button type="submit" className="BTN-modifier" onClick={updateInfo}>Mettre à jour</button>
                        </form>
                    </div>

                    <div className="password-form">
                        <h2 style={{color:"red", cursor:"pointer"}} onClick={infosUser}>Modifier password</h2>
                        <form>
                            
                            <div className="modifier-info">
                                <label for="password">Password:</label>
                                <input type="password" className="modifier" id="password" placeholder="Nouveau Password" title="password" required value={state.password} onChange={handleChange}/>
                            </div>
                            
                            <div className="modifier-info">
                                <label for="confirm">Confirmé Password:</label>
                                <input type="password" className="modifier" id="confirm" placeholder="Confirmé Password" title="confirm" required value={state.confirm} onChange={handleChange}/>
                            </div>

                            <button type="submit" className="BTN-modifier" onClick={updatePassword}>Mettre à jour</button>
                        </form>
                    </div>
                </div>               

                
                <hr />
                <div className="commande">
                    <p>Reférence : MTN12345</p>
                    <table className="table-center">
                        <thead>
                            <tr className="row-table">
                                <th>article</th>
                                <th>prix</th>
                                <th>quantité</th>
                                <th>Totale</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td> 
                                </tr>
                        </tbody>
                    </table>
                </div>

                <div className="card">
                    <Toast ref={toast}></Toast>
                    <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
                </div>

                
            </div>
        )
}
export default CLients;