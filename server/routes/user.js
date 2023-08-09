import express from "express";
import catchAsync from "../utils/catchAsync.js";
const router = express.Router();

import { register, login, logout } from "../controllers/users.js";
import { isUserLoggedIn } from "../middleware.js";

router.route("/register").post(isUserLoggedIn, catchAsync(register));
router.route("/login").post(isUserLoggedIn, catchAsync(login));
router.route("/logout").get(logout);

export default router;
