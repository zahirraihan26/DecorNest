"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, Search, User, X } from 'lucide-react';

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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl py-3 border-b border-gray-100/50 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-amber-600/20">
                <span className="text-white font-serif text-xl font-bold">D</span>
              </div>
              <span className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-zinc-900' : 'text-zinc-900 md:text-white'} transition-colors duration-300`}>
                DecorNest
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-300 group ${
                  isScrolled ? 'text-zinc-600 hover:text-amber-600' : 'text-zinc-600 md:text-white/90 md:hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-amber-600' : 'bg-amber-500 md:bg-white'
                }`} />
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className={`p-2 rounded-full transition-all duration-300 hover:bg-zinc-100 ${
              isScrolled ? 'text-zinc-600' : 'text-zinc-600 md:text-white md:hover:bg-white/10'
            }`}>
              <Search className="w-5 h-5" />
            </button>
            <button className={`p-2 rounded-full transition-all duration-300 hover:bg-zinc-100 ${
              isScrolled ? 'text-zinc-600' : 'text-zinc-600 md:text-white md:hover:bg-white/10'
            }`}>
              <User className="w-5 h-5" />
            </button>
            <button className={`relative p-2 rounded-full transition-all duration-300 hover:bg-zinc-100 ${
              isScrolled ? 'text-zinc-600' : 'text-zinc-600 md:text-white md:hover:bg-white/10'
            }`}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-amber-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-zinc-800' : 'text-zinc-800 md:text-white'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-medium text-zinc-800 hover:text-amber-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <div className="flex space-x-6">
              <Search className="w-6 h-6 text-zinc-600" />
              <User className="w-6 h-6 text-zinc-600" />
            </div>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-zinc-600" />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

