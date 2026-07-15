import { z } from "zod";
export declare const HomeBannerValidationSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    imageUrl: z.ZodString;
    linkUrl: z.ZodOptional<z.ZodString>;
    isActive: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    isActive: boolean;
    description: string;
    title: string;
    imageUrl: string;
    linkUrl?: string | undefined;
}, {
    description: string;
    title: string;
    imageUrl: string;
    isActive?: boolean | undefined;
    linkUrl?: string | undefined;
}>;
export declare const UpdateHomeBannerValidationSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodString>;
    linkUrl: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
}, "strip", z.ZodTypeAny, {
    isActive?: boolean | undefined;
    description?: string | undefined;
    title?: string | undefined;
    imageUrl?: string | undefined;
    linkUrl?: string | undefined;
}, {
    isActive?: boolean | undefined;
    description?: string | undefined;
    title?: string | undefined;
    imageUrl?: string | undefined;
    linkUrl?: string | undefined;
}>;
