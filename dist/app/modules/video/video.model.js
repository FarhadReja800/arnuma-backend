"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeVideo = void 0;
const mongoose_1 = require("mongoose");
const VideoSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    _id: true,
});
const HomeVideoSchema = new mongoose_1.Schema({
    videos: {
        type: [VideoSchema],
        validate: {
            validator: (value) => value.length <= 5,
            message: "Maximum 5 videos are allowed.",
        },
        default: [],
    },
}, {
    timestamps: true,
});
exports.HomeVideo = (0, mongoose_1.model)("HomeVideo", HomeVideoSchema);
//# sourceMappingURL=video.model.js.map