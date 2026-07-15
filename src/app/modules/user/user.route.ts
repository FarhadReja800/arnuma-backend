import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { TUserRoles } from "./user.interface";
import { createStaffValidationSchema, updateUserRoleValidationSchema } from "./user.validation";

const router = Router();


router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);

router.post(
  "/create-staff",
  auth(TUserRoles.SUPER_ADMIN),
  validateRequest(createStaffValidationSchema),
  userController.createStaff
);

router.patch(
  "/change-role",
  auth(TUserRoles.SUPER_ADMIN),
  validateRequest(updateUserRoleValidationSchema),
  userController.updateUserRole
);

export const userRoutes = {
  router
};