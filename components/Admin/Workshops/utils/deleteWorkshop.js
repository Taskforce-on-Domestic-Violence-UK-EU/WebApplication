export const deleteWorkshop = async (workshop) => {
  const id = workshop._id;

  const res = await fetch(`/api/workshops/${id}`, {
    method: "DELETE",
    mode: "cors", // no-cors, *cors, same-origin,
    // headers field seems to be essential ?
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json;
};
