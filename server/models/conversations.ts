import { Model, Schema, model, Document } from "mongoose";

export interface IConversation extends Document {
    text: string;
    role: "user" | "assistant";
}

const conversationSchema = new Schema<IConversation, Model<IConversation>>({
    text: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "assistant"]
    }
});

const Conversation = model<IConversation, Model<IConversation>>(
    "Conversation",
    conversationSchema
);
export default Conversation;
