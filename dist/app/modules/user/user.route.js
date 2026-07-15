"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_interface_1 = require("./user.interface");
const user_validation_1 = require("./user.validation");
const router = (0, express_1.Router)();
router.post("/register", user_controller_1.userController.createUser);
router.post("/login", user_controller_1.userController.loginUser);
router.post("/create-staff", (0, auth_1.default)(user_interface_1.TUserRoles.SUPER_ADMIN), (0, validateRequest_1.default)(user_validation_1.createStaffValidationSchema), user_controller_1.userController.createStaff);
router.patch("/change-role", (0, auth_1.default)(user_interface_1.TUserRoles.SUPER_ADMIN), (0, validateRequest_1.default)(user_validation_1.updateUserRoleValidationSchema), user_controller_1.userController.updateUserRole);
exports.userRoutes = {
    router
};
//# sourceMappingURL=user.route.js.map