import React from "react";

const Banner = ({ imageSource, content }) => {
  return (
    <div className="banner">
      <img src={imageSource} alt="banner vue sur la mer" />

      <p>{content}</p>
    </div>
  );
};

export default Banner;
