import dns from "node:dns";

// Force IPv4 first to avoid IPv6-related connection timeouts
dns.setDefaultResultOrder("ipv4first");

// Custom DNS servers to bypass ISP resolution issues with MongoDB Atlas SRV records
try {
  dns.setServers(["1.1.1.1", "8.8.8.8"]);
} catch (err) {
  console.warn("Could not set custom DNS servers, using default resolver:", err);
}

import dotenv from "dotenv";
dotenv.config();

import type { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { seedSuperAdmin } from "./app/DB/seedSuperAdmin";

let server: Server;

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

const startServer = async () => {
  if (!MONGO_URI) {
    console.error("MONGO_URI is not defined in environment variables");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
    await seedSuperAdmin();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }

  server = app
    .listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
    .on("error", (err: Error) => {
      console.error("Server listen error:", err);
      process.exit(1);
    });
};

startServer();

const shutdown = async (signal: string) => {
  console.log(`${signal} received. Closing server and MongoDB connection...`);
  if (server) {
    server.close(async () => {
      await mongoose.connection.close();
      process.exit(0);
    });
  } else {
    await mongoose.connection.close();
    process.exit(0);
  }
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

process.on("SIGTERM", (reason: Error) => {
  console.error("SIGTERM Promise Rejection:", reason);
  if (server) {
    server.close(() => process.exit(1));
  } else {
    process.exit(1);
  }
});

process.on("SIGINT", (error: Error) => {
  console.error("SIGINT Uncaught Exception:", error);
  if (server) {
    server.close(() => process.exit(1));
  } else {
    process.exit(1);
  }
});