import React from "react";
import { Link } from "react-router-dom";
import { UserButton, SignedIn, SignedOut, SignInButton, useUser, useClerk } from "@clerk/clerk-react";
import { ShoppingCart, Home, Package, ShoppingBag, User, LogOut, Menu, Search } from "lucide-react";

export default function Navbar({ cartCount }) {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <nav className="glass-nav px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-accent p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <ShoppingBag className="w-6 h-6 text-black" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white group-hover:text-accent transition-colors uppercase">
            UXE_STORE
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Home className="w-4 h-4" /> Home
          </Link>
          <Link to="/products" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Package className="w-4 h-4" /> Products
          </Link>
          <SignedIn>
            <Link to="/orders" className="flex items-center gap-2 hover:text-accent transition-colors">
              <ShoppingBag className="w-4 h-4" /> Orders
            </Link>
          </SignedIn>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/cart" className="relative group">
            <ShoppingCart className="w-6 h-6 hover:text-accent transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-background shadow-lg group-hover:scale-110 transition-transform">
                {cartCount}
              </span>
            )}
          </Link>

          <div className="h-6 w-px bg-white/10" />

          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-9 h-9 border border-white/10"
                }
              }}
            />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn-primary py-2 px-5 text-sm">Sign In</button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
