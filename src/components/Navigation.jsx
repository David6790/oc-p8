import React from "react";
import { NavLink } from "react-router-dom";

// composant qui gère la barre de navigation. Ajout d'un style conditionel avec une ternaire pour avoir le lien souligné quand la page est active.
const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/apropos"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>À Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
