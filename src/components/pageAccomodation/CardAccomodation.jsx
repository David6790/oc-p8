// creation du composant qui affiche chaque logement dans une card dans la page d'acceuil.

import React from "react";
// faire passer une props qui correspond aux données liées a un logement
const CardAccomodation = ({ accomodation }) => {
  return (
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
  );
};

export default CardAccomodation;
