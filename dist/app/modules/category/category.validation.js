"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidation = exports.updateCategoryValidationSchema = exports.createCategoryValidationSchema = void 0;
const zod_1 = require("zod");
exports.createCategoryValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Category name is required",
        }).min(1, "Category name cannot be empty"),
        slug: zod_1.z.string().optional(),
        parent: zod_1.z.string().nullable().optional(),
        icon: zod_1.z.string().optional(),
        order: zod_1.z.number().optional(),
        isActive: zod_1.z.boolean().optional(),
    }),
});
exports.updateCategoryValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        slug: zod_1.z.string().optional(),
        parent: zod_1.z.string().nullable().optional(),
        icon: zod_1.z.string().optional(),
        order: zod_1.z.number().optional(),
        isActive: zod_1.z.boolean().optional(),
    }),
});
exports.CategoryValidation = {
    createCategoryValidationSchema: exports.createCategoryValidationSchema,
    updateCategoryValidationSchema: exports.updateCategoryValidationSchema,
};
//# sourceMappingURL=category.validation.js.map