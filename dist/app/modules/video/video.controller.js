"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeVideoController = void 0;
const video_services_1 = require("./video.services");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const createHomeVideo = (0, catchAsync_1.default)(async (req, res) => {
    const result = await video_services_1.HomeVideoService.createHomeVideo(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Videos uploaded successfully",
        data: result,
    });
});
const getHomeVideo = (0, catchAsync_1.default)(async (req, res) => {
    const result = await video_services_1.HomeVideoService.getHomeVideo();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Videos retrieved successfully",
        data: result,
    });
});
const updateHomeVideo = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await video_services_1.HomeVideoService.updateHomeVideo(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Videos updated successfully",
        data: result,
    });
});
const deleteHomeVideo = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const result = await video_services_1.HomeVideoService.deleteHomeVideo(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Videos deleted successfully",
        data: result,
    });
});
const uploadVideo = (0, catchAsync_1.default)(async (req, res) => {
    const file = req.file || (req.files && Array.isArray(req.files) ? req.files[0] : undefined);
    if (!file) {
        throw new Error("No video file provided for upload.");
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Video uploaded successfully",
        data: {
            url: file.path,
        },
    });
});
exports.HomeVideoController = {
    createHomeVideo,
    getHomeVideo,
    updateHomeVideo,
    deleteHomeVideo,
    uploadVideo,
};
//# sourceMappingURL=video.controller.js.map