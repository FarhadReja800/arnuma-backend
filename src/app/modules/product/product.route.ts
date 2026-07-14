import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductController } from "./product.controller";
import { ProductValidation } from "./product.validation";

const router = Router();

// Create Product
router.post(
  "/create-product",
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductController.createProduct
);

// Get All Products (supports query filtering, search, pagination, and sorting)
router.get("/get-products", ProductController.getProducts);

// Get Sidebar Filters Metadata (Min/Max price, and counts for color, size, and status)
router.get("/filters", ProductController.getProductFiltersMetadata);

// Get Single Product (by Object ID or Slug)
router.get("/:idOrSlug", ProductController.getSingleProduct);

// Update Product
router.patch(
  "/update-product/:id",
  validateRequest(ProductValidation.updateProductValidationSchema),
  ProductController.updateProduct
);

// Delete Product
router.delete("/delete-product/:id", ProductController.deleteProduct);

// Add Review to Product
router.post(
  "/add-review/:id",
  validateRequest(ProductValidation.addReviewValidationSchema),
  ProductController.addReview
);

export const ProductRoutes = router;
