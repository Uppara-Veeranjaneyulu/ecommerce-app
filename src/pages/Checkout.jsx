import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, CreditCard, Lock, ShieldCheck, ArrowRight } from "lucide-react";
import { createOrder } from "../services/api";

export default function Checkout({ cart, clearCart }) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await createOrder({
      items: cart,
      total,
      timestamp: new Date().toISOString()
    });

    if (result.success) {
      clearCart();
      setDone(true);
    }
    setLoading(false);
  };

  if (done) {
    return (
      <div className="max-w-xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-accent/20"
        >
          <CheckCircle className="w-12 h-12 text-accent" />
        </motion.div>
        <h1 className="text-4xl font-black mb-4 tracking-tight uppercase">Order Confirmed</h1>
        <p className="text-gray-500 mb-10 leading-relaxed text-lg">
          Your gear is being prepped for shipment. We've sent a confirmation email with your order details.
        </p>
        <Link to="/products" className="btn-primary inline-flex items-center gap-2">
          CONTINUE SHOPPING <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black mb-12 tracking-tight uppercase">Secure Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Payment Form */}
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleCheckout}
          className="card-premium space-y-8"
        >
          <div>
            <h2 className="flex items-center gap-2 text-xl font-black mb-6 border-b border-white/5 pb-4">
              <CreditCard className="w-5 h-5 text-accent" /> PAYMENT DETAILS
            </h2>

            <div className="space-y-4">
              <div className="grid gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                Card Information
                <div className="bg-background border border-white/5 rounded-xl p-4 flex items-center gap-4">
                  <div className="bg-white/5 p-2 rounded-lg">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    className="bg-transparent border-none focus:ring-0 w-full font-mono text-white tracking-widest"
                    disabled
                  />
                  <div className="flex gap-2">
                    <img src="https://brandcentral.visa.com/content/dam/VBC/brand_assets/logos/visa_logo_600x400.png" className="h-4 opacity-50 grayscale" alt="visa" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                <div>
                  Expiry
                  <input type="text" placeholder="MM/YY" className="bg-background border border-white/5 rounded-xl p-4 w-full mt-2 focus:border-accent/30 focus:outline-none transition-colors" />
                </div>
                <div>
                  CVC
                  <input type="text" placeholder="123" className="bg-background border border-white/5 rounded-xl p-4 w-full mt-2 focus:border-accent/30 focus:outline-none transition-colors" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0" />
            <p className="text-xs text-gray-400 leading-relaxed">
              Your payment is processed securely by Stripe. We do not store your credit card information. All transactions are encrypted.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || cart.length === 0}
            className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            ) : (
              <>PAY ${total.toFixed(2)}</>
            )}
          </button>
        </motion.form>

        {/* Order Review */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="card-premium">
            <h2 className="text-xl font-black mb-6 tracking-tight uppercase">Order Overview</h2>
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-accent">{item.qty}x</span>
                    <span className="text-white line-clamp-1">{item.name}</span>
                  </div>
                  <span className="font-bold">${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Shipping</span>
                <span className="text-accent font-bold uppercase tracking-widest">Calculated at next step</span>
              </div>
              <div className="flex justify-between pt-4">
                <span className="font-black text-lg">TOTAL</span>
                <span className="font-black text-2xl text-accent">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
