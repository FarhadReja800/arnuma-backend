"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeBannerService = void 0;
const homeBanner_model_1 = require("./homeBanner.model");
const createBannerService = async (payload) => {
    if (Array.isArray(payload)) {
        const result = await homeBanner_model_1.HomeBanner.create(payload);
        return result;
    }
    const result = await homeBanner_model_1.HomeBanner.create(payload);
    return result;
};
const getBannerService = async () => {
    const result = await homeBanner_model_1.HomeBanner.find();
    return result;
};
const getBannerCountService = async () => {
    const result = await homeBanner_model_1.HomeBanner.countDocuments();
    return result;
};
const updateBannerService = async (id, payload) => {
    const result = await homeBanner_model_1.HomeBanner.findByIdAndUpdate(id, payload, {
        returnDocument: "after",
        runValidators: true,
    });
    return result;
};
const deleteBannerService = async (id) => {
    const result = await homeBanner_model_1.HomeBanner.findByIdAndDelete(id);
    return result;
};
exports.homeBannerService = {
    createBannerService,
    getBannerService,
    getBannerCountService,
    updateBannerService,
    deleteBannerService,
};
//# sourceMappingURL=homeBanner.services.js.map