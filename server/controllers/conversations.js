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

    res.status(200).json({ message: "Conversations deleted successfully!" });
};
