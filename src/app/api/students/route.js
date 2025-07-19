import { NextResponse } from "next/server";
import Student from "../../models/Students";
import { connectDB } from "../../lib/db";
import { verifyToken } from "../../middleware/auth";

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
  return NextResponse.json({ success: true, student });
}
