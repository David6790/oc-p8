import React from "react";
import { NavLink } from "react-router-dom";

const CardLogement = ({ logement }) => {
  return (
    <NavLink to="./logement" state={{ myState: { logement } }}>
      {logement && (
        <div className="cardLogement">
          <div className="cardLogement_image">
            <img src={logement.cover} alt="" />
          </div>
          <div className="cardLogement_titre">
            <div className="cardLogement_titre_1">
              <span>{logement.title}</span>
            </div>
          </div>
        </div>
      )}
    </NavLink>
  );
};

export default CardLogement;
