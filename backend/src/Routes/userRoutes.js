import express from "express";
const router = express.Router();

import {
  AllUsers,
  JobSeeker,
  HRs,
  deleteUser,
  EditUsers,
  UpdateUsers,
} from "../Controllers/userController.js";

router.get("/users", AllUsers);
router.get("/hr", HRs);
router.get("/jobseeker", JobSeeker);
router.delete("/delete/:id", deleteUser);
router.get("/users/:id", EditUsers);
router.put("/userupdate/:id", UpdateUsers);
export default router;
