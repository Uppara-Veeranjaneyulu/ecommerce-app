import React from "react";
import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";

export default function ProductCard({ product, addToCart }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card-premium h-full flex flex-col group cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-background mb-4 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
          <Star className="w-3 h-3 text-accent fill-accent" />
          <span className="text-[10px] font-bold text-white">{product.rating}</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col">
        <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">
          {product.category}
        </span>
        <h2 className="text-lg font-black leading-tight text-white mb-2 line-clamp-1">
          {product.name}
        </h2>
        <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 uppercase font-bold">Price</span>
          <span className="text-xl font-black text-white">${product.price}</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="bg-accent hover:bg-emerald-500 p-3 rounded-xl transition-all active:scale-90 group/btn shadow-lg shadow-accent/20"
        >
          <Plus className="w-5 h-5 text-black" />
        </button>
      </div>
    </motion.div>
  );
}


