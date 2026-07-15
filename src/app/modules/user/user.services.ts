import bcrypt from "bcryptjs";
import httpStatus from "http-status-codes";
import jwt, { SignOptions } from "jsonwebtoken";
import { config } from "../../config/env";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserService = async (payload : Partial<TUser>) => {
  const result = await User.create(payload);
  return result;
}
const loginUserService = async (payload : Partial<TUser>) => {
  const { email, password } = payload;
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found with this email");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Incorrect password");
  }

  const jwtPayload = {
    _id: user._id.toString(),
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret, {
    expiresIn: config.jwt_access_expires_in as SignOptions['expiresIn'],
  });

  const refreshToken = jwt.sign(jwtPayload, config.jwt_refresh_secret, {
    expiresIn: config.jwt_refresh_expires_in as SignOptions['expiresIn'],
  });

  return {
    user,
    accessToken,
    refreshToken,
  };
}

const createStaffService = async (payload: Partial<TUser>) => {
  const isEmailExists = await User.findOne({ email: payload.email });
  if (isEmailExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "User with this email already exists");
  }

  // Force isVerified to be true since it's created by super-admin
  payload.isVerified = true;

  const result = await User.create(payload);
  return result;
};

const updateUserRoleService = async (payload: { userId: string; role: TUser["role"] }) => {
  const { userId, role } = payload;

  const user = await User.findById(userId);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  user.role = role;
  await user.save();

  return user;
};

export const userService = {
  createUserService,
  loginUserService,
  createStaffService,
  updateUserRoleService,
};