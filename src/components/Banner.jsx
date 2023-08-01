import React from "react";

// creation du composant banner. En lui passant des props pour le contenu du text et la source de l'image
const Banner = ({ content, imageSource }) => {
  return (
    <div className="banner">
      <img src={imageSource} alt="banner" />
      <p>{content}</p>
    </div>
  );
};

export default Banner;
