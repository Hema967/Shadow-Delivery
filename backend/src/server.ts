import http from "http";
import mongoose from "mongoose";
import app from "./app";
import { env } from "./config/env";

const server = http.createServer(app);

async function start() {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log("Connected to MongoDB");

    server.listen(env.PORT, () => {
      console.log(`Shadow backend running on http://localhost:${env.PORT}`);
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Failed to start server:", message);
    process.exit(1);
  }
}

void start();

