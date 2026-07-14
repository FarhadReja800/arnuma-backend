import { z } from "zod";

const colorValidationSchema = z.object({
  name: z.string({ required_error: "Color name is required" }),
  value: z.string().optional(),
});

const additionalInformationValidationSchema = z.object({
  weight: z.string().optional(),
  dimensions: z.string().optional(),
});

const reviewValidationSchema = z.object({
  reviewerName: z.string({ required_error: "Reviewer name is required" }),
  reviewerEmail: z.string({ required_error: "Reviewer email is required" }).email("Invalid email address"),
  rating: z.number({ required_error: "Rating is required" }).min(1).max(5),
  comment: z.string().optional(),
});

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Product name is required" }),
    sku: z.string({ required_error: "SKU is required" }),
    price: z.number({ required_error: "Price is required" }).min(0, "Price cannot be negative"),
    salePrice: z.number().min(0, "Sale price cannot be negative").optional(),
    description: z.string({ required_error: "Description is required" }),
    shortDescription: z.string().optional(),
    images: z.array(z.string()).min(1, "At least one image is required"),
    categories: z.array(z.string()).min(1, "At least one category is required"),
    tags: z.array(z.string()).optional(),
    colors: z.array(colorValidationSchema).optional(),
    sizes: z.array(z.string()).optional(),
    stockQuantity: z.number({ required_error: "Stock quantity is required" }).min(0, "Stock cannot be negative"),
    inStock: z.boolean().optional(),
    additionalInformation: additionalInformationValidationSchema.optional(),
    isActive: z.boolean().optional(),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    sku: z.string().optional(),
    price: z.number().min(0).optional(),
    salePrice: z.number().min(0).optional(),
    description: z.string().optional(),
    shortDescription: z.string().optional(),
    images: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    colors: z.array(colorValidationSchema).optional(),
    sizes: z.array(z.string()).optional(),
    stockQuantity: z.number().min(0).optional(),
    inStock: z.boolean().optional(),
    additionalInformation: additionalInformationValidationSchema.optional(),
    isActive: z.boolean().optional(),
  }),
});

const addReviewValidationSchema = z.object({
  body: reviewValidationSchema,
});

export const ProductValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
  addReviewValidationSchema,
};
