"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_1 = require("cloudinary");
const env_1 = require("../config/env");
// Configure Cloudinary credentials
cloudinary_1.v2.config({
    cloud_name: env_1.config.cloudinary_cloud_name,
    api_key: env_1.config.cloudinary_api_key,
    api_secret: env_1.config.cloudinary_api_secret,
});
// Set up Multer Storage Engine for Cloudinary
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: async (req, file) => {
        const isVideo = file.mimetype.startsWith('video/');
        return {
            folder: 'arzuma-uploads',
            resource_type: isVideo ? 'video' : 'image',
            allowed_formats: isVideo
                ? ['mp4', 'webm', 'mov', 'avi', 'mkv', 'ogg']
                : ['jpg', 'png', 'jpeg', 'webp'],
        };
    },
});
// Export the multer upload middleware
exports.upload = (0, multer_1.default)({ storage: storage });
//# sourceMappingURL=upload.js.map