import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { Navigate, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Slider from "../components/pageAccomodation/Slider";
import CollapesUnit from "../components/CollapesUnit";
import AccomodationDetails from "../components/pageAccomodation/AccomodationDetails";
import Landing404 from "./Landing404";

const PageAccomodation = () => {
  // recupérer l'id de l'url avec useParam()
  const { id } = useParams();
  const [accomodation, setAccomodation] = useState([]);

  // appel de l'api en cherchant juste à faire appel au logement dont le ID correspond a l'id de l'URL
  useEffect(() => {
    api.getAccomodation(id).then((data) => {
      setAccomodation(data);
    });
  }, [id]);

  return accomodation ? (
    <Layout>
      <Slider accomodation={accomodation} />
      <AccomodationDetails accomodation={accomodation} />
      <div className="logementCollapseContainer">
        <div className="collapseLogement">
          <CollapesUnit
            title={"Description"}
            content={accomodation.description}
          />
        </div>

        <div className="collapseLogement">
          <CollapesUnit
            title={"Equipement"}
            content={
              accomodation.equipments ? (
                accomodation.equipments.map((item) => (
                  <p key={crypto.randomUUID()}>{item}</p>
                ))
              ) : (
                <Landing404 />
              )
            }
          />
        </div>
      </div>
    </Layout>
  ) : (
    <Navigate to="/landing404" />
  );
};

export default PageAccomodation;
