import React from "react";
import Layout from "../components/Layout/Layout";
import { useLocation } from "react-router-dom";

import LogementDetails from "../components/PageLogement/LogementDetails";
import CollapesUnitAbout from "../components/CollapesUnit";
import Slider from "../components/PageLogement/Slider";

const PageLogement = () => {
  const location = useLocation();
  const { myState } = location.state;
  const logement = myState.logement;

  return (
    <Layout>
      <Slider logement={logement} />
      <LogementDetails logement={logement} />
      <div className="logementCollapseContainer">
        <div className="collapseLogement">
          <CollapesUnitAbout
            title={"Description"}
            content={logement.description}
          />
        </div>

        <div className="collapseLogement">
          <CollapesUnitAbout
            title={"Equipement"}
            content={logement.equipments.map((item) => (
              <p key={crypto.randomUUID()}>{item}</p>
            ))}
          />
        </div>
      </div>
    </Layout>
  );
};

export default PageLogement;
