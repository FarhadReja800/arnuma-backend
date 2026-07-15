"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBannerRoutes = void 0;
const express_1 = require("express");
const homeBanner_controller_1 = require("./homeBanner.controller");
const router = (0, express_1.Router)();
// Create Banner
router.post("/create-banner", homeBanner_controller_1.homeBannerController.createBanner);
// // Get All Banners
router.get("/get-banner", homeBanner_controller_1.homeBannerController.getBanner);
// // Get Single Banner
// router.get("/:id", homeBannerController.getSingleBanner);
// Update Banner
router.patch("/update-banner/:id", homeBanner_controller_1.homeBannerController.updatedBanner);
// Delete Banner
router.delete("/delete-banner/:id", homeBanner_controller_1.homeBannerController.deleteBanner);
exports.HomeBannerRoutes = router;
//# sourceMappingURL=homeBanner.route.js.map