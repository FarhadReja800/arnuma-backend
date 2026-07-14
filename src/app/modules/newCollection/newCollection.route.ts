import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { NewCollectionController } from "./newCollection.controller";
import { NewCollectionValidation } from "./newCollection.validation";

const router = Router();

// Create Collection Section Content
router.post(
  "/create-collection",
  validateRequest(NewCollectionValidation.createNewCollectionValidationSchema),
  NewCollectionController.createCollectionContent
);

// Get All Collection Section Layouts (Supports query parameter ?activeOnly=true)
router.get("/get-collections", NewCollectionController.getCollectionContent);

// Get Single Collection Content
router.get("/:id", NewCollectionController.getSingleCollectionContent);

// Update Collection Section Content
router.patch(
  "/update-collection/:id",
  validateRequest(NewCollectionValidation.updateNewCollectionValidationSchema),
  NewCollectionController.updateCollectionContent
);

// Delete Collection Section Content
router.delete("/delete-collection/:id", NewCollectionController.deleteCollectionContent);

export const NewCollectionRoutes = router;
