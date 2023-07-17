import React from "react";

const CardLogement = ({ accomodation }) => {
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

export default CardLogement;
