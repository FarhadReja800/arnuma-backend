
import dotenv from 'dotenv';

dotenv.config();

export const config = {   
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  nodeEnv: process.env.NODE_ENV,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET || "access-secret",
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN || "7d",
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET || "refresh-secret",
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN || "30d",
  super_admin_name: process.env.SUPER_ADMIN_NAME || "Super Admin",
  super_admin_email: process.env.SUPER_ADMIN_EMAIL || "superadmin@gmail.com",
  super_admin_password: process.env.SUPER_ADMIN_PASSWORD || "superadmin123",
  super_admin_phone: process.env.SUPER_ADMIN_PHONE || "01700000000",
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
};

