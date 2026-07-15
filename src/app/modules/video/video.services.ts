import { THomeVideo } from "./video.interface";
import { HomeVideo } from "./video.model";

const createHomeVideo = async (payload: THomeVideo) => {
  const exist = await HomeVideo.findOne();

  if (exist) {
    throw new Error("Home videos already exist.");
  }

  return await HomeVideo.create(payload);
};

const getHomeVideo = async () => {
  return await HomeVideo.findOne();
};

const updateHomeVideo = async (
  id: string,
  payload: Partial<THomeVideo>
) => {
  return await HomeVideo.findByIdAndUpdate(id, payload, {
    returnDocument: "after",
    runValidators: true,
  });
};

const deleteHomeVideo = async (id: string) => {
  return await HomeVideo.findByIdAndDelete(id);
};

export const HomeVideoService = {
  createHomeVideo,
  getHomeVideo,
  updateHomeVideo,
  deleteHomeVideo,
};