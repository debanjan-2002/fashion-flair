import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";

import conversationRoutes from "./routes/conversation.ts";
import userRoutes from "./routes/user.ts";
import wishlistRoutes from "./routes/wishlist.ts";
import ExpressError from "./utils/ExpressError.ts";

declare module "express-session" {
    interface SessionData {
        userId: string;
    }
}

dotenv.config();

const dbURL = process.env.MONGO_URL!;
mongoose
    .connect(dbURL)
    .then(() => console.log("Connected to DB successfully!"))
    .catch(err => console.log(err));

const app = express();

app.use(cors());

app.use(express.json());
app.use(
    session({
        secret: process.env.SESSION_SECRET || "iamthesecret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true
            // expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
            // maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
);

app.use("/api/users", userRoutes);
app.use("/api/conversations", conversationRoutes);
app.use("/api/wishlist", wishlistRoutes);

app.use(
    (err: ExpressError, req: Request, res: Response, next: NextFunction) => {
        if (!err.statusCode) {
            return res
                .status(500)
                .json({ message: err.message, statusCode: 500 });
        }
        const { statusCode } = err;
        res.status(statusCode).json(err);
    }
);

const PORT = 3000;
app.listen(PORT, () => console.log(`Connected to PORT ${PORT}`));