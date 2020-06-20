// {
//   author: "Safia Bolton",
//   date: "May 20, 2020",
//   title: "Trump Can’t Immediately End DACA, Supreme Court Rules",
//   tags: ["Politics", "Supreme Court"],
//   image:
//     "https://static01.nyt.com/images/2020/06/08/us/politics/00dc-scotus-daca/merlin_164270166_81f4a6e0-c79c-4268-94fb-74c794fef178-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale",
// }

import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const ArticleSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,

  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },

  author: { type: String },
  date: { type: String },
  title: { type: String },
  description: { type: String },
  image: { type: String },
  content: { type: [] },
  tags: { type: [] },
});

export default mongoose.models.Article ||
  mongoose.model("Article", ArticleSchema);
