"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCollectionController = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const newCollection_services_1 = require("./newCollection.services");
const createCollectionContent = async (req, res, next) => {
    try {
        const result = await newCollection_services_1.NewCollectionService.createCollectionContent(req.body);
        res.status(http_status_codes_1.default.CREATED).json({
            success: true,
            message: "New Collection content created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getCollectionContent = async (req, res, next) => {
    try {
        const result = await newCollection_services_1.NewCollectionService.getCollectionContent(req.query);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "New Collection contents retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getSingleCollectionContent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await newCollection_services_1.NewCollectionService.getSingleCollectionContent(id);
        if (!result) {
            res.status(http_status_codes_1.default.NOT_FOUND).json({
                success: false,
                message: "New Collection content not found",
            });
            return;
        }
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "New Collection content retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const updateCollectionContent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await newCollection_services_1.NewCollectionService.updateCollectionContent(id, req.body);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "New Collection content updated successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const deleteCollectionContent = async (req, res, next) => {
    try {
        const { id } = req.params;
        await newCollection_services_1.NewCollectionService.deleteCollectionContent(id);
        res.status(http_status_codes_1.default.OK).json({
            success: true,
            message: "New Collection content deleted successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
exports.NewCollectionController = {
    createCollectionContent,
    getCollectionContent,
    getSingleCollectionContent,
    updateCollectionContent,
    deleteCollectionContent,
};
//# sourceMappingURL=newCollection.controller.js.map