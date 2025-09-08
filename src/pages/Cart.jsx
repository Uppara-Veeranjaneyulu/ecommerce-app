import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart, removeFromCart, updateQty }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border p-4 rounded"
              >
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>${item.price} x {item.qty}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      className="px-2 bg-gray-200"
                      onClick={() => updateQty(item.id, item.qty - 1)}
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      className="px-2 bg-gray-200"
                      onClick={() => updateQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                    <button
                      className="ml-4 text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="font-bold">${(item.price * item.qty).toFixed(2)}</p>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mt-6">Total: ${total.toFixed(2)}</h2>

          <Link
            to="/checkout"
            className="block mt-4 bg-green-600 text-white px-6 py-3 rounded-lg text-center"
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
}
