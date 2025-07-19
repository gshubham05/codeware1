import { NextResponse } from "next/server";
import Blog from "../../models/Blog";
import { connectDB } from "../../lib/db";

// GET - fetch all blogs
export async function GET() {
  await connectDB();
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (err) {
    console.error("❌ Error in GET /api/blogs:", err); // Add this
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST - create blog (image already uploaded from frontend)
export async function POST(req) {
  await connectDB();

  try {
    const { title, description, content, image, date, readTime, category } =
      await req.json();

    if (!title || !content || !image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const blog = new Blog({
      title,
      description,
      content,
      image,
      date,
      readTime,
      category,
    });

    await blog.save();

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error("POST /api/blogs error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
