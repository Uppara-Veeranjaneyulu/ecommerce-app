import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn, SignIn, SignUp } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderHistory from "./pages/OrderHistory";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    setCart(cart.map((item) => (item.id === id ? { ...item, qty } : item)));
  };

  const clearCart = () => setCart([]);

  return (
    <Router>
      <div className="min-h-screen bg-background text-gray-100 selection:bg-accent/30 selection:text-white">
        <Navbar cartCount={cart.reduce((sum, i) => sum + i.qty, 0)} />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  removeFromCart={removeFromCart}
                  updateQty={updateQty}
                />
              }
            />
            <Route
              path="/orders"
              element={
                <>
                  <SignedIn>
                    <OrderHistory />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <SignedIn>
                    <Checkout cart={cart} clearCart={clearCart} />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route
              path="/sign-in/*"
              element={
                <div className="flex items-center justify-center min-h-[80vh]">
                  <SignIn routing="path" path="/sign-in" />
                </div>
              }
            />
            <Route
              path="/sign-up/*"
              element={
                <div className="flex items-center justify-center min-h-[80vh]">
                  <SignUp routing="path" path="/sign-up" />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
