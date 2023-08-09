import mongoose from "mongoose";
const { Schema } = mongoose;

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
    browsingHistory: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    purchaseHistory: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

export default mongoose.model("User", userSchema);
