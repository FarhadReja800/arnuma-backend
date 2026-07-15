"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const category_services_1 = require("./category.services");
const createCategory = async (req, res, next) => {
    try {
        const result = await category_services_1.CategoryService.createCategory(req.body);
        res.status(http_status_codes_1.default.CREATED).json({
            success: true,
            message: "Category created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getCategories = async (req, res, next) => {
    try {
        const result = await category_services_1.CategoryService.getCategories(req.query);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "Categories retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getSingleCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await category_services_1.CategoryService.getSingleCategory(id);
        if (!result) {
            res.status(http_status_codes_1.default.NOT_FOUND).json({
                success: false,
                message: "Category not found",
            });
            return;
        }
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "Category retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await category_services_1.CategoryService.updateCategory(id, req.body);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "Category updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        await category_services_1.CategoryService.deleteCategory(id);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "Category deleted successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
exports.CategoryController = {
    createCategory,
    getCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory,
};
//# sourceMappingURL=category.controller.js.map