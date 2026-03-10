import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, CreditCard, Lock, ShieldCheck, ArrowRight } from "lucide-react";
import { createOrder } from "../services/api";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useUser } from "@clerk/clerk-react";

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ cart, clearCart, total, setDone, setSentTo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    // In a real app, you would create a PaymentIntent on the server
    // and use stripe.confirmCardPayment here.
    // For this demonstration, we'll simulate the Stripe validation.

    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (stripeError) {
      setError(stripeError.message);
      setLoading(false);
      return;
    }

    // Simulate server-side order creation
    const result = await createOrder({
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.qty,
        image: item.image
      })),
      amount: total,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      paymentMethodId: paymentMethod.id,
      timestamp: new Date().toISOString()
    });

    if (result.success) {
      clearCart();
      setSentTo(result.sentTo);
      setDone(true);
    } else {
      setError("Failed to process order. Please try again.");
    }
    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      onSubmit={handleSubmit}
      className="card-premium space-y-8"
    >
      <div>
        <h2 className="flex items-center gap-2 text-xl font-black mb-6 border-b border-white/5 pb-4 text-white">
          <CreditCard className="w-5 h-5 text-accent" /> PAYMENT DETAILS
        </h2>

        <div className="space-y-6">
          <div className="grid gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
            Card Information
            <div className="bg-background border border-white/5 rounded-xl p-4 transition-all focus-within:border-accent/50">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#ffffff',
                      fontFamily: '"Inter", sans-serif',
                      '::placeholder': {
                        color: '#4b5563',
                      },
                    },
                    invalid: {
                      color: '#ef4444',
                    },
                  },
                }}
              />
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm bg-red-400/10 p-4 rounded-xl border border-red-400/20"
            >
              {error}
            </motion.div>
          )}
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
        disabled={loading || !stripe || cart.length === 0}
        className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {loading ? (
          <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
        ) : (
          <>PAY ${total.toFixed(2)}</>
        )}
      </button>
    </motion.form>
  );
};

export default function Checkout({ cart, clearCart }) {
  const [done, setDone] = useState(false);
  const [sentTo, setSentTo] = useState("");
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

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
        <h1 className="text-4xl font-black mb-4 tracking-tight uppercase text-white">Order Confirmed</h1>
        <p className="text-gray-400 mb-2 leading-relaxed text-lg">
          Your gear is being prepped for shipment.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 text-sm">
          <p className="text-gray-400 mb-1 italic">Confirmation email sent to:</p>
          <p className="text-accent font-bold text-lg">{sentTo || "your account email"}</p>
        </div>
        <p className="text-gray-500 mb-10">
          You can track your purchase in your
          <Link to="/orders" className="text-accent hover:underline mx-1">Order History</Link>.
        </p>
        <Link to="/products" className="btn-primary inline-flex items-center gap-2">
          CONTINUE SHOPPING <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">
      <h1 className="text-4xl font-black mb-12 tracking-tight uppercase text-white">Secure Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} clearCart={clearCart} total={total} setDone={setDone} setSentTo={setSentTo} />
        </Elements>

        {/* Order Review */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="card-premium">
            <h2 className="text-xl font-black mb-6 tracking-tight uppercase text-white">Order Overview</h2>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 no-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-sm py-2 border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-background border border-white/5 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div>
                      <span className="text-white font-bold block line-clamp-1">{item.name}</span>
                      <span className="text-accent text-xs">{item.qty} x ${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <span className="font-bold text-white">${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Subtotal</span>
                <span className="text-white">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Shipping</span>
                <span className="text-emerald-400 font-bold uppercase tracking-widest text-[10px]">Free Shipping</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-white/5">
                <span className="font-black text-lg text-white">TOTAL</span>
                <span className="font-black text-2xl text-accent">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
