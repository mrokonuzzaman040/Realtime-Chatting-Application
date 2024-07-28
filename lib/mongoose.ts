import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache; // This must be a var and not a let/const
}

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

async function dbConnect(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => {
        return mongoose;
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    console.error(
      "Error while awaiting the MongoDB connection promise:",
      error
    );
    throw new Error("Failed to connect to MongoDB");
  }

  return cached.conn;
}

export default dbConnect;
