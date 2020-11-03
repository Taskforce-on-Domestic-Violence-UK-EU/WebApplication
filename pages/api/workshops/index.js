import dbConnect from "../../../utils/dbConnect";
import Workshop from "../../../models/workshop";

export const getWorkshops = async () => {
  const workshop = await Workshop.find({});
  return workshop;
};

export const createWorkshop = async () => {
  const workshop = await new Workshop({
    title: "Covid 19 Task Force on Domestic Violence UK & EU",
    author: "Task Force UK & EU",
    date: "July 20, 2020",
    description:
      "Supporting survivors of domestic violence and the work of DV charities in the UK & EU",
    image:
      "https://cdn.dribbble.com/users/2893989/screenshots/13928032/media/9784cf82f0c941e95a08379155b860ef.png",
    tags: ["Social Justice", "Equality", "Journalism"],
    content: [],
    articles: [],
    organizations: [],
  });
  return workshop;
};

export default async (req, res) => {
  const { method, body } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const workshops = await getWorkshops();
        res.status(200).json({ status: "success", data: workshops });
      } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
      }
      break;

    case "POST":
      try {
        const workshop = await createWorkshop();
        await workshop.save();
        res.status(201).json({
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

    default:
      res.status(500).json({
        status: "error",
        message:
          "Default error occured, this is most likey since the request `method` was not handled or unspecified",
      });
      break;
  }
};
