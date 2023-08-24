import { Types, Schema, model, Model } from "mongoose";
import Conversation from "./conversations.ts";
import Product from "./products.ts";

interface IEvent {
    event_type: string;
    product_id: Types.ObjectId;
}

interface IUser {
    email: string;
    username: string;
    password: string;
    events: IEvent[];
    conversationHistory: Types.ObjectId[];
    suggestedProducts: Types.ObjectId[];
}

type UserProps = {
    events: Types.DocumentArray<IEvent>;
};
type UserModelType = Model<IUser, {}, UserProps>;

const User = model<IUser, UserModelType>(
    "User",
    new Schema<IUser, UserModelType>({
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
        events: [
            new Schema<IEvent>({
                event_type: String,
                product_id: Schema.Types.ObjectId
            })
        ],
        conversationHistory: [
            { type: Schema.Types.ObjectId, ref: "Conversation" }
        ],
        suggestedProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }]
    })
);

export default User;
