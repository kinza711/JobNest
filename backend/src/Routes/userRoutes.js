import express from "express";
const router = express.Router();

import { AllUsers, JobSeeker, HRs } from "../Controllers/userController.js";

router.get("/users", AllUsers);
router.get("/hr", HRs);
router.get("/jobseeker", JobSeeker);

export default router;
