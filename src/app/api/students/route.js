import { NextResponse } from "next/server";
import Student from "../../models/Students";
import { connectDB } from "../../lib/db";
import { verifyToken } from "../../middleware/auth";
import nodemailer from "nodemailer";


// ============================
// GET → Admin Only
// ============================
export async function GET(req) {
  const user = verifyToken(req);
  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();
  const students = await Student.find();
  return NextResponse.json(students);
}


// ============================
// POST → Public (Lead Form)
// ============================
export async function POST(req) {
  await connectDB();
  const { name, email, phone, message } = await req.json();

  const student = new Student({ name, email, phone, message });
  await student.save();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Course Inquiry Portal" <${process.env.EMAIL_USER}>`,
    to: "gshubham.05@gmail.com",
    subject: "📚 New Course Enrollment Inquiry",
    html: `
      <h2>New Course Inquiry</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Course:</b> ${message || "N/A"}</p>
    `,
  });

  return NextResponse.json({ success: true, student });
}


// ============================
// DELETE → Admin Only
// ============================
export async function DELETE(req) {
  try {
    const user = verifyToken(req);
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Student ID is required" }, { status: 400 });
    }

    await Student.findByIdAndDelete(id);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Error deleting student:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
