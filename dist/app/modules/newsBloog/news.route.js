"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest")); // Custom middleware for Zod
const news_validation_1 = require("./news.validation");
const news_controller_1 = require("./news.controller");
const router = (0, express_1.Router)();
router.post('/create-news', (0, validateRequest_1.default)(news_validation_1.createPostZodSchema), news_controller_1.NewsControllers.createPost);
router.get('/all-news', news_controller_1.NewsControllers.getAllPosts);
router.get('/single-news/:slug', news_controller_1.NewsControllers.getSinglePost);
router.patch('/update-news/:id', (0, validateRequest_1.default)(news_validation_1.updatePostZodSchema), news_controller_1.NewsControllers.updatePost);
router.delete('/delete-news/:id', news_controller_1.NewsControllers.deletePost);
exports.NewsRoutes = router;
//# sourceMappingURL=news.route.js.map