import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { CategoryService } from "./category.services";

const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CategoryService.createCategory(req.body);

    res.status(httpStatus.CREATED).json({
      success: true,
      message: "Category created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CategoryService.getCategories(req.query);

    res.status(httpStatus.OK).json({
      success: true,
      message: "Categories retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await CategoryService.getSingleCategory(id as string);

    if (!result) {
      res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Category not found",
      });
      return;
    }

    res.status(httpStatus.OK).json({
      success: true,
      message: "Category retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await CategoryService.updateCategory(id as string, req.body);

    res.status(httpStatus.OK).json({
      success: true,
      message: "Category updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await CategoryService.deleteCategory(id as string);

    res.status(httpStatus.OK).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const CategoryController = {
  createCategory,
  getCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
