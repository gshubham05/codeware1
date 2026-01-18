import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  // 🚨 Build-time guard
  if (process.env.NEXT_PHASE === "phase-production-build") {
    return;
  }

  if (isConnected) return;

  if (!process.env.MONGODB_URI) {
    console.warn("⚠️ MONGODB_URI missing (skipped at build time)");
    return;
  }

  await mongoose.connect(process.env.MONGODB_URI);
  isConnected = true;

  console.log("✅ MongoDB Connected");
}
