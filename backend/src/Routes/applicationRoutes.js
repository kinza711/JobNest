import express from "express";
const router = express.Router();

import {
  GetApplications,
  ApplyJob,
  Rejected,
  Shortlisted,
  GetSingleApplications,
  UpdateStatus,
  deleteApp,
} from "../Controllers/applicationController.js";
import verifyToken from "../Middlewares/varifyToken.js";
import authorizeRoles from "../Middlewares/varifyRole.js";

router.post(
  "/submit",
  verifyToken,
  authorizeRoles("Admin", "HR", "JobSeeker"),
  ApplyJob,
);
router.get(
  "/submit",
  verifyToken,
  authorizeRoles("Admin", "HR", "JobSeeker"),
  GetApplications,
);
router.get(
  "/rejected",
  authorizeRoles("Admin", "HR", "JobSeeker"),
  verifyToken,
  Rejected,
);
router.get(
  "/short",
  verifyToken,
  authorizeRoles("Admin", "HR", "JobSeeker"),
  Shortlisted,
);
router.get(
  "/submit/:id",
  verifyToken,
  authorizeRoles("Admin", "HR", "JobSeeker"),
  GetSingleApplications,
);
router.put(
  "/status/:id",
  verifyToken,
  authorizeRoles("Admin", "HR"),
  UpdateStatus,
);
router.delete(
  "/app/:id",
  verifyToken,
  authorizeRoles("Admin", "HR"),
  deleteApp,
);
export default router;
