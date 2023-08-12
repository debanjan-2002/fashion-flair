import User from "../models/users.js";
import Conversation from "../models/conversations.js";
import Product from "../models/products.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURL = process.env.MONGO_URL;
mongoose
    .connect(dbURL)
    .then(() => console.log("Connected to DB successfully!"))
    .catch(err => console.log(err));

const addDummyConversations = async userId => {
    await Conversation.deleteMany({});
    const user = await User.findById(userId);
    const role = ["User", "Assistant"];
    let index = 0;

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
    const product = new Product({
        name: "Winter Knit Beanie",
        brand: "WarmCozy",
        category: "Accessories",
        description: "Warm and stylish knit beanie for cold winter days.",
        price: 19.95,
        color: "Blue",
        gender: "Unisex",
        season: "Winter",
        tags: ["beanie", "knit hat", "winter accessories"],
        images: [
            {
                url: "https://example.com/beanie_front.jpg",
                alt_text: "Front View"
            },
            {
                url: "https://example.com/beanie_side.jpg",
                alt_text: "Side View"
            }
        ],
        rating: 7.0
    });
    await product.save();
};

// addDummyProducts().then(() => console.log("Success"));
