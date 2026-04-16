import Link from 'next/link';
import { Home, LayoutDashboard, ShoppingBag, Users, Settings, PieChart, Menu, Search, Bell, TrendingUp } from 'lucide-react';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-zinc-200 hidden md:flex flex-col sticky top-0 h-screen">
        <div className="h-20 flex items-center px-8 border-b border-zinc-100">
          <Link href="/" className="flex items-center gap-2">
             <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-600/20">
                <span className="text-white font-serif text-lg font-bold">D</span>
             </div>
             <span className="text-xl font-serif font-bold text-zinc-900 tracking-tighter">DecorNest</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto custom-scrollbar">
          <p className="px-4 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Main Menu</p>
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-amber-50 text-amber-600 rounded-xl font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/dashboard/analytics" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-amber-600 hover:bg-amber-50 rounded-xl font-medium transition-colors">
            <PieChart className="w-5 h-5" /> Analytics
          </Link>
          <Link href="/dashboard/conversion" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-amber-600 hover:bg-amber-50 rounded-xl font-medium transition-colors">
            <TrendingUp className="w-5 h-5" /> Conversion
          </Link>
          <Link href="/dashboard/products" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-amber-600 hover:bg-amber-50 rounded-xl font-medium transition-colors">
            <ShoppingBag className="w-5 h-5" /> Products
          </Link>
          <Link href="/dashboard/orders" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-amber-600 hover:bg-amber-50 rounded-xl font-medium transition-colors">
            <ShoppingBag className="w-5 h-5" /> Orders
          </Link>
          <Link href="/dashboard/customers" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-amber-600 hover:bg-amber-50 rounded-xl font-medium transition-colors">
            <Users className="w-5 h-5" /> Customers
          </Link>
          
          <p className="px-4 text-xs font-bold text-zinc-400 uppercase tracking-widest mt-8 mb-4">Settings</p>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-amber-600 hover:bg-amber-50 rounded-xl font-medium transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>
        
        <div className="p-4 border-t border-zinc-100">
          <div className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-50 rounded-xl cursor-pointer transition-colors">
            <div className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-white shadow-sm overflow-hidden">
               <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900">Admin User</p>
              <p className="text-xs text-zinc-500">admin@decornest.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-6 sm:px-10 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 text-zinc-500 hover:bg-zinc-100 rounded-lg">
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden sm:flex items-center bg-zinc-100 rounded-full px-4 py-2 border border-transparent focus-within:bg-white focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all">
              <Search className="w-4 h-4 text-zinc-400" />
              <input type="text" placeholder="Search anything..." className="bg-transparent border-none focus:outline-none text-sm ml-2 w-64 text-zinc-800 placeholder-zinc-400" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-zinc-500 hover:bg-zinc-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-amber-600 rounded-full border-2 border-white"></span>
            </button>
            <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-amber-600 transition-colors">
              View Store
            </Link>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
