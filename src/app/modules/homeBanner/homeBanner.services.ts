import { THomeBanner } from "./homeBanner.interface";
import { HomeBanner } from "./homeBanner.model";

const createBannerService = async (payload: THomeBanner | THomeBanner[]) => {
  if (Array.isArray(payload)) {
    const result = await HomeBanner.create(payload);
    return result;
  }
  const result = await HomeBanner.create(payload);
  return result;
};
const getBannerService = async () => {
  const result = await HomeBanner.find();
  return result;
};
const getBannerCountService = async () => {
  const result = await HomeBanner.countDocuments();
  return result;
};
const updateBannerService = async (id: string, payload: Partial<THomeBanner>) => {
  const result = await HomeBanner.findByIdAndUpdate(id, payload, {
    returnDocument: "after",
    runValidators: true,
  });
  return result;
};

export const homeBannerService = {
  createBannerService,
  getBannerService,
  getBannerCountService,
  updateBannerService,
};