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

router.post("/post", PostJob);
router.delete("/post/:id", DeletePost);
router.get("/post", GetPost);
router.put("/update/:id", UpdateJob);
router.get("/edit/:id", EditPost);
router.get("/remote", remotePost);
router.get("/onsite", OnsitePost);
router.get("/job/:id", GetSinglePost);

export default router;
