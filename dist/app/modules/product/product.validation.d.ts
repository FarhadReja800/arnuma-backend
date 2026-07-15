import { z } from "zod";
export declare const ProductValidation: {
    createProductValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodString;
            sku: z.ZodString;
            price: z.ZodNumber;
            salePrice: z.ZodOptional<z.ZodNumber>;
            description: z.ZodString;
            shortDescription: z.ZodOptional<z.ZodString>;
            images: z.ZodArray<z.ZodString, "many">;
            categories: z.ZodArray<z.ZodString, "many">;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            colors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                value?: string | undefined;
            }, {
                name: string;
                value?: string | undefined;
            }>, "many">>;
            sizes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            stockQuantity: z.ZodNumber;
            inStock: z.ZodOptional<z.ZodBoolean>;
            additionalInformation: z.ZodOptional<z.ZodObject<{
                weight: z.ZodOptional<z.ZodString>;
                dimensions: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                weight?: string | undefined;
                dimensions?: string | undefined;
            }, {
                weight?: string | undefined;
                dimensions?: string | undefined;
            }>>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            description: string;
            sku: string;
            price: number;
            images: string[];
            categories: string[];
            stockQuantity: number;
            isActive?: boolean | undefined;
            salePrice?: number | undefined;
            shortDescription?: string | undefined;
            tags?: string[] | undefined;
            colors?: {
                name: string;
                value?: string | undefined;
            }[] | undefined;
            sizes?: string[] | undefined;
            inStock?: boolean | undefined;
            additionalInformation?: {
                weight?: string | undefined;
                dimensions?: string | undefined;
            } | undefined;
        }, {
            name: string;
            description: string;
            sku: string;
            price: number;
            images: string[];
            categories: string[];
            stockQuantity: number;
            isActive?: boolean | undefined;
            salePrice?: number | undefined;
            shortDescription?: string | undefined;
            tags?: string[] | undefined;
            colors?: {
                name: string;
                value?: string | undefined;
            }[] | undefined;
            sizes?: string[] | undefined;
            inStock?: boolean | undefined;
            additionalInformation?: {
                weight?: string | undefined;
                dimensions?: string | undefined;
            } | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            name: string;
            description: string;
            sku: string;
            price: number;
            images: string[];
            categories: string[];
            stockQuantity: number;
            isActive?: boolean | undefined;
            salePrice?: number | undefined;
            shortDescription?: string | undefined;
            tags?: string[] | undefined;
            colors?: {
                name: string;
                value?: string | undefined;
            }[] | undefined;
            sizes?: string[] | undefined;
            inStock?: boolean | undefined;
            additionalInformation?: {
                weight?: string | undefined;
                dimensions?: string | undefined;
            } | undefined;
        };
    }, {
        body: {
            name: string;
            description: string;
            sku: string;
            price: number;
            images: string[];
            categories: string[];
            stockQuantity: number;
            isActive?: boolean | undefined;
            salePrice?: number | undefined;
            shortDescription?: string | undefined;
            tags?: string[] | undefined;
            colors?: {
                name: string;
                value?: string | undefined;
            }[] | undefined;
            sizes?: string[] | undefined;
            inStock?: boolean | undefined;
            additionalInformation?: {
                weight?: string | undefined;
                dimensions?: string | undefined;
            } | undefined;
        };
    }>;
    updateProductValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            sku: z.ZodOptional<z.ZodString>;
            price: z.ZodOptional<z.ZodNumber>;
            salePrice: z.ZodOptional<z.ZodNumber>;
            description: z.ZodOptional<z.ZodString>;
            shortDescription: z.ZodOptional<z.ZodString>;
            images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            categories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            colors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                value: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                value?: string | undefined;
            }, {
                name: string;
                value?: string | undefined;
            }>, "many">>;
            sizes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            stockQuantity: z.ZodOptional<z.ZodNumber>;
            inStock: z.ZodOptional<z.ZodBoolean>;
            additionalInformation: z.ZodOptional<z.ZodObject<{
                weight: z.ZodOptional<z.ZodString>;
                dimensions: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                weight?: string | undefined;
                dimensions?: string | undefined;
            }, {
                weight?: string | undefined;
                dimensions?: string | undefined;
            }>>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            isActive?: boolean | undefined;
            name?: string | undefined;
            description?: string | undefined;
            sku?: string | undefined;
            price?: number | undefined;
            salePrice?: number | undefined;
            shortDescription?: string | undefined;
            images?: string[] | undefined;
            categories?: string[] | undefined;
            tags?: string[] | undefined;
            colors?: {
                name: string;
                value?: string | undefined;
            }[] | undefined;
            sizes?: string[] | undefined;
            stockQuantity?: number | undefined;
            inStock?: boolean | undefined;
            additionalInformation?: {
                weight?: string | undefined;
                dimensions?: string | undefined;
            } | undefined;
        }, {
            isActive?: boolean | undefined;
            name?: string | undefined;
            description?: string | undefined;
            sku?: string | undefined;
            price?: number | undefined;
            salePrice?: number | undefined;
            shortDescription?: string | undefined;
            images?: string[] | undefined;
            categories?: string[] | undefined;
            tags?: string[] | undefined;
            colors?: {
                name: string;
                value?: string | undefined;
            }[] | undefined;
            sizes?: string[] | undefined;
            stockQuantity?: number | undefined;
            inStock?: boolean | undefined;
            additionalInformation?: {
                weight?: string | undefined;
                dimensions?: string | undefined;
            } | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            isActive?: boolean | undefined;
            name?: string | undefined;
            description?: string | undefined;
            sku?: string | undefined;
            price?: number | undefined;
            salePrice?: number | undefined;
            shortDescription?: string | undefined;
            images?: string[] | undefined;
            categories?: string[] | undefined;
            tags?: string[] | undefined;
            colors?: {
                name: string;
                value?: string | undefined;
            }[] | undefined;
            sizes?: string[] | undefined;
            stockQuantity?: number | undefined;
            inStock?: boolean | undefined;
            additionalInformation?: {
                weight?: string | undefined;
                dimensions?: string | undefined;
            } | undefined;
        };
    }, {
        body: {
            isActive?: boolean | undefined;
            name?: string | undefined;
            description?: string | undefined;
            sku?: string | undefined;
            price?: number | undefined;
            salePrice?: number | undefined;
            shortDescription?: string | undefined;
            images?: string[] | undefined;
            categories?: string[] | undefined;
            tags?: string[] | undefined;
            colors?: {
                name: string;
                value?: string | undefined;
            }[] | undefined;
            sizes?: string[] | undefined;
            stockQuantity?: number | undefined;
            inStock?: boolean | undefined;
            additionalInformation?: {
                weight?: string | undefined;
                dimensions?: string | undefined;
            } | undefined;
        };
    }>;
    addReviewValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            reviewerName: z.ZodString;
            reviewerEmail: z.ZodString;
            rating: z.ZodNumber;
            comment: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            reviewerName: string;
            reviewerEmail: string;
            rating: number;
            comment?: string | undefined;
        }, {
            reviewerName: string;
            reviewerEmail: string;
            rating: number;
            comment?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            reviewerName: string;
            reviewerEmail: string;
            rating: number;
            comment?: string | undefined;
        };
    }, {
        body: {
            reviewerName: string;
            reviewerEmail: string;
            rating: number;
            comment?: string | undefined;
        };
    }>;
};
