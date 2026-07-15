"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const category_controller_1 = require("./category.controller");
const category_validation_1 = require("./category.validation");
const router = (0, express_1.Router)();
// Create Category
router.post("/create-category", (0, validateRequest_1.default)(category_validation_1.CategoryValidation.createCategoryValidationSchema), category_controller_1.CategoryController.createCategory);
// Get All Categories (supports query parameter nested=true)
router.get("/get-categories", category_controller_1.CategoryController.getCategories);
// Get Single Category (by ID or Slug)
router.get("/:id", category_controller_1.CategoryController.getSingleCategory);
// Update Category
router.patch("/update-category/:id", (0, validateRequest_1.default)(category_validation_1.CategoryValidation.updateCategoryValidationSchema), category_controller_1.CategoryController.updateCategory);
// Delete Category
router.delete("/delete-category/:id", category_controller_1.CategoryController.deleteCategory);
exports.CategoryRoutes = router;
//# sourceMappingURL=category.route.js.map