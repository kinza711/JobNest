import express from "express";
const router = express.Router();

import {
  GetApplications,
  ApplyJob,
} from "../Controllers/applicationController.js";

router.post("/submit", ApplyJob);
router.get("/submit", GetApplications);

export default router;
