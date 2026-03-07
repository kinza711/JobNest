import express from "express";
const router = express.Router();

import { getProfile, updateProfile } from "../Controllers/profileController.js";

router.put("/profile/:id", updateProfile);
router.get("/profile", getProfile);

export default router;
