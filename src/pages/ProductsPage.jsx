// pages/ProductsPage.jsx
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../store/cartSlice';
import productServices from '../appwrite/product';
import cartService from '../appwrite/cart';
import PageHeader from '../components/Products/PageHeader';
import ProductsGrid from '../components/Products/ProductsGrid';
import EmptyState from '../components/Products/EmptyState';
import LoadingState from '../components/Products/LoadingState';
import ErrorState from '../components/Products/ErrorState';

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
        const response = await productServices.getAllProducts();
        if (response) {
          setProducts(response);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
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
          const response = await cartService.getCart(userData.$id);
          const cartData = response || null;
          dispatch(setCart(cartData));
        } catch (error) {
          console.error("Error fetching cart:", error);
          setError("Failed to fetch cart. Please try again later.");
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

      const response = await cartService.updateCart(userData.$id, {
        productIds: updatedProductIds,
        quantities: updatedQuantities
      });

      if (response) {
        dispatch(setCart(response));
      }
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
    product.discription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartItemCount={cart?.productIds?.length || 0}
      />

      {filteredProducts.length > 0 ? (
        <ProductsGrid 
          products={filteredProducts}
          getProductQuantity={getProductQuantity}
          handleAddToCart={handleAddToCart}
        />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default ProductsPage;