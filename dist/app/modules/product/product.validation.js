"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const zod_1 = require("zod");
const colorValidationSchema = zod_1.z.object({
    name: zod_1.z.string({ required_error: "Color name is required" }),
    value: zod_1.z.string().optional(),
});
const additionalInformationValidationSchema = zod_1.z.object({
    weight: zod_1.z.string().optional(),
    dimensions: zod_1.z.string().optional(),
});
const reviewValidationSchema = zod_1.z.object({
    reviewerName: zod_1.z.string({ required_error: "Reviewer name is required" }),
    reviewerEmail: zod_1.z.string({ required_error: "Reviewer email is required" }).email("Invalid email address"),
    rating: zod_1.z.number({ required_error: "Rating is required" }).min(1).max(5),
    comment: zod_1.z.string().optional(),
});
const createProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Product name is required" }),
        sku: zod_1.z.string({ required_error: "SKU is required" }),
        price: zod_1.z.number({ required_error: "Price is required" }).min(0, "Price cannot be negative"),
        salePrice: zod_1.z.number().min(0, "Sale price cannot be negative").optional(),
        description: zod_1.z.string({ required_error: "Description is required" }),
        shortDescription: zod_1.z.string().optional(),
        images: zod_1.z.array(zod_1.z.string()).min(1, "At least one image is required"),
        categories: zod_1.z.array(zod_1.z.string()).min(1, "At least one category is required"),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
        colors: zod_1.z.array(colorValidationSchema).optional(),
        sizes: zod_1.z.array(zod_1.z.string()).optional(),
        stockQuantity: zod_1.z.number({ required_error: "Stock quantity is required" }).min(0, "Stock cannot be negative"),
        inStock: zod_1.z.boolean().optional(),
        additionalInformation: additionalInformationValidationSchema.optional(),
        isActive: zod_1.z.boolean().optional(),
    }),
});
const updateProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        sku: zod_1.z.string().optional(),
        price: zod_1.z.number().min(0).optional(),
        salePrice: zod_1.z.number().min(0).optional(),
        description: zod_1.z.string().optional(),
        shortDescription: zod_1.z.string().optional(),
        images: zod_1.z.array(zod_1.z.string()).optional(),
        categories: zod_1.z.array(zod_1.z.string()).optional(),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
        colors: zod_1.z.array(colorValidationSchema).optional(),
        sizes: zod_1.z.array(zod_1.z.string()).optional(),
        stockQuantity: zod_1.z.number().min(0).optional(),
        inStock: zod_1.z.boolean().optional(),
        additionalInformation: additionalInformationValidationSchema.optional(),
        isActive: zod_1.z.boolean().optional(),
    }),
});
const addReviewValidationSchema = zod_1.z.object({
    body: reviewValidationSchema,
});
exports.ProductValidation = {
    createProductValidationSchema,
    updateProductValidationSchema,
    addReviewValidationSchema,
};
//# sourceMappingURL=product.validation.js.map