import dbConnect from "../../../utils/dbConnect";
import Article from "../../../models/article";

export const getArticles = async () => {
  const articles = await Article.find({});
  return articles;
};

export const createArticle = async () => {
  const article = await new Article({
    title: "New Article",
    author: "Julia New-Author",
    date: "July 20, 2065",
    description:
      "This is a new article, read it an you will have read a new article",
    image:
      "https://images.unsplash.com/photo-1507708346190-57ddfc63e830?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    tags: ["Social Justice", "Equality", "Journalism"],
    content: [],
  });
  return article;
};

export default async (req, res) => {
  const {
    query: { id },
    method,
    body,
  } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const article = await createArticle();
        article.save();
        res.status(201).json({
          status: "success",
          data: article,
        });
      } catch (error) {
        res.status(500).json({
          status: "error",
          message: error.message,
        });
      }
      break;

    case "GET":
      try {
        const articles = await getArticles();
        res.status(200).json({ status: "success", data: articles });
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
