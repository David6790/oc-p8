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

        <Route path="/accomodation/:id" element={<PageAccomodation />} />
        <Route path="*" element={<Landing404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routeur;
