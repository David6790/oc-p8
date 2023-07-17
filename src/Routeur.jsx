import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Landing404 from "./pages/Landing404";
import PageAccomodation from "./pages/PageAccomodation";

const Routeur = ({ accomadations }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil accomodations={accomadations} />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Landing404 />} />
        {accomadations.map((item) => (
          <Route
            key={crypto.randomUUID()}
            path={`/accomodation + ${item.id}`}
            element={<PageAccomodation accomodation={item} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routeur;
