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
import varifyToken from "../Middlewares/varifyToken.js";

router.post("/submit", varifyToken, ApplyJob);
router.get("/submit", varifyToken, GetApplications);
router.get("/rejected", varifyToken, Rejected);
router.get("/short", varifyToken, Shortlisted);
router.get("/submit/:id", varifyToken, GetSingleApplications);
router.put("/status/:id", varifyToken, UpdateStatus);
router.delete("/app/:id", varifyToken, deleteApp);
export default router;
