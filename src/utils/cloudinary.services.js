import {v2 as cloudinary} from 'cloudinary';

import fs from 'fs'
import { fileURLToPath } from 'url';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY , 
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET_KEY
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!fileURLToPath) return null
        //* upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        //* file has been uploaded succesfully
        console.log('file is upload on cloudinary', response.url);
        return response
        } catch (error) {
        fs.unlinkSync(localFilePath) //* remove the locally saved temporary file as the upload operation got failed
        return null
    } 
}

export {uploadOnCloudinary}