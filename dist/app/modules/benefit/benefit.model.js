"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Benefit = void 0;
const mongoose_1 = require("mongoose");
const BenefitSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    order: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });
exports.Benefit = (0, mongoose_1.model)("Benefit", BenefitSchema);
//# sourceMappingURL=benefit.model.js.map