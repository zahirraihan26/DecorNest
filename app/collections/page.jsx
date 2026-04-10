import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Collections() {
  const collections = [
    {
      id: 1,
      title: "The Minimalist Soul",
      description: "Clean lines, neutral tones, and essential forms that bring tranquility to any space.",
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1200&auto=format&fit=crop",
      itemCount: 24,
      tag: "Limited Edition"
    },
    {
      id: 2,
      title: "Artisanal Textures",
      description: "Handcrafted pieces featuring raw materials and intricate details that tell a story.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
      itemCount: 18,
      tag: "Seasonal"
    },
    {
      id: 3,
      title: "Modern Heritage",
      description: "Classic designs reimagined for contemporary living rooms and executive spaces.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      itemCount: 32,
      tag: "Bestseller"
    },
    {
      id: 4,
      title: "Urban Sanctuary",
      description: "Functional yet beautiful solutions for compact city living and creative studios.",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=1200&auto=format&fit=crop",
      itemCount: 15,
      tag: "New Arrival"
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-12 bg-zinc-50">
      {/* Hero Header */}
      <div className="relative py-24 overflow-hidden bg-zinc-900 border-b border-zinc-800">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-600/20 text-amber-500 border border-amber-600/30 text-xs font-bold uppercase tracking-widest mb-6">
            Curated Series
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Design Collections</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our seasonal lookbooks and curated series designed by international artisans to transform your atmosphere.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {collections.map((collection, index) => (
            <Link 
              key={collection.id} 
              href={`/shop?collection=${collection.title.toLowerCase().replace(' ', '-')}`}
              className="group"
            >
              <div className="relative h-[500px] overflow-hidden rounded-3xl mb-8 shadow-2xl">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="px-8 py-4 bg-white text-zinc-900 rounded-full font-bold shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Lookbook <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-zinc-900 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                    {collection.tag}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-amber-600 tracking-widest uppercase">
                  <span>Category Series</span>
                  <span>{collection.itemCount} Items</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">
                  {collection.title}
                </h2>
                <p className="text-lg text-zinc-600 font-light max-w-lg">
                  {collection.description}
                </p>
                <div className="pt-4 flex items-center gap-2 group-hover:gap-4 transition-all duration-300 text-zinc-900 font-bold">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Seasonal Promo */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block opacity-60">
             <img 
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Promo"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-xl">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Upcoming <br/><span className="text-amber-500 italic">Winter Solstice</span> 2026</h2>
             <p className="text-lg text-zinc-400 mb-10">
                Be the first to experience our upcoming collection focusing on warmth, layered textiles, and candlelit ambiance.
             </p>
             <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-all shadow-lg shadow-amber-600/20">
                Register for Early Access
             </button>
          </div>
        </div>
      </div>
    </main>
  );
}
