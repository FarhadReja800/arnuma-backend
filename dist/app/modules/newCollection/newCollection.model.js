"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCollection = void 0;
const mongoose_1 = require("mongoose");
const newCollectionSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    heading: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    buttonText: { type: String, default: "SHOP NOW", trim: true },
    buttonLink: { type: String, trim: true },
    leftImage: { type: String, required: true, trim: true },
    leftImageText: { type: String, trim: true },
    rightImage: { type: String, required: true, trim: true },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });
exports.NewCollection = (0, mongoose_1.model)("NewCollection", newCollectionSchema);
//# sourceMappingURL=newCollection.model.js.map