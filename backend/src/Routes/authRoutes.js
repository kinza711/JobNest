import express from "express";
const router = express.Router();

import { Register, Logout, Login } from "../Controllers/authController.js";

router.post("/register", Register);
router.post("/logout", Logout);
router.post("/login", Login);

export default router;
