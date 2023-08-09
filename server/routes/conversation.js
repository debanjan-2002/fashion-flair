import express from "express";
import catchAsync from "../utils/catchAsync.js";
const router = express.Router();

import { getConversations } from "../controllers/conversations.js";
import { verifyToken } from "../middleware.js";

router.route("/").get(verifyToken, catchAsync(getConversations));

export default router;
