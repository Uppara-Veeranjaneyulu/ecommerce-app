import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Clock, ChevronRight, ShoppingBag, ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchOrders } from '../services/api';
import { generateOrderReport } from '../utils/reportGenerator';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadOrders = async () => {
            try {
                const data = await fetchOrders();
                setOrders(data);
            } catch (error) {
                console.error("Failed to fetch orders:", error);
            } finally {
                setLoading(false);
            }
        };
        loadOrders();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen pt-32 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between mb-12"
            >
                <div>
                    <h1 className="text-4xl font-bold mb-2">Order History</h1>
                    <p className="text-gray-400">Track and manage your previous purchases.</p>
                </div>
                <Link to="/products" className="btn-outline flex items-center gap-2">
                    <ArrowLeft size={20} />
                    Continue Shopping
                </Link>
            </motion.div>

            {orders.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20 bg-surface rounded-3xl border border-white/5"
                >
                    <div className="inline-flex p-6 bg-accent/10 rounded-full mb-6 text-accent">
                        <ShoppingBag size={48} />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">No orders yet</h2>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        Looks like you haven't placed any orders. Start exploring our premium collection today!
                    </p>
                    <Link to="/products" className="btn-primary">
                        Browse Products
                    </Link>
                </motion.div>
            ) : (
                <div className="space-y-6">
                    <AnimatePresence>
                        {orders.map((order, index) => (
                            <motion.div
                                key={order.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card-premium overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-accent/10 rounded-xl text-accent">
                                            <Package size={24} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="text-xl font-bold">#{order.id}</h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === 'Delivered' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-accent/20 text-accent'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                                <span className="flex items-center gap-1">
                                                    <Clock size={14} />
                                                    {new Date(order.date).toLocaleDateString()}
                                                </span>
                                                <span>{order.items.length} items</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0 border-white/5">
                                        <div className="text-right">
                                            <p className="text-sm text-gray-400 mb-1">Total Amount</p>
                                            <p className="text-2xl font-bold text-accent">${order.amount.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => generateOrderReport(order)}
                                                className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all group flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white border border-white/5"
                                                title="Download Report"
                                            >
                                                <Download size={18} className="group-hover:text-accent transition-colors" />
                                                <span className="hidden sm:inline">REPORT</span>
                                            </button>
                                            <button className="p-3 hover:bg-white/5 rounded-xl transition-colors group">
                                                <ChevronRight className="text-gray-400 group-hover:text-accent transition-colors" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {order.items.map((item, idx) => (
                                        <div key={idx} className="relative aspect-square rounded-xl overflow-hidden bg-background border border-white/5 group">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                            />
                                            {item.quantity > 1 && (
                                                <span className="absolute top-2 right-2 bg-accent text-black text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                                                    x{item.quantity}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};

export default OrderHistory;
