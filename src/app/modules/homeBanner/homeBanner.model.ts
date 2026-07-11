import { model, Schema } from "mongoose";
import { THomeBanner } from "./homeBanner.interface";



const schema = new Schema<THomeBanner>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    linkUrl: { type: String },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const HomeBanner = model<THomeBanner>("HomeBanner", schema);
