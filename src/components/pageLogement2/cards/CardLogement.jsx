import React from "react";
import { NavLink } from "react-router-dom";

const CardLogement = ({ accomodation }) => {
  return (
    <NavLink to="./logement" state={{ myState: { accomodation } }}>
      {accomodation && (
        <div className="cardLogement">
          <div className="cardLogement_image">
            <img src={accomodation.cover} alt="" />
          </div>
          <div className="cardLogement_titre">
            <div className="cardLogement_titre_1">
              <span>{accomodation.title}</span>
            </div>
          </div>
        </div>
      )}
    </NavLink>
  );
};

export default CardLogement;