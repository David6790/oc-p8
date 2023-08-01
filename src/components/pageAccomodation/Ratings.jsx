import Rating from "./Rating";

// j'importe la note (rating) d'un logement via les props, puis une boucle for pour générer les 5 etoiles avec le composant. Rating.
const Ratings = ({ rating }) => {
  let ratings = [];

  for (let r = 5; r > 0; r--) {
    ratings.push(<Rating note={rating} i={r} key={crypto.randomUUID()} />);
  }

  return <div>{ratings}</div>;
};

export default Ratings;
