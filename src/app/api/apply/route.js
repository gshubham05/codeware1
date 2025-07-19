import { connectDB } from "../../lib/db";
import InternApplication from "../../models/InternApplication";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newApplication = new InternApplication(body);
    await newApplication.save();
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("❌ Error in POST /api/apply:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// ✅ Add this GET method:
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
