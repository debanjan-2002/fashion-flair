import User from "../models/users.js";
import ExpressError from "../utils/ExpressError.js";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
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

export const login = (req, res, next) => {};