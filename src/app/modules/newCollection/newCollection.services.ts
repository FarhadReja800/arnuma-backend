import { TNewCollection } from "./newCollection.interface";
import { NewCollection } from "./newCollection.model";

const createCollectionContent = async (payload: TNewCollection) => {
  const result = await NewCollection.create(payload);
  return result;
};

const getCollectionContent = async (query: Record<string, any>) => {
  const { activeOnly } = query;
  const filterQuery: Record<string, any> = {};

  if (activeOnly === "true") {
    filterQuery.isActive = true;
  }

  // Fetch from newest to oldest
  const result = await NewCollection.find(filterQuery).sort({ createdAt: -1 });
  return result;
};

const getSingleCollectionContent = async (id: string) => {
  const result = await NewCollection.findById(id);
  return result;
};

const updateCollectionContent = async (id: string, payload: Partial<TNewCollection>) => {
  const result = await NewCollection.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteCollectionContent = async (id: string) => {
  const result = await NewCollection.findByIdAndDelete(id);
  return result;
};

export const NewCollectionService = {
  createCollectionContent,
  getCollectionContent,
  getSingleCollectionContent,
  updateCollectionContent,
  deleteCollectionContent,
};
