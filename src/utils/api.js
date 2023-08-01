// fonction qui gère l'appel a l'api. Dans cette fonction, on a deux fonctions: Une qui récupère l'ensemble des logements pour l'afficher dans le home. Une autre qui va sortir uniquement un logement dont l'ID correpsondra a l'id passé en parametre

function api() {
  const getAccomodations = async () => {
    return await fetch("../db.json", {
      type: "GET",
    }).then((res) => res.json());
  };

  const getAccomodation = async (id) => {
    const accomodations = await getAccomodations();
    return accomodations.find((element) => element.id === id);
  };

  return {
    getAccomodation,
    getAccomodations,
  };
}

export default api();
