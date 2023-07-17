import React from "react";
import Slider from "../components/pageLogement/Slider";
import CollapesUnit from "../components/CollapesUnit";
import LogementDetails from "../components/pageLogement/LogementDetails";
import Layout from "../components/layout/Layout";

const PageLogement = ({ accomodation }) => {
  return (
    <Layout>
      <Slider accomodation={accomodation} />
      <LogementDetails accomodation={accomodation} />
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

export default PageLogement;
