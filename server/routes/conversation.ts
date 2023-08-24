import express from "express";
import catchAsync from "../utils/catchAsync.ts";
const router = express.Router();

import {
    getConversations,
    addConversations,
    deleteConversations
} from "../controllers/conversations.ts";
import { verifyToken } from "../middleware.ts";

router
    .route("/")
    .get(verifyToken, catchAsync(getConversations))
    .post(verifyToken, catchAsync(addConversations))
    .delete(verifyToken, catchAsync(deleteConversations));

export default router;
