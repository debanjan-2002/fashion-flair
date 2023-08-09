import ExpressError from "./utils/ExpressError.js";
import jwt from "jsonwebtoken";

export const isUserLoggedIn = (req, res, next) => {
    // If a user is already logged in
    if (req.session.userId) {
        console.log(req.session.userId);
        return next(new ExpressError("A user is already logged in!", 400));
    }
    // Else move forward to further middlewares
    next();
};

export const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return next(new ExpressError("Missing token!", 403));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            return next(new ExpressError("Invalid token!", 401));
        }
        req.session.userId = data.id;
        next();
    });
};
