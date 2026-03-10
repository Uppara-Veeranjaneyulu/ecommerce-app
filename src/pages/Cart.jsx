import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft, CreditCard, AlertTriangle } from "lucide-react";

export default function Cart({ cart, removeFromCart, updateQty }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      removeFromCart(itemToDelete.id);
      setShowConfirm(false);
      setItemToDelete(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-12">
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
                        onClick={() => handleDeleteClick(item)}
                        className="text-gray-600 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3 bg-background rounded-lg p-1 border border-white/5">
                        <button
                          onClick={() => item.qty > 1 ? updateQty(item.id, item.qty - 1) : handleDeleteClick(item)}
                          className="hover:bg-white/5 p-1 rounded transition-colors text-gray-400 hover:text-white"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-black text-white">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="hover:bg-white/5 p-1 rounded transition-colors text-gray-400 hover:text-white"
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
              <h2 className="text-xl font-black mb-6 tracking-tight text-white">ORDER SUMMARY</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white font-bold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Shipping</span>
                  <span className="text-accent font-black">FREE</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between">
                  <span className="font-black text-white">TOTAL</span>
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

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConfirm(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-surface border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              {/* Accent blur */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full -mr-16 -mt-16" />

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 mb-6">
                  <AlertTriangle size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Are you sure?</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  You are about to remove <span className="text-white font-bold">"{itemToDelete?.name}"</span> from your cart. This action cannot be undone.
                </p>

                <div className="flex items-center gap-3 w-full">
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="flex-1 py-3 px-6 rounded-xl border border-white/5 text-gray-400 font-bold text-sm tracking-wider hover:bg-white/5 transition-all"
                  >
                    CANCEL
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="flex-1 py-3 px-6 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wider transition-all shadow-lg shadow-red-600/20"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
