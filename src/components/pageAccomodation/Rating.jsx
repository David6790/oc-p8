// creation d'un composant de base pour definir le comportement d'une seule etoile. Si elle est pleine ou vide en fonction de la note.

const Rating = ({ note, i }) => {
  return (
    <i
      key={crypto.randomUUID()}
      className={note <= i ? "fa-solid fa-star" : "fa-regular fa-star"}
    ></i>
  );
};

export default Rating;
