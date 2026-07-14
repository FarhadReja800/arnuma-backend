import { Router } from "express";
import { BenefitController } from "./benefit.controller";

const router = Router();

// Create Benefit
router.post("/create-benefit", BenefitController.createBenefit);

// Get All Benefits
router.get("/get-benefit", BenefitController.getBenefits);
 
// Update Benefit
router.patch("/update-benefit/:id", BenefitController.updateBenefit);

// Delete Benefit
router.delete("/delete-benefit/:id", BenefitController.deleteBenefit);

export const BenefitRoutes = router;