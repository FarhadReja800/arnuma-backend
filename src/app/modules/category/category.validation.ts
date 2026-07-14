import { z } from "zod";

export const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Category name is required",
    }).min(1, "Category name cannot be empty"),
    slug: z.string().optional(),
    parent: z.string().nullable().optional(),
    icon: z.string().optional(),
    order: z.number().optional(),
    isActive: z.boolean().optional(),
  }),
});

export const updateCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    slug: z.string().optional(),
    parent: z.string().nullable().optional(),
    icon: z.string().optional(),
    order: z.number().optional(),
    isActive: z.boolean().optional(),
  }),
});

export const CategoryValidation = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};
