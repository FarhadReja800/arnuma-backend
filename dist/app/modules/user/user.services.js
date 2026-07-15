"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../../config/env");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("./user.model");
const createUserService = async (payload) => {
    const result = await user_model_1.User.create(payload);
    return result;
};
const loginUserService = async (payload) => {
    const { email, password } = payload;
    if (!email || !password) {
        throw new Error("Email and password are required");
    }
    const user = await user_model_1.User.findOne({ email });
    if (!user) {
        throw new Error("User not found with this email");
    }
    const isPasswordMatch = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error("Incorrect password");
    }
    const jwtPayload = {
        _id: user._id.toString(),
        email: user.email,
        role: user.role,
    };
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, env_1.config.jwt_access_secret, {
        expiresIn: env_1.config.jwt_access_expires_in,
    });
    const refreshToken = jsonwebtoken_1.default.sign(jwtPayload, env_1.config.jwt_refresh_secret, {
        expiresIn: env_1.config.jwt_refresh_expires_in,
    });
    return {
        user,
        accessToken,
        refreshToken,
    };
};
const createStaffService = async (payload) => {
    const isEmailExists = await user_model_1.User.findOne({ email: payload.email });
    if (isEmailExists) {
        throw new AppError_1.default(http_status_codes_1.default.BAD_REQUEST, "User with this email already exists");
    }
    // Force isVerified to be true since it's created by super-admin
    payload.isVerified = true;
    const result = await user_model_1.User.create(payload);
    return result;
};
const updateUserRoleService = async (payload) => {
    const { userId, role } = payload;
    const user = await user_model_1.User.findById(userId);
    if (!user) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "User not found");
    }
    user.role = role;
    await user.save();
    return user;
};
exports.userService = {
    createUserService,
    loginUserService,
    createStaffService,
    updateUserRoleService,
};
//# sourceMappingURL=user.services.js.map