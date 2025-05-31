import React from 'react';

function RazorpayButton() {
  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      initiatePayment();
    };
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    document.body.appendChild(script);
  };

  const initiatePayment = async () => {
    const orderData = await createOrder(); // Step 2: Create order from Appwrite (backend)
    if (!orderData) {
      alert("Failed to create order");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Get from Razorpay Dashboard
      amount: orderData.amount, // Amount in paise
      currency: "INR",
      name: "Your Company",
      description: "Test Transaction",
      order_id: orderData.id, // Important!
      handler: function (response) {
        // After successful payment
        alert(`Payment Successful. Payment ID: ${response.razorpay_payment_id}`);
        verifyPayment(response); // Optional: Verify payment on Appwrite
      },
      prefill: {
        name: "Harshit",
        email: "email@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const createOrder = async () => {
    try {
      const response = await fetch('https://your-appwrite-cloud-function-endpoint/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 1, // ₹5.00 -> Razorpay takes amount in paise
        }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating Razorpay order", error);
      return null;
    }
  };

  const verifyPayment = async (paymentResponse) => {
    try {
      const response = await fetch('https://your-appwrite-cloud-function-endpoint/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentResponse),
      });

      const data = await response.json();
      if (data.success) {
        alert('Payment Verified Successfully!');
      } else {
        alert('Payment Verification Failed!');
      }
    } catch (error) {
      console.error("Verification error", error);
    }
  };

  return (
    <div>
      <button onClick={loadRazorpay}>Pay Rs. 1</button>
    </div>
  );
}

export default RazorpayButton;
