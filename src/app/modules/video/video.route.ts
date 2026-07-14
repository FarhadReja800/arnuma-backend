import express from "express";
import { HomeVideoController } from "./video.controller";
import validateRequest from "../../middlewares/validateRequest";
import {
  createHomeVideoValidation,
  updateHomeVideoValidation,
} from "./video.validation";

const router = express.Router();

router.post(
  "/create-video",
  validateRequest(createHomeVideoValidation),
  HomeVideoController.createHomeVideo
);

router.get("/get-video", HomeVideoController.getHomeVideo);

router.patch(
  "/update-video/:id",
  validateRequest(updateHomeVideoValidation),
  HomeVideoController.updateHomeVideo
);

router.delete("/delete-video/:id", HomeVideoController.deleteHomeVideo);

export const HomeVideoRoutes = router;