import { TBloogNews } from "./news.interface";
import { News } from "./news.model";
import slugify from "slugify";
import mongoose from "mongoose";


export const createPostIntoDB = async (payload: TBloogNews) => {
  const slug = slugify(payload.title, { lower: true, strict: true });
  const result = await News.create({ ...payload, slug });
  return result;
};

export const getAllPostsFromDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };
  const filter: Record<string, unknown> = {};

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

  const result = await News.find(filter).sort({ createdAt: -1 });
  return result;
};

export const getSinglePostBySlugFromDB = async (identifier: string) => {
  const isObjectId = mongoose.Types.ObjectId.isValid(identifier) && identifier.length === 24;
  const filter = isObjectId ? { $or: [{ _id: identifier }, { slug: identifier }] } : { slug: identifier };

  const result = await News.findOneAndUpdate(
    filter,
    { $inc: { views: 1 } },
    { new: true }
  );
  return result;
};

export const updatePostInDB = async (id: string, payload: Partial<TBloogNews>) => {
  if (payload.title) {
    payload.slug = slugify(payload.title, { lower: true, strict: true });
  }
  const result = await News.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const deletePostFromDB = async (id: string) => {
  const result = await News.findByIdAndDelete(id);
  return result;
};

export const NewsServices = {
  createPostIntoDB,
  getAllPostsFromDB,
  getSinglePostBySlugFromDB,
  updatePostInDB,
  deletePostFromDB,
};