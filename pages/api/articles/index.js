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
      "https://cdn.dribbble.com/users/2893989/screenshots/14113447/media/0e7f1e1af0b9354f272dee113bef150e.png",
    tags: ["Social Justice", "Equality", "Journalism"],
    content: [{ type: "text", content: "Hello, this is a new article" }],
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
        await article.save();
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
