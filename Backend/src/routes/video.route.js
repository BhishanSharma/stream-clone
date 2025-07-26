import { Router } from "express";
import {
  uploadVideo,
  getStreamingUrl,
  getVideos,
  removeVideo,
  changeTitleOrDescription,
  getAllVideos,
} from "../controllers/video.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/upload").post(
  verifyJWT,
  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },
    {
      name: "video",
      maxCount: 1,
    },
  ]),
  uploadVideo
);

router.route("/:videoId/delete").delete(verifyJWT, removeVideo);

router.route("/:videoId/update").patch(verifyJWT, changeTitleOrDescription);

router.route("/:videoId/stream").get(verifyJWT, getStreamingUrl);

router.route("/channel/:channelId/videos").get(getVideos);

router.route("/getAll").get(getAllVideos);

export default router;
