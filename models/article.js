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
