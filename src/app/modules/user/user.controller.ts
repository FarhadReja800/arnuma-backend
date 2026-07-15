import type { NextFunction, Request, Response } from "express";


import httpStatus from "http-status-codes";
import { userService } from './user.services';



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
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {

    // throw new Error("This is a test error for demonstration purposes.");
    const { user, accessToken, refreshToken } = await userService.loginUserService(req.body);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    res.status(httpStatus.OK).json({
      success: true,
      message: "User logged in successfully",
      data: {
        user,
        accessToken
      }
    });
  } catch (error: any) {
    next(error);
    
  }
};

export const createStaff = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.createStaffService(req.body);

    res.status(httpStatus.CREATED).json({
      success: true,
      message: "Staff member created successfully",
      data: user,
    });
  } catch (error: any) {
    next(error);
  }
};

export const updateUserRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.updateUserRoleService(req.body);

    res.status(httpStatus.OK).json({
      success: true,
      message: "User role updated successfully",
      data: user,
    });
  } catch (error: any) {
    next(error);
  }
};

export const userController = {
  createUser,
  loginUser,
  createStaff,
  updateUserRole,
};


