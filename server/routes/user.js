import express from "express";
import catchAsync from "../utils/catchAsync.js";
const router = express.Router();

import { register } from "../controllers/users.js";

router.route("/register").post(catchAsync(register));

export default router;
