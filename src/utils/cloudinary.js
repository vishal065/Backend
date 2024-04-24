import { v2 as cloudinary } from "cloudinary";
import { fs } from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file uplaoded succesfully
    console.log("file uploaded on cloudinary and url is ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the loacally save temporary file as the upload process is failed
    return null;
  }
};

export { uploadOnCloudinary };
