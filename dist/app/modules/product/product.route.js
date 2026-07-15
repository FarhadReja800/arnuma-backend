"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const router = (0, express_1.Router)();
// Create Product
router.post("/create-product", (0, validateRequest_1.default)(product_validation_1.ProductValidation.createProductValidationSchema), product_controller_1.ProductController.createProduct);
// Get All Products (supports query filtering, search, pagination, and sorting)
router.get("/get-products", product_controller_1.ProductController.getProducts);
// Get Sidebar Filters Metadata (Min/Max price, and counts for color, size, and status)
router.get("/filters", product_controller_1.ProductController.getProductFiltersMetadata);
// Get Single Product (by Object ID or Slug)
router.get("/:idOrSlug", product_controller_1.ProductController.getSingleProduct);
// Update Product
router.patch("/update-product/:id", (0, validateRequest_1.default)(product_validation_1.ProductValidation.updateProductValidationSchema), product_controller_1.ProductController.updateProduct);
// Delete Product
router.delete("/delete-product/:id", product_controller_1.ProductController.deleteProduct);
// Add Review to Product
router.post("/add-review/:id", (0, validateRequest_1.default)(product_validation_1.ProductValidation.addReviewValidationSchema), product_controller_1.ProductController.addReview);
exports.ProductRoutes = router;
//# sourceMappingURL=product.route.js.map