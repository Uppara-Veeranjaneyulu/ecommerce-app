import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-xl shadow-lg p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto"
      />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-bold mt-2">${product.price}</p>
      <button
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}


