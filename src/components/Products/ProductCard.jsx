// components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this import

const ProductCard = ({ product, quantityInCart, onAddToCart }) => {
  return (
    <div className="card bg-base-100 border border-base-300 hover:border-primary/30 shadow-sm hover:shadow-md transition-all">
      
      {/* ✅ Wrap image with Link */}
      <Link to={`/product/${product.$id}`}>
        <figure className="relative h-48 overflow-hidden">
          {product.images?.length > 0 && (
            <img
              src={product.images[0]}
              alt={product.name}
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
          )}
          <div className="absolute top-2 right-2">
            {quantityInCart > 0 && (
              <span className="badge badge-primary">
                {quantityInCart} in cart
              </span>
            )}
          </div>
        </figure>
      </Link>

      <div className="card-body p-4">
        
        {/* ✅ Wrap title in Link */}
        <Link to={`/product/${product.$id}`}>
          <h2 className="card-title text-base-content hover:underline">
            {product.name}
          </h2>
        </Link>

        <p className="text-sm text-base-content/70 line-clamp-2">
          {product.description}
        </p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-lg font-bold text-primary">₹{product.price}</span>

          {/* Add to cart remains the same */}
          <button
            onClick={() => onAddToCart(product.$id)}
            className="btn btn-primary btn-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
