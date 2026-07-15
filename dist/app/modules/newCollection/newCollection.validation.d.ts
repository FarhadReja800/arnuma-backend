import { z } from "zod";
export declare const NewCollectionValidation: {
    createNewCollectionValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodString;
            heading: z.ZodString;
            description: z.ZodString;
            buttonText: z.ZodOptional<z.ZodString>;
            buttonLink: z.ZodOptional<z.ZodString>;
            leftImage: z.ZodString;
            leftImageText: z.ZodOptional<z.ZodString>;
            rightImage: z.ZodString;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            description: string;
            title: string;
            heading: string;
            leftImage: string;
            rightImage: string;
            isActive?: boolean | undefined;
            buttonText?: string | undefined;
            buttonLink?: string | undefined;
            leftImageText?: string | undefined;
        }, {
            description: string;
            title: string;
            heading: string;
            leftImage: string;
            rightImage: string;
            isActive?: boolean | undefined;
            buttonText?: string | undefined;
            buttonLink?: string | undefined;
            leftImageText?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            description: string;
            title: string;
            heading: string;
            leftImage: string;
            rightImage: string;
            isActive?: boolean | undefined;
            buttonText?: string | undefined;
            buttonLink?: string | undefined;
            leftImageText?: string | undefined;
        };
    }, {
        body: {
            description: string;
            title: string;
            heading: string;
            leftImage: string;
            rightImage: string;
            isActive?: boolean | undefined;
            buttonText?: string | undefined;
            buttonLink?: string | undefined;
            leftImageText?: string | undefined;
        };
    }>;
    updateNewCollectionValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            heading: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            buttonText: z.ZodOptional<z.ZodString>;
            buttonLink: z.ZodOptional<z.ZodString>;
            leftImage: z.ZodOptional<z.ZodString>;
            leftImageText: z.ZodOptional<z.ZodString>;
            rightImage: z.ZodOptional<z.ZodString>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            isActive?: boolean | undefined;
            description?: string | undefined;
            title?: string | undefined;
            heading?: string | undefined;
            buttonText?: string | undefined;
            buttonLink?: string | undefined;
            leftImage?: string | undefined;
            leftImageText?: string | undefined;
            rightImage?: string | undefined;
        }, {
            isActive?: boolean | undefined;
            description?: string | undefined;
            title?: string | undefined;
            heading?: string | undefined;
            buttonText?: string | undefined;
            buttonLink?: string | undefined;
            leftImage?: string | undefined;
            leftImageText?: string | undefined;
            rightImage?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        body: {
            isActive?: boolean | undefined;
            description?: string | undefined;
            title?: string | undefined;
            heading?: string | undefined;
            buttonText?: string | undefined;
            buttonLink?: string | undefined;
            leftImage?: string | undefined;
            leftImageText?: string | undefined;
            rightImage?: string | undefined;
        };
    }, {
        body: {
            isActive?: boolean | undefined;
            description?: string | undefined;
            title?: string | undefined;
            heading?: string | undefined;
            buttonText?: string | undefined;
            buttonLink?: string | undefined;
            leftImage?: string | undefined;
            leftImageText?: string | undefined;
            rightImage?: string | undefined;
        };
    }>;
};
