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

router.post("/submit", ApplyJob);
router.get("/submit", GetApplications);
router.get("/rejected", Rejected);
router.get("/short", Shortlisted);
router.get("/submit/:id", GetSingleApplications);
router.put("/status/:id", UpdateStatus);
router.delete("/app/:id", deleteApp);
export default router;
