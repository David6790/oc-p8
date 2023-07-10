import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer";

const Accueil = () => {
  return (
    <Layout>
      <Banner />
      <CardContainer />
    </Layout>
  );
};

export default Accueil;
