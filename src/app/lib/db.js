import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  // 🔥 Skip DB connection during build
  if (process.env.NEXT_PHASE === "phase-production-build") {
    console.log("⏭️ Skipping DB connection during build");
    return;
  }

  if (cached.conn) return cached.conn;

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI missing");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(process.env.MONGODB_URI, {
      dbName: "codewareit",
    });

  cached.conn = await cached.promise;
  console.log("✅ MongoDB Connected");

  return cached.conn;
}
