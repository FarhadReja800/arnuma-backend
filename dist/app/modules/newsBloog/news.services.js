"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsServices = exports.deletePostFromDB = exports.updatePostInDB = exports.getSinglePostBySlugFromDB = exports.getAllPostsFromDB = exports.createPostIntoDB = void 0;
const news_model_1 = require("./news.model");
const slugify_1 = __importDefault(require("slugify"));
const mongoose_1 = __importDefault(require("mongoose"));
const createPostIntoDB = async (payload) => {
    const slug = (0, slugify_1.default)(payload.title, { lower: true, strict: true });
    const result = await news_model_1.News.create({ ...payload, slug });
    return result;
};
exports.createPostIntoDB = createPostIntoDB;
const getAllPostsFromDB = async (query) => {
    const queryObj = { ...query };
    const filter = {};
    // Filter by tag (e.g. ?tag=fashion)
    if (queryObj.tag) {
        filter.tags = { $in: [queryObj.tag] };
    }
    // Filter by category (e.g. ?category=clothing)
    if (queryObj.category) {
        filter.category = queryObj.category;
    }
    // Filter popular posts
    if (queryObj.isPopular) {
        filter.isPopular = queryObj.isPopular === 'true';
    }
    // Search by keyword
    if (queryObj.searchTerm) {
        filter.$or = [
            { title: { $regex: queryObj.searchTerm, $options: 'i' } },
            { content: { $regex: queryObj.searchTerm, $options: 'i' } },
        ];
    }
    const result = await news_model_1.News.find(filter).sort({ createdAt: -1 });
    return result;
};
exports.getAllPostsFromDB = getAllPostsFromDB;
const getSinglePostBySlugFromDB = async (identifier) => {
    const isObjectId = mongoose_1.default.Types.ObjectId.isValid(identifier) && identifier.length === 24;
    const filter = isObjectId ? { $or: [{ _id: identifier }, { slug: identifier }] } : { slug: identifier };
    const result = await news_model_1.News.findOneAndUpdate(filter, { $inc: { views: 1 } }, { new: true });
    return result;
};
exports.getSinglePostBySlugFromDB = getSinglePostBySlugFromDB;
const updatePostInDB = async (id, payload) => {
    if (payload.title) {
        payload.slug = (0, slugify_1.default)(payload.title, { lower: true, strict: true });
    }
    const result = await news_model_1.News.findByIdAndUpdate(id, payload, { new: true });
    return result;
};
exports.updatePostInDB = updatePostInDB;
const deletePostFromDB = async (id) => {
    const result = await news_model_1.News.findByIdAndDelete(id);
    return result;
};
exports.deletePostFromDB = deletePostFromDB;
exports.NewsServices = {
    createPostIntoDB: exports.createPostIntoDB,
    getAllPostsFromDB: exports.getAllPostsFromDB,
    getSinglePostBySlugFromDB: exports.getSinglePostBySlugFromDB,
    updatePostInDB: exports.updatePostInDB,
    deletePostFromDB: exports.deletePostFromDB,
};
//# sourceMappingURL=news.services.js.map