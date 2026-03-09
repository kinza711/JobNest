import express from "express";
const router = express.Router();

import { getProfile, updateProfile } from "../Controllers/profileController.js";
import verifyToken from "../Middlewares/varifyToken.js";
import authorizeRoles from "../Middlewares/varifyRole.js";

router.put(
  "/profile/:id",
  verifyToken,
  authorizeRoles("Admin", "HR", "JobSeeker"),
  updateProfile,
);
router.get(
  "/profile",
  verifyToken,
  authorizeRoles("Admin", "HR", "JobSeeker"),
  getProfile,
);

export default router;
