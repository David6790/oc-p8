import React, { useState } from "react";

// Composant qui gère l'ouverture et la fermeture des unité de collapse.
const CollapesUnit = ({ content, title }) => {
  // setter pour definir si l'unité de collapse est ouvert ou fermé. Pour lui appliquer un style en fonction de son etat.
  const [open, setOpen] = useState(false);

  //lors du click, on fait un toogle sur l'etat de l'unité collapse. si elle est true on passe a false et vice versa.
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
