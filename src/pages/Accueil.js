import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer";

const Accueil = () => {
  return (
    <Layout>
      <Banner
        imageSource="./img/banner.png"
        content="Chez vous, partout et ailleurs"
      />
      <CardContainer />
    </Layout>
  );
};

export default Accueil;
