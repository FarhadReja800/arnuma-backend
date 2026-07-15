"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBanner = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    linkUrl: { type: String },
    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false,
});
exports.HomeBanner = (0, mongoose_1.model)("HomeBanner", schema);
//# sourceMappingURL=homeBanner.model.js.map