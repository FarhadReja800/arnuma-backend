"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeVideoService = void 0;
const video_model_1 = require("./video.model");
const createHomeVideo = async (payload) => {
    const exist = await video_model_1.HomeVideo.findOne();
    if (exist) {
        throw new Error("Home videos already exist.");
    }
    return await video_model_1.HomeVideo.create(payload);
};
const getHomeVideo = async () => {
    return await video_model_1.HomeVideo.findOne();
};
const updateHomeVideo = async (id, payload) => {
    return await video_model_1.HomeVideo.findByIdAndUpdate(id, payload, {
        returnDocument: "after",
        runValidators: true,
    });
};
const deleteHomeVideo = async (id) => {
    return await video_model_1.HomeVideo.findByIdAndDelete(id);
};
exports.HomeVideoService = {
    createHomeVideo,
    getHomeVideo,
    updateHomeVideo,
    deleteHomeVideo,
};
//# sourceMappingURL=video.services.js.map