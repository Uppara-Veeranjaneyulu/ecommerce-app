import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft, CreditCard } from "lucide-react";

export default function Cart({ cart, removeFromCart, updateQty }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-black tracking-tight flex items-center gap-4">
          <ShoppingCart className="w-10 h-10 text-accent" /> YOUR CART
        </h1>
        <Link to="/products" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-accent transition-colors">
          <ArrowLeft className="w-4 h-4" /> CONTINUE SHOPPING
        </Link>
      </div>

      {cart.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-32 bg-surface/30 rounded-3xl border border-white/5"
        >
          <ShoppingCart className="w-16 h-16 text-white/5 mx-auto mb-6" />
          <h2 className="text-2xl font-black text-gray-400 mb-4">EMPTY CART</h2>
          <Link to="/products" className="btn-primary inline-block">
            Explore Collections
          </Link>
        </motion.div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="card-premium flex items-center gap-6 p-4"
                >
                  <div className="w-24 h-24 bg-background rounded-xl p-2 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>

                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-black text-white">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-600 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3 bg-background rounded-lg p-1 border border-white/5">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="hover:bg-white/5 p-1 rounded transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-black">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="hover:bg-white/5 p-1 rounded transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="font-black text-white">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="card-premium sticky top-24">
              <h2 className="text-xl font-black mb-6 tracking-tight">ORDER SUMMARY</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-white">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Shipping</span>
                  <span className="text-accent font-bold">FREE</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between">
                  <span className="font-black">TOTAL</span>
                  <span className="font-black text-2xl text-accent">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link to="/checkout" className="btn-primary w-full flex items-center justify-center gap-2">
                Checkout <CreditCard className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
