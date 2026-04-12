"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, Search, User, X, LayoutDashboard, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled 
            ? 'py-4' 
            : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-700 mx-auto ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-2xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] px-6 py-3 max-w-5xl' 
              : 'bg-transparent px-4 max-w-7xl'
          }`}>
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="group flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg ${
                  isScrolled ? 'bg-amber-600 shadow-amber-600/30' : 'bg-amber-600 shadow-amber-600/40'
                }`}>
                  <span className="text-white font-serif text-xl font-bold">D</span>
                </div>
                <span className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-zinc-900' : 'text-white'} transition-colors duration-500`}>
                  DecorNest
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <div className={`flex items-center p-1 rounded-full ${isScrolled ? 'bg-zinc-100/50' : 'bg-white/10 backdrop-blur-md'}`}>
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    className={`relative px-5 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 group ${
                      isScrolled ? 'text-zinc-600 hover:text-zinc-900 hover:bg-white shadow-sm hover:shadow-md' : 'text-zinc-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/dashboard" className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                isScrolled ? 'text-zinc-600 hover:text-amber-600 bg-zinc-50 hover:bg-amber-50' : 'text-white bg-white/10 hover:bg-white/20'
              }`}>
                <LayoutDashboard className="w-4 h-4" />
                Admin
              </Link>
              <div className={`w-px h-6 mx-2 ${isScrolled ? 'bg-zinc-200' : 'bg-white/20'}`} />
              
              <button className={`p-2.5 rounded-full transition-all duration-300 group ${
                isScrolled ? 'text-zinc-600 hover:bg-zinc-100 hover:text-amber-600' : 'text-white hover:bg-white/10'
              }`}>
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button className={`p-2.5 rounded-full transition-all duration-300 group ${
                isScrolled ? 'text-zinc-600 hover:bg-zinc-100 hover:text-amber-600' : 'text-white hover:bg-white/10'
              }`}>
                <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button className={`relative p-2.5 rounded-full transition-all duration-300 group ${
                isScrolled ? 'text-zinc-600 hover:bg-zinc-100 hover:text-amber-600' : 'text-white hover:bg-white/10'
              }`}>
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className={`absolute top-1 right-1 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 transition-colors ${
                  isScrolled ? 'bg-amber-600 text-white border-white' : 'bg-white text-zinc-900 border-zinc-900'
                }`}>
                  3
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2 rounded-xl transition-colors ${isScrolled ? 'text-zinc-800 bg-zinc-100' : 'text-white bg-white/10'}`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] bg-zinc-950/20 backdrop-blur-sm transition-opacity duration-500 ${
        mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setMobileMenuOpen(false)} />

      {/* Mobile Navigation Panel */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[110] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.8,0,0.2,1)] ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-zinc-100">
            <span className="text-2xl font-serif font-bold tracking-tighter text-zinc-900">DecorNest</span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6 space-y-2 flex-grow">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-4 text-xl font-bold text-zinc-800 hover:text-amber-600 border-b border-zinc-50 group transition-colors"
              >
                {link.name}
                <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-amber-600 group-hover:translate-x-2 transition-all" />
              </Link>
            ))}
            
            <Link 
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-4 text-xl font-bold text-amber-600 bg-amber-50 rounded-2xl px-4 mt-6 group transition-colors"
            >
              Admin Dashboard
              <LayoutDashboard className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          
          <div className="p-6 bg-zinc-50">
            <div className="flex justify-around">
              <button className="flex flex-col items-center gap-2 text-zinc-500 hover:text-amber-600 transition-colors">
                <div className="p-4 bg-white rounded-2xl shadow-sm"><Search className="w-6 h-6" /></div>
                <span className="text-xs font-bold">Search</span>
              </button>
              <button className="flex flex-col items-center gap-2 text-zinc-500 hover:text-amber-600 transition-colors">
                <div className="p-4 bg-white rounded-2xl shadow-sm"><User className="w-6 h-6" /></div>
                <span className="text-xs font-bold">Account</span>
              </button>
              <button className="flex flex-col items-center gap-2 text-zinc-500 hover:text-amber-600 transition-colors relative">
                <div className="p-4 bg-white rounded-2xl shadow-sm"><ShoppingCart className="w-6 h-6" /></div>
                <span className="absolute top-2 right-2 bg-amber-600 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">3</span>
                <span className="text-xs font-bold">Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


