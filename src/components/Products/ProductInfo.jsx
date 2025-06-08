// components/product/ProductInfo.jsx
import React, { useState } from 'react';

const ProductInfo = ({ 
  product, 
  quantityInCart, 
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  return (
    <div className="w-full md:w-1/2 p-6">
      <h1 className="text-3xl font-bold text-secondary mb-2">{product.name}</h1>
      
      <div className="flex items-center mb-4">
        <div className="rating rating-half">
          {[1, 2, 3, 4, 5].map((star) => (
            <input
              key={star}
              type="radio"
              name="rating"
              className={`mask mask-star-2 ${star % 2 === 0 ? 'mask-half-2' : 'mask-half-1'}`}
              checked={product.rating >= star}
              readOnly
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-base-content/70">
          ({product.reviewCount} reviews)
        </span>
      </div>

      <p className="text-2xl font-bold text-primary mb-4">₹{product.price}</p>
      
      <p className="text-base-content mb-6">{product.discription}</p>

      <div className="divider"></div>

      <div className="flex items-center gap-4 mb-6">
        <div className="join">
          <button 
            className="join-item btn btn-sm"
            onClick={() => handleQuantityChange(quantity - 1)}
          >
            -
          </button>
          <button className="join-item btn btn-sm no-animation">
            {quantity}
          </button>
          <button 
            className="join-item btn btn-sm"
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            +
          </button>
        </div>

        <button 
          className="btn btn-primary flex-grow"
          onClick={() => onAddToCart(product.$id, quantity)}
        >
          {quantityInCart > 0 ? `Update Cart (${quantityInCart})` : 'Add to Cart'}
        </button>
      </div>

      <div className="divider"></div>

      <div className="space-y-2">
        {/* <p><span className="font-medium">Category:</span> {product.category}</p>
        <p><span className="font-medium">Material:</span> {product.material}</p>
        <p><span className="font-medium">Dimensions:</span> {product.dimensions}</p> */}
        <p><span className="font-medium">Availability:</span> In Stock </p>
        {/* {product.stock > 0 ? 'In Stock' : 'Out of Stock'} */}
      </div>
    </div>
  );
};

export default ProductInfo;