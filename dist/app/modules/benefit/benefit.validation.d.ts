import { z } from "zod";
export declare const BenefitValidation: {
    createBenefitValidation: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodString;
            description: z.ZodString;
            icon: z.ZodString;
            order: z.ZodOptional<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            description: string;
            title: string;
            icon: string;
            isActive?: boolean | undefined;
            order?: number | undefined;
        }, {
            description: string;
            title: string;
            icon: string;
            isActive?: boolean | undefined;
            order?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            description: string;
            title: string;
            icon: string;
            isActive?: boolean | undefined;
            order?: number | undefined;
        };
    }, {
        body: {
            description: string;
            title: string;
            icon: string;
            isActive?: boolean | undefined;
            order?: number | undefined;
        };
    }>;
    updateBenefitValidation: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
            order: z.ZodOptional<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            isActive?: boolean | undefined;
            description?: string | undefined;
            title?: string | undefined;
            icon?: string | undefined;
            order?: number | undefined;
        }, {
            isActive?: boolean | undefined;
            description?: string | undefined;
            title?: string | undefined;
            icon?: string | undefined;
            order?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            isActive?: boolean | undefined;
            description?: string | undefined;
            title?: string | undefined;
            icon?: string | undefined;
            order?: number | undefined;
        };
    }, {
        body: {
            isActive?: boolean | undefined;
            description?: string | undefined;
            title?: string | undefined;
            icon?: string | undefined;
            order?: number | undefined;
        };
    }>;
};
