import mongoose from "mongoose";
import Conversation from "./conversations.js";
import Product from "./products.js";

const { Schema } = mongoose;

const eventSchema = new Schema(
    {
        event_type: {
            type: String,
            required: true
        },
        product_id: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true
        }
    },
    { timestamps: true }
);

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
    conversationHistory: [{ type: Schema.Types.ObjectId, ref: "Conversation" }],
    suggestedProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

const User = mongoose.model("User", userSchema);
export default User;
