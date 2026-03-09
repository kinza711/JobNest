import express from "express";
const router = express.Router();

import { Register, Logout, Login } from "../Controllers/authController.js";
import upload from "../Middlewares/upload.js";

router.post("/register", upload.single("file"), Register);
router.post("/logout", Logout);
router.post("/login", Login);

export default router;
