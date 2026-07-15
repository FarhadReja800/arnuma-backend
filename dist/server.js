"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_dns_1 = __importDefault(require("node:dns"));
// Force IPv4 first to avoid IPv6-related connection timeouts
node_dns_1.default.setDefaultResultOrder("ipv4first");
// Custom DNS servers to bypass ISP resolution issues with MongoDB Atlas SRV records
try {
    node_dns_1.default.setServers(["1.1.1.1", "8.8.8.8"]);
}
catch (err) {
    console.warn("Could not set custom DNS servers, using default resolver:", err);
}
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const seedSuperAdmin_1 = require("./app/DB/seedSuperAdmin");
let server;
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;
const startServer = async () => {
    if (!MONGO_URI) {
        console.error("MONGO_URI is not defined in environment variables");
        process.exit(1);
    }
    try {
        await mongoose_1.default.connect(MONGO_URI);
        console.log("Connected to MongoDB");
        await (0, seedSuperAdmin_1.seedSuperAdmin)();
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
    server = app_1.default
        .listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
        .on("error", (err) => {
        console.error("Server listen error:", err);
        process.exit(1);
    });
};
startServer();
const shutdown = async (signal) => {
    console.log(`${signal} received. Closing server and MongoDB connection...`);
    if (server) {
        server.close(async () => {
            await mongoose_1.default.connection.close();
            process.exit(0);
        });
    }
    else {
        await mongoose_1.default.connection.close();
        process.exit(0);
    }
};
process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGTERM", (reason) => {
    console.error("SIGTERM Promise Rejection:", reason);
    if (server) {
        server.close(() => process.exit(1));
    }
    else {
        process.exit(1);
    }
});
process.on("SIGINT", (error) => {
    console.error("SIGINT Uncaught Exception:", error);
    if (server) {
        server.close(() => process.exit(1));
    }
    else {
        process.exit(1);
    }
});
//# sourceMappingURL=server.js.map