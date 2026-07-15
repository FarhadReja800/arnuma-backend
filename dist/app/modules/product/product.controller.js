"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const product_services_1 = require("./product.services");
const createProduct = async (req, res, next) => {
    try {
        const result = await product_services_1.ProductService.createProduct(req.body);
        res.status(http_status_codes_1.default.CREATED).json({
            success: true,
            message: "Product created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getProducts = async (req, res, next) => {
    try {
        const result = await product_services_1.ProductService.getProducts(req.query);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "Products retrieved successfully",
            meta: result.meta,
            data: result.data,
        });
    }
    catch (error) {
        next(error);
    }
};
const getSingleProduct = async (req, res, next) => {
    try {
        const { idOrSlug } = req.params;
        const result = await product_services_1.ProductService.getSingleProduct(idOrSlug);
        if (!result) {
            res.status(http_status_codes_1.default.NOT_FOUND).json({
                success: false,
                message: "Product not found",
            });
            return;
        }
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "Product retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await product_services_1.ProductService.updateProduct(id, req.body);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "Product updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        await product_services_1.ProductService.deleteProduct(id);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "Product deleted successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
const addReview = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await product_services_1.ProductService.addReview(id, req.body);
        res.status(http_status_codes_1.default.CREATED).json({
            success: true,
            message: "Review added successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getProductFiltersMetadata = async (req, res, next) => {
    try {
        const result = await product_services_1.ProductService.getProductFiltersMetadata();
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "Product filters metadata retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.ProductController = {
    createProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    addReview,
    getProductFiltersMetadata,
};
//# sourceMappingURL=product.controller.js.map