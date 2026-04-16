import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar,
  Download,
  BarChart3,
  PieChart,
  MoreHorizontal
} from 'lucide-react';

export default function AnalyticsPage() {
  const stats = [
    { 
      title: 'Total Revenue', 
      value: '$45,231.89', 
      change: '+20.1%', 
      isPositive: true,
      icon: <DollarSign className="w-5 h-5" />
    },
    { 
      title: 'Active Users', 
      value: '+2350', 
      change: '+18.1%', 
      isPositive: true,
      icon: <Users className="w-5 h-5" />
    },
    { 
      title: 'Conversion Rate', 
      value: '3.24%', 
      change: '-1.2%', 
      isPositive: false,
      icon: <Activity className="w-5 h-5" />
    },
    { 
      title: 'Bounce Rate', 
      value: '42.1%', 
      change: '+2.4%', 
      isPositive: false,
      icon: <TrendingUp className="w-5 h-5" />
    },
  ];

  // Dummy data for the bar chart
  const barChartData = [
    { label: 'Jan', value: 45 },
    { label: 'Feb', value: 30 },
    { label: 'Mar', value: 65 },
    { label: 'Apr', value: 40 },
    { label: 'May', value: 85 },
    { label: 'Jun', value: 55 },
    { label: 'Jul', value: 90 },
    { label: 'Aug', value: 75 },
    { label: 'Sep', value: 60 },
    { label: 'Oct', value: 95 },
    { label: 'Nov', value: 80 },
    { label: 'Dec', value: 110 },
  ];

  const topProducts = [
    { name: 'Velvet Sofa', category: 'Furniture', sales: 420, revenue: '$12,600' },
    { name: 'Minimalist Lamp', category: 'Lighting', sales: 380, revenue: '$3,800' },
    { name: 'Oak Dining Table', category: 'Furniture', sales: 215, revenue: '$18,275' },
    { name: 'Ceramic Vase Series', category: 'Decor', sales: 540, revenue: '$4,320' },
    { name: 'Abstract Wall Art', category: 'Art', sales: 190, revenue: '$5,700' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Analytics Overview</h1>
          <p className="text-zinc-500 mt-1">Detailed breakdown of your store's performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 shadow-sm cursor-pointer hover:bg-zinc-50">
            <Calendar className="w-4 h-4 mr-2 text-zinc-400" />
            Last 30 Days
          </div>
          <button className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-amber-600/20 active:scale-95 flex items-center gap-2">
            <Download className="w-5 h-5" /> Export Report
          </button>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start">
               <div className="p-3 bg-zinc-50 group-hover:bg-amber-50 rounded-xl text-zinc-600 group-hover:text-amber-600 transition-colors">
                 {stat.icon}
               </div>
               <span className={`flex items-center gap-1 text-sm font-bold px-2 py-1 rounded-full ${
                 stat.isPositive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
               }`}>
                 {stat.isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                 {stat.change}
               </span>
            </div>
            <div className="mt-4">
              <p className="text-zinc-500 text-sm font-medium">{stat.title}</p>
              <h3 className="text-3xl font-bold text-zinc-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
           <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-lg font-bold text-zinc-900">Revenue Overview</h2>
                <p className="text-sm text-zinc-500 mt-1">Monthly revenue performance</p>
              </div>
              <div className="flex items-center gap-2 p-1 bg-zinc-100 rounded-lg">
                 <button className="px-3 py-1.5 bg-white text-zinc-900 font-medium text-xs rounded-md shadow-sm">Revenue</button>
                 <button className="px-3 py-1.5 text-zinc-500 hover:text-zinc-900 font-medium text-xs rounded-md transition-colors">Orders</button>
              </div>
           </div>

           {/* Custom CSS Bar Chart purely for UI demonstration */}
           <div className="h-64 flex items-end gap-2 sm:gap-4 mt-4">
              {barChartData.map((data, idx) => {
                 // Calculate percentage height relative to highest value (110)
                 const heightPercent = (data.value / 110) * 100;
                 return (
                   <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                      <div className="w-full relative flex-1 flex items-end rounded-t-sm">
                         <div 
                           className="w-full bg-amber-200 group-hover:bg-amber-500 transition-colors rounded-t-md cursor-pointer relative"
                           style={{ height: `${heightPercent}%` }}
                         >
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                              {data.value}k
                            </div>
                         </div>
                      </div>
                      <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-800 transition-colors">{data.label}</span>
                   </div>
                 )
              })}
           </div>
        </div>

        {/* Top Products Table */}
        <div className="lg:col-span-1 bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-zinc-900">Top Products</h2>
            <button className="p-2 text-zinc-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col gap-5 overflow-y-auto pr-1 custom-scrollbar">
            {topProducts.map((product, idx) => (
              <div key={idx} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                     <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 group-hover:text-amber-600 transition-colors line-clamp-1">{product.name}</p>
                    <p className="text-xs text-zinc-500">{product.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-zinc-900">{product.revenue}</p>
                  <p className="text-xs text-zinc-500">{product.sales} sales</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-2.5 border border-zinc-200 text-zinc-600 font-medium text-sm rounded-xl hover:bg-zinc-50 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}
