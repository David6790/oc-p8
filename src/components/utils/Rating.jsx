const Rating = ({ note, i }) => {
  return (
    <i
      key={crypto.randomUUID()}
      className={note <= i ? "fa-solid fa-star" : "fa-regular fa-star"}
    ></i>
  );
};

export default Rating;
