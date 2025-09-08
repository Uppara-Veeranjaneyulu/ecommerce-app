import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Checkout({ cart, clearCart }) {
  const [done, setDone] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setDone(true);
  };

  if (done) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
        <Link to="/products" className="text-blue-600 underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p className="mb-6">
            Total Items: {cart.reduce((sum, i) => sum + i.qty, 0)}
          </p>
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
            onClick={handleCheckout}
          >
            Confirm Purchase
          </button>
        </>
      )}
    </div>
  );
}
