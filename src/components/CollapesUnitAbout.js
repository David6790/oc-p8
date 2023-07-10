import React, { useState } from "react";

const CollapesUnitAbout = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const toogleCollape = () => {
    setOpen(!open);
  };

  return (
    <>
      {" "}
      <div className="collapesUnit">
        <div className="titleToogle">
          <span>{title}</span>
          <button className={open ? "buttonActive" : "buttonInactive"}>
            <i className="fa-solid fa-chevron-up" onClick={toogleCollape}></i>
          </button>
        </div>
      </div>
      <div className={open ? "collapseContentOpen" : "collapseContentClosed"}>
        <p>{content}</p>
      </div>
    </>
  );
};

export default CollapesUnitAbout;
