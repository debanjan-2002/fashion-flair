import ExpressError from "./utils/ExpressError.js";

export const isUserLoggedIn = (req, res, next) => {
    // If a user is already logged in
    if (req.session.user) {
        console.log(req.session.user);
        return next(new ExpressError("A user is already logged in!", 400));
    }
    // Else move forward to further middlewares
    next();
};
