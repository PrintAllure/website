// components/ProductsGrid.jsx
import React from 'react';
import ProductCard from './ProductCard';

const ProductsGrid = ({ products, getProductQuantity, handleAddToCart }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.$id}
          product={product}
          quantityInCart={getProductQuantity(product.$id)}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;