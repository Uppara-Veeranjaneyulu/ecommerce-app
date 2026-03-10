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

  const categories = (() => {
    let rawCategories = [...new Set(products.map(p => p.category))].sort();

    // Remove Shoes and Watches from their current positions
    const shoesIndex = rawCategories.indexOf("Shoes");
    if (shoesIndex > -1) rawCategories.splice(shoesIndex, 1);

    const watchesIndex = rawCategories.indexOf("Watches");
    if (watchesIndex > -1) rawCategories.splice(watchesIndex, 1);

    // Insert Watches in the middle of the remaining list
    const middleIndex = Math.floor(rawCategories.length / 2);
    rawCategories.splice(middleIndex, 0, "Watches");

    // Insert Shoes at the very beginning (will be 2nd after "all")
    rawCategories.unshift("Shoes");

    return ["all", ...rawCategories];
  })();

  const filteredProducts = products.filter(
    (p) =>
      (activeCategory === "all" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* SIDEBAR: Categories */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="lg:sticky lg:top-32 space-y-8">
            <div>
              <h1 className="text-4xl font-black mb-2 tracking-tight">COLLECTIONS</h1>
              <p className="text-gray-500 text-sm">Discover our curated selection of premium gear.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Filter size={18} />
                <h3 className="font-bold uppercase tracking-widest text-xs">Categories</h3>
              </div>

              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap text-left border ${activeCategory === cat
                      ? "bg-accent text-black border-accent"
                      : "text-gray-400 border-white/5 hover:border-white/20 hover:text-white"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Search - Only visible on small screens in sidebar area or moved top */}
            <div className="lg:hidden relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-surface border border-white/5 rounded-xl py-2.5 pl-10 pr-4 w-full focus:outline-none focus:border-accent/30 transition-all text-sm"
              />
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT: Search & Grid */}
        <main className="flex-grow space-y-8">
          {/* Desktop Search bar */}
          <div className="hidden lg:flex justify-between items-center gap-4">
            <div className="relative group w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-accent transition-colors" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-surface border border-white/5 rounded-xl py-2.5 pl-10 pr-4 w-full focus:outline-none focus:border-accent/30 transition-all text-sm"
              />
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
              <SlidersHorizontal size={14} />
              <span>{filteredProducts.length} Products</span>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-40 gap-4">
              <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
              <p className="text-sm font-bold text-gray-500 animate-pulse uppercase tracking-widest">Loading Catalog</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProductCard product={product} addToCart={addToCart} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-40 bg-white/5 rounded-3xl border border-dashed border-white/10">
                  <p className="text-2xl font-black text-white/20 tracking-tighter">NO PRODUCTS FOUND</p>
                  <p className="text-gray-500 text-xs mt-2">Try adjusting your search or filters</p>
                  <button
                    onClick={() => { setSearch(""); setActiveCategory("all"); }}
                    className="mt-6 px-6 py-2 bg-white/5 hover:bg-white/10 text-accent rounded-full font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
