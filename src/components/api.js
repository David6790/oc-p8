function api() {
  const getAccomodations = async () => {
    return await fetch("../db.json", {
      type: "GET",
    }).then((res) => res.json());
  };

  return {
    getAccomodations,
  };
}

export default api();
