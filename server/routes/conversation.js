import express from "express";
import catchAsync from "../utils/catchAsync.js";
const router = express.Router();

import {
    getConversations,
    addConversations
} from "../controllers/conversations.js";
import { verifyToken } from "../middleware.js";

router
    .route("/")
    .get(verifyToken, catchAsync(getConversations))
    .post(verifyToken, catchAsync(addConversations));

export default router;
