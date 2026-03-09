import express from "express";
const router = express.Router();

import {
  PostJob,
  DeletePost,
  GetPost,
  UpdateJob,
  EditPost,
  remotePost,
  OnsitePost,
  GetSinglePost,
} from "../Controllers/jobController.js";
import verifyToken from "../Middlewares/varifyToken.js";
import authorizeRoles from "../Middlewares/varifyRole.js";

router.post("/post", verifyToken, authorizeRoles("Admin", "HR"), PostJob);
router.delete(
  "/post/:id",
  verifyToken,
  authorizeRoles("Admin", "HR"),
  DeletePost,
);
router.get("/post", GetPost);
router.put(
  "/update/:id",
  verifyToken,
  authorizeRoles("Admin", "HR"),
  UpdateJob,
);
router.get("/edit/:id", verifyToken, authorizeRoles("Admin", "HR"), EditPost);
router.get("/remote", remotePost);
router.get("/onsite", OnsitePost);
router.get("/job/:id", GetSinglePost);

export default router;
