"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCollectionRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const newCollection_controller_1 = require("./newCollection.controller");
const newCollection_validation_1 = require("./newCollection.validation");
const router = (0, express_1.Router)();
// Create Collection Section Content
router.post("/create-collection", (0, validateRequest_1.default)(newCollection_validation_1.NewCollectionValidation.createNewCollectionValidationSchema), newCollection_controller_1.NewCollectionController.createCollectionContent);
// Get All Collection Section Layouts (Supports query parameter ?activeOnly=true)
router.get("/get-collections", newCollection_controller_1.NewCollectionController.getCollectionContent);
// Get Single Collection Content
router.get("/:id", newCollection_controller_1.NewCollectionController.getSingleCollectionContent);
// Update Collection Section Content
router.patch("/update-collection/:id", (0, validateRequest_1.default)(newCollection_validation_1.NewCollectionValidation.updateNewCollectionValidationSchema), newCollection_controller_1.NewCollectionController.updateCollectionContent);
// Delete Collection Section Content
router.delete("/delete-collection/:id", newCollection_controller_1.NewCollectionController.deleteCollectionContent);
exports.NewCollectionRoutes = router;
//# sourceMappingURL=newCollection.route.js.map