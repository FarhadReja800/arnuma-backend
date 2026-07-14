import { NextFunction, Request, Response } from "express";
import { homeBannerService } from "./homeBanner.services";
import httpStatus from "http-status-codes";

export const createBanner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Limit per request
    if (Array.isArray(req.body) && req.body.length > 5) {
      return res.status(400).json({
        success: false,
        message: "You can create a maximum of 5 banners at a time.",
      });
    }

    // Limit overall count in the database to 5
    const existingCount = await homeBannerService.getBannerCountService();
    const incomingCount = Array.isArray(req.body) ? req.body.length : 1;

    if (existingCount + incomingCount > 5) {
      return res.status(400).json({
        success: false,
        message: `You can only have a maximum of 5 banners in total. Currently, you have ${existingCount} banners.`,
      });
    }

    const result = await homeBannerService.createBannerService(req.body);

    res.status(201).json({
      success: true,
      message: "Banner(s) created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const getBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await homeBannerService.getBannerService();

    res.status(httpStatus.OK).json({
      success: true,
      message: "Banners retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};
export const updatedBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await homeBannerService.updateBannerService(id as string, req.body);

    if (!result) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Banner not found",
      });
    }

    res.status(httpStatus.OK).json({
      success: true,
      message: "Banner updated successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};
export const deleteBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await homeBannerService.deleteBannerService(id as string);

    if (!result) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Banner not found",
      });
    }

    res.status(httpStatus.OK).json({
      success: true,
      message: "Banner deleted successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const homeBannerController = {
  createBanner,
  getBanner,
  updatedBanner,
  deleteBanner,
};


