import User from "../models/users.js";

export const getConversations = async (req, res, next) => {
    const { userId } = req.session;
    const user = await User.findById(userId).populate("conversationHistory");

    res.json(user.conversationHistory);
};
