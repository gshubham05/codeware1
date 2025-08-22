import { connectDB } from "../../lib/db";
import InternApplication from "../../models/InternApplication";
import nodemailer from "nodemailer";

// 📩 Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or use smtp.hostinger.com, outlook, etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // 1️⃣ Save to DB
    const newApplication = new InternApplication(body);
    await newApplication.save();

    // 2️⃣ Send Email after saving
    await transporter.sendMail({
      from: `"Internship Portal" <${process.env.EMAIL_USER}>`,
      to: "codewareit@gmail.com", // 📩 your receiving email
      subject: "🚀 New Internship Application Submitted",
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #2c3e50;">📩 New Internship Application Received</h2>
    <p>A new internship application has been submitted. Here are the details:</p>

    <table style="width:100%; border-collapse: collapse;">
      <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Name</strong></td><td style="padding:8px; border:1px solid #ddd;">${body.name}</td></tr>
      <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Email</strong></td><td style="padding:8px; border:1px solid #ddd;">${body.email}</td></tr>
      <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Phone</strong></td><td style="padding:8px; border:1px solid #ddd;">${body.phone}</td></tr>
      <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Address</strong></td><td style="padding:8px; border:1px solid #ddd;">${body.address}</td></tr>
      <tr><td style="padding:8px; border:1px solid #ddd;"><strong>College</strong></td><td style="padding:8px; border:1px solid #ddd;">${body.college}</td></tr>
      <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Stream</strong></td><td style="padding:8px; border:1px solid #ddd;">${body.stream}</td></tr>
      <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Duration</strong></td><td style="padding:8px; border:1px solid #ddd;">${body.duration}</td></tr>
      <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Interest</strong></td><td style="padding:8px; border:1px solid #ddd;">${body.interest}</td></tr>
    </table>

    <p style="margin-top:20px; color:#555;">
      👉 Please review the application in your <strong>dashboard</strong>.
    </p>
  </div>
`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("❌ Error in POST /api/apply:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function GET() {
  try {
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

export async function DELETE(req) {
  try {
    await connectDB();
    const { id } = await req.json();
    await InternApplication.findByIdAndDelete(id);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("❌ Error in DELETE /api/apply:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
