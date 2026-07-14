import mongoose from "mongoose";
import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategory = async (payload: TCategory) => {
  // Check if parent category exists if provided
  if (payload.parent) {
    const parentCategory = await Category.findById(payload.parent);
    if (!parentCategory) {
      throw new Error("Parent category not found");
    }
  }

  // Pre-generate slug to check uniqueness before save
  const generatedSlug = payload.slug || payload.name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const existingCategory = await Category.findOne({ slug: generatedSlug });
  if (existingCategory) {
    payload.slug = `${generatedSlug}-${Date.now()}`;
  } else {
    payload.slug = generatedSlug;
  }

  const result = await Category.create(payload);
  return result;
};

const getCategories = async (query: { nested?: string }) => {
  const categories = await Category.find().sort({ order: 1, name: 1 }).populate("parent");

  if (query.nested === "true") {
    return buildCategoryTree(categories);
  }

  return categories;
};

const getSingleCategory = async (identifier: string) => {
  if (mongoose.isValidObjectId(identifier)) {
    return await Category.findById(identifier).populate("parent");
  }
  return await Category.findOne({ slug: identifier }).populate("parent");
};

const updateCategory = async (id: string, payload: Partial<TCategory>) => {
  const category = await Category.findById(id);
  if (!category) {
    throw new Error("Category not found");
  }

  // Prevent setting itself as parent
  if (payload.parent && payload.parent.toString() === id) {
    throw new Error("A category cannot be its own parent");
  }

  // Validate parent category exists
  if (payload.parent) {
    const parentCategory = await Category.findById(payload.parent);
    if (!parentCategory) {
      throw new Error("Parent category not found");
    }
  }

  // Handle slug change if name is updated and slug is not explicitly provided
  if (payload.name && !payload.slug) {
    const generatedSlug = payload.name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const existingCategory = await Category.findOne({ slug: generatedSlug, _id: { $ne: id } });
    if (existingCategory) {
      payload.slug = `${generatedSlug}-${Date.now()}`;
    } else {
      payload.slug = generatedSlug;
    }
  }

  const result = await Category.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteCategory = async (id: string) => {
  const category = await Category.findById(id);
  if (!category) {
    throw new Error("Category not found");
  }

  // Set parent to null for child categories to prevent orphaned parent references
  await Category.updateMany({ parent: id }, { parent: null });

  const result = await Category.findByIdAndDelete(id);
  return result;
};

// Helper function to build a nested tree structure
const buildCategoryTree = (categories: any[], parentId: any = null): any[] => {
  const categoryList: any[] = [];
  let filteredCategories;

  if (parentId === null) {
    filteredCategories = categories.filter(
      (cat) => cat.parent === null || cat.parent === undefined
    );
  } else {
    filteredCategories = categories.filter(
      (cat) => cat.parent && cat.parent._id.toString() === parentId.toString()
    );
  }

  for (const cat of filteredCategories) {
    categoryList.push({
      _id: cat._id,
      name: cat.name,
      slug: cat.slug,
      icon: cat.icon,
      order: cat.order,
      isActive: cat.isActive,
      createdAt: cat.createdAt,
      updatedAt: cat.updatedAt,
      children: buildCategoryTree(categories, cat._id),
    });
  }

  return categoryList;
};

export const CategoryService = {
  createCategory,
  getCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
