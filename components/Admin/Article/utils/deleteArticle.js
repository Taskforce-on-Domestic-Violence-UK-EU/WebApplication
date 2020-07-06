export const deleteArticle = async (article) => {
  const id = article._id;

  const res = await fetch(`/api/articles/${id}`, {
    method: "DELETE",
    mode: "cors", // no-cors, *cors, same-origin,
    // headers field seems to be essential ?
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json;
};
