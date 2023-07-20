import React from "react";
import Slider from "../components/pageAccomodation/Slider";
import CollapesUnit from "../components/CollapesUnit";
import AccomodationDetails from "../components/pageAccomodation/AccomodationDetails";
import Layout from "../components/layout/Layout";

const PageAccomodation = ({ accomodation }) => {
  return (
    <Layout>
      <Slider accomodation={accomodation} />
      <AccomodationDetails accomodation={accomodation} />
      <div className="logementCollapseContainer">
        <div className="collapseLogement">
          <CollapesUnit
            title={"Description"}
            content={accomodation.description}
          />
        </div>

        <div className="collapseLogement">
          <CollapesUnit
            title={"Equipement"}
            content={accomodation.equipments.map((item) => (
              <p key={crypto.randomUUID()}>{item}</p>
            ))}
          />
        </div>
      </div>
    </Layout>
  );
};

export default PageAccomodation;
