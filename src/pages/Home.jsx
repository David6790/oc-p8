// composant de la page d'acceuil

import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import CardAccomodation from "../components/pageAccomodation/CardAccomodation";
import api from "../utils/api";
import Landing404 from "./Landing404";

const Home = () => {
  const [accomodations, setAccomodations] = useState([]);

  // appel à l'API pour recuperer les données de logements.
  useEffect(() => {
    api.getAccomodations().then((json) => {
      setAccomodations(json);
    });
  }, []);

  return (
    <Layout>
      <Banner
        imageSource="./img/banner.png"
        content="Chez vous, partout et ailleurs"
      />
      <div className="cardContainer">
        {accomodations ? (
          accomodations.map((item) => (
            <NavLink key={crypto.randomUUID()} to={`/accomodation/${item.id}`}>
              <CardAccomodation key={crypto.randomUUID()} accomodation={item} />
            </NavLink>
          ))
        ) : (
          <Landing404 />
        )}
      </div>
    </Layout>
  );
};

export default Home;
