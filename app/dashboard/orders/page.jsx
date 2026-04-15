import { Search, Filter, MoreHorizontal, Eye, Download, CheckCircle, Clock, XCircle, ShoppingCart } from 'lucide-react';

export default function OrdersPage() {
  const orders = [
    { id: '#ORD-7829', customer: 'Sarah Jenkins', email: 'sarah.j@example.com', date: 'Oct 24, 2026', items: 3, total: '$1,450.00', status: 'Delivered' },
    { id: '#ORD-7828', customer: 'Michael Chen', email: 'm.chen99@example.com', date: 'Oct 23, 2026', items: 1, total: '$399.00', status: 'Processing' },
    { id: '#ORD-7827', customer: 'Emma Thompson', email: 'emmat@example.com', date: 'Oct 22, 2026', items: 2, total: '$1,038.00', status: 'Shipped' },
    { id: '#ORD-7826', customer: 'David Rodriguez', email: 'david.r@example.com', date: 'Oct 21, 2026', items: 4, total: '$2,150.00', status: 'Cancelled' },
    { id: '#ORD-7825', customer: 'Jessica Alba', email: 'jess.alba@example.com', date: 'Oct 20, 2026', items: 1, total: '$789.00', status: 'Delivered' },
    { id: '#ORD-7824', customer: 'Robert Frost', email: 'rfrost@example.com', date: 'Oct 19, 2026', items: 2, total: '$648.00', status: 'Processing' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Total Orders</h1>
          <p className="text-zinc-500 mt-1">Monitor and manage your recent customer orders.</p>
        </div>
        <button className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-amber-600/20 active:scale-95 flex items-center gap-2">
          <Download className="w-5 h-5" /> Export Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
         <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm font-medium text-zinc-500">Total Orders</p>
            <p className="text-2xl font-bold text-zinc-900 mt-1">1,248</p>
         </div>
         <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm font-medium text-zinc-500">Processing</p>
            <p className="text-2xl font-bold text-amber-600 mt-1">42</p>
         </div>
         <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm font-medium text-zinc-500">Shipped</p>
            <p className="text-2xl font-bold text-blue-600 mt-1">18</p>
         </div>
         <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
            <p className="text-sm font-medium text-zinc-500">Delivered</p>
            <p className="text-2xl font-bold text-green-600 mt-1">1,180</p>
         </div>
      </div>

      <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-zinc-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-zinc-50/50">
          <div className="relative w-full sm:w-96 flex items-center">
            <Search className="w-5 h-5 absolute left-3 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search by Order ID, Customer..." 
              className="w-full pl-10 pr-4 py-2 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-zinc-200 bg-white rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">
                <Filter className="w-4 h-4" /> Filter
              </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                <th className="p-4 border-b border-zinc-200">Order ID</th>
                <th className="p-4 border-b border-zinc-200">Customer</th>
                <th className="p-4 border-b border-zinc-200">Date</th>
                <th className="p-4 border-b border-zinc-200">Items</th>
                <th className="p-4 border-b border-zinc-200">Status</th>
                <th className="p-4 border-b border-zinc-200">Total Amount</th>
                <th className="p-4 border-b border-zinc-200 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-zinc-50/80 transition-colors group">
                  <td className="p-4">
                     <span className="font-bold text-zinc-900">{order.id}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-zinc-900 text-sm">{order.customer}</span>
                      <span className="text-zinc-500 text-xs">{order.email}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-zinc-600">{order.date}</td>
                  <td className="p-4 text-sm text-zinc-600">{order.items}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                      order.status === 'Delivered' ? 'bg-green-50 text-green-700 border-green-200' :
                      order.status === 'Processing' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                      order.status === 'Shipped' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      'bg-red-50 text-red-700 border-red-200'
                    }`}>
                      {order.status === 'Delivered' && <CheckCircle className="w-3.5 h-3.5" />}
                      {order.status === 'Processing' && <Clock className="w-3.5 h-3.5" />}
                      {order.status === 'Cancelled' && <XCircle className="w-3.5 h-3.5" />}
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-zinc-900">{order.total}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 text-zinc-400">
                      <button className="p-1.5 hover:bg-zinc-100 hover:text-amber-600 rounded-md transition-colors" title="View Details">
                         <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 hover:bg-zinc-100 rounded-md transition-colors" title="More Actions">
                         <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-zinc-200 flex items-center justify-between text-sm text-zinc-500 bg-zinc-50/50">
          <span>Showing 1 to 6 of 1,248 orders</span>
          <div className="flex gap-1">
             <button className="px-3 py-1 border border-zinc-200 rounded bg-white hover:bg-zinc-50 disabled:opacity-50">Prev</button>
             <button className="px-3 py-1 border border-zinc-200 rounded bg-white hover:bg-zinc-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
