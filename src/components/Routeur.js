import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Apropos from "../pages/Apropos";
import Landing404 from "./Landing404";

const Routeur = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Landing404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routeur;
