import bcrypt from "bcryptjs";
import jwt, { SignOptions } from "jsonwebtoken";
import { config } from "../../config/env.js";
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

export const userService = {
  createUserService,
  loginUserService,
};