import React from "react";
import Ratings from "./Ratings";

const LogementDetails = ({ logement }) => {
  return (
    <div className="cardDetailContainer">
      <div className="cardTitleTags">
        <h1>{logement.title}</h1>
        <span>{logement.location}</span>
        <div className="tags">
          {logement.tags &&
            logement.tags.map((item) => (
              <div className="tagCard" key={crypto.randomUUID()}>
                {item}
              </div>
            ))}
        </div>
      </div>
      <div className="ownerRatings">
        <div className="owner">
          <div className="ownerName">{logement.host.name}</div>
          <div className="ownerPicture">
            <img src={logement.host.picture} alt="" />
          </div>
        </div>
        <div className="ratings">
          <Ratings logement={logement} />
        </div>
      </div>
    </div>
  );
};

export default LogementDetails;
