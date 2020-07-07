import dbConnect from "../../../utils/dbConnect";
import Article from "../../../models/article";

const createKeys = async (body) => {
  const dictionary = {};
  for (var key in body) {
    dictionary[key] = body[key];
  }
  return dictionary;
};

export const getArticle = async (id) => {
  const article = await Article.findById(id);
  return article;
};

export const updateArticle = async (id, body) => {
  const article = await Article.findByIdAndUpdate(
    { _id: id },
    await createKeys(body),
    {
      new: true,
    }
  );
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
          const article = await updateArticle(id, body);
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
