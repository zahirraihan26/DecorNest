import Link from 'next/link';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-orange-500">
              DecorNest
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
              Shop
            </Link>
            <Link href="/collections" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
              Collections
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-5">
            <button className="text-gray-600 hover:text-amber-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-amber-600 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-amber-600 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button className="text-gray-600 hover:text-amber-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
