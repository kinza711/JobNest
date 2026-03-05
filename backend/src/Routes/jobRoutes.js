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
} from "../Controllers/jobController.js";

router.post("/post", PostJob);
router.delete("/post/:id", DeletePost);
router.get("/post", GetPost);
router.put("/post/:id", UpdateJob);
router.get("/post/:id", EditPost);
router.get("/remote", remotePost);
router.get("/onsite", OnsitePost);

export default router;
