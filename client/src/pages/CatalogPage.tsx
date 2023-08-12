import React from 'react';
import ProductCatalog from '../components/productcatalog/ProductCatalog'; // Update the path to match your file structure

const productsData = [
  {
    id: 1,
    imageSrc: 'product1.jpg',
    productName: 'Product 1',
    price: '$49.99',
  },
  {
    id: 2,
    imageSrc: 'product2.jpg',
    productName: 'Product 2',
    price: '$29.99',
  },
  // Add more product data as needed
];

const CatalogPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Product Catalog</h1>
      <ProductCatalog products={productsData} />
    </div>
  );
};

export default CatalogPage;
