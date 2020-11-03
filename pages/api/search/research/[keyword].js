import dbConnect from "../../../../utils/dbConnect";
import Article from "../../../../models/article";

export const searchArticles = async (keyword) => {
  const article = await Article.find({
    title: { $regex: keyword, $options: "i" },
  });
  return article;
};

export default async (req, res) => {
  const {
    query: { keyword },
    method,
    body,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        if (keyword.length > 0) {
          const articles = await searchArticles(keyword);
          res.status(200).json({ status: "success", data: articles });
        } else {
          res.status(400).json({
            status: "error",
            message: "empty search term",
          });
        }
      } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
      }
      break;

    default:
      res.status(500).json({
        status: "error",
        message:
          "Default error occured, this is most likey since the request `method` was not handled or unspecified",
      });
      break;
  }
};
