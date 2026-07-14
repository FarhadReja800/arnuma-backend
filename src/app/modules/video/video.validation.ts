import { z } from "zod";

const VideoSchema = z.object({
  title: z.string(),
  videoUrl: z.string(),
  isActive: z.boolean().optional(),
});

export const createHomeVideoValidation = z.object({
  body: z.object({
    videos: z
      .array(VideoSchema)
      .min(1)
      .max(5, "Maximum 5 videos allowed"),
  }),
});

export const updateHomeVideoValidation = z.object({
  body: z.object({
    videos: z
      .array(VideoSchema)
      .max(5)
      .optional(),
  }),
});