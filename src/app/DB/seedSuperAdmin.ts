import { config } from "../config/env";
import { TIsActiveStatus, TUser, TUserRoles } from "../modules/user/user.interface";
import { User } from "../modules/user/user.model";

export const seedSuperAdmin = async (): Promise<void> => {
  try {
    // Check if a super admin already exists in the database
    const isSuperAdminExists = await User.findOne({
      role: TUserRoles.SUPER_ADMIN,
    });

    if (!isSuperAdminExists) {
      const superAdminData: Partial<TUser> = {
        name: config.super_admin_name,
        email: config.super_admin_email,
        password: config.super_admin_password,
        phoneNumber: config.super_admin_phone,
        role: TUserRoles.SUPER_ADMIN,
        isActive: TIsActiveStatus.ACTIVE,
        isVerified: true,
      };

      await User.create(superAdminData);
      console.log("Super Admin seeded successfully!");
    } else {
      console.log("Super Admin already exists. Seeding skipped.");
    }
  } catch (error) {
    console.error("Error seeding Super Admin:", error);
  }
};
