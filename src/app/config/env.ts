
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
};

