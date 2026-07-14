import { Schema, model } from "mongoose";
import { TNewCollection } from "./newCollection.interface";

const newCollectionSchema = new Schema<TNewCollection>(
  {
    title: { type: String, required: true, trim: true },
    heading: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    buttonText: { type: String, default: "SHOP NOW", trim: true },
    buttonLink: { type: String, trim: true },
    leftImage: { type: String, required: true, trim: true },
    leftImageText: { type: String, trim: true },
    rightImage: { type: String, required: true, trim: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const NewCollection = model<TNewCollection>("NewCollection", newCollectionSchema);
