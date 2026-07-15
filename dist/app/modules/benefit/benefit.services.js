"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitService = void 0;
const benefit_model_1 = require("./benefit.model");
const createBenefit = async (payload) => {
    return await benefit_model_1.Benefit.create(payload);
};
const getBenefits = async () => {
    return await benefit_model_1.Benefit.find().sort({ order: 1 });
};
const getSingleBenefit = async (id) => {
    return await benefit_model_1.Benefit.findById(id);
};
const updateBenefit = async (id, payload) => {
    return await benefit_model_1.Benefit.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
};
const deleteBenefit = async (id) => {
    return await benefit_model_1.Benefit.findByIdAndDelete(id);
};
exports.BenefitService = {
    createBenefit,
    getBenefits,
    getSingleBenefit,
    updateBenefit,
    deleteBenefit,
};
//# sourceMappingURL=benefit.services.js.map