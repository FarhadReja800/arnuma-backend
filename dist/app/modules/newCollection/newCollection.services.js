"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCollectionService = void 0;
const newCollection_model_1 = require("./newCollection.model");
const createCollectionContent = async (payload) => {
    const result = await newCollection_model_1.NewCollection.create(payload);
    return result;
};
const getCollectionContent = async (query) => {
    const { activeOnly } = query;
    const filterQuery = {};
    if (activeOnly === "true") {
        filterQuery.isActive = true;
    }
    // Fetch from newest to oldest
    const result = await newCollection_model_1.NewCollection.find(filterQuery).sort({ createdAt: -1 });
    return result;
};
const getSingleCollectionContent = async (id) => {
    const result = await newCollection_model_1.NewCollection.findById(id);
    return result;
};
const updateCollectionContent = async (id, payload) => {
    const result = await newCollection_model_1.NewCollection.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
};
const deleteCollectionContent = async (id) => {
    const result = await newCollection_model_1.NewCollection.findByIdAndDelete(id);
    return result;
};
exports.NewCollectionService = {
    createCollectionContent,
    getCollectionContent,
    getSingleCollectionContent,
    updateCollectionContent,
    deleteCollectionContent,
};
//# sourceMappingURL=newCollection.services.js.map