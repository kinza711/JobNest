import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../services/cloudinary.js";
import { application } from "express";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = "Job_folder";

    // if file is imag
    if (file.mimetype.startsWith("image")) {
      folder = "Job_folder/images";
      return { folder, resource_type: "image" };
    }

    // if file is doc or pdf
    if (file.mimetype === "application/pdf") {
      folder = "Job_folder/CVs";
      // return {
      //   folder,
      //   resource_type: "image", // Cloudinary can serve PDFs as images/inline
      //   format: "pdf",
      //   flags: "attachment:false", // serves inline, not as download
      // };
      return { folder, resource_type: "auto", format: "pdf" }; // ⚡ raw here
    }
    return {
      folder: folder,
      resource_type: "auto",
      allowed_formats: ["jpg", "png", "jpeg", "pdf", "doc", "docx"],
    };
  },
});

const upload = multer({ storage });

export default upload;
