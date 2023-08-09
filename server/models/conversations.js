import mongoose from "mongoose";
const { Schema } = mongoose;

const conversationSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["User", "Assistant"]
    }
});

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;
