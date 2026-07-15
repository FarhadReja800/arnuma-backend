"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const mongoose_1 = require("mongoose");
const user_interface_1 = require("./user.interface");
const authProviderSchema = new mongoose_1.Schema({
    provider: { type: String, required: true },
    providerId: { type: String, required: true },
}, { _id: false });
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    role: {
        type: String,
        enum: Object.values(user_interface_1.TUserRoles),
        default: user_interface_1.TUserRoles.USER,
    },
    bio: { type: String },
    isActive: {
        type: String,
        enum: Object.values(user_interface_1.TIsActiveStatus),
        default: user_interface_1.TIsActiveStatus.ACTIVE,
    },
    isVerified: { type: Boolean, default: false },
    refreshToken: { type: String },
    verificationToken: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    auth: [authProviderSchema],
    bookings: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Booking" }],
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {
        transform(doc, ret) {
            delete ret.password;
            return ret;
        },
    },
});
userSchema.pre("save", async function () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcryptjs_1.default.hash(user.password, 12);
    }
});
exports.User = (0, mongoose_1.model)("User", userSchema);
//# sourceMappingURL=user.model.js.map