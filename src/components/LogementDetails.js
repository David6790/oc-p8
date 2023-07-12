import React from "react";
import Ratings from "./Ratings";

const LogementDetails = ({ logement }) => {
  return (
    <div>
      <h1>{logement.title}</h1>
      <Ratings logement={logement} />
    </div>
  );
};

export default LogementDetails;
