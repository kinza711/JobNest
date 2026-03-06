import express from "express";
const router = express.Router();

import {
  GetApplications,
  ApplyJob,
  Rejected,
  Shortlisted,
  GetSingleApplications,
} from "../Controllers/applicationController.js";

router.post("/submit", ApplyJob);
router.get("/submit", GetApplications);
router.get("/rejected", Rejected);
router.get("/short", Shortlisted);
router.get("/submit/:id", GetSingleApplications);
export default router;
