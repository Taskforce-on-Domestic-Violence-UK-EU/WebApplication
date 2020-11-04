export const updateWorkshop = async (workshop, body) => {
  const id = workshop._id;

  console.log(body);

  const res = await fetch(`/api/workshops/${id}`, {
    method: "PUT",
    mode: "cors", // no-cors, *cors, same-origin,
    // headers field seems to be essential ?
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await res.json;
};
