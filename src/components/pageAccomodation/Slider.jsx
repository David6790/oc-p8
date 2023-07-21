import React, { useState } from "react";

const Slider = ({ accomodation }) => {
  const [indice, setIndice] = useState(0);

  const handleClickRight = () => {
    indice < accomodation.pictures.length - 1
      ? setIndice(indice + 1)
      : setIndice(0);
  };
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
        <div className="arrow">
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
