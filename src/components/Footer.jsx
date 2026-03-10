import React from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingBag,
    Facebook,
    Twitter,
    Instagram,
    Github,
    Mail,
    Phone,
    MapPin,
    ArrowRight
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/5 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="bg-accent p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                                <ShoppingBag className="w-6 h-6 text-black" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white uppercase">
                                UXE_STORE
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Premium gear for the modern professional. Engineered for performance, designed for the minimalist.
                        </p>
                        <div className="flex gap-4">
                            {[Github].map((Icon, i) => (
                                <a key={i} href="https://github.com/Uppara-Veeranjaneyulu/ecommerce-app" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-accent hover:bg-white/10 transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold mb-6 uppercase tracking-widest text-sm text-accent">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'Products', 'Cart', 'Order History'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Policy Links */}
                    <div>
                        <h3 className="font-bold mb-6 uppercase tracking-widest text-sm text-accent">Support</h3>
                        <ul className="space-y-4">
                            {['Shipping Policy', 'Terms of Service', 'Privacy Policy', 'Returns & Refunds'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold mb-6 uppercase tracking-widest text-sm text-accent">Newsletter</h3>
                        <p className="text-gray-400 text-xs mb-4">Stay updated with our latest drops and exclusive offers.</p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="w-full bg-background border border-white/5 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-accent/40 transition-all"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-accent text-black rounded-lg hover:scale-105 transition-transform">
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs">
                        © 2026 UXE_STORE. All rights reserved. Built for performance.
                    </p>
                    <div className="flex items-center gap-8 text-xs text-gray-500">
                        <span className="flex items-center gap-2"><Phone size={14} className="text-accent" /> +1 (555) 000-UXE</span>
                        <span className="flex items-center gap-2"><Mail size={14} className="text-accent" /> support@uxe-store.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
