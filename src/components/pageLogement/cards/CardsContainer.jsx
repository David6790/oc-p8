import { useEffect, useState } from "react";
import CardLogement from "./CardLogement";

const CardsContainer = () => {
  const [accomodations, setAccomodations] = useState([]);
  const getAccomodations = () => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setAccomodations(data));
  };

  useEffect(() => {
    getAccomodations();
  }, []);

  return (
    <div className="cardContainer">
      {accomodations &&
        accomodations.length > 0 &&
        accomodations.map((accomodation) => (
          <CardLogement key={crypto.randomUUID()} accomodation={accomodation} />
        ))}
    </div>
  );
};

export default CardsContainer;
