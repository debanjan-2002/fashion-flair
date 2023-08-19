import express from "express";
import catchAsync from "../utils/catchAsync.js";
const router = express.Router();

import {
    getWishList,
    addItemToWishList,
    deleteItemFromWishList,
    deleteWishList
} from "../controllers/wishlists.js";
import { verifyToken } from "../middleware.js";

router
    .route("/")
    .get(verifyToken, catchAsync(getWishList))
    .post(verifyToken, catchAsync(addItemToWishList))
    .delete(verifyToken, catchAsync(deleteItemFromWishList));

router.route("/all").delete(verifyToken, catchAsync(deleteWishList));

export default router;
