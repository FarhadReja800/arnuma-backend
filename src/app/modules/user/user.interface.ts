import type { Types } from "mongoose";

export enum TUserRoles {
  USER = "user",
  ADMIN = "admin",
  SUPER_ADMIN = "super-admin",
  MODERATOR = "moderator",
  MANAGER = "manager"
}

export enum TIsActiveStatus {
ACTIVE = "isActive",
INACTIVE = "isInactive",
BLOCKED = "isBlocked",
PENDING = "isPending",
DELETED = "isDeleted"
}

export interface TAuthMethods {
  provider: string;
  providerId: string;
}



export interface TUser {
  id: string;
  name: string;
  email: string;
  password: string;
  profilePicture?: string;
  address?: string;
  phoneNumber?: string;
  role: TUserRoles;
  bio?: string
  isActive: TIsActiveStatus;
  isVerified: boolean;
  bookings?: Types.ObjectId[];
  orders?: string[];
  services?: string[];
  ratings?: string[];
  reviews?: string[];
  wishlist?: string[];
  refreshToken?: string;
  payments?: string[];
  verificationToken?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  auth: TAuthMethods[];
  createdAt: Date;
  updatedAt: Date;
}