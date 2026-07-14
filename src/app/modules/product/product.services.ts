import mongoose from "mongoose";
import { TProduct, TReview } from "./product.interface";
import { Product } from "./product.model";
import { Category } from "../category/category.model";

// Helper function to recursively fetch child category IDs
const getAllCategoryIds = async (categoryIdentifier: string): Promise<string[]> => {
  let rootCategory = null;
  if (mongoose.isValidObjectId(categoryIdentifier)) {
    rootCategory = await Category.findById(categoryIdentifier);
  } else {
    rootCategory = await Category.findOne({ slug: categoryIdentifier });
  }

  if (!rootCategory) {
    return [];
  }

  const categoryIds: string[] = [rootCategory._id.toString()];

  const fetchChildIds = async (parentId: string) => {
    const children = await Category.find({ parent: parentId });
    for (const child of children) {
      const childIdStr = child._id.toString();
      if (!categoryIds.includes(childIdStr)) {
        categoryIds.push(childIdStr);
        await fetchChildIds(childIdStr);
      }
    }
  };

  await fetchChildIds(rootCategory._id.toString());
  return categoryIds;
};

// Create a new product
const createProduct = async (payload: TProduct) => {
  // Validate all referenced categories exist
  for (const catId of payload.categories) {
    const categoryExists = await Category.findById(catId);
    if (!categoryExists) {
      throw new Error(`Category with ID ${catId} not found`);
    }
  }

  // Pre-generate slug to check uniqueness before save
  const generatedSlug = payload.slug || payload.name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const existingSlugProduct = await Product.findOne({ slug: generatedSlug });
  if (existingSlugProduct) {
    payload.slug = `${generatedSlug}-${Date.now()}`;
  } else {
    payload.slug = generatedSlug;
  }

  // Verify SKU is unique
  const existingSkuProduct = await Product.findOne({ sku: payload.sku });
  if (existingSkuProduct) {
    throw new Error(`Product with SKU "${payload.sku}" already exists`);
  }

  const result = await Product.create(payload);
  return result;
};

// Get products with advanced search, category expanding, price filters, size/color checkboxes, pagination and sorting
const getProducts = async (query: Record<string, any>) => {
  const {
    searchTerm,
    category,
    minPrice,
    maxPrice,
    colors,
    sizes,
    inStock,
    onSale,
    sortBy,
    sortOrder = "desc",
    page = 1,
    limit = 10,
  } = query;

  const filterQuery: Record<string, any> = { isActive: true };

  // Search term logic
  if (searchTerm) {
    filterQuery.$or = [
      { name: { $regex: searchTerm, $options: "i" } },
      { sku: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
      { tags: { $regex: searchTerm, $options: "i" } },
    ];
  }

  // Category filter with recursive sub-category expansion
  if (category) {
    const categoryIds = await getAllCategoryIds(category);
    filterQuery.categories = { $in: categoryIds };
  }

  // Price filter on effective active pricing
  if (minPrice !== undefined || maxPrice !== undefined) {
    const min = minPrice !== undefined ? Number(minPrice) : 0;
    const max = maxPrice !== undefined ? Number(maxPrice) : Infinity;

    filterQuery.$or = [
      {
        salePrice: { $exists: true, $ne: null },
        $expr: {
          $and: [
            { $gte: ["$salePrice", min] },
            { $lte: ["$salePrice", max] }
          ]
        }
      },
      {
        $or: [
          { salePrice: { $exists: false } },
          { salePrice: null }
        ],
        price: { $gte: min, $lte: max }
      }
    ];
  }

  // Colors filter (comma-separated color names, case-insensitive)
  if (colors) {
    const colorList = colors.split(",").map((c: string) => c.trim());
    filterQuery["colors.name"] = { $in: colorList.map((c: string) => new RegExp(`^${c}$`, "i")) };
  }

  // Sizes filter (comma-separated sizes)
  if (sizes) {
    const sizeList = sizes.split(",").map((s: string) => s.trim());
    filterQuery.sizes = { $in: sizeList };
  }

  // In Stock filter
  if (inStock !== undefined) {
    filterQuery.inStock = inStock === "true";
  }

  // On Sale filter
  if (onSale !== undefined) {
    filterQuery.onSale = onSale === "true";
  }

  // Build sorting
  let sortStr = "-createdAt";
  if (sortBy === "price") {
    sortStr = sortOrder === "asc" ? "price" : "-price";
  } else if (sortBy === "rating") {
    sortStr = "-ratings";
  } else if (sortBy === "newest") {
    sortStr = "-createdAt";
  }

  // Pagination calculation
  const parsedPage = Number(page);
  const parsedLimit = Number(limit);
  const skip = (parsedPage - 1) * parsedLimit;

  const result = await Product.find(filterQuery)
    .populate("categories")
    .sort(sortStr)
    .skip(skip)
    .limit(parsedLimit);

  const total = await Product.countDocuments(filterQuery);

  return {
    meta: {
      page: parsedPage,
      limit: parsedLimit,
      total,
      totalPage: Math.ceil(total / parsedLimit),
    },
    data: result,
  };
};

// Fetch single product by ID or Slug
const getSingleProduct = async (identifier: string) => {
  if (mongoose.isValidObjectId(identifier)) {
    return await Product.findById(identifier).populate("categories");
  }
  return await Product.findOne({ slug: identifier, isActive: true }).populate("categories");
};

// Update a product
const updateProduct = async (id: string, payload: Partial<TProduct>) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not found");
  }

  // Validate category references if provided
  if (payload.categories) {
    for (const catId of payload.categories) {
      const categoryExists = await Category.findById(catId);
      if (!categoryExists) {
        throw new Error(`Category with ID ${catId} not found`);
      }
    }
  }

  // Manage slug generation on name update
  if (payload.name && !payload.slug) {
    const generatedSlug = payload.name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const existingSlugProduct = await Product.findOne({ slug: generatedSlug, _id: { $ne: id } });
    if (existingSlugProduct) {
      payload.slug = `${generatedSlug}-${Date.now()}`;
    } else {
      payload.slug = generatedSlug;
    }
  }

  // Manage SKU uniqueness on SKU update
  if (payload.sku) {
    const existingSkuProduct = await Product.findOne({ sku: payload.sku, _id: { $ne: id } });
    if (existingSkuProduct) {
      throw new Error(`Product with SKU "${payload.sku}" already exists`);
    }
  }

  // Manage inStock / onSale calculations
  if (payload.price !== undefined || payload.salePrice !== undefined) {
    const currentPrice = payload.price !== undefined ? payload.price : product.price;
    const currentSalePrice = payload.salePrice !== undefined ? payload.salePrice : product.salePrice;

    if (currentSalePrice !== undefined && currentSalePrice < currentPrice) {
      payload.onSale = true;
    } else {
      payload.onSale = false;
    }
  }

  if (payload.stockQuantity !== undefined) {
    payload.inStock = payload.stockQuantity > 0;
  }

  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

