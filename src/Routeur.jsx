import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Landing404 from "./pages/Landing404";
import PageAccomodation from "./pages/PageAccomodation";

const Routeur = ({ accomadations }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home accomodations={accomadations} />} />
        <Route path="/apropos" element={<About />} />
        <Route path="*" element={<Landing404 />} />
        {accomadations.map((item) =>
          item.id ? (
            <Route
              key={crypto.randomUUID()}
              path={`/accomodation + ${item.id}`}
              element={<PageAccomodation accomodation={item} />}
            />
          ) : (
            <Route path="*" element={<Landing404 />} />
          )
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Routeur;
