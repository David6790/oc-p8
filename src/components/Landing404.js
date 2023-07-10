import React from "react";
import Layout from "./Layout";
import { NavLink } from "react-router-dom";

const Landing404 = () => {
  return (
    <Layout>
      <div className="errorPage">
        <h1>404</h1>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>

        <NavLink to="/">
          <span>Retourner sur la page d'accueil</span>
        </NavLink>
      </div>
    </Layout>
  );
};

export default Landing404;
