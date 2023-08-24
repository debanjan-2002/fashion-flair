import ExpressError from "./utils/ExpressError.ts";
import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";

export const isUserLoggedIn = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // If a user is already logged in
    if (req.session.userId) {
        console.log(req.session.userId);
        return next(new ExpressError("A user is already logged in!", 400));
    }
    // Else move forward to further middlewares
    next();
};

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Extract the token from the request header
    const token = req.headers["x-access-token"];
    // If token is not present, then send appropriate error
    if (!token) {
        return next(new ExpressError("Missing token!", 403));
    }
    // Verify the JWT Token
    jwt.verify(
        token as string,
        process.env.JWT_SECRET as Secret,
        (err, data) => {
            if (err) {
                return next(new ExpressError("Invalid token!", 401));
            }
            // Setting the userId in the session
            // Using generics to typecast
            req.session.userId = (<{ id: string }>data).id;
            next();
        }
    );
};
