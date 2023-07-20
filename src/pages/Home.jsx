import React from "react";
import Layout from "../components/layout/Layout";
import Banner from "../components/Banner";
import CardLogement from "../components/pageAccomodation/CardAccomodation";
import { NavLink } from "react-router-dom";

const Home = ({ accomodations }) => {
  return (
    <Layout>
      <Banner
        imageSource="./img/banner.png"
        content="Chez vous, partout et ailleurs"
      />
      <div className="cardContainer">
        {accomodations.map((item) => (
          <NavLink key={crypto.randomUUID()} to={`/accomodation + ${item.id}`}>
            <CardLogement key={crypto.randomUUID()} accomodation={item} />
          </NavLink>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
