"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeVideoRoutes = void 0;
const express_1 = __importDefault(require("express"));
const video_controller_1 = require("./video.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const upload_1 = require("../../middlewares/upload");
const video_validation_1 = require("./video.validation");
const router = express_1.default.Router();
router.post("/upload-video", upload_1.upload.any(), video_controller_1.HomeVideoController.uploadVideo);
router.post("/create-video", (0, validateRequest_1.default)(video_validation_1.createHomeVideoValidation), video_controller_1.HomeVideoController.createHomeVideo);
router.get("/get-video", video_controller_1.HomeVideoController.getHomeVideo);
router.patch("/update-video/:id", (0, validateRequest_1.default)(video_validation_1.updateHomeVideoValidation), video_controller_1.HomeVideoController.updateHomeVideo);
router.delete("/delete-video/:id", video_controller_1.HomeVideoController.deleteHomeVideo);
exports.HomeVideoRoutes = router;
//# sourceMappingURL=video.route.js.map