"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, index: true },
    parent: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category", default: null },
    icon: { type: String },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });
// Pre-save hook to generate slug if it is not provided
categorySchema.pre("save", async function () {
    if (!this.slug) {
        this.slug = this.name
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }
});
exports.Category = (0, mongoose_1.model)("Category", categorySchema);
//# sourceMappingURL=category.model.js.map