import { Account, Client, Databases, ID } from "appwrite";
import conf from "../conf/conf.js";
import crypto from "crypto"; // To verify Razorpay signature

class OrderService {
  client = new Client()
    .setEndpoint(conf.endpoint)
    .setProject(conf.projectId);

  databases = new Databases(this.client);
  account = new Account(this.client);

  /**
   * Verifies Razorpay payment signature
   * @param {string} orderId - Razorpay order ID
   * @param {string} paymentId - Razorpay payment ID
   * @param {string} razorpaySignature - Razorpay signature
   * @returns {boolean}
   */
  verifyPaymentSignature(orderId, paymentId, razorpaySignature) {
    const generatedSignature = crypto
      .createHmac("sha256", conf.razorpaySecret)
      .update(orderId + "|" + paymentId)
      .digest("hex");

    return generatedSignature === razorpaySignature;
  }

  /**
   * Create order after payment verification
   * @param {Object} params - { userId, cart, orderId, paymentId, razorpaySignature }
   * @returns {Object} - Created order document
   */
  async createOrder({ userId, cart, orderId, paymentId, razorpaySignature }) {
    try {
      // Verify payment first
      const isValid = this.verifyPaymentSignature(orderId, paymentId, razorpaySignature);

      if (!isValid) {
        throw new Error("Invalid payment signature. Order creation denied.");
      }

      // Proceed to create order document
      const order = await this.databases.createDocument(
        conf.databaseId,
        conf.ordersCollectionId, // You should set this ID in your conf.js
        ID.unique(),
        {
          amount: cart.totalAmount,
          orderDate: new Date().toISOString(),
          payment: true,
          productsId: cart.productsId,
          productQuantity: cart.productQuantity,
          paymentId: paymentId,
          userId: userId,
        }
      );

      return order;
    } catch (error) {
      console.error("Create order failed:", error);
      throw error;
    }
  }
}

const orderService = new OrderService();
export default orderService;
