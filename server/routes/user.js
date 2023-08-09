import express from "express";
import catchAsync from "../utils/catchAsync.js";
const router = express.Router();

import { register, login } from "../controllers/users.js";

router.route("/register").post(catchAsync(register));
router.route("/login").post(catchAsync(login));

export default router;
