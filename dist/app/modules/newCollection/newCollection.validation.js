"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCollectionValidation = void 0;
const zod_1 = require("zod");
const createNewCollectionValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: "Title is required" }).min(1, "Title cannot be empty"),
        heading: zod_1.z.string({ required_error: "Heading is required" }).min(1, "Heading cannot be empty"),
        description: zod_1.z.string({ required_error: "Description is required" }).min(1, "Description cannot be empty"),
        buttonText: zod_1.z.string().optional(),
        buttonLink: zod_1.z.string().optional(),
        leftImage: zod_1.z.string({ required_error: "Left image is required" }).min(1, "Left image cannot be empty"),
        leftImageText: zod_1.z.string().optional(),
        rightImage: zod_1.z.string({ required_error: "Right image is required" }).min(1, "Right image cannot be empty"),
        isActive: zod_1.z.boolean().optional(),
    }),
});
const updateNewCollectionValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        heading: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        buttonText: zod_1.z.string().optional(),
        buttonLink: zod_1.z.string().optional(),
        leftImage: zod_1.z.string().optional(),
        leftImageText: zod_1.z.string().optional(),
        rightImage: zod_1.z.string().optional(),
        isActive: zod_1.z.boolean().optional(),
    }),
});
exports.NewCollectionValidation = {
    createNewCollectionValidationSchema,
    updateNewCollectionValidationSchema,
};
//# sourceMappingURL=newCollection.validation.js.map