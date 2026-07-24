import { Request, Response } from 'express';
import { NewsServices } from './news.services';

export const createPost = async (req: Request, res: Response) => {
  try {
    const result = await NewsServices.createPostIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const result = await NewsServices.getAllPostsFromDB(req.query);
    res.status(200).json({
      success: true,
      message: 'Posts fetched successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSinglePost = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await NewsServices.getSinglePostBySlugFromDB(slug as string);
    if (!result) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Post fetched successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await NewsServices.updatePostInDB(id as string, req.body);
    res.status(200).json({
      success: true,
      message: 'Post updated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await NewsServices.deletePostFromDB(id as string);
    res.status(200).json({
      success: true,
      message: 'Post deleted successfully',
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const NewsControllers = {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
};