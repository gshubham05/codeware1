import { NextResponse } from "next/server";
import Blog from "../../models/Blog";
import { connectDB } from "../../lib/db";
import { verifyToken } from "../../middleware/auth";


// 🔐 GET
export async function GET(req) {
  await connectDB();

  const user = verifyToken(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}


// 🔐 POST
export async function POST(req) {
  await connectDB();

  const user = verifyToken(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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
      createdBy: user.userId   // 🔥 track who posted
    });

    await blog.save();

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
