import React from "react";
import Layout from "../components/Layout/Layout";
import { useLocation } from "react-router-dom";

import LogementDetails from "../components/pageLogement/LogementDetails";
import CollapesUnit from "../components/CollapesUnit";
import Slider from "../components/pageLogement/Slider";

const PageLogement = () => {
  const location = useLocation();
  const { myState } = location.state;
  const accomodation = myState.accomodation;

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
