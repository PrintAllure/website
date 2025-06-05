import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, addProductToCart } from '../store/cartSlice';
import productServices from '../appwrite/product';
import cartService from '../appwrite/cart';
import ProductGallery from '../components/Products/ProductGallery.jsx';
import ProductInfo from '../components/Products/ProductInfo.jsx';
import ProductTabs from '../components/Products/ProductsTab.jsx';
import RelatedProducts from '../components/Products/RelatedProducts.jsx';
import LoadingState from '../components/Products/LoadingState.jsx';
import ErrorState from '../components/Products/ErrorState.jsx';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const userData = useSelector(state => state.auth.userData);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await productServices.getProduct(productId);
        if (productData) {
          setProduct(productData);

          // ✅ Fetch all products (no category logic)
          const allProducts = await productServices.getAllProducts();
          const related = allProducts
            .filter(p => p.$id !== productId)
            .slice(0, 4); // Pick first 4 other products
          setRelatedProducts(related);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to fetch product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const getProductQuantity = (productId) => {
    const index = cart?.productIds?.indexOf(productId) ?? -1;
    return index !== -1 ? cart.quantities[index] : 0;
  };

  const handleAddToCart = async (productId, quantity) => {
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
        updatedQuantities.push(quantity);
      } else {
        updatedQuantities[productIndex] += quantity;
      }

      const response = await cartService.updateCart(userData.$id, {
        productIds: updatedProductIds,
        quantities: updatedQuantities
      });

      if (response) {
        dispatch(setCart(response));
        dispatch(addProductToCart({ productId, quantity }));
      }
    } catch (error) {
      console.error("Cart update error:", error);
      alert(`Failed to update cart: ${error.message}`);
    }
  };

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!product) return <ErrorState error="Product not found" />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <ProductGallery images={product.images} />
        <ProductInfo 
          product={product}
          quantityInCart={getProductQuantity(product.$id)}
          onAddToCart={handleAddToCart}
        />
      </div>

      <ProductTabs product={product} />

      <RelatedProducts products={relatedProducts} />

      <div className="mt-8 text-center">
        <Link to="/products" className="btn btn-outline">
          ← Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
