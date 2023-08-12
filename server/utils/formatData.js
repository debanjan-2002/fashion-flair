import Product from "../models/products.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

// dotenv.config();

// const dbURL = process.env.MONGO_URL;
// mongoose
//     .connect(dbURL)
//     .then(() => console.log("Connected to DB successfully!"))
//     .catch(err => console.log(err));

export const formatData = products => {
    // const products = await Product.find({});
    // console.log(products);
    let s = ``;
    products.forEach(product => {
        s += `${product.id},`;
        s += `${product.name},`;
        s += `${product.brand},`;
        s += `${product.category},`;
        s += `${product.description},`;
        s += `${product.price},`;
        s += `${product.color},`;
        s += `${product.size},`;
        s += `${product.color},`;
        s += `${product.color},`;
        s += `[${product.tags}],`;
        s = s.substring(0, s.length - 1);
        s += "\n";
    });
    s.trim();
    return s;
};
// formatData();
// .then(data => console.log(data))
// .catch(err => console.log(err));
