import React, { useState } from "react";

const Slider = ({ logement }) => {
  const [indice, setIndice] = useState(0);

  const handleClickRight = () => {
    indice < logement.pictures.length - 1
      ? setIndice(indice + 1)
      : setIndice(0);
  };
  const handleClickLeft = () => {
    if (indice === 0) {
      setIndice(logement.pictures.length - 1);
    } else {
      setIndice(indice - 1);
    }
  };
  return (
    <div>
      <div className="slideShowContainer">
        <img
          className="sliderImage"
          src={logement.pictures ? logement.pictures[indice] : logement.picture}
          alt=""
        />
        {logement.pictures.length > 1 ? (
          <div className="arrow">
            <img
              onClick={handleClickLeft}
              src="./img/arrowLeft.png"
              alt="arrow-left"
              className="arrow-left"
            />
            <img
              onClick={handleClickRight}
              src="./img/arrowRight.png"
              alt="arrow-right"
              className="arrow-right"
            />
          </div>
        ) : (
          ""
        )}

        <span>
          {logement.pictures
            ? `${indice + 1} / ${logement.pictures.length}`
            : `${logement.picture.length}`}
        </span>
      </div>
    </div>
  );
};

export default Slider;
