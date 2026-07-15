"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeBannerController = exports.deleteBanner = exports.updatedBanner = exports.getBanner = exports.createBanner = void 0;
const homeBanner_services_1 = require("./homeBanner.services");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createBanner = async (req, res, next) => {
    try {
        // Limit per request
        if (Array.isArray(req.body) && req.body.length > 5) {
            return res.status(400).json({
                success: false,
                message: "You can create a maximum of 5 banners at a time.",
            });
        }
        // Limit overall count in the database to 5
        const existingCount = await homeBanner_services_1.homeBannerService.getBannerCountService();
        const incomingCount = Array.isArray(req.body) ? req.body.length : 1;
        if (existingCount + incomingCount > 5) {
            return res.status(400).json({
                success: false,
                message: `You can only have a maximum of 5 banners in total. Currently, you have ${existingCount} banners.`,
            });
        }
        const result = await homeBanner_services_1.homeBannerService.createBannerService(req.body);
        res.status(201).json({
            success: true,
            message: "Banner(s) created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createBanner = createBanner;
const getBanner = async (req, res, next) => {
    try {
        const result = await homeBanner_services_1.homeBannerService.getBannerService();
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "Banners retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getBanner = getBanner;
const updatedBanner = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await homeBanner_services_1.homeBannerService.updateBannerService(id, req.body);
        if (!result) {
            return res.status(http_status_codes_1.default.NOT_FOUND).json({
                success: false,
                message: "Banner not found",
            });
        }
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "Banner updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updatedBanner = updatedBanner;
const deleteBanner = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await homeBanner_services_1.homeBannerService.deleteBannerService(id);
        if (!result) {
            return res.status(http_status_codes_1.default.NOT_FOUND).json({
                success: false,
                message: "Banner not found",
            });
        }
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "Banner deleted successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteBanner = deleteBanner;
exports.homeBannerController = {
    createBanner: exports.createBanner,
    getBanner: exports.getBanner,
    updatedBanner: exports.updatedBanner,
    deleteBanner: exports.deleteBanner,
};
//# sourceMappingURL=homeBanner.controller.js.map