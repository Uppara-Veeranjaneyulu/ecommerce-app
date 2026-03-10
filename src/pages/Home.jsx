import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Zap } from "lucide-react";
import heroBanner from "../assets/hero_banner_dark_green.jpg";

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="card-premium flex flex-col items-center text-center gap-4"
  >
    <div className="bg-accent/10 p-4 rounded-2xl text-accent">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Background Mesh/Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
          <img
            src={heroBanner}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-60 scale-105"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 border border-accent/20 rounded-full">
              New Spring Collection 2026
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              ELEVATE YOUR <br />
              <span className="gradient-text">ESTHETIC.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the fusion of high-performance gear and minimalist dark forest design. Engineered for the modern professional.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/products" className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center">
                Shop Collection <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/products" className="btn-outline w-full sm:w-auto text-center">
                View Catalog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Users", val: "50k+" },
            { label: "Products", val: "1.2k+" },
            { label: "Delivery Rate", val: "99.9%" },
            { label: "Happy Clients", val: "15k" }
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-white mb-1">{s.val}</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-4">WHY UXE_STORE?</h2>
          <div className="h-1.5 w-20 bg-accent mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Shield}
            title="Secure Payments"
            desc="Every transaction is encrypted with industry-standard Stripe security."
          />
          <FeatureCard
            icon={Zap}
            title="Express Delivery"
            desc="Get your premium gear delivered within 48 hours globally."
          />
          <FeatureCard
            icon={Star}
            title="Premium Quality"
            desc="We source only the finest materials for our limited edition collections."
          />
        </div>
      </section>
    </div>
  );
}
