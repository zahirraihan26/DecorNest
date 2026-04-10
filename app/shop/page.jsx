import Link from 'next/link';
import { Search, Filter, ArrowRight, Star } from 'lucide-react';

export default function Shop() {
  const products = [
    { id: 1, name: "Velvet Cloud Sofa", price: "$1,299", category: "Furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop", rating: 4.9 },
    { id: 2, name: "Minimalist Oak Table", price: "$850", category: "Dining", image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=800&auto=format&fit=crop", rating: 4.8 },
    { id: 3, name: "Art Deco Pendant", price: "$320", category: "Lighting", image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop", rating: 4.7 },
    { id: 4, name: "Ceramic Orb Vase", price: "$85", category: "Decor", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=800&auto=format&fit=crop", rating: 4.9 },
    { id: 5, name: "Scandinavian Armchair", price: "$590", category: "Furniture", image: "https://images.unsplash.com/photo-1598191950976-599109415a71?q=80&w=800&auto=format&fit=crop", rating: 4.8 },
    { id: 6, name: "Modern Brass Lamp", price: "$240", category: "Lighting", image: "https://images.unsplash.com/photo-1507473885765-e6ed657f4955?q=80&w=800&auto=format&fit=crop", rating: 4.6 },
    { id: 7, name: "Abstract Canvas Art", price: "$450", category: "Decor", image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop", rating: 4.9 },
    { id: 8, name: "Walnut Nightstand", price: "$380", category: "Bedroom", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop", rating: 4.7 },
  ];

  return (
    <main className="min-h-screen pt-24 pb-12 bg-white">
      {/* Header */}
      <div className="bg-zinc-50 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <nav className="flex mb-4 text-sm text-zinc-500 gap-2">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span>/</span>
            <span className="text-zinc-900 font-medium">Shop</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-4">Our Collection</h1>
          <p className="text-lg text-zinc-600 max-w-2xl">
            Explore our curated selection of premium furniture and home decor designed to elevate your living experience.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Filters & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 w-full md:w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-full text-sm font-medium hover:bg-zinc-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-600">
            <span>Sort by:</span>
            <select className="bg-transparent font-medium text-zinc-900 focus:outline-none cursor-pointer">
              <option>Newest Arrivals</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <button className="absolute bottom-4 left-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-md py-3 rounded-xl text-zinc-900 text-sm font-bold shadow-2xl">
                  Quick Add
                </button>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-600 hover:text-red-500 transition-colors cursor-pointer shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
              </div>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">{product.category}</p>
                  <h3 className="font-medium text-zinc-900 group-hover:text-amber-600 transition-colors uppercase text-sm tracking-tight">{product.name}</h3>
                </div>
                <span className="font-bold text-zinc-900 px-3 py-1 bg-zinc-50 rounded-lg text-sm">{product.price}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-amber-500">
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <span className="text-xs font-bold text-zinc-600">{product.rating}</span>
                <span className="text-xs text-zinc-400">(45 reviews)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:border-amber-600 hover:text-amber-600 transition-all">
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-600 text-white font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:border-amber-600 hover:text-amber-600 transition-all">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:border-amber-600 hover:text-amber-600 transition-all">3</button>
            <span className="px-2 text-zinc-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:border-amber-600 hover:text-amber-600 transition-all">12</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:border-amber-600 hover:text-amber-600 transition-all">
              <ArrowRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </div>
    </main>
  );
}
