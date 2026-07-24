"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostZodSchema = exports.createPostZodSchema = void 0;
const zod_1 = require("zod");
exports.createPostZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        content: zod_1.z.string({ required_error: 'Content is required' }),
        image: zod_1.z.string({ required_error: 'Image URL is required' }).url('Invalid image URL'),
        category: zod_1.z.string({ required_error: 'Category is required' }),
        tags: zod_1.z.array(zod_1.z.string()).nonempty('At least one tag is required'),
        isPopular: zod_1.z.boolean().optional(),
    }),
});
exports.updatePostZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
        image: zod_1.z.string().url('Invalid image URL').optional(),
        category: zod_1.z.string().optional(),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
        isPopular: zod_1.z.boolean().optional(),
    }),
});
//# sourceMappingURL=news.validation.js.map