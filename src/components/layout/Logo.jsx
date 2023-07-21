import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <div className="logo">
        <img src="../img/logo.png" alt="logo kasa" className="logo" />
      </div>
    </NavLink>
  );
};

export default Logo;
