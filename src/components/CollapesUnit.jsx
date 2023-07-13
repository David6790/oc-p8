import React, { useState } from "react";

const CollapesUnit = ({ content, title  }) => {
  const [open, setOpen] = useState(false);

  const toogleCollape = () => {
    setOpen(!open);
  };

  return (
    <>
      <div onClick={toogleCollape} className="collapesUnit">
        <div className="titleToogle">
          <span>{title}</span>
          <button
            
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

export default CollapesUnit;
