import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>{children}</main> 
      </div>
      <Footer />
     </>
  );
};

export default Layout;
