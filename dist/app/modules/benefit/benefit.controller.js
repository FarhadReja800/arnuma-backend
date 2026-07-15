"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitController = void 0;
const benefit_services_1 = require("./benefit.services");
const createBenefit = async (req, res) => {
    const result = await benefit_services_1.BenefitService.createBenefit(req.body);
    res.status(201).json({
        success: true,
        message: "Benefit created successfully",
        data: result,
    });
};
const getBenefits = async (req, res) => {
    const result = await benefit_services_1.BenefitService.getBenefits();
    res.status(200).json({
        success: true,
        data: result,
    });
};
const getSingleBenefit = async (req, res) => {
    const result = await benefit_services_1.BenefitService.getSingleBenefit(req.params.id);
    res.status(200).json({
        success: true,
        data: result,
    });
};
const updateBenefit = async (req, res) => {
    const result = await benefit_services_1.BenefitService.updateBenefit(req.params.id, req.body);
    res.status(200).json({
        success: true,
        message: "Benefit updated successfully",
        data: result,
    });
};
const deleteBenefit = async (req, res) => {
    await benefit_services_1.BenefitService.deleteBenefit(req.params.id);
    res.status(200).json({
        success: true,
        message: "Benefit deleted successfully",
    });
};
exports.BenefitController = {
    createBenefit,
    getBenefits,
    getSingleBenefit,
    updateBenefit,
    deleteBenefit,
};
//# sourceMappingURL=benefit.controller.js.map