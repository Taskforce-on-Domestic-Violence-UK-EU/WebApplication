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
      "https://images.unsplash.com/photo-1507708346190-57ddfc63e830?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    tags: ["Social Justice", "Equality", "Journalism"],
    content: [],
  });
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
