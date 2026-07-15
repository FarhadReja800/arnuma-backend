"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const index_1 = require("./app/routes/index");
const GlobleErrorHandler_1 = require("./app/middlewares/GlobleErrorHandler");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ limit: "10mb", extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use("/uploads", express_1.default.static(path_1.default.join(process.cwd(), "uploads")));
app.use("/api/v1", index_1.router);
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Arzuma backend server!" });
});
app.use(GlobleErrorHandler_1.globalErrorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map