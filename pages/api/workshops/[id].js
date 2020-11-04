import dbConnect from "../../../utils/dbConnect";
import Workshop from "../../../models/workshop";

const createKeys = async (body) => {
  const dictionary = {};
  for (var key in body) {
    dictionary[key] = body[key];
  }
  return dictionary;
};

export const getWorkshop = async (id) => {
  const workshop = await Workshop.findById(id);
  return workshop;
};

export const updateWorkshop = async (id, body) => {
  const workshop = await Workshop.findByIdAndUpdate(
    { _id: id },
    await createKeys(body),
    {
      new: true,
    }
  );
  return workshop;
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
          const workshop = await updateWorkshop(id, body);
          res.status(200).json({
            status: "success",
            data: workshop,
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
        const workshop = await getWorkshop(id);
        res.status(200).json({ status: "success", data: workshop });
      } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
      }
      break;

    case "DELETE":
      try {
        await Workshop.deleteOne({ _id: id });
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
