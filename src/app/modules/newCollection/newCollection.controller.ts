import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { NewCollectionService } from "./newCollection.services";

const createCollectionContent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await NewCollectionService.createCollectionContent(req.body);

    res.status(httpStatus.CREATED).json({
      success: true,
      message: "New Collection content created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCollectionContent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await NewCollectionService.getCollectionContent(req.query);

    res.status(httpStatus.OK).json({
      success: true,
      message: "New Collection contents retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleCollectionContent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await NewCollectionService.getSingleCollectionContent(id as string);

    if (!result) {
      res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "New Collection content not found",
      });
      return;
    }

    res.status(httpStatus.OK).json({
      success: true,
      message: "New Collection content retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateCollectionContent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await NewCollectionService.updateCollectionContent(id as string, req.body);

    res.status(httpStatus.OK).json({
      success: true,
      message: "New Collection content updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCollectionContent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await NewCollectionService.deleteCollectionContent(id as string);

    res.status(httpStatus.OK).json({
      success: true,
      message: "New Collection content deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const NewCollectionController = {
  createCollectionContent,
  getCollectionContent,
  getSingleCollectionContent,
  updateCollectionContent,
  deleteCollectionContent,
};
