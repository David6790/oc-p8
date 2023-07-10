import React from "react";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
    </div>
  );
};

export default Layout;
