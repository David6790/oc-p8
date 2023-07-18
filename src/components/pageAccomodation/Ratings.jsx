import React from "react";

const Ratings = ({ accomodation }) => {
  const note = [5, 4, 3, 2, 1];

  return (
    <div>
      {note.map((note) => (
        <i
          key={crypto.randomUUID()}
          className={
            accomodation.rating <= note ? "fa-solid fa-star" : "fa-regular fa-star"
          }
        ></i>
      ))}
    </div>
  );
};

export default Ratings;
