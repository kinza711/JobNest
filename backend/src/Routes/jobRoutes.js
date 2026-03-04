import express from "express";
const router = express.Router();

import {
  PostJob,
  DeletePost,
  GetPost,
  UpdateJob,
} from "../Controllers/jobController.js";

router.post("/post", PostJob);
router.delete("/post/:id", DeletePost);
router.get("/post", GetPost);
router.put("/post/:id", UpdateJob);

export default router;
