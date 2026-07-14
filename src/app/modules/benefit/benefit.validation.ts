import { z } from "zod";

const createBenefitValidation = z.object({
  body: z.object({
    title: z.string(),

    description: z.string(),

    icon: z.string().url(),

    order: z.number().optional(),

    isActive: z.boolean().optional(),
  }),
});

const updateBenefitValidation = z.object({
  body: z.object({
    title: z.string().optional(),

    description: z.string().optional(),

    icon: z.string().url().optional(),

    order: z.number().optional(),

    isActive: z.boolean().optional(),
  }),
});

export const BenefitValidation = {
  createBenefitValidation,
  updateBenefitValidation,
};