import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to MiniShop 🛍️</h1>
      <p className="text-lg mb-6">Find the best products at amazing prices.</p>
      <Link
        to="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg"
      >
        Browse Products
      </Link>
    </div>
  );
}
