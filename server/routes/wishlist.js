import express from "express";
import catchAsync from "../utils/catchAsync.js";
const router = express.Router();

import {
    getWishList,
    addItemToWishList,
    deleteItemFromWishList
} from "../controllers/wishlists.js";
import { verifyToken } from "../middleware.js";

router
    .route("/")
    .get(verifyToken, catchAsync(getWishList))
    .post(verifyToken, catchAsync(addItemToWishList))
    .delete(verifyToken, catchAsync(deleteItemFromWishList));

export default router;
