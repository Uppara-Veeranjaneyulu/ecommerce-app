import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Star,
    ShoppingCart,
    ArrowLeft,
    ShieldCheck,
    Truck,
    RefreshCw,
    Plus,
    Minus,
    ChevronRight
} from 'lucide-react';
import { fetchProducts } from '../services/api';

const ProductDetails = ({ addToCart }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const allProducts = await fetchProducts();
            const foundProduct = allProducts.find(p => p.id === parseInt(id));

            if (foundProduct) {
                setProduct(foundProduct);
                setRelatedProducts(allProducts.filter(p => p.category === foundProduct.category && p.id !== foundProduct.id).slice(0, 4));
            } else {
                navigate('/products');
            }
            setLoading(false);
        };
        loadData();
        window.scrollTo(0, 0);
    }, [id, navigate]);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Back Button */}
            <Link
                to="/products"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors mb-12 group"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Collections
            </Link>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Product Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative aspect-square rounded-3xl overflow-hidden bg-surface border border-white/5 group shadow-2xl shadow-black/50"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </motion.div>

                {/* Product Info */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-4 py-1.5 bg-accent/10 text-accent text-sm font-bold rounded-full border border-accent/20">
                                {product.category}
                            </span>
                            <div className="flex items-center gap-1 text-accent font-bold">
                                <Star size={18} fill="currentColor" />
                                <span>{product.rating}</span>
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4 leading-tight">
                            {product.name}
                        </h1>
                        <p className="text-3xl font-bold text-accent">${product.price.toFixed(2)}</p>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-accent/30 pl-6 italic">
                        "{product.description}"
                    </p>

                    <div className="space-y-6 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-4 bg-background border border-white/5 rounded-2xl p-2 px-4 shadow-inner">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="p-2 hover:bg-white/5 rounded-xl transition-colors text-white"
                                >
                                    <Minus size={20} />
                                </button>
                                <span className="text-xl font-bold w-12 text-center text-white">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="p-2 hover:bg-white/5 rounded-xl transition-colors text-white"
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="btn-primary flex-1 flex items-center justify-center gap-3 py-4 text-xl"
                            >
                                <ShoppingCart size={24} />
                                Add to Cart
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { icon: <ShieldCheck size={20} />, label: "Secured with Stripe" },
                                { icon: <Truck size={20} />, label: "Express Shipping" },
                                { icon: <RefreshCw size={20} />, label: "30-Day Returns" }
                            ].map((feat, i) => (
                                <div key={feat.label} className="flex items-center gap-3 p-4 bg-surface rounded-2xl border border-white/5 text-gray-400 text-sm">
                                    <span className="text-accent">{feat.icon}</span>
                                    {feat.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Features Detail Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-32 grid md:grid-cols-2 gap-12 items-center"
            >
                <div className="space-y-8">
                    <h2 className="text-4xl font-black text-white uppercase tracking-tight">The Ultimate Gear <span className="text-accent underline decoration-accent/30 underline-offset-8">For You.</span></h2>
                    <div className="space-y-6">
                        {[
                            "Premium build quality with industrial-grade materials.",
                            "Exclusively designed with the Dark Forest aesthetic.",
                            "Tested for durability in extreme conditions.",
                            "Hand-selected and curated for professional performance."
                        ].map((p, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-1">
                                    <ChevronRight size={14} />
                                </div>
                                <p className="text-gray-300 text-lg">{p}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/5 group">
                    <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200"
                        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                        alt="feature"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-10 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white">
                            <Package size={48} className="animate-pulse" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Related Products */}
            <div className="mt-32">
                <h2 className="text-3xl font-black text-white mb-12 uppercase tracking-tighter">You May Also <span className="text-accent">Like</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <AnimatePresence>
                        {relatedProducts.map(p => (
                            <Link key={p.id} to={`/product/${p.id}`} className="group space-y-4">
                                <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 bg-surface relative">
                                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold group-hover:text-accent transition-colors truncate">{p.name}</h3>
                                    <p className="text-accent font-black">${p.price.toFixed(2)}</p>
                                </div>
                            </Link>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
