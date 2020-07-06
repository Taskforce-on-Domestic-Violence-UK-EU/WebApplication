export const createArticle = async () => {
  const res = await fetch(`/api/articles`, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin,
    // headers field seems to be essential ?
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json;
};
