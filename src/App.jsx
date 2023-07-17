import React, { useEffect, useState } from "react";

import Routeur from "./Routeur";

const App = () => {
  const [accomodations, setAccomodations] = useState([]);
  const getAccomodations = () => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setAccomodations(data));
  };

  useEffect(() => {
    getAccomodations();
  }, []);
  return <Routeur accomadations={accomodations} />;
};

export default App;
