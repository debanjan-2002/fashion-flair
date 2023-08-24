import { Types, model, Schema, Model, Document } from "mongoose";

interface IImages {
    url: string;
    alt_text?: string;
}

export interface IProducts extends Document {
    _doc?: any;
    name: string;
    brand: string;
    category: string;
    description: string;
    price: number;
    color: string;
    size: "XS" | "S" | "M" | "L" | "XL";
    gender: "Male" | "Female" | "Unisex";
    season: "Summer" | "Winter" | "All";
    tags: Types.Array<string>;
    images: Types.DocumentArray<IImages>;
    rating: number;
}

const productSchema = new Schema<IProducts, Model<IProducts>>({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        enum: ["XS", "S", "M", "L", "XL"],
        default: "M"
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Unisex"],
        default: "Unisex"
    },
    season: {
        type: String,
        enum: ["Summer", "Winter", "All"]
    },
    tags: [String],
    images: [{ url: String, alt_text: String }],
    rating: {
        type: Number,
        min: [1, "Minimum rating >= 1"],
        max: [10, "Maximum rating <= 10"]
    }
});

const Product = model<IProducts, Model<IProducts>>("Product", productSchema);
export default Product;
