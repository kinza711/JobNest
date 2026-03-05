import express from "express";
const router = express.Router();

import {
  GetApplications,
  ApplyJob,
  Rejected,
  Shortlisted,
} from "../Controllers/applicationController.js";

router.post("/submit", ApplyJob);
router.get("/submit", GetApplications);
router.get("/rejected", Rejected);
router.get("/short", Shortlisted);

export default router;
