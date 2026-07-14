import { Schema, model } from "mongoose";
import { TProduct, TColor, TReview, TAdditionalInformation } from "./product.interface";

const colorSchema = new Schema<TColor>(
  {
    name: { type: String, required: true, trim: true },
    value: { type: String, trim: true },
  },
  { _id: false }
);

const additionalInformationSchema = new Schema<TAdditionalInformation>(
  {
    weight: { type: String, trim: true },
    dimensions: { type: String, trim: true },
  },
  { _id: false }
);

const reviewSchema = new Schema<TReview>(
  {
    reviewerName: { type: String, required: true, trim: true },
    reviewerEmail: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, trim: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, index: true },
    sku: { type: String, required: true, unique: true, index: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    salePrice: { type: Number, min: 0 },
    onSale: { type: Boolean, default: false },
    description: { type: String, required: true, trim: true },
    shortDescription: { type: String, trim: true },
    images: [{ type: String, required: true }],
    categories: [{ type: Schema.Types.ObjectId, ref: "Category", required: true }],
    tags: [{ type: String, trim: true }],
    colors: [colorSchema],
    sizes: [{ type: String, trim: true }],
    stockQuantity: { type: Number, required: true, default: 0, min: 0 },
    inStock: { type: Boolean, default: true },
    ratings: { type: Number, default: 0, min: 0, max: 5 },
    reviewsCount: { type: Number, default: 0, min: 0 },
    reviews: [reviewSchema],
    additionalInformation: additionalInformationSchema,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Pre-save hook to generate slug, onSale, and inStock status
productSchema.pre("save", async function () {
  if (this.isModified("name") || !this.slug) {
    this.slug = this.name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  // Update onSale status
  if (this.salePrice !== undefined && this.salePrice < this.price) {
    this.onSale = true;
  } else {
    this.onSale = false;
  }

  // Update inStock status
  if (this.stockQuantity > 0) {
    this.inStock = true;
  } else {
    this.inStock = false;
  }
});

export const Product = model<TProduct>("Product", productSchema);
