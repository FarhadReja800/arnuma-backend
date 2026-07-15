"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const user_interface_1 = require("../modules/user/user.interface");
const env_1 = require("../config/env");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const user_model_1 = require("../modules/user/user.model");
const auth = (...requiredRoles) => {
    return (0, catchAsync_1.default)(async (req, res, next) => {
        const token = req.headers.authorization;
        // check if token is missing
        if (!token || !token.startsWith("Bearer ")) {
            throw new AppError_1.default(http_status_codes_1.default.UNAUTHORIZED, "You are not authorized!");
        }
        const tokenString = token.split(" ")[1];
        // verify token
        let decoded;
        try {
            decoded = jsonwebtoken_1.default.verify(tokenString, env_1.config.jwt_access_secret);
        }
        catch {
            throw new AppError_1.default(http_status_codes_1.default.UNAUTHORIZED, "Invalid token!");
        }
        const { _id, role } = decoded;
        // check if user exists
        const user = await user_model_1.User.findById(_id);
        if (!user) {
            throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "User not found!");
        }
        // check if user is active
        if (user.isActive !== user_interface_1.TIsActiveStatus.ACTIVE) {
            throw new AppError_1.default(http_status_codes_1.default.FORBIDDEN, "Your account is not active!");
        }
        // check if role matches
        if (requiredRoles.length > 0 && !requiredRoles.includes(role)) {
            throw new AppError_1.default(http_status_codes_1.default.FORBIDDEN, "You do not have permission to access this resource!");
        }
        req.user = decoded;
        next();
    });
};
exports.default = auth;
//# sourceMappingURL=auth.js.map