import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart, calculateAndUpdateTotal } from '../store/cartSlice';
import cartServices from '../appwrite/cart.js';
import { Link } from 'react-router-dom';

const AllProducts = ({ products }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userData?.$id);
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = async (productId) => {
    if (!userId) {
      // Optionally redirect to login or show a message
      return;
    }

    try {
      let updatedProducts = [...cart.products];
      let updatedQuantities = [...cart.productsQuantity];

      const productIndex = updatedProducts.findIndex(p => p === productId);

      if (productIndex === -1) {
        // Product not in cart, add it
        updatedProducts.push(productId);
        updatedQuantities.push(1);
      } else {
        // Product already in cart, increment quantity
        updatedQuantities[productIndex] += 1;
      }

      await cartServices.updateCart(userId, {
        productIds: updatedProducts,
        quantities: updatedQuantities,
      });

      // Update local state
      dispatch(addProductToCart({ productId }));
      dispatch(calculateAndUpdateTotal());
    } catch (error) {
      console.error('Failed to add product to cart:', error);
    }
  };

  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">All Products</h1>
        <p>No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.$id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                {product.imageUrl ? (
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>
              
              <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
              <p className="font-bold text-lg mb-3">Rs. {product.price}</p>
              
              <button
                onClick={() => handleAddToCart(product.$id)}
                className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;