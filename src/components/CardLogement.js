import React from "react";

const CardLogement = ({ logement }) => {
  return (
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
  );
};

export default CardLogement;
