import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { ProductService } from "./product.services";

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductService.createProduct(req.body);

    res.status(httpStatus.CREATED).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductService.getProducts(req.query);

    res.status(httpStatus.OK).json({
      success: true,
      message: "Products retrieved successfully",
      meta: result.meta,
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { idOrSlug } = req.params;
    const result = await ProductService.getSingleProduct(idOrSlug as string);

    if (!result) {
      res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Product not found",
      });
      return;
    }

    res.status(httpStatus.OK).json({
      success: true,
      message: "Product retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await ProductService.updateProduct(id as string, req.body);

    res.status(httpStatus.OK).json({
      success: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await ProductService.deleteProduct(id as string);

    res.status(httpStatus.OK).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

const addReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await ProductService.addReview(id as string, req.body);

    res.status(httpStatus.CREATED).json({
      success: true,
      message: "Review added successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getProductFiltersMetadata = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductService.getProductFiltersMetadata();

    res.status(httpStatus.OK).json({
      success: true,
      message: "Product filters metadata retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ProductController = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  addReview,
  getProductFiltersMetadata,
};
