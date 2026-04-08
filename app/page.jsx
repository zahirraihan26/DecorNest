import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center bg-zinc-900">
        <div className="absolute inset-0 overflow-hidden">
          {/* We use a colored gradient placeholder to create a premium aesthetic without actual images */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-zinc-900 to-zinc-900 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2664&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 backdrop-blur-md border border-amber-500/30 text-sm font-medium mb-6 animate-fade-in-up">
            New Summer Collection 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Everyday Space</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Discover curated collections of timeless furniture and aesthetic decor designed to bring warmth, harmony, and elegant beauty directly into your home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/shop" className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] flex items-center justify-center">
              Shop Collection <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/about" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-medium rounded-full transition-all duration-300 flex items-center justify-center">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Nationwide Free</h3>
              <p className="text-gray-600">Enjoy complimentary shipping on all orders over $99. Fast, secure, and right to your doorstep.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Satisfaction Guarantee</h3>
              <p className="text-gray-600">We stand by our quality. Return any item within 30 days for a full refund, no questions asked.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">Every piece in our collection is handpicked and crafted with high-quality, sustainable materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
              <p className="text-gray-600">Find exactly what you need to complete your space.</p>
            </div>
            <Link href="/categories" className="hidden md:flex text-amber-600 hover:text-amber-700 font-medium items-center transition-colors">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Living Room", img: "https://images.unsplash.com/photo-1583847268964-b28e50b58b34?q=80&w=600&auto=format&fit=crop" },
              { title: "Bedroom", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop" },
              { title: "Lighting", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop" },
              { title: "Decor Accents", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop" }
            ].map((category, i) => (
              <Link href={`/category/${category.title.toLowerCase().replace(' ', '-')}`} key={i} className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10" />
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" 
                  style={{ backgroundImage: `url(${category.img})` }}
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:-translate-y-2 transition-transform duration-300">{category.title}</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 flex items-center">
                    Explore <ArrowRight className="ml-1 w-3 h-3" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-24 bg-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join the DecorNest Community</h2>
          <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, early access to new collections, and inspiring interior design tips directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/30 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-4 rounded-full bg-white text-amber-600 font-bold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
