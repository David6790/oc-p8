import React from "react";
import Layout from "./Layout";
import { useLocation } from "react-router-dom";

const PageLogement = () => {
  const location = useLocation();
  const { myState } = location.state;
  const logement = myState.logement;

  return (
    <Layout>
      <div>
        <h1>{logement.title}</h1>
        <img
          src={logement.pictures ? logement.pictures[0] : logement.picture}
          alt=""
        />
      </div>
    </Layout>
  );
};

export default PageLogement;
