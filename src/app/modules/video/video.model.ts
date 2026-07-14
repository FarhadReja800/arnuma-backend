import { Schema, model } from "mongoose";
import { THomeVideo } from "./video.interface";

const VideoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    _id: true,
  }
);

const HomeVideoSchema = new Schema<THomeVideo>(
  {
    videos: {
      type: [VideoSchema],
      validate: {
        validator: (value: any[]) => value.length <= 5,
        message: "Maximum 5 videos are allowed.",
      },
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const HomeVideo = model<THomeVideo>(
  "HomeVideo",
  HomeVideoSchema
);