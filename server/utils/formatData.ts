import { IProducts } from "../models/products.ts";

export const formatData = (products: IProducts[]) => {
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
