"use client";
import HeaderContainer from "./container/header-container";
import React, { useState, useEffect } from "react";
import FooterContainer from "./container/FooterContainer";

import FactureContainer from "./container/facture-container";

import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./index.css";
import "./flags.css";

import Connexion from "./component/Connexion-component";

import AdminEspace from "./component/admin-espace-component";
import DetailsContainer from "./container/details-container";
import EspaceClient from "./component/Espace-Client-Component";
import Accueil from "./component/accueil-component";
import "./globals.css";

export default function Home() {
  const [userType, setUserType] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedPage = window.sessionStorage.getItem("page");
    const page = storedPage != null ? parseInt(storedPage) : 0;
    setUserType(page);
    setIsLoggedIn(page === 2 || page === 3);
  }, []); 

  return (
    <body className="body">
      <>
        <HeaderContainer setUserType={setUserType} isLoggedIn={isLoggedIn}/>
          {userType === 0 && <Accueil setUserType={setUserType} />}
          {userType === 1 && <Connexion setUserType={setUserType} />}
          {userType === 2 && <EspaceClient setUserType={setUserType} />}
          {userType === 3 && <AdminEspace setUserType={setUserType} />}
          {userType === 4 && <DetailsContainer setUserType={setUserType} />}
          {userType === 5 && <FactureContainer setUserType={setUserType} />}

        <FooterContainer />
      </>
    </body>
  );
}
