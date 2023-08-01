import Rating from "./Rating";

const Ratings = ({ rating }) => {
  let ratings = [];

  for (let r = 5; r > 0; r--) {
    ratings.push(<Rating note={rating} i={r} key={crypto.randomUUID()} />);
  }

  return <div>{ratings}</div>;
};

export default Ratings;
