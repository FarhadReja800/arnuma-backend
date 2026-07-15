"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedSuperAdmin = void 0;
const env_1 = require("../config/env");
const user_interface_1 = require("../modules/user/user.interface");
const user_model_1 = require("../modules/user/user.model");
const seedSuperAdmin = async () => {
    try {
        // Check if a super admin already exists in the database
        const isSuperAdminExists = await user_model_1.User.findOne({
            role: user_interface_1.TUserRoles.SUPER_ADMIN,
        });
        if (!isSuperAdminExists) {
            const superAdminData = {
                name: env_1.config.super_admin_name,
                email: env_1.config.super_admin_email,
                password: env_1.config.super_admin_password,
                phoneNumber: env_1.config.super_admin_phone,
                role: user_interface_1.TUserRoles.SUPER_ADMIN,
                isActive: user_interface_1.TIsActiveStatus.ACTIVE,
                isVerified: true,
            };
            await user_model_1.User.create(superAdminData);
            console.log("Super Admin seeded successfully!");
        }
        else {
            console.log("Super Admin already exists. Seeding skipped.");
        }
    }
    catch (error) {
        console.error("Error seeding Super Admin:", error);
    }
};
exports.seedSuperAdmin = seedSuperAdmin;
//# sourceMappingURL=seedSuperAdmin.js.map