"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitValidation = void 0;
const zod_1 = require("zod");
const createBenefitValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        description: zod_1.z.string(),
        icon: zod_1.z.string().url(),
        order: zod_1.z.number().optional(),
        isActive: zod_1.z.boolean().optional(),
    }),
});
const updateBenefitValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        icon: zod_1.z.string().url().optional(),
        order: zod_1.z.number().optional(),
        isActive: zod_1.z.boolean().optional(),
    }),
});
exports.BenefitValidation = {
    createBenefitValidation,
    updateBenefitValidation,
};
//# sourceMappingURL=benefit.validation.js.map