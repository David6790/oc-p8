import React from "react";

const Banner = ({ content,imageSource }) => {
  return (
    <div className="banner">
      <img src={imageSource} alt="banner" />

      <p>{content}</p>
    </div>
  );
};

export default Banner;
