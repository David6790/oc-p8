import Rating from "../utils/Rating";

const Ratings = ({ rating }) => {
  let ratings = [];

  for (let r = 5; r > 0; r--) {
    ratings.push(<Rating note={rating} i={r} />);
  }

  return <div>{ratings}</div>;
};

export default Ratings;
