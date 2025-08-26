import { NextResponse } from "next/server";
import Student from "../../models/Students";
import { connectDB } from "../../lib/db";
import { verifyToken } from "../../middleware/auth";
import nodemailer from "nodemailer";

export async function GET(req) {
  await connectDB();
  const auth = verifyToken(req);
  if (auth.error) return auth;

  const students = await Student.find();
  return NextResponse.json(students);
}

export async function POST(req) {
  await connectDB();
  const { name, email, phone, message } = await req.json();

  const student = new Student({ name, email, phone, message });
  await student.save();

  // 📩 Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail
      pass: process.env.EMAIL_PASS, // App Password
    },
  });

  // 📧 Send Email in HTML format
  await transporter.sendMail({
    from: `"Course Inquiry Portal" <${process.env.EMAIL_USER}>`,
    to: "gshubham.05@gmail.com", // Change to your receiving email
    subject: "📚 New Course Enrollment Inquiry",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #2E86C1;">New Course Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course:</strong> ${message || "N/A"}</p>
        <hr/>
        <p style="color: gray;">Please log in to your dashboard to check details.</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true, student });
}

// ✅ DELETE student by ID
export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Student ID is required" },
        { status: 400 }
      );
    }

    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    console.error("❌ Error deleting student:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
