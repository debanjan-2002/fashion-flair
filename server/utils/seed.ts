import User from "../models/users.ts";
import Conversation from "../models/conversations.ts";
import Product from "../models/products.ts";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURL = process.env.MONGO_URL!;
mongoose
    .connect(dbURL)
    .then(() => console.log("Connected to DB successfully!"))
    .catch(err => console.log(err));

const addDummyConversations = async (userId: string) => {
    await Conversation.deleteMany({});
    const user = await User.findById(userId);
    const role = ["User", "Assistant"];
    let index = 0;

    if (!user) return;

    for (let i = 0; i < 5; i++) {
        const conversation = new Conversation({
            text: "Hello",
            role: role[index]
        });
        if (index == 0) index = 1;
        else index = 0;

        await conversation.save();
        user.conversationHistory.push(conversation._id);
        await user.save();
    }
};

const addDummyProducts = async () => {
    // await Product.deleteMany({});
    const product = new Product({});
    await product.save();
};

// addDummyProducts().then(() => console.log("Success"));
