import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Blog from "../../../models/Blog";

// GET - get single blog by ID
export async function GET(req, context) {
  await connectDB();

  const { id } = await context.params; // ✅ Await params

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("GET /api/blogs/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// PUT - update blog by ID
export async function PUT(req, context) {
  await connectDB();

  const { id } = await context.params; // ✅ Await params

  try {
    const updatedData = await req.json();

    const updatedBlog = await Blog.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error("PUT /api/blogs/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// DELETE - delete blog by ID
export async function DELETE(req, context) {
  await connectDB();

  const { id } = await context.params; // ✅ Await params

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/blogs/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
