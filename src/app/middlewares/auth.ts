import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import jwt, { JwtPayload } from "jsonwebtoken";
import AppError from "../errors/AppError";
import { TIsActiveStatus, TUserRoles } from "../modules/user/user.interface";

import { config } from "../config/env";
import catchAsync from "../utils/catchAsync";
import { User } from "../modules/user/user.model";

const auth = (...requiredRoles: TUserRoles[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // check if token is missing
    if (!token || !token.startsWith("Bearer ")) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    const tokenString = token.split(" ")[1];

    // verify token
    let decoded: JwtPayload;
    try {
      decoded = jwt.verify(tokenString, config.jwt_access_secret) as JwtPayload;
    } catch {
      throw new AppError(httpStatus.UNAUTHORIZED, "Invalid token!");
    }

    const { _id, role } = decoded;

    // check if user exists
    const user = await User.findById(_id);
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "User not found!");
    }

    // check if user is active
    if (user.isActive !== TIsActiveStatus.ACTIVE) {
      throw new AppError(httpStatus.FORBIDDEN, "Your account is not active!");
    }

    // check if role matches
    if (requiredRoles.length > 0 && !requiredRoles.includes(role as TUserRoles)) {
      throw new AppError(httpStatus.FORBIDDEN, "You do not have permission to access this resource!");
    }

    req.user = decoded as JwtPayload & { _id: string; email: string; role: string };
    next();
  });
};

export default auth;
