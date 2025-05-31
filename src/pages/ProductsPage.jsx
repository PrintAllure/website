import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import productServices from '../appwrite/product';
import cartService from '../appwrite/cart';
import { setCart } from '../store/cartSlice';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const userData = useSelector(state => state.auth.userData);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        productServices.getAllProducts().then((response) => {
          if (response) {
            setProducts(response);
          }
        }).catch((error) => {
          console.error("Error fetching products:", error);
          setError("Failed to fetch products. Please try again later.");
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      if (userData?.$id) {
        try {
          cartService.getCart(userData.$id).then((response) => {
            const cartData = response || null;
            dispatch(setCart(cartData));
            setCart(cartData);
          }).catch((error) => {
            console.error("Error fetching cart:", error);
            setError("Failed to fetch cart. Please try again later.");
          });
        } catch (error) {
          console.error("Failed to fetch cart:", error);
        }
      }
    };
    fetchCart();
  }, [userData, dispatch]);

  const handleAddToCart = async (productId) => {
    if (!userData?.$id) {
      alert("Please login to add items to cart");
      return;
    }

    try {
      const currentCart = cart;
      const productIndex = currentCart.products.indexOf(productId);
      const updatedProductIds = [...currentCart.products];
      const updatedQuantities = [...currentCart.productsQuantity];

      if (productIndex === -1) {
        updatedProductIds.push(productId);
        updatedQuantities.push(1);
      } else {
        updatedQuantities[productIndex] += 1;
      }

      cartService.updateCart(userData.$id, {
        productIds: updatedProductIds,
        quantities: updatedQuantities
      }).then((response) => {
        if (response) {
          console.log("Cart updated successfully:", response);
        }
        const updatedCart = response || null;
        dispatch(setCart(updatedCart));
      }).catch((error) => {
        console.error("Error updating cart:", error);
      });

    } catch (error) {
      console.error("Cart update error:", error);
      alert(`Failed to update cart: ${error.message}`);
    }
  };

  const getProductQuantity = (productId) => {
    const index = cart?.productIds?.indexOf(productId) ?? -1;
    return index !== -1 ? cart.quantities[index] : 0;
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <span className="ml-4">Loading products...</span>
    </div>
  );

  if (error) return (
    <div className="alert alert-error max-w-2xl mx-auto mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Error: {error}</span>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Our 3D Printed Products</h1>
          <p className="text-base-content/70 mt-2">Custom solutions for every need</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search products..."
              className="input input-bordered w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-3 top-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <Link 
            to="/cart" 
            className="btn btn-primary gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            View Cart
            {cart?.productIds?.length > 0 && (
              <span className="badge badge-secondary">
                {cart.productIds.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product.$id} className="card bg-base-100 border border-base-300 hover:border-primary/30 shadow-sm hover:shadow-md transition-all">
              <figure className="relative h-48 overflow-hidden">
                {product.images?.length > 0 && (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                )}
                <div className="absolute top-2 right-2">
                  {getProductQuantity(product.$id) > 0 && (
                    <span className="badge badge-primary">
                      {getProductQuantity(product.$id)} in cart
                    </span>
                  )}
                </div>
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-base-content">{product.name}</h2>
                <p className="text-sm text-base-content/70 line-clamp-2">{product.description}</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-lg font-bold text-primary">₹{product.price}</span>
                  <button
                    onClick={() => handleAddToCart(product.$id)}
                    className="btn btn-primary btn-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-base-content/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-medium mt-4">No products found</h3>
          <p className="text-base-content/70 mt-2">Try adjusting your search or check back later</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;