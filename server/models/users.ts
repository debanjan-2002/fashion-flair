import mongoose, { Types } from "mongoose";
import Conversation from "./conversations.ts";
import Product from "./products.ts";

const { Schema } = mongoose;

interface IEvent {
    event_type: string;
    product_id: Types.ObjectId;
}

interface IUser {
    email: string;
    username: string;
    password: string;
    events: IEvent;
    conversationHistory: Types.ObjectId[];
    suggestedProducts: Types.ObjectId[];
}

const eventSchema = new Schema<IEvent>(
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

const userSchema = new Schema<IUser>({
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

const User = mongoose.model<IUser>("User", userSchema);
export default User;
