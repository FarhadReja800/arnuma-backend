import { z } from "zod";

export const HomeBannerValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  imageUrl: z.string().url("Invalid image URL"),
  linkUrl: z.string().url().optional(),
  isActive: z.boolean().optional().default(true),
});

export const UpdateHomeBannerValidationSchema = HomeBannerValidationSchema.partial();