import { connectDB } from "../../lib/db";
import InternApplication from "../../models/InternApplication";
import nodemailer from "nodemailer";
import { verifyToken } from "../../middleware/auth";

// 📩 Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


// =========================
// POST → PUBLIC (Students)
// =========================
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // Save to DB
    const newApplication = new InternApplication(body);
    await newApplication.save();

    // Send Email
    await transporter.sendMail({
      from: `"Internship Portal" <${process.env.EMAIL_USER}>`,
      to: "codewareit@gmail.com",
      subject: "🚀 New Internship Application Submitted",
      html: `
      <h2>New Internship Application</h2>
      <p><b>Name:</b> ${body.name}</p>
      <p><b>Email:</b> ${body.email}</p>
      <p><b>Phone:</b> ${body.phone}</p>
      <p><b>College:</b> ${body.college}</p>
      <p><b>Stream:</b> ${body.stream}</p>
      <p><b>Interest:</b> ${body.interest}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("❌ Error in POST /api/apply:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}


// =========================
// GET → ADMIN ONLY
// =========================
export async function GET(req) {
  try {
    const user = verifyToken(req);

    if (!user || user.role !== "admin") {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401 }
      );
    }

    await connectDB();
    const applications = await InternApplication.find().sort({ createdAt: -1 });

    return new Response(JSON.stringify(applications), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("❌ Error in GET /api/apply:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}


// =========================
// DELETE → ADMIN ONLY
// =========================
export async function DELETE(req) {
  try {
    const user = verifyToken(req);

    if (!user || user.role !== "admin") {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401 }
      );
    }

    await connectDB();
    const { id } = await req.json();
    await InternApplication.findByIdAndDelete(id);

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("❌ Error in DELETE /api/apply:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
