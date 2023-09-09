import User from "../models/users.ts";
import Product from "../models/products.ts";
import { Request, Response, NextFunction } from "express";
import ExpressError from "../utils/ExpressError.ts";
import { Types } from "mongoose";

export const getWishList = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // get the user id from session
    const { userId } = req.session;

    // get the user from database
    const user = await User.findById(userId);

    // If user is not found
    // Probable reason is server error
    if (!user) {
        return new ExpressError("Server Error!", 500);
    }
    // events associated with the user
    const events = user.events;
    const productIds: Types.ObjectId[] = [];

    // extracting the product ids from all the events
    events.forEach(event => productIds.push(event.product_id));

    // finding the products using the product ids
    const products = await Product.find({ _id: { $in: productIds } });
    res.json({ products });
};

export const addItemToWishList = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // get the user id from session
    const { userId } = req.session;
    // get product id and event type from request body
    const { productId, eventType } = req.body;

    // find the user from database
    const user = await User.findById(userId);

    // If user is not found
    // Probable reason is server error
    if (!user) {
        return new ExpressError("Server Error!", 500);
    }

    // push the new event details
    user.events.push({
        event_type: eventType,
        product_id: productId
    });
    // save the updated user
    await user.save();

    res.json({ message: "Item added to wishlist successfully!" });
};

export const deleteItemFromWishList = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // get the user id from session
    const { userId } = req.session;
    // get the product id and eventType from the request body
    const { productId, eventType } = req.body;

    // find the user from database and update
    const user = await User.findByIdAndUpdate(
        userId,
        {
            $pull: {
                events: {
                    product_id: { $eq: productId },
                    event_type: { $eq: eventType }
                }
            }
        },
        { new: true }
    );

    return res.json({ message: "Item deleted from wishlist successfully!" });
};

export const deleteWishList = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // get the user id from session
    const { userId } = req.session;
    // find the user and update the events field
    await User.findByIdAndUpdate(userId, { $set: { events: [] } });

    return res.json({ message: "Wishlist cleared successfully!" });
};
