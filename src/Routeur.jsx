// création du composant Routeur. Pour permettre la navigation entre toutes les pages de l'application.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Landing404 from "./pages/Landing404";
import PageAccomodation from "./pages/PageAccomodation";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />

        {/* Rajout du ":id" dans le path vers la page d'accomation pour le recuperer dans le composant avec useParam */}
        <Route path="/accomodation/:id" element={<PageAccomodation />} />

        <Route path="*" element={<Landing404 />} />
        <Route path="/landing404" element={<Landing404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routeur;
