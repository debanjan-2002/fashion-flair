import User from "../models/users.js";
import Conversation from "../models/conversations.js";

export const getConversations = async (req, res, next) => {
    const { userId } = req.session;
    const user = await User.findById(userId).populate("conversationHistory");

    res.status(200).json(user.conversationHistory);
};

export const addConversations = async (req, res, next) => {
    const { userId } = req.session;
    const { text, role } = req.body;

    // finding the current user
    const user = await User.findById(userId);

    // adding a new conversation
    const conversation = new Conversation({ text, role });
    await conversation.save();

    // pushing the conversation to the conversation history of the user
    user.conversationHistory.push(conversation._id);
    await user.save();

    res.status(200).json({ message: "Conversation added successfully!" });
};
