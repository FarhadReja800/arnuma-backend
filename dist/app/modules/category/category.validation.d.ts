import { z } from "zod";
export declare const createCategoryValidationSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        slug: z.ZodOptional<z.ZodString>;
        parent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        order: z.ZodOptional<z.ZodNumber>;
        isActive: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        isActive?: boolean | undefined;
        icon?: string | undefined;
        order?: number | undefined;
        slug?: string | undefined;
        parent?: string | null | undefined;
    }, {
        name: string;
        isActive?: boolean | undefined;
        icon?: string | undefined;
        order?: number | undefined;
        slug?: string | undefined;
        parent?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        name: string;
        isActive?: boolean | undefined;
        icon?: string | undefined;
        order?: number | undefined;
        slug?: string | undefined;
        parent?: string | null | undefined;
    };
}, {
    body: {
        name: string;
        isActive?: boolean | undefined;
        icon?: string | undefined;
        order?: number | undefined;
        slug?: string | undefined;
        parent?: string | null | undefined;
    };
}>;
export declare const updateCategoryValidationSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        slug: z.ZodOptional<z.ZodString>;
        parent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        order: z.ZodOptional<z.ZodNumber>;
        isActive: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        isActive?: boolean | undefined;
        name?: string | undefined;
        icon?: string | undefined;
        order?: number | undefined;
        slug?: string | undefined;
        parent?: string | null | undefined;
    }, {
        isActive?: boolean | undefined;
        name?: string | undefined;
        icon?: string | undefined;
        order?: number | undefined;
        slug?: string | undefined;
        parent?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        isActive?: boolean | undefined;
        name?: string | undefined;
        icon?: string | undefined;
        order?: number | undefined;
        slug?: string | undefined;
        parent?: string | null | undefined;
    };
}, {
    body: {
        isActive?: boolean | undefined;
        name?: string | undefined;
        icon?: string | undefined;
        order?: number | undefined;
        slug?: string | undefined;
        parent?: string | null | undefined;
    };
}>;
export declare const CategoryValidation: {
    createCategoryValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodString;
            slug: z.ZodOptional<z.ZodString>;
            parent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            icon: z.ZodOptional<z.ZodString>;
            order: z.ZodOptional<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            isActive?: boolean | undefined;
            icon?: string | undefined;
            order?: number | undefined;
            slug?: string | undefined;
            parent?: string | null | undefined;
        }, {
            name: string;
            isActive?: boolean | undefined;
            icon?: string | undefined;
            order?: number | undefined;
            slug?: string | undefined;
            parent?: string | null | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            name: string;
            isActive?: boolean | undefined;
            icon?: string | undefined;
            order?: number | undefined;
            slug?: string | undefined;
            parent?: string | null | undefined;
        };
    }, {
        body: {
            name: string;
            isActive?: boolean | undefined;
            icon?: string | undefined;
            order?: number | undefined;
            slug?: string | undefined;
            parent?: string | null | undefined;
        };
    }>;
    updateCategoryValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            slug: z.ZodOptional<z.ZodString>;
            parent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            icon: z.ZodOptional<z.ZodString>;
            order: z.ZodOptional<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            isActive?: boolean | undefined;
            name?: string | undefined;
            icon?: string | undefined;
            order?: number | undefined;
            slug?: string | undefined;
            parent?: string | null | undefined;
        }, {
            isActive?: boolean | undefined;
            name?: string | undefined;
            icon?: string | undefined;
            order?: number | undefined;
            slug?: string | undefined;
            parent?: string | null | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            isActive?: boolean | undefined;
            name?: string | undefined;
            icon?: string | undefined;
            order?: number | undefined;
            slug?: string | undefined;
            parent?: string | null | undefined;
        };
    }, {
        body: {
            isActive?: boolean | undefined;
            name?: string | undefined;
            icon?: string | undefined;
            order?: number | undefined;
            slug?: string | undefined;
            parent?: string | null | undefined;
        };
    }>;
};
