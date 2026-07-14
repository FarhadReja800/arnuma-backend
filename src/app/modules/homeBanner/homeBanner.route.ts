import { Router } from "express";
import { homeBannerController } from "./homeBanner.controller";

const router = Router();

// Create Banner
router.post("/create-banner", homeBannerController.createBanner);

// // Get All Banners
 router.get("/get-banner", homeBannerController.getBanner);
 
// // Get Single Banner
// router.get("/:id", homeBannerController.getSingleBanner);

// Update Banner
router.patch("/update-banner/:id", homeBannerController.updatedBanner);

// Delete Banner
router.delete("/delete-banner/:id", homeBannerController.deleteBanner);

export const HomeBannerRoutes = router;