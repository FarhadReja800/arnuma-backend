import { Types } from "mongoose";

export interface TColor {
  name: string;
  value?: string; // hex color code (e.g. #000000)
}

export interface TReview {
  reviewerName: string;
  reviewerEmail: string;
  rating: number; // 1 to 5 stars
  comment?: string;
  createdAt?: Date;
}

export interface TAdditionalInformation {
  weight?: string;
  dimensions?: string;
}

export interface TProduct {
  name: string;
  slug: string;
  sku: string;
  price: number;
  salePrice?: number;
  onSale?: boolean;
  description: string;
  shortDescription?: string;
  images: string[];
  categories: Types.ObjectId[]; // reference to Category collection
  tags: string[];
  colors: TColor[];
  sizes: string[];
  stockQuantity: number;
  inStock?: boolean;
  ratings?: number; // average rating
  reviewsCount?: number;
  reviews?: TReview[];
  additionalInformation?: TAdditionalInformation;
  isActive?: boolean;
}
