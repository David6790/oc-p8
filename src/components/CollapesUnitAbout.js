import React, { useState } from "react";

const CollapesUnitAbout = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const toogleCollape = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="collapesUnit">
        <div className="titleToogle">
          <span>{title}</span>
          <button
            onClick={toogleCollape}
            className={`buttonActive ${open ? "rotate" : "buttonInactive"}`}
          >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>
      <div className={`collapseContent ${open ? "show" : "collapseContent"}`}>
        <div className="collapseText">{content}</div>
      </div>
    </>
  );
};

export default CollapesUnitAbout;
