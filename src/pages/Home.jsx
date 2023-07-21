import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import CardAccomodation from "../components/pageAccomodation/CardAccomodation";
import api from "../components/utils/api";

const Home = () => {
  const [accomodations, setAccomodations] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    !isMounted &&
      api.getAccomodations().then((json) => {
        setAccomodations(json);
        setIsMounted(true);
      });
  }, [isMounted]);

  return (
    <Layout>
      <Banner
        imageSource="./img/banner.png"
        content="Chez vous, partout et ailleurs"
      />
      <div className="cardContainer">
        {accomodations.map((item) => (
          <NavLink key={crypto.randomUUID()} to={`/accomodation/${item.id}`}>
            <CardAccomodation key={crypto.randomUUID()} accomodation={item} />
          </NavLink>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
