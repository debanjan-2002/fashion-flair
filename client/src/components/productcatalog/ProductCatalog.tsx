import React from 'react';
import ProductCard from '../productcard//ProductCard'; // Update the path to match your file structure

interface Product {
  id: number;
  imageSrc: string;
  productName: string;
  price: string;
}

interface ProductCatalogProps {
  products: Product[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {products.map((product) => (
        <div key={product.id} className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
          <ProductCard
            imageSrc={product.imageSrc}
            productName={product.productName}
            price={product.price}
            onWishlistClick={() => {
              // Handle wishlist interaction for this product
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
