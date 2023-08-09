import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.js";

dotenv.config();

const dbURL = process.env.MONGO_URL;
mongoose
    .connect(dbURL)
    .then(() => console.log("Connected to DB successfully!"))
    .catch(err => console.log(err));

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

app.use((err, req, res, next) => {
    if (!err.statusCode) {
        return res.status(500).json({ message: err.message, statusCode: 500 });
    }
    const { statusCode } = err;
    res.status(statusCode).json(err);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Connected to PORT ${PORT}`));
