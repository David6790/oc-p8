import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/Banner";
import CollapesUnit from "../components/CollapesUnit";

const About = () => {
  return (
    <Layout>
      <Banner imageSource="./img/bannerApropos.png" />
      <div className="collapesAboutContainer">
        <CollapesUnit
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes."
        />
        <CollapesUnit
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <CollapesUnit
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <CollapesUnit
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
        correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </Layout>
  );
};

export default About;
