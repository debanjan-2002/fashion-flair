import User from "../models/users.js";
import Conversation from "../models/conversations.js";
import Product from "../models/products.js";
import { fetchResponse, conversationsHistory } from "../utils/fetchResponse.js";
import { cacheConversations } from "../utils/cacheConversations.js";

export const getConversations = async (req, res, next) => {
    const { userId } = req.session;
    const user = await User.findById(userId).populate("conversationHistory");

    // On load, add the previous conversations of the user in the history
    cacheConversations(conversationsHistory, user.conversationHistory, userId);

    res.status(200).json(user.conversationHistory);
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

    const temp = JSON.parse(response.content);
    const product_ids = temp.product_ids;
    const products = await Product.find({ _id: { $in: product_ids } });

    res.status(200).json({ message: temp.response, products });
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
        { $set: { conversationHistory: [] } },
        { new: true, runValidators: true }
    );

    // clearing the conversation history cache
    conversationsHistory.clear();

    res.status(200).json({ message: "Conversations deleted successfully!" });
};
