import mongoose from "mongoose";

const OrganizationSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,

  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },

  author: { type: String },
  date: { type: String },
  title: { type: String },
  description: { type: String },
  image: { type: String },
  tags: { type: [] },
});

export default mongoose.models.Organization ||
  mongoose.model("Organization", OrganizationSchema);
