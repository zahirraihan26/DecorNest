"use client";
import { useState, useEffect, useRef } from "react";
import { Bot, X, Send, Sparkles, MessageSquare, Mic, Image as ImageIcon, ThumbsUp, ThumbsDown } from "lucide-react";

export default function AiConsultant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: "Welcome to DecorNest! I'm your AI Interior Specialist. Looking for a specific style or need help choosing the right sofa?" 
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "That's a great choice! For a modern minimalist look, I'd recommend our Velvet Cloud Sofa paired with the Art Deco Pendant. It brings out a perfect contrast.",
        "Lighting is everything! Warm tones generally work best for living areas to create a cozy atmosphere. Can I show you our Luminous Arts collection?",
        "I can certainly envision that! Would you like me to generate a 3D visualization of that setup for your exact room dimensions?",
        "Incredible taste! Our Walnut Nightstands are currently trending and they pair perfectly with the Nocturnal Serenity bedroom collection."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
    }, 1800);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999] font-sans">
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
          isOpen ? 'bg-zinc-900 rotate-90 scale-90' : 'bg-gradient-to-tr from-amber-600 to-amber-400 hover:scale-110 shadow-[0_0_40px_rgba(217,119,6,0.5)]'
        }`}
        aria-label="AI Assistant"
      >
        <div className={`absolute inset-0 rounded-full bg-amber-500 blur-md opacity-0 transition-opacity duration-500 ${!isOpen && 'group-hover:opacity-50 blur-lg'}`} />
        <div className={`absolute -inset-2 rounded-full border border-amber-500/30 animate-ping opacity-0 ${!isOpen && 'opacity-100'}`} style={{ animationDuration: '3s' }} />
        
        {isOpen ? (
          <X className="w-7 h-7 text-white relative z-10" />
        ) : (
          <Bot className="w-8 h-8 text-white relative z-10" />
        )}
      </button>

      {/* Chat Window */}
      <div className={`absolute bottom-24 right-0 w-[420px] max-w-[calc(100vw-3rem)] h-[620px] max-h-[80vh] bg-white/90 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.2)] border border-white/50 flex flex-col overflow-hidden transition-all duration-500 transform origin-bottom-right ${
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10 pointer-events-none'
      }`}>
        {/* Glow behind chat */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Header */}
        <div className="relative p-6 px-8 flex items-center justify-between border-b border-zinc-100/50 bg-white/50 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-600/20">
              <Sparkles className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-zinc-900 text-lg tracking-tight">AI Stylist</h3>
              <p className="text-xs text-amber-600 font-bold uppercase tracking-widest">Online & Ready</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages Layout */}
        <div ref={scrollRef} className="relative flex-grow overflow-y-auto p-8 space-y-6 scroll-smooth custom-scrollbar">
          <div className="text-center pb-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 bg-zinc-100/50 px-3 py-1 rounded-full">Today</span>
          </div>

          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm mr-3">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div className={`group relative max-w-[80%] p-4 rounded-3xl text-[15px] leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-zinc-900 text-white rounded-tr-sm shadow-xl shadow-zinc-900/10' 
                  : 'bg-white text-zinc-800 border border-zinc-100 rounded-tl-sm shadow-md shadow-zinc-200/20'
              }`}>
                {msg.content}
                
                {msg.role === 'assistant' && i === messages.length - 1 && !isTyping && (
                  <div className="absolute -right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
                    <button className="p-1.5 text-zinc-400 hover:text-amber-500 transition-colors"><ThumbsUp className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 text-zinc-400 hover:text-red-500 transition-colors"><ThumbsDown className="w-3.5 h-3.5" /></button>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start items-end animate-fade-in">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 mb-1 shadow-sm mr-3">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white px-5 py-4 rounded-3xl rounded-tl-sm border border-zinc-100 shadow-md shadow-zinc-200/20 flex items-center gap-1.5">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white/80 backdrop-blur-md border-t border-zinc-100/50">
          {/* Quick Suggestions */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4 pb-1">
            {['Minimalist Decor', 'Boho Style', 'Modern Luxury', 'Lighting Advice'].map((tag) => (
              <button 
                key={tag} 
                onClick={() => setInputValue(tag)}
                className="whitespace-nowrap px-4 py-1.5 bg-zinc-50 border border-zinc-200 hover:border-amber-500/50 hover:bg-amber-50/50 text-xs font-bold text-zinc-600 rounded-full transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-300/20 rounded-[2rem] blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center bg-zinc-50 border border-zinc-200 focus-within:border-amber-500/50 rounded-[1.5rem] p-1.5 transition-all">
              <button className="p-2.5 text-zinc-400 hover:text-amber-600 transition-colors shrink-0">
                <ImageIcon className="w-5 h-5" />
              </button>
              
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about design, products..."
                className="w-full bg-transparent px-2 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none"
              />
              
              <div className="flex items-center gap-1 pr-1 shrink-0">
                <button className={`p-2.5 rounded-xl transition-all ${inputValue ? 'text-amber-600 bg-amber-50' : 'text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100'}`}>
                  <Mic className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    inputValue.trim() 
                      ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30 hover:bg-amber-700' 
                      : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" /> Powered by DecorNest AI Engine
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

