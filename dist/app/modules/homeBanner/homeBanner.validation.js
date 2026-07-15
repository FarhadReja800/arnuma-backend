"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHomeBannerValidationSchema = exports.HomeBannerValidationSchema = void 0;
const zod_1 = require("zod");
exports.HomeBannerValidationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    description: zod_1.z.string().min(1, "Description is required"),
    imageUrl: zod_1.z.string().url("Invalid image URL"),
    linkUrl: zod_1.z.string().url().optional(),
    isActive: zod_1.z.boolean().optional().default(true),
});
exports.UpdateHomeBannerValidationSchema = exports.HomeBannerValidationSchema.partial();
//# sourceMappingURL=homeBanner.validation.js.map