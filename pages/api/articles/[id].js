import dbConnect from "../../../utils/dbConnect";
import Article from "../../../models/article";

export const getArticle = async (id) => {
  const article = await Article.findById(id);
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
    case "PUT":
      if (method === "PUT") {
        try {
          const article = await Article.findByIdAndUpdate(
            { _id: id },
            {
              content: body.content,
              title: body.title,
              image: body.image,
              description: body.description,
              tags: body.tags,
            },
            {
              new: true,
            }
          );
          res.status(200).json({
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
      }

    case "GET":
      try {
        const article = await getArticle(id);
        res.status(200).json({ status: "success", data: article });
      } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
      }
      break;

    case "DELETE":
      try {
        await Article.deleteOne({ _id: id });
        res.status(200).json({ status: "success", data: null });
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
