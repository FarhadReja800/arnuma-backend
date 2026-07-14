import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryController } from "./category.controller";
import { CategoryValidation } from "./category.validation";

const router = Router();

// Create Category
router.post(
  "/create-category",
  validateRequest(CategoryValidation.createCategoryValidationSchema),
  CategoryController.createCategory
);

// Get All Categories (supports query parameter nested=true)
router.get("/get-categories", CategoryController.getCategories);

// Get Single Category (by ID or Slug)
router.get("/:id", CategoryController.getSingleCategory);

// Update Category
router.patch(
  "/update-category/:id",
  validateRequest(CategoryValidation.updateCategoryValidationSchema),
  CategoryController.updateCategory
);

// Delete Category
router.delete("/delete-category/:id", CategoryController.deleteCategory);

export const CategoryRoutes = router;
