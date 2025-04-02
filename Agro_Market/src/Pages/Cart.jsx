import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../cartSlice";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Navbar, Footer } from "../Components/Home/Navbar";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Tracking from "../Components/Cart/Tracking";

const Cart = ({ setShopNow }) => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [track, setIsTrack] = useState();
  const [loading, setLoading] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  // Show payment options when clicking "Pay Now"
  const handleShowPaymentOptions = () => {
    setShowPaymentOptions(true);
  };

  const handleQuantityChange = (id, amount) => {
    if (amount > 0) {
      dispatch(increaseQuantity(id));
    } else {
      dispatch(decreaseQuantity(id));
    }
  };
  const generateOrderId = () => {
    return "ORD" + Math.floor(100000 + Math.random() * 900000);
  };
  // Calculate total
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Apply Discount Logic
  const discountPercentage = 10; // 10% discount
  const discountAmount = totalAmount * (discountPercentage / 100);
  const finalAmount = totalAmount - discountAmount;

  // Mock Payment Function
  const handleProceedToPayment = async (method) => {
    setSelectedPaymentMethod(method);
    setShowPaymentOptions(false);
    setLoading(true);
    setPaymentMessage("");

    try {
      // ✅ Generate Order ID
      const generatedOrderId = generateOrderId();
      setOrderId(generatedOrderId);

      // ✅ Determine Payment Status
      const paymentStatus =
        method === "Cash on Delivery" ? "pending" : "completed";

      const orderData = {
        orderId: generatedOrderId,
        items: cartItems.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
          unit: item.unit,
        })),
        totalAmount,
        discount: discountAmount,
        finalAmount,
        paymentMethod: method,
        paymentStatus, // Set dynamically
      };

      // ✅ Place Order in Backend
      const orderResponse = await fetch(
        "http://localhost:5000/api/place-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        }
      );

      if (!orderResponse.ok) {
        throw new Error("Failed to create order record");
      }

      // ✅ If COD, skip payment processing
      if (method === "Cash on Delivery") {
        setPaymentMessage(
          "Order placed successfully! Payment pending (COD). 🛒"
        );
        setShowOrderPopup(true);
        dispatch(clearCart());
        return;
      }

      // ✅ Process Online Payment
      const paymentResponse = await fetch(
        "http://localhost:5000/api/mock-payment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: finalAmount,
            currency: "INR",
            orderId: generatedOrderId,
          }),
        }
      );

      const paymentData = await paymentResponse.json();

      if (paymentData.success) {
        setPaymentMessage("Payment Successful! 🎉");
        setShowOrderPopup(true);
        dispatch(clearCart());
      } else {
        setPaymentMessage("Payment Failed! ❌");
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentMessage("Payment Error! Please try again. ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {track ? (
        <Tracking />
      ) : (
        <>
          <ArrowLeft
            className="m-2 text-green-600"
            size={30}
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center text-lg">
                Your cart is empty.
              </p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b py-4 px-4 bg-gray-50 rounded-lg shadow-sm mb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-500">
                        ₹{item.price} / {item.unit}
                      </p>
                      <p className="text-gray-600">
                        Subtotal: ₹{item.price * item.quantity}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="bg-gray-200 p-2 rounded-l hover:bg-gray-300"
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus />
                      </button>
                      <span className="px-4 text-lg">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="bg-gray-200 p-2 rounded-r hover:bg-gray-300"
                      >
                        <FaPlus />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      className="text-red-500 ml-4 hover:text-red-700"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}

                {/* Price Summary */}
                <div className="text-right mt-6">
                  <div className="text-lg mb-2">Subtotal: ₹{totalAmount}</div>
                  <div className="text-green-600 mb-2">
                    Discount ({discountPercentage}%): -₹
                    {discountAmount.toFixed(2)}
                  </div>
                  <div className="text-xl font-semibold">
                    Total: ₹{finalAmount.toFixed(2)}
                  </div>
                </div>

                {/* Payment Message */}
                {paymentMessage && (
                  <p className="mt-4 text-center text-lg font-semibold text-blue-600">
                    {paymentMessage}
                  </p>
                )}

                {/* Clear Cart & Pay Now Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                  <button
                    className="px-4 bg-red-500 text-white py-3 rounded hover:bg-red-600 text-lg"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear Cart
                  </button>

                  <button
                    className="px-4 bg-green-500 text-white py-3 rounded hover:bg-green-600 text-lg"
                    onClick={handleShowPaymentOptions}
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Pay Now"}
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setIsTrack(true)}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5 text-white" />
              Track Order
            </button>
          </div>
        </>
      )}
      <Footer />
      {showOrderPopup && (
        <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-50">
          {/* Semi-transparent card with visible background text underneath */}
          <div className="bg-white backdrop-blur-[3px] p-8 rounded-xl shadow-lg max-w-md w-full mx-4 border border-gray-200/30">
            <div className="text-center space-y-4 relative z-10">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h2 className="text-3xl font-bold text-gray-800">
                Order Successful!
              </h2>
              <p className="text-lg text-gray-600">
                Your order{" "}
                <span className="font-mono font-bold text-green-600">
                  #{orderId}
                </span>{" "}
                is confirmed
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
                <button
                  onClick={() => {
                    setShowOrderPopup(false);
                    setIsTrack(true);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all shadow-md"
                >
                  Track Order
                </button>
                <button
                  onClick={() => {
                    setShowOrderPopup(false);
                    // setShopNow(true);
                  }}
                  className="px-6 py-3 bg-white/90 hover:bg-gray-50 border border-gray-300 text-gray-700 rounded-lg transition-all shadow-sm"
                >
                  Keep Shopping
                </button>
              </div>
            </div>

            {/* This allows background text to subtly show through */}
            <div
              className="absolute inset-0 -z-10 opacity-20"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      )}

      {showPaymentOptions && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-xl font-semibold mb-4 text-green-700">
              Select Payment Method
            </h2>
            <div className="flex flex-col items-center gap-3 w-full">
              <button
                className="w-3/4 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow"
                onClick={() => handleProceedToPayment("Credit/Debit Card")}
              >
                Credit/Debit Card
              </button>
              <button
                className="w-3/4 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow"
                onClick={() => handleProceedToPayment("UPI")}
              >
                UPI
              </button>
              <button
                className="w-3/4 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow"
                onClick={() => handleProceedToPayment("Net Banking")}
              >
                Net Banking
              </button>
              <button
                className="w-3/4 px-4 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 shadow"
                onClick={() => handleProceedToPayment("Cash on Delivery")}
              >
                Cash on Delivery
              </button>
            </div>
            <button
              className="mt-4 text-gray-500 hover:underline"
              onClick={() => setShowPaymentOptions(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;