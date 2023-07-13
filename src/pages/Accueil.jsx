import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/Banner";
import CardsContainer from "../components/pageLogement/cards/CardsContainer";




const Accueil = () => {
  return (
    <Layout>
      <Banner
        imageSource="./img/banner.png"
        content="Chez vous, partout et ailleurs"
      />
     <CardsContainer/>
    </Layout>
  );
};

export default Accueil;
