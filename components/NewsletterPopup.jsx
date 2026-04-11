"use client";
import { useState, useEffect } from "react";
import { X, Gift, Sparkles, ArrowRight } from "lucide-react";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem("newsletter_shown");
      if (!hasSeen) {
        setIsVisible(true);
      }
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem("newsletter_shown", "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic
    closePopup();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 bg-zinc-950/40 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-scale-in">
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 flex items-center justify-center text-zinc-900 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Content */}
        <div className="md:w-1/2 relative min-h-[300px]">
          <img 
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Interior Design"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-600 rounded-full text-white text-[10px] font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" /> Exclusive Offer
            </div>
            <h2 className="text-3xl font-serif font-bold text-white leading-tight">Unlock Your <br/>Dream Space</h2>
          </div>
        </div>

        {/* Form Content */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white">
          <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-8">
            <Gift className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight">Join the Nest Elite</h3>
          <p className="text-zinc-500 mb-8 leading-relaxed">
            Subscribe now and get <span className="text-amber-600 font-bold">15% OFF</span> your first purchase. Plus, weekly interior inspiration directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all font-medium"
                required
              />
            </div>
            <button 
              type="submit"
              className="group w-full py-4 bg-amber-600 text-white font-bold rounded-2xl hover:bg-amber-700 transition-all shadow-xl shadow-amber-600/20 flex items-center justify-center gap-2"
            >
              Get My 15% Discount
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[10px] text-zinc-400 text-center uppercase tracking-widest font-medium">Valid for new subscribers only</p>
          </form>
        </div>
      </div>
    </div>
  );
}
