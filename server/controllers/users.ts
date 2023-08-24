import User from "../models/users.ts";
import ExpressError from "../utils/ExpressError.ts";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const register = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Retrieve the email, username, password from request body
    const { email, username, password } = req.body;

    // If any required parameter is missing
    if (!email || !username || !password) {
        return next(new ExpressError("Missing parameters!", 400));
    }
    const user = await User.findOne({ email });

    // If the user already exists
    if (user) {
        return next(new ExpressError("User already exist!", 409));
    }

    // User can be registered now
    // Generate hashed password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const newUser = new User({ email, username, password: hashedPassword });
    // Save in database
    await newUser.save();

    // User successfully registered
    res.status(200).json({ message: "User registered successfully!" });
};

export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Retrieve the email, password from request body
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // If the user doesn't exist
    if (!user) {
        return next(
            new ExpressError("User doesn't not exist. Kindly register!", 404)
        );
    }

    // If the user exist, the match the password
    const isMatch = await bcrypt.compare(password, user.password);
    // If the password matches, then user can be logged in
    if (isMatch) {
        req.session.userId = user._id.toString();
        // sending jwt token that will be stored in local storage in front end
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET as Secret
        );
        return res
            .status(200)
            .json({ message: "User logged in successfully!", auth: token });
    }
    // Else send appropriate error
    else {
        return next(new ExpressError("Invalid Credentials", 404));
    }
};

export const logout = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Remove the current user from session
    req.session.userId = "";
    res.status(200).json({ message: "User logout successful!" });
};
