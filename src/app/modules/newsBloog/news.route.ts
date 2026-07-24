import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest'; // Custom middleware for Zod
import { createPostZodSchema, updatePostZodSchema } from './news.validation';
import { NewsControllers } from './news.controller';

const router = Router();

router.post(
  '/create-news',
  validateRequest(createPostZodSchema),
  NewsControllers.createPost
);

router.get('/all-news', NewsControllers.getAllPosts);
router.get('/single-news/:slug', NewsControllers.getSinglePost);

router.patch(
  '/update-news/:id',
  validateRequest(updatePostZodSchema),
  NewsControllers.updatePost
);

router.delete('/delete-news/:id', NewsControllers.deletePost);

export const NewsRoutes = router;