import { TBenefit } from "./benefit.interface";
import { Benefit } from "./benefit.model";

const createBenefit = async (payload: TBenefit) => {
  return await Benefit.create(payload);
};

const getBenefits = async () => {
  return await Benefit.find().sort({ order: 1 });
};

const getSingleBenefit = async (id: string) => {
  return await Benefit.findById(id);
};

const updateBenefit = async (
  id: string,
  payload: Partial<TBenefit>
) => {
  return await Benefit.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const deleteBenefit = async (id: string) => {
  return await Benefit.findByIdAndDelete(id);
};

export const BenefitService = {
  createBenefit,
  getBenefits,
  getSingleBenefit,
  updateBenefit,
  deleteBenefit,
};