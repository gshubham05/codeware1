import { NextResponse } from "next/server";
import Student from "../../models/Students";
import { connectDB } from "../../lib/db";
import { verifyToken } from "../../middleware/auth";
import nodemailer from "nodemailer";

/* ============================
   GET → Admin Only
============================ */
export async function GET(req) {
  try {
    const user = verifyToken(req);
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const students = await Student.find().sort({ createdAt: -1 });
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

/* ============================
   POST → Public (Lead Form)
============================ */
export async function POST(req) {
  try {
    await connectDB();

    const { name, email, phone, course, qualification } = await req.json();

    if (!name || !email || !phone || !course || !qualification) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const student = await Student.create({
      name,
      email,
      phone,
      course,
      qualification,
    });

    // Email Notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Codeware IT Leads" <${process.env.EMAIL_USER}>`,
      to: "gshubham.05@gmail.com",
      subject: "📚 New Course Enquiry",
      html: `
        <h2>New Student Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Course:</b> ${course}</p>
        <p><b>Qualification:</b> ${qualification}</p>
      `,
    });

    return NextResponse.json({ success: true, student });
  } catch (error) {
    console.error("❌ Lead save error:", error);
    return NextResponse.json(
      { error: "Failed to save enquiry" },
      { status: 500 }
    );
  }
}

/* ============================
   DELETE → Admin Only
============================ */
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
      return NextResponse.json(
        { error: "Student ID required" },
        { status: 400 }
      );
    }

    await Student.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
