"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = exports.updateUserRole = exports.createStaff = exports.loginUser = exports.createUser = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const user_services_1 = require("./user.services");
const createUser = async (req, res, next) => {
    try {
        // throw new Error("This is a test error for demonstration purposes.");
        const user = await user_services_1.userService.createUserService(req.body);
        res.status(http_status_codes_1.default.CREATED).json({
            success: true,
            message: "User created successfully",
            user
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createUser = createUser;
const loginUser = async (req, res, next) => {
    try {
        // throw new Error("This is a test error for demonstration purposes.");
        const { user, accessToken, refreshToken } = await user_services_1.userService.loginUserService(req.body);
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        });
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "User logged in successfully",
            data: {
                user,
                accessToken
            }
        });
    }
    catch (error) {
        next(error);
    }
};
exports.loginUser = loginUser;
const createStaff = async (req, res, next) => {
    try {
        const user = await user_services_1.userService.createStaffService(req.body);
        res.status(http_status_codes_1.default.CREATED).json({
            success: true,
            message: "Staff member created successfully",
            data: user,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createStaff = createStaff;
const updateUserRole = async (req, res, next) => {
    try {
        const user = await user_services_1.userService.updateUserRoleService(req.body);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "User role updated successfully",
            data: user,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateUserRole = updateUserRole;
exports.userController = {
    createUser: exports.createUser,
    loginUser: exports.loginUser,
    createStaff: exports.createStaff,
    updateUserRole: exports.updateUserRole,
};
//# sourceMappingURL=user.controller.js.map