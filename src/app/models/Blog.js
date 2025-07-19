import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    content: String,
    image: String,
    date: String,
    readTime: String,
    category: String,
  },
  { timestamps: true }
);

// ✅ prevent model overwrite error
export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
