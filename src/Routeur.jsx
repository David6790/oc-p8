import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Landing404 from "./pages/Landing404";
import PageLogement from "./pages/PageLogement";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Landing404 />} />
        <Route path="/logement" element={<PageLogement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routeur;
