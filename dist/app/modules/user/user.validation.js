"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserRoleValidationSchema = exports.createStaffValidationSchema = exports.createUserValidationSchema = exports.authMethodValidationSchema = void 0;
const z = __importStar(require("zod"));
const user_interface_1 = require("./user.interface");
exports.authMethodValidationSchema = z.object({
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
exports.createUserValidationSchema = z.object({
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
        role: z.nativeEnum(user_interface_1.TUserRoles, {
            required_error: "Role is required",
        }),
        bio: z.string().optional(),
        isActive: z.nativeEnum(user_interface_1.TIsActiveStatus).default(user_interface_1.TIsActiveStatus.ACTIVE),
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
            .array(exports.authMethodValidationSchema)
            .min(1, "At least one authentication method is required"),
    }),
});
exports.createStaffValidationSchema = z.object({
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
        role: z.enum([user_interface_1.TUserRoles.ADMIN, user_interface_1.TUserRoles.SUPER_ADMIN, user_interface_1.TUserRoles.MODERATOR, user_interface_1.TUserRoles.MANAGER], {
            required_error: "Role is required and must be admin, super-admin, manager, or moderator",
        }),
        profilePicture: z.string().optional(),
        address: z.string().optional(),
        phoneNumber: z.string().optional(),
    }),
});
exports.updateUserRoleValidationSchema = z.object({
    body: z.object({
        userId: z
            .string({
            required_error: "User ID is required",
        })
            .min(1, "User ID is required"),
        role: z.nativeEnum(user_interface_1.TUserRoles, {
            required_error: "Role is required",
        }),
    }),
});
//# sourceMappingURL=user.validation.js.map