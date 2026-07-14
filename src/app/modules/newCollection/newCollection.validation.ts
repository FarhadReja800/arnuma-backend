import { z } from "zod";

const createNewCollectionValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required" }).min(1, "Title cannot be empty"),
    heading: z.string({ required_error: "Heading is required" }).min(1, "Heading cannot be empty"),
    description: z.string({ required_error: "Description is required" }).min(1, "Description cannot be empty"),
    buttonText: z.string().optional(),
    buttonLink: z.string().optional(),
    leftImage: z.string({ required_error: "Left image is required" }).min(1, "Left image cannot be empty"),
    leftImageText: z.string().optional(),
    rightImage: z.string({ required_error: "Right image is required" }).min(1, "Right image cannot be empty"),
    isActive: z.boolean().optional(),
  }),
});

const updateNewCollectionValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    heading: z.string().optional(),
    description: z.string().optional(),
    buttonText: z.string().optional(),
    buttonLink: z.string().optional(),
    leftImage: z.string().optional(),
    leftImageText: z.string().optional(),
    rightImage: z.string().optional(),
    isActive: z.boolean().optional(),
  }),
});

export const NewCollectionValidation = {
  createNewCollectionValidationSchema,
  updateNewCollectionValidationSchema,
};
