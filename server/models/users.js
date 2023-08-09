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

const User = mongoose.model("User", userSchema);
export default User;
