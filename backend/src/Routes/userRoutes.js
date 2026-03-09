import express from "express";
const router = express.Router();

import {
  AllUsers,
  JobSeeker,
  HRs,
  deleteUser,
  EditUsers,
  UpdateUsers,
  findSingleUsers,
} from "../Controllers/userController.js";
import varifyToken from "../Middlewares/varifyToken.js";
import authorizeRoles from "../Middlewares/varifyRole.js";

router.get("/users", varifyToken, authorizeRoles("Admin", "HR"), AllUsers);
router.get("/hr", varifyToken, authorizeRoles("Admin"), HRs);
router.get("/jobseeker", varifyToken, authorizeRoles("Admin", "HR"), JobSeeker);
router.delete(
  "/delete/:id",
  varifyToken,
  authorizeRoles("Admin", "HR"),
  deleteUser,
);
router.get("/users/:id", varifyToken, authorizeRoles("Admin", "HR"), EditUsers);
router.put(
  "/userupdate/:id",
  varifyToken,
  authorizeRoles("Admin", "HR"),
  UpdateUsers,
);
router.get(
  "/findusers/:id",
  varifyToken,
  authorizeRoles("Admin", "HR"),
  findSingleUsers,
);

export default router;
