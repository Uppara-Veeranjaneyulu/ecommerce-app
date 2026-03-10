import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/api";

export default function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const load = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    load();
  }, []);

  const categories = ["all", ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(
    (p) =>
      (activeCategory === "all" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-black mb-2 tracking-tight">COLLECTIONS</h1>
          <p className="text-gray-500 text-sm">Discover our curated selection of premium gear.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* Search bar */}
          <div className="relative group flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-surface border border-white/5 rounded-xl py-2.5 pl-10 pr-4 w-full focus:outline-none focus:border-accent/30 transition-all text-sm"
            />
          </div>

          {/* Category Filter Desktop */}
          <div className="flex items-center gap-2 p-1 bg-surface border border-white/5 rounded-xl overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${activeCategory === cat
                  ? "bg-accent text-black"
                  : "text-gray-500 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
          <p className="text-sm font-bold text-gray-500 animate-pulse uppercase tracking-widest">Loading Catalog</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} addToCart={addToCart} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl font-black text-white/20">NO PRODUCTS FOUND</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("all"); }}
                className="mt-4 text-accent hover:underline font-bold text-sm uppercase tracking-widest"
              >
                Reset Filters
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
