import * as z from "zod";
import { TIsActiveStatus, TUserRoles } from "./user.interface";


export const authMethodValidationSchema = z.object({
  provider: z
    .string({
      required_error: "Provider is required",
    })
    .min(1, "Provider is required"),

  providerId: z
    .string({
      required_error: "Provider ID is required",
    })
    .min(1, "Provider ID is required"),
});

export const createUserValidationSchema = z.object({
  body: z.object({
    id: z
      .string({
        required_error: "ID is required",
      })
      .min(1),

    name: z
      .string({
        required_error: "Name is required",
      })
      .min(2, "Name must be at least 2 characters"),

    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Invalid email address"),

    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, "Password must be at least 6 characters"),

    profilePicture: z.string().url().optional(),

    address: z.string().optional(),

    phoneNumber: z.string().optional(),

    role: z.nativeEnum(TUserRoles, {
      required_error: "Role is required",
    }),

    bio: z.string().optional(),

    isActive: z.nativeEnum(TIsActiveStatus).default(
      TIsActiveStatus.ACTIVE
    ),

    isVerified: z.boolean().default(false),

    bookings: z.array(z.string()).optional(),

    orders: z.array(z.string()).optional(),

    services: z.array(z.string()).optional(),

    ratings: z.array(z.string()).optional(),

    reviews: z.array(z.string()).optional(),

    wishlist: z.array(z.string()).optional(),

    refreshToken: z.string().optional(),

    payments: z.array(z.string()).optional(),

    verificationToken: z.string().optional(),

    resetPasswordToken: z.string().optional(),

    resetPasswordExpires: z.coerce.date().optional(),

    auth: z
      .array(authMethodValidationSchema)
      .min(1, "At least one authentication method is required"),
  }),
});

export const createStaffValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(2, "Name must be at least 2 characters"),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Invalid email address"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, "Password must be at least 6 characters"),
    role: z.enum([TUserRoles.ADMIN, TUserRoles.SUPER_ADMIN, TUserRoles.MODERATOR, TUserRoles.MANAGER], {
      required_error: "Role is required and must be admin, super-admin, manager, or moderator",
    }),
    profilePicture: z.string().optional(),
    address: z.string().optional(),
    phoneNumber: z.string().optional(),
  }),
});

export const updateUserRoleValidationSchema = z.object({
  body: z.object({
    userId: z
      .string({
        required_error: "User ID is required",
      })
      .min(1, "User ID is required"),
    role: z.nativeEnum(TUserRoles, {
      required_error: "Role is required",
    }),
  }),
});