import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import { config } from '../config/env';

// Configure Cloudinary credentials
cloudinary.config({
  cloud_name: config.cloudinary_cloud_name,
  api_key: config.cloudinary_api_key,
  api_secret: config.cloudinary_api_secret,
});

// Set up Multer Storage Engine for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req: any, file: any) => {
    const isVideo = file.mimetype.startsWith('video/');
    return {
      folder: 'arzuma-uploads',
      resource_type: isVideo ? 'video' : 'image',
      allowed_formats: isVideo 
        ? ['mp4', 'webm', 'mov', 'avi', 'mkv', 'ogg']
        : ['jpg', 'png', 'jpeg', 'webp'],
    };
  },
});

// Export the multer upload middleware
export const upload = multer({ storage: storage });
