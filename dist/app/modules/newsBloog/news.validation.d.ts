import { z } from 'zod';
export declare const createPostZodSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        content: z.ZodString;
        image: z.ZodString;
        category: z.ZodString;
        tags: z.ZodArray<z.ZodString, "atleastone">;
        isPopular: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        tags: [string, ...string[]];
        category: string;
        image: string;
        content: string;
        isPopular?: boolean | undefined;
    }, {
        title: string;
        tags: [string, ...string[]];
        category: string;
        image: string;
        content: string;
        isPopular?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        title: string;
        tags: [string, ...string[]];
        category: string;
        image: string;
        content: string;
        isPopular?: boolean | undefined;
    };
}, {
    body: {
        title: string;
        tags: [string, ...string[]];
        category: string;
        image: string;
        content: string;
        isPopular?: boolean | undefined;
    };
}>;
export declare const updatePostZodSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        content: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        isPopular: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        tags?: string[] | undefined;
        category?: string | undefined;
        image?: string | undefined;
        content?: string | undefined;
        isPopular?: boolean | undefined;
    }, {
        title?: string | undefined;
        tags?: string[] | undefined;
        category?: string | undefined;
        image?: string | undefined;
        content?: string | undefined;
        isPopular?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        title?: string | undefined;
        tags?: string[] | undefined;
        category?: string | undefined;
        image?: string | undefined;
        content?: string | undefined;
        isPopular?: boolean | undefined;
    };
}, {
    body: {
        title?: string | undefined;
        tags?: string[] | undefined;
        category?: string | undefined;
        image?: string | undefined;
        content?: string | undefined;
        isPopular?: boolean | undefined;
    };
}>;
