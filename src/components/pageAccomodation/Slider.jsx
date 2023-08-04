// composant qui gère le slider dans la page dediée à chaque logement. Gestion du defilement à l'infini du carousel

import React, { useState } from "react";

// creation d'un setter d'indice pour trouver les images dans le array pictures de chaque logement
const Slider = ({ accomodation }) => {
  const [indice, setIndice] = useState(0);

  // gestion du click sur la fleche de droite
  const handleClickRight = () => {
    indice < accomodation.pictures.length - 1
      ? setIndice(indice + 1)
      : setIndice(0);
  };

  // gestion du click sur la fleche de gauche
  const handleClickLeft = () => {
    if (indice === 0) {
      setIndice(accomodation.pictures.length - 1);
    } else {
      setIndice(indice - 1);
    }
  };

  return accomodation.pictures ? (
    <div>
      <div className="slideShowContainer">
        <img
          className="sliderImage"
          src={accomodation.pictures[indice]}
          alt=""
        />
        <div
          className={accomodation.pictures.length > 1 ? "arrow" : "displayNone"}
        >
          <img
            onClick={handleClickLeft}
            src="../img/arrowLeft.png"
            alt="arrow-left"
            className="arrow-left"
          />
          <img
            onClick={handleClickRight}
            src="../img/arrowRight.png"
            alt="arrow-right"
            className="arrow-right"
          />
        </div>

        <span>
          {accomodation.pictures
            ? `${indice + 1} / ${accomodation.pictures.length}`
            : `${accomodation.picture.length}`}
        </span>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Slider;
