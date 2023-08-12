import mongoose from "mongoose";
import Conversation from "./conversations.js";
import Product from "./products.js";

const { Schema } = mongoose;

const eventSchema = new Schema({
    event_type: {
        type: String,
        required: true
    },
    event_time: [{ type: Date, required: true }],
    product_ids: [
        { type: Schema.Types.ObjectId, ref: "Product", required: true }
    ]
});

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    events: [eventSchema],
    conversationHistory: [{ type: Schema.Types.ObjectId, ref: "Conversation" }]
});

const User = mongoose.model("User", userSchema);
export default User;
