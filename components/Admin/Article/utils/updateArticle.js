export const updateArticle = async (article, body) => {
  const id = article._id;

  const res = await fetch(`/api/articles/${id}`, {
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
