import React from "react";
import { productsData } from "../data/products.json";
import ProductCatalog from "../components/productcatalog/ProductCatalog";

const CatalogPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Product Catalog</h1>
            <ProductCatalog products={productsData} />
        </div>
    );
};

export default CatalogPage;
