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
