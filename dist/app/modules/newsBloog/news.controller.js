"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsControllers = exports.deletePost = exports.updatePost = exports.getSinglePost = exports.getAllPosts = exports.createPost = void 0;
const news_services_1 = require("./news.services");
const createPost = async (req, res) => {
    try {
        const result = await news_services_1.NewsServices.createPostIntoDB(req.body);
        res.status(201).json({
            success: true,
            message: 'Post created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.createPost = createPost;
const getAllPosts = async (req, res) => {
    try {
        const result = await news_services_1.NewsServices.getAllPostsFromDB(req.query);
        res.status(200).json({
            success: true,
            message: 'Posts fetched successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.getAllPosts = getAllPosts;
const getSinglePost = async (req, res) => {
    try {
        const { slug } = req.params;
        const result = await news_services_1.NewsServices.getSinglePostBySlugFromDB(slug);
        if (!result) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Post fetched successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.getSinglePost = getSinglePost;
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await news_services_1.NewsServices.updatePostInDB(id, req.body);
        res.status(200).json({
            success: true,
            message: 'Post updated successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.updatePost = updatePost;
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await news_services_1.NewsServices.deletePostFromDB(id);
        res.status(200).json({
            success: true,
            message: 'Post deleted successfully',
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.deletePost = deletePost;
exports.NewsControllers = {
    createPost: exports.createPost,
    getAllPosts: exports.getAllPosts,
    getSinglePost: exports.getSinglePost,
    updatePost: exports.updatePost,
    deletePost: exports.deletePost,
};
//# sourceMappingURL=news.controller.js.map