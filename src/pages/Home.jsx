import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Shield, Zap, TrendingUp, Mail, Layers, Cpu, Compass, Sofa, Briefcase } from "lucide-react";
import heroBanner from "../assets/hero_banner_dark_green.jpg";
import { fetchProducts } from "../services/api";
import Footer from "../components/Footer";

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="card-premium flex flex-col items-center text-center gap-4 border border-white/5"
  >
    <div className="bg-accent/10 p-4 rounded-2xl text-accent">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const CategoryCard = ({ title, img, count, icon: Icon }) => (
  <Link to="/products" className="group relative overflow-hidden rounded-3xl aspect-[4/5] md:aspect-square">
    <img
      src={img}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <div className="bg-accent/10 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center text-accent mb-4 border border-accent/20">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">{title}</h3>
      <p className="text-accent text-xs font-bold tracking-widest uppercase">{count} Products</p>
    </div>
  </Link>
);

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrending = async () => {
      const all = await fetchProducts();
      // Mock trending by picking high-rating products
      setTrending(all.sort((a, b) => b.rating - a.rating).slice(0, 4));
      setLoading(false);
    };
    loadTrending();
  }, []);

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
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
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

      {/* Featured Categories */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">THE <span className="text-accent">COLLECTIONS</span></h2>
            <p className="text-gray-500 max-w-md">Curated gear categories designed to streamline your workflow and lifestyle.</p>
          </div>
          <Link to="/products" className="flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
            Browse All <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <CategoryCard
            title="Electronics"
            img="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800"
            count="10"
            icon={Cpu}
          />
          <CategoryCard
            title="Watches"
            img="https://images.unsplash.com/photo-1508685096489-7aac29a8a70c?auto=format&fit=crop&q=80&w=800"
            count="5"
            icon={TrendingUp}
          />
          <CategoryCard
            title="Shoes"
            img="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800"
            count="6"
            icon={Zap}
          />
          <CategoryCard
            title="Gadgets"
            img="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800"
            count="8"
            icon={Cpu}
          />
          <CategoryCard
            title="Spectacles"
            img="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800"
            count="4"
            icon={Compass}
          />
          <CategoryCard
            title="Gear"
            img="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
            count="12"
            icon={Layers}
          />
          <CategoryCard
            title="Lifestyle"
            img="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
            count="15"
            icon={Compass}
          />
          <CategoryCard
            title="Accessories"
            img="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800"
            count="5"
            icon={Star}
          />
          <CategoryCard
            title="Furniture"
            img="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
            count="15"
            icon={Sofa}
          />
          <CategoryCard
            title="Home Office"
            img="https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=800"
            count="10"
            icon={Briefcase}
          />
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="flex items-center justify-center gap-2 text-accent font-bold mb-4 uppercase tracking-widest text-xs">
            <TrendingUp size={16} /> Seasonal Favorites
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tighter">Trending <span className="text-accent underline decoration-accent/20">Now</span></h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trending.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group space-y-4 text-left">
                <div className="aspect-square rounded-3xl overflow-hidden bg-background border border-white/5 relative">
                  <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={product.name} />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold text-accent uppercase border border-accent/20">
                    Hot Deal
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold group-hover:text-accent transition-colors truncate">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-accent font-black">${product.price.toFixed(2)}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 font-bold">
                      <Star size={12} className="text-accent" fill="currentColor" /> {product.rating}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="relative rounded-[3rem] overflow-hidden bg-accent p-12 md:p-24 text-center group">
          <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-5 transition-opacity" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <Mail className="w-16 h-16 text-black mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-black text-black mb-8 leading-tight uppercase tracking-tighter">
              JOIN THE <br className="hidden md:block" /> INNER CIRCLE.
            </h2>
            <p className="text-black/70 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto">
              Get early access to limited edition drops, secret sales, and professional workflow tips.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your professional email"
                className="flex-1 px-6 py-4 bg-black/10 border border-black/20 rounded-2xl focus:outline-none placeholder:text-black/40 text-black font-bold"
              />
              <button className="bg-black text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-transform uppercase tracking-widest text-sm">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          {[
            { label: "Active Users", val: "50k+" },
            { label: "Products", val: "1.2k+" },
            { label: "Delivery Rate", val: "99.9%" },
            { label: "Happy Clients", val: "15k" }
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-white mb-1 tracking-tighter">{s.val}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Values Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs">The UXE Standard</span>
          <h2 className="text-4xl md:text-5xl font-black mt-6 mb-4 tracking-tighter uppercase">WHY CHOOSE <span className="text-accent">US?</span></h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <FeatureCard
            icon={Shield}
            title="Industrial Security"
            desc="Military-grade encryption for every transaction. Your data is your property."
          />
          <FeatureCard
            icon={Zap}
            title="Neural Speed"
            desc="Global express logistics that gets your gear to your door within 48 hours."
          />
          <FeatureCard
            icon={Star}
            title="Absolute Quality"
            desc="We don't do mass production. Each piece is a limited edition masterpiece."
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
