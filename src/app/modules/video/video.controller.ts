import { Request, Response } from "express";
import { HomeVideoService } from "./video.services";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createHomeVideo = catchAsync(async (req: Request, res: Response) => {
  const result = await HomeVideoService.createHomeVideo(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Videos uploaded successfully",
    data: result,
  });
});

const getHomeVideo = catchAsync(async (req: Request, res: Response) => {
  const result = await HomeVideoService.getHomeVideo();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Videos retrieved successfully",
    data: result,
  });
});

const updateHomeVideo = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await HomeVideoService.updateHomeVideo(
    id as string,
    req.body
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Videos updated successfully",
    data: result,
  });
});

const deleteHomeVideo = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await HomeVideoService.deleteHomeVideo(id as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Videos deleted successfully",
    data: result,
  });
});

export const HomeVideoController = {
  createHomeVideo,
  getHomeVideo,
  updateHomeVideo,
  deleteHomeVideo,
};