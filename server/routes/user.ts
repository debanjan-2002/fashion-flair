import express from "express";
import catchAsync from "../utils/catchAsync.ts";
const router = express.Router();

import { register, login, logout } from "../controllers/users.ts";
import { isUserLoggedIn } from "../middleware.ts";

router.route("/register").post(isUserLoggedIn, catchAsync(register));
router.route("/login").post(isUserLoggedIn, catchAsync(login));
router.route("/logout").get(logout);

export default router;
