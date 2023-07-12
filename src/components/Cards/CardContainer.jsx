import { useEffect, useState } from "react";
import CardLogement from "./CardLogement";

const CardContainer = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="cardContainer">
      {data &&
        data.length > 0 &&
        data.map((logement) => (
          <CardLogement key={crypto.randomUUID()} logement={logement} />
        ))}
    </div>
  );
};

export default CardContainer;
