import React, { useEffect, useState } from "react";
import api from "../components/utils/api";
import { Navigate, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Slider from "../components/pageAccomodation/Slider";
import CollapesUnit from "../components/CollapesUnit";
import AccomodationDetails from "../components/pageAccomodation/AccomodationDetails";

const PageAccomodation = () => {
  const { id } = useParams();
  const [accomodation, setAccomodation] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    !isMounted &&
      api.getAccomodations().then((data) => {
        setAccomodation(data.find((ele) => ele.id === id));
        setIsMounted(true);
      });
  }, [isMounted, id]);

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
              accomodation.equipments
                ? accomodation.equipments.map((item) => (
                    <p key={crypto.randomUUID()}>{item}</p>
                  ))
                : ""
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
