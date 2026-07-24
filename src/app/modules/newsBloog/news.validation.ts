import { z } from 'zod';

export const createPostZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    content: z.string({ required_error: 'Content is required' }),
    image: z.string({ required_error: 'Image URL is required' }).url('Invalid image URL'),
    category: z.string({ required_error: 'Category is required' }),
    tags: z.array(z.string()).nonempty('At least one tag is required'),
    isPopular: z.boolean().optional(),
  }),
});

export const updatePostZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    image: z.string().url('Invalid image URL').optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    isPopular: z.boolean().optional(),
  }),
});