import React from "react";
import Layout from "./Layout";
import { useLocation } from "react-router-dom";
import Slider from "./Slider";

const PageLogement = () => {
  const location = useLocation();
  const { myState } = location.state;
  const logement = myState.logement;

  return (
    <Layout>
      <Slider logement={logement} />
    </Layout>
  );
};

export default PageLogement;
