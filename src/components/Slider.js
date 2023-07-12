import React, { useState } from "react";

const Slider = ({ logement }) => {
  const [indice, setIndice] = useState(0);

  const handleClick = () => {
    setIndice(indice + 1);
  };
  return (
    <div>
      <div className="slideShowContainer">
        <img
          className="sliderImage"
          src={logement.pictures ? logement.pictures[indice] : logement.picture}
          alt=""
        />
        <div className="arrow">
          <img
            src="./img/arrowLeft.png"
            alt="arrow-left"
            className="arrow-left"
          />
          <img
            onClick={handleClick}
            src="./img/arrowRight.png"
            alt="arrow-right"
            className="arrow-right"
          />
        </div>
        <span>
          {logement.pictures
            ? `${indice + 1}/ ${logement.pictures.length}`
            : `${logement.picture.length}`}
        </span>
      </div>
    </div>
  );
};

export default Slider;
