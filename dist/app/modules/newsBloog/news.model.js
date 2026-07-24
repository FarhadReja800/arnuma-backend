"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
const mongoose_1 = require("mongoose");
const newsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
    },
    image: {
        type: String,
        required: [true, 'Featured image URL is required'],
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        trim: true,
    },
    tags: [
        {
            type: String,
            trim: true,
        },
    ],
    isPopular: {
        type: Boolean,
        default: false,
    },
    views: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});
exports.News = (0, mongoose_1.model)('News', newsSchema);
//# sourceMappingURL=news.model.js.map