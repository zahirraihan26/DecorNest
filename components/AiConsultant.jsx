"use client";
import { useState, useEffect, useRef } from "react";
import { Bot, X, Send, Sparkles, MessageSquare, Mic, Image as ImageIcon } from "lucide-react";

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
        "That's a great choice! For a modern minimalist look, I'd recommend our Velvet Cloud Sofa paired with the Art Deco Pendant.",
        "Choosing the right lighting is crucial. Warm tones generally work best for living areas to create a cozy atmosphere.",
        "I can definitely help with that! Would you like me to generate a 3D visualization of that setup for you?",
        "Beautiful! Our Walnut Nightstands are currently trending. They pair perfectly with the Nocturnal Serenity bedroom collection."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
          isOpen ? 'bg-zinc-900 rotate-90' : 'bg-amber-600 hover:scale-110 hover:shadow-amber-500/40'
        }`}
        aria-label="AI Assistant"
      >
        <div className="absolute inset-0 rounded-full bg-amber-600 animate-ping opacity-20 group-hover:opacity-40" />
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Bot className="w-8 h-8 text-white" />
        )}
      </button>

      {/* Chat Window */}
      <div className={`absolute bottom-20 right-0 w-[380px] max-w-[90vw] h-[550px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-zinc-100 flex flex-col overflow-hidden transition-all duration-500 transform origin-bottom-right ${
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10 pointer-events-none'
      }`}>
        {/* Header */}
        <div className="p-6 bg-zinc-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-tight">AI Style Consultant</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Online & Ready</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-zinc-50/50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-amber-600 text-white rounded-tr-none shadow-lg shadow-amber-600/10' 
                  : 'bg-white text-zinc-800 border border-zinc-100 rounded-tl-none shadow-sm'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-zinc-100 flex gap-1 items-center shadow-sm">
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-zinc-100">
          <div className="flex gap-2 mb-3">
            {['Minimalist', 'Bohemian', 'Luxury'].map((tag) => (
              <button 
                key={tag} 
                onClick={() => setInputValue(tag)}
                className="px-3 py-1 bg-zinc-100 hover:bg-zinc-200 text-[10px] font-bold text-zinc-600 rounded-full transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="relative">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your design query..."
              className="w-full pl-4 pr-12 py-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 transition-all placeholder:text-zinc-400"
            />
            <button 
              onClick={handleSend}
              className="absolute right-2 top-1.5 w-10 h-10 bg-amber-600 text-white rounded-xl flex items-center justify-center hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center justify-between mt-3 px-1">
            <div className="flex gap-4">
              <button className="text-zinc-400 hover:text-amber-600 transition-colors"><Mic className="w-4 h-4" /></button>
              <button className="text-zinc-400 hover:text-amber-600 transition-colors"><ImageIcon className="w-4 h-4" /></button>
            </div>
            <span className="text-[10px] text-zinc-400 font-medium">Powered by DecorNest AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
