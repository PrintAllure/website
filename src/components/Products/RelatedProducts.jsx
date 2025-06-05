// components/product/RelatedProducts.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ products }) => {
  if (!products?.length) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">You may also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <Link 
            key={product.$id} 
            to={`/product/${product.$id}`}
            className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <figure className="h-40">
              <img 
                src={product.images?.[0]} 
                alt={product.name} 
                className="object-cover w-full h-full"
              />
            </figure>
            <div className="card-body p-4">
              <h3 className="card-title text-sm">{product.name}</h3>
              <p className="text-primary font-bold">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;