import { useEffect, useState } from "react";
import CardLogement from "./CardLogement";

const CardContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/logements").then((res) =>
      res.json().then((res) => setData(res))
    );
  }, []);
  return (
    <div className="cardContainer">
      {data.map((logement) => (
        <CardLogement key={logement.id} logement={logement} />
      ))}
    </div>
  );
};

export default CardContainer;
