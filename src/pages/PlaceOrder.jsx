import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import orderService from '../appwrite/order.js'; // You should create this file for your order service
import { clearCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const userId = useSelector((state) => state.auth.userData?.$id); // Assuming auth state

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePlaceOrder = async () => {
    if (!userId || !cart.products.length) {
      alert('Cart is empty or user not logged in.');
      return;
    }

    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load.');
      return;
    }

    try {
      // 1. Create a Razorpay order on your server (temporary fake one here)
      const razorpayOrder = await fetch('https://cloud.appwrite.io/v1/functions/680d5fb75af6bf8a124e/executions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: cart.totalAmount * 100 }), // Razorpay accepts amount in paisa
      }).then(res => {
        console.log(res);
        
        return res.json()
    });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Your Razorpay public key
        amount: razorpayOrder.amount,
        currency: "INR",
        order_id: razorpayOrder.id,
        name: "PrintAllure",
        description: "Payment for your order",
        handler: async (response) => {
          try {
            // 2. After successful payment, create order in Appwrite
            await orderService.createOrder({
              userId,
              cart,
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            });

            // 3. Clear cart and redirect
            dispatch(clearCart());
            alert('Order placed successfully!');
            navigate('/orders'); // Redirect to order history page (you can change path)
          } catch (error) {
            console.error('Order creation failed:', error);
            alert('Order failed.');
          }
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment initialization failed.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Place Order</h1>

      <div className="border p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        <ul className="mb-4">
          {cart.products.map((productId, index) => (
            <li key={productId} className="flex justify-between py-2">
              <span>Product ID: {productId}</span>
              <span>Qty: {cart.productsQuantity[index]}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center border-t pt-4">
          <h3 className="text-lg font-semibold">Total:</h3>
          <h3 className="text-lg font-bold">Rs. {cart.totalAmount}</h3>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Pay & Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
