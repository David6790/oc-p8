import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CollapesContainerAbout from "../components/CollapesContainerAbout";

const Apropos = () => {
  return (
    <Layout>
      <Banner imageSource="./img/bannerApropos.png" />
      <CollapesContainerAbout />
    </Layout>
  );
};

export default Apropos;
