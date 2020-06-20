import dbConnect from "../../../utils/dbConnect";
import Article from "../../../models/article";

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
        let article = new Article({
          title: body.title,
          author: body.author,
          date: body.date,
          description: body.description,
          image: body.image,
          tags: [],
          content: body.content,
        });
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
        const articles = await Article.find({});
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
