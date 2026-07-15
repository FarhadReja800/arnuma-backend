"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitRoutes = void 0;
const express_1 = require("express");
const benefit_controller_1 = require("./benefit.controller");
const router = (0, express_1.Router)();
// Create Benefit
router.post("/create-benefit", benefit_controller_1.BenefitController.createBenefit);
// Get All Benefits
router.get("/get-benefit", benefit_controller_1.BenefitController.getBenefits);
// Update Benefit
router.patch("/update-benefit/:id", benefit_controller_1.BenefitController.updateBenefit);
// Delete Benefit
router.delete("/delete-benefit/:id", benefit_controller_1.BenefitController.deleteBenefit);
exports.BenefitRoutes = router;
//# sourceMappingURL=benefit.route.js.map