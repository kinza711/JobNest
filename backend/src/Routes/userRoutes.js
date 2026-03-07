import express from "express";
const router = express.Router();

import {
  AllUsers,
  JobSeeker,
  HRs,
  deleteUser,
} from "../Controllers/userController.js";

router.get("/users", AllUsers);
router.get("/hr", HRs);
router.get("/jobseeker", JobSeeker);
router.delete("/delete/:id", deleteUser);
export default router;