// Delete a product
const deleteProduct = async (id: string) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error("Product not found");
  }
  const result = await Product.findByIdAndDelete(id);
  return result;
};

// Add product review and recalculate ratings
const addReview = async (productId: string, reviewPayload: TReview) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }

  if (!product.reviews) {
    product.reviews = [];
  }
  product.reviews.push(reviewPayload);

  const totalReviews = product.reviews.length;
  const totalRatingSum = product.reviews.reduce((acc, curr) => acc + curr.rating, 0);

  product.reviewsCount = totalReviews;
  product.ratings = Number((totalRatingSum / totalReviews).toFixed(1));

  const result = await product.save();
  return result;
};

// Aggregate counts for sidebar filters: prices, colors, sizes, categories, and stock status
const getProductFiltersMetadata = async () => {
  const activeProductsQuery = { isActive: true };

  // 1. Minimum and Maximum prices
  const priceRange = await Product.aggregate([
    { $match: activeProductsQuery },
    {
      $project: {
        effectivePrice: { $ifNull: ["$salePrice", "$price"] },
      },
    },
    {
      $group: {
        _id: null,
        minPrice: { $min: "$effectivePrice" },
        maxPrice: { $max: "$effectivePrice" },
      },
    },
  ]);

  const minPrice = priceRange[0]?.minPrice || 0;
  const maxPrice = priceRange[0]?.maxPrice || 0;

  // 2. Color counts
  const colorCounts = await Product.aggregate([
    { $match: activeProductsQuery },
    { $unwind: "$colors" },
    {
      $group: {
        _id: "$colors.name",
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        name: "$_id",
        count: 1,
        _id: 0,
      },
    },
    { $sort: { name: 1 } },
  ]);

  // 3. Size counts
  const sizeCounts = await Product.aggregate([
    { $match: activeProductsQuery },
    { $unwind: "$sizes" },
    {
      $group: {
        _id: "$sizes",
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        size: "$_id",
        count: 1,
        _id: 0,
      },
    },
    { $sort: { size: 1 } },
  ]);

  // 4. InStock and OnSale counts
  const statusCounts = await Product.aggregate([
    { $match: activeProductsQuery },
    {
      $group: {
        _id: null,
        inStockCount: { $sum: { $cond: ["$inStock", 1, 0] } },
        onSaleCount: { $sum: { $cond: ["$onSale", 1, 0] } },
      },
    },
  ]);

  const inStockCount = statusCounts[0]?.inStockCount || 0;
  const onSaleCount = statusCounts[0]?.onSaleCount || 0;

  return {
    priceRange: { min: minPrice, max: maxPrice },
    colors: colorCounts,
    sizes: sizeCounts,
    status: {
      inStock: inStockCount,
      onSale: onSaleCount,
    },
  };
};

export const ProductService = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  addReview,
  getProductFiltersMetadata,
};
