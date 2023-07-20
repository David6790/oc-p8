import React from "react";
import Ratings from "./Ratings";

const AccomodationDetails = ({ accomodation }) => {
  return (
    <div className="cardDetailContainer">
      <div className="cardTitleTags">
        <h1>{accomodation.title}</h1>
        <span>{accomodation.location}</span>
        <div className="tags">
          {accomodation.tags &&
            accomodation.tags.map((item) => (
              <div className="tagCard" key={crypto.randomUUID()}>
                {item}
              </div>
            ))}
        </div>
      </div>
      <div className="ownerRatings">
        <div className="owner">
          <div className="ownerName">{accomodation.host.name}</div>
          <div className="ownerPicture">
            <img src={accomodation.host.picture} alt="" />
          </div>
        </div>
        <div className="ratings">
          <Ratings accomodation={accomodation} />
        </div>
      </div>
    </div>
  );
};

export default AccomodationDetails;
