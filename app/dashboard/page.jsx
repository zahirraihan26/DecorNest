import { TrendingUp, Users, DollarSign, ShoppingBag, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: 'Total Revenue', value: '$124,563', trend: '+14.5%', isPositive: true, icon: DollarSign },
    { title: 'Active Users', value: '8,432', trend: '+2.4%', isPositive: true, icon: Users },
    { title: 'Total Orders', value: '3,214', trend: '-1.2%', isPositive: false, icon: ShoppingBag },
    { title: 'Conversion Rate', value: '4.8%', trend: '+0.6%', isPositive: true, icon: TrendingUp },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-zinc-500 mt-1">Welcome back! Here's what's happening with your store today.</p>
        </div>
        <button className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-amber-600/20 active:scale-95">
          Download Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-[1.5rem] border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-full ${stat.isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                  {stat.isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {stat.trend}
                </div>
              </div>
              <h3 className="text-zinc-500 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-zinc-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area */}
        <div className="bg-white p-6 rounded-[1.5rem] border border-zinc-100 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-zinc-900">Revenue Overview</h3>
            <select className="bg-zinc-50 border border-zinc-200 text-zinc-700 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block p-2">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-[300px] w-full flex items-end justify-between px-2 pb-2 mt-4 space-x-2 relative">
            {/* Simple CSS Chart */}
            <div className="absolute top-0 w-full border-t border-zinc-100 border-dashed" />
            <div className="absolute top-1/4 w-full border-t border-zinc-100 border-dashed" />
            <div className="absolute top-1/2 w-full border-t border-zinc-100 border-dashed" />
            <div className="absolute top-3/4 w-full border-t border-zinc-100 border-dashed" />
            
            {[40, 60, 30, 80, 50, 90, 70, 45, 65, 85, 55, 75].map((height, i) => (
              <div key={i} className="relative w-full group flex justify-center h-full items-end z-10">
                <div 
                  className="w-full max-w-[2rem] bg-amber-500/20 rounded-t-lg relative group-hover:bg-amber-500/30 transition-colors"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute top-0 w-full bg-amber-600 rounded-t-lg transition-all group-hover:shadow-[0_0_15px_rgba(217,119,6,0.5)]" style={{ height: '30%' }} />
                  {/* Tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-12 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-bold py-1 px-2 rounded-md whitespace-nowrap transition-opacity pointer-events-none z-20">
                    ${(height * 1234).toLocaleString()}
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 rotate-45" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs font-medium text-zinc-400 px-4">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-[1.5rem] border border-zinc-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-zinc-900">Recent Orders</h3>
            <button className="text-sm font-medium text-amber-600 hover:text-amber-700">View All</button>
          </div>
          <div className="space-y-6">
            {[
              { id: '#ORD-092', user: 'Emma Watson', item: 'Velvet Cloud Sofa', price: '$1,299', status: 'Processing' },
              { id: '#ORD-091', user: 'James Bond', item: 'Art Deco Pendant', price: '$249', status: 'Shipped' },
              { id: '#ORD-090', user: 'Bruce Wayne', item: 'Walnut Nightstand', price: '$399', status: 'Delivered' },
              { id: '#ORD-089', user: 'Diana Prince', item: 'Luminous Arts Lamp', price: '$189', status: 'Processing' },
            ].map((order, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center border border-zinc-100 group-hover:border-amber-200 transition-colors">
                    <ShoppingBag className="w-5 h-5 text-zinc-500 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">{order.item}</h4>
                    <p className="text-xs text-zinc-500">{order.user} &bull; {order.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-zinc-900">{order.price}</p>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${
                    order.status === 'Delivered' ? 'text-green-600' :
                    order.status === 'Shipped' ? 'text-blue-600' : 'text-amber-600'
                  }`}>
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* AI Insights Section */}
      <div className="bg-gradient-to-r from-zinc-950 to-zinc-900 p-8 rounded-[1.5rem] relative overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
               AI Insight
             </div>
             <h3 className="text-2xl font-serif font-bold text-white mb-2">Demand Prediction</h3>
             <p className="text-zinc-400">Our AI model predicts a 24% increase in demand for 'Velvet Cloud Sofa' next week based on trending search patterns. Consider increasing inventory.</p>
          </div>
          <button className="whitespace-nowrap px-6 py-3 bg-white text-zinc-950 font-bold rounded-xl hover:bg-zinc-100 transition-colors">
             Manage Inventory
          </button>
        </div>
      </div>
    </div>
  );
}
