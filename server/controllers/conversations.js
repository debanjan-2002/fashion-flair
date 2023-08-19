import User from "../models/users.js";
import Conversation from "../models/conversations.js";
import Product from "../models/products.js";
import { fetchResponse, conversationsHistory } from "../utils/fetchResponse.js";
import { cacheConversations } from "../utils/cacheConversations.js";

export const getConversations = async (req, res, next) => {
    const { userId } = req.session;
    const user = await User.findById(userId)
        .populate("conversationHistory")
        .populate("suggestedProducts");

    // On load, add the previous conversations of the user in the history
    cacheConversations(conversationsHistory, user.conversationHistory, userId);

    // Finding the product ids of the suggested products
    const product_ids = user.suggestedProducts.map(product =>
        product._id.toString()
    );
    // Finding the product ids of the suggested products which are also in wishlist
    const likedProducts = user.events.map(event => {
        if (product_ids.includes(event.product_id.toString())) {
            return event.product_id.toString();
        }
    });
    // Setting the isLiked property depending upon whether the suggested product is in wishlist or not
    const products = user.suggestedProducts.map(product => {
        if (likedProducts.includes(product._id.toString())) {
            return { ...product._doc, liked: true };
        }
        return { ...product._doc, liked: false };
    });

    res.status(200).json({
        conversations: user.conversationHistory,
        products
    });
};

export const addConversations = async (req, res, next) => {
    const { userId } = req.session;
    const { text, role } = req.body;

    // finding the current user
    const user = await User.findById(userId);

    // This provides the response to the new question
    const response = await fetchResponse({ content: text, role }, userId);
    // console.log(response);

    // new question object
    const question = new Conversation({ text, role });

    // new answer object
    const answer = new Conversation({
        role: response.role,
        text: response.content
    });
    // saving the question to database
    await question.save();

    // saving the answer to database
    await answer.save();

    // pushing the question to the conversation history of the user
    user.conversationHistory.push(question._id);

    // pushing the answer to the conversation history of the user
    user.conversationHistory.push(answer._id);

    // saving the updated user
    await user.save();

    try {
        // Parsing the JSON response
        const temp = JSON.parse(response.content);
        // Product Ids of the suggested products
        const product_ids = temp.product_ids;

        // Finding the product ids of the suggested products which are also in wishlist
        const likedProducts = user.events.map(event => {
            if (product_ids.includes(event.product_id.toString())) {
                return event.product_id.toString();
            }
        });

        // Finding the products that are suggested
        const products = await Product.find({ _id: { $in: product_ids } });
        // Finding the products by adding the liked field depending upon whether it is there is wishlist or not
        const updatedProducts = products.map(product => {
            if (likedProducts.includes(product._id.toString())) {
                return { ...product._doc, liked: true };
            }
            return { ...product._doc, liked: false };
        });

        // Adding the Product Ids in the suggested product (for the current user)
        await user.updateOne({
            $addToSet: { suggestedProducts: { $each: product_ids } }
        });
        res.status(200).json({
            message: temp.response,
            products: updatedProducts
        });
    } catch (err) {
        res.status(200).json({ message: response.content, products: [] });
    }
};

export const deleteConversations = async (req, res, next) => {
    const { userId } = req.session;

    //finding the current user
    const user = await User.findById(userId);
    // conversation Id list (which will be deleted)
    const conversationIds = user.conversationHistory;

    // Deleting conversations associated with the user
    await Conversation.deleteMany({ _id: { $in: conversationIds } });

    // Removing the conversation Ids from conversation history of the user
    await user.updateOne(
        { $set: { conversationHistory: [], suggestedProducts: [] } },
        { new: true, runValidators: true }
    );

    // clearing the conversation history cache
    conversationsHistory.clear();
    conversationsHistory.set(userId, []);

    res.status(200).json({ message: "Conversations deleted successfully!" });
};
