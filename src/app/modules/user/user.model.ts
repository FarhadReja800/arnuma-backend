import bcrypt from "bcryptjs";
import { model, Schema } from "mongoose";
import { TIsActiveStatus, TUser, TUserRoles } from "./user.interface";


const authProviderSchema = new Schema({
    provider: { type: String, required: true },
    providerId: { type: String, required: true },
}, { _id: false });

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    role: {
      type: String,
      enum: Object.values(TUserRoles),
      default: TUserRoles.USER,
    },
    bio: { type: String },
    isActive: {
      type: String,
      enum: Object.values(TIsActiveStatus),
      default: TIsActiveStatus.ACTIVE,
    },
    isVerified: { type: Boolean, default: false },
    refreshToken: { type: String },
    verificationToken: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    auth: [authProviderSchema],
    bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform(doc, ret) {
        delete (ret as Partial<TUser>).password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function () {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 12);
  }
});

export const User = model<TUser>("User", userSchema);


 