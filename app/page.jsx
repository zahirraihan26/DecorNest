import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Truck, Play, Award, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-zinc-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/15 via-zinc-950 to-zinc-950 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2664&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-soft-light scale-105" />
          
          {/* Animated decorative element */}
          <div className="absolute top-[20%] -left-20 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] -right-20 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 text-amber-500 backdrop-blur-xl border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            New Spring Collection 2026
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-bold text-white mb-8 tracking-tighter leading-[0.9] md:leading-[0.85]">
            Art of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-amber-200 to-zinc-400">Living</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Where timeless elegance meets modern sophistication. <br className="hidden md:block" /> Curated furniture that transforms houses into homes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/shop" className="group w-full sm:w-auto px-10 py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-all duration-500 shadow-[0_20px_40px_rgba(217,119,6,0.3)] hover:shadow-[0_25px_50px_rgba(217,119,6,0.4)] hover:-translate-y-1 flex items-center justify-center">
              Shop Collections 
              <div className="ml-3 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-amber-600 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
            <Link href="/collections" className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 font-bold rounded-full transition-all duration-500 flex items-center justify-center hover:border-white/30">
              View Lookbook
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
        </div>
      </section>

      {/* Brands / Partners Section (Premium flex) */}
      <section className="py-12 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <p className="text-center text-zinc-400 text-xs font-bold uppercase tracking-[0.3em] mb-10">As Featured In</p>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {['VOGUE', 'ELLE DÉCOR', 'ARCHITECTURAL DIGEST', 'LIVINGETC', 'DWELL'].map((brand) => (
              <span key={brand} className="text-2xl font-serif font-black tracking-tighter text-zinc-800">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-amber-50 rounded-[2rem] flex items-center justify-center text-amber-600 shadow-sm border border-amber-100/50">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">Artisan Craftsmanship</h3>
              <p className="text-zinc-500 leading-relaxed">Each piece is meticulously crafted by master artisans using traditional techniques passed through generations.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-zinc-50 rounded-[2rem] flex items-center justify-center text-zinc-900 shadow-sm border border-zinc-100/50">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">Sustainable Luxury</h3>
              <p className="text-zinc-500 leading-relaxed">We source only the finest eco-friendly materials, ensuring your home reflects both beauty and responsibility.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-amber-50 rounded-[2rem] flex items-center justify-center text-amber-600 shadow-sm border border-amber-100/50">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">White Glove Delivery</h3>
              <p className="text-zinc-500 leading-relaxed">Experience seamless service with our expert assembly team, bringing your vision to life without any effort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Split Section */}
      <section className="py-20 bg-zinc-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-600 rounded-[2rem] -z-0 hidden md:block" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <button className="w-24 h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl text-amber-600 hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 ml-1 fill-current" />
                </button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="text-xs font-bold text-amber-600 uppercase tracking-widest">Our Heritage</div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-zinc-900 leading-[1.1]">Where Design <br/> Meets <span className="text-amber-600">Emotion</span></h2>
              <p className="text-xl text-zinc-600 leading-relaxed max-w-xl">
                Founded on the belief that environment shapes soul, DecorNest has been redefining interior spaces since 1994. We don't just sell furniture; we curate atmospheres that inspire living.
              </p>
              <ul className="space-y-4 pt-4">
                {['Curated European Design', 'Lifetime Warranty', 'Bespoke Consultations'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium text-zinc-900">
                    <div className="w-5 h-5 rounded-full bg-amber-600/10 flex items-center justify-center text-amber-600">
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link href="/about" className="text-zinc-900 font-bold border-b-2 border-amber-600 pb-1 hover:text-amber-600 transition-colors">
                  Learn more about our process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Visualizer Section */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600/20 text-amber-500 border border-amber-600/30 text-[10px] font-bold uppercase tracking-widest mb-8">
                <Sparkles className="w-4 h-4" /> Next-Gen Technology
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">AI-Powered <br/> <span className="text-amber-500 font-serif italic">Visualization</span></h2>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed font-light">
                Not sure if that sofa fits your room? Use our advanced AI visualizer to see any product in your space instantly. Just upload a photo and let our AI do the magic.
              </p>
              <div className="space-y-8">
                {[
                  { title: "Instant 3D Placement", desc: "Realistic shadows and lighting integration." },
                  { title: "Style Harmonization", desc: "AI suggests matching furniture for your existing decor." },
                  { title: "Virtual Renovation", desc: "Change wall colors and flooring in one click." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 shrink-0 shadow-xl">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-12 px-10 py-5 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition-all duration-500 flex items-center gap-3 shadow-2xl shadow-amber-600/20">
                Try AI Visualizer <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-zinc-900 rounded-[3rem] border border-white/10 overflow-hidden relative group shadow-[0_0_50px_rgba(217,119,6,0.15)]">
                {/* Simulated Before/After Comparison */}
                <div className="absolute inset-0">
                   <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Before" />
                </div>
                <div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-amber-500 z-10 transition-all duration-1000 group-hover:w-full">
                   <img src="https://images.unsplash.com/photo-1583847268964-b28e50b58b34?q=80&w=1200&auto=format&fit=crop" className="w-[200%] h-full object-cover" alt="After" />
                   <div className="absolute top-10 left-10 py-2 px-4 bg-amber-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">AI Generated Vision</div>
                </div>
                <div className="absolute bottom-10 right-10 py-2 px-4 bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full z-20 border border-white/10">Original Space</div>
                
                {/* Scanner animation */}
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.8)] z-30 group-hover:left-full transition-all duration-1000" />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Categories (Enhanced Grid) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-5xl font-serif font-bold text-zinc-900 mb-6 tracking-tight">Curated Spaces</h2>
              <p className="text-zinc-500 text-lg">Browse by destination to find the perfect harmony for your home.</p>
            </div>
            <Link href="/shop" className="px-8 py-4 border border-zinc-200 rounded-full font-bold hover:bg-zinc-50 transition-colors flex items-center gap-2">
              Explore All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]">
            <Link href="/shop" className="md:col-span-8 group relative rounded-[2.5rem] overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1583847268964-b28e50b58b34?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Living Room"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <h3 className="text-4xl font-serif font-bold text-white mb-2">The Gallery Lounge</h3>
                <p className="text-white/80 font-medium">Explore Living Room &rarr;</p>
              </div>
            </Link>
            
            <Link href="/shop" className="md:col-span-4 group relative rounded-[2.5rem] overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Lighting"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Luminous Arts</h3>
                <p className="text-white/80 font-medium">Shop Lighting &rarr;</p>
              </div>
            </Link>
            
            <Link href="/shop" className="md:col-span-4 group relative rounded-[2.5rem] overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Bedroom"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Nocturnal Serenity</h3>
                <p className="text-white/80 font-medium">View Bedroom &rarr;</p>
              </div>
            </Link>
            
            <Link href="/shop" className="md:col-span-8 group relative rounded-[2.5rem] overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Decor"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <h3 className="text-4xl font-serif font-bold text-white mb-2">Curated Accents</h3>
                <p className="text-white/80 font-medium">Discover Decor &rarr;</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section (Premium Gradient) */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_#d97706_0%,_transparent_50%)] opacity-30" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Award className="w-12 h-12 text-amber-500 mx-auto mb-8 animate-bounce" />
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">Elegance in Your <br/><span className="italic text-amber-500">Inbox</span></h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join 50,000+ design enthusiasts. Receive early access to new collections, seasonal sales, and interior inspiration.
          </p>
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-8 py-5 rounded-full bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 backdrop-blur-xl transition-all"
              required
            />
            <button 
              type="submit" 
              className="px-10 py-5 rounded-full bg-amber-600 text-white font-bold hover:bg-amber-700 transition-all shadow-xl shadow-amber-600/20 active:scale-95"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-zinc-600 text-xs tracking-widest font-medium">NO SPAM. JUST PURE INSPIRATION.</p>
        </div>
      </section>
    </div>
  );
}

