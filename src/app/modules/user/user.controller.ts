import type { NextFunction, Request, Response } from "express";


import httpStatus from "http-status-codes";
import { userService } from "./user.services.js";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {

    // throw new Error("This is a test error for demonstration purposes.");
    const user = await userService.createUserService(req.body);

    res.status(httpStatus.CREATED).json({
      success: true,
      message: "User created successfully",
      user
    });
  } catch (error: any) {
    next(error);
    
  }
};

export const userController = {
  createUser
};

