import React from "react";
import SlideIn from "../../components/slideIn/SlideIn";
import ProductCard from "../productcard/ProductCard"; // Update the path to match your file structure

interface Product {
    id: string;
    imageSrc: string;
    productName: string;
    price: string;
    liked?: boolean;
}

interface ProductCatalogProps {
    products: Product[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ products }: { products: Product[] }) => {
    return (
        <div className="flex flex-wrap -mx-4">
            {products.map((product) => (
                <div key={product.id} className="px-4 mb-4 py-8">
                    <SlideIn delay={0}>
                        <ProductCard
                            id={product.id}
                            imageSrc={product.imageSrc}
                            productName={product.productName}
                            price={product.price}
                            liked={product.liked ?? false}
                        />
                    </SlideIn>
                </div>
            ))}
        </div>
    );
};

export default ProductCatalog;
export type { Product };
