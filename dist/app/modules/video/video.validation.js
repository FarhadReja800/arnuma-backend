"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHomeVideoValidation = exports.createHomeVideoValidation = void 0;
const zod_1 = require("zod");
const VideoSchema = zod_1.z.object({
    title: zod_1.z.string(),
    videoUrl: zod_1.z.string(),
    isActive: zod_1.z.boolean().optional(),
});
exports.createHomeVideoValidation = zod_1.z.object({
    body: zod_1.z.object({
        videos: zod_1.z
            .array(VideoSchema)
            .min(1)
            .max(5, "Maximum 5 videos allowed"),
    }),
});
exports.updateHomeVideoValidation = zod_1.z.object({
    body: zod_1.z.object({
        videos: zod_1.z
            .array(VideoSchema)
            .max(5)
            .optional(),
    }),
});
//# sourceMappingURL=video.validation.js.map