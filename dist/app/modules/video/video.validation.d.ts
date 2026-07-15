import { z } from "zod";
export declare const createHomeVideoValidation: z.ZodObject<{
    body: z.ZodObject<{
        videos: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            videoUrl: z.ZodString;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            videoUrl: string;
            isActive?: boolean | undefined;
        }, {
            title: string;
            videoUrl: string;
            isActive?: boolean | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        videos: {
            title: string;
            videoUrl: string;
            isActive?: boolean | undefined;
        }[];
    }, {
        videos: {
            title: string;
            videoUrl: string;
            isActive?: boolean | undefined;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        videos: {
            title: string;
            videoUrl: string;
            isActive?: boolean | undefined;
        }[];
    };
}, {
    body: {
        videos: {
            title: string;
            videoUrl: string;
            isActive?: boolean | undefined;
        }[];
    };
}>;
export declare const updateHomeVideoValidation: z.ZodObject<{
    body: z.ZodObject<{
        videos: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            videoUrl: z.ZodString;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            videoUrl: string;
            isActive?: boolean | undefined;
        }, {
            title: string;
            videoUrl: string;
            isActive?: boolean | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        videos?: {
            title: string;
            videoUrl: string;
            isActive?: boolean | undefined;
        }[] | undefined;
    }, {
        videos?: {
            title: string;
            videoUrl: string;
            isActive?: boolean | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        videos?: {
            title: string;
            videoUrl: string;
            isActive?: boolean | undefined;
        }[] | undefined;
    };
}, {
    body: {
        videos?: {
            title: string;
            videoUrl: string;
            isActive?: boolean | undefined;
        }[] | undefined;
    };
}>;
